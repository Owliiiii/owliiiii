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
			egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE,this.onOChange,this);
		}

	    public 	onOChange():void
		{
		
			// if(window.innerWidth>=window.innerHeight)
			// {
            //   this.currentState='hor';
			// }
			// else
			// {
			// 	this.currentState='ver';
			// }
		}

		public initSize(): void {
			this.top=0;
			this.left=0;
			this.bottom=0;
			this.right=0;
			
			// this.scaleX=0.657894737;
			// this.scaleY=0.657894737;
		}

		public childrenCreated(): void {
			super.childrenCreated();
		}

		public onAdd(): void {
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