class TextButton extends eui.Button {
	public label0: eui.Label;
	public label1: eui.Label;
	public constructor() {
		super();
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
		mouse.setButtonMode(this, true);
	}

	public onAdd(): void {
		this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRollOver, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
		this.label0.alpha=1;
		this.label1.alpha=0;
	}

	public onRemove(): void {
		this.onRollOut();
		this.removeEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRollOver, this);
		this.removeEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRollOut, this);
		this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onRollOut, this);
	}
    
	public isselected:boolean=false;
	public setSelected(b:boolean):void
	{
      this.isselected=b;
	  this.label1.textColor=this.isselected?0x27A5FF:0x52C5EE;
	  if(b)
	  {
          this.onRollOver();
	  }
	  else
	  {
          this.onRollOut();
	  }
	}

	public onRollOver(): void {
		//if(this.isselected) return;
		egret.Tween.removeTweens(this.label0);
		egret.Tween.removeTweens(this.label1);
		egret.Tween.get(this.label0).to({ alpha: 0 }, 200);
		egret.Tween.get(this.label1).to({ alpha: 1 }, 200);
	}

	public onRollOut(): void {
		if(this.isselected) return;
		egret.Tween.removeTweens(this.label0);
		egret.Tween.removeTweens(this.label1);
		egret.Tween.get(this.label0).to({ alpha: 1 }, 200);
		egret.Tween.get(this.label1).to({ alpha: 0 }, 200);
	}
}