class HelpUI extends core.BaseUI {
	public bg: eui.Image;
	public closeBtn: MouseButton;
	public scroll: SScroll;
	public contentBg: eui.Image;
	public mainGroup: eui.Group;
	public myScrollBar: MyScrollBar;
	public constructor() {
		super();
		this.skinName = HelpSkin;
	}

	public onAdd(): void {
		super.onAdd();
		this.onResize();
		this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.myScrollBar, egret.Event.CHANGE, this.onScrollBarChange, this);
		this.registerEvent(this.scroll, egret.Event.CHANGE, this.onScrollChange, this);
		//this.scroll.verticalScrollBar=new MyScrollBar();
		this.visible = false;
		NetUI.getInstance().showNetting();
		egret.setTimeout(() => {
			NetUI.getInstance().hideNetting();
			this.visible = true;
		}, this, 400);
	}

	public onResize(): void {
		//this.closeBtn.scaleX = this.closeBtn.scaleY = 1 / window.devicePixelRatio;
		var scaleX = (window.innerWidth / GameConfig.DES_WIDTH) || 0;
		var scaleY = (window.innerHeight > GameConfig.J_HEIGHT ? GameConfig.J_HEIGHT / GameConfig.DES_HEIGHT : window.innerHeight / GameConfig.DES_HEIGHT) || 0;
		let maxh: number = window.innerHeight - GameConfig.J_HEIGHT;
		let cs: number = scaleX > scaleY ? scaleY : scaleX;

		this.bg.scaleX = 1;//window.innerWidth / GameConfig.DES_WIDTH;
		if (window.innerHeight > GameConfig.J_HEIGHT) {
			let t1s = (GameConfig.J_HEIGHT - 55) / GameConfig.J_HEIGHT;
			this.bg.scaleY = t1s;
		}
		else {

			let t2s = (window.innerHeight - 55) / GameConfig.J_HEIGHT;
			this.bg.scaleY = t2s;
		}

		// egret.clearTimeout(this.clet);
		// this.clet = egret.setTimeout(() => {
		// 	this.bg.source = window.innerWidth  == 1215&&window.innerHeight==833 ? 'BG_1x_png' : 'BG_1_png';
		// }, this, 100);
		let w: number = GameConfig.WIDTH / GameConfig.HEIGHT > GameConfig.MAX_WIDTH / GameConfig.DES_HEIGHT ? GameConfig.MAX_WIDTH * cs : GameConfig.WIDTH;
		this.mainGroup.width = (window.innerWidth < GameConfig.MAX_WIDTH ? window.innerWidth : GameConfig.MAX_WIDTH);
		if (window.innerWidth < 768) {
			this.mainGroup.width = 768;
			this.mainGroup.horizontalCenter = undefined;
			this.mainGroup.left = 0;
		}
		else {
			this.mainGroup.horizontalCenter = 0;
			this.mainGroup.left = undefined;
		}
		this.mainGroup.height = this.bg.scaleY * this.bg.height;
		this.contentBg.scaleX = this.contentBg.scaleY = this.mainGroup.width / GameConfig.MAX_WIDTH;

		//this.onScrollChange();
		this.onScrollBarChange();
		egret.updateAllScreens();

		if (window.innerHeight <= 500 / window.devicePixelRatio) {
			this.bg.scaleY = window.innerHeight / this.bg.height + 0.2;
		}
	}

	public onTab(): void {
		core.UIManager.closeUI(core.UIConst.HelpUI);
		// SoundManager.getInstance().setBgOn(true);		//打开音效和音乐
		// SoundManager.getInstance().setEffectOn(true);
		if (GameConfig.isMusic) {
			SoundManager.getInstance().setBgVolume(1);
			SoundManager.getInstance().setEffectVolume(1);
		}
	}

	public onScrollBarChange(): void {
		let value: number = this.myScrollBar.value;
		this.scroll.setPerCent(100 - value);
		this.scroll.viewport.scrollV = (this.contentBg.scaleY * this.contentBg.height - this.scroll.viewport.height) / 100 * (100 - value);
	}

	public onScrollChange(): void {
		let p: number = 100 - this.scroll.getPerCent();
		this.myScrollBar.value = p > 0 ? p : 0;

	}
}