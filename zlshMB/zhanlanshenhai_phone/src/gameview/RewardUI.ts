class RewardUI extends core.BaseUI {
	public backBtn: eui.Button;
	public timeLabel:eui.Label;
	public sr:eui.Scroller;
	public constructor() {
		super();
		this.skinName = RewardSkin;
	}

	public onAdd(): void {
		super.onAdd();
		core.TimerManager.instance.addTick(1000, -1, this.onFrame, this);
		this.registerEvent(this.backBtn, egret.TouchEvent.TOUCH_TAP, () => {
			core.UIManager.closeUI(core.UIConst.RewardUI);
		}, this);
		core.UIManager.openUI(core.UIConst.NetUI, core.LayerManager.Layer_Tip);
		let ui: NetUI = core.UIManager.getUI(core.UIConst.NetUI);
		ui.showNomalNet();
		egret.setTimeout(() => {
			core.UIManager.closeUI(core.UIConst.NetUI);
			ui.hideNetting();
		}, this, 1000);
	}

	public onRemove(): void {
		super.onRemove();
		core.TimerManager.instance.removeTick(this.onFrame, this);
	}

	  /**
	 * 更新时间
	 */
	public onFrame(e: egret.Event): void {
		var crtTime = new Date();
		this.timeLabel.text = dateFtt("yyyy-MM-dd hh:mm:ss", crtTime) + ' '+GameConfig.CasinoGame.PlayerId;
	}
}