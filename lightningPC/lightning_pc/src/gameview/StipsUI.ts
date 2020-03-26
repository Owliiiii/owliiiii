class StipsUI extends core.BaseUI {
	//public icons: eui.Image;
	//public closeBtn: MouseButton;
	public desLabel: eui.Label;
	public titleLabel: eui.Label;
	public callfun: any;
	public okcallfun: any;
	public canclecallfun: any;

	public okBtn: MouseButton;
	public cancleBtn: MouseButton;
	public confirBtn: MouseButton;

	public mainGroup:eui.Group;
	public bg:eui.Rect;
	public img:eui.Image;
	/**1是自动停止,0为其他 */
	public type :number ;

	
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
			SoundManager.getInstance().playEffect(SoundConst.AUTOSTART);
			this.okcallfun && this.okcallfun();
		}, this);

		this.registerEvent(this.confirBtn, egret.TouchEvent.TOUCH_TAP, () => {
			//core.UIManager.closeUI(core.UIConst.StipsUI);
			SoundManager.getInstance().playEffect(SoundConst.AUTOSTART);
			this.okcallfun && this.okcallfun();
		}, this);

		this.registerEvent(this.cancleBtn, egret.TouchEvent.TOUCH_TAP, () => {
			core.UIManager.closeUI(core.UIConst.StipsUI);
			SoundManager.getInstance().playEffect(SoundConst.AUTOSTART);
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

	public showHasBtn(type: number, title: string = '', des: string = '', okcallfun: any = null, canclecallfun: any = null): void {
		this.type = type;
		this.titleLabel.text = title;
		this.titleLabel.visible=false;
		this.desLabel.visible=true;
		this.desLabel.text = des;
		this.okcallfun = okcallfun;
		this.canclecallfun = canclecallfun;
		this.okBtn.visible = this.cancleBtn.visible = true;
		this.confirBtn.visible = false;
		this.img.height=70+this.desLabel.textHeight+150;
		egret.Tween.removeTweens(this.bg);
        egret.Tween.removeTweens(this.mainGroup);
		egret.Tween.get(this.mainGroup).to({scaleX:1,scaleY:1},100);
		egret.Tween.get(this.bg).to({alpha:1},100);
	}

	public showConfirBtn(title: string,confirfun:any): void {
		this.titleLabel.text = title;
		this.desLabel.visible = false;
		this.titleLabel.visible=true;
		this.okcallfun = confirfun;
		this.okBtn.visible = this.cancleBtn.visible = false;
		this.confirBtn.visible=true;
		this.titleLabel.textHeight;
		this.img.height=70+this.titleLabel.textHeight+150;
		egret.Tween.removeTweens(this.bg);
        egret.Tween.removeTweens(this.mainGroup);
		egret.Tween.get(this.mainGroup).to({scaleX:1,scaleY:1},100);
		egret.Tween.get(this.bg).to({alpha:1},100);
	}
	public hide():void
	{   
		egret.Tween.removeTweens(this.bg);
        egret.Tween.removeTweens(this.mainGroup);
		egret.Tween.get(this.mainGroup).to({scaleX:0,scaleY:0},100);
		egret.Tween.get(this.bg).to({alpha:0},100).call(()=>{
		   core.UIManager.closeUI(core.UIConst.StipsUI);
		});
	}
}