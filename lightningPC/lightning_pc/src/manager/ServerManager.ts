class ServerManager extends egret.EventDispatcher {
	public constructor() {
		super();
		GameConfig.gameModle = GameType.GameModule.falseModle;
	}

	private static _instance: ServerManager;
	public static getInstance(): ServerManager {
		if (!this._instance) {
			this._instance = new ServerManager();
		}
		return this._instance;
	}

	public acpetCommond(data: any): void {
		let dData: any;
		switch (data.Parameter.Action) {
			case 'Initial':
				console.log('initServer')
				dData = JSON.parse(JSON.stringify(serverData.initData));
				break;
			case 'Play':
				dData = this.resetPlay(data);
				break;
		}

		if (GameConfig.gameModle == GameType.GameModule.falseModle) {
			// console.log('serverData', dData)
			core.NotifyManager.getInstance().sendNotify(data.Parameter.Action, dData);
		}
		else {
			sockets.SocketMananger.getInstance().sendMessage(data);
		}
	}
	public static WhetherFree = false;//是否免费
	/**免费游戏的剩余次数*/
	public count: number = 0;
	/**免费游戏中的总次数 */
	public total: number = 0;
	/**免费游戏中全部的奖金 */
	public ActionWin: number = 0

	/**
	 * 重置返回play
	 */
	public resetPlay(cmdData: any): any {
		let parameter: any = cmdData.Parameter;
		let data = JSON.parse(JSON.stringify(serverData.playData));

		data.ActionType = parameter.Type;
		ServerManager.WhetherFree = data.ActionType == 'freeslot' ? true : false;
		data.ActionParameter = parameter;
		//随机结果
		data.Value.Main.ReelResults = [{
			"Idx": 0,
			"Pos": Math.floor(Math.random() * 8),
		}, {
			"Idx": 1,
			"Pos": Math.floor(Math.random() * 8),
		}, {
			"Idx": 2,
			"Pos": Math.floor(Math.random() * 8)
		}, {
			"Idx": 2,
			"Pos": Math.floor(Math.random() * 8)
		}, {
			"Idx": 2,
			"Pos": Math.floor(Math.random() * 8)
		}, {
			"Idx": 2,
			"Pos": Math.floor(Math.random() * 8)
		}];

		//根据结果得到重置盘面数据
		let resultArr: Array<Array<any>> = [[], [], [], [], [], []];

		if (data.ActionType == 'freeslot') {
			ServerManager.WhetherFree = true;
			this.count++
		} else {
			this.count = 0;
			ServerManager.WhetherFree = false;
		}

		let r: number = Math.floor(Math.random() * serverData.playDataArr.length);
		let reelData: any = serverData.playDataArr[r];

		if (ServerManager.WhetherFree) {
			r = Math.floor(Math.random() * serverData.freeDataArr.length);
			reelData = serverData.freeDataArr[r];
		} else {
			this.total = 0;
		}

		resultArr = reelData.ReelSymbols;
		//先得到盘面数据
		let WinResults: Array<any> = reelData.WinResults;


		let idxCount = 0
		for (let i = 0; i < resultArr.length; i++) {
			for (let j = 0; j < resultArr[i].length; j++) {
				if (resultArr[i][j] == 'C1') {
					idxCount++;
				}
			}
		}
		//  = WinResults[i].Positions.length;
		if (idxCount == 3) {
			this.total += 8;
		} else if (idxCount == 4) {
			this.total += 15;
		} else if (idxCount == 5) {
			this.total += 25;
		} else if (idxCount == 6) {
			this.total += 100;
		} else if (idxCount == 2 && data.ActionType == 'freeslot') {
			this.total += 5;
		}

		let obj = {
			'freeslot':
			{ 'count': this.total - this.count, 'total': this.total, 'TotalWin': 10, 'ActionWin': this.ActionWin },
		}








		data.Value.Main.WinResults = WinResults;
		data.Value.Main.ReelSymbols = resultArr;
		data.Value.Main.TriggerFlicker = reelData.TriggerFlicker;
		let totalWin: number = 0;
		//计算总的钱
		for (let i: number = 0; i < WinResults.length; i++) {
			totalWin += WinResults[i].Win;
		}

		if (ServerManager.WhetherFree) {
			if (WinResults.length) {
				this.ActionWin += totalWin / 10000;
			}
			obj.freeslot.ActionWin = this.ActionWin;
			data.Actions = obj;

		} else {
			this.ActionWin = 0;
			for (let k = 0; k < WinResults.length; k++) {
				if (WinResults[k].Symbol == 'freeslot') {
					data.Actions = obj;
				}
			}
		}
		// console.log(WinResults.length, totalWin, data)

		data.Value.Main.TotalWin = totalWin;
		data.Value.TotalWinDollar = totalWin / GameConfig.bili;
		if (ServerManager.WhetherFree)
			serverData.initData.Value.TokenInfo.Balance = serverData.initData.Value.TokenInfo.Balance + data.Value.TotalWinDollar - parameter.Denom / GameConfig.bili;
		data.Value.Balance = serverData.initData.Value.TokenInfo.Balance;
		console.log('服务端计算的结果', data)
		return data;
	}

	public isallNum(n: number, arr: Array<number>): boolean {
		for (let i: number = 0; i < arr.length; i++) {
			if (n == arr[i]) {
				return true;
			}
		}
		return false;
	}

	public isAllW(arr: Array<any>): boolean {
		for (let i: number = 0; i < arr.length; i++) {
			let carr: Array<any> = arr[i];
			let s: number = carr[0];
			for (let j: number = 0; j < carr.length; j++) {
				if (s != carr[j]) {
					return false;
				}
			}
		}
		return true;
	}


}

