
const firstPosX = [60, 260, 460, 660]//第一次进去的时候Y统一为400，移到0的位置


class MakeOption extends eui.Component {
	public firstContent: eui.Group;
	public secondContent: eui.Group;
	public thirdContent: eui.Group;
	public maskRect: eui.Rect;
	private moveUpIdx: number = 0;
	public clickIdx: number = 0;
	private moveDownIdx: number = 0;
	/**当前运行的是第几个 */
	private showType: number = 0;

	//当前工具存放类
	tool: Array<any> = [];
	public constructor() {
		super();
		this.skinName = MakeOptionSkin;
	}

	public childrenCreated(): void {
		super.childrenCreated();
		GameManager.getInstance().addEventListener(SetEvent.BONUS_CLICKIDX, this.onDataChanged, this);
	}

	//第一次的时候
	public firstInit() {
		console.log('第一次的时候');
		this.firstContent.visible = true;
		this.secondContent.visible = false;
		this.thirdContent.visible = false;
		this.maskRect.visible = true;
		this.tool = [];
		
		for (let i = 0; i < this.firstContent.numChildren; i++) {
			let Tools: Tool = this.firstContent.getChildAt(i) as Tool;
			this.tool.push(Tools)
			Tools.setValue('1_' + i);
		}
		this.moveUpIdx = 0;
		this.moveUp(0);
	}

	public moveUp(num: number = 0) {
		let ty = 180;
		if(num == 1){
			ty = 163;
		}
		if (num == 1 && this.moveUpIdx % 2 != 0) {
			ty = 303;
		}
		egret.Tween.get(this.tool[this.moveUpIdx]).to({ y: ty }, 180).call(() => {
			if (this.moveUpIdx < this.tool.length - 1) {
				this.moveUpIdx++;
				this.moveUp(num)
			} else {
				this.maskRect.visible = false;
			}
		});
	}

	public moveSelfUp() {
		SoundManager.getInstance().playEffect(SoundConst.CHOOSETOOLS);
		switch(this.showType){
			case 1:
				for (let i = 0; i < this.firstContent.numChildren; i++) {
					let Tools: Tool = this.firstContent.getChildAt(i) as Tool;
					// this.tool.push(Tools)
					Tools.removeTool();
				}
			break;
			case 2:
				for (let i = 0; i < this.secondContent.numChildren; i++) {
					let Tools: Tool = this.secondContent.getChildAt(i) as Tool;
					// this.tool.push(Tools)
					Tools.removeTool();
				}
			break;
			default:
				for (let i = 0; i < this.thirdContent.numChildren; i++) {
					let Tools: Tool = this.thirdContent.getChildAt(i) as Tool;
					// this.tool.push(Tools)
					Tools.removeTool();
				}
			break;
		}
		//第三次选球杆是y 142
		console.log("--------第" +this.showType+"次，第"+this.clickIdx+"根");
		let upY:number = 124; 
		if(this.showType == 3){
			upY = 142;
		}		
		egret.Tween.get(this.tool[this.clickIdx]).to({ y: upY }, 200).call(() => {
			this.moveDownIdx = 0;
			this.moveDown()
		})

	}

	public moveDown() {
		if (this.clickIdx == this.moveDownIdx && this.moveDownIdx < this.tool.length - 1) {
			this.moveDownIdx++;
			this.moveDown();
			return;
		}

		egret.Tween.get(this.tool[this.moveDownIdx]).to({ y: 600 }, 200).call(() => {
			if (this.moveDownIdx == this.tool.length - 1) {
				this.moveSelfDown();
			} else {
				this.moveDownIdx++;
				this.moveDown()
			}
		})
	}
	public moveSelfDown() {
		egret.Tween.get(this.tool[this.clickIdx]).to({ y: 600 }, 200).call(() => {
			// console.log('?????', this.showType);
			let data = {
				'num': this.showType, //第几次
				'idx': this.clickIdx		//哪一个
			}
			// console.log(this.showType + "== 第几次，哪一个 ==" + this.clickIdx);
			if(this.showType != 3){
				Commond.sendBonus(this.showType, this.clickIdx);
			}
			GameManager.getInstance().dispatchEventWith(SetEvent.TOOLS_SHOW, false, data);
		})

	}


	public onDataChanged(e: SetEvent): void {
		// console.log('注册', e)
		switch (e.type) {
			case SetEvent.BONUS_CLICKIDX:
				this.maskRect.visible = true;
				this.clickIdx = e.data.idx;	//哪一个
				this.showType = e.data.num;	//第几次
				this.moveSelfUp();
				break
		}
	}

	/**第二次选项的时候 */
	public secondInit() {
		this.secondContent.visible = true;
		this.firstContent.visible = false;
		this.thirdContent.visible = false;
		this.maskRect.visible = true;
		this.tool = [];
		console.log('第二次', this.secondContent.numChildren);
		for (let i = 0; i < this.secondContent.numChildren; i++) {
			let Tool: Tool = this.secondContent.getChildAt(i) as Tool;
			this.tool.push(Tool)
			Tool.setValue('2_' + i);
		}
		this.moveUpIdx = 0;
		this.moveUp(1);
		
	}

	/**第三次初始化 */
	public thirdInit() {
		this.firstContent.visible = false;
		this.secondContent.visible = false;
		this.thirdContent.visible = true;
		this.maskRect.visible = true;
		this.tool = [];
		for (let i = 0; i < this.thirdContent.numChildren; i++) {
			let Tool: Tool = this.thirdContent.getChildAt(i) as Tool;
			this.tool.push(Tool)
			Tool.setValue('3_' + i);
		}
		this.moveUpIdx = 0;
		this.moveUp();
		
	}

}

/**工具球杆类 */
class Tool extends eui.Component {
	public icon: eui.Image;
	public idx: number;
	public typeNum: number;

	public isButton:boolean = false;

	public constructor() {
		super();
		this.skinName = ToolSkin;
	}

	/**设置皮肤 */
	public setValue(num: string) {
		//前面的是第几次，后面的是下边
		this.icon.source = num + '_png';	
		let tempIdx: number = Number(num.substr(2));
		this.typeNum = Number(num.substr(0, 1));
		this.idx = tempIdx;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this);
	}
	public removeTool(){
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this)
	}

	onTab() {
		// console.log("点击球杆 == " + this.idx)
		this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTab, this)
		let data = {
			'num': this.typeNum, //第几轮
			'idx': this.idx		//哪一个
		}
		// console.log(data)
		GameManager.getInstance().dispatchEventWith(SetEvent.BONUS_CLICKIDX, false, data);
	}

}
