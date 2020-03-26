/**
 * 基础滚动组件
 */
class Reel extends eui.Component {
	public kGroup: eui.Group;
	public niuGroup: eui.Group;
	public C1Group: eui.Group;

	public static START_CHANEL: egret.SoundChannel;
	public isAction: boolean = false;

	/**
	 * 展示数量
	 */
	public static ShowNum: number = 4;

	/**
	 * 当前盘面
	 */
	public curReelData: Array<any> = [];
	/**
	 * 滚动速度
	 */
	public reelSpeed: number = 100;

	/**
	 * 正常滚动时间
	 */
	public static TIME: number = 700;
	/**
	 * 快速滚动时间
	 */
	public static QUK_TIME: number = 200;
	/**
	 * 停止间隔
	 */
	public static STOPTIME: number = 200;
	/**
	 * 快速停止间隔
	 */
	public static QUK_STOPTIME: number = 100;
	/**
	 * 当前时间
	 */
	public curTime: number = 0;

	/** * 滚轮索引*/
	public index: number = 0;

	/*** aIndex*/
	public aIndex: number = 0;

	/*** stopStaet*/
	public stopState: boolean = false;
	/**判断旋转是不是需要增加时间并且是加多少（当出现两个以上的免费游戏图标才变化，-1为不加） */
	public isAddTime: number = -1;

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

	public resumeAllAnimation(): void {
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			item.resumeAnimation();
		}
	}
	public pauseAllAnimation(): void {
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			item.stopAniamtion();
		}
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
				let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
				if (item.y >= this.height) {
					let t1: number = GameConfig.speedPlay ? Reel.QUK_TIME : Reel.TIME;
					let t3: Array<number> = GameConfig.speedPlay ? [100, 250, 400, 550, 700, 850] : [0, 700, 1130, 1400, 1730, 2000];
					let t4: number = this.isAddTime > 0 ? 2100 * this.isAddTime : 0;

					if (egret.getTimer() - this.curTime > t1 + t3[this.index] + t4 && this.curReelData.length > 0) {
						// console.log('停止的idx', this.index)
						this.isAction = false;
						this.overReel();
						return;
					}
					else {
						item.y = this.kGroup.getChildAt(0).y - this.kGroup.getChildAt(0).height;
						item.value = 'M' + Math.floor(Math.random() * 5 + 1);
						item.setVir(true);
						this.kGroup.setChildIndex(item, 0);
						if (this.isAddTime > 0 && ui.gameScence.stopReelIdx >= 0 && (ui.gameScence.stopReelIdx + 1) == this.index) {
							ui.gameScence.playLight(this.index);
						}

					}
				}
			}
		}
	}




	private overReel(): void {
		if (this.curReelData.length == 0) { return };
		egret.Tween.removeTweens(this);

		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);

		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			egret.Tween.removeTweens(item);
			let ty: number;
			ty = i * item.height - item.height;

			item.y = this.stopState ? ty : i * item.height - item.height + 100;
			item.setVir(false);
			let value = i > 0 && i < 5 ? this.curReelData[i - 1] : 'M' + Math.floor(Math.random() * 5 + 1);

			item.value = value;

			let t: number = this.stopState ? 0 : 300;
			/**niuGroup 层级的判断 */
			if (value == 'M1') {
				let reItem: ReelItem = this.niuGroup.getChildAt(i) as ReelItem;
				reItem.value = value;
				reItem.y = this.stopState ? ty : i * item.height - item.height + 100;
				egret.Tween.removeTweens(reItem);
				egret.Tween.get(reItem).to({ y: ty }, t, egret.Ease.cubicOut)
			}
			if (value == 'C1' && (i > 0 && i <= 5)) {
				if (ui.gameScence.freeshowCount == 0) {
					SoundManager.getInstance().playEffect(SoundConst.freeLogo1);

				} else if (ui.gameScence.freeshowCount == 1) {
					SoundManager.getInstance().playEffect(SoundConst.freeLogo2);
				} else {
					SoundManager.getInstance().playEffect(SoundConst.freeLogo4);
				}
				ui.gameScence.pent.c1PlayAc(this.index, i - 1);
				ui.gameScence.freeshowCount++;
			}

			if (this.index == 5 && vo.GameData.rollFreeTitle.length > 0) {
				let title = vo.GameData.rollFreeTitle;
				for (let k = 0; k < title.length; k++) {
					egret.clearInterval(title[k].timer);
					title[k].value = 'C1';
					title[k].obj.icons.y = 0;
				}
				vo.GameData.rollFreeTitle = [];
			}

			egret.Tween.get(item).to({ y: ty }, t, egret.Ease.cubicOut).call(() => {

				ui.gameScence.stopReelIdx = this.index;
				if (this.index == 5 && i == this.kGroup.numChildren - 1) {
					ui.gameScence.stopLight();
					core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_ROUNDOVER);
				}
			}, this);
		}
	}




	public initData(): void {
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			let value = i > 0 && i < 5 ? this.curReelData[i - 1] : 'M' + Math.floor(Math.random() * 5 + 1);
			item.value = value;
			if (value == 'M1') {
				let reItem: ReelItem = this.niuGroup.getChildAt(i) as ReelItem;
				reItem.value = value;
			}
		}
	}

	public start(): void {
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			let reItem: ReelItem = this.niuGroup.getChildAt(i) as ReelItem;

			let ty: number = item.y - 50;
			egret.Tween.get(item).to({ y: ty }, 100).to({ y: ty + 50 }, 100);
			egret.Tween.get(reItem).to({ y: ty }, 100).to({ y: ty + 50 }, 100).call(() => {
				reItem.value = '';
			});
		}
		egret.Tween.get(this).wait(200).call(() => {
			this.isAction = true;
			this.stopState = false;
			this.curTime = egret.getTimer();
		}, this);
	}

	public stop(): void {
		this.isAction = false;
		this.stopState = true;
		this.overReel();
	}

}


