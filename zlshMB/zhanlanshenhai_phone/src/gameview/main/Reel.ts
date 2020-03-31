/**
 * 基础滚动组件
 */
class Reel extends eui.Component {
	public kGroup: eui.Group;
	public static START_CHANEL: egret.SoundChannel;
	public isAction: boolean = false;
	public static REEL_MODE = 0;
	/**
	 * 展示数量
	 */
	public static ShowNum: number = 3;

	/**
	 * 当前盘面
	 */
	public curReelData: Array<any> = [];

	/**
	 * 目标盘面
	 **/
	// public targetReelData: Array<any> = ['M1', '0', 'M2'];
	/**
	 * 滚动速度
	 */
	public reelSpeed: number = 100;

	/**
	 * 正常滚动时间
	 */
	public static TIME: number = 500;
	/**
	 * 快速滚动时间
	 */
	public static QUK_TIME: number = 100;
	/**
	 * 停止间隔
	 */
	public static STOPTIME: number = 100;
	/**
	 * 快速停止间隔
	 */
	public static QUK_STOPTIME: number = 50;
	/**
	 * 当前时间
	 */
	public curTime: number = 0;

	/**
	 * 滚轮索引
	 */
	public index: number = 0;


	/**
	 * aIndex
	 */
	public aIndex: number = 0;

	/**
	 * stopStaet
	 */
	public stopState: boolean = false;

	public constructor() {
		super();
		this.skinName = ReelSkin;
	}

	public childrenCreated(): void {
		super.childrenCreated();

		this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
	}

	public showAnimation(i: number): void {
		let item: ReelItem = this.kGroup.getChildAt(i + 1) as ReelItem;
		item.goAnimation();
	}
	public hideAnimation(i: number): void {
		let item: ReelItem = this.kGroup.getChildAt(i + 1) as ReelItem;
		item.hideAnimation();
	}

	public clearAllAnimation(): void {
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			item.hideAnimation();
		}
	}

	public onFrame(): void {
		if (this.isAction) {
			for (let i: number = 0; i < this.kGroup.numChildren; i++) {
				let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
				item.y += this.reelSpeed;
				if (item.y >= this.height) {
					let t1: number = SetConst.SPEED_PLAY ? Reel.QUK_TIME : Reel.TIME;
					//let t2: number = GameConfig.speedPlay ? Reel.QUK_STOPTIME : Reel.STOPTIME;
					let t3: Array<number> = SetConst.SPEED_PLAY ? [200, 350, 500, 650, 800] : [0, 400, 730, 930, 1030];
					if (egret.getTimer() - this.curTime > t1 + t3[this.index]) {
						this.isAction = false;
						this.overReel();
						return;
					}
					else {
						item.y = this.kGroup.getChildAt(0).y - this.kGroup.getChildAt(0).height;
						item.value = 'M' + Math.ceil(Math.random() * 5);
						// item.setVir(true);
						this.kGroup.setChildIndex(item, 0);
					}
				}
			}
		}
	}

	private overReel(): void {
		egret.Tween.removeTweens(this);
		if (!this.stopState) {
			SoundManager.getInstance().playEffect(SoundConst.REELEND);
		}

		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			egret.Tween.removeTweens(item);
			let ty: number;
			ty = i * item.height - item.height;
			item.y = this.stopState ? ty : i * item.height - item.height + 100;
			item.value = i > 0 && i < 4 ? this.curReelData[i - 1] : 'M' + Math.ceil(Math.random() * 5);
			// item.setVir(false);
			//item.value ='M'+Math.ceil(Math.random()*9);
			let t: number = this.stopState ? 0 : 300;
			egret.Tween.get(item).to({ y: ty }, t, egret.Ease.cubicOut).call(() => {
				if (this.index == 4 && i == this.kGroup.numChildren - 1) {
					core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_ROUNDOVER);
				}
			}, this);
		}
	}


	public initData(): void {
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			item.value = i > 0 && i < 4 ? this.curReelData[i - 1] : 'M' + Math.ceil(Math.random() * 5);
		}
	}

	public start(): void {
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			let ty: number = item.y - 50;
			egret.Tween.get(item).to({ y: ty }, 100).to({ y: ty + 50 }, 100);
		}
		egret.Tween.get(this).wait(200).call(() => {
			this.isAction = true;
			this.stopState = false;
			this.curTime = egret.getTimer() + 99999;
			//this.curReelData = JSON.parse(JSON.stringify(this.targetReelData));		
		}, this);
	}


	public stop(): void {
		this.isAction = false;
		this.stopState = true;
		this.overReel();
	}

	/**
	 * 中奖的3个移到中间栏
	 */
	public moveC1y(c1Y: number): void {
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			//移动到中间
			// egret.Tween.get(item).to({ y: 201 },500);
			let c1y0: number = item.y + 201;
			let c1y2: number = item.y - 201;
			if (c1Y == 0) {
				egret.Tween.get(item).to({ y: c1y0 }, 700);
			}
			if (c1Y == 2) {
				egret.Tween.get(item).to({ y: c1y2 }, 700);
			}
		}
	}
	public huanYuan(c1Y: number): void {
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			//移动到中间
			// egret.Tween.get(item).to({ y: 201 },500);
			let c1y0: number = item.y + 201;
			let c1y2: number = item.y - 201;
			if (c1Y == 0) {
				egret.Tween.get(item).to({ y: c1y2 }, 1);
			}
			if (c1Y == 2) {
				egret.Tween.get(item).to({ y: c1y0 }, 1);
			}
		}
	}

}


