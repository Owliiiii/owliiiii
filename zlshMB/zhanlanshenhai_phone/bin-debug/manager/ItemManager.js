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
var ItemManager = (function (_super) {
    __extends(ItemManager, _super);
    function ItemManager() {
        var _this = _super.call(this) || this;
        _this.itemPool = [];
        _this.curPool = [];
        return _this;
    }
    ItemManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new ItemManager();
        }
        return this._instance;
    };
    ItemManager.prototype.createItem = function () {
        var item = this.itemPool.pop();
        if (!item) {
            item = new Item();
        }
        item.reset();
        this.curPool.push(item);
        return item;
    };
    /**
     * 每帧更新
     */
    ItemManager.prototype.updata = function () {
        var n = 0;
        for (var i = 0; i < this.curPool.length; i++) {
            var item = this.curPool[i];
            item.onFrame();
            if (item.isDie) {
                this.curPool.splice(i, 1);
                this.itemPool.unshift(item);
                if (item.parent) {
                    item.parent.removeChild(item);
                }
            }
        }
    };
    return ItemManager;
}(egret.EventDispatcher));
__reflect(ItemManager.prototype, "ItemManager");
//# sourceMappingURL=ItemManager.js.map