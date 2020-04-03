class GamePentCompoment extends eui.Component {
	public lineGroup: eui.Group;
	public kuangGroup: eui.Group;
	public tipGroup: eui.Group;//两边的按钮
	public gGroup: eui.Group;

	public constructor() {
		super();
		this.skinName = GamePentSkin;
	}

	public childrenCreated(): void {
		super.childrenCreated();
		this.clear();
		//let i: number = 6;
		// egret.setInterval(() => {
		// 	this.showLine(i, [{ x: 0, y: vo.GameData.lineObj['' + i][0] }, { x: 4, y: vo.GameData.lineObj['' + i][4] }]);
		// 	this.showKuang(i, [{ x: 1, y: vo.GameData.lineObj['' + i][1] }, { x: 2, y: vo.GameData.lineObj['' + i][2] }, { x: 3, y: vo.GameData.lineObj['' + i][3] }]);
		// 	i++;
		// 	if (i > 9) i = 1;
		// }, this, 1000);
		//this.drallall();

	}
	public numZeroX: Array<any> = [];
	public numTwoX: Array<any> = [];
	public clear(): void {
		this.kuangGroup.visible = false;
		// this.tipGroup.visible = false;
		this.lineGroup.visible = false;
		for (var i = 1; i < 26; i++) {
			this['g' + i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.addLine, this);
			this['g' + i].name = i;
			this.numZeroX[i - 1] = this['txt_' + i].x;	//不同字体的坐标
			this.numTwoX[i - 1] = this['txt_' + i].x - 2;

		}
	}
	public tipScale() {
		console.log("ZIMU11");
		for (var i = 1; i < 26; i++) {
			// if (window.innerWidth == 1920 && (window.innerHeight >= 829 && window.innerHeight <= 833)){
			this['g' + i].scaleX = 1.17;
			this['g' + i].scaleY = 1.17;
			// }else{
			// 	this['g' + i].scaleX = 1;
			// 	this['g' + i].scaleY = 1;
			// }
		}

	}
	public tipScaleSize() {
		console.log("ZIMU22");
		for (var i = 1; i < 26; i++) {
			this['g' + i].scaleX = 1.48;
			this['g' + i].scaleY = 1.48;
		}
	}

	public addLine(evt: egret.TouchEvent): void {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		if (GameManager.getInstance().gameState == GameType.GameState.STOP && !GameConfig.autoPlay && vo.GameData.autoPlayCount <= 0) {
			ui.updataTextBtn(parseInt(evt.currentTarget.name));
		}
	}
	//按鈕背景
	public showBg(line: number): void {
		//
		this.anBgAll();
		for (let i: number = 1; i <= line; i++) {
			this.showLiangBg(i);
		}
	}

	public anBgAll() {
		for (let i: number = 1; i < 26; i++) {
			let img = this['blueBg_' + i] as eui.Image;
			img.source = "anBg_png";
			this['txt_' + i].font = "scence_f2_fnt";
			this['txt_' + i].x = this.numTwoX[i - 1];
		}
	}
	public showLiangBg(line: number): void {
		for (let i: number = 1; i <= line; i++) {
			let img = this['blueBg_' + i] as eui.Image;
			img.source = "blueBg_png";
			this['txt_' + i].font = "scence_f0_fnt";
			this['txt_' + i].x = this.numZeroX[i - 1];
		}
	}

	public showTipLine(line: number): void {
		this.tipGroup.visible = true;
		(this['lineBg_' + line] as eui.Group).visible = true;
		// (this['gl' + line] as eui.Group).visible = true;
	}

	public clearTip(): void {
		// this.tipGroup.visible = false;
		for (let i: number = 1; i < 26; i++) {
			(this['lineBg_' + i] as eui.Group).visible = false;
			// (this['gl' + i] as eui.Group).visible = false;
		}
	}

	public drallall(): void {
		let colarr: Array<any> = [0x000000, 0x999999, 0xffddaa, 0x887799];
		this.gGroup.removeChildren();
		this.lineGroup.visible = true;
		this.gGroup.visible = true;
		for (let i: number = 0; i < 25; i++) {
			for (let j: number = 0; j < 3; j++) {
				let rect: eui.Rect = new eui.Rect();
				rect.fillColor = colarr[Math.floor(Math.random() * 24)];
				rect.x = i * 210 + 69;
				rect.y = j * 198;
				rect.width = 213;
				rect.height = 210;
				rect.ellipseWidth = 30;
				rect.ellipseHeight = 30;
				this.gGroup.addChild(rect);
			}
		}
	}



	public showLine(line: number, arr: Array<any> = null): void {
		this.lineGroup.visible = true;
		this.gGroup.removeChildren();
		let img: eui.Image;
		if (arr == null) return;
		for (let i: number = 1; i < 26; i++) {
			img = this['line_' + i] as eui.Image;
			if (line == i) {
				img.visible = true;
				for (let s: number = 0; s < arr.length; s++) {
					let rect: eui.Rect = new eui.Rect();
					rect.fillColor = 0x000000;
					// rect.x = arr[i].X * 213 + 69;
					// rect.y = arr[i].Y * 198;
					// rect.width = 213;
					// rect.height = 213;
					//表示一个框
					let g: eui.Group = this.kuangGroup.getChildAt(arr[s].X) as eui.Group;
					let img: eui.Image = g.getChildAt(arr[s].Y) as eui.Image;
					rect.x = img.x + g.x;
					rect.y = img.y + 20;
					rect.width = img.width;
					rect.height = img.height;
					//rect.ellipseWidth = 30;
					//rect.ellipseHeight = 30;
					this.gGroup.addChild(rect);
					this.gGroup.visible = false;
				}
				img.mask = this.gGroup;
			}
			else {
				// img.mask = null;
				// img.visible = false;
			}
		}
	}

	public cleaAllLine(): void {
		for (let i: number = 1; i < 26; i++) {
			let img = this['line_' + i] as eui.Image;
			img.visible = false;
		}
		this.lineGroup.visible = false;
	}

	public showLines(line: number): void {
		this.lineGroup.visible = true;
		this.gGroup.removeChildren();
		let img = this['line_' + line] as eui.Image;
		img.mask = null;
		img.visible = true;
	}

	public showLineArr(line: number): void {
		this.cleaAllLine();
		for (let i: number = 1; i <= line; i++) {
			this.showLines(i);
		}
		egret.Tween.removeTweens(this.lineGroup);
		this.lineGroup.alpha = 1;
		egret.Tween.get(this.lineGroup).wait(1000).to({ alpha: 0 }, 1000).call(() => {
			this.lineGroup.visible = false;
			this.lineGroup.alpha = 1;
		});
	}


	public showKuang(line: number, arr: Array<any>): void {
		this.kuangGroup.visible = true;
		for (let i: number = 0; i < this.kuangGroup.numChildren; i++) {
			let g: eui.Group = this.kuangGroup.getChildAt(i) as eui.Group;
			for (let j: number = 0; j < g.numChildren; j++) {
				let img: eui.Image = g.getChildAt(j) as eui.Image;
				img.visible = false;
			}
		}
		for (let s: number = 0; s < arr.length; s++) {
			for (let i: number = 0; i < this.kuangGroup.numChildren; i++) {
				let g: eui.Group = this.kuangGroup.getChildAt(i) as eui.Group;
				for (let j: number = 0; j < g.numChildren; j++) {
					let img: eui.Image = g.getChildAt(j) as eui.Image;
					if (i == arr[s].X && j == arr[s].Y) {
						img.visible = true;
						if (line < 10) {
							img.source = 'box0' + line + '_png';
						} else {
							img.source = 'box' + line + '_png';
						}
						console.log('aaaaaaaa');
					}
				}
			}
		}
	}

	public showkuang2(arr: Array<any>): void {
		this.kuangGroup.visible = true;
		for (let i: number = 0; i < this.kuangGroup.numChildren; i++) {
			let g: eui.Group = this.kuangGroup.getChildAt(i) as eui.Group;
			for (let j: number = 0; j < g.numChildren; j++) {
				let img: eui.Image = g.getChildAt(j) as eui.Image;
				img.visible = false;
			}
		}

		for (let s: number = 0; s < arr.length; s++) {
			for (let i: number = 0; i < this.kuangGroup.numChildren; i++) {
				let g: eui.Group = this.kuangGroup.getChildAt(i) as eui.Group;
				for (let j: number = 0; j < g.numChildren; j++) {
					let img: eui.Image = g.getChildAt(j) as eui.Image;
					if (i == arr[s].X && j == arr[s].Y) {
						img.visible = true;
						img.source = 'box0' + 7 + '_png';
					}
				}
			}
		}

	}

	/**
	 * 通过获奖坐标以及线数，获得不获奖的坐标
	 */
	public getLineArrForKuang(line: number, arr: Array<any>): Array<any> {
		let larr: Array<any> = [];
		let objArr: Array<any> = vo.GameData.lineObj[line + ''];
		for (let i: number = 0; i < objArr.length; i++) {
			let sy: number = objArr[i];
			let is: number = 0;
			for (let j: number = 0; j < arr.length; j++) {
				if (arr[j].X == i) {
					break;
				}
				else {
					is++;
				}
			}
			if (is == arr.length) {
				larr.push({ X: i, Y: sy });

			}

		}
		if ((line == 18) || (line == 19) || (line == 22) || (line == 23)) {
			larr.push({ X: 1, Y: 1 }, { X: 2, Y: 1 }, { X: 3, Y: 1 });
		}
		if ((line == 20) || (line == 21)) {
			larr.push({ X: 0, Y: 1 }, { X: 1, Y: 1 }, { X: 3, Y: 1 }, { X: 4, Y: 1 });
		}
		if ((line == 24) || (line == 25)) {
			larr.push({ X: 0, Y: 1 }, { X: 1, Y: 1 }, { X: 2, Y: 1 }, { X: 3, Y: 1 }, { X: 4, Y: 1 });
		}

		return larr;
	}


	public clearAll(): void {
		this.cleaAllLine();
		this.clearTip();
		this.gGroup.removeChildren();
		this.kuangGroup.visible = false;
	}


}