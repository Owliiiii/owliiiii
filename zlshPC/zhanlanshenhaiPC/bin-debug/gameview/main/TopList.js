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
var TopList = (function (_super) {
    __extends(TopList, _super);
    function TopList() {
        var _this = _super.call(this) || this;
        _this.isShow = false;
        _this.isCanMove = false;
        _this.moveState = 0;
        return _this;
    }
    TopList.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.leftBtn.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onLeftBtnRollOver, this);
        this.leftBtn.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onLeftBtnRollOut, this);
        this.rightBtn.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRightBtnRollOver, this);
        this.rightBtn.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRightBtnRollOut, this);
        core.TimerManager.instance.addTick(-20, -1, this.onFrame, this);
        mouse.setButtonMode(this.leftBtn, true);
        mouse.setButtonMode(this.rightBtn, true);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
    };
    TopList.prototype.onBegin = function (e) {
        if (!this.isCanMove)
            return;
        this.tx = e.stageX;
        this.ty = e.stageY;
    };
    TopList.prototype.onMove = function (e) {
        if (!this.isCanMove)
            return;
        var dx = e.stageX - this.tx;
        this.tx = e.stageX;
        this.ty = e.stageY;
        for (var i = 0; i < this.contentGroup.numChildren; i++) {
            var item = this.contentGroup.getChildAt(i);
            item.goIndexStep(dx);
        }
        this.startpox += dx;
        if (this.startpox >= 40) {
            this.leftBtn.visible = false;
        }
        else {
            this.leftBtn.visible = true;
        }
        var cWidth = this.contentGroup.numChildren * TopList.WIDTH + (this.contentGroup.numChildren - 1) * TopList.DISTANCE;
        if (this.startpox <= this.contentGroup.width - cWidth - 40) {
            this.rightBtn.visible = false;
        }
        else {
            this.rightBtn.visible = true;
        }
    };
    TopList.prototype.onEnd = function (e) {
        if (!this.isCanMove)
            return;
        if (this.startpox > 40) {
            for (var i = 0; i < this.contentGroup.numChildren; i++) {
                var item = this.contentGroup.getChildAt(i);
                item.goIndexAimation(40);
            }
            this.startpox = 40;
        }
        var cWidth = this.contentGroup.numChildren * TopList.WIDTH + (this.contentGroup.numChildren - 1) * TopList.DISTANCE;
        if (this.startpox < this.contentGroup.width - cWidth - 40) {
            for (var i = 0; i < this.contentGroup.numChildren; i++) {
                var item = this.contentGroup.getChildAt(i);
                item.goIndexAimation(this.contentGroup.width - cWidth - 40);
            }
            this.startpox = this.contentGroup.width - cWidth - 40;
        }
    };
    TopList.prototype.show = function () {
        this.isShow = true;
        egret.Tween.get(this.parent).to({ y: 0, alpha: 1 }, 300);
    };
    TopList.prototype.hide = function () {
        this.isShow = false;
        egret.Tween.get(this.parent).to({ y: -154, alpha: 0 }, 300);
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.setSelected(-1);
    };
    TopList.prototype.setArr = function (arr) {
        var _this = this;
        egret.Tween.get(this.contentGroup).to({ alpha: 0 }, 200).call(function () {
            _this.contentGroup.removeChildren();
            for (var i = 0; i < arr.length; i++) {
                var item = new ShowItem();
                item.addEventListener('rollchangeover', _this.onRollOver, _this);
                item.addEventListener('rollchangeout', _this.onRollOut, _this);
                _this.contentGroup.addChild(item);
                item.setData(arr[i]);
                item.y = 123 / 2;
                item.index = i;
            }
            _this.updataPosition();
            egret.Tween.get(_this.contentGroup).to({ alpha: 1 }, 200);
        }, this);
    };
    TopList.prototype.updataPosition = function () {
        //先判断贴边还是居中
        //当前内容占用宽度
        var cWidth = this.contentGroup.numChildren * TopList.WIDTH + (this.contentGroup.numChildren - 1) * TopList.DISTANCE;
        //起点
        var startX;
        if (cWidth >= this.contentGroup.width) {
            startX = 40;
            this.leftBtn.visible = false;
            this.rightBtn.visible = true;
            this.isCanMove = true;
        }
        else {
            startX = this.contentGroup.width / 2 - cWidth / 2;
            this.leftBtn.visible = false;
            this.rightBtn.visible = false;
            this.isCanMove = false;
        }
        this.startpox = startX;
        for (var i = 0; i < this.contentGroup.numChildren; i++) {
            var item = this.contentGroup.getChildAt(i);
            item.goIndex(startX);
        }
    };
    TopList.prototype.onRollOver = function (e) {
        egret.clearTimeout(this.cleart);
        var index = e.data;
        //前面
        for (var i = 0; i < index; i++) {
            var item_1 = this.contentGroup.getChildAt(i);
            item_1.goAnimation(-1);
        }
        //后面
        for (var i = index + 1; i < this.contentGroup.numChildren; i++) {
            var item_2 = this.contentGroup.getChildAt(i);
            item_2.goAnimation(1);
        }
        //当前index得回归
        var item = this.contentGroup.getChildAt(index);
        item.goBack();
    };
    TopList.prototype.onRollOut = function (e) {
        var _this = this;
        var index = e.data;
        this.cleart = egret.setTimeout(function () {
            //所有
            for (var i = 0; i < _this.contentGroup.numChildren; i++) {
                var item = _this.contentGroup.getChildAt(i);
                item.goBack();
            }
        }, this, 100);
    };
    TopList.prototype.onLeftBtnRollOver = function () {
        this.moveState = -1;
        this.leftBtn.source = 'left_hover_png';
    };
    TopList.prototype.onLeftBtnRollOut = function () {
        this.moveState = 0;
        this.leftBtn.source = 'left_png';
    };
    TopList.prototype.onRightBtnRollOver = function () {
        this.moveState = 1;
        this.rightBtn.source = 'left_hover_png';
    };
    TopList.prototype.onRightBtnRollOut = function () {
        this.moveState = 0;
        this.rightBtn.source = 'left_png';
    };
    TopList.prototype.onFrame = function () {
        if (this.moveState == -1) {
            if (this.startpox <= 30) {
                for (var i = 0; i < this.contentGroup.numChildren; i++) {
                    var item = this.contentGroup.getChildAt(i);
                    item.goIndexStep(10);
                }
                this.startpox += 10;
                this.rightBtn.visible = true;
            }
            else {
                this.leftBtn.visible = false;
            }
        }
        else if (this.moveState == 1) {
            var cWidth = this.contentGroup.numChildren * TopList.WIDTH + (this.contentGroup.numChildren - 1) * TopList.DISTANCE;
            if (this.startpox >= this.contentGroup.width - cWidth + 10 - 40) {
                for (var i = 0; i < this.contentGroup.numChildren; i++) {
                    var item = this.contentGroup.getChildAt(i);
                    item.goIndexStep(-10);
                }
                this.startpox -= 10;
                this.leftBtn.visible = true;
            }
            else {
                this.rightBtn.visible = false;
            }
        }
    };
    TopList.DISTANCE = 9;
    TopList.WIDTH = 76;
    TopList.HEIGHT = 76;
    return TopList;
}(eui.Component));
__reflect(TopList.prototype, "TopList");
//# sourceMappingURL=TopList.js.map