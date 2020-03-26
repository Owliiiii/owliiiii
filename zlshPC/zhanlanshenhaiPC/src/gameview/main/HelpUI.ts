class HelpUI extends core.BaseUI {
	public bg: eui.Image;
	public closeBtn: MouseButton;
	public scroll: SScroll;
	public contentBg: eui.Image;
	public mainGroup:eui.Group;
	public myScrollBar:MyScrollBar;
	public constructor() {
		super();
		this.skinName = HelpSkin;
	}

	public onAdd(): void {
		super.onAdd();
		this.onResize();
		this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.myScrollBar,egret.Event.CHANGE,this.onScrollBarChange,this);
		this.registerEvent(this.scroll,egret.Event.CHANGE,this.onScrollChange,this);
		//this.scroll.verticalScrollBar=new MyScrollBar();
	}

	public onResize(): void {
		var scaleX = (window.innerWidth / GameConfig.DES_WIDTH) || 0;
		var scaleY = (window.innerHeight / GameConfig.DES_HEIGHT) || 0;
		let maxh: number = window.innerHeight - GameConfig.J_HEIGHT;
		let cs: number = scaleX > scaleY ? scaleY : scaleX;
		let t1s = (window.innerHeight +10) / GameConfig.J_HEIGHT - maxh / GameConfig.HEIGHT;
		let t2s = (window.innerHeight +10) / GameConfig.J_HEIGHT;
		this.bg.scaleX = cs;
		if (window.innerHeight > GameConfig.J_HEIGHT) {
			this.bg.scaleY = t1s;
		}
		else {
			this.bg.scaleY = t2s;
		}
		let w: number = GameConfig.WIDTH / GameConfig.HEIGHT > GameConfig.MAX_WIDTH / GameConfig.DES_HEIGHT ? GameConfig.MAX_WIDTH * cs : GameConfig.WIDTH;
        this.mainGroup.width=scaleX > scaleY ? w : GameConfig.DES_WIDTH * cs;      
		this.mainGroup.height=this.bg.scaleY*this.bg.height;
		this.contentBg.scaleX=this.contentBg.scaleY=this.mainGroup.width/GameConfig.MAX_WIDTH;
		this.contentBg.scaleX = this.contentBg.scaleX - 0.03;
		this.onScrollChange();
		this.onScrollBarChange();
		egret.updateAllScreens();
	}

	public onTab(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		core.UIManager.closeUI(core.UIConst.HelpUI);
		ui.mainGroup.visible = true;
	}

	public onScrollBarChange():void
	{
        let value:number=this.myScrollBar.value;
		console.log(value);
		this.scroll.setPerCent(100-value);
	}

	public onScrollChange():void
	{
		let p:number=100- this.scroll.getPerCent();
		this.myScrollBar.value=p;
	}
}