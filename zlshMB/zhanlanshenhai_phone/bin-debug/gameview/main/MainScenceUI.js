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
        _this.index = 0;
        _this.isBegin = false;
        _this.tx = 0;
        _this.ty = 0;
        _this.curtime = 0;
        _this.showReward = 0;
        _this.winIndex = 0;
        _this._rewardNum = 0;
        _this._rewardMaxNum = 0;
        _this.skinName = MainScenceUISkin;
        return _this;
    }
    MainScenceUI.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        this.gameScence.init();
        this.gameScence.reset();
        this.updataUI();
        this.registerEvent(this.gameScence, egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.registerEvent(this, egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        // this.registerEvent(this, egret.TouchEvent.TOUCH_END, this.onEnd, this);
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
        this.registerEvent(this.setUI.autoButton, egret.TouchEvent.TOUCH_END, this.onEnd, this);
        GameManager.getInstance().addEventListener(SetEvent.SET_HIDE_REWARD, this.hideWin, this);
        this.alpha = 0;
        egret.Tween.get(this).to({ alpha: 1 }, 1000).wait(5000).call(function () {
            core.UIManager.closeUI(core.UIConst.AudioTips);
        });
        var today = egret.localStorage.getItem('today');
        if (today) {
            var nowtime = new Date().getTime();
            if (!Utils.isSameDay(parseInt(today), nowtime)) {
                //弹出
                this.setUI.popBet();
            }
        }
        else {
            this.setUI.popBet();
        }
        egret.localStorage.setItem('today', new Date().getTime() + '');
    };
    MainScenceUI.prototype.onBegin = function (e) {
        this.tx = e.stageX;
        this.ty = e.stageY;
        if (GameManager.getInstance().gameState == GameType.GameState.STOP && e.currentTarget == this.gameScence && this.isBegin == false) {
            this.isBegin = true;
        }
    };
    MainScenceUI.prototype.onEnd = function (e) {
        this.curtime = egret.getTimer();
        if (e.currentTarget == this.setUI.autoButton) {
            if (GameManager.getInstance().gameState == GameType.GameState.PLAYING) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
            return;
        }
        if (this.isBegin) {
            this.isBegin = false;
            if (SetConst.AUTO_SHOW || SetConst.BETSET_SHOW)
                return;
            if (GameManager.getInstance().gameState == GameType.GameState.PLAYING) {
                return;
            }
            if (e.stageY - this.ty > 20) {
                Reel.REEL_MODE = GameType.RellMode.DOWN;
                GameManager.getInstance().dispatchEventWith(SetEvent.SET_START);
            }
            else if (e.stageY - this.ty < -20) {
                Reel.REEL_MODE = GameType.RellMode.UP;
                GameManager.getInstance().dispatchEventWith(SetEvent.SET_START);
            }
            else {
            }
        }
        else {
            this.isBegin = false;
            if (GameManager.getInstance().gameState == GameType.GameState.PLAYING && SetConst.isCanStopGame == true) {
                SetConst.isCanStopGame = false;
                console.log('aaaaaaa');
                var winarr = vo.GameData.resultData.Value.SpinResult.Main.WinResults;
                this.gameScence.stopReel();
            }
        }
    };
    MainScenceUI.prototype.canStop = function () {
        for (var i = 0; i < this.gameScence.reelArr.length; i++) {
            var reel = this.gameScence.reelArr[i];
            reel.curTime = egret.getTimer();
            reel.curReelData = vo.GameData.resultData.Value.SpinResult.Main.ReelSymbols[i];
        }
    };
    MainScenceUI.prototype.updataHor = function () {
        this.updataSame();
        this.setUI.updataHor();
    };
    MainScenceUI.prototype.updataVer = function () {
        this.updataSame();
        this.setUI.updataVer();
    };
    MainScenceUI.prototype.updataSame = function () {
        if (!SetConst.REWARD_SHOW) {
            this.setUI.rewradMaxGroup.y = this.setUI.bottomGroup.height + this.setUI.rewradMaxGroup.height * this.setUI.rewradMaxGroup.scaleY;
            return;
        }
        var ish = window.innerWidth > window.innerHeight;
        if (this.setUI.rewardMc) {
            var ty = ish ? GameConfig.HEIGHT / 2 - 5 : GameConfig.HEIGHT / 2 + 140;
            this.setUI.rewardMc.x = GameConfig.WIDTH / 2;
            this.setUI.rewardMc.y = ty;
        }
        if (this.index == 1) {
            this.setUI.rewradMaxGroup.y = ish ? 46 : 41;
        }
        else if (this.index == 2) {
            this.setUI.rewradMaxGroup.y = ish ? -GameConfig.HEIGHT / 2 + this.setUI.bottomGroup.height : -GameConfig.HEIGHT / 2 + this.setUI.bottomGroup.height;
        }
        else {
            return;
        }
    };
    MainScenceUI.prototype.onRemove = function () {
        _super.prototype.onRemove.call(this);
    };
    MainScenceUI.prototype.updataUI = function () {
    };
    MainScenceUI.prototype.onTab = function (e) {
        this.updataUI();
    };
    MainScenceUI.prototype.showWin = function (arr) {
        var _this = this;
        SetConst.REWARD_SHOW = true;
        if (SoundManager.getInstance().effectOn) {
            SoundManager.getInstance().playMusic(SoundConst.REWARD, 1).then(function (channel) {
                GameManager.getInstance().rewardChannel = channel;
            });
        }
        //进入免费游戏抽奖
        if (arr.length > 0 && arr[0].Type == "Bonus2" && arr[0].SymbolCount == 3) {
            //当有3个C1,C1不在中间一列移动到中间
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
            return;
        }
        //其他界面状态
        //先显示一下全部线
        this.gameScence.pent.clearTip();
        this.gameScence.pent.cleaAllLine();
        this.gameScence.pent.clearReward();
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
            for (var j = 0; j < positions.length; j++) {
                var p = positions[j];
                this.gameScence.showAnimation(p);
            }
        }
        //}
        var t = arr.length > 1 ? 500 : 0;
        var iscanPlay = false;
        this.tt2 = egret.setTimeout(function () {
            iscanPlay = true;
        }, this, 3000);
        this.tt = egret.setTimeout(function () {
            _this.gameScence.pent.clearTip();
            _this.gameScence.pent.cleaAllLine();
            _this.gameScence.pent.clearReward();
            var data = arr[_this.winIndex];
            if (data.Data) {
                _this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
                var arrs = _this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
                _this.gameScence.pent.showLine(data.Data.Line, arrs);
                _this.gameScence.pent.showTipLine(data.Data.Line);
                if (data.Positions[0].X == 0) {
                    _this.gameScence.pent.showReward(data.Data.Line, data.Positions[0], data.Win / 10000);
                }
                else {
                    _this.gameScence.pent.showReward(data.Data.Line, data.Positions[data.Positions.length - 1], data.Win / 10000);
                }
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
                _this.gameScence.pent.clearReward();
                if (arr.length > 1 && iscanPlay) {
                    SoundManager.getInstance().playEffect(SoundConst.SINGLEREWARD);
                }
                var data = arr[_this.winIndex];
                if (data.Data) {
                    _this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
                    var arrs = _this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
                    _this.gameScence.pent.showLine(data.Data.Line, arrs);
                    _this.gameScence.pent.showTipLine(data.Data.Line);
                    if (data.Positions[0].X == 0) {
                        _this.gameScence.pent.showReward(data.Data.Line, data.Positions[0], data.Win / 10000);
                    }
                    else {
                        _this.gameScence.pent.showReward(data.Data.Line, data.Positions[data.Positions.length - 1], data.Win / 10000);
                    }
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
        this.setRewardMax(0, false);
        if (b >= 50) {
            this.setUI.rewradMaxGroup.visible = true;
            this.setUI.rewardGroup.visible = false;
            egret.clearTimeout(this.tt2);
            this.setRewardMax(winmoney, true, 4);
        }
        else if (b >= 22) {
            this.setUI.rewradMaxGroup.visible = true;
            this.setUI.rewardGroup.visible = false;
            this.setRewardMax(winmoney, true, 3);
        }
        else if (b >= 6) {
            this.setUI.rewradMaxGroup.visible = true;
            this.setUI.rewardGroup.visible = false;
            this.setRewardMax(winmoney, true, 2);
        }
        else if (b >= 1.3) {
            this.setUI.rewradMaxGroup.visible = true;
            this.setUI.rewardGroup.visible = false;
            this.setRewardMax(winmoney, true, 1);
        }
        else {
            this.setUI.rewradMaxGroup.visible = false;
            this.setUI.rewardGroup.visible = true;
            SetConst.REWARD_SMALLSHOW = true;
            this.setReward(winmoney);
            this.setUI.tipLabel.visible = false;
        }
    };
    MainScenceUI.prototype.hideWin = function () {
        egret.clearInterval(this.clert);
        egret.clearTimeout(this.tt);
        egret.clearTimeout(this.tt2);
        this.gameScence.pent.clearAll();
        this.gameScence.hideAllAnimation();
        this.hideFiveAnimation();
        this.winIndex = 0;
        this.reward = 0.00;
        this.hideReward();
    };
    MainScenceUI.prototype.hideReward = function () {
        var _this = this;
        egret.Tween.removeTweens(this.setUI.rewradMaxGroup);
        SetConst.REWARD_SHOW = false;
        SetConst.REWARD_SMALLSHOW = false;
        this.showReward = 0;
        this.rewardMax = 0;
        var ty = this.setUI.bottomGroup.height + this.setUI.rewradMaxGroup.height * this.setUI.rewradMaxGroup.scaleY;
        egret.Tween.get(this.setUI.rewradMaxGroup).to({ y: ty, scaleX: 1, scaleY: 1 }, 300).call(function () {
            _this.setUI.rewradMaxGroup.visible = false;
        });
        this.setUI.mcGroup.visible = false;
        if (this.setUI.rewardMc) {
            this.setUI.rewardMc.stop();
        }
        this.setUI.tipLabel.visible = true;
    };
    MainScenceUI.prototype.setReward = function (v, isA) {
        if (isA === void 0) { isA = true; }
        egret.Tween.removeTweens(this);
        if (isA && this.reward < v) {
            egret.Tween.get(this).to({ reward: v }, 2000).call(function () {
            });
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
            this.setUI.rewardLabel.text = '￥' + s;
        },
        enumerable: true,
        configurable: true
    });
    MainScenceUI.prototype.setRewardMax = function (v, isA, t) {
        var _this = this;
        if (isA === void 0) { isA = true; }
        if (t === void 0) { t = 1; }
        egret.Tween.removeTweens(this);
        this.setUI.tipLabel.visible = false;
        var tArr = [0, 2000, 3000, 4000, 9000];
        var ish = window.innerWidth > window.innerHeight;
        var ty = 0;
        if (isA) {
            egret.Tween.get(this).to({ rewardMax: v }, tArr[t]);
            ty = ish ? 46 : 41;
            egret.Tween.get(this.setUI.rewradMaxGroup).to({ y: ty }, 500).wait(1000).call(function () {
                _this.index = 1;
                if (t > 1) {
                    egret.Tween.get(_this.setUI.rewradMaxGroup).to({ scaleX: 1.1, scaleY: 1.1 }, 1000, egret.Ease.backOut).wait(1000).call(function () {
                        if (t > 2) {
                            ish = window.innerWidth > window.innerHeight;
                            ty = ish ? -GameConfig.HEIGHT / 2 + _this.setUI.bottomGroup.height : -GameConfig.HEIGHT / 2 + _this.setUI.bottomGroup.height;
                            egret.Tween.get(_this.setUI.rewradMaxGroup).to({ y: ty, scaleX: 1.4, scaleY: 1.4 }, 300).call(function () {
                                _this.index = 2;
                                if (t > 3) {
                                    if (!_this.setUI.rewardMc) {
                                        _this.setUI.rewardMc = game.MCUtils.getMc('rewards');
                                        _this.setUI.mcGroup.addChild(_this.setUI.rewardMc);
                                    }
                                    ish = window.innerWidth > window.innerHeight;
                                    ty = ish ? GameConfig.HEIGHT / 2 - 5 : GameConfig.HEIGHT / 2 + 140;
                                    _this.setUI.rewardMc.x = GameConfig.WIDTH / 2;
                                    _this.setUI.rewardMc.y = ty;
                                    _this.setUI.mcGroup.visible = true;
                                    _this.setUI.rewardMc.gotoAndPlay('a0', -1);
                                    egret.Tween.get(_this.setUI.rewradMaxGroup).wait(7000).call(function () {
                                        _this.setUI.mcGroup.visible = false;
                                        _this.setUI.rewardMc.stop();
                                        ish = window.innerWidth > window.innerHeight;
                                        ty = ish ? 46 : 41;
                                        egret.Tween.get(_this.setUI.rewradMaxGroup).to({ scaleX: 1, scaleY: 1, y: ty }, 300).call(function () {
                                            _this.index = 1;
                                        }, _this);
                                    }, _this);
                                }
                                else {
                                    ty = ish ? 46 : 41;
                                    egret.Tween.get(_this.setUI.rewradMaxGroup).wait(1000).to({ scaleX: 1, scaleY: 1, y: ty }, 300);
                                }
                            }, _this);
                        }
                        else {
                            egret.Tween.get(_this.setUI.rewradMaxGroup).wait(1000).to({ scaleX: 1, scaleY: 1 }, 300);
                        }
                    }, _this);
                }
            }, this);
        }
        else {
            this.rewardMax = v;
        }
    };
    Object.defineProperty(MainScenceUI.prototype, "rewardMax", {
        get: function () {
            return this._rewardMaxNum;
        },
        set: function (v) {
            this._rewardMaxNum = v;
            var s = GameManager.numberToCommonStr(this._rewardMaxNum);
            // if (s.split('.').length > 1 && s.split('.')[1] == '00') {
            // 	let r: number = Math.random();
            // 	s = s.split('.')[0] + '.' + r.toFixed(2).split('.')[1];
            // }
            this.setUI.rewardMaxLabel.text = 'x' + s;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 显示5同类动画
     */
    MainScenceUI.prototype.showFiveAimation = function (data, callfun) {
        var _this = this;
        if (callfun === void 0) { callfun = null; }
        SoundManager.getInstance().playEffect(SoundConst.FIVE_SOUND);
        this.tipGroup.visible = true;
        this.tipLabel.text = '5个一样的';
        this.tipLabel.size = 80;
        this.tipGroup.scaleX = 0.5;
        this.tipGroup.scaleY = 0.5;
        if (data.Data) {
            this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
        }
        else {
            this.gameScence.pent.showkuang2(data.Positions);
        }
        egret.Tween.removeTweens(this.tipGroup);
        egret.Tween.get(this.tipGroup)
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
        egret.Tween.removeTweens(this.tipGroup);
        this.tipGroup.visible = false;
        this.gameScence.pent.clearAll();
    };
    /**
     * 显示大奖
     */
    MainScenceUI.prototype.showBigReward = function (callfun) {
        var _this = this;
        if (callfun === void 0) { callfun = null; }
        this.tipGroup.visible = true;
        this.tipLabel.text = '大奖';
        this.tipLabel.size = 150;
        this.tipGroup.scaleX = 1;
        this.tipGroup.scaleY = 1;
        this.tipGroup.verticalCenter = -150;
        egret.Tween.removeTweens(this.tipGroup);
        egret.Tween.get(this.tipGroup)
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
            this.rewardMc.x = this.mcGroup.width / 2;
            this.rewardMc.y = this.mcGroup.height / 2 + 30;
        }
        this.mcGroup.visible = true;
        this.rewardMc.gotoAndPlay('a0', -1);
    };
    /**
     * 隐藏大奖
     */
    MainScenceUI.prototype.hideBigReward = function () {
        egret.Tween.removeTweens(this.tipGroup);
        this.tipGroup.visible = false;
        this.rewardMc.stop();
        this.mcGroup.visible = false;
    };
    return MainScenceUI;
}(core.BaseUI));
__reflect(MainScenceUI.prototype, "MainScenceUI");
//# sourceMappingURL=MainScenceUI.js.map