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
var QieHuan = (function (_super) {
    __extends(QieHuan, _super);
    function QieHuan() {
        return _super.call(this) || this;
    }
    QieHuan.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.maskaa.visible = true;
        this.liangDiTu.mask = this.maskaa;
        this.liang.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            GameConfig.musicSected = false;
            egret.Tween.get(_this.liang).to({ x: -40 }, 100);
            // this.liang.visible = false;
            // this.anYuan.visible = true;
            egret.Tween.get(_this.liang).wait(100).call(function () {
                _this.liang.visible = false;
                _this.anYuan.visible = true;
                // this.anYuan.x = 0;
            });
        }, this);
        this.an.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            GameConfig.musicSected = true;
            _this.anYuan.visible = false;
            _this.liang.visible = true;
            _this.liang.x = -40;
            egret.Tween.get(_this.liang).to({ x: 0 }, 100);
        }, this);
    };
    return QieHuan;
}(eui.Component));
__reflect(QieHuan.prototype, "QieHuan");
//# sourceMappingURL=QieHuan.js.map