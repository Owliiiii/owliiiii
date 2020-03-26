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
        /**
         * 当前滚动索引
         */
        _this.curReelIndex = 0;
        /**
         * 目标索引
         */
        _this.targetIndex = 0;
        /**
         * 滚动数组
         */
        _this.reelArr = [];
        /**
         * 滚动速度
         */
        _this.reelSpeed = 40;
        /**
         * 滚轮索引
         */
        _this.index = 0;
        /**
         * 更新最小间隔时间
         */
        _this.JIAN_MIN_TIME = 16.6;
        /**
         * 更新最大间隔时间
         */
        _this.JIAN_MAX_TIME = 33.3;
        _this.skinName = ReelSkin;
        return _this;
    }
    ;
    Reel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Reel.prototype.init = function () {
        this.reelArr = vo.GameData.reelArr[this.index];
        this.containerGroup.removeChildren();
        for (var i = 0; i <= Reel.ShowNum + 1; i++) {
            var item = new ReelItem();
            item.width = this.containerGroup.width;
            item.height = this.containerGroup.height / Reel.ShowNum;
            this.containerGroup.addChild(item);
            item.y = item.height * i;
        }
        this.timer = new egret.Timer(this.JIAN_MAX_TIME, 0);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.updata, this);
    };
    /**
     * 全设置正常状态
     */
    Reel.prototype.setItem = function () {
        for (var i = 0; i < this.containerGroup.numChildren; i++) {
            var item = this.containerGroup.getChildAt(i);
            item.setItem(false);
        }
    };
    /**
     * 设置全暗
     */
    Reel.prototype.setAn = function () {
        for (var i = 0; i < this.containerGroup.numChildren; i++) {
            var item = this.containerGroup.getChildAt(i);
            item.setAn();
        }
    };
    /**
     * 设置哪一个亮并动
     */
    Reel.prototype.setliangAndActForIndex = function (index, isOne) {
        var item = this.containerGroup.getChildAt(index);
        item.setliang(isOne);
    };
    /**
     * 设置当前索引
     */
    Reel.prototype.setCurIndex = function (index, isbounce) {
        if (isbounce === void 0) { isbounce = true; }
        if (this.index >= this.reelArr.length) {
            console.log("索引设置超出边界");
            return;
        }
        this.targetIndex = this.curReelIndex = index;
        for (var i = 0; i < this.containerGroup.numChildren; i++) {
            var item = this.containerGroup.getChildAt(i);
            item.isMohu = false;
            egret.Tween.removeTweens(item);
            if (i < 4) {
                var cIndex = this.curReelIndex + i < this.reelArr.length ? this.curReelIndex + i : (this.curReelIndex + i) % this.reelArr.length;
                item.value = this.reelArr[cIndex];
                // console.log("前面 == " + this.reelArr[cIndex]);
                var ty = item.height * i;
                item.y = isbounce ? ty - 300 : ty;
                if (isbounce) {
                    egret.Tween.get(item).to({ y: ty }, 300, egret.Ease.backOut);
                    SoundManager.getInstance().playMusic2(SoundConst.REEL_END, 1, 0.5);
                }
            }
            else if (i == this.containerGroup.numChildren - 1) {
                item.value = this.reelArr[this.curReelIndex - 1 < 0 ? this.reelArr.length - 1 : this.curReelIndex - 1];
                // console.log("DUOS === " + this.reelArr[this.curReelIndex - 1 < 0 ? this.reelArr.length - 1 : this.curReelIndex - 1]);
                item.y = -item.height;
                var ty = -item.height;
                item.y = isbounce ? ty - 300 : ty;
                if (isbounce) {
                    egret.Tween.get(item).to({ y: ty }, 300, egret.Ease.backOut);
                }
            }
            item.setItem(false);
        }
    };
    Reel.prototype.start = function () {
        this.timeoutInter = null;
        this.timer.delay = this.JIAN_MAX_TIME;
        this.curTime = 0;
        egret.Tween.removeTweens(this);
        this.timer.start();
    };
    Reel.prototype.goIndex = function (tIndex) {
        if (tIndex >= this.reelArr.length) {
            console.log('索引设置超出边界');
            return;
        }
        // this.timeoutInter = null;
        this.targetIndex = tIndex;
        // this.timer.delay = this.JIAN_MAX_TIME;
        // this.curTime = 0;
        // egret.Tween.removeTweens(this);
    };
    /**
     * 暂停
     */
    Reel.prototype.pausme = function () {
        this.timer.stop();
        if (this.timeoutInter != null) {
            egret.clearTimeout(this.timeoutInter);
        }
    };
    /**
     * 继续
     */
    Reel.prototype.resume = function () {
        this.timer.start();
        if (this.timeoutInter != null) {
            if (this.index == 2) {
                this.timeoutInter = egret.setTimeout(function () {
                    core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_ROUNDOVER);
                    return;
                }, this, 300);
            }
        }
    };
    Object.defineProperty(Reel.prototype, "speed", {
        get: function () {
            return this.reelSpeed;
        },
        set: function (speed) {
            this.reelSpeed = speed;
        },
        enumerable: true,
        configurable: true
    });
    Reel.prototype.updata = function () {
        var _this = this;
        this.curTime += this.timer.delay;
        if (this.timer.delay > this.JIAN_MIN_TIME) {
            this.timer.delay -= 2;
        }
        else {
            this.timer.delay = this.JIAN_MIN_TIME;
        }
        for (var i = 0; i < this.containerGroup.numChildren; i++) {
            var item = this.containerGroup.getChildAt(i);
            item.y += this.reelSpeed;
            if (item.y >= this.containerGroup.height) {
                var t = GameConfig.speedPlay ? Reel.SPEEDTIME : Reel.TIME;
                var st = GameConfig.speedPlay ? Reel.SPEED_STOPTIME : Reel.STOPTIME;
                if (!GameConfig.isData) {
                    st = 99999;
                }
                if (this.curTime >= t + this.index * st) {
                    this.curReelIndex = this.targetIndex;
                    this.timer.stop();
                    this.setCurIndex(this.curReelIndex);
                    var t_1 = GameConfig.speedPlay ? 400 : 550;
                    if (this.index == 2) {
                        this.timeoutInter = egret.setTimeout(function () {
                            core.NotifyManager.getInstance().sendNotify(core.NotifyConst.LOGIC_ROUNDOVER);
                            _this.timeoutInter = null;
                            return;
                        }, this, t_1);
                        return;
                    }
                    else {
                        return;
                    }
                }
                item.y = -2 * item.height + this.reelSpeed + item.y - this.containerGroup.height;
                item.isMohu = true;
                this.curReelIndex = this.curReelIndex - 1 < 0 ? this.reelArr.length - 1 : this.curReelIndex - 1;
                item.value = this.reelArr[this.curReelIndex];
                item.setItem(false);
            }
        }
    };
    Reel.prototype.showMaozi = function (indexArr) {
        for (var i = 0; i < this.kuangGroup.numChildren; i++) {
            this.containerGroup.getChildAt(i).setAn();
            this.kuangGroup.getChildAt(i).visible = false;
        }
        for (var i = 0; i < indexArr.length; i++) {
            var item = this.containerGroup.getChildAt(indexArr[i]['Y']);
            item.showMaozi();
            this.kuangGroup.getChildAt(indexArr[i]['Y']).visible = true;
        }
        this.kuangGroup.visible = true;
    };
    Reel.prototype.hideMaozi = function () {
        for (var i = 0; i < this.containerGroup.numChildren; i++) {
            var item = this.containerGroup.getChildAt(i);
            item.hideMaozi();
        }
        this.kuangGroup.visible = false;
    };
    /**
     * 展示数量
     */
    Reel.ShowNum = 3;
    /**
     * 正常滚动时间
     */
    Reel.TIME = 1500;
    /**
     * 快速滚动时间
     */
    Reel.SPEEDTIME = 800;
    /**
     * 停止间隔时间
     */
    Reel.STOPTIME = 300;
    /**
     * 快速停止间隔时间
     */
    Reel.SPEED_STOPTIME = 150;
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
        _this.isMohu = false;
        /**
         * 发光速度
         */
        _this.speed = 3; //2
        /**
         * 亮度调节速度
         */
        _this.aspeed = 6;
        _this.skinName = ReelItemSkin;
        _this.initFiter();
        return _this;
    }
    /**
     * 展示猴子动画
     */
    ReelItem.prototype.showMaozi = function () {
        if (!this.maoziMC) {
            this.maoziMC = game.MCUtils.getMc('maozi');
        }
        this.addChild(this.maoziMC);
        this.maoziMC.x = this.width / 2;
        this.maoziMC.y = this.height / 2;
        this.maoziMC.scaleX = 1.4;
        this.maoziMC.scaleY = 1.4;
        this.maoziMC.gotoAndPlay('action0', -1);
        this.icon.visible = false;
    };
    /**
     * 隐藏猴子动画
     */
    ReelItem.prototype.hideMaozi = function () {
        if (this.maoziMC && this.maoziMC.parent) {
            this.maoziMC.parent.removeChild(this.maoziMC);
            this.maoziMC.stop();
        }
        this.icon.visible = true;
        this.setItem(false);
    };
    /**
     * 设置正常状态
     */
    ReelItem.prototype.setItem = function (isOne) {
        if (isOne === void 0) { isOne = false; }
        this.icon.source = this.isMohu ? 'bicon_' + this.value + '_2_png' : 'bicon_' + this.value + '_0_png';
        // console.log("2222222");
        if (!isOne) {
            this.stopAction();
        }
        // 
    };
    /**
     * 设置暗状态
     */
    ReelItem.prototype.setAn = function () {
        //this.icon.source = 'bicon_' + this.value + '_0_png';
        // console.log("111111111");
        this.stopAction();
        var test = this.colorFlilter.matrix;
        test = [
            1, 0, 0, 0, -60,
            0, 1, 0, 0, -60,
            0, 0, 1, 0, -60,
            0, 0, 0, 1, 0
        ];
        this.colorFlilter.matrix = test;
        this.icon.filters = [this.colorFlilter];
    };
    /**
     * 设置亮状态
     */
    ReelItem.prototype.setliang = function (isOne) {
        this.setItem(isOne);
        this.goAction();
    };
    /**
     * 开始动画
     */
    ReelItem.prototype.goAction = function () {
        var _this = this;
        if (this.inter != undefined) {
            egret.clearInterval(this.inter);
        }
        if (this.value.indexOf('CC') == -1) {
            egret.Tween.removeTweens(this.icon);
            this.inter = egret.setInterval(function () {
                //发光范围改变
                _this.glowFilter.blurX += _this.speed;
                _this.glowFilter.blurY += _this.speed;
                if (_this.glowFilter.blurX > 50 || _this.glowFilter.blurX < 0) {
                    _this.speed = -_this.speed;
                }
                //亮度改变
                var test = _this.colorFlilter.matrix;
                test[4] += _this.aspeed;
                test[9] += _this.aspeed;
                test[14] += _this.aspeed;
                if (test[4] > 50 || test[4] < 0) {
                    _this.aspeed = -_this.aspeed;
                }
                _this.colorFlilter.matrix = test;
                _this.icon.filters = [_this.glowFilter, _this.colorFlilter];
            }, this, 20);
        }
    };
    /**
     * 停止动画
     */
    ReelItem.prototype.stopAction = function () {
        if (this.value.indexOf('CC') == -1) {
            {
                egret.clearInterval(this.inter);
                this.icon.filters = [];
            }
        }
        var test = this.colorFlilter.matrix;
        test = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        this.colorFlilter.matrix = test;
    };
    /**
     * 初始化滤镜
     */
    ReelItem.prototype.initFiter = function () {
        //外发光 
        if (!this.glowFilter) {
            var color = 0xFFFFFF; /// 光晕的颜色，十六进制，不包含透明度
            var alpha = 0.1; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
            var blurX = 0; /// 水平模糊量。有效值为 0 到 255.0（浮点）
            var blurY = 0; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
            var strength = 30; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
            var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
            var inner = false; /// 指定发光是否为内侧发光，暂未实现
            var knockout = false; /// 指定对象是否具有挖空效果，暂未实现
            this.glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality, inner, knockout);
        }
        //内亮度
        var colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        if (!this.colorFlilter) {
            this.colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        }
    };
    return ReelItem;
}(eui.Component));
__reflect(ReelItem.prototype, "ReelItem");
//# sourceMappingURL=Reel.js.map