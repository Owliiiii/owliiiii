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
var MoreGameUI = (function (_super) {
    __extends(MoreGameUI, _super);
    function MoreGameUI() {
        var _this = _super.call(this) || this;
        _this.skinName = MoreGameSkin;
        return _this;
    }
    MoreGameUI.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        this.registerEvent(this.hbackBtn, egret.TouchEvent.TOUCH_TAP, function () {
            core.UIManager.closeUI(core.UIConst.MoreGameUI);
        }, this);
        this.registerEvent(this.bgRect, egret.TouchEvent.TOUCH_TAP, function () {
            core.UIManager.closeUI(core.UIConst.MoreGameUI);
        }, this);
        this.init();
    };
    MoreGameUI.prototype.updataHor = function () {
        this.onRadioChange();
    };
    MoreGameUI.prototype.updataVer = function () {
        this.onRadioChange();
    };
    MoreGameUI.prototype.init = function () {
        if (!this.radioGroup) {
            this.scrolls.viewport = this.lists;
            this.radioGroup = new eui.RadioButtonGroup();
            this.radioGroup.selectedValue = 0;
            this.r0.group = this.radioGroup;
            this.r1.group = this.radioGroup;
            this.r0.value = 0;
            this.r1.value = 1;
            this.radioGroup.addEventListener(egret.Event.CHANGE, this.onRadioChange, this);
            this.lists.itemRenderer = GameItem;
        }
        this.r0.selected = true;
        this.r1.selected = false;
        this.radioGroup.selection = this.r0;
        //this.onRadioChange();
    };
    MoreGameUI.prototype.onRadioChange = function () {
        var config = RES.getRes('config_json');
        var arr = this.radioGroup.selectedValue == 1 ? config.h : config.n;
        this.lists.dataProvider = new eui.ArrayCollection(arr);
        if (this.currentState == 'hor') {
            console.log('a');
            this.lists.layout.paddingLeft = arr.length >= 8 ? 0 : (GameConfig.WIDTH - 144 * arr.length - (10 * arr.length - 1)) / 2;
        }
        else {
            console.log('b');
            this.lists.layout.paddingLeft = (GameConfig.WIDTH - 144 * 3 * 1.2 - 65 * 2) / 2;
        }
    };
    MoreGameUI.prototype.onRemove = function () {
        _super.prototype.onRemove.call(this);
    };
    return MoreGameUI;
}(core.BaseUI));
__reflect(MoreGameUI.prototype, "MoreGameUI");
//# sourceMappingURL=MoreGameUI.js.map