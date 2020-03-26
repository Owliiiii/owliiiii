class SetUI extends core.BaseUI {

	public shiZhi1: MyHslider;
	public shiZhi2: MyHslider;
	public shiZhi3: MyHslider;
	public shiZhi4: MyHslider;
	public shiZhi5: MyHslider;

	public touZhu2: eui.Label;
	public touZhu1: eui.Label;
	public ziDong2: eui.Label;
	public ziDong1: eui.Label;
	public danCi2: eui.Label;
	public danCi1: eui.Label;
	public jia2: eui.Label;
	public jia1: eui.Label;
	public jian1: eui.Label;
	public jian2: eui.Label;
	public stopAuto:eui.Image;




	public renHeTo: QieHuan;
	public freeGameTo: QieHuan;


	public upPeiFu: eui.RadioButton;
	public upGuiZe: eui.RadioButton;
	public upLiShi: eui.RadioButton;
	public upSet: eui.RadioButton;
	public upTouZhu: eui.RadioButton;

	public touZhuScroller: eui.Scroller;
	public sheZhiScroller: eui.Scroller;
	public peiFuScroller: eui.Scroller;
	
	public pfBg:eui.Image;
	public guiZeScroller: eui.Scroller;

	public liShiScroller: eui.Scroller;

	public liShiInfoGroup: eui.Scroller;
	public liShiDiTuRect0: eui.Rect;
	public liShiInfo: LiShiInfoUI;

	public liShiGroup: eui.Group;
	public liShiUpGroup: eui.Group;


	public upXuanZe: eui.Image;


	public touZhuGroup:eui.Group;

	public musicBtn: QieHuan;
	public autoBtn: QieHuan;
	public zuoShouTo: QieHuan;
	public speedBtn: QieHuan;

	public autoPlay: eui.Image;
	public autoNumBer: eui.Label;

	public upRect: eui.Rect;


	// public emptyketBtn: eui.ToggleButton;
	// public exitBtn: MouseButton;

	public numName1: number;
	public numName2: number;
	public numName3: number;
	public numName4: number;
	/**历史 */
	public numName5: number;
	public numName6: number;
	public numName7: number;

	public diTuRect: eui.Rect;

	public constructor() {
		super();
		this.skinName = SetSkin;
		
	}

	public onAdd(): void {
		super.onAdd();
		// alert("onAdd");
		this.init();
		this.huadong();
		this.registerEvent(this.upPeiFu, egret.TouchEvent.TOUCH_TAP, this.upOnTab, this);
		this.registerEvent(this.upGuiZe, egret.TouchEvent.TOUCH_TAP, this.upOnTab, this);
		this.registerEvent(this.upLiShi, egret.TouchEvent.TOUCH_TAP, this.upOnTab, this);
		this.registerEvent(this.upSet, egret.TouchEvent.TOUCH_TAP, this.upOnTab, this);
		this.registerEvent(this.upTouZhu, egret.TouchEvent.TOUCH_TAP, this.upOnTab, this);

		this.registerEvent(this.renHeTo, egret.TouchEvent.TOUCH_TAP, this.renHeToaa, this);
		this.registerEvent(this.freeGameTo, egret.TouchEvent.TOUCH_TAP, this.freeGameToaa, this);

		this.registerEvent(this.autoBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.speedBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.zuoShouTo, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		this.registerEvent(this.musicBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);

		this.registerEvent(this.autoPlay, egret.TouchEvent.TOUCH_TAP, this.onTab, this);

		this.shiZhi2.addEventListener(egret.Event.CHANGE, this.shiZhi2Change, this);
		// this.registerEvent(this.exitBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.downs, this);
		egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE,this.onOChange1,this);
		egret.MainContext.instance.stage.addEventListener(egret.Event.DEACTIVATE,this.closeMusic,this);
		// egret.MainContext.instance.stage.addEventListener(egret.Event.ACTIVATE,this.upMusic,this);
		this.zuoShouTo.liang.visible = false;
		// this.liShiInfoGroup.viewport = this.liShiInfo.list;
		//  this.liShiInfo.list.useVirtualLayout = true;
		 this.liShiInfo.list.itemRenderer = LiShiItem;
		//  SoundManager.getInstance().setEffectVolume(10);
	}

	public downs(): void {
		// let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		// ui.setUI.isHuaDong = true;
		this.isSDong = false;
	}
	public onOChange1():void{

		let ui:MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		if(!ui){
			return;
		}
		egret.setTimeout(() => {
					if(GameConfig.autoPlay){
						this.thumbDisPosion();
					}else{
							this.shiZhi1.tsbar.visible = true;
							this.shiZhi2.tsbar.visible = true;
							this.shiZhi3.tsbar.visible = true;
							this.shiZhi4.tsbar.visible = true;
							this.shiZhi5.tsbar.visible = true;

							this.shiZhi1.track.visible = true;
							this.shiZhi2.track.visible = true;
							this.shiZhi3.track.visible = true;
							this.shiZhi4.track.visible = true;
							this.shiZhi5.track.visible = true;
							
							this.shiZhi1.thumbDis.visible = false;
							this.shiZhi1.thumb0Dis.visible = false;
							this.shiZhi1.sanjiaoDis.visible = false;
							this.shiZhi2.thumbDis.visible = false;
							this.shiZhi2.thumb0Dis.visible = false;
							this.shiZhi2.sanjiaoDis.visible = false;
							this.shiZhi3.thumbDis.visible = false;
							this.shiZhi3.thumb0Dis.visible = false;
							this.shiZhi3.sanjiaoDis.visible = false;
							this.shiZhi4.thumbDis.visible = false;
							this.shiZhi4.thumb0Dis.visible = false;
							this.shiZhi4.sanjiaoDis.visible = false;
							this.shiZhi5.thumbDis.visible = false;
							this.shiZhi5.thumb0Dis.visible = false;
							this.shiZhi5.sanjiaoDis.visible = false;
					}
					if((GameManager.getInstance().gameState == GameType.GameState.PLAYING || GameManager.getInstance().getFreeCount() > 0) && !GameConfig.autoPlay){	//免费旋转时设置的界面
						this.shiZhi1.tsbar.visible = false;
						this.shiZhi1.track.visible = false;
						this.shiZhi1.thumbDis.x = this.shiZhi1.thumb.x;
						this.shiZhi1.thumbDis.visible = true;
						this.shiZhi1.thumb0Dis.x = this.shiZhi1.thumb0.x;
						this.shiZhi1.thumb0Dis.y = this.shiZhi1.thumb0.y;
						this.shiZhi1.thumb0Dis.scaleX = this.shiZhi1.thumb0.scaleX;
						this.shiZhi1.thumb0Dis.scaleY = this.shiZhi1.thumb0.scaleY
						this.shiZhi1.thumb0Dis.visible = true;
						this.shiZhi1.sanjiaoDis.x = this.shiZhi1.sanjiao.x;
						this.shiZhi1.sanjiaoDis.y = this.shiZhi1.sanjiao.y;
						this.shiZhi1.sanjiaoDis.scaleX = this.shiZhi1.sanjiao.scaleX;
						this.shiZhi1.sanjiaoDis.scaleY = this.shiZhi1.sanjiao.scaleY
						this.shiZhi1.sanjiaoDis.visible = true;
					}else if(!GameConfig.autoPlay){
						this.shiZhi1.track.visible = true;
						this.shiZhi1.tsbar.visible = true;
						this.shiZhi1.thumbDis.visible = false;
						this.shiZhi1.thumb0Dis.visible = false;
						this.shiZhi1.sanjiaoDis.visible = false;
					}
				}, this, 500);
		egret.setTimeout(() => {
					ui.setAm();
					if(GameConfig.autoPlay){
						this.stopAuto.visible = true;
						this.autoNumBer.text = "" + vo.GameData.autoPlayCount;
					}else{
						this.stopAuto.visible = false;
						this.autoNumBer.text = this.shiZhi2.tabela.text;
					}
				}, this, 300);
		if(this.currentState == "up"){				//橫版
			egret.setTimeout(() => {
					ui.jiaoHuanSet(false);
					ui.first(false);			//这个只是改变比例
					
				}, this, 500);
				
		}
		if(this.currentState == "down"){			//竖版 
			egret.setTimeout(() => {
					ui.jiaoHuanSet(true);
					ui.first(true);				//这个只是改变比例
				}, this, 500);
		}
		egret.setTimeout(() => {
					// this.setUpZhi(1);
					this.shiZhi3.maximum = parseInt(vo.GameData.betScoreArr[vo.GameData.betIndex]*2000+"") ;
					this.shiZhi4.maximum = parseInt(vo.GameData.betScoreArr[vo.GameData.betIndex]*20000+"");
					this.shiZhi5.maximum = parseInt(vo.GameData.betScoreArr[vo.GameData.betIndex]*20000+"");
					this.danCi2.text = vo.GameData.betScoreArr[vo.GameData.betIndex]*2000+".00";
					this.jia2.text = vo.GameData.betScoreArr[vo.GameData.betIndex]*20000+".00";
					this.jian2.text = vo.GameData.betScoreArr[vo.GameData.betIndex]*20000+".00";
				}, this, 300);
			// console.log("GameConfig.dangQianYe === " + GameConfig.dangQianYe);
	}


	public setUpZhi(num: number): void {
		if (num == 1) {
			GameConfig.dangQianYe = parseInt(this.upTouZhu.name);
			this.upXuanZe.x = this.upTouZhu.x;
			this.upXuanZe.width = this.upTouZhu.width * this.upTouZhu.scaleX;
			this.upTouZhu.selected = true;
		} else if (num == 2) {
			GameConfig.dangQianYe = parseInt(this.upSet.name);
			this.upXuanZe.x = this.upSet.x;
			this.upXuanZe.width = this.upSet.width * this.upSet.scaleX;
			this.upSet.selected = true;
		} else if (num == 3) {
			GameConfig.dangQianYe = parseInt(this.upPeiFu.name);
			this.upXuanZe.x = this.upPeiFu.x;
			this.upXuanZe.width = this.upPeiFu.width * this.upPeiFu.scaleX;
			this.upPeiFu.selected = true;
		} else if (num == 4) {
			GameConfig.dangQianYe = parseInt(this.upGuiZe.name);
			this.upXuanZe.x = this.upGuiZe.x;
			this.upXuanZe.width = this.upGuiZe.width * this.upGuiZe.scaleX;
			this.upGuiZe.selected = true;
		} else if (num == 5) {
			GameConfig.dangQianYe = parseInt(this.upLiShi.name);
			this.upXuanZe.x = this.upLiShi.x;
			this.upXuanZe.width = this.upLiShi.width * this.upLiShi.scaleX;
			this.upLiShi.selected = true;
		}
		egret.localStorage.setItem("dangQianYe", GameConfig.dangQianYe);
	}
	public numZ = 0;		
	public numY = 0;
	/**
	 * 滑动改变界面
	 */
	public huadong(): void {
		this.numName1 = this.touZhuScroller.x;
		this.numName2 = this.sheZhiScroller.x;
		this.numName3 = this.peiFuScroller.x;
		this.numName4 = this.guiZeScroller.x;
		this.numName6 = this.liShiScroller.x;
		this.numName5 = this.liShiUpGroup.x;
		this.numName7 = this.liShiInfoGroup.x;
		

		// this.registerEvent(this, egret.TouchEvent.TOUCH_BEGIN, (e: egret.TouchEvent) => {

		// }, this);
		// this.registerEvent(this, egret.TouchEvent.TOUCH_MOVE,this.addXiaORZuoYou,this);
		this.addEvent();
	}
	public setScoler(boo: boolean): void {
		let ofOrOn = "off";
		if (boo) {
			ofOrOn = "off";
		} else {
			ofOrOn = "on";
		}
		console.log(ofOrOn);
		this.touZhuScroller.scrollPolicyV = ofOrOn;
		this.sheZhiScroller.scrollPolicyV = ofOrOn;
		this.peiFuScroller.scrollPolicyV = ofOrOn;
		this.guiZeScroller.scrollPolicyV = ofOrOn;
		this.liShiScroller.scrollPolicyV = ofOrOn;
		this.liShiInfoGroup.scrollPolicyV = ofOrOn;

		this.touZhuScroller.touchEnabled = boo;
		this.sheZhiScroller.touchEnabled = boo;
		this.peiFuScroller.touchEnabled = boo;
		this.liShiInfoGroup.touchEnabled = boo;
		this.guiZeScroller.touchEnabled = boo;

		this.liShiScroller.touchEnabled = boo;
	}
	public changeIsHuaDongTrue(e: egret.TouchEvent): void {
		this.touZhuScroller.enabled = true;
		//this.touZhuScroller.scrollPolicyV = "off";
		//this.isHuaDong = false;
		if (this.geiZhengShu(e.stageX - this.numZ) > this.geiZhengShu(e.stageY - this.numY)) {
			return;
		}
		//this.isHuaDong = true;
	}

	public time: number;
	public changeIsHuaDongFalse(e: egret.TouchEvent): void {
		if (this.isSDong) return;
		this.numZ = e.stageX;//记录初次点击位置
		this.numY = e.stageY;//记录初次点击位置
		this.time = egret.getTimer();
		this.isjueding = false;
		this.isbegin = true;
		eui.Scroller.scrollThreshold = 1000;
	}


	public addEvent(): void {
		// this.touZhuScroller.stopAnimation();
		// this.touZhuScroller.viewport.scrollV
		//this.registerEvent(this, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchEnd,this);
		this.registerEvent(this, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
		// this.registerEvent(this.touZhuScroller, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
		// this.registerEvent(this.sheZhiScroller, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
		// this.registerEvent(this.peiFuScroller, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
		// this.registerEvent(this.guiZeScroller, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
		// this.registerEvent(this.liShiScroller, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);

		//this.registerEvent(this.liShiScroller, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
		// this.registerEvent(this.touZhuScroller, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
		// this.registerEvent(this.sheZhiScroller, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
		// this.registerEvent(this.peiFuScroller, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
		// this.registerEvent(this.guiZeScroller, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
		// this.registerEvent(this.liShiScroller, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
		this.registerEvent(egret.MainContext.instance.stage, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
		this.registerEvent(egret.MainContext.instance.stage, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
		this.registerEvent(this.touZhuScroller, egret.TouchEvent.TOUCH_BEGIN, this.changeIsHuaDongFalse, this);
		this.registerEvent(this.sheZhiScroller, egret.TouchEvent.TOUCH_BEGIN, this.changeIsHuaDongFalse, this);
		this.registerEvent(this.peiFuScroller, egret.TouchEvent.TOUCH_BEGIN, this.changeIsHuaDongFalse, this);
		this.registerEvent(this.guiZeScroller, egret.TouchEvent.TOUCH_BEGIN, this.changeIsHuaDongFalse, this);
		this.registerEvent(this.liShiScroller, egret.TouchEvent.TOUCH_BEGIN, this.changeIsHuaDongFalse, this);
		this.registerEvent(this.liShiInfoGroup,egret.TouchEvent.TOUCH_BEGIN, this.changeIsHuaDongFalse, this);
		///this.sheZhiScroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.changeIsHuaDongFalse,this,true);
		// this.registerEvent(this.touZhuScroller, egret.TouchEvent.TOUCH_END, this.changeIsHuaDongTrue, this);
		// this.registerEvent(this.sheZhiScroller, egret.TouchEvent.TOUCH_END, this.changeIsHuaDongTrue, this);
		// this.registerEvent(this.peiFuScroller, egret.TouchEvent.TOUCH_END, this.changeIsHuaDongTrue, this);
		// this.registerEvent(this.guiZeScroller, egret.TouchEvent.TOUCH_END, this.changeIsHuaDongTrue, this);
		// this.registerEvent(this.liShiScroller, egret.TouchEvent.TOUCH_END, this.changeIsHuaDongTrue, this);

	}

	public isHuaDong: boolean = true;
	public isSDong: boolean = false;

	public initScroller() {
		// egret.log("GameConfig.dangQianYe === " + GameConfig.dangQianYe);
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		if (GameConfig.dangQianYe == 1) {
			this.setUpZhi(1);
			this.touZhuScroller.visible = true;
			ui.curr();
			egret.Tween.get(this.touZhuScroller).to({ x: this.numName1 }, 100).call(() => {
				//this.huadong();
			});
		} else if (GameConfig.dangQianYe == 2) {
			this.sheZhiScroller.visible = true;
			this.setUpZhi(2);
			egret.Tween.get(this.sheZhiScroller).to({ x: this.numName2 }, 100).call(() => {
				//this.huadong();
			});
		} else if (GameConfig.dangQianYe == 3) {
			this.peiFuScroller.visible = true;
			this.pfBg.visible = true;
			this.setUpZhi(3);
			egret.Tween.get(this.pfBg).to({ x: this.numName3 }, 100);
			egret.Tween.get(this.peiFuScroller).to({ x: this.numName3 }, 100).call(() => {
				//this.huadong();
			});
		} else if (GameConfig.dangQianYe == 4) {
			this.guiZeScroller.visible = true;
			this.setUpZhi(4);
			egret.Tween.get(this.guiZeScroller).to({ x: this.numName4 }, 100).call(() => {
				//this.huadong();
			});
		} else if (GameConfig.dangQianYe == 5) {
			this.setUpZhi(5);
			this.getAndShowHistory();
			this.liShiScroller.visible = true;
			this.liShiUpGroup.visible = true;

			egret.Tween.get(this.liShiScroller).to({ x: this.numName6 }, 100).call(() => {
				//this.huadong();
			});
			egret.Tween.get(this.liShiUpGroup).to({ x: this.numName5 }, 100).call(() => {
				//this.huadong();
			});
		}
	}

	public geiZhengShu(e: number): any {
		if (e < 0) {
			return -e;
		} else {
			return e;
		}
	}

	public touchEnd(e: egret.TouchEvent): void {
		//console.log('aaaaaaaa', e.currentTarget);
		if (!this.isHuaDong) {
			return;
		}
		
		if (!this.isbegin) return;
		this.isbegin = false;
		if (this.isSDong) return;
		this.isSDong = false;
		// if(this.geiZhengShu(e.stageX-this.numZ)<this.geiZhengShu(e.stageY-this.numZ)){
		// 	this.initScroller();
		// 	return;
		// }
		this.liShiInfoGroup.visible = false;
		this.liShiDiTuRect0.visible = false;

		//this.setScoler(true);
		this.peiFuScroller.visible = false;
		this.pfBg.visible = false;
		this.sheZhiScroller.visible = false;
		this.guiZeScroller.visible = false;
		this.touZhuScroller.visible = false;
		this.liShiScroller.visible = false;
		this.liShiUpGroup.visible = false;

		// this.touZhuScroller.touchEnabled = true;
		// this.peiFuScroller.touchEnabled = true;
		// this.sheZhiScroller.touchEnabled = true;
		// this.guiZeScroller.touchEnabled = true;
		// this.liShiScroller.touchEnabled = true;

		// this.removeRegister(this);
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		if (GameConfig.dangQianYe == 1) {
			this.touZhuScroller.visible = true;
			ui.curr();
			if (e.stageX - this.numZ < -this.width * 1 / 4) {
				this.touZhuScroller.visible = false;
				this.sheZhiScroller.visible = true;
				this.setUpZhi(2);
				egret.Tween.get(this.sheZhiScroller).to({ x: this.numName2 }, 100).call(() => {
					//this.huadong();
				});
			} else {
				egret.Tween.get(this.touZhuScroller).to({ x: this.numName1 }, 100).call(() => {
					//this.huadong();
				});
			}
		} else if (GameConfig.dangQianYe == 2) {
			if (e.stageX - this.numZ < -this.width * 1 / 4) {

				this.sheZhiScroller.visible = false;
				this.peiFuScroller.visible = true;
				this.pfBg.visible = true;
				this.setUpZhi(3);
				egret.Tween.get(this.pfBg).to({ x: this.numName3 }, 100);
				egret.Tween.get(this.peiFuScroller).to({ x: this.numName3 }, 100).call(() => {
					//this.huadong();
				});
			} else if (e.stageX - this.numZ > this.width * 1 / 4) {
				this.sheZhiScroller.visible = false;
				this.touZhuScroller.visible = true;
				ui.curr();
				this.setUpZhi(1);
				egret.Tween.get(this.touZhuScroller).to({ x: this.numName1 }, 100).call(() => {
					//this.huadong();
				});
			} else {
				this.sheZhiScroller.visible = true;
				this.setUpZhi(2);
				egret.Tween.get(this.sheZhiScroller).to({ x: this.numName2 }, 100).call(() => {
					//this.huadong();
				});
			}
		} else if (GameConfig.dangQianYe == 3) {
			if (e.stageX - this.numZ < -this.width * 1 / 4) {
				this.peiFuScroller.visible = false;
				this.pfBg.visible = false;
				this.guiZeScroller.visible = true;
				this.setUpZhi(4);
				egret.Tween.get(this.guiZeScroller).to({ x: this.numName4 }, 100).call(() => {
					//this.huadong();
				});
			} else if (e.stageX - this.numZ > this.width * 1 / 4) {
				this.peiFuScroller.visible = false;
				this.pfBg.visible = false;
				this.sheZhiScroller.visible = true;
				this.setUpZhi(2);
				egret.Tween.get(this.sheZhiScroller).to({ x: this.numName2 }, 100).call(() => {
					//this.huadong();
				});
			} else {
				this.peiFuScroller.visible = true;
				this.pfBg.visible = true;
				this.setUpZhi(3);
				egret.Tween.get(this.pfBg).to({ x: this.numName3 }, 100);
				egret.Tween.get(this.peiFuScroller).to({ x: this.numName3 }, 100).call(() => {
					//this.huadong();
				});
			}
		} else if (GameConfig.dangQianYe == 4) {
			if (e.stageX - this.numZ < -this.width * 1 / 4) {
				this.setUpZhi(5);
				this.guiZeScroller.visible = false;
				this.getAndShowHistory();
				this.liShiScroller.visible = true;
				egret.Tween.get(this.liShiScroller).to({ x: this.numName6 }, 100).call(() => {
					//this.huadong();
				});
				this.liShiUpGroup.visible = true;
				egret.Tween.get(this.liShiUpGroup).to({ x: this.numName5 }, 100).call(() => {
					//this.huadong();
				});
			} else if (e.stageX - this.numZ > this.width * 1 / 4) {
				this.guiZeScroller.visible = false;
				this.peiFuScroller.visible = true;
				this.pfBg.visible = true;
				this.setUpZhi(3);
				egret.Tween.get(this.pfBg).to({ x: this.numName3 }, 100);
				egret.Tween.get(this.peiFuScroller).to({ x: this.numName3 }, 100).call(() => {
					//this.huadong();
				});
			} else {
				this.guiZeScroller.visible = true;
				this.setUpZhi(4);
				egret.Tween.get(this.guiZeScroller).to({ x: this.numName4 }, 100).call(() => {
					//this.huadong();
				});
			}
		} else if (GameConfig.dangQianYe == 5) {
			// if(e.stageX<this.width*1/4 ){
			this.liShiScroller.visible = true;
			this.liShiUpGroup.visible = true;

			// 	this.setUpZhi(1);
			// 	this.touZhuScroller.visible = true;
			// 	egret.Tween.get(this.guiZeScroller).to({ x:this.numName4 }, 500);

			// }else
			if (e.stageX - this.numZ > this.width * 1 / 4) {
				this.liShiScroller.visible = false;
				this.liShiUpGroup.visible = false;
				this.guiZeScroller.visible = true;
				this.setUpZhi(4);
				egret.Tween.get(this.guiZeScroller).to({ x: this.numName4 }, 100).call(() => {
					//this.huadong();
				});
			} else {
				egret.Tween.get(this.liShiScroller).to({ x: this.numName6 }, 100).call(() => {
					//this.huadong();
				});
				egret.Tween.get(this.liShiUpGroup).to({ x: this.numName5 }, 100).call(() => {
					//this.huadong();
				});
			}
		}
		this.numZ = e.stageX;
	}
	
	public isjueding: boolean = false;
	public isbegin: boolean = false;
	public touchMove(e: egret.TouchEvent): void {
		if (!this.isbegin) return;
		
		if (this.isjueding == false && egret.getTimer() - this.time > 100) {
			console.log('x', Math.abs(e.stageX - this.numZ));
			console.log('y', Math.abs(e.stageY - this.numY));
			this.isjueding = true;
			if (Math.abs(e.stageX - this.numZ) < Math.abs(e.stageY - this.numY)) {
				this.isHuaDong = false;
				eui.Scroller.scrollThreshold = 1;
				return;
			}
			else {
				eui.Scroller.scrollThreshold = 1000;
				this.isHuaDong = true;
			}
		}
		else {
			if (egret.getTimer() - this.time <= 100) {
				this.numZ = e.stageX;
				this.numY = e.stageY;
				return;
			}
		}

		if (!this.isHuaDong) return;
		
		this.liShiInfoGroup.visible = false;
		this.liShiDiTuRect0.visible = false;
		// if(this.geiZhengShu(e.stageX-this.numZ)<this.geiZhengShu(e.stageY-this.numZ)){
		// 	this.setScoler(true);
		// 	// this.initScroller();
		// 	return;
		// }
		this.peiFuScroller.visible = false;
		this.pfBg.visible = false;
		this.sheZhiScroller.visible = false;
		this.guiZeScroller.visible = false;
		this.touZhuScroller.visible = false;
		this.liShiScroller.visible = false;
		this.liShiUpGroup.visible = false;
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);

		if (GameConfig.dangQianYe == 1) {

			this.touZhuScroller.visible = true;
			ui.curr();
			if (e.stageX < this.numZ) {
				this.touZhuScroller.x = this.numName1 + (e.stageX - this.numZ);

				this.sheZhiScroller.visible = true;
				this.sheZhiScroller.x = this.width + (e.stageX - this.numZ);
			}

		} else if (GameConfig.dangQianYe == 2) {
			this.sheZhiScroller.visible = true;
			if (e.stageX > this.numZ) {
				this.sheZhiScroller.x = this.numName2 + (e.stageX - this.numZ);
				this.touZhuScroller.visible = true;
				ui.curr();
				this.touZhuScroller.x = (e.stageX - this.numZ) - this.touZhuScroller.width;
			} else {
				this.sheZhiScroller.x = this.numName2 + (e.stageX - this.numZ);
				this.peiFuScroller.visible = true;
				this.pfBg.visible = true;
				this.peiFuScroller.x = this.width + (e.stageX - this.numZ);
				this.pfBg.x = this.peiFuScroller.x;//this.width + (e.stageX - this.numZ);
			}



		} else if (GameConfig.dangQianYe == 3) {

			this.peiFuScroller.visible = true;
			this.pfBg.visible = true;
			this.pfBg.x = this.peiFuScroller.x;
			if (e.stageX > this.numZ) {
				this.peiFuScroller.x = this.numName3 + (e.stageX - this.numZ);
				this.pfBg.x = this.numName3 + (e.stageX - this.numZ);				
				this.sheZhiScroller.visible = true;
				this.sheZhiScroller.x = (e.stageX - this.numZ) - this.sheZhiScroller.width;
			} else {
				this.peiFuScroller.x = this.numName3 + (e.stageX - this.numZ);
				this.pfBg.x = this.numName3 + (e.stageX - this.numZ);
				this.guiZeScroller.visible = true;
				this.guiZeScroller.x = this.width + (e.stageX - this.numZ);
			}
		} else if (GameConfig.dangQianYe == 4) {
			this.guiZeScroller.visible = true;
			if (e.stageX > this.numZ) {
				this.guiZeScroller.x = this.numName4 + (e.stageX - this.numZ);
				this.peiFuScroller.visible = true;
				this.pfBg.visible = true;
				this.pfBg.x = (e.stageX - this.numZ) - this.peiFuScroller.width;
				this.peiFuScroller.x = (e.stageX - this.numZ) - this.peiFuScroller.width;
				
			} else {
				this.guiZeScroller.x = this.numName4 + (e.stageX - this.numZ);
				this.liShiScroller.visible = true;
				this.liShiScroller.x = this.width + (e.stageX - this.numZ);
				this.liShiUpGroup.visible = true;
				this.liShiUpGroup.x = this.width + (e.stageX - this.numZ);
				
			}
		} else if (GameConfig.dangQianYe == 5) {
			this.liShiScroller.visible = true;
			this.liShiUpGroup.visible = true;
			if (e.stageX > this.numZ) {
				this.x = this.numName6 + (e.stageX - this.numZ);
				this.liShiScroller.x = this.numName5 + (e.stageX - this.numZ);
				this.liShiUpGroup.x = this.numName5 + (e.stageX - this.numZ);
				
				this.guiZeScroller.visible = true;
				this.guiZeScroller.x = (e.stageX - this.numZ) - this.guiZeScroller.width;
			}
		}
	}

	public shiZhi2Change(e: egret.TouchEvent): void {
		this.autoNumBer.text = this.shiZhi2.tabela.text;

	}
	public setHsliderState():void{

	}
	private thumbDisPosion() :void{
				this.shiZhi1.track.visible = false;
				this.shiZhi2.track.visible = false;
				this.shiZhi3.track.visible = false;
				this.shiZhi4.track.visible = false;
				this.shiZhi5.track.visible = false;

				this.shiZhi1.tsbar.visible = false;
				this.shiZhi1.thumbDis.x = this.shiZhi1.thumb.x;
				this.shiZhi1.thumbDis.visible = true;
				this.shiZhi1.thumb0Dis.x = this.shiZhi1.thumb0.x;
				this.shiZhi1.thumb0Dis.y = this.shiZhi1.thumb0.y;
				this.shiZhi1.thumb0Dis.scaleX = this.shiZhi1.thumb0.scaleX;
				this.shiZhi1.thumb0Dis.scaleY = this.shiZhi1.thumb0.scaleY;
				this.shiZhi1.thumb0Dis.visible = true;
				this.shiZhi1.sanjiaoDis.x = this.shiZhi1.sanjiao.x;
				this.shiZhi1.sanjiaoDis.y = this.shiZhi1.sanjiao.y;
				this.shiZhi1.sanjiaoDis.scaleX = this.shiZhi1.sanjiao.scaleX;
				this.shiZhi1.sanjiaoDis.scaleY = this.shiZhi1.sanjiao.scaleY;
				this.shiZhi1.sanjiaoDis.visible = true;
				

				this.shiZhi2.tsbar.visible = false;
				this.shiZhi2.thumbDis.x = this.shiZhi2.thumb.x;
				this.shiZhi2.thumbDis.visible = true;
				this.shiZhi2.thumb0Dis.x = this.shiZhi2.thumb0.x;
				this.shiZhi2.thumb0Dis.y = this.shiZhi2.thumb0.y;
				this.shiZhi2.thumb0Dis.scaleX = this.shiZhi2.thumb0.scaleX;
				this.shiZhi2.thumb0Dis.scaleY = this.shiZhi2.thumb0.scaleY;
				this.shiZhi2.thumb0Dis.visible = true;
				this.shiZhi2.sanjiaoDis.x = this.shiZhi2.sanjiao.x;
				this.shiZhi2.sanjiaoDis.y = this.shiZhi2.sanjiao.y;
				this.shiZhi2.sanjiaoDis.scaleX = this.shiZhi2.sanjiao.scaleX;
				this.shiZhi2.sanjiaoDis.scaleY = this.shiZhi2.sanjiao.scaleY;
				this.shiZhi2.sanjiaoDis.visible = true;

				this.shiZhi3.tsbar.visible = false;
				this.shiZhi3.thumbDis.x = this.shiZhi3.thumb.x;
				this.shiZhi3.thumbDis.visible = true;
				this.shiZhi3.thumb0Dis.x = this.shiZhi3.thumb0.x;
				this.shiZhi3.thumb0Dis.y = this.shiZhi3.thumb0.y;
				this.shiZhi3.thumb0Dis.scaleX = this.shiZhi3.thumb0.scaleX;
				this.shiZhi3.thumb0Dis.scaleY = this.shiZhi3.thumb0.scaleY;
				this.shiZhi3.thumb0Dis.visible = true;
				this.shiZhi3.sanjiaoDis.x = this.shiZhi3.sanjiao.x;
				this.shiZhi3.sanjiaoDis.y = this.shiZhi3.sanjiao.y;
				this.shiZhi3.sanjiaoDis.scaleX = this.shiZhi3.sanjiao.scaleX;
				this.shiZhi3.sanjiaoDis.scaleY = this.shiZhi3.sanjiao.scaleY;
				this.shiZhi3.sanjiaoDis.visible = true;

				this.shiZhi4.tsbar.visible = false;
				this.shiZhi4.thumbDis.x = this.shiZhi4.thumb.x;
				this.shiZhi4.thumbDis.visible = true;
				this.shiZhi4.thumb0Dis.x = this.shiZhi4.thumb0.x;
				this.shiZhi4.thumb0Dis.y = this.shiZhi4.thumb0.y;
				this.shiZhi4.thumb0Dis.scaleX = this.shiZhi4.thumb0.scaleX;
				this.shiZhi4.thumb0Dis.scaleY = this.shiZhi4.thumb0.scaleY;
				this.shiZhi4.thumb0Dis.visible = true;
				this.shiZhi4.sanjiaoDis.x = this.shiZhi4.sanjiao.x;
				this.shiZhi4.sanjiaoDis.y = this.shiZhi4.sanjiao.y;
				this.shiZhi4.sanjiaoDis.scaleX = this.shiZhi4.sanjiao.scaleX;
				this.shiZhi4.sanjiaoDis.scaleY = this.shiZhi4.sanjiao.scaleY;
				this.shiZhi4.sanjiaoDis.visible = true;

				this.shiZhi5.tsbar.visible = false;
				this.shiZhi5.thumbDis.x = this.shiZhi5.thumb.x;
				this.shiZhi5.thumbDis.visible = true;
				this.shiZhi5.thumb0Dis.x = this.shiZhi5.thumb0.x;
				this.shiZhi5.thumb0Dis.y = this.shiZhi5.thumb0.y;
				this.shiZhi5.thumb0Dis.scaleX = this.shiZhi5.thumb0.scaleX;
				this.shiZhi5.thumb0Dis.scaleY = this.shiZhi5.thumb0.scaleY;
				this.shiZhi5.thumb0Dis.visible = true;
				this.shiZhi5.sanjiaoDis.x = this.shiZhi5.sanjiao.x;
				this.shiZhi5.sanjiaoDis.y = this.shiZhi5.sanjiao.y;
				this.shiZhi5.sanjiaoDis.scaleX = this.shiZhi5.sanjiao.scaleX;
				this.shiZhi5.sanjiaoDis.scaleY = this.shiZhi5.sanjiao.scaleY;
				this.shiZhi5.sanjiaoDis.visible = true;
	}


	public init(): void {
		if (this.visible) {
			if(GameConfig.autoPlay){		//托管游戏状态下 打开设置
				
				this.autoNumBer.text = "" + vo.GameData.autoPlayCount;
				this.stopAuto.visible = true;
				this.stopAuto.addEventListener(egret.TouchEvent.TOUCH_TAP,() => {	//设置界面红色托管按钮
					let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
					this.stopAuto.visible = false;
					this.visible = false;
					ui.setA.source = "uiElements_05-11_png";			//三条线图 //分别是左手右手模式情况
					ui.setA0.source = "uiElements_05-11_png";			//三条线图
					GameManager.getInstance().resume();
					
					GameManager.getInstance().autoStopGameX();
					this.autoNumBer.text = this.shiZhi2.tabela.text;
					this.init();
            	}, this);
				this.thumbDisPosion();
			egret.setTimeout(() =>{
				this.renHeTo.test.visible = true;
				this.freeGameTo.test.visible = true;
				if(this.renHeTo.liang.visible){
					this.renHeTo.liangDiTuDis.visible = true;
				}
				if(this.freeGameTo.liang.visible){
					this.freeGameTo.liangDiTuDis.visible = true;
				}
				
			},this,200);
				


			}else{
				
				this.stopAuto.visible = false;
				this.autoNumBer.text = this.shiZhi2.tabela.text;
				this.stopAuto.removeEventListener(egret.TouchEvent.TOUCH_TAP,() => {
					this.stopAuto.visible = false;
					this.autoNumBer.text = this.shiZhi2.tabela.text;
					GameManager.getInstance().autoStopGame();
					this.init();
            	}, this);
				this.shiZhi1.tsbar.visible = true;
				this.shiZhi2.tsbar.visible = true;
				this.shiZhi3.tsbar.visible = true;
				this.shiZhi4.tsbar.visible = true;
				this.shiZhi5.tsbar.visible = true;

				this.shiZhi1.track.visible = true;
				this.shiZhi2.track.visible = true;
				this.shiZhi3.track.visible = true;
				this.shiZhi4.track.visible = true;
				this.shiZhi5.track.visible = true;

				this.shiZhi1.thumbDis.visible = false;
				this.shiZhi1.thumb0Dis.visible = false;
				this.shiZhi1.sanjiaoDis.visible = false;
				this.shiZhi2.thumbDis.visible = false;
				this.shiZhi2.thumb0Dis.visible = false;
				this.shiZhi2.sanjiaoDis.visible = false;
				this.shiZhi3.thumbDis.visible = false;
				this.shiZhi3.thumb0Dis.visible = false;
				this.shiZhi3.sanjiaoDis.visible = false;
				this.shiZhi4.thumbDis.visible = false;
				this.shiZhi4.thumb0Dis.visible = false;
				this.shiZhi4.sanjiaoDis.visible = false;
				this.shiZhi5.thumbDis.visible = false;
				this.shiZhi5.thumb0Dis.visible = false;
				this.shiZhi5.sanjiaoDis.visible = false;
				egret.setTimeout(()=>{
					this.renHeTo.test.visible = false;
					this.freeGameTo.test.visible = false;
					if(this.renHeTo.liang.visible){
						this.renHeTo.liangDiTuDis.visible = false;
					}
					if(this.freeGameTo.liang.visible){
						this.freeGameTo.liangDiTuDis.visible = false;
					}
				},this,200);
			}
			if((GameManager.getInstance().gameState == GameType.GameState.PLAYING || GameManager.getInstance().getFreeCount() > 0) && !GameConfig.autoPlay){ 	//免费旋转时设置的界面
				this.shiZhi1.tsbar.visible = false;
				this.shiZhi1.track.visible = false;
				this.shiZhi1.thumbDis.x = this.shiZhi1.thumb.x;
				this.shiZhi1.thumbDis.visible = true;
				this.shiZhi1.thumb0Dis.x = this.shiZhi1.thumb0.x;
				this.shiZhi1.thumb0Dis.y = this.shiZhi1.thumb0.y;
				this.shiZhi1.thumb0Dis.scaleX = this.shiZhi1.thumb0.scaleX;
				this.shiZhi1.thumb0Dis.scaleY = this.shiZhi1.thumb0.scaleY
				this.shiZhi1.thumb0Dis.visible = true;
				this.shiZhi1.sanjiaoDis.x = this.shiZhi1.sanjiao.x;
				this.shiZhi1.sanjiaoDis.y = this.shiZhi1.sanjiao.y;
				this.shiZhi1.sanjiaoDis.scaleX = this.shiZhi1.sanjiao.scaleX;
				this.shiZhi1.sanjiaoDis.scaleY = this.shiZhi1.sanjiao.scaleY
				this.shiZhi1.sanjiaoDis.visible = true;
			}else if(!GameConfig.autoPlay){
				this.shiZhi1.track.visible = true;
				this.shiZhi1.tsbar.visible = true;
				this.shiZhi1.thumbDis.visible = false;
				this.shiZhi1.thumb0Dis.visible = false;
				this.shiZhi1.sanjiaoDis.visible = false;
			}
			
			
			let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
			ui.setUI.danCi2.text = vo.GameData.betScoreArr[vo.GameData.betIndex ] * 2000 + ".00";
			ui.setUI.jia2.text = vo.GameData.betScoreArr[vo.GameData.betIndex ] * 20000 + ".00";
			ui.setUI.jian2.text = vo.GameData.betScoreArr[vo.GameData.betIndex ] * 20000 + ".00";

			

			this.freeGameTo.liang.visible = GameConfig.freeWin;
			this.freeGameTo.anYuan.visible = !GameConfig.freeWin;
			this.renHeTo.liang.visible = GameConfig.someWin;
			this.renHeTo.anYuan.visible = !GameConfig.someWin;

			this.autoBtn.liang.visible = GameConfig.autoChangeBet;
			this.autoBtn.anYuan.visible = !GameConfig.autoChangeBet;
			this.speedBtn.liang.visible = GameConfig.speedPlay;
			this.speedBtn.anYuan.visible = !GameConfig.speedPlay;

			if (egret.localStorage.getItem("zuoShouMoShi") == "0")//关
			{
				this.zuoShouTo.currentState = "down";
			} else {
				this.zuoShouTo.currentState = "up";
			}

			
			
			// egret.log("this.setNum === " + this.setNum);
			// //改变橫竖屏幕显示设置界面？？

			switch(GameConfig.dangQianYe){
				case 1:
					this.touZhuScroller.visible = true;
					ui.curr();
					this.upXuanZe.x = this.upTouZhu.x;
					this.upXuanZe.width = this.upTouZhu.width * this.upTouZhu.scaleX;
				break;
				case 2:
					this.sheZhiScroller.visible = true;
					this.upXuanZe.x = this.upSet.x;
					this.upXuanZe.width = this.upSet.width * this.upSet.scaleX;
				break;
				case 3:
					this.peiFuScroller.visible = true;
					this.pfBg.visible = true;
					this.pfBg.x = this.peiFuScroller.x;
					this.upXuanZe.x = this.upPeiFu.x;
					this.upXuanZe.width = this.upPeiFu.width * this.upPeiFu.scaleX;
				break;
				case 4:
					this.guiZeScroller.visible = true;
					this.upXuanZe.x = this.upGuiZe.x;
					this.upXuanZe.width = this.upGuiZe.width * this.upGuiZe.scaleX;
				break;
				case 5:
					this.liShiScroller.visible = true;
					this.liShiUpGroup.visible = true;
					this.upXuanZe.x = this.upLiShi.x;
					this.upXuanZe.width = this.upLiShi.width * this.upLiShi.scaleX;
				break;
				
			}
		}
	}
	

	public renHeToaa(): void {
		egret.setTimeout(()=>{
			GameConfig.someWin = this.renHeTo.liang.visible;
		},this,200);
	}
	public freeGameToaa(): void {
		egret.setTimeout(()=>{
			GameConfig.freeWin = this.freeGameTo.liang.visible;
		},this,200);
	}

	public static dangQianYe = 1;
	public jiLuZ = 0;
	public setNum:number;

	public upOnTab(e: egret.TouchEvent): void {
		this.upXuanZe.x = e.currentTarget.x;
		
		this.upXuanZe.width = e.currentTarget.width * e.currentTarget.scaleX;
		this.peiFuScroller.visible = false;
		this.pfBg.visible = false;
		this.sheZhiScroller.visible = false;
		this.guiZeScroller.visible = false;
		this.touZhuScroller.visible = false;

		this.liShiScroller.visible = false;
		this.liShiUpGroup.visible = false;
		this.liShiInfoGroup.visible = false;
		this.liShiDiTuRect0.visible = false;
		if(e.currentTarget.selected){
			this.setNum = parseInt(e.currentTarget.name);
		}
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		switch (e.currentTarget) {
			case this.upPeiFu://声音开关
				this.peiFuScroller.visible = true;
				this.pfBg.visible = true;
				this.pfBg.x = this.peiFuScroller.x;
				this.showYeMian(this.peiFuScroller, this.numName3, e.currentTarget);

				break;
			case this.upGuiZe://自动调整投注开关
				this.showYeMian(this.guiZeScroller, this.numName4, e.currentTarget);
				this.guiZeScroller.visible = true;
				break;
			case this.upLiShi://快速开关
				this.liShiScroller.visible = true;
				this.liShiUpGroup.visible = true;

				this.showYeMian(this.liShiScroller, this.numName6, e.currentTarget);
				// this.liShiGroup = new eui.Group();
				// this.liShiScroller.addChild(this.liShiGroup);
				this.getAndShowHistory();
				break;
			case this.upSet://空格启动开关

				this.sheZhiScroller.visible = true;
				this.showYeMian(this.sheZhiScroller, this.numName2, e.currentTarget);
				break;
			case this.upTouZhu://退出开关
				this.touZhuScroller.visible = true;
				ui.curr();
				this.showYeMian(this.touZhuScroller, this.numName1, e.currentTarget);
				break;
		}
		GameConfig.dangQianYe = parseInt(e.currentTarget.name);
		egret.localStorage.setItem("dangQianYe", GameConfig.dangQianYe);

	}


	public showYeMian(e: any, weiZhi: any, EcurrentTarget: any): void {
		this.jiLuZ = weiZhi;
		if (parseInt(EcurrentTarget.name) > GameConfig.dangQianYe) {
			this.showTween(e, this.width);
		} else if (parseInt(EcurrentTarget.name) < GameConfig.dangQianYe) {
			this.showTween(e, -this.width);
		}
	}
	public showTween(e: any, thisx: number): void {
		e.x = thisx;
		if (this.currentState == "up") {
			egret.Tween.get(e).to({ x: this.jiLuZ }, 300);
		} else {
			egret.Tween.get(e).to({ x: this.jiLuZ }, 200);
		}
	}


	public jiLuY = 0;
	/**
	 * 获取并展示游戏历史记录 
	 */
	public getAndShowHistory(): void {
		this.liShiUpGroup.visible = true;
		let obj = GameConfig.ceshilishi;
		// let objJeson = JSON.parse(obj);
		if(!obj){
			return;
		}
		this.jiLuY = 0;
		let number = 0;
		this.liShiGroup.removeChildren();
		for (let key in obj.History) {
			let value = obj.History[key]
			if (obj.History[number + 1] != null && obj.History[number + 1] != undefined) {
				this.showHistory(value, true);
			} else {
				this.showHistory(value, false);
			}
			number++;
		}
		let group = new eui.Group();
		
		group.y = 26 + this.jiLuY * 100;
		group.height = 100;
		this.liShiGroup.addChild(group);
	}

	public showHistory(obj: any, isHaveNext: boolean): void {
		// let group = new eui.Group(); 
		let lishiUi: LiShiUI = new LiShiUI(obj, isHaveNext);
		lishiUi.img1.name = obj;
		lishiUi.img1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shwoInfo, this);		  //打开
		this.liShiInfo.out.addEventListener(egret.TouchEvent.TOUCH_TAP, this.outInfo, this);  //关闭
		lishiUi.left = 18;
		lishiUi.currentState = this.currentState;
		lishiUi.y = 31 + this.jiLuY * (lishiUi.height + 35);
		// group.y = 26+this.jiLuY*(lishiUi.height+30);
		// group.addChild(lishiUi);
		this.liShiGroup.addChild(lishiUi);
		this.jiLuY++;
	}


	public shwoInfo(e: egret.Event): void {
		// let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		this.liShiInfo.init(e.currentTarget.name);
		// this.liShiInfo.list.dataProvider = new eui.ArrayCollection(e.currentTarget.name.Value.Main.WinResults);
		this.liShiInfoGroup.visible = true;
		this.liShiDiTuRect0.visible = true;	
		

	}

	public outInfo(): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		this.liShiInfoGroup.visible = false;
		this.liShiDiTuRect0.visible = false;

	}
	/**
	 * tabel :第一个值
	 * x="0" 
	 * textColor="0x000000" 
	 * size="22" 
	 * width="164" 
	 * height="46"   
	 * fontFamily="Times" 
	 * lineSpacing="5"
	 */
	public setZhi(tabel: any, x: string, y: string, textColor: string, size: string, width: string, height: string, fontFamily: string, lineSpacing: string, ): void {
		tabel.x = x;
		tabel.y = y;
		tabel.textColor = textColor;
		tabel.size = size;
		tabel.width = width;
		tabel.height = height;
		tabel.fontFamily = fontFamily;
		tabel.lineSpacing = lineSpacing;

	}
	public closeMusic(){
		// egret.log("关");
		GameManager.getInstance().stopMusic();
	}
	public upMusic(){
		// egret.log("开");
		GameManager.getInstance().startMusic();
	}
	public onTab(e: egret.TouchEvent): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		switch (e.currentTarget) {
			case this.zuoShouTo://左手模式开关
				// this.updataSound();
				egret.setTimeout(() => {
					if(this.currentState == "up"){	//橫
						ui.jiaoHuanSet1(false);
					}else{
						ui.jiaoHuanSet1(true);
					}
				}, this, 300);
				break;
			case this.musicBtn://声音开关
				// this.updataSound();
				SoundManager.getInstance().setBgOn(GameConfig.musicSected);//this.musicBtn.liang.visible
				SoundManager.getInstance().setEffectOn(GameConfig.musicSected);
				if(GameConfig.musicSected && (GameManager.getInstance().gameState == GameType.GameState.PLAYING)){
					GameManager.getInstance().startMusic();
				}else{
					GameManager.getInstance().stopMusic();	
				}
				break;
			case this.autoBtn://自动调整投注开关
				egret.setTimeout(()=>{	
					GameConfig.autoChangeBet = this.autoBtn.liang.visible;
				},this,200);
				break;
			case this.speedBtn://快速开关
				this.updataSpeedTime();
				break;
			case this.autoPlay://自动游戏
				vo.GameData.autoPlayCount = parseInt(this.shiZhi2.tabela.text);
				ui.setUI.visible = false;
				ui.setA.source = "uiElements_05-11_png";
				ui.setA0.source = "uiElements_05-11_png";
				GameManager.getInstance().autoStartGame();
				// GameManager.getInstance().pausume();
				break;
			// case this.emptyketBtn://空格启动开关
			// 	this.updataEmpty();
			// 	break;
			// case this.exitBtn://退出开关
			// 	core.UIManager.closeUI(core.UIConst.SetUI);
			// 	GameManager.getInstance().resume();
			// 	break;
		}
	}
    /**
	 * 更新快速
	 */
	public updataSpeedTime(): void {
		egret.setTimeout(()=>{	
					GameConfig.speedPlay = this.speedBtn.liang.visible;
				},this,200);
		// let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		// ui.shanBtn.selected = GameConfig.speedPlay;
	}

	/**
	 * 更新声音
	 */
	public updataSound(): void {
		// SoundManager.getInstance().setBgOn(this.musicBtn.liang.visible);
		// SoundManager.getInstance().setEffectOn(this.musicBtn.liang.visible);

		SoundManager.getInstance().setBgOn(GameConfig.musicSected);
		SoundManager.getInstance().setEffectOn(GameConfig.musicSected);

	}



}