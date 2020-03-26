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
var LiShiItem = (function (_super) {
    __extends(LiShiItem, _super);
    function LiShiItem() {
        var _this = _super.call(this) || this;
        _this.onEvent();
        egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE, _this.onEvent, _this);
        return _this;
    }
    LiShiItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    LiShiItem.prototype.onEvent = function () {
        if (window.innerWidth > window.innerHeight) {
            this.currentState = 'u';
            // this.width=1920;
        }
        else {
            this.currentState = 'd';
            // this.width=1080;
        }
    };
    LiShiItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        var obj = this.data;
        // console.log("第几个 === " + this.itemIndex);
        this.winLine.text = "Player won CNY" + obj.Win.toFixed(2) + " at line" + obj.Data.Line;
        if (this.itemIndex == 0) {
            this.icon4.source = 'bicon_' + obj.Symbol + '_0_png';
            this.icon5.source = 'bicon_' + obj.Symbol + '_0_png';
            this.icon6.source = 'bicon_' + obj.Symbol + '_0_png';
        }
        if (this.itemIndex == 1) {
            this.icon1.source = 'bicon_' + obj.Symbol + '_0_png';
            this.icon2.source = 'bicon_' + obj.Symbol + '_0_png';
            this.icon3.source = 'bicon_' + obj.Symbol + '_0_png';
        }
    };
    LiShiItem.prototype.onTab = function (e) {
    };
    return LiShiItem;
}(eui.ItemRenderer));
__reflect(LiShiItem.prototype, "LiShiItem");
//# sourceMappingURL=LiShiItem.js.map