/**
 * 滚动组件item
 */
class ReelItem extends eui.Component {
	public icons: eui.Image;
	public maoziMC: egret.MovieClip;
	public maoziMC1: egret.MovieClip;
	public maoziMC2: egret.MovieClip;
	public maoziMC3: egret.MovieClip;
	public maoziMC4: egret.MovieClip;
	public maoziMC5: egret.MovieClip;
	public maoziMC6: egret.MovieClip;
	public _value: any;
	private isVir: boolean = false;
	public constructor() {
		super();
		this.skinName = ReelItemSkin;
	}

	public set value(v: any) {
		this._value = v;
		if (this.value != undefined) {
			this.icons.source = this._value + '_icon_png';
			this.icons.scaleX = 1.2;
			this.icons.scaleY = 1.2;
			this.icons.visible = true;
			// this.vIcon.visible = false;
		}
	}

	public get value(): any {
		return this._value;
	}


	public isA: boolean = false;
	public goAnimation(): void {
		if (this.isA) return;
		this.isA = true;
		egret.Tween.removeTweens(this.icons);
		this.value = this._value;
		// this.aIcon.visible=true;
		if (this.value == "WW") {
			if (!GameConfig.speedPlay) {
				// SoundManager.getInstance().playEffect(SoundConst.WWMUSIC);
			}
			if (!this.maoziMC) {
				this.maoziMC = game.MCUtils.getMc('ww');
			}
			this.addChild(this.maoziMC);
			this.maoziMC.gotoAndPlay('ww', -1);
			this.maoziMC.x = this.width / 2;
			this.maoziMC.y = this.height / 2;
			this.maoziMC.scaleX = 1.4;
			this.maoziMC.scaleY = 1.4;
			this.icons.visible = false;
		}
		if (this.value == "M5") {
			if (!this.maoziMC1) {
				this.maoziMC1 = game.MCUtils.getMc('m5');
			}
			this.addChild(this.maoziMC1);
			this.maoziMC1.gotoAndPlay('m5', -1);
			this.maoziMC1.x = this.width / 2;
			this.maoziMC1.y = this.height / 2;
			this.maoziMC1.scaleX = 1.4;
			this.maoziMC1.scaleY = 1.4;
			this.icons.visible = false;
		}
		if (this.value == "M3") {
			if (!this.maoziMC2) {
				this.maoziMC2 = game.MCUtils.getMc('m3');
			}
			this.addChild(this.maoziMC2);
			this.maoziMC2.gotoAndPlay('m3', -1);
			this.maoziMC2.x = this.width / 2;
			this.maoziMC2.y = this.height / 2;
			this.maoziMC2.scaleX = 1.4;
			this.maoziMC2.scaleY = 1.4;
			this.icons.visible = false;
		}
		if (this.value == "M1") {
			if (!this.maoziMC3) {
				this.maoziMC3 = game.MCUtils.getMc('m1');
			}
			this.addChild(this.maoziMC3);
			this.maoziMC3.gotoAndPlay('m1', -1);
			this.maoziMC3.x = this.width / 2;
			this.maoziMC3.y = this.height / 2;
			this.maoziMC3.scaleX = 1.4;
			this.maoziMC3.scaleY = 1.4;
			this.icons.visible = false;
		}
		if (this.value == "M2") {
			if (!this.maoziMC4) {
				this.maoziMC4 = game.MCUtils.getMc('m2');
			}
			this.addChild(this.maoziMC4);
			this.maoziMC4.gotoAndPlay('m2', -1);
			this.maoziMC4.x = this.width / 2;
			this.maoziMC4.y = this.height / 2;
			this.maoziMC4.scaleX = 1.4;
			this.maoziMC4.scaleY = 1.4;
			this.icons.visible = false;
		}
		if (this.value == "M4") {
			if (!GameConfig.speedPlay) {
				// SoundManager.getInstance().playEffect(SoundConst.DEJIANG);
			}
			if (!this.maoziMC5) {
				this.maoziMC5 = game.MCUtils.getMc('m4');
			}
			this.addChild(this.maoziMC5);
			this.maoziMC5.gotoAndPlay('m4', -1);
			this.maoziMC5.x = this.width / 2;
			this.maoziMC5.y = this.height / 2;
			this.maoziMC5.scaleX = 1.4;
			this.maoziMC5.scaleY = 1.4;
			this.icons.visible = false;
		}
		if (this.value == "C1") {
			if (!this.maoziMC6) {
				this.maoziMC6 = game.MCUtils.getMc('c1');
			}
			this.addChild(this.maoziMC6);
			this.maoziMC6.gotoAndPlay('c1', -1);
			this.maoziMC6.x = this.width / 2;
			this.maoziMC6.y = this.height / 2;
			this.maoziMC6.scaleX = 1.36;
			this.maoziMC6.scaleY = 1.36;
			this.icons.visible = false;
		} else {
			egret.Tween.get(this.icons, { loop: true }).to({ scaleX: 1, scaleY: 1 }, 700).to({ scaleX: 1.2, scaleY: 1.2 }, 700);
		}

	}

