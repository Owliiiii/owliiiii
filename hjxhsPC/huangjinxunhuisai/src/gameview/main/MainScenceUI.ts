
declare function openHistory();
declare function openDes();
declare function openCounter();
class MainScenceUI extends core.BaseUI {
	public bg: eui.Image;
	public bg1: eui.Image;
	public setBar: SetBar;
	public gameScence: GameScence;

	public leftGroup: eui.Group;
	public score: eui.BitmapLabel;

	public tGameBtn: TextButton;
	public labelArr: Array<any> = ['新游戏', '经典老虎机', '电动吃角子老虎', '桌面游戏', '累积游戏'];
	public topGroup: eui.Group;
	public topList: TopList;

	public bottomGroup: eui.Group;
	public topListGroup: eui.Group;

	public timeLabel: eui.Label;
	public mainGroup: eui.Group;

	public rewardGroup: eui.Group;
	public rewardLabel: eui.BitmapLabel;

	public infoBtn: MouseButton;
	public lineSubBtn: MouseButton;
	public lineAddBtn: MouseButton;
	public betSubBtn: MouseButton;
	public betAddBtn: MouseButton;
	public speedOffBtn: MouseButton;
	public speedOnBtn: MouseButton;
	public startBtn: MouseButton;
	public stopBtn: MouseButton;
	public autoItem: AutoItem;
	public chuNaBtn: MouseButton;

	public lineState: number = 0;
	public betState: number = 0;
	public longTouch: boolean = false;

	public lineLabel: eui.BitmapLabel;
	public betLabel: eui.BitmapLabel;
	public allBetLabel: eui.BitmapLabel;

	public balanceLabel: eui.Label;

	public topMask: eui.Rect;
	public bottomMask: eui.Rect;
	public bonusBtn: MouseButton;	//
	public bonusBtnShan: eui.Image;

	public aGroup: eui.Group;
	public mcGroup: eui.Group;
	public bigRewardGroup: eui.Group;
	public bigRewardLabel: eui.Label;
	public rewardMc: egret.MovieClip;
	public bonusGroup: eui.Group;

	public middleLabel: eui.Label;
	public leftLabel: eui.Label;
	public rightLabel: eui.Label;
	public bonusMask: eui.Rect;

	public chooseTools: ExtraBonusEntry;	//球杆界面

	public playGroup: eui.Group;
	public bonusClip: BonusAnimation;
	public gameOver: eui.Group;
	public overCup: Cup;
	public textGroup: eui.Group;




	public constructor() {
		super();
		this.skinName = MainScenceUISkin;
	}

