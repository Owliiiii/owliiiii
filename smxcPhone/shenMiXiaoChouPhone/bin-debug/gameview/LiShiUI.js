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
var LiShiUI = (function (_super) {
    __extends(LiShiUI, _super);
    function LiShiUI(obj, isHaveNext) {
        var _this = _super.call(this) || this;
        _this.skinName = LiShiSkin;
        if (window.innerWidth > window.innerHeight) {
            _this.currentState = 'up';
            // this.width=1920;
        }
        else {
            _this.currentState = 'down';
            // this.width=1080;
        }
        egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE, _this.onEvent, _this);
        _this.init(obj, isHaveNext);
        return _this;
    }
    LiShiUI.prototype.onEvent = function () {
        if (window.innerWidth > window.innerHeight) {
            this.currentState = 'up';
            // this.width=1920;
        }
        else {
            this.currentState = 'down';
            // this.width=1080;
        }
    };
    LiShiUI.prototype.init = function (obj, isHaveNext) {
        this.label1.text = obj["Date"];
        this.label2.text = obj["GameName"] + " Mobile";
        if (this.currentState == "down") {
            if (obj["ActionParameter"]["Bet"] >= 10) {
                this.label3.x = 367.43;
                this.label3.y = -1;
                this.label4.x = 367.7;
                this.label4.y = 24;
            }
            else {
                this.label3.x = 347.68;
                this.label3.y = 11;
                this.label4.x = 397.45;
                this.label4.y = 11;
            }
            if (obj["Value"]["TotalWin"] >= 10) {
                this.label5.x = 456.73;
                this.label5.y = -1;
                this.label6.x = 456.73;
                this.label6.y = 24;
            }
            else {
                this.label5.x = 456.73;
                this.label5.y = 11;
                this.label6.x = 504.46;
                this.label6.y = 11;
            }
        }
        this.label3.text = "CNY";
        this.label4.text = obj["ActionParameter"]["Bet"] + ".00";
        this.label5.text = "CNY";
        this.label6.text = obj["Value"]["TotalWin"] + ".00";
        this.rect1.visible = isHaveNext;
    };
    return LiShiUI;
}(eui.Component));
__reflect(LiShiUI.prototype, "LiShiUI");
//# sourceMappingURL=LiShiUI.js.map