class KeyBoardManager extends egret.EventDispatcher {
	private static _instance: KeyBoardManager;
	private kb: KeyBoard;
	public constructor() {
		super();
	}

	public static getInstance(): KeyBoardManager {
		if (!this._instance) {
			this._instance = new KeyBoardManager();
		}
		return this._instance;
	}

	public init(): void {
		this.kb = new KeyBoard();
		this.kb.addEventListener(KeyBoard.onkeydown, this.onkeydown, this);
	}
	public curtime:number=egret.getTimer();
	private onkeydown(event) {
		//console.log(event.data);
		// //监听Esc键被按下事件
		// if(this.kb.isContain(event.data,KeyBoard.Esc)){
		//     console.log(event.data);
		// }

		// //监听空格键被按下事件
		let ui:MainScenceUI=core.UIManager.getUI(core.UIConst.MainScenceUI);
		if(!ui) return;
		//键盘是否开启
		
		if(this.kb.isContain(event.data,KeyBoard.SPACE)){
			if(GameConfig.emptyPlay && egret.getTimer()-this.curtime>400){
				this.curtime=egret.getTimer();
				if(ui.startBtn.visible==true&&ui.startBtn.enabled)
				{
						SoundManager.getInstance().playEffect(SoundConst.STARTBTN);
						GameManager.getInstance().startGame();
				}

				if(ui.stopBtn.visible==true)
				{
					SoundManager.getInstance().playEffect(SoundConst.STOPBTN);
					GameManager.getInstance().stopGame();
				}
			}
		}

		// //监听Esc和F1键同时被按下事件
		// if(this.kb.isContain(event.data,KeyBoard.Esc) && this.kb.isContain(event.data,KeyBoard.F1)){
		//     console.log(event.data);
		// }
		
		


	}
}