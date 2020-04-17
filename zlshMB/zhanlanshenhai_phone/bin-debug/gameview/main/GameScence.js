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
    function GameScence() {
        var _this = _super.call(this) || this;
        _this.reelArr = [];
        _this.skinName = GameScenceSkin;
        return _this;
    }
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
    GameScence.prototype.startReel = function () {
        for (var i = 0; i < 5; i++) {
            var reel = this['reel' + i];
            // reel.targetReelData = vo.GameData.resultData.Value.SpinResult.Main.ReelSymbols[i];
            reel.start();
        }
        if (!SoundManager.getInstance().effectOn)
            return;
        SoundManager.getInstance().playMusic(SoundConst.REEL, 1).then(function (channel) {
            GameManager.getInstance().startChannel = channel;
        });
    };
    GameScence.prototype.stopReel = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.stop();
        }
        SoundManager.getInstance().playEffect(SoundConst.REEL_STOP);
        this.showLight();
    };
    GameScence.prototype.showAnimation = function (position) {
        for (var i = 0; i < this.reelArr.length; i++) {
            if (i == position.X) {
                var reel = this.reelArr[i];
                reel.showAnimation(position.Y);
            }
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
    //还原
    GameScence.prototype.huanyuanC1 = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            this.reelArr[arr[i].X].huanYuan(arr[i].Y);
        }
    };
    GameScence.prototype.showLight = function () {
        egret.Tween.removeTweens(this.lightBg);
        if (window.innerWidth > window.innerHeight) {
            egret.Tween.get(this.lightBg).to({ alpha: 0.3 }, 50).to({ alpha: 0 }, 50);
        }
        else {
            egret.Tween.get(this.lightBg).to({ alpha: 0.4 }, 50).to({ alpha: 0 }, 80);
        }
    };
    //中免费动画
    GameScence.prototype.displayBonus = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            this.reelArr[arr[i].X].moveC1y(arr[i].Y);
        }
        if (!this.bonusMc) {
            this.bonusMc = game.MCUtils.getMc('bonusMc');
        }
        this.addChild(this.bonusMc);
        this.bonusMc.gotoAndPlay('bonusMc', 1);
        this.bonusMc.x = this.width / 2;
        this.bonusMc.y = this.height / 2;
        this.bonusMc.scaleX = 1.32;
        this.bonusMc.scaleY = 1.32;
    };
    //移除免费动画
    GameScence.prototype.removeBonusMc = function () {
        if (this.bonusMc && this.bonusMc.parent) {
            this.bonusMc.parent.removeChild(this.bonusMc);
            this.bonusMc.stop();
        }
    };
    return GameScence;
}(eui.Component));
__reflect(GameScence.prototype, "GameScence");
//# sourceMappingURL=GameScence.js.map