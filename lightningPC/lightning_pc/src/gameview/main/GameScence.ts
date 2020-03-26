class GameScence extends eui.Component {

	public reelArr: Array<Reel> = [];
	public freeGroup: eui.Group;
	public shandian: eui.Group;
	public logo: eui.Group;
	public freeDataGroup: eui.Group;
	public total: eui.Label;
	public goBtn: eui.Button;
	public reelGroup: eui.Group;
	public DiamondsYanhua: eui.Image;

	public freeLogo: eui.Group;
	public leftData: eui.Group;
	public rightData: eui.Group;
	public leftImg: eui.Image;
	public rightImg: eui.Image;
	public DiamondsGroup: eui.Group;
	public startLight: eui.Image;

	public freeNum: eui.Label;
	public freeTotal: eui.Label;

	public freeDeal: eui.Group;
	public freeDeal1: eui.Group;

	/**免费游戏中再次中了免费游戏时后出现freeDeal1，不然只出现freeDeal */
	public dealContent0: eui.Label;
	public dealContent1: eui.Label;
	public dealContent2: eui.Label;
	public dealText0: number;
	public dealText1: number;
	public dealText2: number;
	public backSlotBtn0: eui.Button;


	public backSlotBtn: eui.Button;
	public bcakSlotWinLab: eui.Label;

	public moreGroup: eui.Group;
	public winTexiao: eui.Image;
	public numGroup: eui.Group;
	public noMoveLab: eui.Label;
	public moveLab: eui.Label;
	public yanhua: eui.Image;
	public addCount: eui.Image;
	/**时候打开freeDeal1界面 */
	public isOpeDdeal1: boolean = false;
	public pent: GamePentCompoment;
	/**记录一下改组数据中有没有至少2个中奖元素 */
	public freeCount: number = 0;
	/**记录下已经停止reel的下标，用于开启下一个reel的数据 */
	public stopReelIdx: number = -1;
	/**记录下免费游戏中总的金币 */
	public freeTotalGold: number = 0;
	/**纪录结算界面的叠加 */
	public freeSettlement: number = 0;
	public lightMC: egret.MovieClip;
	public DiamondsMC: egret.MovieClip;

	public ceshiBtn: eui.Button;
	/**纪录出现几个中奖标志，并且播放不同的声音 */
	public freeshowCount: number = 0;



	public constructor() {
		super();
		this.skinName = GameScenceSkin;
	}

	/**
	 * 初始化
	 */
	public init(): void {
		for (let i: number = 0; i < 6; i++) {
			let reel: Reel = this['reel' + i];
			this.reelArr.push(this['reel' + i]);
			reel.index = i;
		}
	}
	public reset(): void {
		for (let i: number = 0; i < 6; i++) {
			let reel: Reel = this['reel' + i];
			reel.curReelData = vo.GameData.initData.Value.Geninit.Main.ReelSymbols[i];
			reel.initData();
		}
	}

	public replaceReel() {
		for (let i: number = 0; i < 6; i++) {
			let reel: Reel = this['reel' + i];
			reel.curReelData = vo.GameData.freeSymbols[i];
			reel.initData();
		}
		vo.GameData.freeSymbols = [];
	}


	public startReel(): void {
		this.freeCount = 0;

		this.stopReelIdx = -1;
		this.freeshowCount = 0;
		for (let i: number = 0; i < 6; i++) {
			let reel: Reel = this['reel' + i];
			reel.curReelData = [];
			reel.start();
		}
	}

	public setResSymbols() {
		let count = 0;

		for (let i: number = 0; i < 6; i++) {
			let reel: Reel = this['reel' + i];
			let resSymbols = vo.GameData.resultData.Value.Main.ReelSymbols[i];
			reel.curReelData = resSymbols;

			/**判断下有没有C1,如果有2个的话把旋转时间加长，如果只有一个就正常时间 */
			reel.isAddTime = -1;
			if (!GameConfig.speedPlay) {
				if (GameConfig.freePlay) {
					if (this.freeCount >= 1 && i != 0) {
						count++
						reel.isAddTime = count;
					} else {
						reel.isAddTime = -1;
					}
				} else {
					if (this.freeCount >= 2) {
						count++;
						reel.isAddTime = count;
					} else {
						reel.isAddTime = -1;
					}

				}
				for (let j = 0; j < resSymbols.length; j++) {
					if (resSymbols[j] == 'C1') {
						this.freeCount++;
					}
				}
			}
		}
	}

	public stopReel(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			reel.stop();
		}
		//SoundManager.getInstance().playEffect(SoundConst.BUTTON);
	}

	public showAnimation(position: any): void {

		for (let i: number = 0; i < this.reelArr.length; i++) {
			if (i == position.X) {
				let reel: Reel = this.reelArr[i];
				/**因为游戏是反着排列的 */
				reel.showAnimation(position.Y);
			}
		}
	}

	public hideAnimation(position: any): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			if (i == position.X) {
				let reel: Reel = this.reelArr[i];
				reel.hideAnimation(position.Y);
			}
		}
	}

	public hideAllAnimation(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			reel.clearAllAnimation();
		}
	}

	public resumeAllAnimation(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			reel.resumeAllAnimation();
		}
	}

	public pauseAllAniation(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			reel.pauseAllAnimation();
		}
	}

	public rollDianChannel: egret.SoundChannel;
	/**游戏滚动边框出现闪电特效 */
	public playLight(idx: number = 0) {
		if (!this.shandian.visible) {
			SoundManager.getInstance().playMusic(SoundConst.rollDian1).then((channel) => {
				this.rollDianChannel = channel;
			});
			this.lightMC = game.MCUtils.getMc('guang');
		}
		this.shandian.addChild(this.lightMC)
		this.lightMC.y = (this.reelArr[0].height - this.lightMC.height) / 2;
		this.lightMC.x = this.reelArr[idx].x - (this.lightMC.width - this.reelArr[idx].width) / 2 - 10;
		this.pent.visible = true;
		this.pent.showBeforeMask(idx)
		if (this.shandian.visible) return
		this.lightMC.gotoAndPlay('shandianMc', -1);
		this.shandian.visible = true;
	}

	public stopLight() {
		if (this.shandian.visible) {
			SoundManager.getInstance().stopEffect(this.rollDianChannel);
			this.lightMC.stop();
			this.shandian.removeChild(this.lightMC);
		}
		this.shandian.visible = false;
	}

	public freeShow() {
		SoundManager.getInstance().playBg(SoundConst.BGM3);
		this.pent.clearAll();
		this.freeGroup.alpha = 0;
		this.freeGroup.visible = true;
		this.freeDataGroup.visible = false;
		this.moreGroup.visible = false;
		let num: number = vo.GameData.resultData.Actions.freeslot.total;
		vo.GameData.freePlayCount = vo.GameData.resultData.Actions.freeslot.count;
		this.total.text = num + '';
		this.freeTotal.text = '--';
		this.freeNum.text = num + '';
		egret.Tween.get(this.freeGroup).to({ alpha: 1 }, 1000);
		egret.Tween.get(this.goBtn, { loop: true }).to({ scaleX: 0.95, scaleY: 0.95 }, 500).to({ scaleX: 1, scaleY: 1 }, 500)
	}

	/**免费游戏界面设置(boo为true的时候) */
	public freeUiSet(boo: boolean) {

		this.logo.visible = !boo;
		this.freeDataGroup.visible = boo;
		this.freeLogo.visible = true;
		this.leftData.alpha = 0;
		this.rightData.alpha = 0;
		this.leftImg.source = 'freeImg1_png';
		this.rightImg.source = 'freeImg2_png';
		this.leftImg.x = 500;
		this.rightImg.x = 680;
		this.DiamondsGroup.scaleX = 0;
		this.DiamondsGroup.scaleY = 0;
		this.pent.visible = false;
		this.freeGroup.visible = false;
		this.startLight.visible = false;
		this.freeDeal.visible = false;
		this.moreGroup.visible = false;
		this.isOpeDdeal1 = false;
		this.freeRewardAdd = 0;
		this.oneFreeAdd = 0;
		this.twoFreeAdd = 0;
		this.threeFreeAdd = 0;
		this.freeTotaladd = 0;
		if (boo) {
			egret.setTimeout(() => {
				this.freeAc();
			}, this, 300);
		}

	}
	/**免费游戏开场动画 先闪电后钻石*/
	public freeAc() {


		/**闪电 */
		let count = 0;
		let idx = 0;
		this.startLight.visible = true;
		SoundManager.getInstance().playEffect(SoundConst.topDian1);
		let timer = egret.setInterval(() => {
			if (idx > 3) {
				idx = 0;
				count++;
			}
			this.startLight.source = 'startLight' + idx + '_png';
			idx++
			if (count == 3) {
				egret.clearInterval(timer);
				this.DiamondsYanhua.alpha = 1;
				this.DiamondsYanhua.scaleX = 1.5;
				this.DiamondsYanhua.scaleY = 1.5;
				egret.Tween.get(this.DiamondsYanhua).to({ alpha: 0, scaleX: 1.6, scaleY: 1.6 }, 500)

				this.startLight.visible = false;
				this.startLight.source = '';

				this.leftImg.source = 'freeImg3_png';
				this.rightImg.source = 'freeImg4_png';

				/**钻石 */
				this.DiamondsMC = game.MCUtils.getMc('Diamonds');
				this.DiamondsGroup.addChild(this.DiamondsMC);
				this.DiamondsMC.gotoAndPlay('Diamonds', -1);
				this.DiamondsGroup.anchorOffsetX = this.DiamondsMC.width / 2;
				this.DiamondsGroup.anchorOffsetY = this.DiamondsMC.height / 2;
				this.DiamondsGroup.width = this.DiamondsMC.width;
				this.DiamondsGroup.height = this.DiamondsMC.height;

				this.DiamondsGroup.x = -this.DiamondsMC.width / 2;
				this.DiamondsGroup.y = this.DiamondsMC.height / 2;


				egret.Tween.get(this.leftImg).to({ x: 430 - 15 }, 200)
					.to({ x: 430 + 15 }, 100).to({ x: 430 }, 100);
				egret.Tween.get(this.rightImg).to({ x: 770 + 15 }, 200)
					.to({ x: 770 - 15 }, 100).to({ x: 770 }, 100);

				egret.Tween.get(this.DiamondsGroup).to({ scaleX: 1.5, scaleY: 1.5, alpha: 1 }, 500)
					.to({ scaleX: 0.98, scaleY: 0.98 }, 200)
					.to({ scaleX: 1.2, scaleY: 1.2 }, 200)
					.to({ scaleX: 1, scaleY: 1 }, 200)
					.call(() => {
						egret.Tween.get(this.leftData).to({ alpha: 1 }, 500);
						egret.Tween.get(this.rightData).to({ alpha: 1 }, 500);
						let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
						ui.startBtn.enabled = true;
						ui.stopBtn.enabled = true;
						GameManager.getInstance().isStart = true;
						egret.setTimeout(() => {
							GameManager.getInstance().startGame();
						}, this, 1000)
					});

			}
		}, this, 50)

	}
	/**免费游戏结束之后的结算界面 */
	public slotSettlement() {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.startBtn.enabled = false;
		ui.stopBtn.enabled = false;
		ui.rewardLabel.text = '￥0.00';
		ui._rewardNum = 0;
		ui.hideWin();
		this.pent.clearAll();
		this.replaceReel();
		let win = vo.GameData.resultData.Actions.freeslot.ActionWin;
		vo.GameData.freePlayCount = 0;
		this.freeDataGroup.visible = false;
		this.freeShandian.visible = false;
		this.DiamondsMC.stop();
		this.DiamondsGroup.removeChild(this.DiamondsMC);
		console.log('获得最终获得的结果', vo.GameData.autoPlayCount);
		SoundManager.getInstance().stopBg();
		SoundManager.getInstance().playEffect(SoundConst.freeOver);
		if (vo.GameData.autoPlayCount == 100) {
			vo.GameData.autoPlayCount = 0
		}
		if (!this.isOpeDdeal1) {
			this.backSlotBtn.enabled = false;
			this.freeDeal.visible = true;
			this.freeDeal1.visible = false;

			this.bcakSlotWinLab.text = '--';
			this.backSlotBtn.anchorOffsetX = this.backSlotBtn.width / 2
			this.backSlotBtn.anchorOffsetY = this.backSlotBtn.height / 2;

			egret.setTimeout(() => {
				if (win > 0) {
					this.freeAdd(win, this.bcakSlotWinLab);
				} else {
					this.backSlotBtn.enabled = true;
				}
			}, this, 800)

		} else {
			/**免费游戏中再次中了免费游戏开启的结算界面 */
			this.backSlotBtn0.enabled = false;
			this.freeDeal.visible = false;
			this.freeDeal1.visible = true;
			this.backSlotBtn0.anchorOffsetX = this.backSlotBtn0.width / 2
			this.backSlotBtn0.anchorOffsetY = this.backSlotBtn0.height / 2;
			this.dealContent0.text = '--';
			this.dealContent1.text = '--';
			this.dealContent2.text = '--';
			this.freeAdd(vo.GameData.freeGold, this.dealText0);
		}
	}

	/**免费游戏叠加金币 */
	public freeAdd(num: number, obj: any, type?: number) {
		if (obj == this.freeTotal) {
			let timer = 800;
			if (type == 2) {
				timer = 7500;
			} else if (type == 3) {
				timer = 14000;
			} else if (type == 4) {
				timer = 19500;
			}

			egret.Tween.get(this).to({ freeRewardAdd: num }, timer)
		} else if (obj == this.bcakSlotWinLab) {
			egret.Tween.get(this).to({ freeTotaladd: num }, 4000).call(() => {
				this.backSlotBtn.enabled = true;
				egret.Tween.get(this.backSlotBtn, { loop: true }).to({ scaleX: 0.95, scaleY: 0.95 }, 500).to({ scaleX: 1, scaleY: 1 }, 500)
			});
		} else if (obj == this.dealText0) {
			egret.Tween.get(this).to({ oneFreeAdd: num }, 1000).call(() => {
				console.log(this.freeTotalGold)
				egret.Tween.get(this).to({ twoFreeAdd: this.freeTotalGold }, 1500).call(() => {
					this.freeTotalGold = this.freeTotalGold + num;
					console.log(this.freeTotalGold)
					egret.Tween.get(this).to({ threeFreeAdd: this.freeTotalGold }, 2000).call(() => {
						this.backSlotBtn0.enabled = true;
						console.log(this.backSlotBtn0.enabled)
						egret.Tween.get(this.backSlotBtn0, { loop: true }).to({ scaleX: 0.95, scaleY: 0.95 }, 500).to({ scaleX: 1, scaleY: 1 }, 500)
					})
				})
			})
		}
	}

	/**免费游戏中免费游戏中奖 */
	public set oneFreeAdd(v: number) {
		this.dealText0 = v;
		if (v > 0) {
			let s: string = GameManager.numberToCommonStr(v);
			this.dealContent0.text = '￥' + s;

		} else {
			this.dealContent0.text = "--";
		}
	}
	public get oneFreeAdd() {
		return this.dealText0;
	}

	public set twoFreeAdd(v: number) {
		this.dealText1 = v;
		if (v > 0) {
			let s: string = GameManager.numberToCommonStr(v);
			this.dealContent1.text = '￥' + s;

		} else {
			this.dealContent1.text = "--"
		}
	}
	public get twoFreeAdd() {
		return this.dealText1;
	}

	public set threeFreeAdd(v: number) {
		this.dealText2 = v;
		if (v > 0) {
			let s: string = GameManager.numberToCommonStr(v);
			this.dealContent2.text = '￥' + s;

		} else {
			this.dealContent2.text = "--";
		}
	}
	public get threeFreeAdd() {
		return this.dealText2;
	}

	/**免费游戏中奖金的叠加 */
	public set freeTotaladd(v: number) {
		this.freeSettlement = v;
		if (v > 0) {
			let s: string = GameManager.numberToCommonStr(v);
			this.bcakSlotWinLab.text = '￥' + s;

		} else {
			this.bcakSlotWinLab.text = "--";
		}
	}
	public get freeTotaladd() {
		return this.freeSettlement;
	}

	public set freeRewardAdd(num: number) {
		this.freeTotalGold = num;
		if (num > 0) {
			let s: string = GameManager.numberToCommonStr(num);
			this.freeTotal.text = '￥' + s;

		} else {
			this.freeTotal.text = '--';
		}
	}

	public get freeRewardAdd() {
		return this.freeTotalGold;
	}

	/**更多游戏次数界面 */
	public moreFreeNum() {
		/**计算添加了几次 */
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.startBtn.enabled = false;
		ui.intoFreeBtn.visible = true;
		ui.intoFreeBtn.enabled = false;


		let addNum: number = vo.GameData.resultData.Actions.freeslot.count - vo.GameData.freePlayCount;
		let idx = 0;
		this.isOpeDdeal1 = true;

		let id: egret.SoundChannel = SoundManager.getInstance().playEffect(SoundConst.zuan2);

		let timer = egret.setInterval(() => {
			this.winTexiao.source = 'startLight' + idx + '_png';
			idx++;
			if (idx > 3) {
				SoundManager.getInstance().stopEffect(id);
				egret.clearInterval(timer);
				this.winTexiao.source = ''
			}
		}, this, 100)


		this.moveLab.alpha = 0;
		this.moveLab.x = this.noMoveLab.x;
		this.moveLab.y = this.noMoveLab.y;
		this.yanhua.scaleX = 0;
		this.yanhua.scaleY = 0;

		this.noMoveLab.text = addNum + "";
		this.moveLab.text = addNum + '';
		this.moreGroup.visible = true;
		let id2: egret.SoundChannel;
		let id1: egret.SoundChannel;
		egret.setTimeout(() => {
				id1 = SoundManager.getInstance().playEffect(SoundConst.topDian1)
				egret.setTimeout(() => {
					SoundManager.getInstance().stopEffect(id1);
				}, this, 800)


			egret.Tween.get(this.yanhua).to({ scaleX: 1, scaleY: 1 }, 100).call(() => {
				this.yanhua.scaleX = 0;
				this.yanhua.scaleY = 0;

			});
			this.moveLab.alpha = 1;
			let pos = { x: -49, y: -300 }
			egret.Tween.get(this.moveLab).to(pos, 800)
				.call(() => {
					id2 = SoundManager.getInstance().playEffect(SoundConst.topDian1)
					egret.Tween.get(this.addCount).to({ scaleX: 0.6, scaleY: 0.6 }, 200).wait(200).call(() => {
						vo.GameData.freePlayCount = vo.GameData.resultData.Actions.freeslot.count;
						this.addCount.scaleX = 0;
						this.addCount.scaleY = 0;
						ui.startBtn.enabled = true;
						ui.intoFreeBtn.visible = false;
					});
				})
				.wait(500)
				.call(() => {
					GameManager.getInstance().isStart = true;
					vo.GameData.freePlayCount += addNum;
				})
				.wait(200)
				.call(() => {
					SoundManager.getInstance().stopEffect(id2);
					this.moreGroup.visible = false;
					GameManager.getInstance().doNext()
				})
		}, this, 400)
	}

	/**钻石中奖的下标 */
	public bounsIdx: number = 0;
	/**每个节点下y的位置，x的和节点一样 */
	// public showzuan: Array<any> = [130, 305, 483, 655];
	public showzuan: Array<any> = [70, 250, 430, 610]
	/**免费闪电 */
	public freeShandian: eui.Group;

	/** 免费游戏中，钻石出来之后的控制 */
	freeDimaoCtr(obj: Array<any>) {
		let ui = core.UIManager.getUI(core.UIConst.MainScenceUI);

		/**上面旋转的钻石出现倍数 */
		let topImg: eui.Image = new eui.Image();
		this.DiamondsGroup.addChild(topImg);
		topImg.scaleX = 0.6;
		topImg.scaleY = 0.6;
		topImg.anchorOffsetX = topImg.width / 2;
		topImg.anchorOffsetY = topImg.height / 2;

		let bet = obj[this.bounsIdx].Bouns

		topImg.horizontalCenter = 0;
		topImg.y = 40;


		/**中奖的那个钻石位置和特效 */
		let posX = 1400 / 6 * (obj[this.bounsIdx].Positions[0].X + 0.5)
		let posY = 718 / 4 * (obj[this.bounsIdx].Positions[0].Y + 0.5)

		/**顶部钻石的闪电 */
		let dianImg: eui.Image = new eui.Image();
		dianImg.source = 'zuan0_png';
		this.DiamondsGroup.addChild(dianImg);
		dianImg.anchorOffsetX = dianImg.width / 2;
		dianImg.horizontalCenter = 0;


		/**显示出来钻石 */
		this.pent.visible = true;
		this.pent.showfreeDiamo(obj)
		SoundManager.getInstance().playEffect(SoundConst.zuan1);

		egret.Tween.get(this.DiamondsGroup)
			.to({ scaleX: 1.3, scaleY: 1.3 }, 3000)
			.call(() => {
				egret.Tween.removeTweens(topImg);
				egret.Tween.removeTweens(dianImg);
				this.DiamondsGroup.removeChild(dianImg);
				this.freeShandian.visible = true;
				topImg.source = bet + 'times_png';


				SoundManager.getInstance().playEffect(SoundConst.zuan2);

				/**倍数固定之后的雷电特效及位置计算 */
				/**添加顶部倍数和钻石之间的闪电 */
				let dImg: eui.Image = new eui.Image();
				this.freeShandian.addChild(dImg);
				dImg.anchorOffsetY = 80;
				dImg.anchorOffsetX = 455;

				dImg.x = (posX + 700) / 2;
				dImg.y = (posY + 0) / 2;
				let dis = Math.sqrt(Math.pow((posX - 700), 2) + Math.pow((posY - 0), 2));

				let angle: number = this.distanceAngle(dImg.x, dImg.y, posX, posY)
				let sca = dis / 910;
				dImg.scaleX = sca + 0.05;

				dImg.rotation = angle - 2.5;
				dImg.source = 'startLight0_png'
				this.DiamondsYanhua.alpha = 1;
				egret.Tween.get(this.DiamondsYanhua).to({ alpha: 0 }, 200)

				/**闪电打击的时候要出来烟花特效 */

				egret.Tween.get(dImg).to({ source: 'startLight0_png' }, 100)
					.to({ source: 'startLight1_png' }, 100)
					.to({ source: 'startLight2_png' }, 100)
					.to({ source: 'startLight3_png' }, 100)
					.call(() => {
						ui.startBtn.enabled = true;
						ui.stopBtn.enabled = true;
						GameManager.getInstance().isStart = true;
						this.DiamondsGroup.removeChild(topImg)
						this.freeShandian.removeChild(dImg);
						this.freeShandian.visible = false;
					})

			})
			.wait(500)
			.to({ scaleX: 1, scaleY: 1 })

		topImg.source = '5times_png';
		egret.Tween.get(topImg, { loop: true }).to({ source: '2times_png' }, 100)
			.to({ source: '3times_png' }, 100)
			.to({ source: '5times_png' }, 100)



		egret.Tween.get(dianImg, { loop: true }).to({ source: 'zuan0_png' }, 100)
			.to({ source: 'zuan1_png' }, 100).to({ source: 'zuan2_png' }, 100).to({ source: 'zuan3_png' }, 100).to({ source: 'zuan4_png' }, 100)
			.to({ source: 'zuan5_png' }, 100).to({ source: 'zuan6_png' }, 100).to({ source: 'zuan7_png' }, 100).to({ source: 'zuan8_png' }, 100)
			.to({ source: 'zuan9_png' }, 100).to({ source: 'zuan10_png' }, 100).to({ source: 'zuan11_png' }, 100)

	}


	/**计算顶部钻石和游戏倍数中的角度和距离 */
	public distanceAngle(x1, y1, x2, y2) {
		let angle = Utils.pointAmongAngle(x1, y1, x2, y2);
		return angle
	}

}