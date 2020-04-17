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
	
		this.kb.addEventListener(KeyBoard.onkeyup, this.onkeyup, this);
	}

	private onkeyup(event) {
		//console.log(event.data);
		// //监听Esc键被按下事件
		// if(this.kb.isContain(event.data,KeyBoard.Esc)){
		//     console.log(event.data);
		// } 
   
		//监听空格键被按下事件
		//当出现各种弹窗的时候键盘控制要关闭，否者打开
		if(this.kb.isContain(event.data,KeyBoard.SPACE)){
		    if(GameConfig.emptyPlay&&egret.getTimer()-this.curtime>400)
			{
				let ui:MainScenceUI=core.UIManager.getUI(core.UIConst.MainScenceUI);
				if(egret.getTimer()-this.curtime>400){
					this.curtime=egret.getTimer();
					if (GameManager.getInstance().gameState == GameType.GameState.STOP) {
						if(ui.playBtn.enabled && ui.playBtn.label == '旋转' && !ui.gameScence.group.visible){
								ui.hideAllWin();
								GameManager.getInstance().startGame();
							}	
					}
					else {
						if(ui.playBtn.enabled && ui.playBtn.label == '停止'){
						// console.log("ui.gameScence.group.visible====" + ui.gameScence.group.visible);
						if(!ui.gameScence.group.visible){
								egret.setTimeout(()=>{
									GameManager.getInstance().stopGame();
								},this,100);
							}
						}
					}
					
				}else{
					console.log("太快了太快了太快了");
				}
			}
		}

		// //监听Esc和F1键同时被按下事件
		// if(this.kb.isContain(event.data,KeyBoard.Esc) && this.kb.isContain(event.data,KeyBoard.F1)){
		//     console.log(event.data);
		// }
		
		


	}


	public curtime:number=egret.getTimer();
}