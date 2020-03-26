class SetEvent extends egret.Event {
	public static SET_MODLE: string = 'SET_MODLE';
	public static SET_OR_CHANGE: string = 'SET_OR_CHANGE';
	public static SET_STATE_CHANGE: string = 'SET_STATE_CHANGE';
	/**
	 * 开始游戏
	 */
	public static SET_START: string = 'SET_START';
	/**
 	* 停止游戏
 	*/
	public static SET_STOP: string = 'SET_STOP';
	public static SET_AUTO_CHANGED: string = 'SET_AUTO_CHANGED';
	public static SET_SPEED_CHANGED: string = 'SET_SPEED_CHANGED';
	public static SET_BET_CHANGE: string = 'SET_BET_CHANGE';
	public static SET_BALANCE_CHANGE: string = 'SET_BALANCE_CHANGE';
	public static SET_MUSIC_CHANGE: string = 'SET_MUSIC_CHANGE';
	public static SET_LINE_CHANGE: string = 'SET_LINE_CHANGE';

	public static SET_EXTRA_BONUS: string = 'SET_EXTRA_BONUS';
	public static BONUS_CLICKIDX: string = 'BONUS_CLICKIDX';
	public static TOOLS_SHOW: string = 'TOOLS_SHOW';
	public static EXTRA_BONUS_SHOWBONUS: string = 'EXTRA_BONUS_SHOWBONUS';
	public static EXTRA_BONUS_OVER: string = 'EXTRA_BONUS_OVER';

	public constructor(type: string, bubbles?: boolean, cancelable?: boolean, data?: any) {
		super(type, bubbles, cancelable, data);
	}
}