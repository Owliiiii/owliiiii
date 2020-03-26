class MosueCheckBox extends eui.CheckBox {
	public data: any;
	public constructor() {
		super();
		mouse.setButtonMode(this,true);
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);

	}

	public onAdd(): void {
		this.addEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollOver, this);
		this.addEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRollOut, this);
		egret.MainContext.instance.stage.addEventListener(mouse.MouseEvent.ROLL_OUT,this.onRollOut, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
	}

	public onRemove(): void {
		this.onRollOut();
		this.removeEventListener(mouse.MouseEvent.ROLL_OVER, this.onRollOver, this);
		this.removeEventListener(mouse.MouseEvent.ROLL_OUT, this.onRollOut, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRollOut, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRollOut, this);
		egret.MainContext.instance.stage.removeEventListener(mouse.MouseEvent.ROLL_OUT,this.onRollOut, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
	}

	public onRollOver(): void {
		if (this.enabled == false) return;
		if (this.selected) {
			this.currentState = 'rollOverAndSelected';
		}
		else {
			this.currentState = 'rollOver';
		}

	}

	public onRollOut(): void {
		this.currentState = '';
	}

	public onClick():void
	{
		 SoundManager.getInstance().playEffect(SoundConst.BUTTON);
	}
}