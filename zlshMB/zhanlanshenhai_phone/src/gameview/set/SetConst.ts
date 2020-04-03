class SetConst {
	public static TOP_SHOW: boolean = false;
	public static RIGHT_SHOW: boolean = false;
	public static BETSET_SHOW: boolean = false;
	public static AUTO_SHOW: boolean = false;

	public static LONG_TOUCH: boolean = false;

	public static REWARD_SHOW: boolean = false;
	public static REWARD_SMALLSHOW: boolean = false;

	/**
	 * 是否手动中断自动完成
	 */
	public static handStop: boolean = false;
	/**
	 * 是否能中断游戏
	 */
	public static isCanStopGame: boolean = false;

	/**
	 * 快速是否提示过
	 */
	public static QUIKTIP_SHOW: boolean = false;

    /**
	 * 0代表右手 1代表左手
	 */
	public static MODLE: number = 0;
	/**
	 * 快速模式
	 */
	public static SPEED_PLAY: boolean = false;
	/**
	 * 自动状态
	 */
	public static AUTO: boolean = false;

	/**
	 * 自动次数
	 */
	public static AUTO_COUNT: number = 0;
	/**
	 * 自动设置数组
	 */
	public static AUTO_COUNT_ARR: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90, 99, 9999];//9999表示直到环节
}