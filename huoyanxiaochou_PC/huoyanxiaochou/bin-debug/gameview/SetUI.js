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
var SetUI = (function (_super) {
    __extends(SetUI, _super);
    function SetUI() {
        var _this = _super.call(this) || this;
        _this.skinName = SetSkin;
        return _this;
        // let s: number = GameConfig.WIDTH / GameConfig.HEIGHT - GameConfig.DES_WIDTH / GameConfig.DES_HEIGHT;
        // this.setGroup.scaleX = 1 + s;
        // this.setGroup.scaleY = 1 + s;
    }
    SetUI.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        this.registerEvent(this.autoBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.emptyketBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.speedBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.musicBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.exitBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this, egret.Event.ENTER_FRAME, this.onEnter, this);
        this.updata();
    };
    SetUI.prototype.onEnter = function () {
        console.log("ENTER_FRAMEENTER_FRAMEENTER_FRAME");
        var s = GameConfig.WIDTH / GameConfig.HEIGHT - GameConfig.DES_WIDTH / GameConfig.DES_HEIGHT;
        this.setGroup.scaleX = 1 + s / 1.5;
        this.setGroup.scaleY = 1 + s / 1.5;
    };
    SetUI.prototype.updata = function () {
        this.autoBtn.selected = GameConfig.autoChangeBet;
        this.speedBtn.selected = GameConfig.speedPlay;
        this.musicBtn.selected = SoundManager.getInstance().effectOn;
        this.emptyketBtn.selected = GameConfig.emptyPlay;
    };
    SetUI.prototype.onTab = function (e) {
        switch (e.currentTarget) {
            case this.musicBtn://声音开关
                this.updataSound();
                break;
            case this.autoBtn://自动调整投注开关
                GameConfig.autoChangeBet = this.autoBtn.selected;
                break;
            case this.speedBtn://快速开关
                this.updataSpeedTime();
                break;
            case this.emptyketBtn://空格启动开关
                this.updataEmpty();
                break;
            case this.exitBtn://退出开关
                core.UIManager.closeUI(core.UIConst.SetUI);
                GameManager.getInstance().resume();
                break;
        }
    };
    /**
     * 更新快速
     */
    SetUI.prototype.updataSpeedTime = function () {
        GameConfig.speedPlay = this.speedBtn.selected;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.shanBtn.selected = GameConfig.speedPlay;
    };
    /**
     * 更新声音
     */
    SetUI.prototype.updataSound = function () {
        SoundManager.getInstance().setBgOn(this.musicBtn.selected);
        SoundManager.getInstance().setEffectOn(this.musicBtn.selected);
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.musicBtn.selected = this.musicBtn.selected;
        if (!this.musicBtn.selected) {
            GameManager.getInstance().stopMusic();
        }
    };
    /**
     * 更新空格启动旋转
     */
    SetUI.prototype.updataEmpty = function () {
        GameConfig.emptyPlay = this.emptyketBtn.selected;
    };
    return SetUI;
}(core.BaseUI));
__reflect(SetUI.prototype, "SetUI");
//# sourceMappingURL=SetUI.js.map