/**
 * 基础滚动组件
 */
class Reel extends eui.Component {
	public containerGroup: eui.Group;
	public kuangGroup: eui.Group;

	/**
	 * 展示数量
	 */
	public static ShowNum: number = 3;
	/**
	 * 当前滚动索引
	 */
	private curReelIndex: number = 0;
	/**
	 * 目标索引
	 */
	private targetIndex: number = 0;
	/**
	 * 滚动数组
	 */
	public reelArr: Array<any> = [];
	/**
	 * 滚动速度
	 */
	public reelSpeed: number = 40;

	/**
	 * 正常滚动时间
	 */
	public static TIME: number = 1500;
	/**
	 * 快速滚动时间
	 */
	public static SPEEDTIME: number = 800;
	/**
	 * 快速停止间隔时间
	 */
	public static SPEED_STOPTIME:number=150;
	/**
	 * 滚轮索引
	 */
	public index: number = 0;;
	/**
	 * 停止间隔时间
	 */
	public static STOPTIME: number = 300;

	/**
	 * 更新最小间隔时间
	 */
	public JIAN_MIN_TIME: number = 16.6;
	/**
	 * 更新最大间隔时间
	 */
	public JIAN_MAX_TIME: number = 33.3;

	/**
	 * 当前时间
	 */
	public curTime: number;
	public timer: egret.Timer;

	public timeoutInter: number;
	public constructor() {
		super();
		this.skinName = ReelSkin;
	}

	public childrenCreated(): void {
		super.childrenCreated()
	}

