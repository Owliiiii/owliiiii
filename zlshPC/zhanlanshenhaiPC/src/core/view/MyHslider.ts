class MyHslider extends eui.HSlider {
	public mGroup: eui.Group;
	public track: eui.Image;
	public thumb: eui.Image;
	public tsbar: eui.Image;

	public isPlaying: boolean = false;

	public barl: number;

	public constructor() {
		super();
		this.$SliderBase['6'] = 0;
	}

	public childrenCreated(): void {
		super.childrenCreated();
		this.addEventListener(egret.Event.CHANGE, this.onChange, this);
		this.maximum = 100;
		this.minimum = 0;
		this.value = SoundManager.getInstance().getEffectVolume() * 100;
		this.barl = this.tsbar.width;
		this.tsbar.width = this.barl * this.value / this.maximum;
	}

	public onChange(e: egret.Event): void {
		console.log("1111");
		this.tsbar.width = this.barl * this.value / this.maximum;
	}

	public setVolues(n: number): void {
		console.log("2222");
		this.value = n;
		this.tsbar.width = this.barl * this.value / this.maximum;
	}

	public l1x: number;
	public l1y: number;
	public l2x: number;
	public l2y: number;
	public svalue: number;
	protected onTrackTouchBegin(event: egret.TouchEvent): void {
		super.onTrackTouchBegin(event);
		this.isPlaying = true;
		this.l1x = event.stageX;
		this.l1y = event.stageY;
		this.svalue = this.value;
		egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
		egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
	}

	protected onTouchEnd(e: egret.TouchEvent): void {
		egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMove, this);
		egret.MainContext.instance.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
		this.isPlaying = false;
		if (e.target.parent != this) {
			this.dispatchEventWith('MyHslider_STOP');
		}
	}

	public onTouchMove(e: egret.TouchEvent): void {

		this.l2x = e.stageX;
		this.l2y = e.stageY;
		var newValue = this.pointToValue(this.l2x - this.l1x, this.l2y - this.l1y);
		newValue += this.svalue;
		newValue = this.nearestValidValue(newValue, this.snapInterval);
		this.updateWhenTouchMove(newValue);
	}

}