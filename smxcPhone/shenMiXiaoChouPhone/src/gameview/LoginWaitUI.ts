class LoginWaitUI extends core.BaseUI {
	// public label: eui.Label;
	public constructor() {
		super();
		// this.onAdd();
		this.skinName = LoginWaitSkin;
		// egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE,this.onEvent,this);
	}

	public r0: eui.RadioButton;
	public r1: eui.RadioButton;

	public mianFei:eui.Image;
	public shengMi:eui.Image;
	public cGroup: eui.Group;
	public scroll: core.MyScorll;
	public masks: eui.Image;
	
	public not:eui.Image;
	public next2:eui.Image;
	public next1:eui.Image;
	public lightImg:eui.Image;
	public kk:eui.Image;
	public goIn:eui.Image;
	public mainkk:eui.Image;
	public mainkk0:eui.Image;
	public quan:eui.Image;


	public twee :any;
	public tweeNum = 1;


	public playIng = true;


	public oneZuoBiao = 0;

	public onAdd(): void {
		super.onAdd();
		
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.mainScenceInit();
		
		

		this.showTween();
		this.addTOUCH();
	}

	public onChange(): void {
		this.upDataIndex();
	}

	public upDataIndex(): void {
		if (this.scroll.index != 0) {
			this.r0.selected=true;
		}
		else {
			this.r1.selected=true;
		}
	}
	public addTOUCH(): void {
		this.cGroup.mask = this.masks;

		this.scroll = new core.MyScorll(this.cGroup, ScoreItem1);
		this.scroll.setData([0, 1]);
		this.scroll.addEventListener(egret.Event.CHANGE, this.onChange, this);
		this.upDataIndex();

		this.registerEvent(this.goIn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.not, egret.TouchEvent.TOUCH_TAP, this.onTab, this);

	
		
		this.r0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTab,this);
		this.r1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTab,this);
	}

	public begin(e: egret.TouchEvent): void {
		this.oneZuoBiao = e.stageX;
	}
	
	
	public onTab(e: egret.TouchEvent): void {
		switch (e.currentTarget) {
			case this.r0:
                this.scroll.setIndex2(1);
			  break;
			  case this.r1:
                 this.scroll.setIndex2(0);
			  break;
		
			case this.goIn://继续
				// this.showYouYiDong
				if(this.not.source =="xuanZhong_png"){
					egret.localStorage.setItem("not","false");
					
				}else{
					egret.localStorage.setItem("not","true");
				}
				let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
				ui.showMain();
				// ui.mainScenceInit();
				break;
			case this.not://不在显示
				if(this.not.source =="feature_preview_texture0_level1_02_png"){
					this.not.source ="xuanZhong_png";
				}else{
					this.not.source ="feature_preview_texture0_level1_02_png";
				}
				
				break;
		}
	}
	/**
	 * 展示页面动画
	 */
	public showTween(): void {
		this.lightImg.visible = true;
		this.kk.visible = true;
		this.lightImg.mask = this.kk;
		let x = this.lightImg.x;
		this.lightImg.x = x-this.kk.width;
		egret.Tween.get(this.lightImg).to({ x:x+this.kk.width+this.kk.width-250 }, 700);
		egret.setInterval( ()=> {
			this.lightImg.x = x-this.kk.width;
			egret.Tween.get(this.lightImg).to({ x:x+this.kk.width+this.kk.width + 250 }, 700);
		}, this, 1500);
		
		// this.mainkk.visible = true;
		// this.mainkk0.visible = true;
		// this.mianFei.mask = this.mainkk0;
		// this.shengMi.mask = this.mainkk;
		// this.shengMiWidth = this.shengMi.width*this.shengMi.scaleX ;
		// this.mianFeiWidth = this.mianFei.width*this.mianFei.scaleX ;
		// this.shengMi.x = this.shengMi.x+this.shengMiWidth ;
		// this.mianFei.x = this.mianFei.x;

		// this.shengMix = this.shengMi.x ;
		// this.mianFeix = this.mianFei.x ;

		// this.shengMi.x = 1192;
		// this.mianFei.x = 445;
		// this.moveTest();
		// this.moveTest1();


		
		// this.twee = egret.setInterval( ()=> {
		// 	if(this.tweeNum%2==1){
		// 		this.showZuoYiDong();
		// 	}else{
		// 		this.showYouYiDong();
		// 	}
		// }, this, 2000);
	}


	// public showZuoYiDong(): void {
	// 	if(this.playIng){
	// 		this.playIng = false;
	// 		// this.shengMix = this.shengMi.x ;
	// 		// this.mianFeix
	// 		egret.Tween.get(this.mianFei).to({ x:this.mianFeix-this.mianFeiWidth }, 500);
			
	// 		egret.Tween.get(this.shengMi).to({ x:this.shengMix-this.shengMiWidth}, 500).call(()=>{
	// 			this.tweeNum++;
	// 			this.playIng = true;
				
	// 		},this);
			
	// 	}	
		
	// }

	// public showYouYiDong(): void {
	// 	if(this.playIng){
	// 		this.playIng = false;
	// 		this.mianFei.x=this.shengMix ;
	// 		egret.Tween.get(this.mianFei).to({ x:this.mianFeix }, 500);
	// 		egret.Tween.get(this.shengMi).to({ x:this.shengMix-this.shengMiWidth-this.shengMiWidth }, 500).call(()=>{
	// 			this.tweeNum++;
	// 			this.playIng = true;
				
	// 			this.shengMi.x =this.shengMix ;
	// 		},this);
	// 	}
		
	// }
}