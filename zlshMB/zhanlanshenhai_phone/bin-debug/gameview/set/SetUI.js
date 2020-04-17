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
var SetUI = (function (_super) {
    __extends(SetUI, _super);
    function SetUI() {
        var _this = _super.call(this) || this;
        _this.isautoShow = false;
        _this.skinName = SetUISkin;
        return _this;
    }
    SetUI.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.updataState();
        this.musicCheck.selected = SoundManager.getInstance().effectOn;
        this.setBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.maskRect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.moreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.gameButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.betBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.betSetCompoment.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.autoSetCompoment.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.qukcheckBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.homeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.crashBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.moresBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.historyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.surpotBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.rewardBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.musicCheck.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.modleCheckButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.exitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.btnBg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        core.TimerManager.instance.addTick(1000, -1, this.onFrame, this);
        this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.FreeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.autoButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        GameManager.getInstance().addEventListener(SetEvent.SET_AUTO_CHANGED, this.onDataChanged, this);
        GameManager.getInstance().addEventListener(SetEvent.SET_SPEED_CHANGED, this.onDataChanged, this);
        GameManager.getInstance().addEventListener(SetEvent.SET_BET_CHANGE, this.onDataChanged, this);
        GameManager.getInstance().addEventListener(SetEvent.SET_LINE_CHANGE, this.onDataChanged, this);
        GameManager.getInstance().addEventListener(SetEvent.SET_BALANCE_CHANGE, this.onDataChanged, this);
        GameManager.getInstance().addEventListener(SetEvent.SET_MUSIC_CHANGE, this.onDataChanged, this);
        this.autoSetCompoment.addEventListener(SetEvent.SET_STATE_CHANGE, this.onStateChange, this);
        this.betSetCompoment.addEventListener(SetEvent.SET_STATE_CHANGE, this.onStateChange, this);
        GameManager.getInstance().addEventListener(SetEvent.SET_MODLE, this.onModleChange, this);
        core.MyUIUtils.addLongTouch(this.startButton, function () {
            SoundManager.getInstance().playEffect(SoundConst.BUTTON);
            SetConst.LONG_TOUCH = true;
            SetConst.AUTO_SHOW = true;
            _this.startButton.visible = false;
            _this.autoButton.visible = true;
            _this.autoButton.isPlay = false;
            _this.autoSetCompoment.goUpdata();
            SetConst.BETSET_SHOW = false;
            _this.betSetCompoment.goUpdata();
            _this.updataBtnState();
            _this.betBtn.enabled = _this.qukcheckBtn.enabled = !SetConst.AUTO_SHOW;
            GameManager.getInstance().dispatchEventWith(SetEvent.SET_HIDE_REWARD);
        }, function () {
            egret.callLater(function () {
                SetConst.LONG_TOUCH = false;
            }, _this);
        });
        this.rewradMaxGroup.visible = false;
    };
    SetUI.prototype.updataState = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        if (window.innerWidth >= window.innerHeight) {
            //蓝色字体
            this.t0.textColor = 0x0ED9F7;
            this.t1.textColor = 0x0ED9F7;
            this.t2.textColor = 0x0ED9F7;
            this.t3.textColor = 0x0ED9F7;
            this.t4.textColor = 0x0ED9F7;
        }
        else {
            // this.currentState = 'ver'+SetConst.MODLE;
            this.t0.textColor = 0xFCCB44;
            this.t1.textColor = 0xFCCB44;
            this.t2.textColor = 0xFCCB44;
            this.t3.textColor = 0xFCCB44;
            this.t4.textColor = 0xFCCB44;
        }
    };
    SetUI.prototype.updataHor = function () {
        this.updataSame();
        var gap = (GameConfig.WIDTH - 635 - 60) / 8;
        this.btnGroup.layout.gap = gap;
        this.btnGroup.layout.paddingLeft = 30;
    };
    SetUI.prototype.updataVer = function () {
        var gap = (GameConfig.WIDTH - 60 - 5 * 64 - 16) / 4;
        this.btnGroup.layout.gap = gap;
        this.updataSame();
    };
    SetUI.prototype.updataSame = function () {
        egret.Tween.removeTweens(this.bottomGroup);
        this.bottomChange();
        this.rewardGroup.visible = SetConst.REWARD_SMALLSHOW;
        this.bottomGroup.y = GameConfig.HEIGHT - this.bottomGroup.height;
        this.topGroup.y = SetConst.TOP_SHOW ? 0 : -230;
        this.rightGroup.x = SetConst.RIGHT_SHOW ? 0 : 200;
        this.maskRect.visible = SetConst.TOP_SHOW || SetConst.RIGHT_SHOW;
        this.scrolls.viewport.scrollH = 0;
        this.betSetCompoment.updata();
        this.autoSetCompoment.updata();
        this.updataControllGroup();
        this.updataBtnState();
        this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
        this.totalBet.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line);
        this.lineLabel.text = vo.GameData.line + '';
        this.balanceLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.balance);
        this.betBtn.selected = SetConst.BETSET_SHOW;
        if (this.currentState == 'ver') {
            this.betBtn.visible = this.qukGroup.visible = SetConst.AUTO ? false : true;
        }
        else {
            this.betBtn.visible = this.qukGroup.visible = false;
        }
    };
    SetUI.prototype.onTab = function (e) {
        switch (e.currentTarget) {
            case this.btnBg:
                e.stopPropagation();
                e.stopImmediatePropagation();
                break;
            case this.setBtn:
                e.stopPropagation();
                e.stopImmediatePropagation();
                egret.Tween.get(this.topGroup).to({ y: 0 }, 500, egret.Ease.backOut);
                this.maskRect.visible = true;
                SetConst.TOP_SHOW = true;
                break;
            case this.maskRect:
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.maskRect.visible = false;
                egret.Tween.get(this.topGroup).to({ y: -230 }, 500, egret.Ease.backIn);
                egret.Tween.get(this.rightGroup).to({ x: 200 }, 200);
                SetConst.TOP_SHOW = false;
                SetConst.RIGHT_SHOW = false;
                break;
            case this.moresBtn:
                e.stopPropagation();
                e.stopImmediatePropagation();
                core.UIManager.openUI(core.UIConst.MoreGameUI, core.LayerManager.Layer_Top);
                this.maskRect.visible = false;
                egret.Tween.get(this.topGroup).to({ y: -230 }, 500, egret.Ease.backIn);
                egret.Tween.get(this.rightGroup).to({ x: 200 }, 200);
                SetConst.TOP_SHOW = false;
                SetConst.RIGHT_SHOW = false;
                break;
            case this.backButton:
                this.maskRect.visible = false;
                SetConst.RIGHT_SHOW = false;
                egret.Tween.get(this.rightGroup).to({ x: 200 }, 200);
                break;
            case this.gameButton:
                this.maskRect.visible = false;
                SetConst.RIGHT_SHOW = false;
                egret.Tween.get(this.rightGroup).to({ x: 200 }, 200);
                core.UIManager.openUI(core.UIConst.MoreGameUI, core.LayerManager.Layer_Top);
                break;
            case this.betBtn:
                e.stopImmediatePropagation();
                SoundManager.getInstance().playEffect(SoundConst.BUTTON);
                SetConst.BETSET_SHOW = !SetConst.BETSET_SHOW;
                SetConst.AUTO_SHOW = false;
                this.betSetCompoment.goUpdata();
                this.autoSetCompoment.goUpdata();
                this.betBtn.selected = SetConst.BETSET_SHOW;
                GameManager.getInstance().dispatchEventWith(SetEvent.SET_HIDE_REWARD);
                //this.betBtn.enabled = this.qukcheckBtn.enabled = !SetConst.BETSET_SHOW;
                this.autoButton.visible = false;
                if (!GameConfig.isFree) {
                    this.startButton.visible = true;
                }
                break;
            case this.stage:
                if (!GameConfig.isBonusBtn) {
                    if (SetConst.BETSET_SHOW || SetConst.AUTO_SHOW) {
                        SoundManager.getInstance().playEffect(SoundConst.SUB);
                    }
                    SetConst.BETSET_SHOW = false;
                    SetConst.AUTO_SHOW = false;
                    this.betSetCompoment.goUpdata();
                    this.autoSetCompoment.goUpdata();
                    this.betBtn.selected = SetConst.BETSET_SHOW;
                    this.updataBtnState();
                    if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
                        this.betBtn.enabled = this.qukcheckBtn.enabled = !SetConst.BETSET_SHOW;
                    }
                }
                break;
            case this.modleCheckButton:
                e.stopPropagation();
                e.stopImmediatePropagation();
                SetConst.MODLE = this.modleCheckButton.selected ? 1 : 0;
                GameManager.getInstance().dispatchEventWith(SetEvent.SET_MODLE);
                break;
            case this.startButton:
            case this.FreeBtn:
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.betBtn.selected = false;
                SoundManager.getInstance().playEffect(SoundConst.STARTBTN);
                egret.Tween.removeTweens(this.tipLabel);
                if (SetConst.LONG_TOUCH)
                    return;
                GameManager.getInstance().dispatchEventWith(SetEvent.SET_START);
                break;
            case this.autoButton:
                e.stopPropagation();
                e.stopImmediatePropagation();
                SoundManager.getInstance().playEffect(SoundConst.BUTTON);
                if (this.autoButton.isPlay) {
                    SetConst.AUTO_COUNT = 0;
                    SetConst.AUTO = false;
                    SetConst.handStop = true;
                    this.autoButton.visible = false;
                    this.betBtn.visible = true;
                    this.qukGroup.visible = true;
                    if (this.isautoShow != SetConst.AUTO) {
                        this.isautoShow = SetConst.AUTO;
                        this.bottomAutoGoUpdata();
                    }
                    if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
                        this.updataBtnState();
                        this.autoButton.isPlay = false;
                    }
                }
                else {
                    SetConst.handStop = false;
                    SetConst.AUTO_COUNT = SetConst.AUTO_COUNT_ARR[this.autoSetCompoment.mySlider.value];
                    SetConst.AUTO = true;
                    GameManager.getInstance().dispatchEventWith(SetEvent.SET_START, false, 1);
                    egret.Tween.removeTweens(this.tipLabel);
                }
                break;
            case this.autoSetCompoment:
                e.stopPropagation();
                e.stopImmediatePropagation();
                break;
            case this.rewardBtn:
                e.stopPropagation();
                e.stopImmediatePropagation();
                core.UIManager.openUI(core.UIConst.RewardUI, core.LayerManager.Layer_Top);
                this.maskRect.visible = false;
                egret.Tween.get(this.topGroup).to({ y: -230 }, 500, egret.Ease.backIn);
                egret.Tween.get(this.rightGroup).to({ x: 200 }, 200);
                SetConst.TOP_SHOW = false;
                SetConst.RIGHT_SHOW = false;
                break;
            case this.helpBtn:
                e.stopPropagation();
                e.stopImmediatePropagation();
                core.UIManager.openUI(core.UIConst.HelpUI, core.LayerManager.Layer_Top);
                this.maskRect.visible = false;
                egret.Tween.get(this.topGroup).to({ y: -230 }, 500, egret.Ease.backIn);
                egret.Tween.get(this.rightGroup).to({ x: 200 }, 200);
                SetConst.TOP_SHOW = false;
                SetConst.RIGHT_SHOW = false;
                break;
            case this.homeBtn:
                window.open(window['dataUrl'].homePath);
                break;
            case this.crashBtn:
                window.open(window['dataUrl'].crashPath);
                break;
            case this.historyBtn:
                window.open(window['dataUrl'].historyPath);
                break;
            case this.surpotBtn:
                window.open(window['dataUrl'].suportPath);
                break;
            case this.musicCheck:
                e.stopPropagation();
                e.stopImmediatePropagation();
                SoundManager.getInstance().setBgOn(this.musicCheck.selected);
                SoundManager.getInstance().setEffectOn(this.musicCheck.selected);
                GameManager.getInstance().dispatchEventWith(SetEvent.SET_MUSIC_CHANGE);
                break;
            case this.exitBtn:
                window.location.href = window['dataUrl'].exitPath;
                break;
            case this.qukcheckBtn:
                e.stopPropagation();
                e.stopImmediatePropagation();
                SoundManager.getInstance().playEffect(SoundConst.SPEED_ON);
                SetConst.SPEED_PLAY = this.qukcheckBtn.selected;
                GameManager.getInstance().dispatchEventWith(SetEvent.SET_SPEED_CHANGED);
                break;
        }
    };
    SetUI.prototype.popBet = function () {
        SetConst.BETSET_SHOW = true;
        SetConst.AUTO_SHOW = false;
        this.betSetCompoment.goUpdata();
        this.autoSetCompoment.goUpdata();
        this.betBtn.selected = SetConst.BETSET_SHOW;
    };
    SetUI.prototype.onModleChange = function () {
        this.updataControllGroup();
    };
    SetUI.prototype.onStateChange = function (e) {
        switch (e.currentTarget) {
            case this.autoSetCompoment:
                SetConst.BETSET_SHOW = false;
                this.betSetCompoment.goUpdata();
                this.betBtn.selected = SetConst.BETSET_SHOW;
                this.updataBtnState();
                break;
            case this.betSetCompoment:
                SetConst.AUTO_SHOW = false;
                this.autoSetCompoment.goUpdata();
                this.updataBtnState();
                break;
        }
    };
    SetUI.prototype.updataBtnState = function () {
        if (SetConst.AUTO || SetConst.AUTO_SHOW) {
            this.startButton.visible = false;
            if (!GameConfig.isFree) {
                this.autoButton.visible = true;
            }
            else if (!GameConfig.isBonusBtn) {
                // this.FreeBtn.visible = true;
            }
            this.autoButton.scaleX = 1;
            this.autoButton.scaleY = 1;
        }
        else {
            if (!GameConfig.isFree) {
                this.startButton.visible = true;
            }
            else if (!GameConfig.isBonusBtn) {
                // this.FreeBtn.visible = true;
            }
            this.startButton.scaleX = 1;
            this.startButton.scaleY = 1;
            this.autoButton.visible = false;
        }
        if (GameManager.getInstance().getFreeCount() > 0 && GameManager.getInstance().gameState == GameType.GameState.STOP) {
            this.startButton.visible = false;
            this.FreeBtn.visible = true;
        }
        if (GameManager.getInstance().gameState == GameType.GameState.PLAYING && SetConst.AUTO == false) {
            this.startButton.visible = false;
            // this.FreeBtn.visible = false;
        }
        this.startButton.setlected = SetConst.SPEED_PLAY;
    };
    SetUI.prototype.updataControllGroup = function () {
        if (window.innerWidth > window.innerWidth) {
            this.controllGroup.x = SetConst.MODLE == 0 ? GameConfig.WIDTH - this.controllGroup.width + 30 : -30;
            this.controllGroup.y = SetConst.MODLE == 0 ? GameConfig.HEIGHT / 2 - this.controllGroup.height / 2 - 5 : GameConfig.HEIGHT / 2 - this.controllGroup.height / 2 - 5;
        }
        else {
            this.controllGroup.x = SetConst.MODLE == 0 ? GameConfig.WIDTH - this.controllGroup.width + 30 : -30;
            this.controllGroup.y = SetConst.MODLE == 0 ? GameConfig.HEIGHT / 2 - this.controllGroup.height / 2 : GameConfig.HEIGHT / 2 - this.controllGroup.height / 2;
        }
    };
    SetUI.prototype.onDataChanged = function (e) {
        var _this = this;
        switch (e.type) {
            case SetEvent.SET_AUTO_CHANGED:
                this.updataBtnState();
                if (this.isautoShow != SetConst.AUTO) {
                    this.isautoShow = SetConst.AUTO;
                    this.bottomAutoGoUpdata();
                }
                break;
            case SetEvent.SET_SPEED_CHANGED:
                egret.Tween.removeTweens(this.tipLabel);
                this.updataBtnState();
                this.qukcheckBtn.selected = SetConst.SPEED_PLAY;
                this.playLight();
                this.tipLabel.visible = true;
                SetConst.REWARD_SMALLSHOW = false;
                SetConst.REWARD_SHOW = false;
                var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
                ui.hideWin();
                this.rewardGroup.visible = SetConst.REWARD_SMALLSHOW;
                this.tipLabel.alpha = 1;
                this.tipLabel.text = SetConst.SPEED_PLAY ? '快速模式已启用' : '快速模式已禁用';
                this.tipLabel.scaleX = 0.7;
                this.tipLabel.scaleY = 0.7;
                egret.Tween.get(this.tipLabel).to({ alpha: 0 }, 2000).call(function () {
                    _this.tipLabel.alpha = 1;
                    _this.tipLabel.text = '滑动转轴或按旋转';
                    _this.tipLabel.scaleX = _this.tipLabel.scaleY = 1;
                }, this);
                break;
            case SetEvent.SET_BET_CHANGE:
                this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
                this.totalBet.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line);
                this.lineLabel.text = vo.GameData.line + '';
                break;
            case SetEvent.SET_LINE_CHANGE:
                this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
                this.totalBet.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line);
                this.lineLabel.text = vo.GameData.line + '';
                break;
            case SetEvent.SET_BALANCE_CHANGE:
                this.balanceLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.balance);
                break;
            case SetEvent.SET_MUSIC_CHANGE:
                this.musicCheck.selected = SoundManager.getInstance().effectOn;
                break;
        }
    };
    /**
     * 播放光效
     */
    SetUI.prototype.playLight = function () {
        var _this = this;
        this.lightBG.alpha = 0;
        this.lightBG.visible = true;
        this.lightBG.blendMode = egret.BlendMode.ADD;
        egret.Tween.removeTweens(this.lightBG);
        egret.Tween.get(this.lightBG).to({ alpha: 0.1 }, 100).to({ alpha: 0 }, 100).call(function () { _this.lightBG.visible = false; });
    };
    SetUI.prototype.updataEnable = function (s) {
        this.betBtn.enabled = s == 0 ? false : true;
        this.moreBtn.enabled = s == 0 ? false : true;
        this.setBtn.enabled = s == 0 ? false : true;
        this.qukcheckBtn.enabled = s == 0 ? false : true;
        this.betSetCompoment.arrButton.enabled = s == 0 ? false : true;
        this.autoSetCompoment.arrButton.enabled = s == 0 ? false : true;
    };
    /**
     * 更新时间
     */
    SetUI.prototype.onFrame = function (e) {
        var crtTime = new Date();
        this.timeLabel.text = dateFtt("yyyy-MM-dd hh:mm:ss", crtTime) + ' ' + GameConfig.CasinoGame.PlayerId;
    };
    /**
     * 更新自动状态
     */
    SetUI.prototype.bottomAutoGoUpdata = function () {
        var _this = this;
        if (this.currentState == 'ver') {
            this.betBtn.visible = this.qukGroup.visible = SetConst.AUTO ? false : true;
        }
        else {
            this.betBtn.visible = this.qukGroup.visible = false;
        }
        egret.Tween.get(this.bottomGroup).to({ y: GameConfig.HEIGHT }, 300).call(function () {
            _this.bottomChange();
            _this.tipLabel.alpha = 1;
            if (!SetConst.AUTO) {
                if (SetConst.handStop) {
                    _this.tipLabel.text = '自动游戏已停止';
                }
                else {
                    _this.tipLabel.text = '自动游戏已完成';
                    SetConst.AUTO_SHOW = true;
                    _this.autoSetCompoment.goUpdata();
                    _this.updataBtnState();
                }
                _this.tipLabel.scaleX = _this.tipLabel.scaleY = 0.8;
                _this.tipLabel.alpha = 1;
            }
        }, this).to({ y: GameConfig.HEIGHT - this.bottomGroup.height }, 300).call(function () {
            egret.Tween.removeTweens(_this.tipLabel);
            if (!SetConst.AUTO) {
                egret.Tween.get(_this.tipLabel).to({ alpha: 0 }, 1500).call(function () {
                    _this.tipLabel.scaleX = _this.tipLabel.scaleY = 1;
                    _this.tipLabel.text = '滑动转轴或按旋转';
                    _this.tipLabel.alpha = 1;
                }, _this);
            }
        }, this);
    };
    SetUI.prototype.bonusBtnState = function (b) {
        if (b) {
            egret.Tween.get(this.bonusBtn, { loop: true }).to({ scaleX: 0.85, scaleY: 0.85 }, 700).to({ scaleX: 1, scaleY: 1 }, 700);
        }
        else {
            egret.Tween.removeTweens(this.bonusBtn);
            this.autoButton.scaleX = 1;
            this.autoButton.scaleY = 1;
        }
    };
    SetUI.prototype.bottomChange = function () {
        this.bottomBg.source = SetConst.AUTO ? 'bottom_1_png' : 'bottom_2_png';
        this.bottomBg.alpha = SetConst.AUTO ? 0.75 : 1;
        for (var i = 0; i < 5; i++) {
            this['t' + i].textColor = SetConst.AUTO ? 0x0292C0 : 0xFCCB44;
        }
        this.tipLabel.alpha = 1;
        if (SetConst.AUTO) {
            if (SetConst.AUTO_COUNT > 99) {
                this.tipLabel.text = "直到环节自动旋转";
            }
            else {
                this.tipLabel.text = '剩余' + SetConst.AUTO_COUNT + '次自动旋转';
            }
            this.tipLabel.scaleX = this.tipLabel.scaleY = 0.7;
        }
        else {
            //this.tipLabel.text = '自动游戏已停止';
            this.tipLabel.scaleX = this.tipLabel.scaleY = 1;
            //egret.setTimeout(() => {
            this.tipLabel.text = '滑动转轴或按旋转';
            //}, this, 2000);
        }
    };
    return SetUI;
}(eui.Component));
__reflect(SetUI.prototype, "SetUI");
//# sourceMappingURL=SetUI.js.map