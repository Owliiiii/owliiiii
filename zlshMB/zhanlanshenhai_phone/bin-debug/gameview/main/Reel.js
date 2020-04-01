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
/**
 * 基础滚动组件
 */
var Reel = (function (_super) {
    __extends(Reel, _super);
    function Reel() {
        var _this = _super.call(this) || this;
        _this.isAction = false;
        /**
         * 当前盘面
         */
        _this.curReelData = [];
        /**
         * 目标盘面
         **/
        // public targetReelData: Array<any> = ['M1', '0', 'M2'];
        /**
         * 滚动速度
         */
        _this.reelSpeed = 100;
        /**
         * 当前时间
         */
        _this.curTime = 0;
        /**
         * 滚轮索引
         */
        _this.index = 0;
        /**
         * aIndex
         */
        _this.aIndex = 0;
        /**
         * stopStaet
         */
        _this.stopState = false;
        _this.skinName = ReelSkin;
        return _this;
    }
    Reel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
    };
    Reel.prototype.showAnimation = function (i) {
        var item = this.kGroup.getChildAt(i + 1);
        item.goAnimation();
    };
    Reel.prototype.hideAnimation = function (i) {
        var item = this.kGroup.getChildAt(i + 1);
        item.hideAnimation();
    };
    Reel.prototype.clearAllAnimation = function () {
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            item.hideAnimation();
        }
    };
    Reel.prototype.onFrame = function () {
        if (this.isAction) {
            for (var i = 0; i < this.kGroup.numChildren; i++) {
                var item = this.kGroup.getChildAt(i);
                var stopTime = 600;
                item.y += this.reelSpeed;
                if (item.y >= this.height) {
                    var num3 = 4 - GameConfig.twoC1Index; //1,2,3
                    for (var k = 1; k <= num3; k++) {
                        if (GameConfig.isTwo && this.index == (GameConfig.twoC1Index + k)) {
                            stopTime = 1500;
                        }
                    }
                    var t1 = GameConfig.speedPlay ? 250 : 700; //Reel.QUK_TIME : Reel.TIME;
                    var t2 = GameConfig.speedPlay ? 250 : stopTime; //Reel.QUK_STOPTIME : Reel.STOPTIME;
                    // let t3: Array<number> = GameConfig.speedPlay ? [300, 350, 500, 650, 800] : [0, 400, 730, 930, 1030];
                    for (var j = 1; j <= num3; j++) {
                        if (this.index == (GameConfig.twoC1Index + j) && GameConfig.isTest) {
                            // console.log("第" + this.index + "列停止");
                            // if(SoundManager.getInstance().effectOn && this.chanel == null){
                            // 	SoundManager.getInstance().playMusic(SoundConst.C1TWO, 1).then((chanel) => {
                            // 		this.chanel = chanel; 
                            // 	});
                            // };
                            if (!this.c1MC) {
                                this.c1MC = game.MCUtils.getMc('c1mc');
                            }
                            this.addChild(this.c1MC);
                            this.c1MC.gotoAndPlay('c1mc', -1);
                            this.c1MC.x = this.kGroup.width / 2;
                            this.c1MC.y = this.kGroup.height / 2;
                            this.c1MC.scaleX = 1;
                            this.c1MC.scaleY = 1;
                            GameConfig.isTest = false;
                            // t1 = t1+1000;
                            t2 = t2 + 500;
                            ;
                            if (this.index > GameConfig.threeC1Index) {
                                this.c1MC.visible = false;
                                t2 = t2 - 800;
                            }
                            else {
                                this.c1MC.visible = true;
                            }
                        }
                    }
                    // if(!GameConfig.isData){		//等待数据返回
                    // 	t2 = 99999;
                    // }
                    var t3 = 500;
                    // if(!GameConfig.speedPlay){
                    // 	t3 = 500;
                    // }
                    if (egret.getTimer() - this.curTime > t1 + (t2 * this.index + t3) && !GameConfig.isTest) {
                        // if(GameConfig.oneC1Index <= 2){
                        // 	SoundManager.getInstance().playEffect(SoundConst.DENG);
                        // }
                        if (GameConfig.twoC1Index != -1) {
                            if (this.index == GameConfig.twoC1Index) {
                                GameConfig.isTest = true;
                            }
                            if (this.index == GameConfig.twoC1Index + 1) {
                                GameConfig.isTest = true;
                            }
                            if (this.index == GameConfig.twoC1Index + 2) {
                                GameConfig.isTest = true;
                            }
                        }
                        // if(this.index == GameConfig.twoC1Index && GameConfig.threeC1Index == -1){
                        // 	console.log("CCCCCCC");
                        // 	GameConfig.isTest = true;
                        // }
                        this.isAction = false;
                        this.overReel();
                        return;
                    }
                    else {
                        item.y = this.kGroup.getChildAt(0).y - this.kGroup.getChildAt(0).height;
                        item.value = 'M' + Math.ceil(Math.random() * 5);
                        // item.setVir(true);
                        this.kGroup.setChildIndex(item, 0);
                    }
                }
            }
        }
    };
    Reel.prototype.stopMusic = function () {
        if (this.chanel) {
            this.chanel.stop();
            this.chanel = null;
        }
    };
    Reel.prototype.overReel = function () {
        var _this = this;
        egret.Tween.removeTweens(this);
        if (!this.stopState) {
            // SoundManager.getInstance().playEffect(SoundConst.REEL_STOP);
        }
        var _loop_1 = function (i) {
            var item = this_1.kGroup.getChildAt(i);
            egret.Tween.removeTweens(item);
            var ty = void 0;
            ty = i * item.height - item.height;
            item.y = this_1.stopState ? ty : i * item.height - item.height + 100;
            item.value = i > 0 && i < 4 ? this_1.curReelData[i - 1] : 'M' + Math.ceil(Math.random() * 5);
            // item.setVir(false);
            //item.value ='M'+Math.ceil(Math.random()*5);
            // if((i > 0 && i < 4 ? this.curReelData[i - 1] : 'M' + Math.ceil(Math.random() * 5)) == "C1" && this.index <= 2 && !this.stopState){
            // 	SoundManager.getInstance().playEffect(SoundConst.DENG);
            // }
            var t = this_1.stopState ? 0 : 300;
            egret.setTimeout(function () {
                if (_this.c1MC && _this.c1MC.parent) {
                    _this.c1MC.parent.removeChild(_this.c1MC);
                    _this.c1MC.stop();
                    // this.stopMusic();
                }
            }, this_1, 300);
            egret.Tween.get(item).to({ y: ty }, t, egret.Ease.cubicOut).call(function () {
                if (_this.index == 4 && i == _this.kGroup.numChildren - 1) {
                    // GameConfig.twoC1Index = -1;
                    GameConfig.isTest = false;
                    core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_ROUNDOVER);
                }
            }, this_1);
        };
        var this_1 = this;
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            _loop_1(i);
        }
    };
    Reel.prototype.initData = function () {
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            item.value = i > 0 && i < 4 ? this.curReelData[i - 1] : 'M' + Math.ceil(Math.random() * 5);
        }
    };
    Reel.prototype.start = function () {
        var _this = this;
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            var ty = item.y - 50;
            egret.Tween.get(item).to({ y: ty }, 100).to({ y: ty + 50 }, 100);
        }
        egret.Tween.get(this).wait(200).call(function () {
            _this.isAction = true;
            _this.stopState = false;
            _this.curTime = egret.getTimer() + 99999;
            // this.curReelData = JSON.parse(JSON.stringify(this.targetReelData));		
        }, this);
    };
    Reel.prototype.stop = function () {
        this.isAction = false;
        this.stopState = true;
        this.overReel();
    };
    /**
     * 中奖的3个移到中间栏
     */
    Reel.prototype.moveC1y = function (c1Y) {
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            //移动到中间
            // egret.Tween.get(item).to({ y: 201 },500);
            var c1y0 = item.y + 201;
            var c1y2 = item.y - 201;
            if (c1Y == 0) {
                egret.Tween.get(item).to({ y: c1y0 }, 700);
            }
            if (c1Y == 2) {
                egret.Tween.get(item).to({ y: c1y2 }, 700);
            }
        }
    };
    Reel.prototype.huanYuan = function (c1Y) {
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            //移动到中间
            // egret.Tween.get(item).to({ y: 201 },500);
            var c1y0 = item.y + 201;
            var c1y2 = item.y - 201;
            if (c1Y == 0) {
                egret.Tween.get(item).to({ y: c1y2 }, 1);
            }
            if (c1Y == 2) {
                egret.Tween.get(item).to({ y: c1y0 }, 1);
            }
        }
    };
    Reel.REEL_MODE = 0;
    /**
     * 展示数量
     */
    Reel.ShowNum = 3;
    /**
     * 正常滚动时间
     */
    Reel.TIME = 500;
    /**
     * 快速滚动时间
     */
    Reel.QUK_TIME = 100;
    /**
     * 停止间隔
     */
    Reel.STOPTIME = 100;
    /**
     * 快速停止间隔
     */
    Reel.QUK_STOPTIME = 50;
    return Reel;
}(eui.Component));
__reflect(Reel.prototype, "Reel");
/**
 * 滚动组件item
 */
