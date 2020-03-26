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
var AutoItem = (function (_super) {
    __extends(AutoItem, _super);
    function AutoItem() {
        return _super.call(this) || this;
    }
    AutoItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        for (var i = 0; i < 5; i++) {
            var btn = this['btn' + i];
            btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        }
        this.autoBtn.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onOver, this);
        this.sGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onOver, this);
        this.autoBtn.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onOut, this);
        this.sGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onOut, this);
        this.sopAutoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStop, this);
    };
    AutoItem.prototype.onOver = function () {
        var _this = this;
        egret.Tween.removeTweens(this.sGroup);
        this.sMainGroup.visible = true;
        egret.Tween.get(this.sGroup).to({ y: 0 }, 300).wait(250).call(function () {
            for (var i = 0; i < 5; i++) {
                var img = _this['liang' + i];
                img.visible = false;
            }
        });
    };
    AutoItem.prototype.onOut = function (e) {
        var _this = this;
        if (!this.sGroup.hitTestPoint(e.stageX, e.stageY) || !this.autoBtn.hitTestPoint(e.stageX, e.stageY)) {
            egret.Tween.removeTweens(this.sGroup);
            egret.Tween.get(this.sGroup).to({ y: 450 }, 300).call(function () {
                for (var i = 0; i < 5; i++) {
                    var img = _this['liang' + i];
                    img.visible = true;
                }
            });
        }
    };
    AutoItem.prototype.onTab = function (e) {
        var _this = this;
        if (vo.GameData.balance < vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line) {
            egret.Tween.get(this.sGroup).to({ y: 450 }, 300).call(function () {
                for (var i = 0; i < 5; i++) {
                    var img = _this['liang' + i];
                    img.visible = true;
                }
            });
            GameManager.getInstance().noMoney();
            return;
        }
        switch (e.currentTarget) {
            case this['btn' + 0]:
                vo.GameData.autoPlayCount = 99;
                GameConfig.autoPlay = true;
                GameConfig.alwaysGame = false;
                GameConfig.lastCount = 99;
                this.autoNum = 99;
                break;
            case this['btn' + 1]:
                vo.GameData.autoPlayCount = 50;
                GameConfig.autoPlay = true;
                GameConfig.alwaysGame = false;
                GameConfig.lastCount = 50;
                this.autoNum = 50;
                break;
            case this['btn' + 2]:
                vo.GameData.autoPlayCount = 25;
                GameConfig.autoPlay = true;
                GameConfig.alwaysGame = false;
                GameConfig.lastCount = 25;
                this.autoNum = 25;
                break;
            case this['btn' + 3]:
                vo.GameData.autoPlayCount = 10;
                GameConfig.autoPlay = true;
                GameConfig.alwaysGame = false;
                GameConfig.lastCount = 10;
                this.autoNum = 10;
                break;
            case this['btn' + 4]://直到环节
                vo.GameData.autoPlayCount = 9999;
                GameConfig.autoPlay = true;
                GameConfig.alwaysGame = true;
                GameConfig.lastCount = 9999;
                this.autoNum = 9999;
                break;
        }
        SoundManager.getInstance().playEffect(SoundConst.ZIDONGSTOP);
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.middleLabel.text = "自动游戏已启用";
        this.autoBtn.visible = false;
        this.autoStopGroup.visible = true;
        this.sMainGroup.visible = false;
        GameManager.getInstance().startGame();
    };
    AutoItem.prototype.onStop = function () {
        SoundManager.getInstance().playEffect(SoundConst.ZIDONGSTOP);
        GameConfig.tuStop = true;
        this.autoStopGroup.visible = false;
        this.autoBtn.visible = true;
        GameConfig.lastCount = 0;
        vo.GameData.autoPlayCount = 0;
        GameConfig.autoPlay = false;
        GameConfig.alwaysGame = false;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.middleLabel.visible = true;
        ui.middleLabel.text = "自动游戏已停止";
        if (ui.leftLabel.visible) {
            ui.leftLabel.visible = false;
            ui.rightLabel.visible = false;
        }
        egret.setTimeout(function () {
            GameConfig.tuStop = false;
            if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
                // ui.middleLabel.text = "点击旋转以开始";
            }
        }, this, 1000);
        if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
            ui.startBtn.visible = true;
            ui.stopBtn.visible = false;
            ui.updataText(false);
            if (vo.GameData.autoPlayCount <= 0) {
                ui.updataBtn();
                ui.infoBtn.enabled = true;
                ui.autoItem.autoBtn.enabled = true;
                ui.speedOffBtn.enabled = true;
                ui.speedOnBtn.enabled = true;
                ui.topMask.visible = false;
                ui.bottomMask.visible = false;
            }
        }
        // SoundManager.getInstance().playEffect(SoundConst.AUTOSTOP1);
    };
    /**
     * resetDo
     */
    AutoItem.prototype.resetDo = function () {
        var _this = this;
        if (vo.GameData.balance < vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line) {
            egret.Tween.get(this.sGroup).to({ y: 450 }, 300).call(function () {
                for (var i = 0; i < 5; i++) {
                    var img = _this['liang' + i];
                    img.visible = true;
                }
            });
            GameManager.getInstance().noMoney();
            return;
        }
        if (GameConfig.lastCount > 0) {
            vo.GameData.autoPlayCount = GameConfig.lastCount;
        }
        else {
            GameConfig.lastCount = this.autoNum;
            vo.GameData.autoPlayCount = GameConfig.lastCount;
        }
        GameConfig.autoPlay = true;
        this.autoBtn.visible = false;
        this.autoStopGroup.visible = true;
        this.sMainGroup.visible = false;
        // SoundManager.getInstance().playEffect(SoundConst.AUTOSTART1);
        GameManager.getInstance().startGame();
    };
    return AutoItem;
}(eui.Component));
__reflect(AutoItem.prototype, "AutoItem");
//# sourceMappingURL=AutoItem.js.map