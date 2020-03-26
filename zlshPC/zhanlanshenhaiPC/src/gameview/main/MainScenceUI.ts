
declare function openHistory();
declare function openDes();
class MainScenceUI extends core.BaseUI {
	public bg: eui.Image;
	public bg1: eui.Image;
	public setBar: SetBar;
	public gameScence: GameScence;

	public tGameBtn: TextButton;
	public labelArr: Array<any> = ['新游戏', '经典老虎机', '电动吃角子老虎', '桌面游戏', '累积游戏'];
	public topGroup: eui.Group;
	public topList: TopList;

	public bottomGroup: eui.Group;
	public topListGroup: eui.Group;

	public topMask: eui.Rect;
	public bottomMask: eui.Rect;

	public aGroup: eui.Group;
	public bigRewardLabel: eui.Image;

	public timeLabel: eui.Label;
	public mainGroup: eui.Group;
	//抽奖
	public freeGroup:eui.Group;
	public rotateNum:eui.Label;
	public fanbeiNum:eui.Label;
	public beiKe_x0:eui.Image;
	public beiKe_x1:eui.Image;
	public beiKe_x2:eui.Image;
	public beiKe_x3:eui.Image;
	public beiKe_x4:eui.Image;
	public freeNumGroup:eui.Group;

	public tipsGroup:eui.Group;		//选贝壳结束后，自动游戏结束后 的弹窗
	public pickFree:eui.Group;
	public pickFreeBtn:MouseButton;
	public overFree:eui.Group;
	public overFreeBtn:MouseButton;

	public rewardMc: egret.MovieClip;
	public mcGroup: eui.Group;

	public free_group:eui.Group;
	public free_fanbei:eui.Label;
	public free_Num:eui.Label;
	public free_money:eui.Label;
	public logo1:eui.Image;
	public logo2:eui.Image;

	public rewardGroup: eui.Group;
	public rewardLabel: eui.BitmapLabel;
	public bigRewardGroup: eui.Group;

	public infoBtn: MouseButton;
	public lineSubBtn: MouseButton;
	public lineAddBtn: MouseButton;
	public betSubBtn: MouseButton;
	public betAddBtn: MouseButton;
	public speedOffBtn: MouseButton;
	public speedOffTxt:eui.Image;
	public speedOnBtn: MouseButton;
	public speedOnTxt:eui.Image;
	public startBtn: MouseButton;
	public stopBtn: MouseButton;
	public autoItem: AutoItem;
	public textGroup: eui.Group;


	public freeNum:eui.Label;
	public beiNum:eui.Label;

	public bonusBtn:MouseButton;
	public bonusBtnShan:eui.Image;
	public balanceLabel:eui.Label;

	public lineState: number = 0;
	public betState: number = 0;
	public longTouch: boolean = false;

	public lineLabel: eui.BitmapLabel;
	public betLabel: eui.BitmapLabel;
	public allBetLabel: eui.BitmapLabel;

	public constructor() {
		super();
		this.skinName = MainScenceUISkin;
	}

	public onAdd(): void {
		super.onAdd();
		SoundManager.getInstance().setEffectOn(true);
		this.gameScence.init();
		this.gameScence.reset();
		this.updataUI();
		this.registerEvent(this.stage, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.topListGroup, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.setBar, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.topGroup, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		// 
		this.registerEvent(this.infoBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.lineSubBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.lineAddBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.betSubBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.betAddBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.speedOffBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.speedOnBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.startBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.stopBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.bonusBtn,egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.pickFreeBtn,egret.TouchEvent.TOUCH_TAP, this.closeFreeUi, this);
		this.registerEvent(this.overFreeBtn,egret.TouchEvent.TOUCH_TAP, this.endFreeUi, this);
		this.registerEvent(this.gameScence.dianji, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.bonusBtn.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.test1, this);
		this.bonusBtn.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.test3, this);
		this.balanceLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.balance);

		core.MyUIUtils.addLongTouch(this.lineSubBtn, () => {
			this.lineState = -1;
			this.hideWin();
			this.longTouch = true;
		}, () => {
			this.lineState = 0;
		}, this);
		core.MyUIUtils.addLongTouch(this.lineAddBtn, () => {
			this.lineState = 1;
			this.hideWin();
			this.longTouch = true;
		}, () => {
			this.lineState = 0;
		}, this);

		core.MyUIUtils.addLongTouch(this.betSubBtn, () => {
			this.betState = -1;
			this.hideWin();
			this.longTouch = true;
		}, () => {
			this.betState = 0
		}, this);
		core.MyUIUtils.addLongTouch(this.betAddBtn, () => {
			this.betState = 1;
			this.hideWin();
			this.longTouch = true;
		}, () => {
			this.betState = 0;
		}, this);

		this.updataBtn();
		this.updataText(false);
		this.setReward(0);


		//this.registerEvent(this, egret.Event.RENDER, this.onFrame, this);
		core.TimerManager.instance.addTick(1000, -1, this.onFrame, this);
		core.TimerManager.instance.addTick(200, -1, this.onFrame1, this);

		for (let i: number = 0; i < 5; i++) {
			let textButton: TextButton = (this['t' + i] as TextButton);
			textButton.label0.text = this.labelArr[i];
			textButton.label1.text = this.labelArr[i];
			this.registerEvent(textButton, egret.TouchEvent.TOUCH_TAP, this.onSetTab, this);
		}
		this.registerEvent(this.tGameBtn, egret.TouchEvent.TOUCH_TAP, this.onSetTab, this);
		this.tGameBtn.label0.text = '游戏';
		this.tGameBtn.label1.text = '游戏';
		this.onResize();

