
class MainScenceUI extends core.BaseUI {
	public bg: eui.Image;
	public gameScence: GameScence;
	public setUI: SetUI;
	public index: number = 0;
	public mainGroup: eui.Group;
	public tipGroup: eui.Group;
	// public tipLabel: eui.Label;
	public rewardWin: eui.Image;
	public freeGroup: eui.Group;
	public bg1: eui.Image;
	public freeNumGroup: eui.Group;
	public rotateNum: eui.Label;
	public fanbeiNum: eui.Label;
	public beiKe_0: eui.Image;
	public beiKe_x0: eui.Image;
	public beiKe_1: eui.Image;
	public beiKe_x1: eui.Image;
	public beiKe_2: eui.Image;
	public beiKe_x2: eui.Image;
	public beiKe_3: eui.Image;
	public beiKe_x3: eui.Image;
	public beiKe_4: eui.Image;
	public beiKe_x4: eui.Image;

	public tipsGroup: eui.Group;
	public pickFree: eui.Group;
	public pickFreeBtn: MouseButton;
	public freeNum: eui.Label;
	public beiNum: eui.Label;
	public overFree: eui.Group;
	public overFreeBtn: MouseButton;
	public gameMoney: eui.BitmapLabel;
	public gongNengMoney: eui.BitmapLabel;
	public totalMoney: eui.BitmapLabel;

	public logo_group: eui.Group;
	public logo1: eui.Image;
	public logo2: eui.Image;
	public free_group: eui.Group;
	public free_fanbei: eui.Label;
	public free_Num: eui.Label;
	public free_money: eui.Label;




	public mcGroup;
	public rewardMc;

