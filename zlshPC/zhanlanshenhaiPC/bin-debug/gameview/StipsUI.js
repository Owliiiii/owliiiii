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
var StipsUI = (function (_super) {
    __extends(StipsUI, _super);
    function StipsUI() {
        var _this = _super.call(this) || this;
        _this.skinName = StipSkin;
        return _this;
    }
    StipsUI.prototype.onAdd = function () {
        var _this = this;
        _super.prototype.onAdd.call(this);
        // this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, () => {
        // 	core.UIManager.closeUI(core.UIConst.StipsUI);
        // 	this.callfun && this.callfun();
        // }, this);
        this.registerEvent(this.okBtn, egret.TouchEvent.TOUCH_TAP, function () {
            core.UIManager.closeUI(core.UIConst.StipsUI);
            _this.okcallfun && _this.okcallfun();
        }, this);
        this.registerEvent(this.cancleBtn, egret.TouchEvent.TOUCH_TAP, function () {
            core.UIManager.closeUI(core.UIConst.StipsUI);
            _this.canclecallfun && _this.canclecallfun();
        }, this);
        this.registerEvent(this.confirBtn, egret.TouchEvent.TOUCH_TAP, function () {
            //core.UIManager.closeUI(core.UIConst.StipsUI);
            // SoundManager.getInstance().playEffect(SoundConst.AUTOSTART);
            _this.okcallfun && _this.okcallfun();
        }, this);
    };
    StipsUI.prototype.onRemove = function () {
        _super.prototype.onRemove.call(this);
    };
    StipsUI.prototype.shows = function (type, title, des, callfun) {
        if (title === void 0) { title = ''; }
        if (des === void 0) { des = ''; }
        if (callfun === void 0) { callfun = null; }
        this.titleLabel.text = title;
        this.desLabel.text = des;
        this.callfun = callfun;
        //this.icons.source = type == 1 ? 'oktip_png' : 'errortip_png';
        this.okBtn.visible = this.cancleBtn.visible = false;
        // this.yesLabel.visible = this.noLabel.visible = false;
        //this.closeBtn.visible = true;
    };
    StipsUI.prototype.showHasBtn = function (type, title, des, okcallfun, canclecallfun) {
        if (title === void 0) { title = ''; }
        if (des === void 0) { des = ''; }
        if (okcallfun === void 0) { okcallfun = null; }
        if (canclecallfun === void 0) { canclecallfun = null; }
        this.titleLabel.text = title;
        this.titleLabel.visible = false;
        this.desLabel.visible = true;
        this.desLabel.text = des;
        this.okcallfun = okcallfun;
        this.canclecallfun = canclecallfun;
        this.okBtn.visible = this.cancleBtn.visible = true;
        this.confirBtn.visible = false;
        this.img.height = 70 + this.desLabel.textHeight + 150;
        egret.Tween.removeTweens(this.bg);
        egret.Tween.removeTweens(this.mainGroup);
        egret.Tween.get(this.mainGroup).to({ scaleX: 1, scaleY: 1 }, 100);
        egret.Tween.get(this.bg).to({ alpha: 1 }, 100);
    };
    StipsUI.prototype.showConfirBtn = function (title, confirfun) {
        this.titleLabel.text = title;
        this.desLabel.visible = false;
        this.titleLabel.visible = true;
        this.okcallfun = confirfun;
        this.okBtn.visible = this.cancleBtn.visible = false;
        this.confirBtn.visible = true;
        this.titleLabel.textHeight;
        this.img.height = 70 + this.titleLabel.textHeight + 155;
        egret.Tween.removeTweens(this.bg);
        egret.Tween.removeTweens(this.mainGroup);
        egret.Tween.get(this.mainGroup).to({ scaleX: 1, scaleY: 1 }, 100);
        egret.Tween.get(this.bg).to({ alpha: 1 }, 100);
    };
    StipsUI.prototype.hide = function () {
        egret.Tween.removeTweens(this.bg);
        egret.Tween.removeTweens(this.mainGroup);
        egret.Tween.get(this.mainGroup).to({ scaleX: 0, scaleY: 0 }, 100);
        egret.Tween.get(this.bg).to({ alpha: 0 }, 100).call(function () {
            core.UIManager.closeUI(core.UIConst.StipsUI);
        });
    };
    return StipsUI;
}(core.BaseUI));
__reflect(StipsUI.prototype, "StipsUI");
//# sourceMappingURL=StipsUI.js.map