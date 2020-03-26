var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SoundConst = (function () {
    function SoundConst() {
    }
    SoundConst.START = 'start_mp3';
    SoundConst.STOP = 'stop_mp3';
    SoundConst.ADD = 'add_mp3';
    SoundConst.SUB = 'sub_mp3';
    SoundConst.SPEED_ON = 'speedon_mp3';
    SoundConst.SPEED_OFF = 'speedoff_mp3';
    SoundConst.SINGLEREWARD = 'singlereward_mp3';
    SoundConst.REWARD = 'reward_mp3';
    SoundConst.REELEND = 'reelend_mp3';
    SoundConst.AUTOSTART1 = 'autostart1_mp3';
    SoundConst.AUTOSTOP1 = 'autostop1_mp3';
    SoundConst.AUTOSTART = 'autostart_mp3';
    SoundConst.AUTOSTOP = 'autostop_mp3';
    SoundConst.FIVE_SOUND = 'bigreward2_mp3';
    SoundConst.BIG_REWARD = 'bigreward_mp3';
    return SoundConst;
}());
__reflect(SoundConst.prototype, "SoundConst");
//# sourceMappingURL=SoundConst.js.map