/**
 * 基础滚动组件
 */
class Reel extends eui.Component {
	public kGroup: eui.Group;
	public static START_CHANEL: egret.SoundChannel;
	public isAction: boolean = false;
	/**
	 * 展示数量
	 */
	public static ShowNum: number = 3;

	/**
	 * 当前盘面
	 */
	public curReelData: Array<any> = ['M1', 'M1', 'M2'];

	/**
	 * 目标盘面
	 **/
	public targetReelData: Array<any> = ['M1', '0', 'M2'];
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
		// this.clearAllAnimation1();
		let item: ReelItem = this.kGroup.getChildAt(i+1) as ReelItem;
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
	public clearAllAnimation1(): void {
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			item.hideQuan();
		}
	}

	public onFrame(): void {
		if (this.isAction) {
			for (let i: number = 0; i < this.kGroup.numChildren; i++) {
				let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
				item.y += this.reelSpeed;
				if (item.y >= this.height) {
					let t1: number = GameConfig.speedPlay ? Reel.QUK_TIME : Reel.TIME;
					//let t2: number = GameConfig.speedPlay ? Reel.QUK_STOPTIME : Reel.STOPTIME;
					let t3: Array<number> = GameConfig.speedPlay ? [200, 350, 500, 650, 800] : [0, 400, 730, 930, 1030];
					if (egret.getTimer() - this.curTime > t1 + (t3[this.index])) {
						this.isAction = false;
						this.overReel();
						return;
					}
					else {
						item.y = this.kGroup.getChildAt(0).y - this.kGroup.getChildAt(0).height;
						item.isVir = true;
						item.value = 'M' + Math.ceil(Math.random() * 7);
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
			item.isVir = false;
			item.value = i > 0 && i < 4 ? this.curReelData[i - 1] : 'M' + Math.ceil(Math.random() * 7);
			// item.setVir(false);
			//item.value ='M'+Math.ceil(Math.random()*7); 
			let t: number = this.stopState ? 0 : 300;
			egret.Tween.get(item).to({ y: ty }, t, egret.Ease.cubicOut).call(() => {
				if (this.index == 4 && i == this.kGroup.numChildren - 1) {
					core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_ROUNDOVER);
				}
			}, this);
		}
	}

	public initData(): void {
		let initArr = vo.GameData.reelArr[this.index];
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			item.value = i > 0 && i < 4 ? this.curReelData[i - 1] : 'M' + Math.ceil(Math.random() * 7);
		}
	}
	
	public start(): void {
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			let ty: number = item.y - 100;		//先上升
			egret.Tween.get(item).to({ y: ty }, 150).to({ y: ty + 100 }, 150);
		}
		this.curTime = egret.getTimer()+99999;
		egret.Tween.get(this).wait(300).call(() => {
			this.isAction = true;
			this.stopState = false;
		}, this);
	}
	public resultArr():void{
		this.curReelData = JSON.parse(JSON.stringify(this.targetReelData));
		for(var i = 0;i<this.curReelData.length;i++){
			// console.log("this.curReelData == " + this.curReelData[i]);
		}
		
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
	public icon: eui.Image;
	// public aIcon: eui.Image;
	// public vIcon: eui.Image;
	public _value: any;
	public isVir: boolean = false;
	public constructor() {
		super();
		this.skinName = ReelItemSkin;
	}

	public set value(v: any) {
		this._value = v;
		if (this.value != undefined) {
			this.icon.source = this.isVir ? this._value + '_vir_png' : this._value + '_an_png';

		}
	}

	public get value(): any {
		return this._value;
	}
	

	// public setVir(b: boolean): void {
	// 	this.isVir = b;
	// 	if (this.isVir) {
	// 		this.icon.visible = false;
	// 		// this.vIcon.visible = true;
	// 		let t: string = Math.floor(Math.random() * 12) + '_vir_png';
	// 		// this.vIcon.source = t;
	// 		//console.log(t);
	// 	}
	// 	else {
	// 		this.icon.source = this._value + '_icon_png';
	// 		this.icon.visible = true;
	// 		// this.vIcon.visible = false;
	// 	}
	// }

	public isA: boolean = false;
	public iconliang: eui.Image;
	public quan:eui.Image;
	public goAnimation(): void {
		this.quan.visible = true;
		if (this.isA) return;
		this.isA = true;
		// egret.Tween.removeTweens(this.icon);
		// this.value = this._value;
		// // this.aIcon.visible = true;
		// egret.Tween.get(this.icon, { loop: true }).to({ scaleX: 0.8, scaleY: 0.8 }, 600).to({ scaleX: 1, scaleY: 1 }, 600);

		egret.Tween.removeTweens(this.iconliang);
		this.value = this._value;
		
		// if (boo) {
			// this.scoreBg.visible = true;
			// this.score.visible = true;
			// this.score.text = '￥' + money.toFixed(2);
		// }
		this.iconliang.source = this._value + '_liang_png';
		this.iconliang.alpha = 0;
		egret.Tween.get(this.iconliang, { loop: true }).to({ alpha: 1 }, 600)
			.to({ alpha: 0 }, 600)
			.call(() => {
				// this.hideAnimation();
				// if (boo) {
				// 	this.hideLine();
				// }
			})
			.call(() => {
				// if (boo) {
				// 	// console.log('重置');
				// 	let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
				// 	ui.gameScence.showAnimation()
				// }
			})
	}

	public stopAniamtion(): void {
		egret.Tween.pauseTweens(this.icon);
	}

	public resumeAnimation(): void {
		egret.Tween.resumeTweens(this.icon);
	}
	public hideQuan(){
		// this.isA = false;
		this.quan.visible = false
	}

	public hideAnimation(): void {
		this.isA = false;

		egret.Tween.removeTweens(this.iconliang);
		this.value = this._value;
		this.quan.visible = false

		this.iconliang.alpha = 0;
	}

}