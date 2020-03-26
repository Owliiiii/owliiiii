// class ServerManager extends egret.EventDispatcher {
// 	public constructor() {
// 		super();
// 		GameConfig.gameModle = GameType.GameModule.falseModle;
// 	}

// 	private static _instance: ServerManager;
// 	public static getInstance(): ServerManager {
// 		if (!this._instance) {
// 			this._instance = new ServerManager();
// 		}
// 		return this._instance;
// 	}

// 	public acpetCommond(data: any): void {
// 		let dData: any;
// 		switch (data.Parameter.Action) {
// 			case 'Initial':
// 				dData = JSON.parse(JSON.stringify(serverData.initData));
// 				break;
// 			case 'Play':
// 				dData = this.resetPlay(data);
// 				break;
// 		}

// 		if (GameConfig.gameModle == GameType.GameModule.falseModle) {
// 			core.NotifyManager.getInstance().sendNotify(data.Parameter.Action, dData);
// 			console.log("返回数据：",dData);
// 		}
// 		else {
// 			sockets.SocketMananger.getInstance().sendMessage(data);
// 		}
// 	}

// 	/**
// 	 * 重置返回play
// 	 */
// 	public resetPlay(cmdData: any): any {
// 		let data = JSON.parse(JSON.stringify(serverData.playData));
// 		let parameter: any = cmdData.Parameter;
// 		let testNum = Math.floor(Math.random() * 6);
// 		if(data.ActionType == "freeslot"){
// 			testNum = Math.floor(Math.random() * 5);
// 		}
// 		console.log("testNum === " + testNum);
// 		data.ActionType = parameter.Type;
// 		console.log("data.ActionType === " + data.ActionType);
// 		data.ActionParameter = parameter;
// 		data.Value.Main.ReelSymbols = vo.GameData.ReelSymbols[testNum];
// 		data.Value.Main.WinResults = vo.GameData.WinResults[testNum];
// 		if(data.ActionType == "freeslot" && testNum == 0){
// 			data.Value.Main.ReelSymbols = vo.GameData.ReelSymbols1[testNum];
// 			data.Value.Main.WinResults = vo.GameData.WinResults1[testNum];
// 		}
// 		if(data.ActionType == "uislot" && testNum == 0){
// 			data.Value.Main.ReelSymbols = vo.GameData.ReelSymbols1[testNum];
// 			data.Value.Main.WinResults = vo.GameData.WinResults1[testNum];
// 		}
// 		//得到盘面数据后遍历猴子情况 
// 		let harr: Array<any> = [];
// 		for (let i: number = 0; i < data.Value.Main.ReelSymbols.length; i++) {
// 			for (let j: number = 0; j < data.Value.Main.ReelSymbols[i].length; j++) {
// 				if (data.Value.Main.ReelSymbols[i][j] == 'C1') {
// 					harr.push({ X: i, Y: j });
// 				}
// 			}
// 		}

// 		if (parameter.Type == 'freeslot') {
// 			//首先减掉一次
// 			let actions: Array<any> = serverData.initData.Value.Actions;
// 			actions[0].remaining -= 1;
// 			if (actions[0].remaining <= 0) {
// 				actions.shift();
// 			}
// 				//首先判断有多少次
// 				if(harr.length >= 3){
// 					let c: number = 0;
// 				if (actions) {
// 					for (let i: number = 0; i < actions.length; i++) {
// 						c += actions[i].count;
// 					}
// 					if (c < 33) {
// 						serverData.initData.Value.Actions.push(
// 							{
// 								"RoundId": egret.getTimer(),
// 								"Bet": 1,
// 								"Denom": parameter.Denom,
// 								"type": "FreeSlot",
// 								"count": vo.GameData.TotalActionCount,
// 								"remaining": vo.GameData.TotalActionCount
// 							}
// 						);
// 						serverData.initData.Value.TotalActionCount += vo.GameData.TotalActionCount;
// 					}
// 					else {
// 						serverData.initData.Value.Actions.push(
// 							{
// 								"RoundId": egret.getTimer(),
// 								"Bet": 1,
// 								"Denom": parameter.Denom,
// 								"type": "FreeSlot",
// 								"count": 33 - c,
// 								"remaining": 33 - c
// 							}

// 						);
// 						serverData.initData.Value.TotalActionCount += 33 - c;

// 					}

// 				}
// 				else {
// 					serverData.initData.Value.Actions = [];
// 						serverData.initData.Value.Actions.push(
// 							{
// 								"RoundId": egret.getTimer(),
// 								"Bet": 1,
// 								"Denom": parameter.Denom,
// 								"type": "FreeSlot",
// 								"count": 15,
// 								"remaining": 15
// 							}
// 						);
// 						serverData.initData.Value.TotalActionCount += 15;

