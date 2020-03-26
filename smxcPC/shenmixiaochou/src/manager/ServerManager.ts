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
// 			console.log('返回数据', dData);
// 		}
// 		else {
// 			sockets.SocketMananger.getInstance().sendMessage(data);
// 		}
// 	}

// 	/**
// 	 * 重置返回play
// 	 */
// 	public isOne:boolean = true;
// 	public resetPlay(cmdData: any): any {
// 		let parameter: any = cmdData.Parameter;
// 		let data = JSON.parse(JSON.stringify(serverData.playData));
// 		data.ActionType = parameter.Type;
// 		data.ActionParameter = parameter;

// 		//随机结果
// 		data.Value.Main.ReelResults = [{
// 			"Idx": 0,
// 			"Pos": Math.floor(Math.random() * 14),
// 		}, {
// 			"Idx": 1,
// 			"Pos": Math.floor(Math.random() * 14),
// 		}, {
// 			"Idx": 2,
// 			"Pos": Math.floor(Math.random() * 14)
// 		}];
	

// 		//根据结果得到重置盘面数据
// 		let resultArr: Array<Array<any>> = [[], [], []];
// 		//先得到盘面数据
// 		let iarr: Array<any> = serverData.initData.Value.Symbolstripes.Main.Stripes;
// 		for (let i: number = 0; i < iarr.length; i++) {
// 			let sarr: Array<any> = iarr[i].Symbols;
// 			let pos: number = data.Value.Main.ReelResults[i].Pos + 1 > sarr.length - 1 ? 0 : data.Value.Main.ReelResults[i].Pos + 1;
// 			for (let j: number = 0; j < Reel.ShowNum; j++) {
// 				resultArr[i].push(sarr[(pos + j) % sarr.length]);
// 			}
// 		}
// 		// if(this.isOne){
// 			resultArr=[['M1','C1','M0'],['M1','C1','M2'],['M3','M1','M0']];
// 		// 	this.isOne = false;
// 		// }
		
// 		data.Value.Main.ReelSymbols = resultArr;
// 		//根据结果计算winresult
// 		let scoreArr: Array<any> = [];
// 		//得到盘面数据后遍历中奖线排除猴子情况 
// 		for (var key in vo.GameData.lineArr) {
// 			let dataarr: Array<any> = vo.GameData.lineArr[key];
// 			let s: any;
// 			for (let i: number = 0; i < resultArr.length; i++) {
// 				//排除猴子
// 				if (resultArr[i][dataarr[i]].indexOf('C1') != -1) break;
// 				if (i == 0) {
// 					s = resultArr[i][dataarr[i]];
// 				}
// 				else {
// 					if (s != resultArr[i][dataarr[i]]) {
// 						break;
// 					}
// 				}

// 				if (i == resultArr.length - 1)//中奖
// 				{
// 					scoreArr.push({
// 						'Type': 'Line',
// 						'Symbol': resultArr[i][dataarr[i]],
// 						"SymbolCount": 3,
// 						"Positions": [{
// 							"X": 0,
// 							"Y": dataarr[0]
// 						}, {
// 							"X": 1,
// 							"Y": dataarr[1]
// 						}, {
// 							"X": 2,
// 							"Y": dataarr[2]
// 						}],
// 						"Data": {
// 							"Line": parseInt(key),
// 							"PayType": "RL"
// 						},
// 						"Bet": 1,
// 						"Win": vo.GameData.payData[s][resultArr.length + ''] * parameter.Denom/5,
// 						"Multipliers": [100, 1]
// 					});
// 				}
// 			}
// 		}

// 		//得到盘面数据后遍历猴子情况 
// 		let harr: Array<any> = [];
// 		for (let i: number = 0; i < resultArr.length; i++) {
// 			for (let j: number = 0; j < resultArr[i].length; j++) {
// 				if (resultArr[i][j] == 'C1') {
// 					harr.push({ X: i, Y: j });
// 				}
// 			}
// 		}

// 		let winhouziData: any = {
// 			'Type': 'Houzi',
// 			'Symbol': 'C1',
// 			"SymbolCount": harr.length,
// 			"Positions": harr,
// 			"Data": {
// 				"Line": 0,
// 				"PayType": "HL"
// 			},
// 			"Bet": 1,
// 			"Win": 0,
// 			'Count': 1,
// 			"Multipliers": [100, 1]
// 		}
// 		if (parameter.Type == 'freeslot') {
// 			//首先减掉一次
// 			let actions: Array<any> = serverData.initData.Value.Actions;
// 			actions[0].remaining -= 1;
// 			if (actions[0].remaining <= 0) {
// 				actions.shift();
// 			}

// 			if (harr.length == 2) {
// 				winhouziData.Count = Math.ceil(Math.random() * 100);
// 				winhouziData.Win = winhouziData.Count * parameter.Denom;
// 				scoreArr.unshift(winhouziData);
// 			}
// 			else if (harr.length >= 3) {
// 				//首先判断有多少次
// 				let c: number = 0;
// 				if (actions) {
// 					for (let i: number = 0; i < actions.length; i++) {
// 						c += actions[i].count;
// 					}
// 					if (c < 40) {
// 						serverData.initData.Value.Actions.push(
// 							{
// 								"RoundId": egret.getTimer(),
// 								"Bet": 1,
// 								"Denom": parameter.Denom,
// 								"type": "FreeSlot",
// 								"count": 10,
// 								"remaining": 10
// 							}
// 						);
// 						serverData.initData.Value.TotalActionCount += 10;
// 					}
// 					else {
// 						serverData.initData.Value.Actions.push(
// 							{
// 								"RoundId": egret.getTimer(),
// 								"Bet": 1,
// 								"Denom": parameter.Denom,
// 								"type": "FreeSlot",
// 								"count": 50 - c,
// 								"remaining": 50 - c
// 							}

