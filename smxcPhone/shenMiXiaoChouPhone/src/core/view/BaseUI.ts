module core {
	export class BaseUI extends eui.Component {
		private eventPool: Array<EventObj> = [];
		public isShow: boolean;
		public layer: number;
		public constructor() {
			super();
			this.initSize();
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAdd, this);
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
			// egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE,this.onOChange,this);
			this.registerEvent(this, eui.UIEvent.RESIZE, this.initSc,this);
			LayerManager.getInstance().addEventListener(SetEvent.SET_OR_CHANGE, this.onOChange1, this);
		}

	    public 	onOChange():void
		{
			egret.clearTimeout(this.ts);
			let s: number = window.innerHeight / window.innerWidth;
			if (window.innerWidth >= window.innerHeight) {
				if (egret.Capabilities.os == 'iOS') {
					window['$']('#main').css('height', window.innerHeight+100);
					window['$']('#main').css('width', window.innerWidth+1);					
				}		
				this.currentState = 'up';
				egret.MainContext.instance.stage.setContentSize(1280,720);
			}
			else {
				if (egret.Capabilities.os == 'iOS') {
					window['$']('#main').css('height', window.innerHeight+1);
					window['$']('#main').css('width', window.innerWidth+1);
				}
				this.currentState = 'down';
				egret.MainContext.instance.stage.setContentSize(720,1280);

			}
			this.ts = egret.setTimeout(() => {
				this.onResize();
			}, this, 300);
			
		}
		private ts: number;
		public onOChange1(): void {
			egret.clearTimeout(this.ts);
			let s: number = window.innerHeight / window.innerWidth;
			if (window.innerWidth >= window.innerHeight) {
				if (egret.Capabilities.os == 'iOS') {
					window['$']('#main').css('height', window.innerHeight+100);
					window['$']('#main').css('width', window.innerWidth+1);					
				}		
				this.currentState = 'up';
				egret.MainContext.instance.stage.setContentSize(1280, 720);
			}
			else {
				if (egret.Capabilities.os == 'iOS') {
					window['$']('#main').css('height', window.innerHeight+1);
					window['$']('#main').css('width', window.innerWidth+1);
				}
				this.currentState = 'down';
				egret.MainContext.instance.stage.setContentSize(720, 1280);

			}
			this.ts = egret.setTimeout(() => {
				this.onResize();
			}, this, 300);
		}
		private onResize(): void {
			egret.updateAllScreens();
			if (window.innerWidth >= window.innerHeight) {
				this.updataHor();
			}
			else {
				this.updataVer();
			}
		}
		public updataHor(): void {

		}

		public updataVer(): void {

		}


		public initSc(): void {
			
			let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
			if(ui!=null&&ui!=undefined){
				if(ui.setUI.visible){
					// ui.setUI.setUpZhi(GameConfig.dangQianYe);
					egret.setTimeout(() => {
						// GameConfig.dangQianYe = egret.localStorage.getItem("dangQianYe");
						ui.setUI.initScroller();
					}, this, 300);
					
				}
			}
		}

		public initSize(): void {
			this.top=0;
			this.left=0;
			this.bottom=0;
			this.right=0;
			this.onOChange();
			// this.scaleX=0.657894737;
			// this.scaleY=0.657894737;
		}

		public childrenCreated(): void {
			super.childrenCreated();
		}

		

		public onAdd(): void {
			// console.log("onAdd()",this);
			this.isShow = true;
			this.initListener();
			//core.UIUtils.addButtonScaleEffects(this);
		}

		public onRemove(): void {
			this.clearEvent();
			NotifyManager.getInstance().removeRegister(this);
			//core.UIUtils.removeButtonScaleEffects(this);
		}
		/**注册事件 会在dispose时自动移除 */
		protected registerEvent(target: any, type: any, callback: Function, callbackobj: any) {
			// console.log("target:",target);
			// console.log("type:",type);
			// console.log("callback:",callback);
			// console.log("callbackobj:",callbackobj);
			target.addEventListener(type, callback, callbackobj);
			this.eventPool.push({ target: target, type: type, callback: callback, callbackobj: callbackobj });
		}
		/**移除全部事件 */
		private clearEvent() {
			if (this.eventPool.length > 0) {
				for (let i = 0; i < this.eventPool.length; i++) {
					let target = this.eventPool[i].target;
					let type = this.eventPool[i].type;
					let callback = this.eventPool[i].callback;
					let callbackobj = this.eventPool[i].callbackobj;
					target.removeEventListener(type, callback, callbackobj);
				}
			}
		}
		


		/**初始监听 */
		protected initListener() {
			
		}
		/**注册通知 由子类调用*/
		protected addRegister(type: string, callback: Function, callbackobj: any) {
			NotifyManager.getInstance().registerNotify(type, callback, callbackobj);
		}
		/**移除通知 由子类调用*/
		protected removeRegister(obj: any) {
			NotifyManager.getInstance().removeRegister(obj);
		}

		public close(): void {
			this.isShow = false;
			if (this.parent) this.parent.removeChild(this);
		}
	}

	export class EventObj {
		target: any;
		type: any;
		callback: Function;
		callbackobj: any;
	}
}