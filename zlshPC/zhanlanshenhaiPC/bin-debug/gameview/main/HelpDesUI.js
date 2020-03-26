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
var HelpDesUI = (function (_super) {
    __extends(HelpDesUI, _super);
    function HelpDesUI() {
        var _this = _super.call(this) || this;
        _this.skinName = HelpDesSkin;
        window.addEventListener('message', function (evt) {
            if (evt.data != "closedesui")
                return;
            core.UIManager.closeUI(core.UIConst.HelpDesUI);
            if (_this.webview) {
                _this.webview.destroy();
            }
        });
        return _this;
        // let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
        // this.webview = ui.webView;
    }
    HelpDesUI.prototype.onAdd = function () {
        var _this = this;
        _super.prototype.onAdd.call(this);
        this.onResize();
        if (!this.webview) {
            popstr('loadshow');
        }
        if (!this.webview) {
            this.webview = new WebView('./help.html');
            //this.webView = new WebView('http://www.baidu.com');
        }
        this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        //this.registerEvent(this.myScrollBar, egret.Event.CHANGE, this.onScrollBarChange, this);
        //this.registerEvent(this.scroll, egret.Event.CHANGE, this.onScrollChange, this);
        this.registerEvent(this, egret.Event.ENTER_FRAME, this.onFrame, this);
        //this.scroll.verticalScrollBar=new MyScrollBar();
        // this.visible = false;
        NetUI.getInstance().showNetting();
        egret.setTimeout(function () {
            NetUI.getInstance().hideNetting();
            _this.visible = true;
        }, this, 1000);
        this.onResize();
        this.webview.show();
    };
    HelpDesUI.prototype.onFrame = function () {
        if (this.webview) {
            this.webview.width = window.innerWidth < GameConfig.MAX_WIDTH ? window.innerWidth * window.devicePixelRatio : GameConfig.MAX_WIDTH;
            this.webview.x = this.mainGroup.x * window.devicePixelRatio;
            this.webview.height = this.bg.height * this.bg.scaleY * window.devicePixelRatio;
            this.webview.y = this.bg.y * window.devicePixelRatio;
        }
    };
    HelpDesUI.prototype.onResize = function () {
        var scaleX = (window.innerWidth / GameConfig.DES_WIDTH) || 0;
        var scaleY = (window.innerHeight / GameConfig.DES_HEIGHT) || 0;
        var maxh = window.innerHeight - GameConfig.J_HEIGHT;
        var cs = scaleX > scaleY ? scaleY : scaleX;
        var t1s = (window.innerHeight - 55) / GameConfig.J_HEIGHT - maxh / GameConfig.HEIGHT;
        var t2s = (window.innerHeight - 55) / GameConfig.J_HEIGHT;
        this.bg.scaleX = cs;
        if (window.innerHeight > GameConfig.J_HEIGHT) {
            this.bg.scaleY = t1s;
        }
        else {
            this.bg.scaleY = t2s;
        }
        var w = GameConfig.WIDTH / GameConfig.HEIGHT > GameConfig.MAX_WIDTH / GameConfig.DES_HEIGHT ? GameConfig.MAX_WIDTH * cs : GameConfig.WIDTH;
        this.mainGroup.width = window.innerWidth < GameConfig.MAX_WIDTH ? window.innerWidth : GameConfig.MAX_WIDTH;
        this.mainGroup.height = this.bg.scaleY * this.bg.height;
        this.contentBg.scaleX = this.contentBg.scaleY = this.mainGroup.width / GameConfig.MAX_WIDTH;
        if (this.webview) {
            this.webview.width = window.innerWidth < GameConfig.MAX_WIDTH ? window.innerWidth * window.devicePixelRatio : GameConfig.MAX_WIDTH;
            this.webview.x = this.mainGroup.x * window.devicePixelRatio;
            this.webview.height = this.bg.height * this.bg.scaleY * window.devicePixelRatio;
            this.webview.y = this.bg.y * window.devicePixelRatio;
        }
        if (window.innerHeight <= 500 / window.devicePixelRatio) {
            this.bg.scaleY = window.innerHeight / this.bg.height + 0.2;
        }
        // this.onScrollChange();
        // this.onScrollBarChange();
        egret.updateAllScreens();
    };
    HelpDesUI.prototype.onTab = function () {
        core.UIManager.closeUI(core.UIConst.HelpDesUI);
    };
    return HelpDesUI;
}(core.BaseUI));
__reflect(HelpDesUI.prototype, "HelpDesUI");
//# sourceMappingURL=HelpDesUI.js.map