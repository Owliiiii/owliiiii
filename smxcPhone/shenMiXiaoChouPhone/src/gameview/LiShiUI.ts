class LiShiUI extends eui.Component {

	public label1:eui.Label;
	public label2:eui.Label;
	public label3:eui.Label;
	public label4:eui.Label;
	public label5:eui.Label;
	public label6:eui.Label;
	public img1:eui.Image;
	public rect1:eui.Rect;


	public constructor(obj:any,isHaveNext:any) {
		super();
		this.skinName = LiShiSkin;
		if(window.innerWidth>window.innerHeight)
		{
			this.currentState='up';
			// this.width=1920;
		}
		else
		{
			this.currentState='down';
			// this.width=1080;
		}
		egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE,this.onEvent,this);
		this.init(obj,isHaveNext);
	}
	public onEvent():void
	{
		if(window.innerWidth>window.innerHeight)
		{
			this.currentState='up';
			// this.width=1920;
		}
		else
		{
			this.currentState='down';
			// this.width=1080;
		}
		
	}
	public init(obj:any,isHaveNext:any) {
		this.label1.text = obj["Date"];
        this.label2.text = obj["GameName"]+" Mobile";
		
		if(this.currentState == "down"){	//shu
			if(obj["ActionParameter"]["Bet"] >= 10){		//大于10两排显示否则一排  只有竖屏才这样
				this.label3.x = 367.43;
				this.label3.y = -1;
				this.label4.x = 367.7;
				this.label4.y = 24;
			}else{
				this.label3.x = 347.68;
				this.label3.y = 11;
				this.label4.x = 397.45;
				this.label4.y = 11;
			}
			if(obj["Value"]["TotalWin"] >= 10){		//大于10两排显示否则一排
				this.label5.x = 456.73;
				this.label5.y = -1;
				this.label6.x = 456.73;
				this.label6.y = 24;
			}else{
				this.label5.x = 456.73;
				this.label5.y = 11;
				this.label6.x = 504.46;
				this.label6.y = 11;
			}
		}
        this.label3.text = "CNY";
        this.label4.text = obj["ActionParameter"]["Bet"]+".00";
        this.label5.text = "CNY";
        this.label6.text = obj["Value"]["TotalWin"]+".00";
        this.rect1.visible = isHaveNext;
		
	}




}