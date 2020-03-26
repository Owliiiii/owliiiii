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
        _this.zuanObj = [];
        /**显示免费游戏中中了dimao的特效 */
        /**先添加一个img在组件，并且把图片放上去 */
        _this.bounsIdx = 0;
        _this.skinName = GamePentSkin;
        return _this;
    }
    GamePentCompoment.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.clear();
    };
    GamePentCompoment.prototype.clear = function () {
        this.kuangGroup.visible = false;
    };
    /**游戏旋转中，有免费游戏logo出现的动画层 */
    GamePentCompoment.prototype.c1PlayAc = function (idx, idy) {
        var gp = this.showAllKuang.getChildAt(idx);
        if (idy < gp.numChildren) {
            var reelItem = gp.getChildAt(idy);
            reelItem.c1PlayAc();
        }
    };
    /**中奖显示界面(一次全部显示) */
    GamePentCompoment.prototype.showKuang = function (arr, money) {
        if (money === void 0) { money = 0; }
        this.kuangGroup.visible = true;
        this.hideAll();
        this.showAllMask();
        var res = vo.GameData.resultData.Value.Main.ReelSymbols;
        // console.log(arr.length)
        for (var i = 0; i < arr.length; i++) {
            var positions = arr[i].Positions;
            for (var j = 0; j < positions.length; j++) {
                var g = this.showAllKuang.getChildAt(positions[j].X);
                var img = g.getChildAt(positions[j].Y);
                var name_1 = res[positions[j].X][positions[j].Y];
                img.value = name_1;
            }
        }
    };
    /**中奖显示界面（什么都显示） */
    GamePentCompoment.prototype.showkuang2 = function (positions, money) {
        if (money === void 0) { money = 0; }
        this.kuangGroup.visible = true;
        this.hideAll();
        this.showAllMask();
        var _loop_1 = function (i) {
            var res = vo.GameData.resultData.Value.Main.ReelSymbols[positions[i].X];
            var g = this_1.kuangGroup.getChildAt(positions[i].X);
            var img = g.getChildAt(positions[i].Y);
            var bool = false;
            if (positions[i].X == 0 && i == 0 && money > 0) {
                bool = true;
            }
            var resName = res[positions[i].Y];
            if (resName == 'M1') {
                var niu1MC_1 = game.MCUtils.getMc('niu1');
                img.addChild(niu1MC_1);
                niu1MC_1.anchorOffsetY = niu1MC_1.height / 2;
                niu1MC_1.anchorOffsetX = niu1MC_1.width / 2;
                niu1MC_1.gotoAndPlay('niu1');
                // niu1MC.x = -(niu1MC.width - img.width) / 2 - 20;
                niu1MC_1.x = img.width / 2 - 20;
                niu1MC_1.y = img.height / 2 + 25;
                // niu1MC.y = - (niu1MC.height - img.height) / 2 + 25;
                egret.Tween.get(niu1MC_1).to({ scaleX: 1.05, scaleY: 1.05 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).call(function () {
                    img.removeChild(niu1MC_1);
                });
                return "continue";
            }
            var name_2 = '';
            if (res[positions[i].Y] != 'WW') {
                name_2 = res[positions[i].Y] + '_box_png';
            }
            img.showAnmation(name_2, bool, money);
            var imgbg = img.img;
            egret.Tween.get(imgbg).to({ scaleX: 1.05, scaleY: 1.05 }, 400).to({ scaleX: 1, scaleY: 1 }, 400);
            if (GameConfig.freePlay && res[positions[i].Y] != 'WW' && this_1.zuanRoll) {
                egret.Tween.get(this_1.zuanRoll.parent).to({ scaleX: 1.05, scaleY: 1.05 }, 400).to({ scaleX: 1, scaleY: 1 }, 400);
            }
        };
        var this_1 = this;
        for (var i = 0; i < positions.length; i++) {
            _loop_1(i);
        }
    };
    /**免费游戏入口表现形式 */
    GamePentCompoment.prototype.freeGameEntry = function (arr) {
        var _this = this;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        this.kuangGroup.visible = true;
        this.hideAll();
        this.showAllMask();
        // let res = vo.GameData.resultData.Value.Main.ReelSymbols
        // for (let i = 0; i < arr.length; i++) {
        var positions = arr.Positions;
        console.log(positions);
        for (var j = 0; j < positions.length; j++) {
            var g = this.kuangGroup.getChildAt(positions[j].X);
            var img = g.getChildAt(positions[j].Y);
            img.c1PlayAc();
        }
        // }
        egret.setTimeout(function () {
            _this.hideAllMask();
        }, this, 1500);
    };
    GamePentCompoment.prototype.hideAll = function () {
        for (var i = 0; i < this.kuangGroup.numChildren; i++) {
            var g = this.kuangGroup.getChildAt(i);
            var showA = this.showAllKuang.getChildAt(i);
            for (var j = 0; j < g.numChildren; j++) {
                var img = g.getChildAt(j);
                var kimg = showA.getChildAt(j);
                kimg.value = '';
                img.scaleX = 1;
                img.scaleY = 1;
                img.img.scaleX = 1;
                img.img.scaleY = 1;
                img.hideAnmation();
            }
        }
    };
    GamePentCompoment.prototype.showAllMask = function () {
        for (var i = 0; i < this.maskGroup.numChildren; i++) {
            this.maskGroup.getChildAt(i).visible = true;
        }
    };
    GamePentCompoment.prototype.showBeforeMask = function (idx) {
        for (var i = 0; i < this.maskGroup.numChildren; i++) {
            if (i < idx) {
                this.maskGroup.getChildAt(i).visible = true;
            }
        }
    };
    GamePentCompoment.prototype.hideAllMask = function () {
        for (var i = 0; i < this.maskGroup.numChildren; i++) {
            this.maskGroup.getChildAt(i).visible = false;
        }
    };
    GamePentCompoment.prototype.showfreeDiamo = function (bouns) {
        var _this = this;
        this.kuangGroup.visible = true;
        this.hideAllMask();
        var pos = bouns[this.bounsIdx].Positions;
        var gp = this.kuangGroup.getChildAt(pos[0].X);
        var reelResult = gp.getChildAt(pos[0].Y);
        var acGp = new eui.Group();
        if (!this.zuanRoll) {
            this.zuanRoll = game.MCUtils.getMc('freeWin');
        }
        acGp.addChild(this.zuanRoll);
        reelResult.addChild(acGp);
        this.zuanRoll.gotoAndPlay('freeWin', -1);
        acGp.x = -40;
        acGp.y = -40;
        var img = new eui.Image();
        img.source = bouns[this.bounsIdx].Bouns + 'times_png';
        img.visible = false;
        acGp.addChild(img);
        img.x = 30;
        img.y = 50;
        img.scaleX = 0.9;
        img.scaleY = 0.9;
        console.log(pos[0].X, pos[0].Y);
        this.zuanObj.push(acGp);
        console.log(this.zuanObj);
        // egret.Tween.get(this.zuanRoll).to({ scaleX: 1, scaleY: 1 }, 500)
        this.freePent1 = egret.setTimeout(function () {
            img.visible = true;
            var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
            var winarr = vo.GameData.resultData.Value.Main.WinResults;
            var t = (GameConfig.speedPlay) ? 800 : 2500 * (winarr.length);
            ui.showWin(vo.GameData.resultData.Value.Main.WinResults, function (t) {
                _this.freePent2 = egret.setTimeout(function () {
                    GameManager.getInstance().isStart = true;
                    GameManager.getInstance().doNext();
                }, _this, t);
            });
        }, this, 3500);
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
        return larr;
    };
    GamePentCompoment.prototype.clearAll = function () {
        this.kuangGroup.visible = false;
        this.hideAll();
        this.hideAllMask();
        if (vo.GameData.freeGameAC.length > 0) {
            for (var i = 0; i < vo.GameData.freeGameAC.length; i++) {
                egret.clearInterval(vo.GameData.freeGameAC[i].ac);
            }
        }
        if (this.zuanObj.length > 0) {
            for (var i = 0; i < this.zuanObj.length; i++) {
                this.zuanObj[i].parent.removeChild(this.zuanObj[i]);
            }
            this.zuanObj = [];
        }
    };
    return GamePentCompoment;
}(eui.Component));
__reflect(GamePentCompoment.prototype, "GamePentCompoment");
/**游戏结果显示组件 */
var ReelResult = (function (_super) {
    __extends(ReelResult, _super);
    function ReelResult() {
        var _this = _super.call(this) || this;
        _this.skinName = ReelResultSkin;
        return _this;
    }
    /**ReelResult的闪电 */
    ReelResult.prototype.c1PlayAc = function () {
        var _this = this;
        var idx = 0;
        var num = 0;
        var C1Mc = egret.setInterval(function () {
            if (idx > 6) {
                idx = 0;
                num++;
            }
            _this.Value = 'C1_' + idx + '_box_png';
            idx++;
        }, this, 100);
        vo.GameData.freeGameAC.push({ 'ac': C1Mc });
    };
    ReelResult.prototype.showAnmation = function (name, boo, money) {
        this.Value = name;
        // console.log(this.img.anchorOffsetX, this.img.width)
        if (boo) {
            this.bg.visible = true;
            this.lineScore.visible = true;
            this.lineScore.text = '￥' + GameManager.numberToCommonStr(money / GameConfig.bili);
        }
    };
    ReelResult.prototype.hideAnmation = function () {
        this.Value = '';
        this.bg.visible = false;
        this.lineScore.visible = false;
    };
    Object.defineProperty(ReelResult.prototype, "Value", {
        set: function (name) {
            this.img.source = name;
            this.img.anchorOffsetY = this.img.height / 2;
            this.img.y = this.img.height / 2 - 40;
        },
        enumerable: true,
        configurable: true
    });
    return ReelResult;
}(eui.Component));
__reflect(ReelResult.prototype, "ReelResult");
//# sourceMappingURL=GamePentCompoment.js.map