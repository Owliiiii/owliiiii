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
var MouseButton3 = (function (_super) {
    __extends(MouseButton3, _super);
    function MouseButton3() {
        var _this = _super.call(this) || this;
        _this.l = 100;
        _this.initFiter();
        return _this;
    }
    MouseButton3.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.updataUI();
    };
    MouseButton3.prototype.onRollOver = function () {
        if (this.enabled == false)
            return;
        this.currentState = 'rollOver';
        this.updataUI();
    };
    MouseButton3.prototype.onRollOut = function () {
        this.currentState = '';
        this.updataUI();
    };
    MouseButton3.prototype.updataUI = function () {
        if (this.currentState == 'rollOver') {
            this.updataText(true);
        }
        else {
            this.updataText(false);
        }
    };
    MouseButton3.prototype.updataText = function (isliang) {
        this.labelDisplay.textColor = isliang ? 0x6CCC8C : 0xffffff;
        // egret.setTimeout(() => {
        // 	(this.labelDisplay as eui.Label).filters = [this.colorFlilter,this.glowFilter];
        // 	console.log('aaaaaaa');
        // }, this, 200);
    };
    MouseButton3.prototype.initFiter = function () {
        //外发光 
        if (!this.glowFilter) {
            var color = 0xFFFFFF; /// 光晕的颜色，十六进制，不包含透明度
            var alpha = 0.01; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
            var blurX = 1; /// 水平模糊量。有效值为 0 到 255.0（浮点）
            var blurY = 1; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
            var strength = 0.01; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
            var quality = 1 /* LOW */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
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
    return MouseButton3;
}(MouseButton));
__reflect(MouseButton3.prototype, "MouseButton3");
//# sourceMappingURL=MouseButton3.js.map