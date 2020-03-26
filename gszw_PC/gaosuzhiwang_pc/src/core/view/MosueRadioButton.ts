class MosueRadioButton extends eui.RadioButton {
	public data: any;
	public colorFlilter: egret.ColorMatrixFilter;
	public glowFilter: egret.GlowFilter;
	public constructor() {
		super();
		this.initFiter();
		mouse.setButtonMode(this, true);
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
	}
	public onAdd(): void {
		this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRollOver, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRollOver, this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
		this.group.addEventListener(egret.Event.CHANGE,this.onChange,this);
		this.updataUI();
	}
	public onRemove(): void {
		this.removeEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollOver, this);
		this.removeEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRollOver, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
	}
	public onRollOver(e): void {
		if (this.enabled == false) return;
		if (e.type == egret.TouchEvent.TOUCH_TAP) this.onClick();
		if (this.selected) {
			this.currentState = 'rollOverAndSelected';
		}
		else {
			this.currentState = 'rollOver';
		}
		this.updataUI();
		this.dispatchEventWith(egret.Event.CHANGE);
	}

	public onRollOut(): void {
		this.currentState = '';
		this.updataUI();
		this.dispatchEventWith(egret.Event.CHANGE);
	}

	public onChange():void
	{
		if(this.group.selectedValue!=this.value)
		{
			this.onRollOut();
		}
	}
	public onClick(): void {
		//SoundManager.getInstance().playEffect(SoundConst.CHECKSTART);
	}

	public updataUI(): void {
		if (this.currentState == 'up') {
			this.updataText(false);
		}
		else {
			this.updataText(true);
		}
	}


	public updataText(isliang: boolean): void {
		(this.labelDisplay as eui.Label).textColor=isliang?0xffffff:0x787d83;
		(this.labelDisplay as eui.Label).filters = isliang ? [this.colorFlilter, this.glowFilter] : [];	
	}
	public initFiter(): void {
		//外发光 
		if (!this.glowFilter) {
			var color: number = 0xFFFFFF;        /// 光晕的颜色，十六进制，不包含透明度
			var alpha: number = 0.1;             /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
			var blurX: number = 3;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
			var blurY: number = 3;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
			var strength: number = 10;            /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
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