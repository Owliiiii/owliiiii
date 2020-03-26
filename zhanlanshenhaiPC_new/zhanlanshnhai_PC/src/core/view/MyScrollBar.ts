class MyScrollBar extends eui.VSlider {
	public subtn: MouseButton;
	public addBtn: MouseButton;
	public constructor() {
		super();
		this.skinName = MyScrollBarSkin;
	}

	public childrenCreated(): void {

		this.maximum = 100;
		this.minimum = 0;
		this.value = 100;
		core.MyUIUtils.addLongTouch(this.subtn, () => {
			this.moveState = 1;
			this.islong = true;
		}, () => {
			this.moveState = 0;

		}, this);

		core.MyUIUtils.addLongTouch(this.addBtn, () => {
			this.moveState = -1;
			this.islong = true;
		}, () => {
			this.moveState = 0;
		}, this);

		this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
		this.subtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
	}

	public islong: boolean = false;

	public moveState: number = 0;

	public onFrame(): void {
		if (this.moveState == -1) {
			this.value -= 1;
			this.dispatchEventWith(egret.Event.CHANGE);
		}

		if (this.moveState == 1) {
			this.value += 1;
			this.dispatchEventWith(egret.Event.CHANGE);
		}
	}

	public onTab(e: egret.TouchEvent): void {
		if (this.islong) {
			this.islong = false;
			return;
		}
		switch (e.currentTarget) {
			case this.subtn:
				this.value += 10;
				this.dispatchEventWith(egret.Event.CHANGE);
				break;
			case this.addBtn:
				this.value -= 10;
				this.dispatchEventWith(egret.Event.CHANGE);
				break;
		}
	}
}