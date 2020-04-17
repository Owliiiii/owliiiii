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
var MyHslider = (function (_super) {
    __extends(MyHslider, _super);
    function MyHslider() {
        return _super.call(this) || this;
    }
    MyHslider.prototype.childrenCreated = function () {
        var _this = this;
        this.tsbar.visible = false;
        this.addEventListener(egret.Event.CHANGE, function () {
            _this.tsbar.width = _this.value / _this.maximum * 293;
            _this.tsbar.visible = true;
            console.log("this.value ==== " + _this.value);
        }, this);
        this.testBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (evt) {
            console.log("鼠标====" + (evt.stageX - 81 - 81 - 304));
            _this.thumb.x = evt.stageX - 81 - 81 - 304;
        }, this);
    };
    MyHslider.prototype.updata = function () {
        this.tsbar.width = this.value / this.maximum * 293;
    };
    return MyHslider;
}(eui.HSlider));
__reflect(MyHslider.prototype, "MyHslider");
//# sourceMappingURL=MyHslider.js.map