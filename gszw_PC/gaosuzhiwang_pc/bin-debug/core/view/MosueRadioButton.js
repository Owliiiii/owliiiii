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
        _this.initFiter();
        mouse.setButtonMode(_this, true);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAdd, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemove, _this);
        return _this;
    }
    MosueRadioButton.prototype.onAdd = function () {
        this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRollOver, this);
        this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRollOut, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRollOver, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
        this.group.addEventListener(egret.Event.CHANGE, this.onChange, this);
        this.updataUI();
    };
    MosueRadioButton.prototype.onRemove = function () {
        this.removeEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollOver, this);
        this.removeEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRollOver, this);
        this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
    };
    MosueRadioButton.prototype.onRollOver = function (e) {
        if (this.enabled == false)
            return;
        if (e.type == egret.TouchEvent.TOUCH_TAP)
            this.onClick();
        if (this.selected) {
            this.currentState = 'rollOverAndSelected';
        }
        else {
            this.currentState = 'rollOver';
        }
        this.updataUI();
        this.dispatchEventWith(egret.Event.CHANGE);
    };
    MosueRadioButton.prototype.onRollOut = function () {
        this.currentState = '';
        this.updataUI();
        this.dispatchEventWith(egret.Event.CHANGE);
    };
    MosueRadioButton.prototype.onChange = function () {
        if (this.group.selectedValue != this.value) {
            this.onRollOut();
        }
    };
    MosueRadioButton.prototype.onClick = function () {
        //SoundManager.getInstance().playEffect(SoundConst.CHECKSTART);
    };
    MosueRadioButton.prototype.updataUI = function () {
        if (this.currentState == 'up') {
            this.updataText(false);
        }
        else {
            this.updataText(true);
        }
    };
    MosueRadioButton.prototype.updataText = function (isliang) {
        this.labelDisplay.textColor = isliang ? 0xffffff : 0x787d83;
        this.labelDisplay.filters = isliang ? [this.colorFlilter, this.glowFilter] : [];
    };
    MosueRadioButton.prototype.initFiter = function () {
        //外发光 
        if (!this.glowFilter) {
            var color = 0xFFFFFF; /// 光晕的颜色，十六进制，不包含透明度
            var alpha = 0.1; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
            var blurX = 3; /// 水平模糊量。有效值为 0 到 255.0（浮点）
            var blurY = 3; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
            var strength = 10; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
            var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
            var inner = false; /// 指定发光是否为内侧发光，暂未实现
            var knockout = false; /// 指定对象是否具有挖空效果，暂未实现
            this.glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
        }
        //内亮度
        var colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        if (!this.colorFlilter) {
            this.colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        }
    };
    return MosueRadioButton;
}(eui.RadioButton));
__reflect(MosueRadioButton.prototype, "MosueRadioButton");
//# sourceMappingURL=MosueRadioButton.js.map