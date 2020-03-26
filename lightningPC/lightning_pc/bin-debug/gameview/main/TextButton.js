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
var TextButton = (function (_super) {
    __extends(TextButton, _super);
    function TextButton() {
        var _this = _super.call(this) || this;
        _this.isselected = false;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdd, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemove, _this);
        mouse.setButtonMode(_this, true);
        return _this;
    }
    TextButton.prototype.onAdd = function () {
        this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRollOver, this);
        this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRollOut, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
        this.label0.alpha = 1;
        this.label1.alpha = 0;
    };
    TextButton.prototype.onRemove = function () {
        this.onRollOut();
        this.removeEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRollOver, this);
        this.removeEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRollOut, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
    };
    TextButton.prototype.setSelected = function (b) {
        this.isselected = b;
        this.label1.textColor = this.isselected ? 0x27A5FF : 0x52C5EE;
        if (b) {
            this.onRollOver();
        }
        else {
            this.onRollOut();
        }
    };
    TextButton.prototype.onRollOver = function () {
        //if(this.isselected) return;
        egret.Tween.removeTweens(this.label0);
        egret.Tween.removeTweens(this.label1);
        egret.Tween.get(this.label0).to({ alpha: 0 }, 200);
        egret.Tween.get(this.label1).to({ alpha: 1 }, 200);
    };
    TextButton.prototype.onRollOut = function () {
        if (this.isselected)
            return;
        egret.Tween.removeTweens(this.label0);
        egret.Tween.removeTweens(this.label1);
        egret.Tween.get(this.label0).to({ alpha: 1 }, 200);
        egret.Tween.get(this.label1).to({ alpha: 0 }, 200);
    };
    return TextButton;
}(eui.Button));
__reflect(TextButton.prototype, "TextButton");
//# sourceMappingURL=TextButton.js.map