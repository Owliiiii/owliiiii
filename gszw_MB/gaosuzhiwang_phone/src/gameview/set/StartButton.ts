class StartButton extends eui.Component {
	private _select: boolean = false;
	public bg: eui.Image;
	public xuanImg: eui.Image;

	public constructor() {
		super();
		this.skinName = StartButtonSkin;
	}

	public childrenCreated(): void {
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
		this.setlected=false;
	}

	public onBegin(): void {
		egret.Tween.removeTweens(this);
		egret.Tween.get(this).to({ scaleX: 0.8, scaleY: 0.8 }, 200);
	}

	public onEnd(): void {
		egret.Tween.removeTweens(this);
		egret.Tween.get(this).to({ scaleX: 1, scaleY: 1 }, 200);
	}

	public set setlected(b: boolean) {
		this._select = b;
		this.bg.source = this._select == false ? 'btn_autogame_normal_png' : 'btn_autogame_normal_yellow_png';
		this.xuanImg.source = this._select == false ? 'btn_round_png' : 'btn_round_yellow_png';
	}


	public get setlected():boolean
	{
		return this._select;
	}




}