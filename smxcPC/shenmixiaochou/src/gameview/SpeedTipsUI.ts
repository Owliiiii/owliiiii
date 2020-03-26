class SpeedTipsUI extends core.BaseUI {
	public yesyes: eui.Label;
    public nono: eui.Label;
	public desLabel: eui.Label;
	public titleLabel: eui.Label;
    public callfun:any;
	public constructor() {
		super();
		this.skinName = SpeedTipsSkin;
	}

	public onAdd(): void {
		super.onAdd();
		this.registerEvent(this.nono,egret.TouchEvent.TOUCH_TAP,()=>{
			this.callfun&&this.callfun();
			core.UIManager.closeUI(core.UIConst.SpeedTipsUI);
			GameManager.getInstance().resume();
		},this);
        this.registerEvent(this.yesyes,egret.TouchEvent.TOUCH_TAP,()=>{
			this.callfun&&this.callfun();
            
            GameConfig.speedPlay = true;
            let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		    ui.shanBtn.selected = GameConfig.speedPlay;
			core.UIManager.closeUI(core.UIConst.SpeedTipsUI);
			GameManager.getInstance().resume();
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