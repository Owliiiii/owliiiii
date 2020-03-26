class SScroll extends eui.Scroller {
	public constructor() {
		super();
	}

	public childrenCreated(): void {
		super.childrenCreated();
		egret.MainContext.instance.stage.addEventListener(mouse.MouseEvent.MOUSE_WHEEL, this.onWhell, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onMove, this);
		this.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onMove, this);	
	}

	private onWhell(e: egret.TouchEvent): void {
		if (this.isScroll) {
			let d: number = e.data;
			if (d > 0) {
				if (this.viewport.scrollV >= 30) {
					this.viewport.scrollV -= 30;
				}
				else {
					this.viewport.scrollV = 0;
				}
			}
			else {
				if (this.viewport.scrollV <= this.viewport.contentHeight - this.viewport.height - 30) {
					this.viewport.scrollV += 30;
				}
				else {
					this.viewport.scrollV = this.viewport.contentHeight - this.viewport.height;
				}
			}

			this.dispatchEventWith(egret.Event.CHANGE);
		}
	}
   
	public setPerCent(p:number):void
	{
       let s:number=p/100;
	   this.viewport.scrollV=(this.viewport.contentHeight - this.viewport.height)*s;
	}

	public getPerCent():number
	{
		return Math.floor(this.viewport.scrollV/(this.viewport.contentHeight - this.viewport.height)*100);
	}

	public onMove(e: egret.TouchEvent): void {
		if (this.hitTestPoint(e.stageX, e.stageY)) {
			this.isScroll = true;
		}
		else {
			this.isScroll = false;
		}
	}

	public isScroll: boolean = false;
}