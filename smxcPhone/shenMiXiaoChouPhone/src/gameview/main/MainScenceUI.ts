
declare function openHistory();
declare function openDes();
// declare function openLaunchFullScreen();
class MainScenceUI extends core.BaseUI {
	public bg: eui.Image;
	public strGroup: eui.Group;
	public starMC: egret.MovieClip;
	public showGroup: eui.Group;
	public showlabel: eui.Label;
	public showbg: eui.Image;
	public playTween: eui.Image;
	public speedGroup:eui.Group;
	public yesyes:eui.Image;
	public yesyes0:eui.Image;
	public nono:eui.Image;

	public speedUi:eui.Image;
	public tipsUi:eui.Image;

	public gameScence: GameScence;
	public moneyLabel: eui.BitmapLabel;
	public betNumLabel: eui.BitmapLabel;
	public allNumLabel: eui.BitmapLabel;

	// public ruleBtn: MouseButton;
	// public autoBtn: MouseButton;  
	public playBtn: MouseButton;
	public stopAuto: eui.Image;
	public stopAuto0: eui.Image;
	public playBtn0:MouseButton;
	public playTween0: eui.Image;
	public dianji:eui.Rect;

	public setA: eui.Image;
	public setA0: eui.Image;

	public autoPlayGroup: eui.Group;
	public autoPlayGroup0: eui.Group;
	public autoPlayTitleLabel: eui.Label;
	public autoPlayTitleLabel0: eui.Label;
	public autoPlayNumLabel: eui.BitmapLabel;
	public autoPlayNumLabel0: eui.BitmapLabel;
	public numGroup:eui.Group;
	public touGroup:eui.Group;
	// public baner: CheckBanner;
	public autoPlayNumLabel1:eui.BitmapLabel;
	
	


	// public exitBtn: MouseButton;
	// public historyBtn: MouseButton;
	// public setBtn: MouseButton;
	// public musicBtn: MosueCheckBox;
	// public shanBtn: MosueCheckBox;
	// public qusBtn: MouseButton;

	public bananceLabel: eui.Label;
	public betbanaceLabel: eui.Label;
	public rewardLabel: eui.Label;
	public rewardLabel0: eui.Label;
	// public ruleGroup: eui.Group;
	public setUI: SetUI;

	public mainGroup: eui.Group;

	public loadingGroup: eui.Group;
	public LoginWaitUI: LoginWaitUI;
	public loading1: eui.Image;
	public loading2: eui.Image;
	public loading3: eui.Image;

	public outMain: eui.Image;
	public outMain0: eui.Image;

	public diHei:eui.Image; 	//底部黑色背景

	public downGroup: eui.Group;
	public down1Group:eui.Group;
	public isSpeedUi:boolean = false;

