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
    // public dianji:eui.Rect;
    function MainScenceUI() {
        var _this = _super.call(this) || this;
        _this.indexNum = 0;
        _this.indexNum1 = 0;
        _this.curt = 0;
        _this.ruleIsShow = false;
        _this._bet = 0.00;
        _this._money = 0.00;
        _this._allmoney = 0.00;
        _this.isShowWin = true;
        _this.skinName = MainScenceUISkin;
        return _this;
    }
    MainScenceUI.prototype.onAdd = function () {
        var _this = this;
        _super.prototype.onAdd.call(this);
        this.gameScence.init();
        this.gameScence.reset();
        this.baner.initArr(vo.GameData.betScoreArr, vo.GameData.betIndex);
        this.registerEvent(this.baner, egret.Event.CHANGE, this.onChange, this);
        this.registerEvent(this.ruleBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.autoBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.playBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.setBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.historyBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.musicBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.shanBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.qusBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.exitBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        // this.registerEvent(this.gameScence,egret.TouchEvent.TOUCH_TAP,this.onTab, this);
        this.gameScence.dianji.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hands, this);
        // this.dianji.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.nohands, this);
        this.gameScence.dianji.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopAni, this);
        if (egret.localStorage.getItem('isShowlogin') != '0') {
            this.showlogin();
        }
        else {
            this.showMain();
        }
        this.showOrHideAutoPlay(GameConfig.autoPlay);
        if (GameManager.getInstance().getFreeCount() > 0) {
            this.setBG(true, false);
            egret.setTimeout(function () {
                _this.showMain();
            }, this, 900);
            // console.log("sssssTT");
        }
        else {
            this.setBG(false, false);
            // console.log("sssssTT2222");
        }
        if (!this.starMC) {
            this.starMC = game.MCUtils.getMc('star');
            this.strGroup.addChild(this.starMC);
            this.starMC.visible = false;
        }
        this.showAllAnimation();
        this.showStar();
        this.initfighter();
        this.initfighter1();
        this.refreshCount();
    };
    MainScenceUI.prototype.addListeber = function () {
        console.log("游戏开始添加滚动界面监听");
        this.gameScence.dianji.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hands, this);
        // this.dianji.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.nohands, this);
        this.gameScence.dianji.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopAni, this);
    };
    MainScenceUI.prototype.initfighter = function () {
        if (!this.glowFilter) {
            var color = 0x09E8F2; /// 光晕的颜色，十六进制，不包含透明度
            var alpha = 0.1; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
            var blurX = 40; /// 水平模糊量。有效值为 0 到 255.0（浮点）
            var blurY = 40; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
            var strength = 10; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
            var quality = 1 /* LOW */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
            var inner = false; /// 指定发光是否为内侧发光，暂未实现
            var knockout = false; /// 指定对象是否具有挖空效果，暂未实现
            this.glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
        }
        this.showlabel.filters = [this.glowFilter];
    };
    MainScenceUI.prototype.initfighter1 = function () {
        if (!this.glowFilter1) {
            var color = 0xff0000; /// 光晕的颜色，十六进制，不包含透明度
            var alpha = 0.1; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
            var blurX = 11; /// 水平模糊量。有效值为 0 到 255.0（浮点）
            var blurY = 11; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
            var strength = 5; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
            var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
            var inner = false; /// 指定发光是否为内侧发光，暂未实现
            var knockout = false; /// 指定对象是否具有挖空效果，暂未实现
            this.glowFilter1 = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
        }
        this.moneyLabel.filters = [this.glowFilter1];
        this.betNumLabel.filters = [this.glowFilter1];
        this.allNumLabel.filters = [this.glowFilter1];
    };
    MainScenceUI.prototype.onRemove = function () {
        _super.prototype.onRemove.call(this);
    };
    MainScenceUI.prototype.onChange = function (e) {
        vo.GameData.betIndex = this.baner.getIndex();
        this.updataNum();
        this.refreshCount();
    };
    MainScenceUI.prototype.refreshCount = function () {
        var v = vo.GameData.betScoreArr[vo.GameData.betIndex];
        GameConfig.singleWinMaxCount = v * 2000;
        GameConfig.moneyAddMax = v * 20000;
        GameConfig.moneySubMax = v * 20000;
    };
    MainScenceUI.prototype.updataUI = function () {
        this.autoPlayNumLabel.text = vo.GameData.autoPlayCount + '';
        this.updataNum();
        this.musicBtn.selected = SoundManager.getInstance().effectOn;
        this.shanBtn.selected = GameConfig.speedPlay;
    };
    MainScenceUI.prototype.updataNum = function () {
        var v = vo.GameData.betScoreArr[this.baner.getIndex()];
        if (v > this.bet) {
            egret.Tween.get(this).to({ bet: v }, 500);
        }
        else {
            this.bet = v;
        }
        this.betbanaceLabel.text = '投注: CNY ' + v.toFixed(2);
        if (this.allwin < vo.GameData.slotInfo.allwin) {
            egret.Tween.get(this).to({ allwin: vo.GameData.slotInfo.allwin }, 500);
        }
        else {
            this.allwin = vo.GameData.slotInfo.allwin;
        }
        if (this.balance < vo.GameData.balance) {
            egret.Tween.get(this).to({ balance: vo.GameData.balance }, 500);
        }
        else {
            this.balance = vo.GameData.balance;
        }
    };
    MainScenceUI.prototype.stopAni = function () {
        var _this = this;
        this.gameScence.dianji.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.stopAni, this);
        this.gameScence.dianji.removeEventListener(mouse.MouseEvent.MOUSE_OVER, this.hands, this);
        if (GameManager.getInstance().gameState == GameType.GameState.PLAYING) {
            SoundManager.getInstance().playEffect(SoundConst.BUTTON);
            this.shan.visible = true;
            this.shan0.visible = true;
            this.shan1.visible = true;
            // this.dianji.visible = false;
            egret.setTimeout(function () {
                console.log("点击界面停止旋转");
                _this.shan.visible = false;
                _this.shan0.visible = false;
                _this.shan1.visible = false;
                _this.indexNum1++;
                if (!GameConfig.speedPlay && _this.indexNum1 == 3) {
                    _this.isSpeed();
                    GameManager.getInstance().pausume();
                }
                if (_this.playBtn.enabled) {
                    GameManager.getInstance().stopGame();
                }
            }, this, 200);
        }
    };
    MainScenceUI.prototype.hands = function () {
        if (GameManager.getInstance().gameState != GameType.GameState.STOP) {
            mouse.setButtonMode(this.gameScence.dianji, true);
        }
        else {
            mouse.setButtonMode(this.gameScence.dianji, false);
        }
    };
    MainScenceUI.prototype.onTab = function (e) {
        var _this = this;
        switch (e.currentTarget) {
            case this.playBtn://开始旋转
                if (egret.getTimer() - this.curt > 400) {
                    this.curt = egret.getTimer();
                    if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
                        this.hideAllWin();
                        GameManager.getInstance().startGame();
                    }
                    else {
                        if (GameManager.getInstance().gameState == GameType.GameState.PLAYING) {
                            console.log("stopZZZZZZ");
                            if (!this.gameScence.group.visible) {
                                egret.setTimeout(function () {
                                    GameManager.getInstance().stopGame();
                                    GameManager.getInstance().enterPlayingState();
                                }, this, 200);
                            }
                        }
                    }
                }
                else {
                    this.indexNum++;
                    if (GameManager.getInstance().gameState == GameType.GameState.PLAYING) {
                        console.log("stopKKKKK");
                        if (!this.gameScence.group.visible) {
                            egret.setTimeout(function () {
                                GameManager.getInstance().stopGame();
                                GameManager.getInstance().enterPlayingState();
                                _this.gameScence.dianji.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.stopAni, _this);
                            }, this, 200);
                        }
                    }
                    //点击太快弹一次窗(只弹一次)
                    if (!GameConfig.speedPlay && this.indexNum == 3) {
                        this.isSpeed();
                        GameManager.getInstance().pausume();
                    }
                }
                break;
            case this.autoBtn://自动旋转
                if (!GameConfig.autoPlay) {
                    GameManager.getInstance().pausume();
                    core.UIManager.openUI(core.UIConst.AutoPlayUI, core.LayerManager.Layer_Top);
                }
                else {
                    GameManager.getInstance().autoStopGame();
                }
                break;
            case this.ruleBtn://赔付表
                this.ruleIsShow = !this.ruleIsShow;
                this.setRule();
                break;
            case this.musicBtn://声音开关
                SoundManager.getInstance().setBgOn(this.musicBtn.selected);
                SoundManager.getInstance().setEffectOn(this.musicBtn.selected);
                if (!this.musicBtn.selected) {
                    GameManager.getInstance().stopMusic();
                }
                break;
            case this.setBtn://设置开关
                core.UIManager.openUI(core.UIConst.SetUI, core.LayerManager.Layer_Top);
                GameManager.getInstance().pausume();
                break;
            case this.historyBtn://记录开关
                //window.open('https://asicw.playngonetwork.com/CasinoHistory?userId=295167-311O469S532G133A&custId=1214919&pid=185&lang=zh_CN');
                openHistory();
                break;
            case this.shanBtn://快速开关
                GameConfig.speedPlay = this.shanBtn.selected;
                break;
            case this.qusBtn://问题开关
                openDes();
                break;
            case this.exitBtn://退出开关
                SoundManager.getInstance().playEffect(SoundConst.BUTTON);
                egret.setTimeout(function () {
                    window.close();
                }, this, 200);
                break;
        }
    };
    MainScenceUI.prototype.isSpeed = function () {
        core.UIManager.openUI(core.UIConst.SpeedTipsUI, core.LayerManager.Layer_Top);
        var ui = core.UIManager.getUI(core.UIConst.SpeedTipsUI);
        ui.shows('快速进行', '您似乎喜欢较快的游戏节奏。是否启用“快速游戏”模式？' + '\n' + '您可以随时在设置菜单中禁用它。');
    };
    /**
     * 控制赔付表
     */
    MainScenceUI.prototype.setRule = function () {
        this.ruleGroup.visible = this.ruleIsShow;
        this.showGroup.visible = this.gameScence.visible = !this.ruleIsShow;
    };
    Object.defineProperty(MainScenceUI.prototype, "bet", {
        /**
         *得到显示注数
         */
        get: function () {
            return this._bet;
        },
        /**
         * 设置显示注数
         */
        set: function (value) {
            this._bet = value;
            this.betNumLabel.text = 'cny ' + this._bet.toFixed(2);
            if (this.betNumLabel.text.length == 12 || this.betNumLabel.text.length == 13) {
                this.betNumLabel.scaleX = 0.9;
            }
            if (this.betNumLabel.text.length < 12) {
                this.betNumLabel.scaleX = 1;
            }
            if (this.betNumLabel.text.length == 14) {
                this.betNumLabel.scaleX = 0.8;
            }
            if (this.betNumLabel.text.length > 14 && this.betNumLabel.text.length <= 15) {
                this.betNumLabel.scaleX = 0.7;
            }
            if (this.betNumLabel.text.length > 15) {
                this.betNumLabel.scaleX = 0.5;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainScenceUI.prototype, "balance", {
        /**
         *得到显示余额
         */
        get: function () {
            return this._money;
        },
        /**
         * 设置余额
         */
        set: function (value) {
            this._money = value;
            this.moneyLabel.text = 'cny ' + this._money.toFixed(2);
            if (this.moneyLabel.text.length == 12 || this.moneyLabel.text.length == 13) {
                this.moneyLabel.scaleX = 0.9;
            }
            if (this.moneyLabel.text.length < 12) {
                this.moneyLabel.scaleX = 1;
            }
            if (this.moneyLabel.text.length == 14) {
                this.moneyLabel.scaleX = 0.8;
            }
            if (this.moneyLabel.text.length > 14 && this.moneyLabel.text.length <= 15) {
                this.moneyLabel.scaleX = 0.7;
            }
            if (this.moneyLabel.text.length > 15) {
                this.moneyLabel.scaleX = 0.5;
            }
            this.bananceLabel.text = '余额: CNY ' + this._money.toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 设置数字超出后scalX缩小
     */
    MainScenceUI.prototype.subScalX = function (num) {
    };
    Object.defineProperty(MainScenceUI.prototype, "allwin", {
        /**
         *得到显示总获胜
         */
        get: function () {
            return this._allmoney;
        },
        /**
         * 设置显示总获胜
         */
        set: function (value) {
            this._allmoney = value;
            this.allNumLabel.text = 'cny ' + this._allmoney.toFixed(2);
            if (this.allNumLabel.text.length == 12 || this.allNumLabel.text.length == 13) {
                this.allNumLabel.scaleX = 0.9;
            }
            if (this.allNumLabel.text.length < 12) {
                this.allNumLabel.scaleX = 1;
            }
            if (this.allNumLabel.text.length == 14) {
                this.allNumLabel.scaleX = 0.8;
            }
            if (this.allNumLabel.text.length > 14 && this.allNumLabel.text.length <= 15) {
                this.allNumLabel.scaleX = 0.7;
            }
            if (this.allNumLabel.text.length > 15) {
                this.allNumLabel.scaleX = 0.5;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 显示或者隐藏自动旋转信息
     */
    MainScenceUI.prototype.showOrHideAutoPlay = function (b) {
        this.playBtn.visible = !b;
        this.autoPlayGroup.visible = b;
        egret.Tween.removeTweens(this.autoPlayTitleLabel);
        if (b) {
            this.autoPlayTitleLabel.alpha = 1;
            egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
        }
    };
    /**
     * 显示正常获胜
     */
    MainScenceUI.prototype.showAllWin = function (winArr, callfun, callobj, singlecallfun) {
        var _this = this;
        if (callfun === void 0) { callfun = null; }
        if (callobj === void 0) { callobj = null; }
        if (singlecallfun === void 0) { singlecallfun = null; }
        //
        if (winArr.length == 0) {
            if (callfun && callobj) {
                callfun.call(callobj);
            }
            return;
        }
        var sc = 0;
        this.isShowWin = true;
        var iscall = false;
        var index = 0;
        this.indexLine = 0;
        var isover = false;
        var time = 250; //如果只有一根线time==80
        var isOne;
        var showLineCall = function () {
            _this.gameScence.clearAll();
            if (!_this.isShowWin)
                return;
            if (index == 0) {
                _this.gameScence.showAllLineWin(winArr); //显示全部线  显示的时候直接是亮的
                if (winArr.length == 1) {
                    isOne = true;
                    time = 80; //80
                }
                else {
                    isOne = false;
                    time = 250;
                }
                GameManager.getInstance().showTips('恭喜您!');
                _this.winTime = egret.setTimeout(function () {
                    if (sc == 0) {
                        SoundManager.getInstance().playEffect(winArr[index].Symbol + '_mp3');
                    }
                    _this.gameScence.clearAll(); //vo.GameData.betScoreArr[vo.GameData.betIndex]*10000
                    if (sc == 0) {
                        vo.GameData.slotInfo.allwin += winArr[index].Reward.BetMultiplier * vo.GameData.betScoreArr[vo.GameData.betIndex] * 10000 / 5 / GameConfig.bili;
                        _this.setAllWin(vo.GameData.slotInfo.allwin);
                    }
                    _this.gameScence.showLineWin(isOne, winArr[index], function () {
                        // console.log( index + " === winArr[index] === " + winArr[index].Data.Line)
                        index++;
                        if (winArr.length == 1) {
                            _this.indexLine++;
                        }
                        if (winArr.length == 2) {
                            egret.setTimeout(function () {
                                _this.indexLine++;
                            }, _this, 1700);
                        }
                        if (winArr.length == 3) {
                            egret.setTimeout(function () {
                                _this.indexLine++;
                            }, _this, 3700);
                        }
                        if (winArr.length == 4) {
                            egret.setTimeout(function () {
                                _this.indexLine++;
                            }, _this, 5700);
                        }
                        if (winArr.length == 5) {
                            egret.setTimeout(function () {
                                _this.indexLine++;
                            }, _this, 9700);
                        }
                        if (index >= winArr.length) {
                            index = 0;
                            sc = 1;
                            if (!iscall && callfun && callobj) {
                                iscall = true;
                                callfun.call(callobj);
                            }
                        }
                        showLineCall();
                        if (index == 1) {
                            singlecallfun && singlecallfun();
                        }
                    }, _this);
                }, _this, time);
            }
            else {
                if (sc == 0) {
                    vo.GameData.slotInfo.allwin += winArr[index].Reward.BetMultiplier * vo.GameData.betScoreArr[vo.GameData.betIndex] * 10000 / 5 / GameConfig.bili;
                    _this.setAllWin(vo.GameData.slotInfo.allwin);
                }
                if (sc == 0) {
                    SoundManager.getInstance().playEffect(winArr[index].Symbol + '_mp3');
                }
                _this.gameScence.showLineWin(isOne, winArr[index], function () {
                    index++;
                    if (index >= winArr.length) {
                        index = 0;
                        sc = 1;
                        if (!iscall && callfun && callobj) {
                            iscall = true;
                            callfun.call(callobj);
                        }
                    }
                    showLineCall();
                }, _this);
            }
        };
        showLineCall();
    };
    MainScenceUI.prototype.hideAllWin1 = function () {
        egret.clearTimeout(this.winTime);
        this.gameScence.clearAll();
        this.gameScence.setItem();
        this.isShowWin = false;
        // if (GameManager.getInstance().getFreeCount() == 0) {
        // 	if (vo.GameData.resultData) {
        // 		vo.GameData.balance = vo.GameData.resultData.Value.Balance;
        // 		// console.log("余额 === " + vo.GameData.balance);
        // 		this.setMoney(vo.GameData.balance);
        // 	}
        // }
    };
    /**
     * 停止显示获胜
     */
    MainScenceUI.prototype.hideAllWin = function () {
        egret.clearTimeout(this.winTime);
        this.gameScence.clearAll();
        this.gameScence.setItem();
        this.isShowWin = false;
        if (GameManager.getInstance().getFreeCount() == 0) {
            if (vo.GameData.resultData) {
                vo.GameData.balance = vo.GameData.resultData.Value.Balance;
                // console.log("余额 === " + vo.GameData.balance);
                this.setMoney(vo.GameData.balance);
            }
        }
    };
    /**
     * 展示特殊猴子获胜
     */
    MainScenceUI.prototype.showHouzi = function (data, callfun, isshowReward) {
        if (isshowReward === void 0) { isshowReward = false; }
        SoundManager.getInstance().playEffect(SoundConst.HOUZI);
        this.gameScence.showMaozi(data, isshowReward);
        this.houziTimeout = egret.setTimeout(function () {
            callfun && callfun();
        }, this, 3000);
    };
    /**
     * 隐藏特殊猴子获胜
     */
    MainScenceUI.prototype.hideHouzi = function () {
        egret.clearTimeout(this.houziTimeout);
        this.gameScence.hideMaozi();
    };
    /**
     * 设置总获胜
     */
    MainScenceUI.prototype.setAllWin = function (n) {
        if (n > this.allwin) {
            egret.Tween.get(this).to({ allwin: n }, 500);
        }
        else {
            this.allwin = n;
        }
        this.rewardLabel.text = '奖金: CNY ' + n.toFixed(2);
    };
    /**
     * 设置余额
     */
    MainScenceUI.prototype.setMoney = function (n) {
        if (n > this.balance) {
            egret.Tween.get(this).to({ balance: n }, 500);
        }
        else {
            this.balance = n;
        }
    };
    /**
     * 设置背景
     */
    MainScenceUI.prototype.setBG = function (isFree, isact) {
        if (isFree === void 0) { isFree = false; }
        if (isact === void 0) { isact = true; }
        //this.bg0.source = isFree ? 'background_texture1_level1_jpg' : 'background_texture0_level1_jpg';
        this.qbg0.source = isFree ? 'logo_texture1_level1_01-04_png' : 'logo_texture1_level1_01-03_png';
        this.qbg1.source = isFree ? 'logo_texture1_level1_01-02_png' : 'logo_texture1_level1_01_png';
        this.showbg.source = isFree ? 'menu2_png' : 'menu1_png';
        if (isFree) {
            if (!isact) {
                this.bg0.alpha = 0;
                this.bg1.alpha = 1;
                return;
            }
            egret.Tween.get(this.bg0).to({ alpha: 0 }, 1000);
            egret.Tween.get(this.bg1).to({ alpha: 1 }, 1000);
        }
        else {
            if (!isact) {
                this.bg0.alpha = 1;
                this.bg1.alpha = 0;
                return;
            }
            egret.Tween.get(this.bg0).to({ alpha: 1 }, 1000);
            egret.Tween.get(this.bg1).to({ alpha: 0 }, 1000);
        }
    };
    MainScenceUI.prototype.showAllAnimation = function () {
        var _this = this;
        var i = Math.floor(Math.random() * 6);
        this.showTitleAnimation(4, function () {
            if (i != 4) {
                _this.showQustionAnimatuion();
            }
            _this.showTitleAnimation(i, function () {
                _this.showAllAnimation();
            });
        });
    };
    MainScenceUI.prototype.showTitleAnimation = function (type, callfun) {
        var _this = this;
        var index = 11;
        var speed = -1;
        var off1 = 0;
        var off2 = 0;
        var speed1 = 0;
        var speed2 = 0;
        var index1 = 0;
        var index2 = 0;
        var index3 = 0;
        var index4 = 0;
        var index5 = 0;
        var index6 = 0;
        var t;
        switch (type) {
            case 0:
                t = egret.setInterval(function () {
                    _this['img' + index].visible = speed == -1 ? false : true;
                    index += speed;
                    if (index == 0) {
                        speed = 1;
                    }
                    if (index == 12) {
                        egret.clearInterval(t);
                        callfun && callfun();
                    }
                }, this, 60);
                break;
            case 1:
                index = 0;
                speed = 1;
                this.setAllZ(false);
                t = egret.setInterval(function () {
                    _this.setZ(index, true);
                    index += speed;
                    if (index == 12) {
                        egret.clearInterval(t);
                        _this.setAllZ(true);
                        callfun && callfun();
                    }
                }, this, 60);
                break;
            case 2:
                index1 = 5;
                index2 = 6;
                speed1 = -1;
                speed2 = 1;
                t = egret.setInterval(function () {
                    _this['img' + (index1)].visible = speed1 == -1 ? false : true;
                    _this['img' + (index2)].visible = speed2 == 1 ? false : true;
                    index1 += speed1;
                    index2 += speed2;
                    if (index1 < 0) {
                        index1 = 0;
                        speed1 = 1;
                    }
                    if (index2 > 11) {
                        index2 = 11;
                        speed2 = -1;
                    }
                    if (index1 == 5) {
                        egret.clearInterval(t);
                        _this.setAllZ(true);
                        callfun && callfun();
                    }
                }, this, 60);
                break;
            case 3:
                index1 = 0;
                index2 = 2;
                index3 = 4;
                index4 = 6;
                index5 = 8;
                index6 = 10;
                index = 0;
                speed = 1;
                t = egret.setInterval(function () {
                    var arr = [index1, index2, index3, index4, index5, index6];
                    _this.setArrZ(true, arr);
                    index1 += speed;
                    index2 += speed;
                    index3 += speed;
                    index4 += speed;
                    index5 += speed;
                    index6 += speed;
                    index += speed;
                    if (index1 > 11)
                        index1 = 0;
                    if (index2 > 11)
                        index2 = 0;
                    if (index3 > 11)
                        index3 = 0;
                    if (index4 > 11)
                        index4 = 0;
                    if (index5 > 11)
                        index5 = 0;
                    if (index6 > 11)
                        index6 = 0;
                    if (index >= 12) {
                        egret.clearInterval(t);
                        _this.setAllZ(true);
                        callfun && callfun();
                    }
                }, this, 120);
                break;
            case 4:
                this.setAllZ(true);
                t = egret.setTimeout(function () {
                    egret.clearTimeout(t);
                    callfun && callfun();
                }, this, 3000);
                break;
            case 5:
                index1 = 0;
                index2 = 11;
                speed1 = 1;
                speed2 = -1;
                t = egret.setInterval(function () {
                    var arr = [index1, index2];
                    _this.setArrZ(false, arr);
                    index1 += speed1;
                    index2 += speed2;
                    if (index1 > 11) {
                        egret.clearInterval(t);
                        _this.showShanZ(function () {
                            callfun && callfun();
                        });
                    }
                }, this, 60);
                break;
        }
    };
    MainScenceUI.prototype.showQustionAnimatuion = function () {
        egret.Tween.removeTweens(this.qimg0);
        egret.Tween.removeTweens(this.qimg1);
        this.qimg0.alpha = this.qimg1.alpha = 1;
        egret.Tween.get(this.qimg0).to({ alpha: 0 }, 50).wait(300).to({ alpha: 1 }, 50).wait(300).to({ alpha: 0 }, 50).wait(300).to({ alpha: 1 }, 50);
        egret.Tween.get(this.qimg1).to({ alpha: 0 }, 50).wait(300).to({ alpha: 1 }, 50).wait(300).to({ alpha: 0 }, 50).wait(300).to({ alpha: 1 }, 50);
    };
    /**
     * 设置其中一个字母亮或者暗
     */
    MainScenceUI.prototype.setZ = function (index, b) {
        for (var i = 0; i < 12; i++) {
            if (i == index) {
                this['img' + i].visible = b;
            }
            else {
                this['img' + i].visible = !b;
            }
        }
    };
    /**
     * 让所有字母全暗或者亮
     */
    MainScenceUI.prototype.setAllZ = function (b) {
        for (var i = 0; i < 12; i++) {
            this['img' + i].visible = b;
        }
    };
    /**
     * 一堆数组让其全亮
     */
    MainScenceUI.prototype.setArrZ = function (b, arr) {
        for (var i = 0; i < 12; i++) {
            this['img' + i].visible = !b;
            for (var j = 0; j < arr.length; j++) {
                if (i == arr[j]) {
                    this['img' + i].visible = b;
                }
            }
        }
    };
    MainScenceUI.prototype.showShanZ = function (callfun) {
        var _this = this;
        var index = 0;
        var t;
        this.setAllZ(true);
        t = egret.setInterval(function () {
            var iss = index % 2 == 0 ? false : true;
            _this.setAllZ(iss);
            index++;
            if (index > 4) {
                egret.clearInterval(t);
                _this.setAllZ(true);
                callfun && callfun();
            }
        }, this, 300);
    };
    MainScenceUI.prototype.showStar = function () {
        var _this = this;
        this.starMC.visible = true;
        var r1 = Math.random();
        var r2 = Math.random();
        var rx = r1 > 0.5 ? 300 + 300 * Math.random() : 300 - 300 * Math.random(); //
        var ry = r2 > 0.5 ? 60 + 50 * Math.random() : 50 - 60 * Math.random();
        if (rx < 7) {
            rx = 7;
        }
        if (rx > 700) {
            rx = 700;
        }
        if (ry > 88) {
            ry = 88;
        }
        if (ry < 13) {
            ry = 13;
        }
        if (rx >= 372 && rx <= 448) {
            rx = 415;
        }
        if (ry >= 10 && ry <= 88) {
            ry = 52;
        }
        this.starMC.x = rx;
        this.starMC.y = ry;
        // this.starMC.scaleX = 0.6;
        // this.starMC.scaleY = 0.6;
        this.starMC.gotoAndPlay('star');
        this.starMC.once(egret.MovieClipEvent.COMPLETE, function () {
            _this.showStar();
        }, this);
    };
    MainScenceUI.prototype.hideStar = function () {
        this.starMC.stop();
        this.starMC.visible = false;
    };
    MainScenceUI.prototype.showlogin = function () {
        this.preview.visible = this.logoImg.visible = true;
        this.mbg0.visible = this.mgroup0.visible = this.mgroup1.visible = false;
    };
    MainScenceUI.prototype.showMain = function () {
        var _this = this;
        this.preview.visible = this.logoImg.visible = false;
        this.mbg0.visible = this.mgroup0.visible = this.mgroup1.visible = true;
        GameConfig.emptyPlay = true;
        egret.setTimeout(function () {
            _this.updataUI();
            _this.showTitleAnimation(3, null);
            if (GameManager.getInstance().getFreeCount() > 0) {
                GameManager.getInstance().startGame();
            }
        }, this, 500);
    };
    return MainScenceUI;
}(core.BaseUI));
__reflect(MainScenceUI.prototype, "MainScenceUI");
//# sourceMappingURL=MainScenceUI.js.map