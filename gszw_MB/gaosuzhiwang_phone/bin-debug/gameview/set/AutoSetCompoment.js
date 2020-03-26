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
var AutoSetCompoment = (function (_super) {
    __extends(AutoSetCompoment, _super);
    function AutoSetCompoment() {
        return _super.call(this) || this;
    }
    AutoSetCompoment.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.arrButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.arrButton.selected = SetConst.AUTO_SHOW;
        this.updataState();
        GameManager.getInstance().addEventListener(SetEvent.SET_MODLE, this.onModleChange, this);
        this.mySlider.addEventListener(egret.Event.CHANGE, this.onSliderChange, this);
        core.LayerManager.getInstance().addEventListener(SetEvent.SET_OR_CHANGE, function () {
            _this.updataState();
        }, this);
        this.mySlider.maximum = 9;
        this.mySlider.setValues(9);
        this.onSliderChange();
    };
    AutoSetCompoment.prototype.onSliderChange = function () {
        this.countLabel.text = SetConst.AUTO_COUNT_ARR[this.mySlider.value] + '次旋转';
    };
    AutoSetCompoment.prototype.updataState = function () {
        if (window.innerWidth >= window.innerHeight) {
            this.currentState = 'hor' + SetConst.MODLE;
        }
        else {
            this.currentState = 'ver' + SetConst.MODLE;
        }
        this.onSliderChange();
    };
    AutoSetCompoment.prototype.onTab = function (e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        SoundManager.getInstance().playEffect(SoundConst.BUTTON);
        switch (e.currentTarget) {
            case this.arrButton:
                if (this.arrButton.selected) {
                    SetConst.AUTO_SHOW = true;
                }
                else {
                    SetConst.AUTO_SHOW = false;
                }
                this.goUpdata();
                this.dispatchEventWith(SetEvent.SET_STATE_CHANGE);
                break;
        }
    };
    AutoSetCompoment.prototype.getXY = function () {
        var x;
        var y;
        if (SetConst.MODLE == 0) {
            if (SetConst.AUTO_SHOW) {
                x = this.currentState.indexOf('hor') != -1 ? GameConfig.WIDTH - this.width : GameConfig.WIDTH / 2 - this.width / 2;
                y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 - 10 : GameConfig.HEIGHT / 2 - this.height / 2 - 120;
            }
            else {
                x = this.currentState.indexOf('hor') != -1 ? GameConfig.WIDTH : GameConfig.WIDTH / 2 - this.width / 2;
                y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 : GameConfig.HEIGHT;
            }
        }
        else {
            if (SetConst.AUTO_SHOW) {
                x = this.currentState.indexOf('hor') != -1 ? 0 : GameConfig.WIDTH / 2 - this.width / 2;
                y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 - 10 : GameConfig.HEIGHT / 2 - this.height / 2 - 120;
            }
            else {
                x = this.currentState.indexOf('hor') != -1 ? -this.width : GameConfig.WIDTH / 2 - this.width / 2;
                y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 : GameConfig.HEIGHT;
            }
        }
        return { x: x, y: y };
    };
    AutoSetCompoment.prototype.updata = function () {
        egret.Tween.removeTweens(this);
        this.arrButton.selected = SetConst.AUTO_SHOW;
        var t = this.getXY();
        this.x = t.x;
        this.y = t.y;
    };
    AutoSetCompoment.prototype.goUpdata = function () {
        egret.Tween.removeTweens(this);
        this.arrButton.selected = SetConst.AUTO_SHOW;
        var t = this.getXY();
        egret.Tween.get(this).to({ x: t.x, y: t.y }, 200);
    };
    AutoSetCompoment.prototype.onModleChange = function () {
        this.updataState();
        this.updata();
    };
    return AutoSetCompoment;
}(eui.Component));
__reflect(AutoSetCompoment.prototype, "AutoSetCompoment");
//# sourceMappingURL=AutoSetCompoment.js.map