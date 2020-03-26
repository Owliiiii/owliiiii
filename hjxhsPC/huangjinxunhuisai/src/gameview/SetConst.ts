class SetConst {
	public static TOP_SHOW:boolean=false;
	public static RIGHT_SHOW:boolean=false;
	public static BETSET_SHOW:boolean=false;
    public static AUTO_SHOW:boolean=false;

	public static LONG_TOUCH:boolean=false;

	public static REWARD_SHOW:boolean=false;

	/**
	 * 是否手动中断自动完成
	 */
	public static handStop:boolean=false;
    
	/**
	 * 快速是否提示过
	 */
	public static QUIKTIP_SHOW:boolean=false;

    /**
	 * 0代表右手 1代表左手
	 */
	public static MODLE:number=0;
	/**
	 * 快速模式
	 */
	public static SPEED_PLAY:boolean=false;
	/**
	 * 自动状态
	 */
	public static AUTO:boolean=false;

	/**
	 * 自动次数
	 */
	public static AUTO_COUNT:number=0;
	/**
	 * 自动设置数组
	 */
	public static AUTO_COUNT_ARR:Array<number>=[10,20,30,40,50,60,70,80,90,99,100];

	/**横板的时候，加注面板时候是收起状态,true为收起 */
	public static BETSATE : boolean = false;

	/**是否中了额外游戏的奖励 */
	public static isWin : boolean = false;
	
	/**游戏点击开始之后，到游戏结束前的开关，true为重在 游戏中，只有为false时候才可以进行操作 */
	public static isGameStart : boolean = false;

		/**当游戏点及开始之后，收到服务器数据返回来消息的之时，设置为true，
	 * 当该变量为true的时候才可以进行点击停止的操作，当点击立即停止之后，马上设置为false，
	 * 当该变量为true的时候才真正的进入游戏倒计时，之前的都不进入统计，当游戏停止的时候，设置为false */
	public static isCanStop : boolean = false;

}