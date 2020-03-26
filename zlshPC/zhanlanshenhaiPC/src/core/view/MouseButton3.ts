class MouseButton3 extends MouseButton {
	public colorFlilter: egret.ColorMatrixFilter;
	public glowFilter: egret.GlowFilter;
	public l: number = 100;
	public constructor() {
		super();
		this.initFiter();
	}

	public childrenCreated(): void {
		super.childrenCreated();
		this.updataUI();
	}

	public onRollOver(): void {
		if (this.enabled == false) return;
		this.currentState = 'rollOver';
		this.updataUI();
	}

	public onRollOut(): void {
		this.currentState = '';
		this.updataUI();
	}

	public updataUI(): void {
		if (this.currentState == 'rollOver') {
			this.updataText(true);
		}
		else {
			this.updataText(false);
		}
	}
	public updataText(isliang: boolean): void {
		(this.labelDisplay as eui.Label).textColor=isliang?0x6CCC8C:0xffffff;
		// egret.setTimeout(() => {
		// 	(this.labelDisplay as eui.Label).filters = [this.colorFlilter,this.glowFilter];
		// 	console.log('aaaaaaa');
		// }, this, 200);

	}
	public initFiter(): void {
		//外发光 
		if (!this.glowFilter) {
			var color: number = 0xFFFFFF;        /// 光晕的颜色，十六进制，不包含透明度
			var alpha: number = 0.01;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
			var blurX: number = 1;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
			var blurY: number = 1;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
			var strength: number = 0.01;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
			var quality: number = egret.BitmapFilterQuality.LOW;        /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
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