	public onAdd(): void {
		super.onAdd();
		this.onResize();
		this.gameScence.init();
		this.gameScence.reset();
		this.updataUI();
		SoundManager.getInstance().setBgOn(true);		//关闭音效和音乐
		SoundManager.getInstance().setEffectOn(true);
		SoundManager.getInstance().playBg(SoundConst.BGM);

		this.registerEvent(this.stage, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.topListGroup, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.setBar, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.topGroup, egret.TouchEvent.TOUCH_TAP, this.onTab, this);

		this.registerEvent(this.chuNaBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.infoBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.lineSubBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.lineAddBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.betSubBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.betAddBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.speedOffBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.speedOnBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.startBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.bonusBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);

		this.bonusBtn.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.test1, this);
		this.bonusBtn.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.test3, this);
		this.middleLabel.text = "点击旋转以开始";
		this.registerEvent(this.stopBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.gameScence.dianji, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
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
		this.setReward(0, false);


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
			ui.showConfirBtn('您的InstanCash存款已經獲准 · 希望您在我们的赌城 度過美好時光 · 祝您好運！', () => {
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
		this.betLabel.text = 'x' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]) + '';
		this.allBetLabel.text = 'x' + GameManager.numberToCommonStr((vo.GameData.line * vo.GameData.betScoreArr[vo.GameData.betIndex])) + '';
		if (isShowLine) {
			// this.gameScence.pent.showLineArr(vo.GameData.line);
		}
	}

	public updataBtn(): void {
		this.lineSubBtn.enabled = vo.GameData.line > 1;
		this.lineAddBtn.enabled = vo.GameData.line < 5;
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
				core.UIManager.openUI(core.UIConst.HelpUI, core.LayerManager.Layer_Top);
				// SoundManager.getInstance().setBgOn(false);		//关闭音效和音乐
				// SoundManager.getInstance().setEffectOn(false);
				if (GameConfig.isMusic) {
					SoundManager.getInstance().setBgVolume(0);
					SoundManager.getInstance().setEffectVolume(0);
				}

				break;
			case this.lineSubBtn:
				if (this.longTouch) return;
				this.hideWin();
				if (vo.GameData.line > 1) {
					vo.GameData.line -= 1;
					SoundManager.getInstance().playEffect(SoundConst.SUB);
				}
				this.lineSubBtn.enabled = vo.GameData.line > 1;
				this.lineAddBtn.enabled = vo.GameData.line < 5;
				this.updataText();
				this.longTouch = false;
				break;
			case this.lineAddBtn:
				if (this.longTouch) return;
				this.hideWin();
				if (vo.GameData.line < 5) {
					vo.GameData.line += 1;
					SoundManager.getInstance().playEffect(SoundConst.ADD);
				}
				this.lineSubBtn.enabled = vo.GameData.line > 1;
				this.lineAddBtn.enabled = vo.GameData.line < 5;
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
				SoundManager.getInstance().playEffect(SoundConst.START);
				GameManager.getInstance().startGame();
				break;
			case this.stopBtn:

				SoundManager.getInstance().playEffect(SoundConst.STOP);
				GameManager.getInstance().stopGame();
				break;
			case this.gameScence.dianji:

				if ((GameManager.getInstance().gameState != GameType.GameState.STOP) && this.stopBtn.visible) {
					SoundManager.getInstance().playEffect(SoundConst.STOP);
					// console.log("点击了屏幕");
					GameManager.getInstance().stopGame();
				}
				break;
			case this.speedOnBtn:
				this.speedOnBtn.visible = false;
				this.speedOffBtn.visible = true;
				GameConfig.speedPlay = false;
				SoundManager.getInstance().playEffect(SoundConst.SPEED_ON);
				break;
			case this.speedOffBtn:
				this.speedOnBtn.visible = true;
				this.speedOffBtn.visible = false;
				GameConfig.speedPlay = true;
				SoundManager.getInstance().playEffect(SoundConst.SPEED_ON);
				break;
			case this.bonusBtn:
				console.log("选择球杆界面");
				egret.clearTimeout(this.bonusBtnAni);
				this.removeEventListener(egret.Event.ENTER_FRAME, this.taouchBonus, this);
				this.startBtn.visible = true;
				this.bonusBtn.visible = false;
				this.bonusBtnShan.visible = false;
				let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
				ui.gameScence.stopBonus();
				//显示球杆界面
				this.showHongli();
				break;
			case this.chuNaBtn:
				// window.open("https://www.ca769.com/Cb_Game.php#");
				openCounter();
				break;
		}
	}
	//显示球杆界面
	public showHongli(): void {
		console.log("打开红利");
		SoundManager.getInstance().stopBg();
		this.hideWin();
		GameConfig.emptyPlay = false;
		this.bg.visible = false;
		this.bg1.visible = true;
		this.mainGroup.visible = false;
		this.leftGroup.visible = true;
		this.bonusGroup.visible = true;
		//第一个选球杆界面
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		this.chooseTools.judgeInit(0);
	}
	public closeHongli(): void {
		console.log("关闭红利");
		GameConfig.emptyPlay = true;//空格开启
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		GameConfig.hongli = false;
		this.removeEventListener(egret.Event.ENTER_FRAME, this.taouchBonus, this);
		this.autoItem.sopAutoBtn.enabled = true;
		this.bg.visible = true;
		this.bg1.visible = false;
		this.mainGroup.visible = true;
		this.bonusGroup.visible = false;
		this.leftGroup.visible = false;
		// GameConfig.autoPlay = true;
		//清除动画和线
		this.hideWin();
		//金币
		let resultData: any = vo.GameData.resultData;
		let totalBet: number = resultData.Value.SpinResult.TotalBet;//vo.GameData.betScoreArr[vo.GameData.betIndex];//
		let totalWin: number = resultData.Value.SpinResult.TotalWin;
		let winmoney: number = resultData.Value.Dollar;
		if (totalBet == 0) {
			totalBet = (vo.GameData.line * vo.GameData.betScoreArr[vo.GameData.betIndex]) * 10000;
		}
		let b: number = totalWin / totalBet;
		console.log(totalWin + " == 红利后的分数比 == " + totalBet);
		// b=50;
		if (b >= 50) {
			console.log("AAAAA");
			this.setReward(winmoney, true, 4, true);
			egret.clearTimeout(this.tt2);
		}
		else if (b >= 10) {
			console.log("BBBBB");
			this.setReward(winmoney, true, 3, true);
		}
		else if (b > 1.8) {
			console.log("CCCCC");
			this.setReward(winmoney, true, 2, true);
		} else {
			console.log("DDDDD");
			this.setReward(winmoney, true, 1, true);
		}
		//各按钮状态和游戏结束一样
		this.startBtn.visible = true;
		this.stopBtn.visible = false;
		SoundManager.getInstance().playBg(SoundConst.BGM);
		this.middleLabel.text = "总奖金:￥" + vo.GameData.resultData.Value.Dollar.toFixed(2);
	}



	/**不是点击按钮进入的，是上一次进入后，重新刷新网页造成的 */
	public judgeInit(data) {
		SetConst.isWin = true;
		let _val = data.Actions;
		this.bonusGroup.visible = true;
		SoundManager.getInstance().stopBg();
		if (Object.keys(data.Actions)[0] == GameType.GameType.treasure) {
			this.chooseTools.judgeInit(0)
		}
		if (Object.keys(data.Actions)[0] == GameType.GameType.treasure2) {
			this.chooseTools.judgeInit(1)
		}
	}

	public onRemove(): void {
		super.onRemove();
	}

	public onResize(): void {
		var scaleX = (window.innerWidth / GameConfig.DES_WIDTH) || 0;
		var scaleY = window.innerHeight > GameConfig.J_HEIGHT ? GameConfig.J_HEIGHT / GameConfig.DES_HEIGHT : window.innerHeight / GameConfig.DES_HEIGHT || 0;
		let s = scaleX > scaleY ? scaleY : scaleX;
		if (window.innerWidth < 769) {
			console.log("FFFF");
			this.playGroup.horizontalCenter = undefined;
			this.bonusGroup.horizontalCenter = undefined;
			this.gameOver.horizontalCenter = undefined;
			this.playGroup.left = 85;
			this.bonusGroup.left = 85;
			this.gameOver.left = 85;

			this.mainGroup.horizontalCenter = undefined;
			this.mainGroup.left = 85;
			this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = undefined;
			this.topGroup.left = this.bottomGroup.left = 0;
			this.textGroup.horizontalCenter = undefined;
			this.textGroup.left = 150;
			this.setBar.left = 480;
			this.setBar.right = undefined;
		}
		else {
			console.log("FFFF+1");
			this.playGroup.horizontalCenter = 0;
			this.bonusGroup.horizontalCenter = 0;
			this.gameOver.horizontalCenter = 0;
			this.playGroup.left = undefined;
			this.bonusGroup.left = undefined;
			this.gameOver.left = undefined;

			this.mainGroup.horizontalCenter = 0;
			this.mainGroup.left = undefined;
			this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = 0;
			this.topGroup.left = this.bottomGroup.left = undefined;
			this.textGroup.horizontalCenter = 0;
			this.textGroup.left = undefined;
			this.setBar.left = undefined;
			this.setBar.right = 0;
		}


		if (window.innerWidth < 800 / window.devicePixelRatio || s <= 0.48) {
			console.log("AAAAA");
			this.playGroup.scaleX = 0.646;
			this.bonusGroup.scaleX = 0.6;
			this.gameOver.scaleX = 0.48;
			this.playGroup.scaleY = 0.67;
			this.bonusGroup.scaleY = 0.6;
			this.gameOver.scaleY = 0.48;

			this.leftGroup.scaleX = 0.85;
			this.leftGroup.scaleY = 0.85;

			this.mainGroup.scaleX = 0.6;
			this.mainGroup.scaleY = 0.6;
			if (window.innerWidth > 768 / window.devicePixelRatio) {
				console.log("A+1");
				this.playGroup.horizontalCenter = 0;
				this.bonusGroup.horizontalCenter = 0;
				this.gameOver.horizontalCenter = 0;
				this.playGroup.left = undefined;
				this.bonusGroup.left = undefined;
				this.gameOver.left = undefined;

				this.mainGroup.horizontalCenter = 0;
				this.mainGroup.left = undefined;
				this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = 0;
				this.topGroup.left = this.bottomGroup.left = undefined;
				this.textGroup.horizontalCenter = 0;
				this.textGroup.left = undefined;
				this.setBar.left = undefined;
				this.setBar.right = 0;
			}
			else {
				console.log("A+2");
				this.playGroup.horizontalCenter = undefined;
				this.bonusGroup.horizontalCenter = undefined;
				this.gameOver.horizontalCenter = undefined;
				this.playGroup.left = 85;
				this.bonusGroup.left = 85;
				this.gameOver.left = 85;

				this.mainGroup.horizontalCenter = undefined;
				this.mainGroup.left = 85;
				this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = undefined;
				this.topGroup.left = this.bottomGroup.left = 0;
				this.textGroup.horizontalCenter = undefined;
				this.textGroup.left = 150;
				this.setBar.left = 480;
				this.setBar.right = undefined;
			}
		}
		else {
			console.log("BBBBBVVV");
			this.playGroup.scaleX = s;
			this.bonusGroup.scaleX = s;
			this.gameOver.scaleX = s;
			this.playGroup.scaleY = s;
			this.bonusGroup.scaleY = s;
			this.gameOver.scaleY = s;

			// this.leftGroup.scaleX = s;
			// this.leftGroup.scaleY = s;

			this.mainGroup.scaleX = s;
			this.mainGroup.scaleY = s;
			console.log('sss->', this.mainGroup.scaleX);

			this.playGroup.horizontalCenter = 0;
			this.bonusGroup.horizontalCenter = 0;
			this.gameOver.horizontalCenter = 0;
			this.playGroup.left = undefined;
			this.bonusGroup.left = undefined;
			this.gameOver.left = undefined;

			this.mainGroup.horizontalCenter = 0;
			this.mainGroup.left = undefined;
			this.topGroup.horizontalCenter = this.bottomGroup.horizontalCenter = 0;
			this.topGroup.left = this.bottomGroup.left = undefined;
			this.textGroup.horizontalCenter = 0;
			this.textGroup.left = undefined;
			this.setBar.left = undefined;
			this.setBar.right = 0;
			// alert("111---"+window.innerWidth);
			if (window.screen.width == 1366 && window.screen.height == 768) {
				if (window.innerWidth >= 945 && window.innerWidth <= 955 && window.innerHeight >= 642 && window.innerHeight <= 652) {
					console.log("1111A");
					this.mainGroup.scaleX = this.mainGroup.scaleY = s * 0.942;
					this.playGroup.scaleX = this.playGroup.scaleY = s * 0.942;
					this.bonusGroup.scaleX = this.bonusGroup.scaleY = s * 0.942;
					this.gameOver.scaleX = this.gameOver.scaleY = s * 0.942;
				}
			}

			if (window.screen.width == 1920 / window.devicePixelRatio && window.screen.height == 1080 / window.devicePixelRatio) {
				if (window.innerWidth >= 1180 && window.innerWidth <= 1190 && window.innerHeight >= 794 && window.innerHeight <= 804) {
					console.log("2222B");
					this.mainGroup.scaleX = this.mainGroup.scaleY = s * 1.058;
					this.leftGroup.scaleX = this.leftGroup.scaleY = s * 1.058;

					this.playGroup.scaleX = this.playGroup.scaleY = s * 1.058;
					this.bonusGroup.scaleX = this.bonusGroup.scaleY = s * 1.058;
					this.gameOver.scaleX = this.gameOver.scaleY = s * 0.942;
				}
				if (window.innerWidth >= 947 && window.innerWidth <= 957 && window.innerHeight >= 645 && window.innerHeight <= 655) {
					console.log("3333C");
					this.mainGroup.scaleX = this.mainGroup.scaleY = s * 0.942;
					this.playGroup.scaleX = this.playGroup.scaleY = s * 0.942;
					this.bonusGroup.scaleX = this.bonusGroup.scaleY = s * 0.942;
					this.gameOver.scaleX = this.gameOver.scaleY = s * 0.87;
					this.leftGroup.scaleX = this.leftGroup.scaleY = s * 0.942;
				}
				// if(window.innerWidth >= 1060 && window.innerWidth <= 1070 && window.innerHeight >= 645 && window.innerHeight <= 1000){
				// 	console.log("4444D = " + this.bonusGroup.scaleX);
				// 	this.mainGroup.scaleX = this.mainGroup.scaleY = s * 0.8;
				// 	this.playGroup.scaleX = this.playGroup.scaleY = s * 0.97;
				// 	this.bonusGroup.scaleX = this.bonusGroup.scaleY = s * 0.82;
				// 	this.gameOver.scaleX = this.gameOver.scaleY = s * 0.748;
				// 	// this.leftGroup.scaleX = this.leftGroup.scaleY = s * 0.82;
				// }
			}
		}

		let w: number = GameConfig.WIDTH / GameConfig.HEIGHT > GameConfig.MAX_WIDTH / GameConfig.DES_HEIGHT ? GameConfig.MAX_WIDTH * s : GameConfig.WIDTH;
		this.topGroup.width = window.innerWidth < GameConfig.MAX_WIDTH ? window.innerWidth : GameConfig.MAX_WIDTH;
		this.bottomGroup.width = window.innerWidth < GameConfig.MAX_WIDTH ? window.innerWidth : GameConfig.MAX_WIDTH;


		if (window.innerHeight > GameConfig.J_HEIGHT) {
			let dh: number = GameConfig.DES_HEIGHT - GameConfig.J_HEIGHT;
			let d: number = (window.innerHeight - GameConfig.J_HEIGHT) / dh * dh / 2;
			this.topGroup.top = d;
			this.bottomGroup.bottom = d;
			this.leftGroup.bottom = this.bottomGroup.height + d + 8;
		}
		else {
			this.topGroup.top = 0;
			this.bottomGroup.bottom = 0;
			this.leftGroup.bottom = this.bottomGroup.height + 8;
		}
		this.leftGroup.horizontalCenter = -this.bottomGroup.width / 2 + this.leftGroup.width * this.leftGroup.scaleX / 2;
		this.bg.scaleX = window.innerWidth / GameConfig.MAX_WIDTH;
		this.bg1.scaleX = window.innerWidth / GameConfig.MAX_WIDTH;
		if (this.bg.scaleX > 1) {
			this.bg.scaleX = 1;
			this.bg1.scaleX = 1;
		}
		if (window.innerHeight > GameConfig.J_HEIGHT) {
			let t1s = (GameConfig.J_HEIGHT - 55) / GameConfig.J_HEIGHT;
			this.bg.scaleY = t1s;
			this.bg1.scaleY = t1s;
		}
		else {
			let t2s = (window.innerHeight - 55) / GameConfig.J_HEIGHT;
			this.bg.scaleY = t2s;
			this.bg1.scaleY = t2s;
		}

		if (window.innerWidth <= 768 / window.devicePixelRatio) {
			this.bottomGroup.width = 768 / window.devicePixelRatio;
			this.topGroup.width = 768 / window.devicePixelRatio;
		}

		if (window.innerWidth <= 768 / window.devicePixelRatio) {
			this.bottomGroup.width = 768 / window.devicePixelRatio;
			this.topGroup.width = 768 / window.devicePixelRatio;
		}

		if (window.innerHeight <= 500 / window.devicePixelRatio) {
			this.topGroup.visible = this.bottomGroup.visible = false;
			this.bg.scaleY = window.innerHeight / this.bg.height + 0.2;
			this.bg1.scaleY = window.innerHeight / this.bg1.height + 0.2;

		}
		else {
			this.topGroup.visible = this.bottomGroup.visible = true;

		}


		egret.clearTimeout(this.clet);
		this.clet = egret.setTimeout(() => {
			this.topList.updataPosition();
			// this.bg.source = window.innerWidth == 1215 && window.innerHeight == 833 ? 'BG_1x_png' : 'BG_1x_png';
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
			this.updataText(false);
		}
		else if (this.betState == 1) {
			if (vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1) {
				vo.GameData.betIndex += 1;
				SoundManager.getInstance().playEffect(SoundConst.ADD);
			}
			this.betSubBtn.enabled = vo.GameData.betIndex > 0;
			this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
			this.updataText(false);
		}
		if (this.lineState == -1) {
			if (vo.GameData.line > 1) {
				vo.GameData.line -= 1;
				SoundManager.getInstance().playEffect(SoundConst.SUB);
			}
			this.lineSubBtn.enabled = vo.GameData.line > 1;
			this.lineAddBtn.enabled = vo.GameData.line < 5;
			this.updataText();
		}
		else if (this.lineState == 1) {
			if (vo.GameData.line < 5) {
				vo.GameData.line += 1;
				SoundManager.getInstance().playEffect(SoundConst.ADD);
			}
			this.lineSubBtn.enabled = vo.GameData.line > 1;
			this.lineAddBtn.enabled = vo.GameData.line < 5;
			this.updataText();

		}

	}

	public curtime: number = 0;
	public bonusBtnAni: number;

	public bonusBtnSource(): void {
		if (this.bonusBtn.visible) {
			this.bonusBtnShan.visible = false;
			this.bonusBtnAni = egret.setTimeout(() => {
				this.bonusBtnShan.visible = true;
				this.test();
			}, this, 200);
		}
	}
	public taouchBonus() {
		this.bonusBtnShan.visible = true;
		egret.clearTimeout(this.bonusBtnAni);
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

	public test() {
		// this.bonusBtnShan.visible = true;
		if (this.bonusBtn.visible) {
			this.bonusBtnAni = egret.setTimeout(() => {
				this.bonusBtnSource();
			}, this, 200);
		}
	}


	public showWin(arr: Array<any>): void {
		SoundManager.getInstance().playEffect(SoundConst.REWARD);

		/**
	 	* 如果中奖中没有Data的话，证明是红利游戏中奖
	 	*/
		if (arr.length > 0 && !arr[0].Data) {
			console.log('红利游戏中奖');
			this.middleLabel.visible = true;
			this.middleLabel.text = "您赢得了奖励！";
			this.leftLabel.visible = false;
			this.rightLabel.visible = false;
			GameConfig.hongli = true;
			this.gameScence.displayBonus();
			this.autoItem.sopAutoBtn.enabled = false;
			this.bonusBtn.visible = true;
			this.bonusBtnShan.visible = true;
			this.startBtn.visible = false;
			this.bonusBtnAni = egret.setTimeout(() => {
				this.bonusBtnSource();
			}, this, 200);
			// SoundManager.getInstance().stopBg();
			if (SoundManager.getInstance().effectOn) {
				SoundManager.getInstance().playMusic(SoundConst.INTOBONUS, 1).then((chanel: egret.SoundChannel) => {
					chanel.stop();
					SoundManager.getInstance().playBg(SoundConst.INTOBONUS);
				})
			}

			//圈起获得红利游戏的项
			let positions: Array<any> = arr[0].Positions;
			for (let j: number = 0; j < positions.length; j++) {
				let p: any = positions[j];
				this.gameScence.showAnimation(p);
			}

			//具体  ↓↓↓
			//直到功能->结束
			//GameConfig.alwaysGame = false;
			//如果是自动游戏到红利
			if (GameConfig.autoPlay) {
				// vo.GameData.autoPlayCount = 0;
				// GameConfig.autoPlay = false;
			} else {
				this.betSubBtn.enabled = this.betAddBtn.enabled = false;
				this.lineSubBtn.enabled = this.lineAddBtn.enabled = false;
				this.autoItem.autoBtn.enabled = false;
				this.speedOffBtn.enabled = false;
				this.speedOnBtn.enabled = false;
				this.topMask.visible = true;
				this.bottomMask.visible = true;
			}
			return;
		}

		//先显示一下全部线
		this.gameScence.clearTip();
		this.gameScence.hideAllAnimation();
		// this.gameScence.pent.cleaAllLine();
		// if (arr.length > 1) {
		if (vo.GameData.autoPlayCount > 0 && vo.GameData.autoPlayCount > 0) {
			for (let i: number = 0; i < arr.length; i++) {
				let data: any = arr[i].Data;
				let positions: Array<any> = arr[i].Positions;
				if (data) {
					let line: number = data.Line;
					this.gameScence.showTipLine(line);
					// this.middleLabel.visible = true;
					// this.leftLabel.visible = false;
					// this.rightLabel.visible = false;
					// this.middleLabel.text = "总奖金:￥" + vo.GameData.resultData.Value.Dollar.toFixed(2);
					// this.gameScence.pent.showLines(line);
				}
				else {
					// this.gameScence.pent.showkuang2(arr[i].Positions);
				}
			}
		}
		else {
			for (let i: number = 0; i < arr.length; i++) {
				let data: any = arr[i].Data;
				let positions: Array<any> = arr[i].Positions;
				if (data) {
					let line: number = data.Line;
					if (arr.length > 1) {
						this.gameScence.showTipLine(line);
						// this.gameScence.pent.showLines(line);
					} else {
						//只有一条线获胜显示
						if (GameConfig.autoPlay) {
							if (!GameConfig.speedPlay) {
								for (let j: number = 0; j < positions.length; j++) {
									let p: any = positions[j];
									this.gameScence.showAnimation(p);
								}
							}
						} else {
							for (let j: number = 0; j < positions.length; j++) {
								let p: any = positions[j];
								this.gameScence.showAnimation(p);
							}
						}
					}
				} else {
					let positions: Array<any> = arr[i].Positions;
					if (GameConfig.autoPlay) {
						if (!GameConfig.speedPlay) {
							for (let j: number = 0; j < positions.length; j++) {
								let p: any = positions[j];
								this.gameScence.showAnimation(p);
							}
						}
					} else {
						for (let j: number = 0; j < positions.length; j++) {
							let p: any = positions[j];
							this.gameScence.showAnimation(p);
						}
					}
				}

			}
		}

		let t: number = arr.length > 1 ? 900 : 0;
		// this.isCanPlay = false;
		this.tt = egret.setTimeout(() => {
			if (GameConfig.speedPlay && vo.GameData.autoPlayCount > 0) return;
			this.gameScence.clearTip();
			this.gameScence.hideAllAnimation1();
			// this.gameScence.pent.cleaAllLine();
			let data: any = arr[this.winIndex];
			if (data.Data) {
				// this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
				// let arrs: Array<any> = this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
				// this.gameScence.pent.showLine(data.Data.Line, arrs);
				this.gameScence.showTipLine(data.Data.Line);
				this.leftLabel.text = "线" + data.Data.Line + "赢得￥" + (data.Win / 10000).toFixed(2);
				this.rightLabel.text = "总奖金：￥" + vo.GameData.resultData.Value.Dollar.toFixed(2);
				this.leftLabel.visible = true;
				this.rightLabel.visible = true;

				if (GameConfig.autoPlay) {
					if (!GameConfig.speedPlay) {
						for (let i = 0; i < data.Positions.length; i++) {
							let p = data.Positions[i];
							this.gameScence.showAnimation(p);
						}
					}
				} else {
					for (let i = 0; i < data.Positions.length; i++) {
						let p = data.Positions[i];
						this.gameScence.showAnimation(p);
					}
				}

			}
			else {
				// let positions: Array<any> = arr[0].Positions;
				if (GameConfig.autoPlay) {
					if (!GameConfig.speedPlay) {
						for (let j: number = 0; j < data.Positions.length; j++) {
							let p = data.Positions[j];
							this.gameScence.showAnimation(p);
						}
					}
				} else {
					for (let j: number = 0; j < data.Positions.length; j++) {
						let p = data.Positions[j];
						this.gameScence.showAnimation(p);
					}
				}
			}

			this.winIndex++;
			if (this.winIndex >= arr.length) {
				this.winIndex = 0;
			}
			this.middleLabel.visible = false;
			this.clert = egret.setInterval(() => {
				if (!this.isPlay) return;
				if (GameConfig.tuStop) return;

				this.gameScence.clearTip();
				// this.gameScence.cleaAllLine();
				this.gameScence.hideAllAnimation1();
				if (arr.length > 1) { //&& this.isCanPlay
					SoundManager.getInstance().playEffect(SoundConst.SMUSIC);

				} else {
					let t1: number = 1000;
				}
				// this.middleLabel.visible = false;
				let data: any = arr[this.winIndex];
				if (data.Data) {
					// this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
					// let arrs: Array<any> = this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
					// this.gameScence.pent.showLine(data.Data.Line, arrs);
					this.gameScence.showTipLine(data.Data.Line);
					// data.Data.Line//第几根线
					// data.Win//这根线赢了多少
					this.leftLabel.text = "线" + data.Data.Line + "赢得￥" + (data.Win / 10000).toFixed(2);
					this.rightLabel.text = "总奖金：￥" + vo.GameData.resultData.Value.Dollar.toFixed(2);

					this.leftLabel.visible = true;
					this.rightLabel.visible = true;

					if (GameConfig.autoPlay) {
						if (!GameConfig.speedPlay) {
							for (let i = 0; i < data.Positions.length; i++) {
								let p = data.Positions[i];
								this.gameScence.showAnimation(p);
							}
						}
					} else {
						for (let i = 0; i < data.Positions.length; i++) {
							let p = data.Positions[i];
							this.gameScence.showAnimation(p);
						}
					}
				}
				else {
					// this.gameScence.pent.showkuang2(data.Positions);
					if (GameConfig.autoPlay) {
						if (!GameConfig.speedPlay) {
							for (let j: number = 0; j < data.Positions.length; j++) {
								let p = data.Positions[j];
								this.gameScence.showAnimation(p);
							}
						}
					} else {
						for (let j: number = 0; j < data.Positions.length; j++) {
							let p = data.Positions[j];
							this.gameScence.showAnimation(p);
						}
					}
				}

				this.winIndex++;
				if (this.winIndex >= arr.length) {
					this.winIndex = 0;
				}
			}, this, 850);
		}, this, t);

		let resultData: any = vo.GameData.resultData;
		let totalBet: number = resultData.Value.SpinResult.TotalBet;
		let totalWin: number = resultData.Value.SpinResult.TotalWin;
		let winmoney: number = resultData.Value.Dollar;
		console.log(totalWin + " == 最后的分数 == " + totalBet);
		let b: number = totalWin / totalBet;
		// b=50;
		if (b >= 50) {
			this.setReward(winmoney, true, 4);
			egret.clearTimeout(this.tt2);
		}
		else if (b >= 10) {
			this.setReward(winmoney, true, 3);
		}
		else if (b >= 1.8) {
			this.setReward(winmoney, true, 2);
		} else {
			this.setReward(winmoney, true, 1);
		}
	}

	public winIndex: number = 0;
	public clert: number;
	public tt: number;
	public tt2: number;
	/**
	 * 定时器里面是否能执行 默认是可执行的
	 */
	public isPlay: boolean = true;
	// public isCanPlay:boolean=false;
	public hideWin(): void {
		this.middleLabel.visible = true;
		this.leftLabel.visible = false;
		this.rightLabel.visible = false;
		this.leftLabel.text = "线" + "" + "赢得￥" + "";
		this.rightLabel.text = "总奖金：￥" + "";
		//关音效
		this.stopMusic();
		if (vo.GameData.autoPlayCount == 99 || vo.GameData.autoPlayCount == 50 || vo.GameData.autoPlayCount == 25 || vo.GameData.autoPlayCount == 10 || vo.GameData.autoPlayCount == 9999) {
			this.middleLabel.text = "自动游戏已启用";
		} else {
			this.middleLabel.text = "祝您好运！";
		}

		egret.clearInterval(this.clert);
		egret.clearTimeout(this.tt);
		egret.clearTimeout(this.tt2);
		this.gameScence.clearTip();
		this.gameScence.hideAllAnimation();
		this.winIndex = 0;
		this.reward = 0.00;
		this.hideFiveAnimation();
	}
	public chanel: egret.SoundChannel;
	public stopMusic(): void {
		if (this.chanel) {
			this.chanel.stop();
			this.chanel = null;
		}
	}
	public setReward(v: number, isA: boolean = true, rewardType: number = 1, isTan: boolean = false): void {
		egret.Tween.removeTweens(this);
		egret.Tween.removeTweens(this.rewardGroup);
		this.rewardGroup.scaleX = 1;
		this.rewardGroup.scaleY = 1;
		if (isA && this.reward < v) {
			if (GameConfig.lastCount <= 0) {
				this.noAutoHongli();
			}
			if (rewardType == 1) {
				egret.Tween.get(this).to({ reward: v }, 3000).call(() => { this.isAutoGame(isTan); }, this);
			}
			else if (rewardType == 2) {
				if (!GameConfig.speedPlay && SoundManager.getInstance().effectOn && this.chanel == null) {
					SoundManager.getInstance().playMusic(SoundConst.ENTRANCE, 1).then((chanel) => {
						this.chanel = chanel;
					});
				}
				egret.Tween.get(this).to({ reward: v }, GameConfig.startTime).call(() => { this.isAutoGame(isTan); }, this);
				// egret.Tween.get(this.rewardGroup).to({ scaleX: 1, scaleY: 1 },  GameConfig.startTime/2).wait(2000).to({ scaleX: 1, scaleY: 1 }, 1000);
			}
			else if (rewardType == 3) {
				// GameConfig.startTime = 5500;
				if (!GameConfig.speedPlay && SoundManager.getInstance().effectOn && this.chanel == null) {
					SoundManager.getInstance().playMusic(SoundConst.ENTRANCE, 1).then((chanel) => {
						this.chanel = chanel;
					});
				}
				egret.Tween.get(this).to({ reward: v }, GameConfig.startTime).call(() => { this.isAutoGame(isTan); }, this);
				egret.Tween.get(this.rewardGroup)
					.to({ scaleX: 1.12, scaleY: 1.12 }, GameConfig.startTime / 2)
					.wait(GameConfig.startTime / 2)
					.to({ scaleX: 1, scaleY: 1 }, 1000)
					.call(() => { this.isPlay = false; this.gameScence.pauseAllAniation(); }, this)
					.wait(1500)
					.call(() => { this.isPlay = true; this.gameScence.resumeAllAnimation(); }, this)
					.to({ scaleX: 1, scaleY: 1 }, 400);
			}
			else {
				if (SoundManager.getInstance().effectOn && this.chanel == null) {
					SoundManager.getInstance().playMusic(SoundConst.ENTRANCE, 1).then((chanel) => {
						this.chanel = chanel;
					});
				}
				//如果点了停止就不弹窗
				egret.Tween.get(this).to({ reward: v }, 3000).call(() => { this.isAutoGame(isTan); }, this);
				egret.Tween.get(this.rewardGroup)
					.to({ scaleX: 1.12, scaleY: 1.12 }, 1500)  //1.12  
					.wait(1500)
					.to({ scaleX: 1, scaleY: 1 }, 1000)
					.wait(1000)
					// .call(() => { this.showBigReward(); }, this)
					// .wait(4000)
					// .call(() => { this.hideBigReward();
					// 	this.isCanPlay=true; }, this)
					.to({ scaleX: 1, scaleY: 1 }, 400);
			}
		}
		else {
			this.reward = v;
		}
	}

	public isAutoGame(isTan: boolean): void {
		// console.log("GameConfig.lastCount == " + GameConfig.lastCount);
		if (GameConfig.lastCount > 0 && isTan) {
			GameConfig.autoPlay = true;

			if (GameConfig.alwaysGame) {	//直到游戏开出红利会弹窗 否则会继续完成剩下的自动次数
				GameManager.getInstance().isJIxuAuto();
			} else {
				this.autoItem.resetDo();
			}
		} else {
			//保留的自动旋转的次数
			console.log("GameConfig.lastCount == " + GameConfig.lastCount);
		}
	}
	//不是自动游戏开出红利，关闭红利界面，按钮的状态
	public noAutoHongli(): void {
		this.stopBtn.visible = false;
		this.infoBtn.enabled = true;
		this.lineSubBtn.enabled = vo.GameData.line > 1;
		this.lineAddBtn.enabled = vo.GameData.line < 5;

		this.betSubBtn.enabled = vo.GameData.betIndex > 0;
		this.betAddBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;

		this.autoItem.autoBtn.enabled = true;
		this.speedOffBtn.enabled = true;
		this.speedOnBtn.enabled = true;
		this.topMask.visible = false;
		this.bottomMask.visible = false;
	}

	private _rewardNum: number = 0;
	private set reward(v: number) {
		this._rewardNum = v;
		let s: string = GameManager.numberToCommonStr(this._rewardNum);
		this.rewardLabel.text = 'x' + s;
	}

	private get reward(): number {
		return this._rewardNum;
	}
    /**
	 * 重置奖励
	 */
	public resetReward(money: number): void {
		egret.Tween.removeTweens(this);
		egret.Tween.removeTweens(this.rewardGroup);
		this.reward = money;
		egret.Tween.get(this.rewardGroup).to({ scaleX: 1, scaleY: 1 }, 300);
		egret.Tween.get(this).wait(300).call(() => {
			this.reward = 0;
		});
	}

	/**
	 * 显示5同类动画
	 */
	public showFiveAimation(data, callfun: any = null): void {
		// SoundManager.getInstance().playEffect(SoundConst.FIVE_SOUND);
		this.aGroup.visible = true;
		this.bigRewardLabel.text = '5个一样的';
		this.bigRewardLabel.size = 80;
		this.bigRewardGroup.verticalCenter = 0;
		this.bigRewardGroup.scaleX = 0.5;
		this.bigRewardGroup.scaleY = 0.5;
		if (data.Data) {
			// this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
		}
		else {
			// this.gameScence.pent.showkuang2(data.Positions);
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
		this.bigRewardLabel.text = '大奖';
		this.bigRewardLabel.size = 150;
		this.bigRewardGroup.scaleX = 1;
		this.bigRewardGroup.scaleY = 1;
		this.bigRewardGroup.verticalCenter = -150;
		egret.Tween.removeTweens(this.bigRewardGroup);
		egret.Tween.get(this.bigRewardGroup)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).call(() => {
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
		this.rewardMc.visible = false;
		this.rewardMc.stop();
		this.aGroup.visible = false;
	}
}
