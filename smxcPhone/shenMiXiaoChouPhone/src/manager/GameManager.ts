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
		// GameController.getInstance().clearRedis();
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
		sockets.SocketMananger.getInstance().connectServer(() => {
		this.initData();
		Commond.sendInitGame();
		}, this);

		//初始化监听

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
		
		core.LoadManger.getInstance().loadGroup(core.UIConst.NomalLoadingUI, 'main', () => {
			core.UIManager.openUI(core.UIConst.MainScenceUI,2);
		}, this);
		this.initAlysInitialData(d);
	}
	/**
	 * 解析初始化数据
	 * @param data 数据
	 */
	private initAlysInitialData(data: any): void {
		vo.GameData.balance = parseFloat(data.Value.TokenInfo.Balance + '');
		vo.GameData.reelArr.length = 0;
		let arr: Array<any> = data.Value.SpinConstraint.Main.Stripes;
		for (let i: number = 0; i < arr.length; i++) {
			vo.GameData.reelArr.push(arr[i].Symbols);
		}
		if(data.Value.Actions != null){
			vo.GameData.allFreeCount = data.Value.Actions.Count;
			GameConfig.freeNum = data.Value.Actions.Remain;
		}
		vo.GameData.slotInfo.resultArr = [];
		vo.GameData.slotInfo.resultArr = data.Value.Geninit.Main.ReelResults;
		vo.GameData.initData = data;
		GameConfig.Action = data.Action;
		GameConfig.isData = true;
	}

	//开始游戏
	public onNetGamePlay(data: any): void {
		this.initAlaysPlayData(data);
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		GameConfig.Action = vo.GameData.resultData.Action;
		
		ui.ruleIsShow = false;
		ui.setRule();
		// ui.gameScence.startReel();
		if (vo.GameData.resultData.ActionType == 'freeslot') {
			let c: number = (vo.GameData.allFreeCount - this.getFreeCount()) > 0 ? (vo.GameData.allFreeCount) - this.getFreeCount() :vo.GameData.allFreeCount;
			if(vo.GameData.allFreeCount != this.getFreeCount()){
				this.showTips('免费旋转第' + (c+1) + '次，' + '共' + vo.GameData.allFreeCount + '次');
			}
		}
		else {
			vo.GameData.slotInfo.allwin = 0;
			ui.setAllWin(vo.GameData.slotInfo.allwin);
			this.showTips('祝您好运!');
		}
	}

	private initAlaysPlayData(data: any): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		
		vo.GameData.slotInfo.resultArr = [];
		vo.GameData.slotInfo.resultArr = data.Value.Main.ReelResults;
		
		vo.GameData.initData.Value.Actions = data.Value.Actions;
		vo.GameData.resultData = data;
		ui.gameScence.startData();
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
		GameConfig.isData = false;
		if(!GameConfig.autoPlay && GameManager.getInstance().getFreeCount() <= 0){
			this.stopMusic();
		}
		GameManager.getInstance().gameState = GameType.GameState.STOP;
		console.log("正式结束");
		if(vo.GameData.resultData.Value.Actions != null){
			vo.GameData.allFreeCount = vo.GameData.resultData.Value.Actions.Count;
			GameConfig.freeNum = vo.GameData.resultData.Value.Actions.Remaining;
		}else{
			GameConfig.freeNum = 0;
			vo.GameData.allFreeCount = 0;
		}
		
		this.showTips('');
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		if(GameManager.getInstance().getFreeCount() <= 0){
			// ui.setBG(false);
		}
		ui.removeListeber();
		// ui.playBtn.label = '旋转';
		ui.playBtn.enabled = false;
		ui.playBtn0.enabled = false;
		let resultData: any = vo.GameData.resultData;
		let winarr: Array<any> = resultData.Value.Main.WinResults;
		let bonusNum:boolean = false;
		let lineNum:boolean = false;
		let bonusWin:boolean = false;
		let doublebonus:boolean = false;
		if (winarr.length > 0)//有奖励的情况
		{
			this.stopMusic();

			for(let i = 0;i < winarr.length;i++){
				if(winarr[i].Type == "Bonus"){	//获得免费旋转(免费旋转中又获得免费)
					if(vo.GameData.resultData.ActionType == 'slot'){
						//第一次进入免费
						bonusNum = true;
					}else{
						//免费又免费
						doublebonus = true;
					}
				}
				if(winarr[i].Type == "Line"){		//常规奖励
					lineNum = true;
				}
				if(winarr[i].Type == "BonusWin"){	//(免费旋转中获得2个C1)
					if(vo.GameData.resultData.ActionType == 'freeslot'){
						bonusWin = true;
					}
				}
			}
			if(bonusNum){
				this.getFreeSlot();
				return;
			}
			if(doublebonus){
				//神秘大奖+10次
				this.getFreeSlotAndReward();
				return;
			}
			if(bonusWin){
				this.getbigReward();
				return;
			}
			if(lineNum){
				this.getNomalReward();
				return;
			}
		}
		else {//无奖励的情况
			// this.doNext();
			egret.setTimeout(() => {
				this.doNext();
				console.log("this.isCanStop()333 ==== " + this.isCanStop());
				if (this.isCanStop()) {
					if(!GameConfig.autoPlay && GameManager.getInstance().getFreeCount() <= 0){
						this.stopMusic();
					}
				}
			}, this, 100);
		}
	}

	/**
	 * 获得免费旋转奖励和神秘大奖奖励
	 */
	public getFreeSlotAndReward(): void {

		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		let resultData: any = vo.GameData.resultData;
		this.showTips('获得神秘分散图案');
		let winarr: Array<any> = resultData.Value.Main.WinResults;
		let time:number = 0;
		let index:number = 0;
		let newWinarr:Array<any> = [];
		for(let i = 0 ; i < winarr.length;i++){
			if(winarr[i].Type = "Bonus"){
				newWinarr = winarr[i];
			}
		}
		for(var i = 0;i < winarr.length;i++){
				if(winarr[i].Type == "Line"){
					index++;
				}
			}
			
		let winMoney:number = resultData.Value.Main.TotalWin;
		let lcomplete: any = () => {
			let w: number = winMoney / GameConfig.bili;
			time = index *1800;
			console.log("INDEX === " + index);
			if(index != 0){
				this.getNomalReward1();
			}
			egret.setTimeout(()=>{
				this.showTips('赢得CNY ' + w +".00");
				vo.GameData.slotInfo.allwin += w;
				ui.setAllWin(vo.GameData.slotInfo.allwin);
				for(let j = 0;j  <winarr.length;j++ ){
					ui.showHouzi(winarr[j], this.doNext.bind(this),true);
				}
			},this,time);
		}
		
		ui.gameScence.showRewardGroup(newWinarr,winMoney, lcomplete.bind(this));
		SoundManager.getInstance().playEffect(SoundConst.BIG_REWARD);
	}

	/**
	 * 获得免费旋转奖励
	 */

	public getFreeSlot(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		let resultData: any = vo.GameData.resultData;
		let winarr: Array<any> = resultData.Value.Main.WinResults;
		let time:number = 0;
		let index:number = 0;
		for(var i = 0;i < winarr.length;i++){
				if(winarr[i].Type == "Line"){
					index++;
				}
			}
		this.showTips('获得神秘分散图案');
		let freeComplete: any = () => {
			SoundManager.getInstance().playEffect(SoundConst.FREE_SHOW);
			this.showTips('获得10次免费旋转');
			time = index *1800;
			// console.log(time + " == 有没有 == " + index);
			if(index != 0){
				this.getNomalReward1();
			}
			egret.setTimeout(()=>{
					ui.gameScence.showFreeSlot(() => {
					ui.hideHouzi();			
					egret.setTimeout(()=>{
						if(vo.GameData.resultData.ActionType != 'freeslot'){
							this.showTips('免费旋转第1次，共10次');
						}
					},this,1000);
					this.doNext();
				});
			},this,time);
		};
		for(let j = 0;j < winarr.length;j++ ){
			if(winarr[j].Type == "Bonus"){	//获得免费旋转
					ui.showHouzi(winarr[j], freeComplete.bind(this));
				}	
		}
	}
	
	/**
	 * 获得神秘大奖奖励
	 */
	public getbigReward(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		let resultData: any = vo.GameData.resultData;
		let time:number = 0;
		let index:number = 0;
		// let testWinarr: Array<any> = [];
		this.showTips('获得神秘分散图案');
		let winarr: Array<any> = resultData.Value.Main.WinResults;
		let winMoney:number = resultData.Value.Main.TotalWin;
		let newWinarr:Array<any> = [];
		for(let i = 0 ; i < winarr.length;i++){
			if(winarr[i].Type = "Bonus"){
				newWinarr = winarr[i];
			}
		}
		for(var i = 0;i < winarr.length;i++){
				if(winarr[i].Type == "Line"){
					index++;
				}
		}
		let lcomplete: any = () => {
			let w: number = winMoney / GameConfig.bili;
			time = index *1800;
			if(index != 0){
				this.getNomalReward1();
			}
			egret.setTimeout(()=>{
				this.showTips('2个分散图案赢得CNY ' + w + ".00");
				vo.GameData.slotInfo.allwin += w;
				ui.setAllWin(vo.GameData.slotInfo.allwin);
				ui.gameScence.clearAll();
				for(let j = 0;j <winarr.length;j++ ){
					if(winarr[j].Type == "BonusWin"){	//获得免费旋转
							ui.showHouzi(winarr[j], this.doNext.bind(this),true);
						}
				}
				
			},this,time)
		};
		
		ui.gameScence.showRewardGroup(newWinarr,winMoney, lcomplete.bind(this));	//展示并隐藏框
		SoundManager.getInstance().playEffect(SoundConst.BIG_REWARD);
	}


	/**
	 * 获得常规奖励
	 */
	public getNomalReward(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		let resultData: any = vo.GameData.resultData;
		let winarr: Array<any> = resultData.Value.Main.WinResults;
		let testWinarr : Array<any> = [];
		for(var i = 0;i<winarr.length;i++){
			if (winarr[i].Type == 'Line') {
					testWinarr.push(winarr[i]);
				}
		}
		egret.setTimeout(() => {
			if(this.getFreeCount() == 0 && !GameConfig.autoPlay && vo.GameData.allFreeCount == 0){
				this.exitNoControlState1();
				ui.showOrHideAutoPlay(false);
			}
		}, this, 300);
		ui.showAllWin(testWinarr, () => {
			if (GameManager.getInstance().getFreeCount() == 0) {
				vo.GameData.balance = vo.GameData.resultData.Value.Balance;
				ui.setMoney(vo.GameData.balance);
			}
			GameManager.getInstance().gameState = GameType.GameState.STOP;
			this.doNext();
		}, this, () => {
			// GameManager.getInstance().gameState = GameType.GameState.STOP;
			this.exitNoControlState1();
			if(this.getFreeCount() == 0 && !GameConfig.autoPlay){
				// console.log("免费旋转次数 === " + vo.GameData.allFreeCount);
				ui.showOrHideAutoPlay(false);
			}
			
		});
	}
	public getNomalReward1(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		let resultData: any = vo.GameData.resultData;
		let winarr: Array<any> = resultData.Value.Main.WinResults;
		let testWinarr : Array<any> = [];
		for(var i = 0;i<winarr.length;i++){
			if (winarr[i].Type == 'Line') {
					testWinarr.push(winarr[i]);
				}
		}
		ui.showAllWin(testWinarr, () => {
			if (GameManager.getInstance().getFreeCount() == 0) {
				vo.GameData.balance = vo.GameData.resultData.Value.Balance;
				ui.setMoney(vo.GameData.balance);
			}
			GameManager.getInstance().gameState = GameType.GameState.STOP;
			// this.doNext();
		}, this);
	}

	public doNext(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		if (GameManager.getInstance().getFreeCount() > 0 ) {
			ui.setBG(true);
		}

		if (this.getFreeCount() == 0 && vo.GameData.resultData.ActionType == 'freeslot'){
			SoundManager.getInstance().playEffect(SoundConst.ALLWIN);
			ui.gameScence.showAllWinNumGroup(vo.GameData.slotInfo.allwin, () => {
				
				vo.GameData.slotInfo.allwin = 0;
				ui.setAllWin(vo.GameData.slotInfo.allwin);
				ui.setMoney(vo.GameData.resultData.Value.Balance);
				this.exitNoControlState();
				console.log("this.isCanStop()111 ==== " + this.isCanStop());
				if (this.isCanStop()) {
					this.autoStopGame();
				}
				else {
					ui.updataUI();
					this.startGame();
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
	}

	/**
	 * 游戏正式开始通知
	 */
	public onLogicGameStart(): void {
		GameManager.getInstance().gameState = GameType.GameState.PLAYING;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.addListeber();
		// ui.playBtn.label = '停止';
		ui.hideAllWin();
		ui.hideHouzi();
		if(GameManager.getInstance().getFreeCount() <= 0 && vo.GameData.allFreeCount == 0){
			ui.setBG(false);
		}
		
		// GameManager.getInstance().enterNoControlState();
		
	}

	
	public startMusic():void{
		if (SoundManager.getInstance().effectOn && this.chanel == null) {
			// console.log("MUSIC111 == " + this.posMusic);
			console.log("音乐播放了音乐播放了音乐播放了111111");
			SoundManager.getInstance().playMusic(SoundConst.START, -1).then((chanel) => {
				this.chanel = chanel;
			});
		}
	}
	
	public chanel: egret.SoundChannel;
	public stopMusic(): void {
		if (this.chanel) {
			// this.posMusic = this.chanel.position;
			// console.log("MUSIC == " + this.posMusic);
			this.chanel.stop();
			this.chanel = null;
		}
	}
	/**
	 * 开始尝试游戏
	 */
	public startGame(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
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
			let bet: number = vo.GameData.betScoreArr[vo.GameData.betIndex];
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
					let index: number = this.getMaxBet();
					if (index > 0) {
                        vo.GameData.betIndex=index;
						ui.indexValue(index);
						// ui.baner.setIndex(index);
                        // vo.GameData.betScoreArr[ vo.GameData.betIndex-1];
						ui.playBtn.visible = false;
						ui.playTween.visible = false;
						ui.playBtn0.visible = false;
						ui.playTween0.visible = false;
						Commond.sendPlay(false);
						// vo.GameData.balance -= bet;
						vo.GameData.balance -= vo.GameData.betScoreArr[vo.GameData.betIndex];;
						
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
		if(GameManager.getInstance().gameState == GameType.GameState.STOP){
			core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_ROUNDSTART);
			// this.stopMusic();
			if (SoundManager.getInstance().effectOn && this.chanel == null && egret.getTimer()-this.curtime > 400) {
				this.curtime = egret.getTimer();
				console.log("音乐播放了音乐播放了音乐播放了");
				SoundManager.getInstance().playMusic(SoundConst.START, -1).then((chanel) => {
					this.chanel = chanel;
				});
			}
			ui.gameScence.startReel();
		}else{
			this.stopMusic();
		}
	}
	public curtime:number=egret.getTimer();
	/**
	 * 没钱
	 */
	public noMoney(): void {
		core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
		let ui: StipsUI = core.UIManager.getUI(core.UIConst.StipsUI);
		ui.shows('没有可用资金', '金额不足，无法以当前注额投注，请减少注额或增加余额。');
	}



	/**
	 * 停止尝试游戏
	 */
	public stopGame(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		if(GameConfig.isData){
			ui.gameScence.stopReel();
		}
	}


	/**
	 * 开始自动游戏
	 */
	public autoStartGame(): void {
		GameManager.getInstance().setAutoPlay(true);
		GameConfig.key_money = vo.GameData.balance;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
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
			
			if(vo.GameData.allFreeCount == 0){
				// egret.log("0000");
				GameManager.getInstance().startGame();
				return;
			}
		}
		if (this.gameState == GameType.GameState.STOP && GameManager.getInstance().getFreeCount() > 0) {
			// egret.log("9999");
			GameManager.getInstance().resume();
		}
		if(this.gameState == GameType.GameState.STOP  && GameManager.getInstance().getFreeCount() == vo.GameData.allFreeCount && GameManager.getInstance().getFreeCount() <= 0){
			// egret.log("2222");
			GameManager.getInstance().startGame();
		}
		if(this.gameState == GameType.GameState.STOP && GameManager.getInstance().getFreeCount() == vo.GameData.allFreeCount && vo.GameData.allFreeCount !=0){
			// egret.log("3333");
			// 
			GameManager.getInstance().startGame();
		}
		
	}
	public autoStartGameZZZ(): void {
		GameManager.getInstance().setAutoPlay(true);
		GameConfig.key_money = vo.GameData.balance;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		// ui.autoBtn.label = '停止';
		ui.showOrHideAutoPlay(true);
		ui.updataUI();
		if (this.gameState == GameType.GameState.STOP && GameManager.getInstance().getFreeCount() <= 0) {
			GameManager.getInstance().startGame();
		}
	}

	/**
	 * 停止自动游戏
	 */ 
	public autoStopGame(): void {
		GameManager.getInstance().setAutoPlay(false);
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		// ui.autoBtn.label = '自动游戏';
		if(GameManager.getInstance().getFreeCount() > 0 ){
			// sfas
		}
		// console.log("ZZZ1----" + GameManager.getInstance().getFreeCount());
		// console.log("ZZZ2----" + GameManager.getInstance().getAllFreeCount());
		// console.log("ZZZ3----" + GameConfig.autoPlay);
		if((GameManager.getInstance().getFreeCount() > 0) && (GameManager.getInstance().getFreeCount() == GameManager.getInstance().getAllFreeCount()) && GameManager.getInstance().getAllFreeCount() != 0){
			console.log("AA11");
			ui.showOrHideAutoPlay(false);
			if((GameManager.getInstance().getAllFreeCount() - vo.GameData.resultData.Value.Actions.Remaining) == 0 ){
				console.log("AA66");
				ui.showOrHideAutoPlay(false);
			}else{
				console.log("AA77");
				ui.showOrHideAutoPlay1(true);
			}
			return;
		}
		if(GameManager.getInstance().getFreeCount() == 0 && GameManager.getInstance().getAllFreeCount() == 0 && GameConfig.autoPlay){
			console.log("AA22");
			ui.showOrHideAutoPlay(false);
			return;
		}
		// if(GameManager.getInstance().getFreeCount() > 0 && GameManager.getInstance().getAllFreeCount() >= 0 && GameConfig.autoPlay){
		// 	console.log("AA33");
		// 	ui.showOrHideAutoPlay(true);
		// 	return;
		// }
		if(GameManager.getInstance().getFreeCount() > 0 && GameManager.getInstance().getAllFreeCount() >= 0 && !GameConfig.autoPlay){
			
			if(GameConfig.Action != "Initial"){
				console.log("AA44");
				ui.showOrHideAutoPlay1(true);
			}else{
				console.log("AA99");
				ui.showOrHideAutoPlay(false);
			}
			return;
		}
		console.log("AA55");
		ui.showOrHideAutoPlay(false);
	}
	public autoStopGameX(): void {
		GameManager.getInstance().setAutoPlay(false);
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		// ui.autoBtn.label = '自动游戏';
		ui.showOrHideAutoPlayX(false);
	}

	/**
	 * 暂停
	 */
	public pausume(): void {
		if (this.gameState != GameType.GameState.STOP) {
			let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
			ui.gameScence.pausme();
		}
	}

	/**
	 * 继续
	 */
	public resume(): void {
		if (this.gameState != GameType.GameState.STOP) {
			let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
			ui.gameScence.resume();
		}
	}

	/**
	 * 展示提示
	 */
	public showTips(str: string): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.showlabel.text = str;
	}


	/**
	 * 设置托管状态
	 */
	public setAutoPlay(auto: boolean): void {
		GameConfig.autoPlay = auto;
	}

	/**
	 * 是否能停止   
	 */
	public isCanStop(): boolean {
		console.log("this.getRewardType() == " + this.getRewardType());
		if (!GameConfig.autoPlay && vo.GameData.resultData.ActionType == 'slot') return true;
		if (!GameConfig.autoPlay && this.getFreeCount() == 0) return true;
		if (!GameConfig.autoPlay && this.getRewardType() == GameType.RewardType.FREE_REWARD) return true;
		// if (!GameConfig.autoPlay && this.getRewardType() == GameType.RewardType.BIG_AND_FREE) return true;
		if (GameConfig.autoPlay && GameConfig.freeWin && this.getRewardType() == GameType.RewardType.FREE_REWARD) return true;
		if (GameConfig.autoPlay && vo.GameData.autoPlayCount <= 0) return true;
		let adds: number = vo.GameData.resultData.Value.Balance > vo.GameData.balance ? vo.GameData.resultData.Value.Balance - vo.GameData.balance : 0;
		let subs: number = vo.GameData.resultData.Value.Balance < vo.GameData.balance ? vo.GameData.balance - vo.GameData.resultData.Value.Balance : 0;
		if (GameConfig.autoPlay && adds >= GameConfig.moneyAddCur && GameConfig.moneyAddCur > 0 && vo.GameData.resultData.ActionType == 'slot') return true;
		if (GameConfig.autoPlay && subs >= GameConfig.moneySubCur && GameConfig.moneySubCur > 0 && vo.GameData.resultData.ActionType == 'slot') return true;
		if (GameConfig.autoPlay && vo.GameData.resultData.Value.Main.TotalWinDollar >= GameConfig.singleWinCurCount && GameConfig.singleWinCurCount > 0 && vo.GameData.resultData.ActionType == 'slot') return true;
		if (GameConfig.autoPlay && vo.GameData.resultData.Value.Main.TotalWinDollar > 0 && GameConfig.someWin && vo.GameData.resultData.ActionType == 'slot') return true;
		return false;
	}

	/**
	 * 判断当前结果奖励类型
	 */
	public getRewardType(): number {
		let resultData: any = vo.GameData.resultData;
		let winarr: Array<any> = resultData.Value.Main.WinResults;
		let bonusNum:boolean = false;
		let lineNum:boolean = false;
		let bonusWin:boolean = false;
		let doublebonus:boolean = false;
		if (winarr.length > 0) {
			for(let i = 0;i < winarr.length;i++){
				if(winarr[i].Type == "Bonus"){	//获得免费旋转(免费旋转中又获得免费)
					if(vo.GameData.resultData.ActionType == 'slot'){
						//第一次进入免费
						bonusNum = true;
					}else{
						//免费又免费
						doublebonus = true;
					}
				}
				if(winarr[i].Type == "Line"){		//常规奖励
					lineNum = true;
				}
				if(winarr[i].Type == "BonusWin"){	//(免费旋转中获得2个C1)
					if(vo.GameData.resultData.ActionType == 'freeslot'){
						bonusWin = true;
					}
				}
			}

			if(bonusNum){
				//第一次进入免费
				return GameType.RewardType.FREE_REWARD;
			}
			if(doublebonus){
				//免费又免费
				return GameType.RewardType.BIG_AND_FREE;
			}
			if(bonusWin){
				if(vo.GameData.resultData.ActionType == 'freeslot'){
					return GameType.RewardType.BIG_REWARD;
				}
			}
			if(lineNum){
				return GameType.RewardType.NOMAL_REWARD;		//常规奖励
			}
	}
	return GameType.RewardType.NO_REWARD;
}

	/**
	 * 判断当前还有多少次免费旋转
	 */
	public getFreeCount(): number {
		let n: number = 0;
		if(GameConfig.freeNum > 0){
			n = GameConfig.freeNum;
		}
		return n;
	}
	/**
	 * 判断当前一共获得多少次旋转
	 */
	public getAllFreeCount(): number {
		let n: number = 0;
		n = vo.GameData.allFreeCount;
		return n;
	}

	/**
	 * 查找当前能投入的最大注索引
	 */

	public getMaxBet(): number {
		// for (let i: number = vo.GameData.betScoreArr.length - 1; i--; i >= 0) {
		// 	if (vo.GameData.betScoreArr[i] <= vo.GameData.balance) {
		// 		return vo.GameData.betScoreArr.length - 1 - i;
		// 	}
		// }
		// return -1;
		for(var i = vo.GameData.betScoreArr.length -1 ;i >= 0 ;i--){
			if (vo.GameData.betScoreArr[i] <= vo.GameData.balance) {
				return i;
			}
		}
		return -1;
	}

	/**
	 * 进入不可开始状态
	 */
	public enterNoControlState(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		GameManager.getInstance().gameState = GameType.GameState.NOCONTROL;
		//ui.playBtn.enabled = false;
		// ui.baner.setEnable(false);
		// ui.setBtn.enabled = false;
	}

	/**
	 * 退出不可开始状态
	 */
	public exitNoControlState(): void {
		GameManager.getInstance().gameState = GameType.GameState.STOP;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		//ui.playBtn.enabled = true;
		// ui.baner.setEnable(true);
		// ui.setBtn.enabled = true;
		ui.playBtn.enabled = true;
		ui.playBtn0.enabled = true;
	}
	public exitNoControlState1(): void {
		GameManager.getInstance().gameState = GameType.GameState.STOP;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		//ui.playBtn.enabled = true;
		// ui.baner.setEnable(true);
		// ui.setBtn.enabled = true;
		ui.playBtn.enabled = true;
		ui.playBtn0.enabled = true;
	}

	/**
	 * 数字转通用字符
	 */
	public static numberToCommonStr(n: number): string {
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
			sc = sc + '.' + arr[1];
		}
		else {
			sc = sc + '.00';
		}
		return sc;
	}
}


