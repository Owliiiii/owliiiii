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
var AutoPlayUI = (function (_super) {
    __extends(AutoPlayUI, _super);
    function AutoPlayUI() {
        var _this = _super.call(this) || this;
        _this.skinName = AutoPlayUISkin;
        return _this;
    }
    AutoPlayUI.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.okBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.btn0, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.btn1, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        if (!this.bGroup) {
            this.bGroup = new eui.RadioButtonGroup();
            this.bGroup.addEventListener(egret.Event.CHANGE, this.onChange, this);
            for (var i = 0; i < 5; i++) {
                var rb = this['rb' + i];
                rb.value = GameConfig.autoPlayArr[i];
                rb.group = this.bGroup;
                if (i == 2) {
                    rb.selected = true;
                    this.bGroup.selectedValue = rb.value;
                }
            }
            this.slider0.addEventListener(egret.Event.CHANGE, this.onSliderChange, this);
            this.slider0.id = 0;
            this.numLabel0.text = this.slider0.value.toFixed(2) + '';
            this.slider1.addEventListener(egret.Event.CHANGE, this.onSliderChange, this);
            this.slider1.id = 1;
            this.numLabel1.text = this.slider1.value.toFixed(2) + '';
            this.slider2.addEventListener(egret.Event.CHANGE, this.onSliderChange, this);
            this.slider2.id = 2;
            this.numLabel2.text = this.slider2.value.toFixed(2) + '';
        }
        this.slider0.maximum = GameConfig.singleWinMaxCount; //400
        this.slider0.updata();
        this.slider1.maximum = GameConfig.moneyAddMax; //4000
        this.slider1.updata();
        this.slider2.maximum = GameConfig.moneySubMax; //4000
        this.slider2.updata();
        this.btn1.selected = GameConfig.freeWin;
        this.clearValue();
    };
    AutoPlayUI.prototype.clearValue = function () {
        this.slider0.value = 0;
        this.slider1.value = 0;
        this.slider2.value = 0;
        this.slider0.updata();
        this.slider1.updata();
        this.slider2.updata();
        this.numLabel0.text = this.slider0.value.toFixed(2) + '';
        this.numLabel1.text = this.slider1.value.toFixed(2) + '';
        this.numLabel2.text = this.slider2.value.toFixed(2) + '';
    };
    AutoPlayUI.prototype.onChange = function (e) {
        var v = this.bGroup.selectedValue;
        var s = GameConfig.autoPlayArr[v];
    };
    AutoPlayUI.prototype.onSliderChange = function (e) {
        // console.log("this.slider0.value === " + this.slider0.value);
        this.slider0.snapInterval = vo.GameData.betScoreArr[vo.GameData.betIndex] * 20;
        this.slider1.snapInterval = vo.GameData.betScoreArr[vo.GameData.betIndex] * 200;
        this.slider2.snapInterval = vo.GameData.betScoreArr[vo.GameData.betIndex] * 200;
        var slider = e.currentTarget;
        var id = slider.id;
        // console.log("this.slider0.value === " + slider.value);
        this['numLabel' + id].text = slider.value.toFixed(2) + '';
    };
    AutoPlayUI.prototype.onTab = function (e) {
        switch (e.currentTarget) {
            case this.closeBtn:
                GameManager.getInstance().resume();
                core.UIManager.closeUI(core.UIConst.AutoPlayUI);
                break;
            case this.okBtn:
                this.readData();
                GameManager.getInstance().autoStartGame();
                core.UIManager.closeUI(core.UIConst.AutoPlayUI);
                break;
            case this.btn0:
                GameConfig.someWin = this.btn0.selected;
                break;
            case this.btn1:
                GameConfig.freeWin = this.btn1.selected;
                break;
        }
    };
    AutoPlayUI.prototype.readData = function () {
        GameConfig.singleWinCurCount = this.slider0.value;
        GameConfig.moneyAddCur = this.slider1.value;
        GameConfig.moneySubCur = this.slider2.value;
        vo.GameData.autoPlayCount = this.bGroup.selectedValue;
        // if(vo.GameData.autoPlayCount==undefined)
        // {   
        // 	let rb:MosueRadioButton=this['rb'+1] as MosueRadioButton;
        // 	vo.GameData.autoPlayCount=rb.value;
        // }
        GameConfig.someWin = this.btn0.selected;
        GameConfig.freeWin = this.btn1.selected;
    };
    return AutoPlayUI;
}(core.BaseUI));
__reflect(AutoPlayUI.prototype, "AutoPlayUI");
//# sourceMappingURL=AutoPlayUI.js.map