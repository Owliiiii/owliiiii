class BetSetCompoment extends eui.Component {
	public arrButton: eui.ToggleButton;
	public betLabel: eui.Label;
	public checkBtn: CheckButton;
	public sunBtn: eui.Button;
	public addBtn: eui.Button;
	public subdImg: eui.Image;
	public adddImg: eui.Image;

	public sunBtn0: eui.Button;
	public addBtn0: eui.Button;
	public subdImg0: eui.Image;
	public adddImg0: eui.Image;
	public lineLabel: eui.Label;
	private cState: number = 0;
	public constructor() {
		super();
	}

	public childrenCreated(): void {
		super.childrenCreated();
		this.checkBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.arrButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.sunBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.addBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.subdImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.adddImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);

		this.sunBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.addBtn0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.subdImg0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.adddImg0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);


		this.checkBtn.selected = SetConst.SPEED_PLAY;
		this.arrButton.selected = SetConst.BETSET_SHOW;
		this.updataState();
		this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
		GameManager.getInstance().addEventListener(SetEvent.SET_MODLE, this.onModleChange, this);
		core.LayerManager.getInstance().addEventListener(SetEvent.SET_OR_CHANGE, () => {
			this.updataState();
		}, this);

		GameManager.getInstance().addEventListener(SetEvent.SET_SPEED_CHANGED, this.onDataChanged, this);
		core.MyUIUtils.addLongTouch(this.sunBtn, () => {
			vo.GameData.betIndex = 0;
			SoundManager.getInstance().playEffect(SoundConst.BUTTON);
			GameManager.getInstance().dispatchEventWith(SetEvent.SET_BET_CHANGE);
			this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
		}, () => {

		}, this);
		core.MyUIUtils.addLongTouch(this.addBtn, () => {
			vo.GameData.betIndex = vo.GameData.betScoreArr.length - 1;
			SoundManager.getInstance().playEffect(SoundConst.BUTTON);
			GameManager.getInstance().dispatchEventWith(SetEvent.SET_BET_CHANGE);
			this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
		}, () => {

		}, this);


		core.MyUIUtils.addLongTouch(this.sunBtn0, () => {
			vo.GameData.line = 1;
			SoundManager.getInstance().playEffect(SoundConst.BUTTON);
			GameManager.getInstance().dispatchEventWith(SetEvent.SET_LINE_CHANGE);
			this.lineLabel.text = vo.GameData.line + '';
		}, () => {

		}, this);
		core.MyUIUtils.addLongTouch(this.addBtn0, () => {
			vo.GameData.line = 25;
			SoundManager.getInstance().playEffect(SoundConst.BUTTON);
			GameManager.getInstance().dispatchEventWith(SetEvent.SET_LINE_CHANGE);
			this.lineLabel.text = vo.GameData.line + '';
		}, () => {

		}, this);
	}

	public onDataChanged(): void {
		this.checkBtn.selected = SetConst.SPEED_PLAY;
	}

	public updataState(): void {
		if (window.innerWidth >= window.innerHeight) {
			this.currentState = 'hor_' + SetConst.MODLE;
		}
		else {
			this.currentState = SetConst.MODLE == 0 ? 'ver' : 'ver_1';
		}
		this.sunBtn.enabled = vo.GameData.betIndex > 0;
		this.addBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
		this.sunBtn0.enabled = vo.GameData.line > 1;
		this.addBtn0.enabled = vo.GameData.line < 25;
	}

	public onTab(e: egret.TouchEvent): void {
		e.stopImmediatePropagation();
		e.stopPropagation();
		switch (e.currentTarget) {
			case this.sunBtn:
				if (vo.GameData.betIndex > 0) {
					SoundManager.getInstance().playEffect(SoundConst.SUB);
					vo.GameData.betIndex -= 1;
					GameManager.getInstance().dispatchEventWith(SetEvent.SET_BET_CHANGE);
				}
				this.sunBtn.enabled = vo.GameData.betIndex > 0;
				this.addBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
				break;
			case this.addBtn:
				if (vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1) {
					SoundManager.getInstance().playEffect(SoundConst.ADD);
					vo.GameData.betIndex += 1;
					GameManager.getInstance().dispatchEventWith(SetEvent.SET_BET_CHANGE);
				}
				this.sunBtn.enabled = vo.GameData.betIndex > 0;
				this.addBtn.enabled = vo.GameData.betIndex < vo.GameData.betScoreArr.length - 1;
				break;
			case this.sunBtn0:
				if (vo.GameData.line > 1) {
					SoundManager.getInstance().playEffect(SoundConst.SUB);
					vo.GameData.line -= 1;
					GameManager.getInstance().dispatchEventWith(SetEvent.SET_LINE_CHANGE);
				}
				this.sunBtn0.enabled = vo.GameData.line > 1;
				this.addBtn0.enabled = vo.GameData.line < 25;
				break;
			case this.addBtn0:
				if (vo.GameData.line < 25) {
					SoundManager.getInstance().playEffect(SoundConst.ADD);
					vo.GameData.line += 1;
					GameManager.getInstance().dispatchEventWith(SetEvent.SET_LINE_CHANGE);
				}
				this.sunBtn0.enabled = vo.GameData.line > 1;
				this.addBtn0.enabled = vo.GameData.line < 25;
				break;
			case this.checkBtn:
				SoundManager.getInstance().playEffect(SoundConst.SPEED_ON);
				SetConst.SPEED_PLAY = this.checkBtn.selected;
				GameManager.getInstance().dispatchEventWith(SetEvent.SET_SPEED_CHANGED);
				break;
			case this.arrButton:
				SoundManager.getInstance().playEffect(SoundConst.BUTTON);
				if (this.arrButton.selected) {
					SetConst.BETSET_SHOW = true;
				}
				else {
					SetConst.BETSET_SHOW = false;
				}
				this.goUpdata();
				this.dispatchEventWith(SetEvent.SET_STATE_CHANGE);
				break;
		}
		this.betLabel.text = '￥' + GameManager.numberToCommonStr(vo.GameData.betScoreArr[vo.GameData.betIndex]);
		this.lineLabel.text = vo.GameData.line + '';
		this.dispatchEventWith(egret.Event.CHANGE);
	}

	private getXY(): any {
		let x: number;
		let y: number;
		if (SetConst.MODLE == 0) {
			if (SetConst.BETSET_SHOW) {
				x = this.currentState.indexOf('hor') != -1 ? 0 : GameConfig.WIDTH / 2 - this.width / 2;
				y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 - 10 : GameConfig.HEIGHT / 2 - this.height / 2 - 118;
			}
			else {
				x = this.currentState.indexOf('hor') != -1 ? -this.width + 100 : GameConfig.WIDTH / 2 - this.width / 2;
				y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 : GameConfig.HEIGHT;
			}
		}
		else {
			if (SetConst.BETSET_SHOW) {
				x = this.currentState.indexOf('hor') != -1 ? GameConfig.WIDTH - this.width : GameConfig.WIDTH / 2 - this.width / 2;
				y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 - 10 : GameConfig.HEIGHT / 2 - this.height / 2 - 118;
			}
			else {
				x = this.currentState.indexOf('hor') != -1 ? GameConfig.WIDTH - 100 : GameConfig.WIDTH / 2 - this.width / 2;
				y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 : GameConfig.HEIGHT;
			}
		}

		return { x: x, y: y };
	}

	public updata(): void {
		egret.Tween.removeTweens(this);
		this.arrButton.selected = SetConst.BETSET_SHOW;
		let t: any = this.getXY();
		this.x = t.x;
		this.y = t.y;
	}

	public goUpdata(): void {
		egret.Tween.removeTweens(this);
		this.arrButton.selected = SetConst.BETSET_SHOW;
		let t: any = this.getXY();
		egret.Tween.get(this).to({ x: t.x, y: t.y }, 200);
	}

	public onModleChange(): void {
		this.updataState();
		this.updata();
	}
}