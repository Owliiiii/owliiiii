var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SetConst = (function () {
    function SetConst() {
    }
    SetConst.TOP_SHOW = false;
    SetConst.RIGHT_SHOW = false;
    SetConst.BETSET_SHOW = false;
    SetConst.AUTO_SHOW = false;
    SetConst.LONG_TOUCH = false;
    SetConst.REWARD_SHOW = false;
    SetConst.REWARD_SMALLSHOW = false;
    /**
     * 是否手动中断自动完成
     */
    SetConst.handStop = false;
    /**
     * 是否能中断游戏
     */
    SetConst.isCanStopGame = false;
    /**
     * 快速是否提示过
     */
    SetConst.QUIKTIP_SHOW = false;
    /**
     * 0代表右手 1代表左手
     */
    SetConst.MODLE = 0;
    /**
     * 快速模式
     */
    SetConst.SPEED_PLAY = false;
    /**
     * 自动状态
     */
    SetConst.AUTO = false;
    /**
     * 自动次数
     */
    SetConst.AUTO_COUNT = 0;
    /**
     * 自动设置数组
     */
    SetConst.AUTO_COUNT_ARR = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99, 9999]; //9999表示直到环节
    return SetConst;
}());
__reflect(SetConst.prototype, "SetConst");
//# sourceMappingURL=SetConst.js.map