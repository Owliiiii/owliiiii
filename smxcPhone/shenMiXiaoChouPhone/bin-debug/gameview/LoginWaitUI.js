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
var LoginWaitUI = (function (_super) {
    __extends(LoginWaitUI, _super);
    // public label: eui.Label;
    function LoginWaitUI() {
        var _this = _super.call(this) || this;
        _this.tweeNum = 1;
        _this.playIng = true;
        _this.oneZuoBiao = 0;
        // this.onAdd();
        _this.skinName = LoginWaitSkin;
        return _this;
        // egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE,this.onEvent,this);
    }
    LoginWaitUI.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.mainScenceInit();
        this.showTween();
        this.addTOUCH();
    };
    LoginWaitUI.prototype.onChange = function () {
        this.upDataIndex();
    };
    LoginWaitUI.prototype.upDataIndex = function () {
        if (this.scroll.index != 0) {
            this.r0.selected = true;
        }
        else {
            this.r1.selected = true;
        }
    };
    LoginWaitUI.prototype.addTOUCH = function () {
        this.cGroup.mask = this.masks;
        this.scroll = new core.MyScorll(this.cGroup, ScoreItem1);
        this.scroll.setData([0, 1]);
        this.scroll.addEventListener(egret.Event.CHANGE, this.onChange, this);
        this.upDataIndex();
        this.registerEvent(this.goIn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.not, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.r0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.r1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
    };
    LoginWaitUI.prototype.begin = function (e) {
        this.oneZuoBiao = e.stageX;
    };
    LoginWaitUI.prototype.onTab = function (e) {
        switch (e.currentTarget) {
            case this.r0:
                this.scroll.setIndex2(1);
                break;
            case this.r1:
                this.scroll.setIndex2(0);
                break;
            case this.goIn://继续
                // this.showYouYiDong
                if (this.not.source == "xuanZhong_png") {
                    egret.localStorage.setItem("not", "false");
                }
                else {
                    egret.localStorage.setItem("not", "true");
                }
                var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
                ui.showMain();
                // ui.mainScenceInit();
                break;
            case this.not://不在显示
                if (this.not.source == "feature_preview_texture0_level1_02_png") {
                    this.not.source = "xuanZhong_png";
                }
                else {
                    this.not.source = "feature_preview_texture0_level1_02_png";
                }
                break;
        }
    };
    /**
     * 展示页面动画
     */
    LoginWaitUI.prototype.showTween = function () {
        var _this = this;
        this.lightImg.visible = true;
        this.kk.visible = true;
        this.lightImg.mask = this.kk;
        var x = this.lightImg.x;
        this.lightImg.x = x - this.kk.width;
        egret.Tween.get(this.lightImg).to({ x: x + this.kk.width + this.kk.width - 250 }, 700);
        egret.setInterval(function () {
            _this.lightImg.x = x - _this.kk.width;
            egret.Tween.get(_this.lightImg).to({ x: x + _this.kk.width + _this.kk.width + 250 }, 700);
        }, this, 1500);
        // this.mainkk.visible = true;
        // this.mainkk0.visible = true;
        // this.mianFei.mask = this.mainkk0;
        // this.shengMi.mask = this.mainkk;
        // this.shengMiWidth = this.shengMi.width*this.shengMi.scaleX ;
        // this.mianFeiWidth = this.mianFei.width*this.mianFei.scaleX ;
        // this.shengMi.x = this.shengMi.x+this.shengMiWidth ;
        // this.mianFei.x = this.mianFei.x;
        // this.shengMix = this.shengMi.x ;
        // this.mianFeix = this.mianFei.x ;
        // this.shengMi.x = 1192;
        // this.mianFei.x = 445;
        // this.moveTest();
        // this.moveTest1();
        // this.twee = egret.setInterval( ()=> {
        // 	if(this.tweeNum%2==1){
        // 		this.showZuoYiDong();
        // 	}else{
        // 		this.showYouYiDong();
        // 	}
        // }, this, 2000);
    };
    return LoginWaitUI;
}(core.BaseUI));
__reflect(LoginWaitUI.prototype, "LoginWaitUI");
//# sourceMappingURL=LoginWaitUI.js.map