class MyHslider extends eui.HSlider
 {
	public tsbar:eui.Image;
	public testBtn:eui.Image;
	public id:any;
	public constructor()
	 {
		 super();
	}

	public childrenCreated():void
	{
		
		this.tsbar.visible=false;
		this.addEventListener(egret.Event.CHANGE,()=>{
			 this.tsbar.width=this.value/this.maximum*293;
			 this.tsbar.visible=true;
			 console.log("this.value ==== " + this.value );
		},this);
		this.testBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,(evt:egret.TouchEvent)=>{
			 console.log("鼠标====" +  (evt.stageX-81-81-304));
			 this.thumb.x = evt.stageX-81-81-304;
		},this);
	}

	public updata():void
	{
		
		this.tsbar.width=this.value/this.maximum*293;
	}

	


}