class GamePentCompoment extends eui.Component {
	public kuangGroup: eui.Group;
	public maskGroup: eui.Group;
	public showAllKuang: eui.Group;
	public zuanRoll: egret.MovieClip;

	private zuanObj: Array<any> = [];
	public freePent1: number;
	public freePent2: number;



	public constructor() {
		super();
		this.skinName = GamePentSkin;
	}

	public childrenCreated(): void {
		super.childrenCreated();
		this.clear();
	}

	public clear(): void {
		this.kuangGroup.visible = false;
	}

	/**游戏旋转中，有免费游戏logo出现的动画层 */
	public c1PlayAc(idx: number, idy: number) {
		let gp: eui.Group = this.showAllKuang.getChildAt(idx) as eui.Group;
		if (idy < gp.numChildren) {
			let reelItem: ReelItem = gp.getChildAt(idy) as ReelItem;
			reelItem.c1PlayAc()
		}
	}



	/**中奖显示界面(一次全部显示) */
	public showKuang(arr: any, money: number = 0): void {
		this.kuangGroup.visible = true;
		this.hideAll();
		this.showAllMask();
		let res = vo.GameData.resultData.Value.Main.ReelSymbols
		// console.log(arr.length)
		for (let i = 0; i < arr.length; i++) {
			let positions = arr[i].Positions;
			for (let j = 0; j < positions.length; j++) {
				let g: eui.Group = this.showAllKuang.getChildAt(positions[j].X) as eui.Group;
				let img: ReelItem = g.getChildAt(positions[j].Y) as ReelItem;
				let name = res[positions[j].X][positions[j].Y];
				img.value = name;
			}
		}
	}


