class GameScence extends eui.Component {

	public reelArr: Array<Reel> = [];
	public leftLine: eui.Group;
	public rightLine: eui.Group;
	public dianji:eui.Rect;
	public maskGroup: eui.Group;
	public bonusMask: eui.Rect;
	public bonusImg: eui.Image;
	// public pent: GamePentCompoment;
	public constructor() {
		super();
		this.skinName = GameScenceSkin;
	}

	public childrenCreated(): void {
		super.childrenCreated();
		this.clear();

	}


	/**
	 * 初始化
	 */
	public init(): void {
		for (let i: number = 0; i < 5; i++) {
			let reel: Reel = this['reel' + i];
			this.reelArr.push(this['reel' + i]);
			reel.index = i;
		}
	}
	public reset(): void {
		for (let i: number = 0; i < 5; i++) {
			let reel: Reel = this['reel' + i];
			reel.curReelData = vo.GameData.initData.Value.Geninit.Main.ReelSymbols[i];
			reel.initData();
		}
	}
	public clear(): void {
		this.leftLine.visible=false;
		this.rightLine.visible=false;
	}
	public showTipLine(line: number): void {
		this.leftLine.visible=true;
		this.rightLine.visible=true;
		(this['right_' + line] as eui.Group).visible = true;
		(this['left_' + line] as eui.Group).visible = true;
	}

	public clearTip(): void {
		this.leftLine.visible=false;
		this.rightLine.visible=false;
		for (let i: number = 1; i < 6; i++) {
			(this['right_' + i] as eui.Group).visible = false;
			(this['left_' + i] as eui.Group).visible = false;
		}
	}

	public startReel(): void {
		for (let i: number = 0; i < 5; i++) {
			let reel: Reel = this['reel' + i];
			reel.start();
		}
	}
	public startResult():void{
		for (let i: number = 0; i < 5; i++) {
			let reel: Reel = this['reel' + i];
			if(vo.GameData.resultData.Value.SpinResult.Main.ReelSymbols[i]){
				reel.curTime=egret.getTimer();
				reel.targetReelData = vo.GameData.resultData.Value.SpinResult.Main.ReelSymbols[i];
				reel.resultArr();
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

	public showAnimation(position:any): void {
		
		for (let i: number = 0; i < this.reelArr.length; i++) {
			if (i == position.X) {
				let reel: Reel = this.reelArr[i];
				reel.showAnimation(position.Y);
			}
			// else{
			// 	let reel: Reel = this.reelArr[i];
			// 	reel.deleteTipQuan(position.Y);
			// }
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
	public hideAllAnimation1(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			reel.clearAllAnimation1();
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

	public displayBonus() {
		this.maskGroup.visible = true;
		this.bonusMask.visible = true;
		egret.Tween.get(this.bonusImg, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).wait(50).to({ scaleX: 1, scaleY: 1 }, 450);
	}
	public stopBonus() {
		this.maskGroup.visible = false;
		this.bonusMask.visible = false;
		egret.Tween.removeTweens(this.bonusImg);
	}



}