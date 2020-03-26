class LiShiInfoUI extends eui.Component {

	public icon1:eui.Image;
	public icon2:eui.Image;
	public icon3:eui.Image;
	public icon4:eui.Image;
	public icon5:eui.Image;
	public icon6:eui.Image;
	public icon7:eui.Image;
	public icon8:eui.Image;
	public icon9:eui.Image;

	public label1:eui.Label;
	public label2:eui.Label;
	public label3:eui.Label;
	public label4:eui.Label;
	public label5:eui.Label;
	public label6:eui.Label;

	public winLine:eui.Image;
	public result:eui.Image;
	public bai:eui.Image;
	public wonLine:eui.Label;

	public out:eui.Image;
	public list:eui.List;


	public constructor(obj:any,isHaveNext:any) {
		super();
		this.skinName = LiShiInfoSkin;
		
		// this.init(obj);
	}
	public init(obj:any) {
		// this.scrolls.viewport = this.list;
		// this.list.useVirtualLayout = true;
		// this.list.itemRenderer = LiShiItem;
		var a:string  = obj["Value"]["Main"]["ReelSymbols"][0][0]
		var test = [{"Type":"Line","Symbol":a,"SymbolCount":3,"Positions":[{"X":0,"Y":1},{"X":1,"Y":1},{"X":2,"Y":1}],"Data":{"Line":1,"PayType":"RL"},"Bet":500,"Win":14000,"Multipliers":[28,1]},
		{"Type":"Line","Symbol":a,"SymbolCount":3,"Positions":[{"X":0,"Y":1},{"X":1,"Y":1},{"X":2,"Y":1}],"Data":{"Line":2,"PayType":"RL"},"Bet":500,"Win":12000,"Multipliers":[28,1]}]
		this.list.dataProvider = new eui.ArrayCollection(test);//(obj.Value.Main.WinResults);

		// console.log("长度 === " + this.list.dataProvider.length);
		// console.log("列表高度 === " + this.list.height);
		// this.list.visible = false;
		if(this.currentState =='up'){
			if(this.list.dataProvider.length == 0){
				
				this.winLine.y = 914.73;
				this.result.y = 948.73;
				this.label6.y = 957.69;
				this.bai.y = 1693;
			}else if(this.list.dataProvider.length == 1){
				
				this.winLine.y = 1330.73;
				this.result.y = 1364.73;
				this.label6.y = 1373.69;
				this.bai.y = 1700;
			}else if(this.list.dataProvider.length == 2){
				// this.winLine.y = this.list.y + this.list.height * this.list.dataProvider.length + this.list.dataProvider.length*52; 
				// this.result.y = this.list.y + this.list.height * this.list.dataProvider.length + (this.list.dataProvider.length+1)*52; 
				// this.label6.y = this.result.y + 10;
				// this.bai.y = this.label6.y+200;
				this.winLine.y = 1720.97;
				this.result.y = 1800.97;
				this.label6.y = 1809.93;
				this.bai.y = 2067.29;
			}

			if(this.list.dataProvider.length == 0){
				this.winLine.visible = true;
				this.wonLine.visible = false;
			}else{
				this.winLine.visible = false;
				this.wonLine.visible = true;
				this.wonLine.y = this.winLine.y+30;
			}
		}else{
			if(this.list.dataProvider.length == 0){
				this.winLine.y = 843.78;
				this.result.y = 874.81;
				this.label6.y = 884.43;
				this.bai.y = 1739;
			}else if(this.list.dataProvider.length == 1){
				this.winLine.y = 1267.78;
				this.result.y = 1298.81;
				this.label6.y = 1308.43;
				this.bai.y = 1739;
			}else if(this.list.dataProvider.length == 2){
				// this.winLine.y = this.list.y + this.list.height * this.list.dataProvider.length + this.list.dataProvider.length*52; 
				// this.result.y = this.list.y + this.list.height * this.list.dataProvider.length + (this.list.dataProvider.length+1)*52; 
				// this.label6.y = this.result.y + 10;
				// this.bai.y = this.label6.y+200;
				this.winLine.y = 1964.75;
				this.result.y = 1995.78;
				this.label6.y = 2005.4;
				this.bai.y = 2300;
			}

			if(this.list.dataProvider.length == 0){
				this.winLine.visible = true;
				this.wonLine.visible = false;
			}else{
				this.winLine.visible = false;
				this.wonLine.visible = true;
				this.wonLine.text = this.list.dataProvider.length + "payline(s) won"; 
				this.wonLine.y = this.winLine.y;
			}
		}
		

		this.label1.text = obj["Value"]["RoundId"];
        this.label2.text = obj["Date"];
		this.label3.text = obj["Value"]["TotalBet"]+".00";
        this.label4.text = obj["Value"]["TotalWin"]+".00";
        this.label5.text = "CNY " + obj["Value"]["TotalBet"];
        this.label6.text = "CNY " + obj["Value"]["TotalWin"] + ".00";

		this.icon1.source = 'bicon_' + obj["Value"]["Main"]["ReelSymbols"][0][0] + '_0_png';
		this.icon2.source = 'bicon_' + obj["Value"]["Main"]["ReelSymbols"][0][1] + '_0_png';
		this.icon3.source = 'bicon_' + obj["Value"]["Main"]["ReelSymbols"][0][2] + '_0_png';
		this.icon4.source = 'bicon_' + obj["Value"]["Main"]["ReelSymbols"][1][0] + '_0_png';
		this.icon5.source = 'bicon_' + obj["Value"]["Main"]["ReelSymbols"][1][1] + '_0_png';
		this.icon6.source = 'bicon_' + obj["Value"]["Main"]["ReelSymbols"][1][2] + '_0_png';
		this.icon7.source = 'bicon_' + obj["Value"]["Main"]["ReelSymbols"][2][0] + '_0_png';
		this.icon8.source = 'bicon_' + obj["Value"]["Main"]["ReelSymbols"][2][1] + '_0_png';
		this.icon9.source = 'bicon_' + obj["Value"]["Main"]["ReelSymbols"][2][2] + '_0_png';

	}



}