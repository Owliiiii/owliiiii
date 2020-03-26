window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"tuoguanButton":"resource/eui_skins/tuoguanButton.exml"};generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","tsbar","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 380;
		this.elementsContent = [this._Image1_i(),this.track_i(),this.tsbar_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "videoslot_popup_texture0_level1_67_png";
		t.verticalCenter = 0.5;
		t.width = 354;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "videoslot_popup_texture0_level1_67_png";
		t.verticalCenter = 0.5;
		t.visible = false;
		return t;
	};
	_proto.tsbar_i = function () {
		var t = new eui.Image();
		this.tsbar = t;
		t.scale9Grid = new egret.Rectangle(10,2,62,1);
		t.source = "videoslot_popup_texture0_level1_71_png";
		t.verticalCenter = -0.5;
		t.width = 354;
		t.x = 13;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.scale9Grid = new egret.Rectangle(12,12,2,2);
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "videoslot_popup_texture0_level1_25-18_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/CheckBanerSkin.exml'] = window.CheckBanerSkin = (function (_super) {
	__extends(CheckBanerSkin, _super);
	var CheckBanerSkin$Skin1 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin1, _super);
		function CheckBanerSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_64-28_l_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_64-48_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_64-28_png")
					])
			];
		}
		var _proto = CheckBanerSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "menu_texture0_level1_64-48_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 2;
			t.textColor = 0x000000;
			t.verticalCenter = -2.5;
			return t;
		};
		return CheckBanerSkin$Skin1;
	})(eui.Skin);

	var CheckBanerSkin$Skin2 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin2, _super);
		function CheckBanerSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-35_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-47_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-41_png")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
			];
		}
		var _proto = CheckBanerSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "menu_texture0_level1_51_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.BitmapLabel();
			this.labelDisplay = t;
			t.font = "f1_fnt";
			t.horizontalCenter = 0;
			t.scaleX = 1.3;
			t.scaleY = 1.3;
			t.text = "0.10";
			t.verticalCenter = -1;
			return t;
		};
		return CheckBanerSkin$Skin2;
	})(eui.Skin);

	var CheckBanerSkin$Skin3 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin3, _super);
		function CheckBanerSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-35_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-47_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-41_png")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
			];
		}
		var _proto = CheckBanerSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "menu_texture0_level1_51_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.BitmapLabel();
			this.labelDisplay = t;
			t.font = "f1_fnt";
			t.horizontalCenter = 0;
			t.scaleX = 1.3;
			t.scaleY = 1.3;
			t.text = "0.10";
			t.verticalCenter = -1;
			return t;
		};
		return CheckBanerSkin$Skin3;
	})(eui.Skin);

	var CheckBanerSkin$Skin4 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin4, _super);
		function CheckBanerSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-35_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-47_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-41_png")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
			];
		}
		var _proto = CheckBanerSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "menu_texture0_level1_51_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.BitmapLabel();
			this.labelDisplay = t;
			t.font = "f1_fnt";
			t.horizontalCenter = 0;
			t.scaleX = 1.3;
			t.scaleY = 1.3;
			t.text = "0.10";
			t.verticalCenter = -1;
			return t;
		};
		return CheckBanerSkin$Skin4;
	})(eui.Skin);

	var CheckBanerSkin$Skin5 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin5, _super);
		function CheckBanerSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-35_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-47_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-41_png")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
			];
		}
		var _proto = CheckBanerSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "menu_texture0_level1_51_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.BitmapLabel();
			this.labelDisplay = t;
			t.font = "f1_fnt";
			t.horizontalCenter = 0;
			t.scaleX = 1.3;
			t.scaleY = 1.3;
			t.text = "0.10";
			t.verticalCenter = -1;
			return t;
		};
		return CheckBanerSkin$Skin5;
	})(eui.Skin);

	var CheckBanerSkin$Skin6 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin6, _super);
		function CheckBanerSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-35_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-47_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-41_png")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png")
					])
			];
		}
		var _proto = CheckBanerSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "menu_texture0_level1_51_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.BitmapLabel();
			this.labelDisplay = t;
			t.font = "f1_fnt";
			t.horizontalCenter = 0;
			t.scaleX = 1.3;
			t.scaleY = 1.3;
			t.text = "0.10";
			t.verticalCenter = -1;
			return t;
		};
		return CheckBanerSkin$Skin6;
	})(eui.Skin);

	var CheckBanerSkin$Skin7 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin7, _super);
		function CheckBanerSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_64_l_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_64-43_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_64_png")
					])
			];
		}
		var _proto = CheckBanerSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "menu_texture0_level1_64-43_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 2;
			t.textColor = 0x000000;
			t.verticalCenter = -2.5;
			return t;
		};
		return CheckBanerSkin$Skin7;
	})(eui.Skin);

	function CheckBanerSkin() {
		_super.call(this);
		this.skinParts = ["leftBtn","btn0","btn1","btn2","btn3","btn4","rightBtn"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = CheckBanerSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.elementsContent = [this.leftBtn_i(),this.btn0_i(),this.btn1_i(),this.btn2_i(),this.btn3_i(),this.btn4_i(),this.rightBtn_i()];
		return t;
	};
	_proto.leftBtn_i = function () {
		var t = new MouseButton();
		this.leftBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 0;
		t.skinName = CheckBanerSkin$Skin1;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new MosueRadioButton();
		this.btn0 = t;
		t.label = "1.00";
		t.verticalCenter = 0;
		t.x = 72;
		t.skinName = CheckBanerSkin$Skin2;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new MosueRadioButton();
		this.btn1 = t;
		t.label = "2.00";
		t.verticalCenter = 0;
		t.x = 206;
		t.skinName = CheckBanerSkin$Skin3;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new MosueRadioButton();
		this.btn2 = t;
		t.label = "3.00";
		t.verticalCenter = 0;
		t.x = 339.5;
		t.skinName = CheckBanerSkin$Skin4;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new MosueRadioButton();
		this.btn3 = t;
		t.label = "4.00";
		t.verticalCenter = 0;
		t.x = 474;
		t.skinName = CheckBanerSkin$Skin5;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new MosueRadioButton();
		this.btn4 = t;
		t.label = "5.00";
		t.verticalCenter = 0;
		t.x = 608;
		t.skinName = CheckBanerSkin$Skin6;
		return t;
	};
	_proto.rightBtn_i = function () {
		var t = new MouseButton();
		this.rightBtn = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 752;
		t.skinName = CheckBanerSkin$Skin7;
		return t;
	};
	return CheckBanerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/LiShiInfoSkin.exml'] = window.LiShiInfoSkin = (function (_super) {
	__extends(LiShiInfoSkin, _super);
	function LiShiInfoSkin() {
		_super.call(this);
		this.skinParts = ["label1","label2","label3","label4","icon1","icon2","icon3","icon4","icon5","icon6","icon7","icon8","icon9","label5","winLine","result","label6","wonLine","bai","out","list"];
		
		this.elementsContent = [this._Group5_i(),this.list_i()];
		this._VerticalLayout1_i();
		
		this._VerticalLayout2_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","anchorOffsetY",0),
					new eui.SetProperty("_Rect1","scaleX",1),
					new eui.SetProperty("_Rect1","scaleY",1),
					new eui.SetProperty("_Rect1","anchorOffsetX",0),
					new eui.SetProperty("_Rect1","width",1232),
					new eui.SetProperty("_Rect1","x",0),
					new eui.SetProperty("_Rect1","top",0),
					new eui.SetProperty("_Rect1","bottom",0),
					new eui.SetProperty("_Image1","scaleX",1.8),
					new eui.SetProperty("_Image1","scaleY",1.8),
					new eui.SetProperty("_Image1","y",101.33),
					new eui.SetProperty("_Image1","x",56),
					new eui.SetProperty("_Image2","y",101.91),
					new eui.SetProperty("_Image2","x",420.93),
					new eui.SetProperty("_Image2","scaleX",1.8),
					new eui.SetProperty("_Image2","scaleY",1.8),
					new eui.SetProperty("_Image3","x",50.83),
					new eui.SetProperty("_Image3","y",172),
					new eui.SetProperty("_Image3","left",69),
					new eui.SetProperty("_Image3","top",201),
					new eui.SetProperty("_Image3","scaleX",2.5),
					new eui.SetProperty("_Image3","scaleY",2.5),
					new eui.SetProperty("label1","scaleX",1.5),
					new eui.SetProperty("label1","scaleY",1.5),
					new eui.SetProperty("label1","anchorOffsetX",0),
					new eui.SetProperty("label1","text","11555"),
					new eui.SetProperty("label1","textAlign","right"),
					new eui.SetProperty("label1","width",500),
					new eui.SetProperty("label1","fontFamily","Arial"),
					new eui.SetProperty("label1","top",230),
					new eui.SetProperty("label1","right",79),
					new eui.SetProperty("label1","bold",true),
					new eui.SetProperty("label2","bold",true),
					new eui.SetProperty("label2","scaleX",1.5),
					new eui.SetProperty("label2","scaleY",1.5),
					new eui.SetProperty("label2","fontFamily","Arial"),
					new eui.SetProperty("label2","text","5/13/2019 7:44:15 AM(UTC)"),
					new eui.SetProperty("label2","right",71),
					new eui.SetProperty("label2","top",304),
					new eui.SetProperty("label2","width",500),
					new eui.SetProperty("label3","y",281.57),
					new eui.SetProperty("label3","bold",true),
					new eui.SetProperty("label3","top",379),
					new eui.SetProperty("label3","scaleX",1.5),
					new eui.SetProperty("label3","scaleY",1.5),
					new eui.SetProperty("label3","fontFamily","Arial"),
					new eui.SetProperty("label3","right",79),
					new eui.SetProperty("label3","width",500),
					new eui.SetProperty("label4","y",328.17),
					new eui.SetProperty("label4","bold",true),
					new eui.SetProperty("label4","top",447),
					new eui.SetProperty("label4","scaleX",1.5),
					new eui.SetProperty("label4","scaleY",1.5),
					new eui.SetProperty("label4","fontFamily","Arial"),
					new eui.SetProperty("label4","right",79),
					new eui.SetProperty("label4","width",500),
					new eui.SetProperty("_Group1","anchorOffsetY",0),
					new eui.SetProperty("_Group1","left",0),
					new eui.SetProperty("_Group1","top",0),
					new eui.SetProperty("_Group1","right",0),
					new eui.SetProperty("_Group1","bottom",0),
					new eui.SetProperty("_Rect2","width",310),
					new eui.SetProperty("_Rect2","left",0),
					new eui.SetProperty("_Rect2","bottom",1),
					new eui.SetProperty("_Rect2","top",-1),
					new eui.SetProperty("_Rect2","height",2),
					new eui.SetProperty("_Rect2","fillColor",0x727171),
					new eui.SetProperty("_Rect3","top",-1),
					new eui.SetProperty("_Rect3","left",0),
					new eui.SetProperty("_Rect3","right",0.029999999999972715),
					new eui.SetProperty("_Rect3","fillColor",0x727171),
					new eui.SetProperty("_Rect4","width",310),
					new eui.SetProperty("_Rect4","right",0),
					new eui.SetProperty("_Rect4","top",-1),
					new eui.SetProperty("_Rect4","bottom",1),
					new eui.SetProperty("_Rect4","height",2),
					new eui.SetProperty("_Rect4","fillColor",0x727171),
					new eui.SetProperty("_Rect5","left",0),
					new eui.SetProperty("_Rect5","right",0),
					new eui.SetProperty("_Rect5","height",2),
					new eui.SetProperty("_Rect5","y",310),
					new eui.SetProperty("_Rect5","fillColor",0x727171),
					new eui.SetProperty("_Group2","anchorOffsetX",0),
					new eui.SetProperty("_Group2","anchorOffsetY",0),
					new eui.SetProperty("_Group2","width",1121.03),
					new eui.SetProperty("_Group2","height",310),
					new eui.SetProperty("_Group2","y",197.21),
					new eui.SetProperty("_Group2","horizontalCenter",-0.5),
					new eui.SetProperty("_Rect6","left",0),
					new eui.SetProperty("_Rect6","right",0),
					new eui.SetProperty("_Rect6","top",0),
					new eui.SetProperty("_Rect6","bottom",0),
					new eui.SetProperty("_Rect6","fillColor",0xffffff),
					new eui.SetProperty("_Rect6","strokeWeight",1.5),
					new eui.SetProperty("_Rect6","strokeColor",0x727171),
					new eui.SetProperty("icon4","y",97.44),
					new eui.SetProperty("icon5","y",97.44),
					new eui.SetProperty("icon6","y",97.44),
					new eui.SetProperty("_Group3","width",206),
					new eui.SetProperty("_Group3","height",221),
					new eui.SetProperty("_Group3","scaleX",0.6666666666666666),
					new eui.SetProperty("_Group3","scaleY",0.6666666666666666),
					new eui.SetProperty("_Group3","left",0),
					new eui.SetProperty("_Group3","top",0),
					new eui.SetProperty("_Group4","scaleX",1.5),
					new eui.SetProperty("_Group4","scaleY",1.5),
					new eui.SetProperty("_Group4","y",603.27),
					new eui.SetProperty("_Group4","x",474),
					new eui.SetProperty("label5","top",562),
					new eui.SetProperty("label5","x",575.2),
					new eui.SetProperty("label5","y",738),
					new eui.SetProperty("label5","italic",true),
					new eui.SetProperty("label5","fontFamily","Arial"),
					new eui.SetProperty("winLine","right",533),
					new eui.SetProperty("winLine","x",568),
					new eui.SetProperty("winLine","y",1530),
					new eui.SetProperty("winLine","scaleX",1.5),
					new eui.SetProperty("winLine","scaleY",1.5),
					new eui.SetProperty("winLine","visible",false),
					new eui.SetProperty("result","right",611),
					new eui.SetProperty("result","x",534),
					new eui.SetProperty("result","y",1397.85),
					new eui.SetProperty("result","scaleX",1.5),
					new eui.SetProperty("result","scaleY",1.5),
					new eui.SetProperty("label6","right",490),
					new eui.SetProperty("label6","x",642),
					new eui.SetProperty("label6","y",1407.85),
					new eui.SetProperty("label6","scaleX",0.6),
					new eui.SetProperty("label6","scaleY",0.9),
					new eui.SetProperty("label6","fontFamily","Arial"),
					new eui.SetProperty("wonLine","text","2 payline(s) won"),
					new eui.SetProperty("wonLine","y",1349.85),
					new eui.SetProperty("wonLine","size",30),
					new eui.SetProperty("wonLine","bold",true),
					new eui.SetProperty("wonLine","fontFamily","Arial"),
					new eui.SetProperty("wonLine","horizontalCenter",0),
					new eui.SetProperty("bai","right",589),
					new eui.SetProperty("bai","x",534),
					new eui.SetProperty("bai","y",1607.85),
					new eui.SetProperty("_Image4","top",531),
					new eui.SetProperty("_Image4","x",487.66),
					new eui.SetProperty("_Image4","y",715),
					new eui.SetProperty("_Image4","scaleX",1.8),
					new eui.SetProperty("_Image4","scaleY",1.8),
					new eui.SetProperty("_Image4","source","bet_png"),
					new eui.SetProperty("out","right",25),
					new eui.SetProperty("out","top",13),
					new eui.SetProperty("out","scaleX",1.7),
					new eui.SetProperty("out","scaleY",1.7),
					new eui.SetProperty("out","x",1172),
					new eui.SetProperty("out","y",64),
					new eui.SetProperty("_Group5","top",0),
					new eui.SetProperty("_Group5","left",0),
					new eui.SetProperty("_Group5","right",0),
					new eui.SetProperty("_Group5","bottom",0),
					new eui.SetProperty("list","layout",this._VerticalLayout1),
					new eui.SetProperty("list","y",917.85),
					new eui.SetProperty("list","itemRendererSkinName",LiShiItemSkin),
					new eui.SetProperty("list","horizontalCenter",1),
					new eui.SetProperty("","width",1232)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","anchorOffsetY",0),
					new eui.SetProperty("_Rect1","top",0),
					new eui.SetProperty("_Rect1","bottom",0),
					new eui.SetProperty("_Rect1","width",835),
					new eui.SetProperty("_Rect1","x",1.33),
					new eui.SetProperty("_Image1","left",1),
					new eui.SetProperty("_Image1","scaleX",1.6),
					new eui.SetProperty("_Image1","scaleY",1.2),
					new eui.SetProperty("_Image1","y",-84.23),
					new eui.SetProperty("_Image2","y",-82.69),
					new eui.SetProperty("_Image2","x",341.27),
					new eui.SetProperty("_Image2","scaleY",1.2),
					new eui.SetProperty("_Image3","left",20),
					new eui.SetProperty("_Image3","top",15),
					new eui.SetProperty("label1","width",500),
					new eui.SetProperty("label1","textAlign","right"),
					new eui.SetProperty("label1","right",14),
					new eui.SetProperty("label1","top",23),
					new eui.SetProperty("label1","text","666666666"),
					new eui.SetProperty("label1","size",35),
					new eui.SetProperty("label1","fontFamily","Arial"),
					new eui.SetProperty("label1","bold",true),
					new eui.SetProperty("label2","width",500),
					new eui.SetProperty("label2","right",12),
					new eui.SetProperty("label2","top",72),
					new eui.SetProperty("label2","size",35),
					new eui.SetProperty("label2","fontFamily","Arial"),
					new eui.SetProperty("label2","bold",true),
					new eui.SetProperty("label3","width",500),
					new eui.SetProperty("label3","right",14),
					new eui.SetProperty("label3","top",124),
					new eui.SetProperty("label3","size",35),
					new eui.SetProperty("label3","fontFamily","Arial"),
					new eui.SetProperty("label3","bold",true),
					new eui.SetProperty("label4","width",500),
					new eui.SetProperty("label4","right",14),
					new eui.SetProperty("label4","top",173),
					new eui.SetProperty("label4","size",35),
					new eui.SetProperty("label4","fontFamily","Arial"),
					new eui.SetProperty("label4","bold",true),
					new eui.SetProperty("_Group1","width",698),
					new eui.SetProperty("_Group1","y",159.82),
					new eui.SetProperty("_Group1","anchorOffsetY",0),
					new eui.SetProperty("_Group1","height",234),
					new eui.SetProperty("_Group1","horizontalCenter",0.5),
					new eui.SetProperty("_Rect2","top",0),
					new eui.SetProperty("_Rect2","bottom",0),
					new eui.SetProperty("_Rect2","width",240),
					new eui.SetProperty("_Rect2","height",2),
					new eui.SetProperty("_Rect2","x",3),
					new eui.SetProperty("_Rect2","fillColor",0x727171),
					new eui.SetProperty("_Rect3","top",0),
					new eui.SetProperty("_Rect3","left",2),
					new eui.SetProperty("_Rect3","right",-2),
					new eui.SetProperty("_Rect3","fillColor",0x727171),
					new eui.SetProperty("_Rect4","top",0),
					new eui.SetProperty("_Rect4","bottom",0),
					new eui.SetProperty("_Rect4","height",2),
					new eui.SetProperty("_Rect4","width",241),
					new eui.SetProperty("_Rect4","x",698),
					new eui.SetProperty("_Rect4","fillColor",0x727171),
					new eui.SetProperty("_Rect5","bottom",0),
					new eui.SetProperty("_Rect5","left",2),
					new eui.SetProperty("_Rect5","right",-2),
					new eui.SetProperty("_Rect5","fillColor",0x727171),
					new eui.SetProperty("_Group2","height",241),
					new eui.SetProperty("_Group2","y",155.82),
					new eui.SetProperty("_Group2","anchorOffsetX",0),
					new eui.SetProperty("_Group2","width",698),
					new eui.SetProperty("_Group2","horizontalCenter",0.5),
					new eui.SetProperty("_Rect6","left",0),
					new eui.SetProperty("_Rect6","right",0),
					new eui.SetProperty("_Rect6","top",0),
					new eui.SetProperty("_Rect6","bottom",-1),
					new eui.SetProperty("_Rect6","fillColor",0xffffff),
					new eui.SetProperty("_Rect6","strokeWeight",1.5),
					new eui.SetProperty("_Rect6","height",1),
					new eui.SetProperty("_Rect6","anchorOffsetX",0),
					new eui.SetProperty("_Rect6","strokeColor",0x727171),
					new eui.SetProperty("icon4","y",94.4),
					new eui.SetProperty("icon5","y",94.4),
					new eui.SetProperty("icon6","y",94.4),
					new eui.SetProperty("_Group3","width",203),
					new eui.SetProperty("_Group3","height",210),
					new eui.SetProperty("_Group3","scaleX",0.666667),
					new eui.SetProperty("_Group3","scaleY",0.666667),
					new eui.SetProperty("_Group3","left",16),
					new eui.SetProperty("_Group3","top",21),
					new eui.SetProperty("_Group4","scaleX",1.5),
					new eui.SetProperty("_Group4","scaleY",1.5),
					new eui.SetProperty("_Group4","y",481.22),
					new eui.SetProperty("_Group4","horizontalCenter",-1.5),
					new eui.SetProperty("_Group4","width",220),
					new eui.SetProperty("_Group4","height",220),
					new eui.SetProperty("label5","scaleX",0.6),
					new eui.SetProperty("label5","scaleY",0.9),
					new eui.SetProperty("label5","x",391.48),
					new eui.SetProperty("label5","top",445),
					new eui.SetProperty("label5","fontFamily","Arial"),
					new eui.SetProperty("label5","italic",true),
					new eui.SetProperty("winLine","horizontalCenter",0),
					new eui.SetProperty("winLine","y",1664.75),
					new eui.SetProperty("winLine","visible",false),
					new eui.SetProperty("result","horizontalCenter",-69.5),
					new eui.SetProperty("result","y",1695.78),
					new eui.SetProperty("label6","y",1705.4),
					new eui.SetProperty("label6","horizontalCenter",45),
					new eui.SetProperty("label6","fontFamily","Arial"),
					new eui.SetProperty("wonLine","y",1664.75),
					new eui.SetProperty("wonLine","size",30),
					new eui.SetProperty("wonLine","text","2 payline(s) won"),
					new eui.SetProperty("wonLine","fontFamily","Arial"),
					new eui.SetProperty("wonLine","bold",true),
					new eui.SetProperty("wonLine","horizontalCenter",-0.5),
					new eui.SetProperty("bai","y",2046),
					new eui.SetProperty("bai","horizontalCenter",11.5),
					new eui.SetProperty("_Image4","x",309.48),
					new eui.SetProperty("_Image4","top",422),
					new eui.SetProperty("out","y",15.44),
					new eui.SetProperty("out","x",747.3),
					new eui.SetProperty("out","scaleX",1.3),
					new eui.SetProperty("out","scaleY",1.3),
					new eui.SetProperty("_Group5","bottom",0),
					new eui.SetProperty("_Group5","left",0),
					new eui.SetProperty("_Group5","top",0),
					new eui.SetProperty("_Group5","right",0),
					new eui.SetProperty("list","layout",this._VerticalLayout2),
					new eui.SetProperty("list","y",845.92),
					new eui.SetProperty("list","anchorOffsetY",0),
					new eui.SetProperty("list","itemRendererSkinName",LiShiItemSkin),
					new eui.SetProperty("list","horizontalCenter",0),
					new eui.SetProperty("","width",835)
				])
		];
	}
	var _proto = LiShiInfoSkin.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		this._Group5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.elementsContent = [this._Rect1_i(),this._Group1_i(),this._Group2_i(),this._Group4_i(),this.label5_i(),this.winLine_i(),this.result_i(),this.label6_i(),this.wonLine_i(),this.bai_i(),this._Image4_i(),this.out_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0xffffff;
		t.strokeColor = 0xffffff;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.anchorOffsetX = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.label1_i(),this.label2_i(),this.label3_i(),this.label4_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "Mystery Joker2_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "Mobile_png";
		t.x = 401.54;
		t.y = 145.58;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.source = "inFo_png";
		return t;
	};
	_proto.label1_i = function () {
		var t = new eui.Label();
		this.label1 = t;
		t.fontFamily = "PMingLiU";
		t.scaleX = 0.7;
		t.text = "8508786146";
		t.textColor = 0x000000;
		return t;
	};
	_proto.label2_i = function () {
		var t = new eui.Label();
		this.label2 = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "MingLiU";
		t.scaleX = 0.7;
		t.size = 30;
		t.text = "5/13/2019 7:44:15 AM(UTC)";
		t.textAlign = "right";
		t.textColor = 0x000000;
		return t;
	};
	_proto.label3_i = function () {
		var t = new eui.Label();
		this.label3 = t;
		t.fontFamily = "PMingLiU";
		t.scaleX = 0.7;
		t.text = "CNY 2.00";
		t.textAlign = "right";
		t.textColor = 0x000000;
		return t;
	};
	_proto.label4_i = function () {
		var t = new eui.Label();
		this.label4 = t;
		t.fontFamily = "PMingLiU";
		t.scaleX = 0.7;
		t.text = "CNY 0.00";
		t.textAlign = "right";
		t.textColor = 0x000000;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this._Rect2_i(),this._Rect3_i(),this._Rect4_i(),this._Rect5_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		this._Rect2 = t;
		t.fillColor = 0x727171;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFFFFFF;
		t.width = 346;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		this._Rect3 = t;
		t.fillColor = 0x141414;
		t.height = 2;
		t.rotation = 180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFFFFFF;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		this._Rect4 = t;
		t.fillColor = 0x141414;
		t.rotation = 270;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFFFFFF;
		t.width = 346;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		this._Rect5 = t;
		t.fillColor = 0x141414;
		t.height = 2;
		t.rotation = 360;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFFFFFF;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		this._Group4 = t;
		t.height = 192;
		t.width = 190;
		t.elementsContent = [this._Rect6_i(),this._Group3_i()];
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		this._Rect6 = t;
		t.bottom = 0;
		t.fillColor = 0x727171;
		t.height = 2;
		t.left = 0;
		t.rotation = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFFFFFF;
		t.top = 0;
		t.width = 190;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.elementsContent = [this.icon1_i(),this.icon2_i(),this.icon3_i(),this.icon4_i(),this.icon5_i(),this.icon6_i(),this.icon7_i(),this.icon8_i(),this.icon9_i()];
		return t;
	};
	_proto.icon1_i = function () {
		var t = new eui.Image();
		this.icon1 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.icon2_i = function () {
		var t = new eui.Image();
		this.icon2 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 95;
		t.y = 0;
		return t;
	};
	_proto.icon3_i = function () {
		var t = new eui.Image();
		this.icon3 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 190;
		t.y = 0;
		return t;
	};
	_proto.icon4_i = function () {
		var t = new eui.Image();
		this.icon4 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 0;
		t.y = 102;
		return t;
	};
	_proto.icon5_i = function () {
		var t = new eui.Image();
		this.icon5 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 95;
		t.y = 102;
		return t;
	};
	_proto.icon6_i = function () {
		var t = new eui.Image();
		this.icon6 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 190;
		t.y = 102;
		return t;
	};
	_proto.icon7_i = function () {
		var t = new eui.Image();
		this.icon7 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 0;
		t.y = 192;
		return t;
	};
	_proto.icon8_i = function () {
		var t = new eui.Image();
		this.icon8 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 95;
		t.y = 192;
		return t;
	};
	_proto.icon9_i = function () {
		var t = new eui.Image();
		this.icon9 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 190;
		t.y = 192;
		return t;
	};
	_proto.label5_i = function () {
		var t = new eui.Label();
		this.label5 = t;
		t.bold = true;
		t.fontFamily = "PMingLiU";
		t.size = 35;
		t.text = "CNY 0.00";
		t.textAlign = "right";
		t.textColor = 0x000000;
		return t;
	};
	_proto.winLine_i = function () {
		var t = new eui.Image();
		this.winLine = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "xia2_png";
		return t;
	};
	_proto.result_i = function () {
		var t = new eui.Image();
		this.result = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "total_png";
		return t;
	};
	_proto.label6_i = function () {
		var t = new eui.Label();
		this.label6 = t;
		t.bold = true;
		t.fontFamily = "PMingLiU";
		t.italic = true;
		t.scaleX = 0.6;
		t.scaleY = 0.9;
		t.size = 30;
		t.text = "CNY 0.00";
		t.textAlign = "right";
		t.textColor = 0x000000;
		return t;
	};
	_proto.wonLine_i = function () {
		var t = new eui.Label();
		this.wonLine = t;
		t.fontFamily = "PMingLiU";
		t.italic = true;
		t.scaleX = 0.6;
		t.scaleY = 0.9;
		t.size = 30;
		t.text = "CNY 0.00";
		t.textAlign = "right";
		t.textColor = 0x000000;
		t.y = 1725;
		return t;
	};
	_proto.bai_i = function () {
		var t = new eui.Image();
		this.bai = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "";
		t.y = 1693;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "bet_png";
		return t;
	};
	_proto.out_i = function () {
		var t = new eui.Image();
		this.out = t;
		t.source = "uiElements_57_png";
		t.x = 885;
		t.y = 335;
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.List();
		this.list = t;
		t.anchorOffsetX = 0;
		t.itemRendererSkinName = LiShiItemSkin;
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		this._VerticalLayout1 = t;
		t.gap = 52;
		t.paddingBottom = 0;
		t.paddingRight = 0;
		t.paddingTop = 0;
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		this._VerticalLayout2 = t;
		t.gap = 34;
		return t;
	};
	return LiShiInfoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/LiShiItemSkin.exml'] = window.LiShiItemSkin = (function (_super) {
	__extends(LiShiItemSkin, _super);
	function LiShiItemSkin() {
		_super.call(this);
		this.skinParts = ["winLine","icon41","icon51","icon61","icon1","icon2","icon3","icon4","icon5","icon6","icon7","icon8","icon9"];
		
		this.elementsContent = [this._Rect1_i(),this._Rect2_i(),this.winLine_i(),this._Group1_i()];
		this.icon41_i();
		
		this.icon51_i();
		
		this.icon61_i();
		
		this.states = [
			new eui.State ("u",
				[
					new eui.AddItems("icon41","",2,"_Group1"),
					new eui.AddItems("icon51","",2,"_Group1"),
					new eui.AddItems("icon61","",2,"_Group1"),
					new eui.SetProperty("_Rect1","width",1180),
					new eui.SetProperty("_Rect1","x",0),
					new eui.SetProperty("_Rect1","height",380),
					new eui.SetProperty("_Rect1","y",0),
					new eui.SetProperty("_Rect1","fillColor",0xf4f4f4),
					new eui.SetProperty("_Rect2","y",58.64),
					new eui.SetProperty("_Rect2","width",292),
					new eui.SetProperty("_Rect2","height",292),
					new eui.SetProperty("_Rect2","horizontalCenter",0),
					new eui.SetProperty("winLine","y",16.08),
					new eui.SetProperty("winLine","size",20),
					new eui.SetProperty("winLine","scaleX",1.5),
					new eui.SetProperty("winLine","scaleY",1.5),
					new eui.SetProperty("winLine","horizontalCenter",0),
					new eui.SetProperty("icon41","x",498),
					new eui.SetProperty("icon51","x",576),
					new eui.SetProperty("icon61","x",665),
					new eui.SetProperty("icon2","x",90.5),
					new eui.SetProperty("icon3","x",179.5),
					new eui.SetProperty("icon4","y",88.58),
					new eui.SetProperty("icon5","y",88.58),
					new eui.SetProperty("icon5","x",90.5),
					new eui.SetProperty("icon6","y",88.58),
					new eui.SetProperty("icon6","x",179.5),
					new eui.SetProperty("icon7","y",156),
					new eui.SetProperty("icon8","y",156),
					new eui.SetProperty("icon8","x",90.5),
					new eui.SetProperty("icon9","y",156),
					new eui.SetProperty("icon9","x",179.5),
					new eui.SetProperty("_Group1","height",176),
					new eui.SetProperty("_Group1","width",165),
					new eui.SetProperty("_Group1","y",67.05),
					new eui.SetProperty("_Group1","x",448.18),
					new eui.SetProperty("","width",1180),
					new eui.SetProperty("","height",380)
				])
			,
			new eui.State ("d",
				[
					new eui.SetProperty("_Rect1","height",500),
					new eui.SetProperty("_Rect1","y",0),
					new eui.SetProperty("_Rect1","width",780),
					new eui.SetProperty("_Rect1","x",-1),
					new eui.SetProperty("_Rect1","fillColor",0xf2f2f2),
					new eui.SetProperty("_Rect2","y",96.65),
					new eui.SetProperty("_Rect2","width",335),
					new eui.SetProperty("_Rect2","height",335),
					new eui.SetProperty("_Rect2","horizontalCenter",0.5),
					new eui.SetProperty("winLine","y",39.33),
					new eui.SetProperty("winLine","horizontalCenter",2),
					new eui.SetProperty("winLine","size",25),
					new eui.SetProperty("icon41","x",302),
					new eui.SetProperty("icon41","y",150.5),
					new eui.SetProperty("icon51","x",380),
					new eui.SetProperty("icon51","y",150.5),
					new eui.SetProperty("icon61","x",469),
					new eui.SetProperty("icon61","y",150.5),
					new eui.SetProperty("icon2","x",84.78),
					new eui.SetProperty("icon3","x",171.28),
					new eui.SetProperty("icon3","y",0),
					new eui.SetProperty("icon4","y",89.31),
					new eui.SetProperty("icon5","x",84.78),
					new eui.SetProperty("icon5","y",89.31),
					new eui.SetProperty("icon6","x",171.28),
					new eui.SetProperty("icon6","y",89.31),
					new eui.SetProperty("icon7","y",175.85),
					new eui.SetProperty("icon8","x",84.78),
					new eui.SetProperty("icon8","y",175.85),
					new eui.SetProperty("icon9","x",171.28),
					new eui.SetProperty("icon9","y",175.85),
					new eui.SetProperty("_Group1","y",123.51),
					new eui.SetProperty("_Group1","width",188),
					new eui.SetProperty("_Group1","height",188),
					new eui.SetProperty("_Group1","horizontalCenter",-42.5),
					new eui.SetProperty("_Group1","scaleX",1.1),
					new eui.SetProperty("_Group1","scaleY",1.1),
					new eui.SetProperty("","width",780),
					new eui.SetProperty("","height",500)
				])
		];
	}
	var _proto = LiShiItemSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillColor = 0xffffff;
		t.strokeColor = 0x000000;
		t.strokeWeight = 3;
		t.x = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		this._Rect2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xffffff;
		t.height = 160;
		t.strokeWeight = 3;
		t.width = 164;
		return t;
	};
	_proto.winLine_i = function () {
		var t = new eui.Label();
		this.winLine = t;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 22;
		t.size = 18;
		t.text = "Player won CNY 150.00 at line 2";
		t.textColor = 0x000000;
		t.y = 29;
		return t;
	};
	_proto.icon41_i = function () {
		var t = new eui.Image();
		this.icon41 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 166;
		t.y = 180.5;
		return t;
	};
	_proto.icon51_i = function () {
		var t = new eui.Image();
		this.icon51 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 244;
		t.y = 180.5;
		return t;
	};
	_proto.icon61_i = function () {
		var t = new eui.Image();
		this.icon61 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 333;
		t.y = 180.5;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.height = 117;
		t.width = 119;
		t.elementsContent = [this.icon1_i(),this.icon2_i(),this.icon3_i(),this.icon4_i(),this.icon5_i(),this.icon6_i(),this.icon7_i(),this.icon8_i(),this.icon9_i()];
		return t;
	};
	_proto.icon1_i = function () {
		var t = new eui.Image();
		this.icon1 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.y = 0;
		return t;
	};
	_proto.icon2_i = function () {
		var t = new eui.Image();
		this.icon2 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 59;
		return t;
	};
	_proto.icon3_i = function () {
		var t = new eui.Image();
		this.icon3 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 116;
		return t;
	};
	_proto.icon4_i = function () {
		var t = new eui.Image();
		this.icon4 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.y = 56;
		return t;
	};
	_proto.icon5_i = function () {
		var t = new eui.Image();
		this.icon5 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 59;
		t.y = 56;
		return t;
	};
	_proto.icon6_i = function () {
		var t = new eui.Image();
		this.icon6 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 116;
		t.y = 56;
		return t;
	};
	_proto.icon7_i = function () {
		var t = new eui.Image();
		this.icon7 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 0;
		t.y = 112;
		return t;
	};
	_proto.icon8_i = function () {
		var t = new eui.Image();
		this.icon8 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 59;
		t.y = 112;
		return t;
	};
	_proto.icon9_i = function () {
		var t = new eui.Image();
		this.icon9 = t;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 118;
		t.y = 112;
		return t;
	};
	return LiShiItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/LiShiSkin.exml'] = window.LiShiSkin = (function (_super) {
	__extends(LiShiSkin, _super);
	function LiShiSkin() {
		_super.call(this);
		this.skinParts = ["label1","label2","label3","label4","label5","label6","img1","rect1"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("down",
				[
					new eui.SetProperty("label1","fontFamily","Arial"),
					new eui.SetProperty("label1","x",20),
					new eui.SetProperty("label1","y",0),
					new eui.SetProperty("label1","width",204.99),
					new eui.SetProperty("label1","size",25),
					new eui.SetProperty("label2","left",205),
					new eui.SetProperty("label2","text","Mystery Joker Mobile"),
					new eui.SetProperty("label2","top",-1),
					new eui.SetProperty("label2","fontFamily","Arial"),
					new eui.SetProperty("label2","width",157.5),
					new eui.SetProperty("label2","size",25),
					new eui.SetProperty("label3","x",370.11),
					new eui.SetProperty("label3","bold",true),
					new eui.SetProperty("label3","fontFamily","Arial"),
					new eui.SetProperty("label3","size",25),
					new eui.SetProperty("label3","y",-1),
					new eui.SetProperty("label4","x",370.38),
					new eui.SetProperty("label4","text","1.00"),
					new eui.SetProperty("label4","bold",true),
					new eui.SetProperty("label4","fontFamily","Arial"),
					new eui.SetProperty("label4","y",24),
					new eui.SetProperty("label4","size",25),
					new eui.SetProperty("label5","x",456.73),
					new eui.SetProperty("label5","bold",true),
					new eui.SetProperty("label5","fontFamily","Arial"),
					new eui.SetProperty("label5","size",25),
					new eui.SetProperty("label5","y",-1),
					new eui.SetProperty("label6","text","1.00"),
					new eui.SetProperty("label6","x",456.73),
					new eui.SetProperty("label6","bold",true),
					new eui.SetProperty("label6","fontFamily","Arial"),
					new eui.SetProperty("label6","size",25),
					new eui.SetProperty("label6","y",24),
					new eui.SetProperty("img1","right",77),
					new eui.SetProperty("img1","verticalCenter",0),
					new eui.SetProperty("rect1","bottom",-21),
					new eui.SetProperty("rect1","width",672),
					new eui.SetProperty("rect1","height",2),
					new eui.SetProperty("rect1","x",20),
					new eui.SetProperty("_Group1","width",720),
					new eui.SetProperty("_Group1","height",44)
				])
			,
			new eui.State ("up",
				[
					new eui.SetProperty("label1","width",424.96),
					new eui.SetProperty("label1","size",35),
					new eui.SetProperty("label1","x",32),
					new eui.SetProperty("label1","y",9),
					new eui.SetProperty("label1","fontFamily","Arial"),
					new eui.SetProperty("label2","width",416.3),
					new eui.SetProperty("label2","size",35),
					new eui.SetProperty("label2","x",363.06),
					new eui.SetProperty("label2","scaleX",0.66),
					new eui.SetProperty("label2","y",9),
					new eui.SetProperty("label2","fontFamily","Arial"),
					new eui.SetProperty("label3","size",35),
					new eui.SetProperty("label3","x",636.38),
					new eui.SetProperty("label3","text","CNY"),
					new eui.SetProperty("label3","scaleX",0.66),
					new eui.SetProperty("label3","y",9),
					new eui.SetProperty("label3","fontFamily","Arial"),
					new eui.SetProperty("label3","bold",true),
					new eui.SetProperty("label4","x",689.83),
					new eui.SetProperty("label4","size",35),
					new eui.SetProperty("label4","text"," 5.00"),
					new eui.SetProperty("label4","textAlign","left"),
					new eui.SetProperty("label4","scaleX",0.66),
					new eui.SetProperty("label4","bold",true),
					new eui.SetProperty("label4","y",9),
					new eui.SetProperty("label4","fontFamily","Arial"),
					new eui.SetProperty("label5","x",762.9),
					new eui.SetProperty("label5","size",35),
					new eui.SetProperty("label5","text","CNY"),
					new eui.SetProperty("label5","scaleX",0.66),
					new eui.SetProperty("label5","bold",true),
					new eui.SetProperty("label5","y",9),
					new eui.SetProperty("label6","x",818.74),
					new eui.SetProperty("label6","size",35),
					new eui.SetProperty("label6","text","14000.00"),
					new eui.SetProperty("label6","textAlign","left"),
					new eui.SetProperty("label6","scaleX",0.66),
					new eui.SetProperty("label6","bold",true),
					new eui.SetProperty("label6","y",9),
					new eui.SetProperty("label6","fontFamily","Arial"),
					new eui.SetProperty("img1","scaleX",1.5),
					new eui.SetProperty("img1","scaleY",1.5),
					new eui.SetProperty("img1","x",957.78),
					new eui.SetProperty("img1","verticalCenter",-0.25),
					new eui.SetProperty("rect1","width",1002.666667),
					new eui.SetProperty("rect1","y",57.1),
					new eui.SetProperty("rect1","x",33.66),
					new eui.SetProperty("rect1","height",1.2),
					new eui.SetProperty("_Group1","scaleX",1.2),
					new eui.SetProperty("_Group1","scaleY",1.2),
					new eui.SetProperty("_Group1","left",0),
					new eui.SetProperty("_Group1","right",0),
					new eui.SetProperty("_Group1","top",0),
					new eui.SetProperty("_Group1","bottom",0),
					new eui.SetProperty("","height",68),
					new eui.SetProperty("","width",1166)
				])
		];
	}
	var _proto = LiShiSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.elementsContent = [this.label1_i(),this.label2_i(),this.label3_i(),this.label4_i(),this.label5_i(),this.label6_i(),this.img1_i(),this.rect1_i()];
		return t;
	};
	_proto.label1_i = function () {
		var t = new eui.Label();
		this.label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.scaleX = 0.8;
		t.size = 22;
		t.text = "5/13/2019 7:44:15 AM";
		t.textColor = 0x000000;
		t.width = 170.3;
		return t;
	};
	_proto.label2_i = function () {
		var t = new eui.Label();
		this.label2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.scaleX = 0.8;
		t.size = 22;
		t.text = "Mystery Joker Mobile";
		t.textColor = 0x000000;
		t.width = 135.3;
		return t;
	};
	_proto.label3_i = function () {
		var t = new eui.Label();
		this.label3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.scaleX = 0.8;
		t.size = 22;
		t.text = "CNY";
		t.textColor = 0x000000;
		t.x = 396;
		return t;
	};
	_proto.label4_i = function () {
		var t = new eui.Label();
		this.label4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.scaleX = 0.8;
		t.size = 22;
		t.text = "2.00";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.x = 397;
		return t;
	};
	_proto.label5_i = function () {
		var t = new eui.Label();
		this.label5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.scaleX = 0.8;
		t.size = 22;
		t.text = "CNY";
		t.textColor = 0x000000;
		t.x = 515;
		return t;
	};
	_proto.label6_i = function () {
		var t = new eui.Label();
		this.label6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.scaleX = 0.8;
		t.size = 22;
		t.text = "2.00";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.x = 516;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.source = "uiElements_57-28_png";
		return t;
	};
	_proto.rect1_i = function () {
		var t = new eui.Rect();
		this.rect1 = t;
		t.height = 2;
		return t;
	};
	return LiShiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/NomalLoadingUISkin.exml'] = window.NomalLoadingUISkin = (function (_super) {
	__extends(NomalLoadingUISkin, _super);
	function NomalLoadingUISkin() {
		_super.call(this);
		this.skinParts = ["yuan","txt","bar","image"];
		
		this.height = 912;
		this.width = 1216;
		this.yuan_i();
		this.elementsContent = [this._Image1_i(),this.txt_i(),this._Group2_i(),this._Image3_i()];
		
		eui.Binding.$bindProperties(this, ["image"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [true],[],this._Object1,"loop");
		eui.Binding.$bindProperties(this, [0],[],this._Object2,"rotation");
		eui.Binding.$bindProperties(this, [180],[],this._Object3,"rotation");
		eui.Binding.$bindProperties(this, [360],[],this._Object4,"rotation");
	}
	var _proto = NomalLoadingUISkin.prototype;

	_proto.yuan_i = function () {
		var t = new egret.tween.TweenGroup();
		this.yuan = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.props = this._Object1_i();
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i()];
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 250;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(180,269,526,95);
		t.source = "loadingbg1_jpg";
		t.top = 0;
		return t;
	};
	_proto.txt_i = function () {
		var t = new eui.Label();
		this.txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.size = 50;
		t.text = "0%";
		t.textAlign = "center";
		t.textColor = 0xedc4c4;
		t.verticalCenter = 223;
		t.visible = false;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this._Group1_i(),this.image_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.52;
		t.scaleY = 1.52;
		t.source = "loading0_png";
		t.x = 0;
		t.y = 746.04;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scrollEnabled = true;
		t.x = 3.04;
		t.y = 749.4;
		t.elementsContent = [this.bar_i()];
		return t;
	};
	_proto.bar_i = function () {
		var t = new eui.Image();
		this.bar = t;
		t.scaleX = 1.52;
		t.scaleY = 1.52;
		t.source = "loading1_png";
		t.x = 0;
		t.y = -2.01;
		return t;
	};
	_proto.image_i = function () {
		var t = new eui.Image();
		this.image = t;
		t.anchorOffsetX = 27;
		t.anchorOffsetY = 27;
		t.horizontalCenter = 0;
		t.scaleX = 1.52;
		t.scaleY = 1.52;
		t.source = "loading2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1.52;
		t.scaleY = 1.52;
		t.source = "loadingbg2_png";
		return t;
	};
	return NomalLoadingUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/PlayTypeSkin.exml'] = window.PlayTypeSkin = (function (_super) {
	__extends(PlayTypeSkin, _super);
	function PlayTypeSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = PlayTypeSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "uiElements_03-08_png";
		t.top = 0;
		return t;
	};
	return PlayTypeSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/qieHuanSkin.exml'] = window.qieHuanSkin = (function (_super) {
	__extends(qieHuanSkin, _super);
	function qieHuanSkin() {
		_super.call(this);
		this.skinParts = ["anYuan","an","liangDiTu","liangDiTuDis","liang","maskaa","test"];
		
		this.height = 54;
		this.elementsContent = [this.an_i(),this.liang_i(),this.maskaa_i(),this.test_i()];
	}
	var _proto = qieHuanSkin.prototype;

	_proto.an_i = function () {
		var t = new eui.Group();
		this.an = t;
		t.height = 54;
		t.width = 106;
		t.x = 0;
		t.elementsContent = [this._Image1_i(),this.anYuan_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "qq2_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto.anYuan_i = function () {
		var t = new eui.Image();
		this.anYuan = t;
		t.scaleX = 0.77;
		t.scaleY = 0.74;
		t.source = "uiElements_102_png";
		t.verticalCenter = 1;
		t.x = -1.27;
		return t;
	};
	_proto.liang_i = function () {
		var t = new eui.Group();
		this.liang = t;
		t.height = 54;
		t.elementsContent = [this.liangDiTu_i(),this.liangDiTuDis_i(),this._Image2_i()];
		return t;
	};
	_proto.liangDiTu_i = function () {
		var t = new eui.Image();
		this.liangDiTu = t;
		t.source = "qq1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.liangDiTuDis_i = function () {
		var t = new eui.Image();
		this.liangDiTuDis = t;
		t.source = "qq1Dis_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.77;
		t.scaleY = 0.74;
		t.source = "uiElements_102_png";
		t.verticalCenter = 1;
		t.x = 41;
		return t;
	};
	_proto.maskaa_i = function () {
		var t = new eui.Image();
		this.maskaa = t;
		t.left = 0;
		t.source = "qq1_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.test_i = function () {
		var t = new eui.Rect();
		this.test = t;
		t.fillAlpha = 0;
		t.fillColor = 0xffffff;
		t.height = 54;
		t.visible = false;
		t.width = 106;
		return t;
	};
	return qieHuanSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/ReelItemSkin.exml'] = window.ReelItemSkin = (function (_super) {
	__extends(ReelItemSkin, _super);
	function ReelItemSkin() {
		_super.call(this);
		this.skinParts = ["icon"];
		
		this.height = 148;
		this.width = 214;
		this.elementsContent = [this.icon_i()];
	}
	var _proto = ReelItemSkin.prototype;

	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.horizontalCenter = 0;
		t.source = "bicon_M2_0_png";
		t.verticalCenter = 0;
		return t;
	};
	return ReelItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/ReelSkin.exml'] = window.ReelSkin = (function (_super) {
	__extends(ReelSkin, _super);
	function ReelSkin() {
		_super.call(this);
		this.skinParts = ["containerGroup","img0","img1","img2","kuangGroup"];
		
		this.height = 444;
		this.width = 214;
		this.elementsContent = [this.containerGroup_i(),this.kuangGroup_i()];
	}
	var _proto = ReelSkin.prototype;

	_proto.containerGroup_i = function () {
		var t = new eui.Group();
		this.containerGroup = t;
		t.bottom = 0;
		t.height = 444;
		t.left = 0;
		t.right = 0;
		t.scrollEnabled = true;
		t.top = 0;
		t.width = 214;
		return t;
	};
	_proto.kuangGroup_i = function () {
		var t = new eui.Group();
		this.kuangGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.img0_i(),this.img1_i(),this.img2_i()];
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.horizontalCenter = 0;
		t.source = "C14_png";
		t.y = -31;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.horizontalCenter = 0;
		t.source = "C14_png";
		t.y = 122;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.horizontalCenter = 0;
		t.source = "C14_png";
		t.y = 275;
		return t;
	};
	return ReelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/tingZhiSkin.exml'] = window.tingZhiSkin = (function (_super) {
	__extends(tingZhiSkin, _super);
	var tingZhiSkin$Skin8 = 	(function (_super) {
		__extends(tingZhiSkin$Skin8, _super);
		function tingZhiSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","source","uiElements_03-09_png")
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","uiElements_03-16_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = tingZhiSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "uiElements_03-10_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return tingZhiSkin$Skin8;
	})(eui.Skin);

	function tingZhiSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Button1_i()];
	}
	var _proto = tingZhiSkin.prototype;

	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.bottom = 0;
		t.label = "";
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.skinName = tingZhiSkin$Skin8;
		return t;
	};
	return tingZhiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/login/LoginSkin.exml'] = window.LoginSkin = (function (_super) {
	__extends(LoginSkin, _super);
	function LoginSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 1080;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i()];
	}
	var _proto = LoginSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x211919;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return LoginSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/login/LoginWaitSkin.exml'] = window.LoginWaitSkin = (function (_super) {
	__extends(LoginWaitSkin, _super);
	var LoginWaitSkin$Skin9 = 	(function (_super) {
		__extends(LoginWaitSkin$Skin9, _super);
		function LoginWaitSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","scaleX",1.4),
						new eui.SetProperty("_Image1","scaleY",1.4),
						new eui.SetProperty("_Image1","y",1.33),
						new eui.SetProperty("_Image1","x",1.33)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","fert_png"),
						new eui.SetProperty("_Image1","scaleX",1.4),
						new eui.SetProperty("_Image1","scaleY",1.4),
						new eui.SetProperty("_Image1","y",-2.66),
						new eui.SetProperty("_Image1","x",-1.33)
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","feature_preview_texture0_level1_04_png"),
						new eui.SetProperty("_Image1","y",-2.33),
						new eui.SetProperty("_Image1","x",-1),
						new eui.SetProperty("_Image1","scaleX",1.4),
						new eui.SetProperty("_Image1","scaleY",1.4)
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","feature_preview_texture0_level1_04_png")
					])
			];
		}
		var _proto = LoginWaitSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feature_preview_texture0_level1_14_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginWaitSkin$Skin9;
	})(eui.Skin);

	var LoginWaitSkin$Skin10 = 	(function (_super) {
		__extends(LoginWaitSkin$Skin10, _super);
		function LoginWaitSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","y",1)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","fert_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","feature_preview_texture0_level1_04_png"),
						new eui.SetProperty("_Image1","y",-1),
						new eui.SetProperty("_Image1","x",-1),
						new eui.SetProperty("_Image1","scaleX",1.4),
						new eui.SetProperty("_Image1","scaleY",1.4)
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","feature_preview_texture0_level1_04_png")
					])
			];
		}
		var _proto = LoginWaitSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.scaleX = 1.4;
			t.scaleY = 1.4;
			t.source = "feature_preview_texture0_level1_14_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginWaitSkin$Skin10;
	})(eui.Skin);

	function LoginWaitSkin() {
		_super.call(this);
		this.skinParts = ["cGroup","masks","r0","r1","mainkk","mainkk0","goIn","mianFei","shengMi","not","next2","next1","lightImg","kk","quan"];
		
		this.elementsContent = [this._Group2_i()];
		this._Image3_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image3","_Group2",1,""),
					new eui.SetProperty("_Image1","anchorOffsetX",0),
					new eui.SetProperty("_Image1","anchorOffsetY",0),
					new eui.SetProperty("_Image1","y",4),
					new eui.SetProperty("_Image1","x",0),
					new eui.SetProperty("cGroup","width",724.24),
					new eui.SetProperty("cGroup","height",395),
					new eui.SetProperty("cGroup","anchorOffsetX",0),
					new eui.SetProperty("cGroup","scaleX",1.1),
					new eui.SetProperty("cGroup","x",-8.25),
					new eui.SetProperty("cGroup","scaleY",1.1),
					new eui.SetProperty("cGroup","y",-10.58),
					new eui.SetProperty("masks","anchorOffsetX",0),
					new eui.SetProperty("masks","width",782.88),
					new eui.SetProperty("masks","x",-4.56),
					new eui.SetProperty("masks","y",1.52),
					new eui.SetProperty("_Group1","width",800),
					new eui.SetProperty("_Group1","height",395),
					new eui.SetProperty("_Group1","y",73),
					new eui.SetProperty("_Group1","anchorOffsetX",0),
					new eui.SetProperty("r0","x",73),
					new eui.SetProperty("r0","y",551.7),
					new eui.SetProperty("r0","anchorOffsetX",0.5),
					new eui.SetProperty("r0","anchorOffsetY",0.5),
					new eui.SetProperty("r0","scaleX",0.7),
					new eui.SetProperty("r0","scaleY",0.7),
					new eui.SetProperty("r1","anchorOffsetX",0.5),
					new eui.SetProperty("r1","anchorOffsetY",0.5),
					new eui.SetProperty("r1","scaleX",0.7),
					new eui.SetProperty("r1","scaleY",0.7),
					new eui.SetProperty("r1","y",551.7),
					new eui.SetProperty("r1","x",46),
					new eui.SetProperty("_Image2","x",670.23),
					new eui.SetProperty("_Image2","y",547.66),
					new eui.SetProperty("_Image2","scaleX",0.9),
					new eui.SetProperty("_Image2","scaleY",0.9),
					new eui.SetProperty("mainkk","visible",false),
					new eui.SetProperty("mainkk0","visible",false),
					new eui.SetProperty("goIn","horizontalCenter",0),
					new eui.SetProperty("goIn","bottom",14),
					new eui.SetProperty("goIn","scaleX",0.83),
					new eui.SetProperty("goIn","scaleY",0.83),
					new eui.SetProperty("mianFei","x",445),
					new eui.SetProperty("mianFei","y",264),
					new eui.SetProperty("mianFei","scaleX",0.96),
					new eui.SetProperty("mianFei","scaleY",0.96),
					new eui.SetProperty("mianFei","visible",false),
					new eui.SetProperty("shengMi","scaleX",0.96),
					new eui.SetProperty("shengMi","scaleY",0.96),
					new eui.SetProperty("shengMi","width",781),
					new eui.SetProperty("shengMi","height",381),
					new eui.SetProperty("shengMi","anchorOffsetX",390),
					new eui.SetProperty("shengMi","anchorOffsetY",190),
					new eui.SetProperty("shengMi","visible",false),
					new eui.SetProperty("not","x",636.38),
					new eui.SetProperty("not","scaleX",0.83),
					new eui.SetProperty("not","scaleY",0.83),
					new eui.SetProperty("not","y",546.65),
					new eui.SetProperty("next2","x",55.38),
					new eui.SetProperty("next2","y",547.95),
					new eui.SetProperty("next2","scaleX",1),
					new eui.SetProperty("next2","scaleY",1),
					new eui.SetProperty("next2","source","dian_png"),
					new eui.SetProperty("next2","visible",false),
					new eui.SetProperty("next1","x",30.97),
					new eui.SetProperty("next1","y",547.95),
					new eui.SetProperty("next1","scaleX",1),
					new eui.SetProperty("next1","scaleY",1),
					new eui.SetProperty("next1","source","dian_png"),
					new eui.SetProperty("next1","visible",false),
					new eui.SetProperty("lightImg","touchEnabled",false),
					new eui.SetProperty("lightImg","y",569.95),
					new eui.SetProperty("lightImg","x",25.45),
					new eui.SetProperty("lightImg","scaleY",1.05),
					new eui.SetProperty("lightImg","scaleX",0.93),
					new eui.SetProperty("lightImg","visible",false),
					new eui.SetProperty("kk","touchEnabled",false),
					new eui.SetProperty("kk","y",534.68),
					new eui.SetProperty("kk","scaleX",0.93),
					new eui.SetProperty("kk","scaleY",0.93),
					new eui.SetProperty("kk","x",332.69),
					new eui.SetProperty("quan","x",31),
					new eui.SetProperty("quan","y",548.52),
					new eui.SetProperty("quan","visible",false),
					new eui.SetProperty("_Group2","width",890),
					new eui.SetProperty("_Group2","height",632)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","y",264),
					new eui.SetProperty("cGroup","anchorOffsetX",0),
					new eui.SetProperty("cGroup","y",-10.57),
					new eui.SetProperty("cGroup","width",721.49),
					new eui.SetProperty("cGroup","height",395),
					new eui.SetProperty("cGroup","scaleX",1.1),
					new eui.SetProperty("cGroup","x",-4.22),
					new eui.SetProperty("cGroup","scaleY",1.1),
					new eui.SetProperty("masks","x",-6.2),
					new eui.SetProperty("masks","y",-3.01),
					new eui.SetProperty("masks","anchorOffsetX",0),
					new eui.SetProperty("masks","width",776.82),
					new eui.SetProperty("_Group1","width",803.19),
					new eui.SetProperty("_Group1","height",395),
					new eui.SetProperty("_Group1","y",74),
					new eui.SetProperty("_Group1","x",61.51),
					new eui.SetProperty("_Group1","anchorOffsetX",0),
					new eui.SetProperty("r0","y",668.04),
					new eui.SetProperty("r0","x",31.33),
					new eui.SetProperty("r1","y",667.37),
					new eui.SetProperty("r1","x",-4.32),
					new eui.SetProperty("_Image2","y",586.58),
					new eui.SetProperty("_Image2","scaleX",1.3),
					new eui.SetProperty("_Image2","scaleY",1.3),
					new eui.SetProperty("_Image2","horizontalCenter",-7),
					new eui.SetProperty("mainkk","y",264),
					new eui.SetProperty("goIn","horizontalCenter",0.5),
					new eui.SetProperty("goIn","bottom",-52),
					new eui.SetProperty("goIn","scaleX",1.35),
					new eui.SetProperty("goIn","scaleY",1.35),
					new eui.SetProperty("mianFei","x",445),
					new eui.SetProperty("mianFei","y",264),
					new eui.SetProperty("not","y",585.1),
					new eui.SetProperty("not","horizontalCenter",-122),
					new eui.SetProperty("not","scaleX",1.15),
					new eui.SetProperty("not","scaleY",1.15),
					new eui.SetProperty("next2","y",664.33),
					new eui.SetProperty("next2","scaleX",1.4),
					new eui.SetProperty("next2","scaleY",1.4),
					new eui.SetProperty("next2","x",26.8),
					new eui.SetProperty("next2","source","dian_png"),
					new eui.SetProperty("next2","visible",false),
					new eui.SetProperty("next1","y",664.33),
					new eui.SetProperty("next1","scaleX",1.4),
					new eui.SetProperty("next1","scaleY",1.4),
					new eui.SetProperty("next1","x",-7.14),
					new eui.SetProperty("next1","source","dian_png"),
					new eui.SetProperty("next1","visible",false),
					new eui.SetProperty("lightImg","y",763.22),
					new eui.SetProperty("lightImg","scaleX",1.35),
					new eui.SetProperty("lightImg","scaleY",1.5),
					new eui.SetProperty("lightImg","x",-221.55),
					new eui.SetProperty("lightImg","touchEnabled",false),
					new eui.SetProperty("kk","scaleX",1.5),
					new eui.SetProperty("kk","scaleY",1.5),
					new eui.SetProperty("kk","x",263),
					new eui.SetProperty("kk","touchEnabled",false),
					new eui.SetProperty("kk","y",709.32),
					new eui.SetProperty("quan","source","quan_png"),
					new eui.SetProperty("quan","y",665.69),
					new eui.SetProperty("quan","x",28.18),
					new eui.SetProperty("quan","scaleX",1.3),
					new eui.SetProperty("quan","scaleY",1.3),
					new eui.SetProperty("_Group2","width",890),
					new eui.SetProperty("_Group2","height",793)
				])
		];
	}
	var _proto = LoginWaitSkin.prototype;

	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Group1_i(),this.r0_i(),this.r1_i(),this._Image2_i(),this.mainkk_i(),this.mainkk0_i(),this.goIn_i(),this.mianFei_i(),this.shengMi_i(),this.not_i(),this.next2_i(),this.next1_i(),this.lightImg_i(),this.kk_i(),this.quan_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.anchorOffsetX = 445;
		t.anchorOffsetY = 264;
		t.horizontalCenter = 0;
		t.source = "feature_preview_texture0_level1_09_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.height = 401;
		t.width = 800;
		t.x = 63.03;
		t.y = 69;
		t.elementsContent = [this.cGroup_i(),this.masks_i()];
		return t;
	};
	_proto.cGroup_i = function () {
		var t = new eui.Group();
		this.cGroup = t;
		t.height = 401;
		return t;
	};
	_proto.masks_i = function () {
		var t = new eui.Image();
		this.masks = t;
		t.source = "feature_preview_texture1_level1_png";
		return t;
	};
	_proto.r0_i = function () {
		var t = new eui.RadioButton();
		this.r0 = t;
		t.label = "";
		t.x = 58;
		t.y = 552.7;
		t.skinName = LoginWaitSkin$Skin9;
		return t;
	};
	_proto.r1_i = function () {
		var t = new eui.RadioButton();
		this.r1 = t;
		t.label = "";
		t.x = 33;
		t.y = 550.7;
		t.skinName = LoginWaitSkin$Skin10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "不再显示_png";
		t.y = 544;
		return t;
	};
	_proto.mainkk_i = function () {
		var t = new eui.Image();
		this.mainkk = t;
		t.anchorOffsetX = 397;
		t.anchorOffsetY = 197;
		t.source = "feature_preview_texture1_level1_png";
		t.visible = false;
		t.x = 445;
		t.y = 264;
		return t;
	};
	_proto.mainkk0_i = function () {
		var t = new eui.Image();
		this.mainkk0 = t;
		t.anchorOffsetX = 397;
		t.anchorOffsetY = 197;
		t.source = "feature_preview_texture1_level1_png";
		t.visible = false;
		t.x = 445;
		t.y = 264;
		return t;
	};
	_proto.goIn_i = function () {
		var t = new eui.Image();
		this.goIn = t;
		t.source = "继续_png";
		t.x = 292;
		return t;
	};
	_proto.mianFei_i = function () {
		var t = new eui.Image();
		this.mianFei = t;
		t.anchorOffsetX = 390;
		t.anchorOffsetY = 190;
		t.height = 381;
		t.scaleX = 0.96;
		t.scaleY = 0.96;
		t.source = "组 23_png";
		t.visible = false;
		t.width = 781;
		t.x = 445;
		t.y = 264;
		return t;
	};
	_proto.shengMi_i = function () {
		var t = new eui.Image();
		this.shengMi = t;
		t.anchorOffsetX = 390;
		t.anchorOffsetY = 190;
		t.height = 366;
		t.scaleX = 0.96;
		t.scaleY = 0.96;
		t.source = "内容_png";
		t.visible = false;
		t.width = 749;
		t.x = 445;
		t.y = 264;
		return t;
	};
	_proto.not_i = function () {
		var t = new eui.Image();
		this.not = t;
		t.source = "feature_preview_texture0_level1_02_png";
		t.y = 539;
		return t;
	};
	_proto.next2_i = function () {
		var t = new eui.Image();
		this.next2 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "feature_preview_texture0_level1_14_png";
		t.x = 55;
		t.y = 549;
		return t;
	};
	_proto.next1_i = function () {
		var t = new eui.Image();
		this.next1 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "feature_preview_texture0_level1_04_png";
		t.x = 19;
		t.y = 547;
		return t;
	};
	_proto.lightImg_i = function () {
		var t = new eui.Image();
		this.lightImg = t;
		t.anchorOffsetY = 40;
		t.source = "feature_preview_texture0_level1_24_png";
		t.x = 294.45;
		t.y = 570.9;
		return t;
	};
	_proto.kk_i = function () {
		var t = new eui.Image();
		this.kk = t;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "feature_preview_texture3_level1_png";
		t.x = 287.39;
		return t;
	};
	_proto.quan_i = function () {
		var t = new eui.Image();
		this.quan = t;
		t.source = "quan_png";
		t.visible = false;
		t.x = 62;
		t.y = 547;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.source = "quan_png";
		t.visible = false;
		t.x = 62;
		t.y = 547;
		return t;
	};
	return LoginWaitSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/login/ScrollItem1Skin.exml'] = window.ScrollItem1Skin = (function (_super) {
	__extends(ScrollItem1Skin, _super);
	function ScrollItem1Skin() {
		_super.call(this);
		this.skinParts = ["icons"];
		
		this.height = 381;
		this.width = 781;
		this.elementsContent = [this.icons_i()];
	}
	var _proto = ScrollItem1Skin.prototype;

	_proto.icons_i = function () {
		var t = new eui.Image();
		this.icons = t;
		t.height = 366;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "feature_1_png";
		t.verticalCenter = 0;
		t.width = 749;
		return t;
	};
	return ScrollItem1Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/GameScenceSkin.exml'] = window.GameScenceSkin = (function (_super) {
	__extends(GameScenceSkin, _super);
	var GameScenceSkin$Skin11 = 	(function (_super) {
		__extends(GameScenceSkin$Skin11, _super);
		function GameScenceSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","line4_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line4_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "line4_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScenceSkin$Skin11;
	})(eui.Skin);

	var GameScenceSkin$Skin12 = 	(function (_super) {
		__extends(GameScenceSkin$Skin12, _super);
		function GameScenceSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","line2_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line2_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "line2_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScenceSkin$Skin12;
	})(eui.Skin);

	var GameScenceSkin$Skin13 = 	(function (_super) {
		__extends(GameScenceSkin$Skin13, _super);
		function GameScenceSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","line1_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line1_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "line1_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScenceSkin$Skin13;
	})(eui.Skin);

	var GameScenceSkin$Skin14 = 	(function (_super) {
		__extends(GameScenceSkin$Skin14, _super);
		function GameScenceSkin$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","line3_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line3_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "line3_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScenceSkin$Skin14;
	})(eui.Skin);

	var GameScenceSkin$Skin15 = 	(function (_super) {
		__extends(GameScenceSkin$Skin15, _super);
		function GameScenceSkin$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","line5_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line5_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "line5_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScenceSkin$Skin15;
	})(eui.Skin);

	var GameScenceSkin$Skin16 = 	(function (_super) {
		__extends(GameScenceSkin$Skin16, _super);
		function GameScenceSkin$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","line5_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line5_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "line5_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScenceSkin$Skin16;
	})(eui.Skin);

	var GameScenceSkin$Skin17 = 	(function (_super) {
		__extends(GameScenceSkin$Skin17, _super);
		function GameScenceSkin$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","line2_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line2_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "line2_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScenceSkin$Skin17;
	})(eui.Skin);

	var GameScenceSkin$Skin18 = 	(function (_super) {
		__extends(GameScenceSkin$Skin18, _super);
		function GameScenceSkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","line1_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line1_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "line1_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScenceSkin$Skin18;
	})(eui.Skin);

	var GameScenceSkin$Skin19 = 	(function (_super) {
		__extends(GameScenceSkin$Skin19, _super);
		function GameScenceSkin$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","line3_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line3_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "line3_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScenceSkin$Skin19;
	})(eui.Skin);

	var GameScenceSkin$Skin20 = 	(function (_super) {
		__extends(GameScenceSkin$Skin20, _super);
		function GameScenceSkin$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","line4_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line4_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "line4_icon_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return GameScenceSkin$Skin20;
	})(eui.Skin);

	function GameScenceSkin() {
		_super.call(this);
		this.skinParts = ["reel0","reel1","reel2","line1","line2","line3","line4","line5","lm4","lm2","lm1","lm3","lm5","rm5","rm2","rm1","rm3","rm4","scoreLabel","scoreGroup","maskRect","shan","shan0","shan1","dianji","image1","image0","image2","ewaiLabel","numLabel","rewardScoreGroup","freeslotGroup","allnumLabel0","allnumLabel","allGroup","group"];
		
		this.height = 600;
		this.width = 1100;
		this.elementsContent = [this._Image1_i(),this.reel0_i(),this.reel1_i(),this.reel2_i(),this._Group1_i(),this.scoreGroup_i(),this.maskRect_i(),this.shan_i(),this.shan0_i(),this.shan1_i(),this.dianji_i(),this.group_i()];
	}
	var _proto = GameScenceSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "skin_texture1_level1_02_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.reel0_i = function () {
		var t = new Reel();
		this.reel0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 146;
		t.skinName = "ReelSkin";
		t.verticalCenter = -3;
		return t;
	};
	_proto.reel1_i = function () {
		var t = new Reel();
		this.reel1 = t;
		t.height = 444;
		t.horizontalCenter = 1;
		t.skinName = "ReelSkin";
		t.verticalCenter = 0;
		t.width = 214;
		return t;
	};
	_proto.reel2_i = function () {
		var t = new Reel();
		this.reel2 = t;
		t.height = 444;
		t.right = 148;
		t.skinName = "ReelSkin";
		t.verticalCenter = 0;
		t.width = 214;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.line1_i(),this.line2_i(),this.line3_i(),this.line4_i(),this.line5_i(),this.lm4_i(),this.lm2_i(),this.lm1_i(),this.lm3_i(),this.lm5_i(),this.rm5_i(),this.rm2_i(),this.rm1_i(),this.rm3_i(),this.rm4_i()];
		return t;
	};
	_proto.line1_i = function () {
		var t = new eui.Image();
		this.line1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "line1_png";
		t.y = 276.15;
		return t;
	};
	_proto.line2_i = function () {
		var t = new eui.Image();
		this.line2 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "line2_png";
		t.y = 165.12;
		return t;
	};
	_proto.line3_i = function () {
		var t = new eui.Image();
		this.line3 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "line3_png";
		t.y = 386.06;
		return t;
	};
	_proto.line4_i = function () {
		var t = new eui.Image();
		this.line4 = t;
		t.rotation = 23.37;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "line4_png";
		t.x = 96.86;
		t.y = 68.06;
		return t;
	};
	_proto.line5_i = function () {
		var t = new eui.Image();
		this.line5 = t;
		t.rotation = 336.68;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "line5_png";
		t.x = 90.81;
		t.y = 467.65;
		return t;
	};
	_proto.lm4_i = function () {
		var t = new MouseButton2();
		this.lm4 = t;
		t.horizontalCenter = -483;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 19.95;
		t.skinName = GameScenceSkin$Skin11;
		return t;
	};
	_proto.lm2_i = function () {
		var t = new MouseButton2();
		this.lm2 = t;
		t.horizontalCenter = -483;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 117.98;
		t.skinName = GameScenceSkin$Skin12;
		return t;
	};
	_proto.lm1_i = function () {
		var t = new MouseButton2();
		this.lm1 = t;
		t.horizontalCenter = -483;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 227.99;
		t.skinName = GameScenceSkin$Skin13;
		return t;
	};
	_proto.lm3_i = function () {
		var t = new MouseButton2();
		this.lm3 = t;
		t.horizontalCenter = -483;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 339.34;
		t.skinName = GameScenceSkin$Skin14;
		return t;
	};
	_proto.lm5_i = function () {
		var t = new MouseButton2();
		this.lm5 = t;
		t.horizontalCenter = -483;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 438.7;
		t.skinName = GameScenceSkin$Skin15;
		return t;
	};
	_proto.rm5_i = function () {
		var t = new MouseButton2();
		this.rm5 = t;
		t.horizontalCenter = 488;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 19.95;
		t.skinName = GameScenceSkin$Skin16;
		return t;
	};
	_proto.rm2_i = function () {
		var t = new MouseButton2();
		this.rm2 = t;
		t.horizontalCenter = 488;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 117.98;
		t.skinName = GameScenceSkin$Skin17;
		return t;
	};
	_proto.rm1_i = function () {
		var t = new MouseButton2();
		this.rm1 = t;
		t.horizontalCenter = 488;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 227.99;
		t.skinName = GameScenceSkin$Skin18;
		return t;
	};
	_proto.rm3_i = function () {
		var t = new MouseButton2();
		this.rm3 = t;
		t.horizontalCenter = 488;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 339.34;
		t.skinName = GameScenceSkin$Skin19;
		return t;
	};
	_proto.rm4_i = function () {
		var t = new MouseButton2();
		this.rm4 = t;
		t.horizontalCenter = 488;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 438.7;
		t.skinName = GameScenceSkin$Skin20;
		return t;
	};
	_proto.scoreGroup_i = function () {
		var t = new eui.Group();
		this.scoreGroup = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.width = 300;
		t.x = 550;
		t.y = 298.34;
		t.elementsContent = [this._Image2_i(),this.scoreLabel_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "fbg_png";
		t.top = 0;
		return t;
	};
	_proto.scoreLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.scoreLabel = t;
		t.font = "f4_fnt";
		t.horizontalCenter = 0;
		t.text = "cny 200";
		t.verticalCenter = 0;
		return t;
	};
	_proto.maskRect_i = function () {
		var t = new eui.Rect();
		this.maskRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.4;
		t.fillColor = 0x000000;
		t.height = 743.29;
		t.horizontalCenter = 6.5;
		t.scaleX = 1.5;
		t.scaleY = 2;
		t.top = -204;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.visible = false;
		t.width = 1101.91;
		return t;
	};
	_proto.shan_i = function () {
		var t = new eui.Rect();
		this.shan = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.4;
		t.fillColor = 0xFCFCFC;
		t.height = 479.48;
		t.strokeColor = 0xFCFCFC;
		t.visible = false;
		t.width = 248.75;
		t.x = 128.66;
		t.y = 59.33;
		return t;
	};
	_proto.shan0_i = function () {
		var t = new eui.Rect();
		this.shan0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.4;
		t.fillColor = 0xFCFCFC;
		t.height = 472.48;
		t.strokeColor = 0xFCFCFC;
		t.visible = false;
		t.width = 243.75;
		t.x = 427.33;
		t.y = 61;
		return t;
	};
	_proto.shan1_i = function () {
		var t = new eui.Rect();
		this.shan1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.4;
		t.fillColor = 0xFCFCFC;
		t.height = 476.48;
		t.strokeColor = 0xFCFCFC;
		t.visible = false;
		t.width = 243.42;
		t.x = 724.67;
		t.y = 61;
		return t;
	};
	_proto.dianji_i = function () {
		var t = new eui.Rect();
		this.dianji = t;
		t.fillAlpha = 0.01;
		t.fillColor = 0xfcfcfc;
		t.height = 474.54;
		t.strokeColor = 0xfcfcfc;
		t.visible = false;
		t.width = 838.18;
		t.x = 131.32;
		t.y = 61.97;
		return t;
	};
	_proto.group_i = function () {
		var t = new eui.Group();
		this.group = t;
		t.anchorOffsetX = 400;
		t.anchorOffsetY = 250;
		t.height = 500;
		t.horizontalCenter = 1.5;
		t.verticalCenter = -1;
		t.visible = false;
		t.width = 800;
		t.elementsContent = [this._Image3_i(),this.rewardScoreGroup_i(),this.freeslotGroup_i(),this.allGroup_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "skin_texture1_level1_03_png";
		t.top = 0;
		return t;
	};
	_proto.rewardScoreGroup_i = function () {
		var t = new eui.Group();
		this.rewardScoreGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group2_i(),this._Label1_i(),this.ewaiLabel_i(),this._Group3_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 140;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 282;
		t.y = 194.82;
		t.elementsContent = [this.image1_i(),this.image0_i(),this.image2_i()];
		return t;
	};
	_proto.image1_i = function () {
		var t = new eui.Image();
		this.image1 = t;
		t.anchorOffsetX = 46.5;
		t.anchorOffsetY = 70;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "skin_texture1_level1_78_png";
		t.verticalCenter = 0;
		t.x = 147;
		return t;
	};
	_proto.image0_i = function () {
		var t = new eui.Image();
		this.image0 = t;
		t.anchorOffsetX = 46.5;
		t.anchorOffsetY = 70;
		t.horizontalCenter = -116.5;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "skin_texture1_level1_78_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.image2_i = function () {
		var t = new eui.Image();
		this.image2 = t;
		t.anchorOffsetX = 46.5;
		t.anchorOffsetY = 70;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "skin_texture1_level1_78_png";
		t.verticalCenter = 0;
		t.x = 266.93;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 110;
		t.horizontalCenter = 0;
		t.size = 60;
		t.stroke = 2;
		t.strokeColor = 0x3a0054;
		t.text = "赢得神秘大奖";
		t.textAlign = "center";
		t.textColor = 0xf4b407;
		t.verticalAlign = "middle";
		t.y = 68.75;
		return t;
	};
	_proto.ewaiLabel_i = function () {
		var t = new eui.Label();
		this.ewaiLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.height = 70;
		t.horizontalCenter = -0.5;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.size = 30;
		t.text = "您赢得额外的10次免费旋转。";
		t.textAlign = "center";
		t.textColor = 0xF4B407;
		t.verticalAlign = "middle";
		t.y = 362.21;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.verticalCenter = 2;
		t.elementsContent = [this.numLabel_i()];
		return t;
	};
	_proto.numLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.numLabel = t;
		t.font = "f6_fnt";
		t.horizontalCenter = 0;
		t.text = "CNY 30000";
		t.verticalCenter = 0;
		return t;
	};
	_proto.freeslotGroup_i = function () {
		var t = new eui.Group();
		this.freeslotGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.horizontalCenter = 3.5;
		t.size = 30;
		t.stroke = 5;
		t.strokeColor = 0x3a0054;
		t.text = "点击\"旋转\"以开始";
		t.textColor = 0xeec413;
		t.y = 379.04;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.height = 100;
		t.horizontalCenter = 3.5;
		t.size = 90;
		t.stroke = 5;
		t.strokeColor = 0x3a0054;
		t.text = "旋转";
		t.textAlign = "center";
		t.textColor = 0xeec413;
		t.verticalAlign = "middle";
		t.y = 245.7;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "SimHei";
		t.height = 220.6;
		t.horizontalCenter = 0;
		t.scaleY = 0.3;
		t.size = 50;
		t.stroke = 2;
		t.strokeColor = 0x3a0054;
		t.text = "恭喜您!";
		t.textAlign = "center";
		t.textColor = 0xeec413;
		t.width = 49.76;
		t.y = 79.87;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "SimHei";
		t.height = 100;
		t.horizontalCenter = 3.5;
		t.size = 90;
		t.stroke = 5;
		t.strokeColor = 0x3a0054;
		t.text = "您赢得    次免费";
		t.textAlign = "center";
		t.textColor = 0xeec413;
		t.verticalAlign = "middle";
		t.y = 139.64;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Arial";
		t.height = 100;
		t.horizontalCenter = 2.5;
		t.scaleY = 1.2;
		t.size = 80;
		t.stroke = 5;
		t.strokeColor = 0x3A0054;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0xEEC413;
		t.verticalAlign = "middle";
		t.y = 131.85;
		return t;
	};
	_proto.allGroup_i = function () {
		var t = new eui.Group();
		this.allGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.allnumLabel0_i(),this._Label7_i(),this.allnumLabel_i()];
		return t;
	};
	_proto.allnumLabel0_i = function () {
		var t = new eui.BitmapLabel();
		this.allnumLabel0 = t;
		t.font = "f6_fnt";
		t.horizontalCenter = 0;
		t.scaleY = 0.8;
		t.text = "CNY";
		t.y = 234.6;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 100;
		t.horizontalCenter = 0;
		t.size = 80;
		t.stroke = 2;
		t.strokeColor = 0x3a0054;
		t.text = "总获胜";
		t.textAlign = "center";
		t.textColor = 0xeec413;
		t.verticalAlign = "middle";
		t.y = 108;
		return t;
	};
	_proto.allnumLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.allnumLabel = t;
		t.font = "f6_fnt";
		t.horizontalCenter = 0;
		t.scaleY = 0.8;
		t.text = "2.8";
		t.y = 294.44;
		return t;
	};
	return GameScenceSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/ItemSkin.exml'] = window.ItemSkin = (function (_super) {
	__extends(ItemSkin, _super);
	function ItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 148;
		this.width = 214;
		this.elementsContent = [this._Image1_i()];
	}
	var _proto = ItemSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bicon_M2_1_png";
		t.verticalCenter = 0;
		return t;
	};
	return ItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/shiZhiSkin/TouZhuHSliderSkin.exml'] = window.skins.TouZhuHSliderSkin = (function (_super) {
	__extends(TouZhuHSliderSkin, _super);
	function TouZhuHSliderSkin() {
		_super.call(this);
		this.skinParts = ["tsbar","diTu","track","thumb0","thumb0Dis","thumb01","sanjiao","tabela","sanjiaoDis","thumb","thumbDis"];
		
		this.height = 185;
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 482;
		this.elementsContent = [this.tsbar_i(),this.diTu_i(),this.track_i(),this.thumb0_i(),this.thumb0Dis_i(),this.thumb01_i(),this.sanjiao_i(),this.tabela_i(),this.sanjiaoDis_i(),this.thumb_i(),this.thumbDis_i()];
	}
	var _proto = TouZhuHSliderSkin.prototype;

	_proto.tsbar_i = function () {
		var t = new eui.Image();
		this.tsbar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 9.5;
		t.height = 19;
		t.scale9Grid = new egret.Rectangle(10,2,62,1);
		t.source = "圆角矩形 2 拷贝_png";
		t.width = 0;
		t.x = 43;
		t.y = 121.5;
		return t;
	};
	_proto.diTu_i = function () {
		var t = new eui.Image();
		this.diTu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 8.5;
		t.height = 17;
		t.left = 42;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "圆角矩形 22_png";
		t.width = 352;
		t.y = 122;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.alpha = 0.01;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "videoslot_popup_texture0_level1_67_png";
		t.width = 442;
		t.y = 112;
		return t;
	};
	_proto.thumb0_i = function () {
		var t = new eui.Rect();
		this.thumb0 = t;
		t.anchorOffsetX = 54.18;
		t.anchorOffsetY = 35.5;
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xFFBF00;
		t.height = 71;
		t.scaleX = 1.2;
		t.scaleY = 1.15;
		t.width = 108.36;
		t.x = 48.04;
		t.y = 32.39;
		return t;
	};
	_proto.thumb0Dis_i = function () {
		var t = new eui.Rect();
		this.thumb0Dis = t;
		t.anchorOffsetX = 54.18;
		t.anchorOffsetY = 35.5;
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xdcdadd;
		t.height = 71;
		t.scaleX = 1.2;
		t.scaleY = 1.15;
		t.visible = false;
		t.width = 108.36;
		t.x = 58.04;
		t.y = 42.39;
		return t;
	};
	_proto.thumb01_i = function () {
		var t = new eui.Image();
		this.thumb01 = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scale9Grid = new egret.Rectangle(19,18,72,37);
		t.scaleX = 1.1;
		t.scaleY = 1.19;
		t.source = "yuanJiao_png";
		t.visible = false;
		t.x = 45.67;
		t.y = 57.66;
		return t;
	};
	_proto.sanjiao_i = function () {
		var t = new eui.Image();
		this.sanjiao = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scaleX = 2.3;
		t.scaleY = 1.7;
		t.source = "sanJiao_png";
		t.x = 48;
		t.y = 46;
		return t;
	};
	_proto.tabela_i = function () {
		var t = new eui.Label();
		this.tabela = t;
		t.anchorOffsetX = 103;
		t.anchorOffsetY = 34.5;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 69;
		t.scaleX = 1.2;
		t.scaleY = 1.5;
		t.size = 50;
		t.text = "1.00";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 206;
		t.x = 48.04;
		t.y = 32.39;
		return t;
	};
	_proto.sanjiaoDis_i = function () {
		var t = new eui.Image();
		this.sanjiaoDis = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scaleY = 0.95;
		t.source = "sanjiaoDis_png";
		t.visible = false;
		t.x = 46.5;
		t.y = 64;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 48;
		t.scale9Grid = new egret.Rectangle(12,12,2,2);
		t.source = "huadongquan_png";
		t.x = 47;
		t.y = 122;
		return t;
	};
	_proto.thumbDis_i = function () {
		var t = new eui.Image();
		this.thumbDis = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 48;
		t.source = "dianDis_png";
		t.visible = false;
		t.x = 48;
		t.y = 122;
		return t;
	};
	return TouZhuHSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/shiZhiSkin/ZiDongYouXiHSliderSkin.exml'] = window.skins.ZiDongYouXiHSliderSkin = (function (_super) {
	__extends(ZiDongYouXiHSliderSkin, _super);
	function ZiDongYouXiHSliderSkin() {
		_super.call(this);
		this.skinParts = ["tsbar","diTu","track","thumb0","thumb0Dis","thumb01","sanjiao","tabela","sanjiaoDis","thumb","thumbDis"];
		
		this.height = 173;
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 661;
		this.elementsContent = [this.tsbar_i(),this.diTu_i(),this.track_i(),this.thumb0_i(),this.thumb0Dis_i(),this.thumb01_i(),this.sanjiao_i(),this.tabela_i(),this.sanjiaoDis_i(),this.thumb_i(),this.thumbDis_i()];
	}
	var _proto = ZiDongYouXiHSliderSkin.prototype;

	_proto.tsbar_i = function () {
		var t = new eui.Image();
		this.tsbar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 9;
		t.bottom = 39;
		t.height = 18;
		t.scale9Grid = new egret.Rectangle(183,2,38,0);
		t.source = "进度2_png";
		t.width = 0;
		t.x = 45;
		return t;
	};
	_proto.diTu_i = function () {
		var t = new eui.Image();
		this.diTu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 9;
		t.bottom = 39;
		t.height = 18;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "圆角矩形 22_png";
		t.width = 559;
		t.x = 44;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.alpha = 0.01;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "videoslot_popup_texture0_level1_67_png";
		t.width = 646;
		t.x = 0;
		t.y = 115;
		return t;
	};
	_proto.thumb0_i = function () {
		var t = new eui.Rect();
		this.thumb0 = t;
		t.anchorOffsetX = 54.18;
		t.anchorOffsetY = 35.5;
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xFFBF00;
		t.height = 71;
		t.scaleX = 1.1;
		t.scaleY = 1;
		t.width = 108.36;
		t.x = 48.66;
		t.y = 38.39;
		return t;
	};
	_proto.thumb0Dis_i = function () {
		var t = new eui.Rect();
		this.thumb0Dis = t;
		t.anchorOffsetX = 54.18;
		t.anchorOffsetY = 35.5;
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xdcdadd;
		t.height = 71;
		t.scaleX = 1.1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 108.36;
		t.x = 58.66;
		t.y = 48.39;
		return t;
	};
	_proto.thumb01_i = function () {
		var t = new eui.Image();
		this.thumb01 = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scale9Grid = new egret.Rectangle(16,16,80,43);
		t.scaleX = 1.1;
		t.scaleY = 1.14;
		t.source = "yuanJiao_png";
		t.visible = false;
		t.x = 48;
		t.y = 58;
		return t;
	};
	_proto.sanjiao_i = function () {
		var t = new eui.Image();
		this.sanjiao = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "sanJiao_png";
		t.x = 47.66;
		t.y = 52;
		return t;
	};
	_proto.tabela_i = function () {
		var t = new eui.Label();
		this.tabela = t;
		t.anchorOffsetX = 103;
		t.anchorOffsetY = 34.5;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 69;
		t.scaleX = 0.9;
		t.scaleY = 1.2;
		t.size = 50;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 206;
		t.x = 48.66;
		t.y = 38.39;
		return t;
	};
	_proto.sanjiaoDis_i = function () {
		var t = new eui.Image();
		this.sanjiaoDis = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scaleX = 0.8;
		t.scaleY = 0.79;
		t.source = "sanjiaoDis_png";
		t.visible = false;
		t.x = 65;
		t.y = 72;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 48;
		t.scale9Grid = new egret.Rectangle(12,12,2,2);
		t.source = "huadongquan_png";
		t.x = 48.66;
		t.y = 122;
		return t;
	};
	_proto.thumbDis_i = function () {
		var t = new eui.Image();
		this.thumbDis = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 48;
		t.source = "dianDis_png";
		t.visible = false;
		t.x = 49;
		t.y = 122;
		return t;
	};
	return ZiDongYouXiHSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/shiZhiSkin/DanCiHSliderSkin.exml'] = window.skins.DanCiHSliderSkin = (function (_super) {
	__extends(DanCiHSliderSkin, _super);
	function DanCiHSliderSkin() {
		_super.call(this);
		this.skinParts = ["tsbar","diTu","track","thumb0","thumb0Dis","thumb01","tabela","sanjiao","sanjiaoDis","thumb","thumbDis"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 816;
		this.elementsContent = [this.tsbar_i(),this.diTu_i(),this.track_i(),this.thumb0_i(),this.thumb0Dis_i(),this.thumb01_i(),this.tabela_i(),this.sanjiao_i(),this.sanjiaoDis_i(),this.thumb_i(),this.thumbDis_i()];
	}
	var _proto = DanCiHSliderSkin.prototype;

	_proto.tsbar_i = function () {
		var t = new eui.Image();
		this.tsbar = t;
		t.anchorOffsetY = 9;
		t.height = 18;
		t.scale9Grid = new egret.Rectangle(183,7,38,12);
		t.source = "进度2_png";
		t.width = 0;
		t.x = 43;
		t.y = 115;
		return t;
	};
	_proto.diTu_i = function () {
		var t = new eui.Image();
		this.diTu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 9;
		t.height = 18;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "圆角矩形 22_png";
		t.width = 688;
		t.x = 42;
		t.y = 115;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.alpha = 0.01;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 13.5;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "videoslot_popup_texture0_level1_67_png";
		t.width = 776;
		t.x = 0;
		t.y = 118.5;
		return t;
	};
	_proto.thumb0_i = function () {
		var t = new eui.Rect();
		this.thumb0 = t;
		t.alpha = 1;
		t.anchorOffsetX = 54.18;
		t.anchorOffsetY = 35.5;
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xffbf00;
		t.height = 71;
		t.scaleX = 1.4;
		t.scaleY = 1;
		t.width = 108.36;
		t.x = 49;
		t.y = 27.4;
		return t;
	};
	_proto.thumb0Dis_i = function () {
		var t = new eui.Rect();
		this.thumb0Dis = t;
		t.alpha = 1;
		t.anchorOffsetX = 54.18;
		t.anchorOffsetY = 35.5;
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xdcdadd;
		t.height = 71;
		t.scaleX = 1.4;
		t.scaleY = 1;
		t.visible = false;
		t.width = 108.36;
		t.x = 59;
		t.y = 37.4;
		return t;
	};
	_proto.thumb01_i = function () {
		var t = new eui.Image();
		this.thumb01 = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scale9Grid = new egret.Rectangle(46,34,36,13);
		t.scaleX = 1.1;
		t.scaleY = 1.19;
		t.source = "yuanJiao_png";
		t.visible = false;
		t.x = 49.67;
		t.y = 49;
		return t;
	};
	_proto.tabela_i = function () {
		var t = new eui.Label();
		this.tabela = t;
		t.anchorOffsetX = 157;
		t.anchorOffsetY = 34.5;
		t.bold = true;
		t.height = 69;
		t.scaleX = 0.9;
		t.scaleY = 1.2;
		t.size = 50;
		t.text = "0.00";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 314;
		t.x = 49;
		t.y = 27.4;
		return t;
	};
	_proto.sanjiao_i = function () {
		var t = new eui.Image();
		this.sanjiao = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "sanJiao_png";
		t.x = 47.67;
		t.y = 42;
		return t;
	};
	_proto.sanjiaoDis_i = function () {
		var t = new eui.Image();
		this.sanjiaoDis = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scaleX = 0.8;
		t.scaleY = 0.79;
		t.source = "sanjiaoDis_png";
		t.visible = false;
		t.x = 53;
		t.y = 51;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 48;
		t.scale9Grid = new egret.Rectangle(12,12,2,2);
		t.source = "huadongquan_png";
		t.x = 47;
		t.y = 112;
		return t;
	};
	_proto.thumbDis_i = function () {
		var t = new eui.Image();
		this.thumbDis = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 48;
		t.source = "dianDis_png";
		t.visible = false;
		t.x = 49;
		t.y = 111;
		return t;
	};
	return DanCiHSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/shiZhiSkin/DanCiJiaSkin.exml'] = window.skins.DanCiJiaSkin = (function (_super) {
	__extends(DanCiJiaSkin, _super);
	function DanCiJiaSkin() {
		_super.call(this);
		this.skinParts = ["tsbar","diTu","track","thumb0","thumb0Dis","thumb01","tabela","sanjiao","sanjiaoDis","thumb","thumbDis"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 816;
		this.elementsContent = [this.tsbar_i(),this.diTu_i(),this.track_i(),this.thumb0_i(),this.thumb0Dis_i(),this.thumb01_i(),this.tabela_i(),this.sanjiao_i(),this.sanjiaoDis_i(),this.thumb_i(),this.thumbDis_i()];
	}
	var _proto = DanCiJiaSkin.prototype;

	_proto.tsbar_i = function () {
		var t = new eui.Image();
		this.tsbar = t;
		t.anchorOffsetY = 9.5;
		t.height = 19;
		t.scale9Grid = new egret.Rectangle(183,7,38,12);
		t.source = "进度2_png";
		t.width = 0;
		t.x = 45;
		t.y = 113.99;
		return t;
	};
	_proto.diTu_i = function () {
		var t = new eui.Image();
		this.diTu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 9;
		t.height = 18;
		t.left = 44;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "圆角矩形 22_png";
		t.width = 688;
		t.y = 114.35;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.alpha = 0.01;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 13.5;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "videoslot_popup_texture0_level1_67_png";
		t.width = 776;
		t.x = 0;
		t.y = 118.5;
		return t;
	};
	_proto.thumb0_i = function () {
		var t = new eui.Rect();
		this.thumb0 = t;
		t.alpha = 1;
		t.anchorOffsetX = 54.18;
		t.anchorOffsetY = 35.5;
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xFFBF00;
		t.height = 71;
		t.scaleX = 1.1;
		t.scaleY = 1.19;
		t.width = 108.36;
		t.x = 50.37;
		t.y = 20.56;
		return t;
	};
	_proto.thumb0Dis_i = function () {
		var t = new eui.Rect();
		this.thumb0Dis = t;
		t.alpha = 1;
		t.anchorOffsetX = 54.18;
		t.anchorOffsetY = 35.5;
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xdcdadd;
		t.height = 71;
		t.scaleX = 1.1;
		t.scaleY = 1.19;
		t.visible = false;
		t.width = 108.36;
		t.x = 60.37;
		t.y = 30.56;
		return t;
	};
	_proto.thumb01_i = function () {
		var t = new eui.Image();
		this.thumb01 = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scale9Grid = new egret.Rectangle(28,23,63,26);
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.source = "yuanJiao_png";
		t.visible = false;
		t.x = 50.67;
		t.y = 47;
		return t;
	};
	_proto.tabela_i = function () {
		var t = new eui.Label();
		this.tabela = t;
		t.anchorOffsetX = 157;
		t.anchorOffsetY = 34.5;
		t.bold = true;
		t.height = 69;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.size = 50;
		t.text = "0.00";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 314;
		t.x = 50.37;
		t.y = 20.56;
		return t;
	};
	_proto.sanjiao_i = function () {
		var t = new eui.Image();
		this.sanjiao = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scaleX = 2.3;
		t.scaleY = 1.7;
		t.source = "sanJiao_png";
		t.x = 47.67;
		t.y = 35.33;
		return t;
	};
	_proto.sanjiaoDis_i = function () {
		var t = new eui.Image();
		this.sanjiaoDis = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scaleX = 0.8;
		t.scaleY = 0.79;
		t.source = "sanjiaoDis_png";
		t.visible = false;
		t.x = 46;
		t.y = 61;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 48;
		t.scale9Grid = new egret.Rectangle(12,12,2,2);
		t.source = "huadongquan_png";
		t.x = 48.66;
		t.y = 111;
		return t;
	};
	_proto.thumbDis_i = function () {
		var t = new eui.Image();
		this.thumbDis = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 48;
		t.source = "dianDis_png";
		t.visible = false;
		t.x = 49;
		t.y = 111;
		return t;
	};
	return DanCiJiaSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/shiZhiSkin/DanCiJianSkin.exml'] = window.skins.DanCiJianSkin = (function (_super) {
	__extends(DanCiJianSkin, _super);
	function DanCiJianSkin() {
		_super.call(this);
		this.skinParts = ["tsbar","diTu","track","thumb0","thumb0Dis","thumb01","tabela","sanjiao","sanjiaoDis","thumb","thumbDis"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 816;
		this.elementsContent = [this.tsbar_i(),this.diTu_i(),this.track_i(),this.thumb0_i(),this.thumb0Dis_i(),this.thumb01_i(),this.tabela_i(),this.sanjiao_i(),this.sanjiaoDis_i(),this.thumb_i(),this.thumbDis_i()];
	}
	var _proto = DanCiJianSkin.prototype;

	_proto.tsbar_i = function () {
		var t = new eui.Image();
		this.tsbar = t;
		t.anchorOffsetY = 9.5;
		t.height = 19;
		t.scale9Grid = new egret.Rectangle(183,7,38,12);
		t.source = "进度2_png";
		t.width = 0;
		t.x = 45;
		t.y = 116;
		return t;
	};
	_proto.diTu_i = function () {
		var t = new eui.Image();
		this.diTu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 9;
		t.height = 18;
		t.left = 44;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "圆角矩形 22_png";
		t.width = 688;
		t.y = 116;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.alpha = 0.01;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 13.5;
		t.height = 20;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "videoslot_popup_texture0_level1_67_png";
		t.width = 776;
		t.x = 0;
		t.y = 119.5;
		return t;
	};
	_proto.thumb0_i = function () {
		var t = new eui.Rect();
		this.thumb0 = t;
		t.alpha = 1;
		t.anchorOffsetX = 54.18;
		t.anchorOffsetY = 35.5;
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xFFBF00;
		t.height = 71;
		t.scaleX = 1.1;
		t.scaleY = 1;
		t.width = 108.36;
		t.x = 50.04;
		t.y = 25.39;
		return t;
	};
	_proto.thumb0Dis_i = function () {
		var t = new eui.Rect();
		this.thumb0Dis = t;
		t.alpha = 1;
		t.anchorOffsetX = 54.18;
		t.anchorOffsetY = 35.5;
		t.ellipseHeight = 18;
		t.ellipseWidth = 18;
		t.fillColor = 0xdcdadd;
		t.height = 71;
		t.scaleX = 1.1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 108.36;
		t.x = 60.04;
		t.y = 35.39;
		return t;
	};
	_proto.thumb01_i = function () {
		var t = new eui.Image();
		this.thumb01 = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scale9Grid = new egret.Rectangle(18,18,75,38);
		t.scaleX = 1.1;
		t.scaleY = 1.19;
		t.source = "yuanJiao_png";
		t.visible = false;
		t.x = 49.67;
		t.y = 46;
		return t;
	};
	_proto.tabela_i = function () {
		var t = new eui.Label();
		this.tabela = t;
		t.anchorOffsetX = 157;
		t.anchorOffsetY = 34.5;
		t.bold = true;
		t.fontFamily = "Arial";
		t.height = 69;
		t.scaleY = 1.2;
		t.size = 50;
		t.text = "0.00";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 314;
		t.x = 50.04;
		t.y = 25.39;
		return t;
	};
	_proto.sanjiao_i = function () {
		var t = new eui.Image();
		this.sanjiao = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "sanJiao_png";
		t.x = 47.67;
		t.y = 40;
		return t;
	};
	_proto.sanjiaoDis_i = function () {
		var t = new eui.Image();
		this.sanjiaoDis = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 57.5;
		t.scaleX = 0.8;
		t.scaleY = 0.79;
		t.source = "sanjiaoDis_png";
		t.visible = false;
		t.x = 46.5;
		t.y = 61;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 48;
		t.scale9Grid = new egret.Rectangle(12,12,2,2);
		t.source = "huadongquan_png";
		t.x = 48.66;
		t.y = 111;
		return t;
	};
	_proto.thumbDis_i = function () {
		var t = new eui.Image();
		this.thumbDis = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 48;
		t.source = "dianDis_png";
		t.visible = false;
		t.x = 49;
		t.y = 111;
		return t;
	};
	return DanCiJianSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/SetSkin.exml'] = window.SetSkin = (function (_super) {
	__extends(SetSkin, _super);
	var SetSkin$Skin21 = 	(function (_super) {
		__extends(SetSkin$Skin21, _super);
		function SetSkin$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","赔付表                                                            _png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetSkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "赔付表暗_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SetSkin$Skin21;
	})(eui.Skin);

	var SetSkin$Skin22 = 	(function (_super) {
		__extends(SetSkin$Skin22, _super);
		function SetSkin$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","游戏历史_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetSkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "游戏历史暗_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SetSkin$Skin22;
	})(eui.Skin);

	var SetSkin$Skin23 = 	(function (_super) {
		__extends(SetSkin$Skin23, _super);
		function SetSkin$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","游戏规则_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetSkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "游戏规则暗_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SetSkin$Skin23;
	})(eui.Skin);

	var SetSkin$Skin24 = 	(function (_super) {
		__extends(SetSkin$Skin24, _super);
		function SetSkin$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","设置_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "设置暗_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SetSkin$Skin24;
	})(eui.Skin);

	var SetSkin$Skin25 = 	(function (_super) {
		__extends(SetSkin$Skin25, _super);
		function SetSkin$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","投注_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "投注暗_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return SetSkin$Skin25;
	})(eui.Skin);

	function SetSkin() {
		_super.call(this);
		this.skinParts = ["diTuRect","pfBg","upRect","shiZhi1","touZhu2","touZhu1","touZhu","shiZhi2","autoPlay","stopAuto","autoNumBer","ziDong2","ziDong1","ziDongYouXi","shiZhi3","danCi2","danCi1","danCi","shiZhi4","jia1","jia2","yuEJia","shiZhi5","jian1","jian2","yuEJian","renHeTo","freeGameTo","down","downW","down0","touZhuGroup","touZhuScroller","musicBtn","autoBtn","zuoShouTo","speedBtn","sheZhiGroup","sheZhiScroller","peifuGroup","peiFuScroller","guiZei0","guiZei1","guiZeiGroup","guiZeScroller","liShiGroup","liShiScroller","liShiUpGroup","liShiDiTuRect0","liShiInfo","liShiInfoGroup","upXuanZe","upPeiFu","upLiShi","upGuiZe","upSet","upTouZhu","up"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this.diTuRect_i(),this.pfBg_i(),this.touZhuScroller_i(),this.sheZhiScroller_i(),this.peiFuScroller_i(),this.guiZeScroller_i(),this.liShiScroller_i(),this.liShiUpGroup_i(),this.liShiDiTuRect0_i(),this.liShiInfoGroup_i(),this.up_i()];
		this.upRect_i();
		
		this._Image3_i();
		
		this.downW_i();
		
		this.down0_i();
		
		this._Image13_i();
		
		this._Rect1_i();
		
		this._Rect2_i();
		
		this._Rect3_i();
		
		this._Image29_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("upRect","touZhuGroup",0,""),
					new eui.AddItems("downW","touZhuGroup",1,""),
					new eui.AddItems("_Image13","touZhuGroup",1,""),
					new eui.AddItems("_Rect1","sheZhiGroup",1,""),
					new eui.AddItems("_Rect2","peifuGroup",2,"_Image23"),
					new eui.SetProperty("diTuRect","left",0),
					new eui.SetProperty("diTuRect","right",0),
					new eui.SetProperty("diTuRect","top",0),
					new eui.SetProperty("diTuRect","bottom",0),
					new eui.SetProperty("pfBg","scaleX",1),
					new eui.SetProperty("pfBg","scaleY",1.5),
					new eui.SetProperty("pfBg","touchEnabled",false),
					new eui.SetProperty("pfBg","height",857.666667),
					new eui.SetProperty("pfBg","source","shuBlue_png"),
					new eui.SetProperty("pfBg","width",1280),
					new eui.SetProperty("pfBg","x",0),
					new eui.SetProperty("pfBg","y",-269),
					new eui.SetProperty("pfBg","visible",false),
					new eui.SetProperty("upRect","visible",false),
					new eui.SetProperty("_Image1","x",35.05),
					new eui.SetProperty("_Image1","y",90.43),
					new eui.SetProperty("_Image1","left",49),
					new eui.SetProperty("_Image1","scaleX",0.66),
					new eui.SetProperty("_Image1","scaleY",0.66),
					new eui.SetProperty("_Image1","source","tou2_png"),
					new eui.SetProperty("_Image2","source","(CNY)_png"),
					new eui.SetProperty("_Image2","y",163.81),
					new eui.SetProperty("_Image2","x",50.93),
					new eui.SetProperty("_Image2","scaleX",0.66),
					new eui.SetProperty("_Image2","scaleY",0.66),
					new eui.SetProperty("shiZhi1","y",59.28),
					new eui.SetProperty("shiZhi1","x",324.87),
					new eui.SetProperty("shiZhi1","scaleX",0.7),
					new eui.SetProperty("shiZhi1","scaleY",0.7),
					new eui.SetProperty("touZhu2","bold",true),
					new eui.SetProperty("touZhu2","right",1.1900000000000546),
					new eui.SetProperty("touZhu2","bottom",52.66999999999999),
					new eui.SetProperty("touZhu2","size",35),
					new eui.SetProperty("touZhu2","fontFamily","Arial"),
					new eui.SetProperty("touZhu2","textColor",0x9b9b9b),
					new eui.SetProperty("touZhu1","bold",true),
					new eui.SetProperty("touZhu1","left",258),
					new eui.SetProperty("touZhu1","bottom",51.66999999999999),
					new eui.SetProperty("touZhu1","size",35),
					new eui.SetProperty("touZhu1","fontFamily","Arial"),
					new eui.SetProperty("touZhu1","textColor",0x9b9b9b),
					new eui.SetProperty("touZhu","y",60.74),
					new eui.SetProperty("touZhu","height",212.67),
					new eui.SetProperty("touZhu","scaleX",0.9),
					new eui.SetProperty("touZhu","scaleY",0.9),
					new eui.SetProperty("touZhu","left",0),
					new eui.SetProperty("touZhu","anchorOffsetX",0),
					new eui.SetProperty("touZhu","width",762.19),
					new eui.SetProperty("_Image4","y",42.71),
					new eui.SetProperty("_Image4","left",40),
					new eui.SetProperty("_Image4","scaleX",0.68),
					new eui.SetProperty("_Image4","scaleY",0.68),
					new eui.SetProperty("_Image4","source","autoGame_png"),
					new eui.SetProperty("shiZhi2","x",91.71),
					new eui.SetProperty("shiZhi2","scaleX",0.68),
					new eui.SetProperty("shiZhi2","scaleY",0.68),
					new eui.SetProperty("shiZhi2","y",125.03),
					new eui.SetProperty("shiZhi2","skinName","skins.ZiDongYouXiHSliderSkin"),
					new eui.SetProperty("autoPlay","x",604),
					new eui.SetProperty("autoPlay","y",86),
					new eui.SetProperty("autoPlay","scaleY",0.7),
					new eui.SetProperty("autoPlay","scaleX",0.7),
					new eui.SetProperty("autoPlay","source","uiElements_03-062_png"),
					new eui.SetProperty("stopAuto","y",86),
					new eui.SetProperty("stopAuto","x",604),
					new eui.SetProperty("stopAuto","visible",false),
					new eui.SetProperty("autoNumBer","x",516),
					new eui.SetProperty("autoNumBer","y",141.1),
					new eui.SetProperty("autoNumBer","right",45),
					new eui.SetProperty("autoNumBer","bottom",59),
					new eui.SetProperty("autoNumBer","touchEnabled",false),
					new eui.SetProperty("autoNumBer","size",40),
					new eui.SetProperty("autoNumBer","text","10"),
					new eui.SetProperty("autoNumBer","scaleY",1.5),
					new eui.SetProperty("autoNumBer","fontFamily","Arial"),
					new eui.SetProperty("autoNumBer","width",104),
					new eui.SetProperty("autoNumBer","bold",true),
					new eui.SetProperty("_Image5","y",360.27),
					new eui.SetProperty("_Image5","scaleY",0.7),
					new eui.SetProperty("_Image5","x",30.12),
					new eui.SetProperty("_Image5","scaleX",0.7),
					new eui.SetProperty("_Image5","source","stopAuto_png"),
					new eui.SetProperty("ziDong2","bold",true),
					new eui.SetProperty("ziDong2","text","100"),
					new eui.SetProperty("ziDong2","right",189),
					new eui.SetProperty("ziDong2","y",190.77),
					new eui.SetProperty("ziDong2","size",35),
					new eui.SetProperty("ziDong2","fontFamily","Arial"),
					new eui.SetProperty("ziDong2","textColor",0x9b9b9b),
					new eui.SetProperty("ziDong1","bold",true),
					new eui.SetProperty("ziDong1","y",189.77),
					new eui.SetProperty("ziDong1","left",41),
					new eui.SetProperty("ziDong1","text","10"),
					new eui.SetProperty("ziDong1","size",35),
					new eui.SetProperty("ziDong1","fontFamily","Arial"),
					new eui.SetProperty("ziDong1","textColor",0x9b9b9b),
					new eui.SetProperty("ziDongYouXi","scaleX",0.9),
					new eui.SetProperty("ziDongYouXi","scaleY",0.9),
					new eui.SetProperty("ziDongYouXi","anchorOffsetX",0),
					new eui.SetProperty("ziDongYouXi","right",2.2222222222221717),
					new eui.SetProperty("ziDongYouXi","width",791),
					new eui.SetProperty("ziDongYouXi","y",22.36),
					new eui.SetProperty("_Image6","y",-7.52),
					new eui.SetProperty("_Image6","scaleX",0.68),
					new eui.SetProperty("_Image6","scaleY",0.66),
					new eui.SetProperty("_Image6","x",38.37),
					new eui.SetProperty("_Image7","x",342),
					new eui.SetProperty("_Image7","y",-8.73),
					new eui.SetProperty("_Image7","left",431),
					new eui.SetProperty("_Image7","scaleX",0.66),
					new eui.SetProperty("_Image7","scaleY",0.66),
					new eui.SetProperty("shiZhi3","scaleX",0.63),
					new eui.SetProperty("shiZhi3","scaleY",0.63),
					new eui.SetProperty("shiZhi3","y",83.77),
					new eui.SetProperty("shiZhi3","horizontalCenter",-40.5),
					new eui.SetProperty("danCi2","bold",true),
					new eui.SetProperty("danCi2","size",35),
					new eui.SetProperty("danCi2","right",29),
					new eui.SetProperty("danCi2","bottom",14),
					new eui.SetProperty("danCi2","text","2000.00"),
					new eui.SetProperty("danCi2","fontFamily","Arial"),
					new eui.SetProperty("danCi2","textColor",0x9b9b9b),
					new eui.SetProperty("danCi1","bold",true),
					new eui.SetProperty("danCi1","text","0.00"),
					new eui.SetProperty("danCi1","size",35),
					new eui.SetProperty("danCi1","bottom",13),
					new eui.SetProperty("danCi1","x",30.92),
					new eui.SetProperty("danCi1","fontFamily","Arial"),
					new eui.SetProperty("danCi1","textColor",0x9b9b9b),
					new eui.SetProperty("danCi","y",474.17),
					new eui.SetProperty("danCi","anchorOffsetX",0),
					new eui.SetProperty("danCi","scaleX",0.9),
					new eui.SetProperty("danCi","scaleY",0.9),
					new eui.SetProperty("danCi","right",6.222222222222172),
					new eui.SetProperty("danCi","width",791),
					new eui.SetProperty("_Image8","left",50),
					new eui.SetProperty("_Image8","scaleX",0.66),
					new eui.SetProperty("_Image8","scaleY",0.66),
					new eui.SetProperty("shiZhi4","horizontalCenter",-29.5),
					new eui.SetProperty("shiZhi4","skinName","skins.DanCiJiaSkin"),
					new eui.SetProperty("shiZhi4","scaleY",0.63),
					new eui.SetProperty("shiZhi4","scaleX",0.63),
					new eui.SetProperty("shiZhi4","y",128.48),
					new eui.SetProperty("jia1","x",38.47),
					new eui.SetProperty("jia1","bold",true),
					new eui.SetProperty("jia1","size",35),
					new eui.SetProperty("jia1","text","0.00"),
					new eui.SetProperty("jia1","y",175.28),
					new eui.SetProperty("jia1","fontFamily","Arial"),
					new eui.SetProperty("jia1","textColor",0x9b9b9b),
					new eui.SetProperty("jia2","bold",true),
					new eui.SetProperty("jia2","text","20000.00"),
					new eui.SetProperty("jia2","size",35),
					new eui.SetProperty("jia2","right",23),
					new eui.SetProperty("jia2","y",179.02),
					new eui.SetProperty("jia2","fontFamily","Arial"),
					new eui.SetProperty("jia2","textColor",0x9b9b9b),
					new eui.SetProperty("yuEJia","y",661.4),
					new eui.SetProperty("yuEJia","scaleX",0.9),
					new eui.SetProperty("yuEJia","scaleY",0.9),
					new eui.SetProperty("yuEJia","right",14.222222222222172),
					new eui.SetProperty("yuEJia","width",791),
					new eui.SetProperty("_Image9","x",37.53),
					new eui.SetProperty("_Image9","y",6.42),
					new eui.SetProperty("_Image9","scaleX",0.66),
					new eui.SetProperty("_Image9","scaleY",0.66),
					new eui.SetProperty("_Image10","x",342),
					new eui.SetProperty("_Image10","y",9.42),
					new eui.SetProperty("_Image10","scaleX",0.66),
					new eui.SetProperty("_Image10","scaleY",0.66),
					new eui.SetProperty("shiZhi5","horizontalCenter",-45.5),
					new eui.SetProperty("shiZhi5","skinName","skins.DanCiJianSkin"),
					new eui.SetProperty("shiZhi5","scaleX",0.63),
					new eui.SetProperty("shiZhi5","scaleY",0.63),
					new eui.SetProperty("shiZhi5","bottom",-10.300000000000011),
					new eui.SetProperty("jian1","bold",true),
					new eui.SetProperty("jian1","text","0.00"),
					new eui.SetProperty("jian1","bottom",1.6999999999999886),
					new eui.SetProperty("jian1","size",35),
					new eui.SetProperty("jian1","x",26.64),
					new eui.SetProperty("jian1","fontFamily","Arial"),
					new eui.SetProperty("jian1","textColor",0x9b9b9b),
					new eui.SetProperty("jian2","x",240),
					new eui.SetProperty("jian2","bold",true),
					new eui.SetProperty("jian2","bottom",0.6999999999999886),
					new eui.SetProperty("jian2","right",35),
					new eui.SetProperty("jian2","size",35),
					new eui.SetProperty("jian2","fontFamily","Arial"),
					new eui.SetProperty("jian2","text","20000.00"),
					new eui.SetProperty("jian2","textColor",0x9b9b9b),
					new eui.SetProperty("yuEJian","y",916.42),
					new eui.SetProperty("yuEJian","scaleX",0.9),
					new eui.SetProperty("yuEJian","scaleY",0.9),
					new eui.SetProperty("yuEJian","right",2.2222222222221717),
					new eui.SetProperty("yuEJian","width",791),
					new eui.SetProperty("yuEJian","anchorOffsetY",0),
					new eui.SetProperty("yuEJian","height",187.7),
					new eui.SetProperty("_Image11","x",40),
					new eui.SetProperty("_Image11","y",135.7),
					new eui.SetProperty("_Image12","x",40),
					new eui.SetProperty("_Image12","y",42.7),
					new eui.SetProperty("renHeTo","scaleX",1.5),
					new eui.SetProperty("renHeTo","scaleY",1.5),
					new eui.SetProperty("freeGameTo","scaleX",1.5),
					new eui.SetProperty("freeGameTo","scaleY",1.5),
					new eui.SetProperty("down","y",1166.52),
					new eui.SetProperty("down","scaleX",0.9),
					new eui.SetProperty("down","scaleY",0.9),
					new eui.SetProperty("down","right",2.2222222222221717),
					new eui.SetProperty("down","width",791),
					new eui.SetProperty("touZhuGroup","y",0),
					new eui.SetProperty("touZhuGroup","scaleX",0.9),
					new eui.SetProperty("touZhuGroup","scaleY",0.9),
					new eui.SetProperty("touZhuGroup","touchEnabled",true),
					new eui.SetProperty("touZhuScroller","bottom",37),
					new eui.SetProperty("touZhuScroller","top",60),
					new eui.SetProperty("touZhuScroller","width",1280),
					new eui.SetProperty("touZhuScroller","x",0),
					new eui.SetProperty("_Image14","y",96.26),
					new eui.SetProperty("_Image14","x",152.52),
					new eui.SetProperty("_Image14","scaleX",0.63),
					new eui.SetProperty("_Image14","scaleY",0.63),
					new eui.SetProperty("_Image15","y",200.37),
					new eui.SetProperty("_Image15","scaleX",0.63),
					new eui.SetProperty("_Image15","scaleY",0.63),
					new eui.SetProperty("_Image16","y",310.22),
					new eui.SetProperty("_Image16","scaleX",0.63),
					new eui.SetProperty("_Image16","scaleY",0.63),
					new eui.SetProperty("_Image17","x",73.5),
					new eui.SetProperty("_Image17","y",284.72),
					new eui.SetProperty("_Image17","scaleX",0.83),
					new eui.SetProperty("_Image17","scaleY",0.83),
					new eui.SetProperty("_Image18","x",63.94),
					new eui.SetProperty("_Image18","y",185.88),
					new eui.SetProperty("_Image18","scaleX",0.74),
					new eui.SetProperty("_Image18","scaleY",0.8),
					new eui.SetProperty("_Image19","x",76.98),
					new eui.SetProperty("_Image19","y",400.65),
					new eui.SetProperty("_Image19","scaleX",0.83),
					new eui.SetProperty("_Image19","scaleY",0.83),
					new eui.SetProperty("_Image20","y",419.59),
					new eui.SetProperty("_Image20","x",150.48),
					new eui.SetProperty("_Image20","scaleX",0.63),
					new eui.SetProperty("_Image20","scaleY",0.63),
					new eui.SetProperty("_Image21","x",76.44),
					new eui.SetProperty("_Image21","y",74.72),
					new eui.SetProperty("_Image21","scaleX",0.73),
					new eui.SetProperty("_Image21","scaleY",0.8),
					new eui.SetProperty("musicBtn","scaleX",1.4),
					new eui.SetProperty("musicBtn","scaleY",1.4),
					new eui.SetProperty("musicBtn","y",65.25),
					new eui.SetProperty("musicBtn","x",1110.56),
					new eui.SetProperty("autoBtn","scaleX",1.4),
					new eui.SetProperty("autoBtn","scaleY",1.4),
					new eui.SetProperty("autoBtn","y",172.42),
					new eui.SetProperty("autoBtn","x",1110.56),
					new eui.SetProperty("zuoShouTo","scaleX",1.4),
					new eui.SetProperty("zuoShouTo","scaleY",1.4),
					new eui.SetProperty("zuoShouTo","y",284.12),
					new eui.SetProperty("zuoShouTo","x",1106),
					new eui.SetProperty("speedBtn","y",392.13),
					new eui.SetProperty("speedBtn","scaleX",1.4),
					new eui.SetProperty("speedBtn","scaleY",1.4),
					new eui.SetProperty("speedBtn","x",1107.52),
					new eui.SetProperty("sheZhiGroup","anchorOffsetY",0),
					new eui.SetProperty("sheZhiGroup","height",612.06),
					new eui.SetProperty("sheZhiGroup","anchorOffsetX",0),
					new eui.SetProperty("sheZhiGroup","width",720.91),
					new eui.SetProperty("sheZhiScroller","anchorOffsetY",0),
					new eui.SetProperty("sheZhiScroller","bottom",37),
					new eui.SetProperty("sheZhiScroller","top",60),
					new eui.SetProperty("sheZhiScroller","width",1280),
					new eui.SetProperty("sheZhiScroller","x",0),
					new eui.SetProperty("sheZhiScroller","visible",false),
					new eui.SetProperty("_Image22","alpha",0.37),
					new eui.SetProperty("_Image22","source","peifubg_png"),
					new eui.SetProperty("_Image22","visible",false),
					new eui.SetProperty("_Image23","scaleY",1.55),
					new eui.SetProperty("_Rect4","y",2576.99),
					new eui.SetProperty("_Rect4","left",0),
					new eui.SetProperty("_Rect4","right",0),
					new eui.SetProperty("peifuGroup","touchEnabled",false),
					new eui.SetProperty("peiFuScroller","bottom",37),
					new eui.SetProperty("peiFuScroller","top",59),
					new eui.SetProperty("peiFuScroller","width",1280),
					new eui.SetProperty("peiFuScroller","x",0),
					new eui.SetProperty("peiFuScroller","visible",false),
					new eui.SetProperty("guiZei0","y",28.26),
					new eui.SetProperty("guiZei0","horizontalCenter",-22),
					new eui.SetProperty("guiZei0","scaleY",1.06),
					new eui.SetProperty("guiZei0","anchorOffsetX",1083),
					new eui.SetProperty("guiZei0","scaleX",1.06),
					new eui.SetProperty("guiZei0","source","guize_01_png"),
					new eui.SetProperty("guiZei1","scaleY",1.06),
					new eui.SetProperty("guiZei1","y",2229.32),
					new eui.SetProperty("guiZei1","horizontalCenter",0.5),
					new eui.SetProperty("guiZei1","anchorOffsetX",1133),
					new eui.SetProperty("guiZei1","scaleX",1.06),
					new eui.SetProperty("_Rect5","width",1280),
					new eui.SetProperty("_Rect5","horizontalCenter",0),
					new eui.SetProperty("_Rect5","y",4566.68),
					new eui.SetProperty("guiZeScroller","anchorOffsetY",0),
					new eui.SetProperty("guiZeScroller","bottom",37),
					new eui.SetProperty("guiZeScroller","top",60),
					new eui.SetProperty("guiZeScroller","width",1280),
					new eui.SetProperty("guiZeScroller","visible",false),
					new eui.SetProperty("liShiScroller","width",1280),
					new eui.SetProperty("liShiScroller","top",97),
					new eui.SetProperty("liShiScroller","bottom",47),
					new eui.SetProperty("liShiScroller","visible",false),
					new eui.SetProperty("_Image24","scaleX",1),
					new eui.SetProperty("_Image24","scaleY",1),
					new eui.SetProperty("_Image24","y",2),
					new eui.SetProperty("_Image24","left",67),
					new eui.SetProperty("_Image24","right",1135),
					new eui.SetProperty("_Image25","scaleX",1),
					new eui.SetProperty("_Image25","scaleY",1),
					new eui.SetProperty("_Image25","y",2),
					new eui.SetProperty("_Image25","left",456),
					new eui.SetProperty("_Image25","right",647),
					new eui.SetProperty("_Image26","scaleX",1),
					new eui.SetProperty("_Image26","scaleY",1),
					new eui.SetProperty("_Image26","y",2),
					new eui.SetProperty("_Image26","left",779),
					new eui.SetProperty("_Image26","right",398),
					new eui.SetProperty("_Image27","scaleX",1),
					new eui.SetProperty("_Image27","scaleY",1),
					new eui.SetProperty("_Image27","y",2),
					new eui.SetProperty("_Image27","left",937),
					new eui.SetProperty("_Image27","right",240),
					new eui.SetProperty("_Image28","scaleX",1),
					new eui.SetProperty("_Image28","scaleY",1),
					new eui.SetProperty("_Image28","y",2),
					new eui.SetProperty("_Image28","left",1085),
					new eui.SetProperty("_Image28","right",18),
					new eui.SetProperty("liShiUpGroup","width",1280),
					new eui.SetProperty("liShiUpGroup","y",71),
					new eui.SetProperty("liShiUpGroup","visible",false),
					new eui.SetProperty("liShiDiTuRect0","width",1280),
					new eui.SetProperty("liShiDiTuRect0","visible",false),
					new eui.SetProperty("liShiInfo","anchorOffsetX",0),
					new eui.SetProperty("liShiInfo","x",15),
					new eui.SetProperty("liShiInfo","y",0),
					new eui.SetProperty("liShiInfo","width",1232),
					new eui.SetProperty("liShiInfo","skinName","LiShiInfoSkin"),
					new eui.SetProperty("liShiInfoGroup","anchorOffsetX",0),
					new eui.SetProperty("liShiInfoGroup","top",83),
					new eui.SetProperty("liShiInfoGroup","bottom",70),
					new eui.SetProperty("liShiInfoGroup","width",1264),
					new eui.SetProperty("liShiInfoGroup","x",8),
					new eui.SetProperty("liShiInfoGroup","visible",false),
					new eui.SetProperty("_Image30","source","上_png"),
					new eui.SetProperty("_Image30","anchorOffsetX",0),
					new eui.SetProperty("_Image30","left",0),
					new eui.SetProperty("_Image30","right",0),
					new eui.SetProperty("_Image30","top",0),
					new eui.SetProperty("_Image30","bottom",0),
					new eui.SetProperty("upXuanZe","y",55.05),
					new eui.SetProperty("upXuanZe","x",13.17),
					new eui.SetProperty("upXuanZe","scaleY",0.5),
					new eui.SetProperty("upXuanZe","width",99),
					new eui.SetProperty("upXuanZe","bottom",0),
					new eui.SetProperty("upPeiFu","scaleX",0.84),
					new eui.SetProperty("upPeiFu","scaleY",0.95),
					new eui.SetProperty("upPeiFu","left",275),
					new eui.SetProperty("upPeiFu","bottom",13.730000000000004),
					new eui.SetProperty("upPeiFu","name","3"),
					new eui.SetProperty("upLiShi","scaleX",0.84),
					new eui.SetProperty("upLiShi","scaleY",0.92),
					new eui.SetProperty("upLiShi","left",660),
					new eui.SetProperty("upLiShi","bottom",16.730000000000004),
					new eui.SetProperty("upLiShi","name","5"),
					new eui.SetProperty("upGuiZe","scaleX",0.84),
					new eui.SetProperty("upGuiZe","scaleY",0.95),
					new eui.SetProperty("upGuiZe","left",446),
					new eui.SetProperty("upGuiZe","bottom",15.730000000000004),
					new eui.SetProperty("upGuiZe","name","4"),
					new eui.SetProperty("upSet","scaleX",0.95),
					new eui.SetProperty("upSet","scaleY",0.95),
					new eui.SetProperty("upSet","left",147),
					new eui.SetProperty("upSet","bottom",13.730000000000004),
					new eui.SetProperty("upTouZhu","scaleY",0.95),
					new eui.SetProperty("upTouZhu","scaleX",0.95),
					new eui.SetProperty("upTouZhu","left",16),
					new eui.SetProperty("upTouZhu","bottom",13.730000000000004),
					new eui.SetProperty("_Image31","scaleX",1.12),
					new eui.SetProperty("_Image31","scaleY",1.3),
					new eui.SetProperty("_Image31","right",59.22222222222217),
					new eui.SetProperty("_Image31","top",10),
					new eui.SetProperty("up","width",1280),
					new eui.SetProperty("up","height",67.5),
					new eui.SetProperty("up","left",0),
					new eui.SetProperty("up","right",0),
					new eui.SetProperty("up","top",0),
					new eui.SetProperty("","width",1280),
					new eui.SetProperty("","height",720)
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image3","touZhu",1,""),
					new eui.AddItems("down0","touZhuGroup",1,""),
					new eui.AddItems("_Rect3","peifuGroup",2,"_Image23"),
					new eui.AddItems("_Image29","_Group1",1,""),
					new eui.SetProperty("pfBg","touchEnabled",false),
					new eui.SetProperty("pfBg","y",-330),
					new eui.SetProperty("pfBg","height",1770),
					new eui.SetProperty("pfBg","source","shuBlue_png"),
					new eui.SetProperty("pfBg","anchorOffsetX",0),
					new eui.SetProperty("pfBg","width",720),
					new eui.SetProperty("pfBg","x",0),
					new eui.SetProperty("pfBg","visible",false),
					new eui.SetProperty("_Image1","left",2),
					new eui.SetProperty("_Image2","source","autoGame_png"),
					new eui.SetProperty("_Image2","x",2.45),
					new eui.SetProperty("shiZhi1","horizontalCenter",90.5),
					new eui.SetProperty("shiZhi1","y",22.32),
					new eui.SetProperty("shiZhi1","enabled",true),
					new eui.SetProperty("touZhu2","y",89.7),
					new eui.SetProperty("touZhu2","right",46),
					new eui.SetProperty("touZhu2","size",35),
					new eui.SetProperty("touZhu2","fontFamily","Arial"),
					new eui.SetProperty("touZhu2","textColor",0x9b9b9b),
					new eui.SetProperty("touZhu2","bold",true),
					new eui.SetProperty("touZhu1","y",90.44),
					new eui.SetProperty("touZhu1","left",244),
					new eui.SetProperty("touZhu1","size",35),
					new eui.SetProperty("touZhu1","fontFamily","Arial"),
					new eui.SetProperty("touZhu1","textColor",0x9b9b9b),
					new eui.SetProperty("touZhu1","bold",true),
					new eui.SetProperty("touZhu","y",65.43),
					new eui.SetProperty("touZhu","left",20),
					new eui.SetProperty("touZhu","right",20),
					new eui.SetProperty("_Image4","left",0),
					new eui.SetProperty("_Image4","y",28.5),
					new eui.SetProperty("_Image4","source","stopAuto_png"),
					new eui.SetProperty("shiZhi2","horizontalCenter",-98.5),
					new eui.SetProperty("shiZhi2","maximum",4),
					new eui.SetProperty("shiZhi2","y",82.56),
					new eui.SetProperty("autoPlay","scaleX",0.58),
					new eui.SetProperty("autoPlay","scaleY",0.58),
					new eui.SetProperty("autoPlay","right",2),
					new eui.SetProperty("autoPlay","bottom",35),
					new eui.SetProperty("autoPlay","source","uiElements_03-062_png"),
					new eui.SetProperty("stopAuto","x",610.36),
					new eui.SetProperty("stopAuto","y",85.81),
					new eui.SetProperty("stopAuto","scaleX",1.3),
					new eui.SetProperty("stopAuto","scaleY",1.3),
					new eui.SetProperty("stopAuto","visible",false),
					new eui.SetProperty("autoNumBer","right",36),
					new eui.SetProperty("autoNumBer","bottom",83),
					new eui.SetProperty("autoNumBer","size",40),
					new eui.SetProperty("autoNumBer","text","10"),
					new eui.SetProperty("autoNumBer","width",85),
					new eui.SetProperty("autoNumBer","touchEnabled",false),
					new eui.SetProperty("autoNumBer","fontFamily","Arial"),
					new eui.SetProperty("autoNumBer","scaleY",1.3),
					new eui.SetProperty("autoNumBer","bold",true),
					new eui.SetProperty("_Image5","scaleX",0.6),
					new eui.SetProperty("_Image5","y",301.86),
					new eui.SetProperty("_Image5","left",-4),
					new eui.SetProperty("ziDong2","text","100"),
					new eui.SetProperty("ziDong2","y",153.28),
					new eui.SetProperty("ziDong2","x",515.93),
					new eui.SetProperty("ziDong2","size",35),
					new eui.SetProperty("ziDong2","fontFamily","Arial"),
					new eui.SetProperty("ziDong2","textColor",0x9b9b9b),
					new eui.SetProperty("ziDong2","bold",true),
					new eui.SetProperty("ziDong1","size",35),
					new eui.SetProperty("ziDong1","text","10"),
					new eui.SetProperty("ziDong1","left",2),
					new eui.SetProperty("ziDong1","y",152.09),
					new eui.SetProperty("ziDong1","fontFamily","Arial"),
					new eui.SetProperty("ziDong1","textColor",0x9b9b9b),
					new eui.SetProperty("ziDong1","bold",true),
					new eui.SetProperty("ziDongYouXi","y",287.87),
					new eui.SetProperty("ziDongYouXi","left",20),
					new eui.SetProperty("ziDongYouXi","right",20),
					new eui.SetProperty("_Image6","left",0),
					new eui.SetProperty("_Image6","scaleX",0.62),
					new eui.SetProperty("_Image6","y",0),
					new eui.SetProperty("_Image7","x",351),
					new eui.SetProperty("_Image7","left",367),
					new eui.SetProperty("_Image7","y",-0.23),
					new eui.SetProperty("shiZhi3","x",63.8),
					new eui.SetProperty("shiZhi3","horizontalCenter",-31.5),
					new eui.SetProperty("shiZhi3","bottom",-15),
					new eui.SetProperty("danCi2","y",121.6),
					new eui.SetProperty("danCi2","size",35),
					new eui.SetProperty("danCi2","text","2000.00"),
					new eui.SetProperty("danCi2","fontFamily","Arial"),
					new eui.SetProperty("danCi2","verticalAlign","justify"),
					new eui.SetProperty("danCi2","x",625.98),
					new eui.SetProperty("danCi2","textColor",0x9b9b9b),
					new eui.SetProperty("danCi2","bold",true),
					new eui.SetProperty("danCi1","y",121.08),
					new eui.SetProperty("danCi1","text","0.00"),
					new eui.SetProperty("danCi1","left",0),
					new eui.SetProperty("danCi1","size",35),
					new eui.SetProperty("danCi1","fontFamily","Arial"),
					new eui.SetProperty("danCi1","textColor",0x9b9b9b),
					new eui.SetProperty("danCi1","bold",true),
					new eui.SetProperty("danCi","y",698.35),
					new eui.SetProperty("danCi","left",12),
					new eui.SetProperty("danCi","right",28),
					new eui.SetProperty("_Image8","left",4),
					new eui.SetProperty("_Image8","scaleX",0.62),
					new eui.SetProperty("_Image8","y",27.12),
					new eui.SetProperty("shiZhi4","horizontalCenter",-34.5),
					new eui.SetProperty("shiZhi4","skinName","skins.DanCiJiaSkin"),
					new eui.SetProperty("shiZhi4","scaleX",0.7),
					new eui.SetProperty("shiZhi4","scaleY",0.7),
					new eui.SetProperty("shiZhi4","bottom",-17),
					new eui.SetProperty("jia1","y",149.85),
					new eui.SetProperty("jia1","size",35),
					new eui.SetProperty("jia1","text","0.00"),
					new eui.SetProperty("jia1","left",0),
					new eui.SetProperty("jia1","fontFamily","Arial"),
					new eui.SetProperty("jia1","textColor",0x9b9b9b),
					new eui.SetProperty("jia1","bold",true),
					new eui.SetProperty("jia2","size",35),
					new eui.SetProperty("jia2","text","20000.00"),
					new eui.SetProperty("jia2","y",151.29),
					new eui.SetProperty("jia2","fontFamily","Arial"),
					new eui.SetProperty("jia2","textColor",0x9b9b9b),
					new eui.SetProperty("jia2","x",608.99),
					new eui.SetProperty("jia2","verticalAlign","justify"),
					new eui.SetProperty("jia2","bold",true),
					new eui.SetProperty("yuEJia","scaleX",1),
					new eui.SetProperty("yuEJia","scaleY",1),
					new eui.SetProperty("yuEJia","y",915.51),
					new eui.SetProperty("yuEJia","left",12),
					new eui.SetProperty("yuEJia","right",28),
					new eui.SetProperty("_Image9","left",2),
					new eui.SetProperty("_Image9","scaleX",0.62),
					new eui.SetProperty("_Image9","y",11.98),
					new eui.SetProperty("_Image10","left",291),
					new eui.SetProperty("_Image10","y",14.98),
					new eui.SetProperty("shiZhi5","skinName","skins.DanCiJianSkin"),
					new eui.SetProperty("shiZhi5","scaleX",0.7),
					new eui.SetProperty("shiZhi5","scaleY",0.7),
					new eui.SetProperty("shiZhi5","y",75.2),
					new eui.SetProperty("shiZhi5","x",55.49),
					new eui.SetProperty("jian1","size",35),
					new eui.SetProperty("jian1","left",-2),
					new eui.SetProperty("jian1","bottom",34),
					new eui.SetProperty("jian1","text","0.00"),
					new eui.SetProperty("jian1","fontFamily","Arial"),
					new eui.SetProperty("jian1","textColor",0x9b9b9b),
					new eui.SetProperty("jian1","bold",true),
					new eui.SetProperty("jian2","size",35),
					new eui.SetProperty("jian2","text","20000.00"),
					new eui.SetProperty("jian2","fontFamily","Arial"),
					new eui.SetProperty("jian2","textColor",0x9b9b9b),
					new eui.SetProperty("jian2","x",605),
					new eui.SetProperty("jian2","y",136.68),
					new eui.SetProperty("jian2","verticalAlign","justify"),
					new eui.SetProperty("jian2","bold",true),
					new eui.SetProperty("yuEJian","scaleX",1),
					new eui.SetProperty("yuEJian","scaleY",1),
					new eui.SetProperty("yuEJian","left",16),
					new eui.SetProperty("yuEJian","right",24),
					new eui.SetProperty("yuEJian","height",204),
					new eui.SetProperty("yuEJian","y",1180.86),
					new eui.SetProperty("_Image11","left",14),
					new eui.SetProperty("_Image11","scaleX",0.62),
					new eui.SetProperty("_Image11","y",70.98),
					new eui.SetProperty("_Image12","left",18),
					new eui.SetProperty("_Image12","scaleX",0.62),
					new eui.SetProperty("_Image12","y",-17.58),
					new eui.SetProperty("renHeTo","right",31),
					new eui.SetProperty("renHeTo","scaleX",1.3),
					new eui.SetProperty("renHeTo","scaleY",1.3),
					new eui.SetProperty("renHeTo","y",-34.75),
					new eui.SetProperty("freeGameTo","right",30),
					new eui.SetProperty("freeGameTo","scaleX",1.3),
					new eui.SetProperty("freeGameTo","scaleY",1.3),
					new eui.SetProperty("freeGameTo","y",49.74),
					new eui.SetProperty("down","scaleX",1),
					new eui.SetProperty("down","scaleY",1),
					new eui.SetProperty("down","y",1464.63),
					new eui.SetProperty("down","left",12),
					new eui.SetProperty("down","right",28),
					new eui.SetProperty("touZhuGroup","anchorOffsetY",0),
					new eui.SetProperty("touZhuGroup","height",1145.93),
					new eui.SetProperty("touZhuGroup","scaleX",0.9),
					new eui.SetProperty("touZhuGroup","scaleY",0.9),
					new eui.SetProperty("touZhuGroup","y",-18),
					new eui.SetProperty("touZhuScroller","bottom",164),
					new eui.SetProperty("touZhuScroller","top",82),
					new eui.SetProperty("touZhuScroller","width",720),
					new eui.SetProperty("_Image14","y",51.9),
					new eui.SetProperty("_Image14","x",104.22),
					new eui.SetProperty("_Image14","scaleX",0.5),
					new eui.SetProperty("_Image14","scaleY",0.5),
					new eui.SetProperty("_Image15","x",106.17),
					new eui.SetProperty("_Image15","y",157.85),
					new eui.SetProperty("_Image15","scaleX",0.5),
					new eui.SetProperty("_Image15","scaleY",0.5),
					new eui.SetProperty("_Image16","x",98.99),
					new eui.SetProperty("_Image16","y",259.71),
					new eui.SetProperty("_Image16","scaleX",0.5),
					new eui.SetProperty("_Image16","scaleY",0.5),
					new eui.SetProperty("_Image17","scaleX",0.6),
					new eui.SetProperty("_Image17","scaleY",0.65),
					new eui.SetProperty("_Image17","y",234.64),
					new eui.SetProperty("_Image17","x",43.16),
					new eui.SetProperty("_Image18","scaleX",0.6),
					new eui.SetProperty("_Image18","scaleY",0.65),
					new eui.SetProperty("_Image18","x",23.04),
					new eui.SetProperty("_Image18","y",144.92),
					new eui.SetProperty("_Image19","scaleX",0.6),
					new eui.SetProperty("_Image19","scaleY",0.65),
					new eui.SetProperty("_Image19","y",352.11),
					new eui.SetProperty("_Image19","x",47.66),
					new eui.SetProperty("_Image20","x",95.95),
					new eui.SetProperty("_Image20","y",368.06),
					new eui.SetProperty("_Image20","scaleX",0.5),
					new eui.SetProperty("_Image20","scaleY",0.5),
					new eui.SetProperty("_Image21","y",34.96),
					new eui.SetProperty("_Image21","scaleX",0.6),
					new eui.SetProperty("_Image21","scaleY",0.65),
					new eui.SetProperty("_Image21","x",45.22),
					new eui.SetProperty("musicBtn","x",634),
					new eui.SetProperty("musicBtn","y",39.01),
					new eui.SetProperty("musicBtn","right",14),
					new eui.SetProperty("musicBtn","scaleX",1.1),
					new eui.SetProperty("musicBtn","scaleY",1.1),
					new eui.SetProperty("autoBtn","x",634),
					new eui.SetProperty("autoBtn","right",14),
					new eui.SetProperty("autoBtn","scaleX",1.1),
					new eui.SetProperty("autoBtn","scaleY",1.1),
					new eui.SetProperty("autoBtn","y",141.89),
					new eui.SetProperty("zuoShouTo","x",632),
					new eui.SetProperty("zuoShouTo","right",14),
					new eui.SetProperty("zuoShouTo","scaleX",1.1),
					new eui.SetProperty("zuoShouTo","scaleY",1.1),
					new eui.SetProperty("zuoShouTo","y",249.25),
					new eui.SetProperty("speedBtn","x",632),
					new eui.SetProperty("speedBtn","right",14),
					new eui.SetProperty("speedBtn","scaleX",1.1),
					new eui.SetProperty("speedBtn","scaleY",1.1),
					new eui.SetProperty("speedBtn","y",355.53),
					new eui.SetProperty("sheZhiGroup","anchorOffsetY",0),
					new eui.SetProperty("sheZhiGroup","height",966),
					new eui.SetProperty("sheZhiScroller","top",96),
					new eui.SetProperty("sheZhiScroller","width",720),
					new eui.SetProperty("sheZhiScroller","x",0),
					new eui.SetProperty("sheZhiScroller","bottom",3),
					new eui.SetProperty("sheZhiScroller","anchorOffsetY",0),
					new eui.SetProperty("sheZhiScroller","visible",false),
					new eui.SetProperty("_Image22","left",0),
					new eui.SetProperty("_Image22","right",0),
					new eui.SetProperty("_Image22","top",0),
					new eui.SetProperty("_Image22","height",747.888889),
					new eui.SetProperty("_Image22","alpha",0.2),
					new eui.SetProperty("_Image22","visible",false),
					new eui.SetProperty("_Rect4","y",1433.22),
					new eui.SetProperty("_Rect4","left",0),
					new eui.SetProperty("_Rect4","right",0),
					new eui.SetProperty("peifuGroup","anchorOffsetY",0),
					new eui.SetProperty("peifuGroup","height",1037.03),
					new eui.SetProperty("peiFuScroller","bounces",false),
					new eui.SetProperty("peiFuScroller","bottom",168),
					new eui.SetProperty("peiFuScroller","top",78),
					new eui.SetProperty("peiFuScroller","width",720),
					new eui.SetProperty("peiFuScroller","x",0),
					new eui.SetProperty("peiFuScroller","visible",false),
					new eui.SetProperty("guiZei0","scaleY",0.66),
					new eui.SetProperty("guiZei0","y",4),
					new eui.SetProperty("guiZei0","scaleX",0.66),
					new eui.SetProperty("guiZei0","width",947),
					new eui.SetProperty("guiZei0","anchorOffsetX",0),
					new eui.SetProperty("guiZei0","anchorOffsetY",0),
					new eui.SetProperty("guiZei0","height",1859.86),
					new eui.SetProperty("guiZei0","horizontalCenter",0),
					new eui.SetProperty("guiZei0","source","guize_01_png"),
					new eui.SetProperty("guiZei1","scaleX",0.66),
					new eui.SetProperty("guiZei1","y",1238.67),
					new eui.SetProperty("guiZei1","width",947),
					new eui.SetProperty("guiZei1","height",1859.86),
					new eui.SetProperty("guiZei1","horizontalCenter",-0.5),
					new eui.SetProperty("guiZei1","source","guize_02_png"),
					new eui.SetProperty("_Rect5","horizontalCenter",0),
					new eui.SetProperty("_Rect5","y",2560.31),
					new eui.SetProperty("guiZeiGroup","anchorOffsetY",0),
					new eui.SetProperty("guiZeiGroup","height",1022.24),
					new eui.SetProperty("guiZeScroller","bounces",false),
					new eui.SetProperty("guiZeScroller","anchorOffsetY",0),
					new eui.SetProperty("guiZeScroller","bottom",150),
					new eui.SetProperty("guiZeScroller","top",96),
					new eui.SetProperty("guiZeScroller","width",720),
					new eui.SetProperty("guiZeScroller","x",0),
					new eui.SetProperty("guiZeScroller","visible",false),
					new eui.SetProperty("liShiGroup","height",983.58),
					new eui.SetProperty("liShiScroller","width",720),
					new eui.SetProperty("liShiScroller","top",124),
					new eui.SetProperty("liShiScroller","bottom",177),
					new eui.SetProperty("liShiScroller","visible",false),
					new eui.SetProperty("_Image24","left",38),
					new eui.SetProperty("_Image24","right",639),
					new eui.SetProperty("_Image24","source","riqi_png"),
					new eui.SetProperty("_Image25","left",223),
					new eui.SetProperty("_Image25","right",400),
					new eui.SetProperty("_Image25","source","gameName_png"),
					new eui.SetProperty("_Image26","left",374),
					new eui.SetProperty("_Image26","right",289),
					new eui.SetProperty("_Image26","source","touzhu_png"),
					new eui.SetProperty("_Image27","left",481),
					new eui.SetProperty("_Image27","right",182),
					new eui.SetProperty("_Image27","source","jiangjin_png"),
					new eui.SetProperty("_Image28","left",589),
					new eui.SetProperty("_Image28","right",34),
					new eui.SetProperty("_Image28","source","xiangxi_png"),
					new eui.SetProperty("liShiUpGroup","height",22),
					new eui.SetProperty("liShiUpGroup","y",97.09),
					new eui.SetProperty("liShiUpGroup","scaleX",1),
					new eui.SetProperty("liShiUpGroup","scaleY",1),
					new eui.SetProperty("liShiUpGroup","width",720),
					new eui.SetProperty("liShiUpGroup","visible",false),
					new eui.SetProperty("liShiDiTuRect0","visible",false),
					new eui.SetProperty("liShiInfo","currentState","down"),
					new eui.SetProperty("liShiInfo","scaleX",0.8),
					new eui.SetProperty("liShiInfo","scaleY",0.8),
					new eui.SetProperty("liShiInfo","anchorOffsetX",0),
					new eui.SetProperty("liShiInfo","x",24),
					new eui.SetProperty("liShiInfo","y",0),
					new eui.SetProperty("liShiInfo","width",835),
					new eui.SetProperty("_Group1","height",774),
					new eui.SetProperty("liShiInfoGroup","top",95),
					new eui.SetProperty("liShiInfoGroup","bottom",192),
					new eui.SetProperty("liShiInfoGroup","visible",false),
					new eui.SetProperty("_Image30","left",0),
					new eui.SetProperty("_Image30","right",0),
					new eui.SetProperty("_Image30","top",0),
					new eui.SetProperty("_Image30","height",85.22),
					new eui.SetProperty("_Image30","source","zu1_png"),
					new eui.SetProperty("upXuanZe","scaleY",0.3),
					new eui.SetProperty("upXuanZe","x",20.18),
					new eui.SetProperty("upXuanZe","y",79.55),
					new eui.SetProperty("upXuanZe","width",67),
					new eui.SetProperty("upXuanZe","source","juxing2_png"),
					new eui.SetProperty("upPeiFu","x",208.96),
					new eui.SetProperty("upPeiFu","left",202),
					new eui.SetProperty("upPeiFu","scaleX",0.65),
					new eui.SetProperty("upPeiFu","scaleY",0.65),
					new eui.SetProperty("upPeiFu","name","3"),
					new eui.SetProperty("upPeiFu","y",49.56),
					new eui.SetProperty("upLiShi","x",527.52),
					new eui.SetProperty("upLiShi","left",490),
					new eui.SetProperty("upLiShi","scaleX",0.65),
					new eui.SetProperty("upLiShi","scaleY",0.65),
					new eui.SetProperty("upLiShi","name","5"),
					new eui.SetProperty("upLiShi","y",49.56),
					new eui.SetProperty("upGuiZe","x",346.96),
					new eui.SetProperty("upGuiZe","left",330),
					new eui.SetProperty("upGuiZe","scaleX",0.65),
					new eui.SetProperty("upGuiZe","scaleY",0.65),
					new eui.SetProperty("upGuiZe","name","4"),
					new eui.SetProperty("upGuiZe","y",49.56),
					new eui.SetProperty("upSet","x",108.96),
					new eui.SetProperty("upSet","left",111),
					new eui.SetProperty("upSet","scaleX",0.65),
					new eui.SetProperty("upSet","scaleY",0.65),
					new eui.SetProperty("upSet","y",49.56),
					new eui.SetProperty("upTouZhu","x",8.96),
					new eui.SetProperty("upTouZhu","left",19),
					new eui.SetProperty("upTouZhu","scaleX",0.65),
					new eui.SetProperty("upTouZhu","scaleY",0.65),
					new eui.SetProperty("upTouZhu","y",49.56),
					new eui.SetProperty("_Image31","left",10),
					new eui.SetProperty("_Image31","top",10),
					new eui.SetProperty("up","left",0),
					new eui.SetProperty("up","right",0),
					new eui.SetProperty("up","top",0),
					new eui.SetProperty("","height",1063)
				])
		];
	}
	var _proto = SetSkin.prototype;

	_proto.diTuRect_i = function () {
		var t = new eui.Rect();
		this.diTuRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.pfBg_i = function () {
		var t = new eui.Image();
		this.pfBg = t;
		t.source = "peifubg_png";
		return t;
	};
	_proto.touZhuScroller_i = function () {
		var t = new eui.Scroller();
		this.touZhuScroller = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.enabled = true;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.touchChildren = true;
		t.touchEnabled = true;
		t.viewport = this.touZhuGroup_i();
		return t;
	};
	_proto.touZhuGroup_i = function () {
		var t = new eui.Group();
		this.touZhuGroup = t;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 720;
		t.y = -1;
		t.elementsContent = [this.touZhu_i(),this.ziDongYouXi_i(),this.danCi_i(),this.yuEJia_i(),this.yuEJian_i(),this.down_i()];
		return t;
	};
	_proto.upRect_i = function () {
		var t = new eui.Rect();
		this.upRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0x605d5d;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		t.width = 2;
		return t;
	};
	_proto.touZhu_i = function () {
		var t = new eui.Group();
		this.touZhu = t;
		t.anchorOffsetY = 0;
		t.height = 142;
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.shiZhi1_i(),this.touZhu2_i(),this.touZhu1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.left = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "touzhuCNY_png";
		t.y = 89.63999999999999;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "";
		t.x = 22.439999999999998;
		t.y = 36.97;
		return t;
	};
	_proto.shiZhi1_i = function () {
		var t = new MyHslider();
		this.shiZhi1 = t;
		t.enabled = true;
		t.maximum = 28;
		t.minimum = 0;
		t.name = "sheZhi1";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.skinName = "skins.TouZhuHSliderSkin";
		t.x = 298.08;
		t.y = 21.75;
		return t;
	};
	_proto.touZhu2_i = function () {
		var t = new eui.Label();
		this.touZhu2 = t;
		t.fontFamily = "PMingLiU";
		t.scaleX = 0.8;
		t.size = 40;
		t.text = "1000.00";
		t.textColor = 0x5e5e5e;
		t.x = 537.77;
		return t;
	};
	_proto.touZhu1_i = function () {
		var t = new eui.Label();
		this.touZhu1 = t;
		t.fontFamily = "PMingLiU";
		t.scaleX = 0.8;
		t.size = 40;
		t.text = "1.00";
		t.textColor = 0x5E5E5E;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.alpha = 0.5;
		t.height = 0.7;
		t.horizontalCenter = 0;
		t.source = "heiSeDiTu_png";
		t.width = 780;
		t.y = 178;
		return t;
	};
	_proto.ziDongYouXi_i = function () {
		var t = new eui.Group();
		this.ziDongYouXi = t;
		t.anchorOffsetY = 0;
		t.height = 266;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this._Image4_i(),this.shiZhi2_i(),this.autoPlay_i(),this.stopAuto_i(),this.autoNumBer_i(),this._Image5_i(),this.ziDong2_i(),this.ziDong1_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "autoGame_png";
		t.y = 38;
		return t;
	};
	_proto.shiZhi2_i = function () {
		var t = new MyHslider();
		this.shiZhi2 = t;
		t.maximum = 4;
		t.name = "sheZhi2";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.skinName = "skins.ZiDongYouXiHSliderSkin";
		t.x = 46.64;
		t.y = 96.15;
		return t;
	};
	_proto.autoPlay_i = function () {
		var t = new eui.Image();
		this.autoPlay = t;
		t.source = "uiElements_03-062_png";
		return t;
	};
	_proto.stopAuto_i = function () {
		var t = new eui.Image();
		this.stopAuto = t;
		t.scaleX = 1.65;
		t.scaleY = 1.65;
		t.source = "uiElements_03-16_png";
		t.x = 605;
		t.y = 89;
		return t;
	};
	_proto.autoNumBer_i = function () {
		var t = new eui.Label();
		this.autoNumBer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 90;
		t.height = 40;
		t.right = 41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.touchEnabled = true;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.scaleY = 0.6;
		t.source = "stopAuto_png";
		t.y = 321;
		return t;
	};
	_proto.ziDong2_i = function () {
		var t = new eui.Label();
		this.ziDong2 = t;
		t.fontFamily = "PMingLiU";
		t.scaleX = 0.8;
		t.size = 40;
		t.text = "10";
		t.textColor = 0x5E5E5E;
		t.x = 537.77;
		t.y = 86;
		return t;
	};
	_proto.ziDong1_i = function () {
		var t = new eui.Label();
		this.ziDong1 = t;
		t.fontFamily = "PMingLiU";
		t.scaleX = 0.8;
		t.size = 40;
		t.text = "100";
		t.textColor = 0x5E5E5E;
		t.y = 86;
		return t;
	};
	_proto.danCi_i = function () {
		var t = new eui.Group();
		this.danCi = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 641;
		t.elementsContent = [this._Image6_i(),this._Image7_i(),this.shiZhi3_i(),this.danCi2_i(),this.danCi1_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "ruguo_png";
		t.y = 25;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.left = 367;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "(CNY)_png";
		t.y = 25;
		return t;
	};
	_proto.shiZhi3_i = function () {
		var t = new MyHslider();
		this.shiZhi3 = t;
		t.maximum = 4000;
		t.name = "sheZhi3";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.skinName = "skins.DanCiHSliderSkin";
		return t;
	};
	_proto.danCi2_i = function () {
		var t = new eui.Label();
		this.danCi2 = t;
		t.fontFamily = "PMingLiU";
		t.scaleX = 0.8;
		t.size = 40;
		t.text = "0.00";
		t.textColor = 0x5E5E5E;
		t.x = 537.77;
		return t;
	};
	_proto.danCi1_i = function () {
		var t = new eui.Label();
		this.danCi1 = t;
		t.fontFamily = "PMingLiU";
		t.scaleX = 0.8;
		t.size = 40;
		t.text = "4000.00";
		t.textColor = 0x5E5E5E;
		t.x = 240;
		return t;
	};
	_proto.yuEJia_i = function () {
		var t = new eui.Group();
		this.yuEJia = t;
		t.y = 891.2;
		t.elementsContent = [this._Image8_i(),this.shiZhi4_i(),this.jia1_i(),this.jia2_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		this._Image8 = t;
		t.left = 0;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "zengjia_png";
		t.y = 35;
		return t;
	};
	_proto.shiZhi4_i = function () {
		var t = new MyHslider();
		this.shiZhi4 = t;
		t.maximum = 40000;
		t.name = "sheZhi4";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "skins.DanCiJiaSkin";
		t.x = 78;
		return t;
	};
	_proto.jia1_i = function () {
		var t = new eui.Label();
		this.jia1 = t;
		t.fontFamily = "PMingLiU";
		t.scaleX = 0.8;
		t.size = 40;
		t.text = "0.00";
		t.textColor = 0x5E5E5E;
		return t;
	};
	_proto.jia2_i = function () {
		var t = new eui.Label();
		this.jia2 = t;
		t.fontFamily = "PMingLiU";
		t.scaleX = 0.8;
		t.size = 40;
		t.text = "40000.00";
		t.textColor = 0x5E5E5E;
		t.x = 240;
		t.y = 86;
		return t;
	};
	_proto.yuEJian_i = function () {
		var t = new eui.Group();
		this.yuEJian = t;
		t.elementsContent = [this._Image9_i(),this._Image10_i(),this.shiZhi5_i(),this.jian1_i(),this.jian2_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		this._Image9 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "jianshao_png";
		t.x = 13;
		t.y = 41;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		this._Image10 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "(CNY)_png";
		t.x = 287.4;
		t.y = 44;
		return t;
	};
	_proto.shiZhi5_i = function () {
		var t = new MyHslider();
		this.shiZhi5 = t;
		t.maximum = 40000;
		t.name = "sheZhi5";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "skins.DanCiJianSkin";
		t.x = 78;
		t.y = 88.54;
		return t;
	};
	_proto.jian1_i = function () {
		var t = new eui.Label();
		this.jian1 = t;
		t.fontFamily = "PMingLiU";
		t.scaleX = 0.8;
		t.size = 40;
		t.text = "0.00";
		t.textColor = 0x5E5E5E;
		t.x = 537.77;
		t.y = 86;
		return t;
	};
	_proto.jian2_i = function () {
		var t = new eui.Label();
		this.jian2 = t;
		t.fontFamily = "PMingLiU";
		t.scaleX = 0.8;
		t.size = 40;
		t.text = "40000.00";
		t.textColor = 0x5E5E5E;
		t.y = 86;
		return t;
	};
	_proto.down_i = function () {
		var t = new eui.Group();
		this.down = t;
		t.y = 1421.2;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this.renHeTo_i(),this.freeGameTo_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		this._Image11 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "ruoguomianfei_png";
		t.x = 20;
		t.y = 111;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		this._Image12 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "renghe_png";
		t.x = 20;
		t.y = 18;
		return t;
	};
	_proto.renHeTo_i = function () {
		var t = new QieHuan();
		this.renHeTo = t;
		t.skinName = "qieHuanSkin";
		t.x = 553;
		t.y = 16;
		return t;
	};
	_proto.freeGameTo_i = function () {
		var t = new QieHuan();
		this.freeGameTo = t;
		t.skinName = "qieHuanSkin";
		t.x = 553;
		t.y = 109;
		return t;
	};
	_proto.downW_i = function () {
		var t = new eui.Group();
		this.downW = t;
		t.height = 200;
		t.right = 2.2222222222221717;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 791;
		t.y = 1385.42;
		return t;
	};
	_proto.down0_i = function () {
		var t = new eui.Group();
		this.down0 = t;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 1789.44;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		this._Image13 = t;
		t.alpha = 0.15;
		t.bottom = -690.7777777777778;
		t.height = 4;
		t.horizontalCenter = -4.111111111111086;
		t.rotation = 90;
		t.source = "heiSeDiTu_png";
		t.top = -20;
		t.width = 1786;
		return t;
	};
	_proto.sheZhiScroller_i = function () {
		var t = new eui.Scroller();
		this.sheZhiScroller = t;
		t.bounces = false;
		t.viewport = this.sheZhiGroup_i();
		return t;
	};
	_proto.sheZhiGroup_i = function () {
		var t = new eui.Group();
		this.sheZhiGroup = t;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this.musicBtn_i(),this.autoBtn_i(),this.zuoShouTo_i(),this.speedBtn_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		this._Image14 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "musicSet_png";
		t.x = 151;
		t.y = 72;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		this._Image15 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "autoTouzhu_png";
		t.x = 156;
		t.y = 164;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		this._Image16 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "zuoshou_png";
		t.x = 150;
		t.y = 289;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		this._Image17 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "uiElements_58-202_png";
		t.x = 28;
		t.y = 268;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		this._Image18 = t;
		t.scaleX = 0.7;
		t.source = "uiElements_58-222_png";
		t.x = 20;
		t.y = 151;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		this._Image19 = t;
		t.source = "uiElements_58-232_png";
		t.x = 33;
		t.y = 390;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		this._Image20 = t;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "kuaisuSet_png";
		t.x = 152;
		t.y = 412;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		this._Image21 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "uiElements_662_png";
		t.x = 37;
		t.y = 58;
		return t;
	};
	_proto.musicBtn_i = function () {
		var t = new QieHuan();
		this.musicBtn = t;
		t.skinName = "qieHuanSkin";
		t.y = 70;
		return t;
	};
	_proto.autoBtn_i = function () {
		var t = new QieHuan();
		this.autoBtn = t;
		t.skinName = "qieHuanSkin";
		t.y = 162;
		return t;
	};
	_proto.zuoShouTo_i = function () {
		var t = new QieHuan();
		this.zuoShouTo = t;
		t.skinName = "qieHuanSkin";
		t.y = 286;
		return t;
	};
	_proto.speedBtn_i = function () {
		var t = new QieHuan();
		this.speedBtn = t;
		t.skinName = "qieHuanSkin";
		t.y = 409;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeAlpha = 0;
		t.x = 0;
		t.y = 790;
		return t;
	};
	_proto.peiFuScroller_i = function () {
		var t = new eui.Scroller();
		this.peiFuScroller = t;
		t.anchorOffsetY = 0;
		t.bounces = false;
		t.viewport = this.peifuGroup_i();
		return t;
	};
	_proto.peifuGroup_i = function () {
		var t = new eui.Group();
		this.peifuGroup = t;
		t.elementsContent = [this._Image22_i(),this._Image23_i(),this._Rect4_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		this._Image22 = t;
		t.alpha = 0.25;
		t.left = 0;
		t.right = 0;
		t.scaleX = 2;
		t.scaleY = 1.8;
		t.source = "peifubg_png";
		t.top = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		this._Rect2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.38;
		t.fillColor = 0xb6b6b6;
		t.height = 624;
		t.left = 0;
		t.right = 0;
		t.scaleY = 4.3;
		t.strokeAlpha = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		this._Rect3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.38;
		t.fillColor = 0xb6b6b6;
		t.height = 1485;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0;
		t.y = 0;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		this._Image23 = t;
		t.left = 0;
		t.right = 0;
		t.source = "peifu_png";
		t.top = 2;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		this._Rect4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.fillColor = 0xFFFFFF;
		t.height = 0;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0;
		t.y = 2322;
		return t;
	};
	_proto.guiZeScroller_i = function () {
		var t = new eui.Scroller();
		this.guiZeScroller = t;
		t.bounces = false;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.viewport = this.guiZeiGroup_i();
		return t;
	};
	_proto.guiZeiGroup_i = function () {
		var t = new eui.Group();
		this.guiZeiGroup = t;
		t.anchorOffsetX = 0;
		t.elementsContent = [this.guiZei0_i(),this.guiZei1_i(),this._Rect5_i()];
		return t;
	};
	_proto.guiZei0_i = function () {
		var t = new eui.Image();
		this.guiZei0 = t;
		t.source = "guize_01_png";
		t.y = 1361.96;
		return t;
	};
	_proto.guiZei1_i = function () {
		var t = new eui.Image();
		this.guiZei1 = t;
		t.scaleY = 0.66;
		t.source = "guize_02_png";
		t.x = 10;
		t.y = 1371.96;
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		this._Rect5 = t;
		t.fillColor = 0xffffff;
		t.height = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xffffff;
		t.width = 720;
		t.y = 2902;
		return t;
	};
	_proto.liShiScroller_i = function () {
		var t = new eui.Scroller();
		this.liShiScroller = t;
		t.bounces = false;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.viewport = this.liShiGroup_i();
		return t;
	};
	_proto.liShiGroup_i = function () {
		var t = new eui.Group();
		this.liShiGroup = t;
		t.anchorOffsetX = 0;
		return t;
	};
	_proto.liShiUpGroup_i = function () {
		var t = new eui.Group();
		this.liShiUpGroup = t;
		t.elementsContent = [this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		this._Image24 = t;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "riqi_png";
		t.y = 0;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		this._Image25 = t;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "gameName_png";
		t.y = 0;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		this._Image26 = t;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "touzhu_png";
		t.y = 0;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		this._Image27 = t;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "jiangjin_png";
		t.y = 0;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		this._Image28 = t;
		t.scaleX = 0.55;
		t.scaleY = 0.55;
		t.source = "xiangxi_png";
		t.y = 0;
		return t;
	};
	_proto.liShiDiTuRect0_i = function () {
		var t = new eui.Rect();
		this.liShiDiTuRect0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0x3D3B3B;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.y = -124;
		return t;
	};
	_proto.liShiInfoGroup_i = function () {
		var t = new eui.Scroller();
		this.liShiInfoGroup = t;
		t.anchorOffsetY = 0;
		t.bottom = 176;
		t.bounces = false;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.top = 117;
		t.width = 720;
		t.x = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.x = 0;
		t.y = 20;
		t.elementsContent = [this.liShiInfo_i()];
		return t;
	};
	_proto.liShiInfo_i = function () {
		var t = new LiShiInfoUI();
		this.liShiInfo = t;
		t.anchorOffsetY = 0;
		t.currentState = "up";
		t.skinName = "LiShiInfoSkin";
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		this._Image29 = t;
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.scaleX = 0.95;
		t.scaleY = 0.96;
		t.source = "";
		t.verticalCenter = 84.5;
		return t;
	};
	_proto.up_i = function () {
		var t = new eui.Group();
		this.up = t;
		t.anchorOffsetY = 0;
		t.left = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.elementsContent = [this._Image30_i(),this.upXuanZe_i(),this.upPeiFu_i(),this.upLiShi_i(),this.upGuiZe_i(),this.upSet_i(),this.upTouZhu_i(),this._Image31_i()];
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		this._Image30 = t;
		t.anchorOffsetY = 0;
		t.source = "zu1_png";
		return t;
	};
	_proto.upXuanZe_i = function () {
		var t = new eui.Image();
		this.upXuanZe = t;
		t.scaleY = 0.5;
		t.source = "juxing2_png";
		t.width = 54;
		t.x = 28;
		return t;
	};
	_proto.upPeiFu_i = function () {
		var t = new eui.RadioButton();
		this.upPeiFu = t;
		t.groupName = "aa";
		t.name = "5";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 231;
		t.skinName = SetSkin$Skin21;
		return t;
	};
	_proto.upLiShi_i = function () {
		var t = new eui.RadioButton();
		this.upLiShi = t;
		t.groupName = "aa";
		t.name = "4";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.skinName = SetSkin$Skin22;
		return t;
	};
	_proto.upGuiZe_i = function () {
		var t = new eui.RadioButton();
		this.upGuiZe = t;
		t.groupName = "aa";
		t.name = "3";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.skinName = SetSkin$Skin23;
		return t;
	};
	_proto.upSet_i = function () {
		var t = new eui.RadioButton();
		this.upSet = t;
		t.groupName = "aa";
		t.name = "2";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.x = 125;
		t.skinName = SetSkin$Skin24;
		return t;
	};
	_proto.upTouZhu_i = function () {
		var t = new eui.RadioButton();
		this.upTouZhu = t;
		t.groupName = "aa";
		t.name = "1";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.selected = true;
		t.x = 20;
		t.skinName = SetSkin$Skin25;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		this._Image31 = t;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "Mystery Joker_png";
		return t;
	};
	return SetSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/MainScenceUISkin.exml'] = window.MainScenceUISkin = (function (_super) {
	__extends(MainScenceUISkin, _super);
	var MainScenceUISkin$Skin26 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin26, _super);
		function MainScenceUISkin$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainScenceUISkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "uiElements_03-07_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.height = 56;
			t.horizontalCenter = 2;
			t.size = 46;
			t.textAlign = "center";
			t.textColor = 0x000000;
			t.verticalAlign = "middle";
			t.verticalCenter = -2.5;
			return t;
		};
		return MainScenceUISkin$Skin26;
	})(eui.Skin);

	var MainScenceUISkin$Skin27 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin27, _super);
		function MainScenceUISkin$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainScenceUISkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "uiElements_03-07_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.height = 56;
			t.horizontalCenter = 2;
			t.size = 46;
			t.textAlign = "center";
			t.textColor = 0x000000;
			t.verticalAlign = "middle";
			t.verticalCenter = -2.5;
			return t;
		};
		return MainScenceUISkin$Skin27;
	})(eui.Skin);

	function MainScenceUISkin() {
		_super.call(this);
		this.skinParts = ["bg1","bg0","diHei","showbg","showlabel","showGroup","gameScence","moneyLabel","betNumLabel","allNumLabel","numGroup","dianji","playBtn","playTween","playBtn0","playTween0","autoPlayTitleLabel","stopAuto","autoPlayNumLabel","autoPlayNumLabel1","autoPlayGroup","autoPlayTitleLabel0","stopAuto0","autoPlayNumLabel0","autoPlayGroup0","mainGroup","qbg0","qimg0","qbg1","qimg1","touGroup","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","img11","strGroup","setUI","bananceLabel","bananceLabel0","betbanaceLabel","betbanaceLabel0","rewardLabel","rewardLabel0","down1Group","setA","setA0","outMain","outMain0","loading1","loading2","downGroup","LoginWaitUI","loading3","loadingGroup","nono","yesyes","speedUi","yesyes0","tipsUi","speedGroup"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group5_i()];
		this._Image1_i();
		
		this.diHei_i();
		
		this.playBtn0_i();
		
		this.playTween0_i();
		
		this.autoPlayNumLabel1_i();
		
		this.autoPlayGroup0_i();
		
		this._Group4_i();
		
		this.bananceLabel0_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("diHei","_Group5",2,"mainGroup"),
					new eui.AddItems("playBtn0","mainGroup",2,"autoPlayGroup"),
					new eui.AddItems("playTween0","mainGroup",2,"autoPlayGroup"),
					new eui.AddItems("autoPlayNumLabel1","autoPlayGroup",1,""),
					new eui.AddItems("autoPlayGroup0","mainGroup",1,""),
					new eui.AddItems("bananceLabel0","down1Group",2,"betbanaceLabel"),
					new eui.SetProperty("bg0","horizontalCenter",2),
					new eui.SetProperty("bg0","source","hengBlue_png"),
					new eui.SetProperty("bg0","y",-24),
					new eui.SetProperty("showbg","width",812),
					new eui.SetProperty("showbg","scaleY",0.9),
					new eui.SetProperty("showlabel","width",781.27),
					new eui.SetProperty("showlabel","top",8),
					new eui.SetProperty("showlabel","horizontalCenter",-9.5),
					new eui.SetProperty("showlabel","bottom",11),
					new eui.SetProperty("showlabel","text","祝您好运!"),
					new eui.SetProperty("showlabel","fontFamily","Arial"),
					new eui.SetProperty("showGroup","horizontalCenter",4),
					new eui.SetProperty("showGroup","height",69),
					new eui.SetProperty("showGroup","y",90.33),
					new eui.SetProperty("gameScence","scaleX",0.805),
					new eui.SetProperty("gameScence","scaleY",0.81),
					new eui.SetProperty("gameScence","y",123.82),
					new eui.SetProperty("gameScence","horizontalCenter",0),
					new eui.SetProperty("_Image2","left",0),
					new eui.SetProperty("_Image2","right",0),
					new eui.SetProperty("_Image2","top",0),
					new eui.SetProperty("_Image2","bottom",0),
					new eui.SetProperty("moneyLabel","text","cny 1999"),
					new eui.SetProperty("moneyLabel","verticalCenter",10),
					new eui.SetProperty("moneyLabel","horizontalCenter",0),
					new eui.SetProperty("_Group1","x",0),
					new eui.SetProperty("betNumLabel","x",276.0000000000001),
					new eui.SetProperty("betNumLabel","text","cny 20.00"),
					new eui.SetProperty("betNumLabel","y",35),
					new eui.SetProperty("betNumLabel","horizontalCenter",0),
					new eui.SetProperty("_Group2","x",262),
					new eui.SetProperty("_Image4","x",0),
					new eui.SetProperty("allNumLabel","text","cny 859.75"),
					new eui.SetProperty("allNumLabel","y",35),
					new eui.SetProperty("allNumLabel","horizontalCenter",0),
					new eui.SetProperty("_Label3","text","总获胜 :"),
					new eui.SetProperty("_Group3","horizontalCenter",262),
					new eui.SetProperty("_Group3","y",1.89),
					new eui.SetProperty("numGroup","x",256),
					new eui.SetProperty("numGroup","scaleX",0.77),
					new eui.SetProperty("numGroup","scaleY",0.77),
					new eui.SetProperty("numGroup","horizontalCenter",-1),
					new eui.SetProperty("numGroup","y",573.8),
					new eui.SetProperty("dianji","left",0),
					new eui.SetProperty("dianji","right",0),
					new eui.SetProperty("dianji","top",0),
					new eui.SetProperty("dianji","bottom",0),
					new eui.SetProperty("dianji","visible",false),
					new eui.SetProperty("playBtn","label",""),
					new eui.SetProperty("playBtn","anchorOffsetX",80),
					new eui.SetProperty("playBtn","anchorOffsetY",80),
					new eui.SetProperty("playBtn","scaleX",0.9),
					new eui.SetProperty("playBtn","scaleY",0.9),
					new eui.SetProperty("playBtn","height",160),
					new eui.SetProperty("playBtn","y",324),
					new eui.SetProperty("playBtn","horizontalCenter",537),
					new eui.SetProperty("playTween","scaleX",0.9),
					new eui.SetProperty("playTween","scaleY",0.9),
					new eui.SetProperty("playTween","horizontalCenter",537),
					new eui.SetProperty("playTween","y",324),
					new eui.SetProperty("autoPlayTitleLabel","text",""),
					new eui.SetProperty("autoPlayTitleLabel","horizontalCenter",5.5),
					new eui.SetProperty("autoPlayTitleLabel","y",41.6),
					new eui.SetProperty("stopAuto","source","uiElements_03-16_png"),
					new eui.SetProperty("stopAuto","width",150),
					new eui.SetProperty("stopAuto","height",150),
					new eui.SetProperty("stopAuto","y",9.45),
					new eui.SetProperty("stopAuto","x",1.89),
					new eui.SetProperty("autoPlayNumLabel","touchEnabled",false),
					new eui.SetProperty("autoPlayNumLabel","text","75"),
					new eui.SetProperty("autoPlayNumLabel","horizontalCenter",0),
					new eui.SetProperty("autoPlayNumLabel","verticalCenter",10),
					new eui.SetProperty("autoPlayGroup","y",261.01),
					new eui.SetProperty("autoPlayGroup","horizontalCenter",537),
					new eui.SetProperty("autoPlayGroup","scaleX",0.75),
					new eui.SetProperty("autoPlayGroup","scaleY",0.75),
					new eui.SetProperty("autoPlayGroup","visible",false),
					new eui.SetProperty("mainGroup","left",0),
					new eui.SetProperty("mainGroup","right",0),
					new eui.SetProperty("mainGroup","bottom",0),
					new eui.SetProperty("mainGroup","top",0),
					new eui.SetProperty("qbg0","left",39),
					new eui.SetProperty("qbg0","top",11),
					new eui.SetProperty("qbg0","x",1048),
					new eui.SetProperty("qbg0","y",6),
					new eui.SetProperty("qbg0","scaleX",0.8000000000000002),
					new eui.SetProperty("qbg0","scaleY",0.8000000000000002),
					new eui.SetProperty("qimg0","left",39),
					new eui.SetProperty("qimg0","top",11),
					new eui.SetProperty("qimg0","x",1061),
					new eui.SetProperty("qimg0","y",6),
					new eui.SetProperty("qimg0","scaleX",0.8000000000000002),
					new eui.SetProperty("qimg0","scaleY",0.8000000000000002),
					new eui.SetProperty("qbg1","right",34),
					new eui.SetProperty("qbg1","x",1048),
					new eui.SetProperty("qbg1","y",6),
					new eui.SetProperty("qbg1","scaleX",0.8000000000000002),
					new eui.SetProperty("qbg1","scaleY",0.8000000000000002),
					new eui.SetProperty("qbg1","top",11),
					new eui.SetProperty("qbg1","source","logo_texture1_level1_01_png"),
					new eui.SetProperty("qimg1","right",34),
					new eui.SetProperty("qimg1","x",1160),
					new eui.SetProperty("qimg1","y",6),
					new eui.SetProperty("qimg1","scaleX",0.8000000000000002),
					new eui.SetProperty("qimg1","scaleY",0.8000000000000002),
					new eui.SetProperty("qimg1","top",11),
					new eui.SetProperty("_Group4","top",0),
					new eui.SetProperty("_Group4","right",0),
					new eui.SetProperty("touGroup","left",0),
					new eui.SetProperty("touGroup","right",0),
					new eui.SetProperty("touGroup","top",-4),
					new eui.SetProperty("touGroup","bottom",4),
					new eui.SetProperty("touGroup","touchThrough",true),
					new eui.SetProperty("touGroup","touchEnabled",false),
					new eui.SetProperty("img0","y",11.45),
					new eui.SetProperty("img0","x",7),
					new eui.SetProperty("img1","source","logo_texture1_level1_10-20_png"),
					new eui.SetProperty("img1","y",7.75),
					new eui.SetProperty("img1","x",68.41),
					new eui.SetProperty("img2","y",10.55),
					new eui.SetProperty("img2","x",120.15),
					new eui.SetProperty("img3","x",165.9),
					new eui.SetProperty("img3","y",8.85),
					new eui.SetProperty("img4","x",215.85),
					new eui.SetProperty("img4","y",11.7),
					new eui.SetProperty("img5","x",274.75),
					new eui.SetProperty("img5","y",10),
					new eui.SetProperty("img6","x",331.3),
					new eui.SetProperty("img6","y",10.85),
					new eui.SetProperty("img7","y",10.55),
					new eui.SetProperty("img7","x",411.85),
					new eui.SetProperty("img8","x",465.55),
					new eui.SetProperty("img8","y",8.55),
					new eui.SetProperty("img9","y",11.69),
					new eui.SetProperty("img9","x",519.25),
					new eui.SetProperty("img10","y",10.55),
					new eui.SetProperty("img10","x",628.15),
					new eui.SetProperty("img11","y",12.55),
					new eui.SetProperty("img11","x",575.85),
					new eui.SetProperty("strGroup","scaleX",0.78),
					new eui.SetProperty("strGroup","scaleY",0.78),
					new eui.SetProperty("strGroup","horizontalCenter",-0.5),
					new eui.SetProperty("strGroup","top",25),
					new eui.SetProperty("setUI","currentState","up"),
					new eui.SetProperty("setUI","left",0),
					new eui.SetProperty("setUI","right",0),
					new eui.SetProperty("setUI","top",0),
					new eui.SetProperty("setUI","bottom",0),
					new eui.SetProperty("_Image6","bottom",0),
					new eui.SetProperty("_Image6","scaleY",1),
					new eui.SetProperty("_Image6","anchorOffsetY",0),
					new eui.SetProperty("_Image6","right",0),
					new eui.SetProperty("_Image6","left",0),
					new eui.SetProperty("_Image6","top",0),
					new eui.SetProperty("bananceLabel","size",25),
					new eui.SetProperty("bananceLabel","textColor",0xa0a0a0),
					new eui.SetProperty("bananceLabel","text","余额 : CNY 7586.2011111"),
					new eui.SetProperty("bananceLabel","scaleX",0.8),
					new eui.SetProperty("bananceLabel","fontFamily","Arial"),
					new eui.SetProperty("bananceLabel","left",8),
					new eui.SetProperty("bananceLabel","scaleY",0.9),
					new eui.SetProperty("bananceLabel","verticalCenter",0),
					new eui.SetProperty("betbanaceLabel","textColor",0xf7b504),
					new eui.SetProperty("betbanaceLabel","text","CNY 00.00"),
					new eui.SetProperty("betbanaceLabel","size",25),
					new eui.SetProperty("betbanaceLabel","left",535),
					new eui.SetProperty("betbanaceLabel","verticalCenter",0),
					new eui.SetProperty("betbanaceLabel","fontFamily","Arial"),
					new eui.SetProperty("betbanaceLabel","scaleY",0.9),
					new eui.SetProperty("betbanaceLabel0","left",449),
					new eui.SetProperty("betbanaceLabel0","size",25),
					new eui.SetProperty("betbanaceLabel0","textColor",0xffffff),
					new eui.SetProperty("betbanaceLabel0","fontFamily","Arial"),
					new eui.SetProperty("betbanaceLabel0","scaleY",0.9),
					new eui.SetProperty("betbanaceLabel0","verticalCenter",0),
					new eui.SetProperty("rewardLabel","size",25),
					new eui.SetProperty("rewardLabel","left",698),
					new eui.SetProperty("rewardLabel","textColor",0xffffff),
					new eui.SetProperty("rewardLabel","fontFamily","Arial"),
					new eui.SetProperty("rewardLabel","text","奖金 : "),
					new eui.SetProperty("rewardLabel","scaleY",0.9),
					new eui.SetProperty("rewardLabel","verticalCenter",0),
					new eui.SetProperty("rewardLabel0","x",763),
					new eui.SetProperty("rewardLabel0","scaleY",0.9),
					new eui.SetProperty("rewardLabel0","verticalCenter",2.5),
					new eui.SetProperty("rewardLabel0","visible",false),
					new eui.SetProperty("down1Group","left",0),
					new eui.SetProperty("down1Group","right",0),
					new eui.SetProperty("down1Group","anchorOffsetY",0),
					new eui.SetProperty("down1Group","bottom",0),
					new eui.SetProperty("down1Group","top",672),
					new eui.SetProperty("setA","height",136),
					new eui.SetProperty("setA","scaleX",0.8),
					new eui.SetProperty("setA","scaleY",0.8),
					new eui.SetProperty("setA","source","uiElements_05-11_png"),
					new eui.SetProperty("setA","width",136.25),
					new eui.SetProperty("setA","right",14),
					new eui.SetProperty("setA","bottom",52),
					new eui.SetProperty("setA0","scaleX",0.8),
					new eui.SetProperty("setA0","scaleY",0.8),
					new eui.SetProperty("setA0","bottom",52),
					new eui.SetProperty("setA0","left",15),
					new eui.SetProperty("setA0","width",136.25),
					new eui.SetProperty("setA0","visible",false),
					new eui.SetProperty("outMain","scaleX",0.8),
					new eui.SetProperty("outMain","scaleY",0.8),
					new eui.SetProperty("outMain","height",136),
					new eui.SetProperty("outMain","width",136.25),
					new eui.SetProperty("outMain","bottom",52),
					new eui.SetProperty("outMain","left",15),
					new eui.SetProperty("outMain0","scaleX",0.8),
					new eui.SetProperty("outMain0","scaleY",0.8),
					new eui.SetProperty("outMain0","right",14),
					new eui.SetProperty("outMain0","bottom",52),
					new eui.SetProperty("outMain0","width",136.25),
					new eui.SetProperty("outMain0","visible",false),
					new eui.SetProperty("loading1","bottom",52),
					new eui.SetProperty("loading1","left",15),
					new eui.SetProperty("loading2","right",14),
					new eui.SetProperty("loading2","bottom",52),
					new eui.SetProperty("loading2","source","uiElements_05-12_png"),
					new eui.SetProperty("downGroup","left",0),
					new eui.SetProperty("downGroup","right",0),
					new eui.SetProperty("downGroup","top",-1),
					new eui.SetProperty("downGroup","bottom",1),
					new eui.SetProperty("downGroup","touchEnabled",true),
					new eui.SetProperty("downGroup","touchThrough",true),
					new eui.SetProperty("LoginWaitUI","scaleX",0.79),
					new eui.SetProperty("LoginWaitUI","scaleY",0.79),
					new eui.SetProperty("LoginWaitUI","currentState","up"),
					new eui.SetProperty("LoginWaitUI","horizontalCenter",0),
					new eui.SetProperty("LoginWaitUI","verticalCenter",-4),
					new eui.SetProperty("loading3","horizontalCenter",0),
					new eui.SetProperty("loading3","bottom",21),
					new eui.SetProperty("loadingGroup","touchEnabled",true),
					new eui.SetProperty("loadingGroup","left",-2),
					new eui.SetProperty("loadingGroup","right",2),
					new eui.SetProperty("loadingGroup","y",2),
					new eui.SetProperty("loadingGroup","height",720),
					new eui.SetProperty("_Image7","source","hengSpeed_png"),
					new eui.SetProperty("_Image7","left",0),
					new eui.SetProperty("_Image7","right",0),
					new eui.SetProperty("_Image7","top",0),
					new eui.SetProperty("_Image7","bottom",0),
					new eui.SetProperty("_Image7","scaleX",0.9),
					new eui.SetProperty("nono","anchorOffsetX",0),
					new eui.SetProperty("nono","width",143.04),
					new eui.SetProperty("nono","anchorOffsetY",0),
					new eui.SetProperty("nono","height",106.27),
					new eui.SetProperty("nono","verticalCenter",68),
					new eui.SetProperty("nono","horizontalCenter",-41.260000000000005),
					new eui.SetProperty("yesyes","anchorOffsetY",0),
					new eui.SetProperty("yesyes","height",107.66),
					new eui.SetProperty("yesyes","anchorOffsetX",0),
					new eui.SetProperty("yesyes","width",137.91),
					new eui.SetProperty("yesyes","verticalCenter",68.5),
					new eui.SetProperty("yesyes","horizontalCenter",43.239999999999995),
					new eui.SetProperty("speedUi","scaleY",2.18),
					new eui.SetProperty("speedUi","scaleX",2.95),
					new eui.SetProperty("speedUi","width",252.52),
					new eui.SetProperty("speedUi","height",209),
					new eui.SetProperty("speedUi","y",129.77),
					new eui.SetProperty("speedUi","anchorOffsetX",0),
					new eui.SetProperty("speedUi","horizontalCenter",0.5),
					new eui.SetProperty("speedUi","visible",false),
					new eui.SetProperty("yesyes0","y",141.59),
					new eui.SetProperty("yesyes0","horizontalCenter",-0.7600000000000051),
					new eui.SetProperty("yesyes0","verticalCenter",64.5),
					new eui.SetProperty("tipsUi","scaleY",1.99),
					new eui.SetProperty("tipsUi","horizontalCenter",0.5),
					new eui.SetProperty("tipsUi","y",146.44),
					new eui.SetProperty("tipsUi","scaleX",2.95),
					new eui.SetProperty("tipsUi","visible",false),
					new eui.SetProperty("speedGroup","visible",false),
					new eui.SetProperty("_Group5","left",0),
					new eui.SetProperty("_Group5","right",0),
					new eui.SetProperty("_Group5","top",0),
					new eui.SetProperty("_Group5","bottom",0),
					new eui.SetProperty("","width",1280),
					new eui.SetProperty("","height",720)
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","_Group5",2,"mainGroup"),
					new eui.AddItems("_Group4","touGroup",1,""),
					new eui.SetProperty("bg1","source","shuRed_png"),
					new eui.SetProperty("bg0","horizontalCenter",0),
					new eui.SetProperty("bg0","verticalCenter",0),
					new eui.SetProperty("showbg","horizontalCenter",0),
					new eui.SetProperty("showbg","verticalCenter",0),
					new eui.SetProperty("showbg","right",0),
					new eui.SetProperty("showbg","left",0),
					new eui.SetProperty("showlabel","height",50),
					new eui.SetProperty("showlabel","text","祝您好运！"),
					new eui.SetProperty("showlabel","horizontalCenter",0.5),
					new eui.SetProperty("showlabel","verticalCenter",-2),
					new eui.SetProperty("showlabel","width",679),
					new eui.SetProperty("showlabel","fontFamily","Arial"),
					new eui.SetProperty("showGroup","right",8),
					new eui.SetProperty("showGroup","left",8),
					new eui.SetProperty("showGroup","height",158),
					new eui.SetProperty("showGroup","y",18.66),
					new eui.SetProperty("showGroup","scaleY",0.86),
					new eui.SetProperty("gameScence","scaleX",0.69),
					new eui.SetProperty("gameScence","scaleY",0.74),
					new eui.SetProperty("gameScence","y",87.96),
					new eui.SetProperty("gameScence","horizontalCenter",0.5),
					new eui.SetProperty("moneyLabel","verticalCenter",11),
					new eui.SetProperty("moneyLabel","text","cny 7304.25"),
					new eui.SetProperty("moneyLabel","horizontalCenter",0),
					new eui.SetProperty("betNumLabel","horizontalCenter",0),
					new eui.SetProperty("betNumLabel","y",36),
					new eui.SetProperty("allNumLabel","horizontalCenter",0),
					new eui.SetProperty("allNumLabel","text","cny 1711.00"),
					new eui.SetProperty("_Label3","text","总获胜 :"),
					new eui.SetProperty("numGroup","scaleX",0.92),
					new eui.SetProperty("numGroup","scaleY",0.9),
					new eui.SetProperty("numGroup","horizontalCenter",-0.5),
					new eui.SetProperty("numGroup","y",498.01),
					new eui.SetProperty("dianji","left",0),
					new eui.SetProperty("dianji","right",0),
					new eui.SetProperty("dianji","visible",false),
					new eui.SetProperty("playBtn","label",""),
					new eui.SetProperty("playBtn","anchorOffsetX",80),
					new eui.SetProperty("playBtn","anchorOffsetY",80),
					new eui.SetProperty("playBtn","scaleX",0.96),
					new eui.SetProperty("playBtn","scaleY",0.96),
					new eui.SetProperty("playBtn","horizontalCenter",0),
					new eui.SetProperty("playBtn","width",160),
					new eui.SetProperty("playBtn","height",160),
					new eui.SetProperty("playBtn","verticalCenter",229),
					new eui.SetProperty("playTween","scaleX",0.96),
					new eui.SetProperty("playTween","scaleY",0.96),
					new eui.SetProperty("playTween","horizontalCenter",0),
					new eui.SetProperty("playTween","verticalCenter",229),
					new eui.SetProperty("autoPlayTitleLabel","textColor",0x000000),
					new eui.SetProperty("autoPlayTitleLabel","text",""),
					new eui.SetProperty("autoPlayTitleLabel","visible",false),
					new eui.SetProperty("stopAuto","source","uiElements_03-16_png"),
					new eui.SetProperty("stopAuto","width",150),
					new eui.SetProperty("stopAuto","height",150),
					new eui.SetProperty("stopAuto","y",7.6),
					new eui.SetProperty("autoPlayNumLabel","font","f3_fnt"),
					new eui.SetProperty("autoPlayNumLabel","text","75"),
					new eui.SetProperty("autoPlayNumLabel","touchEnabled",false),
					new eui.SetProperty("autoPlayNumLabel","scaleX",1.6),
					new eui.SetProperty("autoPlayNumLabel","scaleY",1.6),
					new eui.SetProperty("autoPlayNumLabel","verticalAlign","center"),
					new eui.SetProperty("autoPlayNumLabel","textAlign","center"),
					new eui.SetProperty("autoPlayNumLabel","verticalCenter",7),
					new eui.SetProperty("autoPlayNumLabel","horizontalCenter",1.5),
					new eui.SetProperty("autoPlayGroup","horizontalCenter",0),
					new eui.SetProperty("autoPlayGroup","y",666.32),
					new eui.SetProperty("autoPlayGroup","scaleX",0.83),
					new eui.SetProperty("autoPlayGroup","scaleY",0.83),
					new eui.SetProperty("autoPlayGroup","visible",false),
					new eui.SetProperty("mainGroup","left",0),
					new eui.SetProperty("mainGroup","right",0),
					new eui.SetProperty("mainGroup","width",720),
					new eui.SetProperty("mainGroup","height",1032),
					new eui.SetProperty("mainGroup","top",178),
					new eui.SetProperty("qbg0","left",4),
					new eui.SetProperty("qbg0","top",4),
					new eui.SetProperty("qimg0","left",5),
					new eui.SetProperty("qimg0","top",4),
					new eui.SetProperty("qbg1","right",-8),
					new eui.SetProperty("qbg1","top",-1),
					new eui.SetProperty("qimg1","right",-7),
					new eui.SetProperty("qimg1","top",-1),
					new eui.SetProperty("_Group4","x",0),
					new eui.SetProperty("_Group4","left",0),
					new eui.SetProperty("_Group4","right",0),
					new eui.SetProperty("_Group4","height",193),
					new eui.SetProperty("_Group4","y",0),
					new eui.SetProperty("touGroup","anchorOffsetY",0),
					new eui.SetProperty("touGroup","left",-6),
					new eui.SetProperty("touGroup","right",6),
					new eui.SetProperty("touGroup","y",121.43),
					new eui.SetProperty("touGroup","scaleY",0.94),
					new eui.SetProperty("_Image5","x",4.94),
					new eui.SetProperty("img0","y",12.1),
					new eui.SetProperty("img0","x",11.71),
					new eui.SetProperty("img1","x",72.96),
					new eui.SetProperty("img1","source","logo_texture1_level1_10-20_png"),
					new eui.SetProperty("img1","y",8.29),
					new eui.SetProperty("img2","x",125),
					new eui.SetProperty("img2","y",11.35),
					new eui.SetProperty("img3","x",170.83),
					new eui.SetProperty("img3","y",8.71),
					new eui.SetProperty("img4","x",221.09),
					new eui.SetProperty("img4","y",10.88),
					new eui.SetProperty("img5","x",279.87),
					new eui.SetProperty("img6","x",335.91),
					new eui.SetProperty("img6","y",11.41),
					new eui.SetProperty("img7","x",417.08),
					new eui.SetProperty("img7","y",10.29),
					new eui.SetProperty("img8","x",470.83),
					new eui.SetProperty("img8","y",7.94),
					new eui.SetProperty("img9","x",523.7),
					new eui.SetProperty("img9","y",11.94),
					new eui.SetProperty("img10","x",633.35),
					new eui.SetProperty("img10","y",10.82),
					new eui.SetProperty("img11","x",581.09),
					new eui.SetProperty("img11","y",13.35),
					new eui.SetProperty("strGroup","scaleX",0.77),
					new eui.SetProperty("strGroup","scaleY",0.77),
					new eui.SetProperty("strGroup","height",92),
					new eui.SetProperty("strGroup","y",160.24),
					new eui.SetProperty("strGroup","horizontalCenter",0),
					new eui.SetProperty("setUI","currentState","down"),
					new eui.SetProperty("setUI","anchorOffsetY",0),
					new eui.SetProperty("setUI","left",0),
					new eui.SetProperty("setUI","right",0),
					new eui.SetProperty("setUI","top",0),
					new eui.SetProperty("setUI","bottom",0),
					new eui.SetProperty("_Image6","scaleY",0.3),
					new eui.SetProperty("_Image6","left",0),
					new eui.SetProperty("_Image6","bottom",0),
					new eui.SetProperty("_Image6","right",0),
					new eui.SetProperty("_Image6","source","组 22_png"),
					new eui.SetProperty("_Image6","anchorOffsetY",0),
					new eui.SetProperty("_Image6","top",0),
					new eui.SetProperty("bananceLabel","left",11),
					new eui.SetProperty("bananceLabel","bottom",32),
					new eui.SetProperty("bananceLabel","text","余额 :   CNY 00.00"),
					new eui.SetProperty("bananceLabel","fontFamily","Arial"),
					new eui.SetProperty("bananceLabel","scaleX",0.9),
					new eui.SetProperty("bananceLabel","textColor",0xf2e6e6),
					new eui.SetProperty("bananceLabel","size",25),
					new eui.SetProperty("bananceLabel","alpha",0.6),
					new eui.SetProperty("betbanaceLabel","left",192),
					new eui.SetProperty("betbanaceLabel","text","CNY 00.00"),
					new eui.SetProperty("betbanaceLabel","fontFamily","Arial"),
					new eui.SetProperty("betbanaceLabel","scaleX",0.9),
					new eui.SetProperty("betbanaceLabel","textColor",0xf7b504),
					new eui.SetProperty("betbanaceLabel","size",25),
					new eui.SetProperty("betbanaceLabel","bottom",115),
					new eui.SetProperty("betbanaceLabel0","size",27),
					new eui.SetProperty("betbanaceLabel0","left",108),
					new eui.SetProperty("betbanaceLabel0","bottom",115),
					new eui.SetProperty("betbanaceLabel0","fontFamily","Arial"),
					new eui.SetProperty("betbanaceLabel0","text","投注 :"),
					new eui.SetProperty("rewardLabel","text","奖金 : "),
					new eui.SetProperty("rewardLabel","fontFamily","Arial"),
					new eui.SetProperty("rewardLabel","scaleX",0.9),
					new eui.SetProperty("rewardLabel","size",25),
					new eui.SetProperty("rewardLabel","bottom",115),
					new eui.SetProperty("rewardLabel","x",537),
					new eui.SetProperty("rewardLabel0","bottom",113),
					new eui.SetProperty("rewardLabel0","visible",false),
					new eui.SetProperty("down1Group","left",0),
					new eui.SetProperty("down1Group","right",0),
					new eui.SetProperty("down1Group","anchorOffsetY",0),
					new eui.SetProperty("down1Group","height",178),
					new eui.SetProperty("down1Group","bottom",0),
					new eui.SetProperty("setA","height",136),
					new eui.SetProperty("setA","scaleX",0.65),
					new eui.SetProperty("setA","scaleY",0.65),
					new eui.SetProperty("setA","width",136.66666666666669),
					new eui.SetProperty("setA","right",-1),
					new eui.SetProperty("setA","bottom",81),
					new eui.SetProperty("setA0","scaleX",0.65),
					new eui.SetProperty("setA0","scaleY",0.65),
					new eui.SetProperty("setA0","x",2.2),
					new eui.SetProperty("setA0","bottom",84),
					new eui.SetProperty("setA0","visible",false),
					new eui.SetProperty("outMain","scaleX",0.65),
					new eui.SetProperty("outMain","scaleY",0.65),
					new eui.SetProperty("outMain","height",136),
					new eui.SetProperty("outMain","width",136.66666666666669),
					new eui.SetProperty("outMain","bottom",84),
					new eui.SetProperty("outMain","x",2.2),
					new eui.SetProperty("outMain0","bottom",81),
					new eui.SetProperty("outMain0","right",-1),
					new eui.SetProperty("outMain0","scaleX",0.65),
					new eui.SetProperty("outMain0","scaleY",0.65),
					new eui.SetProperty("outMain0","visible",false),
					new eui.SetProperty("loading1","scaleX",0.65),
					new eui.SetProperty("loading1","scaleY",0.65),
					new eui.SetProperty("loading1","source","uiElements_05-03_png"),
					new eui.SetProperty("loading1","width",136),
					new eui.SetProperty("loading1","height",136),
					new eui.SetProperty("loading1","x",2.2),
					new eui.SetProperty("loading1","bottom",84),
					new eui.SetProperty("loading2","scaleX",0.65),
					new eui.SetProperty("loading2","scaleY",0.65),
					new eui.SetProperty("loading2","width",136),
					new eui.SetProperty("loading2","height",136),
					new eui.SetProperty("loading2","right",-1),
					new eui.SetProperty("loading2","bottom",81),
					new eui.SetProperty("downGroup","left",0),
					new eui.SetProperty("downGroup","right",0),
					new eui.SetProperty("downGroup","top",0),
					new eui.SetProperty("downGroup","bottom",0),
					new eui.SetProperty("downGroup","touchEnabled",true),
					new eui.SetProperty("downGroup","touchThrough",true),
					new eui.SetProperty("LoginWaitUI","scaleX",0.73),
					new eui.SetProperty("LoginWaitUI","scaleY",0.73),
					new eui.SetProperty("LoginWaitUI","anchorOffsetY",0),
					new eui.SetProperty("LoginWaitUI","horizontalCenter",0),
					new eui.SetProperty("LoginWaitUI","verticalCenter",0),
					new eui.SetProperty("loading3","horizontalCenter",2),
					new eui.SetProperty("loading3","y",1041.29),
					new eui.SetProperty("loading3","scaleX",1.1),
					new eui.SetProperty("loading3","scaleY",1.1),
					new eui.SetProperty("loadingGroup","left",0),
					new eui.SetProperty("loadingGroup","right",0),
					new eui.SetProperty("loadingGroup","anchorOffsetY",0),
					new eui.SetProperty("loadingGroup","verticalCenter",-37),
					new eui.SetProperty("loadingGroup","height",932),
					new eui.SetProperty("_Image7","scaleY",1.1),
					new eui.SetProperty("_Image7","source","shuSpeed_png"),
					new eui.SetProperty("_Image7","left",0),
					new eui.SetProperty("_Image7","right",0),
					new eui.SetProperty("_Image7","top",0),
					new eui.SetProperty("_Image7","bottom",0),
					new eui.SetProperty("nono","anchorOffsetY",0),
					new eui.SetProperty("nono","height",129.33),
					new eui.SetProperty("nono","verticalCenter",83.4444445),
					new eui.SetProperty("nono","horizontalCenter",-54.66499999999999),
					new eui.SetProperty("nono","width",217),
					new eui.SetProperty("nono","scaleY",0.55),
					new eui.SetProperty("yesyes","anchorOffsetY",0),
					new eui.SetProperty("yesyes","height",126.37),
					new eui.SetProperty("yesyes","verticalCenter",83.4444445),
					new eui.SetProperty("yesyes","horizontalCenter",57.33500000000001),
					new eui.SetProperty("yesyes","width",217),
					new eui.SetProperty("yesyes","scaleY",0.55),
					new eui.SetProperty("speedUi","scaleY",1.8),
					new eui.SetProperty("speedUi","scaleX",2.42),
					new eui.SetProperty("speedUi","width",258.33),
					new eui.SetProperty("speedUi","height",232.111111),
					new eui.SetProperty("speedUi","anchorOffsetX",0),
					new eui.SetProperty("speedUi","horizontalCenter",-0.5),
					new eui.SetProperty("speedUi","y",396.64),
					new eui.SetProperty("speedUi","visible",false),
					new eui.SetProperty("_Image8","source","shuTips_png"),
					new eui.SetProperty("yesyes0","width",207.46),
					new eui.SetProperty("yesyes0","anchorOffsetY",0),
					new eui.SetProperty("yesyes0","height",125.78),
					new eui.SetProperty("yesyes0","horizontalCenter",0.19463087248321642),
					new eui.SetProperty("yesyes0","verticalCenter",72),
					new eui.SetProperty("yesyes0","scaleY",0.55),
					new eui.SetProperty("tipsUi","y",418.67),
					new eui.SetProperty("tipsUi","width",241.61073825503357),
					new eui.SetProperty("tipsUi","scaleX",2.52),
					new eui.SetProperty("tipsUi","scaleY",1.86),
					new eui.SetProperty("tipsUi","horizontalCenter",0.5),
					new eui.SetProperty("tipsUi","visible",false),
					new eui.SetProperty("speedGroup","visible",false),
					new eui.SetProperty("_Group5","currentState","up"),
					new eui.SetProperty("_Group5","top",0),
					new eui.SetProperty("_Group5","left",0),
					new eui.SetProperty("_Group5","right",0),
					new eui.SetProperty("_Group5","bottom",0),
					new eui.SetProperty("","width",720),
					new eui.SetProperty("","height",1280)
				])
		];
	}
	var _proto = MainScenceUISkin.prototype;

	_proto._Group5_i = function () {
		var t = new eui.Group();
		this._Group5 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.bg1_i(),this.bg0_i(),this.mainGroup_i(),this.touGroup_i(),this.strGroup_i(),this.downGroup_i(),this.loadingGroup_i(),this.speedGroup_i()];
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.horizontalCenter = 2;
		t.source = "hengRed_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bg0_i = function () {
		var t = new eui.Image();
		this.bg0 = t;
		t.source = "shuBlue_png";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 0.8;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 286.61;
		t.horizontalCenter = 0.5;
		t.scaleX = 0.6;
		t.source = "heiBG_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.diHei_i = function () {
		var t = new eui.Image();
		this.diHei = t;
		t.alpha = 0.8;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 206;
		t.left = 0;
		t.right = 0;
		t.scaleX = 0.9;
		t.source = "heiBG_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.scrollEnabled = true;
		t.x = 0;
		t.elementsContent = [this.showGroup_i(),this.gameScence_i(),this.numGroup_i(),this.dianji_i(),this.playBtn_i(),this.playTween_i(),this.autoPlayGroup_i()];
		return t;
	};
	_proto.showGroup_i = function () {
		var t = new eui.Group();
		this.showGroup = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.elementsContent = [this.showbg_i(),this.showlabel_i()];
		return t;
	};
	_proto.showbg_i = function () {
		var t = new eui.Image();
		this.showbg = t;
		t.anchorOffsetX = 0;
		t.height = 70;
		t.horizontalCenter = -6;
		t.source = "menu1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.showlabel_i = function () {
		var t = new eui.Label();
		this.showlabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 40;
		t.text = "祝您好运!";
		t.textAlign = "center";
		t.textColor = 0x09e8f2;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.gameScence_i = function () {
		var t = new GameScence();
		this.gameScence = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "GameScenceSkin";
		return t;
	};
	_proto.numGroup_i = function () {
		var t = new eui.Group();
		this.numGroup = t;
		t.horizontalCenter = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.height = 90;
		t.horizontalCenter = -262;
		t.width = 245;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this.moneyLabel_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "menu3_png";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "余额";
		t.textAlign = "center";
		t.textColor = 0xf2c709;
		t.verticalAlign = "middle";
		t.y = 10;
		return t;
	};
	_proto.moneyLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.moneyLabel = t;
		t.font = "f0_fnt";
		t.text = "0.00";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.height = 90;
		t.horizontalCenter = 0;
		t.width = 245;
		t.y = 0;
		t.elementsContent = [this._Image3_i(),this._Label2_i(),this.betNumLabel_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "menu3_png";
		t.top = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "投注";
		t.textAlign = "center";
		t.textColor = 0xF2C709;
		t.verticalAlign = "middle";
		t.y = 10;
		return t;
	};
	_proto.betNumLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.betNumLabel = t;
		t.font = "f0_fnt";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "cny 20.00";
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.anchorOffsetX = 0;
		t.height = 90;
		t.horizontalCenter = 262;
		t.width = 245;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.allNumLabel_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "menu3_png";
		t.top = 0;
		return t;
	};
	_proto.allNumLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.allNumLabel = t;
		t.font = "f0_fnt";
		t.horizontalCenter = 0;
		t.text = "cny 1000.00";
		t.verticalCenter = 11;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "总获胜";
		t.textAlign = "center";
		t.textColor = 0xF2C709;
		t.verticalAlign = "middle";
		t.y = 10;
		return t;
	};
	_proto.dianji_i = function () {
		var t = new eui.Rect();
		this.dianji = t;
		t.bottom = 0;
		t.fillAlpha = 0.01;
		t.fillColor = 0xFCFCFC;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.strokeColor = 0xFCFCFC;
		t.top = 0;
		return t;
	};
	_proto.playBtn_i = function () {
		var t = new MouseButton();
		this.playBtn = t;
		t.label = "旋转";
		t.skinName = MainScenceUISkin$Skin26;
		return t;
	};
	_proto.playTween_i = function () {
		var t = new eui.Image();
		this.playTween = t;
		t.alpha = 1;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 80;
		t.source = "uiElements_03-08_png";
		t.touchEnabled = false;
		return t;
	};
	_proto.playBtn0_i = function () {
		var t = new MouseButton();
		this.playBtn0 = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 80;
		t.height = 160;
		t.horizontalCenter = -540;
		t.label = "";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.visible = false;
		t.y = 324;
		t.skinName = MainScenceUISkin$Skin27;
		return t;
	};
	_proto.playTween0_i = function () {
		var t = new eui.Image();
		this.playTween0 = t;
		t.alpha = 1;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 80;
		t.horizontalCenter = -540;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "uiElements_03-08_png";
		t.touchEnabled = false;
		t.visible = false;
		t.y = 324;
		return t;
	};
	_proto.autoPlayGroup_i = function () {
		var t = new eui.Group();
		this.autoPlayGroup = t;
		t.elementsContent = [this.autoPlayTitleLabel_i(),this.stopAuto_i(),this.autoPlayNumLabel_i()];
		return t;
	};
	_proto.autoPlayTitleLabel_i = function () {
		var t = new eui.Label();
		this.autoPlayTitleLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 16;
		t.text = "自动游戏";
		t.y = 34;
		return t;
	};
	_proto.stopAuto_i = function () {
		var t = new eui.Image();
		this.stopAuto = t;
		t.source = "menu_texture0_level1_42_png";
		t.y = 0;
		return t;
	};
	_proto.autoPlayNumLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.autoPlayNumLabel = t;
		t.font = "f3_fnt";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "75";
		return t;
	};
	_proto.autoPlayNumLabel1_i = function () {
		var t = new eui.BitmapLabel();
		this.autoPlayNumLabel1 = t;
		t.font = "f3_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "75";
		t.touchEnabled = false;
		t.verticalCenter = 8;
		return t;
	};
	_proto.autoPlayGroup0_i = function () {
		var t = new eui.Group();
		this.autoPlayGroup0 = t;
		t.horizontalCenter = -540;
		t.scaleX = 0.75;
		t.scaleY = 0.75;
		t.visible = false;
		t.y = 268.56;
		t.elementsContent = [this.autoPlayTitleLabel0_i(),this.stopAuto0_i(),this.autoPlayNumLabel0_i()];
		return t;
	};
	_proto.autoPlayTitleLabel0_i = function () {
		var t = new eui.Label();
		this.autoPlayTitleLabel0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 5.5;
		t.size = 16;
		t.text = "";
		t.y = 41.6;
		return t;
	};
	_proto.stopAuto0_i = function () {
		var t = new eui.Image();
		this.stopAuto0 = t;
		t.height = 150;
		t.source = "uiElements_03-16_png";
		t.width = 150;
		t.y = 0;
		return t;
	};
	_proto.autoPlayNumLabel0_i = function () {
		var t = new eui.BitmapLabel();
		this.autoPlayNumLabel0 = t;
		t.font = "f3_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "75";
		t.touchEnabled = false;
		t.y = 61.66;
		return t;
	};
	_proto.touGroup_i = function () {
		var t = new eui.Group();
		this.touGroup = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.qbg0_i(),this.qimg0_i(),this.qbg1_i(),this.qimg1_i()];
		return t;
	};
	_proto.qbg0_i = function () {
		var t = new eui.Image();
		this.qbg0 = t;
		t.left = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "logo_texture1_level1_01-03_png";
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto.qimg0_i = function () {
		var t = new eui.Image();
		this.qimg0 = t;
		t.left = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "logo_texture1_level1_30_png";
		t.x = 0;
		t.y = 6;
		return t;
	};
	_proto.qbg1_i = function () {
		var t = new eui.Image();
		this.qbg1 = t;
		t.right = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "logo_texture1_level1_01_png";
		t.top = 6;
		t.x = 1048;
		t.y = 6;
		return t;
	};
	_proto.qimg1_i = function () {
		var t = new eui.Image();
		this.qimg1 = t;
		t.right = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "logo_texture1_level1_32_png";
		t.top = 6;
		t.x = 1160;
		t.y = 6;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		this._Group4 = t;
		t.y = 0;
		return t;
	};
	_proto.strGroup_i = function () {
		var t = new eui.Group();
		this.strGroup = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image5_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img10_i(),this.img11_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.source = "logo_texture1_level1_02_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.source = "logo_texture1_level1_10-06_png";
		t.x = 7;
		t.y = 14;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.source = "logo_texture1_level1_10-17_png";
		t.x = 65;
		t.y = 12;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.source = "logo_texture1_level1_10-10_png";
		t.x = 121;
		t.y = 8;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.source = "logo_texture1_level1_10-09_png";
		t.x = 171;
		t.y = 8;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.source = "logo_texture1_level1_10-18_png";
		t.x = 215;
		t.y = 10;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.source = "logo_texture1_level1_10-11_png";
		t.x = 279;
		t.y = 10;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.source = "logo_texture1_level1_10-17_png";
		t.x = 333;
		t.y = 10;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.source = "logo_texture1_level1_10-19_png";
		t.x = 411;
		t.y = 8;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.source = "logo_texture1_level1_10-15_png";
		t.x = 463;
		t.y = 6;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.source = "logo_texture1_level1_10_png";
		t.x = 515;
		t.y = 10;
		return t;
	};
	_proto.img10_i = function () {
		var t = new eui.Image();
		this.img10 = t;
		t.source = "logo_texture1_level1_10-11_png";
		t.x = 629;
		t.y = 8;
		return t;
	};
	_proto.img11_i = function () {
		var t = new eui.Image();
		this.img11 = t;
		t.source = "logo_texture1_level1_10-07_png";
		t.x = 575;
		t.y = 10;
		return t;
	};
	_proto.downGroup_i = function () {
		var t = new eui.Group();
		this.downGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.setUI_i(),this.down1Group_i(),this.setA_i(),this.setA0_i(),this.outMain_i(),this.outMain0_i(),this.loading1_i(),this.loading2_i()];
		return t;
	};
	_proto.setUI_i = function () {
		var t = new SetUI();
		this.setUI = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.skinName = "SetSkin";
		t.top = 0;
		return t;
	};
	_proto.down1Group_i = function () {
		var t = new eui.Group();
		this.down1Group = t;
		t.x = 0;
		t.elementsContent = [this._Image6_i(),this.bananceLabel_i(),this.betbanaceLabel_i(),this.betbanaceLabel0_i(),this.rewardLabel_i(),this.rewardLabel0_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.anchorOffsetX = 0;
		t.scaleY = 0.3;
		t.source = "bottomBg_png";
		t.x = 0;
		return t;
	};
	_proto.bananceLabel_i = function () {
		var t = new eui.Label();
		this.bananceLabel = t;
		t.fontFamily = "KaiTi";
		t.scaleX = 0.9;
		t.size = 30;
		t.text = "余额:  CNY 00.00";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.bananceLabel0_i = function () {
		var t = new eui.Label();
		this.bananceLabel0 = t;
		t.fontFamily = "KaiTi";
		t.left = 10;
		t.size = 25;
		t.text = "余额:";
		t.textAlign = "center";
		t.textColor = 0xA0A0A0;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.betbanaceLabel_i = function () {
		var t = new eui.Label();
		this.betbanaceLabel = t;
		t.fontFamily = "KaiTi";
		t.scaleX = 0.9;
		t.size = 30;
		t.text = "投注:  CNY 00.00";
		t.textAlign = "center";
		t.textColor = 0xf7b504;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.betbanaceLabel0_i = function () {
		var t = new eui.Label();
		this.betbanaceLabel0 = t;
		t.fontFamily = "KaiTi";
		t.left = 114;
		t.scaleX = 0.9;
		t.size = 30;
		t.text = "投注:";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.rewardLabel_i = function () {
		var t = new eui.Label();
		this.rewardLabel = t;
		t.fontFamily = "KaiTi";
		t.scaleX = 0.9;
		t.size = 30;
		t.text = "奖金: ";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.rewardLabel0_i = function () {
		var t = new eui.Label();
		this.rewardLabel0 = t;
		t.fontFamily = "Arial";
		t.scaleX = 0.9;
		t.size = 25;
		t.text = "CNY 3200";
		t.textAlign = "center";
		t.textColor = 0xf7b504;
		t.verticalAlign = "middle";
		t.x = 507;
		return t;
	};
	_proto.setA_i = function () {
		var t = new eui.Image();
		this.setA = t;
		t.source = "uiElements_05-11_png";
		return t;
	};
	_proto.setA0_i = function () {
		var t = new eui.Image();
		this.setA0 = t;
		t.height = 136;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "uiElements_05-11_png";
		t.width = 136.66666666666669;
		return t;
	};
	_proto.outMain_i = function () {
		var t = new eui.Image();
		this.outMain = t;
		t.source = "uiElements_05-03_png";
		return t;
	};
	_proto.outMain0_i = function () {
		var t = new eui.Image();
		this.outMain0 = t;
		t.height = 136;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "uiElements_05-03_png";
		t.width = 136.66666666666669;
		return t;
	};
	_proto.loading1_i = function () {
		var t = new eui.Image();
		this.loading1 = t;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "uiElements_05-03_png";
		t.y = 1107.88;
		return t;
	};
	_proto.loading2_i = function () {
		var t = new eui.Image();
		this.loading2 = t;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "uiElements_05-12_png";
		t.y = 1111.02;
		return t;
	};
	_proto.loadingGroup_i = function () {
		var t = new eui.Group();
		this.loadingGroup = t;
		t.left = 0;
		t.right = -170;
		t.elementsContent = [this.LoginWaitUI_i(),this.loading3_i()];
		return t;
	};
	_proto.LoginWaitUI_i = function () {
		var t = new LoginWaitUI();
		this.LoginWaitUI = t;
		t.currentState = "down";
		t.skinName = "LoginWaitSkin";
		return t;
	};
	_proto.loading3_i = function () {
		var t = new eui.Image();
		this.loading3 = t;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "loadingbg2_png";
		t.x = 373;
		return t;
	};
	_proto.speedGroup_i = function () {
		var t = new eui.Group();
		this.speedGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Rect1_i(),this.speedUi_i(),this.tipsUi_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.height = 912;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.width = 1120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.speedUi_i = function () {
		var t = new eui.Group();
		this.speedUi = t;
		t.scaleY = 2.2;
		t.elementsContent = [this._Image7_i(),this.nono_i(),this.yesyes_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.scaleX = 0.9;
		t.source = "speedbg_png";
		return t;
	};
	_proto.nono_i = function () {
		var t = new eui.Image();
		this.nono = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "h1_png";
		return t;
	};
	_proto.yesyes_i = function () {
		var t = new eui.Image();
		this.yesyes = t;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "h2_png";
		return t;
	};
	_proto.tipsUi_i = function () {
		var t = new eui.Group();
		this.tipsUi = t;
		t.anchorOffsetX = 0;
		t.height = 209;
		t.scaleX = 2.98;
		t.scaleY = 2.15;
		t.width = 252.52;
		t.y = 148.96;
		t.elementsContent = [this._Image8_i(),this.yesyes0_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		this._Image8 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 0.9;
		t.source = "hengTips_png";
		t.top = 0;
		return t;
	};
	_proto.yesyes0_i = function () {
		var t = new eui.Image();
		this.yesyes0 = t;
		t.anchorOffsetX = 0;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "h3_png";
		t.width = 138.93;
		return t;
	};
	return MainScenceUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/MyTogleButtonSkin.exml'] = window.MyTogleButtonSkin = (function (_super) {
	__extends(MyTogleButtonSkin, _super);
	function MyTogleButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","videoslot_popup_texture0_level1_59_png"),
					new eui.SetProperty("_Image2","x",12),
					new eui.SetProperty("_Image2","source","videoslot_popup_texture0_level1_25_png"),
					new eui.SetProperty("_Image2","left",-6),
					new eui.SetProperty("_Image2","verticalCenter",0)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","videoslot_popup_texture0_level1_59_png"),
					new eui.SetProperty("_Image2","source","videoslot_popup_texture0_level1_25_png"),
					new eui.SetProperty("_Image2","verticalCenter",0),
					new eui.SetProperty("_Image2","left",-6)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","verticalCenter",0),
					new eui.SetProperty("_Image2","x",12),
					new eui.SetProperty("_Image2","verticalCenter",0),
					new eui.SetProperty("_Image2","right",-6)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","x",12),
					new eui.SetProperty("_Image2","verticalCenter",0),
					new eui.SetProperty("_Image2","right",-6)
				])
		];
	}
	var _proto = MyTogleButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "videoslot_popup_texture0_level1_59-20_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "videoslot_popup_texture0_level1_25-18_png";
		t.y = 1;
		return t;
	};
	return MyTogleButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/net/netcloseSkin.exml'] = window.netcloseSkin = (function (_super) {
	__extends(netcloseSkin, _super);
	var netcloseSkin$Skin28 = 	(function (_super) {
		__extends(netcloseSkin$Skin28, _super);
		function netcloseSkin$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","red_2_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","red_0_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","red_1_png")
					])
			];
		}
		var _proto = netcloseSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "red_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 16;
			t.verticalCenter = 0;
			return t;
		};
		return netcloseSkin$Skin28;
	})(eui.Skin);

	function netcloseSkin() {
		_super.call(this);
		this.skinParts = ["desLabel1","desLabel0","desLabel","closeBtn"];
		
		this.height = 912;
		this.width = 1120;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = netcloseSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.desLabel1_i(),this.desLabel0_i(),this.desLabel_i(),this.closeBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(50,95,300,17);
		t.source = "videoslot_popup_texture0_level1_03-02_png";
		t.top = 0;
		return t;
	};
	_proto.desLabel1_i = function () {
		var t = new eui.Label();
		this.desLabel1 = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 18;
		t.text = "如果您本来正在进行游戏，您的当前进程将会保存，且游戏将在您重新登录后继续";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 380;
		t.y = 204.29;
		return t;
	};
	_proto.desLabel0_i = function () {
		var t = new eui.Label();
		this.desLabel0 = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 18;
		t.text = "您的游戏登陆状态已过期。请重新登录已继续游戏";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 380;
		t.y = 124.01;
		return t;
	};
	_proto.desLabel_i = function () {
		var t = new eui.Label();
		this.desLabel = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "您的游戏登陆状态已过期。";
		t.textAlign = "center";
		t.textColor = 0xf48902;
		t.verticalAlign = "middle";
		t.y = 54.28;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MouseButton();
		this.closeBtn = t;
		t.label = "退出";
		t.x = 172;
		t.y = 286.6;
		t.skinName = netcloseSkin$Skin28;
		return t;
	};
	return netcloseSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/net/NetSkin.exml'] = window.NetSkin = (function (_super) {
	__extends(NetSkin, _super);
	function NetSkin() {
		_super.call(this);
		this.skinParts = ["netingIcon"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this.netingIcon_i()];
	}
	var _proto = NetSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.netingIcon_i = function () {
		var t = new eui.Image();
		this.netingIcon = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.horizontalCenter = 0;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "neterror_png";
		t.verticalCenter = 0;
		return t;
	};
	return NetSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/NormalOkTipsSkin.exml'] = window.NormalOkTipsSkin = (function (_super) {
	__extends(NormalOkTipsSkin, _super);
	function NormalOkTipsSkin() {
		_super.call(this);
		this.skinParts = ["textTips"];
		
		this.elementsContent = [this.textTips_i()];
	}
	var _proto = NormalOkTipsSkin.prototype;

	_proto.textTips_i = function () {
		var t = new eui.Label();
		this.textTips = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "大西瓜";
		t.textColor = 0xf7a607;
		t.verticalCenter = 0;
		return t;
	};
	return NormalOkTipsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/SpeedTipsSkin.exml'] = window.SpeedTipsSkin = (function (_super) {
	__extends(SpeedTipsSkin, _super);
	var SpeedTipsSkin$Skin29 = 	(function (_super) {
		__extends(SpeedTipsSkin$Skin29, _super);
		function SpeedTipsSkin$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SpeedTipsSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "red_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 0;
			t.scaleY = 0.85;
			t.size = 15;
			t.text = "否";
			t.verticalCenter = 0;
			return t;
		};
		return SpeedTipsSkin$Skin29;
	})(eui.Skin);

	var SpeedTipsSkin$Skin30 = 	(function (_super) {
		__extends(SpeedTipsSkin$Skin30, _super);
		function SpeedTipsSkin$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SpeedTipsSkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "grn_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "SimHei";
			t.horizontalCenter = 0;
			t.scaleY = 0.85;
			t.size = 15;
			t.text = "是";
			t.verticalCenter = 0;
			return t;
		};
		return SpeedTipsSkin$Skin30;
	})(eui.Skin);

	function SpeedTipsSkin() {
		_super.call(this);
		this.skinParts = ["desLabel","titleLabel","nono","yesyes"];
		
		this.height = 912;
		this.width = 1120;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("down",
				[
					new eui.SetProperty("_Rect1","left",0),
					new eui.SetProperty("_Rect1","right",0),
					new eui.SetProperty("_Rect1","top",0),
					new eui.SetProperty("_Rect1","bottom",0),
					new eui.SetProperty("_Image1","scaleX",0.9),
					new eui.SetProperty("desLabel","horizontalCenter",1.5),
					new eui.SetProperty("desLabel","verticalCenter",-20.272727272727252),
					new eui.SetProperty("desLabel","height",70),
					new eui.SetProperty("desLabel","fontFamily","Arial"),
					new eui.SetProperty("desLabel","size",13),
					new eui.SetProperty("desLabel","width",247.34),
					new eui.SetProperty("titleLabel","fontFamily","SimHei"),
					new eui.SetProperty("titleLabel","horizontalCenter",0),
					new eui.SetProperty("titleLabel","verticalCenter",-75),
					new eui.SetProperty("nono","x",458.17),
					new eui.SetProperty("nono","y",504.98),
					new eui.SetProperty("nono","horizontalCenter",-52),
					new eui.SetProperty("nono","verticalCenter",75),
					new eui.SetProperty("yesyes","x",563.65),
					new eui.SetProperty("yesyes","y",504.31),
					new eui.SetProperty("yesyes","horizontalCenter",55),
					new eui.SetProperty("yesyes","verticalCenter",74),
					new eui.SetProperty("_Group1","scaleY",2.2),
					new eui.SetProperty("_Group1","y",60),
					new eui.SetProperty("_Group1","scaleX",2)
				])
			,
			new eui.State ("up",
				[
					new eui.SetProperty("_Rect1","left",0),
					new eui.SetProperty("_Rect1","right",0),
					new eui.SetProperty("_Rect1","top",0),
					new eui.SetProperty("_Rect1","bottom",0),
					new eui.SetProperty("_Image1","scaleX",1.2),
					new eui.SetProperty("_Image1","scaleY",1.1),
					new eui.SetProperty("desLabel","size",13),
					new eui.SetProperty("desLabel","horizontalCenter",-1),
					new eui.SetProperty("desLabel","verticalCenter",-12),
					new eui.SetProperty("desLabel","width",328.01),
					new eui.SetProperty("desLabel","height",62.33),
					new eui.SetProperty("titleLabel","fontFamily","SimHei"),
					new eui.SetProperty("titleLabel","size",18),
					new eui.SetProperty("titleLabel","horizontalCenter",0),
					new eui.SetProperty("titleLabel","verticalCenter",-76),
					new eui.SetProperty("nono","horizontalCenter",-54),
					new eui.SetProperty("nono","verticalCenter",81),
					new eui.SetProperty("yesyes","horizontalCenter",56),
					new eui.SetProperty("yesyes","verticalCenter",80),
					new eui.SetProperty("_Group1","scaleX",2),
					new eui.SetProperty("_Group1","scaleY",2)
				])
		];
	}
	var _proto = SpeedTipsSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.fillAlpha = 0.6;
		t.height = 912;
		t.width = 1120;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.desLabel_i(),this.titleLabel_i(),this.nono_i(),this.yesyes_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "speedbg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.desLabel_i = function () {
		var t = new eui.Label();
		this.desLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "FangSong_GB2312";
		t.height = 162;
		t.horizontalCenter = 0.5;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 15;
		t.text = "您似乎喜欢较快的游戏节奏。是否启用“快速游戏”模式？您可以随时在设置菜单中禁用它。";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = -21;
		t.width = 274.68;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi_GB2312";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "快速进行";
		t.textAlign = "center";
		t.textColor = 0xf2c130;
		t.verticalAlign = "middle";
		t.y = 370.98;
		return t;
	};
	_proto.nono_i = function () {
		var t = new MouseButton();
		this.nono = t;
		t.anchorOffsetY = 0;
		t.label = "否";
		t.scaleY = 1.3;
		t.skinName = SpeedTipsSkin$Skin29;
		return t;
	};
	_proto.yesyes_i = function () {
		var t = new MouseButton();
		this.yesyes = t;
		t.label = "是";
		t.scaleY = 1.3;
		t.skinName = SpeedTipsSkin$Skin30;
		return t;
	};
	return SpeedTipsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/StipSkin.exml'] = window.StipSkin = (function (_super) {
	__extends(StipSkin, _super);
	var StipSkin$Skin31 = 	(function (_super) {
		__extends(StipSkin$Skin31, _super);
		function StipSkin$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("labelDisplay","verticalCenter",2.5),
						new eui.SetProperty("labelDisplay","horizontalCenter",0)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","grn_2_png"),
						new eui.SetProperty("labelDisplay","verticalCenter",4.5),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","grn_0_png"),
						new eui.SetProperty("labelDisplay","verticalCenter",5.5),
						new eui.SetProperty("labelDisplay","horizontalCenter",0)
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","grn_1_png"),
						new eui.SetProperty("labelDisplay","verticalCenter",2.5),
						new eui.SetProperty("labelDisplay","horizontalCenter",0)
					])
			];
		}
		var _proto = StipSkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "grn_0_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 16;
			t.text = "确认";
			t.verticalCenter = -1;
			return t;
		};
		return StipSkin$Skin31;
	})(eui.Skin);

	function StipSkin() {
		_super.call(this);
		this.skinParts = ["okBtn","desLabel","titleLabel"];
		
		this.height = 912;
		this.width = 1120;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = StipSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.okBtn_i(),this.desLabel_i(),this.titleLabel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scale9Grid = new egret.Rectangle(50,95,300,17);
		t.source = "videoslot_popup_texture0_level1_03-02_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new MouseButton();
		this.okBtn = t;
		t.horizontalCenter = 0;
		t.label = "确定";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.y = 281.76;
		t.skinName = StipSkin$Skin31;
		return t;
	};
	_proto.desLabel_i = function () {
		var t = new eui.Label();
		this.desLabel = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.lineSpacing = 5;
		t.size = 22;
		t.text = "金额不足，无法以当前注额投注，请减少注额或增加余额。";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 380;
		t.y = 147.3;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "没有可用资金";
		t.textAlign = "center";
		t.textColor = 0xF48902;
		t.verticalAlign = "middle";
		t.y = 48.28;
		return t;
	};
	return StipSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "bg25_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "bg29_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);