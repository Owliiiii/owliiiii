class StipsUI extends core.BaseUI {
	public autoGroup: eui.Group;
	public autoImg: eui.Image;
	public titleLabel: eui.Label;
	public okBtn: MouseButton;
	public cancleBtn: MouseButton;
	public allGroup: eui.Group;
	public img: eui.Image;
	public desLabel: eui.Label;
	public confirBtn: MouseButton;



	public callfun: any;
	public okcallfun: any;
	public canclecallfun: any;


	public mainGroup: eui.Group;
	public bg: eui.Rect;

	public constructor() {
		super();
		this.skinName = StipSkin;
	}

	public onAdd(): void {
		super.onAdd();
		// this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, () => {
		// 	core.UIManager.closeUI(core.UIConst.StipsUI);
		// 	this.callfun && this.callfun();
		// }, this);

		this.registerEvent(this.okBtn, egret.TouchEvent.TOUCH_TAP, () => {
			core.UIManager.closeUI(core.UIConst.StipsUI);
			//SoundManager.getInstance().playEffect(SoundConst.AUTOSTART);
			this.okcallfun && this.okcallfun();
		}, this);

		this.registerEvent(this.confirBtn, egret.TouchEvent.TOUCH_TAP, () => {
			//core.UIManager.closeUI(core.UIConst.StipsUI);
			//SoundManager.getInstance().playEffect(SoundConst.AUTOSTART);
			this.okcallfun && this.okcallfun();
		}, this);

		this.registerEvent(this.cancleBtn, egret.TouchEvent.TOUCH_TAP, () => {
			core.UIManager.closeUI(core.UIConst.StipsUI);
			//SoundManager.getInstance().playEffect(SoundConst.AUTOSTART);
			this.canclecallfun && this.canclecallfun();
		}, this);
	}

	public onRemove(): void {
		super.onRemove();
	}

	public shows(type: any, title: string = '', des: string = '', callfun: any = null): void {
		this.titleLabel.text = title;
		this.desLabel.text = des;
		this.callfun = callfun;
		//this.icons.source = type == 1 ? 'oktip_png' : 'errortip_png';
		this.okBtn.visible = this.cancleBtn.visible = false;
		//this.closeBtn.visible = true;
	}

	/**
	 * 展示自动次数
	 */
	public showAutoBtn(type: any, des: string = '', okcallfun: any = null, canclecallfun: any = null): void {
		this.autoGroup.visible = true;
		this.allGroup.visible = false;
		this.titleLabel.text = des;
		this.okcallfun = okcallfun;
		this.canclecallfun = canclecallfun;
		this.okBtn.visible = this.cancleBtn.visible = true;
		this.confirBtn.visible = false;
		egret.Tween.removeTweens(this.bg);
		egret.Tween.removeTweens(this.autoGroup);
		egret.Tween.get(this.autoGroup).to({ scaleX: 1, scaleY: 1 }, 100);
		egret.Tween.get(this.bg).to({ alpha: 0.6 }, 100);
	}


	/**
	 * 展示余额不足
	 */
	public showNotmoney(type: any, des: string = '', okcallfun: any = null, canclecallfun: any = null): void {
		this.autoGroup.visible = true;
		this.allGroup.visible = false;
		this.titleLabel.text = des;
		this.okcallfun = okcallfun;
		this.canclecallfun = canclecallfun;
		this.okBtn.visible = this.cancleBtn.visible = true;
		this.confirBtn.visible = false;
		egret.Tween.removeTweens(this.bg);
		egret.Tween.removeTweens(this.autoGroup);
		egret.Tween.get(this.autoGroup).to({ scaleX: 1, scaleY: 1 }, 100);
		egret.Tween.get(this.bg).to({ alpha: 0.6 }, 100);
	}


	/**
	 * 展示其他
	 */
	public showConfirBtn(des: string, confirfun: any): void {
		this.autoGroup.visible = false;
		this.allGroup.visible = true;
		this.desLabel.text = des;
		this.okcallfun = confirfun;
		this.okBtn.visible = this.cancleBtn.visible = false;
		this.confirBtn.visible = true;
		this.img.height = 70 + this.desLabel.textHeight + 150;
		egret.Tween.removeTweens(this.bg);
		egret.Tween.removeTweens(this.allGroup);
		egret.Tween.get(this.allGroup).to({ scaleX: 1, scaleY: 1 }, 100);
		egret.Tween.get(this.bg).to({ alpha: 0.6 }, 100);
		
	}

	/**
	 * 展示断开连接
	 */
	public showNetclose(des: string, confirfun: any): void {
		this.autoGroup.visible = false;
		this.allGroup.visible = true;
		this.desLabel.text = des;
		this.okcallfun = confirfun;
		this.okBtn.visible = this.cancleBtn.visible = false;
		this.confirBtn.visible = true;
		this.img.height = 70 + this.desLabel.textHeight + 150;
		egret.Tween.removeTweens(this.bg);
		egret.Tween.removeTweens(this.allGroup);
		egret.Tween.get(this.allGroup).to({ scaleX: 1, scaleY: 1 }, 100);
		egret.Tween.get(this.bg).to({ alpha: 0.92 }, 100);
	}



	public hide(): void {
		egret.Tween.removeTweens(this.bg);
		egret.Tween.removeTweens(this.allGroup);
		egret.Tween.removeTweens(this.autoGroup);
		egret.Tween.get(this.allGroup).to({ scaleX: 0, scaleY: 0 }, 100);
		egret.Tween.get(this.autoGroup).to({ scaleX: 0, scaleY: 0 }, 100);
		egret.Tween.get(this.bg).to({ alpha: 0 }, 100).call(() => {
			core.UIManager.closeUI(core.UIConst.StipsUI);
		});
	}
}