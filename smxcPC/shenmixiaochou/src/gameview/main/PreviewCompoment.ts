class PreviewCompoment extends eui.Component {
	public cGroup: eui.Group;
	public masks: eui.Image;
	public r0: eui.RadioButton;
	public r1: eui.RadioButton;
	public lightImg: eui.Image;
	public btnMask: eui.Image;
	public selectedBtn: eui.ToggleButton;
	public nextBtn:MouseButton;


	public scroll: core.MyScorll;

	public constructor() {
		super();
		this.skinName = PreviewSkin;
	}

	public childrenCreated(): void {
		super.childrenCreated();
		// this.lightImg.pixelHitTest = true;
		this.cGroup.mask = this.masks;
		this.lightImg.mask = this.btnMask;
		this.lightImg.alpha = 0.9;
		// core.TimerManager.instance.addTick(80, -1, () => {
		// 	this.lightImg.x += 75;
		// 	if (this.lightImg.x >= 580) {		//每次频率
		// 		this.lightImg.x = -580;
		// 	}
		// }, this);
		let x = this.lightImg.x;
		this.lightImg.x = x - this.btnMask.width;;
		egret.Tween.get(this.lightImg).to({ x:x+this.btnMask.width+this.btnMask.width-250 }, 750);
		egret.setInterval( ()=> {
			this.lightImg.x = x - this.btnMask.width;;
			egret.Tween.get(this.lightImg).to({ x:x+this.btnMask.width+this.btnMask.width + 250 }, 750);
		}, this, 1400);

		this.scroll = new core.MyScorll(this.cGroup, ScoreItem1);
		this.scroll.setData([0, 1]);
		this.scroll.addEventListener(egret.Event.CHANGE, this.onChange, this);
		this.upDataIndex();
		this.selectedBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTab,this);
		this.nextBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTab,this);
		this.r0.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTab,this);
		this.r1.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTab,this);
	}

	public onChange(): void {
		this.upDataIndex();
	}

	public upDataIndex(): void {
		if (this.scroll.index == 0) {
			this.r0.selected=true;
		}
		else {
			this.r1.selected=true;
		}
	}
 
	public onTab(e:egret.TouchEvent):void
	{
          switch(e.currentTarget)
		  {
			  case this.selectedBtn:
              egret.localStorage.setItem('isShowlogin',this.selectedBtn.selected?'0':'1');
			  break;
			  case this.nextBtn:
			   let ui:MainScenceUI=core.UIManager.getUI(core.UIConst.MainScenceUI);
			   ui.showMain();
			  break;
			  case this.r0:
                this.scroll.setIndex2(0);
			  break;
			  case this.r1:
                 this.scroll.setIndex2(1);
			  break;
		  }
	}




}