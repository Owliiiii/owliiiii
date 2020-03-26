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
var StartButton = (function (_super) {
    __extends(StartButton, _super);
    function StartButton() {
        var _this = _super.call(this) || this;
        _this._select = false;
        _this.skinName = StartButtonSkin;
        return _this;
    }
    StartButton.prototype.childrenCreated = function () {
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
        this.setlected = false;
    };
    StartButton.prototype.onBegin = function () {
        egret.Tween.removeTweens(this);
        egret.Tween.get(this).to({ scaleX: 0.8, scaleY: 0.8 }, 200);
    };
    StartButton.prototype.onEnd = function () {
        egret.Tween.removeTweens(this);
        egret.Tween.get(this).to({ scaleX: 1, scaleY: 1 }, 200);
    };
    Object.defineProperty(StartButton.prototype, "setlected", {
        get: function () {
            return this._select;
        },
        set: function (b) {
            this._select = b;
            this.bg.source = this._select == false ? 'btn_autogame_normal_png' : 'btn_autogame_normal_yellow_png';
            this.xuanImg.source = this._select == false ? 'btn_round_png' : 'btn_round_yellow_png';
        },
        enumerable: true,
        configurable: true
    });
    return StartButton;
}(eui.Component));
__reflect(StartButton.prototype, "StartButton");
//# sourceMappingURL=StartButton.js.map