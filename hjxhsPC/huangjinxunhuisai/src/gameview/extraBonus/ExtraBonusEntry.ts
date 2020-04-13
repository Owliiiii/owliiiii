class ExtraBonusEntry extends eui.Component {
	// public score: eui.Label;
	public tools1: eui.Image;
	public tools2: eui.Image;
	public tools3: eui.Image;
	public timeLabel: eui.Label;
	public toolsGroup: eui.Group;
	public optionUI: MakeOption;
	public selection: eui.Group;
	// public bonusGroup: eui.Group;
	// public bonusClip: BonusAnimation;

	public constructor() {
		super();
		this.skinName = ExtraBonusEntrySkin;
		// core.TimerManager.instance.addTick(1000, -1, this.onFrame, this);
		// core.LayerManager.getInstance().addEventListener(SetEvent.SET_OR_CHANGE, () => {
		// 	this.updataState();
		// }, this);
		GameManager.getInstance().addEventListener(SetEvent.EXTRA_BONUS_SHOWBONUS, this.onDataChanged, this);
		GameManager.getInstance().addEventListener(SetEvent.EXTRA_BONUS_OVER, this.onDataChanged, this)
	}
	public childrenCreated(): void {
		super.childrenCreated();
		
	}


	public judgeInit(type: number = 0) {
		if (!GameManager.getInstance().hasEventListener(SetEvent.TOOLS_SHOW)) {
			GameManager.getInstance().addEventListener(SetEvent.TOOLS_SHOW, this.onDataChanged, this);
		}
		// console.log('应该显示第几个===', type);
		this.toolsGroup.visible = true;
		this.setScore();
		this.hideORShowTools(type);
		if (type == 0) {
			this.optionUI.firstInit();
		} else if (type == 1) {
			this.optionUI.secondInit();
		} else if (type == 2) {
			this.optionUI.thirdInit();
		}
	}

	hideORShowTools(idx: number = 0) {
		for (let i = 0; i < this.selection.numChildren - 1; i++) {
			if (i < idx) {
				this['tools' + (i+1)].visible = true;
			} else {
				this['tools' + (i+1)].visible = false;
			}
		}
	}


	public setScore() {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.score.text = 'x' + GameManager.numberToCommonStr1(vo.GameData.balance);
	}

	public displayTools(data: any) {
		let img: eui.Image = this['tools' + data.num] as eui.Image;
		// console.log(data.num,img)  
		img.visible = true;
		if(data.num == 1){
			if(data.idx == 3){
				img.x = -29.79;
			}else{
				img.x = -56.79;
			}
		}
		if(data.num == 2){
			if(data.idx == 5){
				img.x = -64.2;
			}else{
				img.x = -31.2;
			}
		}
		img.source = data.num + '_' + data.idx + '_png';
		if (data.num == 3) {
			let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
			egret.setTimeout(() => {
				ui.bonusGroup.visible = true;
				this.toolsGroup.visible = false;
				ui.bonusClip.init();
			}, this, 300)
		}
	}

	public onDataChanged(e: SetEvent) {
		let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		switch (e.type) {
			case SetEvent.TOOLS_SHOW:
				console.log(e.data)
				this.displayTools(e.data);
				break;
			case SetEvent.EXTRA_BONUS_OVER:
				console.log('点击返回按钮之后');
				
				ui.bonusGroup.visible = false;
				ui.closeHongli();
				// this.toolsGroup.visible = true;
				break;
			case SetEvent.EXTRA_BONUS_SHOWBONUS:
				console.log('出现奖杯');
				ui.bonusGroup.visible = true;
				// ui.gameOver.visible = true;
				this.toolsGroup.visible = false;
				ui.gameOver.visible = true;
				ui.bonusMask.visible = true;
				break;
		}
	}

	/**
	* 更新时间
	*/
	public onFrame(e: egret.Event): void {
		var crtTime = new Date();
		// this.timeLabel.text =  dateFtt(" yyyy-MM-dd hh:mm:ss ", crtTime) + GameConfig.CasinoGame.PlayerId;
	}
}