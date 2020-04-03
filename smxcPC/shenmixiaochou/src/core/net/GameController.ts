class GameController {
	private static _instance: GameController;
	private sequence: number = 0;
	private key = "a95c530a7af5f492a74499e70578d150";
	// private serverAddress:string = "http://fruit-meow-farm.cteee.cn";
	private serverAddress: string = "http://guest.playtimes.com:82/GAME.Route/index.php?action=getGameRoungLogImmediate&controller=Marketing";
  
	public constructor() {
		
	}
	public static getInstance(): GameController {
		if (!this._instance) this._instance = new GameController();
		return this._instance;
	}
	private getSeq(): number {
		this.sequence++;
		return this.sequence;
	}

	/**发送http请求， type:GET/POST, url:接口地址, notify:返回数据后要发送什么通知 */
	private sendHttp(sendData: any, type: string, url: string, callback: Function) {
		var xhr = new XMLHttpRequest();
		xhr.open(type, url, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		// if (vo.GameData.token != '') {  // 判断是否存在token，如果存在的话，则每个http header都加上token
		// 	xhr.setRequestHeader("Authorization", 'Bearer ' + vo.GameData.token);
		// }
		xhr.onload = function (e) {
			switch (xhr.status) {
				case 200:
					let obj: any = JSON.parse(xhr.responseText);
					if (obj.status > 0) {
						TipsManager.getInstance().showTips(ErrorCode.codeArr[obj.status]);
					}
					if (obj.server_time != undefined) {
						core.DateTimer.instance.updateServerTime(obj.server_time);
					}
					TipsManager.getInstance().showLog('receive---', obj);
					callback.call(this, obj);
					break;
			}
		};
		let pargram:string=this.decodePragram(sendData); 
		console.log('pargram->',decodeURI(pargram));
		xhr.send(decodeURI(pargram));
		TipsManager.getInstance().showLog('send---', sendData);
	}

	// private sendHttp1(sendData: any, type: string, url: string, callback: Function): void {
	// 	var request = new egret.HttpRequest();
	// 	request.responseType = egret.HttpResponseType.TEXT;
	// 	//设置为 POST 请求
	// 	request.open(this.serverAddress, egret.HttpMethod.POST);
	// 	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	// 	let pargram:string=this.decodePragram(sendData); 
	// 	request.addEventListener(egret.Event.COMPLETE, callback, this);
	// 	request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onPostIOError, this);
	// 	request.addEventListener(egret.ProgressEvent.PROGRESS, this.onPostProgress, this);
	// 	request.send(pargram);
	// }

	// private onPostComplete(event: egret.Event): void {
	// 	var request = <egret.HttpRequest>event.currentTarget;
	// 	console.log("post data : ", request.response);
	// }

	// private onPostIOError(event: egret.IOErrorEvent): void {
	// 	console.log("post error : " + event);
	// }

	// private onPostProgress(event: egret.ProgressEvent): void {
	// 	console.log("post progress : " + Math.floor(100 * event.bytesLoaded / event.bytesTotal) + "%");
	// }


	public decodePragram(data:any):string
	{
        let str:string='';
        for(var key in data)
		{
			let s:string=key+'='+data[key]+'&';
			str+=s;
		}
		return str.substring(0,str.length-1);
	}

	public getHistory(callfun:any=null,callobj:any=null): void {
		let sendData: any = {
		};
		sendData.bankId = 't50';
		sendData.playerId = 'user-020';
		sendData.gameId = 'T5080501001';
		sendData.startDate = Utils.getBeforeDate(14);
		sendData.endDate = Utils.getNowFormatDate1();
		let gstr: string = sendData.gameId;
		let srt: string = '' + sendData.startDate + sendData.endDate + gstr + '';
		console.log('编码前', srt);
		let md: md5 = new md5();
		sendData.sign = md.hex_md5(md.hex_md5(srt));
		console.log('编码后', sendData.sign);
		this.sendHttp(
			sendData,
			'POST',
			this.serverAddress,
			(obj) => {
			   callfun&&callobj&&callfun.call(callobj,obj);
			}
		);
	}
}