class StipsUI extends core.BaseUI {
	public okBtn: MouseButton;
	public desLabel: eui.Label;
	public titleLabel: eui.Label;
    public callfun:any;
	public constructor() {
		super();
		this.skinName = StipSkin;
	}

	public onAdd(): void {
		super.onAdd();
		this.registerEvent(this.okBtn,egret.TouchEvent.TOUCH_TAP,()=>{
			this.callfun&&this.callfun();
			core.UIManager.closeUI(core.UIConst.StipsUI);
		},this);
	}

	public onRemove(): void {
		super.onRemove();
	}

	public shows(title:string='',des:string='',callfun:any=null):void
	{
         this.titleLabel.text=title;
		 this.desLabel.text=des;
		 this.callfun=callfun;
	}
}