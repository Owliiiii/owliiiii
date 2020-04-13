/**
 * 游戏数据模块
 */
module vo {
    /**
	 * 游戏数据总集合
	 */
	export class GameData {
		/**
		 * 初始化数据存入
		 */
		public static initData: any;
		/**
		 * 结果数据存入
		 */
		public static resultData: any;
		/**
		 * 玩家余额
		 */
		public static balance: number = 549.88;
		/**
		 * 当前自动次数
		 */
		public static autoPlayCount: number = 0;

		/**
		 * 当前老虎机数据
		 */
		public static slotInfo: SlotInfo;
		/**
		 * 当前获得的最大免费次数
		 */
		public static allFreeCount:number=0;
		/**
		 * 赔付表
		 */
		public static payData: any = {
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
		public static betScoreArr: Array<any> = [0.01, 0.02, 0.05, 0.10, 0.16, 0.25, 0.40];
		
       
		//public static betScoreArr:Array<any>=['1.00','2.00','3.00','4.00','5.00','10.00','15.00','20.00','25.00','30.00','35.00','40.00','45.00','50.00','75.00','100.00','150.00','200.00','250.00','300.00','350.00','400.00','450.00','500.00','600.00','700.00','800.00','900.00','1000.00'];
		/**
		 * 免费次数
		 */
		
		/**
		 * 投注索引
		 */
		public static betIndex: number = 0;
		public static Actions:any = [
			{
				"RoundId": egret.getTimer(),
				"Bet": 1,
				"Denom": "parameter.Denom",
				"type": "FreeSlot",
				"count": 10,
				"remaining": 10,
			}
		]
		/**
		 * 次数
		 */
		public static TotalActionCount:number = 0;
		/**
		 * 奖金
		 */
		public static FreeMoney:number = 0;
		/**
		 * 固定结果
		 */
		public static ReelSymbols:any = [
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
				["AA", "JJ", "M4"],		//免费Bonus testNum == 2
				["M3", "QQ", "C1"],
				["M1", "M5", "C1"],
				["QQ", "WW", "M4"],
				["C1", "QQ", "M5"]
			],
			[
				["AA", "M4", "M2"],		//2条线 testNum == 3
				["AA", "M3", "M5"],
				["AA", "M5", "WW"],
				['AA', 'M5', 'WW'],
				['M5', 'M1', 'TN']
			],[
				["M4", "M3", "QQ"],		//无线 testNum == 4
				["M1", "M5", "KK"],
				["AA", "M2", "JJ"],
				["M4", "M4", "M3"],
				["M2", "M1", "M5"],
			],[
				["M2", "M5", "M4"],		//1线 testNum == 5
				["M1", "M4", "M5"],
				["JJ", "AA", "M5"],
				["QQ", "M4", "M3"],
				["M5", "M2", "M1"],
			],[
				["M4", "M3", "QQ"],		//无线 testNum == 6
				["M1", "M5", "KK"],
				["AA", "M2", "JJ"],
				["M4", "M4", "M3"],
				["M2", "M1", "M5"],
			],[	
				["M4","M5","JJ"],		//3线 testNum == 7
				["AA","M4","JJ"],
				["JJ","M2","JJ"],
				["JJ","M4","M1"],
				["AA","NI","M1"],
			]
			
		]
		public static ReelSymbols1:any = [
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
				["AA", "M4", "M2"],		//2条线 testNum == 3
				["AA", "M3", "M5"],
				["AA", "M5", "WW"],
				['AA', 'M5', 'WW'],
				['M5', 'M1', 'TN']
			],[
				["M4", "M3", "QQ"],		//无线 testNum == 4
				["M1", "M5", "KK"],
				["AA", "M2", "JJ"],
				["M4", "M4", "M3"],
				["M2", "M1", "M5"],
			],[
				["M2", "M5", "M4"],		//1线 testNum == 5
				["M1", "M4", "M5"],
				["JJ", "AA", "M5"],
				["QQ", "M4", "M3"],
				["M5", "M2", "M1"],
			],[
				["M4", "M3", "QQ"],		//无线 testNum == 6
				["M1", "M5", "KK"],
				["AA", "M2", "JJ"],
				["M4", "M4", "M3"],
				["M2", "M1", "M5"],
			],[	
				["M4","M5","JJ"],		//3线 testNum == 7
				["AA","M4","JJ"],
				["JJ","M2","JJ"],
				["JJ","M4","M1"],
				["AA","NI","M1"],
			]
			
		]
		/**
		 *最后结果
		 */
		public static resultNum:number;
		/**
		 * 固定结果数据
		 */
		public static WinResults:any = [
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
				{		//免费
					"Bet":100,
					"Data": {
						"bonus":3,
						"PayType": "RL",
					},
						"Multipliers": [1],
						"Positions": [
							{
								"X": 1,
								"Y": 2,
							},{
								"X": 2,
								"Y": 2,
							}, {
								"X": 4,
								"Y": 0,
							}],
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
			],[

			],[{
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
				}],[

				],[
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
				},{
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
				},{
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
		]

		public static WinResults1:any = [
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
			],[

			],[{
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
				}],[

				],[
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
				},{
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
				},{
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
		]
		
		/**
		 * 5线位置
		 */
		public static lineArr: any = {
			1:[1,1,1,1,1],
			2:[0,0,0,0,0],
			3:[2,2,2,2,2],
			4:[0,1,2,1,0],
			5:[2,1,0,1,2],
			6:[1,0,0,0,1],
			7:[1,2,2,2,1],
			8:[0,0,1,2,2],
			9:[2,2,1,0,0],
			10:[1,2,1,0,1],
			11:[1,0,1,2,1],
			12:[0,1,1,1,0],
			13:[2,1,1,1,2],
			14:[0,1,0,1,0],
			15:[2,1,2,1,2],
			16:[1,1,0,1,1],
			17:[1,1,2,1,1],
			18:[0,0,2,0,0],
			19:[2,2,0,2,2],
			20:[0,2,2,2,0],
			21:[2,0,0,0,2],
			22:[1,2,0,2,1],
			23:[1,0,2,0,1],
			24:[0,2,0,2,0],
			25:[2,0,2,0,2],
		};

   
		/**
		 * 线数
		 */
		public static line:number=25;

		/**
		 * 线配置
		 */
		public static lineObj:any={
			1:[1,1,1,1,1],
			2:[0,0,0,0,0],
			3:[2,2,2,2,2],
			4:[0,1,2,1,0],
			5:[2,1,0,1,2],
			6:[1,0,0,0,1],
			7:[1,2,2,2,1],
			8:[0,0,1,2,2],
			9:[2,2,1,0,0],
			10:[1,2,1,0,1],
			11:[1,0,1,2,1],
			12:[0,1,1,1,0],
			13:[2,1,1,1,2],
			14:[0,1,0,1,0],
			15:[2,1,2,1,2],
			16:[1,1,0,1,1],
			17:[1,1,2,1,1],
			18:[0,0,2,0,0],
			19:[2,2,0,2,2],
			20:[0,2,2,2,0],
			21:[2,0,0,0,2],
			22:[1,2,0,2,1],
			23:[1,0,2,0,1],
			24:[0,2,0,2,0],
			25:[2,0,2,0,2],
		}
		



		/**
		 * 滚动列表
		 */
		public static reelArr: Array<Array<any>> = [
			['M4', 'WW', 'M3', 'M5', 'M0', 'M3', 'M2', 'M3', 'M4', 'M1', 'M1', 'M2', 'WW', 'M1'],
			['M4', 'M1', 'M3', 'M1', 'M1', 'M2', 'M6', 'M4', 'M1', 'M2', 'M3', 'M4', 'M4', 'M2'],
			['M4', 'WW', 'M2', 'M3', 'M1', 'M0', 'M3', 'M2', 'WW', 'WW', 'M3', 'M1', 'WW', 'M3'],
		];

	}

	/**
	 * 基本信息结构
	 */
	export class BaseInfo {
		constructor() {
		}
		public readData(obj: any) {
		}
	}

	/**
	 * 老虎机数据
	 */
	export class SlotInfo extends BaseInfo {
		constructor() {
			super();
		}
		/**
		 * 滚轮的最终结果
		 */
		public resultArr: Array<any> = [
		
		];
		public indexArr: Array<number> = [];
        /**
		 * 总获胜
		 */
		public allwin: number = 0;
		public readData(obj: any) {

		}

		/**
		 * 读取开始游戏返回数据
		 */
		public readPlayAction(data: any): void {

		}

	}
}


