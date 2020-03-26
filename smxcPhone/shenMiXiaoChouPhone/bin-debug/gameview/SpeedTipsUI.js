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
var SpeedTipsUI = (function (_super) {
    __extends(SpeedTipsUI, _super);
    function SpeedTipsUI() {
        var _this = _super.call(this) || this;
        _this.skinName = SpeedTipsSkin;
        egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE, _this.onEvent, _this);
        return _this;
    }
    SpeedTipsUI.prototype.onAdd = function () {
        var _this = this;
        _super.prototype.onAdd.call(this);
        this.registerEvent(this.nono, egret.TouchEvent.TOUCH_TAP, function () {
            _this.callfun && _this.callfun();
            core.UIManager.closeUI(core.UIConst.SpeedTipsUI);
            GameManager.getInstance().resume();
        }, this);
        this.registerEvent(this.yesyes, egret.TouchEvent.TOUCH_TAP, function () {
            _this.callfun && _this.callfun();
            GameConfig.speedPlay = true;
            var ui = core.UIManager.getUI(core.UIConst.SetUI);
            ui.speedBtn.liang.visible = GameConfig.speedPlay;
            core.UIManager.closeUI(core.UIConst.SpeedTipsUI);
            GameManager.getInstance().resume();
        }, this);
    };
    SpeedTipsUI.prototype.onEvent = function () {
        if (window.innerWidth > window.innerHeight) {
            this.currentState = 'up';
            // this.width=1920;
        }
        else {
            this.currentState = 'down';
            // this.width=1080;
        }
    };
    SpeedTipsUI.prototype.onRemove = function () {
        _super.prototype.onRemove.call(this);
    };
    SpeedTipsUI.prototype.shows = function (title, des, callfun) {
        if (title === void 0) { title = ''; }
        if (des === void 0) { des = ''; }
        if (callfun === void 0) { callfun = null; }
        this.titleLabel.text = title;
        this.desLabel.text = des;
        this.callfun = callfun;
    };
    return SpeedTipsUI;
}(core.BaseUI));
__reflect(SpeedTipsUI.prototype, "SpeedTipsUI");
//# sourceMappingURL=SpeedTipsUI.js.map