// 						);
// 						serverData.initData.Value.TotalActionCount += 50 - c;

// 					}

// 				}
// 				else {
// 					serverData.initData.Value.Actions = [];
// 					serverData.initData.Value.Actions.push(
// 						{
// 							"RoundId": egret.getTimer(),
// 							"Bet": 1,
// 							"Denom": parameter.Denom,
// 							"type": "FreeSlot",
// 							"count": 10,
// 							"remaining": 10
// 						}
// 					);
// 					serverData.initData.Value.TotalActionCount += 10;

// 				}
// 				winhouziData.Count = Math.ceil(Math.random() * 100);
// 				winhouziData.Win = winhouziData.Count * parameter.Denom;
// 				scoreArr.unshift(winhouziData);
// 			}
// 		}
// 		else {
// 			serverData.initData.Value.TotalActionCount = 0;
// 			if (harr.length >= 3) {
// 				serverData.initData.Value.Actions = [];
// 				serverData.initData.Value.Actions.push(
// 					{
// 						"RoundId": egret.getTimer(),
// 						"Bet": 1,
// 						"Denom": parameter.Denom,
// 						"type": "FreeSlot",
// 						"count": 10,
// 						"remaining": 10
// 					}
// 				)

// 				serverData.initData.Value.TotalActionCount += 10;
// 				scoreArr.unshift(winhouziData);
// 			}
// 		}

// 		data.Value.Actions = serverData.initData.Value.Actions;
// 		data.Value.TotalActionCount = serverData.initData.Value.TotalActionCount;
// 		data.Value.Main.WinResults = scoreArr;

// 		let totalWin: number = 0;
// 		//计算总的钱
// 		for (let i: number = 0; i < scoreArr.length; i++) {
// 			totalWin += scoreArr[i].Win;
// 		}
// 		data.Value.Main.TotalWin = totalWin;
// 		data.Value.Main.TotalWinDollar = totalWin / GameConfig.bili;
// 		//计算余额,需减去当前花费
// 		if (parameter.Type == 'freeslot') {
// 			serverData.initData.Value.TokenInfo.Balance += data.Value.Main.TotalWinDollar;
// 		}
// 		else {
// 			serverData.initData.Value.TokenInfo.Balance = serverData.initData.Value.TokenInfo.Balance + data.Value.Main.TotalWinDollar - parameter.Denom / GameConfig.bili;
// 		}
// 		data.Value.Balance = serverData.initData.Value.TokenInfo.Balance;

// 		return data;
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
// 			"JackpotPaytables": {
// 				"1": 279,
// 				"2": 558,
// 				"3": 837,
// 				"4": 1116
// 			},
// 			"Symbolstripes": {
// 				"Main": {
// 					"Stripes": [{
// 						"Symbols": ['M4', 'M3', 'M3', 'M4', 'C1', 'M3', 'C1', 'M3', 'M4', 'C1', 'M1', 'M3', 'M4', 'M4']
// 					}, {
// 						"Symbols": ['M4', 'M3', 'M4', 'M3', 'M1', 'M3', 'M0', 'M4', 'M3', 'M3', 'M3', 'C1', 'M4', 'M4']
// 					}, {
// 						"Symbols": ['M4', 'C1', 'M3', 'M3', 'M3', 'M3', 'M3', 'M2', 'M3', 'M4', 'M3', 'M4', 'M3', 'M4']
// 					}]
// 				}
// 			},
// 			"Geninit": {
// 				"Main": {
// 					"ReelResults": [{
// 						"Idx": 0,
// 						"Pos": 11
// 					}, {
// 						"Idx": 1,
// 						"Pos": 11
// 					}, {
// 						"Idx": 2,
// 						"Pos": 11
// 					}],
// 					"ReelSymbols": [
// 						["M7", "C1", "M8"],
// 						["M3", "M7", "MT"],
// 						["M8", "M5", "M6"],
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
// 				"CurrentActionType": null,
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
// 						"MathVersion": "match_candy_party",
// 						"TotalBet": 1000,
// 						"TotalWin": 0,
// 						"TotalBetDollar": 0.1,
// 						"TotalWinDollar": 0,
// 						"Denom": 10,
// 						"ReelSymbols": [
// 							["M1", "M0", "M0", "M0"],
// 							["M2", "M4", "M1", "M1"],
// 							["M2", "M1", "M2", "M0"],
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
// 				"Balance": 100.25,
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
// 			"TotalBet": 500,
// 			"TotalWin": 50000,
// 			"TotalBetDollar": 0.45,
// 			"TotalWinDollar": 0.15,
// 			"Denom": 10,
// 			"ScreenData": [],
// 			"Main": {
// 				"MathVersion": "triple_monkey",
// 				"TotalBet": 500,
// 				"TotalWin": 50000,
// 				"TotalBetDollar": 0.05,
// 				"TotalWinDollar": 5,
// 				"Denom": 10,
// 				"ReelSymbols": [
// 					["C1", "M1", "C1"],
// 					["C1", "M2", "M3"],
// 					["C1", "M2", "M1"]
// 				],
// 				"WinResults": [],
// 				"ReelResults": [{
// 					"Idx": 0,
// 					"Pos": Math.floor(Math.random() * 14),
// 				}, {
// 					"Idx": 1,
// 					"Pos": Math.floor(Math.random() * 14),
// 				}, {
// 					"Idx": 2,
// 					"Pos": Math.floor(Math.random() * 14)
// 				}]
// 			},
// 			"TotalActionCount": 0,
// 			"Actions": null,
// 			"Balance": 10
// 		}
// 	};
// }