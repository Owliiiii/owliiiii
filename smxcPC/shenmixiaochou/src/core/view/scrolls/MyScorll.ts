module core {
	/**
	 * 滑动展示组件
	 */
	export class MyScorll extends egret.EventDispatcher {
		public itemArr: Array<ScrollItem>;
		public index: number = 0;
		public LEN: number = 0;
		public dataArr: Array<any>;
		public isTouch: boolean = false;
		public container: eui.Group;
		public isplaying: boolean = false;
		public constructor(c: eui.Group, cls: any) {
			super();
			this.initView(c, cls);
		}

		private initView(c: eui.Group, cls: any): void {
			this.container = c;
			this.itemArr = [];
			for (let i: number = 0; i < 3; i++) {
				let item: core.ScrollItem = new cls();
				this.itemArr.push(item);
				this.container.addChild(item);
			}
			this.container.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
			egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
			egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
			egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onEnd, this);
		}
		public setData(arr: Array<any>): void {
			this.dataArr = arr;
			this.setIndex(0);
			this.startPlay();
		}
		/**
		 * 
		 */
		public setIndex(_index: number): void {
			this.isplaying = true;
			egret.Tween.get(this.container).wait(400).call(() => {
				this.isplaying = false;
			}, this);
			if (_index < 0 || _index >= this.dataArr.length) {
				this.index = 0;
			}
			this.index = _index;
			for (let i: number = 0; i < this.itemArr.length; i++) {
				this.itemArr[i].y = this.container.height / 2 - this.itemArr[i].height / 2;
				let tx: number = (i - 1) * this.container.width + (this.container.width / 2 - this.itemArr[i].width / 2);
				let item: ScrollItem = this.itemArr[i];
				let cx: number = item.x;
				if (Math.abs(cx - tx) > this.container.width) {
					item.x = tx;
				}
				else {
					item.alpha = 0.4;
					egret.Tween.get(item).to({ x: tx }, 400, egret.Ease.cubicOut);
					egret.Tween.get(item).to({ alpha: 1 }, 400);
				}

				let cindex: number = i + this.index - 1 > this.dataArr.length - 1 ? 0 : i + this.index - 1;
				if (i + this.index - 1 > this.dataArr.length - 1) {
					cindex = 0;
				}
				else if (i + this.index - 1 < 0) {
					cindex = this.dataArr.length - 1;
				}
				item.setData(this.dataArr[cindex]);
			}
		}

		public cX: number;
		public cY: number;

		public tX: number;
		public tY: number;

		public onBegin(e: egret.TouchEvent): void {
			if (!this.isplaying) {
				this.isTouch = true;
				this.cX = e.stageX;
				this.cY = e.stageY;
				this.tX = this.cX;
				this.tY = this.cY;
				this.stopPlay();
			}
		}

		public onMove(e: egret.TouchEvent): void {
			if (this.isTouch) {
				let dx: number = e.stageX - this.tX;
				if (this.tX - this.cX > this.container.width / 2) return;
				for (let i: number = 0; i < this.itemArr.length; i++) {
					let item: ScrollItem = this.itemArr[i];
					item.alpha = 0.5;
					item.x += dx;
				}
				this.tX += dx;
			}
		}

		public onEnd(e: egret.TouchEvent): void {
			if (this.isTouch) {
				this.startPlay();
				this.isTouch = false;
				let dx: number = e.stageX;
				if (dx - this.cX > 300)//减
				{
					this.subIndex();
					let item0: ScrollItem = this.itemArr[0];
					let item1: ScrollItem = this.itemArr[1];
					let item2: ScrollItem = this.itemArr[2];
					this.itemArr = [item2, item0, item1];
				}
				else if (dx - this.cX < -300)//加
				{
					this.addIndex();
					let item0: ScrollItem = this.itemArr[0];
					let item1: ScrollItem = this.itemArr[1];
					let item2: ScrollItem = this.itemArr[2];
					this.itemArr = [item1, item2, item0];
				}
				this.setIndex(this.index);
				this.dispatchEventWith(egret.Event.CHANGE);
			}
		}

		public addIndex(): void {
			if (this.index < this.dataArr.length - 1) {
				this.index += 1;
			}
			else {
				this.index = 0;
			}
		}

		public subIndex(): void {
			if (this.index > 0) {
				this.index -= 1;
			}
			else {
				this.index = this.dataArr.length - 1;
			}
		}

		/**
		 * 启用自动播放功能
		 */
		private startPlay(): void {
			if (this.t != undefined) return;
			this.t = egret.setInterval(() => {
				this.subIndex();
				let item0: ScrollItem = this.itemArr[0];
				let item1: ScrollItem = this.itemArr[1];
				let item2: ScrollItem = this.itemArr[2];
				this.itemArr = [item2, item0, item1];
				this.setIndex(this.index);
				this.dispatchEventWith(egret.Event.CHANGE);
			}, this, 7000);

		}

		private t: number;

		private stopPlay(): void {
			if (this.t != undefined) {
				egret.clearInterval(this.t);
				this.t = undefined;
			}
		}


		public setIndex2(_index: number): void {

			if (this.index == _index) return;
			this.stopPlay();
			if (this.index > _index) {
				this.subIndex();
				let item0: ScrollItem = this.itemArr[0];
				let item1: ScrollItem = this.itemArr[1];
				let item2: ScrollItem = this.itemArr[2];
				this.itemArr = [item2, item0, item1];

			}
			else {
				this.addIndex();
				let item0: ScrollItem = this.itemArr[0];
				let item1: ScrollItem = this.itemArr[1];
				let item2: ScrollItem = this.itemArr[2];
				this.itemArr = [item1, item2, item0];
			}
			this.setIndex(this.index);
			this.dispatchEventWith(egret.Event.CHANGE);
			egret.setTimeout(()=>{this.startPlay()},this,500);
		}

	}
}