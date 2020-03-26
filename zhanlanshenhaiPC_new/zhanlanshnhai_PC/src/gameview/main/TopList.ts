class TopList extends eui.Component {
	public leftBtn: eui.Image;
	public rightBtn: eui.Image;
	public contentGroup: eui.Group;
	public static DISTANCE: number = 9;
	public static WIDTH: number = 76;
	public static HEIGHT: number = 76;

	private startpox: number;
	public isShow: boolean = false;
	public constructor() {
		super();
	}

	public childrenCreated(): void {
		super.childrenCreated();
		this.leftBtn.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onLeftBtnRollOver, this);
		this.leftBtn.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onLeftBtnRollOut, this);

		this.rightBtn.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRightBtnRollOver, this);
		this.rightBtn.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRightBtnRollOut, this);

		core.TimerManager.instance.addTick(-20, -1, this.onFrame, this);

		mouse.setButtonMode(this.leftBtn, true);
		mouse.setButtonMode(this.rightBtn, true);
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
		this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
	}

	public tx: number;
	public ty: number;

	public onBegin(e: egret.TouchEvent): void {
		if(!this.isCanMove) return;
		this.tx = e.stageX;
		this.ty = e.stageY;
	}

	public onMove(e: egret.TouchEvent): void {
		if(!this.isCanMove) return;
		let dx: number = e.stageX - this.tx;
		this.tx = e.stageX;
		this.ty = e.stageY;
		for (let i: number = 0; i < this.contentGroup.numChildren; i++) {
			let item: ShowItem = this.contentGroup.getChildAt(i) as ShowItem;
			item.goIndexStep(dx);
		}
		this.startpox += dx;
		if (this.startpox >= 40) {
			this.leftBtn.visible = false;
		}
		else {
			this.leftBtn.visible = true;
		}
		let cWidth: number = this.contentGroup.numChildren * TopList.WIDTH + (this.contentGroup.numChildren - 1) * TopList.DISTANCE;
		if (this.startpox <= this.contentGroup.width - cWidth - 40) {
			this.rightBtn.visible = false;
		}
		else {
			this.rightBtn.visible = true;
		}
	}

	public onEnd(e: egret.TouchEvent): void {
		if(!this.isCanMove) return;
		if (this.startpox > 40) {
			for (let i: number = 0; i < this.contentGroup.numChildren; i++) {
				let item: ShowItem = this.contentGroup.getChildAt(i) as ShowItem;
				item.goIndexAimation(40);
			}
			this.startpox = 40;
		}
		let cWidth: number = this.contentGroup.numChildren * TopList.WIDTH + (this.contentGroup.numChildren - 1) * TopList.DISTANCE;
		if (this.startpox < this.contentGroup.width - cWidth - 40) {
			for (let i: number = 0; i < this.contentGroup.numChildren; i++) {
				let item: ShowItem = this.contentGroup.getChildAt(i) as ShowItem;
				item.goIndexAimation(this.contentGroup.width - cWidth - 40);
			}
			this.startpox = this.contentGroup.width - cWidth - 40;
		}
	}


	public show(): void {
		this.isShow = true;
		egret.Tween.get(this.parent).to({ y: 0, alpha: 1 }, 600);
	}

	public hide(): void {
		this.isShow = false;
		egret.Tween.get(this.parent).to({ y: -154, alpha: 0 }, 600);
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		ui.setSelected(-1);
	}

	public setArr(arr: Array<any>): void {
		egret.Tween.get(this.contentGroup).to({ alpha: 0 }, 200).call(() => {
			this.contentGroup.removeChildren();
			for (let i: number = 0; i < arr.length; i++) {
				let item: ShowItem = new ShowItem();
				item.addEventListener('rollchangeover', this.onRollOver, this);
				item.addEventListener('rollchangeout', this.onRollOut, this);
				this.contentGroup.addChild(item);
				item.setData(arr[i]);
				item.y = 123 / 2;
				item.index = i;
			}
			this.updataPosition();
			egret.Tween.get(this.contentGroup).to({ alpha: 1 }, 200);
		}, this);
	}
    
	public isCanMove:boolean=false;
	public updataPosition(): void {
		//先判断贴边还是居中
		//当前内容占用宽度
		let cWidth: number = this.contentGroup.numChildren * TopList.WIDTH + (this.contentGroup.numChildren - 1) * TopList.DISTANCE;
		//起点
		let startX: number;
		if (cWidth >= this.contentGroup.width) {
			startX = 40;
			this.leftBtn.visible = false;
			this.rightBtn.visible = true;
			this.isCanMove=true;
		}
		else {
			startX = this.contentGroup.width / 2 - cWidth / 2;
			this.leftBtn.visible = false;
			this.rightBtn.visible = false;
			this.isCanMove=false;
		}
		this.startpox = startX;
		for (let i: number = 0; i < this.contentGroup.numChildren; i++) {
			let item: ShowItem = this.contentGroup.getChildAt(i) as ShowItem;
			item.goIndex(startX);
		}
	}



	public onRollOver(e: egret.Event): void {
		egret.clearTimeout(this.cleart);
		let index: number = e.data;
		//前面
		for (let i: number = 0; i < index; i++) {
			let item: ShowItem = this.contentGroup.getChildAt(i) as ShowItem;
			item.goAnimation(-1);
		}
		//后面
		for (let i: number = index + 1; i < this.contentGroup.numChildren; i++) {
			let item: ShowItem = this.contentGroup.getChildAt(i) as ShowItem;
			item.goAnimation(1);
		}
		//当前index得回归
		let item: ShowItem = this.contentGroup.getChildAt(index) as ShowItem;
		item.goBack();

	}

	public onRollOut(e: egret.Event): void {
		let index: number = e.data;
		this.cleart = egret.setTimeout(() => {
			//所有
			for (let i: number = 0; i < this.contentGroup.numChildren; i++) {
				let item: ShowItem = this.contentGroup.getChildAt(i) as ShowItem;
				item.goBack();
			}
		}, this, 100);
	}

	public cleart: number;


	public onLeftBtnRollOver(): void {
		this.moveState = -1;
		this.leftBtn.source = 'left_hover_png';
	}

	public onLeftBtnRollOut(): void {
		this.moveState = 0;
		this.leftBtn.source = 'left_png';
	}

	public onRightBtnRollOver(): void {
		this.moveState = 1;
		this.rightBtn.source = 'left_hover_png';
	}

	public onRightBtnRollOut(): void {
		this.moveState = 0;
		this.rightBtn.source = 'left_png';
	}
	private moveState: number = 0;
	private onFrame(): void {
		if (this.moveState == -1) {
			if (this.startpox <= 30) {
				for (let i: number = 0; i < this.contentGroup.numChildren; i++) {
					let item: ShowItem = this.contentGroup.getChildAt(i) as ShowItem;
					item.goIndexStep(10);
				}
				this.startpox += 10;
				this.rightBtn.visible = true;
			}
			else {
				this.leftBtn.visible = false;
			}

		}
		else if (this.moveState == 1) {
			let cWidth: number = this.contentGroup.numChildren * TopList.WIDTH + (this.contentGroup.numChildren - 1) * TopList.DISTANCE;
			if (this.startpox >= this.contentGroup.width - cWidth + 10 - 40) {
				for (let i: number = 0; i < this.contentGroup.numChildren; i++) {
					let item: ShowItem = this.contentGroup.getChildAt(i) as ShowItem;
					item.goIndexStep(-10);
				}
				this.startpox -= 10;
				this.leftBtn.visible = true;
			}
			else {
				this.rightBtn.visible = false;
			}
		}
	}
}