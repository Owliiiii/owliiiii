class SetUI extends core.BaseUI {

	public desbtn0: DesButton;
	public desbtn1: DesButton;
	public desbtn2: DesButton;
	public volueSlider: MyHslider;
	public mainGroup: eui.Group;

	public closeBtn: MouseButton;


	public constructor() {
		super();
		this.skinName = SetSkin;
	}

	public initDes(): void {

		this.desbtn0.text = '跳过介绍视频';
		this.desbtn1.text = '不再显示启动画面';
		this.desbtn2.text = '游戏声音';
		//	this.speedPlayBtn.btn.selected = GameConfig.speedPlay;
	}

	public onAdd(): void {
		super.onAdd();
		this.initDes();
		this.registerEvent(this.volueSlider, egret.Event.CHANGE, this.onVolueChange, this);
		this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.desbtn0.btn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.desbtn1.btn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.desbtn2.btn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.desbtn0.btn.selected = true;
		this.volueSlider.setVolues(SoundManager.getInstance().getEffectVolume() * 100);
		this.desbtn2.btn.selected = SoundManager.getInstance().getEffectVolume() > 0;
		this.alpha = 0;
		this.show();
	}

	public show(): void {
		egret.Tween.removeTweens(this);
		this.alpha = 0;
		this.mainGroup.scaleX = 1;
		this.mainGroup.scaleY = 1;
		egret.Tween.get(this).to({ alpha: 1 }, 200);
	}

	public hide(): void {
		egret.Tween.removeTweens(this);
		egret.Tween.get(this.mainGroup).to({ scaleX: 0, scaleY: 0 }, 100).call(() => {
			core.UIManager.closeUI(core.UIConst.SetUI);
		});
	}

	public onVolueChange(): void {
		let n: number = this.volueSlider.value / this.volueSlider.maximum;
		SoundManager.getInstance().setBgVolume(n);
		SoundManager.getInstance().setEffectVolume(n);
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.setBar.musicCheckBox.valume = n;
		this.desbtn2.btn.selected = n > 0;
	}


	public onTab(e: egret.TouchEvent): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		switch (e.currentTarget) {
			case this.closeBtn:
				//core.UIManager.closeUI(core.UIConst.SetUI);
				this.hide();
				//SoundManager.getInstance().playEffect(SoundConst.CHECKSTART);
				break;
			case this.desbtn0.btn://跳过介绍视频
				break;
			case this.desbtn1.btn://看不看启动画面
				break;
			case this.desbtn2.btn://声音
				let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
				if (!this.desbtn2.btn.selected) {
					SoundManager.getInstance().saveVolue();
					this.volueSlider.setVolues(0);
					SoundManager.getInstance().setBgVolume(0);
					SoundManager.getInstance().setEffectVolume(0);
					ui.setBar.musicCheckBox.valume = this.volueSlider.value;
					SoundManager.getInstance().close();
				}
				else {
					ui.setBar.musicCheckBox.valume = SoundManager.getInstance().lastVolume;
					SoundManager.getInstance().setBgVolume(SoundManager.getInstance().lastVolume);
					SoundManager.getInstance().setEffectVolume(SoundManager.getInstance().lastVolume);
					let n: number = SoundManager.getInstance().lastVolume * this.volueSlider.maximum;
					this.volueSlider.setVolues(n);
					SoundManager.getInstance().open();
				}
				break;
		}
	}

}