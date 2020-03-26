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
        _this.indexNum = 0;
        _this.curtime = 0;
        _this.winIndex = 0;
        _this.allReward = 0;
        _this._rewardNum = 0;
        _this.skinName = MainScenceUISkin;
        return _this;
    }
    MainScenceUI.prototype.onAdd = function () {
        var _this = this;
        _super.prototype.onAdd.call(this);
        SoundManager.getInstance().setEffectOn(true);
        this.gameScence.init();
        this.gameScence.reset();
        this.updataUI();
        this.registerEvent(this.stage, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.topListGroup, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.setBar, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.topGroup, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        // 
        this.registerEvent(this.infoBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.lineSubBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.lineAddBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.betSubBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.betAddBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.speedOffBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.speedOnBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.startBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.stopBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.bonusBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.registerEvent(this.pickFreeBtn, egret.TouchEvent.TOUCH_TAP, this.closeFreeUi, this);
        this.registerEvent(this.overFreeBtn, egret.TouchEvent.TOUCH_TAP, this.endFreeUi, this);
        this.registerEvent(this.gameScence.dianji, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
        this.bonusBtn.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.test1, this);
        this.bonusBtn.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.test3, this);
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
        this.setReward(0);
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
        this.betLabel.text = "x" + vo.GameData.betScoreArr[vo.GameData.betIndex].toFixed(2);
        this.allBetLabel.text = "x" + (vo.GameData.line * vo.GameData.betScoreArr[vo.GameData.betIndex]).toFixed(2);
        if (isShowLine) {
            this.gameScence.pent.showBg(vo.GameData.line);
            this.gameScence.pent.showLineArr(vo.GameData.line);
        }
    };
    MainScenceUI.prototype.updataTextBtn = function (lineNum) {
        this.hideWin();
        if (vo.GameData.betIndex > 0) {
            vo.GameData.betIndex -= 1;
        }
        this.betSubBtn.enabled = vo.GameData.betIndex > 0;
        this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
        vo.GameData.line = lineNum;
        this.lineLabel.text = lineNum + '';
        this.betLabel.text = "x" + vo.GameData.betScoreArr[vo.GameData.betIndex].toFixed(2);
        this.allBetLabel.text = "x" + (lineNum * vo.GameData.betScoreArr[vo.GameData.betIndex]).toFixed(2);
        this.lineSubBtn.enabled = lineNum > 1;
        this.lineAddBtn.enabled = lineNum < 25;
        this.gameScence.pent.showLineArr(lineNum);
        this.gameScence.pent.showBg(lineNum);
    };
    MainScenceUI.prototype.updataBtn = function () {
        this.lineSubBtn.enabled = vo.GameData.line > 1;
        this.lineAddBtn.enabled = vo.GameData.line < 25;
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
                this.mainGroup.visible = false;
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
                this.lineAddBtn.enabled = vo.GameData.line < 25;
                console.log("vo.GameData.line === " + vo.GameData.line);
                this.updataText();
                this.longTouch = false;
                break;
            case this.lineAddBtn:
                if (this.longTouch)
                    return;
                this.hideWin();
                if (vo.GameData.line < 25) {
                    vo.GameData.line += 1;
                    SoundManager.getInstance().playEffect(SoundConst.ADD);
                }
                this.lineSubBtn.enabled = vo.GameData.line > 1;
                this.lineAddBtn.enabled = vo.GameData.line < 25;
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
                SoundManager.getInstance().playEffect(SoundConst.STARTBTN);
                GameManager.getInstance().startGame();
                break;
            case this.stopBtn:
                SoundManager.getInstance().playEffect(SoundConst.STOPBTN);
                GameManager.getInstance().stopGame();
                break;
            case this.speedOnBtn:
                this.speedOnBtn.visible = false;
                this.speedOnTxt.visible = false;
                this.speedOffBtn.visible = true;
                this.speedOffTxt.visible = true;
                GameConfig.speedPlay = false;
                SoundManager.getInstance().playEffect(SoundConst.SPEED_ON);
                break;
            case this.speedOffBtn:
                this.speedOnBtn.visible = true;
                this.speedOnTxt.visible = true;
                this.speedOffBtn.visible = false;
                this.speedOffTxt.visible = false;
                GameConfig.speedPlay = true;
                SoundManager.getInstance().playEffect(SoundConst.SPEED_OFF);
                break;
            case this.gameScence.dianji:
                if ((GameManager.getInstance().gameState != GameType.GameState.STOP) && this.stopBtn.visible) {
                    SoundManager.getInstance().playEffect(SoundConst.STOPBTN);
                    console.log("点击了屏幕");
                    GameManager.getInstance().stopGame();
                }
                break;
            case this.bonusBtn:
                //进入免费游戏选择界面
                console.log("免费游戏界面");
                this.removeEventListener(egret.Event.ENTER_FRAME, this.taouchBonus, this);
                this.startBtn.visible = true;
                this.bonusBtn.visible = false;
                this.bonusBtnShan.visible = false;
                this.gameScence.huanyuanC1(this.bonusPos);
                this.gameScence.removeBonusMc();
                this.showFreeUi();
                break;
        }
    };
    MainScenceUI.prototype.showFreeUi = function () {
        console.log("打开了免费界面");
        //音乐
        this.hideWin();
        GameConfig.emptyPlay = false;
        this.bg.visible = false;
        this.bg1.visible = true;
        this.mainGroup.visible = false;
        this.freeGroup.visible = true;
        for (var i = 0; i < 5; i++) {
            this["beiKe_" + i].pixelHitTest = true;
            this["beiKe_" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeBeiKe, this);
        }
    };
    MainScenceUI.prototype.changeBeiKe = function (evt) {
        var _this = this;
        //选择贝壳，播放动画
        var index;
        var Count;
        this.indexNum++;
        switch (evt.currentTarget) {
            case this["beiKe_0"]:
                index = 0;
                Count = 5;
                break;
            case this["beiKe_1"]:
                index = 1;
                Count = 7;
                break;
            case this["beiKe_2"]:
                index = 2;
                Count = 15;
                break;
            case this["beiKe_3"]:
                index = 3;
                Count = 10;
                break;
            case this["beiKe_4"]:
                index = 4;
                Count = 8;
                break;
        }
        // vo.GameData.TotalActionCount = vo.GameData.TotalActionCount + Count;
        if (this.indexNum == 1) {
            vo.GameData.TotalActionCount = Count + 8;
        }
        if (this.indexNum >= 2) {
            if (Count < 8) {
                Count = 0;
            }
            vo.GameData.TotalActionCount = (vo.GameData.TotalActionCount + Count);
        }
        this["beiKe_" + index].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeBeiKe, this);
        if (this.indexNum >= 2) {
            for (var i = 0; i < 5; i++) {
                this["beiKe_" + i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeBeiKe, this);
            }
        }
        egret.Tween.get(this["beiKe_" + index]).call(function () { _this["beiKe_" + index].source = "with_pearl_01_png"; })
            .wait(300)
            .call(function () { _this["beiKe_" + index].source = "with_pearl_02_png"; })
            .wait(500)
            .call(function () {
            _this["beiKe_" + index].source = "with_pearl_03_png";
            // this.rotateNum.text = "";
            // this.fanbeiNum.text = "";
            _this.freeNum.text = "";
            _this.beiNum.text = "";
            _this.rotateNum.text = "" + vo.GameData.TotalActionCount;
            _this.fanbeiNum.text = "X2";
            _this.freeNumGroup.visible = true;
            if (index <= 2) {
                _this["beiKe_x" + index].y = 327;
            }
            else {
                _this["beiKe_x" + index].y = 525;
            }
            _this["beiKe_x" + index].visible = true;
            // 5 7 15 10 8
            egret.setTimeout(function () {
                if (_this.indexNum >= 2) {
                    for (var i = 0; i < 5; i++) {
                        if (!_this["beiKe_x" + i].visible) {
                            if (i <= 2) {
                                _this["beiKe_x" + i].y = 433;
                            }
                            else {
                                _this["beiKe_x" + i].y = 630;
                            }
                            _this["beiKe_x" + i].visible = true;
                        }
                    }
                    _this.fanbeiNum.text = "X2";
                    _this.rotateNum.text = "" + vo.GameData.TotalActionCount;
                    _this.freeNum.text = "" + vo.GameData.TotalActionCount;
                    _this.beiNum.text = "2";
                    Commond.sendBonus(vo.GameData.TotalActionCount, 2);
                    _this.tipsGroup.visible = true;
                    vo.GameData.TotalActionCount -= 1;
                }
            }, _this, 200);
        });
    };
    //选择贝壳结束按钮
    MainScenceUI.prototype.closeFreeUi = function () {
        this.indexNum = 0;
        //关闭了选择免费界面
        GameConfig.emptyPlay = true;
        GameConfig.freeGame = false;
        this.bg.visible = true;
        this.bg1.visible = false;
        this.mainGroup.visible = true;
        this.freeGroup.visible = false;
        this.tipsGroup.visible = false;
        //游戏页面ui 
        this.logo1.visible = false;
        this.logo2.visible = true;
        this.free_group.visible = true;
        this.gameScence.freeBg.visible = true;
        this.free_fanbei.text = this.fanbeiNum.text;
        this.free_Num.text = "" + vo.GameData.TotalActionCount; //GameManager.getInstance().getFreeCount();
        for (var i = 0; i < 5; i++) {
            this["beiKe_" + i].source = "with_pearl_01_png";
            this["beiKe_x" + i].visible = false;
        }
        GameManager.getInstance().startGame(true);
    };
    //自动游戏结束弹窗
    MainScenceUI.prototype.endFree = function () {
        this.tipsGroup.visible = true;
        this.pickFree.visible = false;
        this.overFree.visible = true;
        this.stopMusic();
    };
    //免费游戏结束按钮
    MainScenceUI.prototype.endFreeUi = function () {
        //游戏页面ui 
        this.logo1.visible = true;
        this.logo2.visible = false;
        this.free_group.visible = false;
        this.gameScence.freeBg.visible = false;
        this.tipsGroup.visible = false;
        this.pickFree.visible = true;
        this.overFree.visible = false;
        this.autoItem.sopAutoBtn.enabled = true;
        //还有自动次数，游戏停止，弹窗
        //展示金币
        var resultData = vo.GameData.resultData;
        var totalBet = resultData.Value.SpinResult.TotalBet; //vo.GameData.betScoreArr[vo.GameData.betIndex];//
        var totalWin = resultData.Value.SpinResult.TotalWin;
        var denom = resultData.Value.SpinResult.Denom / 10000; //总赌注
        var winmoney = resultData.Value.Dollar; //奖金
        var b = winmoney / denom;
        console.log(denom + " == 最后的分数 == " + winmoney);
        if (b >= 30) {
            this.setReward(winmoney, true, 4);
        }
        if (b >= 8 && b < 30) {
            this.setReward(winmoney, true, 3);
        }
        if (b >= 1 && b < 8) {
            this.setReward(winmoney, true, 2);
        }
        if (b < 1) {
            this.setReward(winmoney, true, 1);
        }
    };
    MainScenceUI.prototype.onResize = function () {
        var _this = this;
        var scaleX = (window.innerWidth / GameConfig.DES_WIDTH) || 0;
        var scaleY = window.innerHeight > GameConfig.J_HEIGHT ? GameConfig.J_HEIGHT / GameConfig.DES_HEIGHT : window.innerHeight / GameConfig.DES_HEIGHT || 0;
        var s = scaleX > scaleY ? scaleY : scaleX;
        this.gameScence.pent.tipScale();
        if (window.innerWidth < 769) {
            console.log("AAAAAAA");
            this.mainGroup.horizontalCenter = undefined;
            this.mainGroup.left = 85;
            this.freeGroup.left = 85;
            this.tipsGroup.left = 85;
            this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = undefined;
            this.topGroup.left = this.bottomGroup.left = 0;
            this.textGroup.horizontalCenter = undefined;
            this.textGroup.left = 150;
            this.setBar.left = 480;
            this.setBar.right = undefined;
        }
        else {
            console.log("BBBBBB");
            this.mainGroup.horizontalCenter = 0;
            this.mainGroup.left = undefined;
            this.freeGroup.left = undefined;
            this.tipsGroup.left = undefined;
            this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = 0;
            this.topGroup.left = this.bottomGroup.left = undefined;
            this.textGroup.horizontalCenter = 0;
            this.textGroup.left = undefined;
            this.setBar.left = undefined;
            this.setBar.right = 0;
        }
        if (window.innerWidth < 800 / window.devicePixelRatio || s <= 0.48) {
            this.mainGroup.scaleX = 0.62;
            this.mainGroup.scaleY = 0.62;
            this.freeGroup.scaleX = this.freeGroup.scaleY = 0.62;
            this.tipsGroup.scaleX = this.tipsGroup.scaleY = 0.62;
            this.logo_group.y = 32;
            this.tool_group.y = 760;
            this.gameScence.y = 140;
            // console.log(this.tool_group.y + " === CCC == " + this.logo_group.y + " == CCCC === " + this.mainGroup.y);
            // console.log("this.gameScence.y == " + this.gameScence.y);
            if (window.innerWidth > 768 / window.devicePixelRatio) {
                console.log("DDDDDD");
                this.gameScence.pent.tipScaleSize();
                this.mainGroup.horizontalCenter = 0;
                this.mainGroup.left = undefined;
                this.freeGroup.horizontalCenter = 0;
                this.tipsGroup.horizontalCenter = 0;
                this.freeGroup.left = undefined;
                this.tipsGroup.left = undefined;
                this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = 0;
                this.topGroup.left = this.bottomGroup.left = undefined;
                this.textGroup.horizontalCenter = 0;
                this.textGroup.left = undefined;
                this.setBar.left = undefined;
                this.setBar.right = 0;
            }
            else {
                console.log("EEEEEE");
                this.mainGroup.horizontalCenter = undefined;
                this.mainGroup.left = 85;
                this.freeGroup.left = 85;
                this.tipsGroup.left = 85;
                this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = undefined;
                this.topGroup.left = this.bottomGroup.left = 0;
                this.textGroup.horizontalCenter = undefined;
                this.textGroup.left = 150;
                this.setBar.left = 480;
                this.setBar.right = undefined;
            }
        }
        else {
            console.log("FFFFFF");
            this.mainGroup.scaleX = s * 1.08;
            this.mainGroup.scaleY = s * 1.08;
            this.freeGroup.scaleX = s * 1.08;
            this.freeGroup.scaleY = s * 1.08;
            this.tipsGroup.scaleX = s * 1.08;
            this.tipsGroup.scaleY = s * 1.08;
            console.log('sss->', this.mainGroup.scaleX);
            this.mainGroup.horizontalCenter = 0;
            this.mainGroup.left = undefined;
            this.freeGroup.horizontalCenter = 0;
            this.tipsGroup.horizontalCenter = 0;
            this.freeGroup.left = undefined;
            this.tipsGroup.left = undefined;
            this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = 0;
            this.topGroup.left = this.bottomGroup.left = undefined;
            this.textGroup.horizontalCenter = 0;
            this.textGroup.left = undefined;
            this.setBar.left = undefined;
            this.setBar.right = 0;
            if (window.screen.width == 1366 && window.screen.height == 768) {
                if (window.innerWidth >= 945 && window.innerWidth <= 955 && window.innerHeight >= 642 && window.innerHeight <= 652) {
                    console.log("RRRRR");
                    this.mainGroup.scaleX = this.mainGroup.scaleY = s * 0.9;
                    this.freeGroup.scaleX = this.freeGroup.scaleY = s * 0.9;
                    this.tipsGroup.scaleX = this.tipsGroup.scaleY = s * 0.9;
                }
            }
            if (window.screen.width == 1920 / window.devicePixelRatio && window.screen.height == 1080 / window.devicePixelRatio) {
                if (window.innerWidth >= 1180 && window.innerWidth <= 1190 && window.innerHeight >= 794 && window.innerHeight <= 804) {
                    console.log("AAAAAA1111");
                    this.mainGroup.scaleX = this.mainGroup.scaleY = s * 1.088;
                    // this.freeGroup.scaleX = this.freeGroup.scaleY = s * 1.088;
                    this.tipsGroup.scaleX = this.tipsGroup.scaleY = s * 1.088;
                    this.logo_group.y = 53;
                    this.tool_group.y = 778;
                    this.gameScence.y = 160;
                }
                if (window.innerWidth >= 947 && window.innerWidth <= 957 && window.innerHeight >= 645 && window.innerHeight <= 655) {
                    console.log("AAAAAA2222");
                    this.mainGroup.scaleX = this.mainGroup.scaleY = s * 0.9;
                    this.freeGroup.scaleX = this.freeGroup.scaleY = s * 0.9;
                    this.tipsGroup.scaleX = this.tipsGroup.scaleY = s * 0.9;
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
        this.bg.scaleX = window.innerWidth / GameConfig.MAX_WIDTH;
        this.bg1.scaleX = window.innerWidth / GameConfig.MAX_WIDTH;
        if (this.bg.scaleX > 1) {
            this.bg.scaleX = 1;
            this.bg1.scaleX = 1;
            // this.bg1.scaleY = 1;
        }
        if (window.innerHeight > GameConfig.J_HEIGHT) {
            var t1s = (GameConfig.J_HEIGHT - 55) / GameConfig.J_HEIGHT;
            this.bg.scaleY = t1s;
            this.bg1.scaleY = t1s;
        }
        else {
            var t2s = (window.innerHeight - 55) / GameConfig.J_HEIGHT;
            this.bg.scaleY = t2s;
            this.bg1.scaleY = t2s;
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
            this.bg1.scaleY = window.innerHeight / this.bg1.height + 0.2;
        }
        else {
            this.topGroup.visible = this.bottomGroup.visible = true;
        }
        egret.clearTimeout(this.clet);
        this.clet = egret.setTimeout(function () {
            _this.topList.updataPosition();
            // this.bg.source = window.innerWidth == 1215 && window.innerHeight == 833 ? 'BG_1x_png' : 'BG_1_png';
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
            this.updataText();
        }
        else if (this.betState == 1) {
            if (vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1) {
                vo.GameData.betIndex += 1;
                SoundManager.getInstance().playEffect(SoundConst.ADD);
            }
            this.betSubBtn.enabled = vo.GameData.betIndex > 0;
            this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
            this.updataText();
        }
        if (this.lineState == -1) {
            if (vo.GameData.line > 1) {
                vo.GameData.line -= 1;
                SoundManager.getInstance().playEffect(SoundConst.SUB);
            }
            this.lineSubBtn.enabled = vo.GameData.line > 1;
            this.lineAddBtn.enabled = vo.GameData.line < 25;
            this.updataText();
        }
        else if (this.lineState == 1) {
            if (vo.GameData.line < 25) {
                vo.GameData.line += 1;
                SoundManager.getInstance().playEffect(SoundConst.ADD);
            }
            this.lineSubBtn.enabled = vo.GameData.line > 1;
            this.lineAddBtn.enabled = vo.GameData.line < 25;
            this.updataText();
        }
    };
    MainScenceUI.prototype.test1 = function (evt) {
        var ttt = evt.currentTarget.hitTestPoint(evt.stageX, evt.stageY);
        if (ttt) {
            this.addEventListener(egret.Event.ENTER_FRAME, this.taouchBonus, this);
        }
    };
    MainScenceUI.prototype.test3 = function (evt) {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.taouchBonus, this);
        this.bonusBtnSource();
    };
    MainScenceUI.prototype.taouchBonus = function () {
        this.bonusBtnShan.visible = true;
        egret.clearTimeout(this.bonusBtnAni);
    };
    MainScenceUI.prototype.bonusBtnSource = function () {
        var _this = this;
        if (this.bonusBtn.visible) {
            this.bonusBtnShan.visible = false;
            this.bonusBtnAni = egret.setTimeout(function () {
                _this.bonusBtnShan.visible = true;
                _this.test();
            }, this, 200);
        }
    };
    MainScenceUI.prototype.test = function () {
        var _this = this;
        // this.bonusBtnShan.visible = true;
        if (this.bonusBtn.visible) {
            this.bonusBtnAni = egret.setTimeout(function () {
                _this.bonusBtnSource();
            }, this, 200);
        }
    };
    MainScenceUI.prototype.stopMusic = function () {
        if (this.chanel) {
            this.chanel.stop();
            this.chanel = null;
        }
    };
    MainScenceUI.prototype.showWin = function (arr) {
        //点击按钮闪烁
        var _this = this;
        //进入免费游戏抽奖
        if (arr.length > 0 && arr[0].Type == "Bonus2" && arr[0].SymbolCount == 3) {
            console.log('免费游戏中奖');
            //GameManager.getInstance().getFreeCount() > 0 && 
            if (vo.GameData.resultData.ActionType == 'slot') {
                GameConfig.freeGame = true;
            }
            // else{
            // 	serverData.initData.Value.TotalActionCount += 15;
            // 	if(serverData.initData.Value.TotalActionCount >= 33){
            // 		serverData.initData.Value.TotalActionCount = 33;
            // 	}
            // }
            if (SoundManager.getInstance().effectOn && this.chanel == null) {
                SoundManager.getInstance().playMusic(SoundConst.FREEBG, -1).then(function (chanel) {
                    _this.chanel = chanel;
                });
            }
            if (GameConfig.freeGame) {
                this.bonusBtn.visible = true;
                this.bonusBtnShan.visible = true;
                this.bonusBtnAni = egret.setTimeout(function () {
                    _this.bonusBtnSource();
                }, this, 200);
                //当有3个C1,C1不在中间一列移动到中间
                // this.gameScence.
                this.gameScence.displayBonus(arr[0].Positions);
                this.bonusPos = [];
                this.bonusPos = arr[0].Positions;
                //显示免费中奖的3个动画
                var positions = arr[0].Positions;
                // this.gameScence.pent.showkuang2(arr[0].Positions);		//免费旋转3个的框
                for (var j = 0; j < positions.length; j++) {
                    var p = positions[j];
                    this.gameScence.showAnimation(p); //免费旋转3个的动画
                }
                this.startBtn.visible = true;
                this.startBtn.enabled = false;
                this.stopBtn.visible = false;
                this.infoBtn.enabled = false;
                this.autoItem.sopAutoBtn.enabled = false;
                this.betSubBtn.enabled = this.betAddBtn.enabled = false;
                this.lineSubBtn.enabled = this.lineAddBtn.enabled = false;
                this.autoItem.autoBtn.enabled = false;
                // this.autoItem.autoText_mode.visible = false;
                // this.autoItem.autoText_an.visible = false;
                if (!this.autoItem.autoBtn.visible) {
                    this.autoItem.autoText_mode.visible = false;
                    this.autoItem.autoText_an.visible = false;
                }
                else {
                    this.autoItem.autoText_mode.visible = false;
                    this.autoItem.autoText_an.visible = true;
                }
                this.speedOffBtn.enabled = false;
                this.speedOnBtn.enabled = false;
                if (!GameConfig.speedPlay) {
                    if (!this.speedOffBtn.enabled) {
                        this.speedOffTxt.visible = false;
                    }
                    else {
                        this.speedOffTxt.visible = true;
                    }
                }
                else {
                    if (!this.speedOnBtn.enabled) {
                        this.speedOnTxt.visible = false;
                    }
                    else {
                        this.speedOnTxt.visible = true;
                    }
                }
                this.topMask.visible = true;
                this.setBar.enabled = false;
                this.bottomMask.visible = true;
            }
            return;
        }
        //先显示一下全部线
        this.gameScence.pent.clearTip();
        this.gameScence.pent.cleaAllLine();
        // if (arr.length > 1) {
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
            //显示动画
            for (var j = 0; j < positions.length; j++) {
                var p = positions[j];
                this.gameScence.showAnimation(p);
            }
        }
        //}
        var t = arr.length > 1 ? 1000 : 0;
        this.tt = egret.setTimeout(function () {
            _this.gameScence.pent.clearTip();
            _this.gameScence.pent.cleaAllLine();
            var data = arr[_this.winIndex];
            if (data.Type != "Bonus2") {
                var arrs = _this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
                if (GameConfig.speedPlay && GameConfig.autoPlay) {
                    _this.gameScence.pent.showLines(data.Data.Line);
                }
                else {
                    // this.gameScence.pent.showLine(data.Data.Line, data.Positions);
                    _this.gameScence.pent.showLine(data.Data.Line, arrs);
                    _this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
                }
                _this.gameScence.pent.showTipLine(data.Data.Line); //两边的数字
            }
            else {
                _this.gameScence.pent.showkuang2(data.Positions);
            }
            _this.winIndex++;
            if (_this.winIndex >= arr.length) {
                _this.winIndex = 0;
            }
            _this.clert = egret.setInterval(function () {
                _this.gameScence.pent.clearTip();
                _this.gameScence.pent.cleaAllLine();
                var data = arr[_this.winIndex];
                if (arr.length > 1) {
                    SoundManager.getInstance().playEffect(SoundConst.KA);
                }
                if (data.Type != "Bonus2") {
                    var arrs = _this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
                    if (GameConfig.speedPlay && GameConfig.autoPlay) {
                        _this.gameScence.pent.showLines(data.Data.Line);
                    }
                    else {
                        // this.gameScence.pent.showLine(data.Data.Line, data.Positions);
                        _this.gameScence.pent.showLine(data.Data.Line, arrs);
                        _this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
                    }
                    _this.gameScence.pent.showTipLine(data.Data.Line);
                }
                else {
                    _this.gameScence.pent.showkuang2(data.Positions);
                }
                _this.winIndex++;
                if (_this.winIndex >= arr.length) {
                    _this.winIndex = 0;
                }
            }, _this, 1000);
        }, this, t);
        var resultData = vo.GameData.resultData;
        var totalBet = resultData.Value.SpinResult.TotalBet; //vo.GameData.betScoreArr[vo.GameData.betIndex];//
        var totalWin = resultData.Value.SpinResult.TotalWin;
        var denom = resultData.Value.SpinResult.Denom / 10000; //总赌注
        var winmoney = resultData.Value.Dollar; //奖金
        var b = winmoney / denom;
        console.log(denom + " == 最后的分数 == " + winmoney);
        if (b >= 30) {
            this.setReward(winmoney, true, 4);
        }
        if (b >= 8 && b < 30) {
            this.setReward(winmoney, true, 3);
        }
        if (b >= 1 && b < 8) {
            this.setReward(winmoney, true, 2);
        }
        if (b < 1) {
            this.setReward(winmoney, true, 1);
        }
        // if (b >= 50) {
        // 	this.setReward(winmoney, true, 4);
        // }
        // else if (b >= 10) {
        // 	this.setReward(winmoney, true, 3);
        // }
        // else if (b >= 1.8) {
        // 	this.setReward(winmoney, true, 2);
        // } else {
        // 	this.setReward(winmoney, true, 1);
        // }
    };
    MainScenceUI.prototype.hideWin = function () {
        egret.clearInterval(this.clert);
        egret.clearTimeout(this.tt);
        egret.clearTimeout(this.fourFishAni);
        this.gameScence.pent.clearAll();
        this.gameScence.hideAllAnimation();
        this.rewardGroup.y = 46;
        this.rewardGroup.scaleX = 1;
        this.rewardGroup.scaleY = 1;
        this.hideBigReward();
        //关音效
        this.stopMusic();
        egret.Tween.removeTweens(this.rewardGroup);
        this.winIndex = 0;
        this.hideFiveAnimation();
    };
    MainScenceUI.prototype.setReward = function (v, isA, rewardType, isTan) {
        var _this = this;
        if (isA === void 0) { isA = true; }
        if (rewardType === void 0) { rewardType = 1; }
        if (isTan === void 0) { isTan = false; }
        egret.Tween.removeTweens(this);
        if (isA && this.reward < v) {
            if (GameConfig.speedPlay) {
                SoundManager.getInstance().playEffect(SoundConst.DEJIANG);
            }
            if (rewardType == 1) {
                // SoundManager.getInstance().playEffect(SoundConst.DEJIANG);
                if (SoundManager.getInstance().effectOn && this.chanel == null) {
                    SoundManager.getInstance().playMusic(SoundConst.DEJIANG, 1).then(function (chanel) {
                        _this.chanel = chanel;
                    });
                }
                egret.Tween.get(this).to({ reward: v }, 2000);
            }
            if (rewardType == 2) {
                // SoundManager.getInstance().playEffect(SoundConst.WWMUSIC);
                if (!GameConfig.speedPlay && SoundManager.getInstance().effectOn && this.chanel == null) {
                    SoundManager.getInstance().playMusic(SoundConst.WWMUSIC, 1).then(function (chanel) {
                        _this.chanel = chanel;
                    });
                }
                egret.Tween.get(this).to({ reward: v }, 2000);
            }
            if (rewardType == 3) {
                // SoundManager.getInstance().playEffect(SoundConst.WWMUSIC);
                if (!GameConfig.speedPlay && SoundManager.getInstance().effectOn && this.chanel == null) {
                    SoundManager.getInstance().playMusic(SoundConst.WWMUSIC, 1).then(function (chanel) {
                        _this.chanel = chanel;
                    });
                }
                if (GameConfig.speedPlay) {
                    egret.Tween.get(this).to({ reward: v }, 2000);
                }
                else {
                    egret.Tween.get(this).to({ reward: v }, 2000);
                    egret.Tween.get(this.rewardGroup).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).wait(2000).to({ scaleX: 1, scaleY: 1 }, 1000);
                }
            }
            if (rewardType == 4) {
                console.log("大奖了大奖了大奖了");
                // SoundManager.getInstance().playEffect(SoundConst.BIGMUSIC);
                if (!GameConfig.speedPlay && SoundManager.getInstance().effectOn && this.chanel == null) {
                    SoundManager.getInstance().playMusic(SoundConst.BIGMUSIC, 1).then(function (chanel) {
                        _this.chanel = chanel;
                    });
                }
                if (GameConfig.speedPlay) {
                    egret.Tween.get(this).to({ reward: v }, 2000);
                }
                else {
                    egret.Tween.get(this).to({ reward: v }, 8000);
                    // .wait(2000)
                    egret.Tween.get(this.rewardGroup).to({ scaleX: 1.2, scaleY: 1.2 }, 1000)
                        .wait(2000)
                        .to({ y: -280 }, 1000)
                        .wait(2000)
                        .call(function () { _this.showBigReward(); }, this)
                        .wait(4000)
                        .call(function () {
                        _this.hideBigReward();
                        egret.Tween.get(_this.rewardGroup).to({ scaleX: 1, scaleY: 1 }, 500)
                            .to({ y: 46 }, 500);
                    }, this);
                }
            }
            this.isAutoGame(isTan);
        }
        else {
            this.reward = v;
            this.isAutoGame(isTan);
        }
    };
    //弹窗是否自动游戏s
    MainScenceUI.prototype.isAutoGame = function (isTan) {
        // console.log(GameConfig.alwaysGame + " == GameConfig.lastCount === " + GameConfig.lastCount);
        if (GameConfig.lastCount > 0 && isTan) {
            GameConfig.autoPlay = true;
            if (GameConfig.alwaysGame) {
                GameManager.getInstance().isJIxuAuto();
            }
            else {
                this.autoItem.resetDo();
            }
        }
        else {
            //保留的自动旋转的次数
            // console.log("GameConfig.lastCount == " + GameConfig.lastCount);
        }
    };
    Object.defineProperty(MainScenceUI.prototype, "reward", {
        get: function () {
            return this._rewardNum;
        },
        set: function (v) {
            // let s: string = GameManager.numberToCommonStr(this._rewardNum);
            if (GameManager.getInstance().getFreeCount() > 0) {
                this.allReward += vo.GameData.resultData.Value.TotalWinDollar;
                if (this.allReward > 0) {
                    this.free_money.text = "￥" + GameManager.numberToCommonStr(this._rewardNum);
                }
                else {
                    this.free_money.text = "--";
                }
            }
            else {
                this.allReward = 0;
            }
            this._rewardNum = v;
            this.rewardLabel.text = 'x' + GameManager.numberToCommonStr(this._rewardNum);
        },
        enumerable: true,
        configurable: true
    });
    MainScenceUI.prototype.showFourFish = function (data, callfun) {
        var _this = this;
        if (callfun === void 0) { callfun = null; }
        if (SoundManager.getInstance().effectOn && this.chanel == null) {
            SoundManager.getInstance().playMusic(SoundConst.FOURFISH, 1).then(function (chanel) {
                _this.chanel = chanel;
            });
        }
        //显示动画
        for (var j = 0; j < data.Positions.length; j++) {
            var p = data.Positions[j];
            this.gameScence.showAnimation(p);
        }
        this.fourFishAni = egret.setTimeout(function () {
            // this.gameScence.hideAllAnimation();
            _this.stopMusic();
            callfun && callfun();
        }, this, 3800);
    };
    /**
     * 显示5同类动画
     */
    MainScenceUI.prototype.showFiveAimation = function (data, callfun) {
        var _this = this;
        if (callfun === void 0) { callfun = null; }
        // SoundManager.getInstance().playEffect(SoundConst.FIVE_SOUND);
        this.aGroup.visible = true;
        this.bigRewardLabel.source = 'five_png';
        // this.bigRewardLabel.size = 80;
        this.bigRewardGroup.verticalCenter = 0;
        this.bigRewardGroup.scaleX = 0.5;
        this.bigRewardGroup.scaleY = 0.5;
        if (data.Data) {
            var arrs = this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
            this.gameScence.pent.showLine(data.Data.Line, arrs);
            this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
            this.gameScence.pent.showTipLine(data.Data.Line); //两边的数字
        }
        else {
            this.gameScence.pent.showkuang2(data.Positions);
        }
        egret.Tween.removeTweens(this.bigRewardGroup);
        egret.Tween.get(this.bigRewardGroup)
            .to({ scaleX: 1.2, scaleY: 1.2 }, 800).to({ scaleX: 0.5, scaleY: 0.5 }, 800)
            .to({ scaleX: 1.2, scaleY: 1.2 }, 800).to({ scaleX: 0.5, scaleY: 0.5 }, 800)
            .to({ scaleX: 1.2, scaleY: 1.2 }, 800).call(function () {
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
        // this.gameScence.pent.clearAll();
    };
    /**
     * 显示大奖
     */
    MainScenceUI.prototype.showBigReward = function (callfun) {
        var _this = this;
        if (callfun === void 0) { callfun = null; }
        this.aGroup.visible = true;
        this.bigRewardLabel.source = 'big_png';
        // this.bigRewardLabel.size = 150;
        this.bigRewardGroup.scaleX = 1;
        this.bigRewardGroup.scaleY = 1;
        this.bigRewardGroup.verticalCenter = -150;
        egret.Tween.removeTweens(this.bigRewardGroup);
        egret.Tween.get(this.bigRewardGroup)
            .to({ scaleX: 0.85, scaleY: 0.85 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
            .to({ scaleX: 0.85, scaleY: 0.85 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
            .to({ scaleX: 0.85, scaleY: 0.85 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
            .to({ scaleX: 0.85, scaleY: 0.85 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
            .to({ scaleX: 0.85, scaleY: 0.85 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
            .to({ scaleX: 0.85, scaleY: 0.85 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).call(function () {
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
            this.aGroup.visible = false;
        }
    };
    return MainScenceUI;
}(core.BaseUI));
__reflect(MainScenceUI.prototype, "MainScenceUI");
//# sourceMappingURL=MainScenceUI.js.map