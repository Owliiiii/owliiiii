class AutoSetCompoment extends eui.Component {
	public arrButton: eui.ToggleButton;
	public countLabel: eui.Label;
	public mySlider: MyHslider;
	public constructor() {
		super();
	}

	public childrenCreated(): void {
		super.childrenCreated();
		this.arrButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.arrButton.selected = SetConst.AUTO_SHOW;
		this.updataState();
		GameManager.getInstance().addEventListener(SetEvent.SET_MODLE, this.onModleChange, this);
		this.mySlider.addEventListener(egret.Event.CHANGE, this.onSliderChange, this);
		core.LayerManager.getInstance().addEventListener(SetEvent.SET_OR_CHANGE, () => {
			this.updataState();
		}, this);
		this.mySlider.maximum = 10;
		this.mySlider.setValues(10);
		this.onSliderChange();
	}

	public onSliderChange(): void {
		if (SetConst.AUTO_COUNT_ARR[this.mySlider.value] == 9999) {
			this.countLabel.text = "直到环节";
		} else {
			this.countLabel.text = SetConst.AUTO_COUNT_ARR[this.mySlider.value] + '次旋转';
		}

	}

	public updataState(): void {
		if (window.innerWidth >= window.innerHeight) {
			this.currentState = 'hor' + SetConst.MODLE;
		}
		else {
			this.currentState = 'ver' + SetConst.MODLE;
		}
		this.onSliderChange();
	}

	public onTab(e: egret.TouchEvent): void {
		e.stopImmediatePropagation();
		e.stopPropagation();
		SoundManager.getInstance().playEffect(SoundConst.BUTTON);
		switch (e.currentTarget) {
			case this.arrButton:
				if (this.arrButton.selected) {
					SetConst.AUTO_SHOW = true;
				}
				else {
					SetConst.AUTO_SHOW = false;
				}
				this.goUpdata();
				this.dispatchEventWith(SetEvent.SET_STATE_CHANGE);
				break;
		}
	}

	private getXY(): any {
		let x: number;
		let y: number;
		if (SetConst.MODLE == 0) {
			if (SetConst.AUTO_SHOW) {
				x = this.currentState.indexOf('hor') != -1 ? GameConfig.WIDTH - this.width : GameConfig.WIDTH / 2 - this.width / 2;
				y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 - 10 : GameConfig.HEIGHT / 2 - this.height / 2 - 120;
			}
			else {
				x = this.currentState.indexOf('hor') != -1 ? GameConfig.WIDTH : GameConfig.WIDTH / 2 - this.width / 2;
				y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 : GameConfig.HEIGHT;
			}
		}
		else {
			if (SetConst.AUTO_SHOW) {
				x = this.currentState.indexOf('hor') != -1 ? 0 : GameConfig.WIDTH / 2 - this.width / 2;
				y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 - 10 : GameConfig.HEIGHT / 2 - this.height / 2 - 120;
			}
			else {
				x = this.currentState.indexOf('hor') != -1 ? -this.width : GameConfig.WIDTH / 2 - this.width / 2;
				y = this.currentState.indexOf('hor') != -1 ? GameConfig.HEIGHT / 2 - this.height / 2 : GameConfig.HEIGHT;
			}
		}

		return { x: x, y: y };
	}

	public updata(): void {
		if (!GameConfig.isFree) {
			this.visible = true;
		} else {
			this.visible = false;
		}
		egret.Tween.removeTweens(this);
		this.arrButton.selected = SetConst.AUTO_SHOW;
		let t: any = this.getXY();
		this.x = t.x;
		this.y = t.y;
	}

	public goUpdata(): void {
		if (!GameConfig.isFree) {
			this.visible = true;
		} else {
			this.visible = false;
		}
		egret.Tween.removeTweens(this);
		this.arrButton.selected = SetConst.AUTO_SHOW;
		let t: any = this.getXY();
		egret.Tween.get(this).to({ x: t.x, y: t.y }, 200);
	}

	public onModleChange(): void {
		this.updataState();
		this.updata();
	}
}