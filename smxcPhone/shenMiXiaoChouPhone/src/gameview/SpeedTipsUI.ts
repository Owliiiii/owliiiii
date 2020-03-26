class SpeedTipsUI extends core.BaseUI {
	public yesyes: eui.Label;
    public nono: eui.Label;
	public desLabel: eui.Label;
	public titleLabel: eui.Label;
    public callfun:any;
	public constructor() {
		super();
		this.skinName = SpeedTipsSkin;
        egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE,this.onEvent,this);
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
            let ui: SetUI = core.UIManager.getUI(core.UIConst.SetUI);
		    ui.speedBtn.liang.visible = GameConfig.speedPlay;
			core.UIManager.closeUI(core.UIConst.SpeedTipsUI);
			GameManager.getInstance().resume();
		},this);
	}

    public onEvent():void
	{
		if(window.innerWidth>window.innerHeight)
		{
			this.currentState='up';
			// this.width=1920;
		}
		else
		{
			this.currentState='down';
			// this.width=1080;
		}
		
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