var ReelItem = (function (_super) {
    __extends(ReelItem, _super);
    function ReelItem() {
        var _this = _super.call(this) || this;
        _this.isVir = false;
        _this.isA = false;
        _this.skinName = ReelItemSkin;
        return _this;
    }
    Object.defineProperty(ReelItem.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
            if (this.value != undefined) {
                this.icons.source = this._value + '_icon_png';
                this.icons.scaleX = 1.2;
                this.icons.scaleY = 1.2;
                this.icons.visible = true;
                // this.vIcon.visible = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    ReelItem.prototype.goAnimation = function () {
        if (this.isA)
            return;
        this.isA = true;
        egret.Tween.removeTweens(this.icons);
        this.value = this._value;
        // this.aIcon.visible=true;
        if (this.value == "WW") {
            if (!GameConfig.speedPlay) {
                // SoundManager.getInstance().playEffect(SoundConst.WWMUSIC);
            }
            if (!this.maoziMC) {
                this.maoziMC = game.MCUtils.getMc('ww');
            }
            this.addChild(this.maoziMC);
            this.maoziMC.gotoAndPlay('ww', -1);
            this.maoziMC.x = this.width / 2;
            this.maoziMC.y = this.height / 2;
            this.maoziMC.scaleX = 1.4;
            this.maoziMC.scaleY = 1.4;
            this.icons.visible = false;
        }
        if (this.value == "M5") {
            if (!this.maoziMC1) {
                this.maoziMC1 = game.MCUtils.getMc('m5');
            }
            this.addChild(this.maoziMC1);
            this.maoziMC1.gotoAndPlay('m5', -1);
            this.maoziMC1.x = this.width / 2;
            this.maoziMC1.y = this.height / 2;
            this.maoziMC1.scaleX = 1.4;
            this.maoziMC1.scaleY = 1.4;
            this.icons.visible = false;
        }
        if (this.value == "M3") {
            if (!this.maoziMC2) {
                this.maoziMC2 = game.MCUtils.getMc('m3');
            }
            this.addChild(this.maoziMC2);
            this.maoziMC2.gotoAndPlay('m3', -1);
            this.maoziMC2.x = this.width / 2;
            this.maoziMC2.y = this.height / 2;
            this.maoziMC2.scaleX = 1.4;
            this.maoziMC2.scaleY = 1.4;
            this.icons.visible = false;
        }
        if (this.value == "M1") {
            if (!this.maoziMC3) {
                this.maoziMC3 = game.MCUtils.getMc('m1');
            }
            this.addChild(this.maoziMC3);
            this.maoziMC3.gotoAndPlay('m1', -1);
            this.maoziMC3.x = this.width / 2;
            this.maoziMC3.y = this.height / 2;
            this.maoziMC3.scaleX = 1.4;
            this.maoziMC3.scaleY = 1.4;
            this.icons.visible = false;
        }
        if (this.value == "M2") {
            if (!this.maoziMC4) {
                this.maoziMC4 = game.MCUtils.getMc('m2');
            }
            this.addChild(this.maoziMC4);
            this.maoziMC4.gotoAndPlay('m2', -1);
            this.maoziMC4.x = this.width / 2;
            this.maoziMC4.y = this.height / 2;
            this.maoziMC4.scaleX = 1.4;
            this.maoziMC4.scaleY = 1.4;
            this.icons.visible = false;
        }
        if (this.value == "M4") {
            if (!GameConfig.speedPlay) {
                // SoundManager.getInstance().playEffect(SoundConst.DEJIANG);
            }
            if (!this.maoziMC5) {
                this.maoziMC5 = game.MCUtils.getMc('m4');
            }
            this.addChild(this.maoziMC5);
            this.maoziMC5.gotoAndPlay('m4', -1);
            this.maoziMC5.x = this.width / 2;
            this.maoziMC5.y = this.height / 2;
            this.maoziMC5.scaleX = 1.4;
            this.maoziMC5.scaleY = 1.4;
            this.icons.visible = false;
        }
        if (this.value == "C1") {
            if (!this.maoziMC6) {
                this.maoziMC6 = game.MCUtils.getMc('c1');
            }
            this.addChild(this.maoziMC6);
            this.maoziMC6.gotoAndPlay('c1', -1);
            this.maoziMC6.x = this.width / 2;
            this.maoziMC6.y = this.height / 2;
            this.maoziMC6.scaleX = 1.36;
            this.maoziMC6.scaleY = 1.36;
            this.icons.visible = false;
        }
        else {
            egret.Tween.get(this.icons, { loop: true }).to({ scaleX: 1, scaleY: 1 }, 700).to({ scaleX: 1.2, scaleY: 1.2 }, 700);
        }
    };
    ReelItem.prototype.hideAnimation = function () {
        this.isA = false;
        if (this.maoziMC && this.maoziMC.parent) {
            this.maoziMC.parent.removeChild(this.maoziMC);
            this.maoziMC.stop();
        }
        if (this.maoziMC1 && this.maoziMC1.parent) {
            this.maoziMC1.parent.removeChild(this.maoziMC1);
            this.maoziMC1.stop();
        }
        if (this.maoziMC2 && this.maoziMC2.parent) {
            this.maoziMC2.parent.removeChild(this.maoziMC2);
            this.maoziMC2.stop();
        }
        if (this.maoziMC3 && this.maoziMC3.parent) {
            this.maoziMC3.parent.removeChild(this.maoziMC3);
            this.maoziMC3.stop();
        }
        if (this.maoziMC4 && this.maoziMC4.parent) {
            this.maoziMC4.parent.removeChild(this.maoziMC4);
            this.maoziMC4.stop();
        }
        if (this.maoziMC5 && this.maoziMC5.parent) {
            this.maoziMC5.parent.removeChild(this.maoziMC5);
            this.maoziMC5.stop();
        }
        if (this.maoziMC6 && this.maoziMC6.parent) {
            this.maoziMC6.parent.removeChild(this.maoziMC6);
            this.maoziMC6.stop();
        }
        // this.aIcon.visible=false;
        egret.Tween.removeTweens(this.icons);
        this.icons.scaleX = 1;
        this.icons.scaleY = 1;
        this.value = this._value;
    };
    return ReelItem;
}(eui.Component));
__reflect(ReelItem.prototype, "ReelItem");
//# sourceMappingURL=Reel.js.map