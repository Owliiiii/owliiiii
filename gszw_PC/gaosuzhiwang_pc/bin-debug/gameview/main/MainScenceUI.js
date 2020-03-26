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
var MainScenceUI = (function (_super) {
    __extends(MainScenceUI, _super);
    function MainScenceUI() {
        var _this = _super.call(this) || this;
        _this.labelArr = ['新游戏', '经典老虎机', '电动吃角子老虎', '桌面游戏', '累积游戏'];
        _this.lineState = 0;
        _this.betState = 0;
        _this.longTouch = false;
        _this.index = -1;
        /**
         * 屏幕缩放比
         */
        _this.screenScale = 0;
        _this.curtime = 0;
        _this.winIndex = 0;
        /**
         * 定时器里面是否能执行 默认是可执行的
         */
        _this.isPlay = true;
        _this.isCanPlay = false;
        _this._rewardNum = 0;
        _this.skinName = MainScenceUISkin;
        return _this;
    }
    MainScenceUI.prototype.onAdd = function () {
        var _this = this;
        _super.prototype.onAdd.call(this);
        this.onResize();
        this.gameScence.init();
        this.gameScence.reset();
        this.updataUI();
        this.registerEvent(this.stage, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.topListGroup, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.setBar, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.topGroup, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.infoBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.lineSubBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.lineAddBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.betSubBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.betAddBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.speedOffBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.speedOnBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.startBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.stopBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.moneyBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.touchRect, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.balanceLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.balance);
        core.MyUIUtils.addLongTouch(this.lineSubBtn, function () {
            _this.lineState = -1;
            _this.hideWin();
            _this.longTouch = true;
        }, function () {
            _this.lineState = 0;
        }, this);
        core.MyUIUtils.addLongTouch(this.lineAddBtn, function () {
            _this.lineState = 1;
            _this.hideWin();
            _this.longTouch = true;
        }, function () {
            _this.lineState = 0;
        }, this);
        core.MyUIUtils.addLongTouch(this.betSubBtn, function () {
            _this.betState = -1;
            _this.hideWin();
            _this.longTouch = true;
        }, function () {
            _this.betState = 0;
        }, this);
        core.MyUIUtils.addLongTouch(this.betAddBtn, function () {
            _this.betState = 1;
            _this.hideWin();
            _this.longTouch = true;
        }, function () {
            _this.betState = 0;
        }, this);
        this.updataBtn();
        this.updataText(false);
        this.setReward(0, false);
        //this.registerEvent(this, egret.Event.RENDER, this.onFrame, this);
        core.TimerManager.instance.addTick(1000, -1, this.onFrame, this);
        core.TimerManager.instance.addTick(200, -1, this.onFrame1, this);
        for (var i = 0; i < 5; i++) {
            var textButton = this['t' + i];
            textButton.label0.text = this.labelArr[i];
            textButton.label1.text = this.labelArr[i];
            this.registerEvent(textButton, egret.TouchEvent.TOUCH_TAP, this.onSetTab, this);
        }
        this.registerEvent(this.tGameBtn, egret.TouchEvent.TOUCH_TAP, this.onSetTab, this);
        this.tGameBtn.label0.text = '游戏';
        this.tGameBtn.label1.text = '游戏';
        this.onResize();
        var today = egret.localStorage.getItem('today');
        if (today) {
            var nowtime = new Date().getTime();
            if (!Utils.isSameDay(parseInt(today), nowtime)) {
                //弹出
                core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
                var ui_1 = core.UIManager.getUI(core.UIConst.StipsUI);
                ui_1.showConfirBtn('您的存款已被通过.我们希望您在我们的赌城玩得愉快.祝您好运！', function () {
                    ui_1.hide();
                    egret.setTimeout(function () {
                        core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
                        ui_1.showConfirBtn('您的要求的 CNY' + GameManager.numberToCommonStr(vo.GameData.balance) + ' 提款已被通过.', function () {
                            ui_1.hide();
                        });
                    }, _this, 100);
                });
            }
        }
        else {
            //弹出
            core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
            var ui_2 = core.UIManager.getUI(core.UIConst.StipsUI);
            ui_2.showConfirBtn('您的存款已被通过.我们希望您在我们的赌城玩得愉快.祝您好运！', function () {
                ui_2.hide();
                egret.setTimeout(function () {
                    core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
                    ui_2.showConfirBtn('您的要求的 CNY' + GameManager.numberToCommonStr(vo.GameData.balance) + ' 提款已被通过.', function () {
                        ui_2.hide();
                    });
                }, _this, 100);
            });
        }
        egret.localStorage.setItem('today', new Date().getTime() + '');
    };
    MainScenceUI.prototype.updataText = function (isShowLine) {
        if (isShowLine === void 0) { isShowLine = true; }
        this.lineLabel.text = vo.GameData.line + '';
        this.betLabel.text = 'x' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
        this.allBetLabel.text = 'x' + GameManager.numberToCommonStr((vo.GameData.line * vo.GameData.betScoreArr[vo.GameData.betIndex])) + '';
        if (isShowLine) {
            this.gameScence.pent.showLineArr(vo.GameData.line);
        }
    };
    MainScenceUI.prototype.updataBtn = function () {
        this.lineSubBtn.enabled = vo.GameData.line > 1;
        this.lineAddBtn.enabled = vo.GameData.line < 9;
        this.betSubBtn.enabled = vo.GameData.betIndex > 0;
        this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
    };
    MainScenceUI.prototype.setdataArr = function () {
        var dataarr = RES.getRes('config_json')[this.index + ''];
        this.topList.setArr(dataarr);
    };
    MainScenceUI.prototype.setSelected = function (index) {
        if (index === void 0) { index = -1; }
        for (var i = 0; i < 5; i++) {
            var tbn = this['t' + i];
            if (index == i) {
                tbn.setSelected(true);
            }
            else {
                tbn.setSelected(false);
            }
        }
    };
    MainScenceUI.prototype.onSetTab = function (e) {
        switch (e.currentTarget) {
            case this['t' + 0]:
                if (this.topList.isShow) {
                    if (this.index != 0) {
                        this.index = 0;
                        this.setdataArr();
                        this.setSelected(0);
                    }
                }
                else {
                    this.index = 0;
                    this.setdataArr();
                    this.topList.show();
                    this.setSelected(0);
                }
                break;
            case this['t' + 1]:
                if (this.topList.isShow) {
                    if (this.index != 1) {
                        this.index = 1;
                        this.setdataArr();
                        this.setSelected(1);
                    }
                }
                else {
                    this.index = 1;
                    this.setdataArr();
                    this.topList.show();
                    this.setSelected(1);
                }
                break;
            case this['t' + 2]:
                if (this.topList.isShow) {
                    if (this.index != 2) {
                        this.index = 2;
                        this.setdataArr();
                        this.setSelected(2);
                    }
                }
                else {
                    this.index = 2;
                    this.setdataArr();
                    this.topList.show();
                    this.setSelected(2);
                }
                break;
            case this['t' + 3]:
                if (this.topList.isShow) {
                    if (this.index != 3) {
                        this.index = 3;
                        this.setdataArr();
                        this.setSelected(3);
                    }
                }
                else {
                    this.index = 3;
                    this.setdataArr();
                    this.topList.show();
                    this.setSelected(3);
                }
                break;
            case this['t' + 4]:
                if (this.topList.isShow) {
                    if (this.index != 4) {
                        this.index = 4;
                        this.setdataArr();
                        this.setSelected(4);
                    }
                }
                else {
                    this.index = 4;
                    this.setdataArr();
                    this.topList.show();
                    this.setSelected(4);
                }
                break;
            case this.tGameBtn:
                if (this.topList.isShow) {
                    this.topList.hide();
                }
                else {
                    this.index = 0;
                    this.setdataArr();
                    this.topList.show();
                    this.setSelected(0);
                }
                break;
        }
    };
    MainScenceUI.prototype.onControllTab = function (e) {
        switch (e.currentTarget) {
            case this.infoBtn:
                core.UIManager.openUI(core.UIConst.HelpUI, core.LayerManager.Layer_Top);
                break;
            case this.lineSubBtn:
                if (this.longTouch)
                    return;
                this.hideWin();
                if (vo.GameData.line > 1) {
                    vo.GameData.line -= 1;
                    SoundManager.getInstance().playEffect(SoundConst.SUB);
                }
                this.lineSubBtn.enabled = vo.GameData.line > 1;
                this.lineAddBtn.enabled = vo.GameData.line < 9;
                this.updataText();
                this.longTouch = false;
                break;
            case this.lineAddBtn:
                if (this.longTouch)
                    return;
                this.hideWin();
                if (vo.GameData.line < 9) {
                    vo.GameData.line += 1;
                    SoundManager.getInstance().playEffect(SoundConst.ADD);
                }
                this.lineSubBtn.enabled = vo.GameData.line > 1;
                this.lineAddBtn.enabled = vo.GameData.line < 9;
                this.updataText();
                this.longTouch = false;
                break;
            case this.betSubBtn:
                if (this.longTouch)
                    return;
                this.hideWin();
                if (vo.GameData.betIndex > 0) {
                    vo.GameData.betIndex -= 1;
                    SoundManager.getInstance().playEffect(SoundConst.SUB);
                }
                this.betSubBtn.enabled = vo.GameData.betIndex > 0;
                this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
                this.updataText(false);
                this.longTouch = false;
                break;
            case this.betAddBtn:
                if (this.longTouch)
                    return;
                this.hideWin();
                if (vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1) {
                    vo.GameData.betIndex += 1;
                    SoundManager.getInstance().playEffect(SoundConst.ADD);
                }
                this.betSubBtn.enabled = vo.GameData.betIndex > 0;
                this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
                this.updataText(false);
                this.longTouch = false;
                break;
            case this.startBtn:
                GameManager.getInstance().startGame();
                break;
            case this.stopBtn:
                GameManager.getInstance().stopGame();
                break;
            case this.speedOnBtn:
                this.speedOnBtn.visible = false;
                this.speedOffBtn.visible = true;
                GameConfig.speedPlay = false;
                SoundManager.getInstance().playEffect(SoundConst.SPEED_ON);
                break;
            case this.speedOffBtn:
                this.speedOnBtn.visible = true;
                this.speedOffBtn.visible = false;
                GameConfig.speedPlay = true;
                SoundManager.getInstance().playEffect(SoundConst.SPEED_ON);
                break;
            case this.moneyBtn:
                openMoney();
                break;
        }
    };
    MainScenceUI.prototype.onRemove = function () {
        _super.prototype.onRemove.call(this);
    };
    MainScenceUI.prototype.onResize = function () {
        var _this = this;
        var scaleX = (window.innerWidth / GameConfig.DES_WIDTH) || 0;
        var scaleY = window.innerHeight > GameConfig.J_HEIGHT ? GameConfig.J_HEIGHT / GameConfig.DES_HEIGHT : window.innerHeight / GameConfig.DES_HEIGHT || 0;
        var s = scaleX > scaleY ? scaleY : scaleX;
        if (window.innerWidth < 769) {
            this.mainGroup.horizontalCenter = undefined;
            this.mainGroup.left = 85;
            this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = undefined;
            this.topGroup.left = this.bottomGroup.left = 0;
            this.textGroup.horizontalCenter = undefined;
            this.textGroup.left = 150;
            this.setBar.left = 480;
            this.setBar.right = undefined;
        }
        else {
            this.mainGroup.horizontalCenter = 0;
            this.mainGroup.left = undefined;
            this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = 0;
            this.topGroup.left = this.bottomGroup.left = undefined;
            this.textGroup.horizontalCenter = 0;
            this.textGroup.left = undefined;
            this.setBar.left = undefined;
            this.setBar.right = 0;
        }
        if (window.innerWidth < 800 / window.devicePixelRatio || s <= 0.48) {
            this.mainGroup.scaleX = 0.48;
            this.mainGroup.scaleY = 0.48;
            if (window.innerWidth > 768 / window.devicePixelRatio) {
                this.mainGroup.horizontalCenter = 0;
                this.mainGroup.left = undefined;
                this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = 0;
                this.topGroup.left = this.bottomGroup.left = undefined;
                this.textGroup.horizontalCenter = 0;
                this.textGroup.left = undefined;
                this.setBar.left = undefined;
                this.setBar.right = 0;
            }
            else {
                this.mainGroup.horizontalCenter = undefined;
                this.mainGroup.left = 85;
                this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = undefined;
                this.topGroup.left = this.bottomGroup.left = 0;
                this.textGroup.horizontalCenter = undefined;
                this.textGroup.left = 150;
                this.setBar.left = 480;
                this.setBar.right = undefined;
            }
        }
        else {
            this.mainGroup.scaleX = s;
            this.mainGroup.scaleY = s;
            console.log('sss->', this.mainGroup.scaleX);
            this.mainGroup.horizontalCenter = 0;
            this.mainGroup.left = undefined;
            this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = 0;
            this.topGroup.left = this.bottomGroup.left = undefined;
            this.textGroup.horizontalCenter = 0;
            this.textGroup.left = undefined;
            this.setBar.left = undefined;
            this.setBar.right = 0;
            if (window.screen.width == 1366 && window.screen.height == 768) {
                if (window.innerWidth >= 945 && window.innerWidth <= 955 && window.innerHeight >= 642 && window.innerHeight <= 652) {
                    this.mainGroup.scaleX = this.mainGroup.scaleY = s * 0.9;
                }
            }
            if (window.screen.width == 1920 / window.devicePixelRatio && window.screen.height == 1080 / window.devicePixelRatio) {
                if (window.innerWidth >= 1180 && window.innerWidth <= 1190 && window.innerHeight >= 794 && window.innerHeight <= 804) {
                    this.mainGroup.scaleX = this.mainGroup.scaleY = s * 0.90;
                }
                if (window.innerWidth >= 947 && window.innerWidth <= 957 && window.innerHeight >= 645 && window.innerHeight <= 655) {
                    this.mainGroup.scaleX = this.mainGroup.scaleY = s * 0.9;
                }
            }
        }
        var w = GameConfig.WIDTH / GameConfig.HEIGHT > GameConfig.MAX_WIDTH / GameConfig.DES_HEIGHT ? GameConfig.MAX_WIDTH * s : GameConfig.WIDTH;
        this.topGroup.width = window.innerWidth < GameConfig.MAX_WIDTH ? window.innerWidth : GameConfig.MAX_WIDTH;
        this.bottomGroup.width = window.innerWidth < GameConfig.MAX_WIDTH ? window.innerWidth : GameConfig.MAX_WIDTH;
        if (window.innerHeight > GameConfig.J_HEIGHT) {
            var dh = GameConfig.DES_HEIGHT - GameConfig.J_HEIGHT;
            var d = (window.innerHeight - GameConfig.J_HEIGHT) / dh * dh / 2;
            this.topGroup.top = d;
            this.bottomGroup.bottom = d;
        }
        else {
            this.topGroup.top = 0;
            this.bottomGroup.bottom = 0;
        }
        this.bg.scaleX = 1;
        if (window.innerHeight > GameConfig.J_HEIGHT) {
            var t1s = (GameConfig.J_HEIGHT - 55) / GameConfig.J_HEIGHT;
            this.bg.scaleY = t1s;
        }
        else {
            var t2s = (window.innerHeight - 55) / GameConfig.J_HEIGHT;
            this.bg.scaleY = t2s;
        }
        if (window.innerWidth <= 768 / window.devicePixelRatio) {
            this.bottomGroup.width = 768 / window.devicePixelRatio;
            this.topGroup.width = 768 / window.devicePixelRatio;
        }
        if (window.innerWidth <= 768 / window.devicePixelRatio) {
            this.bottomGroup.width = 768 / window.devicePixelRatio;
            this.topGroup.width = 768 / window.devicePixelRatio;
        }
        if (window.innerHeight <= 500 / window.devicePixelRatio) {
            this.topGroup.visible = this.bottomGroup.visible = false;
            this.bg.scaleY = window.innerHeight / this.bg.height + 0.2;
        }
        else {
            this.topGroup.visible = this.bottomGroup.visible = true;
        }
        egret.clearTimeout(this.clet);
        this.clet = egret.setTimeout(function () {
            _this.topList.updataPosition();
            _this.bg.source = window.innerWidth == 1215 && window.innerHeight == 833 ? 'BG_1x_png' : 'BG_1_png';
        }, this, 100);
        egret.updateAllScreens();
    };
    MainScenceUI.prototype.updataUI = function () {
    };
    MainScenceUI.prototype.onTab = function (e) {
        switch (e.currentTarget) {
            case this.stage:
                this.topList.hide();
                this.setBar.closeall();
                this.longTouch = false;
                break;
            case this.topListGroup:
                e.stopPropagation();
                e.stopImmediatePropagation();
                break;
            case this.setBar:
                e.stopPropagation();
                e.stopImmediatePropagation();
                break;
            case this.topGroup:
                e.stopPropagation();
                e.stopImmediatePropagation();
                break;
            case this.touchRect:
                if (this.stopBtn.visible && this.stopBtn.enabled) {
                    GameManager.getInstance().stopGame();
                }
                break;
        }
        this.updataUI();
    };
    MainScenceUI.prototype.onFrame = function () {
        this.timeLabel.text = Utils.getTime1();
    };
    MainScenceUI.prototype.onFrame1 = function () {
        if (this.betState == -1) {
            if (vo.GameData.betIndex > 0) {
                vo.GameData.betIndex -= 1;
                SoundManager.getInstance().playEffect(SoundConst.SUB);
            }
            this.betSubBtn.enabled = vo.GameData.betIndex > 0;
            this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
            this.updataText(false);
        }
        else if (this.betState == 1) {
            if (vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1) {
                vo.GameData.betIndex += 1;
                SoundManager.getInstance().playEffect(SoundConst.ADD);
            }
            this.betSubBtn.enabled = vo.GameData.betIndex > 0;
            this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
            this.updataText(false);
        }
        if (this.lineState == -1) {
            if (vo.GameData.line > 1) {
                vo.GameData.line -= 1;
                SoundManager.getInstance().playEffect(SoundConst.SUB);
            }
            this.lineSubBtn.enabled = vo.GameData.line > 1;
            this.lineAddBtn.enabled = vo.GameData.line < 9;
            this.updataText();
        }
        else if (this.lineState == 1) {
            if (vo.GameData.line < 9) {
                vo.GameData.line += 1;
                SoundManager.getInstance().playEffect(SoundConst.ADD);
            }
            this.lineSubBtn.enabled = vo.GameData.line > 1;
            this.lineAddBtn.enabled = vo.GameData.line < 9;
            this.updataText();
        }
    };
    MainScenceUI.prototype.showWin = function (arr) {
        var _this = this;
        SoundManager.getInstance().playMusic(SoundConst.REWARD, 1).then(function (channel) {
            GameManager.getInstance().rewardChannel = channel;
        });
        //先显示一下全部线
        this.gameScence.pent.clearTip();
        this.gameScence.pent.cleaAllLine();
        // if (arr.length > 1) {
        if (vo.GameData.autoPlayCount > 0 && vo.GameData.autoPlayCount > 0) {
            for (var i = 0; i < arr.length; i++) {
                var data = arr[i].Data;
                var positions = arr[i].Positions;
                if (data) {
                    var line = data.Line;
                    this.gameScence.pent.showTipLine(line);
                    this.gameScence.pent.showLines(line);
                }
                else {
                    this.gameScence.pent.showkuang2(arr[i].Positions);
                }
            }
        }
        else {
            for (var i = 0; i < arr.length; i++) {
                var data = arr[i].Data;
                var positions = arr[i].Positions;
                if (data) {
                    var line = data.Line;
                    if (arr.length > 1) {
                        this.gameScence.pent.showTipLine(line);
                        this.gameScence.pent.showLines(line);
                    }
                }
                for (var j = 0; j < positions.length; j++) {
                    var p = positions[j];
                    this.gameScence.showAnimation(p);
                }
            }
        }
        var t = arr.length > 1 ? 500 : 0;
        this.isCanPlay = false;
        this.tt2 = egret.setTimeout(function () {
            _this.isCanPlay = true;
        }, this, 3000);
        this.tt = egret.setTimeout(function () {
            if (GameConfig.speedPlay && vo.GameData.autoPlayCount > 0)
                return;
            _this.gameScence.pent.clearTip();
            _this.gameScence.pent.cleaAllLine();
            var data = arr[_this.winIndex];
            if (data.Data) {
                _this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
                var arrs = _this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
                _this.gameScence.pent.showLine(data.Data.Line, arrs);
                _this.gameScence.pent.showTipLine(data.Data.Line);
            }
            else {
                _this.gameScence.pent.showkuang2(data.Positions);
            }
            _this.winIndex++;
            if (_this.winIndex >= arr.length) {
                _this.winIndex = 0;
            }
            _this.clert = egret.setInterval(function () {
                if (!_this.isPlay)
                    return;
                _this.gameScence.pent.clearTip();
                _this.gameScence.pent.cleaAllLine();
                if (arr.length > 1 && _this.isCanPlay) {
                    SoundManager.getInstance().playEffect(SoundConst.SINGLEREWARD);
                }
                var data = arr[_this.winIndex];
                if (data.Data) {
                    _this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
                    var arrs = _this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
                    _this.gameScence.pent.showLine(data.Data.Line, arrs);
                    _this.gameScence.pent.showTipLine(data.Data.Line);
                }
                else {
                    _this.gameScence.pent.showkuang2(data.Positions);
                }
                _this.winIndex++;
                if (_this.winIndex >= arr.length) {
                    _this.winIndex = 0;
                }
            }, _this, 800);
        }, this, t);
        var resultData = vo.GameData.resultData;
        var totalBet = resultData.Value.SpinResult.TotalBet;
        var totalWin = resultData.Value.SpinResult.TotalWin;
        var winmoney = resultData.Value.Dollar;
        var b = totalWin / totalBet;
        if (b >= 50) {
            this.setReward(winmoney, true, 4);
            egret.clearTimeout(this.tt2);
        }
        else if (b >= 25) {
            this.setReward(winmoney, true, 3);
        }
        else if (b >= 1.5) {
            this.setReward(winmoney, true, 2);
        }
        else {
            this.setReward(winmoney, true, 1);
        }
    };
    MainScenceUI.prototype.hideWin = function () {
        egret.clearInterval(this.clert);
        egret.clearTimeout(this.tt);
        egret.clearTimeout(this.tt2);
        this.gameScence.pent.clearAll();
        this.gameScence.hideAllAnimation();
        this.winIndex = 0;
        this.reward = 0.00;
        this.hideFiveAnimation();
        this.hideBigReward();
    };
    MainScenceUI.prototype.setReward = function (v, isA, rewardType) {
        var _this = this;
        if (isA === void 0) { isA = true; }
        if (rewardType === void 0) { rewardType = 1; }
        egret.Tween.removeTweens(this);
        egret.Tween.removeTweens(this.rewardGroup);
        this.rewardGroup.scaleX = 1;
        this.rewardGroup.scaleY = 1;
        if (isA && this.reward < v) {
            if (rewardType == 1) {
                egret.Tween.get(this).to({ reward: v }, 2000);
            }
            else if (rewardType == 2) {
                egret.Tween.get(this).to({ reward: v }, 2000);
                egret.Tween.get(this.rewardGroup).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).wait(2000).to({ scaleX: 1, scaleY: 1 }, 1000);
            }
            else if (rewardType == 3) {
                egret.Tween.get(this).to({ reward: v }, 3000);
                egret.Tween.get(this.rewardGroup)
                    .to({ scaleX: 1.2, scaleY: 1.2 }, 1000)
                    .wait(1000)
                    .to({ scaleX: 1.2, scaleY: 2, y: -300 }, 1000)
                    .call(function () { _this.isPlay = false; _this.gameScence.pauseAllAniation(); }, this)
                    .wait(1500)
                    .call(function () { _this.isPlay = true; _this.gameScence.resumeAllAnimation(); }, this)
                    .to({ scaleX: 1, scaleY: 1 }, 400)
                    .to({ y: 56 }, 500);
            }
            else {
                SoundManager.getInstance().playEffect(SoundConst.BIG_REWARD);
                egret.Tween.get(this).to({ reward: v }, 5000);
                egret.Tween.get(this.rewardGroup)
                    .to({ scaleX: 1.2, scaleY: 1.2 }, 1000)
                    .wait(1000)
                    .to({ scaleX: 1.2, scaleY: 2, y: -300 }, 1000)
                    .wait(1000)
                    .call(function () { _this.showBigReward(); }, this)
                    .wait(5300)
                    .call(function () {
                    _this.hideBigReward();
                    _this.isCanPlay = true;
                }, this)
                    .to({ scaleX: 1, scaleY: 1 }, 400)
                    .to({ y: 56 }, 500);
            }
        }
        else {
            this.reward = v;
        }
    };
    Object.defineProperty(MainScenceUI.prototype, "reward", {
        get: function () {
            return this._rewardNum;
        },
        set: function (v) {
            this._rewardNum = v;
            var s = GameManager.numberToCommonStr(this._rewardNum);
            this.rewardLabel.text = 'x' + s;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 重置奖励
     */
    MainScenceUI.prototype.resetReward = function (money) {
        var _this = this;
        egret.Tween.removeTweens(this);
        egret.Tween.removeTweens(this.rewardGroup);
        this.reward = money;
        egret.Tween.get(this.rewardGroup).to({ scaleX: 1, scaleY: 1, y: 56 }, 300);
        egret.Tween.get(this).wait(300).call(function () {
            _this.reward = 0;
        });
    };
    /**
     * 显示5同类动画
     */
    MainScenceUI.prototype.showFiveAimation = function (data, callfun) {
        var _this = this;
        if (callfun === void 0) { callfun = null; }
        SoundManager.getInstance().playEffect(SoundConst.FIVE_SOUND);
        this.aGroup.visible = true;
        this.bigRewardLabel.text = '5个一样的';
        this.bigRewardLabel.size = 80;
        this.bigRewardGroup.verticalCenter = 0;
        this.bigRewardGroup.scaleX = 0.5;
        this.bigRewardGroup.scaleY = 0.5;
        if (data.Data) {
            this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
        }
        else {
            this.gameScence.pent.showkuang2(data.Positions);
        }
        egret.Tween.removeTweens(this.bigRewardGroup);
        egret.Tween.get(this.bigRewardGroup)
            .to({ scaleX: 1.35, scaleY: 1.35 }, 800).to({ scaleX: 0.5, scaleY: 0.5 }, 800)
            .to({ scaleX: 1.35, scaleY: 1.35 }, 800).to({ scaleX: 0.5, scaleY: 0.5 }, 800)
            .to({ scaleX: 1.35, scaleY: 1.35 }, 800).call(function () {
            _this.hideFiveAnimation();
            callfun && callfun();
        }, this);
    };
    /**
     * 隐藏5同类动画
     *
     */
    MainScenceUI.prototype.hideFiveAnimation = function () {
        egret.Tween.removeTweens(this.bigRewardGroup);
        this.aGroup.visible = false;
        this.gameScence.pent.clearAll();
    };
    /**
     * 显示大奖
     */
    MainScenceUI.prototype.showBigReward = function (callfun) {
        var _this = this;
        if (callfun === void 0) { callfun = null; }
        this.aGroup.visible = true;
        this.bigRewardLabel.text = '大奖';
        this.bigRewardLabel.size = 150;
        this.bigRewardGroup.scaleX = 1;
        this.bigRewardGroup.scaleY = 1;
        this.bigRewardGroup.verticalCenter = -150;
        egret.Tween.removeTweens(this.bigRewardGroup);
        egret.Tween.get(this.bigRewardGroup)
            .to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
            .to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
            .to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
            .to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
            .to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
            .to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550).call(function () {
            _this.hideBigReward();
            callfun && callfun();
        }, this);
        if (!this.rewardMc) {
            this.rewardMc = game.MCUtils.getMc('reward');
            this.mcGroup.addChild(this.rewardMc);
            this.rewardMc.x = this.aGroup.width / 2;
            this.rewardMc.y = this.aGroup.height / 2 + 30;
        }
        this.rewardMc.visible = true;
        this.rewardMc.gotoAndPlay('a0', -1);
    };
    /**
     * 隐藏大奖
     */
    MainScenceUI.prototype.hideBigReward = function () {
        egret.Tween.removeTweens(this.bigRewardGroup);
        if (this.rewardMc) {
            this.rewardMc.visible = false;
            this.rewardMc.stop();
        }
        this.aGroup.visible = false;
    };
    return MainScenceUI;
}(core.BaseUI));
__reflect(MainScenceUI.prototype, "MainScenceUI");
//# sourceMappingURL=MainScenceUI.js.map