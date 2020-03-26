class LiShiItem extends eui.ItemRenderer {

    public winLine:eui.Label;
    public icon1:eui.Image;
	public icon2:eui.Image;
	public icon3:eui.Image;
	public icon4:eui.Image;
	public icon5:eui.Image;
	public icon6:eui.Image;
	public icon7:eui.Image;
	public icon8:eui.Image;
	public icon9:eui.Image;
	
	public constructor() {
		super();
		this.onEvent();
		egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE,this.onEvent,this);
	}

	public childrenCreated():void
	{
		super.childrenCreated();
		
	
	}
		public onEvent():void
	{
		if(window.innerWidth>window.innerHeight)
		{
			this.currentState='u';
			// this.width=1920;
		}
		else
		{
			this.currentState='d';
			// this.width=1080;
		}
		
	}


	public dataChanged(): void {
		super.dataChanged();
        let obj:any = this.data;
		// console.log("第几个 === " + this.itemIndex);
        this.winLine.text = "Player won CNY" + obj.Win.toFixed(2) + " at line" + obj.Data.Line;
		if(this.itemIndex == 0){
			this.icon4.source = 'bicon_' + obj.Symbol + '_0_png';
			this.icon5.source = 'bicon_' + obj.Symbol + '_0_png';
			this.icon6.source = 'bicon_' + obj.Symbol + '_0_png';
		}
		if(this.itemIndex == 1){
			this.icon1.source = 'bicon_' + obj.Symbol + '_0_png';
			this.icon2.source = 'bicon_' + obj.Symbol + '_0_png';
			this.icon3.source = 'bicon_' + obj.Symbol + '_0_png';
		}
	}


	public onTab(e:egret.TouchEvent):void
	{
		
	}
}