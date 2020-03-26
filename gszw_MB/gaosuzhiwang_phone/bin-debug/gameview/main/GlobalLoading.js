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
var GlobalLoading = (function (_super) {
    __extends(GlobalLoading, _super);
    function GlobalLoading() {
        var _this = _super.call(this) || this;
        _this.skinName = GlobalLoadingSkin;
        return _this;
    }
    GlobalLoading.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        this.sprite = new egret.Sprite();
        this.sprite.width = this.mainGroup.width;
        this.sprite.height = this.mainGroup.height;
        this.mainGroup.addChild(this.sprite);
        this.setPross(0);
        console.log(this.sprite);
    };
    GlobalLoading.prototype.setPross = function (n) {
        this.loadingLabel.text = Math.ceil(n) + "%";
        var p = n / 100;
        var endangle = -Math.PI / 2 + Math.PI * 2 * p;
        this.sprite.graphics.beginFill(0x000000);
        this.sprite.graphics.drawArc(this.mainGroup.width / 2, this.mainGroup.height / 2, this.mainGroup.width / 2, -Math.PI / 2, endangle);
        this.sprite.graphics.endFill();
        this.quanImg.mask = this.sprite;
    };
    GlobalLoading.prototype.onOChange = function () {
        var _this = this;
        egret.clearTimeout(this.ts);
        var s = window.innerHeight / window.innerWidth;
        if (window.innerWidth >= window.innerHeight) {
            if (egret.Capabilities.os == 'iOS') {
                window['$']('#gamediv').css('height', window.innerHeight + 1);
                window['$']('#gamediv').css('width', window.innerWidth + 1);
            }
            this.currentState = 'hor';
            egret.MainContext.instance.stage.setContentSize(1334, 650);
        }
        else {
            if (egret.Capabilities.os == 'iOS') {
                window['$']('#gamediv').css('height', window.innerHeight + 1);
                window['$']('#gamediv').css('width', window.innerWidth + 1);
            }
            this.currentState = 'ver';
            egret.MainContext.instance.stage.setContentSize(750, 1100);
        }
        this.ts = egret.setTimeout(function () {
            _this.onResize();
        }, this, 300);
    };
    return GlobalLoading;
}(core.BaseUI));
__reflect(GlobalLoading.prototype, "GlobalLoading");
//# sourceMappingURL=GlobalLoading.js.map