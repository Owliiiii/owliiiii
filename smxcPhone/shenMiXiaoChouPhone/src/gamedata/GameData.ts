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
		public static initData:any;
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
		public static autoPlayCount:number=0;
		
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
			"M0": {
				"3": 50,
			},
			"M1": {
				"3": 40,
			},
			"M2": {
				"3": 30,
			},
			"M3": {
				"3": 10,
			},
			"M4": {
				"3": 10,
			}
		};
        /**
		 * 下注数组
		 */
		public static betScoreArr:Array<any>=[1.00,2.00,3.00,4.00,5.00,10.00,15.00,20.00,25.00,30.00,35.00,40.00,45.00,50.00,75.00,100.00,150.00,200.00,250.00,300.00,350.00,400.00,450,500.00,600.00,700.00,800.00,900.00,1000.00];
		//public static betScoreArr:Array<any>=['1.00','2.00','3.00','4.00','5.00','10.00','15.00','20.00','25.00','30.00','35.00','40.00','45.00','50.00','75.00','100.00','150.00','200.00','250.00','300.00','350.00','400.00','450.00','500.00','600.00','700.00','800.00','900.00','1000.00'];
		/**
		 * 投注索引
		 */
		public static betIndex:number=0;
		/**
		 * 5线位置
		 */
		public static lineArr: any = {
			'1': [1, 1, 1],
			'2': [0, 0, 0],
			'3': [2, 2, 2],
			'4': [0, 1, 2],
			'5': [2, 1, 0]
		};
        /**
		 * 线数
		 */
		public static lineNum:number=5;
		/**
		 * 滚动列表
		 */
		public static reelArr: Array<Array<any>> = [
			['M4', 'M2', 'M3', 'M4', 'M0', 'M3', 'M2', 'M3', 'M4', 'M1', 'M1', 'M2', 'M4', 'M1'],
			['M4', 'M1', 'M3', 'M1', 'M1', 'M2', 'M0', 'M4', 'M1', 'M2', 'M3', 'M4', 'M4', 'M2'],
			['M4', 'M2', 'M2', 'M3', 'M1', 'M0', 'M3', 'M2', 'M0', 'M2', 'M3', 'M1', 'M4', 'M3'],
		];

		/**
		 * 初始化滚轮位置
		 */
		public static rellInitArr: Array<any> = [
			{ "Idx": 0, "Pos": 0 },
			{ "Idx": 1, "Pos": 0 },
			{ "Idx": 2, "Pos": 0},
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
		 * 目标滚轮位置
		 */
		public resultArr: Array<any> = [
			{ "Idx": 0, "Pos": 11 },
			{ "Idx": 1, "Pos": 11 },
			{ "Idx": 2, "Pos": 11 },
		];
		public indexArr: Array<number> = [];
        /**
		 * 总获胜
		 */
		public allwin:number=0;
		public readData(obj: any) {

		}

		/**
		 * 读取开始游戏返回数据
		 */
		public readPlayAction(data: any): void {

		}

	}
}


