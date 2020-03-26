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
var ShowItem = (function (_super) {
    __extends(ShowItem, _super);
    function ShowItem() {
        var _this = _super.call(this) || this;
        _this.index = 0;
        _this.tx = 0;
        _this.ty = 0;
        _this.skinName = ShowItemSkin;
        return _this;
    }
    ShowItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.anchorOffsetX = 45;
        this.anchorOffsetY = 45;
        this.tGroup.scaleX = 0.84;
        this.tGroup.scaleY = 0.84;
        this.nameLabel.alpha = 0;
        this.tGroup.addEventListener(mouse.MouseEvent.MOUSE_OVER, this.onRollOver, this);
        this.tGroup.addEventListener(mouse.MouseEvent.MOUSE_OUT, this.onRollOut, this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
        mouse.setButtonMode(this, true);
    };
    ShowItem.prototype.onBegin = function (e) {
        this.tx = e.stageX;
        this.ty = e.stageY;
    };
    ShowItem.prototype.onEnd = function (e) {
        if (Math.abs(e.stageX - this.tx) < 3 && Math.abs(e.stageY - this.ty) < 3) {
            window.open('http://www.baidu.com', '_blank', 'height=833, width=1065, top=0, left=0, toolbar=no, menubar=no, scrollbars=no,resizable=no,location=no, status=no');
        }
    };
    ShowItem.prototype.setData = function (data) {
        this.data = data;
        this.nameLabel.text = data.name;
    };
    ShowItem.prototype.goIndex = function (startpos) {
        if (startpos === void 0) { startpos = 0; }
        this.startpos = startpos;
        egret.Tween.removeTweens(this);
        var posx = this.startpos + this.index * (TopList.WIDTH + TopList.DISTANCE) + TopList.WIDTH / 2;
        this.x = posx;
    };
    ShowItem.prototype.goIndexAimation = function (startpos) {
        if (startpos === void 0) { startpos = 0; }
        this.startpos = startpos;
        egret.Tween.removeTweens(this);
        var posx = this.startpos + this.index * (TopList.WIDTH + TopList.DISTANCE) + TopList.WIDTH / 2;
        egret.Tween.get(this).to({ x: posx }, 300);
    };
    ShowItem.prototype.goIndexStep = function (step) {
        this.startpos += step;
        egret.Tween.removeTweens(this);
        var posx = this.startpos + this.index * (TopList.WIDTH + TopList.DISTANCE) + TopList.WIDTH / 2;
        this.x = posx;
    };
    /**
     * 左右移动 -1代表左移  1代表右
     */
    ShowItem.prototype.goAnimation = function (dir) {
        if (dir === void 0) { dir = -1; }
        egret.Tween.removeTweens(this);
        var posx = this.startpos + this.index * (TopList.WIDTH + TopList.DISTANCE) + TopList.WIDTH / 2;
        var tposx = posx + dir * 2 * TopList.DISTANCE;
        egret.Tween.get(this).to({ x: tposx }, 200);
    };
    /**
     * 回归
     */
    ShowItem.prototype.goBack = function () {
        egret.Tween.removeTweens(this);
        var posx = this.startpos + this.index * (TopList.WIDTH + TopList.DISTANCE) + TopList.WIDTH / 2;
        egret.Tween.get(this).to({ x: posx }, 300);
    };
    ShowItem.prototype.onRollOver = function () {
        egret.Tween.removeTweens(this.tGroup);
        egret.Tween.removeTweens(this.nameLabel);
        egret.Tween.get(this.tGroup).to({ scaleX: 1, scaleY: 1 }, 300);
        egret.Tween.get(this.nameLabel).to({ alpha: 1 }, 300);
        this.dispatchEventWith('rollchangeover', false, this.index);
    };
    ShowItem.prototype.onRollOut = function () {
        egret.Tween.removeTweens(this.tGroup);
        egret.Tween.removeTweens(this.nameLabel);
        egret.Tween.get(this.tGroup).to({ scaleX: 0.84, scaleY: 0.84 }, 300);
        egret.Tween.get(this.nameLabel).to({ alpha: 0 }, 300);
        this.dispatchEventWith('rollchangeout', false, this.index);
    };
    return ShowItem;
}(eui.Component));
__reflect(ShowItem.prototype, "ShowItem");
//# sourceMappingURL=ShowItem.js.map