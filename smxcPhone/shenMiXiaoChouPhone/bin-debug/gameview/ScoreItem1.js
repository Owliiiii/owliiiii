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
var ScoreItem1 = (function (_super) {
    __extends(ScoreItem1, _super);
    function ScoreItem1() {
        var _this = _super.call(this) || this;
        _this.skinName = ScrollItem1Skin;
        return _this;
    }
    ScoreItem1.prototype.setData = function (data) {
        _super.prototype.setData.call(this, data);
        this.icons.source = 'feature_' + data + '_png';
    };
    return ScoreItem1;
}(core.ScrollItem));
__reflect(ScoreItem1.prototype, "ScoreItem1");
//# sourceMappingURL=ScoreItem1.js.map