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
var Item = (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super.call(this) || this;
        _this._isVir = false;
        _this.ispeed = 0;
        _this.speedy = 0;
        /**
         * 是否弹跳过
         */
        _this.isTiao = false;
        /**
         * 自由落体时间
         */
        _this.time = 1;
        /**
         * 是否在运动中
         */
        _this.isAction = false;
        /**
         * 是否死亡
         */
        _this.isDie = false;
        /**
         * 当前阶段是否被检查过
         */
        _this.isCheck = false;
        /**
         * 是否被选入
         */
        _this.isSelected = false;
        _this.skinName = ItemSkin;
        return _this;
    }
    Item.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.width = GameConfig.ITEM_W;
        this.height = GameConfig.ITEM_H;
        this.anchorOffsetX = GameConfig.ITEM_W / 2;
        this.anchorOffsetY = GameConfig.ITEM_H / 2;
        //this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this);
        this.init();
    };
    Item.prototype.init = function () {
        var _this = this;
        this.itemMC = game.MCUtils.getMc('itemmc');
        this.mcGroup.addChild(this.itemMC);
        this.itemMC.x = this.width / 2;
        this.itemMC.y = this.height / 2;
        this.itemMC.addEventListener(egret.MotionEvent.COMPLETE, function () {
            _this.itemMC.gotoAndStop(_this.gametype);
        }, this);
    };
    Item.prototype.onFrame = function () {
        // if (this.isAction) {
        // 	this.x += 0;
        // 	this.y += this.speedy;
        // 	this.time++;
        // 	this.speedy += Item.G * this.time;
        // 	if (this.speedy >= 0) {
        // 		this.actionState = 0;
        // 	}
        // 	else {
        // 		this.actionState = 1;
        // 	}
        // 	if (this.y >= this.tcol * GameConfig.ITEM_H + GameConfig.ITEM_H / 2) {
        // 		if (!this.isTiao) {
        // 			this.isTiao = true;
        // 			// this.speedy = -this.speedy * 0.08;
        // 			this.speedy = 0;
        // 			this.time = 0;
        // 			this.actionState = 1;
        // 			if (egret.getTimer() - Item.t > 100) {
        // 				SoundManager.getInstance().playEffect(SoundConst.DOWN_ARR[0]);
        // 				Item.t = egret.getTimer();
        // 			}
        // 		}
        // 		else {
        // 			if (this.actionState == 0) {
        // 				this.y = this.tcol * GameConfig.ITEM_H + GameConfig.ITEM_H / 2;
        // 				this.isAction = false;
        // 			}
        // 		}
        // 	}
        // }
    };
    Item.prototype.goActionforColAndRow = function (_col, _row) {
        //this.isAction = true;
        this.actionState = 0;
        this.speedy = 20;
        this.isTiao = true;
        this.isCheck = false;
        //this.isVir = _row == this.row ? false : true;
        this.tcol = _col;
        this.trow = _row;
        this.col = this.tcol;
        this.row = this.trow;
        var ty = this.tcol * GameConfig.ITEM_H + GameConfig.ITEM_H / 2;
        //egret.Tween.removeTweens(this);
        //egret.Tween.get(this).to({ y: ty }, 600, egret.Ease.cubicOut).call(() => {
        //}, this).call(() => {
        this.isAction = false;
        //}, this);
    };
    Item.prototype.goActionforColAndRowforRandomtime = function (_col, _row) {
        var _this = this;
        var d = Math.abs(_col - this.tcol);
        this.isAction = true;
        this.actionState = 0;
        this.speedy = 20;
        this.isTiao = true;
        this.isCheck = false;
        this.tcol = _col;
        this.trow = _row;
        this.col = this.tcol;
        this.row = this.trow;
        var ty = this.tcol * GameConfig.ITEM_H + GameConfig.ITEM_H / 2;
        egret.Tween.removeTweens(this);
        var time = 60 * d - 60 * Math.random();
        egret.Tween.get(this).to({ y: ty }, time, egret.Ease.quartIn).call(function () {
        }, this).call(function () {
            _this.isAction = false;
        }, this);
    };
    Item.prototype.goActionforColAndRowforRandomtime2 = function (_col, _row) {
        var _this = this;
        this.isAction = true;
        this.actionState = 0;
        this.speedy = 20;
        this.isTiao = true;
        this.isCheck = false;
        //let time: number =100+Math.abs(_col-this.tcol)*100 * Math.random();
        this.tcol = _col;
        this.trow = _row;
        this.col = this.tcol;
        this.row = this.trow;
        var ty = this.tcol * GameConfig.ITEM_H + GameConfig.ITEM_H / 2;
        egret.Tween.removeTweens(this);
        egret.Tween.get(this).to({ y: ty }, 200, egret.Ease.quartIn).call(function () {
        }, this).call(function () {
            _this.isAction = false;
        }, this);
    };
    Item.prototype.setPosForColAndRow = function (_col, _row) {
        this.col = _col;
        this.row = _row;
        this.tcol = this.col;
        this.trow = this.trow;
        this.x = this.row * GameConfig.ITEM_W + GameConfig.ITEM_W / 2;
        this.y = this.col * GameConfig.ITEM_H + GameConfig.ITEM_H / 2;
    };
    Item.prototype.upXAndY = function (x, y) {
        this.x -= x;
        this.y -= y;
    };
    Item.prototype.reset = function () {
        this.isDie = false;
        this.speedy = 0;
        this.time = 0;
        this.isTiao = false;
        this.isCheck = false;
        this.isSelected = false;
    };
    /**
     * 播放单独动画
     */
    Item.prototype.playSingleAnimation = function () {
        this.mcGroup.visible = true;
        this.itemMC.gotoAndPlay(this.gametype, 1);
        SoundManager.getInstance().playEffect(this.gametype + '_mp3');
    };
    Object.defineProperty(Item.prototype, "gameType", {
        get: function () {
            return this.gametype;
        },
        set: function (v) {
            this.gametype = v;
            if (this.itemMC) {
                this.itemMC.gotoAndStop(this.gametype);
            }
        },
        enumerable: true,
        configurable: true
    });
    Item.G = 0.01;
    Item.t = 0;
    return Item;
}(eui.Component));
__reflect(Item.prototype, "Item");
//# sourceMappingURL=Item.js.map