	public init(): void {
		this.reelArr = vo.GameData.reelArr[this.index];
		this.containerGroup.removeChildren();
		for (let i: number = 0; i <= Reel.ShowNum + 1; i++) {
			let item: ReelItem = new ReelItem();
			item.width = this.containerGroup.width;
			item.height = this.containerGroup.height / Reel.ShowNum;
			this.containerGroup.addChild(item);
			item.y = item.height * i;
		}
		this.timer = new egret.Timer(this.JIAN_MAX_TIME,0);
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.updata, this);
	}
    /**
	 * 全设置正常状态
	 */
	public setItem(): void {
		for (let i: number = 0; i < this.containerGroup.numChildren; i++) {
			let item: ReelItem = this.containerGroup.getChildAt(i) as ReelItem;
			item.setItem(false);
		}
	}

	/**
	 * 设置全暗
	 */
	public setAn(): void {
		for (let i: number = 0; i < this.containerGroup.numChildren; i++) {
			let item: ReelItem = this.containerGroup.getChildAt(i) as ReelItem;
			item.setAn();
		}
	}


	/**
	 * 设置哪一个亮并动
	 */
	public setliangAndActForIndex(index: number,isOne:boolean): void {
		let item: ReelItem = this.containerGroup.getChildAt(index) as ReelItem;
		item.setliang(isOne);
	}

	/**
	 * 设置当前索引
	 */
	public setCurIndex(index: number, isbounce: boolean = true): void {
		if (this.index >= this.reelArr.length) {
			console.log("索引设置超出边界");
			return;
		}
		this.targetIndex = this.curReelIndex = index;
		for (let i: number = 0; i < this.containerGroup.numChildren; i++) {
			let item: ReelItem = this.containerGroup.getChildAt(i) as ReelItem;
			item.isMohu=false;
			egret.Tween.removeTweens(item);
			if (i < 4) {
				
				let cIndex: number = this.curReelIndex + i < this.reelArr.length ? this.curReelIndex + i : (this.curReelIndex + i) % this.reelArr.length;
				item.value = this.reelArr[cIndex];
				let ty: number = item.height * i;
				item.y = isbounce ? ty - 300 : ty;
				if (isbounce) {
					egret.Tween.get(item).to({ y: ty }, 300, egret.Ease.backOut);
					// SoundManager.getInstance().playMusic(SoundConst.REEL_END,1);
					SoundManager.getInstance().playEffect(SoundConst.REEL_END,0.16);
				}
			}
			else if (i == this.containerGroup.numChildren - 1) {
				item.value = this.reelArr[this.curReelIndex - 1 < 0 ? this.reelArr.length - 1 : this.curReelIndex - 1];
				item.y = -item.height;
				let ty: number = -item.height;
				item.y = isbounce ? ty - 300 : ty;
				if (isbounce) {
					egret.Tween.get(item).to({ y: ty }, 300, egret.Ease.backOut);
				}
			}
			item.setItem(false);
		}
	}

	public start(): void{
		this.timeoutInter = null;
		
		this.timer.delay = this.JIAN_MAX_TIME;
		this.curTime = 0;
		egret.Tween.removeTweens(this);
		this.timer.start();
		
	}

	public goIndex(tIndex: number): void {
		if (tIndex >= this.reelArr.length) {
			console.log('索引设置超出边界');
			return;
		}
		// this.timeoutInter = null;
		this.targetIndex = tIndex;
		// this.timer.delay = this.JIAN_MAX_TIME;
		// this.timer.start();
		// this.curTime = 0;
		// egret.Tween.removeTweens(this);
	}
    /**
	 * 暂停
	 */
	public pausme(): void {
		this.timer.stop();//定时器停止暂停
		if (this.timeoutInter != null) {
			egret.clearTimeout(this.timeoutInter);
		}
	}

	/**
	 * 继续
	 */
	public resume(): void {
		this.timer.start();
		if (this.timeoutInter != null) {
			// if (this.index == 2) {
			// 	this.timeoutInter = egret.setTimeout(() => {
			// 		core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_ROUNDOVER);
			// 		return;
			// 	}, this, 300);
			// }
		}
	}

	private set speed(speed: number) {
		this.reelSpeed = speed;
	}

	private get speed(): number {
		return this.reelSpeed;
	}



	public updata(): void {
		this.curTime += this.timer.delay;
		if (this.timer.delay > this.JIAN_MIN_TIME) {
			this.timer.delay -= 2;
		}
		else {
			this.timer.delay = this.JIAN_MIN_TIME;
		}

		for (let i: number = 0; i < this.containerGroup.numChildren; i++) {
			let item: ReelItem = this.containerGroup.getChildAt(i) as ReelItem;
			item.y += this.reelSpeed;				//中间动画转动
			if (item.y >= this.containerGroup.height) {
				let t: number = GameConfig.speedPlay ? Reel.SPEEDTIME : Reel.TIME;
				let st:number=GameConfig.speedPlay ? Reel.SPEED_STOPTIME : Reel.STOPTIME;
				
				if(!GameConfig.isData){
					st = 99999;
				}
				if (this.curTime >= t + this.index * st) {
					this.curReelIndex = this.targetIndex;
					this.timer.stop();
					this.setCurIndex(this.curReelIndex);
					let t1:number=GameConfig.speedPlay?400:500;
					if (this.index == 2) {
						this.timeoutInter = egret.setTimeout(() => {
							core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_ROUNDOVER);
							this.timeoutInter = null;
							return;
						}, this, t1);
						return;
					}
					else {
						return;
					}
				}
				item.y = -2 * item.height + this.reelSpeed + item.y - this.containerGroup.height;
				item.isMohu=true;
				this.curReelIndex = this.curReelIndex - 1 < 0 ? this.reelArr.length - 1 : this.curReelIndex - 1;
				item.value = this.reelArr[this.curReelIndex];
				item.setItem(false);
			}
		}
	}



	public showMaozi(indexArr: Array<number>): void{
		for (let i: number = 0; i < this.kuangGroup.numChildren; i++) {
			(this.containerGroup.getChildAt(i) as ReelItem).setAn();
			this.kuangGroup.getChildAt(i).visible = false;
		}
		
		for (let i: number = 0; i < indexArr.length; i++) {
			let item: ReelItem = this.containerGroup.getChildAt(indexArr[i]['Y']) as ReelItem;
			item.showMaozi();
			this.kuangGroup.getChildAt(indexArr[i]['Y']).visible = true;
		}
		this.kuangGroup.visible = true;
	}




	public hideMaozi(): void {
		for (let i: number = 0; i < this.containerGroup.numChildren; i++) {
			let item: ReelItem = this.containerGroup.getChildAt(i) as ReelItem;
			item.hideMaozi();
		}
		this.kuangGroup.visible = false;
	}


}

/**
 * 滚动组件item
 */
class ReelItem extends eui.Component {
	public icon: eui.Image;
	public value: string;
	public glowFilter: egret.GlowFilter;
	public colorFlilter: egret.ColorMatrixFilter;
	public maoziMC: egret.MovieClip;

	public isMohu:boolean=false;
	public constructor() {
		super();
		this.skinName = ReelItemSkin;
		this.initFiter();
	}