	public constructor() {
		super();
		this.skinName = MainScenceUISkin;
	}
	public onAdd(): void {
		super.onAdd();
		this.gameScence.init();
		this.gameScence.reset();
		this.updataUI();
		this.setUI.updataState();
		this.registerEvent(this.gameScence, egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
		this.registerEvent(this, egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
		// this.registerEvent(this, egret.TouchEvent.TOUCH_END, this.onEnd, this);
		egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
		this.registerEvent(this.setUI.autoButton, egret.TouchEvent.TOUCH_END, this.onEnd, this);
		this.registerEvent(this.setUI.bonusBtn, egret.TouchEvent.TOUCH_END, this.onBonusEnd, this);
		this.registerEvent(this.pickFreeBtn, egret.TouchEvent.TOUCH_TAP, this.closeFreeUi, this);
		GameManager.getInstance().addEventListener(SetEvent.SET_HIDE_REWARD, this.hideWin, this);
		this.registerEvent(this.overFreeBtn, egret.TouchEvent.TOUCH_TAP, this.endFreeUi, this);
		this.alpha = 0;
		egret.Tween.get(this).to({ alpha: 1 }, 1000).wait(5000).call(() => {
			core.UIManager.closeUI(core.UIConst.AudioTips);
		});
		egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE, () => {
			this.setUI.updataState();
			this.updataState();
		}, this);
		this.registerEvent(this, eui.UIEvent.RESIZE, this.initSc, this);
		let today: any = egret.localStorage.getItem('today');
		if (today) {
			let nowtime = new Date().getTime();
			if (!Utils.isSameDay(parseInt(today), nowtime)) {
				//弹出
				this.setUI.popBet();
			}
		}
		else {
			this.setUI.popBet();
		}
		egret.localStorage.setItem('today', new Date().getTime() + '');
	}
	public initSc(): void {
		egret.setTimeout(() => {
			this.setUI.updataState();
		}, this, 800);
	}


	public isBegin: boolean = false;
	public tx: number = 0;
	public ty: number = 0;
	public onBegin(e: egret.TouchEvent): void {
		this.tx = e.stageX;
		this.ty = e.stageY;
		if (GameManager.getInstance().gameState == GameType.GameState.STOP && e.currentTarget == this.gameScence && this.isBegin == false) {
			this.isBegin = true;
		}
	}

	public onEnd(e: egret.TouchEvent): void {
		this.curtime = egret.getTimer();
		if (e.currentTarget == this.setUI.autoButton) {
			if (GameManager.getInstance().gameState == GameType.GameState.PLAYING) {
				e.stopPropagation();
				e.stopImmediatePropagation();
			}
			return;
		}

		if (this.isBegin) {
			if (!GameConfig.isBonusBtn) {
				this.isBegin = false;
				if (SetConst.AUTO_SHOW || SetConst.BETSET_SHOW) return;
				if (GameManager.getInstance().gameState == GameType.GameState.PLAYING) {
					return;
				}
				if (e.stageY - this.ty > 20) {
					Reel.REEL_MODE = GameType.RellMode.DOWN;
					GameManager.getInstance().dispatchEventWith(SetEvent.SET_START);
				} else if (e.stageY - this.ty < -20) {
					Reel.REEL_MODE = GameType.RellMode.UP;
					GameManager.getInstance().dispatchEventWith(SetEvent.SET_START);
				}
				else {
				}
			}
		}
		else {
			this.isBegin = false;
			if (GameManager.getInstance().gameState == GameType.GameState.PLAYING && SetConst.isCanStopGame == true) {
				SetConst.isCanStopGame = false;
				console.log('aaaaaaa');
				let winarr: Array<any> = vo.GameData.resultData.Value.SpinResult.Main.WinResults;
				this.gameScence.stopReel();
			}
		}
	}

	//切换了横竖
	public updataState(): void {
		if (GameConfig.isBonusBtn) {
			this.setUI.updataEnable(0);
			this.setUI.bonusBtn.visible = true;
			this.setUI.startButton.visible = false;
			this.setUI.autoButton.visible = false;
		}
		if (GameConfig.freeGame) {
			this.setUI.updataEnable(0);
			this.bg.visible = false;
			this.mainGroup.visible = false;
			this.setUI.visible = false;
			this.freeGroup.visible = true;
			if (this.isTipsGroup) {
				this.tipsGroup.visible = true;

			}
		}
	}
	//选择贝壳结束按钮
	public closeFreeUi(): void {
		this.indexNum = 0;
		GameConfig.isBonusBtn = false;
		this.setUI.setBtn.visible = false;
		this.setUI.qukGroup.visible = false;
		this.setUI.betBtn.visible = false;

		this.setUI.bottomGroup.visible = true;
		// GameConfig.freeGame = false;
		this.isTipsGroup = false;
		this.logo1.visible = false;
		this.logo2.visible = true;
		this.free_group.visible = true;
		this.gameScence.freeBg.visible = true;
		this.free_fanbei.text = this.fanbeiNum.text;
		this.free_Num.text = "" + vo.GameData.TotalActionCount;

		this.bg.visible = true;
		this.mainGroup.visible = true;

		this.freeGroup.visible = false;
		GameConfig.freeGame = false;
		this.tipsGroup.visible = false;
		for (var i = 0; i < 5; i++) {
			this["beiKe_" + i].source = "with_pearl_01_png";
			this["beiKe_x" + i].visible = false;
		}
		Commond.sendBonus(1, vo.GameData.TotalActionCount);
	}
	//免费游戏结束弹窗
	public endFree(): void {
		this.tipsGroup.visible = true;
		this.isTipsGroup = true;
		this.pickFree.visible = false;
		this.overFree.visible = true;
		// this.stopMusic();
	}

	//免费游戏结束按钮
	public endFreeUi(): void {
		//游戏页面ui 
		this.setUI.FreeBtn.visible = false;
		this.setUI.visible = true;
		this.logo1.visible = true;
		this.logo2.visible = false;
		this.free_group.visible = false;
		this.gameScence.freeBg.visible = false;
		this.isTipsGroup = false;
		this.tipsGroup.visible = false;
		this.pickFree.visible = true;
		this.overFree.visible = false;

		GameConfig.isFree = false;
		// this.autoItem.sopAutoBtn.enabled = true;
		//还有自动次数，游戏停止，弹窗

		//展示金币
		let resultData: any = vo.GameData.resultData;
		let totalBet: number = resultData.Value.SpinResult.TotalBet;//vo.GameData.betScoreArr[vo.GameData.betIndex];//
		let totalWin: number = resultData.Value.SpinResult.TotalWin;
		let denom: number = resultData.Value.SpinResult.Denom / 10000;	//总赌注
		let winmoney: number = resultData.Value.Dollar;			//奖金
		let b: number = winmoney / denom;
		console.log(denom + " == 最后的分数 == " + winmoney);
		if (b >= 30) {		//大奖 喷金币
			this.setRewardMax(winmoney, true, 4);
		}
		if (b >= 8 && b < 30) {		//奖金栏放大
			this.setRewardMax(winmoney, true, 3);
		}
		if (b >= 1 && b < 8) {		//＂奖金栏＂数字变动(音效长)
			this.setRewardMax(winmoney, true, 2);
		}
		if (b < 1) {				//＂奖金栏＂数字变动(音效短)
			this.setRewardMax(winmoney, true, 1);
		}
	}
	//Bonus
	public onBonusEnd() {
		console.log('点击免费游戏');
		//隐藏动画，跳转界面,替换按钮
		
		this.setUI.bonusBtn.visible = false;
		this.gameScence.removeBonusMc();
		// GameConfig.isFree = false;
		this.setUI.bonusBtnState(false);
		this.gameScence.huanyuanC1(this.bonusPos);
		//
		this.showFreeUi();

	}

	public showFreeUi(): void {
		console.log("打开了免费界面");
		//音乐
		this.hideWin();

		this.setUI.setBtn.visible = false;
		this.setUI.qukGroup.visible = false;
		this.setUI.betBtn.visible = false;
		this.setUI.bottomGroup.visible = false;

		this.bg.visible = false;
		this.bg1.visible = true;
		this.mainGroup.visible = false;
		this.freeGroup.visible = true;
		this.fanbei = 2;
		this.roteNum = 8;
		this.CountArr = this.CountArr.sort(() => Math.random() - 0.5).slice(0, 5);
		for (var i = 0; i < 5; i++) {
			this["beiKe_" + i].pixelHitTest = true;
			this["beiKe_" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeBeiKe, this);
		}
	}
	public CountArr: Array<any> = [5, 7, 15, 10, 8];
	private fanbei: number = 2;
	private roteNum: number = 8;
	public indexNum: number = 0;
	public changeBeiKe(evt: egret.TouchEvent): void {
		//选择贝壳，播放动画
		let index: number;
		let Count: number;
		this.indexNum++;

		// arr.splice();
		switch (evt.currentTarget) {
			case this["beiKe_0"]:
				index = 0;
				Count = this.CountArr[index];	//倍数 beiKe_x0.source = pearl_text5_png
				break;
			case this["beiKe_1"]:
				index = 1;
				Count = this.CountArr[index];
				break;
			case this["beiKe_2"]:
				index = 2;
				Count = this.CountArr[index];
				break;
			case this["beiKe_3"]:
				index = 3;
				Count = this.CountArr[index];
				break;
			case this["beiKe_4"]:
				index = 4;
				Count = this.CountArr[index];	//倍数
				break;
		}
		// Count = CountArr[index];
		// vo.GameData.TotalActionCount = vo.GameData.TotalActionCount + Count;
		if (this.indexNum == 1) {
			if (Count == 8 || Count == 5) {
				this.fanbei += Count;
			} else {
				this.roteNum += Count;
			}
			vo.GameData.TotalActionCount = this.roteNum;
		}
		if (this.indexNum >= 2) {
			if (Count == 8 || Count == 5) {
				this.fanbei += Count;
			} else {
				this.roteNum += Count;
			}
			vo.GameData.TotalActionCount = this.roteNum;//(vo.GameData.TotalActionCount + this.roteNum);
		}
		this["beiKe_" + index].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeBeiKe, this);
		if (this.indexNum >= 2) {
			for (var i = 0; i < 5; i++) {
				this["beiKe_" + i].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.changeBeiKe, this);
			}
		}
		egret.Tween.get(this["beiKe_" + index]).call(() => { this["beiKe_" + index].source = "with_pearl_01_png" })
			.wait(300)
			.call(() => { this["beiKe_" + index].source = "with_pearl_02_png" })
			.wait(500)
			.call(() => {
				this["beiKe_" + index].source = "with_pearl_03_png";
				// this.rotateNum.text = "";
				// this.fanbeiNum.text = "";
				this.freeNum.text = "";
				this.beiNum.text = "";
				this.rotateNum.text = "" + vo.GameData.TotalActionCount;
				// if (Count <= 8) {
				// 	this.fanbeiNum.text = "X" + this.fanbei;
				// } else {
				// 	this.fanbeiNum.text = "X2";
				// }
				this.fanbeiNum.text = "X" + this.fanbei;

				this.freeNumGroup.visible = true;

				if (index <= 2) {
					// this["beiKe_x" + index].y = 327;
				} else {
					// this["beiKe_x" + index].y = 525;
				}
				this["beiKe_x" + index].source = "pearl_text" + Count + "_png";
				this["beiKe_x" + index].visible = true;
				// 5 7 15 10 8
				egret.setTimeout(() => {
					if (this.indexNum >= 2) {
						for (var i = 0; i < 5; i++) {
							if (!this["beiKe_x" + i].visible) {
								if (i <= 2) {
									// this["beiKe_x" + i].y = 433;
								} else {
									// this["beiKe_x" + i].y = 630;
								}
								this["beiKe_x" + index].source = "pearl_text" + Count + "_png";
								this["beiKe_x" + i].visible = true;
							}
						}
						// if (Count == 5 || Count == 8) {
						// 	this.fanbeiNum.text = "X" + 2 + Count;
						// } else {
						// 	this.fanbeiNum.text = "X2";
						// }
						this.fanbeiNum.text = "X" + this.fanbei;
						this.rotateNum.text = "" + vo.GameData.TotalActionCount;

						this.freeNum.text = "" + vo.GameData.TotalActionCount;
						this.beiNum.text = "X" + this.fanbei;
						console.log("vo.GameData.TotalActionCount === " + vo.GameData.TotalActionCount);
						this.tipsGroup.visible = true;
						vo.GameData.TotalActionCount -= 1;
					}
				}, this, 200);
			})

	}
	public isTipsGroup: boolean = false;
	public curtime: number = 0;
	public indexC1: number = 0;
	public canStop(): void {
		this.indexC1 = 0;
		GameConfig.isTwo = false;
		// GameConfig.isTest = false;
		GameConfig.twoC1Index = -1;
		// GameConfig.twoC1Index = 4;
		// GameConfig.isData = true;


		for (let i: number = 0; i < this.gameScence.reelArr.length; i++) {
			let reel: Reel = this.gameScence.reelArr[i];
			reel.curTime = egret.getTimer();
			reel.curReelData = vo.GameData.resultData.Value.SpinResult.Main.ReelSymbols[i];
			for (let j = 0; j < reel.curReelData.length; j++) {
				if (reel.curReelData[j] == "C1") {
					this.indexC1++;
					if (this.indexC1 == 1) {
						GameConfig.oneC1Index = i;
					} else if (this.indexC1 == 2) {	//有2个贝壳
						GameConfig.twoC1Index = i;
						GameConfig.isTwo = true;
					} else if (this.indexC1 >= 3) {	//有3个贝壳
						GameConfig.threeC1Index = i;
					} else {
						GameConfig.threeC1Index = -1;
					}
				}
			}
		}

	}

	public updataHor(): void {
		this.updataSame();
		this.setUI.updataHor();
	}

	public updataVer(): void {
		this.updataSame();
		this.setUI.updataVer();
	}

	public updataSame(): void {
		if (!SetConst.REWARD_SHOW) {
			this.setUI.rewradMaxGroup.y = this.setUI.bottomGroup.height + this.setUI.rewradMaxGroup.height * this.setUI.rewradMaxGroup.scaleY;
			return;
		}

		let ish: boolean = window.innerWidth > window.innerHeight;
		if (this.setUI.rewardMc) {
			let ty = ish ? GameConfig.HEIGHT / 2 - 5 : GameConfig.HEIGHT / 2 + 140;
			this.setUI.rewardMc.x = GameConfig.WIDTH / 2;
			this.setUI.rewardMc.y = ty;
		}
		if (this.index == 1) {
			this.setUI.rewradMaxGroup.y = ish ? 46 : 41;
		}
		else if (this.index == 2) {
			this.setUI.rewradMaxGroup.y = ish ? -GameConfig.HEIGHT / 2 + this.setUI.bottomGroup.height : -GameConfig.HEIGHT / 2 + this.setUI.bottomGroup.height;
		}
		else {
			return;
		}
	}

	public onRemove(): void {
		super.onRemove();
	}

	public updataUI(): void {

	}

	public onTab(e: egret.TouchEvent): void {
		this.updataUI();
	}

	private showReward: number = 0;
	//public curtime: number = 0;
	public bonusPos: Array<any>;//保存3个中奖的位置
	public showWin(arr: Array<any>): void {
		SetConst.REWARD_SHOW = true;
		if (SoundManager.getInstance().effectOn) {
			SoundManager.getInstance().playMusic(SoundConst.REWARD, 1).then((channel) => {
				GameManager.getInstance().rewardChannel = channel;
			});
		}
		//进入免费游戏抽奖
		if (arr.length > 0 && arr[0].Type == "Bonus2" && arr[0].SymbolCount >= 3) {
			//当有3个C1,C1不在中间一列移动到中间
			GameConfig.isFree = true;
			SetConst.AUTO_COUNT = 0;
			// SetConst.isCanStopGame = false;
			// this.gameScence.stopReel();

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
			//按钮状态
			this.setUI.startButton.visible = false;
			this.setUI.autoButton.visible = false;
			this.setUI.bonusBtnState(true);
			this.setUI.bonusBtn.visible = true;
			GameConfig.isBonusBtn = true;
			this.setUI.updataEnable(0);
			return;
		}
		//其他界面状态


		//先显示一下全部线
		this.gameScence.pent.clearTip();
		this.gameScence.pent.cleaAllLine();
		this.gameScence.pent.clearReward();
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

			for (let j: number = 0; j < positions.length; j++) {
				let p: any = positions[j];
				this.gameScence.showAnimation(p);
			}
		}
		//}

		let t: number = arr.length > 1 ? 500 : 0;
		let iscanPlay: boolean = false;
		this.tt2 = egret.setTimeout(() => {
			iscanPlay = true;
		}, this, 3000);
		this.tt = egret.setTimeout(() => {
			this.gameScence.pent.clearTip();
			this.gameScence.pent.cleaAllLine();
			this.gameScence.pent.clearReward();
			let data: any = arr[this.winIndex];
			if (data.Data) {
				this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
				let arrs: Array<any> = this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
				this.gameScence.pent.showLine(data.Data.Line, arrs);
				this.gameScence.pent.showTipLine(data.Data.Line);
				if (data.Positions[0].X == 0) {
					this.gameScence.pent.showReward(data.Data.Line, data.Positions[0], data.Win / 10000);
				}
				else {
					this.gameScence.pent.showReward(data.Data.Line, data.Positions[data.Positions.length - 1], data.Win / 10000);
				}
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
				this.gameScence.pent.clearReward();
				if (arr.length > 1 && iscanPlay) {
					SoundManager.getInstance().playEffect(SoundConst.SINGLEREWARD);
				}
				let data: any = arr[this.winIndex];
				if (data.Data) {
					this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
					let arrs: Array<any> = this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
					this.gameScence.pent.showLine(data.Data.Line, arrs);
					this.gameScence.pent.showTipLine(data.Data.Line);
					if (data.Positions[0].X == 0) {
						this.gameScence.pent.showReward(data.Data.Line, data.Positions[0], data.Win / 10000);
					}
					else {
						this.gameScence.pent.showReward(data.Data.Line, data.Positions[data.Positions.length - 1], data.Win / 10000);
					}
				}
				else {
					this.gameScence.pent.showkuang2(data.Positions);
				}

				this.winIndex++;
				if (this.winIndex >= arr.length) {
					this.winIndex = 0;
				}
			}, this, 800);
		}, this, t);

		let resultData: any = vo.GameData.resultData;
		let totalBet: number = resultData.Value.SpinResult.TotalBet;
		let totalWin: number = resultData.Value.SpinResult.TotalWin;
		let winmoney: number = resultData.Value.Dollar;
		let b: number = totalWin / totalBet;
		this.setRewardMax(0, false);
		if (b >= 50) {
			this.setUI.rewradMaxGroup.visible = true;
			this.setUI.rewardGroup.visible = false;
			egret.clearTimeout(this.tt2);
			this.setRewardMax(winmoney, true, 4);
		}
		else if (b >= 22) {
			this.setUI.rewradMaxGroup.visible = true;
			this.setUI.rewardGroup.visible = false;
			this.setRewardMax(winmoney, true, 3);
		}
		else if (b >= 6) {
			this.setUI.rewradMaxGroup.visible = true;
			this.setUI.rewardGroup.visible = false;
			this.setRewardMax(winmoney, true, 2);
		}
		else if (b >= 1.3) {
			this.setUI.rewradMaxGroup.visible = true;
			this.setUI.rewardGroup.visible = false;
			this.setRewardMax(winmoney, true, 1);

		} else {
			this.setUI.rewradMaxGroup.visible = false;
			this.setUI.rewardGroup.visible = true;
			SetConst.REWARD_SMALLSHOW = true;
			this.setReward(winmoney);
			this.setUI.tipLabel.visible = false;
		}
	}

	public winIndex: number = 0;
	public clert: number;
	public tt: number;
	public tt2: number;
	public hideWin(): void {
		egret.clearInterval(this.clert);
		egret.clearTimeout(this.tt);
		egret.clearTimeout(this.tt2);
		this.gameScence.pent.clearAll();
		this.gameScence.hideAllAnimation();
		this.hideFiveAnimation();
		this.winIndex = 0;
		this.reward = 0.00;
		this.hideReward();

	}
	public hideReward(): void {
		egret.Tween.removeTweens(this.setUI.rewradMaxGroup);
		SetConst.REWARD_SHOW = false;
		SetConst.REWARD_SMALLSHOW = false;
		this.showReward = 0;
		this.rewardMax = 0;
		let ty: number = this.setUI.bottomGroup.height + this.setUI.rewradMaxGroup.height * this.setUI.rewradMaxGroup.scaleY;
		egret.Tween.get(this.setUI.rewradMaxGroup).to({ y: ty, scaleX: 1, scaleY: 1 }, 300).call(() => {
			this.setUI.rewradMaxGroup.visible = false;
		});
		this.setUI.mcGroup.visible = false;
		if (this.setUI.rewardMc) {
			this.setUI.rewardMc.stop();
		}
		this.setUI.tipLabel.visible = true;
	}

	public setReward(v: number, isA: boolean = true): void {
		egret.Tween.removeTweens(this);
		if (isA && this.reward < v) {
			egret.Tween.get(this).to({ reward: v }, 2000).call(() => {
			});
		}
		else {
			this.reward = v;
		}
	}
	private allReward: number = 0;
	private _rewardNum: number = 0;
	private set reward(v: number) {
		this._rewardNum = v;
		let s: string = GameManager.numberToCommonStr(this._rewardNum);
		this.setUI.rewardLabel.text = 'x' + s;
	}

	private get reward(): number {
		return this._rewardNum;
	}


	public setRewardMax(v: number, isA: boolean = true, t: number = 1): void {
		egret.Tween.removeTweens(this);
		this.setUI.tipLabel.visible = false;
		let tArr: Array<number> = [0, 2000, 3000, 4000, 9000];
		let ish: boolean = window.innerWidth > window.innerHeight;
		let ty: number = 0;
		if (isA) {
			egret.Tween.get(this).to({ rewardMax: v }, tArr[t]);
			ty = ish ? 46 : 41;
			egret.Tween.get(this.setUI.rewradMaxGroup).to({ y: ty }, 500).wait(1000).call(() => {
				this.index = 1;
				if (t > 1) {
					egret.Tween.get(this.setUI.rewradMaxGroup).to({ scaleX: 1.1, scaleY: 1.1 }, 1000, egret.Ease.backOut).wait(1000).call(() => {
						if (t > 2) {
							ish = window.innerWidth > window.innerHeight;
							ty = ish ? -GameConfig.HEIGHT / 2 + this.setUI.bottomGroup.height : -GameConfig.HEIGHT / 2 + this.setUI.bottomGroup.height;
							egret.Tween.get(this.setUI.rewradMaxGroup).to({ y: ty, scaleX: 1.4, scaleY: 1.4 }, 300).call(() => {
								this.index = 2;
								if (t > 3) {
									if (!this.setUI.rewardMc) {
										this.setUI.rewardMc = game.MCUtils.getMc('rewards');
										this.setUI.mcGroup.addChild(this.setUI.rewardMc);
									}
									ish = window.innerWidth > window.innerHeight;
									ty = ish ? GameConfig.HEIGHT / 2 - 5 : GameConfig.HEIGHT / 2 + 140;
									this.setUI.rewardMc.x = GameConfig.WIDTH / 2;
									this.setUI.rewardMc.y = ty;
									this.setUI.mcGroup.visible = true;
									this.setUI.rewardMc.gotoAndPlay('a0', -1);
									egret.Tween.get(this.setUI.rewradMaxGroup).wait(7000).call(() => {
										this.setUI.mcGroup.visible = false;
										this.setUI.rewardMc.stop();
										ish = window.innerWidth > window.innerHeight;
										ty = ish ? 46 : 41;
										egret.Tween.get(this.setUI.rewradMaxGroup).to({ scaleX: 1, scaleY: 1, y: ty }, 300).call(() => {
											this.index = 1;
										}, this);
									}, this);
								}
								else {
									ty = ish ? 46 : 41;
									egret.Tween.get(this.setUI.rewradMaxGroup).wait(1000).to({ scaleX: 1, scaleY: 1, y: ty }, 300);
								}
							}, this);
						}
						else {
							egret.Tween.get(this.setUI.rewradMaxGroup).wait(1000).to({ scaleX: 1, scaleY: 1 }, 300);
						}
					}, this);
				}

			}, this);

		}
		else {
			this.rewardMax = v;
		}
	}

	private _rewardMaxNum: number = 0;
	private set rewardMax(v: number) {
		this._rewardMaxNum = v;
		let s: string = GameManager.numberToCommonStr(this._rewardMaxNum);
		// if (s.split('.').length > 1 && s.split('.')[1] == '00') {
		// 	let r: number = Math.random();
		// 	s = s.split('.')[0] + '.' + r.toFixed(2).split('.')[1];
		// }
		this.setUI.rewardMaxLabel.text = 'x' + s;
	}

	private get rewardMax(): number {
		return this._rewardMaxNum;
	}


	/**
	 * 显示5同类动画
	 */
	public showFiveAimation(data, callfun: any = null): void {
		// SoundManager.getInstance().playEffect(SoundConst.FIVE_SOUND);
		this.tipGroup.visible = true;
		this.rewardWin.source = 'five_png';
		// this.tipLabel.size = 80;
		this.tipGroup.scaleX = 0.5;
		this.tipGroup.scaleY = 0.5;
		if (data.Data) {
			let arrs: Array<any> = this.gameScence.pent.getLineArrForKuang(data.Data.Line, data.Positions);
			this.gameScence.pent.showLine(data.Data.Line, arrs);
			this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
			this.gameScence.pent.showTipLine(data.Data.Line);		//两边的数字
		}
		else {
			this.gameScence.pent.showkuang2(data.Positions);
		}

		egret.Tween.removeTweens(this.tipGroup);
		egret.Tween.get(this.tipGroup)
			.to({ scaleX: 1.35, scaleY: 1.35 }, 800).to({ scaleX: 0.5, scaleY: 0.5 }, 800)
			.to({ scaleX: 1.35, scaleY: 1.35 }, 800).to({ scaleX: 0.5, scaleY: 0.5 }, 800)
			.to({ scaleX: 1.35, scaleY: 1.35 }, 800).call(() => {
				this.hideFiveAnimation();
				callfun && callfun();
			}, this);
	}

	/**
	 * 隐藏5同类动画
	 * 
	 */
	public hideFiveAnimation(): void {
		egret.Tween.removeTweens(this.tipGroup);
		this.tipGroup.visible = false;
		this.gameScence.pent.clearAll();
	}

	/**
	 * 显示大奖
	 */
	public showBigReward(callfun: any = null): void {
		this.tipGroup.visible = true;
		this.rewardWin.source = 'big_png';
		// this.tipLabel.size = 150;
		this.tipGroup.scaleX = 1;
		this.tipGroup.scaleY = 1;
		this.tipGroup.verticalCenter = -150;
		egret.Tween.removeTweens(this.tipGroup);
		egret.Tween.get(this.tipGroup)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 550).to({ scaleX: 1, scaleY: 1 }, 550).call(() => {
				this.hideBigReward();
				callfun && callfun();
			}, this);

		if (!this.rewardMc) {
			this.rewardMc = game.MCUtils.getMc('reward');
			this.mcGroup.addChild(this.rewardMc);
			this.rewardMc.x = this.mcGroup.width / 2;
			this.rewardMc.y = this.mcGroup.height / 2 + 30;
		}
		this.mcGroup.visible = true;
		this.rewardMc.gotoAndPlay('a0', -1);
	}

	/**
	 * 隐藏大奖
	 */
	public hideBigReward(): void {
		egret.Tween.removeTweens(this.tipGroup);
		this.tipGroup.visible = false;
		this.rewardMc.stop();
		this.mcGroup.visible = false;
	}

}