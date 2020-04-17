class SetUI extends core.BaseUI {
	public autoBtn: eui.ToggleButton;
	public emptyketBtn: eui.ToggleButton;
	public speedBtn: eui.ToggleButton;
	public musicBtn: eui.ToggleButton;
	public exitBtn: MouseButton;

	public setGroup: eui.Group;

	public constructor() {
		super();
		this.skinName = SetSkin;
		// let s: number = GameConfig.WIDTH / GameConfig.HEIGHT - GameConfig.DES_WIDTH / GameConfig.DES_HEIGHT;
		// this.setGroup.scaleX = 1 + s;
		// this.setGroup.scaleY = 1 + s;
	}

	public onAdd(): void {
		super.onAdd();
		this.registerEvent(this.autoBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.emptyketBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.speedBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.musicBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.exitBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this, egret.Event.ENTER_FRAME, this.onEnter, this);
		this.updata();
	}

	public onEnter():void
	{
		console.log("ENTER_FRAMEENTER_FRAMEENTER_FRAME");
		let s: number = GameConfig.WIDTH / GameConfig.HEIGHT - GameConfig.DES_WIDTH / GameConfig.DES_HEIGHT;
		this.setGroup.scaleX = 1 + s/1.5;
		this.setGroup.scaleY = 1 + s/1.5;
	}


	public updata(): void {
		this.autoBtn.selected = GameConfig.autoChangeBet;
		this.speedBtn.selected = GameConfig.speedPlay;
		this.musicBtn.selected = SoundManager.getInstance().effectOn;
		this.emptyketBtn.selected =GameConfig.emptyPlay;
	}
	public onTab(e: egret.TouchEvent): void {
		switch (e.currentTarget) {
			case this.musicBtn://声音开关
				this.updataSound();
				break;
			case this.autoBtn://自动调整投注开关
				GameConfig.autoChangeBet = this.autoBtn.selected;
				break;
			case this.speedBtn://快速开关
				this.updataSpeedTime();
				break;
			case this.emptyketBtn://空格启动开关
				this.updataEmpty();
				break;
			case this.exitBtn://退出开关
				core.UIManager.closeUI(core.UIConst.SetUI);
				GameManager.getInstance().resume();
				break;
		}
	}
    /**
	 * 更新快速
	 */
	public updataSpeedTime(): void {
		GameConfig.speedPlay = this.speedBtn.selected;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.shanBtn.selected = GameConfig.speedPlay;
	}

	/**
	 * 更新声音
	 */
	public updataSound(): void {
		SoundManager.getInstance().setBgOn(this.musicBtn.selected);
		SoundManager.getInstance().setEffectOn(this.musicBtn.selected);
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.musicBtn.selected = this.musicBtn.selected;
		if (!this.musicBtn.selected) {
			GameManager.getInstance().stopMusic();
		}
	}

	/**
	 * 更新空格启动旋转
	 */
	public updataEmpty(): void {
		GameConfig.emptyPlay = this.emptyketBtn.selected;
	}





}