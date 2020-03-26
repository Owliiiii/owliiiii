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
    GameConfig.isPC = function () {
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * 分数和钱比例
     */
    GameConfig.bili = 10000;
    /**
     * 声音开or关
     */
    GameConfig.musicSected = true;
    /**
     * 自动调整投注
     */
    GameConfig.autoChangeBet = true;
    /**
     * 自动状态
     */
    GameConfig.autoPlay = false;
    /**
     * 快速玩法状态
     */
    GameConfig.speedPlay = false;
    /**
     * 左手模式状态
     */
    GameConfig.zuoshouPlay = false;
    /**
     * 空格开启
     */
    GameConfig.emptyPlay = false;
    /**
     * 免费次数
     */
    GameConfig.freeNum = 0;
    /**
     * 游戏数据返回了
     */
    GameConfig.isData = false;
    /**
     * 出现任何获胜即停止自动
     */
    GameConfig.someWin = false;
    /**
     * 如果赢取免费旋转停止自动
     */
    GameConfig.freeWin = true;
    /**
     * 单次获胜最大值
     */
    GameConfig.singleWinMaxCount = 400;
    /**
     * 单次获胜当前值
     */
    GameConfig.singleWinCurCount = 0;
    /**
     * 余额增加最大值
     */
    GameConfig.moneyAddMax = 4000;
    /**
     * 余额增加当前值
     */
    GameConfig.moneyAddCur = 0;
    /**
     * 余额减少
     */
    GameConfig.moneySubMax = 4000;
    /**
     * 余额减少当前值
     */
    GameConfig.moneySubCur = 0;
    /**
     * 余额记录点
     */
    GameConfig.key_money = 0;
    /**
     * 最大宽度
     */
    GameConfig.MAX_WIDTH = 1650;
    /**
     * 设计宽度
     */
    GameConfig.DES_WIDTH = 1200;
    /**
     * 设计高度
     */
    GameConfig.DES_HEIGHT = 912;
    /**
     * 方块宽度
     */
    GameConfig.ITEM_W = 64;
    /**
     * 方块高度
     */
    GameConfig.ITEM_H = 64;
    /**
     * 上方掉落相差间隔
     */
    GameConfig.DISTANCE = 5;
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
     * 会员账号
     */
    GameConfig.dangQianYe = 1;
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
        "Game_id": "T5080501001",
        "GameCode": ".",
        "Skin": "normal",
        "Link_auth": "a3adba9f9b56ccb2ea9faff460248c8d",
        "UrlBase": "ws://172.104.44.114:8086",
        'PartnerId': 't50',
        "PlayerId": "user-035",
        "Token": "DF87AE8CEC65ED753B2F9CCAC0AA3857",
        "IP": ":",
        "Language": "chs",
        "GameCanvas": "game_block",
        "vtoken_interval": 10,
        "Denom": "32767",
        "guest": "0",
        "crnex": '',
        "udf1": "",
        "udf2": ':',
        "udf3": '',
        "udf4": '',
        "udf5": '',
        "UrlRes": ":",
        "NjsHost": "172.104.44.114"
    };
    GameConfig.ceshilishi = { "History": [{ "Date": "5/13/2019 7:44:15 AM	", "GameName": "Mystery Joker", "ScreenData": {}, "IsSuccess": true, "Marquees": [], "Message": "", "kick_rightnow": false, "ActionType": "slot", "ActionParameter": { "Action": "Play", "Type": "slot", "Line": 1, "Bet": 5, "Denom": 100, "SessionData": { "Bet": 0.05 } }, "Value": { "RoundId": "3e9e115565229947859", "SubRoundId": 0, "SessionData": { "Bet": 0.05 }, "TotalBet": 500, "TotalWin": 14000, "TotalBetDollar": 0.05, "TotalWinDollar": 1.4, "Denom": 10, "ScreenData": [], "Main": { "MathVersion": "triple_monkey", "TotalBet": 500, "TotalWin": 14000, "TotalBetDollar": 0.05, "TotalWinDollar": 5, "Denom": 10, "ReelSymbols": [["M3", "M3", "M3"], ["M3", "M3", "M3"], ["M3", "M3", "M3"]], "WinResults": [{ "Type": "Line", "Symbol": "M3", "SymbolCount": 3, "Positions": [{ "X": 0, "Y": 1 }, { "X": 1, "Y": 1 }, { "X": 2, "Y": 1 }], "Data": { "Line": 1, "PayType": "RL" }, "Bet": 500, "Win": 14000, "Multipliers": [28, 1] }], "ReelResults": [{ "Idx": 0, "Pos": 14 }, { "Idx": 1, "Pos": 9 }, { "Idx": 2, "Pos": 10 }] }, "Status": { "CurrentAction": "Play", "CurrentActionType": "slot" }, "Actions": [], "Balance": 180583851.93 } }, { "Date": "5/13/2019 7:44:15 AM	", "GameName": "Mystery Joker", "ScreenData": {}, "IsSuccess": true, "Marquees": [], "Message": "", "kick_rightnow": false, "ActionType": "slot", "ActionParameter": { "Action": "Play", "Type": "slot", "Line": 1, "Bet": 5, "Denom": 100, "SessionData": { "Bet": 0.05 } }, "Value": { "RoundId": "3e9e115565229947859", "SubRoundId": 0, "SessionData": { "Bet": 0.05 }, "TotalBet": 500, "TotalWin": 14000, "TotalBetDollar": 0.05, "TotalWinDollar": 1.4, "Denom": 10, "ScreenData": [], "Main": { "MathVersion": "triple_monkey", "TotalBet": 500, "TotalWin": 14000, "TotalBetDollar": 0.05, "TotalWinDollar": 5, "Denom": 10, "ReelSymbols": [["M2", "M2", "M2"], ["M2", "M2", "M2"], ["M2", "M2", "M2"]], "WinResults": [{ "Type": "Line", "Symbol": "M3", "SymbolCount": 3, "Positions": [{ "X": 0, "Y": 1 }, { "X": 1, "Y": 1 }, { "X": 2, "Y": 1 }], "Data": { "Line": 1, "PayType": "RL" }, "Bet": 500, "Win": 14000, "Multipliers": [28, 1] }], "ReelResults": [{ "Idx": 0, "Pos": 14 }, { "Idx": 1, "Pos": 9 }, { "Idx": 2, "Pos": 10 }] }, "Status": { "CurrentAction": "Play", "CurrentActionType": "slot" }, "Actions": [], "Balance": 180583851.93 } }] };
    return GameConfig;
}());
__reflect(GameConfig.prototype, "GameConfig");
//# sourceMappingURL=GameConfig.js.map