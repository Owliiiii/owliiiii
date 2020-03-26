class GameScence extends eui.Component {

	public reelArr: Array<Reel> = [];
	public isinit: boolean = false;
	public ewaiLabel: eui.Label;

	public maskRect: eui.Rect;

	public scoreGroup: eui.Group;
	public scoreLabel: eui.BitmapLabel;

	public group: eui.Group;

	public rewardScoreGroup: eui.Group;
	public image1: eui.Image;
	public image0: eui.Image;
	public image2: eui.Image;
	public fuhao:eui.Image
	public numLabel: eui.BitmapLabel;

	public freeslotGroup: eui.Group;


	public allGroup: eui.Group;
	public allnumLabel: eui.Label;
	public dianji:eui.Rect;


	public constructor() {
		super();
		this.skinName = GameScenceSkin;
		mouse.setButtonMode(this, true);
	}

	/**
	 * 初始化
	 */
	public init(): void {
		if (this.isinit) return;
		for (let i: number = 0; i < 3; i++) {
			let reel: Reel = this['reel' + i];
			this.reelArr.push(this['reel' + i]);
			reel.reelArr = vo.GameData.reelArr[i];
			reel.index = i;
			reel.init();
		}
		for (let i: number = 1; i <= vo.GameData.lineNum; i++) {
			// (this['rm' + i] as MouseButton2).setF(this.onRollOver, this.onRollOut, this);
			// (this['lm' + i] as MouseButton2).setF(this.onRollOver, this.onRollOut, this);
			this['rm' + i].name = 'rm' + i;
			this['lm' + i].name = 'lm' + i;
			this['rm' + i].addEventListener(mouse.MouseEvent.MOUSE_OVER,this.test1,this);
			this['lm' + i].addEventListener(mouse.MouseEvent.MOUSE_OVER,this.test1,this);

			this['rm' + i].addEventListener(mouse.MouseEvent.MOUSE_OUT,this.test3,this);
			this['lm' + i].addEventListener(mouse.MouseEvent.MOUSE_OUT,this.test3,this);
		}
		
		this.allGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeAll, this);
		this.isinit = true;
	}
	private closeAll():void{
		console.log("关闭最后结算");
		this.allGroup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.closeAll, this);
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		vo.GameData.balance = vo.GameData.resultData.Value.Balance;
		ui.setMoney(vo.GameData.balance);
		egret.Tween.removeTweens(this.group);
		let money:number = vo.GameData.slotInfo.allwin;
		ui.hideAllWin1();		//清除线和动画为了显示上面的总赢
		ui.hideHouzi();			//清猴子
		egret.Tween.get(this.group).to({ scaleX: 1.1, scaleY: 1.1 }, 100, egret.Ease.backOut).to({ scaleX: 0, scaleY: 0 }, 300, egret.Ease.backIn)
		.call(() => {
				this.allGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeAll, this);
				GameManager.getInstance().showTips("免费旋转中赢得CNY " + money + ".00");
				this.maskRect.visible = this.group.visible = false;
				if(GameConfig.autoPlay && GameManager.getInstance().getFreeCount() == 0){
					GameManager.getInstance().autoStartGame();
				}
		});
		GameManager.getInstance().enterPlayingState1();
		ui.setBG(false);
	}


	public reset(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			let cpos: number = vo.GameData.slotInfo.resultArr[i].Pos + 1 >= vo.GameData.reelArr[i].length ? 0 : vo.GameData.slotInfo.resultArr[i].Pos + 1;
			reel.setCurIndex(cpos, false);
		}
		this.clearAll();
	}
	
	public startReel(): void {
		SoundManager.getInstance().playEffect(SoundConst.REEL_START);
		// core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_ROUNDSTART);
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			reel.start();
		}
	}
	public startData(){
		
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		for (let i: number = 0; i < ui.gameScence.reelArr.length; i++) {
			let reel: Reel = ui.gameScence.reelArr[i];
			let cpos: number = vo.GameData.slotInfo.resultArr[i].Pos + 1 >= vo.GameData.reelArr[i].length ? 0 : vo.GameData.slotInfo.resultArr[i].Pos + 1;
			reel.goIndex(cpos);
		}
		vo.GameData.slotInfo.resultArr = [];
		GameConfig.isData = true;
	}

	public stopReel(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			reel.curTime += 5000;
		}
	}
	/**
	 * 暂停
	 */
	public pausme(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			reel.pausme();
		}	
	}

	/**
	* 暂停
    */
	public resume(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			reel.resume();
		}
	}

	/**
	 * 当前鼠标obj
	 */
	public mouseBtnIndex:number = 9;	//鼠标指着的线，随便是几，只要不是12345
	public btn: any;
	public onRollOver(obj: any): void {
		let btn: any = obj;
		let index: any = btn.name.charAt(2);
		// (this['line' + index] as eui.Image).alpha = 1;	
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		this.mouseBtnIndex = index;
		// console.log( this.mouseBtnIndex + " === ui.indexLine === " + ui.indexLine);
		if((GameManager.getInstance().gameState != GameType.GameState.PLAYING) && !GameConfig.autoPlay && GameManager.getInstance().getFreeCount() == 0 && ui.indexLine != 0
		){
			(this['line' + index] as eui.Image).visible = true;
			this.btn = btn;
		}
	}

	public onRollOut(obj: any): void {
		let btn: any = obj;
		let index: any = btn.name.charAt(2);
		this.mouseBtnIndex = 9;
		// (this['line' + index] as eui.Image).alpha = 0;
		(this['line' + index] as eui.Image).visible = false;
		this.btn = btn;
	}

	public clearAll(): void {
		this.kaiguan=false;
		// let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		// ui.indexLine = 0;
		for (let i: number = 1; i <= vo.GameData.lineNum; i++) {
			if(i == this.mouseBtnIndex){
				continue;
			}
			let img: eui.Image = (this['line' + i] as eui.Image);
			egret.Tween.removeTweens(img);
			// img.alpha = 0;
			img.visible = false;
			// if (!this.btn || this.btn.name.charAt(2) != i + '') {
			// 	img.alpha = 0;
			// }
		}
		
		egret.Tween.removeTweens(this.scoreGroup);
		this.scoreGroup.scaleX = 0;
		this.scoreGroup.scaleY = 0;
		for (let i: number = 1; i <= vo.GameData.lineNum; i++) {
			(this['rm' + i] as MouseButton2).setEnable(true);
			(this['lm' + i] as MouseButton2).setEnable(true);
		}
	}
	// private test:any;
	/**
	 *显示一线获胜
	 *显示完成回调
	 */
	public showLineWin(isOne:boolean,data: any, callfun: any, callobj: any): void {
        this.kaiguan=true;
		if(!isOne){
			this.setAn();
		}
		// this.setAn();
		// console.log("isOne === " + isOne);
		let lineArr: Array<number> = vo.GameData.lineArr['' + data.Data.Line];
		for (let i: number = 0; i < lineArr.length; i++) {
			this.reelArr[i].setliangAndActForIndex(lineArr[i],isOne);
		}
		let img: eui.Image = (this['line' + data.Data.Line] as eui.Image);
		// if(!img.visible){
		// 	img.visible = true;
		// }else{
		// 	img.visible = false
		// }
		egret.Tween.removeTweens(img);
		egret.Tween.removeTweens(this.scoreGroup);
		// img.visible = false;
		this.scoreGroup.visible = true;
		this.scoreGroup.scaleX = 0;
		this.scoreGroup.scaleY = 0;
		let rm: MouseButton2 = (this['rm' + data.Data.Line] as MouseButton2);
		let lm: MouseButton2 = (this['lm' + data.Data.Line] as MouseButton2);
		lm.setEnable(false);
		rm.setEnable(false);
		let sy: number = rm.y / 2 + lm.y / 2 + 80;
		if (data.Data.Line == 2) {
			sy -= 40;
		}
		else if (data.Data.Line == 3) {
			sy += 20;
		}
		else {
			
		}
		let sx: number = rm.x / 2 + lm.x / 2;
		this.scoreGroup.y = sy;
		this.scoreGroup.x = sx + 70;
		//倍数*押注 = 该条线的
		let winmoney: number = data.Reward.BetMultiplier * vo.GameData.betScoreArr[vo.GameData.betIndex]*10000/5;//vo.GameData.resultData.Value.Main.TotalWin;
		let s: number = winmoney / GameConfig.bili;
		this.scoreLabel.text = 'cny ' + s.toFixed(2);
		GameManager.getInstance().showTips('线' + data.Data.Line + '赢得CNY ' + s.toFixed(2));
		egret.Tween.get(this.scoreGroup).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.backOut).wait(1200).to({ scaleX: 0, scaleY: 0 }, 300);
		egret.Tween.get(img).to({visible:true},300).to({visible:false},300).to({visible:true},300).to({visible:false},300).to({visible:true},300).to({visible:false},300)
		// egret.Tween.get(img).to({ alpha: 1 }, 250).to({ alpha: 0 }, 250).to({ alpha: 1 }, 250).to({ alpha: 0 }, 250)//.to({ alpha: 1 }, 300).to({ alpha: 0 }, 300);
		.call(() => {
			if (callfun && callobj&&this.kaiguan) {
				callfun.call(callobj);
			}
		}, this);
	}
    public kaiguan:boolean=true;

	/**
	 * 显示全部获胜线数
	 */
	public showAllLineWin(arr: Array<any>): void {
		for (let i: number = 0; i < arr.length; i++) {
			let img: eui.Image = (this['line' + arr[i].Data.Line] as eui.Image);
			egret.Tween.removeTweens(img);
			// img.alpha = 1;
			img.visible = true;
		}
	}

	/**
	 * 设置全正常
	 */
	public setItem(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			this.reelArr[i].setItem();
		}
	}

	/**
	 * 设置全暗
	 */
	public setAn(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			this.reelArr[i].setAn();
		}
	}

    /**
	 * 展示免费旋转
	 */
	public showFreeSlot(callfun: any = null): void {
		this.allGroup.visible = this.rewardScoreGroup.visible = false;
		this.maskRect.visible = this.freeslotGroup.visible = true;
		
		this.maskRect.alpha = 1;
		this.group.alpha = 1;
		this.group.visible = true;
		this.group.scaleX = 0;
		this.group.scaleY = 0;
		egret.Tween.get(this.group).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut).call(() => {
			callfun && callfun();
		});
	}
	/**
	 * 展示神秘大奖
	 */
	public showRewardGroup(d: any,b:any, callfun: any = null): void {
		this.group.visible = true;
		this.maskRect.alpha = 1;
		this.group.alpha = 1;
		this.maskRect.visible = this.rewardScoreGroup.visible = true;
		this.allGroup.visible = this.freeslotGroup.visible = false;
		this.numLabel.visible = false;
		this.ewaiLabel.visible = false;
		this.group.scaleX = 0;
		this.group.scaleY = 0;
		this.numLabel.text = 'cny ' + (b / GameConfig.bili).toFixed(2);
		egret.Tween.get(this.group).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut).call(() => {
			// this.fuhao.visible = true;
			this.image0.visible = true;
			this.image0.scaleX = this.image0.scaleY = 0;
			this.image1.visible = true;
			this.image1.scaleX = this.image1.scaleY = 0;
			this.image2.visible = true;
			this.image2.scaleX = this.image2.scaleY = 0;
			egret.Tween.get(this.image0).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 0, scaleY: 0 }, 200);
			egret.Tween.get(this.image2).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 0, scaleY: 0 }, 200);
			egret.Tween.get(this.image1).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 0, scaleY: 0 }, 200)
				.call(() => {
					egret.Tween.removeTweens(this.image1);
					egret.Tween.removeTweens(this.image2);
					egret.Tween.removeTweens(this.image0);
					
					
					this.image1.visible = false;
					this.image2.visible = false;
					this.image0.visible = false;
					this.numLabel.scaleX = 1;
					this.numLabel.scaleY = 1;
					this.numLabel.visible = true;
					SoundManager.getInstance().playEffect(SoundConst.BIG_REWARDSHOWS);
					if (d.SymbolCount >= 3) {
						this.ewaiLabel.visible = true;
					}
					egret.Tween.get(this.numLabel).to({ scaleX: 1.2, scaleY: 1.2 }, 500, egret.Ease.bounceOut).wait(300).call(() => {
						callfun && this.hideGroup(callfun, 2);
					}, this);
				}, this);
		});

	}


	/**
	 *展示全胜
	 */
	public showAllWinNumGroup(s: number, callfun: any): void {
		this.maskRect.alpha = 1;
		this.group.alpha = 1;
		this.maskRect.visible = this.group.visible = true;
		this.allGroup.visible = true;
		this.allnumLabel.text = '' + s.toFixed(2);
		this.rewardScoreGroup.visible = this.freeslotGroup.visible = false;

		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		vo.GameData.balance = vo.GameData.resultData.Value.Balance;
		ui.setMoney(vo.GameData.balance);
		let money:number = vo.GameData.slotInfo.allwin;
		ui.hideAllWin1();		//清除线和动画为了显示上面的总赢
		ui.hideHouzi();			//清猴子
		
		egret.Tween.get(this.group).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut).wait(5000).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.backIn).call(() => {
			callfun && callfun();
			GameManager.getInstance().showTips("免费旋转中赢得CNY " + money.toFixed(2));
			this.maskRect.visible = this.group.visible = false;
			if(GameConfig.autoPlay && GameManager.getInstance().getFreeCount() == 0){
				GameManager.getInstance().autoStartGame();
			}
		}, this);
	}

	/**
	 * 隐藏奖励 
	 */
	public hideGroup(callfun: any = null, type: number = 1): void {
		if (type == 1) {
			this.maskRect.visible = false;
			egret.Tween.get(this.group).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.backIn).call(() => {
				this.group.visible = false;
				callfun && callfun();
			});
		}
		else if (type == 2) {
			egret.Tween.get(this.group).to({ alpha: 0 }, 500, egret.Ease.backIn).call(() => {
				this.group.visible = false;
				callfun && callfun();
			});
			egret.Tween.get(this.maskRect).to({ alpha: 0 }, 500).call(() => {
				this.maskRect.visible = false;
			}, this);
		}
	}
	public test2():void{
		// var ttt = evt.currentTarget.hitTestPoint( evt.stageX, evt.stageY )
		this.onRollOver(this.peifuBtn);
		// console.log( "线出现线出现" );
	}
	public test3(evt:egret.TouchEvent):void{
		// var ttt = evt.currentTarget.hitTestPoint( evt.stageX, evt.stageY )
		
		// console.log("移除了移除了");
		this.onRollOut(evt.currentTarget);
		this.removeEventListener( egret.Event.ENTER_FRAME, this.test2, this);
		
	}
	public peifuBtn:any
	public test1(evt:egret.TouchEvent):void{
		
		var ttt = evt.currentTarget.hitTestPoint( evt.stageX, evt.stageY );
		this.peifuBtn = evt.currentTarget;
		if(ttt){
			// console.log("触摸到了触摸到了");
			this.addEventListener( egret.Event.ENTER_FRAME, this.test2, this);
		}
	}


	public showMaozi(data: any, isshowReward: boolean): void {
		let arr: Array<any> = data.Positions;
		let winmoney: number = vo.GameData.resultData.Value.Main.TotalWin;
		this.hideMaozi();
		this.setAn();
		let a: Array<Array<any>> = [[], [], []];
		for (let i: number = 0; i < arr.length; i++) {
			let p: any = arr[i];
			a[p.X].push(p);
		}
		let isshowd: boolean = false;
		for (let i: number = 0; i < a.length; i++) {
			if (a[i].length > 0) {
				let reel: Reel = this.reelArr[i];
				reel.showMaozi(a[i]);
			}
		}
		if(a[1].length > 0 && winmoney / GameConfig.bili > 0){
			this.scoreGroup.visible = true;
					let col: number = a[1][0]['X'];
					let row: number = a[1][0]['Y'];
					this.scoreLabel.text = "cny " + (winmoney / GameConfig.bili) + '.00';
					this.scoreGroup.y = 150 + row * 150;
					this.scoreGroup.x = 230 + col * 300;
					this.scoreGroup.scaleX = 0;
					this.scoreGroup.scaleY = 0;
					egret.Tween.get(this.scoreGroup).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut).wait(800).to({ scaleX: 0, scaleY: 0 },500).call(() => {
						this.scoreGroup.visible = false;
					}, this);
		}else if(a[0].length > 0 && winmoney / GameConfig.bili > 0){
			this.scoreGroup.visible = true;
					let col: number = a[0][0]['X'];
					let row: number = a[0][0]['Y'];
					this.scoreLabel.text = "cny " + (winmoney / GameConfig.bili) + '.00';
					this.scoreGroup.y = 150 + row * 150;
					this.scoreGroup.x = 230 + col * 300;
					this.scoreGroup.scaleX = 0;
					this.scoreGroup.scaleY = 0;
					egret.Tween.get(this.scoreGroup).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut).wait(800).to({ scaleX: 0, scaleY: 0 },500).call(() => {
						this.scoreGroup.visible = false;
					}, this);
		}else if(winmoney / GameConfig.bili > 0){
			this.scoreGroup.visible = true;
					let col: number = a[2][0]['X'];
					let row: number = a[2][0]['Y'];
					this.scoreLabel.text = "cny " + (winmoney / GameConfig.bili) + '.00';
					this.scoreGroup.y = 150 + row * 150;
					this.scoreGroup.x = 230 + col * 300;
					this.scoreGroup.scaleX = 0;
					this.scoreGroup.scaleY = 0;
					egret.Tween.get(this.scoreGroup).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut).wait(800).to({ scaleX: 0, scaleY: 0 },500).call(() => {
						this.scoreGroup.visible = false;
					}, this);
		}
	}



	public hideMaozi(): void {
		for (let i: number = 0; i < this.reelArr.length; i++) {
			let reel: Reel = this.reelArr[i];
			reel.hideMaozi();
		}
	}

}