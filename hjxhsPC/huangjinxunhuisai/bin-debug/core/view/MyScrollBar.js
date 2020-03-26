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
var MyScrollBar = (function (_super) {
    __extends(MyScrollBar, _super);
    function MyScrollBar() {
        var _this = _super.call(this) || this;
        _this.islong = false;
        _this.moveState = 0;
        _this.skinName = MyScrollBarSkin;
        return _this;
    }
    MyScrollBar.prototype.childrenCreated = function () {
        var _this = this;
        this.maximum = 100;
        this.minimum = 0;
        this.value = 100;
        core.MyUIUtils.addLongTouch(this.subtn, function () {
            _this.moveState = 1;
            _this.islong = true;
        }, function () {
            _this.moveState = 0;
        }, this);
        core.MyUIUtils.addLongTouch(this.addBtn, function () {
            _this.moveState = -1;
            _this.islong = true;
        }, function () {
            _this.moveState = 0;
        }, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
        this.subtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
    };
    MyScrollBar.prototype.onFrame = function () {
        if (this.moveState == -1) {
            this.value -= 1;
            this.dispatchEventWith(egret.Event.CHANGE);
        }
        if (this.moveState == 1) {
            this.value += 1;
            this.dispatchEventWith(egret.Event.CHANGE);
        }
    };
    MyScrollBar.prototype.onTab = function (e) {
        if (this.islong) {
            this.islong = false;
            return;
        }
        switch (e.currentTarget) {
            case this.subtn:
                this.value += 10;
                this.dispatchEventWith(egret.Event.CHANGE);
                break;
            case this.addBtn:
                this.value -= 10;
                this.dispatchEventWith(egret.Event.CHANGE);
                break;
        }
    };
    return MyScrollBar;
}(eui.VSlider));
__reflect(MyScrollBar.prototype, "MyScrollBar");
//# sourceMappingURL=MyScrollBar.js.map