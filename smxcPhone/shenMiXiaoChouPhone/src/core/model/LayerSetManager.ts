class LayerSetManager extends egret.EventDispatcher {
	public constructor() {
		super();
		egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE, () => {
			this.s = window.innerHeight / window.innerWidth;

			if (egret.Capabilities.os == 'iOS') {
					let JQ = window['$'];
					
					this.test();
					
					// JQ('#nvLayer').show();
				}
				this.dispatchEventWith(SetEvent.SET_OR_CHANGE);
		}, this);
	}

	public static getInstance(): LayerSetManager {
		if (!this._instance) {
			this._instance = new LayerSetManager();
		}
		return this._instance;
	}

	private static _instance: LayerSetManager;

	public test():void{
		if (window.innerHeight < window.innerWidth) {//heng
			var sx = window.innerWidth / 2 - 200 / 2;
			var sy = window.innerHeight / 2 - 179 / 2;
			// egret.log("syTest == " + sy);
			let $ = window['$'];
			$('#nvImg').css({ width: 200, height: 179 });
			$('#nvImg').css({ left: sx+40, top: sy });
			var t;
			var self=this;
			window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
				clearTimeout(t);
				t = setTimeout(function () {
					var sx = window.innerWidth / 2 - 200 / 2;
					var sy = window.innerHeight / 2 - 179 / 2;
					$('#nvImg').css({ width: 200, height: 179 });
					$('#nvImg').css({ left: sx+40, top: sy });
				}, 200);
			})
			this.s = window.innerHeight / window.innerWidth;
			if (egret.Capabilities.os == 'iOS') {
				let JQ = window['$'];
				JQ('#nvLayer').show();
						$('#nvImg').show();
						$('#nvImg1').hide();
				window.onscroll = () => {
					egret.clearTimeout(this.timeout);
					this.timeout = egret.setTimeout(() => {
						this.resizeCompete();
					}, this, 200);
				}
			}
		}else{//shu
			var sx = window.innerWidth / 2 - 128.5 / 2;
			var sy = window.innerHeight / 2 - 192 / 2;
			// egret.log("syTest == " + sy);
			let $ = window['$'];
			$('#nvImg1').css({ width: 128.5, height: 192 });
			$('#nvImg1').css({ left: sx+50, top: sy });
			var t;
			var self=this;
			window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
				clearTimeout(t);
				t = setTimeout(function () {
					var sx = window.innerWidth / 2 - 128.5 / 2;
					var sy = window.innerHeight / 2 - 192 / 2;
					$('#nvImg1').css({ width: 128.5, height: 192 });
					$('#nvImg1').css({ left: sx+50, top: sy });
				}, 200);
			})
			this.s = window.innerHeight / window.innerWidth;
			if (egret.Capabilities.os == 'iOS') {
				let JQ = window['$'];
				JQ('#nvLayer').show();
						$('#nvImg').hide();
						$('#nvImg1').show();
				window.onscroll = () => {
					egret.clearTimeout(this.timeout);
					this.timeout = egret.setTimeout(() => {
						this.resizeCompete();
					}, this, 200);
				}
			}
		}
	}

	public init(): void {
		if (window.innerHeight >= window.innerWidth) {			//shu
			var sx = window.innerWidth / 2 - 128.5 / 2;
			var sy = window.innerHeight / 2 - 192 / 2;
			// egret.log("syInit == " + sy);
			let $ = window['$'];
			$('#nvImg1').css({ width: 128.5, height: 192 });
			$('#nvImg1').css({ left: sx+50, top: sy });
			var t;
			var self=this;
			window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
				clearTimeout(t);
				t = setTimeout(function () {
					var sx = window.innerWidth / 2 - 128.5 / 2;
					var sy = window.innerHeight / 2 - 192 / 2;
					$('#nvImg1').css({ width: 128.5, height: 192 });
					$('#nvImg1').css({ left: sx+50, top: sy });
				}, 200);
			})
			// this.s = window.innerHeight / window.innerWidth;
			// if (egret.Capabilities.os == 'iOS') {
			// 	let JQ = window['$'];
			// 	JQ('#nvLayer').show();
			// 	window.onscroll = () => {
			// 		egret.clearTimeout(this.timeout);
			// 		this.timeout = egret.setTimeout(() => {
			// 			this.resizeCompete();
			// 		}, this, 200);
			// 	}
			// }
			$('#nvImg').hide();
		}else{//heng
			var sx = window.innerWidth / 2 - 200 / 2;
			var sy = window.innerHeight / 2 - 179 / 2;
			// egret.log("syInit == " + sy);
			let $ = window['$'];
			
			$('#nvImg').css({ width: 200, height: 179 });
			$('#nvImg').css({ left: sx+40, top: sy+35 });
			var t;
			var self=this;
			window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
				clearTimeout(t);
				t = setTimeout(function () {
					var sx = window.innerWidth / 2 - 200 / 2;
					var sy = window.innerHeight / 2 - 179 / 2;
					$('#nvImg').css({ width: 200, height: 179 });
					$('#nvImg').css({ left: sx+40, top: sy+20 });
				}, 200);
			})
			
			$('#nvImg1').hide();
		}
		this.s = window.innerHeight / window.innerWidth;
			if (egret.Capabilities.os == 'iOS') {
				let JQ = window['$'];
				JQ('#nvLayer').show();
				window.onscroll = () => {
					egret.clearTimeout(this.timeout);
					this.timeout = egret.setTimeout(() => {
						this.resizeCompete1();
					}, this, 200);
				}
			}
		
	}

	public timeout: number;
	public s: number;
	public resizeCompete(): void {
		let JQ = window['$'];
		JQ('main').css('top', 0);
	// egret.log("---" + window.innerHeight, window.innerWidth, window.innerHeight / window.innerWidth, this.s);
		if (window.innerHeight >= window.innerWidth) {//shu  		GameConfig.HEIGHT
			if (window.innerHeight / window.innerWidth > this.s) {
				JQ('#nvLayer').hide();
			}
			else {	
				JQ('#nvLayer').show();
				window.scrollTo(0, 0);
			}
		}
		else {//heng
			// egret.log(window.innerHeight, window.innerWidth, window.innerHeight / window.innerWidth, this.s);
			if (window.innerHeight / window.innerWidth >= this.s) {
				JQ('#nvLayer').hide();
			}
			else {
					JQ('#nvLayer').show();
				window.scrollTo(0, 0);		
			}
		}
		core.LayerManager.getInstance().dispatchEventWith(SetEvent.SET_OR_CHANGE);
	}

	public resizeCompete1(): void {
		let JQ = window['$'];
		JQ('main').css('top', 0);
	// egret.log("---" + window.innerHeight, window.innerWidth, window.innerHeight / window.innerWidth, this.s);
		if (window.innerHeight >= window.innerWidth) {//shu  		GameConfig.HEIGHT
			if (window.innerHeight / window.innerWidth > this.s) {
				JQ('#nvLayer').hide();
			}
			else {	
				JQ('#nvLayer').show();
				window.scrollTo(0, 0);
			}
		}
		else {//heng
			// egret.log(window.innerHeight, window.innerWidth, window.innerHeight / window.innerWidth, this.s);
			if (window.innerHeight / window.innerWidth > this.s) {
				JQ('#nvLayer').hide();
			}
			else {
					JQ('#nvLayer').show();
				window.scrollTo(0, 0);		
			}
		}
		core.LayerManager.getInstance().dispatchEventWith(SetEvent.SET_OR_CHANGE);
	}

}