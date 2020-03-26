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
var HelpUI = (function (_super) {
    __extends(HelpUI, _super);
    function HelpUI() {
        var _this = _super.call(this) || this;
        _this.skinName = HelpSkin;
        return _this;
    }
    HelpUI.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        this.onResize();
        this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.myScrollBar, egret.Event.CHANGE, this.onScrollBarChange, this);
        this.registerEvent(this.scroll, egret.Event.CHANGE, this.onScrollChange, this);
        //this.scroll.verticalScrollBar=new MyScrollBar();
    };
    HelpUI.prototype.onResize = function () {
        var scaleX = (window.innerWidth / GameConfig.DES_WIDTH) || 0;
        var scaleY = (window.innerHeight / GameConfig.DES_HEIGHT) || 0;
        var maxh = window.innerHeight - GameConfig.J_HEIGHT;
        var cs = scaleX > scaleY ? scaleY : scaleX;
        var t1s = (window.innerHeight + 10) / GameConfig.J_HEIGHT - maxh / GameConfig.HEIGHT;
        var t2s = (window.innerHeight + 10) / GameConfig.J_HEIGHT;
        this.bg.scaleX = cs;
        if (window.innerHeight > GameConfig.J_HEIGHT) {
            this.bg.scaleY = t1s;
        }
        else {
            this.bg.scaleY = t2s;
        }
        var w = GameConfig.WIDTH / GameConfig.HEIGHT > GameConfig.MAX_WIDTH / GameConfig.DES_HEIGHT ? GameConfig.MAX_WIDTH * cs : GameConfig.WIDTH;
        this.mainGroup.width = scaleX > scaleY ? w : GameConfig.DES_WIDTH * cs;
        this.mainGroup.height = this.bg.scaleY * this.bg.height;
        this.contentBg.scaleX = this.contentBg.scaleY = this.mainGroup.width / GameConfig.MAX_WIDTH;
        this.contentBg.scaleX = this.contentBg.scaleX - 0.03;
        this.onScrollChange();
        this.onScrollBarChange();
        egret.updateAllScreens();
    };
    HelpUI.prototype.onTab = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        core.UIManager.closeUI(core.UIConst.HelpUI);
        ui.mainGroup.visible = true;
    };
    HelpUI.prototype.onScrollBarChange = function () {
        var value = this.myScrollBar.value;
        console.log(value);
        this.scroll.setPerCent(100 - value);
    };
    HelpUI.prototype.onScrollChange = function () {
        var p = 100 - this.scroll.getPerCent();
        this.myScrollBar.value = p;
    };
    return HelpUI;
}(core.BaseUI));
__reflect(HelpUI.prototype, "HelpUI");
//# sourceMappingURL=HelpUI.js.map