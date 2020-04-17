class MosueRadioButton extends eui.RadioButton {
	public data: any;
	public constructor() {
		super();
		mouse.setButtonMode(this,true);
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
	}

	public onAdd(): void {
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRollOver, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRollOut, this);
		this.stage.addEventListener(mouse.MouseEvent.ROLL_OUT,this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
	}

	public onRemove(): void {
		this.onRollOut();
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRollOver, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onRollOut, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onRollOut, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRollOut, this);
		this.stage.removeEventListener(mouse.MouseEvent.ROLL_OUT,this.onRollOut, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
	}
	public t: number;
	//'disabled';
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
		// if (this.enabled == false) return;
		this.currentState = '';
	
	}
	public onClick():void
	{
		 SoundManager.getInstance().playEffect(SoundConst.BUTTON);
	}
}