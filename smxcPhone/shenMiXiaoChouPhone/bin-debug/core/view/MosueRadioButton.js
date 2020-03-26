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
var MosueRadioButton = (function (_super) {
    __extends(MosueRadioButton, _super);
    function MosueRadioButton() {
        var _this = _super.call(this) || this;
        mouse.setButtonMode(_this, true);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdd, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemove, _this);
        return _this;
    }
    MosueRadioButton.prototype.onAdd = function () {
        this.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollOver, this);
        this.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRollOut, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRollOut, this);
        this.stage.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    MosueRadioButton.prototype.onRemove = function () {
        this.onRollOut();
        this.removeEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollOver, this);
        this.removeEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRollOut, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRollOut, this);
        this.stage.removeEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    MosueRadioButton.prototype.onRollOver = function () {
        if (this.enabled == false)
            return;
        if (this.selected) {
            this.currentState = 'rollOverAndSelected';
        }
        else {
            this.currentState = 'rollOver';
        }
    };
    MosueRadioButton.prototype.onRollOut = function () {
        this.currentState = '';
    };
    MosueRadioButton.prototype.onClick = function () {
        SoundManager.getInstance().playEffect(SoundConst.BUTTON);
    };
    return MosueRadioButton;
}(eui.RadioButton));
__reflect(MosueRadioButton.prototype, "MosueRadioButton");
//# sourceMappingURL=MosueRadioButton.js.map