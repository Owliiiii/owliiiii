
declare function openHistory();
declare function openDes();
class MainScenceUI extends core.BaseUI {
	public bg: eui.Image;
	public setBar: SetBar;
	public gameScence: GameScence;

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
	public bigWinImg: eui.Image;

	public infoBtn: MouseButton;
	public lineSubBtn: MouseButton;
	public lineAddBtn: MouseButton;
	public betSubBtn: MouseButton;
	public betAddBtn: MouseButton;
	public speedOffBtn: MouseButton;
	public speedOnBtn: MouseButton;
	public startBtn: MouseButton;
	public stopBtn: MouseButton;
	public intoFreeBtn: MouseButton;
	public autoItem: AutoItem;

	public lineState: number = 0;
	public betState: number = 0;
	public longTouch: boolean = false;

	public lineLabel: eui.BitmapLabel;
	public betLabel: eui.BitmapLabel;
	public allBetLabel: eui.BitmapLabel;
	public rewardImg: eui.Image;

	public balanceLabel: eui.Label;

	public topMask: eui.Rect;
	public bottomMask: eui.Rect;


	public aGroup: eui.Group;
	public mcGroup: eui.Group;
	public bigRewardGroup: eui.Group;
	public bigRewardLabel: eui.Label;
	public rewardMc: egret.MovieClip;




	public constructor() {
		super();
		this.skinName = MainScenceUISkin;
	}

	public onAdd(): void {
		super.onAdd();
		this.gameScence.init();
		this.gameScence.reset();
		this.updataUI();
		this.registerEvent(this.stage, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.topListGroup, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.setBar, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.topGroup, egret.TouchEvent.TOUCH_TAP, this.onTab, this);

		this.registerEvent(this.infoBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.lineSubBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.lineAddBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.betSubBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.betAddBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.speedOffBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.speedOnBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.startBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.stopBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.intoFreeBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this);
		this.registerEvent(this.gameScence.goBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this)
		this.registerEvent(this.gameScence.backSlotBtn, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this)
		this.registerEvent(this.gameScence.backSlotBtn0, egret.TouchEvent.TOUCH_TAP, this.onControllTab, this)


		this.balanceLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.balance);
		core.MyUIUtils.addLongTouch(this.lineSubBtn, () => {
			this.lineState = -1;
			this.hideWin();
			this.longTouch = true;
		}, () => {
			this.lineState = 0;
			this.longTouch = false;
		}, this);
		core.MyUIUtils.addLongTouch(this.lineAddBtn, () => {
			this.lineState = 1;
			this.hideWin();
			this.longTouch = true;
		}, () => {
			this.lineState = 0;
			this.longTouch = false;

		}, this);

