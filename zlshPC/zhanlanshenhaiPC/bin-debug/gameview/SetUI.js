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
    }
    SetUI.prototype.initDes = function () {
        this.desbtn0.text = '跳过介绍视频';
        this.desbtn1.text = '不再显示启动画面';
        this.desbtn2.text = '游戏声音';
        //	this.speedPlayBtn.btn.selected = GameConfig.speedPlay;
    };
    SetUI.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        this.initDes();
        this.registerEvent(this.volueSlider, egret.Event.CHANGE, this.onVolueChange, this);
        this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.desbtn0.btn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.desbtn1.btn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.desbtn2.btn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.volueSlider.setVolues(SoundManager.getInstance().getEffectVolume() * 100);
        this.desbtn0.btn.selected = true;
        this.desbtn2.btn.selected = SoundManager.getInstance().getEffectVolume() > 0;
    };
    SetUI.prototype.onVolueChange = function () {
        var n = this.volueSlider.value / this.volueSlider.maximum;
        SoundManager.getInstance().setBgVolume(n);
        SoundManager.getInstance().setEffectVolume(n);
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.setBar.musicCheckBox.valume = n;
        this.desbtn2.btn.selected = n > 0;
    };
    SetUI.prototype.onTab = function (e) {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        switch (e.currentTarget) {
            case this.closeBtn:
                core.UIManager.closeUI(core.UIConst.SetUI);
                // SoundManager.getInstance().playEffect(SoundConst.CHECKSTART);
                break;
            case this.desbtn0.btn://跳过介绍视频
                break;
            case this.desbtn1.btn://看不看启动画面
                break;
            case this.desbtn2.btn://声音
                var ui_1 = core.UIManager.getUI(core.UIConst.MainScenceUI);
                if (!this.desbtn2.btn.selected) {
                    SoundManager.getInstance().saveVolue();
                    this.volueSlider.setVolues(0);
                    SoundManager.getInstance().setBgVolume(0);
                    SoundManager.getInstance().setEffectVolume(0);
                    ui_1.setBar.musicCheckBox.valume = this.volueSlider.value;
                    SoundManager.getInstance().close();
                }
                else {
                    ui_1.setBar.musicCheckBox.valume = SoundManager.getInstance().lastVolume;
                    SoundManager.getInstance().setBgVolume(SoundManager.getInstance().lastVolume);
                    SoundManager.getInstance().setEffectVolume(SoundManager.getInstance().lastVolume);
                    var n = SoundManager.getInstance().lastVolume * this.volueSlider.maximum;
                    this.volueSlider.setVolues(n);
                    SoundManager.getInstance().open();
                }
                break;
        }
    };
    return SetUI;
}(core.BaseUI));
__reflect(SetUI.prototype, "SetUI");
//# sourceMappingURL=SetUI.js.map