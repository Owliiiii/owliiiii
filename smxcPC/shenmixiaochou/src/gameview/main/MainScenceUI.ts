
declare function openHistory();
declare function openDes();
class MainScenceUI extends core.BaseUI {
	public bg0: eui.Image;
	public bg1: eui.Image;
	public strGroup: eui.Group;
	public starMC: egret.MovieClip;
	public showGroup: eui.Group;
	public showlabel: eui.Label;

	public showbg: eui.Image;


	public gameScence: GameScence;
	public moneyLabel: eui.BitmapLabel;
	public betNumLabel: eui.BitmapLabel;
	public allNumLabel: eui.BitmapLabel;

	public ruleBtn: MouseButton;
	public autoBtn: MouseButton;
	public playBtn: MouseButton;

	public autoPlayGroup: eui.Group;
	public autoPlayTitleLabel: eui.Label;
	public autoPlayNumLabel: eui.BitmapLabel;


	public baner: CheckBanner;



	public exitBtn: MouseButton;
	public historyBtn: MouseButton;
	public setBtn: MouseButton;
	public musicBtn: MosueCheckBox;
	public shanBtn: MosueCheckBox;
	public qusBtn: MouseButton;

	public bananceLabel: eui.Label;
	public betbanaceLabel: eui.Label;
	public rewardLabel: eui.Label;

	public ruleGroup: eui.Group;
	public shan:eui.Rect;
	public shan0:eui.Rect;
	public shan1:eui.Rect;
	// public dianji:eui.Rect;




	public constructor() {
		super();
		this.skinName = MainScenceUISkin;
	}

	public onAdd(): void {
		super.onAdd();
		this.gameScence.init();
		this.gameScence.reset();
		this.baner.initArr(vo.GameData.betScoreArr, vo.GameData.betIndex);
		this.registerEvent(this.baner, egret.Event.CHANGE, this.onChange, this);
		this.registerEvent(this.ruleBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.autoBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.playBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.setBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.historyBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.musicBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.shanBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.qusBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.exitBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		// this.registerEvent(this.gameScence,egret.TouchEvent.TOUCH_TAP,this.onTab, this);

		this.gameScence.dianji.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hands, this);
		// this.dianji.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.nohands, this);
		this.gameScence.dianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.stopAni,this);
		
		if (egret.localStorage.getItem('isShowlogin') != '0') {
			this.showlogin();
		}
		else {
			this.showMain();
		}

		this.showOrHideAutoPlay(GameConfig.autoPlay);
		if (GameManager.getInstance().getFreeCount() > 0) {
			this.setBG(true, false);
			egret.setTimeout(()=>{
				this.showMain();
			},this,900);
			// console.log("sssssTT");
		}
		else {
			this.setBG(false, false);
			// console.log("sssssTT2222");
		}

