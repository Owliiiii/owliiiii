declare function popstr(str);
class HelpDesUI extends core.BaseUI {
	public bg: eui.Image;
	public closeBtn: MouseButton;
	public scroll: SScroll;
	public contentBg: eui.Image;
	public mainGroup: eui.Group;
	public myScrollBar: MyScrollBar;
	public constructor() {
		super();
		this.skinName = HelpDesSkin;
		window.addEventListener('message', (evt) => {
			console.log("evt.data === ");
			if (evt.data != "closedesui") return;
			core.UIManager.closeUI(core.UIConst.HelpDesUI);
			if (this.webview) {
				this.webview.destroy();
			}

		});

		// let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		// this.webview = ui.webView;

	}

	public onAdd(): void {
		super.onAdd();
		this.onResize();
		if (!this.webview) {
			popstr('loadshow');
		}
		if (!this.webview) {
			this.webview = new WebView('./help.html');
			//this.webView = new WebView('http://www.baidu.com');
		}
		this.registerEvent(this.closeBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
		//this.registerEvent(this.myScrollBar, egret.Event.CHANGE, this.onScrollBarChange, this);
		//this.registerEvent(this.scroll, egret.Event.CHANGE, this.onScrollChange, this);
		this.registerEvent(this, egret.Event.ENTER_FRAME, this.onFrame, this);
		//this.scroll.verticalScrollBar=new MyScrollBar();
		// this.visible = false;
		NetUI.getInstance().showNetting();
		egret.setTimeout(() => {
			NetUI.getInstance().hideNetting();
			this.visible = true;
		}, this, 1000);
		this.onResize();
		this.webview.show();

	}

	public onFrame(): void {
		if (this.webview) {
			this.webview.width = window.innerWidth < GameConfig.MAX_WIDTH ? window.innerWidth * window.devicePixelRatio : GameConfig.MAX_WIDTH;
			this.webview.x = this.mainGroup.x * window.devicePixelRatio;
			this.webview.height = this.bg.height * this.bg.scaleY * window.devicePixelRatio;
			this.webview.y = this.bg.y * window.devicePixelRatio;
			if (window.innerWidth < 768) {
				this.webview.x = 0;
				this.webview.width = 768 * window.devicePixelRatio;
			}
		}
	}

	public webview: WebView;

	public onResize(): void {
		var scaleX = (window.innerWidth / GameConfig.DES_WIDTH) || 0;
		var scaleY = (window.innerHeight > GameConfig.J_HEIGHT ? GameConfig.J_HEIGHT / GameConfig.DES_HEIGHT : window.innerHeight / GameConfig.DES_HEIGHT) || 0;
		let maxh: number = window.innerHeight - GameConfig.J_HEIGHT;
		let cs: number = scaleX > scaleY ? scaleY : scaleX;
		this.bg.scaleX = cs;
		if (window.innerHeight > GameConfig.J_HEIGHT) {
			let t1s = (GameConfig.J_HEIGHT - 55) / GameConfig.J_HEIGHT;
			this.bg.scaleY = t1s;
		}
		else {
			let t2s = (window.innerHeight - 55) / GameConfig.J_HEIGHT;
			this.bg.scaleY = t2s;
		}
		let w: number = GameConfig.WIDTH / GameConfig.HEIGHT > GameConfig.MAX_WIDTH / GameConfig.DES_HEIGHT ? GameConfig.MAX_WIDTH * cs : GameConfig.WIDTH;
		this.mainGroup.width = window.innerWidth < GameConfig.MAX_WIDTH ? window.innerWidth : GameConfig.MAX_WIDTH;
		this.mainGroup.height = this.bg.scaleY * this.bg.height;
		this.contentBg.scaleX = this.contentBg.scaleY = this.mainGroup.width / GameConfig.MAX_WIDTH;

		if (this.webview) {
			this.webview.width = window.innerWidth < GameConfig.MAX_WIDTH ? window.innerWidth * window.devicePixelRatio : GameConfig.MAX_WIDTH;
			this.webview.x = this.mainGroup.x * window.devicePixelRatio;
			this.webview.height = this.bg.height * this.bg.scaleY * window.devicePixelRatio;
			this.webview.y = this.bg.y * window.devicePixelRatio;
		}

		if (window.innerHeight <= 500 / window.devicePixelRatio) {
			this.bg.scaleY = window.innerHeight / this.bg.height + 0.2;
		}


		// this.onScrollChange();
		// this.onScrollBarChange();
		egret.updateAllScreens();
	}

	public onTab(): void {
		core.UIManager.closeUI(core.UIConst.HelpDesUI);
	}

	// public onScrollBarChange(): void {
	// 	let value: number = this.myScrollBar.value;
	// 	console.log(value);
	// 	this.scroll.setPerCent(100 - value);
	// }

	// public onScrollChange(): void {
	// 	let p: number = 100 - this.scroll.getPerCent();
	// 	this.myScrollBar.value = p;
	// }
}