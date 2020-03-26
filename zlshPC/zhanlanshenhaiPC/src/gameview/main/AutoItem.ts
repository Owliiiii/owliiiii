class AutoItem extends eui.Component {
	public autoStopGroup: eui.Group;
	public autoCountLabel: eui.Label;
	public sopAutoBtn: MouseButton;
	public sMainGroup: eui.Group;
	public sGroup: eui.Group;
	public autoBtn: MouseButton;

	public autoText_mode:eui.Image;
	public autoText_an:eui.Image;

	public constructor() {
		super();
	}

	public childrenCreated(): void {
		super.childrenCreated();
		for (let i: number = 0; i < 5; i++) {
			let btn: MouseButton = this['btn' + i] as MouseButton;
			btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		}

		this.autoBtn.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onOver, this);
		this.sGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onOver, this);
		this.autoBtn.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onOut, this);
		this.sGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onOut, this);

		this.sopAutoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStop, this);
	}

	public onOver(): void {
		egret.Tween.removeTweens(this.sGroup);
		this.sMainGroup.visible = true;
		
		egret.Tween.get(this.sGroup).to({ y: 3 }, 500).call(()=>{
			for (let i: number = 0; i < 5; i++) {
				let img: eui.Image = this['anBg' + i] as eui.Image;
				img.visible = false;
			}
		});
		
	}

	public onOut(e: egret.TouchEvent): void {
		if (!this.sGroup.hitTestPoint(e.stageX, e.stageY) || !this.autoBtn.hitTestPoint(e.stageX, e.stageY)) {
			egret.Tween.removeTweens(this.sGroup);
			for (let i: number = 0; i < 5; i++) {
				let img: eui.Image = this['anBg' + i] as eui.Image;
				img.visible = true;
			}
			egret.Tween.get(this.sGroup).to({ y: 275 }, 300).call(()=>{
			
			});
		}
		if(this.sGroup.hitTestPoint(e.stageX, e.stageY)){
			for (let i: number = 0; i < 5; i++) {
				let img: eui.Image = this['anBg' + i] as eui.Image;
				img.visible = false;
			}
		}
	}
	public autoNum:number;
	public onTab(e: egret.TouchEvent): void {
		if (vo.GameData.balance < vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line) {
			for (let i: number = 0; i < 5; i++) {
					let img: eui.Image = this['anBg' + i] as eui.Image;
					img.visible = true;
				}
			egret.Tween.get(this.sGroup).to({ y: 275 }, 300).call(()=>{
				
			});
			GameManager.getInstance().noMoney();
			return;
		}
		switch (e.currentTarget) {
			case this['btn' + 0]:
				vo.GameData.autoPlayCount = 99;
				GameConfig.autoPlay = true;
				GameConfig.alwaysGame = false;
				GameConfig.lastCount = 99;
				this.autoNum = 99;
				break;
			case this['btn' + 1]:
				vo.GameData.autoPlayCount = 50;
				GameConfig.autoPlay = true;
				GameConfig.alwaysGame = false;
				GameConfig.lastCount = 50;
				this.autoNum = 50;
				break;
			case this['btn' + 2]:
				vo.GameData.autoPlayCount = 25;
				GameConfig.autoPlay = true;
				GameConfig.alwaysGame = false;
				GameConfig.lastCount = 25;
				this.autoNum = 25;
				break;
			case this['btn' + 3]:
				vo.GameData.autoPlayCount = 2;
				GameConfig.autoPlay = true;
				GameConfig.alwaysGame = false;
				GameConfig.lastCount = 2;
				this.autoNum = 2;
				break;
			case this['btn' + 4]:
				//直到游戏	
				console.log("直到游戏");
				vo.GameData.autoPlayCount = 9999;
				GameConfig.alwaysGame = true;
				GameConfig.autoPlay = true;
				GameConfig.lastCount = 9999;
				this.autoNum = 9999; 
				break;
		}
		SoundManager.getInstance().playEffect(SoundConst.AUTO_ON);
		this.autoBtn.visible = false;
		if(!this.autoBtn.visible){
			this.autoText_an.visible = false;
			this.autoText_mode.visible = false;
		}
		
		this.autoStopGroup.visible = true;
		this.sMainGroup.visible = false;
		GameManager.getInstance().startGame();
	}
	public resetDo():void{
		if(vo.GameData.balance < vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line){
			egret.Tween.get(this.sGroup).to({y:450},275).call(()=>{
				for(let i:number = 0;i < 5;i++){
					let img:eui.Image = this["anBg" + i] as eui.Image;
					img.visible = true;
				}
			})
			GameManager.getInstance().noMoney();  //提示金币不足
			return;
		}

		//判断剩余自动次数
		if(GameConfig.lastCount > 0){
			vo.GameData.autoPlayCount = GameConfig.lastCount;
		}else{
			GameConfig.lastCount = this.autoNum;
			vo.GameData.autoPlayCount = GameConfig.lastCount;
		}
		GameConfig.autoPlay = true;
		this.autoBtn.visible = false;
		this.autoText_an.visible = false;
		this.autoText_mode.visible = false;
		this.autoStopGroup.visible = true;
		this.sMainGroup.visible = false;
		// SoundManager.getInstance().playEffect(SoundConst.AUTOSTART1);
		GameManager.getInstance().startGame();
	}
	

	public onStop(): void {
		SoundManager.getInstance().playEffect(SoundConst.AUTO_OFF);
		GameConfig.lastCount = 0;
		this.autoStopGroup.visible = false;
		this.autoBtn.visible = true;
		if(this.autoBtn.visible){
			if (GameManager.getInstance().gameState == GameType.GameState.STOP){
				this.autoText_an.visible = false;
				this.autoText_mode.visible = true;
			}else{
				this.autoText_an.visible = true;
				this.autoText_mode.visible = false;
			}
		}else{
			this.autoText_an.visible = false;
			this.autoText_mode.visible = false;
		}
		
		vo.GameData.autoPlayCount=0;
		GameConfig.autoPlay=false;
		GameConfig.alwaysGame = false;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		if(GameManager.getInstance().gameState == GameType.GameState.STOP){
			
			ui.startBtn.visible = true;
			ui.stopBtn.visible = false;
			ui.updataText(false);
			if (vo.GameData.autoPlayCount <= 0) {
				ui.updataBtn();
				ui.infoBtn.enabled = true;
				ui.autoItem.autoBtn.enabled = true;
				ui.autoItem.autoText_mode.visible = true;
				ui.autoItem.autoText_an.visible = false;
				ui.speedOffBtn.enabled = true;
				ui.speedOnBtn.enabled = true;
				if(!GameConfig.speedPlay){	//没开快速
					if(!ui.speedOffBtn.enabled){
						ui.speedOffTxt.visible = false;
					}else{
						ui.speedOffTxt.visible = true;
					}
				}else{		//开快速
					if(!ui.speedOnBtn.enabled){
						ui.speedOnTxt.visible = false;
					}else{
						ui.speedOnTxt.visible = true;
					}
				}
				ui.topMask.visible = false;
				ui.setBar.enabled = true;
				ui.bottomMask.visible = false;
			}
		}else{
			
		}
	}


}