/**
 * 后端数据
 */
class serverData {
	/**
	 * 初始化数据
	 */
	public static initData = {
		"Action": "Initial",
		"ProcessTime": {
			"Spend": 0
		},
		"ScreenData": {
			"ScreenActions": [{
				"Status": "Initial"
			}]
		},
		"IsSuccess": true,
		"Marquees": "",
		"Message": "",
		"kick_rightnow": false,
		"Value": {
			"MC_Reset_At": "2019-04-24 10:11:02",
			"SpinConstraint": {
				"Lines": [1, 2, 3, 4, 5],
				"MinLineBet": 1,
				"MaxLineBet": 1000,
				"MinDenom": 1,
				"MaxDenom": 2147483647
			},
			"FreeLine": [],
			"JackpotPaytables": {
				"1": 279,
				"2": 558,
				"3": 837,
				"4": 1116
			},
			"Symbolstripes": {
				"Main": {
					"Stripes": [{
						"Symbols": ["M2", "AA", "M2", "JJ", "AA", "KK", "M1", "NI", "M2", "AA", "M1", "TN", "M2", "WW", "M2", "NI"]
					}, {
						"Symbols": ["M2", "QQ", "M2", "JJ", "QQ", "TN", "M1", "TN", "M2", "KK", "M1", "NI", "M2", "KK", "M2", "TN"]
					}, {
						"Symbols": ["M2", "AA", "M2", "KK", "KK", "NI", "M1", "C1", "C1", "TN", "M1", "QQ", "M2", "JJ", "M2", "KK"]
					}, {
						"Symbols": ["M2", "AA", "M2", "KK", "JJ", "NI", "M1", "C1", "C1", "TN", "M1", "QQ", "M2", "JJ", "M2", "KK"]
					}, {
						"Symbols": ["M2", "AA", "M2", "KK", "M2", "NI", "M1", "C1", "C1", "TN", "M1", "QQ", "M2", "JJ", "M2", "KK"]
					}, {
						"Symbols": ["M2", "AA", "M2", "KK", "M2", "NI", "M1", "C1", "C1", "TN", "M1", "QQ", "M2", "JJ", "M2", "KK"]
					}]
				}
			},
			"Geninit": {
				"Main": {
					"ReelResults": [{
						"Idx": 0,
						"Pos": 0
					}, {
						"Idx": 1,
						"Pos": 0
					}, {
						"Idx": 2,
						"Pos": 0
					}, {
						"Idx": 3,
						"Pos": 0
					}, {
						"Idx": 4,
						"Pos": 0
					}, {
						"Idx": 5,
						"Pos": 0
					}],

					"ReelSymbols": [
						["AA", "TN", "JJ", 'WW'],
						["M2", "WW", "M5", 'QQ'],
						["M1", "M5", "M4", 'C1'],
						["M2", "KK", "C1", 'AA'],
						["C1", "M2", "KK", 'M2'],
						["KK", "QQ", "M4", 'QQ'],

					],
					"StripesCode": "E0qVFEFC97AqoF0riEJANg",
					"TotalBet": 0,
					"TotalWin": 0,
					"WinResults": []
				}
			},
			"Denoms": [500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 250000, 500000, 1000000, 2000000],
			"Status": {
				"CurrentAction": "Initial",
				"CurrentActionType": "slot",
				"GameLevel": "1",
				"GameLevel_UpCount": "0"
			},
			"Actions": null,
			"LastRound": {
				"LastRoundId": "3e9e115565226945178",
				"LastRoundResult": {
					"RoundId": "3e9e115565226945178",
					"SubRoundId": 0,
					"SessionData": {
						"Bet": 10,
						"Multiply": 1
					},
					"TotalBet": 1000,
					"TotalWin": 0,
					"TotalBetDollar": 0.1,
					"TotalWinDollar": 0,
					"Denom": 10,
					"ScreenData": [],
					"Main": {
						"MathVersion": "triple_monkey",
						"TotalBet": 1000,
						"TotalWin": 0,
						"TotalBetDollar": 0.1,
						"TotalWinDollar": 0,
						"Denom": 10,
						"ReelSymbols": [
							["AA", "TN", "JJ", 'WW'],
							["M2", "WW", "M5", 'QQ'],
							["M1", "M5", "M4", 'AA'],
						],
						"WinResults": [],
						"TriggerFlicker":[]
					},
					"Status": {
						"CurrentAction": "Play",
						"CurrentActionType": "slot",
						"GameLevel": "1",
						"GameLevel_UpCount": "0"
					},
					"Actions": null,
				}
			},
			"TokenInfo": {
				"Balance": 10.2,
				"Currency": "CNY",
				"FrontEndDebug": 1
			}
		}
	};
	/**
	 * 后端数据
	 */
	public static playData = {
		"Action": "Play",
		"ProcessTime": {
			"Spend": 0
		},
		"ScreenData": {},
		"IsSuccess": true,
		"Marquees": [],
		"Message": "",
		"kick_rightnow": false,
		"ActionType": "slot",
		"ActionParameter": {
			"Action": "Play",
			"Type": "slot",
			"Line": 5,
			"Bet": 1,
			"Denom": 100,
			"BetSetup": {
				"Line": 1,
				"Bet": 0.05,
				"Multiply": 1
			},
		},
		"Value": {
			"TotalBet": 500,
			"TotalWin": 0,
			"Denom": 500,
			"Main": {
				"MathVersion": "GM-NANA-OLSLOT-DMMATHR-1.0.3",
				"ReelResults":
				[{ "Idx": 0, "Pos": 3 }, { "Idx": 1, "Pos": 5 }, { "Idx": 2, "Pos": 4 }, { "Idx": 3, "Pos": 7 }, { "Idx": 4, "Pos": 1 }, { "Idx": 5, "Pos": 2 }],
				"ReelSymbols":
				[["AA", "TN", "JJ", 'WW'], ["M2", "WW", "M5", 'QQ'], ["M1", "M5", "M4", 'AA'], ["WW", "JJ", "M4", 'QQ'], ["M1", "M5", "TN", 'AA'], ["NI", "M3", "M4", 'M5']],
				"StripesCode": "BFNYIXExdKyuaxk2NMFL1g",
				"TotalBet": 500,
				"TotalWin": 0,
				"WinResults": [],
				"TriggerFlicker":[]
			},

			"TotalWinDollar": 0,
			"Balance": 1612333.27,

		},
		"RecordArguments": { "Rid": "15742401970112554710", "sRid": 0 },
		"Actions": {}

	};

