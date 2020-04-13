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
        /**
         * 当前获得的最大免费次数
         */
        GameData.allFreeCount = 0;
        /**
         * 赔付表
         */
        GameData.payData = {
            "M1": {
                "3": 50,
            },
            "M2": {
                "3": 40,
            },
            "M3": {
                "3": 30,
            },
            "M4": {
                "3": 10,
            },
            "M5": {
                "3": 10,
            }
        };
        /**
        * 下注数组
        */
        GameData.betScoreArr = [0.01, 0.02, 0.05, 0.10, 0.16, 0.25, 0.40];
        //public static betScoreArr:Array<any>=['1.00','2.00','3.00','4.00','5.00','10.00','15.00','20.00','25.00','30.00','35.00','40.00','45.00','50.00','75.00','100.00','150.00','200.00','250.00','300.00','350.00','400.00','450.00','500.00','600.00','700.00','800.00','900.00','1000.00'];
        /**
         * 免费次数
         */
        /**
         * 投注索引
         */
        GameData.betIndex = 0;
        GameData.Actions = [
            {
                "RoundId": egret.getTimer(),
                "Bet": 1,
                "Denom": "parameter.Denom",
                "type": "FreeSlot",
                "count": 10,
                "remaining": 10,
            }
        ];
        /**
         * 次数
         */
        GameData.TotalActionCount = 0;
        /**
         * 奖金
         */
        GameData.FreeMoney = 0;
        /**
         * 固定结果
         */
        GameData.ReelSymbols = [
            // 	[
            // 		["C1", "JJ", "M2"],		//免费Bonus testNum == 0
            // 		["M3", "QQ", "M1"],
            // 		["C1", "M5", "M1"],
            // 		["C1", "WW", "M4"],
            // 		["M1", "QQ", "M5"]
            // ],
            // [
            // 		["AA", "JJ", "M4"],		//免费2个C1 Bonus testNum == 1
            // 		["M3", "QQ", "C1"],
            // 		["M1", "M5", "C1"],
            // 		["QQ", "WW", "M4"],
            // 		["M1", "QQ", "M5"]
            // ],
            [
                ["AA", "JJ", "M4"],
                ["M3", "QQ", "C1"],
                ["M1", "M5", "C1"],
                ["QQ", "WW", "M4"],
                ["C1", "QQ", "M5"]
            ],
            [
                ["AA", "M4", "M2"],
                ["AA", "M3", "M5"],
                ["AA", "M5", "WW"],
                ['AA', 'M5', 'WW'],
                ['M5', 'M1', 'TN']
            ], [
                ["M4", "M3", "QQ"],
                ["M1", "M5", "KK"],
                ["AA", "M2", "JJ"],
                ["M4", "M4", "M3"],
                ["M2", "M1", "M5"],
            ], [
                ["M2", "M5", "M4"],
                ["M1", "M4", "M5"],
                ["JJ", "AA", "M5"],
                ["QQ", "M4", "M3"],
                ["M5", "M2", "M1"],
            ], [
                ["M4", "M3", "QQ"],
                ["M1", "M5", "KK"],
                ["AA", "M2", "JJ"],
                ["M4", "M4", "M3"],
                ["M2", "M1", "M5"],
            ], [
                ["M4", "M5", "JJ"],
                ["AA", "M4", "JJ"],
                ["JJ", "M2", "JJ"],
                ["JJ", "M4", "M1"],
                ["AA", "NI", "M1"],
            ]
        ];
        GameData.ReelSymbols1 = [
            // 	[
            // 		["C1", "JJ", "M2"],		//免费Bonus testNum == 0
            // 		["M3", "QQ", "M1"],
            // 		["C1", "M5", "M1"],
            // 		["C1", "WW", "M4"],
            // 		["M1", "QQ", "M5"]
            // ],
            // [
            // 		["AA", "JJ", "M4"],		//免费2个C1 Bonus testNum == 1
            // 		["M3", "QQ", "C1"],
            // 		["M1", "M5", "C1"],
            // 		["QQ", "WW", "M4"],
            // 		["M1", "QQ", "M5"]
            // ],
            // [
            // 	["AA", "JJ", "M4"],		//免费Bonus testNum == 2
            // 	["M3", "QQ", "C1"],
            // 	["M1", "M5", "C1"],
            // 	["QQ", "WW", "M4"],
            // 	["C1", "QQ", "M5"]
            // ],
            [
                ["AA", "M4", "M2"],
                ["AA", "M3", "M5"],
                ["AA", "M5", "WW"],
                ['AA', 'M5', 'WW'],
                ['M5', 'M1', 'TN']
            ], [
                ["M4", "M3", "QQ"],
                ["M1", "M5", "KK"],
                ["AA", "M2", "JJ"],
                ["M4", "M4", "M3"],
                ["M2", "M1", "M5"],
            ], [
                ["M2", "M5", "M4"],
                ["M1", "M4", "M5"],
                ["JJ", "AA", "M5"],
                ["QQ", "M4", "M3"],
                ["M5", "M2", "M1"],
            ], [
                ["M4", "M3", "QQ"],
                ["M1", "M5", "KK"],
                ["AA", "M2", "JJ"],
                ["M4", "M4", "M3"],
                ["M2", "M1", "M5"],
            ], [
                ["M4", "M5", "JJ"],
                ["AA", "M4", "JJ"],
                ["JJ", "M2", "JJ"],
                ["JJ", "M4", "M1"],
                ["AA", "NI", "M1"],
            ]
        ];
        /**
         * 固定结果数据
         */
        GameData.WinResults = [
            // [
            // 	{		//免费
            // 		"Bet":100,
            // 		"Data": {
            // 			"bonus":3,
            // 			"PayType": "RL",
            // 		},
            // 			"Multipliers": [1],
            // 			"Positions": [
            // 				{
            // 					"X": 0,
            // 					"Y": 0,
            // 				},
            // 				{
            // 					"X": 2,
            // 					"Y": 0,
            // 				},{
            // 					"X": 3,
            // 					"Y": 0,
            // 				}],
            // 			'Symbol': 'C1',
            // 			"SymbolCount": 3,
            // 			'Type': 'Bonus',
            // 			"Win": 0,
            // 		},
            // ],
            // [
            // 	{		//免费
            // 		"Bet":100,
            // 		"Data": {
            // 			"bonus":2,
            // 			"PayType": "RL",
            // 		},
            // 			"Multipliers": [1],
            // 			"Positions": [
            // 				{
            // 					"X": 1,
            // 					"Y": 2,
            // 				},{
            // 					"X": 2,
            // 					"Y": 2,
            // 				}],
            // 			'Symbol': 'C1',
            // 			"SymbolCount": 2,
            // 			'Type': 'Line',
            // 			"Win": 0,
            // 		},
            // ],
            [
                {
                    "Bet": 100,
                    "Data": {
                        "bonus": 3,
                        "PayType": "RL",
                    },
                    "Multipliers": [1],
                    "Positions": [
                        {
                            "X": 1,
                            "Y": 2,
                        }, {
                            "X": 2,
                            "Y": 2,
                        }, {
                            "X": 4,
                            "Y": 0,
                        }
                    ],
                    'Symbol': 'C1',
                    "SymbolCount": 3,
                    'Type': 'Bonus',
                    "Win": 0,
                },
            ],
            [
                {
                    "Bet": 100,
                    "Data": {
                        "Line": 3,
                        "PayType": "RL",
                    },
                    "Multipliers": [25],
                    "Positions": [{
                            "X": 2,
                            "Y": 2,
                        }, {
                            "X": 3,
                            "Y": 2,
                        }, {
                            "X": 4,
                            "Y": 2,
                        }],
                    'Symbol': 'TN',
                    "SymbolCount": 3,
                    'Type': 'Line',
                    "Win": 2600,
                },
                {
                    "Bet": 100,
                    "Data": {
                        "Line": 4,
                        "PayType": "RL",
                    },
                    "Multipliers": [2],
                    "Positions": [{
                            "X": 4,
                            "Y": 0,
                        }, {
                            "X": 3,
                            "Y": 1,
                        }],
                    'Symbol': 'M5',
                    "SymbolCount": 2,
                    'Type': 'Line',
                    "Win": 200,
                }
            ], [], [{
                    "Bet": 100,
                    "Data": {
                        "Line": 5,
                        "PayType": "LR",
                    },
                    "Multipliers": [2],
                    "Positions": [{
                            "X": 0,
                            "Y": 2,
                        }, {
                            "X": 1,
                            "Y": 1,
                        }],
                    'Symbol': 'M4',
                    "SymbolCount": 2,
                    'Type': 'Line',
                    "Win": 200,
                }], [], [
                {
                    "Bet": 100,
                    "Data": {
                        "Line": 3,
                        "PayType": "LR",
                    },
                    "Multipliers": [5],
                    "Positions": [{
                            "X": 0,
                            "Y": 2,
                        }, {
                            "X": 1,
                            "Y": 2,
                        }, {
                            "X": 2,
                            "Y": 2,
                        }],
                    'Symbol': 'JJ',
                    "SymbolCount": 3,
                    'Type': 'Line',
                    "Win": 500,
                }, {
                    "Bet": 100,
                    "Data": {
                        "Line": 3,
                        "PayType": "LR",
                    },
                    "Multipliers": [3],
                    "Positions": [{
                            "X": 3,
                            "Y": 2,
                        }, {
                            "X": 4,
                            "Y": 2,
                        }],
                    'Symbol': 'M3',
                    "SymbolCount": 2,
                    'Type': 'Line',
                    "Win": 300,
                }, {
                    "Bet": 100,
                    "Data": {
                        "Line": 4,
                        "PayType": "LR",
                    },
                    "Multipliers": [2],
                    "Positions": [{
                            "X": 0,
                            "Y": 0,
                        }, {
                            "X": 1,
                            "Y": 1,
                        }],
                    'Symbol': 'M4',
                    "SymbolCount": 2,
                    'Type': 'Line',
                    "Win": 200,
                }
            ]
        ];
        GameData.WinResults1 = [
            // [
            // 	{		//免费
            // 		"Bet":100,
            // 		"Data": {
            // 			"bonus":3,
            // 			"PayType": "RL",
            // 		},
            // 			"Multipliers": [1],
            // 			"Positions": [
            // 				{
            // 					"X": 0,
            // 					"Y": 0,
            // 				},
            // 				{
            // 					"X": 2,
            // 					"Y": 0,
            // 				},{
            // 					"X": 3,
            // 					"Y": 0,
            // 				}],
            // 			'Symbol': 'C1',
            // 			"SymbolCount": 3,
            // 			'Type': 'Bonus',
            // 			"Win": 0,
            // 		},
            // ],
            // [
            // 	{		//免费
            // 		"Bet":100,
            // 		"Data": {
            // 			"bonus":2,
            // 			"PayType": "RL",
            // 		},
            // 			"Multipliers": [1],
            // 			"Positions": [
            // 				{
            // 					"X": 1,
            // 					"Y": 2,
            // 				},{
            // 					"X": 2,
            // 					"Y": 2,
            // 				}],
            // 			'Symbol': 'C1',
            // 			"SymbolCount": 2,
            // 			'Type': 'Line',
            // 			"Win": 0,
            // 		},
            // ],
            // [
            // 	{		//免费
            // 		"Bet":100,
            // 		"Data": {
            // 			"bonus":3,
            // 			"PayType": "RL",
            // 		},
            // 			"Multipliers": [1],
            // 			"Positions": [
            // 				{
            // 					"X": 1,
            // 					"Y": 2,
            // 				},{
            // 					"X": 2,
            // 					"Y": 2,
            // 				}, {
            // 					"X": 4,
            // 					"Y": 0,
            // 				}],
            // 			'Symbol': 'C1',
            // 			"SymbolCount": 3,
            // 			'Type': 'Bonus',
            // 			"Win": 0,
            // 		},
            // ],
            [
                {
                    "Bet": 100,
                    "Data": {
                        "Line": 3,
                        "PayType": "RL",
                    },
                    "Multipliers": [25],
                    "Positions": [{
                            "X": 2,
                            "Y": 2,
                        }, {
                            "X": 3,
                            "Y": 2,
                        }, {
                            "X": 4,
                            "Y": 2,
                        }],
                    'Symbol': 'TN',
                    "SymbolCount": 3,
                    'Type': 'Line',
                    "Win": 2600,
                },
                {
                    "Bet": 100,
                    "Data": {
                        "Line": 4,
                        "PayType": "RL",
                    },
                    "Multipliers": [2],
                    "Positions": [{
                            "X": 4,
                            "Y": 0,
                        }, {
                            "X": 3,
                            "Y": 1,
                        }],
                    'Symbol': 'M5',
                    "SymbolCount": 2,
                    'Type': 'Line',
                    "Win": 200,
                }
            ], [], [{
                    "Bet": 100,
                    "Data": {
                        "Line": 5,
                        "PayType": "LR",
                    },
                    "Multipliers": [2],
                    "Positions": [{
                            "X": 0,
                            "Y": 2,
                        }, {
                            "X": 1,
                            "Y": 1,
                        }],
                    'Symbol': 'M4',
                    "SymbolCount": 2,
                    'Type': 'Line',
                    "Win": 200,
                }], [], [
                {
                    "Bet": 100,
                    "Data": {
                        "Line": 3,
                        "PayType": "LR",
                    },
                    "Multipliers": [5],
                    "Positions": [{
                            "X": 0,
                            "Y": 2,
                        }, {
                            "X": 1,
                            "Y": 2,
                        }, {
                            "X": 2,
                            "Y": 2,
                        }],
                    'Symbol': 'JJ',
                    "SymbolCount": 3,
                    'Type': 'Line',
                    "Win": 500,
                }, {
                    "Bet": 100,
                    "Data": {
                        "Line": 3,
                        "PayType": "LR",
                    },
                    "Multipliers": [3],
                    "Positions": [{
                            "X": 3,
                            "Y": 2,
                        }, {
                            "X": 4,
                            "Y": 2,
                        }],
                    'Symbol': 'M3',
                    "SymbolCount": 2,
                    'Type': 'Line',
                    "Win": 300,
                }, {
                    "Bet": 100,
                    "Data": {
                        "Line": 4,
                        "PayType": "LR",
                    },
                    "Multipliers": [2],
                    "Positions": [{
                            "X": 0,
                            "Y": 0,
                        }, {
                            "X": 1,
                            "Y": 1,
                        }],
                    'Symbol': 'M4',
                    "SymbolCount": 2,
                    'Type': 'Line',
                    "Win": 200,
                }
            ]
        ];
        /**
         * 5线位置
         */
        GameData.lineArr = {
            1: [1, 1, 1, 1, 1],
            2: [0, 0, 0, 0, 0],
            3: [2, 2, 2, 2, 2],
            4: [0, 1, 2, 1, 0],
            5: [2, 1, 0, 1, 2],
            6: [1, 0, 0, 0, 1],
            7: [1, 2, 2, 2, 1],
            8: [0, 0, 1, 2, 2],
            9: [2, 2, 1, 0, 0],
            10: [1, 2, 1, 0, 1],
            11: [1, 0, 1, 2, 1],
            12: [0, 1, 1, 1, 0],
            13: [2, 1, 1, 1, 2],
            14: [0, 1, 0, 1, 0],
            15: [2, 1, 2, 1, 2],
            16: [1, 1, 0, 1, 1],
            17: [1, 1, 2, 1, 1],
            18: [0, 0, 2, 0, 0],
            19: [2, 2, 0, 2, 2],
            20: [0, 2, 2, 2, 0],
            21: [2, 0, 0, 0, 2],
            22: [1, 2, 0, 2, 1],
            23: [1, 0, 2, 0, 1],
            24: [0, 2, 0, 2, 0],
            25: [2, 0, 2, 0, 2],
        };
        /**
         * 线数
         */
        GameData.line = 25;
        /**
         * 线配置
         */
        GameData.lineObj = {
            1: [1, 1, 1, 1, 1],
            2: [0, 0, 0, 0, 0],
            3: [2, 2, 2, 2, 2],
            4: [0, 1, 2, 1, 0],
            5: [2, 1, 0, 1, 2],
            6: [1, 0, 0, 0, 1],
            7: [1, 2, 2, 2, 1],
            8: [0, 0, 1, 2, 2],
            9: [2, 2, 1, 0, 0],
            10: [1, 2, 1, 0, 1],
            11: [1, 0, 1, 2, 1],
            12: [0, 1, 1, 1, 0],
            13: [2, 1, 1, 1, 2],
            14: [0, 1, 0, 1, 0],
            15: [2, 1, 2, 1, 2],
            16: [1, 1, 0, 1, 1],
            17: [1, 1, 2, 1, 1],
            18: [0, 0, 2, 0, 0],
            19: [2, 2, 0, 2, 2],
            20: [0, 2, 2, 2, 0],
            21: [2, 0, 0, 0, 2],
            22: [1, 2, 0, 2, 1],
            23: [1, 0, 2, 0, 1],
            24: [0, 2, 0, 2, 0],
            25: [2, 0, 2, 0, 2],
        };
        /**
         * 滚动列表
         */
        GameData.reelArr = [
            ['M4', 'WW', 'M3', 'M5', 'M0', 'M3', 'M2', 'M3', 'M4', 'M1', 'M1', 'M2', 'WW', 'M1'],
            ['M4', 'M1', 'M3', 'M1', 'M1', 'M2', 'M6', 'M4', 'M1', 'M2', 'M3', 'M4', 'M4', 'M2'],
            ['M4', 'WW', 'M2', 'M3', 'M1', 'M0', 'M3', 'M2', 'WW', 'WW', 'M3', 'M1', 'WW', 'M3'],
        ];
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