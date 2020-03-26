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
var RewardUI = (function (_super) {
    __extends(RewardUI, _super);
    function RewardUI() {
        var _this = _super.call(this) || this;
        _this.skinName = RewardSkin;
        return _this;
    }
    RewardUI.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        core.TimerManager.instance.addTick(1000, -1, this.onFrame, this);
        this.registerEvent(this.backBtn, egret.TouchEvent.TOUCH_TAP, function () {
            core.UIManager.closeUI(core.UIConst.RewardUI);
        }, this);
        core.UIManager.openUI(core.UIConst.NetUI, core.LayerManager.Layer_Tip);
        var ui = core.UIManager.getUI(core.UIConst.NetUI);
        ui.showNomalNet();
        egret.setTimeout(function () {
            core.UIManager.closeUI(core.UIConst.NetUI);
            ui.hideNetting();
        }, this, 1000);
    };
    RewardUI.prototype.onRemove = function () {
        _super.prototype.onRemove.call(this);
        core.TimerManager.instance.removeTick(this.onFrame, this);
    };
    /**
   * 更新时间
   */
    RewardUI.prototype.onFrame = function (e) {
        var crtTime = new Date();
        this.timeLabel.text = dateFtt("yyyy-MM-dd hh:mm:ss", crtTime) + ' ' + GameConfig.CasinoGame.PlayerId;
    };
    return RewardUI;
}(core.BaseUI));
__reflect(RewardUI.prototype, "RewardUI");
//# sourceMappingURL=RewardUI.js.map