	/**模拟paly之后的数据结构 */
	public static playDataArr = [
		{
			// 	ReelSymbols: [
			// 		['TN', 'M2', 'M3', 'M5'],
			// 		['M5', 'M2', 'KK', 'JJ'],
			// 		['TN', 'M2', 'M5', 'KK'],
			// 		['M3', 'M1', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],

			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "M2",
			// 		"Positions": [{ "X": 0, "Y": 1 }, { "X": 1, "Y": 1 }, { "X": 2, "Y": 1 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 500,
			// 		"Multipliers": [10]
			// 	}, {
			// 		"Type": "Line",
			// 		"Symbol": "M5",
			// 		"Positions": [{ "X": 0, "Y": 3 }, { "X": 1, "Y": 0 }, { "X": 2, "Y": 2 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 1500,
			// 		"Multipliers": [10]
			// 	}]
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M2', 'KK', 'M5'],
			// 		['M4', 'M2', 'JJ', 'KK'],
			// 		['TN', 'KK', 'M2', 'TN'],
			// 		['M3', 'M1', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],
			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "KK",
			// 		"Positions": [{ "X": 0, "Y": 2 }, { "X": 1, "Y": 3 }, { "X": 2, "Y": 1 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 8000,
			// 		"Multipliers": [10]
			// 	},
			// 	{
			// 		"Type": "Line",
			// 		"Symbol": "M2",
			// 		"Positions": [{ "X": 0, "Y": 1 }, { "X": 1, "Y": 1 }, { "X": 2, "Y": 2 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 5000,
			// 		"Multipliers": [10]
			// 	}]
			// },
			// {
			// 	ReelSymbols: [
			// 		['TN', 'M2', 'JJ', 'M5'],
			// 		['M2', 'M2', 'KK', 'JJ'],
			// 		['TN', 'JJ', 'M4', 'KK'],
			// 		['M3', 'JJ', 'NI', 'M4'],
			// 		['M4', 'M2', 'JJ', 'M1'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],
			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "JJ",
			// 		"Positions": [{ "X": 0, "Y": 2 }, { "X": 1, "Y": 3 }, { "X": 2, "Y": 1 }, { "X": 3, "Y": 1 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 10000,
			// 		"Multipliers": [10]
			// 	}, {
			// 		"Type": "Line",
			// 		"Symbol": "M2",
			// 		"Positions": [{ "X": 0, "Y": 1 }, { "X": 1, "Y": 1 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 2000,
			// 		"Multipliers": [10]
			// 	}, {
			// 		"Type": "Line",
			// 		"Symbol": "M2",
			// 		"Positions": [{ "X": 0, "Y": 1 }, { "X": 1, "Y": 0 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 2500,
			// 		"Multipliers": [10]
			// 	}]
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M2', 'QQ', 'M5'],
			// 		['M4', 'M1', 'KK', 'QQ'],
			// 		['TN', 'JJ', 'M4', 'KK'],
			// 		['M3', 'JJ', 'M4', 'NI'],
			// 		['M4', 'NI', 'M2', 'JJ'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],
			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "QQ",
			// 		"Positions": [{ "X": 0, "Y": 2 }, { "X": 1, "Y": 3 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 1000,
			// 		"Multipliers": [10]
			// 	}]
			// },
			// {
			// 	ReelSymbols: [
			// 		['TN', 'QQ', 'QQ', 'M5'],
			// 		['C1', 'AA', 'KK', 'M1'],
			// 		['TN', 'C1', 'M4', 'KK'],
			// 		['M3', 'JJ', 'M4', 'NI'],
			// 		['M4', 'M2', 'C1', 'NI'],
			// 		['M3', 'NI', 'QQ', 'KK'],
			// 	],
			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "freeslot",
			// 		"Positions": [{ "X": 1, "Y": 0 }, { "X": 2, "Y": 1 }, { "X": 4, "Y": 2 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 1000,
			// 		"Multipliers": [10]
			// 	}]
			// },
			// {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'QQ', 'M5'],
			// 		['M1', 'AA', 'QQ', 'M1'],
			// 		['TN', 'C1', 'M4', 'KK'],
			// 		['M3', 'JJ', 'M4', 'NI'],
			// 		['M4', 'M2', 'C1', 'NI'],
			// 		['M3', 'NI', 'QQ', 'KK'],
			// 	],
			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "M1",
			// 		"Positions": [{ "X": 0, "Y": 1 }, { "X": 1, "Y": 0 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 1000,
			// 		"Multipliers": [10]
			// 	}, {
			// 		"Type": "Line",
			// 		"Symbol": "QQ",
			// 		"Positions": [{ "X": 0, "Y": 2 }, { "X": 1, "Y": 2 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 5000,
			// 		"Multipliers": [10]
			// 	}]
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'QQ', 'M5'],
			// 		['M1', 'C1', 'QQ', 'M1'],
			// 		['TN', 'C1', 'M4', 'KK'],
			// 		['M3', 'JJ', 'M4', 'NI'],
			// 		['M4', 'M2', 'M1', 'NI'],
			// 		['M3', 'NI', 'QQ', 'KK'],
			// 	],
			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "QQ",
			// 		"Positions": [{ "X": 0, "Y": 2 }, { "X": 1, "Y": 2 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 50000,
			// 		"Multipliers": [10]
			// 	}]
			// },

			// {
			// 	ReelSymbols: [
			// 		['TN', 'KK', 'QQ', 'M5'],
			// 		['C1', 'AA', 'KK', 'M1'],
			// 		['TN', 'C1', 'M4', 'KK'],
			// 		['M3', 'JJ', 'M4', 'NI'],
			// 		['M4', 'M2', 'C1', 'NI'],
			// 		['M3', 'NI', 'QQ', 'KK'],
			// 	],
			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "freeslot",
			// 		"Positions": [{ "X": 1, "Y": 0 }, { "X": 2, "Y": 1 }, { "X": 4, "Y": 2 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 0,
			// 		"Multipliers": [10]
			// 	},
			// 	{
			// 		"Type": "Line",
			// 		"Symbol": "KK",
			// 		"Positions": [{ "X": 0, "Y": 1 }, { "X": 1, "Y": 2 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 1000,
			// 		"Multipliers": [10]
			// 	}]
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M2', 'QQ', 'M5'],
			// 		['M4', 'M1', 'KK', 'QQ'],
			// 		['TN', 'JJ', 'QQ', 'KK'],
			// 		['M3', 'QQ', 'M4', 'NI'],
			// 		['M4', 'QQ', 'M2', 'JJ'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],
			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "QQ",
			// 		"Positions": [{ "X": 0, "Y": 2 }, { "X": 1, "Y": 3 }, { "X": 2, "Y": 2 }, { "X": 3, "Y": 1 }, { "X": 4, "Y": 1 }, { "X": 5, "Y": 1 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 150000,
			// 		"Multipliers": [10]
			// 	}]
			// },
			// {
			// 	ReelSymbols: [
			// 		['M5', 'M1', 'M3', 'TN'],
			// 		['M2', 'TN', 'QQ', 'M1'],
			// 		['TN', 'M1', 'M4', 'KK'],
			// 		['M3', 'JJ', 'M4', 'NI'],
			// 		['M4', 'M2', 'C1', 'NI'],
			// 		['M3', 'NI', 'QQ', 'KK'],
			// 	],
			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "M1",
			// 		"Positions": [{ "X": 0, "Y": 1 }, { "X": 1, "Y": 3 }, { "X": 2, "Y": 1 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 1500,
			// 		"Multipliers": [10]
			// 	}]
			// }
			// ,
			// {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'M3', 'M4'],
			// 		['M5', 'M2', 'KK', 'JJ'],
			// 		['AA', 'M3', 'M3', 'KK'],
			// 		['M3', 'M1', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'AA', 'KK', 'NI'],
			// 	],

			// 	WinResults: []
			// }
			// ,
			// {
			ReelSymbols: [
				["AA", "KK", "M5", "M3"],
				["NI", "AA", "AA", "M3"],
				["M1", "M1", "M3", "WW"],
				["M1", "C1", "WW", "M2"],
				["KK", "QQ", "QQ", "AA"],
				["AA", "KK", "QQ", "TN"]
			],

			WinResults: [
				{
					Type: "Line",
					Symbol: "M3",
					Positions: [
						{ X: 0, Y: 3 },
						{ X: 1, Y: 3 },
						{ X: 2, Y: 2 },
						{ X: 2, Y: 3 },
						{ X: 3, Y: 2 }
					],
					SymbolCount: 4,
					Data: { Line: 0, PayType: "LR" },
					Bet: 4000,
					Win: 1200000,
					PayMultipliers: [150],
					WindMultipliers: [1, 1, 1, 1, 1, 1],
					Multipliers: [1, 1, 2, 1, 0, 0]

				}, {

					Type: "Line",
					Symbol: "AA",
					Positions: [
						{ X: 0, Y: 0 },
						{ X: 1, Y: 1 },
						{ X: 1, Y: 2 },
						{ X: 2, Y: 3 },
						{ X: 3, Y: 2 },
						{ X: 4, Y: 3 },
						{ X: 5, Y: 0 }
					],
					SymbolCount: 6,
					Data: { Line: 0, PayType: "LR" },
					Bet: 4000,
					Win: 1200000,
					PayMultipliers: [150],
					WindMultipliers: [1, 1, 1, 1, 1, 1],
					Multipliers: [1, 2, 1, 1, 1, 1],
				}
			],
			TriggerFlicker: {
				"M3": [[3, 3, 2, 2], [3, 3, 3, 2]],
				"AA": [[0, 1, 3, 2, 3, 0], [0, 2, 3, 2, 3, 0]]
			}



			// }



			/**ceshi */
			// ReelSymbols: [
			// 	['TN', 'M1', 'QQ', 'M5'],
			// 	['M1', 'M5', 'QQ', 'M1'],
			// 	['TN', 'M3', 'M4', 'KK'],
			// 	['M3', 'JJ', 'M4', 'NI'],
			// 	['M4', 'M2', 'M1', 'NI'],
			// 	['M3', 'NI', 'QQ', 'KK'],
			// ],
			// WinResults: [{
			// 	"Type": "Line",
			// 	"Symbol": "QQ",
			// 	"Positions": [{ "X": 0, "Y": 2 }, { "X": 1, "Y": 2 }],
			// 	"SymbolCount": 3,
			// 	"Data": { "Line": 1, "PayType": "LR" },
			// 	"Bet": 500,
			// 	"Win": 6500,
			// 	"Multipliers": [10]
			// }]

			// ReelSymbols: [
			// 	['TN', 'QQ', 'QQ', 'M5'],
			// 	['C1', 'AA', 'KK', 'M1'],
			// 	['TN', 'C1', 'M4', 'KK'],
			// 	['M3', 'JJ', 'M4', 'NI'],
			// 	['M4', 'M2', 'C1', 'NI'],
			// 	['M3', 'NI', 'QQ', 'KK'],
			// ],
			// WinResults: [{
			// 	"Type": "Line",
			// 	"Symbol": "freeslot",
			// 	"Positions": [{ "X": 1, "Y": 0 }, { "X": 2, "Y": 1 }, { "X": 4, "Y": 2 }],
			// 	"SymbolCount": 3,
			// 	"Data": { "Line": 1, "PayType": "LR" },
			// 	"Bet": 500,
			// 	"Win": 1000,
			// 	"Multipliers": [10]
			// }]

			// ReelSymbols: [
			// 		['TN', 'M2', 'QQ', 'M5'],
			// 		['M4', 'M1', 'KK', 'QQ'],
			// 		['TN', 'JJ', 'QQ', 'KK'],
			// 		['M3', 'QQ', 'M4', 'NI'],
			// 		['M4', 'QQ', 'M2', 'JJ'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],
			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "QQ",
			// 		"Positions": [{ "X": 0, "Y": 2 }, { "X": 1, "Y": 3 }, { "X": 2, "Y": 2 }, { "X": 3, "Y": 1 }, { "X": 4, "Y": 1 }, { "X": 5, "Y": 1 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 150000,
			// 		"Multipliers": [10]
			// 	}]

			// ReelSymbols: [
			// 	['C1', 'QQ', 'QQ', 'M5'],
			// 	['M2', 'AA', 'KK', 'M1'],
			// 	['TN', 'C1', 'M4', 'KK'],
			// 	['M3', 'JJ', 'M3', 'NI'],
			// 	['M4', 'M2', 'M4', 'NI'],
			// 	['M3', 'C1', 'QQ', 'KK'],
			// ],
			// WinResults: [{
			// 	"Type": "Line",
			// 	"Symbol": "freeslot",
			// 	"Positions": [{ "X": 0, "Y": 0 }, { "X": 2, "Y": 1 }, { "X": 5, "Y": 2 }],
			// 	"SymbolCount": 3,
			// 	"Data": { "Line": 1, "PayType": "LR" },
			// 	"Bet": 500,
			// 	"Win": 1000,
			// 	"Multipliers": [10]
			// }]

		}

	]

	/**免费游戏之后play的数据结构 */
	public static freeDataArr = [

		{


			// ReelSymbols: [
			// 	['TN', 'QQ', 'M3', 'M5'],
			// 	['M5', 'C1', 'KK', 'JJ'],
			// 	['TN', 'C1', 'M5', 'KK'],
			// 	['M3', 'M1', 'M4', 'NI'],
			// 	['M4', 'M2', 'JJ', 'NI'],
			// 	['M3', 'QQ', 'KK', 'NI'],
			// ],

			// WinResults: [{
			// 	"Type": "Line",
			// 	"Symbol": "freeslot",
			// 	"Positions": [{ "X": 1, "Y": 1 }, { "X": 2, "Y": 1 }],
			// 	"SymbolCount": 3,
			// 	"Data": { "Line": 1, "PayType": "LR" },
			// 	"Bet": 500,
			// 	"Win": 500,
			// 	"Multipliers": [10]
			// }]

			/**ceshi */



			// 	ReelSymbols: [
			// 		['TN', 'QQ', 'M3', 'M5'],
			// 		['M5', 'C1', 'KK', 'JJ'],
			// 		['TN', 'C1', 'M5', 'KK'],
			// 		['M3', 'M1', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],

			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "freeslot",
			// 		"Positions": [{ "X": 1, "Y": 1 }, { "X": 2, "Y": 1 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 500,
			// 		"Multipliers": [10]
			// 	}]
			// },
			// {
			// 	ReelSymbols: [
			// 		['TN', 'M2', 'M3', 'M5'],
			// 		['M5', 'M2', 'KK', 'JJ'],
			// 		['TN', 'M2', 'M5', 'KK'],
			// 		['M3', 'M1', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],

			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "M2",
			// 		"Positions": [{ "X": 0, "Y": 1 }, { "X": 1, "Y": 1 }, { "X": 2, "Y": 1 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 8500,
			// 		"Multipliers": [10]
			// 	}]
			// }
			// ,
			// {
			// 	ReelSymbols: [
			// 		['TN', 'M4', 'M3', 'M5'],
			// 		['M5', 'M4', 'KK', 'JJ'],
			// 		['TN', 'M4', 'M5', 'KK'],
			// 		['M3', 'M1', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],

			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "M4",
			// 		"Positions": [{ "X": 0, "Y": 1 }, { "X": 1, "Y": 1 }, { "X": 2, "Y": 1 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 17500,
			// 		"Multipliers": [10]
			// 	}]
			// }
			// ,
			// {
			// 	ReelSymbols: [
			// 		['TN', 'M2', 'M3', 'M5'],
			// 		['M5', 'M3', 'KK', 'JJ'],
			// 		['TN', 'M3', 'M5', 'KK'],
			// 		['M3', 'M1', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],

			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "M3",
			// 		"Positions": [{ "X": 0, "Y": 2 }, { "X": 1, "Y": 1 }, { "X": 2, "Y": 1 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 2500,
			// 		"Multipliers": [10]
			// 	}]
			// }
			// ,
			// {
			// 	ReelSymbols: [
			// 		['TN', 'M2', 'M3', 'M5'],
			// 		['M5', 'M2', 'KK', 'JJ'],
			// 		['TN', 'M2', 'M5', 'KK'],
			// 		['M3', 'M1', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],

			// 	WinResults: [{
			// 		"Type": "Line",
			// 		"Symbol": "M2",
			// 		"Positions": [{ "X": 0, "Y": 1 }, { "X": 1, "Y": 1 }, { "X": 2, "Y": 1 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 220000,
			// 		"Multipliers": [10]
			// 	}]
			// }
			// ,
			// {
			// 	ReelSymbols: [
			// 		['TN', 'M2', 'M3', 'M5'],
			// 		['M5', 'TN', 'KK', 'JJ'],
			// 		['TN', 'M2', 'WW', 'KK'],
			// 		['M3', 'M1', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],
			// 	WinResults: [{
			// 		"Type": "Bouns",
			// 		"Symbol": "WW",
			// 		"Positions": [{ "X": 2, "Y": 2 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 5000,
			// 		"Multipliers": [3]
			// 	}
			// 		, {
			// 		"Type": "Line",
			// 		"Symbol": "TN",
			// 		"Positions": [{ "X": 0, "Y": 0 }, { "X": 1, "Y": 1 }, { "X": 2, "Y": 2 }],
			// 		"SymbolCount": 3,
			// 		"Data": { "Line": 1, "PayType": "LR" },
			// 		"Bet": 500,
			// 		"Win": 1500,
			// 		"Multipliers": [10]
			// 	}
			// 	]
			// }
			// ,
			// {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'M3', 'M4'],
			// 		['M5', 'M2', 'KK', 'JJ'],
			// 		['AA', 'M3', 'M3', 'KK'],
			// 		['M3', 'M1', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'AA', 'KK', 'NI'],
			// 	],

			// 	WinResults: []
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'M3', 'M4'],
			// 		['AA', 'M2', 'KK', 'JJ'],
			// 		['TN', 'M4', 'M3', 'KK'],
			// 		['M3', 'M1', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'TN', 'KK', 'NI'],
			// 	],

			// 	WinResults: []
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'TN', 'M4'],
			// 		['M5', 'M2', 'KK', 'JJ'],
			// 		['TN', 'M4', 'M5', 'KK'],
			// 		['M3', 'M1', 'KK', 'NI'],
			// 		['M4', 'M4', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],

			// 	WinResults: []
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'M3', 'M4'],
			// 		['M5', 'QQ', 'KK', 'JJ'],
			// 		['TN', 'M4', 'M2', 'KK'],
			// 		['M3', 'M5', 'M4', 'NI'],
			// 		['M4', 'TN', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'M2', 'NI'],
			// 	],

			// 	WinResults: []
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'M3', 'M4'],
			// 		['M5', 'WW', 'KK', 'JJ'],
			// 		['TN', 'M4', 'M5', 'KK'],
			// 		['M3', 'M3', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'JJ', 'KK', 'NI'],
			// 	],

			// 	WinResults: []
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'M3', 'M4'],
			// 		['M5', 'M2', 'QQ', 'JJ'],
			// 		['TN', 'M4', 'M5', 'KK'],
			// 		['M3', 'M3', 'M4', 'NI'],
			// 		['M4', 'M2', 'QQ', 'NI'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],

			// 	WinResults: []
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'M3', 'M4'],
			// 		['M5', 'M2', 'KK', 'JJ'],
			// 		['TN', 'M1', 'M5', 'KK'],
			// 		['M3', 'M5', 'TN', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],

			// 	WinResults: []
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'M3', 'M4'],
			// 		['M5', 'M2', 'M2', 'JJ'],
			// 		['TN', 'M4', 'M5', 'KK'],
			// 		['M3', 'M5', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'KK', 'NI'],
			// 	],

			// 	WinResults: []
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'M3', 'M4'],
			// 		['M5', 'M2', 'AA', 'JJ'],
			// 		['TN', 'M4', 'M5', 'KK'],
			// 		['M3', 'AA', 'M4', 'NI'],
			// 		['M4', 'M2', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'QQ', 'NI'],
			// 	],

			// 	WinResults: []
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'M4', 'M4'],
			// 		['M5', 'M2', 'KK', 'JJ'],
			// 		['TN', 'M4', 'M5', 'KK'],
			// 		['M3', 'M2', 'M4', 'NI'],
			// 		['M4', 'M5', 'JJ', 'NI'],
			// 		['M3', 'TN', 'KK', 'NI'],
			// 	],

			// 	WinResults: []
			// }
			// , {
			// 	ReelSymbols: [
			// 		['TN', 'M1', 'M3', 'M4'],
			// 		['M5', 'AA', 'KK', 'JJ'],
			// 		['TN', 'M4', 'M5', 'KK'],
			// 		['M3', 'TN', 'M4', 'NI'],
			// 		['M4', 'AA', 'JJ', 'NI'],
			// 		['M3', 'QQ', 'KK', 'AA'],
			// 	],

			// 	WinResults: []
		}



	]
}


