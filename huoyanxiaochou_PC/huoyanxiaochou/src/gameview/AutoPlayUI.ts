class AutoPlayUI extends core.BaseUI {
	public btn0: eui.ToggleButton;
	public btn1: eui.ToggleButton;

	public closeBtn: MouseButton;
	public okBtn: MouseButton;

	public slider0: MyHslider;
	public numLabel0: eui.Label;

	public slider1: MyHslider;
	public numLabel1: eui.Label;

	public slider2: MyHslider;
	public numLabel2: eui.Label;

	public bGroup: eui.RadioButtonGroup;

	public constructor() {
		super();
		this.skinName = AutoPlayUISkin;
	}

	public onAdd(): void {
		super.onAdd();
		this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.okBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.btn0, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.btn1, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		if (!this.bGroup) {
			this.bGroup = new eui.RadioButtonGroup();
			this.bGroup.addEventListener(egret.Event.CHANGE, this.onChange, this);
			for (let i: number = 0; i < 5; i++) {
				let rb: MosueRadioButton = this['rb' + i] as MosueRadioButton;
				rb.value = GameConfig.autoPlayArr[i];
				rb.group = this.bGroup;
				if (i == 2) {
					rb.selected = true;
					this.bGroup.selectedValue = rb.value;
				}
			}
			

			this.slider0.addEventListener(egret.Event.CHANGE, this.onSliderChange, this);
			
			this.slider0.id = 0;
			this.numLabel0.text = this.slider0.value.toFixed(2) + '';
			this.slider1.addEventListener(egret.Event.CHANGE, this.onSliderChange, this);
			this.slider1.id = 1;
			this.numLabel1.text = this.slider1.value.toFixed(2) + '';
			this.slider2.addEventListener(egret.Event.CHANGE, this.onSliderChange, this);
			this.slider2.id = 2;
			this.numLabel2.text = this.slider2.value.toFixed(2) + '';
		}
		this.slider0.maximum = GameConfig.singleWinMaxCount;		//400
		this.slider0.updata();
		this.slider1.maximum = GameConfig.moneyAddMax;				//4000
		this.slider1.updata();
		this.slider2.maximum = GameConfig.moneySubMax;				//4000
		this.slider2.updata();

		this.btn1.selected = GameConfig.freeWin;
		this.clearValue();
	}

	public clearValue(): void {
		this.slider0.value = 0;
		this.slider1.value = 0;
		this.slider2.value = 0;
		this.slider0.updata();
		this.slider1.updata();
		this.slider2.updata();
		this.numLabel0.text = this.slider0.value.toFixed(2) + '';
		this.numLabel1.text = this.slider1.value.toFixed(2) + '';
		this.numLabel2.text = this.slider2.value.toFixed(2) + '';
	}

	public onChange(e: egret.Event): void {
		let v: number = this.bGroup.selectedValue;
		let s: number = GameConfig.autoPlayArr[v];
	}

	public onSliderChange(e: egret.Event): void {
		// console.log("this.slider0.value === " + this.slider0.value);
		this.slider0.snapInterval = vo.GameData.betScoreArr[vo.GameData.betIndex] * 20;
			this.slider1.snapInterval = vo.GameData.betScoreArr[vo.GameData.betIndex] * 200;
			this.slider2.snapInterval = vo.GameData.betScoreArr[vo.GameData.betIndex] * 200;
		let slider: MyHslider = e.currentTarget as MyHslider;
		let id: any = slider.id;
		// console.log("this.slider0.value === " + slider.value);

		(this['numLabel' + id] as eui.Label).text = slider.value.toFixed(2) + '';
	}

	public onTab(e: egret.TouchEvent): void {
		switch (e.currentTarget) {
			case this.closeBtn:
				GameManager.getInstance().resume();
				core.UIManager.closeUI(core.UIConst.AutoPlayUI);
				break;
			case this.okBtn:
				this.readData();
				GameManager.getInstance().autoStartGame();
				core.UIManager.closeUI(core.UIConst.AutoPlayUI);
				break;
			case this.btn0:
				GameConfig.someWin = this.btn0.selected;
				break;
			case this.btn1:
				GameConfig.freeWin = this.btn1.selected;
				break;
		}




	}

	public readData(): void {
		GameConfig.singleWinCurCount = this.slider0.value;
		GameConfig.moneyAddCur = this.slider1.value;
		GameConfig.moneySubCur = this.slider2.value;
		vo.GameData.autoPlayCount = this.bGroup.selectedValue;
		// if(vo.GameData.autoPlayCount==undefined)
		// {   
		// 	let rb:MosueRadioButton=this['rb'+1] as MosueRadioButton;
		// 	vo.GameData.autoPlayCount=rb.value;
		// }
		GameConfig.someWin = this.btn0.selected;
		GameConfig.freeWin = this.btn1.selected;
	}
}