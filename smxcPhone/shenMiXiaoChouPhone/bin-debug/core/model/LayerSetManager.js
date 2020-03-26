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
var LayerSetManager = (function (_super) {
    __extends(LayerSetManager, _super);
    function LayerSetManager() {
        var _this = _super.call(this) || this;
        egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE, function () {
            _this.s = window.innerHeight / window.innerWidth;
            if (egret.Capabilities.os == 'iOS') {
                var JQ = window['$'];
                _this.test();
                // JQ('#nvLayer').show();
            }
            _this.dispatchEventWith(SetEvent.SET_OR_CHANGE);
        }, _this);
        return _this;
    }
    LayerSetManager.getInstance = function () {
        if (!this._instance) {
            this._instance = new LayerSetManager();
        }
        return this._instance;
    };
    LayerSetManager.prototype.test = function () {
        var _this = this;
        if (window.innerHeight < window.innerWidth) {
            var sx = window.innerWidth / 2 - 200 / 2;
            var sy = window.innerHeight / 2 - 179 / 2;
            // egret.log("syTest == " + sy);
            var $_1 = window['$'];
            $_1('#nvImg').css({ width: 200, height: 179 });
            $_1('#nvImg').css({ left: sx + 40, top: sy });
            var t;
            var self = this;
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
                clearTimeout(t);
                t = setTimeout(function () {
                    var sx = window.innerWidth / 2 - 200 / 2;
                    var sy = window.innerHeight / 2 - 179 / 2;
                    $_1('#nvImg').css({ width: 200, height: 179 });
                    $_1('#nvImg').css({ left: sx + 40, top: sy });
                }, 200);
            });
            this.s = window.innerHeight / window.innerWidth;
            if (egret.Capabilities.os == 'iOS') {
                var JQ = window['$'];
                JQ('#nvLayer').show();
                $_1('#nvImg').show();
                $_1('#nvImg1').hide();
                window.onscroll = function () {
                    egret.clearTimeout(_this.timeout);
                    _this.timeout = egret.setTimeout(function () {
                        _this.resizeCompete();
                    }, _this, 200);
                };
            }
        }
        else {
            var sx = window.innerWidth / 2 - 128.5 / 2;
            var sy = window.innerHeight / 2 - 192 / 2;
            // egret.log("syTest == " + sy);
            var $_2 = window['$'];
            $_2('#nvImg1').css({ width: 128.5, height: 192 });
            $_2('#nvImg1').css({ left: sx + 50, top: sy });
            var t;
            var self = this;
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
                clearTimeout(t);
                t = setTimeout(function () {
                    var sx = window.innerWidth / 2 - 128.5 / 2;
                    var sy = window.innerHeight / 2 - 192 / 2;
                    $_2('#nvImg1').css({ width: 128.5, height: 192 });
                    $_2('#nvImg1').css({ left: sx + 50, top: sy });
                }, 200);
            });
            this.s = window.innerHeight / window.innerWidth;
            if (egret.Capabilities.os == 'iOS') {
                var JQ = window['$'];
                JQ('#nvLayer').show();
                $_2('#nvImg').hide();
                $_2('#nvImg1').show();
                window.onscroll = function () {
                    egret.clearTimeout(_this.timeout);
                    _this.timeout = egret.setTimeout(function () {
                        _this.resizeCompete();
                    }, _this, 200);
                };
            }
        }
    };
    LayerSetManager.prototype.init = function () {
        var _this = this;
        if (window.innerHeight >= window.innerWidth) {
            var sx = window.innerWidth / 2 - 128.5 / 2;
            var sy = window.innerHeight / 2 - 192 / 2;
            // egret.log("syInit == " + sy);
            var $_3 = window['$'];
            $_3('#nvImg1').css({ width: 128.5, height: 192 });
            $_3('#nvImg1').css({ left: sx + 50, top: sy });
            var t;
            var self = this;
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
                clearTimeout(t);
                t = setTimeout(function () {
                    var sx = window.innerWidth / 2 - 128.5 / 2;
                    var sy = window.innerHeight / 2 - 192 / 2;
                    $_3('#nvImg1').css({ width: 128.5, height: 192 });
                    $_3('#nvImg1').css({ left: sx + 50, top: sy });
                }, 200);
            });
            // this.s = window.innerHeight / window.innerWidth;
            // if (egret.Capabilities.os == 'iOS') {
            // 	let JQ = window['$'];
            // 	JQ('#nvLayer').show();
            // 	window.onscroll = () => {
            // 		egret.clearTimeout(this.timeout);
            // 		this.timeout = egret.setTimeout(() => {
            // 			this.resizeCompete();
            // 		}, this, 200);
            // 	}
            // }
            $_3('#nvImg').hide();
        }
        else {
            var sx = window.innerWidth / 2 - 200 / 2;
            var sy = window.innerHeight / 2 - 179 / 2;
            // egret.log("syInit == " + sy);
            var $_4 = window['$'];
            $_4('#nvImg').css({ width: 200, height: 179 });
            $_4('#nvImg').css({ left: sx + 40, top: sy + 35 });
            var t;
            var self = this;
            window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
                clearTimeout(t);
                t = setTimeout(function () {
                    var sx = window.innerWidth / 2 - 200 / 2;
                    var sy = window.innerHeight / 2 - 179 / 2;
                    $_4('#nvImg').css({ width: 200, height: 179 });
                    $_4('#nvImg').css({ left: sx + 40, top: sy + 20 });
                }, 200);
            });
            $_4('#nvImg1').hide();
        }
        this.s = window.innerHeight / window.innerWidth;
        if (egret.Capabilities.os == 'iOS') {
            var JQ = window['$'];
            JQ('#nvLayer').show();
            window.onscroll = function () {
                egret.clearTimeout(_this.timeout);
                _this.timeout = egret.setTimeout(function () {
                    _this.resizeCompete1();
                }, _this, 200);
            };
        }
    };
    LayerSetManager.prototype.resizeCompete = function () {
        var JQ = window['$'];
        JQ('main').css('top', 0);
        // egret.log("---" + window.innerHeight, window.innerWidth, window.innerHeight / window.innerWidth, this.s);
        if (window.innerHeight >= window.innerWidth) {
            if (window.innerHeight / window.innerWidth > this.s) {
                JQ('#nvLayer').hide();
            }
            else {
                JQ('#nvLayer').show();
                window.scrollTo(0, 0);
            }
        }
        else {
            // egret.log(window.innerHeight, window.innerWidth, window.innerHeight / window.innerWidth, this.s);
            if (window.innerHeight / window.innerWidth >= this.s) {
                JQ('#nvLayer').hide();
            }
            else {
                JQ('#nvLayer').show();
                window.scrollTo(0, 0);
            }
        }
        core.LayerManager.getInstance().dispatchEventWith(SetEvent.SET_OR_CHANGE);
    };
    LayerSetManager.prototype.resizeCompete1 = function () {
        var JQ = window['$'];
        JQ('main').css('top', 0);
        // egret.log("---" + window.innerHeight, window.innerWidth, window.innerHeight / window.innerWidth, this.s);
        if (window.innerHeight >= window.innerWidth) {
            if (window.innerHeight / window.innerWidth > this.s) {
                JQ('#nvLayer').hide();
            }
            else {
                JQ('#nvLayer').show();
                window.scrollTo(0, 0);
            }
        }
        else {
            // egret.log(window.innerHeight, window.innerWidth, window.innerHeight / window.innerWidth, this.s);
            if (window.innerHeight / window.innerWidth > this.s) {
                JQ('#nvLayer').hide();
            }
            else {
                JQ('#nvLayer').show();
                window.scrollTo(0, 0);
            }
        }
        core.LayerManager.getInstance().dispatchEventWith(SetEvent.SET_OR_CHANGE);
    };
    return LayerSetManager;
}(egret.EventDispatcher));
__reflect(LayerSetManager.prototype, "LayerSetManager");
//# sourceMappingURL=LayerSetManager.js.map