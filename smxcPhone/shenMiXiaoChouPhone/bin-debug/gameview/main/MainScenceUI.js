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
// declare function openLaunchFullScreen();
var MainScenceUI = (function (_super) {
    __extends(MainScenceUI, _super);
    function MainScenceUI() {
        var _this = _super.call(this) || this;
        _this.isSpeedUi = false;
        _this.indexNum = 0;
        _this.isStip = false;
        _this.ruleIsShow = false;
        _this._bet = 0.00;
        _this._money = 0.00;
        _this._allmoney = 0.00;
        _this.isShowWin = true;
        _this.skinName = MainScenceUISkin;
        egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE, function () {
            _this.s = window.innerHeight / window.innerWidth;
            if (_this.isSpeedUi) {
                // this.speedGroup.visible = true;
                _this.isSpeed();
                return;
            }
            else {
                _this.speedGroup.visible = false;
                _this.speedUi.visible = false;
                _this.tipsUi.visible = false;
            }
            if (_this.isStip) {
                // this.speedGroup.visible = true;
                _this.stipUI();
            }
            else {
                _this.speedGroup.visible = false;
                _this.speedUi.visible = false;
                _this.tipsUi.visible = false;
            }
        }, _this);
        return _this;
    }
    MainScenceUI.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        this.registerEvent(this, eui.UIEvent.RESIZE, this.initSc1, this);
        this.dianji.visible = false;
        // this.gameScence.dianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.stopAni,this);
        this.setUI.visible = false;
        this.downGroup.touchEnabled = false;
        this.downGroup.touchThrough = true;
        if (egret.localStorage.getItem("bgOn") == "0") {
            this.loading2.source = "uiElements_05-04_png";
            SoundManager.getInstance().setBgOn(false);
            SoundManager.getInstance().setEffectOn(false);
        }
        else {
            this.loading2.source = "uiElements_05-12_png";
            SoundManager.getInstance().setBgOn(true);
            SoundManager.getInstance().setEffectOn(true);
        }
        if (egret.localStorage.getItem("not") == "false") {
            this.loadingGroup.visible = false;
            this.loading1.visible = false;
            this.loading2.visible = false;
            this.mainGroup.visible = true;
            this.downGroup.visible = true;
            this.setUI.visible = true;
            this.down1Group.visible = true;
            this.setA.visible = true;
            this.outMain.visible = true;
            // this.mainScenceInit();
        }
        else {
            this.loadingGroup.visible = true;
            this.loading1.visible = true;
            this.loading2.visible = true;
            this.registerEvent(this.loading2, egret.TouchEvent.TOUCH_TAP, this.closeMusic, this);
            this.mainGroup.visible = false;
            this.downGroup.visible = true; //false
            this.setUI.visible = false;
            this.down1Group.visible = false;
            this.setA.visible = false;
            this.outMain.visible = false;
        }
        // this.playTween.visible = false;
        if (this.currentState == 'up') {
            this.first(false);
        }
        else {
            this.first(true);
        }
        this.startCheckHashCount();
    };
    MainScenceUI.prototype.initSc1 = function () {
        var _this = this;
        this.setUI.shiZhi3.onEvent();
        // this.setUI.shiZhi4.onEvent();
        egret.setTimeout(function () {
            // console.log("GameConfig.HEIGHT === " + GameConfig.HEIGHT);
            if (_this.currentState == 'up') {
                _this.first(false);
            }
            else {
                _this.first(true);
            }
        }, this, 100);
    };
    MainScenceUI.prototype.addListeber = function () {
        // console.log("游戏开始添加滚动界面监听");
        egret.setTimeout(function () {
        }, this, 100);
        this.dianji.visible = true;
        this.dianji.addEventListener(egret.TouchEvent.TOUCH_TAP, this.stopAni, this);
        // if(this.setUI.visible){
        // 	GameManager.getInstance().pausume();
        // }
    };
    MainScenceUI.prototype.removeListeber = function () {
        // console.log("游戏开始移除滚动界面监听");
        this.dianji.visible = false;
        this.dianji.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.stopAni, this);
    };
    MainScenceUI.prototype.stopAni = function () {
        var _this = this;
        this.dianji.visible = false;
        this.dianji.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.stopAni, this);
        if (GameManager.getInstance().gameState == GameType.GameState.PLAYING) {
            SoundManager.getInstance().playEffect(SoundConst.BUTTON);
            this.gameScence.shan.visible = true;
            this.gameScence.shan0.visible = true;
            this.gameScence.shan1.visible = true;
            var time = 500;
            egret.setTimeout(function () {
                _this.indexNum++;
                _this.gameScence.shan.visible = false;
                _this.gameScence.shan0.visible = false;
                _this.gameScence.shan1.visible = false;
                if (!GameConfig.speedPlay && _this.indexNum == 3) {
                    GameManager.getInstance().pausume();
                    _this.isSpeed();
                }
            }, this, 200);
            // GameManager.getInstance().getAllFreeCount() - GameManager.getInstance().getFreeCount() == GameManager.getInstance().getAllFreeCount();		//运行了多少次
            if (GameManager.getInstance().getFreeCount() > 0) {
                time = 600;
            }
            else {
                time = 500;
            }
            var c = vo.GameData.allFreeCount - GameManager.getInstance().getFreeCount() > 0 ? vo.GameData.allFreeCount - GameManager.getInstance().getFreeCount() : vo.GameData.allFreeCount;
            if ((c == vo.GameData.allFreeCount) && vo.GameData.allFreeCount != 0) {
                time = 600;
            }
            // egret.log("time == " + time);
            egret.setTimeout(function () {
                // GameManager.getInstance().enterPlayingState1();
                // let resultData: any = vo.GameData.resultData;
                // let winarr: Array<any> = resultData.Value.Main.WinResults;
                if (!_this.gameScence.group.visible) {
                    GameManager.getInstance().stopGame();
                }
                // if (winarr.length > 0){		//有奖励
                // 	egret.setTimeout(() => {
                // 		GameManager.getInstance().enterPlayingState1();
                // 	}, this, 700)
                // }else{
                // 	GameManager.getInstance().enterPlayingState1();
                // }
            }, this, time);
        }
    };
    /** 启动hashcount检测
     */
    MainScenceUI.prototype.startCheckHashCount = function () {
        var count = egret.$hashCount;
        setInterval(function () {
            var newCount = egret.$hashCount;
            var diff = newCount - count;
            count = newCount;
            if (diff > 100) {
                console.log('性能消耗过大->' + diff);
            }
        }, 1000);
    };
    MainScenceUI.prototype.mainScenceInit = function () {
        var _this = this;
        this.gameScence.init();
        this.gameScence.reset();
        this.registerEvent(this.playBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.playBtn0, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.setA, egret.TouchEvent.TOUCH_TAP, this.setAA, this);
        this.registerEvent(this.setA0, egret.TouchEvent.TOUCH_TAP, this.setAA, this);
        // this.registerEvent(this.setUI.autoPlay, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.stopAuto, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.stopAuto0, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.outMain, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.outMain0, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.loading1, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        // this.baner.initArr(vo.GameData.betScoreArr, vo.GameData.betIndex);
        // this.registerEvent(this.ruleBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        // this.registerEvent(this.setBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        // this.registerEvent(this.historyBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        // this.registerEvent(this.musicBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        // this.registerEvent(this.shanBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        // this.registerEvent(this.qusBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        // this.registerEvent(this.exitBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        egret.setTimeout(function () {
            _this.updataUI();
            _this.showTitleAnimation(3, null);
        }, this, 500);
        egret.setInterval(function () {
            if (_this.playTween.alpha == 1) {
                egret.Tween.get(_this.playTween).to({ alpha: 0.5 }, 700);
            }
            else {
                egret.Tween.get(_this.playTween).to({ alpha: 1 }, 700);
            }
        }, this, 1600);
        egret.setInterval(function () {
            if (_this.playTween0.alpha == 1) {
                egret.Tween.get(_this.playTween0).to({ alpha: 0.5 }, 700);
            }
            else {
                egret.Tween.get(_this.playTween0).to({ alpha: 1 }, 700);
            }
        }, this, 1600);
        if (!this.starMC) {
            this.starMC = game.MCUtils.getMc('star');
            this.strGroup.addChild(this.starMC);
            this.starMC.visible = false;
        }
        this.showAllAnimation();
        this.showStar();
        this.initfighter();
        // this.initfighter1();
        // this.showOrHideAutoPlay(GameConfig.autoPlay);
        if (GameManager.getInstance().getFreeCount() > 0) {
            this.setBG(true, false);
            // this.showOrHideAutoPlay(false);
            egret.setTimeout(function () {
                _this.showMain();
            }, this, 900);
        }
        else {
            this.setBG(false, false);
        }
    };
    MainScenceUI.prototype.closeMusic = function () {
        var aa = true;
        if (this.loading2.source == "uiElements_05-12_png") {
            this.loading2.source = "uiElements_05-04_png";
            aa = false;
        }
        else {
            this.loading2.source = "uiElements_05-12_png";
            aa = true;
        }
        this.setUI.musicBtn.liang.visible = aa;
        this.setUI.musicBtn.anYuan.visible = !aa;
        SoundManager.getInstance().setBgOn(aa);
        SoundManager.getInstance().setEffectOn(aa);
    };
    MainScenceUI.prototype.setCurrentState = function (currentState) {
        this.currentState = currentState;
        // GameConfig.HEIGHT	//游戏界面的高度，去掉输入网址框
        //core.UIUtils.addButtonScaleEffects(this);
    };
    MainScenceUI.prototype.getCurrentState = function () {
        return this.currentState;
        //core.UIUtils.addButtonScaleEffects(this);
    };
    MainScenceUI.prototype.setAm = function () {
        if (this.setUI.visible) {
            this.setA.source = "uiElements_05-14_png";
        }
        else {
            this.setA.source = "uiElements_05-11_png";
        }
    };
    MainScenceUI.prototype.jiaoHuanSet1 = function (isShu) {
        if (isShu) {
            if (this.setUI.zuoShouTo.liang.visible) {
                this.setA.visible = false;
                this.setA0.visible = true;
                this.outMain.visible = false;
                this.outMain0.visible = true;
            }
            else {
                this.setA.visible = true;
                this.setA0.visible = false;
                this.outMain.visible = true;
                this.outMain0.visible = false;
            }
            if (GameConfig.autoPlay) {
                this.playBtn.visible = false;
                this.playTween.visible = false;
                this.playBtn0.visible = false;
                this.playTween0.visible = false;
                this.autoPlayGroup.visible = true;
                this.autoPlayGroup0.visible = false;
            }
            else {
                this.playBtn.visible = true;
                this.playTween.visible = true;
                this.playBtn0.visible = false;
                this.playTween0.visible = false;
            }
        }
        else {
            if (this.setUI.zuoShouTo.liang.visible) {
                this.setA.visible = false;
                this.setA0.visible = true;
                this.outMain.visible = false;
                this.outMain0.visible = true;
                if (GameConfig.autoPlay) {
                    this.playBtn.visible = false;
                    this.playTween.visible = false;
                    this.playBtn0.visible = false;
                    this.playTween0.visible = false;
                    this.autoPlayGroup.visible = false;
                    this.autoPlayGroup0.visible = true;
                }
                else {
                    this.playBtn.visible = false;
                    this.playTween.visible = false;
                    this.playBtn0.visible = true;
                    this.playTween0.visible = true;
                }
            }
            else {
                this.setA.visible = true;
                this.setA0.visible = false;
                this.outMain.visible = true;
                this.outMain0.visible = false;
                if (GameConfig.autoPlay) {
                    this.playBtn.visible = false;
                    this.playTween.visible = false;
                    this.playBtn0.visible = false;
                    this.playTween0.visible = false;
                    this.autoPlayGroup.visible = true; //右边
                    this.autoPlayGroup0.visible = false;
                }
                else {
                    this.playBtn.visible = true;
                    this.playTween.visible = true;
                    this.playBtn0.visible = false;
                    this.playTween0.visible = false;
                }
            }
        }
        //GameManager.getInstance().getAllFreeCount(); //总次数
        if (GameManager.getInstance().getFreeCount() > 0 && GameManager.getInstance().getFreeCount() != GameManager.getInstance().getAllFreeCount()) {
            this.playBtn.visible = false;
            this.playTween.visible = false;
            this.playBtn0.visible = false;
            this.playTween0.visible = false;
        }
    };
    MainScenceUI.prototype.first = function (isShu) {
        if (isShu) {
            this.mainGroup.scaleY = 1;
            this.mainGroup.scaleX = 1;
            this.touGroup.scaleX = 1;
            this.touGroup.scaleY = 1;
            this.LoginWaitUI.scaleX = 0.73;
            this.LoginWaitUI.scaleY = 0.73;
        }
        else {
            var hBili;
            // if(GameConfig.HEIGHT > screen.height){
            // 	hBili = screen.height / GameConfig.HEIGHT;
            // }else{
            // }
            hBili = GameConfig.HEIGHT / screen.height;
            if (hBili >= 1) {
                hBili = 1;
            }
            this.mainGroup.scaleX = 1 * hBili;
            this.mainGroup.scaleY = 1 * hBili;
            this.touGroup.scaleY = 1 * hBili + 0.03;
            this.touGroup.scaleX = 1 * hBili + 0.03;
            this.LoginWaitUI.scaleX = 1 * hBili + 0.03;
            this.LoginWaitUI.scaleY = 1 * hBili + 0.03;
            if (this.LoginWaitUI.scaleX > 0.823) {
                this.LoginWaitUI.scaleX = 0.823;
            }
            if (this.LoginWaitUI.scaleY > 0.823) {
                this.LoginWaitUI.scaleY = 0.823;
            }
        }
    };
    MainScenceUI.prototype.jiaoHuanSet = function (isShu) {
        //旋转按钮位置
        if (isShu) {
            if (this.setUI.zuoShouTo.liang.visible) {
                this.setA.visible = false;
                this.setA0.visible = true;
                this.outMain.visible = false;
                this.outMain0.visible = true;
            }
            else {
                this.setA.visible = true;
                this.setA0.visible = false;
                this.outMain.visible = true;
                this.outMain0.visible = false;
            }
            if (GameConfig.autoPlay) {
                this.playBtn.visible = false;
                this.playTween.visible = false;
                this.playBtn0.visible = false;
                this.playTween0.visible = false;
                this.autoPlayGroup.visible = true;
                this.autoPlayGroup0.visible = false;
            }
            else {
                this.playBtn.visible = true;
                this.playTween.visible = true;
                this.playBtn0.visible = false;
                this.playTween0.visible = false;
            }
        }
        else {
            if (this.setUI.zuoShouTo.liang.visible) {
                this.setA.visible = false;
                this.setA0.visible = true;
                this.outMain.visible = false;
                this.outMain0.visible = true;
                if (GameConfig.autoPlay) {
                    this.playBtn.visible = false;
                    this.playTween.visible = false;
                    this.playBtn0.visible = false;
                    this.playTween0.visible = false;
                    this.autoPlayGroup.visible = false;
                    this.autoPlayGroup0.visible = true;
                }
                else {
                    this.playBtn.visible = false;
                    this.playTween.visible = false;
                    this.playBtn0.visible = true;
                    this.playTween0.visible = true;
                }
            }
            else {
                this.setA.visible = true;
                this.setA0.visible = false;
                this.outMain.visible = true;
                this.outMain0.visible = false;
                if (GameConfig.autoPlay) {
                    this.playBtn.visible = false;
                    this.playTween.visible = false;
                    this.playBtn0.visible = false;
                    this.playTween0.visible = false;
                    this.autoPlayGroup.visible = true;
                    this.autoPlayGroup0.visible = false;
                }
                else {
                    this.playBtn.visible = true;
                    this.playTween.visible = true;
                    this.playBtn0.visible = false;
                    this.playTween0.visible = false;
                }
            }
        }
        if ((GameManager.getInstance().getFreeCount() > 0 && GameManager.getInstance().getFreeCount() != GameManager.getInstance().getAllFreeCount())) {
            if (GameConfig.Action != "Initial") {
                this.playBtn.visible = false;
                this.playTween.visible = false;
                this.playBtn0.visible = false;
                this.playTween0.visible = false;
            }
        }
    };
    MainScenceUI.prototype.setAA = function () {
        this.setUI.currentState = this.currentState;
        this.setUI.visible = !this.setUI.visible;
        if (this.setUI.visible) {
            this.setA.source = "uiElements_05-14_png";
            this.setA0.source = "uiElements_05-14_png";
            GameManager.getInstance().pausume();
            this.setUI.init();
        }
        else {
            this.setA.source = "uiElements_05-11_png"; //三条线图 //分别是左手右手模式情况
            this.setA0.source = "uiElements_05-11_png"; //三条线图
            GameManager.getInstance().resume();
            if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
                if (this.touzhuNum) {
                    this.bet = this.touzhuNum;
                }
            }
        }
    };
    MainScenceUI.prototype.initfighter = function () {
        if (!this.glowFilter) {
            var color = 0x09E8F2; /// 光晕的颜色，十六进制，不包含透明度
            var alpha = 0.1; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
            var blurX = 11; /// 水平模糊量。有效值为 0 到 255.0（浮点）
            var blurY = 11; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
            var strength = 10; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
            var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
            var inner = false; /// 指定发光是否为内侧发光，暂未实现
            var knockout = false; /// 指定对象是否具有挖空效果，暂未实现
            this.glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
        }
        this.showlabel.filters = [this.glowFilter];
        this.showlabel.cacheAsBitmap = true;
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
        this.moneyLabel.cacheAsBitmap = true;
        this.betNumLabel.cacheAsBitmap = true;
        this.allNumLabel.cacheAsBitmap = true;
    };
    MainScenceUI.prototype.onRemove = function () {
        _super.prototype.onRemove.call(this);
    };
    MainScenceUI.prototype.onChange = function (e) {
        // vo.GameData.betIndex = this.baner.getIndex();
        this.updataNum();
    };
    MainScenceUI.prototype.touZhuText = function (num) {
        this.betbanaceLabel.text = 'CNY ' + num;
        this.touzhuNum = parseInt(num);
        // this.betNumLabel.text = 'CNY ' + num;
    };
    MainScenceUI.prototype.updataUI = function () {
        this.autoPlayNumLabel.text = vo.GameData.autoPlayCount + ''; //右手托管次数
        this.autoPlayNumLabel1.text = "" + vo.GameData.autoPlayCount;
        this.autoPlayNumLabel0.text = vo.GameData.autoPlayCount + ''; //左手托管次数
        this.updataNum();
        // this.musicBtn.selected = SoundManager.getInstance().effectOn;
        // this.shanBtn.selected = GameConfig.speedPlay;
    };
    MainScenceUI.prototype.indexValue = function (num) {
        // let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
        // this.setUI.shiZhi1.value = num;
        // console.log("this.value**** === " + this.setUI.shiZhi1.value);
        this.setUI.shiZhi1.indexValue(num);
        // ui.setUI.shiZhi1.tabela.text = vo.GameData.betScoreArr[ui.setUI.shiZhi1.value]+".00";
        // this.setUI.shiZhi1.tabela.text = vo.GameData.betScoreArr[this.setUI.shiZhi1.value]+".00";
    };
    MainScenceUI.prototype.curr = function () {
        // this.setUI.shiZhi1.onEvent();
        // this.setUI.shiZhi2.onEvent();
        // this.setUI.shiZhi3.onEvent();
        // this.setUI.shiZhi4.onEvent();
        // this.setUI.shiZhi5.onEvent();
    };
    MainScenceUI.prototype.updataNum = function () {
        var v = vo.GameData.betScoreArr[vo.GameData.betIndex];
        if (v > this.bet) {
            egret.Tween.get(this).to({ bet: v }, 500);
        }
        else {
            this.bet = v;
        }
        this.betbanaceLabel.text = 'CNY ' + v.toFixed(2);
        egret.Tween.get(this).to({ allwin: vo.GameData.slotInfo.allwin }, 500); // 数字变化1+10
        egret.Tween.get(this).to({ balance: vo.GameData.balance }, 0.1);
    };
    MainScenceUI.prototype.isSpeed = function () {
        var _this = this;
        this.speedUI();
        this.registerEvent(this.nono, egret.TouchEvent.TOUCH_TAP, function () {
            // core.UIManager.closeUI(core.UIConst.SpeedTipsUI);
            _this.speedGroup.visible = false;
            _this.speedUi.visible = false;
            _this.tipsUi.visible = false;
            _this.isSpeedUi = false;
            GameManager.getInstance().resume();
        }, this);
        this.registerEvent(this.yesyes, egret.TouchEvent.TOUCH_TAP, function () {
            // if(this.isSpeedUi){
            // 	this.speedGroup.visible = false;
            // 	this.isSpeedUi = false;
            // }else{
            // }
            GameConfig.speedPlay = true;
            var ui = core.UIManager.getUI(core.UIConst.SetUI);
            _this.setUI.speedBtn.liang.visible = GameConfig.speedPlay;
            _this.speedGroup.visible = false;
            _this.speedUi.visible = false;
            _this.tipsUi.visible = false;
            _this.isSpeedUi = false;
            // core.UIManager.closeUI(core.UIConst.SpeedTipsUI);
            GameManager.getInstance().resume();
        }, this);
    };
    //快速游戏提示框
    MainScenceUI.prototype.speedUI = function () {
        this.isSpeedUi = true;
        this.speedGroup.visible = true;
        this.speedUi.visible = true;
        this.tipsUi.visible = false;
        // this.nono.visible = true;
        if (this.currentState == "down") {
        }
        else {
        }
        // this.yesyes.label = "是";
    };
    //余额不足提示框
    MainScenceUI.prototype.stipUI = function () {
        var _this = this;
        this.isStip = true;
        this.speedGroup.visible = true;
        this.speedUi.visible = false;
        this.tipsUi.visible = true;
        // this.nono.visible = false;
        if (this.currentState == "down") {
        }
        else {
        }
        this.registerEvent(this.yesyes0, egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.isStip) {
                _this.speedGroup.visible = false;
                _this.speedUi.visible = false;
                _this.tipsUi.visible = false;
                _this.isStip = false;
            }
        }, this);
    };
    MainScenceUI.prototype.onTab = function (e) {
        switch (e.currentTarget) {
            case this.playBtn: //开始旋转
            case this.playBtn0://开始旋转 左手模式开始按钮...
                console.log("开始旋转");
                if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
                    GameManager.getInstance().startGame();
                }
                // else {
                // 	GameManager.getInstance().stopGame();
                // }
                break;
            case this.stopAuto:
            case this.stopAuto0://左手模式按钮...
                GameManager.getInstance().autoStopGame();
                // }
                break;
            case this.outMain:
            case this.loading1:
            case this.outMain0:
                window.location.href = window.location.href;
                break;
        }
    };
    /**
     * 控制赔付表
     */
    MainScenceUI.prototype.setRule = function () {
        // this.ruleGroup.visible = this.ruleIsShow;
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
            if (this.betNumLabel.text.length == 12) {
                this.betNumLabel.scaleX = 0.9;
            }
            if (this.betNumLabel.text.length < 12) {
                this.betNumLabel.scaleX = 1;
            }
            if (this.betNumLabel.text.length > 12 && this.betNumLabel.text.length < 15) {
                this.betNumLabel.scaleX = 0.8;
            }
            if (this.betNumLabel.text.length >= 15) {
                this.betNumLabel.scaleX = 0.7;
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
            this.moneyLabel.anchorOffsetX = this.moneyLabel.width / 2;
            this.moneyLabel.anchorOffsetY = this.moneyLabel.height / 2;
            if (this.moneyLabel.text.length == 12) {
                this.moneyLabel.scaleX = 0.9;
            }
            if (this.moneyLabel.text.length < 12) {
                this.moneyLabel.scaleX = 1;
            }
            if (this.moneyLabel.text.length > 12 && this.moneyLabel.text.length < 15) {
                this.moneyLabel.scaleX = 0.8;
            }
            if (this.moneyLabel.text.length >= 15) {
                this.moneyLabel.scaleX = 0.7;
            }
            this.bananceLabel.text = '余额 : CNY ' + this._money.toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
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
            this.allNumLabel.anchorOffsetX = this.allNumLabel.width / 2;
            this.allNumLabel.anchorOffsetY = this.allNumLabel.height / 2;
            if (this.allNumLabel.text.length == 12) {
                this.allNumLabel.scaleX = 0.9;
            }
            if (this.allNumLabel.text.length < 12) {
                this.allNumLabel.scaleX = 1;
            }
            if (this.allNumLabel.text.length > 12 && this.allNumLabel.text.length < 15) {
                this.allNumLabel.scaleX = 0.8;
            }
            if (this.allNumLabel.text.length >= 15) {
                this.allNumLabel.scaleX = 0.7;
            }
        },
        enumerable: true,
        configurable: true
    });
    MainScenceUI.prototype.showOrHideAutoPlay2 = function (b) {
        var _this = this;
        if (this.currentState == "down") {
            // if(this.setUI.zuoShouTo.liang.visible){
            this.playBtn.alpha = 0;
            egret.setTimeout(function () {
                egret.Tween.get(_this.playBtn).to({ alpha: 1 }, 500);
                _this.playBtn.visible = !b;
                _this.playTween.visible = _this.playBtn.visible;
            }, this, 600);
            ;
            this.autoPlayGroup.visible = b;
            egret.Tween.removeTweens(this.autoPlayTitleLabel);
            if (b) {
                this.autoPlayTitleLabel.alpha = 1;
                egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
            }
            // }
        }
        else {
            if (this.setUI.zuoShouTo.liang.visible) {
                this.playBtn0.visible = !b;
                this.playBtn.alpha = 0;
                egret.setTimeout(function () {
                    egret.Tween.get(_this.playBtn).to({ alpha: 1 }, 500);
                    _this.playBtn.visible = !b;
                    _this.playTween.visible = _this.playBtn.visible;
                }, this, 600);
                ;
                egret.Tween.removeTweens(this.autoPlayTitleLabel0);
                if (b) {
                    this.autoPlayTitleLabel0.alpha = 1;
                    egret.Tween.get(this.autoPlayTitleLabel0, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
                }
            }
            else {
                this.playBtn.alpha = 0;
                egret.setTimeout(function () {
                    egret.Tween.get(_this.playBtn).to({ alpha: 1 }, 500);
                    _this.playBtn.visible = !b;
                    _this.playTween.visible = _this.playBtn.visible;
                }, this, 600);
                ;
                this.autoPlayGroup.visible = b;
                egret.Tween.removeTweens(this.autoPlayTitleLabel);
                if (b) {
                    this.autoPlayTitleLabel.alpha = 1;
                    egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
                }
            }
        }
    };
    MainScenceUI.prototype.showOrHideAutoPlay1 = function (b) {
        if (this.currentState == "down") {
            // if(this.setUI.zuoShouTo.liang.visible){
            this.playBtn.visible = !b;
            this.playTween.visible = this.playBtn.visible;
            this.autoPlayGroup.visible = !b;
            egret.Tween.removeTweens(this.autoPlayTitleLabel);
            if (b) {
                this.autoPlayTitleLabel.alpha = 1;
                egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
            }
            // }
        }
        else {
            if (this.setUI.zuoShouTo.liang.visible) {
                this.playBtn0.visible = !b;
                this.playTween0.visible = this.playBtn0.visible;
                this.autoPlayGroup0.visible = !b;
                egret.Tween.removeTweens(this.autoPlayTitleLabel0);
                if (b) {
                    this.autoPlayTitleLabel0.alpha = 1;
                    egret.Tween.get(this.autoPlayTitleLabel0, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
                }
            }
            else {
                this.playBtn.visible = !b;
                this.playTween.visible = this.playBtn.visible;
                this.autoPlayGroup.visible = !b;
                egret.Tween.removeTweens(this.autoPlayTitleLabel);
                if (b) {
                    this.autoPlayTitleLabel.alpha = 1;
                    egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
                }
            }
        }
    };
    /**
     * 显示或者隐藏自动旋转信息
     */
    MainScenceUI.prototype.showOrHideAutoPlay = function (b) {
        if (this.currentState == "down") {
            // if(this.setUI.zuoShouTo.liang.visible){
            this.playBtn.visible = !b;
            this.playTween.visible = this.playBtn.visible;
            this.autoPlayGroup.visible = b;
            egret.Tween.removeTweens(this.autoPlayTitleLabel);
            if (b) {
                this.autoPlayTitleLabel.alpha = 1;
                egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
            }
            // }
        }
        else {
            if (this.setUI.zuoShouTo.liang.visible) {
                this.playBtn0.visible = !b;
                this.playTween0.visible = this.playBtn0.visible;
                this.autoPlayGroup0.visible = b;
                egret.Tween.removeTweens(this.autoPlayTitleLabel0);
                if (b) {
                    this.autoPlayTitleLabel0.alpha = 1;
                    egret.Tween.get(this.autoPlayTitleLabel0, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
                }
            }
            else {
                this.playBtn.visible = !b;
                this.playTween.visible = this.playBtn.visible;
                this.autoPlayGroup.visible = b;
                egret.Tween.removeTweens(this.autoPlayTitleLabel);
                if (b) {
                    this.autoPlayTitleLabel.alpha = 1;
                    egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
                }
            }
        }
    };
    MainScenceUI.prototype.showOrHideAutoPlayX = function (b) {
        var _this = this;
        if (this.currentState == "down") {
            // if(this.setUI.zuoShouTo.liang.visible){
            egret.setTimeout(function () {
                if (GameManager.getInstance().gameState != GameType.GameState.PLAYING && GameManager.getInstance().getFreeCount() <= 0) {
                    _this.playBtn.visible = !b;
                    _this.playTween.visible = _this.playBtn.visible;
                }
            }, this, 500);
            this.autoPlayGroup.visible = b;
            egret.Tween.removeTweens(this.autoPlayTitleLabel);
            if (b) {
                this.autoPlayTitleLabel.alpha = 1;
                egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
            }
            // }
        }
        else {
            if (this.setUI.zuoShouTo.liang.visible) {
                egret.setTimeout(function () {
                    if (GameManager.getInstance().gameState != GameType.GameState.PLAYING && GameManager.getInstance().getFreeCount() <= 0) {
                        _this.playBtn0.visible = !b;
                        _this.playTween0.visible = _this.playBtn0.visible;
                    }
                }, this, 500);
                this.autoPlayGroup0.visible = b;
                egret.Tween.removeTweens(this.autoPlayTitleLabel0);
                if (b) {
                    this.autoPlayTitleLabel0.alpha = 1;
                    egret.Tween.get(this.autoPlayTitleLabel0, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
                }
            }
            else {
                egret.setTimeout(function () {
                    if (GameManager.getInstance().gameState != GameType.GameState.PLAYING && GameManager.getInstance().getFreeCount() <= 0) {
                        _this.playBtn.visible = !b;
                        _this.playTween.visible = _this.playBtn.visible;
                    }
                }, this, 500);
                this.autoPlayGroup.visible = b;
                egret.Tween.removeTweens(this.autoPlayTitleLabel);
                if (b) {
                    this.autoPlayTitleLabel.alpha = 1;
                    egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
                }
            }
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
        var playrandom = Math.floor(Math.random() * 3);
        this.isShowWin = true;
        var iscall = false;
        var time = 250; //如果只有一根线time==80
        var index = 0;
        var isOne;
        var showLineCall = function () {
            _this.gameScence.clearAll();
            if (!_this.isShowWin)
                return;
            if (index == 0) {
                _this.gameScence.showAllLineWin(winArr);
                if (winArr.length == 1) {
                    isOne = true;
                    time = 20; //80
                }
                else {
                    isOne = false;
                    time = 150;
                }
                GameManager.getInstance().showTips('恭喜您!');
                _this.winTime = egret.setTimeout(function () {
                    if (sc == 0) {
                        SoundManager.getInstance().playEffect(winArr[index].Symbol + '_mp3'); //(SoundConst.NOMAL_ARR[playrandom]);
                    }
                    _this.gameScence.clearAll();
                    if (sc == 0) {
                        vo.GameData.slotInfo.allwin += winArr[index].Reward.BetMultiplier * vo.GameData.betScoreArr[vo.GameData.betIndex] * 10000 / 5 / GameConfig.bili;
                        _this.setAllWin(vo.GameData.slotInfo.allwin);
                    }
                    _this.gameScence.showLineWin(isOne, winArr[index], function () {
                        index++;
                        if (index >= winArr.length) {
                            index = 0;
                            sc = 1;
                            if (!iscall && callfun && callobj) {
                                iscall = true;
                                callfun.call(callobj);
                                if (GameManager.getInstance().getFreeCount() == 0) {
                                    vo.GameData.balance = vo.GameData.resultData.Value.Balance;
                                    _this.setMoney(vo.GameData.balance);
                                }
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
                    SoundManager.getInstance().playEffect(winArr[index].Symbol + '_mp3'); //(SoundConst.NOMAL_ARR[playrandom]);
                }
                _this.gameScence.showLineWin(isOne, winArr[index], function () {
                    index++;
                    if (index >= winArr.length) {
                        index = 0;
                        sc = 1;
                        if (!iscall && callfun && callobj) {
                            iscall = true;
                            callfun.call(callobj);
                            if (GameManager.getInstance().getFreeCount() == 0) {
                                vo.GameData.balance = vo.GameData.resultData.Value.Balance;
                                _this.setMoney(vo.GameData.balance);
                            }
                        }
                    }
                    showLineCall();
                }, _this);
            }
        };
        showLineCall();
    };
    /**
     * 停止显示获胜
     */
    MainScenceUI.prototype.hideAllWin = function () {
        egret.clearTimeout(this.winTime);
        this.gameScence.clearAll();
        this.gameScence.setItem();
        this.isShowWin = false;
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
        if (n == 0) {
            return;
        }
        egret.Tween.get(this).to({ allwin: n }, 500);
        if (this.currentState == "up") {
            if (!n) {
                this.rewardLabel0.visible = false;
            }
            else {
                this.rewardLabel0.visible = true;
            }
        }
        else {
            if (!n) {
                this.rewardLabel0.visible = false;
                this.rewardLabel.x = 537;
            }
            else {
                this.rewardLabel0.visible = true;
                this.rewardLabel.x = 441;
            }
        }
        this.rewardLabel0.text = "CNY " + n.toFixed(2);
        if (this.rewardLabel0.text.length >= 8) {
            this.rewardLabel0.scaleX = 0.9;
        }
    };
    /**
     * 设置余额
     */
    MainScenceUI.prototype.setMoney = function (n) {
        egret.Tween.get(this).to({ balance: n }, 500);
    };
    /**
     * 设置背景
     */
    MainScenceUI.prototype.setBG = function (isFree, isact) {
        if (isFree === void 0) { isFree = false; }
        if (isact === void 0) { isact = true; }
        // this.bg.source = isFree ? 'background_texture1_level1_jpg' : 'background_texture0_level1_jpg';
        // egret.setTimeout(()=>{
        this.qbg0.source = isFree ? 'logo_texture1_level1_01-04_png' : 'logo_texture1_level1_01-03_png'; //左边blue
        this.qbg1.source = isFree ? 'logo_texture1_level1_01-02_png' : 'logo_texture1_level1_01_png'; //右边blue
        this.showbg.source = isFree ? 'menu2_png' : 'menu1_png';
        // },this,900);
        if (isFree) {
            if (!isact) {
                this.bg0.alpha = 0;
                this.bg1.alpha = 1;
                return;
            }
            egret.Tween.get(this.bg0).to({ alpha: 0 }, 1000);
            egret.Tween.get(this.bg1).to({ alpha: 1 }, 1000); //red
        }
        else {
            if (!isact) {
                this.bg0.alpha = 1;
                this.bg1.alpha = 0;
                return;
            }
            egret.Tween.get(this.bg0).to({ alpha: 1 }, 1000);
            egret.Tween.get(this.bg1).to({ alpha: 0 }, 1000); //red
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
        if (rx > 682) {
            rx = 682;
        }
        if (ry > 80) {
            ry = 80;
        }
        if (ry < 13) {
            ry = 13;
        }
        if (rx >= 372 && rx <= 448) {
            rx = 432;
        }
        if (ry >= 10 && ry <= 80) {
            ry = 53;
        }
        this.starMC.x = rx;
        this.starMC.y = ry;
        this.starMC.gotoAndPlay('shan');
        this.starMC.once(egret.MovieClipEvent.COMPLETE, function () {
            _this.showStar();
        }, this);
    };
    MainScenceUI.prototype.hideStar = function () {
        this.starMC.stop();
        this.starMC.visible = false;
    };
    MainScenceUI.prototype.showMain = function () {
        this.loadingGroup.visible = false;
        this.loading1.visible = false;
        this.loading2.visible = false;
        this.mainGroup.visible = true;
        this.downGroup.visible = true;
        this.setUI.visible = false;
        this.down1Group.visible = true;
        this.setA.visible = true;
        this.outMain.visible = true;
        this.diHei.alpha = 0.3;
        if (GameManager.getInstance().getFreeCount() > 0) {
            GameManager.getInstance().startGame();
        }
    };
    return MainScenceUI;
}(core.BaseUI));
__reflect(MainScenceUI.prototype, "MainScenceUI");
//# sourceMappingURL=MainScenceUI.js.map