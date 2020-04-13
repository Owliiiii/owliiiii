class GameScence extends eui.Component {

	public reelArr: Array<Reel> = [];
	public pent: GamePentCompoment;
	public bonusMc:egret.MovieClip;
	public freeBg:eui.Image;
	public dianji:eui.Rect;



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
	public indexC1:number = 0;
	public startReel(): void {
		for (let i: number = 0; i < 5; i++) {
			let reel: Reel = this['reel' + i];
			reel.start();
		}
	}

	public startResult():void{
		this.indexC1 = 0;
		GameConfig.isTwo = false;
		GameConfig.isTest = false;
		GameConfig.twoC1Index = -1;
		// GameConfig.twoC1Index = 4;
		GameConfig.isData = true;
		
		for (let i: number = 0; i < 5; i++) {
			let reel: Reel = this['reel' + i];
			if(vo.GameData.resultData.Value.SpinResult.Main.ReelSymbols[i]){
				reel.targetReelData = vo.GameData.resultData.Value.SpinResult.Main.ReelSymbols[i];
				reel.resultArr();
			}
			for(let j = 0; j < reel.targetReelData.length;j++){
				if(reel.targetReelData[j] == "C1"){
					this.indexC1++;
					if(this.indexC1 == 1){
						GameConfig.oneC1Index = i;
					}else if(this.indexC1 == 2){	//有2个贝壳
						GameConfig.twoC1Index = i;
						GameConfig.isTwo = true;
					}else if(this.indexC1 >= 3){	//有3个贝壳
						GameConfig.threeC1Index = i;
					}else{
						GameConfig.threeC1Index = -1;
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
		// SoundManager.getInstance().playEffect(SoundConst.BUTTON);
	}  
	public showAnimation(position:any): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			if(i==position.X)
			{
              let reel: Reel = this.reelArr[i];
			  reel.showAnimation(position.Y);
			}
		}
	}

	public hideAnimation(position:any): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			if(i==position.X)
			{
              let reel: Reel = this.reelArr[i];
			  reel.hideAnimation(position.Y);
			}
		}
	}

	public hideAllAnimation():void
	{
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
		this.bonusMc.y = this.height / 2+12;
		this.bonusMc.scaleX = 1.31;
		this.bonusMc.scaleY = 1.31;
		
	}
	//移除免费动画
	public removeBonusMc():void{
		if (this.bonusMc && this.bonusMc.parent) {
			this.bonusMc.parent.removeChild(this.bonusMc);
			this.bonusMc.stop();
		}
	}



}