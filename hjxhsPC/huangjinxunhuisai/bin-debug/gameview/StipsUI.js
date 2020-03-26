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
            //SoundManager.getInstance().playEffect(SoundConst.AUTOSTART);
            _this.okcallfun && _this.okcallfun();
        }, this);
        this.registerEvent(this.confirBtn, egret.TouchEvent.TOUCH_TAP, function () {
            //core.UIManager.closeUI(core.UIConst.StipsUI);
            //SoundManager.getInstance().playEffect(SoundConst.AUTOSTART);
            _this.okcallfun && _this.okcallfun();
        }, this);
        this.registerEvent(this.cancleBtn, egret.TouchEvent.TOUCH_TAP, function () {
            core.UIManager.closeUI(core.UIConst.StipsUI);
            //SoundManager.getInstance().playEffect(SoundConst.AUTOSTART);
            _this.canclecallfun && _this.canclecallfun();
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
        //this.closeBtn.visible = true;
    };
    /**
     * 展示自动次数
     */
    StipsUI.prototype.showAutoBtn = function (type, des, okcallfun, canclecallfun) {
        if (des === void 0) { des = ''; }
        if (okcallfun === void 0) { okcallfun = null; }
        if (canclecallfun === void 0) { canclecallfun = null; }
        this.autoGroup.visible = true;
        this.allGroup.visible = false;
        this.titleLabel.text = des;
        this.okcallfun = okcallfun;
        this.canclecallfun = canclecallfun;
        this.okBtn.visible = this.cancleBtn.visible = true;
        this.confirBtn.visible = false;
        egret.Tween.removeTweens(this.bg);
        egret.Tween.removeTweens(this.autoGroup);
        egret.Tween.get(this.autoGroup).to({ scaleX: 1, scaleY: 1 }, 100);
        egret.Tween.get(this.bg).to({ alpha: 0.6 }, 100);
    };
    /**
     * 展示余额不足
     */
    StipsUI.prototype.showNotmoney = function (type, des, okcallfun, canclecallfun) {
        if (des === void 0) { des = ''; }
        if (okcallfun === void 0) { okcallfun = null; }
        if (canclecallfun === void 0) { canclecallfun = null; }
        this.autoGroup.visible = true;
        this.allGroup.visible = false;
        this.titleLabel.text = des;
        this.okcallfun = okcallfun;
        this.canclecallfun = canclecallfun;
        this.okBtn.visible = this.cancleBtn.visible = true;
        this.confirBtn.visible = false;
        egret.Tween.removeTweens(this.bg);
        egret.Tween.removeTweens(this.autoGroup);
        egret.Tween.get(this.autoGroup).to({ scaleX: 1, scaleY: 1 }, 100);
        egret.Tween.get(this.bg).to({ alpha: 0.6 }, 100);
    };
    /**
     * 展示其他
     */
    StipsUI.prototype.showConfirBtn = function (des, confirfun) {
        this.autoGroup.visible = false;
        this.allGroup.visible = true;
        this.desLabel.text = des;
        this.okcallfun = confirfun;
        this.okBtn.visible = this.cancleBtn.visible = false;
        this.confirBtn.visible = true;
        this.img.height = 70 + this.desLabel.textHeight + 150;
        egret.Tween.removeTweens(this.bg);
        egret.Tween.removeTweens(this.allGroup);
        egret.Tween.get(this.allGroup).to({ scaleX: 1, scaleY: 1 }, 100);
        egret.Tween.get(this.bg).to({ alpha: 0.6 }, 100);
    };
    /**
     * 展示断开连接
     */
    StipsUI.prototype.showNetclose = function (des, confirfun) {
        this.autoGroup.visible = false;
        this.allGroup.visible = true;
        this.desLabel.text = des;
        this.okcallfun = confirfun;
        this.okBtn.visible = this.cancleBtn.visible = false;
        this.confirBtn.visible = true;
        this.img.height = 70 + this.desLabel.textHeight + 150;
        egret.Tween.removeTweens(this.bg);
        egret.Tween.removeTweens(this.allGroup);
        egret.Tween.get(this.allGroup).to({ scaleX: 1, scaleY: 1 }, 100);
        egret.Tween.get(this.bg).to({ alpha: 0.92 }, 100);
    };
    StipsUI.prototype.hide = function () {
        egret.Tween.removeTweens(this.bg);
        egret.Tween.removeTweens(this.allGroup);
        egret.Tween.removeTweens(this.autoGroup);
        egret.Tween.get(this.allGroup).to({ scaleX: 0, scaleY: 0 }, 100);
        egret.Tween.get(this.autoGroup).to({ scaleX: 0, scaleY: 0 }, 100);
        egret.Tween.get(this.bg).to({ alpha: 0 }, 100).call(function () {
            core.UIManager.closeUI(core.UIConst.StipsUI);
        });
    };
    return StipsUI;
}(core.BaseUI));
__reflect(StipsUI.prototype, "StipsUI");
//# sourceMappingURL=StipsUI.js.map