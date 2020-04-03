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
var FreeBtn = (function (_super) {
    __extends(FreeBtn, _super);
    function FreeBtn() {
        return _super.call(this) || this;
    }
    FreeBtn.prototype.childrenCreated = function () {
    };
    return FreeBtn;
}(eui.Component));
__reflect(FreeBtn.prototype, "FreeBtn");
//# sourceMappingURL=FreeBtn.js.map