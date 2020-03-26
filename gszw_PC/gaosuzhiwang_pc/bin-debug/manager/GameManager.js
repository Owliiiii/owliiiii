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
        /**
         * 是否能开始
         */
        _this.isStart = true;
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
        GameConfig.gameModle = GameType.GameModule.trueModle;
        core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_INIT, this.onNetgGmeInit, this);
        core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_PLAY, this.onNetGamePlay, this);
        core.NotifyManager.getInstance().registerNotify(core.NotifyConst.LOGIC_ROUNDOVER, this.onLogicGameOver, this);
        core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_TOUCHTOKEN, this.onNetTouchToken, this);
        sockets.SocketMananger.getInstance().connectServer(function () {
            _this.initData();
            Commond.sendInitGame();
        }, this);
        //初始化监听
        window.addEventListener("message", function (receiveMessage) {
            //console.log('r--->' + receiveMessage.data);
            if (receiveMessage.data == 'closedesui')
                return;
            if (receiveMessage.data == 'loadhide')
                return;
            if (receiveMessage.data == 'loadshow')
                return;
            core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Tip);
            var ui = core.UIManager.getUI(core.UIConst.StipsUI);
            ui.showConfirBtn(receiveMessage.data, function () {
                core.UIManager.closeUI(core.UIConst.StipsUI);
                if (sockets.SocketMananger.getInstance().netState != 0) {
                    NetUI.getInstance().showNetting();
                }
            });
        });
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
        this.initAlysInitialData(d);
        core.LoadManger.getInstance().loadGroup(core.UIConst.NomalLoadingUI, 'main', function () {
            core.UIManager.openUI(core.UIConst.MainScenceUI);
        }, this);
    };
    /**
     * 解析初始化数据
     * @param data 数据
     */
    GameManager.prototype.initAlysInitialData = function (data) {
        vo.GameData.initData = JSON.parse(JSON.stringify(data));
        vo.GameData.balance = parseFloat(data.Value.TokenInfo.Balance + '');
        vo.GameData.reelArr.length = 0;
        vo.GameData.slotInfo.resultArr = data.Value.Geninit.Main.ReelSymbols;
        vo.GameData.initData = data;
        vo.GameData.payData = data.Value.Paytables.Main.PayData;
    };
    //开始游戏
    GameManager.prototype.onNetGamePlay = function (data) {
        this.initAlaysPlayData(data);
        //egret.setTimeout(() => {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        var d = vo.GameData.balance - vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line;
        ui.balanceLabel.text = '￥' + GameManager.numberToCommonStr(d);
        ui.stopBtn.enabled = true;
        ui.stopBtn.visible = true;
        ui.gameScence.canStop();
        //}, this, 300);
    };
    GameManager.prototype.initAlaysPlayData = function (data) {
        vo.GameData.resultData = JSON.parse(JSON.stringify(data));
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
        console.log('游戏结束');
        this.gameState = GameType.GameState.STOP;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.startBtn.visible = true;
        ui.stopBtn.visible = false;
        ui.stopBtn.enabled = false;
        ui.startBtn.enabled = true;
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
        vo.GameData.initData.Value.TokenInfo.Balance = vo.GameData.resultData.Value.Balance;
        vo.GameData.balance = vo.GameData.initData.Value.TokenInfo.Balance;
        ui.balanceLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.balance);
        var resultData = vo.GameData.resultData;
        var winarr = resultData.Value.SpinResult.Main.WinResults;
        //测试5同类
        // winarr.push({
        //  Bet:500,
        //  Data:{Line:1},
        //  Positions:[{X:0,Y:1},{X:1,Y:1},{X:2,Y:1},{X:3,Y:1},{X:4,Y:1}],
        //  Symbol: "M5",
        //  SymbolCount: 5
        // });
        var fiveArr = this.getFiveArr(winarr);
        var totalBet = resultData.Value.SpinResult.TotalBet;
        var totalWin = resultData.Value.SpinResult.TotalWin;
        var b = totalWin / totalBet;
        var t = vo.GameData.autoPlayCount > 0 && GameConfig.speedPlay ? 3000 : 3000;
        if (b >= 50) {
            t = 9000;
        }
        if (fiveArr.length == 0) {
            if (winarr.length > 0) {
                ui.showWin(winarr);
                egret.setTimeout(function () {
                    _this.doNext();
                }, this, t);
                egret.setTimeout(function () {
                    _this.isStart = true;
                }, this, 200);
            }
            else {
                egret.setTimeout(function () {
                    _this.isStart = true;
                    _this.doNext();
                }, this, 200);
            }
        }
        else {
            ui.showFiveAimation(fiveArr[0], function () {
                ui.showWin(winarr);
                egret.setTimeout(function () {
                    _this.isStart = true;
                    _this.doNext();
                }, _this, t);
            });
        }
    };
    GameManager.prototype.doNext = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        GameManager.getInstance().gameState = GameType.GameState.STOP;
        ui.updataUI();
        if (vo.GameData.autoPlayCount <= 0) {
            ui.updataBtn();
            ui.infoBtn.enabled = true;
            ui.autoItem.autoBtn.enabled = true;
            ui.speedOffBtn.enabled = true;
            ui.speedOnBtn.enabled = true;
            ui.topMask.visible = false;
            ui.bottomMask.visible = false;
        }
        if (vo.GameData.autoPlayCount > 0) {
            if (this.isStart) {
                ui.hideWin();
                this.startGame();
            }
        }
        else {
            ui.autoItem.autoBtn.visible = true;
            ui.autoItem.autoStopGroup.visible = false;
            ui.autoItem.sMainGroup.visible = true;
            if (GameConfig.autoPlay) {
                vo.GameData.autoPlayCount = 0;
                GameConfig.autoPlay = false;
                //if (!this.isStart) return;
                core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
                var uis = core.UIManager.getUI(core.UIConst.StipsUI);
                uis.showAutoBtn(0, '自动游戏已停止。\n您想重复自动游戏吗？', function () {
                    core.UIManager.closeUI(core.UIConst.StipsUI);
                    ui.autoItem.resetDo();
                }, function () {
                    core.UIManager.closeUI(core.UIConst.StipsUI);
                });
            }
        }
    };
    /**
     * 没钱
     */
    GameManager.prototype.noMoney = function () {
        core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
        var mui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        var ui = core.UIManager.getUI(core.UIConst.StipsUI);
        ui.showNotmoney(0, '余额不足，是否要存款?', function () {
            core.UIManager.closeUI(core.UIConst.StipsUI);
        }, function () {
            core.UIManager.closeUI(core.UIConst.StipsUI);
        });
    };
    GameManager.prototype.stopchannel = function () {
        if (this.rewardChannel) {
            this.rewardChannel.stop();
        }
        if (this.startChannel) {
            this.startChannel.stop();
        }
    };
    GameManager.prototype.startGame = function () {
        var _this = this;
        if (!this.isStart)
            return;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.hideWin();
        ui.autoItem.hideItem();
        this.stopchannel();
        if (vo.GameData.balance < vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line) {
            GameConfig.autoPlay = false;
            vo.GameData.autoPlayCount = 0;
            this.noMoney();
        }
        else {
            if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
                GameManager.getInstance().gameState = GameType.GameState.PLAYING;
                if (GameConfig.autoPlay) {
                    vo.GameData.autoPlayCount -= 1;
                    if (vo.GameData.autoPlayCount < 0) {
                        vo.GameData.autoPlayCount = 0;
                    }
                    ui.autoItem.autoCountLabel.text = vo.GameData.autoPlayCount + '';
                }
                var resultData = vo.GameData.resultData;
                var winmoney = 0;
                if (!resultData) {
                    winmoney = 0;
                }
                else {
                    winmoney = resultData.Value.Dollar;
                }
                ui.resetReward(winmoney);
                Commond.sendPlay();
                ui.gameScence.startReel();
                SoundManager.getInstance().playMusic(SoundConst.START, 1).then(function (channel) {
                    _this.startChannel = channel;
                });
                this.isStart = false;
                ui.startBtn.visible = false;
                ui.startBtn.enabled = false;
                ui.stopBtn.visible = true;
                ui.stopBtn.enabled = false;
                ui.infoBtn.enabled = false;
                ui.betSubBtn.enabled = ui.betAddBtn.enabled = false;
                ui.lineSubBtn.enabled = ui.lineAddBtn.enabled = false;
                ui.autoItem.autoBtn.enabled = false;
                ui.speedOffBtn.enabled = false;
                ui.speedOnBtn.enabled = false;
                ui.topMask.visible = true;
                ui.bottomMask.visible = true;
            }
        }
    };
    GameManager.prototype.stopGame = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.gameScence.stopReel();
        ui.stopBtn.visible = false;
        ui.startBtn.visible = true;
        SoundManager.getInstance().playEffect(SoundConst.STOP);
    };
    /**
     * 数字转格式化字符，小数
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
            if (arr[1].length == 1) {
                sc += '.' + arr[1] + '0';
            }
            else {
                sc = sc + '.' + arr[1].substr(0, 2);
            }
        }
        else {
            sc = sc + '.00';
        }
        return sc;
    };
    /**
     * 数字转格式化字符 整数
     */
    GameManager.numberToCommonStr1 = function (n) {
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
            if (arr[1].length == 1) {
                sc += '.' + arr[1] + '0';
            }
            else {
                sc = sc + '.' + arr[1].substr(0, 2);
            }
        }
        return sc;
    };
    /**
     * 判断钱是否足够
     */
    GameManager.prototype.getMoneyIsFull = function () {
        if (vo.GameData.balance >= vo.GameData.betScoreArr[vo.GameData.betIndex]) {
            return true;
        }
        return false;
    };
    /**
     * 判断有无5同类
     */
    GameManager.prototype.getFiveArr = function (winarr) {
        var reslutArr = [];
        for (var i = 0; i < winarr.length; i++) {
            var data = winarr[i];
            if (data.Positions.length == 5) {
                reslutArr.push(data);
            }
        }
        return reslutArr;
    };
    return GameManager;
}(egret.EventDispatcher));
__reflect(GameManager.prototype, "GameManager");
//# sourceMappingURL=GameManager.js.map