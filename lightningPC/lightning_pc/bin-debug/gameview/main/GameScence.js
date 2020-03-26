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
var GameScence = (function (_super) {
    __extends(GameScence, _super);
    function GameScence() {
        var _this = _super.call(this) || this;
        _this.reelArr = [];
        /**时候打开freeDeal1界面 */
        _this.isOpeDdeal1 = false;
        /**记录一下改组数据中有没有至少2个中奖元素 */
        _this.freeCount = 0;
        /**记录下已经停止reel的下标，用于开启下一个reel的数据 */
        _this.stopReelIdx = -1;
        /**记录下免费游戏中总的金币 */
        _this.freeTotalGold = 0;
        /**纪录结算界面的叠加 */
        _this.freeSettlement = 0;
        /**纪录出现几个中奖标志，并且播放不同的声音 */
        _this.freeshowCount = 0;
        /**钻石中奖的下标 */
        _this.bounsIdx = 0;
        /**每个节点下y的位置，x的和节点一样 */
        // public showzuan: Array<any> = [130, 305, 483, 655];
        _this.showzuan = [70, 250, 430, 610];
        _this.skinName = GameScenceSkin;
        return _this;
    }
    /**
     * 初始化
     */
    GameScence.prototype.init = function () {
        for (var i = 0; i < 6; i++) {
            var reel = this['reel' + i];
            this.reelArr.push(this['reel' + i]);
            reel.index = i;
        }
    };
    GameScence.prototype.reset = function () {
        for (var i = 0; i < 6; i++) {
            var reel = this['reel' + i];
            reel.curReelData = vo.GameData.initData.Value.Geninit.Main.ReelSymbols[i];
            reel.initData();
        }
    };
    GameScence.prototype.replaceReel = function () {
        for (var i = 0; i < 6; i++) {
            var reel = this['reel' + i];
            reel.curReelData = vo.GameData.freeSymbols[i];
            reel.initData();
        }
        vo.GameData.freeSymbols = [];
    };
    GameScence.prototype.startReel = function () {
        this.freeCount = 0;
        this.stopReelIdx = -1;
        this.freeshowCount = 0;
        for (var i = 0; i < 6; i++) {
            var reel = this['reel' + i];
            reel.curReelData = [];
            reel.start();
        }
    };
    GameScence.prototype.setResSymbols = function () {
        var count = 0;
        for (var i = 0; i < 6; i++) {
            var reel = this['reel' + i];
            var resSymbols = vo.GameData.resultData.Value.Main.ReelSymbols[i];
            reel.curReelData = resSymbols;
            /**判断下有没有C1,如果有2个的话把旋转时间加长，如果只有一个就正常时间 */
            reel.isAddTime = -1;
            if (!GameConfig.speedPlay) {
                if (GameConfig.freePlay) {
                    if (this.freeCount >= 1 && i != 0) {
                        count++;
                        reel.isAddTime = count;
                    }
                    else {
                        reel.isAddTime = -1;
                    }
                }
                else {
                    if (this.freeCount >= 2) {
                        count++;
                        reel.isAddTime = count;
                    }
                    else {
                        reel.isAddTime = -1;
                    }
                }
                for (var j = 0; j < resSymbols.length; j++) {
                    if (resSymbols[j] == 'C1') {
                        this.freeCount++;
                    }
                }
            }
        }
    };
    GameScence.prototype.stopReel = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.stop();
        }
        //SoundManager.getInstance().playEffect(SoundConst.BUTTON);
    };
    GameScence.prototype.showAnimation = function (position) {
        for (var i = 0; i < this.reelArr.length; i++) {
            if (i == position.X) {
                var reel = this.reelArr[i];
                /**因为游戏是反着排列的 */
                reel.showAnimation(position.Y);
            }
        }
    };
    GameScence.prototype.hideAnimation = function (position) {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            if (i == position.X) {
                var reel_1 = this.reelArr[i];
                reel_1.hideAnimation(position.Y);
            }
        }
    };
    GameScence.prototype.hideAllAnimation = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.clearAllAnimation();
        }
    };
    GameScence.prototype.resumeAllAnimation = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.resumeAllAnimation();
        }
    };
    GameScence.prototype.pauseAllAniation = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.pauseAllAnimation();
        }
    };
    /**游戏滚动边框出现闪电特效 */
    GameScence.prototype.playLight = function (idx) {
        var _this = this;
        if (idx === void 0) { idx = 0; }
        if (!this.shandian.visible) {
            SoundManager.getInstance().playMusic(SoundConst.rollDian1).then(function (channel) {
                _this.rollDianChannel = channel;
            });
            this.lightMC = game.MCUtils.getMc('guang');
        }
        this.shandian.addChild(this.lightMC);
        this.lightMC.y = (this.reelArr[0].height - this.lightMC.height) / 2;
        this.lightMC.x = this.reelArr[idx].x - (this.lightMC.width - this.reelArr[idx].width) / 2 - 10;
        this.pent.visible = true;
        this.pent.showBeforeMask(idx);
        if (this.shandian.visible)
            return;
        this.lightMC.gotoAndPlay('shandianMc', -1);
        this.shandian.visible = true;
    };
    GameScence.prototype.stopLight = function () {
        if (this.shandian.visible) {
            SoundManager.getInstance().stopEffect(this.rollDianChannel);
            this.lightMC.stop();
            this.shandian.removeChild(this.lightMC);
        }
        this.shandian.visible = false;
    };
    GameScence.prototype.freeShow = function () {
        SoundManager.getInstance().playBg(SoundConst.BGM3);
        this.pent.clearAll();
        this.freeGroup.alpha = 0;
        this.freeGroup.visible = true;
        this.freeDataGroup.visible = false;
        this.moreGroup.visible = false;
        var num = vo.GameData.resultData.Actions.freeslot.total;
        vo.GameData.freePlayCount = vo.GameData.resultData.Actions.freeslot.count;
        this.total.text = num + '';
        this.freeTotal.text = '--';
        this.freeNum.text = num + '';
        egret.Tween.get(this.freeGroup).to({ alpha: 1 }, 1000);
        egret.Tween.get(this.goBtn, { loop: true }).to({ scaleX: 0.95, scaleY: 0.95 }, 500).to({ scaleX: 1, scaleY: 1 }, 500);
    };
    /**免费游戏界面设置(boo为true的时候) */
    GameScence.prototype.freeUiSet = function (boo) {
        var _this = this;
        this.logo.visible = !boo;
        this.freeDataGroup.visible = boo;
        this.freeLogo.visible = true;
        this.leftData.alpha = 0;
        this.rightData.alpha = 0;
        this.leftImg.source = 'freeImg1_png';
        this.rightImg.source = 'freeImg2_png';
        this.leftImg.x = 500;
        this.rightImg.x = 680;
        this.DiamondsGroup.scaleX = 0;
        this.DiamondsGroup.scaleY = 0;
        this.pent.visible = false;
        this.freeGroup.visible = false;
        this.startLight.visible = false;
        this.freeDeal.visible = false;
        this.moreGroup.visible = false;
        this.isOpeDdeal1 = false;
        this.freeRewardAdd = 0;
        this.oneFreeAdd = 0;
        this.twoFreeAdd = 0;
        this.threeFreeAdd = 0;
        this.freeTotaladd = 0;
        if (boo) {
            egret.setTimeout(function () {
                _this.freeAc();
            }, this, 300);
        }
    };
    /**免费游戏开场动画 先闪电后钻石*/
    GameScence.prototype.freeAc = function () {
        var _this = this;
        /**闪电 */
        var count = 0;
        var idx = 0;
        this.startLight.visible = true;
        SoundManager.getInstance().playEffect(SoundConst.topDian1);
        var timer = egret.setInterval(function () {
            if (idx > 3) {
                idx = 0;
                count++;
            }
            _this.startLight.source = 'startLight' + idx + '_png';
            idx++;
            if (count == 3) {
                egret.clearInterval(timer);
                _this.DiamondsYanhua.alpha = 1;
                _this.DiamondsYanhua.scaleX = 1.5;
                _this.DiamondsYanhua.scaleY = 1.5;
                egret.Tween.get(_this.DiamondsYanhua).to({ alpha: 0, scaleX: 1.6, scaleY: 1.6 }, 500);
                _this.startLight.visible = false;
                _this.startLight.source = '';
                _this.leftImg.source = 'freeImg3_png';
                _this.rightImg.source = 'freeImg4_png';
                /**钻石 */
                _this.DiamondsMC = game.MCUtils.getMc('Diamonds');
                _this.DiamondsGroup.addChild(_this.DiamondsMC);
                _this.DiamondsMC.gotoAndPlay('Diamonds', -1);
                _this.DiamondsGroup.anchorOffsetX = _this.DiamondsMC.width / 2;
                _this.DiamondsGroup.anchorOffsetY = _this.DiamondsMC.height / 2;
                _this.DiamondsGroup.width = _this.DiamondsMC.width;
                _this.DiamondsGroup.height = _this.DiamondsMC.height;
                _this.DiamondsGroup.x = -_this.DiamondsMC.width / 2;
                _this.DiamondsGroup.y = _this.DiamondsMC.height / 2;
                egret.Tween.get(_this.leftImg).to({ x: 430 - 15 }, 200)
                    .to({ x: 430 + 15 }, 100).to({ x: 430 }, 100);
                egret.Tween.get(_this.rightImg).to({ x: 770 + 15 }, 200)
                    .to({ x: 770 - 15 }, 100).to({ x: 770 }, 100);
                egret.Tween.get(_this.DiamondsGroup).to({ scaleX: 1.5, scaleY: 1.5, alpha: 1 }, 500)
                    .to({ scaleX: 0.98, scaleY: 0.98 }, 200)
                    .to({ scaleX: 1.2, scaleY: 1.2 }, 200)
                    .to({ scaleX: 1, scaleY: 1 }, 200)
                    .call(function () {
                    egret.Tween.get(_this.leftData).to({ alpha: 1 }, 500);
                    egret.Tween.get(_this.rightData).to({ alpha: 1 }, 500);
                    var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
                    ui.startBtn.enabled = true;
                    ui.stopBtn.enabled = true;
                    GameManager.getInstance().isStart = true;
                    egret.setTimeout(function () {
                        GameManager.getInstance().startGame();
                    }, _this, 1000);
                });
            }
        }, this, 50);
    };
    /**免费游戏结束之后的结算界面 */
    GameScence.prototype.slotSettlement = function () {
        var _this = this;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.startBtn.enabled = false;
        ui.stopBtn.enabled = false;
        ui.rewardLabel.text = '￥0.00';
        ui._rewardNum = 0;
        ui.hideWin();
        this.pent.clearAll();
        this.replaceReel();
        var win = vo.GameData.resultData.Actions.freeslot.ActionWin;
        vo.GameData.freePlayCount = 0;
        this.freeDataGroup.visible = false;
        this.freeShandian.visible = false;
        this.DiamondsMC.stop();
        this.DiamondsGroup.removeChild(this.DiamondsMC);
        console.log('获得最终获得的结果', vo.GameData.autoPlayCount);
        SoundManager.getInstance().stopBg();
        SoundManager.getInstance().playEffect(SoundConst.freeOver);
        if (vo.GameData.autoPlayCount == 100) {
            vo.GameData.autoPlayCount = 0;
        }
        if (!this.isOpeDdeal1) {
            this.backSlotBtn.enabled = false;
            this.freeDeal.visible = true;
            this.freeDeal1.visible = false;
            this.bcakSlotWinLab.text = '--';
            this.backSlotBtn.anchorOffsetX = this.backSlotBtn.width / 2;
            this.backSlotBtn.anchorOffsetY = this.backSlotBtn.height / 2;
            egret.setTimeout(function () {
                if (win > 0) {
                    _this.freeAdd(win, _this.bcakSlotWinLab);
                }
                else {
                    _this.backSlotBtn.enabled = true;
                }
            }, this, 800);
        }
        else {
            /**免费游戏中再次中了免费游戏开启的结算界面 */
            this.backSlotBtn0.enabled = false;
            this.freeDeal.visible = false;
            this.freeDeal1.visible = true;
            this.backSlotBtn0.anchorOffsetX = this.backSlotBtn0.width / 2;
            this.backSlotBtn0.anchorOffsetY = this.backSlotBtn0.height / 2;
            this.dealContent0.text = '--';
            this.dealContent1.text = '--';
            this.dealContent2.text = '--';
            this.freeAdd(vo.GameData.freeGold, this.dealText0);
        }
    };
    /**免费游戏叠加金币 */
    GameScence.prototype.freeAdd = function (num, obj, type) {
        var _this = this;
        if (obj == this.freeTotal) {
            var timer = 800;
            if (type == 2) {
                timer = 7500;
            }
            else if (type == 3) {
                timer = 14000;
            }
            else if (type == 4) {
                timer = 19500;
            }
            egret.Tween.get(this).to({ freeRewardAdd: num }, timer);
        }
        else if (obj == this.bcakSlotWinLab) {
            egret.Tween.get(this).to({ freeTotaladd: num }, 4000).call(function () {
                _this.backSlotBtn.enabled = true;
                egret.Tween.get(_this.backSlotBtn, { loop: true }).to({ scaleX: 0.95, scaleY: 0.95 }, 500).to({ scaleX: 1, scaleY: 1 }, 500);
            });
        }
        else if (obj == this.dealText0) {
            egret.Tween.get(this).to({ oneFreeAdd: num }, 1000).call(function () {
                console.log(_this.freeTotalGold);
                egret.Tween.get(_this).to({ twoFreeAdd: _this.freeTotalGold }, 1500).call(function () {
                    _this.freeTotalGold = _this.freeTotalGold + num;
                    console.log(_this.freeTotalGold);
                    egret.Tween.get(_this).to({ threeFreeAdd: _this.freeTotalGold }, 2000).call(function () {
                        _this.backSlotBtn0.enabled = true;
                        console.log(_this.backSlotBtn0.enabled);
                        egret.Tween.get(_this.backSlotBtn0, { loop: true }).to({ scaleX: 0.95, scaleY: 0.95 }, 500).to({ scaleX: 1, scaleY: 1 }, 500);
                    });
                });
            });
        }
    };
    Object.defineProperty(GameScence.prototype, "oneFreeAdd", {
        get: function () {
            return this.dealText0;
        },
        /**免费游戏中免费游戏中奖 */
        set: function (v) {
            this.dealText0 = v;
            if (v > 0) {
                var s = GameManager.numberToCommonStr(v);
                this.dealContent0.text = '￥' + s;
            }
            else {
                this.dealContent0.text = "--";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameScence.prototype, "twoFreeAdd", {
        get: function () {
            return this.dealText1;
        },
        set: function (v) {
            this.dealText1 = v;
            if (v > 0) {
                var s = GameManager.numberToCommonStr(v);
                this.dealContent1.text = '￥' + s;
            }
            else {
                this.dealContent1.text = "--";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameScence.prototype, "threeFreeAdd", {
        get: function () {
            return this.dealText2;
        },
        set: function (v) {
            this.dealText2 = v;
            if (v > 0) {
                var s = GameManager.numberToCommonStr(v);
                this.dealContent2.text = '￥' + s;
            }
            else {
                this.dealContent2.text = "--";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameScence.prototype, "freeTotaladd", {
        get: function () {
            return this.freeSettlement;
        },
        /**免费游戏中奖金的叠加 */
        set: function (v) {
            this.freeSettlement = v;
            if (v > 0) {
                var s = GameManager.numberToCommonStr(v);
                this.bcakSlotWinLab.text = '￥' + s;
            }
            else {
                this.bcakSlotWinLab.text = "--";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameScence.prototype, "freeRewardAdd", {
        get: function () {
            return this.freeTotalGold;
        },
        set: function (num) {
            this.freeTotalGold = num;
            if (num > 0) {
                var s = GameManager.numberToCommonStr(num);
                this.freeTotal.text = '￥' + s;
            }
            else {
                this.freeTotal.text = '--';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**更多游戏次数界面 */
    GameScence.prototype.moreFreeNum = function () {
        var _this = this;
        /**计算添加了几次 */
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.startBtn.enabled = false;
        ui.intoFreeBtn.visible = true;
        ui.intoFreeBtn.enabled = false;
        var addNum = vo.GameData.resultData.Actions.freeslot.count - vo.GameData.freePlayCount;
        var idx = 0;
        this.isOpeDdeal1 = true;
        var id = SoundManager.getInstance().playEffect(SoundConst.zuan2);
        var timer = egret.setInterval(function () {
            _this.winTexiao.source = 'startLight' + idx + '_png';
            idx++;
            if (idx > 3) {
                SoundManager.getInstance().stopEffect(id);
                egret.clearInterval(timer);
                _this.winTexiao.source = '';
            }
        }, this, 100);
        this.moveLab.alpha = 0;
        this.moveLab.x = this.noMoveLab.x;
        this.moveLab.y = this.noMoveLab.y;
        this.yanhua.scaleX = 0;
        this.yanhua.scaleY = 0;
        this.noMoveLab.text = addNum + "";
        this.moveLab.text = addNum + '';
        this.moreGroup.visible = true;
        var id2;
        var id1;
        egret.setTimeout(function () {
            id1 = SoundManager.getInstance().playEffect(SoundConst.topDian1);
            egret.setTimeout(function () {
                SoundManager.getInstance().stopEffect(id1);
            }, _this, 800);
            egret.Tween.get(_this.yanhua).to({ scaleX: 1, scaleY: 1 }, 100).call(function () {
                _this.yanhua.scaleX = 0;
                _this.yanhua.scaleY = 0;
            });
            _this.moveLab.alpha = 1;
            var pos = { x: -49, y: -300 };
            egret.Tween.get(_this.moveLab).to(pos, 800)
                .call(function () {
                id2 = SoundManager.getInstance().playEffect(SoundConst.topDian1);
                egret.Tween.get(_this.addCount).to({ scaleX: 0.6, scaleY: 0.6 }, 200).wait(200).call(function () {
                    vo.GameData.freePlayCount = vo.GameData.resultData.Actions.freeslot.count;
                    _this.addCount.scaleX = 0;
                    _this.addCount.scaleY = 0;
                    ui.startBtn.enabled = true;
                    ui.intoFreeBtn.visible = false;
                });
            })
                .wait(500)
                .call(function () {
                GameManager.getInstance().isStart = true;
                vo.GameData.freePlayCount += addNum;
            })
                .wait(200)
                .call(function () {
                SoundManager.getInstance().stopEffect(id2);
                _this.moreGroup.visible = false;
                GameManager.getInstance().doNext();
            });
        }, this, 400);
    };
    /** 免费游戏中，钻石出来之后的控制 */
    GameScence.prototype.freeDimaoCtr = function (obj) {
        var _this = this;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        /**上面旋转的钻石出现倍数 */
        var topImg = new eui.Image();
        this.DiamondsGroup.addChild(topImg);
        topImg.scaleX = 0.6;
        topImg.scaleY = 0.6;
        topImg.anchorOffsetX = topImg.width / 2;
        topImg.anchorOffsetY = topImg.height / 2;
        var bet = obj[this.bounsIdx].Bouns;
        topImg.horizontalCenter = 0;
        topImg.y = 40;
        /**中奖的那个钻石位置和特效 */
        var posX = 1400 / 6 * (obj[this.bounsIdx].Positions[0].X + 0.5);
        var posY = 718 / 4 * (obj[this.bounsIdx].Positions[0].Y + 0.5);
        /**顶部钻石的闪电 */
        var dianImg = new eui.Image();
        dianImg.source = 'zuan0_png';
        this.DiamondsGroup.addChild(dianImg);
        dianImg.anchorOffsetX = dianImg.width / 2;
        dianImg.horizontalCenter = 0;
        /**显示出来钻石 */
        this.pent.visible = true;
        this.pent.showfreeDiamo(obj);
        SoundManager.getInstance().playEffect(SoundConst.zuan1);
        egret.Tween.get(this.DiamondsGroup)
            .to({ scaleX: 1.3, scaleY: 1.3 }, 3000)
            .call(function () {
            egret.Tween.removeTweens(topImg);
            egret.Tween.removeTweens(dianImg);
            _this.DiamondsGroup.removeChild(dianImg);
            _this.freeShandian.visible = true;
            topImg.source = bet + 'times_png';
            SoundManager.getInstance().playEffect(SoundConst.zuan2);
            /**倍数固定之后的雷电特效及位置计算 */
            /**添加顶部倍数和钻石之间的闪电 */
            var dImg = new eui.Image();
            _this.freeShandian.addChild(dImg);
            dImg.anchorOffsetY = 80;
            dImg.anchorOffsetX = 455;
            dImg.x = (posX + 700) / 2;
            dImg.y = (posY + 0) / 2;
            var dis = Math.sqrt(Math.pow((posX - 700), 2) + Math.pow((posY - 0), 2));
            var angle = _this.distanceAngle(dImg.x, dImg.y, posX, posY);
            var sca = dis / 910;
            dImg.scaleX = sca + 0.05;
            dImg.rotation = angle - 2.5;
            dImg.source = 'startLight0_png';
            _this.DiamondsYanhua.alpha = 1;
            egret.Tween.get(_this.DiamondsYanhua).to({ alpha: 0 }, 200);
            /**闪电打击的时候要出来烟花特效 */
            egret.Tween.get(dImg).to({ source: 'startLight0_png' }, 100)
                .to({ source: 'startLight1_png' }, 100)
                .to({ source: 'startLight2_png' }, 100)
                .to({ source: 'startLight3_png' }, 100)
                .call(function () {
                ui.startBtn.enabled = true;
                ui.stopBtn.enabled = true;
                GameManager.getInstance().isStart = true;
                _this.DiamondsGroup.removeChild(topImg);
                _this.freeShandian.removeChild(dImg);
                _this.freeShandian.visible = false;
            });
        })
            .wait(500)
            .to({ scaleX: 1, scaleY: 1 });
        topImg.source = '5times_png';
        egret.Tween.get(topImg, { loop: true }).to({ source: '2times_png' }, 100)
            .to({ source: '3times_png' }, 100)
            .to({ source: '5times_png' }, 100);
        egret.Tween.get(dianImg, { loop: true }).to({ source: 'zuan0_png' }, 100)
            .to({ source: 'zuan1_png' }, 100).to({ source: 'zuan2_png' }, 100).to({ source: 'zuan3_png' }, 100).to({ source: 'zuan4_png' }, 100)
            .to({ source: 'zuan5_png' }, 100).to({ source: 'zuan6_png' }, 100).to({ source: 'zuan7_png' }, 100).to({ source: 'zuan8_png' }, 100)
            .to({ source: 'zuan9_png' }, 100).to({ source: 'zuan10_png' }, 100).to({ source: 'zuan11_png' }, 100);
    };
    /**计算顶部钻石和游戏倍数中的角度和距离 */
    GameScence.prototype.distanceAngle = function (x1, y1, x2, y2) {
        var angle = Utils.pointAmongAngle(x1, y1, x2, y2);
        return angle;
    };
    return GameScence;
}(eui.Component));
__reflect(GameScence.prototype, "GameScence");
//# sourceMappingURL=GameScence.js.map