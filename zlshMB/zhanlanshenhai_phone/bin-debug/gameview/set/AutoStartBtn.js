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
var AutoStartBtn = (function (_super) {
    __extends(AutoStartBtn, _super);
    function AutoStartBtn() {
        var _this = _super.call(this) || this;
        _this._isPlay = false;
        return _this;
    }
    AutoStartBtn.prototype.childrenCreated = function () {
    };
    Object.defineProperty(AutoStartBtn.prototype, "isPlay", {
        // public bonusBtn(isBonus:boolean){
        // 	this.bg.source = isBonus?'btn_autogame_selected_png':'rightbar_autoplay_normal_png';
        // }
        get: function () {
            return this._isPlay;
        },
        set: function (b) {
            this._isPlay = b;
            this.stateIcon.source = this._isPlay ? 'stop_diamonds_png' : 'auto_play_png';
            this.lightIcon.source = this.isPlay ? 'btn_stop_selected_png' : 'rightbar_autoplay_selected_png';
            this.bg.source = this.isPlay ? 'btn_stop_normal_png' : 'rightbar_autoplay_normal_png';
            this.countLabel.visible = this.isPlay;
        },
        enumerable: true,
        configurable: true
    });
    return AutoStartBtn;
}(eui.Component));
__reflect(AutoStartBtn.prototype, "AutoStartBtn");
//# sourceMappingURL=AutoStartBtn.js.map