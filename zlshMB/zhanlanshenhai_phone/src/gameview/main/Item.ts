class Item extends eui.Component {
	private gametype: string;
	public mcGroup: eui.Group;
	public itemMC: egret.MovieClip;

	private _isVir: boolean = false;
	public constructor() {
		super();
		this.skinName = ItemSkin;
	}

	public childrenCreated(): void {
		super.childrenCreated();
		this.width = GameConfig.ITEM_W;
		this.height = GameConfig.ITEM_H;
		this.anchorOffsetX = GameConfig.ITEM_W / 2;
		this.anchorOffsetY = GameConfig.ITEM_H / 2;
		//this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
		this.init();
	}

	public init(): void {
		this.itemMC = game.MCUtils.getMc('itemmc');
		this.mcGroup.addChild(this.itemMC);
		this.itemMC.x = this.width / 2;
		this.itemMC.y = this.height / 2;
		this.itemMC.addEventListener(egret.MotionEvent.COMPLETE,()=>{
			this.itemMC.gotoAndStop(this.gametype);
		},this);
	}
	public ispeed: number = 0;
	public speedy: number = 0;
	public static G: number = 0.01;

	/**
	 * 当前行
	 */
	public col: number;
	/**
	 * 当前列
	 */
	public row: number;

	/**
	 * 目标行
	 */
	public tcol: number;
	/**
	 * 目标列
	 */
	public trow: number;
	/**
	 * 是否弹跳过
	 */
	public isTiao: boolean = false;
	/**
	 * 0下降 1上升
	 */
	private actionState: number;
	/**
	 * 自由落体时间
	 */
	public time: number = 1;
	/**
	 * 是否在运动中
	 */
	public isAction: boolean = false;
	/**
	 * 是否死亡
	 */
	public isDie: boolean = false;
	/**
	 * 当前阶段是否被检查过
	 */
	public isCheck: boolean = false;
	/**
	 * 是否被选入
	 */
	public isSelected: boolean = false;
	public onFrame(): void {
		// if (this.isAction) {
		// 	this.x += 0;
		// 	this.y += this.speedy;
		// 	this.time++;
		// 	this.speedy += Item.G * this.time;
		// 	if (this.speedy >= 0) {
		// 		this.actionState = 0;
		// 	}
		// 	else {
		// 		this.actionState = 1;
		// 	}
		// 	if (this.y >= this.tcol * GameConfig.ITEM_H + GameConfig.ITEM_H / 2) {
		// 		if (!this.isTiao) {
		// 			this.isTiao = true;
		// 			// this.speedy = -this.speedy * 0.08;
		// 			this.speedy = 0;
		// 			this.time = 0;
		// 			this.actionState = 1;
		// 			if (egret.getTimer() - Item.t > 100) {
		// 				SoundManager.getInstance().playEffect(SoundConst.DOWN_ARR[0]);
		// 				Item.t = egret.getTimer();
		// 			}
		// 		}
		// 		else {
		// 			if (this.actionState == 0) {
		// 				this.y = this.tcol * GameConfig.ITEM_H + GameConfig.ITEM_H / 2;
		// 				this.isAction = false;
		// 			}
		// 		}
		// 	}
		// }
	}

	public static t: number = 0;
	public goActionforColAndRow(_col: number, _row: number): void {
		//this.isAction = true;
		this.actionState = 0;
		this.speedy = 20;
		this.isTiao = true;
		this.isCheck = false;
		//this.isVir = _row == this.row ? false : true;
		this.tcol = _col;
		this.trow = _row;
		this.col = this.tcol;
		this.row = this.trow;
		let ty = this.tcol * GameConfig.ITEM_H + GameConfig.ITEM_H / 2;
		//egret.Tween.removeTweens(this);
		//egret.Tween.get(this).to({ y: ty }, 600, egret.Ease.cubicOut).call(() => {
		//}, this).call(() => {
		this.isAction = false;
		//}, this);
	}

	public goActionforColAndRowforRandomtime(_col: number, _row: number): void {
		let d:number=Math.abs(_col-this.tcol);
		this.isAction = true;
		this.actionState = 0;
		this.speedy = 20;
		this.isTiao = true;
		this.isCheck = false;
		this.tcol = _col;
		this.trow = _row;
		this.col = this.tcol;
		this.row = this.trow;
		let ty = this.tcol * GameConfig.ITEM_H + GameConfig.ITEM_H / 2;
		egret.Tween.removeTweens(this);
		let time: number =60*d - 60 * Math.random();
		egret.Tween.get(this).to({ y: ty }, time, egret.Ease.quartIn).call(() => {
		}, this).call(() => {
			this.isAction = false;
		}, this);
	}

	public goActionforColAndRowforRandomtime2(_col: number, _row: number): void {
		this.isAction = true;
		this.actionState = 0;
		this.speedy = 20;
		this.isTiao = true;
		this.isCheck = false;
		//let time: number =100+Math.abs(_col-this.tcol)*100 * Math.random();
		this.tcol = _col;
		this.trow = _row;
		this.col = this.tcol;
		this.row = this.trow;
		let ty = this.tcol * GameConfig.ITEM_H + GameConfig.ITEM_H / 2;
		egret.Tween.removeTweens(this);
	
		egret.Tween.get(this).to({ y: ty }, 200, egret.Ease.quartIn).call(() => {
		}, this).call(() => {
			this.isAction = false;		
		}, this);
	}

	public setPosForColAndRow(_col: number, _row: number): void {
		this.col = _col;
		this.row = _row;
		this.tcol = this.col;
		this.trow = this.trow;
		this.x = this.row * GameConfig.ITEM_W + GameConfig.ITEM_W / 2;
		this.y = this.col * GameConfig.ITEM_H + GameConfig.ITEM_H / 2;
	}
	public upXAndY(x: number, y: number): void {
		this.x -= x;
		this.y -= y;
	}

	public reset(): void {
		this.isDie = false;
		this.speedy = 0;
		this.time = 0;
		this.isTiao = false;
		this.isCheck = false;
		this.isSelected=false;
	}
    

	/**
	 * 播放单独动画
	 */
	public playSingleAnimation(): void {
		this.mcGroup.visible = true;
		this.itemMC.gotoAndPlay(this.gametype, 1);
		SoundManager.getInstance().playEffect(this.gametype+'_mp3');
	}

	public get gameType(): string {
		return this.gametype;
	}
	public set gameType(v: string) {
		this.gametype = v;
		if(this.itemMC)
		{
			this.itemMC.gotoAndStop(this.gametype);
		}
	}

}