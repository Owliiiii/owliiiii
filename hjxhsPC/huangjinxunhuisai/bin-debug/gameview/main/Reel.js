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
        _this.curReelData = ['M1', 'M1', 'M2'];
        /**
         * 目标盘面
         **/
        _this.targetReelData = ['M1', '0', 'M2'];
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
        // this.clearAllAnimation1();
        var item = this.kGroup.getChildAt(i + 1);
        item.goAnimation();
    };
    Reel.prototype.hideAnimation = function (i) {
        var item = this.kGroup.getChildAt(i + 1);
        item.hideAnimation();
    };
    Reel.prototype.resumeAllAnimation = function () {
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            item.resumeAnimation();
        }
    };
    Reel.prototype.pauseAllAnimation = function () {
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            item.stopAniamtion();
        }
    };
    Reel.prototype.clearAllAnimation = function () {
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            item.hideAnimation();
        }
    };
    Reel.prototype.clearAllAnimation1 = function () {
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            item.hideQuan();
        }
    };
    Reel.prototype.onFrame = function () {
        if (this.isAction) {
            for (var i = 0; i < this.kGroup.numChildren; i++) {
                var item = this.kGroup.getChildAt(i);
                item.y += this.reelSpeed;
                if (item.y >= this.height) {
                    var t1 = GameConfig.speedPlay ? Reel.QUK_TIME : Reel.TIME;
                    //let t2: number = GameConfig.speedPlay ? Reel.QUK_STOPTIME : Reel.STOPTIME;
                    var t3 = GameConfig.speedPlay ? [200, 350, 500, 650, 800] : [0, 400, 730, 930, 1030];
                    if (egret.getTimer() - this.curTime > t1 + (t3[this.index])) {
                        this.isAction = false;
                        this.overReel();
                        return;
                    }
                    else {
                        item.y = this.kGroup.getChildAt(0).y - this.kGroup.getChildAt(0).height;
                        item.isVir = true;
                        item.value = 'M' + Math.ceil(Math.random() * 7);
                        // item.setVir(true);
                        this.kGroup.setChildIndex(item, 0);
                    }
                }
            }
        }
    };
    Reel.prototype.overReel = function () {
        var _this = this;
        egret.Tween.removeTweens(this);
        if (!this.stopState) {
            SoundManager.getInstance().playEffect(SoundConst.REELEND);
        }
        var _loop_1 = function (i) {
            var item = this_1.kGroup.getChildAt(i);
            egret.Tween.removeTweens(item);
            var ty = void 0;
            ty = i * item.height - item.height;
            item.y = this_1.stopState ? ty : i * item.height - item.height + 100;
            item.isVir = false;
            item.value = i > 0 && i < 4 ? this_1.curReelData[i - 1] : 'M' + Math.ceil(Math.random() * 7);
            // item.setVir(false);
            //item.value ='M'+Math.ceil(Math.random()*7); 
            var t = this_1.stopState ? 0 : 300;
            egret.Tween.get(item).to({ y: ty }, t, egret.Ease.cubicOut).call(function () {
                if (_this.index == 4 && i == _this.kGroup.numChildren - 1) {
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
        var initArr = vo.GameData.reelArr[this.index];
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            item.value = i > 0 && i < 4 ? this.curReelData[i - 1] : 'M' + Math.ceil(Math.random() * 7);
        }
    };
    Reel.prototype.start = function () {
        var _this = this;
        for (var i = 0; i < this.kGroup.numChildren; i++) {
            var item = this.kGroup.getChildAt(i);
            var ty = item.y - 100; //先上升
            egret.Tween.get(item).to({ y: ty }, 150).to({ y: ty + 100 }, 150);
        }
        this.curTime = egret.getTimer() + 99999;
        egret.Tween.get(this).wait(300).call(function () {
            _this.isAction = true;
            _this.stopState = false;
        }, this);
    };
    Reel.prototype.resultArr = function () {
        this.curReelData = JSON.parse(JSON.stringify(this.targetReelData));
        for (var i = 0; i < this.curReelData.length; i++) {
            // console.log("this.curReelData == " + this.curReelData[i]);
        }
    };
    Reel.prototype.stop = function () {
        this.isAction = false;
        this.stopState = true;
        this.overReel();
    };
    /**
     * 展示数量
     */
    Reel.ShowNum = 3;
    /**
     * 正常滚动时间
     */
    Reel.TIME = 700;
    /**
     * 快速滚动时间
     */
    Reel.QUK_TIME = 200;
    /**
     * 停止间隔
     */
    Reel.STOPTIME = 200;
    /**
     * 快速停止间隔
     */
    Reel.QUK_STOPTIME = 100;
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
        // public setVir(b: boolean): void {
        // 	this.isVir = b;
        // 	if (this.isVir) {
        // 		this.icon.visible = false;
        // 		// this.vIcon.visible = true;
        // 		let t: string = Math.floor(Math.random() * 12) + '_vir_png';
        // 		// this.vIcon.source = t;
        // 		//console.log(t);
        // 	}
        // 	else {
        // 		this.icon.source = this._value + '_icon_png';
        // 		this.icon.visible = true;
        // 		// this.vIcon.visible = false;
        // 	}
        // }
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
                this.icon.source = this.isVir ? this._value + '_vir_png' : this._value + '_an_png';
            }
        },
        enumerable: true,
        configurable: true
    });
    ReelItem.prototype.goAnimation = function () {
        this.quan.visible = true;
        if (this.isA)
            return;
        this.isA = true;
        // egret.Tween.removeTweens(this.icon);
        // this.value = this._value;
        // // this.aIcon.visible = true;
        // egret.Tween.get(this.icon, { loop: true }).to({ scaleX: 0.8, scaleY: 0.8 }, 600).to({ scaleX: 1, scaleY: 1 }, 600);
        egret.Tween.removeTweens(this.iconliang);
        this.value = this._value;
        // if (boo) {
        // this.scoreBg.visible = true;
        // this.score.visible = true;
        // this.score.text = '￥' + money.toFixed(2);
        // }
        this.iconliang.source = this._value + '_liang_png';
        this.iconliang.alpha = 0;
        egret.Tween.get(this.iconliang, { loop: true }).to({ alpha: 1 }, 600)
            .to({ alpha: 0 }, 600)
            .call(function () {
            // this.hideAnimation();
            // if (boo) {
            // 	this.hideLine();
            // }
        })
            .call(function () {
            // if (boo) {
            // 	// console.log('重置');
            // 	let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
            // 	ui.gameScence.showAnimation()
            // }
        });
    };
    ReelItem.prototype.stopAniamtion = function () {
        egret.Tween.pauseTweens(this.icon);
    };
    ReelItem.prototype.resumeAnimation = function () {
        egret.Tween.resumeTweens(this.icon);
    };
    ReelItem.prototype.hideQuan = function () {
        // this.isA = false;
        this.quan.visible = false;
    };
    ReelItem.prototype.hideAnimation = function () {
        this.isA = false;
        egret.Tween.removeTweens(this.iconliang);
        this.value = this._value;
        this.quan.visible = false;
        this.iconliang.alpha = 0;
    };
    return ReelItem;
}(eui.Component));
__reflect(ReelItem.prototype, "ReelItem");
//# sourceMappingURL=Reel.js.map