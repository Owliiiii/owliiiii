
class SetUI extends eui.Component {
	public timeLabel: eui.Label;
	public mcGroup: eui.Group;
	public rewardMc: egret.MovieClip;
	public lightBG: eui.Image;

	public betSetCompoment: BetSetCompoment;
	public autoSetCompoment: AutoSetCompoment;

	public btnGroup: eui.Group;
	public maskRect: eui.Rect;
	public topGroup: eui.Group;
	public scrolls: eui.Scroller;


	public setBtn: eui.Button;
	public moreBtn: eui.Button;
	public betBtn: eui.ToggleButton;



	public rightGroup: eui.Group;
	public gameButton: eui.Button;
	public backButton: eui.Button;

	public homeBtn: eui.Button;
	public crashBtn: eui.Button;
	public moresBtn: eui.Button;
	public historyBtn: eui.Button;
	public surpotBtn: eui.Button;
	public rewardBtn: eui.Button;
	public helpBtn: eui.Button;
	public musicCheck: eui.CheckBox;
	public modleCheckButton: eui.CheckBox;
	public exitBtn: eui.Button;

	public controllGroup: eui.Group;
	public startButton: StartButton;
	public autoButton: AutoStartBtn;

	public qukcheckBtn: CheckButton;
	public qukGroup: eui.Group;

	public betLabel: eui.Label;
	public lineLabel: eui.Label;


	public totalBet: eui.Label;
	public balanceLabel: eui.Label;

	public rewardGroup: eui.Group;
	public rewardLabel: eui.Label;

	public rewradMaxGroup: eui.Group;
	public rewardMaxLabel: eui.Label;

	public tipLabel: eui.Label;
	public bottomBg: eui.Image;
	public bottomGroup: eui.Group;

	public constructor() {
		super();
		this.skinName = SetUISkin;
	}

	public childrenCreated(): void {
		super.childrenCreated();
		this.musicCheck.selected = SoundManager.getInstance().effectOn;
		this.setBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.maskRect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.moreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.gameButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.betBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.betSetCompoment.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.autoSetCompoment.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.qukcheckBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);

		this.homeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.crashBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.moresBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.historyBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.surpotBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.rewardBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.helpBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.musicCheck.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.modleCheckButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.exitBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		//this.toptGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.btnGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		core.TimerManager.instance.addTick(1000, -1, this.onFrame, this);
		this.startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.autoButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		GameManager.getInstance().addEventListener(SetEvent.SET_AUTO_CHANGED, this.onDataChanged, this);
		GameManager.getInstance().addEventListener(SetEvent.SET_SPEED_CHANGED, this.onDataChanged, this);
		GameManager.getInstance().addEventListener(SetEvent.SET_BET_CHANGE, this.onDataChanged, this);
		GameManager.getInstance().addEventListener(SetEvent.SET_LINE_CHANGE, this.onDataChanged, this);
		GameManager.getInstance().addEventListener(SetEvent.SET_BALANCE_CHANGE, this.onDataChanged, this);
		GameManager.getInstance().addEventListener(SetEvent.SET_MUSIC_CHANGE, this.onDataChanged, this);
		this.autoSetCompoment.addEventListener(SetEvent.SET_STATE_CHANGE, this.onStateChange, this);
		this.betSetCompoment.addEventListener(SetEvent.SET_STATE_CHANGE, this.onStateChange, this);

		GameManager.getInstance().addEventListener(SetEvent.SET_MODLE, this.onModleChange, this);
		core.MyUIUtils.addLongTouch(this.startButton, () => {
			SoundManager.getInstance().playEffect(SoundConst.BUTTON);
			SetConst.LONG_TOUCH = true;
			SetConst.AUTO_SHOW = true;
			this.startButton.visible = false;
			this.autoButton.visible = true;
			this.autoButton.isPlay = false;
			this.autoSetCompoment.goUpdata();
			SetConst.BETSET_SHOW = false;
			this.betSetCompoment.goUpdata();
			this.updataBtnState();
			this.betBtn.enabled = this.qukcheckBtn.enabled = !SetConst.AUTO_SHOW;
			GameManager.getInstance().dispatchEventWith(SetEvent.SET_HIDE_REWARD);
		}, () => {
			egret.callLater(() => {
				SetConst.LONG_TOUCH = false;
			}, this);
		});