	public constructor() {
		super();
		this.skinName = MainScenceUISkin;
		
		egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE, () => {
			this.s = window.innerHeight / window.innerWidth;

			if(this.isSpeedUi){
				// this.speedGroup.visible = true;
				this.isSpeed();
				return;
			}else{
				this.speedGroup.visible = false;
				this.speedUi.visible = false;
				this.tipsUi.visible = false;
			}

			if(this.isStip){
				// this.speedGroup.visible = true;
				this.stipUI();
			}else{
				this.speedGroup.visible = false;
				this.speedUi.visible = false;
				this.tipsUi.visible = false;
			}

		}, this);
	}

	public onAdd(): void {
		super.onAdd();
		this.registerEvent(this, eui.UIEvent.RESIZE, this.initSc1,this);
		this.dianji.visible = false;
		// this.gameScence.dianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.stopAni,this);
		this.setUI.visible = false;
		this.downGroup.touchEnabled = false;
		this.downGroup.touchThrough = true;
		if (egret.localStorage.getItem("bgOn") == "0") {
			this.loading2.source = "uiElements_05-04_png";
			SoundManager.getInstance().setBgOn(false);
			SoundManager.getInstance().setEffectOn(false);
		} else {
			this.loading2.source = "uiElements_05-12_png";
			SoundManager.getInstance().setBgOn(true);
			SoundManager.getInstance().setEffectOn(true);
		}

		if (egret.localStorage.getItem("not") == "false") {//不显示
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
		} else {
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

		if(this.currentState == 'up'){
			this.first(false);
		}else{
			this.first(true);
		}
		this.startCheckHashCount();
	}
	public hframe: WebView;
	public s: number;
	public timeout: number;
	public lframe: WebView;
	public backImg: WebImage;
	



	public initSc1():void{
		this.setUI.shiZhi3.onEvent();
		// this.setUI.shiZhi4.onEvent();
		egret.setTimeout(() => {
			// console.log("GameConfig.HEIGHT === " + GameConfig.HEIGHT);
			if(this.currentState == 'up'){
				this.first(false);
			}else{
				this.first(true);
			}
		}, this, 100);
	}
	public addListeber(){
		// console.log("游戏开始添加滚动界面监听");
		egret.setTimeout(()=>{
			
		},this,100);
		this.dianji.visible = true;
		this.dianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.stopAni,this);
		// if(this.setUI.visible){
		// 	GameManager.getInstance().pausume();
		// }
	}


	public removeListeber(){
		// console.log("游戏开始移除滚动界面监听");
		this.dianji.visible = false;
		this.dianji.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.stopAni,this);
	}

	private indexNum:number = 0;
	public stopAni():void{
		this.dianji.visible = false;
		this.dianji.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.stopAni,this);
		if(GameManager.getInstance().gameState == GameType.GameState.PLAYING){
					SoundManager.getInstance().playEffect(SoundConst.BUTTON);
					

					this.gameScence.shan.visible = true;
					this.gameScence.shan0.visible = true;
					this.gameScence.shan1.visible = true;
					let time:number = 500;

					egret.setTimeout(() => {
						this.indexNum++ 
						this.gameScence.shan.visible = false;
						this.gameScence.shan0.visible = false;
						this.gameScence.shan1.visible = false;

						if(!GameConfig.speedPlay && this.indexNum == 3){
							GameManager.getInstance().pausume();
							this.isSpeed();
						}
					},this,200)
					// GameManager.getInstance().getAllFreeCount() - GameManager.getInstance().getFreeCount() == GameManager.getInstance().getAllFreeCount();		//运行了多少次
					
					
					if(GameManager.getInstance().getFreeCount() > 0){
						time = 600;
					}else{
						time = 500;
					}
					let c: number = vo.GameData.allFreeCount - GameManager.getInstance().getFreeCount() > 0 ? vo.GameData.allFreeCount - GameManager.getInstance().getFreeCount() : vo.GameData.allFreeCount;
					if((c == vo.GameData.allFreeCount) && vo.GameData.allFreeCount != 0){
						time = 600;
					}
					// egret.log("time == " + time);
					egret.setTimeout(() => {
							// GameManager.getInstance().enterPlayingState1();
						// let resultData: any = vo.GameData.resultData;
						// let winarr: Array<any> = resultData.Value.Main.WinResults;
						
						if(!this.gameScence.group.visible){
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
	}

	
	/** 启动hashcount检测
	 */
	public startCheckHashCount(): void {
		let count = egret.$hashCount;
		setInterval(() => {
			let newCount = egret.$hashCount;
			var diff = newCount - count;
			count = newCount;
			if (diff > 100) {
				console.log('性能消耗过大->' + diff);
			}
		}, 1000);
	}
	public mainScenceInit(): void {
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
		

		egret.setTimeout(() => {
			this.updataUI();
			this.showTitleAnimation(3, null);
		}, this, 500);
		egret.setInterval(() => {
			if (this.playTween.alpha == 1) {
				egret.Tween.get(this.playTween).to({ alpha: 0.5 }, 700);
			} else {
				egret.Tween.get(this.playTween).to({ alpha: 1 }, 700);
			}
		}, this, 1600);
		egret.setInterval(() => {
			if (this.playTween0.alpha == 1) {
				egret.Tween.get(this.playTween0).to({ alpha: 0.5 }, 700);
			} else {
				egret.Tween.get(this.playTween0).to({ alpha: 1 }, 700);
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
			this.setBG(true,false);
			// this.showOrHideAutoPlay(false);
			egret.setTimeout(()=>{
				this.showMain();
			},this,900);
		}
		else {
			this.setBG(false,false);
		}
	}
	public closeMusic(): void {
		let aa = true;
		if (this.loading2.source == "uiElements_05-12_png"){
			this.loading2.source = "uiElements_05-04_png";
			aa = false;
		} else {
			this.loading2.source = "uiElements_05-12_png";
			aa = true;
		}
		this.setUI.musicBtn.liang.visible = aa;
		this.setUI.musicBtn.anYuan.visible = !aa;
		SoundManager.getInstance().setBgOn(aa);
		SoundManager.getInstance().setEffectOn(aa);
	}

	public setCurrentState(currentState: string): void {
		this.currentState = currentState;

		// GameConfig.HEIGHT	//游戏界面的高度，去掉输入网址框

		//core.UIUtils.addButtonScaleEffects(this);
	}
	public getCurrentState(): string {
		return this.currentState;
		//core.UIUtils.addButtonScaleEffects(this);
	}
	public setAX: any;
	public mainX: any;
	public setAX1: any;
	public mainX1: any;

	public setAm(): void {
		if (this.setUI.visible) {
			this.setA.source = "uiElements_05-14_png";
		} else {
			this.setA.source = "uiElements_05-11_png";
		}
	}
	public jiaoHuanSet1(isShu:boolean){ 
		if(isShu){

			if (this.setUI.zuoShouTo.liang.visible){

				this.setA.visible = false;
				this.setA0.visible = true;
				this.outMain.visible = false;
				this.outMain0.visible = true;

				
			}else{
				this.setA.visible = true;
				this.setA0.visible = false;
				this.outMain.visible = true;
				this.outMain0.visible = false;
			}

			if(GameConfig.autoPlay){
				this.playBtn.visible = false;
				this.playTween.visible = false;
				this.playBtn0.visible = false;
				this.playTween0.visible = false;
				this.autoPlayGroup.visible = true;
				this.autoPlayGroup0.visible = false;
			}else{
				this.playBtn.visible = true;
				this.playTween.visible = true;
				this.playBtn0.visible = false;
				this.playTween0.visible = false;
			}
		}else{		//橫
			if (this.setUI.zuoShouTo.liang.visible){	//左手模式开启状态
				this.setA.visible = false;
				this.setA0.visible = true;
				this.outMain.visible = false;
				this.outMain0.visible = true;

				if(GameConfig.autoPlay){		//自动模式开启
					this.playBtn.visible = false;
					this.playTween.visible = false;
					this.playBtn0.visible = false;
					this.playTween0.visible = false;
					this.autoPlayGroup.visible = false;
					this.autoPlayGroup0.visible = true;
				}else{
					this.playBtn.visible = false;
					this.playTween.visible = false;
					this.playBtn0.visible = true;
					this.playTween0.visible = true;
				}
			}else{
				this.setA.visible = true;
				this.setA0.visible = false;
				this.outMain.visible = true;
				this.outMain0.visible = false;
				if(GameConfig.autoPlay){		//自动模式开启
					this.playBtn.visible = false;
					this.playTween.visible = false;
					this.playBtn0.visible = false;
					this.playTween0.visible = false;
					this.autoPlayGroup.visible = true; //右边
					this.autoPlayGroup0.visible = false;
				}else{
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

	}
	public first(isShu:boolean){
		if(isShu){
			this.mainGroup.scaleY = 1;
			this.mainGroup.scaleX = 1;
			this.touGroup.scaleX = 1;
			this.touGroup.scaleY = 1;
			this.LoginWaitUI.scaleX = 0.73;
			this.LoginWaitUI.scaleY = 0.73;
		}else{
			var hBili:number;
			// if(GameConfig.HEIGHT > screen.height){
			// 	hBili = screen.height / GameConfig.HEIGHT;
			// }else{
				
			// }
			hBili = GameConfig.HEIGHT/screen.height;
			if(hBili >= 1){
				hBili = 1;
			}
			this.mainGroup.scaleX = 1 * hBili;
			this.mainGroup.scaleY = 1 * hBili;
			this.touGroup.scaleY = 1 * hBili+0.03;
			this.touGroup.scaleX = 1 * hBili+0.03;
			this.LoginWaitUI.scaleX = 1 * hBili+0.03;
			this.LoginWaitUI.scaleY = 1 * hBili+0.03;
			if(this.LoginWaitUI.scaleX > 0.823){
				this.LoginWaitUI.scaleX = 0.823;
			}
			if(this.LoginWaitUI.scaleY > 0.823){
				this.LoginWaitUI.scaleY = 0.823;
			}
		}
	}


	public jiaoHuanSet(isShu:boolean): void {
		
		//旋转按钮位置
		
		if(isShu){				//竖版模式
			if (this.setUI.zuoShouTo.liang.visible){
				
				this.setA.visible = false;
				this.setA0.visible = true;
				this.outMain.visible = false;
				this.outMain0.visible = true;

				
			}else{
				this.setA.visible = true;
				this.setA0.visible = false;
				this.outMain.visible = true;
				this.outMain0.visible = false;
			}
			if(GameConfig.autoPlay){
				this.playBtn.visible = false;
				this.playTween.visible = false;
				this.playBtn0.visible = false;
				this.playTween0.visible = false;
				this.autoPlayGroup.visible = true;
				this.autoPlayGroup0.visible = false;
			}else{
				this.playBtn.visible = true;
				this.playTween.visible = true;
				this.playBtn0.visible = false;
				this.playTween0.visible = false;
			}
		}else{
			if (this.setUI.zuoShouTo.liang.visible) {	//左手模式开启
				this.setA.visible = false;
				this.setA0.visible = true;
				this.outMain.visible = false;
				this.outMain0.visible = true;
				
				if(GameConfig.autoPlay){		//自动模式开启
					this.playBtn.visible = false;
					this.playTween.visible = false;
					this.playBtn0.visible = false;
					this.playTween0.visible = false;
					this.autoPlayGroup.visible = false;
					this.autoPlayGroup0.visible = true;
					
				}else{
					this.playBtn.visible = false;
					this.playTween.visible = false;
					this.playBtn0.visible = true;
					this.playTween0.visible = true;
				}
			} else {									//右手模式
				this.setA.visible = true;
				this.setA0.visible = false;
				this.outMain.visible = true;
				this.outMain0.visible = false;
				
				if(GameConfig.autoPlay){		//自动模式开启
					this.playBtn.visible = false;
					this.playTween.visible = false;
					this.playBtn0.visible = false;
					this.playTween0.visible = false;
					this.autoPlayGroup.visible = true;
					this.autoPlayGroup0.visible = false;
				}else{
					this.playBtn.visible = true;
					this.playTween.visible = true;
					this.playBtn0.visible = false;
					this.playTween0.visible = false;
				}
			}
		}
			
		if ((GameManager.getInstance().getFreeCount() > 0 && GameManager.getInstance().getFreeCount() != GameManager.getInstance().getAllFreeCount())) {
				if(GameConfig.Action != "Initial"){
					this.playBtn.visible = false;
					this.playTween.visible = false;
					this.playBtn0.visible = false;
					this.playTween0.visible = false;
				}
			}
	}
	public setAA(): void {
		this.setUI.currentState = this.currentState;
		this.setUI.visible = !this.setUI.visible; 
		
		if (this.setUI.visible) {
			this.setA.source = "uiElements_05-14_png";
			this.setA0.source = "uiElements_05-14_png";
			GameManager.getInstance().pausume();
			this.setUI.init();
		} else {
			this.setA.source = "uiElements_05-11_png";			//三条线图 //分别是左手右手模式情况
			this.setA0.source = "uiElements_05-11_png";			//三条线图
			GameManager.getInstance().resume();
			if(GameManager.getInstance().gameState == GameType.GameState.STOP){		//改变中间投主数
				if(this.touzhuNum){
					this.bet = this.touzhuNum;
				}
			}
		}
	}
	public glowFilter: egret.GlowFilter;
	public initfighter(): void {
		if (!this.glowFilter) { 
			var color: number = 0x09E8F2;        		/// 光晕的颜色，十六进制，不包含透明度
			var alpha: number = 0.1;             		/// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
			var blurX: number = 11;              		/// 水平模糊量。有效值为 0 到 255.0（浮点）
			var blurY: number = 11;             		/// 垂直模糊量。有效值为 0 到 255.0（浮点）
			var strength: number = 10;          		/// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
			var quality: number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
			var inner: boolean = false;            		/// 指定发光是否为内侧发光，暂未实现
			var knockout: boolean = false;            	/// 指定对象是否具有挖空效果，暂未实现
			this.glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY,
				strength, quality, inner, knockout);
		}
		this.showlabel.filters = [this.glowFilter];
		this.showlabel.cacheAsBitmap = true;
	}

	public glowFilter1: egret.GlowFilter;
	public initfighter1(): void {
		if (!this.glowFilter1) {
			var color: number = 0xff0000;        /// 光晕的颜色，十六进制，不包含透明度
			var alpha: number = 0.1;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
			var blurX: number = 11;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
			var blurY: number = 11;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
			var strength: number = 5;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
			var quality: number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
			var inner: boolean = false;            /// 指定发光是否为内侧发光，暂未实现
			var knockout: boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
			this.glowFilter1 = new egret.GlowFilter(color, alpha, blurX, blurY,
				strength, quality, inner, knockout);
		}
		this.moneyLabel.filters = [this.glowFilter1];
		this.betNumLabel.filters = [this.glowFilter1];
		this.allNumLabel.filters = [this.glowFilter1];
		this.moneyLabel.cacheAsBitmap = true;
		this.betNumLabel.cacheAsBitmap = true;
		this.allNumLabel.cacheAsBitmap = true;
	}


	public onRemove(): void {
		super.onRemove();
	}

	public onChange(e: egret.Event): void {
		// vo.GameData.betIndex = this.baner.getIndex();
		this.updataNum();
	}
	public touzhuNum:number;
	public touZhuText(num:string):void{
		this.betbanaceLabel.text = 'CNY ' + num;
		this.touzhuNum = parseInt(num);
		// this.betNumLabel.text = 'CNY ' + num;
	}
	public updataUI(): void {
		this.autoPlayNumLabel.text = vo.GameData.autoPlayCount + '';		//右手托管次数
		this.autoPlayNumLabel1.text = "" + vo.GameData.autoPlayCount;
		this.autoPlayNumLabel0.text = vo.GameData.autoPlayCount + '';		//左手托管次数
		this.updataNum();
		// this.musicBtn.selected = SoundManager.getInstance().effectOn;
		// this.shanBtn.selected = GameConfig.speedPlay;
	}
	public indexValue(num:number):void{
		// let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		// this.setUI.shiZhi1.value = num;
		// console.log("this.value**** === " + this.setUI.shiZhi1.value);
		this.setUI.shiZhi1.indexValue(num);
		// ui.setUI.shiZhi1.tabela.text = vo.GameData.betScoreArr[ui.setUI.shiZhi1.value]+".00";
		// this.setUI.shiZhi1.tabela.text = vo.GameData.betScoreArr[this.setUI.shiZhi1.value]+".00";
	}
	public curr():void{
		// this.setUI.shiZhi1.onEvent();
		// this.setUI.shiZhi2.onEvent();
		// this.setUI.shiZhi3.onEvent();
		// this.setUI.shiZhi4.onEvent();
		// this.setUI.shiZhi5.onEvent();
	}

	public updataNum(): void {
		let v: number = vo.GameData.betScoreArr[vo.GameData.betIndex];
		if (v > this.bet) {
			egret.Tween.get(this).to({ bet: v }, 500);
		}
		else {
			this.bet = v;
		}


		this.betbanaceLabel.text = 'CNY ' + v.toFixed(2);
		egret.Tween.get(this).to({ allwin: vo.GameData.slotInfo.allwin }, 500); // 数字变化1+10
		egret.Tween.get(this).to({ balance: vo.GameData.balance }, 0.1);
	}
	public isSpeed(){
		
		this.speedUI();
		this.registerEvent(this.nono,egret.TouchEvent.TOUCH_TAP,()=>{
			// core.UIManager.closeUI(core.UIConst.SpeedTipsUI);
			this.speedGroup.visible = false;
			this.speedUi.visible = false;
			this.tipsUi.visible = false;
			this.isSpeedUi = false;
			GameManager.getInstance().resume();
		},this);
        
        this.registerEvent(this.yesyes,egret.TouchEvent.TOUCH_TAP,()=>{
			// if(this.isSpeedUi){
			// 	this.speedGroup.visible = false;
			// 	this.isSpeedUi = false;
			// }else{
				
			// }
				GameConfig.speedPlay = true;
				let ui: SetUI = core.UIManager.getUI(core.UIConst.SetUI);
				this.setUI.speedBtn.liang.visible = GameConfig.speedPlay;
				this.speedGroup.visible = false;
				this.speedUi.visible = false;
				this.tipsUi.visible = false;
				this.isSpeedUi = false;
				// core.UIManager.closeUI(core.UIConst.SpeedTipsUI);
				GameManager.getInstance().resume();
            
		},this);
	}
	//快速游戏提示框
	public speedUI():void{
		this.isSpeedUi = true;
		this.speedGroup.visible = true;
		this.speedUi.visible = true;
		this.tipsUi.visible = false;
		// this.nono.visible = true;
		if(this.currentState == "down"){		//shu
			
		}else{
			
		}
		// this.yesyes.label = "是";
		
	}
	public isStip:boolean = false;
	//余额不足提示框
	public stipUI():void{
		this.isStip = true;
		this.speedGroup.visible = true;
		this.speedUi.visible = false;
		this.tipsUi.visible = true;
		
		// this.nono.visible = false;
		if(this.currentState == "down"){	//shu
			
		
		}else{
			
		}
		
		
		this.registerEvent(this.yesyes0,egret.TouchEvent.TOUCH_TAP,()=>{
			if(this.isStip){
				this.speedGroup.visible = false;
				this.speedUi.visible = false;
				this.tipsUi.visible = false;
				this.isStip = false;
			}
		},this);
	}
	public onTab(e: egret.TouchEvent): void {
		switch (e.currentTarget) {
			case this.playBtn://开始旋转
			case this.playBtn0://开始旋转 左手模式开始按钮...
				console.log("开始旋转");
				if (GameManager.getInstance().gameState == GameType.GameState.STOP){
					GameManager.getInstance().startGame();
				}
				// else {
				// 	GameManager.getInstance().stopGame();
				// }
				break;

			case this.stopAuto:
			case this.stopAuto0:		//左手模式按钮...
				GameManager.getInstance().autoStopGame();
			// }

			break;
			case this.outMain:
			case this.loading1:
			case this.outMain0:
				window.location.href = window.location.href;
			break;
			
		}
	}



	public ruleIsShow: boolean = false;
	/**
	 * 控制赔付表
	 */
	public setRule(): void {
		// this.ruleGroup.visible = this.ruleIsShow;
		this.showGroup.visible = this.gameScence.visible = !this.ruleIsShow;
	}


	/**
	 * 设置显示注数
	 */
	public set bet(value: number) {
		this._bet = value;
		this.betNumLabel.text = 'cny ' + this._bet.toFixed(2);
		if(this.betNumLabel.text.length == 12){
			this.betNumLabel.scaleX = 0.9;
		}
		if(this.betNumLabel.text.length < 12){
			this.betNumLabel.scaleX = 1;
		}
		if(this.betNumLabel.text.length > 12 && this.betNumLabel.text.length < 15){
			this.betNumLabel.scaleX = 0.8;
		}
		if(this.betNumLabel.text.length >= 15){
			this.betNumLabel.scaleX = 0.7;
		}

	}

	public _bet: number = 0.00;

	/**
	 *得到显示注数
	 */
	public get bet(): number {
		return this._bet;
	}


	/**
	 * 设置余额
	 */
	public set balance(value: number) {
		this._money = value;
		this.moneyLabel.text = 'cny ' + this._money.toFixed(2);
		this.moneyLabel.anchorOffsetX = this.moneyLabel.width / 2;
		this.moneyLabel.anchorOffsetY = this.moneyLabel.height / 2;
		if(this.moneyLabel.text.length == 12){
			this.moneyLabel.scaleX = 0.9;
		}
		if(this.moneyLabel.text.length < 12){
			this.moneyLabel.scaleX = 1;
		}
		if(this.moneyLabel.text.length > 12 && this.moneyLabel.text.length < 15){
			this.moneyLabel.scaleX = 0.8;
		}
		if(this.moneyLabel.text.length >= 15){
			this.moneyLabel.scaleX = 0.7;
		}

		this.bananceLabel.text = '余额 : CNY ' + this._money.toFixed(2);

	}

	/**
	 *得到显示余额
	 */
	public get balance(): number {
		return this._money;
	}

	private _money: number = 0.00;


	/**
	 * 设置显示总获胜
	 */
	public set allwin(value: number) {
		this._allmoney = value;
		this.allNumLabel.text = 'cny ' + this._allmoney.toFixed(2);
		this.allNumLabel.anchorOffsetX = this.allNumLabel.width / 2;
		this.allNumLabel.anchorOffsetY = this.allNumLabel.height / 2;
		if(this.allNumLabel.text.length == 12){
			this.allNumLabel.scaleX = 0.9;
		}
		if(this.allNumLabel.text.length < 12){
			this.allNumLabel.scaleX = 1;
		}
		if(this.allNumLabel.text.length > 12 && this.allNumLabel.text.length < 15){
			this.allNumLabel.scaleX = 0.8;
		}
		if(this.allNumLabel.text.length >= 15){
			this.allNumLabel.scaleX = 0.7;
		}
	}

	/**
	 *得到显示总获胜
	 */
	public get allwin(): number {
		return this._allmoney;
		
	}
	public showOrHideAutoPlay2(b: boolean): void {
		if(this.currentState == "down"){		//竖版
			// if(this.setUI.zuoShouTo.liang.visible){
				this.playBtn.alpha = 0;
				egret.setTimeout(() => {
					egret.Tween.get(this.playBtn).to({ alpha: 1 }, 500);
					this.playBtn.visible = !b;
					this.playTween.visible = this.playBtn.visible;
				}, this, 600);;
				this.autoPlayGroup.visible = b;
				egret.Tween.removeTweens(this.autoPlayTitleLabel);
				if (b) {
					this.autoPlayTitleLabel.alpha = 1;
					egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
				}
			// }
		}else {
			if(this.setUI.zuoShouTo.liang.visible){		//橫屏 左手模式
				this.playBtn0.visible = !b;
				this.playBtn.alpha = 0;
				egret.setTimeout(() => {
					egret.Tween.get(this.playBtn).to({ alpha: 1 }, 500);
					this.playBtn.visible = !b;
					this.playTween.visible = this.playBtn.visible;
				}, this, 600);;
				egret.Tween.removeTweens(this.autoPlayTitleLabel0);
				if (b) {
					this.autoPlayTitleLabel0.alpha = 1;
					egret.Tween.get(this.autoPlayTitleLabel0, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
				}
			}else{
				this.playBtn.alpha = 0;
				egret.setTimeout(() => {
					egret.Tween.get(this.playBtn).to({ alpha: 1 }, 500);
					this.playBtn.visible = !b;
					this.playTween.visible = this.playBtn.visible;
				}, this, 600);;
				this.autoPlayGroup.visible = b;
				egret.Tween.removeTweens(this.autoPlayTitleLabel);
				if (b) {
					this.autoPlayTitleLabel.alpha = 1;
					egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
				}
			}
		}
		
	}




	public showOrHideAutoPlay1(b: boolean){
		if(this.currentState == "down"){		//竖版
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
		}else {
			if(this.setUI.zuoShouTo.liang.visible){		//橫屏 左手模式
				this.playBtn0.visible = !b;
				this.playTween0.visible = this.playBtn0.visible;
				this.autoPlayGroup0.visible = !b;
				egret.Tween.removeTweens(this.autoPlayTitleLabel0);
				if (b) {
					this.autoPlayTitleLabel0.alpha = 1;
					egret.Tween.get(this.autoPlayTitleLabel0, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
				}
			}else{
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
	}
	private _allmoney: number = 0.00;
    /**
	 * 显示或者隐藏自动旋转信息 
	 */
	public showOrHideAutoPlay(b: boolean): void {
		if(this.currentState == "down"){		//竖版
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
		}else {
			if(this.setUI.zuoShouTo.liang.visible){		//橫屏 左手模式
				this.playBtn0.visible = !b;
				this.playTween0.visible = this.playBtn0.visible;
				this.autoPlayGroup0.visible = b;
				egret.Tween.removeTweens(this.autoPlayTitleLabel0);
				if (b) {
					this.autoPlayTitleLabel0.alpha = 1;
					egret.Tween.get(this.autoPlayTitleLabel0, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
				}
			}else{
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
	}

	public showOrHideAutoPlayX(b: boolean): void {
		if(this.currentState == "down"){		//竖版
			// if(this.setUI.zuoShouTo.liang.visible){
				egret.setTimeout(()=>{
					if (GameManager.getInstance().gameState != GameType.GameState.PLAYING &&  GameManager.getInstance().getFreeCount() <= 0){
						this.playBtn.visible = !b;
						this.playTween.visible = this.playBtn.visible;
					}
					
				},this,500);
				this.autoPlayGroup.visible = b;
				egret.Tween.removeTweens(this.autoPlayTitleLabel);
				if (b) {
					this.autoPlayTitleLabel.alpha = 1;
					egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
				}
			// }
		}else {
			if(this.setUI.zuoShouTo.liang.visible){		//橫屏 左手模式
				egret.setTimeout(()=>{
					if (GameManager.getInstance().gameState != GameType.GameState.PLAYING && GameManager.getInstance().getFreeCount() <= 0){
						this.playBtn0.visible = !b;
						this.playTween0.visible = this.playBtn0.visible;
					}		
					
				},this,500);
				this.autoPlayGroup0.visible = b;
				egret.Tween.removeTweens(this.autoPlayTitleLabel0);
				if (b) {
					this.autoPlayTitleLabel0.alpha = 1;
					egret.Tween.get(this.autoPlayTitleLabel0, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
				}
			}else{
				egret.setTimeout(()=>{
					if (GameManager.getInstance().gameState != GameType.GameState.PLAYING && GameManager.getInstance().getFreeCount() <= 0){
						this.playBtn.visible = !b;
						this.playTween.visible = this.playBtn.visible;
					}
					
				},this,500);
				this.autoPlayGroup.visible = b;
				egret.Tween.removeTweens(this.autoPlayTitleLabel);
				if (b) {
					this.autoPlayTitleLabel.alpha = 1;
					egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
				}
			}
		}
	}


	private winTime: any;
	private isShowWin: boolean = true;
	/**
	 * 显示正常获胜  	
	 */
	public showAllWin(winArr: Array<any>, callfun: any = null, callobj: any = null, singlecallfun: any = null): void {
		//
		if (winArr.length == 0) {
			if (callfun && callobj) {
				callfun.call(callobj);
			}
			return;
		}
		let sc: number = 0;
		let playrandom: number = Math.floor(Math.random() * 3);
		this.isShowWin = true;
		let iscall: boolean = false;
		let time:number = 250;		//如果只有一根线time==80
		let index: number = 0;
		let isOne:boolean;
		let showLineCall: any = () => {
			this.gameScence.clearAll();
			if (!this.isShowWin) return;
			if (index == 0) {
				this.gameScence.showAllLineWin(winArr);

				if(winArr.length == 1){		//如果只有一根线，着time==80
					isOne = true;
					time = 20;//80
				}else{
					isOne = false;
					time = 150;
				}
				GameManager.getInstance().showTips('恭喜您!');
				
				this.winTime = egret.setTimeout(() => {
					
					if (sc == 0) {
						SoundManager.getInstance().playEffect(winArr[index].Symbol + '_mp3');//(SoundConst.NOMAL_ARR[playrandom]);
					}
					this.gameScence.clearAll();
					if (sc == 0) {
						vo.GameData.slotInfo.allwin += winArr[index].Reward.BetMultiplier * vo.GameData.betScoreArr[vo.GameData.betIndex]*10000 /5 / GameConfig.bili;
						this.setAllWin(vo.GameData.slotInfo.allwin);
					}
					this.gameScence.showLineWin(isOne,winArr[index], () => {
						index++;
						
						if (index >= winArr.length) {
							index = 0;
							sc = 1;
							if (!iscall && callfun && callobj) {
								iscall = true;
								callfun.call(callobj);
								if (GameManager.getInstance().getFreeCount() == 0) {
									vo.GameData.balance = vo.GameData.resultData.Value.Balance;
									this.setMoney(vo.GameData.balance);
								}
							}
						}
						showLineCall();
						if ( index == 1) {
							singlecallfun&&singlecallfun();
						}
					}, this);
				}, this, time);
			}
			else {
				if (sc == 0) {
					vo.GameData.slotInfo.allwin += winArr[index].Reward.BetMultiplier * vo.GameData.betScoreArr[vo.GameData.betIndex]*10000/5 / GameConfig.bili;
					this.setAllWin(vo.GameData.slotInfo.allwin);
				}
				if (sc == 0) {
					SoundManager.getInstance().playEffect(winArr[index].Symbol + '_mp3');//(SoundConst.NOMAL_ARR[playrandom]);
				}
				this.gameScence.showLineWin(isOne,winArr[index], () => {
					index++;
					if (index >= winArr.length) {
						index = 0;
						sc = 1;
						if (!iscall && callfun && callobj) {
							iscall = true;
							callfun.call(callobj);
							if (GameManager.getInstance().getFreeCount() == 0) { //判断免费转次数
								vo.GameData.balance = vo.GameData.resultData.Value.Balance;
								this.setMoney(vo.GameData.balance);
							}
						}
					}
					showLineCall();
				}, this);
			}
		};
		showLineCall();
	}

	/**
	 * 停止显示获胜
	 */
	public hideAllWin(): void {
		egret.clearTimeout(this.winTime);
		this.gameScence.clearAll();
		this.gameScence.setItem();
		this.isShowWin = false;
	}
	

	/**
	 * 展示特殊猴子获胜
	 */
	public showHouzi(data: any, callfun: any, isshowReward: boolean = false): void {
		SoundManager.getInstance().playEffect(SoundConst.HOUZI);
		this.gameScence.showMaozi(data, isshowReward);
		this.houziTimeout = egret.setTimeout(() => {
			callfun && callfun();
		}, this, 3000);
	}
	public houziTimeout: number;

	/**
	 * 隐藏特殊猴子获胜
	 */
	public hideHouzi(): void {
		egret.clearTimeout(this.houziTimeout);
		this.gameScence.hideMaozi();
	}

	/**
	 * 设置总获胜
	 */
	public setAllWin(n: number): void {
		if(n == 0){
			return;
		}
		egret.Tween.get(this).to({ allwin: n }, 500);
		if(this.currentState == "up"){		//heng
			if(!n){
				this.rewardLabel0.visible = false;
			}else{
				this.rewardLabel0.visible = true;
			}

		}else{		//shu
			if(!n){
				this.rewardLabel0.visible = false;
				this.rewardLabel.x = 537;
			}else{
				this.rewardLabel0.visible = true;
				this.rewardLabel.x = 441;
			}
		}
		
		this.rewardLabel0.text = "CNY " + n.toFixed(2);
		if(this.rewardLabel0.text.length >=8){
			this.rewardLabel0.scaleX = 0.9;
		}
	}

	/**
	 * 设置余额
	 */
	public setMoney(n: number): void {
		egret.Tween.get(this).to({ balance: n }, 500);

	}

	public qbg0: eui.Image;
	public qbg1: eui.Image;
	public bg0: eui.Image;
	public bg1: eui.Image;

	/**
	 * 设置背景
	 */
	public setBG(isFree: boolean = false, isact: boolean = true): void {			
		// this.bg.source = isFree ? 'background_texture1_level1_jpg' : 'background_texture0_level1_jpg';
		// egret.setTimeout(()=>{
			this.qbg0.source = isFree ? 'logo_texture1_level1_01-04_png' : 'logo_texture1_level1_01-03_png';	//左边blue
			this.qbg1.source = isFree ? 'logo_texture1_level1_01-02_png' : 'logo_texture1_level1_01_png';		//右边blue
			this.showbg.source = isFree ? 'menu2_png' : 'menu1_png';
		// },this,900);
		

		if (isFree) {
			if (!isact) {
				this.bg0.alpha = 0;
				this.bg1.alpha = 1;
				return;
			}
			egret.Tween.get(this.bg0).to({ alpha: 0 }, 1000);
			egret.Tween.get(this.bg1).to({ alpha: 1 }, 1000);//red
		}
		else {
			if (!isact) {
				this.bg0.alpha = 1;
				this.bg1.alpha = 0;
				return;
			}
			egret.Tween.get(this.bg0).to({ alpha: 1 }, 1000);
			egret.Tween.get(this.bg1).to({ alpha: 0 }, 1000);//red
		}
	}



	public showAllAnimation(): void {
		let i: number = Math.floor(Math.random() * 6);
		this.showTitleAnimation(4, () => {
			if (i != 4) {
				this.showQustionAnimatuion();
			}

			this.showTitleAnimation(i, () => {
				this.showAllAnimation();
			});
		});
	}

	private showTitleAnimation(type: number, callfun: any): void {
		let index: number = 11;
		let speed: number = -1;
		let off1: number = 0;
		let off2: number = 0;
		let speed1: number = 0;
		let speed2: number = 0;

		let index1: number = 0;
		let index2: number = 0;
		let index3: number = 0;
		let index4: number = 0;
		let index5: number = 0;
		let index6: number = 0;
		let t: number;
		switch (type) {
			case 0:
				t = egret.setInterval(() => {
					(this['img' + index] as eui.Image).visible = speed == -1 ? false : true;
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
				t = egret.setInterval(() => {
					this.setZ(index, true);
					index += speed;
					if (index == 12) {
						egret.clearInterval(t);
						this.setAllZ(true);
						callfun && callfun();

					}
				}, this, 60);
				break;
			case 2:
				index1 = 5;
				index2 = 6;
				speed1 = -1;
				speed2 = 1;
				t = egret.setInterval(() => {
					(this['img' + (index1)] as eui.Image).visible = speed1 == -1 ? false : true;
					(this['img' + (index2)] as eui.Image).visible = speed2 == 1 ? false : true;
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
						this.setAllZ(true);
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
				t = egret.setInterval(() => {
					let arr: Array<number> = [index1, index2, index3, index4, index5, index6];
					this.setArrZ(true, arr);
					index1 += speed;
					index2 += speed;
					index3 += speed;
					index4 += speed;
					index5 += speed;
					index6 += speed;
					index += speed;
					if (index1 > 11) index1 = 0;
					if (index2 > 11) index2 = 0;
					if (index3 > 11) index3 = 0;
					if (index4 > 11) index4 = 0;
					if (index5 > 11) index5 = 0;
					if (index6 > 11) index6 = 0;
					if (index >= 12) {
						egret.clearInterval(t);
						this.setAllZ(true);
						callfun && callfun();
					}
				}, this, 120);
				break;
			case 4:
				this.setAllZ(true);
				t = egret.setTimeout(() => {
					egret.clearTimeout(t);
					callfun && callfun();
				}, this, 3000);
				break;
			case 5:
				index1 = 0;
				index2 = 11;
				speed1 = 1;
				speed2 = -1;
				t = egret.setInterval(() => {
					let arr: Array<number> = [index1, index2];
					this.setArrZ(false, arr);
					index1 += speed1;
					index2 += speed2;
					if (index1 > 11) {
						egret.clearInterval(t);
						this.showShanZ(() => {
							callfun && callfun();
						});
					}
				}, this, 60);

				break;
		}
	}
	public qimg0: eui.Image;
	public qimg1: eui.Image;
	public showQustionAnimatuion(): void {
		egret.Tween.removeTweens(this.qimg0);
		egret.Tween.removeTweens(this.qimg1);
		this.qimg0.alpha = this.qimg1.alpha = 1;
		egret.Tween.get(this.qimg0).to({ alpha: 0 }, 50).wait(300).to({ alpha: 1 }, 50).wait(300).to({ alpha: 0 }, 50).wait(300).to({ alpha: 1 }, 50);
		egret.Tween.get(this.qimg1).to({ alpha: 0 }, 50).wait(300).to({ alpha: 1 }, 50).wait(300).to({ alpha: 0 }, 50).wait(300).to({ alpha: 1 }, 50);
	}


	/**
	 * 设置其中一个字母亮或者暗
	 */
	private setZ(index: number, b: boolean): void {
		for (let i: number = 0; i < 12; i++) {
			if (i == index) {
				(this['img' + i] as eui.Image).visible = b;
			}
			else {
				(this['img' + i] as eui.Image).visible = !b;
			}
		}
	}
	/**
	 * 让所有字母全暗或者亮
	 */
	private setAllZ(b: boolean): void {
		for (let i: number = 0; i < 12; i++) {
			(this['img' + i] as eui.Image).visible = b;
		}
	}

	/**
	 * 一堆数组让其全亮
	 */
	private setArrZ(b: boolean, arr: Array<number>): void {
		for (let i: number = 0; i < 12; i++) {
			(this['img' + i] as eui.Image).visible = !b;
			for (let j: number = 0; j < arr.length; j++) {
				if (i == arr[j]) {
					(this['img' + i] as eui.Image).visible = b;
				}
			}

		}
	}

	private showShanZ(callfun: any): void {
		let index: number = 0;
		let t: number;
		this.setAllZ(true);
		t = egret.setInterval(() => {
			let iss: boolean = index % 2 == 0 ? false : true;
			this.setAllZ(iss);
			index++;
			if (index > 4) {
				egret.clearInterval(t);
				this.setAllZ(true);
				callfun && callfun();
			}
		}, this, 300);
	}


	public showStar(): void {
		this.starMC.visible = true;
		let r1: number = Math.random();
		let r2: number = Math.random();
		let rx: number = r1 > 0.5 ? 300 + 300 * Math.random() : 300 - 300 * Math.random();//
		let ry: number = r2 > 0.5 ? 60 + 50 * Math.random() : 50 - 60 * Math.random();

		if(rx < 7 ){
			rx = 7;
		}
		if(rx > 682){			
			rx = 682;
		}
		if(ry > 80){	//14-80
			ry = 80;
		}
		if(ry < 13){
			ry = 13;
		}
		if(rx >= 372 && rx <= 448){
			rx = 432;
		}
		if(ry >= 10 &&ry <= 80){
			ry = 53;
		}

		this.starMC.x = rx;
		this.starMC.y = ry;
		this.starMC.gotoAndPlay('shan');
		this.starMC.once(egret.MovieClipEvent.COMPLETE, () => {
			this.showStar();
		}, this);
	}

	public hideStar(): void {
		this.starMC.stop();
		this.starMC.visible = false;
	}

	public showMain(){
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
		if(GameManager.getInstance().getFreeCount() > 0){
			GameManager.getInstance().startGame();
		}
	}





















}