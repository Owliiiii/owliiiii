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
        _this.curReelData = ['M1', 'M1', 'M2'];
        /**
         * 目标盘面
         **/
        _this.targetReelData = ['M1', '0', 'M2'];
        /**
         * 滚动速度
         */
        _this.reelSpeed = 100;
        /**
         * 当前时间
         */
        _this.curTime = 0;
        /**
         * 滚轮索引
         */
        _this.index = 0;
        /**
         * aIndex
         */
        _this.aIndex = 0;
        /**
         * stopStaet
         */
        _this.stopState = false;
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
                if (item.y >= this.height) {
                    var t1 = GameConfig.speedPlay ? Reel.QUK_TIME : Reel.TIME;
                    //let t2: number = GameConfig.speedPlay ? Reel.QUK_STOPTIME : Reel.STOPTIME;
                    var t3 = GameConfig.speedPlay ? [200, 350, 500, 650, 800] : [0, 400, 730, 930, 1030];
                    if (egret.getTimer() - this.curTime > t1 + t3[this.index]) {
                        this.isAction = false;
                        this.overReel();
                        console.log('-----------------3');
                        return;
                    }
                    else {
                        item.y = this.kGroup.getChildAt(0).y - this.kGroup.getChildAt(0).height;
                        item.value = 'M' + Math.ceil(Math.random() * 9);
                        item.setVir(true);
                        this.kGroup.setChildIndex(item, 0);
                    }
                }
            }
        }
    };
    Reel.prototype.overReel = function () {
        var _this = this;
        egret.Tween.removeTweens(this);
        if (!this.stopState) {
            SoundManager.getInstance().playEffect(SoundConst.REELEND);
        }
        var _loop_1 = function (i) {
            var item = this_1.kGroup.getChildAt(i);
            egret.Tween.removeTweens(item);
            var ty = void 0;
            ty = i * item.height - item.height;
            item.y = this_1.stopState ? ty : i * item.height - item.height + 100;
            item.value = i > 0 && i < 4 ? this_1.curReelData[i - 1] : 'M' + Math.ceil(Math.random() * 9);
            item.setVir(false);
            //item.value ='M'+Math.ceil(Math.random()*9);
            var t = this_1.stopState ? 0 : 300;
            egret.Tween.get(item).to({ y: ty }, t, egret.Ease.cubicOut).call(function () {
                if (_this.index == 4 && i == _this.kGroup.numChildren - 1) {
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
            item.value = i > 0 && i < 4 ? this.curReelData[i - 1] : 'M' + Math.ceil(Math.random() * 9);
        }
    };
    Reel.prototype.start = function () {
        var _this = this;
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            var ty = item.y - 50;
            egret.Tween.get(item).to({ y: ty }, 100).to({ y: ty + 50 }, 100);
        }
        this.curTime = egret.getTimer() + 99999;
        egret.Tween.get(this).wait(200).call(function () {
            _this.isAction = true;
            _this.stopState = false;
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
    Reel.ShowNum = 3;
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
                this.icons.source = this._value + '_icon_png';
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
            var t = 'blur' + Math.floor(Math.random() * 12) + '_png';
            this.vIcon.source = t;
            //console.log(t);
        }
        else {
            this.icons.source = this._value + '_icon_png';
            this.icons.visible = true;
            this.vIcon.visible = false;
        }
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