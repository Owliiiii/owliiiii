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
var AutoItem = (function (_super) {
    __extends(AutoItem, _super);
    function AutoItem() {
        return _super.call(this) || this;
    }
    AutoItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        for (var i = 0; i < 5; i++) {
            var btn = this['btn' + i];
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        }
        this.autoBtn.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onOver, this);
        this.sGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onOver, this);
        this.autoBtn.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onOut, this);
        this.sGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onOut, this);
        this.sopAutoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStop, this);
    };
    AutoItem.prototype.onOver = function () {
        egret.Tween.removeTweens(this.sGroup);
        this.sMainGroup.visible = true;
        egret.Tween.get(this.sGroup).to({ y: 0 }, 300);
    };
    AutoItem.prototype.onOut = function (e) {
        if (!this.sGroup.hitTestPoint(e.stageX, e.stageY) || !this.autoBtn.hitTestPoint(e.stageX, e.stageY)) {
            egret.Tween.removeTweens(this.sGroup);
            egret.Tween.get(this.sGroup).to({ y: 535 }, 300);
        }
    };
    AutoItem.prototype.onTab = function (e) {
        if (vo.GameData.balance < vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line) {
            egret.Tween.get(this.sGroup).to({ y: 535 }, 300);
            GameManager.getInstance().noMoney();
            return;
        }
        switch (e.currentTarget) {
            case this['btn' + 0]:
                vo.GameData.autoPlayCount = 99;
                GameConfig.autoPlay = true;
                this.lastCount = 99;
                break;
            case this['btn' + 1]:
                vo.GameData.autoPlayCount = 50;
                GameConfig.autoPlay = true;
                this.lastCount = 50;
                break;
            case this['btn' + 2]:
                vo.GameData.autoPlayCount = 25;
                GameConfig.autoPlay = true;
                this.lastCount = 25;
                break;
            case this['btn' + 3]:
                vo.GameData.autoPlayCount = 10;
                GameConfig.autoPlay = true;
                this.lastCount = 10;
                break;
            case this['btn' + 4]:
                vo.GameData.autoPlayCount = 100;
                GameConfig.autoPlay = true;
                this.lastCount = 100;
                this.autoCountLabel.text = '直到环节';
                console.log('点击了直到环节');
                break;
        }
        this.autoBtn.visible = false;
        this.autoStopGroup.visible = true;
        this.sMainGroup.visible = false;
        GameManager.getInstance().startGame();
        SoundManager.getInstance().playEffect(SoundConst.AUTOSTART1);
    };
    AutoItem.prototype.onStop = function () {
        this.autoStopGroup.visible = false;
        this.autoBtn.visible = true;
        vo.GameData.autoPlayCount = 0;
        GameConfig.autoPlay = false;
        SoundManager.getInstance().playEffect(SoundConst.AUTOSTOP1);
    };
    /**
     * resetDo
     */
    AutoItem.prototype.resetDo = function () {
        if (vo.GameData.balance < vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line) {
            egret.Tween.get(this.sGroup).to({ y: 535 }, 300);
            GameManager.getInstance().noMoney();
            return;
        }
        vo.GameData.autoPlayCount = this.lastCount;
        this.autoCountLabel.text = vo.GameData.autoPlayCount < 100 ? '' + vo.GameData.autoPlayCount : '直到环节';
        GameConfig.autoPlay = true;
        this.autoBtn.visible = false;
        this.autoStopGroup.visible = true;
        this.sMainGroup.visible = false;
        SoundManager.getInstance().playEffect(SoundConst.AUTOSTART1);
        GameManager.getInstance().startGame();
    };
    return AutoItem;
}(eui.Component));
__reflect(AutoItem.prototype, "AutoItem");
//# sourceMappingURL=AutoItem.js.map