		core.MyUIUtils.addLongTouch(this.betSubBtn, () => {
			this.betState = -1;
			this.hideWin();
			this.longTouch = true;
		}, () => {
			this.betState = 0;
			this.longTouch = false;

		}, this);
		core.MyUIUtils.addLongTouch(this.betAddBtn, () => {
			this.betState = 1;
			this.hideWin();
			this.longTouch = true;
		}, () => {
			this.betState = 0;
			this.longTouch = false;

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
		core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
		let ui: StipsUI = core.UIManager.getUI(core.UIConst.StipsUI);
		ui.showConfirBtn('您的 InstantCash存款已經獲准。希望您能够在我們的賭城 度過美好時光。祝您好運！', () => {
			ui.hide();
			egret.setTimeout(() => {
				core.UIManager.openUI(core.UIConst.StipsUI, core.LayerManager.Layer_Top);
				ui.showConfirBtn('您要求的 CNY' + GameManager.numberToCommonStr(vo.GameData.balance) + ' 提款已被通過。', () => {
					ui.hide();
				});
			}, this, 100);

		});
		egret.setTimeout(() => {
			SoundManager.getInstance().playBg(SoundConst.BGM1);
		}, this, 3000)
	}

	public updataText(isShowLine: boolean = true): void {
		this.lineLabel.text = vo.GameData.line + '';
		this.betLabel.text = 'x' + vo.GameData.betScoreArr[vo.GameData.betIndex].toFixed(2);
		let money: string = GameManager.numberToCommonStr((vo.GameData.line * vo.GameData.betScoreArr[vo.GameData.betIndex]) * 40) + '';
		this.allBetLabel.text = '￥' + money;
	}

	public updataBtn(): void {
		this.lineSubBtn.enabled = vo.GameData.line > 1;
		this.lineAddBtn.enabled = vo.GameData.line < 9;
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
				SoundManager.getInstance().playEffect(SoundConst.openInfo);
				SoundManager.getInstance().saveVolue();
				SoundManager.getInstance().setBgVolume(0)
				SoundManager.getInstance().setEffectVolume(0);
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
				this.lineAddBtn.enabled = vo.GameData.line < 9;
				this.updataText();
				this.longTouch = false;
				break;
			case this.lineAddBtn:
				if (this.longTouch) return;
				this.hideWin();
				if (vo.GameData.line < 9) {
					vo.GameData.line += 1;
					SoundManager.getInstance().playEffect(SoundConst.ADD);
				}
				this.lineSubBtn.enabled = vo.GameData.line > 1;
				this.lineAddBtn.enabled = vo.GameData.line < 9;
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
				GameManager.getInstance().startGame();
				break;
			case this.stopBtn:
				GameManager.getInstance().stopGame();
				break;
			case this.speedOffBtn:
				this.speedOnBtn.visible = true;
				this.speedOffBtn.visible = false;
				GameConfig.speedPlay = false;
				SoundManager.getInstance().playEffect(SoundConst.SPEED_OFF);
				break;
			case this.speedOnBtn:
				this.speedOnBtn.visible = false;
				this.speedOffBtn.visible = true;
				GameConfig.speedPlay = true;
				SoundManager.getInstance().playEffect(SoundConst.SPEED_ON);
				break;
			case this.intoFreeBtn:
				let img: eui.Image = this.intoFreeBtn.getChildAt(0) as eui.Image;
				egret.Tween.removeTweens(img);
				this.hideWin();
				GameConfig.freePlay = true;
				this.intoFreeBtn.enabled = false;
				this.betAddBtn.enabled = false;
				this.betSubBtn.enabled = false;
				this.gameScence.freeShow();
				break;
			case this.gameScence.goBtn:
				/**免费游戏进入中间界面 */
				this.intoFreeBtn.visible = false;
				this.intoFreeBtn.enabled = true;
				this.startBtn.visible = true;
				this.bg.source = "BG_2x_png";
				this.gameScence.freeUiSet(true);
				break;
			case this.gameScence.backSlotBtn:
				this.backNoral();
				break;
			case this.gameScence.backSlotBtn0:
				this.backNoral();
				break;
		}
	}
	/**返回正常游戏 */
	public backNoral() {
		SoundManager.getInstance().playBg(SoundConst.BGM1);
		this.bg.source = "BG_1x_png";
		console.log('点击了退出');
		this.gameScence.freeDeal.visible = false;
		this.gameScence.freeDataGroup.visible = false;
		this.gameScence.freeDeal1.visible = false;
		this.gameScence.logo.visible = true;
		let resultData: any = vo.GameData.resultData;
		let totalBet: number = vo.GameData.betScoreArr[vo.GameData.betIndex] * 40;
		let winmoney: number = this.gameScence.freeTotalGold;
		let b: number = winmoney * GameConfig.bili / totalBet;
		console.log(winmoney, totalBet)
		//b=50;
		let time = 1000;
		GameConfig.freePlay = false;
		if (b >= 30) {
			this.setReward(winmoney, true, 4);
			egret.clearTimeout(this.tt2);
			time = 22000;
		} else if (b >= 10) {
			// egret.clearTimeout(this.tt2);
			this.setReward(winmoney, true, 3);
			time = 17500;
		}
		else if (b >= 3) {
			time = 10000;
			this.setReward(winmoney, true, 2);
		} else if (b >= 1) {
			this.setReward(winmoney, true, 1);
		} else {
			this.setReward(winmoney, true, 0);
		}
		console.log('时间', time)
		this.autoItem.sopAutoBtn.enabled = true;
		this.autoItem.autoBtn.enabled = true;
		this.startBtn.enabled = true;
		this.stopBtn.enabled = true;
		GameManager.getInstance().isStart = true;
		this.freeTime1 = egret.setTimeout(() => {
			GameManager.getInstance().doNext();
		}, this, time);
	}


