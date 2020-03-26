class GameScence extends eui.Component {

	public reelArr: Array<Reel> = [];
	public pent: GamePentCompoment;
	public constructor() {
		super();
		this.skinName = GameScenceSkin;
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

	public startReel(): void {
		for (let i: number = 0; i < 5; i++) {
			let reel: Reel = this['reel' + i];
			//reel.targetReelData = vo.GameData.resultData.Value.SpinResult.Main.ReelSymbols[i];
			reel.start();
		}
	}

	public stopReel(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			reel.stop();
		}
		//SoundManager.getInstance().playEffect(SoundConst.BUTTON);
	}

	public canStop(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			reel.curTime=egret.getTimer();
			reel.curReelData=vo.GameData.resultData.Value.SpinResult.Main.ReelSymbols[i];
			console.log('-----------------1-'+reel.index+'--'+reel.curTime);
		}
       
	   console.log('-----------------2');
	}

	public showAnimation(position: any): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			if (i == position.X) {
				let reel: Reel = this.reelArr[i];
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



}