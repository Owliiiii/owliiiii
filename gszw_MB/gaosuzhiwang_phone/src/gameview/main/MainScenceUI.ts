
class MainScenceUI extends core.BaseUI {
	public bg: eui.Image;
	public gameScence: GameScence;
	public setUI: SetUI;
	public index: number = 0;

	public tipGroup: eui.Group;
	public tipLabel: eui.Label;

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
		this.registerEvent(this.gameScence, egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
		this.registerEvent(this, egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
		// this.registerEvent(this, egret.TouchEvent.TOUCH_END, this.onEnd, this);
		egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
		this.registerEvent(this.setUI.autoButton, egret.TouchEvent.TOUCH_END, this.onEnd, this);
		GameManager.getInstance().addEventListener(SetEvent.SET_HIDE_REWARD, this.hideWin, this);
		this.alpha = 0;
			egret.Tween.get(this).to({ alpha: 1 }, 1000);
	

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

	public curtime: number = 0;

	public canStop(): void {
		for (let i: number = 0; i < this.gameScence.reelArr.length; i++) {
			let reel: Reel = this.gameScence.reelArr[i];
			reel.curTime = egret.getTimer();
			reel.curReelData = vo.GameData.resultData.Value.SpinResult.Main.ReelSymbols[i];
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

	public showWin(arr: Array<any>): void {
		SetConst.REWARD_SHOW = true;
		if (SoundManager.getInstance().effectOn) {
			SoundManager.getInstance().playMusic(SoundConst.REWARD, 1).then((channel) => {
				GameManager.getInstance().rewardChannel = channel;
			});
		}


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
		this.setUI.tipLabel.visible=true;
		this.setUI.rewardGroup.visible=false;
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

	private _rewardNum: number = 0;
	private set reward(v: number) {
		this._rewardNum = v;
		let s: string = GameManager.numberToCommonStr(this._rewardNum);
		this.setUI.rewardLabel.text = '￥' + s;
	}

	private get reward(): number {
		return this._rewardNum;
	}


	public setRewardMax(v: number, isA: boolean = true, t: number = 1): void {
		egret.Tween.removeTweens(this);
        this.setUI.tipLabel.visible=false;
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
		SoundManager.getInstance().playEffect(SoundConst.FIVE_SOUND);
		this.tipGroup.visible = true;
		this.tipLabel.text = '5个一样的';
		this.tipLabel.size = 80;
		this.tipGroup.scaleX = 0.5;
		this.tipGroup.scaleY = 0.5;
		if (data.Data) {
			this.gameScence.pent.showKuang(data.Data.Line, data.Positions);
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
		this.tipLabel.text = '大奖';
		this.tipLabel.size = 150;
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