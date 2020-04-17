var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameConfig = (function () {
    function GameConfig() {
    }
    /**
     * 加载
     */
    GameConfig.loadLocalData = function () {
    };
    Object.defineProperty(GameConfig, "WIDTH", {
        /**
         * 设备区域宽度
         */
        get: function () {
            return egret.MainContext.instance.stage.stageWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameConfig, "HEIGHT", {
        /**
         * 设备区域高度
         */
        get: function () {
            return egret.MainContext.instance.stage.stageHeight;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 分数和钱比例
     */
    GameConfig.bili = 10000;
    /**
     * 自动调整投注
     */
    GameConfig.autoChangeBet = true;
    /**
     * 快速玩法状态
     */
    GameConfig.speedPlay = false;
    /**
     * 中了免费抽奖
     */
    GameConfig.isFree = false;
    /**
     * 最后的弹窗
     */
    GameConfig.overTips = false;
    /**
     * 免费游戏
     */
    GameConfig.freeGame = false;
    /**
     * 免费游戏第一阶段
     */
    GameConfig.isBonusBtn = false;
    //标记有2个贝壳
    GameConfig.isTwo = false;
    GameConfig.isTest = false;
    /**
     * 最大宽度
     */
    GameConfig.MAX_WIDTH = 1920;
    /**
     * 设计宽度
     */
    GameConfig.DES_WIDTH = 1266;
    /**
     * 设计高度
     */
    GameConfig.DES_HEIGHT = 990;
    /**
     * 方块宽度
     */
    GameConfig.ITEM_W = 121;
    /**
     * 方块高度
     */
    GameConfig.ITEM_H = 121;
    /**
     * 上方掉落相差间隔
     */
    GameConfig.DISTANCE = 5;
    /**
     * col行
     */
    GameConfig.COL = 5;
    /**
     * row列
     */
    GameConfig.ROW = 5;
    /**
     * 当前语言模式
     */
    GameConfig.LANG = 'cn';
    /**
     * 会员账号
     */
    GameConfig.USER_ID = '18996802289';
    /**
     * 昵称
     */
    GameConfig.NICK_NAME = '大西瓜';
    /**
     * 局号
     */
    GameConfig.ACOUNT = 5001;
    /**
     * 比例库
     */
    GameConfig.biliArr = [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    /**
     * 自动次数配置
     */
    GameConfig.autoPlayArr = [10, 20, 50, 75, 100];
    /**
     * 语言库
     */
    GameConfig.langObj = {
        1: {
            cn: '不知道干什么',
            tw: '不知道幹什麼',
            en: 'nothing to do'
        },
        2: {
            cn: '背景音乐',
            tw: '背景音樂',
            en: 'bg music'
        },
        3: {
            cn: '背景音效',
            tw: '背景音效',
            en: 'effect music'
        },
        4: {
            cn: '历史下注记录',
            tw: '歷史下注記錄',
            en: 'history'
        },
        5: {
            cn: '规则',
            tw: '規則',
            en: 'rule'
        },
        6: {
            cn: '离开',
            tw: '離開',
            en: 'leave'
        },
        7: {
            cn: '网络断线，请重新开始游戏或检查连线状态!',
            tw: '網絡斷線，請重新開始遊戲或檢查連線狀態！',
            en: 'Network disconnection, please restart the game or check the connection status!'
        },
        8: {
            cn: '继续加油',
            tw: '繼續加油',
            en: 'go on'
        },
        9: {
            cn: '不要气馁，好运气快来了',
            tw: '不要氣餒，好運氣快來了',
            en: "Don't be discouraged. Good luck is coming"
        },
        10: {
            cn: '好样的',
            tw: '好樣的',
            en: 'Good job'
        }
    };
    /**
     * 当前网页参数
     */
    GameConfig.CasinoGame = {
        "Game_id": "T5080101001",
        "GameCode": ".",
        "Skin": "normal",
        "Link_auth": "cdd523674989adc72c92eb0cd2b2fb28",
        "UrlBase": "ws://172.104.44.114:8086",
        'PartnerId': 'pts',
        "PlayerId": "user_522",
        "Token": "000486584F58066F6100FD17D0F04163",
        "IP": ":",
        "Language": "chs",
        "GameCanvas": "game_block",
        "vtoken_interval": 10,
        "Denom": "32767",
        "guest": "0",
        "crnex": '',
        "udf1": "BigWin",
        "udf2": ':',
        "udf3": '',
        "udf4": '',
        "udf5": '',
        "UrlRes": ":",
        "NjsHost": "172.104.44.114"
    };
    /**
 * 调试网页参数
 */
    GameConfig.CasinoGame0 = {
        "Game_id": "80101001001",
        "GameCode": ":",
        "Skin": "normal",
        "Link_auth": "7b94be8dc53610f046053d2f3791ee5c",
        "UrlBase": "ws:\/\/172.104.33.60:8083",
        'PartnerId': 'pts',
        "PlayerId": "user-096",
        "Token": "84586C2F77BF2F4AE81E84C06F92C762",
        "IP": ":",
        "Language": "chs",
        "GameCanvas": "game_block",
        "vtoken_interval": 10,
        "Denom": "32767",
        "crnex": '',
        "guest": "0",
        "udf1": "None",
        "udf2": '1552980588',
        "udf3": '',
        "udf4": '',
        "udf5": '',
        "UrlRes": ":",
        "NjsHost": "172.104.33.60"
    };
    return GameConfig;
}());
__reflect(GameConfig.prototype, "GameConfig");
//# sourceMappingURL=GameConfig.js.map