		let today: any = egret.localStorage.getItem('today');
		if (today) {
			let nowtime = new Date().getTime();
			if (!Utils.isSameDay(parseInt(today), nowtime)) {
				//弹出
				core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
				let ui: StipsUI = core.UIManager.getUI(core.UIConst.StipsUI);
				ui.showConfirBtn('您的存款已被通过.我们希望您在我们的赌城玩得愉快.祝您好运！', () => {
					ui.hide();
					egret.setTimeout(() => {
						core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
						ui.showConfirBtn('您的要求的 CNY' + GameManager.numberToCommonStr(vo.GameData.balance) + ' 提款已被通过.', () => {
							ui.hide();
						});
					}, this, 100);

				});
			}
		}
		else {
			//弹出
			core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
			let ui: StipsUI = core.UIManager.getUI(core.UIConst.StipsUI);
			ui.showConfirBtn('您的存款已被通过.我们希望您在我们的赌城玩得愉快.祝您好运！', () => {
				ui.hide();
				egret.setTimeout(() => {
					core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
					ui.showConfirBtn('您的要求的 CNY' + GameManager.numberToCommonStr(vo.GameData.balance) + ' 提款已被通过.', () => {
						ui.hide();
					});
				}, this, 100);

			});
		}
		egret.localStorage.setItem('today', new Date().getTime() + '')
	}
	

	public updataText(isShowLine: boolean = true): void {
		this.lineLabel.text = vo.GameData.line + '';
		this.betLabel.text = "x" + vo.GameData.betScoreArr[vo.GameData.betIndex].toFixed(2);
		this.allBetLabel.text = "x" + (vo.GameData.line * vo.GameData.betScoreArr[vo.GameData.betIndex]).toFixed(2);
		if (isShowLine) {
			this.gameScence.pent.showBg(vo.GameData.line);
			this.gameScence.pent.showLineArr(vo.GameData.line);
		}
	}
	public updataTextBtn(lineNum:number): void {
		this.hideWin();
		if (vo.GameData.betIndex > 0) {
				vo.GameData.betIndex -= 1;
			}
		this.betSubBtn.enabled = vo.GameData.betIndex > 0;
		this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
		vo.GameData.line = lineNum;
		this.lineLabel.text = lineNum + '';
		this.betLabel.text = "x" + vo.GameData.betScoreArr[vo.GameData.betIndex].toFixed(2);
		this.allBetLabel.text ="x" + (lineNum * vo.GameData.betScoreArr[vo.GameData.betIndex]).toFixed(2);
		this.lineSubBtn.enabled = lineNum > 1;
		this.lineAddBtn.enabled = lineNum < 25;
		this.gameScence.pent.showLineArr(lineNum);
		this.gameScence.pent.showBg(lineNum);
	}

	public updataBtn(): void {
		this.lineSubBtn.enabled = vo.GameData.line > 1;
		this.lineAddBtn.enabled = vo.GameData.line < 25;
		this.betSubBtn.enabled = vo.GameData.betIndex > 0;
		this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
	}

	public setdataArr(): void {
		let dataarr: Array<any> = RES.getRes('config_json')[this.index + ''];
		this.topList.setArr(dataarr);
	}
	public setSelected(index: number = -1): void {
		for (let i: number = 0; i < 5; i++) {
			let tbn: TextButton = this['t' + i] as TextButton;
			if (index == i) {
				tbn.setSelected(true);
			}
			else {
				tbn.setSelected(false);
			}
		}

	}
	public index: number = -1;
	public onSetTab(e: egret.TouchEvent): void {

		switch (e.currentTarget) {
			case this['t' + 0]:
				if (this.topList.isShow) {
					if (this.index != 0) {
						this.index = 0;
						this.setdataArr();
						this.setSelected(0);
					}
				}
				else {
					this.index = 0;
					this.setdataArr();
					this.topList.show();
					this.setSelected(0);
				}
				break;
			case this['t' + 1]:
				if (this.topList.isShow) {
					if (this.index != 1) {
						this.index = 1;
						this.setdataArr();
						this.setSelected(1);
					}
				}
				else {
					this.index = 1;
					this.setdataArr();
					this.topList.show();
					this.setSelected(1);
				}
				break;
			case this['t' + 2]:
				if (this.topList.isShow) {
					if (this.index != 2) {
						this.index = 2;
						this.setdataArr();
						this.setSelected(2);
					}
				}
				else {
					this.index = 2;
					this.setdataArr();
					this.topList.show();
					this.setSelected(2);
				}
				break;
			case this['t' + 3]:
				if (this.topList.isShow) {
					if (this.index != 3) {
						this.index = 3;
						this.setdataArr();
						this.setSelected(3);
					}
				}
				else {
					this.index = 3;
					this.setdataArr();
					this.topList.show();
					this.setSelected(3);
				}
				break;
			case this['t' + 4]:
				if (this.topList.isShow) {
					if (this.index != 4) {
						this.index = 4;
						this.setdataArr();
						this.setSelected(4);
					}
				}
				else {
					this.index = 4;
					this.setdataArr();
					this.topList.show();
					this.setSelected(4);
				}
				break;
			case this.tGameBtn:
				if (this.topList.isShow) {
					this.topList.hide();
				}
				else {
					this.index = 0;
					this.setdataArr();
					this.topList.show();
					this.setSelected(0);
				}
				break;
		}
	}

	public onControllTab(e: egret.TouchEvent): void {

		switch (e.currentTarget) {
			case this.infoBtn:
				this.mainGroup.visible = false;
				core.UIManager.openUI(core.UIConst.HelpUI, core.LayerManager.Layer_Top);
				break;
			case this.lineSubBtn:
				if (this.longTouch) return;
				this.hideWin();
				if (vo.GameData.line > 1) {
					vo.GameData.line -= 1;
					SoundManager.getInstance().playEffect(SoundConst.SUB);
				}
				this.lineSubBtn.enabled = vo.GameData.line > 1;
				this.lineAddBtn.enabled = vo.GameData.line < 25;
				console.log("vo.GameData.line === " +vo.GameData.line);
				this.updataText();
				
				this.longTouch = false;
				break;
			case this.lineAddBtn:
				if (this.longTouch) return;
				this.hideWin();
				if (vo.GameData.line < 25) {
					vo.GameData.line += 1;
					SoundManager.getInstance().playEffect(SoundConst.ADD);
				}
				this.lineSubBtn.enabled = vo.GameData.line > 1;
				this.lineAddBtn.enabled = vo.GameData.line < 25;
				this.updataText();
				this.longTouch = false;
				break;
			case this.betSubBtn:
				if (this.longTouch) return;
				this.hideWin();
				if (vo.GameData.betIndex > 0) {
					vo.GameData.betIndex -= 1;
					SoundManager.getInstance().playEffect(SoundConst.SUB);
				}
				this.betSubBtn.enabled = vo.GameData.betIndex > 0;
				this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
				this.updataText(false);
				this.longTouch = false;
				break;
			case this.betAddBtn:
				if (this.longTouch) return;
				this.hideWin();
				if (vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1) {
					vo.GameData.betIndex += 1;
					SoundManager.getInstance().playEffect(SoundConst.ADD);
				}
				this.betSubBtn.enabled = vo.GameData.betIndex > 0;
				this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
				this.updataText(false);
				this.longTouch = false;
				break;
			case this.startBtn:
				SoundManager.getInstance().playEffect(SoundConst.STARTBTN);
				GameManager.getInstance().startGame();
				break;
			case this.stopBtn:
				SoundManager.getInstance().playEffect(SoundConst.STOPBTN);
				GameManager.getInstance().stopGame();
				break;
			case this.speedOnBtn:
				this.speedOnBtn.visible = false;
				this.speedOnTxt.visible = false;
				this.speedOffBtn.visible = true;
				this.speedOffTxt.visible = true;
				GameConfig.speedPlay=false;
				SoundManager.getInstance().playEffect(SoundConst.SPEED_ON);
				break;
			case this.speedOffBtn:
				this.speedOnBtn.visible = true;
				this.speedOnTxt.visible = true;
				this.speedOffBtn.visible = false;
				this.speedOffTxt.visible = false;
				GameConfig.speedPlay=true;
				SoundManager.getInstance().playEffect(SoundConst.SPEED_OFF);
				break;
			case this.gameScence.dianji:
				if ((GameManager.getInstance().gameState != GameType.GameState.STOP) && this.stopBtn.visible) {
					SoundManager.getInstance().playEffect(SoundConst.STOPBTN);
					console.log("点击了屏幕");
					GameManager.getInstance().stopGame();
				}
				break;
			case this.bonusBtn:
				//进入免费游戏选择界面
				console.log("免费游戏界面");
				this.removeEventListener(egret.Event.ENTER_FRAME, this.taouchBonus, this);
				this.startBtn.visible = true;
				this.bonusBtn.visible = false;
				this.bonusBtnShan.visible = false;
				this.gameScence.huanyuanC1(this.bonusPos);
				this.gameScence.removeBonusMc();
				this.showFreeUi();
				break;
		}
	}

	public showFreeUi():void{
		console.log("打开了免费界面");
		//音乐
		this.hideWin();
		GameConfig.emptyPlay = false;
		this.bg.visible = false;
		this.bg1.visible = true;
		this.mainGroup.visible = false;
		this.freeGroup.visible = true;
		
		for(var i = 0 ; i < 5;i++){
			this["beiKe_"+i].pixelHitTest = true;
			this["beiKe_"+i].addEventListener(egret.TouchEvent.TOUCH_TAP,this.changeBeiKe,this);
		}
	}

	public indexNum:number = 0;
	public changeBeiKe(evt:egret.TouchEvent):void{
		//选择贝壳，播放动画
		let index:number;
		let Count:number;
		this.indexNum++;
		
		switch(evt.currentTarget){
			case this["beiKe_0"]:
				index = 0;
				Count = 5;
			break;
			case this["beiKe_1"]:
				index = 1;
				Count = 7;
			break;
			case this["beiKe_2"]:
				index = 2;
				Count = 15;
			break;
			case this["beiKe_3"]:
				index = 3;
				Count = 10;
			break;
			case this["beiKe_4"]:
				index = 4;
				Count = 8;
			break;
		}
		// vo.GameData.TotalActionCount = vo.GameData.TotalActionCount + Count;
		if(this.indexNum == 1){
			vo.GameData.TotalActionCount = Count + 8;
		}
		if(this.indexNum >= 2){
			if(Count < 8){
				Count = 0;
			}
			vo.GameData.TotalActionCount = (vo.GameData.TotalActionCount + Count);
		}
		this["beiKe_"+index].removeEventListener(egret.TouchEvent.TOUCH_TAP,this.changeBeiKe,this);
		if(this.indexNum >= 2){
			for(var i = 0 ; i < 5;i++){
				this["beiKe_"+i].removeEventListener(egret.TouchEvent.TOUCH_TAP,this.changeBeiKe,this);
			}
		}
		egret.Tween.get(this["beiKe_"+index]).call(()=>{ this["beiKe_"+index].source = "with_pearl_01_png"})
				.wait(300)
				.call(()=>{ this["beiKe_"+index].source = "with_pearl_02_png"})
				.wait(500)
				.call(()=>{ 
					this["beiKe_"+index].source = "with_pearl_03_png";
					// this.rotateNum.text = "";
					// this.fanbeiNum.text = "";
					this.freeNum.text = "";
					this.beiNum.text = "";
					this.rotateNum.text = ""+ vo.GameData.TotalActionCount;
					this.fanbeiNum.text = "X2";
					this.freeNumGroup.visible = true;
					
					if(index <= 2){
						this["beiKe_x"+index].y = 327;
					}else{
						this["beiKe_x"+index].y = 525;
					}
					this["beiKe_x"+index].visible = true;
					// 5 7 15 10 8
					egret.setTimeout(()=>{
						if(this.indexNum >= 2){
							for(var i = 0 ; i < 5;i++){
								if(!this["beiKe_x"+i].visible){
									if(i <= 2){
										this["beiKe_x"+i].y = 433;
									}else{
										this["beiKe_x"+i].y = 630;
									}
									this["beiKe_x"+i].visible = true;
								}
							}
							this.fanbeiNum.text = "X2";
							this.rotateNum.text = "" + vo.GameData.TotalActionCount;

							this.freeNum.text = "" + vo.GameData.TotalActionCount;
							this.beiNum.text = "2";
							Commond.sendBonus(vo.GameData.TotalActionCount, 2);
							this.tipsGroup.visible = true;
							vo.GameData.TotalActionCount -= 1;
						}
					},this,200);
				})

	}
	//选择贝壳结束按钮
	public closeFreeUi():void{
		this.indexNum = 0;
		//关闭了选择免费界面
		GameConfig.emptyPlay = true;
		GameConfig.freeGame = false;
		this.bg.visible = true;
		this.bg1.visible = false;
		this.mainGroup.visible = true;
		this.freeGroup.visible = false;
		this.tipsGroup.visible = false;
		//游戏页面ui 
		this.logo1.visible = false;
		this.logo2.visible = true;
		this.free_group.visible = true;
		this.gameScence.freeBg.visible = true;
		this.free_fanbei.text = this.fanbeiNum.text;
		this.free_Num.text = ""+ vo.GameData.TotalActionCount;//GameManager.getInstance().getFreeCount();

		for(var i = 0 ; i < 5;i++){
			this["beiKe_"+i].source = "with_pearl_01_png";
			this["beiKe_x"+i].visible = false;
		}
		GameManager.getInstance().startGame(true);
	}

	//自动游戏结束弹窗
	public endFree():void{
		this.tipsGroup.visible = true;
		this.pickFree.visible = false;
		this.overFree.visible = true;
		this.stopMusic();
	}
	//免费游戏结束按钮
	public endFreeUi():void{
		//游戏页面ui 
		
		this.logo1.visible = true;
		this.logo2.visible = false;
		this.free_group.visible = false;
		this.gameScence.freeBg.visible = false;

		this.tipsGroup.visible = false;
		this.pickFree.visible = true;
		this.overFree.visible = false;
		this.autoItem.sopAutoBtn.enabled = true;
		//还有自动次数，游戏停止，弹窗

		//展示金币
		let resultData: any = vo.GameData.resultData;	
		let totalBet: number = resultData.Value.SpinResult.TotalBet;//vo.GameData.betScoreArr[vo.GameData.betIndex];//
		let totalWin: number = resultData.Value.SpinResult.TotalWin;
		let denom:number = resultData.Value.SpinResult.Denom /10000;	//总赌注
		let winmoney: number = resultData.Value.Dollar;			//奖金
		let b: number = winmoney / denom;
		console.log(denom + " == 最后的分数 == " + winmoney);
		if(b >= 30){		//大奖 喷金币
			this.setReward(winmoney, true, 4);
		}
		if(b >= 8 && b < 30){		//奖金栏放大
			this.setReward(winmoney, true, 3);
		}
		if(b >= 1 && b < 8){		//＂奖金栏＂数字变动(音效长)
			this.setReward(winmoney, true, 2);
		}
		if(b < 1){				//＂奖金栏＂数字变动(音效短)
			this.setReward(winmoney, true, 1);
		}
	}

	public onRemove(): void {
		super.onRemove();
	}

	public onResize(): void {
		var scaleX = (window.innerWidth / GameConfig.DES_WIDTH) || 0;
		var scaleY = (window.innerHeight / GameConfig.DES_HEIGHT) || 0;
		let cs: number = scaleX > scaleY ? scaleY : scaleX;
		let s = scaleX > scaleY ? scaleY : scaleX;
		
		this.gameScence.pent.tipScale();
		this.mainGroup.scaleX = s+0.04;
		this.mainGroup.scaleY = s+0.04;
		this.freeGroup.scaleX = s+0.04;
		this.freeGroup.scaleY = s+0.04;
		this.tipsGroup.scaleX = s;
		this.tipsGroup.scaleY = s;

		let w: number = GameConfig.WIDTH / GameConfig.HEIGHT > GameConfig.MAX_WIDTH / GameConfig.DES_HEIGHT ? GameConfig.MAX_WIDTH * s : GameConfig.WIDTH;
		this.topGroup.width = scaleX > scaleY ? w : GameConfig.DES_WIDTH * cs;
		this.bottomGroup.width = scaleX > scaleY ? w : GameConfig.DES_WIDTH * cs;
		this.topGroup.width = this.bottomGroup.width;
		if (window.innerHeight > GameConfig.J_HEIGHT) {
			//let maxh: number = window.innerHeight - GameConfig.J_HEIGHT;
			//s = s * (1 - maxh / GameConfig.HEIGHT);
			if (scaleX > scaleY) {
				this.bg.scaleX = s;
				this.bg.scaleY = s;
				this.bg1.scaleX = s;
				this.bg1.scaleY = s;
			}
			else {
				this.bg.scaleX = s;
				this.bg.scaleY = GameConfig.J_HEIGHT / this.bg.height;
				this.bg1.scaleX = s;
				this.bg1.scaleY = GameConfig.J_HEIGHT / this.bg1.height;
			}
			let dh: number = GameConfig.DES_HEIGHT - GameConfig.J_HEIGHT;
			let d: number = (window.innerHeight - GameConfig.J_HEIGHT) / dh * dh / 4;
			//this.topGroup.top = scaleX > scaleY ? 0 + d : GameConfig.HEIGHT / 2 - this.mainGroup.height * s / 2;
			// this.bottomGroup.bottom = scaleX > scaleY ? 0 + d : GameConfig.HEIGHT / 2 - this.mainGroup.height * s / 2;
			this.topGroup.top = d;
			this.bottomGroup.bottom = d;
		}
		else {
			this.bg.scaleX = s;
			this.bg.scaleY = GameConfig.J_HEIGHT / this.bg.height;
			this.bg1.scaleX = s;
			this.bg1.scaleY = GameConfig.J_HEIGHT / this.bg1.height;
			this.topGroup.top = 0;
			this.bottomGroup.bottom = 0;
		}
		egret.clearTimeout(this.clet);
		this.clet = egret.setTimeout(() => {
			this.topList.updataPosition();
		}, this, 100);
		egret.updateAllScreens();
	}

	public clet: any;
	public updataUI(): void {

	}

	public onTab(e: egret.TouchEvent): void {
		switch (e.currentTarget) {
			case this.stage:
				this.topList.hide();
				this.setBar.closeall();
				this.longTouch = false;
				break;
			case this.topListGroup:
				e.stopPropagation();
				e.stopImmediatePropagation();
				break;
			case this.setBar:
				e.stopPropagation();
				e.stopImmediatePropagation();
				break;
			case this.topGroup:
				e.stopPropagation();
				e.stopImmediatePropagation();
				break;

		}
		this.updataUI();
	}

	public onFrame(): void {
		this.timeLabel.text = Utils.getTime1();
	}

	public onFrame1(): void {

		if (this.betState == -1) {
			if (vo.GameData.betIndex > 0) {
				vo.GameData.betIndex -= 1;
				SoundManager.getInstance().playEffect(SoundConst.SUB);
			}
			this.betSubBtn.enabled = vo.GameData.betIndex > 0;
			this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
			this.updataText();
		}
		else if (this.betState == 1) {
			if (vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1) {
				vo.GameData.betIndex += 1;
				SoundManager.getInstance().playEffect(SoundConst.ADD);
			}
			this.betSubBtn.enabled = vo.GameData.betIndex > 0;
			this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
			this.updataText();
		}
		if (this.lineState == -1) {
			if (vo.GameData.line > 1) {
				vo.GameData.line -= 1;
				SoundManager.getInstance().playEffect(SoundConst.SUB);
			}
			this.lineSubBtn.enabled = vo.GameData.line > 1;
			this.lineAddBtn.enabled = vo.GameData.line < 25;
			this.updataText();
		}
		else if (this.lineState == 1) {
			if (vo.GameData.line < 25) {
				vo.GameData.line += 1;
				SoundManager.getInstance().playEffect(SoundConst.ADD);
			}
			this.lineSubBtn.enabled = vo.GameData.line > 1;
			this.lineAddBtn.enabled = vo.GameData.line < 25;
			this.updataText();
		}
	}


	public test1(evt: egret.TouchEvent): void {
		var ttt = evt.currentTarget.hitTestPoint(evt.stageX, evt.stageY);
		if (ttt) {
			this.addEventListener(egret.Event.ENTER_FRAME, this.taouchBonus, this);
		}
	}
	public test3(evt: egret.TouchEvent): void {
		this.removeEventListener(egret.Event.ENTER_FRAME, this.taouchBonus, this);
		this.bonusBtnSource();
	}

	public taouchBonus() {
		this.bonusBtnShan.visible = true;
		egret.clearTimeout(this.bonusBtnAni);
	}

	public bonusBtnSource(): void {
		if (this.bonusBtn.visible) {
			this.bonusBtnShan.visible = false;
			this.bonusBtnAni = egret.setTimeout(() => {
				this.bonusBtnShan.visible = true;
				this.test();
			}, this, 200);
		}
	}
	public test() {
		// this.bonusBtnShan.visible = true;
		if (this.bonusBtn.visible) {
			this.bonusBtnAni = egret.setTimeout(() => {
				this.bonusBtnSource();
			}, this, 200);
		}
	}
	public bonusBtnAni: number;
	public curtime: number = 0;	
	public chanel: egret.SoundChannel;
	public stopMusic(): void {
		if (this.chanel) {
			this.chanel.stop();
			this.chanel = null;
		}
	}
	public bonusPos:Array<any>;
	public showWin(arr: Array<any>): void {
		//点击按钮闪烁

		//进入免费游戏抽奖
		if (arr.length > 0 && arr[0].Type == "Bonus2" && arr[0].SymbolCount == 3){
			console.log('免费游戏中奖');
			//GameManager.getInstance().getFreeCount() > 0 && 
			if(vo.GameData.resultData.ActionType == 'slot'){
				GameConfig.freeGame = true;
			}
			// else{
			// 	serverData.initData.Value.TotalActionCount += 15;
			// 	if(serverData.initData.Value.TotalActionCount >= 33){
			// 		serverData.initData.Value.TotalActionCount = 33;
			// 	}
			// }
			if (SoundManager.getInstance().effectOn && this.chanel == null) {
				SoundManager.getInstance().playMusic(SoundConst.FREEBG, -1).then((chanel) => {
						this.chanel = chanel;
					});
			}
			if(GameConfig.freeGame){
				this.bonusBtn.visible = true;
				this.bonusBtnShan.visible = true;
				this.bonusBtnAni = egret.setTimeout(() => {
					this.bonusBtnSource();
				}, this, 200);
				//当有3个C1,C1不在中间一列移动到中间
				// this.gameScence.
				this.gameScence.displayBonus(arr[0].Positions);
				this.bonusPos = [];
				this.bonusPos = arr[0].Positions;
				//显示免费中奖的3个动画
				let positions: Array<any> = arr[0].Positions;
				// this.gameScence.pent.showkuang2(arr[0].Positions);		//免费旋转3个的框
				for (let j: number = 0; j < positions.length; j++) {
					let p: any = positions[j];
					this.gameScence.showAnimation(p);	//免费旋转3个的动画
				}
				this.startBtn.visible = true;
				this.startBtn.enabled = false;
				this.stopBtn.visible = false;
				this.infoBtn.enabled = false;
				this.autoItem.sopAutoBtn.enabled = false;
				this.betSubBtn.enabled = this.betAddBtn.enabled = false;
				this.lineSubBtn.enabled = this.lineAddBtn.enabled = false;
				this.autoItem.autoBtn.enabled = false;
				// this.autoItem.autoText_mode.visible = false;
				// this.autoItem.autoText_an.visible = false;
				if(!this.autoItem.autoBtn.visible){
					this.autoItem.autoText_mode.visible = false;
					this.autoItem.autoText_an.visible = false;
				}else{
					this.autoItem.autoText_mode.visible = false;
					this.autoItem.autoText_an.visible = true;
				}
				
				this.speedOffBtn.enabled = false;
				this.speedOnBtn.enabled = false;
				if(!GameConfig.speedPlay){	//没开快速
					if(!this.speedOffBtn.enabled){
						this.speedOffTxt.visible = false;
					}else{
						this.speedOffTxt.visible = true;
					}
				}else{		//开快速
					if(!this.speedOnBtn.enabled){
						this.speedOnTxt.visible = false;
					}else{
						this.speedOnTxt.visible = true;
					}
				}
				this.topMask.visible = true;
				this.setBar.enabled = false;
				this.bottomMask.visible = true;
				
			}
			return;
		}

		//先显示一下全部线
		this.gameScence.pent.clearTip();
		this.gameScence.pent.cleaAllLine();
		// if (arr.length > 1) {
		for (let i: number = 0; i < arr.length; i++) {
			let data: any = arr[i].Data;
			let positions: Array<any> = arr[i].Positions;
			if (data) {
				let line: number = data.Line;
				if (arr.length > 1) {
					this.gameScence.pent.showTipLine(line);
					this.gameScence.pent.showLines(line);
				}
			}
			//显示动画
			for (let j: number = 0; j < positions.length; j++) {
				let p: any = positions[j];
				this.gameScence.showAnimation(p);
			}
		}

		
		//}
		
		let t: number = arr.length > 1 ? 900 : 0;
		this.tt = egret.setTimeout(() => {
			this.gameScence.pent.clearTip();
			this.gameScence.pent.cleaAllLine();
			let data: any = arr[this.winIndex];
			if (data.Type != "Bonus2") {
				let arrs: Array<any> = this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);

				if(GameConfig.speedPlay && GameConfig.autoPlay){  //快速是无动画
					this.gameScence.pent.showLines(data.Data.Line);
				}else{
					// this.gameScence.pent.showLine(data.Data.Line, data.Positions);
					this.gameScence.pent.showLine(data.Data.Line, arrs);
					this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
				}
				this.gameScence.pent.showTipLine(data.Data.Line);		//两边的数字
			}
			else {
				this.gameScence.pent.showkuang2(data.Positions);
			}

			this.winIndex++;
			if (this.winIndex >= arr.length) {
				this.winIndex = 0;
			}
			this.clert = egret.setInterval(() => {
				this.gameScence.pent.clearTip();
				this.gameScence.pent.cleaAllLine();
				let data: any = arr[this.winIndex];
				if (arr.length > 1) { //&& this.isCanPlay
					SoundManager.getInstance().playEffect(SoundConst.KA);
				}
				if (data.Type != "Bonus2") {
					
					let arrs: Array<any> = this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
					
					if(GameConfig.speedPlay && GameConfig.autoPlay){
						this.gameScence.pent.showLines(data.Data.Line);
					}else{
						// this.gameScence.pent.showLine(data.Data.Line, data.Positions);
						this.gameScence.pent.showLine(data.Data.Line, arrs);
						this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
					}
					this.gameScence.pent.showTipLine(data.Data.Line);
				}
				else {
					this.gameScence.pent.showkuang2(data.Positions);
				}
				
				this.winIndex++;
				if (this.winIndex >= arr.length) {
					this.winIndex = 0;
				}
			}, this, 900);
		}, this, t);

		let resultData: any = vo.GameData.resultData;	
		let totalBet: number = resultData.Value.SpinResult.TotalBet;//vo.GameData.betScoreArr[vo.GameData.betIndex];//
		let totalWin: number = resultData.Value.SpinResult.TotalWin;
		let denom:number = resultData.Value.SpinResult.Denom /10000;	//总赌注
		let winmoney: number = resultData.Value.Dollar;			//奖金
		let b: number = winmoney / denom;
		console.log(denom + " == 最后的分数 == " + winmoney);
		if(b >= 30){		//大奖 喷金币
			this.setReward(winmoney, true, 4);
		}
		if(b >= 8 && b < 30){		//奖金栏放大
			this.setReward(winmoney, true, 3);
		}
		if(b >= 1 && b < 8){		//＂奖金栏＂数字变动(音效长)
			this.setReward(winmoney, true, 2);
		}
		if(b < 1){				//＂奖金栏＂数字变动(音效短)
			this.setReward(winmoney, true, 1);
		}




		// if (b >= 50) {
		// 	this.setReward(winmoney, true, 4);
		// }
		// else if (b >= 10) {
		// 	this.setReward(winmoney, true, 3);
		// }
		// else if (b >= 1.8) {
		// 	this.setReward(winmoney, true, 2);
		// } else {
		// 	this.setReward(winmoney, true, 1);
		// }
	}
	
	public winIndex: number = 0;
	public clert: number;
	public tt: number;
	public hideWin(): void {
		egret.clearInterval(this.clert);
		egret.clearTimeout(this.tt);
		egret.clearTimeout(this.fourFishAni);
		this.gameScence.pent.clearAll();
		this.gameScence.hideAllAnimation();
		this.rewardGroup.y = 46;
		this.rewardGroup.scaleX = 1;
		this.rewardGroup.scaleY = 1;
		this.hideBigReward();
		//关音效
		this.stopMusic();
		egret.Tween.removeTweens(this.rewardGroup);
		this.winIndex = 0;
		this.hideFiveAnimation();
		
	}
	

	public setReward(v: number, isA: boolean = true,rewardType: number = 1 ,isTan:boolean = false): void {
		egret.Tween.removeTweens(this);
		if (isA && this.reward < v) {
			if(GameConfig.speedPlay){
				SoundManager.getInstance().playEffect(SoundConst.DEJIANG);
			}
			if (rewardType == 1) {
				// SoundManager.getInstance().playEffect(SoundConst.DEJIANG);
				if (SoundManager.getInstance().effectOn && this.chanel == null) {
					SoundManager.getInstance().playMusic(SoundConst.DEJIANG, 1).then((chanel) => {
							this.chanel = chanel;
						});
				}
				egret.Tween.get(this).to({ reward: v }, 2000);
			}
			if(rewardType == 2){
				// SoundManager.getInstance().playEffect(SoundConst.WWMUSIC);
				if (!GameConfig.speedPlay && SoundManager.getInstance().effectOn && this.chanel == null) {
					SoundManager.getInstance().playMusic(SoundConst.WWMUSIC, 1).then((chanel) => {
							this.chanel = chanel;
						});
				}
				egret.Tween.get(this).to({ reward: v }, 2000);
			}
			if(rewardType == 3){
				// SoundManager.getInstance().playEffect(SoundConst.WWMUSIC);
				if (!GameConfig.speedPlay && SoundManager.getInstance().effectOn && this.chanel == null) {
					SoundManager.getInstance().playMusic(SoundConst.WWMUSIC, 1).then((chanel) => {
							this.chanel = chanel;
						});
				}
				if(GameConfig.speedPlay){
					egret.Tween.get(this).to({ reward: v }, 2000);
				}else{
					egret.Tween.get(this).to({ reward: v }, 2000);
					egret.Tween.get(this.rewardGroup).to({ scaleX: 1.2, scaleY: 1.2 }, 1000).wait(2000).to({ scaleX: 1, scaleY: 1 }, 1000);
				}
			}
			if(rewardType == 4){
				console.log("大奖了大奖了大奖了");
				// SoundManager.getInstance().playEffect(SoundConst.BIGMUSIC);
				if (!GameConfig.speedPlay && SoundManager.getInstance().effectOn && this.chanel == null) {
					SoundManager.getInstance().playMusic(SoundConst.BIGMUSIC, 1).then((chanel) => {
							this.chanel = chanel;
						});
				}
				if(GameConfig.speedPlay){
					egret.Tween.get(this).to({ reward: v }, 2000);
				}else{
					egret.Tween.get(this).to({ reward: v }, 8000)
					// .wait(2000)
					egret.Tween.get(this.rewardGroup).to({ scaleX: 1.2, scaleY: 1.2 }, 1000)
					.wait(2000)
					.to({y:-280},1000)
					.wait(2000)
					.call(() => { this.showBigReward(); }, this)
					.wait(4000)
					.call(() => { this.hideBigReward();
					egret.Tween.get(this.rewardGroup).to({ scaleX: 1, scaleY: 1}, 500)
					.to({y:46},500);
					}, this)
				}
			}
			this.isAutoGame(isTan);
		}
		else {
			this.reward = v;
			this.isAutoGame(isTan);
		}
	}
	//弹窗是否自动游戏s
	public isAutoGame(isTan:boolean):void{
		// console.log(GameConfig.alwaysGame + " == GameConfig.lastCount === " + GameConfig.lastCount);
		if(GameConfig.lastCount > 0  && isTan){
			GameConfig.autoPlay = true;
			if (GameConfig.alwaysGame) {	//直到游戏开出免费会弹窗 否则会继续完成剩下的自动次数
				GameManager.getInstance().isJIxuAuto();
			} else {
				this.autoItem.resetDo();
			}
		}else{
			//保留的自动旋转的次数
			// console.log("GameConfig.lastCount == " + GameConfig.lastCount);
		}
	}
	private allReward:number = 0;
	private _rewardNum: number = 0;
	private set reward(v: number) {
		// let s: string = GameManager.numberToCommonStr(this._rewardNum);
		if(GameManager.getInstance().getFreeCount() > 0){
			this.allReward += vo.GameData.resultData.Value.TotalWinDollar;
			if(this.allReward > 0){
				this.free_money.text = "￥" + GameManager.numberToCommonStr(this._rewardNum);
			}else{
				this.free_money.text = "--";
			}
		}else{
			this.allReward = 0;
		}
		this._rewardNum = v;
		this.rewardLabel.text = 'x' + GameManager.numberToCommonStr(this._rewardNum);
		
	}
	/**
	 * 显示4条鱼音效
	 */
	public fourFishAni:number;
	public showFourFish(data, callfun: any = null):void{
			if (SoundManager.getInstance().effectOn && this.chanel == null) {
					SoundManager.getInstance().playMusic(SoundConst.FOURFISH, 1).then((chanel) => {
					this.chanel = chanel;
				});
			}
				//显示动画
			for (let j: number = 0; j < data.Positions.length; j++) {
				let p: any = data.Positions[j];
				this.gameScence.showAnimation(p);
			}
			this.fourFishAni = egret.setTimeout(()=>{
				// this.gameScence.hideAllAnimation();
				this.stopMusic();
				callfun && callfun();
			},this,3800);
			
	}
	/**
	 * 显示5同类动画
	 */
	public showFiveAimation(data, callfun: any = null): void {
		// SoundManager.getInstance().playEffect(SoundConst.FIVE_SOUND);
		this.aGroup.visible = true;
		this.bigRewardLabel.source = 'five_png';
		// this.bigRewardLabel.size = 80;
		this.bigRewardGroup.verticalCenter = 0;
		this.bigRewardGroup.scaleX = 0.5;
		this.bigRewardGroup.scaleY = 0.5;
		if (data.Data) {
			let arrs: Array<any> = this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
			this.gameScence.pent.showLine(data.Data.Line, arrs);
			this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
			this.gameScence.pent.showTipLine(data.Data.Line);		//两边的数字
		}
		else {
			this.gameScence.pent.showkuang2(data.Positions);
		}
		egret.Tween.removeTweens(this.bigRewardGroup);
		egret.Tween.get(this.bigRewardGroup)
			.to({ scaleX: 1.2, scaleY: 1.2 }, 800).to({ scaleX: 0.5, scaleY: 0.5 }, 800)
			.to({ scaleX: 1.2, scaleY: 1.2 }, 800).to({ scaleX: 0.5, scaleY: 0.5 }, 800)
			.to({ scaleX: 1.2, scaleY: 1.2 }, 800).call(() => {
				this.hideFiveAnimation();
				callfun && callfun();
			}, this);
	}

	/**
	 * 隐藏5同类动画
	 * 
	 */
	public hideFiveAnimation(): void {
		egret.Tween.removeTweens(this.bigRewardGroup);
		this.aGroup.visible = false;
		// this.gameScence.pent.clearAll();
	}
	/**
	 * 显示大奖
	 */
	public showBigReward(callfun: any = null): void {
		this.aGroup.visible = true;
		this.bigRewardLabel.source = 'big_png';
		// this.bigRewardLabel.size = 150;
		this.bigRewardGroup.scaleX = 1;
		this.bigRewardGroup.scaleY = 1;
		this.bigRewardGroup.verticalCenter = -150;
		egret.Tween.removeTweens(this.bigRewardGroup);
		egret.Tween.get(this.bigRewardGroup)
			.to({ scaleX: 0.85, scaleY: 0.85 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
			.to({ scaleX: 0.85, scaleY: 0.85 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
			.to({ scaleX: 0.85, scaleY: 0.85 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
			.to({ scaleX: 0.85, scaleY: 0.85 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
			.to({ scaleX: 0.85, scaleY: 0.85 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
			.to({ scaleX: 0.85, scaleY: 0.85 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).call(() => {
				this.hideBigReward();
				callfun && callfun();
			}, this);

		if (!this.rewardMc) {
			this.rewardMc = game.MCUtils.getMc('reward');
			this.mcGroup.addChild(this.rewardMc);
			this.rewardMc.x = this.aGroup.width / 2;
			this.rewardMc.y = this.aGroup.height / 2 + 30;
		}
		this.rewardMc.visible = true;
		this.rewardMc.gotoAndPlay('a0', -1);
	}

	/**
	 * 隐藏大奖
	 */
	public hideBigReward(): void {
		egret.Tween.removeTweens(this.bigRewardGroup);
		if(this.rewardMc){
			this.rewardMc.visible = false;
			this.rewardMc.stop();
			this.aGroup.visible = false;
		}
	}

	private get reward(): number {
		return this._rewardNum;
	}
}