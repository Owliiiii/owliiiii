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
var GameScence = (function (_super) {
    __extends(GameScence, _super);
    function GameScence() {
        var _this = _super.call(this) || this;
        _this.reelArr = [];
        _this.isinit = false;
        /**
         * 当前鼠标obj
         */
        _this.mouseBtnIndex = 9; //鼠标指着的线，随便是几，只要不是12345
        _this.kaiguan = true;
        _this.skinName = GameScenceSkin;
        mouse.setButtonMode(_this, true);
        return _this;
    }
    /**
     * 初始化
     */
    GameScence.prototype.init = function () {
        if (this.isinit)
            return;
        for (var i = 0; i < 3; i++) {
            var reel = this['reel' + i];
            this.reelArr.push(this['reel' + i]);
            reel.reelArr = vo.GameData.reelArr[i];
            reel.index = i;
            reel.init();
        }
        for (var i = 1; i <= vo.GameData.lineNum; i++) {
            // (this['rm' + i] as MouseButton2).setF(this.onRollOver, this.onRollOut, this);
            // (this['lm' + i] as MouseButton2).setF(this.onRollOver, this.onRollOut, this);
            this['rm' + i].name = 'rm' + i;
            this['lm' + i].name = 'lm' + i;
            this['rm' + i].addEventListener(mouse.MouseEvent.MOUSE_OVER, this.test1, this);
            this['lm' + i].addEventListener(mouse.MouseEvent.MOUSE_OVER, this.test1, this);
            this['rm' + i].addEventListener(mouse.MouseEvent.MOUSE_OUT, this.test3, this);
            this['lm' + i].addEventListener(mouse.MouseEvent.MOUSE_OUT, this.test3, this);
        }
        this.allGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeAll, this);
        this.isinit = true;
    };
    GameScence.prototype.closeAll = function () {
        var _this = this;
        console.log("关闭最后结算");
        this.allGroup.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.closeAll, this);
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        vo.GameData.balance = vo.GameData.resultData.Value.Balance;
        ui.setMoney(vo.GameData.balance);
        egret.Tween.removeTweens(this.group);
        var money = vo.GameData.slotInfo.allwin;
        ui.hideAllWin1(); //清除线和动画为了显示上面的总赢
        ui.hideHouzi(); //清猴子
        egret.Tween.get(this.group).to({ scaleX: 1.1, scaleY: 1.1 }, 100, egret.Ease.backOut).to({ scaleX: 0, scaleY: 0 }, 300, egret.Ease.backIn)
            .call(function () {
            _this.allGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.closeAll, _this);
            GameManager.getInstance().showTips("免费旋转中赢得CNY " + money + ".00");
            _this.maskRect.visible = _this.group.visible = false;
            if (GameConfig.autoPlay && GameManager.getInstance().getFreeCount() == 0) {
                GameManager.getInstance().autoStartGame();
            }
        });
        GameManager.getInstance().enterPlayingState1();
        ui.setBG(false);
    };
    GameScence.prototype.reset = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            var cpos = vo.GameData.slotInfo.resultArr[i].Pos + 1 >= vo.GameData.reelArr[i].length ? 0 : vo.GameData.slotInfo.resultArr[i].Pos + 1;
            reel.setCurIndex(cpos, false);
        }
        this.clearAll();
    };
    GameScence.prototype.startReel = function () {
        SoundManager.getInstance().playEffect(SoundConst.REEL_START);
        // core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_ROUNDSTART);
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.start();
        }
    };
    GameScence.prototype.startData = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        for (var i = 0; i < ui.gameScence.reelArr.length; i++) {
            var reel = ui.gameScence.reelArr[i];
            var cpos = vo.GameData.slotInfo.resultArr[i].Pos + 1 >= vo.GameData.reelArr[i].length ? 0 : vo.GameData.slotInfo.resultArr[i].Pos + 1;
            reel.goIndex(cpos);
        }
        vo.GameData.slotInfo.resultArr = [];
        GameConfig.isData = true;
    };
    GameScence.prototype.stopReel = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.curTime += 5000;
        }
    };
    /**
     * 暂停
     */
    GameScence.prototype.pausme = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.pausme();
        }
    };
    /**
    * 暂停
    */
    GameScence.prototype.resume = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.resume();
        }
    };
    GameScence.prototype.onRollOver = function (obj) {
        var btn = obj;
        var index = btn.name.charAt(2);
        // (this['line' + index] as eui.Image).alpha = 1;	
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        this.mouseBtnIndex = index;
        // console.log( this.mouseBtnIndex + " === ui.indexLine === " + ui.indexLine);
        if ((GameManager.getInstance().gameState != GameType.GameState.PLAYING) && !GameConfig.autoPlay && GameManager.getInstance().getFreeCount() == 0 && ui.indexLine != 0) {
            this['line' + index].visible = true;
            this.btn = btn;
        }
    };
    GameScence.prototype.onRollOut = function (obj) {
        var btn = obj;
        var index = btn.name.charAt(2);
        this.mouseBtnIndex = 9;
        // (this['line' + index] as eui.Image).alpha = 0;
        this['line' + index].visible = false;
        this.btn = btn;
    };
    GameScence.prototype.clearAll = function () {
        this.kaiguan = false;
        // let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
        // ui.indexLine = 0;
        for (var i = 1; i <= vo.GameData.lineNum; i++) {
            if (i == this.mouseBtnIndex) {
                continue;
            }
            var img = this['line' + i];
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
        for (var i = 1; i <= vo.GameData.lineNum; i++) {
            this['rm' + i].setEnable(true);
            this['lm' + i].setEnable(true);
        }
    };
    // private test:any;
    /**
     *显示一线获胜
     *显示完成回调
     */
    GameScence.prototype.showLineWin = function (isOne, data, callfun, callobj) {
        var _this = this;
        this.kaiguan = true;
        if (!isOne) {
            this.setAn();
        }
        // this.setAn();
        // console.log("isOne === " + isOne);
        var lineArr = vo.GameData.lineArr['' + data.Data.Line];
        for (var i = 0; i < lineArr.length; i++) {
            this.reelArr[i].setliangAndActForIndex(lineArr[i], isOne);
        }
        var img = this['line' + data.Data.Line];
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
        var rm = this['rm' + data.Data.Line];
        var lm = this['lm' + data.Data.Line];
        lm.setEnable(false);
        rm.setEnable(false);
        var sy = rm.y / 2 + lm.y / 2 + 80;
        if (data.Data.Line == 2) {
            sy -= 40;
        }
        else if (data.Data.Line == 3) {
            sy += 20;
        }
        else {
        }
        var sx = rm.x / 2 + lm.x / 2;
        this.scoreGroup.y = sy;
        this.scoreGroup.x = sx + 70;
        //倍数*押注 = 该条线的
        var winmoney = data.Reward.BetMultiplier * vo.GameData.betScoreArr[vo.GameData.betIndex] * 10000 / 5; //vo.GameData.resultData.Value.Main.TotalWin;
        var s = winmoney / GameConfig.bili;
        this.scoreLabel.text = 'cny ' + s.toFixed(2);
        GameManager.getInstance().showTips('线' + data.Data.Line + '赢得CNY ' + s.toFixed(2));
        egret.Tween.get(this.scoreGroup).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.backOut).wait(1200).to({ scaleX: 0, scaleY: 0 }, 300);
        egret.Tween.get(img).to({ visible: true }, 300).to({ visible: false }, 300).to({ visible: true }, 300).to({ visible: false }, 300).to({ visible: true }, 300).to({ visible: false }, 300)
            .call(function () {
            if (callfun && callobj && _this.kaiguan) {
                callfun.call(callobj);
            }
        }, this);
    };
    /**
     * 显示全部获胜线数
     */
    GameScence.prototype.showAllLineWin = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            var img = this['line' + arr[i].Data.Line];
            egret.Tween.removeTweens(img);
            // img.alpha = 1;
            img.visible = true;
        }
    };
    /**
     * 设置全正常
     */
    GameScence.prototype.setItem = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            this.reelArr[i].setItem();
        }
    };
    /**
     * 设置全暗
     */
    GameScence.prototype.setAn = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            this.reelArr[i].setAn();
        }
    };
    /**
     * 展示免费旋转
     */
    GameScence.prototype.showFreeSlot = function (callfun) {
        if (callfun === void 0) { callfun = null; }
        this.allGroup.visible = this.rewardScoreGroup.visible = false;
        this.maskRect.visible = this.freeslotGroup.visible = true;
        this.maskRect.alpha = 1;
        this.group.alpha = 1;
        this.group.visible = true;
        this.group.scaleX = 0;
        this.group.scaleY = 0;
        egret.Tween.get(this.group).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut).call(function () {
            callfun && callfun();
        });
    };
    /**
     * 展示神秘大奖
     */
    GameScence.prototype.showRewardGroup = function (d, b, callfun) {
        var _this = this;
        if (callfun === void 0) { callfun = null; }
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
        egret.Tween.get(this.group).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut).call(function () {
            // this.fuhao.visible = true;
            _this.image0.visible = true;
            _this.image0.scaleX = _this.image0.scaleY = 0;
            _this.image1.visible = true;
            _this.image1.scaleX = _this.image1.scaleY = 0;
            _this.image2.visible = true;
            _this.image2.scaleX = _this.image2.scaleY = 0;
            egret.Tween.get(_this.image0).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 0, scaleY: 0 }, 200);
            egret.Tween.get(_this.image2).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 0, scaleY: 0 }, 200);
            egret.Tween.get(_this.image1).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).to({ scaleX: 1.5, scaleY: 1.5 }, 400).to({ scaleX: 0, scaleY: 0 }, 200)
                .call(function () {
                egret.Tween.removeTweens(_this.image1);
                egret.Tween.removeTweens(_this.image2);
                egret.Tween.removeTweens(_this.image0);
                _this.image1.visible = false;
                _this.image2.visible = false;
                _this.image0.visible = false;
                _this.numLabel.scaleX = 1;
                _this.numLabel.scaleY = 1;
                _this.numLabel.visible = true;
                SoundManager.getInstance().playEffect(SoundConst.BIG_REWARDSHOWS);
                if (d.SymbolCount >= 3) {
                    _this.ewaiLabel.visible = true;
                }
                egret.Tween.get(_this.numLabel).to({ scaleX: 1.2, scaleY: 1.2 }, 500, egret.Ease.bounceOut).wait(300).call(function () {
                    callfun && _this.hideGroup(callfun, 2);
                }, _this);
            }, _this);
        });
    };
    /**
     *展示全胜
     */
    GameScence.prototype.showAllWinNumGroup = function (s, callfun) {
        var _this = this;
        this.maskRect.alpha = 1;
        this.group.alpha = 1;
        this.maskRect.visible = this.group.visible = true;
        this.allGroup.visible = true;
        this.allnumLabel.text = '' + s.toFixed(2);
        this.rewardScoreGroup.visible = this.freeslotGroup.visible = false;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        vo.GameData.balance = vo.GameData.resultData.Value.Balance;
        ui.setMoney(vo.GameData.balance);
        var money = vo.GameData.slotInfo.allwin;
        ui.hideAllWin1(); //清除线和动画为了显示上面的总赢
        ui.hideHouzi(); //清猴子
        egret.Tween.get(this.group).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut).wait(5000).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.backIn).call(function () {
            callfun && callfun();
            GameManager.getInstance().showTips("免费旋转中赢得CNY " + money.toFixed(2));
            _this.maskRect.visible = _this.group.visible = false;
            if (GameConfig.autoPlay && GameManager.getInstance().getFreeCount() == 0) {
                GameManager.getInstance().autoStartGame();
            }
        }, this);
    };
    /**
     * 隐藏奖励
     */
    GameScence.prototype.hideGroup = function (callfun, type) {
        var _this = this;
        if (callfun === void 0) { callfun = null; }
        if (type === void 0) { type = 1; }
        if (type == 1) {
            this.maskRect.visible = false;
            egret.Tween.get(this.group).to({ scaleX: 0, scaleY: 0 }, 500, egret.Ease.backIn).call(function () {
                _this.group.visible = false;
                callfun && callfun();
            });
        }
        else if (type == 2) {
            egret.Tween.get(this.group).to({ alpha: 0 }, 500, egret.Ease.backIn).call(function () {
                _this.group.visible = false;
                callfun && callfun();
            });
            egret.Tween.get(this.maskRect).to({ alpha: 0 }, 500).call(function () {
                _this.maskRect.visible = false;
            }, this);
        }
    };
    GameScence.prototype.test2 = function () {
        // var ttt = evt.currentTarget.hitTestPoint( evt.stageX, evt.stageY )
        this.onRollOver(this.peifuBtn);
        // console.log( "线出现线出现" );
    };
    GameScence.prototype.test3 = function (evt) {
        // var ttt = evt.currentTarget.hitTestPoint( evt.stageX, evt.stageY )
        // console.log("移除了移除了");
        this.onRollOut(evt.currentTarget);
        this.removeEventListener(egret.Event.ENTER_FRAME, this.test2, this);
    };
    GameScence.prototype.test1 = function (evt) {
        var ttt = evt.currentTarget.hitTestPoint(evt.stageX, evt.stageY);
        this.peifuBtn = evt.currentTarget;
        if (ttt) {
            // console.log("触摸到了触摸到了");
            this.addEventListener(egret.Event.ENTER_FRAME, this.test2, this);
        }
    };
    GameScence.prototype.showMaozi = function (data, isshowReward) {
        var _this = this;
        var arr = data.Positions;
        var winmoney = vo.GameData.resultData.Value.Main.TotalWin;
        this.hideMaozi();
        this.setAn();
        var a = [[], [], []];
        for (var i = 0; i < arr.length; i++) {
            var p = arr[i];
            a[p.X].push(p);
        }
        var isshowd = false;
        for (var i = 0; i < a.length; i++) {
            if (a[i].length > 0) {
                var reel = this.reelArr[i];
                reel.showMaozi(a[i]);
            }
        }
        if (a[1].length > 0 && winmoney / GameConfig.bili > 0) {
            this.scoreGroup.visible = true;
            var col = a[1][0]['X'];
            var row = a[1][0]['Y'];
            this.scoreLabel.text = "cny " + (winmoney / GameConfig.bili) + '.00';
            this.scoreGroup.y = 150 + row * 150;
            this.scoreGroup.x = 230 + col * 300;
            this.scoreGroup.scaleX = 0;
            this.scoreGroup.scaleY = 0;
            egret.Tween.get(this.scoreGroup).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut).wait(800).to({ scaleX: 0, scaleY: 0 }, 500).call(function () {
                _this.scoreGroup.visible = false;
            }, this);
        }
        else if (a[0].length > 0 && winmoney / GameConfig.bili > 0) {
            this.scoreGroup.visible = true;
            var col = a[0][0]['X'];
            var row = a[0][0]['Y'];
            this.scoreLabel.text = "cny " + (winmoney / GameConfig.bili) + '.00';
            this.scoreGroup.y = 150 + row * 150;
            this.scoreGroup.x = 230 + col * 300;
            this.scoreGroup.scaleX = 0;
            this.scoreGroup.scaleY = 0;
            egret.Tween.get(this.scoreGroup).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut).wait(800).to({ scaleX: 0, scaleY: 0 }, 500).call(function () {
                _this.scoreGroup.visible = false;
            }, this);
        }
        else if (winmoney / GameConfig.bili > 0) {
            this.scoreGroup.visible = true;
            var col = a[2][0]['X'];
            var row = a[2][0]['Y'];
            this.scoreLabel.text = "cny " + (winmoney / GameConfig.bili) + '.00';
            this.scoreGroup.y = 150 + row * 150;
            this.scoreGroup.x = 230 + col * 300;
            this.scoreGroup.scaleX = 0;
            this.scoreGroup.scaleY = 0;
            egret.Tween.get(this.scoreGroup).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.backOut).wait(800).to({ scaleX: 0, scaleY: 0 }, 500).call(function () {
                _this.scoreGroup.visible = false;
            }, this);
        }
    };
    GameScence.prototype.hideMaozi = function () {
        for (var i = 0; i < this.reelArr.length; i++) {
            var reel = this.reelArr[i];
            reel.hideMaozi();
        }
    };
    return GameScence;
}(eui.Component));
__reflect(GameScence.prototype, "GameScence");
//# sourceMappingURL=GameScence.js.map