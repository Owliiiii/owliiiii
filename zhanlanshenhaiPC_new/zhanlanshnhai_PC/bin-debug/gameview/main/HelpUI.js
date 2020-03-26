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
        var _this = this;
        _super.prototype.onAdd.call(this);
        this.onResize();
        this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.myScrollBar, egret.Event.CHANGE, this.onScrollBarChange, this);
        this.registerEvent(this.scroll, egret.Event.CHANGE, this.onScrollChange, this);
        //this.scroll.verticalScrollBar=new MyScrollBar();
        this.visible = false;
        NetUI.getInstance().showNetting();
        egret.setTimeout(function () {
            NetUI.getInstance().hideNetting();
            _this.visible = true;
        }, this, 400);
    };
    HelpUI.prototype.onResize = function () {
        //this.closeBtn.scaleX = this.closeBtn.scaleY = 1 / window.devicePixelRatio;
        var scaleX = (window.innerWidth / GameConfig.DES_WIDTH) || 0;
        var scaleY = (window.innerHeight > GameConfig.J_HEIGHT ? GameConfig.J_HEIGHT / GameConfig.DES_HEIGHT : window.innerHeight / GameConfig.DES_HEIGHT) || 0;
        var maxh = window.innerHeight - GameConfig.J_HEIGHT;
        var cs = scaleX > scaleY ? scaleY : scaleX;
        this.bg.scaleX = window.innerWidth / GameConfig.DES_WIDTH;
        if (this.bg.scaleX > 1) {
            this.bg.scaleX = 1;
        }
        if (window.innerHeight > GameConfig.J_HEIGHT) {
            var t1s = (GameConfig.J_HEIGHT - 55) / GameConfig.J_HEIGHT;
            this.bg.scaleY = t1s;
        }
        else {
            var t2s = (window.innerHeight - 55) / GameConfig.J_HEIGHT;
            this.bg.scaleY = t2s;
        }
        // egret.clearTimeout(this.clet);
        // this.clet = egret.setTimeout(() => {
        // 	this.bg.source = window.innerWidth  == 1215&&window.innerHeight==833 ? 'BG_1x_png' : 'BG_1_png';
        // }, this, 100);
        var w = GameConfig.WIDTH / GameConfig.HEIGHT > GameConfig.MAX_WIDTH / GameConfig.DES_HEIGHT ? GameConfig.MAX_WIDTH * cs : GameConfig.WIDTH;
        this.mainGroup.width = window.innerWidth < GameConfig.MAX_WIDTH ? window.innerWidth : GameConfig.MAX_WIDTH;
        if (window.innerWidth < 768) {
            this.mainGroup.width = 768;
            this.mainGroup.horizontalCenter = undefined;
            this.mainGroup.left = 0;
            // console.log();
        }
        else {
            this.mainGroup.horizontalCenter = 0;
            this.mainGroup.left = undefined;
        }
        this.mainGroup.height = this.bg.scaleY * this.bg.height;
        this.contentBg.scaleX = this.contentBg.scaleY = this.mainGroup.width / GameConfig.MAX_WIDTH - 0.022;
        //this.onScrollChange();
        this.onScrollBarChange();
        egret.updateAllScreens();
        if (window.innerHeight <= 500 / window.devicePixelRatio) {
            this.bg.scaleY = window.innerHeight / this.bg.height + 0.2;
        }
    };
    HelpUI.prototype.onTab = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        core.UIManager.closeUI(core.UIConst.HelpUI);
        ui.mainGroup.visible = true;
    };
    HelpUI.prototype.onScrollBarChange = function () {
        var value = this.myScrollBar.value;
        this.scroll.setPerCent(100 - value);
        this.scroll.viewport.scrollV = (this.contentBg.scaleY * this.contentBg.height - this.scroll.viewport.height) / 100 * (100 - value);
    };
    HelpUI.prototype.onScrollChange = function () {
        var p = 100 - this.scroll.getPerCent();
        this.myScrollBar.value = p > 0 ? p : 0;
    };
    return HelpUI;
}(core.BaseUI));
__reflect(HelpUI.prototype, "HelpUI");
//# sourceMappingURL=HelpUI.js.map