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
var DuanxianShowUi = (function (_super) {
    __extends(DuanxianShowUi, _super);
    function DuanxianShowUi() {
        var _this = _super.call(this) || this;
        _this.skinName = DuanxianSkin;
        return _this;
    }
    DuanxianShowUi.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        egret.Tween.removeTweens(this.bg);
        egret.Tween.removeTweens(this.allGroup);
        egret.Tween.get(this.allGroup).to({ scaleX: 1, scaleY: 1 }, 100);
        egret.Tween.get(this.bg).to({ alpha: 0.5 }, 100);
        this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, function () {
            var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
            core.UIManager.closeUI(core.UIConst.DuanxianShowUi);
            if (vo.GameData.initData) {
                ui.judgeInit(vo.GameData.initData);
            }
        }, this);
    };
    DuanxianShowUi.prototype.showDuan = function (canclecallfun) {
        if (canclecallfun === void 0) { canclecallfun = null; }
        this.canclecallfun = canclecallfun;
    };
    return DuanxianShowUi;
}(core.BaseUI));
__reflect(DuanxianShowUi.prototype, "DuanxianShowUi");
//# sourceMappingURL=DuanxianShowUi.js.map