	/**中免费游戏时候优先判断是不是还有其他线中奖，有的话先把线中奖的叠加 */
	public freeJudge(arr: Array<any>) {
		GameConfig.freePlay = true;
		this.startBtn.enabled = false;
		this.stopBtn.enabled = false;
		vo.GameData.freeSymbols = vo.GameData.resultData.Value.Main.ReelSymbols;
		/**先排除掉免费游戏的显示，先把中奖的叠加完之后消失在 */
		let tempData: any;
		let tempArr = arr;
		console.log(arr)
		if (arr.length > 1) {
			for (let i = 0; i < arr.length; i++) {
				if (arr[i].Symbol == 'freeslot') {
					/**保存删除的那部分 */
					tempData = arr[i];
					/**删除freeslot */
					tempArr.splice(i, 1);
				}
			}
			this.showWin(tempArr, (t) => {
				egret.setTimeout(() => {
					this.freeshow(tempData);
				}, this, t)
			})
		} else {
			this.freeshow(arr[0]);
		}


	}
	/**免费游戏中间界面之前 */
	public freeshow(arr: Array<any>) {
		this.gameScence.pent.visible = true;
		vo.GameData.freeGold = vo.GameData.resultData.Value.TotalWinDollar;
		vo.GameData.resultData.Value.TotalWinDollar = 0;
		this.hideTime();
		this.gameScence.pent.freeGameEntry(arr)
		this.freeeEntry();
		this.infoBtn.enabled = false;
		this.autoItem.autoBtn.enabled = false;
		this.autoItem.sopAutoBtn.enabled = false;
		this.speedOffBtn.enabled = false;
		this.speedOnBtn.enabled = false;
		this.topMask.visible = true;
		this.bottomMask.visible = true;
	}

	public freeTime1: number;

	public freeeEntry() {
		this.startBtn.visible = false;
		this.startBtn.enabled = false;
		this.intoFreeBtn.visible = true;
		this.intoFreeBtn.enabled = true;
		this.betAddBtn.enabled = false;
		this.betSubBtn.enabled = false;
		let img: eui.Image = this.intoFreeBtn.getChildAt(0) as eui.Image;
		SoundManager.getInstance().playEffect(SoundConst.freeLogo3);
		SoundManager.getInstance().playBg(SoundConst.BGM2)
		/**红利进入按钮闪烁 */
		egret.Tween.get(img, { loop: true }).to({ source: 'intoFreeBtn_H_png' }, 600).to({ source: 'intoFreeBtn_N_png' }, 600)

	}


	public onRemove(): void {
		super.onRemove();
	}

