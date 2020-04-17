module core {
	export class ScrollItem extends eui.Component {
		public data: any;
		public constructor() {
			super();
		}

		public setData(data: any): void {
			this.data = data;
			if (this.data == null) {
				this.visible = false;
			}
			else {
				this.alpha = 1;
				this.visible = true;
			}
		}
	}
}
