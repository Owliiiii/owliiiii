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
/**
 * 游戏数据模块
 */
var vo;
(function (vo) {
    /**
     * 游戏数据总集合
     */
    var GameData = (function () {
        function GameData() {
        }
        /**
         * 玩家余额
         */
        GameData.balance = 549.88;
        /**
         * 当前自动次数
         */
        GameData.autoPlayCount = 0;
        /**免费游戏旋转的次数 */
        GameData.freePlayCount = 0;
        /**
         * 赔付表
         */
        GameData.payData = [];
        /**
         * 下注数组
         */
        GameData.betScoreArr = [0.01, 0.05, 0.10, 0.25, 0.40, 0.50, 0.80, 1.00, 1.25, 2.50, 5.00, 8.00, 10.00, 20.00];
        /**
         * 投注索引
         */
        GameData.betIndex = 0;
        /**
         * 线数
         */
        GameData.line = 1;
        /**
         * 线配置
         */
        GameData.lineObj = {
            1: [1, 1, 1, 1, 1],
            2: [0, 0, 0, 0, 0],
            3: [2, 2, 2, 2, 2],
            4: [0, 1, 2, 1, 0],
            5: [2, 1, 0, 1, 2],
            6: [0, 0, 1, 0, 0],
            7: [2, 2, 1, 2, 2],
            8: [1, 0, 0, 0, 1],
            9: [1, 2, 2, 2, 1]
        };
        /**玩家进入免费游戏时候获取到的界面布局（） */
        GameData.freeSymbols = [];
        /**玩家进入到免费游戏时候，中的奖金（当免费游戏中再次中免费游戏后，结算界面的游戏奖金显示） */
        GameData.freeGold = 0;
        /**
         * 滚动列表
         */
        GameData.reelArr = [
            ['M4', 'WW', 'M3', 'M5', 'M0', 'M3', 'M2', 'M3', 'M4', 'M1', 'M1', 'M2', 'WW', 'M1'],
            ['M4', 'M1', 'M3', 'M1', 'M1', 'M2', 'M6', 'M4', 'M1', 'M2', 'M3', 'M4', 'M4', 'M2'],
            ['M4', 'WW', 'M2', 'M3', 'M1', 'M0', 'M3', 'M2', 'WW', 'WW', 'M3', 'M1', 'WW', 'M3'],
        ];
        /**免费游戏标志出现，在旋转结束时候停止 */
        GameData.rollFreeTitle = [];
        /**免费游戏进入的时候出现的闪烁集合 */
        GameData.freeGameAC = [];
        return GameData;
    }());
    vo.GameData = GameData;
    __reflect(GameData.prototype, "vo.GameData");
    /**
     * 基本信息结构
     */
    var BaseInfo = (function () {
        function BaseInfo() {
        }
        BaseInfo.prototype.readData = function (obj) {
        };
        return BaseInfo;
    }());
    vo.BaseInfo = BaseInfo;
    __reflect(BaseInfo.prototype, "vo.BaseInfo");
    /**
     * 老虎机数据
     */
    var SlotInfo = (function (_super) {
        __extends(SlotInfo, _super);
        function SlotInfo() {
            var _this = _super.call(this) || this;
            /**
             * 滚轮的最终结果
             */
            _this.resultArr = [];
            _this.indexArr = [];
            /**
             * 总获胜
             */
            _this.allwin = 0;
            return _this;
        }
        SlotInfo.prototype.readData = function (obj) {
        };
        /**
         * 读取开始游戏返回数据
         */
        SlotInfo.prototype.readPlayAction = function (data) {
        };
        return SlotInfo;
    }(BaseInfo));
    vo.SlotInfo = SlotInfo;
    __reflect(SlotInfo.prototype, "vo.SlotInfo");
})(vo || (vo = {}));
//# sourceMappingURL=GameData.js.map