/**
 * 滚动组件item
 */
class ReelItem extends eui.Component {
	public icons: eui.Image;
	public aIcon: eui.Image;
	public vIcon: eui.Image;
	public _value: any;
	private isVir: boolean = false;

	public constructor() {
		super();
		this.skinName = ReelItemSkin;
	}



	public set value(v: any) {
		this._value = v;
		if (this.value != undefined) {
			this.icons.source = this._value == '' ? '' : this._value + '_icon_png';
			this.icons.visible = true;
			this.vIcon.visible = false;
		}
	}

	public get value(): any {
		return this._value;
	}

	public setVir(b: boolean): void {
		this.isVir = b;
		if (this.isVir) {
			this.icons.visible = false;
			this.vIcon.visible = true;
			let t: string = 'blur' + Math.floor(Math.random() * 5 + 1) + '_png';
			this.vIcon.source = t;
			//console.log(t);
		} else {
			this.icons.source = this._value + '_icon_png';
			this.icons.visible = true;
			this.vIcon.visible = false;
		}
	}
	/**中奖标志出来时候的闪电 */
	public c1PlayAc() {
		// console.log('中奖图标的闪电');
		let idx = 0
		let num = 0;
		this.icons.y = -16;
		let C1Mc = egret.setInterval(() => {
			if (idx > 5) {
				idx = 0;
				num++;
			}
			this.value = 'C1_' + idx;
			idx++;
		}, this, 150)
		let obj = {
			'timer': C1Mc,
			'obj': this
		}
		vo.GameData.rollFreeTitle.push(obj);
	}

	public isA: boolean = false;
	public goAnimation(): void {
		if (this.isA) return;
		this.isA = true;
		egret.Tween.removeTweens(this.icons);
		this.value = this._value;
		this.aIcon.visible = true;
		egret.Tween.get(this.icons, { loop: true }).to({ scaleX: 0.8, scaleY: 0.8 }, 600).to({ scaleX: 1, scaleY: 1 }, 600);
	}

	public stopAniamtion(): void {
		egret.Tween.pauseTweens(this.icons);
	}

	public resumeAnimation(): void {
		egret.Tween.resumeTweens(this.icons);
	}

	public hideAnimation(): void {
		this.isA = false;
		this.aIcon.visible = false;
		egret.Tween.removeTweens(this.icons);
		this.icons.scaleX = 1;
		this.icons.scaleY = 1;
		this.value = this._value;
	}
}