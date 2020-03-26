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
var BonusAnimation = (function (_super) {
    __extends(BonusAnimation, _super);
    // public keepOn: eui.Button;
    // public winScore: eui.Label;
    // public score: eui.Label;
    function BonusAnimation() {
        var _this = _super.call(this) || this;
        _this.skinName = BonusAnimationSkin;
        return _this;
    }
    BonusAnimation.prototype.init = function () {
        var _this = this;
        core.LayerManager.getInstance().addEventListener(SetEvent.SET_OR_CHANGE, function () {
            _this.updataState();
        }, this);
        this.updataState();
        console.log('renwu');
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.gameOver.visible = false;
        ui.bonusMask.visible = false;
        ui.playGroup.visible = true;
        this.golf.alpha = 1;
        this.shadow.alpha = 1;
        this.golf.visible = true;
        this.shadow.visible = true;
        this.golf.scaleX = this.golf.scaleY = 1;
        this.shadow.scaleX = this.shadow.scaleY = 1;
        this.golf.x = 339.49;
        this.golf.y = 774.14;
        this.shadow.x = 339.35;
        this.shadow.y = 777.41;
        // this.score.text = '￥' + GameManager.numberToCommonStr1(vo.GameData.balance);
        egret.Tween.get(this.renwu).call(function () { _this.renwu.source = 'ren1_png'; })
            .wait(1000)
            .call(function () { _this.renwu.source = 'ren2_png'; })
            .wait(800)
            .call(function () {
            _this.renwu.source = 'ren3_png';
            SoundManager.getInstance().playEffect(SoundConst.BEATSOUNDS);
            _this.golf_hor.addEventListener('complete', _this.onTweenGroupComplete, _this);
            _this.golf_hor.play(0);
            _this.shadow_hor.play(0);
        });
    };
    BonusAnimation.prototype.onTweenGroupComplete = function () {
        var _this = this;
        console.log('全部播放完毕，可以显示最终界面');
        SoundManager.getInstance().playEffect(SoundConst.INTODONG);
        egret.setTimeout(function () {
            SoundManager.getInstance().playEffect(SoundConst.JUMPBOUNS);
            _this.overAnim();
        }, this, 2000);
    };
    BonusAnimation.prototype.overAnim = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        GameManager.getInstance().dispatchEventWith(SetEvent.EXTRA_BONUS_SHOWBONUS, false);
        ui.gameOver.visible = true;
        ui.bonusMask.visible = true;
        ui.overCup.winScore.text = 'x' + GameManager.numberToCommonStr(vo.GameData.resultData.Value.Dollar);
        egret.Tween.get(ui.overCup.keepOn, { loop: true }).to({ scaleX: 0.95, scaleY: 0.95 }, 500).to({ scaleX: 1, scaleY: 1 }, 500);
        ui.overCup.keepOn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnTouch, this);
    };
    BonusAnimation.prototype.BtnTouch = function () {
        // console.log('点击按钮关闭');
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.playGroup.visible = false;
        ui.bonusMask.visible = false;
        ui.gameOver.visible = false;
        ui.bonusMask.visible = false;
        SoundManager.getInstance().playEffect(SoundConst.BUTTON);
        egret.Tween.removeTweens(ui.overCup.keepOn);
        GameManager.getInstance().dispatchEventWith(SetEvent.EXTRA_BONUS_OVER, false);
    };
    BonusAnimation.prototype.updataState = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        egret.Tween.removeTweens(ui.overCup.keepOn);
        ui.overCup.keepOn.scaleX = 1;
        ui.overCup.keepOn.scaleY = 1;
        egret.Tween.get(ui.overCup.keepOn, { loop: true }).to({ scaleX: 0.95, scaleY: 0.95 }, 500).to({ scaleX: 1, scaleY: 1 }, 500);
    };
    return BonusAnimation;
}(eui.Component));
__reflect(BonusAnimation.prototype, "BonusAnimation");
//# sourceMappingURL=BonusAnimation.js.map