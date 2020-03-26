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
        var _this = _super.call(this) || this;
        _this.isPlaying = false;
        _this.$SliderBase['6'] = 0;
        return _this;
    }
    MyHslider.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.CHANGE, this.onChange, this);
        this.maximum = 100;
        this.minimum = 0;
        this.value = SoundManager.getInstance().getEffectVolume() * 100;
        this.barl = this.tsbar.width;
        this.tsbar.width = this.barl * this.value / this.maximum;
    };
    MyHslider.prototype.onChange = function (e) {
        this.tsbar.width = this.barl * this.value / this.maximum;
    };
    MyHslider.prototype.setVolues = function (n) {
        this.value = n;
        this.tsbar.width = this.barl * this.value / this.maximum;
    };
    /**点击选择声音，滑动不触发 */
    MyHslider.prototype.onTrackTouchBegin = function (event) {
        _super.prototype.onTrackTouchBegin.call(this, event);
        this.isPlaying = true;
        this.l1x = event.stageX;
        this.l1y = event.stageY;
        this.svalue = this.value;
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    };
    MyHslider.prototype.onTouchEnd = function (e) {
        egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
        egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this.isPlaying = false;
        if (e.target.parent != this) {
            this.dispatchEventWith('MyHslider_STOP');
        }
    };
    MyHslider.prototype.onTouchMove = function (e) {
        this.l2x = e.stageX;
        this.l2y = e.stageY;
        var newValue = this.pointToValue(this.l2x - this.l1x, this.l2y - this.l1y);
        newValue += this.svalue;
        newValue = this.nearestValidValue(newValue, this.snapInterval);
        this.updateWhenTouchMove(newValue);
    };
    return MyHslider;
}(eui.HSlider));
__reflect(MyHslider.prototype, "MyHslider");
//# sourceMappingURL=MyHslider.js.map