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
var core;
(function (core) {
    /**
     * 滑动展示组件
     */
    var MyScorll = (function (_super) {
        __extends(MyScorll, _super);
        function MyScorll(c, cls) {
            var _this = _super.call(this) || this;
            _this.index = 0;
            _this.LEN = 0;
            _this.isTouch = false;
            _this.isplaying = false;
            _this.initView(c, cls);
            return _this;
        }
        MyScorll.prototype.initView = function (c, cls) {
            this.container = c;
            this.itemArr = [];
            for (var i = 0; i < 3; i++) {
                var item = new cls();
                this.itemArr.push(item);
                this.container.addChild(item);
            }
            this.container.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
            egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
            egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
            egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onEnd, this);
        };
        MyScorll.prototype.setData = function (arr) {
            this.dataArr = arr;
            this.setIndex(0);
            this.startPlay();
        };
        /**
         *
         */
        MyScorll.prototype.setIndex = function (_index) {
            var _this = this;
            this.isplaying = true;
            egret.Tween.get(this.container).wait(400).call(function () {
                _this.isplaying = false;
            }, this);
            if (_index < 0 || _index >= this.dataArr.length) {
                this.index = 0;
            }
            this.index = _index;
            for (var i = 0; i < this.itemArr.length; i++) {
                this.itemArr[i].y = this.container.height / 2 - this.itemArr[i].height / 2;
                var tx = (i - 1) * this.container.width + (this.container.width / 2 - this.itemArr[i].width / 2);
                var item = this.itemArr[i];
                var cx = item.x;
                if (Math.abs(cx - tx) > this.container.width) {
                    item.x = tx;
                }
                else {
                    item.alpha = 0.4;
                    egret.Tween.get(item).to({ x: tx }, 400, egret.Ease.cubicOut);
                    egret.Tween.get(item).to({ alpha: 1 }, 400);
                }
                var cindex = i + this.index - 1 > this.dataArr.length - 1 ? 0 : i + this.index - 1;
                if (i + this.index - 1 > this.dataArr.length - 1) {
                    cindex = 0;
                }
                else if (i + this.index - 1 < 0) {
                    cindex = this.dataArr.length - 1;
                }
                item.setData(this.dataArr[cindex]);
            }
        };
        MyScorll.prototype.onBegin = function (e) {
            if (!this.isplaying) {
                this.isTouch = true;
                this.cX = e.stageX;
                this.cY = e.stageY;
                this.tX = this.cX;
                this.tY = this.cY;
                this.stopPlay();
            }
        };
        MyScorll.prototype.onMove = function (e) {
            if (this.isTouch) {
                var dx = e.stageX - this.tX;
                if (this.tX - this.cX > this.container.width / 2)
                    return;
                for (var i = 0; i < this.itemArr.length; i++) {
                    var item = this.itemArr[i];
                    item.alpha = 0.5;
                    item.x += dx;
                }
                this.tX += dx;
            }
        };
        MyScorll.prototype.onEnd = function (e) {
            if (this.isTouch) {
                this.startPlay();
                this.isTouch = false;
                var dx = e.stageX;
                if (dx - this.cX > 300) {
                    this.subIndex();
                    var item0 = this.itemArr[0];
                    var item1 = this.itemArr[1];
                    var item2 = this.itemArr[2];
                    this.itemArr = [item2, item0, item1];
                }
                else if (dx - this.cX < -300) {
                    this.addIndex();
                    var item0 = this.itemArr[0];
                    var item1 = this.itemArr[1];
                    var item2 = this.itemArr[2];
                    this.itemArr = [item1, item2, item0];
                }
                this.setIndex(this.index);
                this.dispatchEventWith(egret.Event.CHANGE);
            }
        };
        MyScorll.prototype.addIndex = function () {
            if (this.index < this.dataArr.length - 1) {
                this.index += 1;
            }
            else {
                this.index = 0;
            }
        };
        MyScorll.prototype.subIndex = function () {
            if (this.index > 0) {
                this.index -= 1;
            }
            else {
                this.index = this.dataArr.length - 1;
            }
        };
        /**
         * 启用自动播放功能
         */
        MyScorll.prototype.startPlay = function () {
            var _this = this;
            if (this.t != undefined)
                return;
            this.t = egret.setInterval(function () {
                _this.subIndex();
                var item0 = _this.itemArr[0];
                var item1 = _this.itemArr[1];
                var item2 = _this.itemArr[2];
                _this.itemArr = [item2, item0, item1];
                _this.setIndex(_this.index);
                _this.dispatchEventWith(egret.Event.CHANGE);
            }, this, 7000);
        };
        MyScorll.prototype.stopPlay = function () {
            if (this.t != undefined) {
                egret.clearInterval(this.t);
                this.t = undefined;
            }
        };
        MyScorll.prototype.setIndex2 = function (_index) {
            var _this = this;
            if (this.index == _index)
                return;
            this.stopPlay();
            if (this.index > _index) {
                this.subIndex();
                var item0 = this.itemArr[0];
                var item1 = this.itemArr[1];
                var item2 = this.itemArr[2];
                this.itemArr = [item2, item0, item1];
            }
            else {
                this.addIndex();
                var item0 = this.itemArr[0];
                var item1 = this.itemArr[1];
                var item2 = this.itemArr[2];
                this.itemArr = [item1, item2, item0];
            }
            this.setIndex(this.index);
            this.dispatchEventWith(egret.Event.CHANGE);
            egret.setTimeout(function () { _this.startPlay(); }, this, 500);
        };
        return MyScorll;
    }(egret.EventDispatcher));
    core.MyScorll = MyScorll;
    __reflect(MyScorll.prototype, "core.MyScorll");
})(core || (core = {}));
//# sourceMappingURL=MyScorll.js.map