// 					}
// 				}
// 		}
// 		else if(parameter.Type == 'uislot'){
// 			//选择次数界面
// 				serverData.initData.Value.TotalActionCount = 0;
// 				// if(harr.length >= 3){
// 					serverData.initData.Value.Actions = [];
// 					serverData.initData.Value.Actions.push(
// 						{
// 							"RoundId": egret.getTimer(),
// 							"Bet": 1,
// 							"Denom": parameter.Denom,
// 							"type": "FreeSlot",
// 							"count": vo.GameData.TotalActionCount,
// 							"remaining": vo.GameData.TotalActionCount
// 						}
// 					)
// 					serverData.initData.Value.TotalActionCount += vo.GameData.TotalActionCount;
// 				// }
// 		}else if(parameter.Type == 'slot'){
// 			serverData.initData.Value.TotalActionCount = 0;
// 			if(harr.length >= 3){
// 					serverData.initData.Value.Actions = [];
// 					serverData.initData.Value.Actions.push(
// 						{
// 							"RoundId": egret.getTimer(),
// 							"Bet": 1,
// 							"Denom": parameter.Denom,
// 							"type": "uislot",
// 							"count": 0,
// 							"remaining": 0
// 						}
// 					)
// 					serverData.initData.Value.TotalActionCount += 0;
// 				}
// 		}
// 		data.Value.Actions = serverData.initData.Value.Actions;
// 		data.Value.TotalActionCount = serverData.initData.Value.TotalActionCount;

// 		let totalWin: number = 0;
// 		//计算总的钱
// 		for (let i: number = 0; i < data.Value.Main.WinResults.length; i++) {
// 			totalWin += data.Value.Main.WinResults[i].Win;
// 		}
// 		data.Value.Main.TotalWin = totalWin;
// 		data.Value.TotalWinDollar = totalWin / GameConfig.bili;
// 		//计算余额,需减去当前花费
// 		if (parameter.Type == "freeslot") {
// 			serverData.initData.Value.TokenInfo.Balance += data.Value.TotalWinDollar;
// 		}
// 		else {
// 			serverData.initData.Value.TokenInfo.Balance = serverData.initData.Value.TokenInfo.Balance + data.Value.Main.TotalWinDollar - parameter.Denom / GameConfig.bili;
// 		}
// 		data.Value.Balance = serverData.initData.Value.TokenInfo.Balance;

	
// 		return data;
// 	}

// 	public isallNum(n: number, arr: Array<number>): boolean {
// 		for (let i: number = 0; i < arr.length; i++) {
// 			if (n == arr[i]) {
// 				return true;
// 			}
// 		}
// 		return false;
// 	}

// 	public isAllW(arr: Array<any>): boolean {
// 		for (let i: number = 0; i < arr.length; i++) {
// 			let carr: Array<any> = arr[i];
// 			let s: number = carr[0];
// 			for (let j: number = 0; j < carr.length; j++) {
// 				if (s != carr[j]) {
// 					return false;
// 				}
// 			}
// 		}
// 		return true;
// 	}


// }

// /**
//  * 后端数据
//  */
// class serverData {
// 	/**
// 	 * 初始化数据
// 	 */
// 	public static initData = {
// 		"Action": "Initial",
// 		"ProcessTime": {
// 			"Spend": 0
// 		},
// 		"ScreenData": {
// 			"ScreenActions": [{
// 				"Status": "Initial"
// 			}]
// 		},
// 		"IsSuccess": true,
// 		"Marquees": "",
// 		"Message": "",
// 		"kick_rightnow": false,
// 		"Value": {
// 			"MC_Reset_At": "2019-04-24 10:11:02",
// 			"SpinConstraint": {
// 				"Lines": [1, 2, 3, 4, 5],
// 				"MinLineBet": 1,
// 				"MaxLineBet": 1000,
// 				"MinDenom": 1,
// 				"MaxDenom": 2147483647
// 			},
// 			"FreeLine": [],
// 			"JackpotPaytables": {
// 				"1": 279,
// 				"2": 558,
// 				"3": 837,
// 				"4": 1116
// 			},
// 			"Symbolstripes": {
// 				"Main": {
// 					"Stripes": [{
// 						"Symbols": ["M2", "TN", "C1", "JJ", "M4", "QQ", "M1", "WW", "M2", "C1", "M1", "AA", "M2", "TN", "M2", "KK"]
// 					}, {
// 						"Symbols": ["M2", "KK", "M2", "NI", "M1", "M3", "M1", "QQ", "M2", "JJ", "M1", "AA", "M2", "KK", "M2", "JJ"]
// 					}, {
// 						"Symbols": ["M2", "AA", "M2", "AA", "M5", "NI", "M1", "TN", "M2", "TN", "M1", "QQ", "C1", "KK", "M2", "KK"]
// 					}, {
// 						"Symbols": ["M2", "M4", "C1", "JJ", "M3", "NI", "M1", "QQ", "M2", "QQ", "M1", "WW", "M2", "C1", "M2", "KK"]
// 					}, {
// 						"Symbols": ["C1", "TN", "M2", "NI", "M1", "M4", "M1", "AA", "M2", "QQ", "M1", "M1", "C1", "KK", "M2", "JJ"]
// 					}]
// 				}
// 			},
// 			"Geninit": {
// 				"Main": {
// 					"ReelResults": [{
// 						"Idx": 0,
// 						"Pos": 0
// 					}, {
// 						"Idx": 1,
// 						"Pos": 0
// 					}, {
// 						"Idx": 2,
// 						"Pos": 4
// 					}, {
// 						"Idx": 3,
// 						"Pos": 8
// 					}, {
// 						"Idx": 4,
// 						"Pos": 12
// 					}],

