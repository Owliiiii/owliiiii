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
    SoundConst.REELROLL = 'reelRoll_mp3';
    // public static FIVE_SOUND:string='bigreward2_mp3';
    // public static BIG_REWARD:string='bigreward_mp3';
    //BGM
    SoundConst.BGM = 'bgm_mp3';
    SoundConst.SMUSIC = "smusic_mp3";
    SoundConst.WIN_TICKUP = 'win_tickup_mp3';
    //红利后音效
    SoundConst.ENTRANCE = 'entrance_mp3';
    SoundConst.INTOBONUS = 'intoBonus_mp3';
    SoundConst.BEATSOUNDS = 'beat_mp3';
    SoundConst.JUMPBOUNS = 'jumpBonus_mp3';
    SoundConst.BUTTON = 'button_mp3';
    SoundConst.CHOOSETOOLS = 'chooseTools_mp3';
    SoundConst.INTODONG = 'intoDong_mp3';
    SoundConst.ZIDONGSTOP = 'zidongStop_mp3';
    return SoundConst;
}());
__reflect(SoundConst.prototype, "SoundConst");
//# sourceMappingURL=SoundConst.js.map