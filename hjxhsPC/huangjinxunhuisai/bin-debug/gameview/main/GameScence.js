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
var GameScence = (function (_super) {
    __extends(GameScence, _super);
    // public pent: GamePentCompoment;
    function GameScence() {
        var _this = _super.call(this) || this;
        _this.reelArr = [];
        _this.skinName = GameScenceSkin;
        return _this;
    }
    GameScence.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.clear();
    };
    /**
     * 初始化
     */
    GameScence.prototype.init = function () {
        for (var i = 0; i < 5; i++) {
            var reel = this['reel' + i];
            this.reelArr.push(this['reel' + i]);
            reel.index = i;
        }
    };
    GameScence.prototype.reset = function () {
        for (var i = 0; i < 5; i++) {
            var reel = this['reel' + i];
            reel.curReelData = vo.GameData.initData.Value.Geninit.Main.ReelSymbols[i];
            reel.initData();
        }
    };
    GameScence.prototype.clear = function () {
        this.leftLine.visible = false;
        this.rightLine.visible = false;
    };
    GameScence.prototype.showTipLine = function (line) {
        this.leftLine.visible = true;
        this.rightLine.visible = true;
        this['right_' + line].visible = true;
        this['left_' + line].visible = true;
    };
    GameScence.prototype.clearTip = function () {
        this.leftLine.visible = false;
        this.rightLine.visible = false;
        for (var i = 1; i < 6; i++) {
            this['right_' + i].visible = false;
            this['left_' + i].visible = false;
        }
    };
    GameScence.prototype.startReel = function () {
        for (var i = 0; i < 5; i++) {
            var reel = this['reel' + i];
            reel.start();
        }
    };
    GameScence.prototype.startResult = function () {
        for (var i = 0; i < 5; i++) {
            var reel = this['reel' + i];
            if (vo.GameData.resultData.Value.SpinResult.Main.ReelSymbols[i]) {
                reel.curTime = egret.getTimer();
                reel.targetReelData = vo.GameData.resultData.Value.SpinResult.Main.ReelSymbols[i];
                reel.resultArr();
            }
        }
    };
    GameScence.prototype.stopReel = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.stop();
        }
        //SoundManager.getInstance().playEffect(SoundConst.BUTTON);
    };
    GameScence.prototype.showAnimation = function (position) {
        for (var i = 0; i < this.reelArr.length; i++) {
            if (i == position.X) {
                var reel = this.reelArr[i];
                reel.showAnimation(position.Y);
            }
            // else{
            // 	let reel: Reel = this.reelArr[i];
            // 	reel.deleteTipQuan(position.Y);
            // }
        }
    };
    GameScence.prototype.hideAnimation = function (position) {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            if (i == position.X) {
                var reel_1 = this.reelArr[i];
                reel_1.hideAnimation(position.Y);
            }
        }
    };
    GameScence.prototype.hideAllAnimation = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.clearAllAnimation();
        }
    };
    GameScence.prototype.hideAllAnimation1 = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.clearAllAnimation1();
        }
    };
    GameScence.prototype.resumeAllAnimation = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.resumeAllAnimation();
        }
    };
    GameScence.prototype.pauseAllAniation = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.pauseAllAnimation();
        }
    };
    GameScence.prototype.displayBonus = function () {
        this.maskGroup.visible = true;
        this.bonusMask.visible = true;
        egret.Tween.get(this.bonusImg, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).wait(50).to({ scaleX: 1, scaleY: 1 }, 450);
    };
    GameScence.prototype.stopBonus = function () {
        this.maskGroup.visible = false;
        this.bonusMask.visible = false;
        egret.Tween.removeTweens(this.bonusImg);
    };
    return GameScence;
}(eui.Component));
__reflect(GameScence.prototype, "GameScence");
//# sourceMappingURL=GameScence.js.map