// 					"ReelSymbols": [
// 						["M4", "M3", "M3"],
// 						["M4", "M4", "M3"],
// 						["M2", "M1", "M1"],
// 						["M2", "M2", "M1"],
// 						["M3", "M5", "C1"],
// 					],
// 					"StripesCode": "E0qVFEFC97AqoF0riEJANg",
// 					"TotalBet": 0,
// 					"TotalWin": 0,
// 					"WinResults": []
// 				}
// 			},
// 			"Denoms": [500, 1000, 2000, 5000, 10000, 20000, 50000, 100000, 200000, 250000, 500000, 1000000, 2000000],
// 			"Status": {
// 				"CurrentAction": "Initial",
// 				"CurrentActionType": "slot",
// 				"GameLevel": "1",
// 				"GameLevel_UpCount": "0"
// 			},
// 			"Actions": null,
// 			"TotalActionCount": 0,
// 			"LastRound": {
// 				"LastRoundId": "3e9e115565226945178",
// 				"LastRoundResult": {
// 					"RoundId": "3e9e115565226945178",
// 					"SubRoundId": 0,
// 					"SessionData": {
// 						"Bet": 10,
// 						"Multiply": 1
// 					},
// 					"TotalBet": 1000,
// 					"TotalWin": 0,
// 					"TotalBetDollar": 0.1,
// 					"TotalWinDollar": 0,
// 					"Denom": 10,
// 					"ScreenData": [],
// 					"Main": {
// 						"MathVersion": "triple_monkey",
// 						"TotalBet": 1000,
// 						"TotalWin": 0,
// 						"TotalBetDollar": 0.1,
// 						"TotalWinDollar": 0,
// 						"Denom": 10,
// 						"ReelSymbols": [
// 							["M1", "M4", "M3"],
// 							["M2", "M4", "M1"],
// 							["M2", "M1", "M2"],
// 							["M2", "M2", "M1"],
// 							["M3", "M5", "C1"],
// 						],
// 						"WinResults": []
						
// 					},
// 					"Status": {
// 						"CurrentAction": "Play",
// 						"CurrentActionType": "slot",
// 						"GameLevel": "1",
// 						"GameLevel_UpCount": "0"
// 					},
// 					"Actions": null,
// 				}
// 			},
// 			"TokenInfo": {
// 				"Balance": 199.2,
// 				"Currency": "CNY",
// 				"FrontEndDebug": 1
// 			}
// 		}
// 	};
	 
// 	/**
// 	 * 后端数据
// 	 */
// 	public static playData = {
// 		"Action": "Play",
// 		"ProcessTime": {
// 			"Spend": 0
// 		},
// 		"ScreenData": {},
// 		"IsSuccess": true,
// 		"Marquees": [],
// 		"Message": "",
// 		"kick_rightnow": false,
// 		"ActionType": 'data.Parameter.Action',
// 		"ActionParameter": 'data.Parameter',
// 		"Value": {
// 			"RoundId": "3e9e115565229947859->" + egret.getTimer(),
// 			"SubRoundId": 0,
// 			"SessionData": {
// 				"Bet": 0.05
// 			},
// 			"TotalWinDollar": 0.28,
// 			"Denom": 100,
// 			"ScreenData": [],
// 			"Main": {
// 				"MathVersion": "triple_monkey",
// 				"TotalBet": vo.GameData.betScoreArr[vo.GameData.betIndex] * vo.GameData.line*10000,
// 				"TotalWin": 2900,
// 				"TotalBetDollar": 500,
// 				"TotalWinDollar": 2600,
// 				"Denom": 10,
// 				"ReelSymbols": [],
// 				"WinResults": [],
// 				"ReelResults": [{
// 					"Idx": 0,
// 					"Pos": 0,//Math.floor(Math.random() * 14),
// 				}, {
// 					"Idx": 1,
// 					"Pos": 0,//Math.floor(Math.random() * 14),
// 				}, {
// 					"Idx": 2,
// 					"Pos": 0,//Math.floor(Math.random() * 14)
// 				}, {
// 					"Idx": 3,
// 					"Pos": 0,//Math.floor(Math.random() * 14),
// 				}, {
// 					"Idx": 4,
// 					"Pos": 0,//Math.floor(Math.random() * 14),
// 				}]
// 			},
// 			"TotalActionCount": 0,
// 			"Actions": null,
// 			"Balance": 99,
// 		}
// 	};
// }