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
var ExtraBonusEntry = (function (_super) {
    __extends(ExtraBonusEntry, _super);
    // public bonusGroup: eui.Group;
    // public bonusClip: BonusAnimation;
    function ExtraBonusEntry() {
        var _this = _super.call(this) || this;
        _this.skinName = ExtraBonusEntrySkin;
        // core.TimerManager.instance.addTick(1000, -1, this.onFrame, this);
        // core.LayerManager.getInstance().addEventListener(SetEvent.SET_OR_CHANGE, () => {
        // 	this.updataState();
        // }, this);
        GameManager.getInstance().addEventListener(SetEvent.EXTRA_BONUS_SHOWBONUS, _this.onDataChanged, _this);
        GameManager.getInstance().addEventListener(SetEvent.EXTRA_BONUS_OVER, _this.onDataChanged, _this);
        return _this;
    }
    ExtraBonusEntry.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    ExtraBonusEntry.prototype.judgeInit = function (type) {
        if (type === void 0) { type = 0; }
        if (!GameManager.getInstance().hasEventListener(SetEvent.TOOLS_SHOW)) {
            GameManager.getInstance().addEventListener(SetEvent.TOOLS_SHOW, this.onDataChanged, this);
        }
        // console.log('应该显示第几个===', type);
        this.toolsGroup.visible = true;
        this.setScore();
        this.hideORShowTools(type);
        if (type == 0) {
            this.optionUI.firstInit();
        }
        else if (type == 1) {
            this.optionUI.secondInit();
        }
        else if (type == 2) {
            this.optionUI.thirdInit();
        }
    };
    ExtraBonusEntry.prototype.hideORShowTools = function (idx) {
        if (idx === void 0) { idx = 0; }
        for (var i = 0; i < this.selection.numChildren - 1; i++) {
            if (i < idx) {
                this['tools' + (i + 1)].visible = true;
            }
            else {
                this['tools' + (i + 1)].visible = false;
            }
        }
    };
    ExtraBonusEntry.prototype.setScore = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.score.text = 'x' + GameManager.numberToCommonStr1(vo.GameData.balance);
    };
    ExtraBonusEntry.prototype.displayTools = function (data) {
        var _this = this;
        var img = this['tools' + data.num];
        // console.log(data.num,img)  
        img.visible = true;
        if (data.num == 1) {
            if (data.idx == 3) {
                img.x = -29.79;
            }
            else {
                img.x = -56.79;
            }
        }
        if (data.num == 2) {
            if (data.idx == 5) {
                img.x = -64.2;
            }
            else {
                img.x = -31.2;
            }
        }
        img.source = data.num + '_' + data.idx + '_png';
        if (data.num == 3) {
            var ui_1 = core.UIManager.getUI(core.UIConst.MainScenceUI);
            egret.setTimeout(function () {
                ui_1.bonusGroup.visible = true;
                _this.toolsGroup.visible = false;
                ui_1.bonusClip.init();
            }, this, 300);
        }
    };
    ExtraBonusEntry.prototype.onDataChanged = function (e) {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        switch (e.type) {
            case SetEvent.TOOLS_SHOW:
                console.log(e.data);
                this.displayTools(e.data);
                break;
            case SetEvent.EXTRA_BONUS_OVER:
                console.log('点击返回按钮之后');
                ui.bonusGroup.visible = false;
                ui.closeHongli();
                // this.toolsGroup.visible = true;
                break;
            case SetEvent.EXTRA_BONUS_SHOWBONUS:
                console.log('出现奖杯');
                ui.bonusGroup.visible = true;
                // ui.gameOver.visible = true;
                this.toolsGroup.visible = false;
                ui.gameOver.visible = true;
                ui.bonusMask.visible = true;
                break;
        }
    };
    /**
    * 更新时间
    */
    ExtraBonusEntry.prototype.onFrame = function (e) {
        var crtTime = new Date();
        // this.timeLabel.text =  dateFtt(" yyyy-MM-dd hh:mm:ss ", crtTime) + GameConfig.CasinoGame.PlayerId;
    };
    return ExtraBonusEntry;
}(eui.Component));
__reflect(ExtraBonusEntry.prototype, "ExtraBonusEntry");
//# sourceMappingURL=ExtraBonusEntry.js.map