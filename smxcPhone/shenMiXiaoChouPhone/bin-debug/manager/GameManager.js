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
var GameManager = (function (_super) {
    __extends(GameManager, _super);
    function GameManager() {
        var _this = _super.call(this) || this;
        /**
         * 游戏状态
         */
        _this.gameState = 0;
        _this.curtime = egret.getTimer();
        return _this;
    }
    GameManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new GameManager();
        }
        return this._instance;
    };
    GameManager.prototype.init = function () {
        var _this = this;
        GameController.getInstance().clearRedis();
        GameConfig.gameModle = GameType.GameModule.falseModle;
        core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_INIT, this.onNetgGmeInit, this);
        core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_PLAY, this.onNetGamePlay, this);
        core.NotifyManager.getInstance().registerNotify(core.NotifyConst.LOGIC_ROUNDOVER, this.onLogicGameOver, this);
        core.NotifyManager.getInstance().registerNotify(core.NotifyConst.LOGIC_ROUNDSTART, this.onLogicGameStart, this);
        core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_TOUCHTOKEN, this.onNetTouchToken, this);
        // core.TimerManager.instance.addTick(200,-1,()=>{
        // 	if(this.chanel){
        // 		console.log(this.chanel.volume);
        // 	}
        // },this);
        sockets.SocketMananger.getInstance().connectServer(function () {
            _this.initData();
            Commond.sendInitGame();
        }, this);
        //初始化监听
    };
    /**
     * 初始化数据
     */
    GameManager.prototype.initData = function () {
        vo.GameData.slotInfo = new vo.SlotInfo();
        vo.GameData.slotInfo.readData(null);
        vo.GameData.slotInfo.readPlayAction(null);
    };
    /**
     * 初始化游戏
     */
    GameManager.prototype.onNetgGmeInit = function (data) {
        var d = data;
        core.LoadManger.getInstance().loadGroup(core.UIConst.NomalLoadingUI, 'main', function () {
            core.UIManager.openUI(core.UIConst.MainScenceUI, 2);
        }, this);
        this.initAlysInitialData(d);
    };
    /**
     * 解析初始化数据
     * @param data 数据
     */
    GameManager.prototype.initAlysInitialData = function (data) {
        vo.GameData.balance = parseFloat(data.Value.TokenInfo.Balance + '');
        vo.GameData.reelArr.length = 0;
        var arr = data.Value.SpinConstraint.Main.Stripes;
        for (var i = 0; i < arr.length; i++) {
            vo.GameData.reelArr.push(arr[i].Symbols);
        }
        if (data.Value.Actions != null) {
            vo.GameData.allFreeCount = data.Value.Actions.Count;
            GameConfig.freeNum = data.Value.Actions.Remain;
        }
        vo.GameData.slotInfo.resultArr = [];
        vo.GameData.slotInfo.resultArr = data.Value.Geninit.Main.ReelResults;
        vo.GameData.initData = data;
        GameConfig.Action = data.Action;
        GameConfig.isData = true;
    };
    //开始游戏
    GameManager.prototype.onNetGamePlay = function (data) {
        this.initAlaysPlayData(data);
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        GameConfig.Action = vo.GameData.resultData.Action;
        ui.ruleIsShow = false;
        ui.setRule();
        // ui.gameScence.startReel();
        if (vo.GameData.resultData.ActionType == 'freeslot') {
            var c = (vo.GameData.allFreeCount - this.getFreeCount()) > 0 ? (vo.GameData.allFreeCount) - this.getFreeCount() : vo.GameData.allFreeCount;
            if (vo.GameData.allFreeCount != this.getFreeCount()) {
                this.showTips('免费旋转第' + (c + 1) + '次，' + '共' + vo.GameData.allFreeCount + '次');
            }
        }
        else {
            vo.GameData.slotInfo.allwin = 0;
            ui.setAllWin(vo.GameData.slotInfo.allwin);
            this.showTips('祝您好运!');
        }
    };
    GameManager.prototype.initAlaysPlayData = function (data) {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        vo.GameData.slotInfo.resultArr = [];
        vo.GameData.slotInfo.resultArr = data.Value.Main.ReelResults;
        vo.GameData.initData.Value.Actions = data.Value.Actions;
        vo.GameData.resultData = data;
        ui.gameScence.startData();
    };
    //10S改变  money
    GameManager.prototype.onNetTouchToken = function (data) {
        // vo.GameData.matchInfo.money = data.Value.Balance - vo.GameData.matchInfo.allScore / vo.GameData.matchInfo.bili;
        // core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_BALANCE);
    };
    /**
     * 游戏正式结束通知
     */
    GameManager.prototype.onLogicGameOver = function () {
        var _this = this;
        GameConfig.isData = false;
        if (!GameConfig.autoPlay && GameManager.getInstance().getFreeCount() <= 0) {
            this.stopMusic();
        }
        GameManager.getInstance().gameState = GameType.GameState.STOP;
        console.log("正式结束");
        if (vo.GameData.resultData.Value.Actions != null) {
            vo.GameData.allFreeCount = vo.GameData.resultData.Value.Actions.Count;
            GameConfig.freeNum = vo.GameData.resultData.Value.Actions.Remaining;
        }
        else {
            GameConfig.freeNum = 0;
            vo.GameData.allFreeCount = 0;
        }
        this.showTips('');
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        if (GameManager.getInstance().getFreeCount() <= 0) {
            // ui.setBG(false);
        }
        ui.removeListeber();
        // ui.playBtn.label = '旋转';
        ui.playBtn.enabled = false;
        ui.playBtn0.enabled = false;
        var resultData = vo.GameData.resultData;
        var winarr = resultData.Value.Main.WinResults;
        var bonusNum = false;
        var lineNum = false;
        var bonusWin = false;
        var doublebonus = false;
        if (winarr.length > 0) {
            this.stopMusic();
            for (var i = 0; i < winarr.length; i++) {
                if (winarr[i].Type == "Bonus") {
                    if (vo.GameData.resultData.ActionType == 'slot') {
                        //第一次进入免费
                        bonusNum = true;
                    }
                    else {
                        //免费又免费
                        doublebonus = true;
                    }
                }
                if (winarr[i].Type == "Line") {
                    lineNum = true;
                }
                if (winarr[i].Type == "BonusWin") {
                    if (vo.GameData.resultData.ActionType == 'freeslot') {
                        bonusWin = true;
                    }
                }
            }
            if (bonusNum) {
                this.getFreeSlot();
                return;
            }
            if (doublebonus) {
                //神秘大奖+10次
                this.getFreeSlotAndReward();
                return;
            }
            if (bonusWin) {
                this.getbigReward();
                return;
            }
            if (lineNum) {
                this.getNomalReward();
                return;
            }
        }
        else {
            // this.doNext();
            egret.setTimeout(function () {
                _this.doNext();
                console.log("this.isCanStop()333 ==== " + _this.isCanStop());
                if (_this.isCanStop()) {
                    if (!GameConfig.autoPlay && GameManager.getInstance().getFreeCount() <= 0) {
                        _this.stopMusic();
                    }
                }
            }, this, 100);
        }
    };
    /**
     * 获得免费旋转奖励和神秘大奖奖励
     */
    GameManager.prototype.getFreeSlotAndReward = function () {
        var _this = this;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        var resultData = vo.GameData.resultData;
        this.showTips('获得神秘分散图案');
        var winarr = resultData.Value.Main.WinResults;
        var time = 0;
        var index = 0;
        var newWinarr = [];
        for (var i_1 = 0; i_1 < winarr.length; i_1++) {
            if (winarr[i_1].Type = "Bonus") {
                newWinarr = winarr[i_1];
            }
        }
        for (var i = 0; i < winarr.length; i++) {
            if (winarr[i].Type == "Line") {
                index++;
            }
        }
        var winMoney = resultData.Value.Main.TotalWin;
        var lcomplete = function () {
            var w = winMoney / GameConfig.bili;
            time = index * 1800;
            console.log("INDEX === " + index);
            if (index != 0) {
                _this.getNomalReward1();
            }
            egret.setTimeout(function () {
                _this.showTips('赢得CNY ' + w + ".00");
                vo.GameData.slotInfo.allwin += w;
                ui.setAllWin(vo.GameData.slotInfo.allwin);
                for (var j = 0; j < winarr.length; j++) {
                    ui.showHouzi(winarr[j], _this.doNext.bind(_this), true);
                }
            }, _this, time);
        };
        ui.gameScence.showRewardGroup(newWinarr, winMoney, lcomplete.bind(this));
        SoundManager.getInstance().playEffect(SoundConst.BIG_REWARD);
    };
    /**
     * 获得免费旋转奖励
     */
    GameManager.prototype.getFreeSlot = function () {
        var _this = this;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        var resultData = vo.GameData.resultData;
        var winarr = resultData.Value.Main.WinResults;
        var time = 0;
        var index = 0;
        for (var i = 0; i < winarr.length; i++) {
            if (winarr[i].Type == "Line") {
                index++;
            }
        }
        this.showTips('获得神秘分散图案');
        var freeComplete = function () {
            SoundManager.getInstance().playEffect(SoundConst.FREE_SHOW);
            _this.showTips('获得10次免费旋转');
            time = index * 1800;
            // console.log(time + " == 有没有 == " + index);
            if (index != 0) {
                _this.getNomalReward1();
            }
            egret.setTimeout(function () {
                ui.gameScence.showFreeSlot(function () {
                    ui.hideHouzi();
                    egret.setTimeout(function () {
                        if (vo.GameData.resultData.ActionType != 'freeslot') {
                            _this.showTips('免费旋转第1次，共10次');
                        }
                    }, _this, 1000);
                    _this.doNext();
                });
            }, _this, time);
        };
        for (var j = 0; j < winarr.length; j++) {
            if (winarr[j].Type == "Bonus") {
                ui.showHouzi(winarr[j], freeComplete.bind(this));
            }
        }
    };
    /**
     * 获得神秘大奖奖励
     */
    GameManager.prototype.getbigReward = function () {
        var _this = this;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        var resultData = vo.GameData.resultData;
        var time = 0;
        var index = 0;
        // let testWinarr: Array<any> = [];
        this.showTips('获得神秘分散图案');
        var winarr = resultData.Value.Main.WinResults;
        var winMoney = resultData.Value.Main.TotalWin;
        var newWinarr = [];
        for (var i_2 = 0; i_2 < winarr.length; i_2++) {
            if (winarr[i_2].Type = "Bonus") {
                newWinarr = winarr[i_2];
            }
        }
        for (var i = 0; i < winarr.length; i++) {
            if (winarr[i].Type == "Line") {
                index++;
            }
        }
        var lcomplete = function () {
            var w = winMoney / GameConfig.bili;
            time = index * 1800;
            if (index != 0) {
                _this.getNomalReward1();
            }
            egret.setTimeout(function () {
                _this.showTips('2个分散图案赢得CNY ' + w + ".00");
                vo.GameData.slotInfo.allwin += w;
                ui.setAllWin(vo.GameData.slotInfo.allwin);
                ui.gameScence.clearAll();
                for (var j = 0; j < winarr.length; j++) {
                    if (winarr[j].Type == "BonusWin") {
                        ui.showHouzi(winarr[j], _this.doNext.bind(_this), true);
                    }
                }
            }, _this, time);
        };
        ui.gameScence.showRewardGroup(newWinarr, winMoney, lcomplete.bind(this)); //展示并隐藏框
        SoundManager.getInstance().playEffect(SoundConst.BIG_REWARD);
    };
    /**
     * 获得常规奖励
     */
    GameManager.prototype.getNomalReward = function () {
        var _this = this;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        var resultData = vo.GameData.resultData;
        var winarr = resultData.Value.Main.WinResults;
        var testWinarr = [];
        for (var i = 0; i < winarr.length; i++) {
            if (winarr[i].Type == 'Line') {
                testWinarr.push(winarr[i]);
            }
        }
        egret.setTimeout(function () {
            if (_this.getFreeCount() == 0 && !GameConfig.autoPlay && vo.GameData.allFreeCount == 0) {
                _this.exitNoControlState1();
                ui.showOrHideAutoPlay(false);
            }
        }, this, 300);
        ui.showAllWin(testWinarr, function () {
            if (GameManager.getInstance().getFreeCount() == 0) {
                vo.GameData.balance = vo.GameData.resultData.Value.Balance;
                ui.setMoney(vo.GameData.balance);
            }
            GameManager.getInstance().gameState = GameType.GameState.STOP;
            _this.doNext();
        }, this, function () {
            // GameManager.getInstance().gameState = GameType.GameState.STOP;
            _this.exitNoControlState1();
            if (_this.getFreeCount() == 0 && !GameConfig.autoPlay) {
                // console.log("免费旋转次数 === " + vo.GameData.allFreeCount);
                ui.showOrHideAutoPlay(false);
            }
        });
    };
    GameManager.prototype.getNomalReward1 = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        var resultData = vo.GameData.resultData;
        var winarr = resultData.Value.Main.WinResults;
        var testWinarr = [];
        for (var i = 0; i < winarr.length; i++) {
            if (winarr[i].Type == 'Line') {
                testWinarr.push(winarr[i]);
            }
        }
        ui.showAllWin(testWinarr, function () {
            if (GameManager.getInstance().getFreeCount() == 0) {
                vo.GameData.balance = vo.GameData.resultData.Value.Balance;
                ui.setMoney(vo.GameData.balance);
            }
            GameManager.getInstance().gameState = GameType.GameState.STOP;
            // this.doNext();
        }, this);
    };
    GameManager.prototype.doNext = function () {
        var _this = this;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        if (GameManager.getInstance().getFreeCount() > 0) {
            ui.setBG(true);
        }
        if (this.getFreeCount() == 0 && vo.GameData.resultData.ActionType == 'freeslot') {
            SoundManager.getInstance().playEffect(SoundConst.ALLWIN);
            ui.gameScence.showAllWinNumGroup(vo.GameData.slotInfo.allwin, function () {
                vo.GameData.slotInfo.allwin = 0;
                ui.setAllWin(vo.GameData.slotInfo.allwin);
                ui.setMoney(vo.GameData.resultData.Value.Balance);
                _this.exitNoControlState();
                console.log("this.isCanStop()111 ==== " + _this.isCanStop());
                if (_this.isCanStop()) {
                    _this.autoStopGame();
                }
                else {
                    ui.updataUI();
                    _this.startGame();
                }
            });
        }
        else {
            this.exitNoControlState();
            console.log("this.isCanStop()222 ==== " + this.isCanStop());
            if (this.isCanStop()) {
                this.autoStopGame();
            }
            else {
                ui.updataUI();
                this.startGame();
            }
        }
    };
    /**
     * 游戏正式开始通知
     */
    GameManager.prototype.onLogicGameStart = function () {
        GameManager.getInstance().gameState = GameType.GameState.PLAYING;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.addListeber();
        // ui.playBtn.label = '停止';
        ui.hideAllWin();
        ui.hideHouzi();
        if (GameManager.getInstance().getFreeCount() <= 0 && vo.GameData.allFreeCount == 0) {
            ui.setBG(false);
        }
        // GameManager.getInstance().enterNoControlState();
    };
    GameManager.prototype.startMusic = function () {
        var _this = this;
        if (SoundManager.getInstance().effectOn && this.chanel == null) {
            // console.log("MUSIC111 == " + this.posMusic);
            console.log("音乐播放了音乐播放了音乐播放了111111");
            SoundManager.getInstance().playMusic(SoundConst.START, -1).then(function (chanel) {
                _this.chanel = chanel;
            });
        }
    };
    GameManager.prototype.stopMusic = function () {
        if (this.chanel) {
            // this.posMusic = this.chanel.position;
            // console.log("MUSIC == " + this.posMusic);
            this.chanel.stop();
            this.chanel = null;
        }
    };
    /**
     * 开始尝试游戏
     */
    GameManager.prototype.startGame = function () {
        var _this = this;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.gameScence.hideGroup();
        if (vo.GameData.resultData && this.getFreeCount() == 0) {
            vo.GameData.balance = vo.GameData.resultData.Value.Balance;
        }
        if (this.getFreeCount() > 0) {
            ui.playBtn.visible = false;
            ui.playBtn0.visible = false;
            ui.playTween.visible = false;
            ui.playTween0.visible = false;
            Commond.sendPlay(true);
        }
        else {
            if (GameConfig.autoPlay) {
                vo.GameData.autoPlayCount -= 1;
            }
            if (vo.GameData.autoPlayCount <= 0) {
                this.autoStopGame();
            }
            //判断有钱没有
            var bet = vo.GameData.betScoreArr[vo.GameData.betIndex];
            if (bet <= vo.GameData.balance) {
                ui.playBtn.visible = false;
                ui.playTween.visible = false;
                ui.playBtn0.visible = false;
                ui.playTween0.visible = false;
                Commond.sendPlay(false);
                vo.GameData.balance -= bet;
            }
            else {
                if (GameConfig.autoChangeBet) {
                    var index = this.getMaxBet();
                    if (index > 0) {
                        vo.GameData.betIndex = index;
                        ui.indexValue(index);
                        // ui.baner.setIndex(index);
                        // vo.GameData.betScoreArr[ vo.GameData.betIndex-1];
                        ui.playBtn.visible = false;
                        ui.playTween.visible = false;
                        ui.playBtn0.visible = false;
                        ui.playTween0.visible = false;
                        Commond.sendPlay(false);
                        // vo.GameData.balance -= bet;
                        vo.GameData.balance -= vo.GameData.betScoreArr[vo.GameData.betIndex];
                        ;
                    }
                    else {
                        this.autoStopGame();
                        // this.noMoney();
                        ui.stipUI();
                        return;
                    }
                }
                else {
                    this.autoStopGame();
                    // this.noMoney();
                    ui.stipUI();
                    return;
                }
            }
        }
        ui.updataUI();
        if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
            core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_ROUNDSTART);
            // this.stopMusic();
            if (SoundManager.getInstance().effectOn && this.chanel == null && egret.getTimer() - this.curtime > 400) {
                this.curtime = egret.getTimer();
                console.log("音乐播放了音乐播放了音乐播放了");
                SoundManager.getInstance().playMusic(SoundConst.START, -1).then(function (chanel) {
                    _this.chanel = chanel;
                });
            }
            ui.gameScence.startReel();
        }
        else {
            this.stopMusic();
        }
    };
    /**
     * 没钱
     */
    GameManager.prototype.noMoney = function () {
        core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
        var ui = core.UIManager.getUI(core.UIConst.StipsUI);
        ui.shows('没有可用资金', '金额不足，无法以当前注额投注，请减少注额或增加余额。');
    };
    /**
     * 停止尝试游戏
     */
    GameManager.prototype.stopGame = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        if (GameConfig.isData) {
            ui.gameScence.stopReel();
        }
    };
    /**
     * 开始自动游戏
     */
    GameManager.prototype.autoStartGame = function () {
        GameManager.getInstance().setAutoPlay(true);
        GameConfig.key_money = vo.GameData.balance;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        // ui.autoBtn.label = '停止';
        ui.showOrHideAutoPlay(true);
        ui.updataUI();
        // egret.log("状态 ==" + this.gameState);
        // egret.log(GameManager.getInstance().getFreeCount() + "== NUM ==" + vo.GameData.allFreeCount);
        if (this.gameState != GameType.GameState.STOP) {
            // egret.log("1111");
            GameManager.getInstance().resume();
            return;
        }
        if (this.gameState == GameType.GameState.STOP && GameManager.getInstance().getFreeCount() <= 0) {
            if (vo.GameData.allFreeCount == 0) {
                // egret.log("0000");
                GameManager.getInstance().startGame();
                return;
            }
        }
        if (this.gameState == GameType.GameState.STOP && GameManager.getInstance().getFreeCount() > 0) {
            // egret.log("9999");
            GameManager.getInstance().resume();
        }
        if (this.gameState == GameType.GameState.STOP && GameManager.getInstance().getFreeCount() == vo.GameData.allFreeCount && GameManager.getInstance().getFreeCount() <= 0) {
            // egret.log("2222");
            GameManager.getInstance().startGame();
        }
        if (this.gameState == GameType.GameState.STOP && GameManager.getInstance().getFreeCount() == vo.GameData.allFreeCount && vo.GameData.allFreeCount != 0) {
            // egret.log("3333");
            // 
            GameManager.getInstance().startGame();
        }
    };
    GameManager.prototype.autoStartGameZZZ = function () {
        GameManager.getInstance().setAutoPlay(true);
        GameConfig.key_money = vo.GameData.balance;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        // ui.autoBtn.label = '停止';
        ui.showOrHideAutoPlay(true);
        ui.updataUI();
        if (this.gameState == GameType.GameState.STOP && GameManager.getInstance().getFreeCount() <= 0) {
            GameManager.getInstance().startGame();
        }
    };
    /**
     * 停止自动游戏
     */
    GameManager.prototype.autoStopGame = function () {
        GameManager.getInstance().setAutoPlay(false);
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        // ui.autoBtn.label = '自动游戏';
        if (GameManager.getInstance().getFreeCount() > 0) {
            // sfas
        }
        // console.log("ZZZ1----" + GameManager.getInstance().getFreeCount());
        // console.log("ZZZ2----" + GameManager.getInstance().getAllFreeCount());
        // console.log("ZZZ3----" + GameConfig.autoPlay);
        if ((GameManager.getInstance().getFreeCount() > 0) && (GameManager.getInstance().getFreeCount() == GameManager.getInstance().getAllFreeCount()) && GameManager.getInstance().getAllFreeCount() != 0) {
            console.log("AA11");
            ui.showOrHideAutoPlay(false);
            if ((GameManager.getInstance().getAllFreeCount() - vo.GameData.resultData.Value.Actions.Remaining) == 0) {
                console.log("AA66");
                ui.showOrHideAutoPlay(false);
            }
            else {
                console.log("AA77");
                ui.showOrHideAutoPlay1(true);
            }
            return;
        }
        if (GameManager.getInstance().getFreeCount() == 0 && GameManager.getInstance().getAllFreeCount() == 0 && GameConfig.autoPlay) {
            console.log("AA22");
            ui.showOrHideAutoPlay(false);
            return;
        }
        // if(GameManager.getInstance().getFreeCount() > 0 && GameManager.getInstance().getAllFreeCount() >= 0 && GameConfig.autoPlay){
        // 	console.log("AA33");
        // 	ui.showOrHideAutoPlay(true);
        // 	return;
        // }
        if (GameManager.getInstance().getFreeCount() > 0 && GameManager.getInstance().getAllFreeCount() >= 0 && !GameConfig.autoPlay) {
            if (GameConfig.Action != "Initial") {
                console.log("AA44");
                ui.showOrHideAutoPlay1(true);
            }
            else {
                console.log("AA99");
                ui.showOrHideAutoPlay(false);
            }
            return;
        }
        console.log("AA55");
        ui.showOrHideAutoPlay(false);
    };
    GameManager.prototype.autoStopGameX = function () {
        GameManager.getInstance().setAutoPlay(false);
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        // ui.autoBtn.label = '自动游戏';
        ui.showOrHideAutoPlayX(false);
    };
    /**
     * 暂停
     */
    GameManager.prototype.pausume = function () {
        if (this.gameState != GameType.GameState.STOP) {
            var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
            ui.gameScence.pausme();
        }
    };
    /**
     * 继续
     */
    GameManager.prototype.resume = function () {
        if (this.gameState != GameType.GameState.STOP) {
            var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
            ui.gameScence.resume();
        }
    };
    /**
     * 展示提示
     */
    GameManager.prototype.showTips = function (str) {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.showlabel.text = str;
    };
    /**
     * 设置托管状态
     */
    GameManager.prototype.setAutoPlay = function (auto) {
        GameConfig.autoPlay = auto;
    };
    /**
     * 是否能停止
     */
    GameManager.prototype.isCanStop = function () {
        console.log("this.getRewardType() == " + this.getRewardType());
        if (!GameConfig.autoPlay && vo.GameData.resultData.ActionType == 'slot')
            return true;
        if (!GameConfig.autoPlay && this.getFreeCount() == 0)
            return true;
        if (!GameConfig.autoPlay && this.getRewardType() == GameType.RewardType.FREE_REWARD)
            return true;
        // if (!GameConfig.autoPlay && this.getRewardType() == GameType.RewardType.BIG_AND_FREE) return true;
        if (GameConfig.autoPlay && GameConfig.freeWin && this.getRewardType() == GameType.RewardType.FREE_REWARD)
            return true;
        if (GameConfig.autoPlay && vo.GameData.autoPlayCount <= 0)
            return true;
        var adds = vo.GameData.resultData.Value.Balance > vo.GameData.balance ? vo.GameData.resultData.Value.Balance - vo.GameData.balance : 0;
        var subs = vo.GameData.resultData.Value.Balance < vo.GameData.balance ? vo.GameData.balance - vo.GameData.resultData.Value.Balance : 0;
        if (GameConfig.autoPlay && adds >= GameConfig.moneyAddCur && GameConfig.moneyAddCur > 0 && vo.GameData.resultData.ActionType == 'slot')
            return true;
        if (GameConfig.autoPlay && subs >= GameConfig.moneySubCur && GameConfig.moneySubCur > 0 && vo.GameData.resultData.ActionType == 'slot')
            return true;
        if (GameConfig.autoPlay && vo.GameData.resultData.Value.Main.TotalWinDollar >= GameConfig.singleWinCurCount && GameConfig.singleWinCurCount > 0 && vo.GameData.resultData.ActionType == 'slot')
            return true;
        if (GameConfig.autoPlay && vo.GameData.resultData.Value.Main.TotalWinDollar > 0 && GameConfig.someWin && vo.GameData.resultData.ActionType == 'slot')
            return true;
        return false;
    };
    /**
     * 判断当前结果奖励类型
     */
    GameManager.prototype.getRewardType = function () {
        var resultData = vo.GameData.resultData;
        var winarr = resultData.Value.Main.WinResults;
        var bonusNum = false;
        var lineNum = false;
        var bonusWin = false;
        var doublebonus = false;
        if (winarr.length > 0) {
            for (var i = 0; i < winarr.length; i++) {
                if (winarr[i].Type == "Bonus") {
                    if (vo.GameData.resultData.ActionType == 'slot') {
                        //第一次进入免费
                        bonusNum = true;
                    }
                    else {
                        //免费又免费
                        doublebonus = true;
                    }
                }
                if (winarr[i].Type == "Line") {
                    lineNum = true;
                }
                if (winarr[i].Type == "BonusWin") {
                    if (vo.GameData.resultData.ActionType == 'freeslot') {
                        bonusWin = true;
                    }
                }
            }
            if (bonusNum) {
                //第一次进入免费
                return GameType.RewardType.FREE_REWARD;
            }
            if (doublebonus) {
                //免费又免费
                return GameType.RewardType.BIG_AND_FREE;
            }
            if (bonusWin) {
                if (vo.GameData.resultData.ActionType == 'freeslot') {
                    return GameType.RewardType.BIG_REWARD;
                }
            }
            if (lineNum) {
                return GameType.RewardType.NOMAL_REWARD; //常规奖励
            }
        }
        return GameType.RewardType.NO_REWARD;
    };
    /**
     * 判断当前还有多少次免费旋转
     */
    GameManager.prototype.getFreeCount = function () {
        var n = 0;
        if (GameConfig.freeNum > 0) {
            n = GameConfig.freeNum;
        }
        return n;
    };
    /**
     * 判断当前一共获得多少次旋转
     */
    GameManager.prototype.getAllFreeCount = function () {
        var n = 0;
        n = vo.GameData.allFreeCount;
        return n;
    };
    /**
     * 查找当前能投入的最大注索引
     */
    GameManager.prototype.getMaxBet = function () {
        // for (let i: number = vo.GameData.betScoreArr.length - 1; i--; i >= 0) {
        // 	if (vo.GameData.betScoreArr[i] <= vo.GameData.balance) {
        // 		return vo.GameData.betScoreArr.length - 1 - i;
        // 	}
        // }
        // return -1;
        for (var i = vo.GameData.betScoreArr.length - 1; i >= 0; i--) {
            if (vo.GameData.betScoreArr[i] <= vo.GameData.balance) {
                return i;
            }
        }
        return -1;
    };
    /**
     * 进入不可开始状态
     */
    GameManager.prototype.enterNoControlState = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        GameManager.getInstance().gameState = GameType.GameState.NOCONTROL;
        //ui.playBtn.enabled = false;
        // ui.baner.setEnable(false);
        // ui.setBtn.enabled = false;
    };
    /**
     * 退出不可开始状态
     */
    GameManager.prototype.exitNoControlState = function () {
        GameManager.getInstance().gameState = GameType.GameState.STOP;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        //ui.playBtn.enabled = true;
        // ui.baner.setEnable(true);
        // ui.setBtn.enabled = true;
        ui.playBtn.enabled = true;
        ui.playBtn0.enabled = true;
    };
    GameManager.prototype.exitNoControlState1 = function () {
        GameManager.getInstance().gameState = GameType.GameState.STOP;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        //ui.playBtn.enabled = true;
        // ui.baner.setEnable(true);
        // ui.setBtn.enabled = true;
        ui.playBtn.enabled = true;
        ui.playBtn0.enabled = true;
    };
    /**
     * 数字转通用字符
     */
    GameManager.numberToCommonStr = function (n) {
        var als = n + '';
        var arr = als.split('.');
        var s = arr[0];
        var sc = '';
        var cindex = 0;
        for (var i = s.length - 1; i >= 0; i--) {
            sc = s.substr(i, 1) + sc;
            cindex++;
            if (cindex == 3 && i > 0) {
                sc = ',' + sc;
                cindex = 0;
            }
        }
        if (arr.length > 1) {
            sc = sc + '.' + arr[1];
        }
        else {
            sc = sc + '.00';
        }
        return sc;
    };
    return GameManager;
}(egret.EventDispatcher));
__reflect(GameManager.prototype, "GameManager");
//# sourceMappingURL=GameManager.js.map