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
var GamePentCompoment = (function (_super) {
    __extends(GamePentCompoment, _super);
    function GamePentCompoment() {
        var _this = _super.call(this) || this;
        _this.numZeroX = [];
        _this.numTwoX = [];
        _this.skinName = GamePentSkin;
        return _this;
    }
    GamePentCompoment.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.clear();
        //let i: number = 6;
        // egret.setInterval(() => {
        // 	this.showLine(i, [{ x: 0, y: vo.GameData.lineObj['' + i][0] }, { x: 4, y: vo.GameData.lineObj['' + i][4] }]);
        // 	this.showKuang(i, [{ x: 1, y: vo.GameData.lineObj['' + i][1] }, { x: 2, y: vo.GameData.lineObj['' + i][2] }, { x: 3, y: vo.GameData.lineObj['' + i][3] }]);
        // 	i++;
        // 	if (i > 9) i = 1;
        // }, this, 1000);
        //this.drallall();
    };
    GamePentCompoment.prototype.clear = function () {
        this.kuangGroup.visible = false;
        // this.tipGroup.visible = false;
        this.lineGroup.visible = false;
        for (var i = 1; i < 26; i++) {
            this['g' + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.addLine, this);
            this['g' + i].name = i;
            this.numZeroX[i - 1] = this['txt_' + i].x; //不同字体的坐标
            this.numTwoX[i - 1] = this['txt_' + i].x - 2;
        }
    };
    GamePentCompoment.prototype.tipScale = function () {
        for (var i = 1; i < 26; i++) {
            if (window.innerWidth == 1215 && (window.innerHeight >= 829 && window.innerHeight <= 833)) {
                this['g' + i].scaleX = 1.16;
                this['g' + i].scaleY = 1.16;
            }
            else {
                this['g' + i].scaleX = 1;
                this['g' + i].scaleY = 1;
            }
        }
    };
    GamePentCompoment.prototype.addLine = function (evt) {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        if (GameManager.getInstance().gameState == GameType.GameState.STOP && !GameConfig.autoPlay && vo.GameData.autoPlayCount <= 0) {
            ui.updataTextBtn(parseInt(evt.currentTarget.name));
        }
    };
    //按鈕背景
    GamePentCompoment.prototype.showBg = function (line) {
        //
        this.anBgAll();
        for (var i = 1; i <= line; i++) {
            this.showLiangBg(i);
        }
    };
    GamePentCompoment.prototype.anBgAll = function () {
        for (var i = 1; i < 26; i++) {
            var img = this['blueBg_' + i];
            img.source = "anBg_png";
            this['txt_' + i].font = "scence_f2_fnt";
            this['txt_' + i].x = this.numTwoX[i - 1];
        }
    };
    GamePentCompoment.prototype.showLiangBg = function (line) {
        for (var i = 1; i <= line; i++) {
            var img = this['blueBg_' + i];
            img.source = "blueBg_png";
            this['txt_' + i].font = "scence_f0_fnt";
            this['txt_' + i].x = this.numZeroX[i - 1];
        }
    };
    GamePentCompoment.prototype.showTipLine = function (line) {
        this.tipGroup.visible = true;
        this['lineBg_' + line].visible = true;
        // (this['gl' + line] as eui.Group).visible = true;
    };
    GamePentCompoment.prototype.clearTip = function () {
        // this.tipGroup.visible = false;
        for (var i = 1; i < 26; i++) {
            this['lineBg_' + i].visible = false;
            // (this['gl' + i] as eui.Group).visible = false;
        }
    };
    GamePentCompoment.prototype.drallall = function () {
        var colarr = [0x000000, 0x999999, 0xffddaa, 0x887799];
        this.gGroup.removeChildren();
        this.lineGroup.visible = true;
        this.gGroup.visible = true;
        for (var i = 0; i < 25; i++) {
            for (var j = 0; j < 3; j++) {
                var rect = new eui.Rect();
                rect.fillColor = colarr[Math.floor(Math.random() * 24)];
                rect.x = i * 210 + 69;
                rect.y = j * 198;
                rect.width = 213;
                rect.height = 210;
                rect.ellipseWidth = 30;
                rect.ellipseHeight = 30;
                this.gGroup.addChild(rect);
            }
        }
    };
    GamePentCompoment.prototype.showLine = function (line, arr) {
        if (arr === void 0) { arr = null; }
        this.lineGroup.visible = true;
        this.gGroup.removeChildren();
        var img;
        if (arr == null)
            return;
        for (var i = 1; i < 26; i++) {
            img = this['line_' + i];
            if (line == i) {
                img.visible = true;
                for (var s = 0; s < arr.length; s++) {
                    var rect = new eui.Rect();
                    rect.fillColor = 0x000000;
                    // rect.x = arr[i].X * 213 + 69;
                    // rect.y = arr[i].Y * 198;
                    // rect.width = 213;
                    // rect.height = 213;
                    //表示一个框
                    var g = this.kuangGroup.getChildAt(arr[s].X);
                    var img_1 = g.getChildAt(arr[s].Y);
                    rect.x = img_1.x + g.x;
                    rect.y = img_1.y + 20;
                    rect.width = img_1.width;
                    rect.height = img_1.height;
                    //rect.ellipseWidth = 30;
                    //rect.ellipseHeight = 30;
                    this.gGroup.addChild(rect);
                    this.gGroup.visible = false;
                }
                img.mask = this.gGroup;
            }
            else {
                // img.mask = null;
                // img.visible = false;
            }
        }
    };
    GamePentCompoment.prototype.cleaAllLine = function () {
        for (var i = 1; i < 26; i++) {
            var img = this['line_' + i];
            img.visible = false;
        }
        this.lineGroup.visible = false;
    };
    GamePentCompoment.prototype.showLines = function (line) {
        this.lineGroup.visible = true;
        this.gGroup.removeChildren();
        var img = this['line_' + line];
        img.mask = null;
        img.visible = true;
    };
    GamePentCompoment.prototype.showLineArr = function (line) {
        var _this = this;
        this.cleaAllLine();
        for (var i = 1; i <= line; i++) {
            this.showLines(i);
        }
        egret.Tween.removeTweens(this.lineGroup);
        this.lineGroup.alpha = 1;
        egret.Tween.get(this.lineGroup).wait(1000).to({ alpha: 0 }, 1000).call(function () {
            _this.lineGroup.visible = false;
            _this.lineGroup.alpha = 1;
        });
    };
    GamePentCompoment.prototype.showKuang = function (line, arr) {
        this.kuangGroup.visible = true;
        for (var i = 0; i < this.kuangGroup.numChildren; i++) {
            var g = this.kuangGroup.getChildAt(i);
            for (var j = 0; j < g.numChildren; j++) {
                var img = g.getChildAt(j);
                img.visible = false;
            }
        }
        for (var s = 0; s < arr.length; s++) {
            for (var i = 0; i < this.kuangGroup.numChildren; i++) {
                var g = this.kuangGroup.getChildAt(i);
                for (var j = 0; j < g.numChildren; j++) {
                    var img = g.getChildAt(j);
                    if (i == arr[s].X && j == arr[s].Y) {
                        img.visible = true;
                        if (line < 10) {
                            img.source = 'box0' + line + '_png';
                        }
                        else {
                            img.source = 'box' + line + '_png';
                        }
                        console.log('aaaaaaaa');
                    }
                }
            }
        }
    };
    GamePentCompoment.prototype.showkuang2 = function (arr) {
        this.kuangGroup.visible = true;
        for (var i = 0; i < this.kuangGroup.numChildren; i++) {
            var g = this.kuangGroup.getChildAt(i);
            for (var j = 0; j < g.numChildren; j++) {
                var img = g.getChildAt(j);
                img.visible = false;
            }
        }
        for (var s = 0; s < arr.length; s++) {
            for (var i = 0; i < this.kuangGroup.numChildren; i++) {
                var g = this.kuangGroup.getChildAt(i);
                for (var j = 0; j < g.numChildren; j++) {
                    var img = g.getChildAt(j);
                    if (i == arr[s].X && j == arr[s].Y) {
                        img.visible = true;
                        img.source = 'box0' + 7 + '_png';
                    }
                }
            }
        }
    };
    /**
     * 通过获奖坐标以及线数，获得不获奖的坐标
     */
    GamePentCompoment.prototype.getLineArrForKuang = function (line, arr) {
        var larr = [];
        var objArr = vo.GameData.lineObj[line + ''];
        for (var i = 0; i < objArr.length; i++) {
            var sy = objArr[i];
            var is = 0;
            for (var j = 0; j < arr.length; j++) {
                if (arr[j].X == i) {
                    break;
                }
                else {
                    is++;
                }
            }
            if (is == arr.length) {
                larr.push({ X: i, Y: sy });
            }
        }
        if ((line == 18) || (line == 19) || (line == 22) || (line == 23)) {
            larr.push({ X: 1, Y: 1 }, { X: 2, Y: 1 }, { X: 3, Y: 1 });
        }
        if ((line == 20) || (line == 21)) {
            larr.push({ X: 0, Y: 1 }, { X: 1, Y: 1 }, { X: 3, Y: 1 }, { X: 4, Y: 1 });
        }
        if ((line == 24) || (line == 25)) {
            larr.push({ X: 0, Y: 1 }, { X: 1, Y: 1 }, { X: 2, Y: 1 }, { X: 3, Y: 1 }, { X: 4, Y: 1 });
        }
        return larr;
    };
    GamePentCompoment.prototype.clearAll = function () {
        this.cleaAllLine();
        this.clearTip();
        this.gGroup.removeChildren();
        this.kuangGroup.visible = false;
    };
    return GamePentCompoment;
}(eui.Component));
__reflect(GamePentCompoment.prototype, "GamePentCompoment");
//# sourceMappingURL=GamePentCompoment.js.map