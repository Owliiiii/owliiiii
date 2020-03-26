class GameManager extends egret.EventDispatcher {
	/**
	 * 游戏状态
	 */
	public gameState: number = 0;

	/**
	 * 是否能开始
	 */
	public isStart: boolean = true;
	public constructor() {
		super();
	}
	private static _instance: GameManager;
	public static getInstance(): GameManager {
		if (!this._instance) {
			this._instance = new GameManager();
		}
		return this._instance;
	}
	public init(): void {
		GameController.getInstance().clearRedis();
		GameConfig.gameModle = GameType.GameModule.trueModle;
		core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_INIT, this.onNetgGmeInit, this);
		core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_PLAY, this.onNetGamePlay, this);
		core.NotifyManager.getInstance().registerNotify(core.NotifyConst.LOGIC_ROUNDOVER, this.onLogicGameOver, this);
		core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_TOUCHTOKEN, this.onNetTouchToken, this);
		sockets.SocketMananger.getInstance().connectServer(() => {
			this.initData();
			Commond.sendInitGame();
		}, this);

		//初始化监听
		window.addEventListener("message", (receiveMessage) => {
			//console.log('r--->' + receiveMessage.data);
			if (receiveMessage.data == 'closedesui') return;
			if (receiveMessage.data == 'loadhide') return;
			if (receiveMessage.data == 'loadshow') return;
			core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Tip);
			let ui: StipsUI = core.UIManager.getUI(core.UIConst.StipsUI);
			ui.showConfirBtn(receiveMessage.data, () => {
				core.UIManager.closeUI(core.UIConst.StipsUI);
				if (sockets.SocketMananger.getInstance().netState != 0) {
					NetUI.getInstance().showNetting();
				}
			});
		});
	}
	/**
	 * 初始化数据
	 */
	public initData(): void {
		vo.GameData.slotInfo = new vo.SlotInfo();
		vo.GameData.slotInfo.readData(null);
		vo.GameData.slotInfo.readPlayAction(null);
	}
	/**
	 * 初始化游戏 
	 */
	public onNetgGmeInit(data: any): void {
		let d: any = data;
		this.initAlysInitialData(d);

		core.LoadManger.getInstance().loadGroup(core.UIConst.NomalLoadingUI, 'main', () => {
			core.UIManager.openUI(core.UIConst.MainScenceUI);
		}, this);
		// this.initAlysInitialData(d);
	}
	/**
	 * 解析初始化数据
	 * @param data 数据
	 */
	private initAlysInitialData(data: any): void {
		vo.GameData.initData = JSON.parse(JSON.stringify(data));
		vo.GameData.balance = parseFloat(data.Value.TokenInfo.Balance + '');
		vo.GameData.reelArr.length = 0;
		vo.GameData.slotInfo.resultArr = data.Value.Geninit.Main.ReelSymbols;
		vo.GameData.initData = data;
		vo.GameData.payData = data.Value.Paytables.Main.PayData;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);

		if (Object.keys(data.Actions).length > 0 && ui) {
			ui.judgeInit(JSON.parse(JSON.stringify(data)));
		}
	}

	//开始游戏
	public onNetGamePlay(data: any): void {
		this.initAlaysPlayData(data);

		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		let d: number = vo.GameData.balance - vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line;
		ui.balanceLabel.text = '￥' + GameManager.numberToCommonStr(d);

		egret.setTimeout(() => {
			ui.startBtn.visible = false;
			ui.startBtn.enabled = true;
			ui.stopBtn.visible = true;
		}, this, 310);
		if (Object.keys(data.Actions).length > 0) {
			/**当红利游戏选择了一次后 */
			if (data.ActionType != GameType.GameType.slot) {
				ui.chooseTools.judgeInit(1)
				return;
			}
		}
		/**第二次选择 */
		if (Object.keys(data.Actions).length == 0) {
			if (data.ActionType == GameType.GameType.treasure2) {
				ui.chooseTools.judgeInit(2);
				return;
			}
		}

		if (!GameConfig.speedPlay) {
			SoundManager.getInstance().playEffect(SoundConst.REELROLL);
		}
		// ui.gameScence.startReel();
		ui.gameScence.startResult();
	}

	public loopChanel: egret.SoundChannel;
	public isupdataMoney:boolean = true;
	private initAlaysPlayData(data: any): void {
		vo.GameData.resultData = JSON.parse(JSON.stringify(data));
	}
	//10S改变  money
	public onNetTouchToken(data: any): void {
		// vo.GameData.matchInfo.money = data.Value.Balance - vo.GameData.matchInfo.allScore / vo.GameData.matchInfo.bili;
		// core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_BALANCE);
		vo.GameData.initData.Value.TokenInfo.Balance = data.Value.Balance;
		if (this.isupdataMoney) {
			vo.GameData.initData.Value.TokenInfo.Balance = data.Value.Balance;
			vo.GameData.balance = data.Value.Balance;
			this.dispatchEventWith(SetEvent.SET_BALANCE_CHANGE);
		}

	}

	/**
	 * 游戏正式结束通知
	 */
	public onLogicGameOver(): void {
		console.log('游戏结束');

		this.gameState = GameType.GameState.STOP;
		this.isStart = true;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);

		ui.startBtn.visible = true;
		ui.stopBtn.visible = false;
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
		this.isupdataMoney = true;
		let resultData: any = vo.GameData.resultData;
		let winarr: Array<any> = resultData.Value.SpinResult.Main.WinResults;
		let fiveArr: Array<any>;
		// if(winarr){
		// 	fiveArr = this.getFiveArr(winarr);
		// }else{
		// 	fiveArr.length = 0;
		// }
		// fiveArr = this.getFiveArr(winarr);
		// console.log("fiveArr.length == " + fiveArr.length);


		let totalBet: number = vo.GameData.betScoreArr[vo.GameData.betIndex];//resultData.Value.SpinResult.TotalBet;
		// let totalWin: number = resultData.Value.SpinResult.TotalWin;
		let winmoney: number = resultData.Value.Dollar;
		let b: number = winmoney / totalBet;
		// b=50;


		let t: number = vo.GameData.autoPlayCount > 0 && GameConfig.speedPlay ? 1200 : 1200 * winarr.length;
		GameConfig.startTime = t;
		if (b >= 11) {
			GameConfig.startTime = 5900;
		}
		// if (fiveArr.length == 0) {
		if (winarr.length > 0) {
			if (winarr.length == 1) {
				ui.middleLabel.visible = false;
				ui.leftLabel.visible = true;
				ui.rightLabel.visible = true;
			} else {
				ui.middleLabel.visible = true;
				ui.middleLabel.text = "总奖金:￥" + vo.GameData.resultData.Value.Dollar.toFixed(2);
				ui.leftLabel.visible = false;
				ui.rightLabel.visible = false;
			}
			ui.showWin(winarr);
			egret.setTimeout(() => {
				this.doNext();
			}, this, GameConfig.startTime);
		}
		else {
			ui.middleLabel.text = "点击旋转以开始";
			egret.setTimeout(() => {
				this.doNext();
			}, this, 200);
		}
		// }
		// else { //五个一样
		// 	ui.showFiveAimation(fiveArr[0], () => {
		// 		ui.showWin(winarr);
		// 		egret.setTimeout(() => {
		// 			this.doNext();
		// 		}, this, t);
		// 	});
		// }

	}

	public doNext(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		GameManager.getInstance().gameState = GameType.GameState.STOP;
		ui.updataUI();
		if (vo.GameData.autoPlayCount > 0) {
			if (!GameConfig.hongli) {
				console.log("自动游戏无红利");
				ui.hideWin();
				this.startGame();
			} else {
				console.log("自动游戏有红利");
			}
		}
		else {		//不是自动模式或者自动模式最后一把
			if (GameConfig.autoPlay) {
				console.log("自动游戏最后一把");
				if (GameConfig.hongli) {
					console.log("自动游戏最后一把开出红利");
					ui.autoItem.autoBtn.visible = false;
					ui.autoItem.autoStopGroup.visible = true;
					ui.autoItem.sMainGroup.visible = true;
				} else {
					ui.autoItem.autoBtn.visible = true;
					ui.autoItem.autoStopGroup.visible = false;
					ui.autoItem.sMainGroup.visible = true;
				}
				vo.GameData.autoPlayCount = 0;
				GameConfig.autoPlay = false;
				if (!this.isStart) return;
				core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
				GameConfig.emptyPlay = false;
				let uis: StipsUI = core.UIManager.getUI(core.UIConst.StipsUI);
				uis.showAutoBtn(0, '自动游戏已停止。\n您想重复自动游戏吗？', () => {
					core.UIManager.closeUI(core.UIConst.StipsUI);
					ui.autoItem.resetDo();
				}, () => {
					core.UIManager.closeUI(core.UIConst.StipsUI);
					GameConfig.emptyPlay = true;
				});
			} else { //不是自动模式开出红利 √
				if (GameConfig.hongli) {
					console.log("手动有红利");
					ui.autoItem.autoBtn.visible = true;
					ui.autoItem.autoStopGroup.visible = false;
					ui.autoItem.sMainGroup.visible = true;

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
				} else {
					console.log("手动无红利")
					if (GameConfig.alwaysGame) {
						GameConfig.autoPlay = true;
						vo.GameData.autoPlayCount = 9999;
					}
				}
			}
		}
	}
	public isJIxuAuto(): void {
		// if(){
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.autoItem.autoBtn.visible = true;
		ui.autoItem.autoStopGroup.visible = false;
		ui.autoItem.sMainGroup.visible = true;
		ui.autoItem.sopAutoBtn.enabled = true;
		if (GameConfig.autoPlay) {
			vo.GameData.autoPlayCount = 0;
			GameConfig.autoPlay = false;
			if (!this.isStart) return;
			core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
			GameConfig.emptyPlay = false;
			let uis: StipsUI = core.UIManager.getUI(core.UIConst.StipsUI);
			uis.showAutoBtn(0, '自动游戏已停止。\n您想重复自动游戏吗？', () => {
				core.UIManager.closeUI(core.UIConst.StipsUI);
				ui.autoItem.resetDo();
			}, () => {
				core.UIManager.closeUI(core.UIConst.StipsUI);
				GameConfig.emptyPlay = true;
			});
		}
		// }
	}

	/**
	 * 没钱
	 */
	public noMoney(): void {
		core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
		let mui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		let ui: StipsUI = core.UIManager.getUI(core.UIConst.StipsUI);
		ui.showNotmoney(0, '余额不足，是否要存款?', () => {
			core.UIManager.closeUI(core.UIConst.StipsUI);
		}, () => {
			core.UIManager.closeUI(core.UIConst.StipsUI);
		});
	}



	public startGame(): void {
		if (!this.isStart) return;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.hideWin();
		this.isupdataMoney = false;
		if (vo.GameData.balance < vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line) {
			GameConfig.autoPlay = false;
			vo.GameData.autoPlayCount = 0;
			this.noMoney();
		}
		else {
			if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
				GameManager.getInstance().gameState = GameType.GameState.PLAYING;
				if (GameConfig.autoPlay) {
					// vo.GameData.autoPlayCount -= 1;

					if (GameConfig.alwaysGame) {
						//是直到环节
						ui.autoItem.alwaysLabel.visible = true;
						ui.autoItem.autoCountLabel.visible = false;
						vo.GameData.autoPlayCount = 9998;
						GameConfig.lastCount = vo.GameData.autoPlayCount;
					} else {
						vo.GameData.autoPlayCount -= 1;
						GameConfig.lastCount = vo.GameData.autoPlayCount;
						ui.autoItem.autoCountLabel.visible = true;
						ui.autoItem.alwaysLabel.visible = false;
						ui.autoItem.autoCountLabel.text = vo.GameData.autoPlayCount + '';
					}
				}
				let resultData: any = vo.GameData.resultData;
				let winmoney: number = 0;
				if (!resultData) {
					winmoney = 0;
				}
				else {
					winmoney = resultData.Value.Dollar;
				}
				ui.resetReward(winmoney);
				Commond.sendPlay();

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
			ui.gameScence.startReel();
		}
	}


	public stopGame(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.gameScence.stopReel();
		ui.stopBtn.visible = false;
		ui.startBtn.visible = true;

	}

	/**
	 * 数字转格式化字符，小数
	 */
	public static numberToCommonStr(n: any): string {
		let als: string = n + '';
		let arr: Array<string> = als.split('.');
		let s = arr[0];
		let sc: string = '';
		let cindex: number = 0;
		for (let i: number = s.length - 1; i >= 0; i--) {
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
	}



	/**
	 * 数字转格式化字符 整数
	 */
	public static numberToCommonStr1(n: any): string {
		let als: string = n + '';
		let arr: Array<string> = als.split('.');
		let s = arr[0];
		let sc: string = '';
		let cindex: number = 0;
		for (let i: number = s.length - 1; i >= 0; i--) {
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
	}

	/**
	 * 判断钱是否足够
	 */
	public getMoneyIsFull(): boolean {
		if (vo.GameData.balance >= vo.GameData.betScoreArr[vo.GameData.betIndex]) {
			return true;
		}

		return false;
	}

	/**
	 * 判断有无5同类
	 */
	public getFiveArr(winarr: Array<any>): Array<any> {
		let reslutArr: Array<any> = [];
		for (let i: number = 0; i < winarr.length; i++) {
			let data = winarr[i];
			if (data.Positions.length == 5) {
				reslutArr.push(data);
			}
		}
		return reslutArr;
	}
}