		if (!this.starMC) {
			this.starMC = game.MCUtils.getMc('star');
			this.strGroup.addChild(this.starMC);
			this.starMC.visible = false;
		}
		this.showAllAnimation();
		this.showStar();
		this.initfighter();
		this.initfighter1();
		this.refreshCount();
	}
	public addListeber(){
		console.log("游戏开始添加滚动界面监听");
		this.gameScence.dianji.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.hands, this);
		// this.dianji.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.nohands, this);
		this.gameScence.dianji.addEventListener(egret.TouchEvent.TOUCH_TAP,this.stopAni,this);
	}

	public glowFilter: egret.GlowFilter;
	public initfighter(): void {
		if (!this.glowFilter) {
			var color: number = 0x09E8F2;        /// 光晕的颜色，十六进制，不包含透明度
			var alpha: number = 0.1;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
			var blurX: number = 40;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
			var blurY: number = 40;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
			var strength: number = 10;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
			var quality: number = egret.BitmapFilterQuality.LOW;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
			var inner: boolean = false;            /// 指定发光是否为内侧发光，暂未实现
			var knockout: boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
			this.glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY,
				strength, quality, inner, knockout);
		}
		this.showlabel.filters = [this.glowFilter];
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
	}


	public onRemove(): void {
		super.onRemove();
	}

	public onChange(e: egret.Event): void {
		vo.GameData.betIndex = this.baner.getIndex();
		this.updataNum();
		this.refreshCount();
	}

	public refreshCount(): void {
		let v: number = vo.GameData.betScoreArr[vo.GameData.betIndex];
		GameConfig.singleWinMaxCount = v * 2000;
		GameConfig.moneyAddMax = v * 20000;
		GameConfig.moneySubMax = v * 20000;
	}

	public updataUI(): void {
		this.autoPlayNumLabel.text = vo.GameData.autoPlayCount + '';
		this.updataNum();
		this.musicBtn.selected = SoundManager.getInstance().effectOn;
		this.shanBtn.selected = GameConfig.speedPlay;
	}

	public updataNum(): void {
		let v: number = vo.GameData.betScoreArr[this.baner.getIndex()];
		if (v > this.bet) {
			egret.Tween.get(this).to({ bet: v }, 500);
		}
		else {
			this.bet = v;
		}
		this.betbanaceLabel.text = '投注: CNY ' + v.toFixed(2);
		if (this.allwin < vo.GameData.slotInfo.allwin) {
			egret.Tween.get(this).to({ allwin: vo.GameData.slotInfo.allwin}, 500);
		}
		else {
			this.allwin = vo.GameData.slotInfo.allwin;
		}

		if (this.balance < vo.GameData.balance) {
			egret.Tween.get(this).to({ balance: vo.GameData.balance }, 500);
		}
		else {
			this.balance = vo.GameData.balance;
		}

	}

	public stopAni():void{
		this.gameScence.dianji.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.stopAni,this);
		this.gameScence.dianji.removeEventListener(mouse.MouseEvent.MOUSE_OVER, this.hands, this);
		if(GameManager.getInstance().gameState == GameType.GameState.PLAYING){
					SoundManager.getInstance().playEffect(SoundConst.BUTTON);
					this.shan.visible = true;
					this.shan0.visible = true;
					this.shan1.visible = true;
					// this.dianji.visible = false;
					
					egret.setTimeout(() => {
						console.log("点击界面停止旋转");
						this.shan.visible = false;
						this.shan0.visible = false;
						this.shan1.visible = false;
						
						this.indexNum1++ 
						if(!GameConfig.speedPlay && this.indexNum1 == 3){
							this.isSpeed();
							GameManager.getInstance().pausume();
						}
							
						if(this.playBtn.enabled){
							GameManager.getInstance().stopGame();
						}
						
				}, this, 200); 
		}
	}

	private hands():void{
		
		if (GameManager.getInstance().gameState != GameType.GameState.STOP){
			mouse.setButtonMode(this.gameScence.dianji,true);
		}else{
			mouse.setButtonMode(this.gameScence.dianji,false);
		}
	}
	// private nohands():void{
	// 	mouse.setButtonMode(this.dianji,false);
	// }
	private _autoTest:AutoPlayUI;
	private indexNum:number = 0;
	private indexNum1:number = 0;
	public curt: number = 0;
	public onTab(e: egret.TouchEvent): void {
		switch (e.currentTarget) {
			case this.playBtn:			//开始旋转
				if (egret.getTimer() - this.curt > 400) {
					this.curt = egret.getTimer();
					if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
						this.hideAllWin();
						GameManager.getInstance().startGame();
					}
					else {
						if(GameManager.getInstance().gameState == GameType.GameState.PLAYING){
							console.log("stopZZZZZZ");
							if(!this.gameScence.group.visible){
								egret.setTimeout(() => {
										GameManager.getInstance().stopGame();
										GameManager.getInstance().enterPlayingState();
									}, this, 200); 
							}
						}
					}
				}else{
					this.indexNum++;

					if(GameManager.getInstance().gameState == GameType.GameState.PLAYING){
							console.log("stopKKKKK");
							if(!this.gameScence.group.visible){
								egret.setTimeout(() => {
										GameManager.getInstance().stopGame();
										GameManager.getInstance().enterPlayingState();
										this.gameScence.dianji.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.stopAni,this);
									}, this, 200); 
							}
						}
						

					//点击太快弹一次窗(只弹一次)
					if(!GameConfig.speedPlay && this.indexNum == 3){
						this.isSpeed();
						GameManager.getInstance().pausume();
            		}
				}

				break;
			case this.autoBtn://自动旋转
				if (!GameConfig.autoPlay) {
					GameManager.getInstance().pausume();
					core.UIManager.openUI(core.UIConst.AutoPlayUI, core.LayerManager.Layer_Top);
				}
				else {
					GameManager.getInstance().autoStopGame();
				}

				break;
			case this.ruleBtn://赔付表
				this.ruleIsShow = !this.ruleIsShow;
				this.setRule();
				break;
			case this.musicBtn://声音开关
				SoundManager.getInstance().setBgOn(this.musicBtn.selected);
				SoundManager.getInstance().setEffectOn(this.musicBtn.selected);
				if (!this.musicBtn.selected) {
					GameManager.getInstance().stopMusic();
				}
				break;
			case this.setBtn://设置开关
				core.UIManager.openUI(core.UIConst.SetUI, core.LayerManager.Layer_Top);
				GameManager.getInstance().pausume();
				break;
			case this.historyBtn://记录开关
				//window.open('https://asicw.playngonetwork.com/CasinoHistory?userId=295167-311O469S532G133A&custId=1214919&pid=185&lang=zh_CN');
				openHistory();
				break;
			case this.shanBtn://快速开关
				GameConfig.speedPlay = this.shanBtn.selected;
				break;
			case this.qusBtn://问题开关
				openDes();
				break;
			case this.exitBtn://退出开关
				SoundManager.getInstance().playEffect(SoundConst.BUTTON);
				egret.setTimeout(() => {
					window.close();
				},this,200);
				break;
		}
	}

	public isSpeed(){
		core.UIManager.openUI(core.UIConst.SpeedTipsUI, core.LayerManager.Layer_Top);
		let ui: SpeedTipsUI = core.UIManager.getUI(core.UIConst.SpeedTipsUI);
		ui.shows('快速进行', '您似乎喜欢较快的游戏节奏。是否启用“快速游戏”模式？'+ '\n' +'您可以随时在设置菜单中禁用它。');
	}



	public ruleIsShow: boolean = false;
	/**
	 * 控制赔付表
	 */
	public setRule(): void {
		this.ruleGroup.visible = this.ruleIsShow;
		this.showGroup.visible = this.gameScence.visible = !this.ruleIsShow;
	}


	/**
	 * 设置显示注数
	 */
	public set bet(value: number) {
		this._bet = value;
		this.betNumLabel.text = 'cny ' + this._bet.toFixed(2);
		if(this.betNumLabel.text.length == 12 || this.betNumLabel.text.length == 13){
			this.betNumLabel.scaleX = 0.9;
		}
		if(this.betNumLabel.text.length < 12){
			this.betNumLabel.scaleX = 1;
		}
		if(this.betNumLabel.text.length == 14){
			this.betNumLabel.scaleX = 0.8;
		}
		if(this.betNumLabel.text.length > 14 && this.betNumLabel.text.length <= 15){
			this.betNumLabel.scaleX = 0.7;
		}
		if(this.betNumLabel.text.length > 15){
			this.betNumLabel.scaleX = 0.5;
		}
	}

	private _bet: number = 0.00;

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
		if(this.moneyLabel.text.length == 12 || this.moneyLabel.text.length == 13){
			this.moneyLabel.scaleX = 0.9;
		}
		if(this.moneyLabel.text.length < 12){
			this.moneyLabel.scaleX = 1;
		}
		if(this.moneyLabel.text.length == 14){
			this.moneyLabel.scaleX = 0.8;
		}
		if(this.moneyLabel.text.length > 14 && this.moneyLabel.text.length <= 15){
			this.moneyLabel.scaleX = 0.7;
		}
		if(this.moneyLabel.text.length > 15){
			this.moneyLabel.scaleX = 0.5;
		}
		this.bananceLabel.text = '余额: CNY ' + this._money.toFixed(2);
	}
	/**
	 * 设置数字超出后scalX缩小
	 */
	public subScalX(num:string){

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
		if(this.allNumLabel.text.length == 12 || this.allNumLabel.text.length == 13){
			this.allNumLabel.scaleX = 0.9;
		}
		if(this.allNumLabel.text.length < 12){
			this.allNumLabel.scaleX = 1;
		}
		if(this.allNumLabel.text.length == 14){
			this.allNumLabel.scaleX = 0.8;
		}
		if(this.allNumLabel.text.length > 14 && this.allNumLabel.text.length <= 15){
			this.allNumLabel.scaleX = 0.7;
		}
		if(this.allNumLabel.text.length > 15){
			this.allNumLabel.scaleX = 0.5;
		}
	}

	/**
	 *得到显示总获胜
	 */
	public get allwin(): number {
		return this._allmoney;
	}


	private _allmoney: number = 0.00;
    /**
	 * 显示或者隐藏自动旋转信息
	 */
	public showOrHideAutoPlay(b: boolean): void {
		this.playBtn.visible = !b;
		this.autoPlayGroup.visible = b;
		egret.Tween.removeTweens(this.autoPlayTitleLabel);
		if (b) {
			this.autoPlayTitleLabel.alpha = 1;
			egret.Tween.get(this.autoPlayTitleLabel, { loop: true }).to({ alpha: 0.3 }, 600).to({ alpha: 1 }, 600).to({ alpha: 0.3 }, 600);
		}
	}


	private winTime: any;
	private isShowWin: boolean = true;
	public indexLine:number;
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

		this.isShowWin = true;
		let iscall: boolean = false;
		let index: number = 0;
		this.indexLine = 0;
		let isover: boolean = false;
		let time:number = 250;		//如果只有一根线time==80
		let isOne:boolean;
		let showLineCall: any = () => {
			this.gameScence.clearAll();
			
			if (!this.isShowWin) return;
			if (index == 0) {
				this.gameScence.showAllLineWin(winArr);	//显示全部线  显示的时候直接是亮的
				if(winArr.length == 1){		//如果只有一根线，着time==80
					isOne = true;
					time = 80;//80
				}else{
					isOne = false;
					time = 250;
				}
				GameManager.getInstance().showTips('恭喜您!');
				this.winTime = egret.setTimeout(() => {
					
					if (sc == 0) {
						SoundManager.getInstance().playEffect(winArr[index].Symbol + '_mp3');
					}
					this.gameScence.clearAll();		//vo.GameData.betScoreArr[vo.GameData.betIndex]*10000
					if (sc == 0) {
						vo.GameData.slotInfo.allwin += winArr[index].Reward.BetMultiplier * vo.GameData.betScoreArr[vo.GameData.betIndex]*10000/5  / GameConfig.bili;
						this.setAllWin(vo.GameData.slotInfo.allwin);
					}
					
					this.gameScence.showLineWin(isOne,winArr[index], () => {
						// console.log( index + " === winArr[index] === " + winArr[index].Data.Line)
						index++;
						
						if(winArr.length == 1){
							this.indexLine++;
						}
						if(winArr.length == 2){
							egret.setTimeout(() => {
								this.indexLine++;	
							},this,1700);
						}
						if(winArr.length == 3){
							egret.setTimeout(() => {
								this.indexLine++;	
							},this,3700);
						}
						if(winArr.length == 4){
							egret.setTimeout(() => {
								this.indexLine++;	
							},this,5700);
						}
						if(winArr.length == 5){
							egret.setTimeout(() => {
								this.indexLine++;	
							},this,9700);
						}
						if (index >= winArr.length){
							index = 0;
							sc = 1;
							if (!iscall && callfun && callobj) {
								iscall = true;
								callfun.call(callobj);
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
					vo.GameData.slotInfo.allwin += winArr[index].Reward.BetMultiplier * vo.GameData.betScoreArr[vo.GameData.betIndex]*10000/5  / GameConfig.bili;
					this.setAllWin(vo.GameData.slotInfo.allwin);
				}
				if (sc == 0) {
					SoundManager.getInstance().playEffect(winArr[index].Symbol + '_mp3');
				}
				this.gameScence.showLineWin(isOne,winArr[index], () => {
					index++;
					if (index >= winArr.length) {
						index = 0;
						sc = 1;
						if (!iscall && callfun && callobj) {
							iscall = true;
							callfun.call(callobj);
						}
					}				
                    showLineCall();
					
				}, this);
			}

		};
		showLineCall();
	}
	public hideAllWin1(): void {
		egret.clearTimeout(this.winTime);
		this.gameScence.clearAll();
		this.gameScence.setItem();
		this.isShowWin = false;
		// if (GameManager.getInstance().getFreeCount() == 0) {
		// 	if (vo.GameData.resultData) {
		// 		vo.GameData.balance = vo.GameData.resultData.Value.Balance;
		// 		// console.log("余额 === " + vo.GameData.balance);
		// 		this.setMoney(vo.GameData.balance);
		// 	}
		// }
	}


	/**
	 * 停止显示获胜
	 */
	public hideAllWin(): void {
		egret.clearTimeout(this.winTime);
		this.gameScence.clearAll();
		this.gameScence.setItem();
		this.isShowWin = false;
		if (GameManager.getInstance().getFreeCount() == 0) {
			if (vo.GameData.resultData) {
				vo.GameData.balance = vo.GameData.resultData.Value.Balance;
				// console.log("余额 === " + vo.GameData.balance);
				this.setMoney(vo.GameData.balance);
			}
		}
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
		if (n > this.allwin) {
			egret.Tween.get(this).to({ allwin: n }, 500);
		}
		else {
			this.allwin = n;
		}

		this.rewardLabel.text = '奖金: CNY ' + n.toFixed(2);
	}

	/**
	 * 设置余额
	 */
	public setMoney(n: number): void {
		
		if (n > this.balance) {
			egret.Tween.get(this).to({ balance: n }, 500);
		}
		else {
			this.balance = n;
		}
	}

	public qbg0: eui.Image;
	public qbg1: eui.Image;

	/**
	 * 设置背景
	 */
	public setBG(isFree: boolean = false, isact: boolean = true): void {
		//this.bg0.source = isFree ? 'background_texture1_level1_jpg' : 'background_texture0_level1_jpg';
		this.qbg0.source = isFree ? 'logo_texture1_level1_01-04_png' : 'logo_texture1_level1_01-03_png';
		this.qbg1.source = isFree ? 'logo_texture1_level1_01-02_png' : 'logo_texture1_level1_01_png';
		this.showbg.source = isFree ? 'menu2_png' : 'menu1_png';

		if (isFree) {
			if (!isact) {
				this.bg0.alpha = 0;
				this.bg1.alpha = 1;
				return;
			}
			egret.Tween.get(this.bg0).to({ alpha: 0 }, 1000);
			egret.Tween.get(this.bg1).to({ alpha: 1 }, 1000);
		}
		else {
			if (!isact) {
				this.bg0.alpha = 1;
				this.bg1.alpha = 0;
				return;
			}
			egret.Tween.get(this.bg0).to({ alpha: 1 }, 1000);
			egret.Tween.get(this.bg1).to({ alpha: 0 }, 1000);
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
		if(rx > 700){
			rx = 700;
		}
		if(ry > 88){
			ry = 88;
		}
		if(ry < 13){
			ry = 13;
		}
		if(rx >= 372 && rx <= 448){
			rx = 415;
		}
		if(ry >= 10 &&ry <= 88){
			ry = 52;
		}
		this.starMC.x = rx;
		this.starMC.y = ry;
		// this.starMC.scaleX = 0.6;
		// this.starMC.scaleY = 0.6;
		this.starMC.gotoAndPlay('star');
		this.starMC.once(egret.MovieClipEvent.COMPLETE, () => {
			this.showStar();
		}, this);
	}

	public hideStar(): void {
		this.starMC.stop();
		this.starMC.visible = false;
	}

	public preview: PreviewCompoment;
	public logoImg: eui.Image;



	public showlogin(): void {
		this.preview.visible = this.logoImg.visible = true;
		this.mbg0.visible = this.mgroup0.visible = this.mgroup1.visible = false;
	}

	public mbg0: eui.Image;
	public mgroup0: eui.Group;
	public mgroup1: eui.Group;
	public showMain(): void {
		this.preview.visible = this.logoImg.visible = false;
		this.mbg0.visible = this.mgroup0.visible = this.mgroup1.visible = true;
		GameConfig.emptyPlay = true;
		egret.setTimeout(() => {
			this.updataUI();
			this.showTitleAnimation(3, null);
			if(GameManager.getInstance().getFreeCount() > 0){
				GameManager.getInstance().startGame();
			}
		}, this, 500);
	}























}