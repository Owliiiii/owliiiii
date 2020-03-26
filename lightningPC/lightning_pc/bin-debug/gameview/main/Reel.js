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
/**
 * 基础滚动组件
 */
var Reel = (function (_super) {
    __extends(Reel, _super);
    function Reel() {
        var _this = _super.call(this) || this;
        _this.isAction = false;
        /**
         * 当前盘面
         */
        _this.curReelData = [];
        /**
         * 滚动速度
         */
        _this.reelSpeed = 100;
        /**
         * 当前时间
         */
        _this.curTime = 0;
        /** * 滚轮索引*/
        _this.index = 0;
        /*** aIndex*/
        _this.aIndex = 0;
        /*** stopStaet*/
        _this.stopState = false;
        /**判断旋转是不是需要增加时间并且是加多少（当出现两个以上的免费游戏图标才变化，-1为不加） */
        _this.isAddTime = -1;
        _this.skinName = ReelSkin;
        return _this;
    }
    Reel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
    };
    Reel.prototype.showAnimation = function (i) {
        var item = this.kGroup.getChildAt(i + 1);
        item.goAnimation();
    };
    Reel.prototype.hideAnimation = function (i) {
        var item = this.kGroup.getChildAt(i + 1);
        item.hideAnimation();
    };
    Reel.prototype.resumeAllAnimation = function () {
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            item.resumeAnimation();
        }
    };
    Reel.prototype.pauseAllAnimation = function () {
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            item.stopAniamtion();
        }
    };
    Reel.prototype.clearAllAnimation = function () {
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            item.hideAnimation();
        }
    };
    Reel.prototype.onFrame = function () {
        if (this.isAction) {
            for (var i = 0; i < this.kGroup.numChildren; i++) {
                var item = this.kGroup.getChildAt(i);
                item.y += this.reelSpeed;
                var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
                if (item.y >= this.height) {
                    var t1 = GameConfig.speedPlay ? Reel.QUK_TIME : Reel.TIME;
                    var t3 = GameConfig.speedPlay ? [100, 250, 400, 550, 700, 850] : [0, 700, 1130, 1400, 1730, 2000];
                    var t4 = this.isAddTime > 0 ? 2100 * this.isAddTime : 0;
                    if (egret.getTimer() - this.curTime > t1 + t3[this.index] + t4 && this.curReelData.length > 0) {
                        // console.log('停止的idx', this.index)
                        this.isAction = false;
                        this.overReel();
                        return;
                    }
                    else {
                        item.y = this.kGroup.getChildAt(0).y - this.kGroup.getChildAt(0).height;
                        item.value = 'M' + Math.floor(Math.random() * 5 + 1);
                        item.setVir(true);
                        this.kGroup.setChildIndex(item, 0);
                        if (this.isAddTime > 0 && ui.gameScence.stopReelIdx >= 0 && (ui.gameScence.stopReelIdx + 1) == this.index) {
                            ui.gameScence.playLight(this.index);
                        }
                    }
                }
            }
        }
    };
    Reel.prototype.overReel = function () {
        var _this = this;
        if (this.curReelData.length == 0) {
            return;
        }
        ;
        egret.Tween.removeTweens(this);
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        var _loop_1 = function (i) {
            var item = this_1.kGroup.getChildAt(i);
            egret.Tween.removeTweens(item);
            var ty = void 0;
            ty = i * item.height - item.height;
            item.y = this_1.stopState ? ty : i * item.height - item.height + 100;
            item.setVir(false);
            var value = i > 0 && i < 5 ? this_1.curReelData[i - 1] : 'M' + Math.floor(Math.random() * 5 + 1);
            item.value = value;
            var t = this_1.stopState ? 0 : 300;
            /**niuGroup 层级的判断 */
            if (value == 'M1') {
                var reItem = this_1.niuGroup.getChildAt(i);
                reItem.value = value;
                reItem.y = this_1.stopState ? ty : i * item.height - item.height + 100;
                egret.Tween.removeTweens(reItem);
                egret.Tween.get(reItem).to({ y: ty }, t, egret.Ease.cubicOut);
            }
            if (value == 'C1' && (i > 0 && i <= 5)) {
                if (ui.gameScence.freeshowCount == 0) {
                    SoundManager.getInstance().playEffect(SoundConst.freeLogo1);
                }
                else if (ui.gameScence.freeshowCount == 1) {
                    SoundManager.getInstance().playEffect(SoundConst.freeLogo2);
                }
                else {
                    SoundManager.getInstance().playEffect(SoundConst.freeLogo4);
                }
                ui.gameScence.pent.c1PlayAc(this_1.index, i - 1);
                ui.gameScence.freeshowCount++;
            }
            if (this_1.index == 5 && vo.GameData.rollFreeTitle.length > 0) {
                var title = vo.GameData.rollFreeTitle;
                for (var k = 0; k < title.length; k++) {
                    egret.clearInterval(title[k].timer);
                    title[k].value = 'C1';
                    title[k].obj.icons.y = 0;
                }
                vo.GameData.rollFreeTitle = [];
            }
            egret.Tween.get(item).to({ y: ty }, t, egret.Ease.cubicOut).call(function () {
                ui.gameScence.stopReelIdx = _this.index;
                if (_this.index == 5 && i == _this.kGroup.numChildren - 1) {
                    ui.gameScence.stopLight();
                    core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_ROUNDOVER);
                }
            }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            _loop_1(i);
        }
    };
    Reel.prototype.initData = function () {
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            var value = i > 0 && i < 5 ? this.curReelData[i - 1] : 'M' + Math.floor(Math.random() * 5 + 1);
            item.value = value;
            if (value == 'M1') {
                var reItem = this.niuGroup.getChildAt(i);
                reItem.value = value;
            }
        }
    };
    Reel.prototype.start = function () {
        var _this = this;
        var _loop_2 = function (i) {
            var item = this_2.kGroup.getChildAt(i);
            var reItem = this_2.niuGroup.getChildAt(i);
            var ty = item.y - 50;
            egret.Tween.get(item).to({ y: ty }, 100).to({ y: ty + 50 }, 100);
            egret.Tween.get(reItem).to({ y: ty }, 100).to({ y: ty + 50 }, 100).call(function () {
                reItem.value = '';
            });
        };
        var this_2 = this;
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            _loop_2(i);
        }
        egret.Tween.get(this).wait(200).call(function () {
            _this.isAction = true;
            _this.stopState = false;
            _this.curTime = egret.getTimer();
        }, this);
    };
    Reel.prototype.stop = function () {
        this.isAction = false;
        this.stopState = true;
        this.overReel();
    };
    /**
     * 展示数量
     */
    Reel.ShowNum = 4;
    /**
     * 正常滚动时间
     */
    Reel.TIME = 700;
    /**
     * 快速滚动时间
     */
    Reel.QUK_TIME = 200;
    /**
     * 停止间隔
     */
    Reel.STOPTIME = 200;
    /**
     * 快速停止间隔
     */
    Reel.QUK_STOPTIME = 100;
    return Reel;
}(eui.Component));
__reflect(Reel.prototype, "Reel");
/**
 * 滚动组件item
 */
