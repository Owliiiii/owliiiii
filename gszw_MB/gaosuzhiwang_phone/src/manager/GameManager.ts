class GameManager extends egret.EventDispatcher {
	/**
	 * 游戏状态
	 */
	public gameState: number = 0;
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
		GameConfig.gameModle = GameType.GameModule.falseModle;
		core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_INIT, this.onNetgGmeInit, this);
		core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_PLAY, this.onNetGamePlay, this);
		core.NotifyManager.getInstance().registerNotify(core.NotifyConst.LOGIC_ROUNDOVER, this.onLogicGameOver, this);
		core.NotifyManager.getInstance().registerNotify(core.NotifyConst.NET_TOUCHTOKEN, this.onNetTouchToken, this);
		core.NotifyManager.getInstance().registerNotify(core.NotifyConst.LOGIC_DATACHANGE, this.onLogicDataChange, this);
		this.addEventListener(SetEvent.SET_START, this.onSet, this);
		this.addEventListener(SetEvent.SET_STOP, this.onSet, this);
		core.LoadManger.getInstance().loadGroup(core.UIConst.NomalLoadingUI, 'main', () => {
			this.initData();
			sockets.SocketMananger.getInstance().connectServer(() => {
				Commond.sendInitGame();
			}, this);
		}, this);
		//初始化监听

		//初始化监听
		window.addEventListener("message", (receiveMessage) => {
			console.log('r--->' + receiveMessage.data);
			core.UIManager.openUI(core.UIConst.NetCloseUI,core.LayerManager.Layer_Tip);
			let ui: NetCloseUI = core.UIManager.getUI(core.UIConst.NetCloseUI);
			ui.shows(0, '连接断开，正在重新连接.', () => {
				window.location.href = window.location.href;
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
		NetUI.getInstance().hideNetting();
		let d: any = data;
		this.initAlysInitialData(d);
		core.UIManager.openUI(core.UIConst.MainScenceUI);
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.updataUI();
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
		this.dispatchEventWith(SetEvent.SET_BALANCE_CHANGE);
	}

	//开始游戏
	public onNetGamePlay(data: any): void {
		this.initAlaysPlayData(data);
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		let d: number = vo.GameData.balance - vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line;
		// ui.balanceLabel.text = '￥' + GameManager.numberToCommonStr(d);
		//ui.gameScence.startReel();
		ui.canStop();
		egret.setTimeout(() => {
			SetConst.isCanStopGame = true;
		}, this, 250);
	}

	private initAlaysPlayData(data: any): void {
		vo.GameData.resultData = JSON.parse(JSON.stringify(data));
	}
	//10S改变  money
	public onNetTouchToken(data: any): void {
		// vo.GameData.matchInfo.money = data.Value.Balance - vo.GameData.matchInfo.allScore / vo.GameData.matchInfo.bili;
		// core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_BALANCE);
	}


	public onLogicDataChange(data: any): void {

	}

	/**
	 * 游戏正式结束通知
	 */
	public onLogicGameOver(data: any): void {
		console.log('游戏结束');
		this.gameState = GameType.GameState.STOP;
		SetConst.isCanStopGame = false;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		vo.GameData.initData.Value.TokenInfo.Balance = vo.GameData.resultData.Value.Balance;
		vo.GameData.balance = vo.GameData.initData.Value.TokenInfo.Balance;
		this.dispatchEventWith(SetEvent.SET_BALANCE_CHANGE);
		let resultData: any = vo.GameData.resultData;
		let winarr: Array<any> = resultData.Value.SpinResult.Main.WinResults;
		let totalBet: number = resultData.Value.SpinResult.TotalBet;
		let totalWin: number = resultData.Value.SpinResult.TotalWin;
		let b: number = totalWin / totalBet;
		//b=8;
		//测试5同类
		// winarr.push({
		//  Bet:500,
		//  Data:{Line:1},
		//  Positions:[{X:0,Y:1},{X:1,Y:1},{X:2,Y:1},{X:3,Y:1},{X:4,Y:1}],
		//  Symbol: "M5",
		//  SymbolCount: 5
		// });
		let fiveArr: Array<any> = this.getFiveArr(winarr);
		let t: number = vo.GameData.autoPlayCount > 0 && SetConst.SPEED_PLAY ? 800 : 800 * winarr.length;
		if (b >= 50) {
			t = 12000;
		} else if (b >= 25) {
			t = 6000;
		}
		else if (b >= 6) {
			t = 5300;
		}
		else if (b >= 1.3) {
			t = 3000;
		}
		else {
			t = 3000;
		}
		if (fiveArr.length == 0) {
			if (winarr.length > 0) {
				ui.showWin(winarr);
				egret.setTimeout(() => {
					this.doNext();
				}, this, t);
			}
			else {
				egret.setTimeout(() => {
					this.doNext();
				}, this, 200);
			}
		}
		else {
			ui.showFiveAimation(fiveArr[0], () => {
				if (this.gameState == GameType.GameState.PLAYING) return;
				ui.showWin(winarr);
				egret.setTimeout(() => {
					this.doNext();
				}, this, t);
			});
		}


	}

	public rewardChannel:egret.SoundChannel;
	public startChannel:egret.SoundChannel;

	public stopchannel():void
	{
		if(this.rewardChannel)
		{
			this.rewardChannel.stop();
		}

		if(this.startChannel)
		{
			this.startChannel.stop();
		}
	}

	public its: number;
	public doNext(): void {
		if (this.gameState == GameType.GameState.PLAYING) return;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		let cAuto: boolean = SetConst.AUTO;
		SetConst.AUTO = SetConst.AUTO_COUNT > 0 ? true : false;
		ui.setUI.updataEnable(1);
		ui.setUI.updataBtnState();
		if (SetConst.AUTO) {
			GameManager.getInstance().dispatchEventWith(SetEvent.SET_START);
		}
		else {
			if (cAuto) {
				GameManager.getInstance().dispatchEventWith(SetEvent.SET_STOP, false, 1);
			}
			else {
				GameManager.getInstance().dispatchEventWith(SetEvent.SET_STOP);
			}
		}
	}

	private t: number = 0;
	public onSet(e: SetEvent): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		switch (e.type) {
			case SetEvent.SET_START:
				if (this.getMoneyIsFull()) {
					if (!SetConst.AUTO && !SetConst.SPEED_PLAY) {
						if (egret.getTimer() - this.t < 2000 && !SetConst.QUIKTIP_SHOW) {
							core.UIManager.openUI(core.UIConst.QukTipsUI, core.LayerManager.Layer_Top);
							SetConst.QUIKTIP_SHOW = true;
							return;
						}
						this.t = egret.getTimer();
					}
					GameManager.getInstance().gameState = GameType.GameState.PLAYING;
					Commond.sendPlay();
					ui.hideWin();
					this.stopchannel();
					ui.gameScence.startReel();
					
					vo.GameData.balance -= vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line;
					this.dispatchEventWith(SetEvent.SET_BALANCE_CHANGE);
					if (SetConst.AUTO) {
						SetConst.AUTO_COUNT -= 1;
						ui.setUI.autoButton.isPlay = true;
						ui.setUI.autoButton.countLabel.text = SetConst.AUTO_COUNT + '';
						SetConst.AUTO_SHOW = false;
						ui.setUI.autoSetCompoment.goUpdata();
						ui.setUI.tipLabel.alpha = 1;
						if (e.data != 1) {
							ui.setUI.tipLabel.text = '剩余' + SetConst.AUTO_COUNT + '剩余次数';
							ui.setUI.tipLabel.scaleX = ui.setUI.tipLabel.scaleY = 0.7;
						}
					}
					else {
						if (e.data != 1) {
							ui.setUI.tipLabel.text = '触摸转轴来提前停止';
							ui.setUI.tipLabel.scaleX = ui.setUI.tipLabel.scaleY = 0.7;
							ui.setUI.tipLabel.alpha = 1;
						}

					}
					SetConst.BETSET_SHOW = false;
					ui.setUI.betSetCompoment.goUpdata();
					ui.setUI.updataEnable(0);
					ui.setUI.tipLabel.visible = true;
					ui.setUI.rewardGroup.visible = false;
					this.dispatchEventWith(SetEvent.SET_AUTO_CHANGED);
				}
				else {
					ui.setUI.autoButton.isPlay = false;
					SetConst.AUTO = false;
					SetConst.AUTO_COUNT = 0;
					this.noMoney();
					this.dispatchEventWith(SetEvent.SET_AUTO_CHANGED);
				}
				break;
			case SetEvent.SET_STOP:

				if (e.data != 1) {
					if (ui.setUI.tipLabel.text != '自动游戏已停止') {
						ui.setUI.tipLabel.text = '滑动转轴或按旋转';
						ui.setUI.tipLabel.alpha = 1;
						ui.setUI.tipLabel.scaleX = ui.setUI.tipLabel.scaleY = 1;
					}
				}
				ui.setUI.autoButton.isPlay = false;
				this.dispatchEventWith(SetEvent.SET_AUTO_CHANGED);
				break;
		}
		ui.updataUI();
	}

	/**
	 * 没钱
	 */
	public noMoney(): void {
		core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
		let ui: StipsUI = core.UIManager.getUI(core.UIConst.StipsUI);
		let mui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.shows(0, '余额不足，是否要存款?', () => {

		});
	}

	/**
	 * 设置托管状态
	 */
	public setAutoPlay(auto: boolean): void {
		SetConst.AUTO = auto;
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


