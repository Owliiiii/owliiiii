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
        this.kb.addEventListener(KeyBoard.onkeyup, this.onkeydown, this);
    };
    KeyBoardManager.prototype.onkeydown = function (event) {
        //console.log(event.data);
        // //监听Esc键被按下事件
        // if(this.kb.isContain(event.data,KeyBoard.Esc)){
        //     console.log(event.data);
        // }
        // //监听空格键被按下事件
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        if (!ui)
            return;
        if (this.kb.isContain(event.data, KeyBoard.SPACE)) {
            var tui = core.UIManager.getUI(core.UIConst.StipsUI);
            var sui = core.UIManager.getUI(core.UIConst.SetUI);
            var hui = core.UIManager.getUI(core.UIConst.HelpUI);
            var dui = core.UIManager.getUI(core.UIConst.HelpDesUI);
            if (tui && tui.parent)
                return;
            if (sui && sui.parent)
                return;
            if (hui && hui.parent)
                return;
            if (dui && dui.parent)
                return;
            if (GameConfig.emptyPlay) {
                if (egret.getTimer() - this.curtime > 400) {
                    this.curtime = egret.getTimer();
                    // if (GameManager.getInstance().gameState == GameType.GameState.STOP){
                    // 	if(ui.startBtn.visible==true&&ui.startBtn.enabled)
                    // 	{
                    // 		SoundManager.getInstance().playEffect(SoundConst.START);
                    // 		GameManager.getInstance().startGame();
                    // 	}
                    // }else if(ui.stopBtn.visible==true){
                    // 	SoundManager.getInstance().playEffect(SoundConst.STOP);
                    // 	GameManager.getInstance().stopGame();
                    // }
                    if (ui.startBtn.visible == true && ui.startBtn.enabled) {
                        SoundManager.getInstance().playEffect(SoundConst.START);
                        GameManager.getInstance().startGame();
                    }
                    if (ui.stopBtn.visible == true) {
                        SoundManager.getInstance().playEffect(SoundConst.STOP);
                        GameManager.getInstance().stopGame();
                    }
                }
                // if(ui.startBtn.visible==true&&ui.startBtn.enabled)
                // {
                // 		SoundManager.getInstance().playEffect(SoundConst.START);
                // 		GameManager.getInstance().startGame();
                // }
                // if(ui.stopBtn.visible==true)
                // {
                // 	SoundManager.getInstance().playEffect(SoundConst.STOP);
                // 	GameManager.getInstance().stopGame();
                // }
            }
            //按空格也可以进入红利界面
            if (GameConfig.hongli) {
                console.log("是红利.....");
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