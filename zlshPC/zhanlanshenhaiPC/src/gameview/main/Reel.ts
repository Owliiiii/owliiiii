/**
 * 基础滚动组件
 */
class Reel extends eui.Component {
	public kGroup: eui.Group;
	public static START_CHANEL: egret.SoundChannel;
	public isTest:number = 0;
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
	public reelSpeed: number = 80;

	/**
	 * 正常滚动时间
	 */
	public static TIME: number = 500;
	/**
	 * 快速滚动时间
	 */
	public static QUK_TIME: number = 300;
	/**
	 * 停止间隔
	 */
	public static STOPTIME: number = 600;
	/**
	 * 快速停止间隔
	 */
	public static QUK_STOPTIME: number = 300;
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

	public showAnimation(i:number): void {
		let item: ReelItem = this.kGroup.getChildAt(i+1) as ReelItem;
		item.goAnimation();
	}
	public hideAnimation(i:number): void {
		let item: ReelItem = this.kGroup.getChildAt(i+1) as ReelItem;
		item.hideAnimation();
	}

	public clearAllAnimation():void
	{
		for(let i:number=0;i<this.kGroup.numChildren;i++)
		{
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			 item.hideAnimation();
		}
	}
	public chanel: egret.SoundChannel;
	public stopMusic(): void {
		if (this.chanel) {
			this.chanel.stop();
			this.chanel = null;
		}
	}
	/**
	 * moveC1y
	 */
	public moveC1y(c1Y:number):void{
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			//移动到中间
			// egret.Tween.get(item).to({ y: 201 },500);
			let c1y0:number = item.y + 201;
			let c1y2:number = item.y - 201;
			if(c1Y == 0){
				egret.Tween.get(item).to({ y: c1y0 }, 700);
			}
			if(c1Y == 2){
				egret.Tween.get(item).to({ y: c1y2 }, 700);
			}
		}
	}
	public huanYuan(c1Y:number):void{
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			//移动到中间
			// egret.Tween.get(item).to({ y: 201 },500);
			let c1y0:number = item.y + 201;
			let c1y2:number = item.y - 201;
			if(c1Y == 0){
				egret.Tween.get(item).to({ y: c1y2 }, 1);
			}
			if(c1Y == 2){
				egret.Tween.get(item).to({ y: c1y0 }, 1);
			}
		}
	}
	public onFrame(): void {
		if (this.isAction) {
			for (let i: number = 0; i < this.kGroup.numChildren; i++) {
				let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
				let stopTime:number = 600;
				item.y += this.reelSpeed;
				if (item.y >= this.height) {
					let num3:number = 4 - GameConfig.twoC1Index;	//1,2,3
					for(let k = 1;k <= num3;k++){
						if(GameConfig.isTwo && this.index == (GameConfig.twoC1Index+k) ){
							stopTime = 1700;
						}
					}
					
					let t1: number = GameConfig.speedPlay ? 250:700;//Reel.QUK_TIME : Reel.TIME;
					let t2: number = GameConfig.speedPlay ? 250:stopTime;//Reel.QUK_STOPTIME : Reel.STOPTIME;
					// let t3: Array<number> = GameConfig.speedPlay ? [300, 350, 500, 650, 800] : [0, 400, 730, 930, 1030];

					for(let j = 1;j <= num3;j++){
						if(this.index == (GameConfig.twoC1Index + j) && GameConfig.isTest){
							// console.log("第" + this.index + "列停止");
							if(SoundManager.getInstance().effectOn && this.chanel == null){
								SoundManager.getInstance().playMusic(SoundConst.C1TWO, 1).then((chanel) => {
									this.chanel = chanel; 
								});
							};
							if (!this.c1MC) {
								this.c1MC = game.MCUtils.getMc('c1mc');
							}
							this.addChild(this.c1MC);
							this.c1MC.gotoAndPlay('c1mc', -1);
							this.c1MC.x = this.kGroup.width / 2;
							this.c1MC.y = this.kGroup.height / 2;
							this.c1MC.scaleX=1;
							this.c1MC.scaleY=1;
							GameConfig.isTest = false;
							// t1 = t1+1000;
							t2 = t2+1500;
						}
					}
					// if(!GameConfig.isData){		//等待数据返回
					// 	t2 = 99999;
					// }
					let t3: number = 900;
					// if(!GameConfig.speedPlay){
					// 	t3 = 500;
					// }
					if (egret.getTimer() - this.curTime > t1 + (t2 * this.index + t3) && !GameConfig.isTest) {
						// if(GameConfig.oneC1Index <= 2){
						// 	SoundManager.getInstance().playEffect(SoundConst.DENG);
						// }
						if(GameConfig.twoC1Index != -1){
							if(this.index == GameConfig.twoC1Index){
								GameConfig.isTest = true;
							}
							if(this.index == GameConfig.twoC1Index+1){
								GameConfig.isTest = true;
							}
							if(this.index == GameConfig.twoC1Index+2){
								GameConfig.isTest = true;
							}
						}
						// if(this.index == GameConfig.twoC1Index && GameConfig.threeC1Index == -1){
						// 	console.log("CCCCCCC");
						// 	GameConfig.isTest = true;
						// }
						
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
			SoundManager.getInstance().playEffect(SoundConst.REEL_STOP);
		}
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			egret.Tween.removeTweens(item);
			let ty: number;
			ty = i * item.height - item.height;
			item.y = this.stopState ? ty : i * item.height - item.height + 100;
			item.value = i > 0 && i < 4 ? this.curReelData[i - 1] : 'M' + Math.ceil(Math.random() * 5);
			// item.setVir(false);
			//item.value ='M'+Math.ceil(Math.random()*5);
			if((i > 0 && i < 4 ? this.curReelData[i - 1] : 'M' + Math.ceil(Math.random() * 5)) == "C1" && this.index <= 2 && !this.stopState){
				SoundManager.getInstance().playEffect(SoundConst.DENG);
			}
			let t:number=this.stopState?0:300;
			egret.setTimeout(()=>{
			if (this.c1MC && this.c1MC.parent) {
					this.c1MC.parent.removeChild(this.c1MC);
					this.c1MC.stop();
					this.stopMusic();
				}
			},this,300);
			
			egret.Tween.get(item).to({ y: ty }, t, egret.Ease.cubicOut).call(() => {
				if (this.index == 4 && i == this.kGroup.numChildren - 1) {
					// GameConfig.twoC1Index = -1;
					GameConfig.isTest = false;
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
	public c1MC: egret.MovieClip;

	public start(): void {
		for (let i: number = 0; i < this.kGroup.numChildren; i++) {
			let item: ReelItem = this.kGroup.getChildAt(i) as ReelItem;
			let ty: number = item.y - 50;
			egret.Tween.get(item).to({ y: ty }, 100).to({ y: ty + 50 }, 100);
		}
		egret.Tween.get(this).wait(300).call(() => {
			this.isAction = true;
			this.stopState = false;
			this.curTime = egret.getTimer();
			// this.curReelData = JSON.parse(JSON.stringify(this.targetReelData));
		}, this);
	}

	public resultArr():void{
		this.curReelData = JSON.parse(JSON.stringify(this.targetReelData));
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
	public maoziMC: egret.MovieClip;
	public maoziMC1: egret.MovieClip;
	public maoziMC2: egret.MovieClip;
	public maoziMC3: egret.MovieClip;
	public maoziMC4: egret.MovieClip;
	public maoziMC5: egret.MovieClip;
	public maoziMC6: egret.MovieClip;
	// public aIcon: eui.Image;
	// public vIcon: eui.Image;
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
			this.icons.visible = true;
			// this.vIcon.visible = false;
		}
	}

	public get value(): any {
		return this._value;
	}

	// public setVir(b: boolean): void {
	// 	this.isVir = b;
	// 	if (this.isVir) {
	// 		this.icons.visible = false;
	// 		// this.vIcon.visible = true;
	// 		let t: string = 'blur' + Math.floor(Math.random() * 12) + '_png';
	// 		// this.vIcon.source = t;
	// 		//console.log(t);
	// 	}
	// 	else {
	// 		this.icons.source = this._value + '_icon_png';
	// 		this.icons.visible = true;
	// 		// this.vIcon.visible = false;
	// 	}
	// }

    public isA:boolean=false;
	public goAnimation(): void {
		if(this.isA) return;
		this.isA=true;
		egret.Tween.removeTweens(this.icons);
		this.value = this._value;
		// this.aIcon.visible=true;
		if(this.value == "WW"){
			if(!GameConfig.speedPlay){
				// SoundManager.getInstance().playEffect(SoundConst.WWMUSIC);
			}
			if (!this.maoziMC) {
				this.maoziMC = game.MCUtils.getMc('ww');
			}
			this.addChild(this.maoziMC);
			this.maoziMC.gotoAndPlay('ww', -1);
			this.maoziMC.x = this.width / 2;
			this.maoziMC.y = this.height / 2;
			this.maoziMC.scaleX=1.4;
			this.maoziMC.scaleY=1.4;
			this.icons.visible = false;
		}
		if(this.value == "M5"){
			if (!this.maoziMC1) {
				this.maoziMC1 = game.MCUtils.getMc('m5');
			}
			this.addChild(this.maoziMC1);
			this.maoziMC1.gotoAndPlay('m5', -1);
			this.maoziMC1.x = this.width / 2;
			this.maoziMC1.y = this.height / 2;
			this.maoziMC1.scaleX=1.4;
			this.maoziMC1.scaleY=1.4;
			this.icons.visible = false;
		}
		if(this.value == "M3"){
			if (!this.maoziMC2) {
				this.maoziMC2 = game.MCUtils.getMc('m3');
			}
			this.addChild(this.maoziMC2);
			this.maoziMC2.gotoAndPlay('m3', -1);
			this.maoziMC2.x = this.width / 2;
			this.maoziMC2.y = this.height / 2;
			this.maoziMC2.scaleX=1.4;
			this.maoziMC2.scaleY=1.4;
			this.icons.visible = false;
		}
		if(this.value == "M1"){
			if (!this.maoziMC3) {
				this.maoziMC3 = game.MCUtils.getMc('m1');
			}
			this.addChild(this.maoziMC3);
			this.maoziMC3.gotoAndPlay('m1', -1);
			this.maoziMC3.x = this.width / 2;
			this.maoziMC3.y = this.height / 2;
			this.maoziMC3.scaleX=1.4;
			this.maoziMC3.scaleY=1.4;
			this.icons.visible = false;
		}
		if(this.value == "M2"){
			if (!this.maoziMC4) {
				this.maoziMC4 = game.MCUtils.getMc('m2');
			}
			this.addChild(this.maoziMC4);
			this.maoziMC4.gotoAndPlay('m2', -1);
			this.maoziMC4.x = this.width / 2;
			this.maoziMC4.y = this.height / 2;
			this.maoziMC4.scaleX=1.4;
			this.maoziMC4.scaleY=1.4;
			this.icons.visible = false;
		}
		if(this.value == "M4"){
			console.log("看看多少次");
			if(!GameConfig.speedPlay){
				// SoundManager.getInstance().playEffect(SoundConst.DEJIANG);
			}
			if (!this.maoziMC5) {
				this.maoziMC5 = game.MCUtils.getMc('m4');
			}
			this.addChild(this.maoziMC5);
			this.maoziMC5.gotoAndPlay('m4', -1);
			this.maoziMC5.x = this.width / 2;
			this.maoziMC5.y = this.height / 2;
			this.maoziMC5.scaleX=1.4;
			this.maoziMC5.scaleY=1.4;
			this.icons.visible = false;
		}
		if(this.value == "C1"){
			if (!this.maoziMC6) {
				this.maoziMC6 = game.MCUtils.getMc('c1');
			}
			this.addChild(this.maoziMC6);
			this.maoziMC6.gotoAndPlay('c1', -1);
			this.maoziMC6.x = this.width / 2;
			this.maoziMC6.y = this.height / 2;
			this.maoziMC6.scaleX=1.4;
			this.maoziMC6.scaleY=1.4;
			this.icons.visible = false;
		}
		else{
			egret.Tween.get(this.icons, { loop: true }).to({ scaleX: 0.8, scaleY: 0.8 }, 500).to({ scaleX: 1, scaleY: 1 }, 500);
		}
		
	}

	public hideAnimation(): void {
		this.isA=false;
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
		this.icons.scaleX=1;
		this.icons.scaleY=1;
		this.icons.visible = true;
		this.value = this._value;

	}
}