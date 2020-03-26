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
		GameConfig.isData = true;
		// vo.GameData.payData = data.Value.Paytables.Main.PayData;
	}
	public chanel: egret.SoundChannel;
	public curtime:number=egret.getTimer();
	public stopMusic(): void {
		if (this.chanel) {
			this.chanel.stop();
			this.chanel = null;
		}
	}
	//开始游戏
	public onNetGamePlay(data: any): void {
		this.initAlaysPlayData(data);
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.balanceLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.balance);
		if (vo.GameData.resultData.ActionType != 'freeslot'&& (this.getFreeCount() <= 0) && !GameConfig.speedPlay && SoundManager.getInstance().effectOn && this.chanel == null && egret.getTimer()-this.curtime>400){
				this.curtime = egret.getTimer();
				SoundManager.getInstance().playMusic(SoundConst.REEL, 1).then((chanel) => {
					this.chanel = chanel;
				});
			}
		
		if (vo.GameData.resultData.ActionType == 'freeslot') {
			let c: number = (vo.GameData.resultData.Value.TotalActionCount - this.getFreeCount()) > 0 ? (vo.GameData.resultData.Value.TotalActionCount) - this.getFreeCount() : vo.GameData.allFreeCount;
			ui.free_Num.text = ""+ this.getFreeCount();
			// this.showTips('免费旋转第' + c + '次，' + '共' + vo.GameData.allFreeCount + '次');
		}
		egret.setTimeout(() => {
			ui.startBtn.visible = false;
			ui.startBtn.enabled = true;
			ui.stopBtn.visible = true;
		}, this, 210);
		ui.gameScence.startResult();
	}

	public loopChanel: egret.SoundChannel;

	private initAlaysPlayData(data: any): void {
		vo.GameData.resultData = JSON.parse(JSON.stringify(data));
		vo.GameData.initData.Value.Actions = data.Value.Actions;
		
	}
	//10S改变  money
	public onNetTouchToken(data: any): void {
		// vo.GameData.matchInfo.money = data.Value.Balance - vo.GameData.matchInfo.allScore / vo.GameData.matchInfo.bili;
		// core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_BALANCE);
	}

	/**
	 * 游戏正式结束通知
	 */
	public onLogicGameOver(): void {
		console.log('游戏结束');
		GameConfig.isData = false;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		this.gameState = GameType.GameState.STOP;
		vo.GameData.allFreeCount = vo.GameData.resultData.Value.TotalActionCount;
		console.log("免费次数 === " + this.getFreeCount());
		if(this.getFreeCount() == 0 && vo.GameData.resultData.ActionType == 'freeslot'){
			//免费游戏结束弹窗

			GameConfig.autoPlay = false;
			vo.GameData.autoPlayCount = 0;
			ui.endFree();
		}
		this.isStart = true;
		if(!GameConfig.autoPlay && this.getFreeCount() <= 0){		//this.getFreeCount() > 0
			ui.startBtn.visible = true;
			ui.stopBtn.visible = false;
			ui.infoBtn.enabled = true;
			ui.topMask.visible = false;
			ui.setBar.enabled = true;
			ui.bottomMask.visible = false;
			ui.updataText(false);
			ui.updataBtn();
			ui.autoItem.autoBtn.enabled = true;
			if(ui.autoItem.autoBtn.visible){
						if (GameManager.getInstance().gameState == GameType.GameState.STOP){
							ui.autoItem.autoText_an.visible = false;
							ui.autoItem.autoText_mode.visible = true;
						}else{
							ui.autoItem.autoText_an.visible = true;
							ui.autoItem.autoText_mode.visible = false;
						}
					}else{
						ui.autoItem.autoText_an.visible = false;
						ui.autoItem.autoText_mode.visible = false;
					}
			ui.speedOffBtn.enabled = true;
			ui.speedOnBtn.enabled = true;
			if(!GameConfig.speedPlay){	//没开快速
				if(!ui.speedOffBtn.enabled){
					ui.speedOffTxt.visible = false;
				}else{
					ui.speedOffTxt.visible = true;
				}
			}else{		//开快速
				if(!ui.speedOnBtn.enabled){
					ui.speedOnTxt.visible = false;
				}else{
					ui.speedOnTxt.visible = true;
				}
			}
		}
		
		vo.GameData.initData.Value.TokenInfo.Balance = vo.GameData.resultData.Value.Balance;
		vo.GameData.balance = vo.GameData.initData.Value.TokenInfo.Balance;
		ui.balanceLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.balance);
		let resultData: any = vo.GameData.resultData;
		let winarr: Array<any> = resultData.Value.SpinResult.Main.WinResults;
		let fiveArr: Array<any> = [];
		if(winarr){
			fiveArr = this.getFiveArr(winarr);
		}else{
			fiveArr.length = 0;
		}
		fiveArr = this.getFiveArr(winarr);
		// console.log("fiveArr.length == " + fiveArr.length);


		//五个一样
		this.stopMusic();
		if(fiveArr.length == 0){

			if (winarr.length > 0) {
				let fourArr: Array<any> = [];
				fourArr = this.getFishArr(winarr);
				if(fourArr.length != 0){
					ui.showFourFish(fourArr[0],()=>{
						ui.showWin(winarr);
						egret.setTimeout(() => {
							this.doNext();
						}, this, 1200 * winarr.length);
					});
				}else{
					ui.showWin(winarr);
					egret.setTimeout(() => {
						this.doNext();
					}, this, 1200 * winarr.length);
				}
			}
			else {
				this.doNext();
			}
		}else{
			ui.showFiveAimation(fiveArr[0], () => { //五同
				ui.showWin(winarr);
				egret.setTimeout(() => {
					this.doNext();
				}, this, 2000);
			});
		}
	}
	public maoziMC5: egret.MovieClip;
	public playMusic(music:string){
		if (SoundManager.getInstance().effectOn && this.chanel == null) {
					SoundManager.getInstance().playMusic(music, 1).then((chanel) => {
					this.chanel = chanel;
				});
			}
	}

	/**
	 * 判断有无4条鱼
	 */
	public getFishArr(winarr: Array<any>): Array<any> {
		let reslutArr: Array<any> = [];
		for (let i: number = 0; i < winarr.length; i++) {
			let data = winarr[i];
			if (data.Symbol == "M4" && data.SymbolCount == 4) {
				reslutArr.push(data);
				// return true;
			}
		}
		return reslutArr;
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

	public doNext(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		GameManager.getInstance().gameState = GameType.GameState.STOP;
		ui.updataUI();
		//开启免费游戏那局的状态
		if (vo.GameData.autoPlayCount > 0) {	//自动游戏开启
			if(this.getFreeCount() <= 0){	//没有在免费模式
				if(!GameConfig.freeGame){
					console.log("自动游戏无免费游戏");
					ui.hideWin();
					this.startGame();
				}else{
					console.log("自动游戏有免费游戏");
					
				}
			}else{
				//免费游戏 + 自动游戏——> 弹窗
				
			}
		}
		else {	//手动游戏开启
			//手动时 按钮的属性
			// ui.autoItem.autoBtn.visible = true;
			// ui.autoItem.autoStopGroup.visible = false;
			// ui.autoItem.sMainGroup.visible = true;
			if (GameConfig.autoPlay){
				console.log("自动游戏最后一把");
				if(GameConfig.freeGame){
					console.log("自动游戏最后一把开出红利");
					ui.autoItem.autoBtn.visible = false;
					ui.autoItem.autoText_an.visible = false;
					ui.autoItem.autoText_mode.visible = false;
					ui.autoItem.autoStopGroup.visible = true;
					ui.autoItem.sMainGroup.visible = true;
				}else{
					ui.autoItem.autoBtn.visible = true;
					if(ui.autoItem.autoBtn.visible){
						if (GameManager.getInstance().gameState == GameType.GameState.STOP){
							ui.autoItem.autoText_an.visible = false;
							ui.autoItem.autoText_mode.visible = true;
						}else{
							ui.autoItem.autoText_an.visible = true;
							ui.autoItem.autoText_mode.visible = false;
						}
					}else{
						ui.autoItem.autoText_an.visible = false;
						ui.autoItem.autoText_mode.visible = false;
					}
					ui.autoItem.autoStopGroup.visible = false;
					ui.autoItem.sMainGroup.visible = true;
				}
				vo.GameData.autoPlayCount = 0;
				GameConfig.autoPlay = false;
				console.log("this.isStart  == " + this.isStart);
				if (!this.isStart) return;
				core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
				GameConfig.emptyPlay = false;
				let uis: StipsUI = core.UIManager.getUI(core.UIConst.StipsUI);
				uis.showHasBtn(0, '', '自动游戏已停止。\n您想重复自动游戏吗？', () => {
					core.UIManager.closeUI(core.UIConst.StipsUI);
					ui.autoItem.resetDo();
				}, () => {
					core.UIManager.closeUI(core.UIConst.StipsUI);
					let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
					GameConfig.alwaysGame = false;
					//点了否按钮状态要亮
					if(GameManager.getInstance().gameState == GameType.GameState.STOP){
					
					ui.startBtn.visible = true;
					ui.stopBtn.visible = false;
					ui.updataText(false);
					if (vo.GameData.autoPlayCount <= 0) {
						ui.updataBtn();
						ui.infoBtn.enabled = true;
						ui.autoItem.autoBtn.enabled = true;
						if(ui.autoItem.autoBtn.visible){
							ui.autoItem.autoText_mode.visible = true;
							ui.autoItem.autoText_an.visible = false;
						}else{
							ui.autoItem.autoText_mode.visible = false;
							ui.autoItem.autoText_an.visible = false;
						}
						
						ui.speedOffBtn.enabled = true;
						ui.speedOnBtn.enabled = true;
						if(!GameConfig.speedPlay){	//没开快速
							if(!ui.speedOffBtn.enabled){
								ui.speedOffTxt.visible = false;
							}else{
								ui.speedOffTxt.visible = true;
							}
						}else{		//开快速
							if(!ui.speedOnBtn.enabled){
								ui.speedOnTxt.visible = false;
							}else{
								ui.speedOnTxt.visible = true;
							}
						}
						ui.topMask.visible = false;
						ui.setBar.enabled = true;
						ui.bottomMask.visible = false;
					}
				}
					GameConfig.emptyPlay = true;
				});
			}else{
				//手动开出免费游戏
				if(GameConfig.freeGame){
					
					ui.startBtn.visible = true;
					ui.startBtn.enabled = false;
					ui.stopBtn.visible = false;
					ui.infoBtn.enabled = false;
					ui.betSubBtn.enabled = ui.betAddBtn.enabled = false;
					ui.lineSubBtn.enabled = ui.lineAddBtn.enabled = false;
					ui.autoItem.autoBtn.enabled = false;
					ui.autoItem.autoText_mode.visible = false;
					ui.autoItem.autoText_an.visible = true;
					ui.speedOffBtn.enabled = false;
					ui.speedOnBtn.enabled = false;
					if(!GameConfig.speedPlay){	//没开快速
						if(!ui.speedOffBtn.enabled){
							ui.speedOffTxt.visible = false;
						}else{
							ui.speedOffTxt.visible = true;
						}
					}else{		//开快速
						if(!ui.speedOnBtn.enabled){
							ui.speedOnTxt.visible = false;
						}else{
							ui.speedOnTxt.visible = true;
						}
					}
					ui.topMask.visible = true;
					ui.setBar.enabled = false;
					ui.bottomMask.visible = true;
				}else{
					console.log("手动无红利")
					if(GameConfig.alwaysGame){
						GameConfig.autoPlay = true;
						vo.GameData.autoPlayCount = 9999;
					}
				}
			}


		}
		if(this.getFreeCount() > 0 && !GameConfig.freeGame){
				ui.hideWin();
				this.startGame();
		}
		if(this.getFreeCount() == 0 && vo.GameData.resultData.ActionType == 'freeslot'){
			//显示最后的金币动画
			console.log("免费游戏结束");
			GameManager.getInstance().gameState = GameType.GameState.STOP;
			vo.GameData.allFreeCount = vo.GameData.TotalActionCount = vo.GameData.resultData.Value.TotalActionCount = 0;
			
			
			//如果是自动游戏———>弹窗
			if(vo.GameData.autoPlayCount > 0 && GameConfig.autoPlay){
				console.log("自动游戏弹窗 == " + vo.GameData.autoPlayCount);
			}else{	//如果不是自动游戏———>按钮状态等
				console.log("不是自动游戏按钮状态等 == " + vo.GameData.autoPlayCount);
			}

		}
	}

	/**
	 * 没钱 
	 */ 
	public noMoney(): void {
		core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
		let ui: StipsUI = core.UIManager.getUI(core.UIConst.StipsUI);
		let mui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.shows(0, '余额不足，无法下所请求的赌注。', '请下一个较低的赌注，或访问 出纳柜台 进行存款。', () => {
			core.UIManager.closeUI(core.UIConst.StipsUI);
		});
	}

	public isJIxuAuto():void{
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
			ui.autoItem.autoBtn.visible = true;
			if(ui.autoItem.autoBtn.visible){
				if (GameManager.getInstance().gameState == GameType.GameState.STOP){
					ui.autoItem.autoText_an.visible = false;
					ui.autoItem.autoText_mode.visible = true;
				}else{
					ui.autoItem.autoText_an.visible = true;
					ui.autoItem.autoText_mode.visible = false;
				}
			}else{
				ui.autoItem.autoText_an.visible = false;
				ui.autoItem.autoText_mode.visible = false;
			}
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
					uis.showHasBtn(0, '', '自动游戏已停止。\n您想重复自动游戏吗？', () => {
						core.UIManager.closeUI(core.UIConst.StipsUI);
						ui.autoItem.resetDo();
					}, () => {
						core.UIManager.closeUI(core.UIConst.StipsUI);
						GameConfig.emptyPlay = true;
					});
				}
	}



	public startGame(isUsolt:boolean = false): void {
		//开始
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		if(isUsolt){
			Commond.sendPlay(1); //
			ui.gameScence.startReel();
			return;
		}
		if (!this.isStart) return;
		// let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.hideWin();
		if (this.getFreeCount() > 0) {
			Commond.sendPlay(1);
		}else{
			if (vo.GameData.balance < vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line) {
				GameConfig.autoPlay = false;
				vo.GameData.autoPlayCount = 0;
				this.noMoney();
			}
			else {
				if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
					GameManager.getInstance().gameState = GameType.GameState.PLAYING;
					if (GameConfig.autoPlay ) {
						if(GameConfig.alwaysGame){
							//是直到环节
							vo.GameData.autoPlayCount = 9998;
							ui.autoItem.autoCountLabel.text = "直到环节";
							GameConfig.lastCount = vo.GameData.autoPlayCount;
						}else{
							vo.GameData.autoPlayCount -= 1;
							ui.autoItem.autoCountLabel.text = vo.GameData.autoPlayCount + '';
							GameConfig.lastCount = vo.GameData.autoPlayCount;
						}
					}
					Commond.sendPlay(0);
				}
			}
		}
			let resultData: any = vo.GameData.resultData;
			let winmoney: number = 0;
			if (!resultData) {
				winmoney = 0;
			}
			else {
				winmoney = resultData.Value.TotalWinDollar;
			}
			ui.setReward(0);
			this.isStart = false;
			ui.startBtn.visible = true;
			ui.startBtn.enabled = false;
			ui.stopBtn.visible = false;
			ui.infoBtn.enabled = false;
			ui.betSubBtn.enabled = ui.betAddBtn.enabled = false;
			ui.lineSubBtn.enabled = ui.lineAddBtn.enabled = false;
			ui.autoItem.autoBtn.enabled = false;
			if(GameConfig.autoPlay){
				ui.autoItem.autoText_mode.visible = false;
				ui.autoItem.autoText_an.visible = false;
			}else{
				ui.autoItem.autoText_mode.visible = false;
				ui.autoItem.autoText_an.visible = true;
			}
			
			ui.speedOffBtn.enabled = false;
			ui.speedOnBtn.enabled = false;
			if(!GameConfig.speedPlay){	//没开快速
				if(!ui.speedOffBtn.enabled){
					ui.speedOffTxt.visible = false;
				}else{
					ui.speedOffTxt.visible = true;
				}
			}else{		//开快速
				if(!ui.speedOnBtn.enabled){
					ui.speedOnTxt.visible = false;
				}else{
					ui.speedOnTxt.visible = true;
				}
			}
			ui.topMask.visible = true;
			ui.setBar.enabled = false;
			ui.bottomMask.visible = true;

			ui.gameScence.startReel();
	}

	/**
	 * 判断当前还有多少次免费旋转
	 */
	public getFreeCount(): number {
		let arr: Array<any> = vo.GameData.initData.Value.Actions;
		if (!arr) return 0;
		let n: number = 0;
		for (let i: number = 0; i < arr.length; i++) {
			n += arr[i].remaining;
		}
		return n;
	}

	/**
	 * 判断当前一共获得多少次旋转
	 */
	public getAllFreeCount(): number {
		let arr: Array<any> = vo.GameData.initData.Value.Actions;
		if (!arr) return 0;
		let n: number = 0;
		for (let i: number = 0; i < arr.length; i++) {
			n += arr[i].count;
		}
		return n;
	}

	public stopGame(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		if(GameConfig.isData){
			ui.gameScence.stopReel();
			ui.stopBtn.visible = false;
			ui.startBtn.visible = true;
		}
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
}


