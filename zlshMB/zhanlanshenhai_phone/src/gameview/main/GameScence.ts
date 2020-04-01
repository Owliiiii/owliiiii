class GameScence extends eui.Component {

	public reelArr: Array<Reel> = [];
	public pent: GamePentCompoment;
	public lightBg: eui.Rect;
	public bonusMc:egret.MovieClip;
	
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
			// reel.targetReelData = vo.GameData.resultData.Value.SpinResult.Main.ReelSymbols[i];
			reel.start();
		}
		if(!SoundManager.getInstance().effectOn) return;
		SoundManager.getInstance().playMusic(SoundConst.START,1).then((channel)=>{
			GameManager.getInstance().startChannel=channel;
		});
	}

	public stopReel(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			reel.stop();
		}
		SoundManager.getInstance().playEffect(SoundConst.STOP);
		this.showLight();
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
	//还原
	public huanyuanC1(arr:Array<any>):void{
		for(let i = 0 ; i < arr.length;i++){
			this.reelArr[arr[i].X].huanYuan(arr[i].Y);
		}
	}

	public showLight(): void {
		egret.Tween.removeTweens(this.lightBg);
		if (window.innerWidth > window.innerHeight) {
			egret.Tween.get(this.lightBg).to({ alpha: 0.3 }, 50).to({ alpha: 0 }, 50);
		}
		else {
			egret.Tween.get(this.lightBg).to({ alpha: 0.4 }, 50).to({ alpha: 0 }, 80);
		}

	}
	//中免费动画
	public displayBonus(arr:Array<any>):void{
		for(let i = 0 ; i < arr.length;i++){
			this.reelArr[arr[i].X].moveC1y(arr[i].Y);
		}
		
		if(!this.bonusMc){
			this.bonusMc = game.MCUtils.getMc('bonusMc');
		}
		this.addChild(this.bonusMc);
		this.bonusMc.gotoAndPlay('bonusMc', 1);
		this.bonusMc.x = this.width / 2;
		this.bonusMc.y = this.height / 2;
		this.bonusMc.scaleX = 1.32;
		this.bonusMc.scaleY = 1.32;
		
	}
	//移除免费动画
	public removeBonusMc():void{
		if (this.bonusMc && this.bonusMc.parent) {
			this.bonusMc.parent.removeChild(this.bonusMc);
			this.bonusMc.stop();
		}
	}

}