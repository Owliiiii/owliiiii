class MouseButton extends eui.Button {
	public data: any;
	public value:number;
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
		mouse.setButtonMode(this,true);
	}

	public onAdd(): void {
		this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRollOver, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.onRollOver, this);
        this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRollOut, this);
		egret.MainContext.instance.stage.addEventListener(mouse.MouseEvent.ROLL_OUT,this.onRollOut, this);

		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
	}

	public onRemove(): void {
		this.onRollOut();
		this.removeEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRollOver, this);
		this.removeEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRollOut, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onRollOver, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onRollOut, this);
		egret.MainContext.instance.stage.removeEventListener(mouse.MouseEvent.ROLL_OUT,this.onRollOut, this);
		
	}

	public t: number;

	public onRollOver(): void {
		if (this.enabled == false) return;
		this.currentState = 'rollOver';
	}

	public onRollOut(): void {
		this.currentState = '';
	}

	public onClick():void
	{
		 SoundManager.getInstance().playEffect(SoundConst.BUTTON);
	}
}