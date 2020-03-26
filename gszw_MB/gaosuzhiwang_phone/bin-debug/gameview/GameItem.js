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
var GameItem = (function (_super) {
    __extends(GameItem, _super);
    function GameItem() {
        var _this = _super.call(this) || this;
        _this.skinName = GameItemSkin;
        return _this;
    }
    GameItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
    };
    GameItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        egret.ImageLoader.crossOrigin = 'anonymous';
        this.icons.source = this.data.icon;
        this.nameLabel.text = this.data.name;
        if (window.innerWidth > window.innerHeight) {
            this.currentState = 'hor';
        }
        else {
            this.currentState = 'ver';
        }
    };
    GameItem.prototype.onTab = function () {
        window.location.href = this.data.href;
    };
    return GameItem;
}(eui.ItemRenderer));
__reflect(GameItem.prototype, "GameItem");
//# sourceMappingURL=GameItem.js.map