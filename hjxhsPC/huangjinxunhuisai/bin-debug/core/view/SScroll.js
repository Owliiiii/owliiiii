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
var SScroll = (function (_super) {
    __extends(SScroll, _super);
    function SScroll() {
        var _this = _super.call(this) || this;
        _this.isScroll = false;
        return _this;
    }
    SScroll.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        egret.MainContext.instance.stage.addEventListener(mouse.MouseEvent.MOUSE_WHEEL, this.onWhell, this);
        this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMove, this);
        this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMove, this);
        this.bounces = false;
    };
    SScroll.prototype.onWhell = function (e) {
        if (this.isScroll) {
            var d = e.data;
            if (d > 0) {
                if (this.viewport.scrollV >= 30) {
                    this.viewport.scrollV -= 30;
                }
                else {
                    this.viewport.scrollV = 0;
                }
            }
            else {
                if (this.viewport.scrollV <= this.viewport.contentHeight - this.viewport.height - 30) {
                    this.viewport.scrollV += 30;
                }
                else {
                    this.viewport.scrollV = this.viewport.contentHeight - this.viewport.height;
                }
            }
            this.dispatchEventWith(egret.Event.CHANGE);
        }
    };
    SScroll.prototype.setPerCent = function (p) {
        var s = p / 100;
        this.viewport.scrollV = (this.viewport.contentHeight - this.viewport.height) * s;
    };
    SScroll.prototype.getPerCent = function () {
        return Math.floor(this.viewport.scrollV / (this.viewport.contentHeight - this.viewport.height) * 100);
    };
    SScroll.prototype.onMove = function (e) {
        if (this.hitTestPoint(e.stageX, e.stageY)) {
            this.isScroll = true;
        }
        else {
            this.isScroll = false;
        }
    };
    return SScroll;
}(eui.Scroller));
__reflect(SScroll.prototype, "SScroll");
//# sourceMappingURL=SScroll.js.map