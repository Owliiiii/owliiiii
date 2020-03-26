class GameItem extends eui.ItemRenderer {
	public icons: eui.Image;
	public nameLabel: eui.Label;

	public constructor() {
		super();
		this.skinName = GameItemSkin;
	}

	public childrenCreated(): void {
		super.childrenCreated();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTab,this);

	}

	public dataChanged(): void {
		super.dataChanged();
		egret.ImageLoader.crossOrigin='anonymous';
		this.icons.source=this.data.icon;
		this.nameLabel.text=this.data.name;
		if(window.innerWidth>window.innerHeight)
		{
			this.currentState='hor';
		}
		else
		{
			this.currentState='ver';
		}
	}

	public onTab():void
	{
		window.location.href=this.data.href;
	}
}