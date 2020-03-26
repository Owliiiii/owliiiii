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
var PreviewCompoment = (function (_super) {
    __extends(PreviewCompoment, _super);
    function PreviewCompoment() {
        var _this = _super.call(this) || this;
        _this.skinName = PreviewSkin;
        return _this;
    }
    PreviewCompoment.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        // this.lightImg.pixelHitTest = true;
        this.cGroup.mask = this.masks;
        this.lightImg.mask = this.btnMask;
        this.lightImg.alpha = 0.9;
        // core.TimerManager.instance.addTick(80, -1, () => {
        // 	this.lightImg.x += 75;
        // 	if (this.lightImg.x >= 580) {		//每次频率
        // 		this.lightImg.x = -580;
        // 	}
        // }, this);
        var x = this.lightImg.x;
        this.lightImg.x = x - this.btnMask.width;
        ;
        egret.Tween.get(this.lightImg).to({ x: x + this.btnMask.width + this.btnMask.width - 250 }, 750);
        egret.setInterval(function () {
            _this.lightImg.x = x - _this.btnMask.width;
            ;
            egret.Tween.get(_this.lightImg).to({ x: x + _this.btnMask.width + _this.btnMask.width + 250 }, 750);
        }, this, 1400);
        this.scroll = new core.MyScorll(this.cGroup, ScoreItem1);
        this.scroll.setData([0, 1]);
        this.scroll.addEventListener(egret.Event.CHANGE, this.onChange, this);
        this.upDataIndex();
        this.selectedBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.r0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.r1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
    };
    PreviewCompoment.prototype.onChange = function () {
        this.upDataIndex();
    };
    PreviewCompoment.prototype.upDataIndex = function () {
        if (this.scroll.index == 0) {
            this.r0.selected = true;
        }
        else {
            this.r1.selected = true;
        }
    };
    PreviewCompoment.prototype.onTab = function (e) {
        switch (e.currentTarget) {
            case this.selectedBtn:
                egret.localStorage.setItem('isShowlogin', this.selectedBtn.selected ? '0' : '1');
                break;
            case this.nextBtn:
                var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
                ui.showMain();
                break;
            case this.r0:
                this.scroll.setIndex2(0);
                break;
            case this.r1:
                this.scroll.setIndex2(1);
                break;
        }
    };
    return PreviewCompoment;
}(eui.Component));
__reflect(PreviewCompoment.prototype, "PreviewCompoment");
//# sourceMappingURL=PreviewCompoment.js.map