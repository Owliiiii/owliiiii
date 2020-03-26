module core {
	export class NomalLoadingUI extends BaseUI {
		public lgroup: eui.Group;
		public barbg: eui.Image;
		public bar: eui.Image;
		public masks: eui.Image;
		public logo: eui.Image;

		public constructor() {
			super();
			this.skinName = NomalLoadingUISkin;
		}
		public onAdd(): void {
			super.onAdd();
			this.bar.mask = this.masks;
			this.onResize();

		}
		public onResize() {
			if (window.innerWidth >= 1600 || window.innerHeight >= 990) {
				this.logo.right = (window.innerWidth - 1600);
				this.logo.bottom = (window.innerHeight - 990) + this.logo.height;
			}
		}

		public setPross(cur: number, max: number): void {
			var n: number = cur / max;
			this.bar.x = (this.lgroup.width) * (n - 1);
		}
	}
}
