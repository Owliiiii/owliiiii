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
		/**免费游戏旋转的次数 */
		public static freePlayCount: number = 0;

		/**
		 * 当前老虎机数据
		 */
		public static slotInfo: SlotInfo;

		/**
		 * 赔付表
		 */
		public static payData: Array<any> = [];
        /**
		 * 下注数组
		 */
		public static betScoreArr: Array<any> = [0.01, 0.05, 0.10, 0.25, 0.40, 0.50, 0.80, 1.00, 1.25, 2.50, 5.00, 8.00, 10.00, 20.00];
		/**
		 * 投注索引
		 */
		public static betIndex: number = 0;


		/**
		 * 线数
		 */
		public static line: number = 1;

		/**
		 * 线配置
		 */
		public static lineObj: any = {
			1: [1, 1, 1, 1, 1],
			2: [0, 0, 0, 0, 0],
			3: [2, 2, 2, 2, 2],
			4: [0, 1, 2, 1, 0],
			5: [2, 1, 0, 1, 2],
			6: [0, 0, 1, 0, 0],
			7: [2, 2, 1, 2, 2],
			8: [1, 0, 0, 0, 1],
			9: [1, 2, 2, 2, 1]
		}

		/**玩家进入免费游戏时候获取到的界面布局（） */
		public static freeSymbols: Array<any> = [];

		/**玩家进入到免费游戏时候，中的奖金（当免费游戏中再次中免费游戏后，结算界面的游戏奖金显示） */
		public static freeGold : number = 0;

		/**
		 * 滚动列表
		 */
		public static reelArr: Array<Array<any>> = [
			['M4', 'WW', 'M3', 'M5', 'M0', 'M3', 'M2', 'M3', 'M4', 'M1', 'M1', 'M2', 'WW', 'M1'],
			['M4', 'M1', 'M3', 'M1', 'M1', 'M2', 'M6', 'M4', 'M1', 'M2', 'M3', 'M4', 'M4', 'M2'],
			['M4', 'WW', 'M2', 'M3', 'M1', 'M0', 'M3', 'M2', 'WW', 'WW', 'M3', 'M1', 'WW', 'M3'],
		];

		/**免费游戏标志出现，在旋转结束时候停止 */
		public static rollFreeTitle: Array<any> = [];

		/**免费游戏进入的时候出现的闪烁集合 */
		public static freeGameAC : Array<any> = [];

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


