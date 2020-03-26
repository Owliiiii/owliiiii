class QieHuan extends eui.Component
 {	
	public an:eui.Group;
	public liang:eui.Group;
	public maskaa:eui.Image;
	public anYuan:eui.Image;
	public liangDiTu:eui.Image;
	public liangDiTuDis:eui.Image;
	public test:eui.Rect;



	public constructor() {
		super();
	}

	public childrenCreated(): void {
		super.childrenCreated();
		this.maskaa.visible = true;
		this.liangDiTu.mask = this.maskaa;
		
		this.liang.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{

			
			GameConfig.musicSected = false;
			egret.Tween.get(this.liang).to({x:-40},100);
			// this.liang.visible = false;
			// this.anYuan.visible = true;
			egret.Tween.get(this.liang).wait(100).call(()=>{
				this.liang.visible = false;
				this.anYuan.visible = true;
				// this.anYuan.x = 0;
			});
		},this);
		this.an.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
			GameConfig.musicSected = true;
			this.anYuan.visible = false;
			this.liang.visible = true;
			this.liang.x = -40;
			egret.Tween.get(this.liang).to({x:0},100);

		},this);
	}

	
}
