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
var LoginUI = (function (_super) {
    __extends(LoginUI, _super);
    function LoginUI() {
        var _this = _super.call(this) || this;
        _this.skinName = LoginSkin;
        return _this;
    }
    LoginUI.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        this.registerEvent(this, egret.TouchEvent.TOUCH_TAP, this.onGo, this);
    };
    LoginUI.prototype.onGo = function () {
        core.UIManager.openUI(core.UIConst.MainScenceUI);
    };
    return LoginUI;
}(core.BaseUI));
__reflect(LoginUI.prototype, "LoginUI");
//# sourceMappingURL=LoginUI.js.map