	/**
	 * 展示猴子动画
	 */
	public showMaozi(): void {
		if (!this.maoziMC) {
			this.maoziMC = game.MCUtils.getMc('maozi');
		}
		this.addChild(this.maoziMC);
		this.maoziMC.x = 0-this.width / 50;
		this.maoziMC.y = 0-this.height / 4;
		this.maoziMC.scaleX=1.5;
		this.maoziMC.scaleY=1.5;
		this.maoziMC.gotoAndPlay('maozi', -1);
		this.icon.visible = false;
	}

	/**
	 * 隐藏猴子动画
	 */
	public hideMaozi(): void {
		if (this.maoziMC && this.maoziMC.parent) {
			this.maoziMC.parent.removeChild(this.maoziMC);
			this.maoziMC.stop();
		}
		this.icon.visible = true;
		this.setItem(false);
	}

	/**
	 * 发光速度
	 */
	public speed: number = 3;
	/**
	 * 亮度调节速度
	 */
	public aspeed: number = 6;
	/**
	 * 设置正常状态
	 */
	public setItem(isOne:boolean = false): void {
		this.icon.source =this.isMohu?'bicon_' + this.value + '_2_png':'bicon_' + this.value + '_0_png';
		// if(this.icon.source == 'bicon_M0_0_png'){
		// 	this.icon.scaleY = 0.88;
		// 	// this.icon.scaleX = 0.9;
		// }
		if(!isOne){
			this.stopAction();
		}
	}

	/**
	 * 设置暗状态
	 */
	public setAn(): void {
		//this.icon.source = 'bicon_' + this.value + '_0_png';
		this.stopAction();
		let test = this.colorFlilter.matrix;
		test = [
			1, 0, 0, 0, -60,
			0, 1, 0, 0, -60,
			0, 0, 1, 0, -60,
			0, 0, 0, 1, 0
		];
		this.colorFlilter.matrix = test;
		this.icon.filters = [this.colorFlilter];
	}
    /**
	 * 设置亮状态
	 */
	public setliang(isOne:boolean): void {
		this.setItem(isOne);
		this.goAction();
	}
	public inter: number;

	/**
	 * 开始动画
	 */
	public goAction(): void {
		if (this.inter != undefined) {
			egret.clearInterval(this.inter);
		}
		if (this.value.indexOf('CC') == -1) {
			egret.Tween.removeTweens(this.icon);
			this.inter = egret.setInterval(() => {
				//发光范围改变
				this.glowFilter.blurX += this.speed;
				this.glowFilter.blurY += this.speed;
				if (this.glowFilter.blurX > 50 || this.glowFilter.blurX < 0) {
					this.speed = -this.speed;
				}
				//亮度改变
				let test = this.colorFlilter.matrix;
				test[4] += this.aspeed;
				test[9] += this.aspeed;
				test[14] += this.aspeed;
				if (test[4] > 50 || test[4] < 0) {
					this.aspeed = -this.aspeed;
				}
				this.colorFlilter.matrix = test;
				this.icon.filters = [this.glowFilter, this.colorFlilter];
			}, this, 20);
		}
	}

    /**
	 * 停止动画
	 */
	public stopAction(): void {
		if (this.value.indexOf('CC') == -1) {
			{
				egret.clearInterval(this.inter);
				this.icon.filters = [];
			}
		}
		let test = this.colorFlilter.matrix;
		test = [
			1, 0, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0
		];
		this.colorFlilter.matrix = test;
	}

    /**
	 * 初始化滤镜
	 */
	private initFiter(): void {
		//外发光 
		if (!this.glowFilter) {
			var color: number = 0xFFFFFF;        /// 光晕的颜色，十六进制，不包含透明度
			var alpha: number = 0.1;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
			var blurX: number = 11;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
			var blurY: number = 11;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
			var strength: number = 30;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
			var quality: number = egret.BitmapFilterQuality.HIGH;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
			var inner: boolean = false;            /// 指定发光是否为内侧发光，暂未实现
			var knockout: boolean = false;            /// 指定对象是否具有挖空效果，暂未实现
			this.glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY,
				strength, quality, inner, knockout);
		}

		//内亮度
		var colorMatrix = [
			1, 0, 0, 0, 0,
			0, 1, 0, 0, 0,
			0, 0, 1, 0, 0,
			0, 0, 0, 1, 0
		];
		if (!this.colorFlilter) {
			this.colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
		}
	}

}