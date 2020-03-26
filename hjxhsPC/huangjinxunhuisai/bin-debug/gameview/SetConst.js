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
    /**
     * 是否手动中断自动完成
     */
    SetConst.handStop = false;
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
    SetConst.AUTO_COUNT_ARR = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99, 100];
    /**横板的时候，加注面板时候是收起状态,true为收起 */
    SetConst.BETSATE = false;
    /**是否中了额外游戏的奖励 */
    SetConst.isWin = false;
    /**游戏点击开始之后，到游戏结束前的开关，true为重在 游戏中，只有为false时候才可以进行操作 */
    SetConst.isGameStart = false;
    /**当游戏点及开始之后，收到服务器数据返回来消息的之时，设置为true，
 * 当该变量为true的时候才可以进行点击停止的操作，当点击立即停止之后，马上设置为false，
 * 当该变量为true的时候才真正的进入游戏倒计时，之前的都不进入统计，当游戏停止的时候，设置为false */
    SetConst.isCanStop = false;
    return SetConst;
}());
__reflect(SetConst.prototype, "SetConst");
//# sourceMappingURL=SetConst.js.map