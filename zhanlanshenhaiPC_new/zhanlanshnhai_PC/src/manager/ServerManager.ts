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
				dData = JSON.parse(JSON.stringify(serverData.initData));
				break;
			case 'Play':
				dData = this.resetPlay(data);
				break;
		}

		if (GameConfig.gameModle == GameType.GameModule.falseModle) {
			core.NotifyManager.getInstance().sendNotify(data.Parameter.Action, dData);
		}
		else {
			sockets.SocketMananger.getInstance().sendMessage(data);
		}
	}

	/**
	 * 重置返回play
	 */
	public resetPlay(cmdData: any): any {
		let parameter: any = cmdData.Parameter;
		let data = JSON.parse(JSON.stringify(serverData.playData));
		data.ActionType = parameter.Type;
		data.ActionParameter = parameter;
		//随机结果
		data.Value.Main.ReelResults = [{
			"Idx": 0,
			"Pos": Math.floor(Math.random() * 14),
		}, {
			"Idx": 1,
			"Pos": Math.floor(Math.random() * 14),
		}, {
			"Idx": 2,
			"Pos": Math.floor(Math.random() * 14)
		}];

		//根据结果得到重置盘面数据
		let resultArr: Array<Array<any>> = [[], [], []];
		//先得到盘面数据
		let iarr: Array<any> = serverData.initData.Value.Symbolstripes.Main.Stripes;
		for (let i: number = 0; i < iarr.length; i++) {
			let sarr: Array<any> = iarr[i].Symbols;
			let pos: number = data.Value.Main.ReelResults[i].Pos + 1 > sarr.length - 1 ? 0 : data.Value.Main.ReelResults[i].Pos + 1;
			for (let j: number = 0; j < Reel.ShowNum; j++) {
				resultArr[i].push(sarr[(pos + j) % sarr.length]);
			}
		}

		let WinResults: Array<any> = [];
		if (resultArr[0][1] == 'M0' && resultArr[1][1] == 'M0' && resultArr[2][1] == 'M0') {
			WinResults.push({
				"Type": "Line",
				"Symbol": "M0",
				"SymbolCount": 3,
				"Positions": [{
					"X": 0,
					"Y": 1
				}, {
					"X": 1,
					"Y": 1
				}, {
					"X": 2,
					"Y": 1
				}],
				"Data": {
					"Line": 2,
					"PayType": "RL"
				},
				"Reward": {
					"BetMultiplier": 88
				},
				"Bet": 1,
				"Win": 88 * parameter.Denom,
				"Multipliers": [100, 1]
			});
		}
		else  if(resultArr[0][1] == 'M1' && resultArr[1][1] == 'M1' && resultArr[2][1] == 'M1')
		{
             WinResults.push({
				"Type": "Line",
				"Symbol": "M1",
				"SymbolCount": 3,
				"Positions": [{
					"X": 0,
					"Y": 1
				}, {
					"X": 1,
					"Y": 1
				}, {
					"X": 2,
					"Y": 1
				}],
				"Data": {
					"Line": 2,
					"PayType": "RL"
				},
				"Reward": {
					"BetMultiplier": 58
				},
				"Bet": 1,
				"Win": 58 * parameter.Denom,
				"Multipliers": [100, 1]
			});
		}
		else if(resultArr[0][1] == 'M2' && resultArr[1][1] == 'M2' && resultArr[2][1] == 'M2')
		{
           WinResults.push({
				"Type": "Line",
				"Symbol": "M2",
				"SymbolCount": 3,
				"Positions": [{
					"X": 0,
					"Y": 1
				}, {
					"X": 1,
					"Y": 1
				}, {
					"X": 2,
					"Y": 1
				}],
				"Data": {
					"Line": 2,
					"PayType": "RL"
				},
				"Reward": {
					"BetMultiplier": 28
				},
				"Bet": 1,
				"Win": 28 * parameter.Denom,
				"Multipliers": [100, 1]
			});
		}
		else if(resultArr[0][1] != 'BN' && resultArr[1][1] != 'BN' && resultArr[2][1] != 'BN')
		{
             WinResults.push({
				"Type": "all",
				"Symbol": "Random",
				"SymbolCount": 3,
				"Positions": [{
					"X": 0,
					"Y": 1
				}, {
					"X": 1,
					"Y": 1
				}, {
					"X": 2,
					"Y": 1
				}],
				"Data": {
					"Line": 2,
					"PayType": "RL"
				},
				"Reward": {
					"BetMultiplier": 8
				},
				"Bet": 1,
				"Win": 8 * parameter.Denom,
				"Multipliers": [100, 1]
			});
		}
		else
		{
          
		}

		data.Value.Main.WinResults = WinResults;
		data.Value.Main.ReelSymbols = resultArr;
		let totalWin: number = 0;
		//计算总的钱
		for (let i: number = 0; i < WinResults.length; i++) {
			totalWin += WinResults[i].Win;
		}
		data.Value.Main.TotalWin = totalWin;
		data.Value.Main.TotalWinDollar = totalWin / GameConfig.bili;
		serverData.initData.Value.TokenInfo.Balance = serverData.initData.Value.TokenInfo.Balance + data.Value.Main.TotalWinDollar - parameter.Denom / GameConfig.bili;
		data.Value.Balance = serverData.initData.Value.TokenInfo.Balance;
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
						"Symbols": ["M2", "BN", "M2", "BN", "M0", "BN", "M1", "BN", "M2", "BN", "M1", "BN", "M2", "BN", "M2", "BN"]
					}, {
						"Symbols": ["M2", "BN", "M2", "BN", "M0", "BN", "M1", "BN", "M2", "BN", "M1", "BN", "M2", "BN", "M2", "BN"]
					}, {
						"Symbols": ["M2", "BN", "M2", "BN", "M0", "BN", "M1", "BN", "M2", "BN", "M1", "BN", "M2", "BN", "M2", "BN"]
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
					}],

					"ReelSymbols": [
						["WW", "WW", "WW"],
						["WW", "WW", "WW"],
						["WW", "WW", "WW"],
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
							["M1", "M0", "M0"],
							["M2", "M4", "M1"],
							["M2", "M1", "M2"]
						],
						"WinResults": []
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
		"ActionType": "freeslot",
		"ActionParameter": {
			"Action": "Play",
			"Type": "freeslot",
			"Line": 5,
			"Bet": 1,
			"Denom": 100,
			"SessionData": {
				"Bet": 0.05
			}
		},
		"Value": {
			"RoundId": "3e9e115565229947859",
			"SubRoundId": 0,
			"SessionData": {
				"Bet": 0.05
			},
			"TotalBet": 500,
			"TotalWin": 50000,
			"TotalBetDollar": 0.45,
			"TotalWinDollar": 0.15,
			"Denom": 10,
			"ScreenData": [],
			"FreeLine": [],
			"Main": {
				"MathVersion": "triple_monkey",
				"TotalBet": 500,
				"TotalWin": 50000,
				"TotalBetDollar": 0.05,
				"TotalWinDollar": 5,
				"Denom": 10,
				"ReelSymbols": [
					["M0", "M0", "M3"],
					["M1", "M2", "M3"],
					["M3", "M2", "M1"]
				],
				"WinResults": [{
					"Type": "Line",
					"Symbol": "M2",
					"SymbolCount": 3,
					"Positions": [{
						"X": 0,
						"Y": 1
					}, {
						"X": 1,
						"Y": 1
					}, {
						"X": 2,
						"Y": 1
					}],
					"Data": {
						"Line": 2,
						"PayType": "RL"
					},
					"Bet": 500,
					"Win": 50000,
					"Multipliers": [100, 1]
				}],
				"ReelResults": [{
					"Idx": 0,
					"Pos": 4
				}, {
					"Idx": 1,
					"Pos": 16
				}, {
					"Idx": 2,
					"Pos": 28
				}]
			},
			"Status": {
				"CurrentAction": "Play",
				"CurrentActionType": "freeslot"
			},
			"Actions": [],
			"Balance": 180583851.93
		}
	};
}