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
		this.skinParts = ["testBtn","track","tsbar","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 322;
		this.elementsContent = [this.testBtn_i(),this.track_i(),this.tsbar_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.testBtn_i = function () {
		var t = new eui.Image();
		this.testBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 5.6;
		t.horizontalCenter = -0.5;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "videoslot_popup_texture0_level1_67_png";
		t.verticalCenter = 1;
		t.width = 297;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 3;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.source = "videoslot_popup_texture0_level1_67_png";
		t.verticalCenter = -0.5;
		t.visible = false;
		return t;
	};
	_proto.tsbar_i = function () {
		var t = new eui.Image();
		this.tsbar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 6.2;
		t.scale9Grid = new egret.Rectangle(10,2,62,1);
		t.source = "videoslot_popup_texture0_level1_71_png";
		t.verticalCenter = 0;
		t.width = 0;
		t.x = 13;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.scale9Grid = new egret.Rectangle(12,12,2,2);
		t.scaleX = 1.35;
		t.scaleY = 1.35;
		t.source = "videoslot_popup_texture0_level1_25-18_png";
		t.verticalCenter = -1;
		return t;
	};
	return HSliderSkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/AutoPlayUISkin.exml'] = window.AutoPlayUISkin = (function (_super) {
	__extends(AutoPlayUISkin, _super);
	var AutoPlayUISkin$Skin1 = 	(function (_super) {
		__extends(AutoPlayUISkin$Skin1, _super);
		function AutoPlayUISkin$Skin1() {
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
						new eui.SetProperty("_Image1","source","hui_l_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","hui_l_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","videoslot_popup_texture0_level1_34_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","yelows_l_png")
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","yelows_l_png")
					])
			];
		}
		var _proto = AutoPlayUISkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "videoslot_popup_texture0_level1_34-14_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.BitmapLabel();
			this.labelDisplay = t;
			t.font = "f5_fnt";
			t.horizontalCenter = 0;
			t.scaleX = 0.6;
			t.scaleY = 0.6;
			t.verticalCenter = 0;
			return t;
		};
		return AutoPlayUISkin$Skin1;
	})(eui.Skin);

	var AutoPlayUISkin$Skin2 = 	(function (_super) {
		__extends(AutoPlayUISkin$Skin2, _super);
		function AutoPlayUISkin$Skin2() {
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
						new eui.SetProperty("_Image1","source","hui_l_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","hui_l_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","videoslot_popup_texture0_level1_34_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","yelows_l_png")
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","yelows_l_png")
					])
			];
		}
		var _proto = AutoPlayUISkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "videoslot_popup_texture0_level1_34-14_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.BitmapLabel();
			this.labelDisplay = t;
			t.font = "f5_fnt";
			t.horizontalCenter = 0;
			t.scaleX = 0.6;
			t.scaleY = 0.6;
			t.verticalCenter = 0;
			return t;
		};
		return AutoPlayUISkin$Skin2;
	})(eui.Skin);

	var AutoPlayUISkin$Skin3 = 	(function (_super) {
		__extends(AutoPlayUISkin$Skin3, _super);
		function AutoPlayUISkin$Skin3() {
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
						new eui.SetProperty("_Image1","source","hui_l_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","hui_l_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","videoslot_popup_texture0_level1_34_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","yelows_l_png")
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","yelows_l_png")
					])
			];
		}
		var _proto = AutoPlayUISkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "videoslot_popup_texture0_level1_34-14_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.BitmapLabel();
			this.labelDisplay = t;
			t.font = "f5_fnt";
			t.horizontalCenter = 0;
			t.scaleX = 0.6;
			t.scaleY = 0.6;
			t.verticalCenter = 0;
			return t;
		};
		return AutoPlayUISkin$Skin3;
	})(eui.Skin);

	var AutoPlayUISkin$Skin4 = 	(function (_super) {
		__extends(AutoPlayUISkin$Skin4, _super);
		function AutoPlayUISkin$Skin4() {
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
						new eui.SetProperty("_Image1","source","hui_l_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","hui_l_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","videoslot_popup_texture0_level1_34_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","yelows_l_png")
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","yelows_l_png")
					])
			];
		}
		var _proto = AutoPlayUISkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "videoslot_popup_texture0_level1_34-14_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.BitmapLabel();
			this.labelDisplay = t;
			t.font = "f5_fnt";
			t.horizontalCenter = 0;
			t.scaleX = 0.6;
			t.scaleY = 0.6;
			t.verticalCenter = 0;
			return t;
		};
		return AutoPlayUISkin$Skin4;
	})(eui.Skin);

	var AutoPlayUISkin$Skin5 = 	(function (_super) {
		__extends(AutoPlayUISkin$Skin5, _super);
		function AutoPlayUISkin$Skin5() {
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
						new eui.SetProperty("_Image1","source","hui_l_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","hui_l_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","videoslot_popup_texture0_level1_34_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","yelows_l_png")
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","yelows_l_png")
					])
			];
		}
		var _proto = AutoPlayUISkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "videoslot_popup_texture0_level1_34-14_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.BitmapLabel();
			this.labelDisplay = t;
			t.font = "f5_fnt";
			t.horizontalCenter = 0;
			t.scaleX = 0.6;
			t.scaleY = 0.6;
			t.verticalCenter = 0;
			return t;
		};
		return AutoPlayUISkin$Skin5;
	})(eui.Skin);

	var AutoPlayUISkin$Skin6 = 	(function (_super) {
		__extends(AutoPlayUISkin$Skin6, _super);
		function AutoPlayUISkin$Skin6() {
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
		var _proto = AutoPlayUISkin$Skin6.prototype;

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
			t.fontFamily = "NSimSun";
			t.horizontalCenter = 0;
			t.size = 16;
			t.strokeColor = 0xffffff;
			t.verticalCenter = 0;
			return t;
		};
		return AutoPlayUISkin$Skin6;
	})(eui.Skin);

	var AutoPlayUISkin$Skin7 = 	(function (_super) {
		__extends(AutoPlayUISkin$Skin7, _super);
		function AutoPlayUISkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","grn_2_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
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
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
			];
		}
		var _proto = AutoPlayUISkin$Skin7.prototype;

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
			t.fontFamily = "NSimSun";
			t.size = 16;
			return t;
		};
		return AutoPlayUISkin$Skin7;
	})(eui.Skin);

	function AutoPlayUISkin() {
		_super.call(this);
		this.skinParts = ["rb0","rb1","rb2","rb3","rb4","btn0","btn1","closeBtn","okBtn","slider0","numLabel0","slider1","numLabel1","slider2","numLabel2"];
		
		this.height = 912;
		this.width = 1200;
		this.elementsContent = [this._Rect1_i(),this._Group5_i(),this._Image5_i()];
	}
	var _proto = AutoPlayUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 2;
		t.fillAlpha = 0.6;
		t.left = -1;
		t.right = 1;
		t.top = -2;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 646;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 593;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Group1_i(),this._Label2_i(),this._Label3_i(),this.btn0_i(),this.btn1_i(),this._Label4_i(),this.closeBtn_i(),this.okBtn_i(),this._Group2_i(),this._Label5_i(),this._Label6_i(),this._Group3_i(),this._Label7_i(),this._Label8_i(),this._Group4_i(),this._Label9_i(),this._Label10_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 592.97;
		t.horizontalCenter = 0;
		t.source = "videoslot_popup_texture0_level1_03_png";
		t.verticalCenter = 0;
		t.width = 540.92;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 22;
		t.text = "自动游戏";
		t.textColor = 0xe5ad22;
		t.y = 66.37;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.scaleX = 0.81;
		t.scaleY = 0.81;
		t.y = 99.76;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.rb0_i(),this.rb1_i(),this.rb2_i(),this.rb3_i(),this.rb4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 30;
		return t;
	};
	_proto.rb0_i = function () {
		var t = new MosueRadioButton();
		this.rb0 = t;
		t.label = "10";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = 0;
		t.x = -1;
		t.skinName = AutoPlayUISkin$Skin1;
		return t;
	};
	_proto.rb1_i = function () {
		var t = new MosueRadioButton();
		this.rb1 = t;
		t.label = "20";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = 0;
		t.x = 94;
		t.skinName = AutoPlayUISkin$Skin2;
		return t;
	};
	_proto.rb2_i = function () {
		var t = new MosueRadioButton();
		this.rb2 = t;
		t.label = "50";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = 0;
		t.x = 190;
		t.skinName = AutoPlayUISkin$Skin3;
		return t;
	};
	_proto.rb3_i = function () {
		var t = new MosueRadioButton();
		this.rb3 = t;
		t.label = "75";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = 0;
		t.x = 288;
		t.skinName = AutoPlayUISkin$Skin4;
		return t;
	};
	_proto.rb4_i = function () {
		var t = new MosueRadioButton();
		this.rb4 = t;
		t.label = "100";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.verticalCenter = 0;
		t.x = 394;
		t.skinName = AutoPlayUISkin$Skin5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -162.5;
		t.size = 16;
		t.text = "停止自动游戏";
		t.textColor = 0xffffff;
		t.y = 161.72;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = -112.5;
		t.size = 16;
		t.text = "出现任何获胜";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.y = 187.44;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new STogleButton();
		this.btn0 = t;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.skinName = "MyTogleButtonSkin";
		t.x = 87.35;
		t.y = 185.52;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new STogleButton();
		this.btn1 = t;
		t.enabled = true;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.skinName = "MyTogleButtonSkin";
		t.x = 303.05;
		t.y = 185.54;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 30;
		t.horizontalCenter = 116.5;
		t.size = 16;
		t.text = "如果赢取免费旋转";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.y = 187.42;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MouseButton();
		this.closeBtn = t;
		t.label = "取消";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.x = 121.15;
		t.y = 528.34;
		t.skinName = AutoPlayUISkin$Skin6;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new MouseButton();
		this.okBtn = t;
		t.horizontalCenter = 109.5;
		t.label = "确认";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.y = 529.86;
		t.skinName = AutoPlayUISkin$Skin7;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -4.5;
		t.y = 282.97;
		t.elementsContent = [this.slider0_i(),this._Image2_i(),this.numLabel0_i()];
		return t;
	};
	_proto.slider0_i = function () {
		var t = new MyHslider();
		this.slider0 = t;
		t.anchorOffsetX = 0;
		t.skinName = "skins.HSliderSkin";
		t.verticalCenter = 0.5;
		t.width = 322.42;
		t.x = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "videoslot_popup_texture0_level1_38-16_png";
		t.width = 66.34;
		t.x = 326;
		t.y = 0;
		return t;
	};
	_proto.numLabel0_i = function () {
		var t = new eui.Label();
		this.numLabel0 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 0.7;
		t.size = 18;
		t.text = "4000.00";
		t.textAlign = "center";
		t.textColor = 0xe5ad22;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 130;
		t.x = 331.66;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 90;
		t.size = 15;
		t.text = "如果单次获胜超过";
		t.textColor = 0xFFFFFF;
		t.y = 317.12;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 504;
		t.scaleX = 0.7;
		t.size = 12;
		t.text = "CNY";
		t.textColor = 0xFFFFFF;
		t.y = 300.22;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -5;
		t.y = 336.39;
		t.elementsContent = [this.slider1_i(),this._Image3_i(),this.numLabel1_i()];
		return t;
	};
	_proto.slider1_i = function () {
		var t = new MyHslider();
		this.slider1 = t;
		t.skinName = "skins.HSliderSkin";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "videoslot_popup_texture0_level1_38-16_png";
		t.width = 66.34;
		t.x = 326;
		t.y = 0;
		return t;
	};
	_proto.numLabel1_i = function () {
		var t = new eui.Label();
		this.numLabel1 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 0.7;
		t.size = 18;
		t.text = "4000.00";
		t.textAlign = "center";
		t.textColor = 0xe5ad22;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 130;
		t.x = 331.66;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 92;
		t.size = 15;
		t.text = "如果余额增加了";
		t.textColor = 0xFFFFFF;
		t.y = 370.9;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 503;
		t.scaleX = 0.7;
		t.size = 12;
		t.text = "CNY";
		t.textColor = 0xFFFFFF;
		t.y = 354.08;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -5;
		t.y = 391.76;
		t.elementsContent = [this.slider2_i(),this._Image4_i(),this.numLabel2_i()];
		return t;
	};
	_proto.slider2_i = function () {
		var t = new MyHslider();
		this.slider2 = t;
		t.skinName = "skins.HSliderSkin";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.source = "videoslot_popup_texture0_level1_38-16_png";
		t.width = 66.34;
		t.x = 326;
		t.y = 0;
		return t;
	};
	_proto.numLabel2_i = function () {
		var t = new eui.Label();
		this.numLabel2 = t;
		t.fontFamily = "Microsoft YaHei";
		t.scaleX = 0.7;
		t.size = 18;
		t.text = "4000.00";
		t.textAlign = "center";
		t.textColor = 0xe5ad22;
		t.verticalAlign = "middle";
		t.verticalCenter = 0.5;
		t.width = 130;
		t.x = 331.66;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 92;
		t.size = 15;
		t.text = "如果余额减少了";
		t.textColor = 0xFFFFFF;
		t.y = 428.29;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 503;
		t.scaleX = 0.7;
		t.size = 12;
		t.text = "CNY";
		t.textColor = 0xFFFFFF;
		t.y = 408.43;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "微信图片_20190524115039_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return AutoPlayUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/CheckBanerSkin.exml'] = window.CheckBanerSkin = (function (_super) {
	__extends(CheckBanerSkin, _super);
	var CheckBanerSkin$Skin8 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin8, _super);
		function CheckBanerSkin$Skin8() {
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
		var _proto = CheckBanerSkin$Skin8.prototype;

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
		return CheckBanerSkin$Skin8;
	})(eui.Skin);

	var CheckBanerSkin$Skin9 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin9, _super);
		function CheckBanerSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-47_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51_png"),
						new eui.SetProperty("labelDisplay","verticalCenter",0),
						new eui.SetProperty("labelDisplay","horizontalCenter",0)
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","verticalCenter",-3),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5)
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
			];
		}
		var _proto = CheckBanerSkin$Skin9.prototype;

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
			t.scaleX = 1;
			t.scaleY = 1;
			t.text = "1.00";
			return t;
		};
		return CheckBanerSkin$Skin9;
	})(eui.Skin);

	var CheckBanerSkin$Skin10 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin10, _super);
		function CheckBanerSkin$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-47_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
			];
		}
		var _proto = CheckBanerSkin$Skin10.prototype;

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
			t.scaleX = 1;
			t.scaleY = 1;
			t.text = "0.10";
			return t;
		};
		return CheckBanerSkin$Skin10;
	})(eui.Skin);

	var CheckBanerSkin$Skin11 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin11, _super);
		function CheckBanerSkin$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51_png"),
						new eui.SetProperty("labelDisplay","verticalCenter",0),
						new eui.SetProperty("labelDisplay","horizontalCenter",0)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51_png"),
						new eui.SetProperty("labelDisplay","verticalCenter",0),
						new eui.SetProperty("labelDisplay","horizontalCenter",0)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-47_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51_png"),
						new eui.SetProperty("labelDisplay","verticalCenter",0),
						new eui.SetProperty("labelDisplay","horizontalCenter",0)
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
			];
		}
		var _proto = CheckBanerSkin$Skin11.prototype;

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
			t.scaleX = 1;
			t.scaleY = 1;
			t.text = "3.00";
			return t;
		};
		return CheckBanerSkin$Skin11;
	})(eui.Skin);

	var CheckBanerSkin$Skin12 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin12, _super);
		function CheckBanerSkin$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-47_png"),
						new eui.SetProperty("labelDisplay","verticalCenter",0),
						new eui.SetProperty("labelDisplay","horizontalCenter",0)
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
			];
		}
		var _proto = CheckBanerSkin$Skin12.prototype;

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
			t.scaleX = 1;
			t.scaleY = 1;
			t.text = "4.00";
			return t;
		};
		return CheckBanerSkin$Skin12;
	})(eui.Skin);

	var CheckBanerSkin$Skin13 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin13, _super);
		function CheckBanerSkin$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51_png"),
						new eui.SetProperty("labelDisplay","verticalCenter",0),
						new eui.SetProperty("labelDisplay","horizontalCenter",0)
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-47_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0),
						new eui.SetProperty("labelDisplay","verticalCenter",0)
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
				,
				new eui.State ("disabledAndSelected",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_51-29_png"),
						new eui.SetProperty("labelDisplay","horizontalCenter",0.5),
						new eui.SetProperty("labelDisplay","verticalCenter",-3)
					])
			];
		}
		var _proto = CheckBanerSkin$Skin13.prototype;

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
			t.scaleX = 1;
			t.scaleY = 1;
			t.text = "5.00";
			return t;
		};
		return CheckBanerSkin$Skin13;
	})(eui.Skin);

	var CheckBanerSkin$Skin14 = 	(function (_super) {
		__extends(CheckBanerSkin$Skin14, _super);
		function CheckBanerSkin$Skin14() {
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
		var _proto = CheckBanerSkin$Skin14.prototype;

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
		return CheckBanerSkin$Skin14;
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
		t.verticalCenter = 0.5;
		t.x = -2;
		t.skinName = CheckBanerSkin$Skin8;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new MosueRadioButton();
		this.btn0 = t;
		t.anchorOffsetX = 0;
		t.label = "1.00";
		t.verticalCenter = 0;
		t.x = 56;
		t.skinName = CheckBanerSkin$Skin9;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new MosueRadioButton();
		this.btn1 = t;
		t.anchorOffsetX = 0;
		t.label = "2.00";
		t.verticalCenter = 0;
		t.x = 185;
		t.skinName = CheckBanerSkin$Skin10;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new MosueRadioButton();
		this.btn2 = t;
		t.anchorOffsetX = 0;
		t.label = "3.00";
		t.verticalCenter = 0;
		t.x = 314;
		t.skinName = CheckBanerSkin$Skin11;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new MosueRadioButton();
		this.btn3 = t;
		t.anchorOffsetX = 0;
		t.label = "4.00";
		t.verticalCenter = 0;
		t.x = 443;
		t.skinName = CheckBanerSkin$Skin12;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new MosueRadioButton();
		this.btn4 = t;
		t.anchorOffsetX = 0;
		t.label = "5.00";
		t.verticalCenter = 0;
		t.x = 573;
		t.skinName = CheckBanerSkin$Skin13;
		return t;
	};
	_proto.rightBtn_i = function () {
		var t = new MouseButton();
		this.rightBtn = t;
		t.label = "";
		t.verticalCenter = 0.5;
		t.x = 702;
		t.skinName = CheckBanerSkin$Skin14;
		return t;
	};
	return CheckBanerSkin;
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
		t.bottom = -1;
		t.left = 1;
		t.right = -1;
		t.scale9Grid = new egret.Rectangle(180,269,526,95);
		t.source = "loadingbg1_jpg";
		t.top = 1;
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
		t.width = 204;
		t.x = 0;
		t.y = 629.34;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.scrollEnabled = true;
		t.x = 3.04;
		t.y = 629.7;
		t.elementsContent = [this.bar_i()];
		return t;
	};
	_proto.bar_i = function () {
		var t = new eui.Image();
		this.bar = t;
		t.scaleX = 1.52;
		t.scaleY = 1.5;
		t.source = "loading1_png";
		t.y = 3;
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
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.source = "loadingbg2_png";
		return t;
	};
	return NomalLoadingUISkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/GameScenceSkin.exml'] = window.GameScenceSkin = (function (_super) {
	__extends(GameScenceSkin, _super);
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
						new eui.SetProperty("_Image1","source","line4_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line4_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin15.prototype;

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
						new eui.SetProperty("_Image1","source","line2_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line2_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin16.prototype;

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
						new eui.SetProperty("_Image1","source","line1_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line1_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin17.prototype;

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
						new eui.SetProperty("_Image1","source","line3_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line3_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin18.prototype;

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
						new eui.SetProperty("_Image1","source","line5_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line5_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin19.prototype;

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
						new eui.SetProperty("_Image1","source","line5_icon_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","line5_icon_png")
					])
			];
		}
		var _proto = GameScenceSkin$Skin20.prototype;

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
		return GameScenceSkin$Skin20;
	})(eui.Skin);

	var GameScenceSkin$Skin21 = 	(function (_super) {
		__extends(GameScenceSkin$Skin21, _super);
		function GameScenceSkin$Skin21() {
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
		var _proto = GameScenceSkin$Skin21.prototype;

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
		return GameScenceSkin$Skin21;
	})(eui.Skin);

	var GameScenceSkin$Skin22 = 	(function (_super) {
		__extends(GameScenceSkin$Skin22, _super);
		function GameScenceSkin$Skin22() {
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
		var _proto = GameScenceSkin$Skin22.prototype;

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
		return GameScenceSkin$Skin22;
	})(eui.Skin);

	var GameScenceSkin$Skin23 = 	(function (_super) {
		__extends(GameScenceSkin$Skin23, _super);
		function GameScenceSkin$Skin23() {
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
		var _proto = GameScenceSkin$Skin23.prototype;

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
		return GameScenceSkin$Skin23;
	})(eui.Skin);

	var GameScenceSkin$Skin24 = 	(function (_super) {
		__extends(GameScenceSkin$Skin24, _super);
		function GameScenceSkin$Skin24() {
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
		var _proto = GameScenceSkin$Skin24.prototype;

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
		return GameScenceSkin$Skin24;
	})(eui.Skin);

	function GameScenceSkin() {
		_super.call(this);
		this.skinParts = ["reel0","reel1","reel2","line1","line2","line3","line4","line5","lm4","lm2","lm1","lm3","lm5","rm5","rm2","rm1","rm3","rm4","scoreLabel","scoreGroup","maskRect","dianji","image1","image0","image2","fuhao","ewaiLabel","numLabel","rewardScoreGroup","freeslotGroup","allnumLabel0","allnumLabel","allGroup","group"];
		
		this.height = 600;
		this.width = 1100;
		this.elementsContent = [this._Image1_i(),this.reel0_i(),this.reel1_i(),this.reel2_i(),this._Group1_i(),this.scoreGroup_i(),this.maskRect_i(),this.dianji_i(),this.group_i()];
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
		t.skinName = GameScenceSkin$Skin15;
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
		t.skinName = GameScenceSkin$Skin16;
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
		t.skinName = GameScenceSkin$Skin17;
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
		t.skinName = GameScenceSkin$Skin18;
		return t;
	};
	_proto.lm5_i = function () {
		var t = new MouseButton2();
		this.lm5 = t;
		t.horizontalCenter = -483;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 439.4;
		t.skinName = GameScenceSkin$Skin19;
		return t;
	};
	_proto.rm5_i = function () {
		var t = new MouseButton2();
		this.rm5 = t;
		t.horizontalCenter = 488;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 20.65;
		t.skinName = GameScenceSkin$Skin20;
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
		t.skinName = GameScenceSkin$Skin21;
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
		t.skinName = GameScenceSkin$Skin22;
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
		t.skinName = GameScenceSkin$Skin23;
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
		t.skinName = GameScenceSkin$Skin24;
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
		t.letterSpacing = -8;
		t.text = "cny 20.00";
		t.verticalCenter = 0;
		return t;
	};
	_proto.maskRect_i = function () {
		var t = new eui.Rect();
		this.maskRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -483;
		t.fillAlpha = 0.6;
		t.left = -900;
		t.right = -1050;
		t.top = -500;
		t.visible = false;
		return t;
	};
	_proto.dianji_i = function () {
		var t = new eui.Rect();
		this.dianji = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.01;
		t.fillColor = 0xFCFCFC;
		t.height = 474.54;
		t.strokeColor = 0xFFFFFF;
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
		t.visible = false;
		t.width = 800;
		t.x = 552;
		t.y = 299;
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
		t.elementsContent = [this.fuhao_i(),this._Label1_i(),this.ewaiLabel_i(),this._Group2_i()];
		return t;
	};
	_proto.fuhao_i = function () {
		var t = new eui.Group();
		this.fuhao = t;
		t.height = 140;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.width = 282;
		t.y = 201.82;
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
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "您赢得额外10次免费旋转";
		t.textAlign = "center";
		t.textColor = 0xF4B407;
		t.verticalAlign = "middle";
		t.y = 365.25;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 1.5;
		t.scaleX = 1.6;
		t.scaleY = 1.6;
		t.verticalCenter = 10;
		t.elementsContent = [this.numLabel_i()];
		return t;
	};
	_proto.numLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.numLabel = t;
		t.font = "f6_fnt";
		t.horizontalCenter = 0;
		t.text = "cny 300.00";
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
		t.elementsContent = [this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
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
		t.fontFamily = "Microsoft YaHei";
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
		t.fontFamily = "Microsoft YaHei";
		t.height = 100;
		t.horizontalCenter = 3.5;
		t.size = 90;
		t.stroke = 5;
		t.strokeColor = 0x3a0054;
		t.text = "您赢得10次免费";
		t.textAlign = "center";
		t.textColor = 0xeec413;
		t.verticalAlign = "middle";
		t.y = 139.64;
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
		t.elementsContent = [this.allnumLabel0_i(),this._Label6_i(),this.allnumLabel_i()];
		return t;
	};
	_proto.allnumLabel0_i = function () {
		var t = new eui.BitmapLabel();
		this.allnumLabel0 = t;
		t.font = "f6_fnt";
		t.horizontalCenter = 0;
		t.text = "cny";
		t.y = 242;
		return t;
	};
	_proto._Label6_i = function () {
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
		t.y = 128;
		return t;
	};
	_proto.allnumLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.allnumLabel = t;
		t.font = "f6_fnt";
		t.horizontalCenter = 0;
		t.text = "28";
		t.y = 318;
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
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "bicon_M2_1_png";
		t.verticalCenter = 0;
		return t;
	};
	return ItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/PreviewSkin.exml'] = window.PreviewSkin = (function (_super) {
	__extends(PreviewSkin, _super);
	var PreviewSkin$Skin25 = 	(function (_super) {
		__extends(PreviewSkin$Skin25, _super);
		function PreviewSkin$Skin25() {
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
						new eui.SetProperty("_Image1","source","fert_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","feature_preview_texture0_level1_04_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","feature_preview_texture0_level1_04_png")
					])
			];
		}
		var _proto = PreviewSkin$Skin25.prototype;

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
		return PreviewSkin$Skin25;
	})(eui.Skin);

	var PreviewSkin$Skin26 = 	(function (_super) {
		__extends(PreviewSkin$Skin26, _super);
		function PreviewSkin$Skin26() {
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
						new eui.SetProperty("_Image1","source","fert_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","feature_preview_texture0_level1_04_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","feature_preview_texture0_level1_04_png")
					])
			];
		}
		var _proto = PreviewSkin$Skin26.prototype;

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
		return PreviewSkin$Skin26;
	})(eui.Skin);

	var PreviewSkin$Skin27 = 	(function (_super) {
		__extends(PreviewSkin$Skin27, _super);
		function PreviewSkin$Skin27() {
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
						new eui.SetProperty("_Image1","source","feature_3_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","feature_3_png")
					])
			];
		}
		var _proto = PreviewSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feature_2_png";
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
		return PreviewSkin$Skin27;
	})(eui.Skin);

	var PreviewSkin$Skin28 = 	(function (_super) {
		__extends(PreviewSkin$Skin28, _super);
		function PreviewSkin$Skin28() {
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
						new eui.SetProperty("_Image1","source","feature_preview_c1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = PreviewSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "feature_preview_c0_png";
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
		return PreviewSkin$Skin28;
	})(eui.Skin);

	function PreviewSkin() {
		_super.call(this);
		this.skinParts = ["cGroup","masks","r0","r1","nextBtn","lightImg","btnMask","selectedBtn"];
		
		this.height = 650;
		this.width = 903;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.r0_i(),this.r1_i(),this.nextBtn_i(),this._Group2_i(),this.selectedBtn_i(),this._Label1_i()];
	}
	var _proto = PreviewSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "feature_preview_texture0_level1_09_png";
		t.x = 13;
		t.y = 4;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 395;
		t.touchEnabled = true;
		t.width = 804;
		t.x = 54;
		t.y = 69;
		t.elementsContent = [this.cGroup_i(),this.masks_i()];
		return t;
	};
	_proto.cGroup_i = function () {
		var t = new eui.Group();
		this.cGroup = t;
		t.height = 395;
		t.scrollEnabled = true;
		t.touchEnabled = true;
		t.width = 795;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.masks_i = function () {
		var t = new eui.Image();
		this.masks = t;
		t.source = "feature_preview_texture1_level1_png";
		t.x = 9;
		t.y = 0;
		return t;
	};
	_proto.r0_i = function () {
		var t = new eui.RadioButton();
		this.r0 = t;
		t.bottom = 70;
		t.label = "";
		t.x = 64;
		t.skinName = PreviewSkin$Skin25;
		return t;
	};
	_proto.r1_i = function () {
		var t = new eui.RadioButton();
		this.r1 = t;
		t.bottom = 70;
		t.label = "";
		t.x = 90;
		t.skinName = PreviewSkin$Skin26;
		return t;
	};
	_proto.nextBtn_i = function () {
		var t = new MouseButton();
		this.nextBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.y = 519;
		t.skinName = PreviewSkin$Skin27;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 90;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.width = 300;
		t.y = 528;
		t.elementsContent = [this.lightImg_i(),this.btnMask_i()];
		return t;
	};
	_proto.lightImg_i = function () {
		var t = new eui.Image();
		this.lightImg = t;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "feature_preview_texture0_level1_24_png";
		t.touchEnabled = false;
		t.x = 3;
		t.y = -4;
		return t;
	};
	_proto.btnMask_i = function () {
		var t = new eui.Image();
		this.btnMask = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.2;
		t.scaleY = 1.3;
		t.source = "feature_preview_texture3_level1_png";
		t.verticalCenter = -0.5;
		return t;
	};
	_proto.selectedBtn_i = function () {
		var t = new eui.ToggleButton();
		this.selectedBtn = t;
		t.label = "";
		t.x = 644;
		t.y = 544;
		t.skinName = PreviewSkin$Skin28;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 37;
		t.size = 28;
		t.stroke = 0;
		t.strokeColor = 0xc904f4;
		t.text = "不再显示";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 693;
		t.y = 546;
		return t;
	};
	return PreviewSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/MainScenceUISkin.exml'] = window.MainScenceUISkin = (function (_super) {
	__extends(MainScenceUISkin, _super);
	var MainScenceUISkin$Skin29 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin29, _super);
		function MainScenceUISkin$Skin29() {
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
						new eui.SetProperty("_Image1","source","menu_texture0_level1_36_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_36-22_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_36-45_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "menu_texture0_level1_36-44_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.textColor = 0x000000;
			t.verticalCenter = 2.5;
			return t;
		};
		return MainScenceUISkin$Skin29;
	})(eui.Skin);

	var MainScenceUISkin$Skin30 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin30, _super);
		function MainScenceUISkin$Skin30() {
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
						new eui.SetProperty("_Image1","source","menu_texture0_level1_36_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_36-22_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_36-45_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "menu_texture0_level1_36-44_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "Microsoft YaHei";
			t.horizontalCenter = 0;
			t.size = 26;
			t.textColor = 0x000000;
			t.verticalCenter = 2.5;
			return t;
		};
		return MainScenceUISkin$Skin30;
	})(eui.Skin);

	var MainScenceUISkin$Skin31 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin31, _super);
		function MainScenceUISkin$Skin31() {
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
						new eui.SetProperty("_Image1","source","menu_texture0_level1_3_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","menu_texture0_level1_3_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "menu_texture0_level1_1_png";
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
		return MainScenceUISkin$Skin31;
	})(eui.Skin);

	var MainScenceUISkin$Skin32 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin32, _super);
		function MainScenceUISkin$Skin32() {
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
						new eui.SetProperty("_Image1","source","his_down_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","statusbar_texture0_level1_12-13_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","his_liang_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "his_an_png";
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
		return MainScenceUISkin$Skin32;
	})(eui.Skin);

	var MainScenceUISkin$Skin33 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin33, _super);
		function MainScenceUISkin$Skin33() {
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
						new eui.SetProperty("_Image1","source","set_down_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","set_an_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","set_liang_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "set_an_png";
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
		return MainScenceUISkin$Skin33;
	})(eui.Skin);

	var MainScenceUISkin$Skin34 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin34, _super);
		function MainScenceUISkin$Skin34() {
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
						new eui.SetProperty("_Image1","source","musicx_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","music_an_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","music_down_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","musicx_liang_png")
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","music_liang_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "musicx_an_png";
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
		return MainScenceUISkin$Skin34;
	})(eui.Skin);

	var MainScenceUISkin$Skin35 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin35, _super);
		function MainScenceUISkin$Skin35() {
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
						new eui.SetProperty("_Image1","source","speed2_down_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","speed1_an_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","speed1_down_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","speed2_liang_png")
					])
				,
				new eui.State ("rollOverAndSelected",
					[
						new eui.SetProperty("_Image1","source","speed1_liang_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "speed2_an_png";
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
		return MainScenceUISkin$Skin35;
	})(eui.Skin);

	var MainScenceUISkin$Skin36 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin36, _super);
		function MainScenceUISkin$Skin36() {
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
						new eui.SetProperty("_Image1","source","qus_down_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","statusbar_texture0_level1_12-10_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","qus_liang_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "qus_an_png";
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
		return MainScenceUISkin$Skin36;
	})(eui.Skin);

	var MainScenceUISkin$Skin37 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin37, _super);
		function MainScenceUISkin$Skin37() {
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
						new eui.SetProperty("_Image1","source","exitx_down_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","statusbar_texture0_level1_01_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","exitx_liang_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "exitx_an_png";
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
		return MainScenceUISkin$Skin37;
	})(eui.Skin);

	function MainScenceUISkin() {
		_super.call(this);
		this.skinParts = ["bg1","bg0","mbg0","showbg","showlabel","showGroup","gameScence","shan","shan0","shan1","ruleBtn","autoBtn","playBtn","autoPlayTitleLabel","autoPlayNumLabel","autoPlayGroup","moneyLabel","betNumLabel","allNumLabel","baner","ruleGroup","mgroup0","historyBtn","setBtn","musicBtn","shanBtn","qusBtn","bananceLabel","betbanaceLabel","rewardLabel","exitBtn","mgroup1","img0","img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","img11","strGroup","qbg0","qimg0","qbg1","qimg1","preview","logoImg"];
		
		this.height = 912;
		this.width = 1200;
		this.elementsContent = [this.bg1_i(),this.bg0_i(),this.mbg0_i(),this.mgroup0_i(),this.mgroup1_i(),this.strGroup_i(),this._Group9_i(),this.preview_i(),this.logoImg_i()];
	}
	var _proto = MainScenceUISkin.prototype;

	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.horizontalCenter = 0;
		t.source = "background_texture1_level1_jpg";
		t.verticalCenter = -430;
		return t;
	};
	_proto.bg0_i = function () {
		var t = new eui.Image();
		this.bg0 = t;
		t.horizontalCenter = 0;
		t.source = "background_texture0_level1_jpg";
		t.verticalCenter = -430;
		return t;
	};
	_proto.mbg0_i = function () {
		var t = new eui.Image();
		this.mbg0 = t;
		t.anchorOffsetY = 0;
		t.bottom = 33;
		t.height = 158;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,54,125,56);
		t.source = "bj-3_jpg";
		return t;
	};
	_proto.mgroup0_i = function () {
		var t = new eui.Group();
		this.mgroup0 = t;
		t.height = 912;
		t.horizontalCenter = 0;
		t.scrollEnabled = false;
		t.verticalCenter = 0;
		t.width = 1200;
		t.elementsContent = [this.showGroup_i(),this.gameScence_i(),this.shan_i(),this.shan0_i(),this.shan1_i(),this._Group5_i(),this.ruleGroup_i()];
		return t;
	};
	_proto.showGroup_i = function () {
		var t = new eui.Group();
		this.showGroup = t;
		t.horizontalCenter = 1.5;
		t.y = 117.56;
		t.elementsContent = [this.showbg_i(),this.showlabel_i()];
		return t;
	};
	_proto.showbg_i = function () {
		var t = new eui.Image();
		this.showbg = t;
		t.anchorOffsetX = 0;
		t.height = 78;
		t.horizontalCenter = 0;
		t.source = "menu1_png";
		t.verticalCenter = 0;
		t.width = 975;
		return t;
	};
	_proto.showlabel_i = function () {
		var t = new eui.Label();
		this.showlabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 50;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x09e8f2;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 900;
		return t;
	};
	_proto.gameScence_i = function () {
		var t = new GameScence();
		this.gameScence = t;
		t.horizontalCenter = -5;
		t.scaleX = 0.95;
		t.scaleY = 0.98;
		t.skinName = "GameScenceSkin";
		t.verticalCenter = -4;
		return t;
	};
	_proto.shan_i = function () {
		var t = new eui.Rect();
		this.shan = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.25;
		t.fillColor = 0xfcfcfc;
		t.height = 468.48;
		t.strokeColor = 0xffffff;
		t.visible = false;
		t.width = 239.09;
		t.x = 182.12;
		t.y = 217.15;
		return t;
	};
	_proto.shan0_i = function () {
		var t = new eui.Rect();
		this.shan0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.25;
		t.fillColor = 0xFCFCFC;
		t.height = 468.48;
		t.strokeColor = 0xFFFFFF;
		t.visible = false;
		t.width = 235.09;
		t.x = 477.12;
		t.y = 219.15;
		return t;
	};
	_proto.shan1_i = function () {
		var t = new eui.Rect();
		this.shan1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.25;
		t.fillColor = 0xFCFCFC;
		t.height = 468.48;
		t.strokeColor = 0xFFFFFF;
		t.visible = false;
		t.width = 235.09;
		t.x = 770.12;
		t.y = 217.15;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.bottom = 36;
		t.height = 158;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this.ruleBtn_i(),this.autoBtn_i(),this.playBtn_i(),this.autoPlayGroup_i(),this._Group4_i(),this._Label4_i(),this.baner_i()];
		return t;
	};
	_proto.ruleBtn_i = function () {
		var t = new MouseButton();
		this.ruleBtn = t;
		t.label = "赔付表";
		t.x = 36.94;
		t.y = 16.53;
		t.skinName = MainScenceUISkin$Skin29;
		return t;
	};
	_proto.autoBtn_i = function () {
		var t = new MouseButton();
		this.autoBtn = t;
		t.label = "自动游戏";
		t.x = 38.48;
		t.y = 83.92;
		t.skinName = MainScenceUISkin$Skin30;
		return t;
	};
	_proto.playBtn_i = function () {
		var t = new MouseButton();
		this.playBtn = t;
		t.label = "旋转";
		t.right = 22;
		t.y = 12.57;
		t.skinName = MainScenceUISkin$Skin31;
		return t;
	};
	_proto.autoPlayGroup_i = function () {
		var t = new eui.Group();
		this.autoPlayGroup = t;
		t.visible = false;
		t.x = 983.92;
		t.y = 12.96;
		t.elementsContent = [this._Image1_i(),this.autoPlayTitleLabel_i(),this.autoPlayNumLabel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "menu_texture0_level1_42_png";
		t.y = 0;
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
	_proto.autoPlayNumLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.autoPlayNumLabel = t;
		t.font = "f3_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.text = "75";
		t.verticalCenter = 12.5;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 90;
		t.horizontalCenter = -27;
		t.width = 769;
		t.y = -8.56;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.left = 26;
		t.y = -4.56;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this.moneyLabel_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "menu3_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 16;
		t.text = "余额";
		t.textAlign = "center";
		t.textColor = 0xefd413;
		t.verticalAlign = "middle";
		t.y = 11.9;
		return t;
	};
	_proto.moneyLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.moneyLabel = t;
		t.anchorOffsetX = 0;
		t.font = "f0_fnt";
		t.height = 40;
		t.horizontalCenter = 0.5;
		t.text = "cny 898.75";
		t.textAlign = "center";
		t.verticalAlign = "center";
		t.verticalCenter = 10;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 22;
		t.y = -4.56;
		t.elementsContent = [this._Image3_i(),this.betNumLabel_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "menu3_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.betNumLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.betNumLabel = t;
		t.anchorOffsetX = 0;
		t.font = "f0_fnt";
		t.height = 40;
		t.horizontalCenter = -4;
		t.text = "cny 4665.5";
		t.textAlign = "center";
		t.verticalAlign = "center";
		t.verticalCenter = 10;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 16;
		t.text = "投注";
		t.textAlign = "center";
		t.textColor = 0xefd413;
		t.verticalAlign = "middle";
		t.y = 11.9;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.x = 542.24;
		t.y = -4.56;
		t.elementsContent = [this._Image4_i(),this.allNumLabel_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "menu3_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.allNumLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.allNumLabel = t;
		t.anchorOffsetX = 0;
		t.font = "f0_fnt";
		t.height = 40;
		t.horizontalCenter = -6.5;
		t.text = "cny 170.00";
		t.textAlign = "center";
		t.verticalAlign = "center";
		t.verticalCenter = 10;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "总获胜 :";
		t.textAlign = "center";
		t.textColor = 0xefd413;
		t.verticalAlign = "middle";
		t.y = 11.9;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -10.5;
		t.size = 20;
		t.text = "投注:";
		t.y = 78.2;
		return t;
	};
	_proto.baner_i = function () {
		var t = new CheckBanner();
		this.baner = t;
		t.skinName = "CheckBanerSkin";
		t.x = 209.73;
		t.y = 91.58;
		return t;
	};
	_proto.ruleGroup_i = function () {
		var t = new eui.Group();
		this.ruleGroup = t;
		t.anchorOffsetY = 0;
		t.height = 622;
		t.left = 0;
		t.right = 0;
		t.visible = false;
		t.y = 94;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Label5_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "menu_texture0_level1_21_png";
		t.x = 39.76;
		t.y = 146;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M0_0_png";
		t.x = 68.24;
		t.y = 108;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M0_0_png";
		t.x = 164.24;
		t.y = 108;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M0_0_png";
		t.x = 266.24;
		t.y = 108;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "menu_texture0_level1_21_png";
		t.x = 38.24;
		t.y = 216;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M1_0_png";
		t.x = 66.72;
		t.y = 182;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M1_0_png";
		t.x = 162.72;
		t.y = 182;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M1_0_png";
		t.x = 264.72;
		t.y = 182;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "menu_texture0_level1_21_png";
		t.x = 40.24;
		t.y = 288;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M2_0_png";
		t.x = 70.24;
		t.y = 254;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M2_0_png";
		t.x = 172.24;
		t.y = 252;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M2_0_png";
		t.x = 268.24;
		t.y = 252;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.source = "menu_texture0_level1_21_png";
		t.x = 40.24;
		t.y = 362;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M3_0_png";
		t.x = 69.8;
		t.y = 330;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M3_0_png";
		t.x = 162.74;
		t.y = 330;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M3_0_png";
		t.x = 260.76;
		t.y = 330;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.source = "menu_texture0_level1_21_png";
		t.x = 41.76;
		t.y = 436;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "menu_texture0_level1_09-40_png";
		t.x = 462.79;
		t.y = 436;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M4_0_png";
		t.x = 65.76;
		t.y = 402;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M4_0_png";
		t.x = 169.76;
		t.y = 404;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "sicon_M4_0_png";
		t.x = 269.76;
		t.y = 402;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "menu_texture0_level1_09-32_png";
		t.x = 443.76;
		t.y = 144;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "menu_texture0_level1_09-30_png";
		t.x = 441.76;
		t.y = 218;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "menu_texture0_level1_09-31_png";
		t.x = 441.76;
		t.y = 288;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "menu_texture0_level1_09-40_png";
		t.x = 463.76;
		t.y = 362;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "menu_texture0_level1_64-39_png";
		t.x = 130;
		t.y = 530;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.source = "menu_texture0_level1_64-38_png";
		t.x = 200;
		t.y = 530;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.source = "menu_texture0_level1_64-36_png";
		t.x = 282;
		t.y = 532;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.source = "menu_texture0_level1_64-33_png";
		t.x = 366;
		t.y = 530;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.source = "menu_texture0_level1_64-37_png";
		t.x = 456;
		t.y = 530;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 285;
		t.lineSpacing = 5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.stroke = 2;
		t.strokeColor = 0x000000;
		t.text = "分散获胜将乘以总投注额并添加至赔付线获胜上";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.x = 726;
		t.y = 530;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "des_bg0_png";
		t.top = 21;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "des_bg1_png";
		t.x = 619.25;
		t.y = 286.64;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "des_bg2_png";
		t.x = 626.99;
		t.y = 115.18;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "menu_texture0_level1_09-10_png";
		t.x = 926.1;
		t.y = 331.56;
		return t;
	};
	_proto.mgroup1_i = function () {
		var t = new eui.Group();
		this.mgroup1 = t;
		t.bottom = -2;
		t.height = 39;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image39_i(),this._Group6_i(),this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "statusbar_texture0_level1_03_png";
		t.top = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.left = 6;
		t.verticalCenter = 0;
		t.elementsContent = [this.historyBtn_i(),this.setBtn_i(),this.musicBtn_i(),this.shanBtn_i(),this.qusBtn_i()];
		return t;
	};
	_proto.historyBtn_i = function () {
		var t = new MouseButton();
		this.historyBtn = t;
		t.label = "";
		t.x = 152.48;
		t.y = 2;
		t.skinName = MainScenceUISkin$Skin32;
		return t;
	};
	_proto.setBtn_i = function () {
		var t = new MouseButton();
		this.setBtn = t;
		t.label = "";
		t.x = 0;
		t.y = 2;
		t.skinName = MainScenceUISkin$Skin33;
		return t;
	};
	_proto.musicBtn_i = function () {
		var t = new MosueCheckBox();
		this.musicBtn = t;
		t.label = "";
		t.x = 46;
		t.y = 2;
		t.skinName = MainScenceUISkin$Skin34;
		return t;
	};
	_proto.shanBtn_i = function () {
		var t = new MosueCheckBox();
		this.shanBtn = t;
		t.label = "";
		t.x = 82;
		t.y = 0;
		t.skinName = MainScenceUISkin$Skin35;
		return t;
	};
	_proto.qusBtn_i = function () {
		var t = new MouseButton();
		this.qusBtn = t;
		t.label = "";
		t.x = 112;
		t.y = 2;
		t.skinName = MainScenceUISkin$Skin36;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -14.5;
		t.verticalCenter = 0;
		t.width = 513;
		t.elementsContent = [this.bananceLabel_i(),this.betbanaceLabel_i(),this.rewardLabel_i()];
		return t;
	};
	_proto.bananceLabel_i = function () {
		var t = new eui.Label();
		this.bananceLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "余额:  CNY 65.25";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = -1.52;
		return t;
	};
	_proto.betbanaceLabel_i = function () {
		var t = new eui.Label();
		this.betbanaceLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "投注: CNY 65.25";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 211.26;
		return t;
	};
	_proto.rewardLabel_i = function () {
		var t = new eui.Label();
		this.rewardLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.size = 18;
		t.text = "奖金:  ";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.x = 458.96;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.height = 31;
		t.right = 8;
		t.width = 132;
		t.y = 4;
		t.elementsContent = [this.exitBtn_i(),this._Image40_i()];
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new MouseButton();
		this.exitBtn = t;
		t.label = "";
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.verticalCenter = 0;
		t.x = 105.55;
		t.skinName = MainScenceUISkin$Skin37;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.source = "statusbar_texture0_level1_12-05_png";
		t.verticalCenter = 0;
		t.x = -93.97;
		return t;
	};
	_proto.strGroup_i = function () {
		var t = new eui.Group();
		this.strGroup = t;
		t.horizontalCenter = 4;
		t.scaleX = 0.8;
		t.scaleY = 0.82;
		t.y = 25.56;
		t.elementsContent = [this._Image41_i(),this.img0_i(),this.img1_i(),this.img2_i(),this.img3_i(),this.img4_i(),this.img5_i(),this.img6_i(),this.img7_i(),this.img8_i(),this.img9_i(),this.img10_i(),this.img11_i()];
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.source = "logo_texture1_level1_02_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.img0_i = function () {
		var t = new eui.Image();
		this.img0 = t;
		t.source = "logo_texture1_level1_10-06_png";
		t.x = 6.17;
		t.y = 11.46;
		return t;
	};
	_proto.img1_i = function () {
		var t = new eui.Image();
		this.img1 = t;
		t.source = "logo_texture1_level1_10-20_png";
		t.x = 67.46;
		t.y = 8.88;
		return t;
	};
	_proto.img2_i = function () {
		var t = new eui.Image();
		this.img2 = t;
		t.source = "logo_texture1_level1_10-10_png";
		t.x = 120.18;
		t.y = 10.75;
		return t;
	};
	_proto.img3_i = function () {
		var t = new eui.Image();
		this.img3 = t;
		t.source = "logo_texture1_level1_10-09_png";
		t.x = 166.08;
		t.y = 8.78;
		return t;
	};
	_proto.img4_i = function () {
		var t = new eui.Image();
		this.img4 = t;
		t.source = "logo_texture1_level1_10-18_png";
		t.x = 215.82;
		t.y = 10.78;
		return t;
	};
	_proto.img5_i = function () {
		var t = new eui.Image();
		this.img5 = t;
		t.source = "logo_texture1_level1_10-11_png";
		t.x = 275.72;
		t.y = 10;
		return t;
	};
	_proto.img6_i = function () {
		var t = new eui.Image();
		this.img6 = t;
		t.source = "logo_texture1_level1_10-17_png";
		t.x = 331.36;
		t.y = 10.78;
		return t;
	};
	_proto.img7_i = function () {
		var t = new eui.Image();
		this.img7 = t;
		t.source = "logo_texture1_level1_10-19_png";
		t.x = 411.82;
		t.y = 9.56;
		return t;
	};
	_proto.img8_i = function () {
		var t = new eui.Image();
		this.img8 = t;
		t.source = "logo_texture1_level1_10-15_png";
		t.x = 466.28;
		t.y = 7.56;
		return t;
	};
	_proto.img9_i = function () {
		var t = new eui.Image();
		this.img9 = t;
		t.source = "logo_texture1_level1_10_png";
		t.x = 518.28;
		t.y = 10.78;
		return t;
	};
	_proto.img10_i = function () {
		var t = new eui.Image();
		this.img10 = t;
		t.source = "logo_texture1_level1_10-07_png";
		t.x = 577.46;
		t.y = 12.34;
		return t;
	};
	_proto.img11_i = function () {
		var t = new eui.Image();
		this.img11 = t;
		t.source = "logo_texture1_level1_10-11_png";
		t.x = 629;
		t.y = 10.34;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.y = -4;
		t.elementsContent = [this.qbg0_i(),this.qimg0_i(),this.qbg1_i(),this.qimg1_i()];
		return t;
	};
	_proto.qbg0_i = function () {
		var t = new eui.Image();
		this.qbg0 = t;
		t.left = 18;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "logo_texture1_level1_01-03_png";
		t.y = 12;
		return t;
	};
	_proto.qimg0_i = function () {
		var t = new eui.Image();
		this.qimg0 = t;
		t.left = 20;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "logo_texture1_level1_30_png";
		t.y = 14;
		return t;
	};
	_proto.qbg1_i = function () {
		var t = new eui.Image();
		this.qbg1 = t;
		t.right = 18;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "logo_texture1_level1_01_png";
		t.y = 6;
		return t;
	};
	_proto.qimg1_i = function () {
		var t = new eui.Image();
		this.qimg1 = t;
		t.right = 18;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "logo_texture1_level1_32_png";
		t.y = 7.2;
		return t;
	};
	_proto.preview_i = function () {
		var t = new PreviewCompoment();
		this.preview = t;
		t.horizontalCenter = 0;
		t.skinName = "PreviewSkin";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.logoImg_i = function () {
		var t = new eui.Image();
		this.logoImg = t;
		t.bottom = 15;
		t.horizontalCenter = 0;
		t.source = "loadingbg2_png";
		t.visible = false;
		return t;
	};
	return MainScenceUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/ScrollItem1Skin.exml'] = window.ScrollItem1Skin = (function (_super) {
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
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "feature_1_png";
		t.verticalCenter = 0;
		return t;
	};
	return ScrollItem1Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/net/netcloseSkin.exml'] = window.netcloseSkin = (function (_super) {
	__extends(netcloseSkin, _super);
	var netcloseSkin$Skin38 = 	(function (_super) {
		__extends(netcloseSkin$Skin38, _super);
		function netcloseSkin$Skin38() {
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
		var _proto = netcloseSkin$Skin38.prototype;

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
		return netcloseSkin$Skin38;
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
		t.skinName = netcloseSkin$Skin38;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/SetSkin.exml'] = window.SetSkin = (function (_super) {
	__extends(SetSkin, _super);
	var SetSkin$Skin39 = 	(function (_super) {
		__extends(SetSkin$Skin39, _super);
		function SetSkin$Skin39() {
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
		var _proto = SetSkin$Skin39.prototype;

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
			t.size = 16;
			t.verticalCenter = 0;
			return t;
		};
		return SetSkin$Skin39;
	})(eui.Skin);

	function SetSkin() {
		_super.call(this);
		this.skinParts = ["musicBtn","autoBtn","speedBtn","emptyketBtn","exitBtn","setGroup"];
		
		this.height = 912;
		this.width = 1120;
		this.elementsContent = [this._Rect1_i(),this.setGroup_i()];
	}
	var _proto = SetSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.setGroup_i = function () {
		var t = new eui.Group();
		this.setGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.musicBtn_i(),this._Label2_i(),this.autoBtn_i(),this._Label3_i(),this.speedBtn_i(),this._Label4_i(),this.emptyketBtn_i(),this._Label5_i(),this.exitBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.scale9Grid = new egret.Rectangle(140,95,53,17);
		t.source = "videoslot_popup_texture0_level1_03-04_png";
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 24;
		t.text = "设置";
		t.textColor = 0xe5ad22;
		t.y = 63.6;
		return t;
	};
	_proto.musicBtn_i = function () {
		var t = new STogleButton();
		this.musicBtn = t;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.skinName = "MyTogleButtonSkin";
		t.x = 56.72;
		t.y = 263.94;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 22;
		t.size = 18;
		t.text = "声音";
		t.verticalAlign = "middle";
		t.x = 96.76;
		t.y = 269.98;
		return t;
	};
	_proto.autoBtn_i = function () {
		var t = new STogleButton();
		this.autoBtn = t;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.skinName = "MyTogleButtonSkin";
		t.x = 285.23;
		t.y = 263.94;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 22;
		t.size = 18;
		t.text = "自动调整投注";
		t.verticalAlign = "middle";
		t.x = 324.31;
		t.y = 269.98;
		return t;
	};
	_proto.speedBtn_i = function () {
		var t = new STogleButton();
		this.speedBtn = t;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.skinName = "MyTogleButtonSkin";
		t.x = 56.72;
		t.y = 311.94;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 22;
		t.size = 18;
		t.text = "快速进行";
		t.verticalAlign = "middle";
		t.x = 96.76;
		t.y = 316.98;
		return t;
	};
	_proto.emptyketBtn_i = function () {
		var t = new STogleButton();
		this.emptyketBtn = t;
		t.label = "";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.skinName = "MyTogleButtonSkin";
		t.x = 285.23;
		t.y = 311.94;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.height = 22;
		t.size = 18;
		t.text = "空格键启动旋转";
		t.verticalAlign = "middle";
		t.x = 324.31;
		t.y = 316.98;
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new MouseButton();
		this.exitBtn = t;
		t.horizontalCenter = 0;
		t.label = "确认";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.y = 373.76;
		t.skinName = SetSkin$Skin39;
		return t;
	};
	return SetSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/SpeedTipsSkin.exml'] = window.SpeedTipsSkin = (function (_super) {
	__extends(SpeedTipsSkin, _super);
	var SpeedTipsSkin$Skin40 = 	(function (_super) {
		__extends(SpeedTipsSkin$Skin40, _super);
		function SpeedTipsSkin$Skin40() {
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
			];
		}
		var _proto = SpeedTipsSkin$Skin40.prototype;

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
			t.fontFamily = "DFKai-SB";
			t.horizontalCenter = 0;
			t.size = 18;
			t.verticalCenter = 0;
			return t;
		};
		return SpeedTipsSkin$Skin40;
	})(eui.Skin);

	var SpeedTipsSkin$Skin41 = 	(function (_super) {
		__extends(SpeedTipsSkin$Skin41, _super);
		function SpeedTipsSkin$Skin41() {
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
		var _proto = SpeedTipsSkin$Skin41.prototype;

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
			t.fontFamily = "DFKai-SB";
			t.horizontalCenter = 0;
			t.size = 18;
			t.verticalCenter = 0;
			return t;
		};
		return SpeedTipsSkin$Skin41;
	})(eui.Skin);

	function SpeedTipsSkin() {
		_super.call(this);
		this.skinParts = ["desLabel","titleLabel","noBtn","yesBtn","nono","yesyes"];
		
		this.height = 912;
		this.width = 1120;
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
	}
	var _proto = SpeedTipsSkin.prototype;

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
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image1_i(),this.desLabel_i(),this.titleLabel_i(),this.noBtn_i(),this.yesBtn_i(),this.nono_i(),this.yesyes_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
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
		t.size = 17;
		t.text = "您似乎喜欢较快的游戏节奏。是否启用“快速游戏”模式？您可以随时在设置菜单中禁用它。";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.verticalCenter = -21;
		t.width = 357.34;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi_GB2312";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "快速进行";
		t.textAlign = "center";
		t.textColor = 0xf2c130;
		t.verticalAlign = "middle";
		t.y = 360.95;
		return t;
	};
	_proto.noBtn_i = function () {
		var t = new MouseButton();
		this.noBtn = t;
		t.horizontalCenter = -78;
		t.label = "";
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 527.51;
		t.skinName = SpeedTipsSkin$Skin40;
		return t;
	};
	_proto.yesBtn_i = function () {
		var t = new MouseButton();
		this.yesBtn = t;
		t.horizontalCenter = 82;
		t.label = "";
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 527.51;
		t.skinName = SpeedTipsSkin$Skin41;
		return t;
	};
	_proto.nono_i = function () {
		var t = new eui.Label();
		this.nono = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi_GB2312";
		t.height = 40;
		t.horizontalCenter = -78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "否";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 389;
		t.y = 531.03;
		return t;
	};
	_proto.yesyes_i = function () {
		var t = new eui.Label();
		this.yesyes = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "KaiTi_GB2312";
		t.height = 40;
		t.horizontalCenter = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "是";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 620.0000000000001;
		t.y = 531.03;
		return t;
	};
	return SpeedTipsSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/StipSkin.exml'] = window.StipSkin = (function (_super) {
	__extends(StipSkin, _super);
	var StipSkin$Skin42 = 	(function (_super) {
		__extends(StipSkin$Skin42, _super);
		function StipSkin$Skin42() {
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
		var _proto = StipSkin$Skin42.prototype;

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
			t.size = 16;
			t.verticalCenter = 0;
			return t;
		};
		return StipSkin$Skin42;
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
		t.label = "确认";
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.y = 281.76;
		t.skinName = StipSkin$Skin42;
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