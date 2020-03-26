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
    var NomalLoadingUI = (function (_super) {
        __extends(NomalLoadingUI, _super);
        function NomalLoadingUI() {
            var _this = _super.call(this) || this;
            _this.skinName = NomalLoadingUISkin;
            return _this;
        }
        NomalLoadingUI.prototype.onAdd = function () {
            _super.prototype.onAdd.call(this);
            this.bar.mask = this.masks;
        };
        NomalLoadingUI.prototype.setPross = function (cur, max) {
            var n = cur / max;
            this.bar.x = (this.lgroup.width) * (n - 1);
        };
        return NomalLoadingUI;
    }(core.BaseUI));
    core.NomalLoadingUI = NomalLoadingUI;
    __reflect(NomalLoadingUI.prototype, "core.NomalLoadingUI");
})(core || (core = {}));
//# sourceMappingURL=NomalLoadingUI.js.map