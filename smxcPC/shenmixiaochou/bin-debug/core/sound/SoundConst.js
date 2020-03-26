var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundConst = (function () {
    function SoundConst() {
    }
    /**
     * 按钮
     */
    SoundConst.BUTTON = 'button_mp3';
    /**
     * 开始音乐
     */
    SoundConst.START = 'start_mp3';
    /**
     * 快速start
     */
    SoundConst.SPEED_START = 'start_mp3';
    /**
     * 猴子
     */
    SoundConst.HOUZI = 'houzi_mp3';
    /**
     * 滚轮开始声音
     */
    SoundConst.REEL_START = 'reelstart_mp3';
    /**
     * 滚轮结束声音
     */
    SoundConst.REEL_END = 'reelend_mp3';
    /**
     * 免费旋转完获得总奖励声音
     */
    SoundConst.ALLWIN = 'allwin_mp3';
    /**
     * 获得神秘奖励
     */
    SoundConst.BIG_REWARD = 'bigreward_mp3';
    /**
     * 揭晓神秘奖励
     */
    SoundConst.BIG_REWARDSHOWS = 'bigrewardshows_mp3';
    /**
     * 获得免费旋转
     */
    SoundConst.FREE_SHOW = 'freeslot_show_mp3';
    return SoundConst;
}());
__reflect(SoundConst.prototype, "SoundConst");
//# sourceMappingURL=SoundConst.js.map