		this.rewradMaxGroup.visible = false;
	}

	public updataHor(): void {
		this.updataSame();
		let gap: number = (GameConfig.WIDTH - 635 - 60) / 8;
		(this.btnGroup.layout as eui.HorizontalLayout).gap = gap;
		(this.btnGroup.layout as eui.HorizontalLayout).paddingLeft = 30;
	}

	public updataVer(): void {
		let gap: number = (GameConfig.WIDTH - 60 - 5 * 64 - 16) / 4;
		(this.btnGroup.layout as eui.HorizontalLayout).gap = gap;
		this.updataSame();
	}

	public updataSame(): void {
		egret.Tween.removeTweens(this.bottomGroup);
		this.bottomChange();
		this.rewardGroup.visible = SetConst.REWARD_SMALLSHOW;
		this.bottomGroup.y = GameConfig.HEIGHT - this.bottomGroup.height;
		this.topGroup.y = SetConst.TOP_SHOW ? 0 : -230;
		this.rightGroup.x = SetConst.RIGHT_SHOW ? 0 : 200;
		this.maskRect.visible = SetConst.TOP_SHOW || SetConst.RIGHT_SHOW;
		this.scrolls.viewport.scrollH = 0;
		this.betSetCompoment.updata();
		this.autoSetCompoment.updata();
		this.updataControllGroup();
		this.updataBtnState();
		this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
		this.totalBet.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line);
		this.lineLabel.text = vo.GameData.line + '';
		this.balanceLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.balance);
		this.betBtn.selected = SetConst.BETSET_SHOW;
		if (this.currentState == 'ver') {
			this.betBtn.visible = this.qukGroup.visible = SetConst.AUTO ? false : true;
		}
		else {
			this.betBtn.visible = this.qukGroup.visible = false;
		}
	}
	public btnBg: eui.Image;
	public toptGroup: eui.Group;


	public onTab(e: egret.TouchEvent): void {
		switch (e.currentTarget) {
			// case this.toptGroup:
			// 	e.stopPropagation();
			// 	e.stopImmediatePropagation();
			// 	break;
			case this.btnGroup:
				e.stopPropagation();
				e.stopImmediatePropagation();
				break;
			case this.setBtn:
				e.stopPropagation();
				e.stopImmediatePropagation();
				egret.Tween.get(this.topGroup).to({ y: 0 }, 500, egret.Ease.backOut);
				this.maskRect.visible = true;
				SetConst.TOP_SHOW = true;
				break;
			case this.maskRect:
				e.stopPropagation();
				e.stopImmediatePropagation();
				this.maskRect.visible = false;
				egret.Tween.get(this.topGroup).to({ y: -230 }, 500, egret.Ease.backIn);
				egret.Tween.get(this.rightGroup).to({ x: 200 }, 200);
				SetConst.TOP_SHOW = false;
				SetConst.RIGHT_SHOW = false;
				break;
			case this.moresBtn:
				e.stopPropagation();
				e.stopImmediatePropagation();
				core.UIManager.openUI(core.UIConst.MoreGameUI, core.LayerManager.Layer_Top);
				this.maskRect.visible = false;
				egret.Tween.get(this.topGroup).to({ y: -230 }, 500, egret.Ease.backIn);
				egret.Tween.get(this.rightGroup).to({ x: 200 }, 200);
				SetConst.TOP_SHOW = false;
				SetConst.RIGHT_SHOW = false;

				break;
			case this.backButton:
				this.maskRect.visible = false;
				SetConst.RIGHT_SHOW = false;
				egret.Tween.get(this.rightGroup).to({ x: 200 }, 200);
				break;
			case this.gameButton:
				this.maskRect.visible = false;
				SetConst.RIGHT_SHOW = false;
				egret.Tween.get(this.rightGroup).to({ x: 200 }, 200);
				core.UIManager.openUI(core.UIConst.MoreGameUI, core.LayerManager.Layer_Top);
				break;
			case this.betBtn:
				e.stopImmediatePropagation();
				SoundManager.getInstance().playEffect(SoundConst.BUTTON);
				SetConst.BETSET_SHOW = !SetConst.BETSET_SHOW;
				SetConst.AUTO_SHOW = false;
				this.betSetCompoment.goUpdata();
				this.autoSetCompoment.goUpdata();
				this.betBtn.selected = SetConst.BETSET_SHOW;
				GameManager.getInstance().dispatchEventWith(SetEvent.SET_HIDE_REWARD);
				//this.betBtn.enabled = this.qukcheckBtn.enabled = !SetConst.BETSET_SHOW;
				this.autoButton.visible = false;
				this.startButton.visible = true;

				break;
			case this.stage:
			if(e.target==this.btnGroup) return;
				if (SetConst.BETSET_SHOW || SetConst.AUTO_SHOW) {
					SoundManager.getInstance().playEffect(SoundConst.BUTTON);
				}
				SetConst.BETSET_SHOW = false;
				SetConst.AUTO_SHOW = false;
				this.betSetCompoment.goUpdata();
				this.autoSetCompoment.goUpdata();
				this.betBtn.selected = SetConst.BETSET_SHOW;
				this.updataBtnState();
				if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
					this.betBtn.enabled = this.qukcheckBtn.enabled = !SetConst.BETSET_SHOW;
				}
				break;
			case this.modleCheckButton:
				e.stopPropagation();
				e.stopImmediatePropagation();
				SetConst.MODLE = this.modleCheckButton.selected ? 1 : 0;
				GameManager.getInstance().dispatchEventWith(SetEvent.SET_MODLE);
				break;
			case this.startButton:
				e.stopPropagation();
				e.stopImmediatePropagation();
				this.betBtn.selected = false;
				SoundManager.getInstance().playEffect(SoundConst.BUTTON);
				egret.Tween.removeTweens(this.tipLabel);
				if (SetConst.LONG_TOUCH) return;
				GameManager.getInstance().dispatchEventWith(SetEvent.SET_START);
				break;
			case this.autoButton:
				e.stopPropagation();
				e.stopImmediatePropagation();
				SoundManager.getInstance().playEffect(SoundConst.BUTTON);
				if (this.autoButton.isPlay) {
					SetConst.AUTO_COUNT = 0;
					SetConst.AUTO = false;
					SetConst.handStop = true;
					this.autoButton.visible = false;
					this.betBtn.visible = true;
					this.qukGroup.visible = true;
					if (this.isautoShow != SetConst.AUTO) {
						this.isautoShow = SetConst.AUTO;
						this.bottomAutoGoUpdata();
					}
					if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
						this.updataBtnState();
						this.autoButton.isPlay = false;
					}
				}
				else {
					SetConst.handStop = false;
					SetConst.AUTO_COUNT = SetConst.AUTO_COUNT_ARR[this.autoSetCompoment.mySlider.value];
					SetConst.AUTO = true;
					GameManager.getInstance().dispatchEventWith(SetEvent.SET_START, false, 1);
					egret.Tween.removeTweens(this.tipLabel);
				}
				break;
			case this.autoSetCompoment:
				e.stopPropagation();
				e.stopImmediatePropagation();
				break;
			case this.rewardBtn:
				e.stopPropagation();
				e.stopImmediatePropagation();
				core.UIManager.openUI(core.UIConst.RewardUI, core.LayerManager.Layer_Top);
				this.maskRect.visible = false;
				egret.Tween.get(this.topGroup).to({ y: -230 }, 500, egret.Ease.backIn);
				egret.Tween.get(this.rightGroup).to({ x: 200 }, 200);
				SetConst.TOP_SHOW = false;
				SetConst.RIGHT_SHOW = false;
				break;
			case this.helpBtn:
				e.stopPropagation();
				e.stopImmediatePropagation();
				core.UIManager.openUI(core.UIConst.HelpUI, core.LayerManager.Layer_Top);
				this.maskRect.visible = false;
				egret.Tween.get(this.topGroup).to({ y: -230 }, 500, egret.Ease.backIn);
				egret.Tween.get(this.rightGroup).to({ x: 200 }, 200);
				SetConst.TOP_SHOW = false;
				SetConst.RIGHT_SHOW = false;
				break;
			case this.homeBtn:
				window.location.href = window['dataUrl'].homePath;
				break;
			case this.crashBtn:
				window.location.href = window['dataUrl'].crashPath;
				break;
			case this.historyBtn:
				window.location.href = window['dataUrl'].historyPath;
				break;
			case this.surpotBtn:
				window.location.href = window['dataUrl'].suportPath;
				break;
			case this.musicCheck:
				e.stopPropagation();
				e.stopImmediatePropagation();
				SoundManager.getInstance().setBgOn(this.musicCheck.selected);
				SoundManager.getInstance().setEffectOn(this.musicCheck.selected);
				GameManager.getInstance().dispatchEventWith(SetEvent.SET_MUSIC_CHANGE);
				break;
			case this.exitBtn:
				window.location.href = window['dataUrl'].exitPath;
				break;
			case this.qukcheckBtn:
				e.stopPropagation();
				e.stopImmediatePropagation();
				SoundManager.getInstance().playEffect(SoundConst.SPEED_ON);
				SetConst.SPEED_PLAY = this.qukcheckBtn.selected;
				GameManager.getInstance().dispatchEventWith(SetEvent.SET_SPEED_CHANGED);
				break;
		}
	}


	public popBet(): void {
		SetConst.BETSET_SHOW = true;
		SetConst.AUTO_SHOW = false;
		this.betSetCompoment.goUpdata();
		this.autoSetCompoment.goUpdata();
		this.betBtn.selected = SetConst.BETSET_SHOW;
	}


	public onModleChange(): void {
		this.updataControllGroup();
	}

	public onStateChange(e: SetEvent): void {
		switch (e.currentTarget) {
			case this.autoSetCompoment:
				SetConst.BETSET_SHOW = false;
				this.betSetCompoment.goUpdata();
				this.betBtn.selected = SetConst.BETSET_SHOW;
				this.updataBtnState();
				break;
			case this.betSetCompoment:
				SetConst.AUTO_SHOW = false;
				this.autoSetCompoment.goUpdata();
				this.updataBtnState();
				break;
		}
	}


	public updataBtnState(): void {
		if (SetConst.AUTO || SetConst.AUTO_SHOW) {
			this.startButton.visible = false;
			this.autoButton.visible = true;
			this.autoButton.scaleX = 1;
			this.autoButton.scaleY = 1;
		}
		else {
			this.startButton.visible = true;
			this.startButton.scaleX = 1;
			this.startButton.scaleY = 1;
			this.autoButton.visible = false;
		}

		if (GameManager.getInstance().gameState == GameType.GameState.PLAYING && SetConst.AUTO == false) {
			this.startButton.visible = false;
		}
		this.startButton.setlected = SetConst.SPEED_PLAY;
	}

	public updataControllGroup(): void {
		if (window.innerWidth > window.innerWidth) {
			this.controllGroup.x = SetConst.MODLE == 0 ? GameConfig.WIDTH - this.controllGroup.width + 30 : -30;
			this.controllGroup.y = SetConst.MODLE == 0 ? GameConfig.HEIGHT / 2 - this.controllGroup.height / 2 - 5 : GameConfig.HEIGHT / 2 - this.controllGroup.height / 2 - 5;
		}
		else {
			this.controllGroup.x = SetConst.MODLE == 0 ? GameConfig.WIDTH - this.controllGroup.width + 30 : -30;
			this.controllGroup.y = SetConst.MODLE == 0 ? GameConfig.HEIGHT / 2 - this.controllGroup.height / 2 : GameConfig.HEIGHT / 2 - this.controllGroup.height / 2;
		}

	}


	private isautoShow: boolean = false;
	public onDataChanged(e: SetEvent): void {
		switch (e.type) {
			case SetEvent.SET_AUTO_CHANGED:
				this.updataBtnState();
				if (this.isautoShow != SetConst.AUTO) {
					this.isautoShow = SetConst.AUTO;
					this.bottomAutoGoUpdata();
				}
				break;
			case SetEvent.SET_SPEED_CHANGED:
				egret.Tween.removeTweens(this.tipLabel);
				this.updataBtnState();
				this.qukcheckBtn.selected = SetConst.SPEED_PLAY;
				this.playLight();
				this.tipLabel.visible = true;
				SetConst.REWARD_SMALLSHOW = false;
				SetConst.REWARD_SHOW = false;
				let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
				ui.hideWin();
				this.rewardGroup.visible = SetConst.REWARD_SMALLSHOW;
				this.tipLabel.alpha = 1;
				this.tipLabel.text = SetConst.SPEED_PLAY ? '快速模式已启用' : '快速模式已禁用';
				this.tipLabel.scaleX = 0.7;
				this.tipLabel.scaleY = 0.7;
				egret.Tween.get(this.tipLabel).to({ alpha: 0 }, 2000).call(() => {
					this.tipLabel.alpha = 1;
					this.tipLabel.text = '滑动转轴或按旋转';
					this.tipLabel.scaleX = this.tipLabel.scaleY = 1;
				}, this);
				break;
			case SetEvent.SET_BET_CHANGE:
				this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
				this.totalBet.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line);
				this.lineLabel.text = vo.GameData.line + '';
				break;
			case SetEvent.SET_LINE_CHANGE:
				this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
				this.totalBet.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line);
				this.lineLabel.text = vo.GameData.line + '';
				break;
			case SetEvent.SET_BALANCE_CHANGE:
				this.balanceLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.balance);
				break;
			case SetEvent.SET_MUSIC_CHANGE:
				this.musicCheck.selected = SoundManager.getInstance().effectOn;
				break;
		}
	}


	/**
	 * 播放光效
	 */
	public playLight(): void {
		this.lightBG.alpha = 0;
		this.lightBG.visible = true;
		this.lightBG.blendMode = egret.BlendMode.ADD;
		egret.Tween.removeTweens(this.lightBG);
		egret.Tween.get(this.lightBG).to({ alpha: 0.1 }, 100).to({ alpha: 0 }, 100).call(() => { this.lightBG.visible = false });
	}


	public updataEnable(s: number): void {
		this.betBtn.enabled = s == 0 ? false : true;
		this.moreBtn.enabled = s == 0 ? false : true;
		this.setBtn.enabled = s == 0 ? false : true;
		this.qukcheckBtn.enabled = s == 0 ? false : true;
		this.betSetCompoment.arrButton.enabled = s == 0 ? false : true;
		this.autoSetCompoment.arrButton.enabled = s == 0 ? false : true;
	}
    /**
	 * 更新时间
	 */
	public onFrame(e: egret.Event): void {
		var crtTime = new Date();
		this.timeLabel.text = dateFtt("yyyy-MM-dd hh:mm:ss", crtTime) + ' ' + GameConfig.CasinoGame.PlayerId;
	}

	/**
	 * 更新自动状态
	 */
	public bottomAutoGoUpdata(): void {
		if (this.currentState == 'ver') {
			this.betBtn.visible = this.qukGroup.visible = SetConst.AUTO ? false : true;
		}
		else {
			this.betBtn.visible = this.qukGroup.visible = false;
		}
		egret.Tween.get(this.bottomGroup).to({ y: GameConfig.HEIGHT }, 300).call(() => {
			this.bottomChange();
			this.tipLabel.alpha = 1;
			if (!SetConst.AUTO) {
				if (SetConst.handStop) {
					this.tipLabel.text = '自动游戏已停止';
				}
				else {
					this.tipLabel.text = '自动游戏已完成';
					SetConst.AUTO_SHOW = true;
					this.autoSetCompoment.goUpdata();
					this.updataBtnState();
				}
				this.tipLabel.scaleX = this.tipLabel.scaleY = 0.8;
				this.tipLabel.alpha = 1;
			}
		}, this).to({ y: GameConfig.HEIGHT - this.bottomGroup.height }, 300).call(() => {
			egret.Tween.removeTweens(this.tipLabel);
			if (!SetConst.AUTO) {
				egret.Tween.get(this.tipLabel).to({ alpha: 0 }, 1500).call(() => {
					this.tipLabel.scaleX = this.tipLabel.scaleY = 1;
					this.tipLabel.text = '滑动转轴或按旋转';
					this.tipLabel.alpha = 1;
				}, this);
			}

		}, this);
	}

	private bottomChange(): void {
		this.bottomBg.source = SetConst.AUTO ? 'bottom_1_png' : 'bottom_2_png';
		this.bottomBg.alpha = SetConst.AUTO ? 0.75 : 1;
		for (let i: number = 0; i < 5; i++) {
			(this['t' + i] as eui.Label).textColor = SetConst.AUTO ? 0x0292C0 : 0xFCCB44;
		}
		this.tipLabel.alpha = 1;
		if (SetConst.AUTO) {
			this.tipLabel.text = '剩余' + SetConst.AUTO_COUNT + '次自动旋转';
			this.tipLabel.scaleX = this.tipLabel.scaleY = 0.7;
		}
		else {
			//this.tipLabel.text = '自动游戏已停止';
			this.tipLabel.scaleX = this.tipLabel.scaleY = 1;
			//egret.setTimeout(() => {
			this.tipLabel.text = '滑动转轴或按旋转';
			//}, this, 2000);
		}
	}


}