module sockets {
	export class SocketMananger extends egret.EventDispatcher {
		private static _instance: SocketMananger;
		public callFunction: Function;
		public callObj: any;

		public heart: HeartCheck;
		//public url: any = 'ws://127.0.0.1:8080';
		private sock: SocketIOClient.Socket;
		public url: any = GameConfig.CasinoGame.UrlBase;
		/**
		 * 网络状态 0代表网络正常  -1代表断网    1代表重连
		 */
		public netState: number = -1;
		public reconetCount: number = 0;
		public reconetMaxCount: number = 3;
		public constructor() {
			super();
		}

		public static getInstance(): SocketMananger {
			if (!this._instance) {
				this._instance = new SocketMananger();
			}
			return this._instance;
		}

		public init(): void {
			this.heart = new HeartCheck(this);
			this.sock.on('connect', this.onSocketOpen.bind(this));
			this.sock.on('disconnect', this.onSocketClose.bind(this));
			this.sock.on('connect_error', ()=>{
				core.UIManager.openUI(core.UIConst.NetCloseUI,core.LayerManager.Layer_Tip);
			});
			this.sock.on('error', this.onSocketError.bind(this));
			this.sock.on('ResponseResult', this.onReceiveMessage.bind(this));
		}

		public connectServer(callback: Function = null, callobj: any = null) {
			//NetUI.getInstance().showNetting();
			//core.NotifyManager.getInstance().sendNotify(core.NotifyConst.RECONETING);
			this.callFunction = callback;
			this.callObj = callobj;
			this.sock = io.connect(this.url);
			this.init();
		}

		/**
			* 链接关闭
			*/
		public onSocketClose() {
			console.log("连接关闭");
			this.netState = -1;
			//NetUI.getInstance().showNetting();
			core.UIManager.openUI(core.UIConst.NetCloseUI,core.LayerManager.Layer_Tip);
		}

		/**
		 * 链接异常
		*/
		public onSocketError() {
			console.log("连接异常");
			this.netState = -1;
			//NetUI.getInstance().showNetting();
			core.UIManager.openUI(core.UIConst.NetCloseUI,core.LayerManager.Layer_Tip);
		}
		/**
		 * 
		 * 连接成功返回 
		 */
		public onSocketOpen(data:any): void {
			console.log(this.reconetCount==0?"init连接":'reconect连接',data);
			//Commond.sendInitGame();
			//NetUI.getInstance().hideNetting();
			this.heart.reset();
			this.netState = 1;	
			if (this.callFunction && this.callObj&&this.reconetCount==0) {
				this.callFunction.call(this.callObj);
			}
			this.reconetCount+=1;
		}

		/**
		 * 消息返回  
		 */
		public onReceiveMessage(msg: any): void {	
			let n:any=JSON.parse(msg);
			console.log('返回obj',n);
			// console.log('n.Value.Status.CurrentAction ==== '+ n.Value.Status.CurrentAction);
			core.NotifyManager.getInstance().sendNotify(n.Value.Status.CurrentAction, n);
			
		}

		/**
		 * 向服务端发送消息和数据
		 */
		public sendMessage(data: any): void {
			console.log(data);
			this.sock.emit('Action',JSON.stringify(data));
		}

		/**
		 * 重连
		 */
		public reconet(): void {
			this.netState = 0;
			this.connectServer(() => {
				this.netState = 1;
				Commond.index = 0;
				core.NotifyManager.getInstance().sendNotify(core.NotifyConst.RECONET_SUC);
			}, this);
		}

	}

	class HeartCheck {
		public inter:number;
		public timeout: number = GameConfig.CasinoGame.vtoken_interval;
		public timeoutObj: any = null;
		public serverTimeoutObj: any = null;
		public manager: SocketMananger;
		constructor(manager: SocketMananger) {
			this.manager = manager;
		}
		public reset(): void {
			//clearTimeout(this.timeoutObj);
			//clearTimeout(this.serverTimeoutObj);
			egret.clearInterval(this.inter);
			this.start();
		}

		public start(): void {
			this.inter = egret.setInterval(() => {
				Commond.sendHeartCheck();
				// this.serverTimeoutObj = setTimeout(() => {
				// 	sockets.SocketMananger.getInstance().reconet();
				// }, this.timeout);
			},this, this.timeout*1000);
		}


	}
}