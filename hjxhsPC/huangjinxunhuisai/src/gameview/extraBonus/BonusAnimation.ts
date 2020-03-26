class BonusAnimation extends eui.Component {
	// public gameOver: eui.Group;
	public renwu: eui.Image;
	// public golfClip: egret.tween.TweenGroup;
	// public shadowClip: egret.tween.TweenGroup;
	public shadow_hor: egret.tween.TweenGroup;
	public golf_hor: egret.tween.TweenGroup;

	public golf: eui.Image;
	public shadow: eui.Image;

	// public keepOn: eui.Button;
	// public winScore: eui.Label;
	// public score: eui.Label;
	

	public constructor() {
		super();
		this.skinName = BonusAnimationSkin;
	}


	public init() {
		core.LayerManager.getInstance().addEventListener(SetEvent.SET_OR_CHANGE, () => {
			this.updataState();
		}, this);
		this.updataState();
		console.log('renwu');
		let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.gameOver.visible = false;
		ui.bonusMask.visible = false;
		ui.playGroup.visible = true;
		this.golf.alpha = 1;
		this.shadow.alpha = 1;
		this.golf.visible = true;
		this.shadow.visible = true;
		this.golf.scaleX = this.golf.scaleY = 1;
		this.shadow.scaleX = this.shadow.scaleY = 1;
		this.golf.x = 339.49;
		this.golf.y = 774.14;	
		this.shadow.x = 339.35;
		this.shadow.y = 777.41;
	
		// this.score.text = '￥' + GameManager.numberToCommonStr1(vo.GameData.balance);
		egret.Tween.get(this.renwu).call(() => { this.renwu.source = 'ren1_png' })
			.wait(1000)
			.call(() => { this.renwu.source = 'ren2_png' })
			.wait(800)
			.call(() => {
				this.renwu.source = 'ren3_png';
				SoundManager.getInstance().playEffect(SoundConst.BEATSOUNDS);
				this.golf_hor.addEventListener('complete', this.onTweenGroupComplete, this);
					
				this.golf_hor.play(0);
				this.shadow_hor.play(0)
			})
	}

	private onTweenGroupComplete() {
		console.log('全部播放完毕，可以显示最终界面')
		SoundManager.getInstance().playEffect(SoundConst.INTODONG);
		egret.setTimeout(() => {
			SoundManager.getInstance().playEffect(SoundConst.JUMPBOUNS);
			this.overAnim();
		}, this, 2000)
	}

	private overAnim() {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		GameManager.getInstance().dispatchEventWith(SetEvent.EXTRA_BONUS_SHOWBONUS, false);
		ui.gameOver.visible = true;
		ui.bonusMask.visible = true;
		ui.overCup.winScore.text = 'x' + GameManager.numberToCommonStr(vo.GameData.resultData.Value.Dollar);
		egret.Tween.get(ui.overCup.keepOn, { loop: true }).to({ scaleX: 0.95, scaleY: 0.95 }, 500).to({ scaleX: 1, scaleY: 1 }, 500);
		ui.overCup.keepOn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.BtnTouch, this);
	}
	private BtnTouch() {
		// console.log('点击按钮关闭');
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.playGroup.visible = false;
		ui.bonusMask.visible = false;
		ui.gameOver.visible = false;
		ui.bonusMask.visible = false;
		SoundManager.getInstance().playEffect(SoundConst.BUTTON);
		egret.Tween.removeTweens(ui.overCup.keepOn);

		GameManager.getInstance().dispatchEventWith(SetEvent.EXTRA_BONUS_OVER, false);
	}

	updataState() {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		egret.Tween.removeTweens(ui.overCup.keepOn);
		ui.overCup.keepOn.scaleX = 1;
		ui.overCup.keepOn.scaleY = 1;
		egret.Tween.get(ui.overCup.keepOn, { loop: true }).to({ scaleX: 0.95, scaleY: 0.95 }, 500).to({ scaleX: 1, scaleY: 1 }, 500);
	
	}

}