class NetCloseUI extends core.BaseUI
 {
	public closeBtn:MouseButton;
	public desLabel:eui.Label;
	public callfun: any;

	public constructor()
	 {
		 super();
		 this.skinName=netcloseSkin;
	}

	public onAdd():void
	{
		super.onAdd();
		this.registerEvent(this.closeBtn,egret.TouchEvent.TOUCH_TAP,this.onTab,this);
		//this.desLabel.text=GameConfig.langObj['7'][GameConfig.LANG];
	}

	public onTab():void
	{
		window.close();
	}
	public shows(type: any, des: string = '', callfun: any = null): void {	
		this.desLabel.text = des;
		this.callfun = callfun;
	}
}