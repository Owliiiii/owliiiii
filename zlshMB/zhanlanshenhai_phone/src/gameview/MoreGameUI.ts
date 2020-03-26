class MoreGameUI extends core.BaseUI {
	public lists: eui.List;
	public scrolls: eui.Scroller;

	public r0: eui.RadioButton;
	public r1: eui.RadioButton;
	public radioGroup: eui.RadioButtonGroup;
	public hbackBtn: eui.Button;

	public bgRect: eui.Rect;

	public constructor() {
		super();
		this.skinName = MoreGameSkin;
	}
	public onAdd(): void {
		super.onAdd();
		this.registerEvent(this.hbackBtn, egret.TouchEvent.TOUCH_TAP, () => {
			core.UIManager.closeUI(core.UIConst.MoreGameUI);
		}, this);
		this.registerEvent(this.bgRect, egret.TouchEvent.TOUCH_TAP, () => {
			core.UIManager.closeUI(core.UIConst.MoreGameUI);
		}, this);
		this.init();
	}


	public updataHor(): void {
		this.onRadioChange();
	}

	public updataVer(): void {
		this.onRadioChange();

	}

	public init(): void {
		if (!this.radioGroup) {
			this.scrolls.viewport = this.lists;
			this.radioGroup = new eui.RadioButtonGroup();
			this.radioGroup.selectedValue = 0;
			this.r0.group = this.radioGroup;
			this.r1.group = this.radioGroup;
			this.r0.value = 0;
			this.r1.value = 1;
			this.radioGroup.addEventListener(egret.Event.CHANGE, this.onRadioChange, this);
			this.lists.itemRenderer = GameItem;
		}

		this.r0.selected = true;
		this.r1.selected = false;
		this.radioGroup.selection = this.r0;
		//this.onRadioChange();
	}



	public onRadioChange(): void {
		let config: any = RES.getRes('config_json');
		let arr: Array<any> = this.radioGroup.selectedValue == 1 ? config.h : config.n;
		this.lists.dataProvider = new eui.ArrayCollection(arr);
		if (this.currentState == 'hor') {
			console.log('a');
			(this.lists.layout as eui.HorizontalLayout).paddingLeft = arr.length >= 8? 0 : (GameConfig.WIDTH - 144 * arr.length - (10 * arr.length - 1)) / 2;
		}
		else {
			console.log('b');
			(this.lists.layout as eui.HorizontalLayout).paddingLeft = (GameConfig.WIDTH-144*3*1.2-65*2)/2;
			
		}
	}

	public onRemove(): void {
		super.onRemove();
	}
}