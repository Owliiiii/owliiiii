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
		this.kb.addEventListener(KeyBoard.onkeyup, this.onkeydown, this);
	}

	private onkeydown(event) {
		//console.log(event.data);
		// //监听Esc键被按下事件
		// if(this.kb.isContain(event.data,KeyBoard.Esc)){
		//     console.log(event.data);
		// }

		// //监听空格键被按下事件
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		if (!ui) return;
		if (this.kb.isContain(event.data, KeyBoard.SPACE)) {
			let tui: StipsUI = core.UIManager.getUI(core.UIConst.StipsUI);
			let sui: SetUI = core.UIManager.getUI(core.UIConst.SetUI);
			let hui: HelpUI = core.UIManager.getUI(core.UIConst.HelpUI);
			let dui: HelpDesUI = core.UIManager.getUI(core.UIConst.HelpDesUI);
			if (tui && tui.parent) return;
			if (sui && sui.parent) return;
			if (hui && hui.parent) return;
			if (dui && dui.parent) return;
			if (ui.startBtn.visible == true && ui.startBtn.enabled) {
				ui.hideWin();
				GameManager.getInstance().startGame();
				
			}

			if (ui.stopBtn.visible == true && ui.stopBtn.enabled) {
				GameManager.getInstance().stopGame();
			}

		}
		// //监听Esc和F1键同时被按下事件
		// if(this.kb.isContain(event.data,KeyBoard.Esc) && this.kb.isContain(event.data,KeyBoard.F1)){
		//     console.log(event.data);
		// }




	}
}