	/**中奖显示界面（什么都显示） */
	public showkuang2(positions: any, money: number = 0): void {
		this.kuangGroup.visible = true;
		this.hideAll();
		this.showAllMask();

		for (let i = 0; i < positions.length; i++) {
			let res = vo.GameData.resultData.Value.Main.ReelSymbols[positions[i].X]

			let g: eui.Group = this.kuangGroup.getChildAt(positions[i].X) as eui.Group;

			let img: ReelResult = g.getChildAt(positions[i].Y) as ReelResult;
			let bool: boolean = false;
			if (positions[i].X == 0 && i == 0 && money > 0) {
				bool = true;
			}

			let resName = res[positions[i].Y];
			if (resName == 'M1') {
				let niu1MC = game.MCUtils.getMc('niu1');
				img.addChild(niu1MC);
				niu1MC.anchorOffsetY = niu1MC.height / 2;
				niu1MC.anchorOffsetX = niu1MC.width / 2;
				niu1MC.gotoAndPlay('niu1');

				// niu1MC.x = -(niu1MC.width - img.width) / 2 - 20;
				niu1MC.x = img.width / 2 - 20;
				niu1MC.y = img.height / 2 + 25;
				// niu1MC.y = - (niu1MC.height - img.height) / 2 + 25;
				egret.Tween.get(niu1MC).to({ scaleX: 1.05, scaleY: 1.05 }, 400).to({ scaleX: 1, scaleY: 1 }, 400).call(() => {
					img.removeChild(niu1MC)
				})
				continue;
			}

			let name = '';
			if (res[positions[i].Y] != 'WW') {
				name = res[positions[i].Y] + '_box_png';
			}


			img.showAnmation(name, bool, money);
			let imgbg = img.img;
			egret.Tween.get(imgbg).to({ scaleX: 1.05, scaleY: 1.05 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
			if (GameConfig.freePlay && res[positions[i].Y] != 'WW' && this.zuanRoll) {
				egret.Tween.get(this.zuanRoll.parent).to({ scaleX: 1.05, scaleY: 1.05 }, 400).to({ scaleX: 1, scaleY: 1 }, 400)
			}
		}
	}

	/**免费游戏入口表现形式 */
	public freeGameEntry(arr: any) {
		let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
		this.kuangGroup.visible = true;
		this.hideAll();
		this.showAllMask();
		// let res = vo.GameData.resultData.Value.Main.ReelSymbols
		// for (let i = 0; i < arr.length; i++) {
		let positions = arr.Positions;
		console.log(positions)
		for (let j = 0; j < positions.length; j++) {
			let g: eui.Group = this.kuangGroup.getChildAt(positions[j].X) as eui.Group;
			let img: ReelResult = g.getChildAt(positions[j].Y) as ReelResult;
			img.c1PlayAc();
		}
		// }
		egret.setTimeout(() => {
			this.hideAllMask()
		}, this, 1500)

	}




	private hideAll() {
		for (let i: number = 0; i < this.kuangGroup.numChildren; i++) {
			let g: eui.Group = this.kuangGroup.getChildAt(i) as eui.Group;
			let showA: eui.Group = this.showAllKuang.getChildAt(i) as eui.Group;
			for (let j: number = 0; j < g.numChildren; j++) {
				let img: ReelResult = g.getChildAt(j) as ReelResult;
				let kimg: ReelItem = showA.getChildAt(j) as ReelItem;
				kimg.value = '';
				img.scaleX = 1;
				img.scaleY = 1;
				img.img.scaleX = 1;
				img.img.scaleY = 1;
				img.hideAnmation();
			}
		}
	}

	public showAllMask() {
		for (let i = 0; i < this.maskGroup.numChildren; i++) {
			this.maskGroup.getChildAt(i).visible = true;
		}
	}

	public showBeforeMask(idx) {
		for (let i = 0; i < this.maskGroup.numChildren; i++) {
			if (i < idx) {
				this.maskGroup.getChildAt(i).visible = true;
			}
		}
	}

	private hideAllMask() {
		for (let i = 0; i < this.maskGroup.numChildren; i++) {
			this.maskGroup.getChildAt(i).visible = false;
		}
	}

	/**显示免费游戏中中了dimao的特效 */
	/**先添加一个img在组件，并且把图片放上去 */

	private bounsIdx: number = 0;
	public showfreeDiamo(bouns: Array<any>) {
		this.kuangGroup.visible = true;
		this.hideAllMask();



		let pos = bouns[this.bounsIdx].Positions;
		let gp: eui.Group = this.kuangGroup.getChildAt(pos[0].X) as eui.Group;
		let reelResult: ReelResult = gp.getChildAt(pos[0].Y) as ReelResult;
		let acGp: eui.Group = new eui.Group();
		if (!this.zuanRoll) {
			this.zuanRoll = game.MCUtils.getMc('freeWin');
		}

		acGp.addChild(this.zuanRoll);
		reelResult.addChild(acGp);
		this.zuanRoll.gotoAndPlay('freeWin', -1);
		acGp.x = -40;
		acGp.y = -40;

		let img: eui.Image = new eui.Image();
		img.source = bouns[this.bounsIdx].Bouns + 'times_png';
		img.visible = false;
		acGp.addChild(img);
		img.x = 30;
		img.y = 50
		img.scaleX = 0.9;
		img.scaleY = 0.9;
		console.log(pos[0].X, pos[0].Y);

		this.zuanObj.push(acGp);
		console.log(this.zuanObj);
		// egret.Tween.get(this.zuanRoll).to({ scaleX: 1, scaleY: 1 }, 500)

		this.freePent1 = egret.setTimeout(() => {
			img.visible = true;
			let ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
			let winarr = vo.GameData.resultData.Value.Main.WinResults;
			let t: number = (GameConfig.speedPlay) ? 800 : 2500 * (winarr.length);

			ui.showWin(vo.GameData.resultData.Value.Main.WinResults, (t) => {
				this.freePent2 = egret.setTimeout(() => {
					GameManager.getInstance().isStart = true;
					GameManager.getInstance().doNext();
				}, this, t);
			})
		}, this, 3500)
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

		return larr;
	}



	public clearAll(): void {
		this.kuangGroup.visible = false;
		this.hideAll();
		this.hideAllMask();
		if (vo.GameData.freeGameAC.length > 0) {
			for (let i = 0; i < vo.GameData.freeGameAC.length; i++) {
				egret.clearInterval(vo.GameData.freeGameAC[i].ac)

			}
		}

		if (this.zuanObj.length > 0) {
			for (let i = 0; i < this.zuanObj.length; i++) {
				this.zuanObj[i].parent.removeChild(this.zuanObj[i]);
			}
			this.zuanObj = [];
		}
	}

}

/**游戏结果显示组件 */
class ReelResult extends eui.Component {
	public bg: eui.Rect;
	public lineScore: eui.Label;
	public img: eui.Image;

	public constructor() {
		super();
		this.skinName = ReelResultSkin;
	}

	/**ReelResult的闪电 */
	public c1PlayAc() {
		let idx = 0
		let num = 0;
		let C1Mc = egret.setInterval(() => {
			if (idx > 6) {
				idx = 0;
				num++;
			}
			this.Value = 'C1_' + idx + '_box_png';
			idx++;
		}, this, 100)

		vo.GameData.freeGameAC.push({ 'ac': C1Mc })

	}


	showAnmation(name: string, boo: boolean, money: number) {
		this.Value = name
		// console.log(this.img.anchorOffsetX, this.img.width)
		if (boo) {
			this.bg.visible = true;
			this.lineScore.visible = true;
			this.lineScore.text = '￥' + GameManager.numberToCommonStr(money / GameConfig.bili);
		}
	}

	hideAnmation() {
		this.Value = '';
		this.bg.visible = false;
		this.lineScore.visible = false;

	}


	public set Value(name) {
		this.img.source = name;
		this.img.anchorOffsetY = this.img.height / 2;
		this.img.y = this.img.height / 2 - 40;

	}

}