	public hideAnimation(): void {
		this.isA = false;
		if (this.maoziMC && this.maoziMC.parent) {
			this.maoziMC.parent.removeChild(this.maoziMC);
			this.maoziMC.stop();
		}
		if (this.maoziMC1 && this.maoziMC1.parent) {
			this.maoziMC1.parent.removeChild(this.maoziMC1);
			this.maoziMC1.stop();
		}
		if (this.maoziMC2 && this.maoziMC2.parent) {
			this.maoziMC2.parent.removeChild(this.maoziMC2);
			this.maoziMC2.stop();
		}
		if (this.maoziMC3 && this.maoziMC3.parent) {
			this.maoziMC3.parent.removeChild(this.maoziMC3);
			this.maoziMC3.stop();
		}
		if (this.maoziMC4 && this.maoziMC4.parent) {
			this.maoziMC4.parent.removeChild(this.maoziMC4);
			this.maoziMC4.stop();
		}
		if (this.maoziMC5 && this.maoziMC5.parent) {
			this.maoziMC5.parent.removeChild(this.maoziMC5);
			this.maoziMC5.stop();
		}
		if (this.maoziMC6 && this.maoziMC6.parent) {
			this.maoziMC6.parent.removeChild(this.maoziMC6);
			this.maoziMC6.stop();
		}
		// this.aIcon.visible=false;
		egret.Tween.removeTweens(this.icons);
		this.icons.scaleX = 1;
		this.icons.scaleY = 1;
		this.value = this._value;
	}

}