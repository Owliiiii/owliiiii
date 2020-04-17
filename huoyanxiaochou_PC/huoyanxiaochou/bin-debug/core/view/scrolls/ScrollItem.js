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
var core;
(function (core) {
    var ScrollItem = (function (_super) {
        __extends(ScrollItem, _super);
        function ScrollItem() {
            return _super.call(this) || this;
        }
        ScrollItem.prototype.setData = function (data) {
            this.data = data;
            if (this.data == null) {
                this.visible = false;
            }
            else {
                this.alpha = 1;
                this.visible = true;
            }
        };
        return ScrollItem;
    }(eui.Component));
    core.ScrollItem = ScrollItem;
    __reflect(ScrollItem.prototype, "core.ScrollItem");
})(core || (core = {}));
//# sourceMappingURL=ScrollItem.js.map