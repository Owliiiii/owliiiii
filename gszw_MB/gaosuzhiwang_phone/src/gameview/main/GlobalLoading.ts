class GlobalLoading extends core.BaseUI {
	public loadingLabel: eui.Label;
	public sprite:egret.Sprite;
	public mainGroup:eui.Group;
public quanImg:eui.Image;



	public constructor() {
		super();
		this.skinName = GlobalLoadingSkin;
	}

	public onAdd(): void {
		super.onAdd();
		this.sprite=new egret.Sprite();
		this.sprite.width=this.mainGroup.width;
		this.sprite.height=this.mainGroup.height;
		this.mainGroup.addChild(this.sprite);
		this.setPross(0);
			console.log(this.sprite);
	}

	public setPross(n:number):void
	{
		this.loadingLabel.text=Math.ceil(n)+"%";
        let p:number=n/100;
	    let	endangle:number=-Math.PI/2+Math.PI*2*p;
		this.sprite.graphics.beginFill(0x000000);
        this.sprite.graphics.drawArc(this.mainGroup.width/2,this.mainGroup.height/2,this.mainGroup.width/2,-Math.PI/2,endangle);
		this.sprite.graphics.endFill();
		this.quanImg.mask=this.sprite;
	}


		public onOChange(): void {
			egret.clearTimeout(this.ts);
			let s: number = window.innerHeight / window.innerWidth;
			if (window.innerWidth >= window.innerHeight) {
				if (egret.Capabilities.os == 'iOS') {
					window['$']('#gamediv').css('height', window.innerHeight+1);
					window['$']('#gamediv').css('width', window.innerWidth+1);					
				}		
				this.currentState = 'hor';
				egret.MainContext.instance.stage.setContentSize(1334, 650);
			}
			else {
				if (egret.Capabilities.os == 'iOS') {
					window['$']('#gamediv').css('height', window.innerHeight+1);
					window['$']('#gamediv').css('width', window.innerWidth+1);
				}
				this.currentState = 'ver';
				egret.MainContext.instance.stage.setContentSize(750, 1100);

			}
			this.ts = egret.setTimeout(() => {
				this.onResize();
			}, this, 300);
		}


}