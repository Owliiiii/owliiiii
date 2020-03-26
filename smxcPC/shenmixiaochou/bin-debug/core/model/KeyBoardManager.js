var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var KeyBoardManager = (function (_super) {
    __extends(KeyBoardManager, _super);
    function KeyBoardManager() {
        var _this = _super.call(this) || this;
        _this.curtime = egret.getTimer();
        return _this;
    }
    KeyBoardManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new KeyBoardManager();
        }
        return this._instance;
    };
    KeyBoardManager.prototype.init = function () {
        this.kb = new KeyBoard();
        this.kb.addEventListener(KeyBoard.onkeyup, this.onkeyup, this);
    };
    KeyBoardManager.prototype.onkeyup = function (event) {
        //console.log(event.data);
        // //监听Esc键被按下事件
        // if(this.kb.isContain(event.data,KeyBoard.Esc)){
        //     console.log(event.data);
        // } 
        //监听空格键被按下事件
        //当出现各种弹窗的时候键盘控制要关闭，否者打开
        if (this.kb.isContain(event.data, KeyBoard.SPACE)) {
            if (GameConfig.emptyPlay && egret.getTimer() - this.curtime > 400) {
                var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
                if (egret.getTimer() - this.curtime > 400) {
                    this.curtime = egret.getTimer();
                    if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
                        if (ui.playBtn.enabled && ui.playBtn.label == '旋转' && !ui.gameScence.group.visible) {
                            ui.hideAllWin();
                            GameManager.getInstance().startGame();
                        }
                    }
                    else {
                        if (ui.playBtn.enabled && ui.playBtn.label == '停止') {
                            // console.log("ui.gameScence.group.visible====" + ui.gameScence.group.visible);
                            if (!ui.gameScence.group.visible) {
                                egret.setTimeout(function () {
                                    GameManager.getInstance().stopGame();
                                }, this, 100);
                            }
                        }
                    }
                }
                else {
                    console.log("太快了太快了太快了");
                }
            }
        }
        // //监听Esc和F1键同时被按下事件
        // if(this.kb.isContain(event.data,KeyBoard.Esc) && this.kb.isContain(event.data,KeyBoard.F1)){
        //     console.log(event.data);
        // }
    };
    return KeyBoardManager;
}(egret.EventDispatcher));
__reflect(KeyBoardManager.prototype, "KeyBoardManager");
//# sourceMappingURL=KeyBoardManager.js.map