var ReelItem = (function (_super) {
    __extends(ReelItem, _super);
    function ReelItem() {
        var _this = _super.call(this) || this;
        _this.isVir = false;
        _this.isA = false;
        _this.skinName = ReelItemSkin;
        return _this;
    }
    Object.defineProperty(ReelItem.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
            if (this.value != undefined) {
                this.icons.source = this._value == '' ? '' : this._value + '_icon_png';
                this.icons.visible = true;
                this.vIcon.visible = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    ReelItem.prototype.setVir = function (b) {
        this.isVir = b;
        if (this.isVir) {
            this.icons.visible = false;
            this.vIcon.visible = true;
            var t = 'blur' + Math.floor(Math.random() * 5 + 1) + '_png';
            this.vIcon.source = t;
            //console.log(t);
        }
        else {
            this.icons.source = this._value + '_icon_png';
            this.icons.visible = true;
            this.vIcon.visible = false;
        }
    };
    /**中奖标志出来时候的闪电 */
    ReelItem.prototype.c1PlayAc = function () {
        var _this = this;
        // console.log('中奖图标的闪电');
        var idx = 0;
        var num = 0;
        this.icons.y = -16;
        var C1Mc = egret.setInterval(function () {
            if (idx > 5) {
                idx = 0;
                num++;
            }
            _this.value = 'C1_' + idx;
            idx++;
        }, this, 150);
        var obj = {
            'timer': C1Mc,
            'obj': this
        };
        vo.GameData.rollFreeTitle.push(obj);
    };
    ReelItem.prototype.goAnimation = function () {
        if (this.isA)
            return;
        this.isA = true;
        egret.Tween.removeTweens(this.icons);
        this.value = this._value;
        this.aIcon.visible = true;
        egret.Tween.get(this.icons, { loop: true }).to({ scaleX: 0.8, scaleY: 0.8 }, 600).to({ scaleX: 1, scaleY: 1 }, 600);
    };
    ReelItem.prototype.stopAniamtion = function () {
        egret.Tween.pauseTweens(this.icons);
    };
    ReelItem.prototype.resumeAnimation = function () {
        egret.Tween.resumeTweens(this.icons);
    };
    ReelItem.prototype.hideAnimation = function () {
        this.isA = false;
        this.aIcon.visible = false;
        egret.Tween.removeTweens(this.icons);
        this.icons.scaleX = 1;
        this.icons.scaleY = 1;
        this.value = this._value;
    };
    return ReelItem;
}(eui.Component));
__reflect(ReelItem.prototype, "ReelItem");
//# sourceMappingURL=Reel.js.map