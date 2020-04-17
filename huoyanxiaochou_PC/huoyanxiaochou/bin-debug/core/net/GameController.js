var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameController = (function () {
    function GameController() {
        this.sequence = 0;
        this.key = "a95c530a7af5f492a74499e70578d150";
        // private serverAddress:string = "http://fruit-meow-farm.cteee.cn";
        this.serverAddress = "http://guest.playtimes.com:82/GAME.Route/index.php?action=getGameRoungLogImmediate&controller=Marketing";
    }
    GameController.getInstance = function () {
        if (!this._instance)
            this._instance = new GameController();
        return this._instance;
    };
    GameController.prototype.getSeq = function () {
        this.sequence++;
        return this.sequence;
    };
    /**发送http请求， type:GET/POST, url:接口地址, notify:返回数据后要发送什么通知 */
    GameController.prototype.sendHttp = function (sendData, type, url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open(type, url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // if (vo.GameData.token != '') {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        // 	xhr.setRequestHeader("Authorization", 'Bearer ' + vo.GameData.token);
        // }
        xhr.onload = function (e) {
            switch (xhr.status) {
                case 200:
                    var obj = JSON.parse(xhr.responseText);
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
        var pargram = this.decodePragram(sendData);
        console.log('pargram->', decodeURI(pargram));
        xhr.send(decodeURI(pargram));
        TipsManager.getInstance().showLog('send---', sendData);
    };
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
    GameController.prototype.decodePragram = function (data) {
        var str = '';
        for (var key in data) {
            var s = key + '=' + data[key] + '&';
            str += s;
        }
        return str.substring(0, str.length - 1);
    };
    GameController.prototype.getHistory = function (callfun, callobj) {
        if (callfun === void 0) { callfun = null; }
        if (callobj === void 0) { callobj = null; }
        // let sendData: any = {
        // };
        // sendData.bankId = 't50';
        // sendData.playerId = 'user-020';
        // sendData.gameId = 'T5080501001';
        // sendData.startDate = Utils.getBeforeDate(14);
        // sendData.endDate = Utils.getNowFormatDate1();
        // let gstr: string = sendData.gameId;
        // let srt: string = '' + sendData.startDate + sendData.endDate + gstr + '';
        // console.log('编码前', srt);
        // let md: md5 = new md5();
        // sendData.sign = md.hex_md5(md.hex_md5(srt));
        // console.log('编码后', sendData.sign);
        // this.sendHttp(
        // 	sendData,
        // 	'POST',
        // 	this.serverAddress,
        // 	(obj) => {
        // 	   callfun&&callobj&&callfun.call(callobj,obj);
        // 	}
        // );
    };
    return GameController;
}());
__reflect(GameController.prototype, "GameController");
//# sourceMappingURL=GameController.js.map