class DuanxianShowUi extends core.BaseUI {
	public constructor() {
		super();
		this.skinName = DuanxianSkin;
	}
	public allGroup: eui.Group;
	public img: eui.Image;
	public desLabel: eui.Label;
	public closeBtn: eui.Image;

	public canclecallfun: any;
	public bg:eui.Rect;


	public onAdd(): void {
		super.onAdd();
		egret.Tween.removeTweens(this.bg);
		egret.Tween.removeTweens(this.allGroup);
		egret.Tween.get(this.allGroup).to({ scaleX: 1, scaleY: 1 }, 100);
		egret.Tween.get(this.bg).to({ alpha: 0.5 }, 100);
		this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, () => {
			let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
			core.UIManager.closeUI(core.UIConst.DuanxianShowUi);
            GameManager.getInstance().startGame();
			// if (vo.GameData.initData) {
			// 	ui.judgeInit(vo.GameData.initData);
			// }
		}, this);
	}





















}