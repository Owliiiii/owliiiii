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
        GameController.getInstance().clearRedis();
        /**ceshi * */
        GameConfig.gameModle = GameType.GameModule.falseModle;
        // GameConfig.gameModle = GameType.GameModule.trueModle;
        core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_INIT, this.onNetgGmeInit, this);
        core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_PLAY, this.onNetGamePlay, this);
        core.NotifyManager.getInstance().registerNotify(core.NotifyConst.LOGIC_ROUNDOVER, this.onLogicGameOver, this);
        core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_TOUCHTOKEN, this.onNetTouchToken, this);
        //sockets.SocketMananger.getInstance().connectServer(() => {
        this.initData();
        Commond.sendInitGame();
        //}, this);
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
        /**ceshi */
        // vo.GameData.payData = data.Value.Paytables.Main.PayData;
    };
    /**只是4096等线路使用，把 WinResults 里的 positon 和 TriggerFlicker 里的同一并且转化为x，y坐标 */
    GameManager.prototype.dataTransfromtion = function () {
        var data = vo.GameData.resultData.Value.Main;
        /**先去判断分离TriggerFlicker的值并且转换为positon里的坐标 */
        console.log('-------', data);
        var obj = Object.keys(data.TriggerFlicker);
        var temp = [];
        var winData = [];
        /**这里是获取到 TriggerFlicker 的键值对（现在1,2层for的长度都是2）*/
        for (var i = 0; i < obj.length; i++) {
            var name_1 = obj[i];
            // console.log('获取到了他的name', name,i)
            /**获取到对应 WinResults 里的值 */
            var resData = data.WinResults[i];
            // delete (resData.Positions)
            // resData.Positions = [];
            var twoData = data.TriggerFlicker[name_1];
            var tempArr = [];
            for (var j = 0; j < twoData.length; j++) {
                var posArr = data.TriggerFlicker[name_1][j];
                winData.push(resData);
                // console.log('当前name获取到的数组', posArr, twoData.length);
                tempArr.push(posArr);
            }
            temp = temp.concat(tempArr);
        }
        console.log('最终', temp);
        /**把获取到数组转换为坐标 */
        var XYPosArr = [];
        for (var i = 0; i < temp.length; i++) {
            var pos = [];
            for (var j = 0; j < temp[i].length; j++) {
                var obj_1 = {
                    'X': j,
                    'Y': temp[i][j]
                };
                pos.push(obj_1);
            }
            XYPosArr.push(pos);
        }
        console.log('位置转化', XYPosArr, "----", winData);
        /**把转换好的位置和 WinResults 里的 Positions 替换*/
        // for(let k = 0;k < XYPosArr.length;k++){
        // 	for(let j = 0;j < XYPosArr[k].length;j++){
        // 		// XYPosArr[k][j].X
        // 	}
        // 	winData[k].Positions = [];
        // 	winData[k].Positions.push(XYPosArr[k]);
        // }
        // XYPosArr[0][0].X = 88;
        // winData[0].Positions[0][0].X = XYPosArr[0][0].X;
        var testArrPos = [];
        for (var k = 0; k < XYPosArr.length; k++) {
            testArrPos[k] = XYPosArr[k];
            winData[k].Positions.push(testArrPos[k]);
        }
        console.log('最终替换后', winData, "----", testArrPos);
        /**这里是循环遍历 TriggerFlicker下的当前中奖的数组 */
        // for (let j = 0; j < data.TriggerFlicker[name].length; j++) {
        // 	console.log('>>>>>>', data.TriggerFlicker[name][j], j);
        // 	let tempY = data.TriggerFlicker[name][j];
        // 	let pos = [];
        // 	/**把之前再储存的 WinResults 添加进新的空白数组，有多少个TriggerFlicker的键值对就添加几个 */
        // 	temp.push(winData)
        // 	/**把获取到的中奖Y坐标转化为 x，y坐标 */
        // 	for (let k = 0; k < tempY.length; k++) {
        // 		let positon = {
        // 			"X": k,
        // 			"Y": tempY[k]
        // 		}
        // 		pos.push(positon)
        // 	}
        // 	console.log('之前', temp, pos, temp.length - 1)
        // 	/**遍历结束一次把 Positions的值覆盖一次  
        // 	 * 但是这里的temp打印中,pos打印正常，但是再第二层for为1的时候，Positions没有被赋值
        // 	 * 第二层for为2的时候，2个Positions的值都被赋值为第二层for获取到的pos值，当第一层为2的时候也是一样的 */
        // 		temp[temp.length - 1].Positions = pos;
        // 	console.log('转化之后的', temp);
        // }
        // }
        vo.GameData.resultData.Value.Main.WinResults = temp;
        console.log('====================================================================', vo.GameData.resultData);
    };
    //开始游戏
    GameManager.prototype.onNetGamePlay = function (data) {
        console.log('开始游戏', data);
        this.initAlaysPlayData(data);
        this.dataTransfromtion();
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        var d = vo.GameData.balance - vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line;
        ui.balanceLabel.text = '￥' + GameManager.numberToCommonStr(d);
        ui.gameScence.setResSymbols();
        egret.setTimeout(function () {
            ui.startBtn.visible = false;
            ui.startBtn.enabled = true;
            ui.stopBtn.visible = true;
        }, this, 210);
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
        SoundManager.getInstance().stopEffect(this.startChanel);
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.startBtn.visible = true;
        ui.stopBtn.visible = false;
        ui.updataText(false);
        if (vo.GameData.autoPlayCount <= 0 && !GameConfig.freePlay) {
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
        var winarr = resultData.Value.Main.WinResults;
        //测试5同类
        // winarr.push({
        //  Bet:500,
        //  Data:{Line:1},
        //  Positions:[{X:0,Y:1},{X:1,Y:1},{X:2,Y:1},{X:3,Y:1},{X:4,Y:1}],
        //  Symbol: "M5",
        //  SymbolCount: 5
        // });
        var fiveArr = this.getFiveArr(winarr);
        console.log('fiveArr', fiveArr.length, fiveArr);
        /**免费游戏中更多次数 */
        /**判断免费 游戏中有没有钻石出现 */
        var zuanshi = [];
        for (var i = 0; i < winarr.length; i++) {
            if (winarr[i].Type == 'Bouns') {
                var obj = {
                    'Positions': winarr[i].Positions,
                    'Bouns': winarr[i].Multipliers[0]
                };
                zuanshi.push(obj);
                resultData.Value.Main.WinResults.splice(i, 1);
            }
        }
        var t = (GameConfig.speedPlay || winarr.length == 1) ? 900 : 1600 * (winarr.length + 1);
        if (fiveArr.length == 0) {
            if (winarr.length > 0) {
                if (GameConfig.freePlay && zuanshi.length > 0) {
                    /**免费游戏中，中了大钻，本次旋转的金币乘以当前大钻的倍数 */
                    ui.startBtn.enabled = false;
                    ui.stopBtn.enabled = false;
                    ui.gameScence.freeDimaoCtr(zuanshi);
                    return;
                }
                else if (GameConfig.freePlay && vo.GameData.freePlayCount != vo.GameData.resultData.Actions.freeslot.count) {
                    console.log(vo.GameData.freePlayCount, vo.GameData.resultData.Actions.freeslot.count);
                    /**判断是不是免费游戏 */
                    ui.gameScence.moreFreeNum();
                    return;
                }
                else if (resultData.Actions != null && (Object.keys(resultData.Actions).length > 0 && !GameConfig.freePlay)) {
                    console.log('红利游戏');
                    ui.freeJudge(winarr);
                    // GameConfig.freePlay = true;
                    // ui.startBtn.enabled = false;
                    // ui.stopBtn.enabled = false;
                    // vo.GameData.freeSymbols = vo.GameData.resultData.Value.Main.ReelSymbols;
                    // /**先排除掉免费游戏的显示，先把中奖的叠加完之后消失在 */
                    // ui.showWin(winarr);
                    // ui.gameScence.pent.visible = true;
                    // ui.freeeEntry();
                    // ui.gameScence.pent.freeGameEntry(winarr);
                    // ui.infoBtn.enabled = false;
                    // ui.autoItem.autoBtn.enabled = false;
                    // ui.autoItem.sopAutoBtn.enabled = false;
                    // ui.speedOffBtn.enabled = false;
                    // ui.speedOnBtn.enabled = false;
                    // ui.topMask.visible = true;
                    // ui.bottomMask.visible = true;
                    return;
                }
                ui.showWin(winarr, function (t) {
                    _this.timer = egret.setTimeout(function () {
                        _this.doNext();
                    }, _this, t);
                });
            }
            else {
                this.timer = egret.setTimeout(function () {
                    _this.doNext();
                }, this, 200);
            }
        }
        else {
            console.log('五个一样的', fiveArr);
            ui.showFiveAimation(fiveArr, function () {
                ui.showWin(winarr, function () {
                    _this.timer = egret.setTimeout(function () {
                        _this.doNext();
                    }, _this, t);
                });
            });
        }
        this.isStart = true;
    };
    /**当有免费游戏的时候冻结auto的次数，当免费游戏结束后在继续auto */
    GameManager.prototype.doNext = function () {
        if (!this.isStart)
            return;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        GameManager.getInstance().gameState = GameType.GameState.STOP;
        ui.updataUI();
        console.log('doNext', GameConfig.freePlay, vo.GameData.autoPlayCount, vo.GameData.freePlayCount, GameConfig.autoPlay);
        if ((vo.GameData.autoPlayCount > 0 && !GameConfig.freePlay) || (GameConfig.freePlay && vo.GameData.freePlayCount > 0)) {
            ui.hideWin();
            this.startGame();
        }
        else {
            if (GameConfig.freePlay) {
                ui.gameScence.slotSettlement();
                return;
            }
            else if (!GameConfig.autoPlay) {
                ui.updataBtn();
                ui.infoBtn.enabled = true;
                ui.autoItem.autoBtn.enabled = true;
                ui.speedOffBtn.enabled = true;
                ui.speedOnBtn.enabled = true;
                ui.topMask.visible = false;
                ui.bottomMask.visible = false;
                ui.startBtn.enabled = true;
                ui.stopBtn.enabled = true;
            }
            ui.autoItem.autoBtn.visible = true;
            ui.autoItem.autoStopGroup.visible = false;
            ui.autoItem.sMainGroup.visible = true;
            if (GameConfig.autoPlay) {
                console.log('次数不足', GameConfig.autoPlay);
                vo.GameData.autoPlayCount = 0;
                GameConfig.autoPlay = false;
                if (!this.isStart)
                    return;
                core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
                var uis = core.UIManager.getUI(core.UIConst.StipsUI);
                uis.showHasBtn(1, '', '自动游戏已停止。\n您想重复自动游戏吗？', function () {
                    core.UIManager.closeUI(core.UIConst.StipsUI);
                    ui.autoItem.resetDo();
                }, function () {
                    ui.hideWin();
                    ui.updataBtn();
                    ui.infoBtn.enabled = true;
                    ui.autoItem.autoBtn.enabled = true;
                    ui.speedOffBtn.enabled = true;
                    ui.speedOnBtn.enabled = true;
                    ui.topMask.visible = false;
                    ui.bottomMask.visible = false;
                    ui.startBtn.enabled = true;
                    ui.stopBtn.enabled = true;
                    ui.startBtn.enabled = true;
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
        ui.showHasBtn(0, '', '余额不足，是否要存款?', function () {
            core.UIManager.closeUI(core.UIConst.StipsUI);
        }, function () {
            core.UIManager.closeUI(core.UIConst.StipsUI);
        });
    };
    GameManager.prototype.startGame = function () {
        var _this = this;
        /**ceshi */
        if (!this.isStart)
            return;
        if (!GameConfig.freePlay && GameConfig.autoPlay && vo.GameData.autoPlayCount == 0)
            return;
        if (GameConfig.freePlay && vo.GameData.freePlayCount == 0)
            return;
        // if (!this.isStart || sockets.SocketMananger.getInstance().netState < 0) return;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        ui.hideWin();
        if (vo.GameData.balance < vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line) {
            GameConfig.autoPlay = false;
            vo.GameData.autoPlayCount = 0;
            this.noMoney();
        }
        else {
            if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
                GameManager.getInstance().gameState = GameType.GameState.PLAYING;
                if (GameConfig.autoPlay && !GameConfig.freePlay && vo.GameData.autoPlayCount < 100) {
                    vo.GameData.autoPlayCount -= 1;
                    ui.autoItem.autoCountLabel.text = vo.GameData.autoPlayCount + '';
                }
                if (GameConfig.freePlay) {
                    vo.GameData.freePlayCount -= 1;
                    ui.gameScence.freeNum.text = vo.GameData.freePlayCount + '';
                }
                egret.clearTimeout(this.timer);
                var winmoney = 0;
                winmoney = 0;
                console.log(winmoney);
                ui.gameScence.startReel();
                ui.resetReward(winmoney);
                Commond.sendPlay();
                SoundManager.getInstance().playEffect(SoundConst.START);
                SoundManager.getInstance().playMusic(SoundConst.rollSounds).then(function (channel) {
                    _this.startChanel = channel;
                });
                this.isStart = false;
                ui.startBtn.visible = true;
                ui.startBtn.enabled = false;
                ui.stopBtn.visible = false;
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
        if (ui.intoFreeBtn.visible) {
            return;
        }
        ;
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
        console.log(winarr);
        for (var i = 0; i < winarr.length; i++) {
            var data = winarr[i];
            if (data.Positions.length == 6) {
                reslutArr.push(data);
                console.log('+++++++++++');
                break;
            }
        }
        console.log('return', reslutArr);
        return reslutArr;
    };
    return GameManager;
}(egret.EventDispatcher));
__reflect(GameManager.prototype, "GameManager");
//# sourceMappingURL=GameManager.js.map