var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var firstPosX = [60, 260, 460, 660]; //第一次进去的时候Y统一为400，移到0的位置
var MakeOption = (function (_super) {
    __extends(MakeOption, _super);
    function MakeOption() {
        var _this = _super.call(this) || this;
        _this.moveUpIdx = 0;
        _this.clickIdx = 0;
        _this.moveDownIdx = 0;
        /**当前运行的是第几个 */
        _this.showType = 0;
        //当前工具存放类
        _this.tool = [];
        _this.skinName = MakeOptionSkin;
        return _this;
    }
    MakeOption.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        GameManager.getInstance().addEventListener(SetEvent.BONUS_CLICKIDX, this.onDataChanged, this);
    };
    //第一次的时候
    MakeOption.prototype.firstInit = function () {
        console.log('第一次的时候');
        this.firstContent.visible = true;
        this.secondContent.visible = false;
        this.thirdContent.visible = false;
        this.maskRect.visible = true;
        this.tool = [];
        for (var i = 0; i < this.firstContent.numChildren; i++) {
            var Tools = this.firstContent.getChildAt(i);
            this.tool.push(Tools);
            Tools.setValue('1_' + i);
        }
        this.moveUpIdx = 0;
        this.moveUp(0);
    };
    MakeOption.prototype.moveUp = function (num) {
        var _this = this;
        if (num === void 0) { num = 0; }
        var ty = 180;
        if (num == 1) {
            ty = 163;
        }
        if (num == 1 && this.moveUpIdx % 2 != 0) {
            ty = 303;
        }
        egret.Tween.get(this.tool[this.moveUpIdx]).to({ y: ty }, 180).call(function () {
            if (_this.moveUpIdx < _this.tool.length - 1) {
                _this.moveUpIdx++;
                _this.moveUp(num);
            }
            else {
                _this.maskRect.visible = false;
            }
        });
    };
    MakeOption.prototype.moveSelfUp = function () {
        var _this = this;
        SoundManager.getInstance().playEffect(SoundConst.CHOOSETOOLS);
        switch (this.showType) {
            case 1:
                for (var i = 0; i < this.firstContent.numChildren; i++) {
                    var Tools = this.firstContent.getChildAt(i);
                    // this.tool.push(Tools)
                    Tools.removeTool();
                }
                break;
            case 2:
                for (var i = 0; i < this.secondContent.numChildren; i++) {
                    var Tools = this.secondContent.getChildAt(i);
                    // this.tool.push(Tools)
                    Tools.removeTool();
                }
                break;
            default:
                for (var i = 0; i < this.thirdContent.numChildren; i++) {
                    var Tools = this.thirdContent.getChildAt(i);
                    // this.tool.push(Tools)
                    Tools.removeTool();
                }
                break;
        }
        //第三次选球杆是y 142
        console.log("--------第" + this.showType + "次，第" + this.clickIdx + "根");
        var upY = 124;
        if (this.showType == 3) {
            upY = 142;
        }
        egret.Tween.get(this.tool[this.clickIdx]).to({ y: upY }, 200).call(function () {
            _this.moveDownIdx = 0;
            _this.moveDown();
        });
    };
    MakeOption.prototype.moveDown = function () {
        var _this = this;
        if (this.clickIdx == this.moveDownIdx && this.moveDownIdx < this.tool.length - 1) {
            this.moveDownIdx++;
            this.moveDown();
            return;
        }
        egret.Tween.get(this.tool[this.moveDownIdx]).to({ y: 600 }, 200).call(function () {
            if (_this.moveDownIdx == _this.tool.length - 1) {
                _this.moveSelfDown();
            }
            else {
                _this.moveDownIdx++;
                _this.moveDown();
            }
        });
    };
    MakeOption.prototype.moveSelfDown = function () {
        var _this = this;
        egret.Tween.get(this.tool[this.clickIdx]).to({ y: 600 }, 200).call(function () {
            // console.log('?????', this.showType);
            var data = {
                'num': _this.showType,
                'idx': _this.clickIdx //哪一个
            };
            // console.log(this.showType + "== 第几次，哪一个 ==" + this.clickIdx);
            if (_this.showType != 3) {
                Commond.sendBonus(_this.showType, _this.clickIdx);
            }
            GameManager.getInstance().dispatchEventWith(SetEvent.TOOLS_SHOW, false, data);
        });
    };
    MakeOption.prototype.onDataChanged = function (e) {
        // console.log('注册', e)
        switch (e.type) {
            case SetEvent.BONUS_CLICKIDX:
                this.maskRect.visible = true;
                this.clickIdx = e.data.idx; //哪一个
                this.showType = e.data.num; //第几次
                this.moveSelfUp();
                break;
        }
    };
    /**第二次选项的时候 */
    MakeOption.prototype.secondInit = function () {
        this.secondContent.visible = true;
        this.firstContent.visible = false;
        this.thirdContent.visible = false;
        this.maskRect.visible = true;
        this.tool = [];
        console.log('第二次', this.secondContent.numChildren);
        for (var i = 0; i < this.secondContent.numChildren; i++) {
            var Tool_1 = this.secondContent.getChildAt(i);
            this.tool.push(Tool_1);
            Tool_1.setValue('2_' + i);
        }
        this.moveUpIdx = 0;
        this.moveUp(1);
    };
    /**第三次初始化 */
    MakeOption.prototype.thirdInit = function () {
        this.firstContent.visible = false;
        this.secondContent.visible = false;
        this.thirdContent.visible = true;
        this.maskRect.visible = true;
        this.tool = [];
        for (var i = 0; i < this.thirdContent.numChildren; i++) {
            var Tool_2 = this.thirdContent.getChildAt(i);
            this.tool.push(Tool_2);
            Tool_2.setValue('3_' + i);
        }
        this.moveUpIdx = 0;
        this.moveUp();
    };
    return MakeOption;
}(eui.Component));
__reflect(MakeOption.prototype, "MakeOption");
/**工具球杆类 */
var Tool = (function (_super) {
    __extends(Tool, _super);
    function Tool() {
        var _this = _super.call(this) || this;
        _this.isButton = false;
        _this.skinName = ToolSkin;
        return _this;
    }
    /**设置皮肤 */
    Tool.prototype.setValue = function (num) {
        //前面的是第几次，后面的是下边
        this.icon.source = num + '_png';
        var tempIdx = Number(num.substr(2));
        this.typeNum = Number(num.substr(0, 1));
        this.idx = tempIdx;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
    };
    Tool.prototype.removeTool = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
    };
    Tool.prototype.onTab = function () {
        // console.log("点击球杆 == " + this.idx)
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        var data = {
            'num': this.typeNum,
            'idx': this.idx //哪一个
        };
        // console.log(data)
        GameManager.getInstance().dispatchEventWith(SetEvent.BONUS_CLICKIDX, false, data);
    };
    return Tool;
}(eui.Component));
__reflect(Tool.prototype, "Tool");
//# sourceMappingURL=MakeOption.js.map