	public onResize(): void {
		var scaleX = (window.innerWidth / GameConfig.DES_WIDTH) || 0;
		var scaleY = (window.innerHeight / GameConfig.DES_HEIGHT) || 0;
		let cs: number = scaleX > scaleY ? scaleY : scaleX;
		let s = scaleX > scaleY ? scaleY : scaleX;
		let ss = scaleX > scaleY ? s * scaleY : s * scaleY;
		if ((window.innerWidth <= 1218 && window.innerWidth >= 1212) && (window.innerHeight <= 835 && window.innerHeight >= 828)) {
			ss = ss * 1.065;
		}
		if (window.innerWidth < 760) {
			this.mainGroup.scaleX = 0.58;
			this.mainGroup.scaleY = 0.58;
		}
		else {
			if (window.innerWidth == 1215 && (window.innerHeight <= 833 && window.innerHeight >= 830)) {
				this.mainGroup.scaleX = ss;
				this.mainGroup.scaleY = ss;
			} else {
				this.mainGroup.scaleX = ss * 0.95;
				this.mainGroup.scaleY = ss * 0.95;
				this.mainGroup.verticalCenter = 2;

			}
			console.log('w', window.innerWidth, 'ss', ss);
		}


		//if(window.innerWidth>)
		let w: number = GameConfig.WIDTH / GameConfig.HEIGHT > GameConfig.MAX_WIDTH / GameConfig.DES_HEIGHT ? GameConfig.MAX_WIDTH * s : GameConfig.WIDTH;
		this.topGroup.width = scaleX > scaleY ? w : GameConfig.DES_WIDTH * cs;
		this.bottomGroup.width = scaleX > scaleY ? w : GameConfig.DES_WIDTH * cs;
		if (window.innerHeight > GameConfig.J_HEIGHT) {
			let dh: number = GameConfig.DES_HEIGHT - GameConfig.J_HEIGHT;
			let d: number = (window.innerHeight - GameConfig.J_HEIGHT) / dh * dh / 2;
			this.topGroup.top = d;
			this.bottomGroup.bottom = d;
		}
		else {
			this.topGroup.top = 0;
			this.bottomGroup.bottom = 0;
		}
		let maxh: number = window.innerHeight - GameConfig.J_HEIGHT;
		let t1s = (window.innerHeight - 55) / GameConfig.J_HEIGHT - maxh / GameConfig.HEIGHT;
		let t2s = (window.innerHeight - 55) / GameConfig.J_HEIGHT;
		this.bg.scaleX = cs;
		if (window.innerHeight > GameConfig.J_HEIGHT) {
			this.bg.scaleY = t1s;
		}
		else {
			this.bg.scaleY = t2s;
		}
		egret.clearTimeout(this.clet);
		this.clet = egret.setTimeout(() => {
			this.topList.updataPosition();
			this.bg.source = window.innerWidth / window.innerHeight < 1065 / 800 ? 'BG_1x_png' : 'BG_1x_png';
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
			this.lineAddBtn.enabled = vo.GameData.line < 9;
			this.updataText();
		}
		else if (this.lineState == 1) {
			if (vo.GameData.line < 9) {
				vo.GameData.line += 1;
				SoundManager.getInstance().playEffect(SoundConst.ADD);
			}
			this.lineSubBtn.enabled = vo.GameData.line > 1;
			this.lineAddBtn.enabled = vo.GameData.line < 9;
			this.updataText();

		}

	}

	public curtime: number = 0;

	public showWin(arr: Array<any>, callfun?: any): void {
		// console.log(arr)

		// console.log('线条', arr.length)
		//先显示一下全部线
		if (arr.length > 1) {
			// if (vo.GameData.autoPlayCount > 0 && vo.GameData.autoPlayCount > 0) {
			// 	for (let i: number = 0; i < arr.length; i++) {
			// 		let data: any = arr[i].Data;
			// 		let positions: Array<any> = arr[i].Positions;
			// 		if (data) {
			// 			let line: number = data.Line;
			// 		}
			// 		else {
			// 			this.gameScence.pent.showkuang2(arr[i].Positions);
			// 		}
			// 	}

			this.gameScence.pent.visible = true;
			this.gameScence.pent.showKuang(arr);

		}
		else {
			for (let i: number = 0; i < arr.length; i++) {
				let data: any = arr[i].Data;
				let positions: Array<any> = arr[i].Positions;
				let winMoney: number = arr[i].Win;
				if (data) {
					let line: number = data.Line;
					if (arr.length > 0) {
						this.gameScence.pent.visible = true;
						this.gameScence.pent.showkuang2(positions, winMoney);
					}
				}

			}
		}


		let t: number = arr.length > 1 ? 1000 : 0;
		this.isCanPlay = false;
		this.tt2 = egret.setTimeout(() => {
			this.isCanPlay = true;
		}, this, 3000);
		this.tt = egret.setTimeout(() => {
			// if (GameConfig.speedPlay && vo.GameData.autoPlayCount > 0) return;

			let data: any = arr[this.winIndex];
			if (data.Data) {
				this.gameScence.pent.showkuang2(data.Positions, data.Win);
			}
			this.winIndex++;
			if (this.winIndex >= arr.length) {
				this.winIndex = 0;
			}
			this.clert = egret.setInterval(() => {
				if (!this.isPlay) return;
				if (arr.length > 1 && this.isCanPlay) {
					SoundManager.getInstance().playEffect(SoundConst.jumpSounds);
				}
				let data: any = arr[this.winIndex];
				if (data.Data) {
					this.gameScence.pent.showkuang2(data.Positions, data.Win);
				}
				this.winIndex++;
				if (this.winIndex >= arr.length) {
					this.winIndex = 0;
				}
			}, this, 800);
		}, this, t);

		let time = this.goldJude();
		return callfun(time) && callfun
	}
	/**金币的一些效果 */
	public goldJude() {
		let resultData: any = vo.GameData.resultData;
		let totalBet: number = vo.GameData.betScoreArr[vo.GameData.betIndex] * 40;
		let totalWin: number = resultData.Value.TotalWin / GameConfig.bili;
		let winmoney: number = resultData.Value.TotalWinDollar;
		let b: number = totalWin / totalBet;
		console.log('奖金倍数', b, winmoney, totalBet)
		let time = 1000;
		if (b >= 30) {
			this.setReward(winmoney, true, 4);
			egret.clearTimeout(this.tt2);
			time = 22000;
		} else if (b >= 10) {
			// egret.clearTimeout(this.tt2);
			this.setReward(winmoney, true, 3);
			time = 17500;
		}
		else if (b >= 3) {
			time = 10000;
			this.setReward(winmoney, true, 2);
		} else if (b >= 1) {
			this.setReward(winmoney, true, 1);
		} else {
			this.setReward(winmoney, true, 0);
		}
		return time;
	}



	public winIndex: number = 0;
	public clert: number;
	public tt: number;
	public tt2: number;
	public reWardChanel: egret.SoundChannel;

	/**
	 * 定时器里面是否能执行 默认是可执行的
	 */
	public isPlay: boolean = true;
	public isCanPlay: boolean = false;
	public hideWin(): void {
		this.winIndex = 0;
		this.reward = 0.00;
		egret.clearInterval(this.clert);
		egret.clearTimeout(this.tt);
		egret.clearTimeout(this.tt2);
		egret.clearTimeout(this.gameScence.pent.freePent1);
		egret.clearTimeout(this.gameScence.pent.freePent2);
		egret.clearTimeout(this.freeTime1);

		this.gameScence.pent.clearAll();
		this.gameScence.hideAllAnimation();
		this.hideFiveAnimation();
	}

	/**清除计时器,保留奖金显示部分 */
	public hideTime(): void {
		egret.clearInterval(this.clert);
		egret.clearTimeout(this.tt);
		egret.clearTimeout(this.tt2);
		egret.clearTimeout(this.gameScence.pent.freePent1);
		egret.clearTimeout(this.gameScence.pent.freePent2);
		egret.clearTimeout(this.freeTime1);
		this.gameScence.pent.clearAll();
		this.gameScence.hideAllAnimation();
		this.hideFiveAnimation();

	}


	public setReward(v: number, isA: boolean = true, rewardType: number = 1): void {
		egret.Tween.removeTweens(this);
		egret.Tween.removeTweens(this.rewardGroup);
		this.rewardGroup.scaleX = 1;
		this.rewardGroup.scaleY = 1;
		if (GameConfig.freePlay && v > 0) {
			this.gameScence.freeAdd(vo.GameData.resultData.Actions.freeslot.ActionWin, this.gameScence.freeTotal, rewardType);
		}
		if (isA && this.reward < v) {
			if (rewardType == 0) {
				this.reWardChanel = SoundManager.getInstance().playEffect(GameConfig.freePlay ? SoundConst.freeadd1 : SoundConst.REWARD);
				egret.Tween.get(this).to({ reward: v }, 800).wait(100).call(() => {
					SoundManager.getInstance().stopEffect(this.reWardChanel);
				});
			} else if (rewardType == 1) {
				this.reWardChanel = SoundManager.getInstance().playEffect(GameConfig.freePlay ? SoundConst.freeadd1 : SoundConst.oneShow);
				egret.Tween.get(this).to({ reward: v }, 800).wait(100).call(() => {
					SoundManager.getInstance().stopEffect(this.reWardChanel);
				});
			}
			else if (rewardType == 2) {
				this.reWardChanel = SoundManager.getInstance().playEffect(GameConfig.freePlay ? SoundConst.freeAdd : SoundConst.REWARD1);
				egret.Tween.get(this).to({ reward: v }, 7500);
				egret.Tween.get(this.rewardGroup).wait(3000)

					.to({ scaleX: 1.2, scaleY: 1.2, y: 50 }, 500)
					.wait(4000)
					.call(() => {
						if (GameConfig.freePlay) {
							SoundManager.getInstance().playEffect(SoundConst.freeadd2);
						}
						SoundManager.getInstance().stopEffect(this.reWardChanel);

					})
					.wait(1000)
					.to({ scaleX: 1, scaleY: 1, y: 56 }, 500);
			}
			else if (rewardType == 3) {
				this.reWardChanel = SoundManager.getInstance().playEffect(GameConfig.freePlay ? SoundConst.freeAdd : SoundConst.REWARD2);
				egret.Tween.get(this).to({ reward: v }, 16000);
				egret.Tween.get(this.rewardGroup)
					.wait(3000)
					.to({ scaleX: 1.2, scaleY: 1.2, y: 50 }, 500)
					.wait(2000)
					.to({ scaleX: 1.5, scaleY: 1.5, y: -370 }, 300)
					// .call(() => { this.isPlay = false; this.gameScence.pauseAllAniation(); }, this)
					.wait(10000)
					.call(() => {
						if (GameConfig.freePlay) {
							SoundManager.getInstance().playEffect(SoundConst.freeadd1);
						}
						SoundManager.getInstance().stopEffect(this.reWardChanel);
						if (GameConfig.autoPlay) {
							this.reward = 0;
						}
					})
					.wait(1000)
					// .call(() => { this.isPlay = true; this.gameScence.resumeAllAnimation(); }, this)
					.to({ scaleX: 1, scaleY: 1, y: 56 }, 300)
			}
			else {
				this.reWardChanel = SoundManager.getInstance().playEffect(GameConfig.freePlay ? SoundConst.freeAdd : SoundConst.REWARD3);
				egret.Tween.get(this).to({ reward: v }, 20500);
				/**奖金标显示和消失 */
				egret.Tween.get(this.rewardImg).wait(13800).to({ alpha: 0 }, 200).wait(7900).to({ alpha: 1 }, 300)
				/**奖金文字的缩放和位置 */
				egret.Tween.get(this.rewardLabel).wait(13800)
					.to({ scaleX: 1.3, scaleY: 1.3, y: 23 }, 500)
					.wait(7900)
					.to({ scaleX: 1, scaleY: 1, y: 37.33 }, 300);



				egret.Tween.get(this.rewardGroup)
					.wait(3000)
					.to({ scaleX: 1.2, scaleY: 1.2, y: 50 }, 1000)
					.wait(3000)
					.to({ scaleX: 1.5, scaleY: 1.5, y: -370 }, 300)
					.wait(7000)
					.call(() => {
						this.showBigReward();
					}, this)
					.wait(7700)
					.call(() => {
						this.hideBigReward();
						this.isCanPlay = true;
						if (GameConfig.freePlay) {
							SoundManager.getInstance().playEffect(SoundConst.freeadd1);
						}
						SoundManager.getInstance().stopEffect(this.reWardChanel);
						if (GameConfig.autoPlay) {
							this.reward = 0;
						}
					}, this)
					.to({ scaleX: 1, scaleY: 1, y: 56 }, 300)
			}

		}
		else {
			this.reward = v;
			this.rewardGroup.y = 56;
			this.rewardGroup.scaleX = 1;
			this.rewardGroup.scaleY = 1;
		}
	}

	public _rewardNum: number = 0;
	private set reward(v: number) {
		this._rewardNum = v;
		let s: string = GameManager.numberToCommonStr(this._rewardNum);
		this.rewardLabel.text = '￥' + s;

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
		egret.Tween.removeTweens(this.rewardImg);
		egret.Tween.removeTweens(this.rewardLabel)
		this.rewardImg.alpha = 1;
		this.rewardLabel.y = 37.33;

		SoundManager.getInstance().stopEffect(this.reWardChanel);
		if (GameConfig.freePlay && this.gameScence.freeTotalGold > 0) {
			egret.Tween.removeTweens(this.gameScence)
			this.gameScence.freeTotalGold = vo.GameData.resultData.Actions.freeslot.ActionWin;
			this.gameScence.freeTotal.text = '￥' + GameManager.numberToCommonStr(vo.GameData.resultData.Actions.freeslot.ActionWin);
		}
		this.reward = money;
		egret.Tween.get(this.rewardGroup).to({ scaleX: 1, scaleY: 1, y: 56 }, 300);
		egret.Tween.get(this).wait(200).call(() => {
			this.reward = 0;
		});
	}

	/**
	 * 显示5同类动画
	 */
	public showFiveAimation(data, callfun: any = null): void {
		SoundManager.getInstance().playEffect(SoundConst.FIVE_SOUND);
		this.aGroup.visible = true;
		// this.bigRewardLabel.text = '5个一样的';
		// this.bigRewardLabel.size = 80;
		this.bigWinImg.source = '6xian_png';
		this.bigRewardGroup.verticalCenter = 0;
		this.bigRewardGroup.scaleX = 1;
		this.bigRewardGroup.scaleY = 1;
		this.bigRewardGroup.alpha = 1;
		console.log('66666666', data)
		// if (data.Data) {
		this.gameScence.pent.visible = true;
		this.gameScence.pent.showKuang(data, data.Win);
		// }
		// else {
		// this.gameScence.pent.showkuang2(data.Positions);
		// }

		egret.Tween.removeTweens(this.bigRewardGroup);
		egret.Tween.get(this.bigRewardGroup).wait(100).to({ scaleX: 0, scaleY: 0 }, 10)
			.to({ scaleX: 1, scaleY: 1 }, 400)
			.to({ scaleX: 0.9, scaleY: 0.9 }, 100)
			.to({ scaleX: 1, scaleY: 1 }, 100)

			.to({ scaleX: 0.9, scaleY: 0.9 }, 100)
			.to({ scaleX: 1, scaleY: 1 }, 100)
			.to({ scaleX: 1.2, scaleY: 1.2, alpha: 0 }, 800)
			.call(() => {
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
		this.gameScence.pent.clearAll();
	}

	/**
	 * 显示大奖
	 */
	public showBigReward(callfun: any = null): void {
		this.aGroup.visible = true;
		// this.bigRewardLabel.text = '大奖';
		// this.bigRewardLabel.size = 150;
		this.bigWinImg.source = 'bigreward_png';
		this.bigRewardGroup.alpha = 1;
		this.bigRewardGroup.scaleX = 1;
		this.bigRewardGroup.scaleY = 1;
		this.bigRewardGroup.verticalCenter = -210;
		egret.Tween.removeTweens(this.bigRewardGroup);
		egret.Tween.get(this.bigRewardGroup)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550).call(() => {
				this.hideBigReward();
				callfun && callfun();
			}, this);
		if (GameConfig.freePlay) {
			SoundManager.getInstance().playEffect(SoundConst.BIG_REWARD);
		}
		if (!this.rewardMc) {

			this.rewardMc = game.MCUtils.getMc('reward');
			this.mcGroup.addChild(this.rewardMc);
			this.rewardMc.x = this.aGroup.width / 2;
			this.rewardMc.y = this.aGroup.height / 2 - 40;
			this.rewardMc.scaleX = 1.3;
			this.rewardMc.scaleY = 1.3;
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
