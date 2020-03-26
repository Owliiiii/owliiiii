class ShowItem extends eui.Component {
	public index: number = 0;
	public tGroup: eui.Group;
	public icons: eui.Image;
	public nameLabel: eui.Label;

	public data: any;

	private startpos: number;

	public constructor() {
		super();
		this.skinName = ShowItemSkin;
	}

	public childrenCreated(): void {
		super.childrenCreated();
		this.anchorOffsetX = 45;
		this.anchorOffsetY = 45;
		this.tGroup.scaleX = 0.84;
		this.tGroup.scaleY = 0.84;
		this.nameLabel.alpha = 0;
		this.tGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRollOver, this);
		this.tGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRollOut, this);
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
		this.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
		mouse.setButtonMode(this, true);
	}

	public tx: number = 0;
	public ty: number = 0;
	public onBegin(e: egret.TouchEvent): void {
		this.tx = e.stageX;
		this.ty = e.stageY;
	}

	public onEnd(e: egret.TouchEvent): void {
		if (Math.abs(e.stageX - this.tx) < 3 && Math.abs(e.stageY - this.ty) < 3) {
			window.open('http://www.baidu.com', '_blank', 'height=833, width=1215, top=0, left=0, toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no');
		}
	}

	public setData(data: any): void {
		this.data = data;
		this.nameLabel.text = data.name;
	}

	public goIndex(startpos: number = 0): void {
		this.startpos = startpos;
		egret.Tween.removeTweens(this);
		let posx: number = this.startpos + this.index * (TopList.WIDTH + TopList.DISTANCE) + TopList.WIDTH / 2;
		this.x = posx;
	}

	public goIndexAimation(startpos: number = 0): void {
		this.startpos = startpos;
		egret.Tween.removeTweens(this);
		let posx: number = this.startpos + this.index * (TopList.WIDTH + TopList.DISTANCE) + TopList.WIDTH / 2;
		egret.Tween.get(this).to({ x: posx }, 300);
	}

	public goIndexStep(step: number): void {
		this.startpos += step;
		egret.Tween.removeTweens(this);
		let posx: number = this.startpos + this.index * (TopList.WIDTH + TopList.DISTANCE) + TopList.WIDTH / 2;
		this.x = posx;
	}

	/**
	 * 左右移动 -1代表左移  1代表右
	 */
	public goAnimation(dir: number = -1): void {
		egret.Tween.removeTweens(this);
		let posx: number = this.startpos + this.index * (TopList.WIDTH + TopList.DISTANCE) + TopList.WIDTH / 2;
		let tposx: number = posx + dir * 2 * TopList.DISTANCE;
		egret.Tween.get(this).to({ x: tposx }, 200);
	}

	/**
	 * 回归
	 */

	public goBack(): void {
		egret.Tween.removeTweens(this);
		let posx: number = this.startpos + this.index * (TopList.WIDTH + TopList.DISTANCE) + TopList.WIDTH / 2;
		egret.Tween.get(this).to({ x: posx }, 300);
	}


	public onRollOver(): void {
		egret.Tween.removeTweens(this.tGroup);
		egret.Tween.removeTweens(this.nameLabel);
		egret.Tween.get(this.tGroup).to({ scaleX: 1, scaleY: 1 }, 300);
		egret.Tween.get(this.nameLabel).to({ alpha: 1 }, 300);
		this.dispatchEventWith('rollchangeover', false, this.index);
	}

	public onRollOut(): void {
		egret.Tween.removeTweens(this.tGroup);
		egret.Tween.removeTweens(this.nameLabel);
		egret.Tween.get(this.tGroup).to({ scaleX: 0.84, scaleY: 0.84 }, 300);
		egret.Tween.get(this.nameLabel).to({ alpha: 0 }, 300);
		this.dispatchEventWith('rollchangeout', false, this.index);
	}
}