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
		this.skinParts = ["track","bar","masks","ts","thumb"];
		
		this.height = 20;
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 526;
		this.elementsContent = [this._Image1_i(),this.track_i(),this.bar_i(),this.masks_i(),this.ts_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.source = "di_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(105,6,30,7);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "di1_png";
		t.verticalCenter = 0;
		t.width = 460;
		t.x = 33;
		return t;
	};
	_proto.bar_i = function () {
		var t = new eui.Image();
		this.bar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(105,6,30,7);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "di1_png";
		t.verticalCenter = 0;
		t.width = 431;
		t.x = 48;
		return t;
	};
	_proto.masks_i = function () {
		var t = new eui.Rect();
		this.masks = t;
		t.height = 20;
		t.verticalCenter = 0;
		t.width = 431;
		t.x = 48;
		return t;
	};
	_proto.ts_i = function () {
		var t = new eui.Image();
		this.ts = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(105,6,30,7);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "di1_png";
		t.verticalCenter = 0;
		t.width = 431;
		t.x = 48;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "diandian_right_btn@2x_png";
		t.verticalCenter = 9.5;
		t.x = 46.01;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/NomalLoadingUISkin.exml'] = window.NomalLoadingUISkin = (function (_super) {
	__extends(NomalLoadingUISkin, _super);
	function NomalLoadingUISkin() {
		_super.call(this);
		this.skinParts = ["txt","barbg","masks","lgroup"];
		
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.txt_i(),this._Group1_i()];
		this.states = [
			new eui.State ("hor",
				[
					new eui.SetProperty("_Image1","right",24),
					new eui.SetProperty("_Image1","bottom",24),
					new eui.SetProperty("barbg","verticalCenter",0),
					new eui.SetProperty("barbg","x",0),
					new eui.SetProperty("lgroup","width",751),
					new eui.SetProperty("_Group1","scaleX",0.7),
					new eui.SetProperty("_Group1","scaleY",0.6),
					new eui.SetProperty("_Group1","verticalCenter",111.5),
					new eui.SetProperty("_Group1","horizontalCenter",0),
					new eui.SetProperty("","width",1334),
					new eui.SetProperty("","height",750)
				])
			,
			new eui.State ("ver",
				[
					new eui.SetProperty("_Image1","right",24),
					new eui.SetProperty("_Image1","bottom",24),
					new eui.SetProperty("barbg","verticalCenter",0),
					new eui.SetProperty("lgroup","width",751),
					new eui.SetProperty("_Group1","scaleX",0.7),
					new eui.SetProperty("_Group1","scaleY",0.6),
					new eui.SetProperty("_Group1","verticalCenter",117.5),
					new eui.SetProperty("_Group1","horizontalCenter",0),
					new eui.SetProperty("","width",750),
					new eui.SetProperty("","height",1334)
				])
		];
	}
	var _proto = NomalLoadingUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x000000;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 14;
		t.right = 16;
		t.scaleX = 1.1;
		t.source = "loadingbg2_png";
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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image2_i(),this.lgroup_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "loading0_png";
		t.top = 0;
		return t;
	};
	_proto.lgroup_i = function () {
		var t = new eui.Group();
		this.lgroup = t;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 751;
		t.elementsContent = [this.barbg_i(),this.masks_i()];
		return t;
	};
	_proto.barbg_i = function () {
		var t = new eui.Image();
		this.barbg = t;
		t.scale9Grid = new egret.Rectangle(21,3,130,2);
		t.source = "loadingBar_png";
		return t;
	};
	_proto.masks_i = function () {
		var t = new eui.Image();
		this.masks = t;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(21,3,130,2);
		t.source = "loadingBar_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.left = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "loading3_png";
		t.verticalCenter = 0.5;
		return t;
	};
	return NomalLoadingUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/ReelItemSkin.exml'] = window.ReelItemSkin = (function (_super) {
	__extends(ReelItemSkin, _super);
	function ReelItemSkin() {
		_super.call(this);
		this.skinParts = ["icons","aIcon","vIcon"];
		
		this.height = 198;
		this.elementsContent = [this.icons_i(),this.aIcon_i(),this.vIcon_i()];
	}
	var _proto = ReelItemSkin.prototype;

	_proto.icons_i = function () {
		var t = new eui.Image();
		this.icons = t;
		t.horizontalCenter = 0;
		t.source = "M1_icon_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.aIcon_i = function () {
		var t = new eui.Image();
		this.aIcon = t;
		t.horizontalCenter = 0;
		t.source = "borders_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.vIcon_i = function () {
		var t = new eui.Image();
		this.vIcon = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 293;
		t.horizontalCenter = 0;
		t.source = "blur0_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return ReelItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/ReelSkin.exml'] = window.ReelSkin = (function (_super) {
	__extends(ReelSkin, _super);
	function ReelSkin() {
		_super.call(this);
		this.skinParts = ["kGroup"];
		
		this.height = 594;
		this.width = 209;
		this.elementsContent = [this.kGroup_i()];
	}
	var _proto = ReelSkin.prototype;

	_proto.kGroup_i = function () {
		var t = new eui.Group();
		this.kGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollEnabled = true;
		t.top = 0;
		t.elementsContent = [this._ReelItem1_i(),this._ReelItem2_i(),this._ReelItem3_i(),this._ReelItem4_i(),this._ReelItem5_i()];
		return t;
	};
	_proto._ReelItem1_i = function () {
		var t = new ReelItem();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelItemSkin";
		t.x = 10;
		t.y = -198;
		return t;
	};
	_proto._ReelItem2_i = function () {
		var t = new ReelItem();
		t.horizontalCenter = 0;
		t.skinName = "ReelItemSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._ReelItem3_i = function () {
		var t = new ReelItem();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelItemSkin";
		t.x = 0;
		t.y = 198;
		return t;
	};
	_proto._ReelItem4_i = function () {
		var t = new ReelItem();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelItemSkin";
		t.x = 0;
		t.y = 396;
		return t;
	};
	_proto._ReelItem5_i = function () {
		var t = new ReelItem();
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelItemSkin";
		t.x = 0;
		t.y = 594;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/AutoSetCompomentSkin.exml'] = window.AutoSetCompomentSkin = (function (_super) {
	__extends(AutoSetCompomentSkin, _super);
	var AutoSetCompomentSkin$Skin1 = 	(function (_super) {
		__extends(AutoSetCompomentSkin$Skin1, _super);
		function AutoSetCompomentSkin$Skin1() {
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
						new eui.SetProperty("_Image1","source","leftbar_velocity_close@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = AutoSetCompomentSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "leftbar_velocity_open@2x_png";
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
		return AutoSetCompomentSkin$Skin1;
	})(eui.Skin);

	function AutoSetCompomentSkin() {
		_super.call(this);
		this.skinParts = ["arrButton","countLabel","mySlider"];
		
		this.elementsContent = [this._Image1_i(),this.arrButton_i(),this.countLabel_i(),this.mySlider_i()];
		this.states = [
			new eui.State ("ver",
				[
					new eui.SetProperty("_Image1","source","auto_bg_png"),
					new eui.SetProperty("arrButton","visible",false),
					new eui.SetProperty("countLabel","fontFamily","Microsoft JhengHei"),
					new eui.SetProperty("countLabel","width",150),
					new eui.SetProperty("countLabel","horizontalCenter",0),
					new eui.SetProperty("countLabel","textAlign","center"),
					new eui.SetProperty("countLabel","verticalAlign","middle"),
					new eui.SetProperty("mySlider","horizontalCenter",0),
					new eui.SetProperty("","width",716),
					new eui.SetProperty("","height",236)
				])
			,
			new eui.State ("hor1",
				[
					new eui.SetProperty("_Image1","scaleX",-1),
					new eui.SetProperty("arrButton","right",38),
					new eui.SetProperty("arrButton","verticalCenter",0.5),
					new eui.SetProperty("countLabel","horizontalCenter",50),
					new eui.SetProperty("countLabel","width",200),
					new eui.SetProperty("countLabel","verticalAlign","middle"),
					new eui.SetProperty("countLabel","textAlign","center"),
					new eui.SetProperty("countLabel","fontFamily","Microsoft JhengHei"),
					new eui.SetProperty("countLabel","y",75),
					new eui.SetProperty("mySlider","horizontalCenter",50),
					new eui.SetProperty("mySlider","scaleX",-1),
					new eui.SetProperty("","width",810),
					new eui.SetProperty("","height",253)
				])
			,
			new eui.State ("hor0",
				[
					new eui.SetProperty("arrButton","left",36),
					new eui.SetProperty("arrButton","scaleX",-1),
					new eui.SetProperty("arrButton","verticalCenter",0.5),
					new eui.SetProperty("countLabel","horizontalCenter",-50),
					new eui.SetProperty("countLabel","width",200),
					new eui.SetProperty("countLabel","fontFamily","Microsoft JhengHei"),
					new eui.SetProperty("countLabel","verticalAlign","middle"),
					new eui.SetProperty("countLabel","textAlign","center"),
					new eui.SetProperty("countLabel","y",75),
					new eui.SetProperty("mySlider","horizontalCenter",-50),
					new eui.SetProperty("","width",810),
					new eui.SetProperty("","height",253)
				])
			,
			new eui.State ("ver0",
				[
					new eui.SetProperty("_Image1","source","auto_bg_png"),
					new eui.SetProperty("arrButton","visible",false),
					new eui.SetProperty("countLabel","horizontalCenter",0),
					new eui.SetProperty("countLabel","fontFamily","Microsoft JhengHei"),
					new eui.SetProperty("countLabel","width",200),
					new eui.SetProperty("countLabel","textAlign","center"),
					new eui.SetProperty("countLabel","verticalAlign","middle"),
					new eui.SetProperty("countLabel","y",56),
					new eui.SetProperty("mySlider","horizontalCenter",0),
					new eui.SetProperty("","width",770),
					new eui.SetProperty("","height",250)
				])
			,
			new eui.State ("ver1",
				[
					new eui.SetProperty("_Image1","source","auto_bg_png"),
					new eui.SetProperty("arrButton","visible",false),
					new eui.SetProperty("countLabel","horizontalCenter",0),
					new eui.SetProperty("countLabel","fontFamily","Microsoft JhengHei"),
					new eui.SetProperty("countLabel","width",200),
					new eui.SetProperty("countLabel","verticalAlign","middle"),
					new eui.SetProperty("countLabel","textAlign","center"),
					new eui.SetProperty("countLabel","y",56),
					new eui.SetProperty("mySlider","horizontalCenter",0),
					new eui.SetProperty("mySlider","scaleX",-1),
					new eui.SetProperty("","width",770),
					new eui.SetProperty("","height",250)
				])
		];
	}
	var _proto = AutoSetCompomentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "rigth_tanchu_png";
		t.top = 0;
		return t;
	};
	_proto.arrButton_i = function () {
		var t = new eui.ToggleButton();
		this.arrButton = t;
		t.label = "";
		t.verticalCenter = 0;
		t.x = 454;
		t.skinName = AutoSetCompomentSkin$Skin1;
		return t;
	};
	_proto.countLabel_i = function () {
		var t = new eui.Label();
		this.countLabel = t;
		t.size = 36;
		t.text = "99次旋转";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 200;
		return t;
	};
	_proto.mySlider_i = function () {
		var t = new MyHslider();
		this.mySlider = t;
		t.skinName = "skins.HSliderSkin";
		t.x = 86.16;
		t.y = 150;
		return t;
	};
	return AutoSetCompomentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/btn/CheckSkin.exml'] = window.CheckSkin = (function (_super) {
	__extends(CheckSkin, _super);
	function CheckSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","check_nomal_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","check_nomal_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","check_s_nomal_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","check_s_nomal_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","check_disable_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","check_s_disable_png")
				])
		];
	}
	var _proto = CheckSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "switch_quick_bg@2x_png";
		t.x = 1;
		t.y = 0;
		return t;
	};
	return CheckSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/BetSetCompomentSkin.exml'] = window.BetSetCompomentSkin = (function (_super) {
	__extends(BetSetCompomentSkin, _super);
	var BetSetCompomentSkin$Skin2 = 	(function (_super) {
		__extends(BetSetCompomentSkin$Skin2, _super);
		function BetSetCompomentSkin$Skin2() {
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
						new eui.SetProperty("_Image1","source","jia1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","add_disable_png")
					])
			];
		}
		var _proto = BetSetCompomentSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jia_png";
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
		return BetSetCompomentSkin$Skin2;
	})(eui.Skin);

	var BetSetCompomentSkin$Skin3 = 	(function (_super) {
		__extends(BetSetCompomentSkin$Skin3, _super);
		function BetSetCompomentSkin$Skin3() {
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
						new eui.SetProperty("_Image1","source","jian1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","sub_disable_png")
					])
			];
		}
		var _proto = BetSetCompomentSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jian_png";
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
		return BetSetCompomentSkin$Skin3;
	})(eui.Skin);

	var BetSetCompomentSkin$Skin4 = 	(function (_super) {
		__extends(BetSetCompomentSkin$Skin4, _super);
		function BetSetCompomentSkin$Skin4() {
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
						new eui.SetProperty("_Image1","source","jian1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","sub_disable_png")
					])
			];
		}
		var _proto = BetSetCompomentSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jian_png";
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
		return BetSetCompomentSkin$Skin4;
	})(eui.Skin);

	var BetSetCompomentSkin$Skin5 = 	(function (_super) {
		__extends(BetSetCompomentSkin$Skin5, _super);
		function BetSetCompomentSkin$Skin5() {
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
						new eui.SetProperty("_Image1","source","jia1_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","add_disable_png")
					])
			];
		}
		var _proto = BetSetCompomentSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "jia_png";
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
		return BetSetCompomentSkin$Skin5;
	})(eui.Skin);

	var BetSetCompomentSkin$Skin6 = 	(function (_super) {
		__extends(BetSetCompomentSkin$Skin6, _super);
		function BetSetCompomentSkin$Skin6() {
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
						new eui.SetProperty("_Image1","source","leftbar_velocity_open@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","leftbar_velocity_close@2x_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","leftbar_velocity_close@2x_png")
					])
			];
		}
		var _proto = BetSetCompomentSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "leftbar_velocity_open@2x_png";
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
		return BetSetCompomentSkin$Skin6;
	})(eui.Skin);

	function BetSetCompomentSkin() {
		_super.call(this);
		this.skinParts = ["adddImg0","addBtn0","subdImg0","sunBtn0","subdImg","sunBtn","adddImg","addBtn","lineLabel","betLabel","checkBtn","arrButton"];
		
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.lineLabel_i(),this.betLabel_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.checkBtn_i(),this.arrButton_i()];
		this.states = [
			new eui.State ("ver",
				[
					new eui.SetProperty("_Image1","source","btn_xianzhu_bg@2x_png"),
					new eui.SetProperty("_Image1","width",770),
					new eui.SetProperty("_Image1","height",233),
					new eui.SetProperty("addBtn0","horizontalCenter",0),
					new eui.SetProperty("addBtn0","y",0),
					new eui.SetProperty("_Group1","x",215.26),
					new eui.SetProperty("_Group1","verticalCenter",4.5),
					new eui.SetProperty("sunBtn0","horizontalCenter",0),
					new eui.SetProperty("sunBtn0","y",0),
					new eui.SetProperty("_Group2","x",104.79),
					new eui.SetProperty("_Group2","verticalCenter",4.5),
					new eui.SetProperty("sunBtn","x",103),
					new eui.SetProperty("sunBtn","verticalCenter",0),
					new eui.SetProperty("sunBtn","horizontalCenter",0),
					new eui.SetProperty("_Group3","horizontalCenter",71),
					new eui.SetProperty("_Group3","verticalCenter",4.5),
					new eui.SetProperty("addBtn","x",252),
					new eui.SetProperty("addBtn","verticalCenter",0),
					new eui.SetProperty("addBtn","horizontalCenter",0),
					new eui.SetProperty("_Group4","horizontalCenter",183),
					new eui.SetProperty("_Group4","verticalCenter",4.5),
					new eui.SetProperty("lineLabel","y",34),
					new eui.SetProperty("lineLabel","x",181.85),
					new eui.SetProperty("lineLabel","verticalAlign","middle"),
					new eui.SetProperty("lineLabel","textAlign","center"),
					new eui.SetProperty("lineLabel","text","25"),
					new eui.SetProperty("lineLabel","width",100),
					new eui.SetProperty("lineLabel","size",34),
					new eui.SetProperty("betLabel","y",34),
					new eui.SetProperty("betLabel","verticalAlign","middle"),
					new eui.SetProperty("betLabel","textAlign","center"),
					new eui.SetProperty("betLabel","anchorOffsetX",0),
					new eui.SetProperty("betLabel","width",236),
					new eui.SetProperty("betLabel","horizontalCenter",122),
					new eui.SetProperty("betLabel","size",34),
					new eui.SetProperty("_Label1","visible",false),
					new eui.SetProperty("_Label2","horizontalCenter",128),
					new eui.SetProperty("_Label2","size",24),
					new eui.SetProperty("_Label2","y",180),
					new eui.SetProperty("_Label3","y",180),
					new eui.SetProperty("_Label3","x",224.3),
					new eui.SetProperty("_Label3","size",24),
					new eui.SetProperty("checkBtn","visible",false),
					new eui.SetProperty("arrButton","visible",false),
					new eui.SetProperty("arrButton","y",106),
					new eui.SetProperty("","width",766),
					new eui.SetProperty("","height",233)
				])
			,
			new eui.State ("hor_1",
				[
					new eui.SetProperty("_Image1","scaleX",-1),
					new eui.SetProperty("_Image1","width",797),
					new eui.SetProperty("_Image1","height",253),
					new eui.SetProperty("_Group1","x",510.6),
					new eui.SetProperty("_Group1","scaleX",0.9),
					new eui.SetProperty("_Group1","scaleY",0.9),
					new eui.SetProperty("_Group1","verticalCenter",0),
					new eui.SetProperty("_Group2","x",407.6),
					new eui.SetProperty("_Group2","scaleX",0.9),
					new eui.SetProperty("_Group2","scaleY",0.9),
					new eui.SetProperty("_Group2","verticalCenter",0),
					new eui.SetProperty("_Group3","horizontalCenter",-208.5),
					new eui.SetProperty("_Group3","scaleX",0.9),
					new eui.SetProperty("_Group3","scaleY",0.9),
					new eui.SetProperty("_Group3","verticalCenter",0),
					new eui.SetProperty("_Group4","horizontalCenter",-86.5),
					new eui.SetProperty("_Group4","scaleX",0.9),
					new eui.SetProperty("_Group4","scaleY",0.9),
					new eui.SetProperty("_Group4","verticalCenter",0),
					new eui.SetProperty("lineLabel","x",475.78),
					new eui.SetProperty("lineLabel","y",50),
					new eui.SetProperty("lineLabel","text","25"),
					new eui.SetProperty("lineLabel","width",100),
					new eui.SetProperty("lineLabel","verticalAlign","middle"),
					new eui.SetProperty("lineLabel","textAlign","center"),
					new eui.SetProperty("betLabel","horizontalCenter",-147.5),
					new eui.SetProperty("betLabel","width",250),
					new eui.SetProperty("betLabel","verticalAlign","middle"),
					new eui.SetProperty("betLabel","textAlign","center"),
					new eui.SetProperty("betLabel","y",50),
					new eui.SetProperty("_Label1","right",67),
					new eui.SetProperty("_Label1","size",20),
					new eui.SetProperty("_Label1","y",180),
					new eui.SetProperty("_Label2","horizontalCenter",-147.5),
					new eui.SetProperty("_Label2","size",20),
					new eui.SetProperty("_Label2","y",180),
					new eui.SetProperty("_Label3","x",515.17),
					new eui.SetProperty("_Label3","y",180),
					new eui.SetProperty("checkBtn","right",41),
					new eui.SetProperty("checkBtn","verticalCenter",0),
					new eui.SetProperty("arrButton","y",106),
					new eui.SetProperty("arrButton","scaleX",-1),
					new eui.SetProperty("arrButton","left",23),
					new eui.SetProperty("arrButton","verticalCenter",5),
					new eui.SetProperty("","width",797),
					new eui.SetProperty("","height",253)
				])
			,
			new eui.State ("hor_0",
				[
					new eui.SetProperty("_Image1","width",797),
					new eui.SetProperty("_Image1","height",253),
					new eui.SetProperty("_Group1","scaleX",0.9),
					new eui.SetProperty("_Group1","scaleY",0.9),
					new eui.SetProperty("_Group1","x",281.91),
					new eui.SetProperty("_Group1","verticalCenter",0),
					new eui.SetProperty("_Group2","scaleX",0.9),
					new eui.SetProperty("_Group2","scaleY",0.9),
					new eui.SetProperty("_Group2","verticalCenter",0),
					new eui.SetProperty("_Group2","x",180.43),
					new eui.SetProperty("_Group3","horizontalCenter",105),
					new eui.SetProperty("_Group3","scaleX",0.9),
					new eui.SetProperty("_Group3","scaleY",0.9),
					new eui.SetProperty("_Group3","verticalCenter",0),
					new eui.SetProperty("_Group4","horizontalCenter",206.5),
					new eui.SetProperty("_Group4","scaleX",0.9),
					new eui.SetProperty("_Group4","scaleY",0.9),
					new eui.SetProperty("_Group4","verticalCenter",0),
					new eui.SetProperty("lineLabel","x",247.07),
					new eui.SetProperty("lineLabel","text","25"),
					new eui.SetProperty("lineLabel","width",100),
					new eui.SetProperty("lineLabel","verticalAlign","middle"),
					new eui.SetProperty("lineLabel","textAlign","center"),
					new eui.SetProperty("lineLabel","y",47),
					new eui.SetProperty("betLabel","horizontalCenter",150.5),
					new eui.SetProperty("betLabel","width",250),
					new eui.SetProperty("betLabel","verticalAlign","middle"),
					new eui.SetProperty("betLabel","textAlign","center"),
					new eui.SetProperty("betLabel","y",47),
					new eui.SetProperty("_Label1","left",60),
					new eui.SetProperty("_Label1","size",20),
					new eui.SetProperty("_Label1","y",180),
					new eui.SetProperty("_Label2","horizontalCenter",157.5),
					new eui.SetProperty("_Label2","size",20),
					new eui.SetProperty("_Label2","y",180),
					new eui.SetProperty("_Label3","y",180),
					new eui.SetProperty("_Label3","x",289.51),
					new eui.SetProperty("checkBtn","left",32),
					new eui.SetProperty("checkBtn","verticalCenter",0),
					new eui.SetProperty("arrButton","right",23),
					new eui.SetProperty("arrButton","verticalCenter",0),
					new eui.SetProperty("","width",797),
					new eui.SetProperty("","height",253)
				])
			,
			new eui.State ("ver_1",
				[
					new eui.SetProperty("_Image1","source","btn_xianzhu_bg@2x_png"),
					new eui.SetProperty("_Image1","width",770),
					new eui.SetProperty("_Image1","height",233),
					new eui.SetProperty("addBtn0","horizontalCenter",0),
					new eui.SetProperty("addBtn0","y",0),
					new eui.SetProperty("_Group1","x",498.26),
					new eui.SetProperty("_Group1","verticalCenter",4.5),
					new eui.SetProperty("sunBtn0","horizontalCenter",0),
					new eui.SetProperty("sunBtn0","y",0),
					new eui.SetProperty("_Group2","x",387.79),
					new eui.SetProperty("_Group2","verticalCenter",4.5),
					new eui.SetProperty("sunBtn","x",103),
					new eui.SetProperty("sunBtn","verticalCenter",0),
					new eui.SetProperty("sunBtn","horizontalCenter",0),
					new eui.SetProperty("_Group3","horizontalCenter",-214),
					new eui.SetProperty("_Group3","verticalCenter",4.5),
					new eui.SetProperty("addBtn","x",252),
					new eui.SetProperty("addBtn","verticalCenter",0),
					new eui.SetProperty("addBtn","horizontalCenter",0),
					new eui.SetProperty("_Group4","horizontalCenter",-102),
					new eui.SetProperty("_Group4","verticalCenter",4.5),
					new eui.SetProperty("lineLabel","y",34),
					new eui.SetProperty("lineLabel","x",466.85),
					new eui.SetProperty("lineLabel","verticalAlign","middle"),
					new eui.SetProperty("lineLabel","textAlign","center"),
					new eui.SetProperty("lineLabel","text","25"),
					new eui.SetProperty("lineLabel","width",100),
					new eui.SetProperty("lineLabel","size",34),
					new eui.SetProperty("betLabel","y",34),
					new eui.SetProperty("betLabel","verticalAlign","middle"),
					new eui.SetProperty("betLabel","textAlign","center"),
					new eui.SetProperty("betLabel","anchorOffsetX",0),
					new eui.SetProperty("betLabel","width",236),
					new eui.SetProperty("betLabel","horizontalCenter",-167),
					new eui.SetProperty("betLabel","size",34),
					new eui.SetProperty("_Label1","visible",false),
					new eui.SetProperty("_Label2","horizontalCenter",-154),
					new eui.SetProperty("_Label2","size",24),
					new eui.SetProperty("_Label2","y",180),
					new eui.SetProperty("_Label3","y",180),
					new eui.SetProperty("_Label3","x",506.3),
					new eui.SetProperty("_Label3","size",24),
					new eui.SetProperty("checkBtn","visible",false),
					new eui.SetProperty("arrButton","visible",false),
					new eui.SetProperty("arrButton","y",106),
					new eui.SetProperty("","width",766),
					new eui.SetProperty("","height",233)
				])
		];
	}
	var _proto = BetSetCompomentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "leftbar_velocity@2x_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.elementsContent = [this.adddImg0_i(),this.addBtn0_i()];
		return t;
	};
	_proto.adddImg0_i = function () {
		var t = new eui.Image();
		this.adddImg0 = t;
		t.horizontalCenter = 0;
		t.source = "add_disable_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.addBtn0_i = function () {
		var t = new eui.Button();
		this.addBtn0 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.skinName = BetSetCompomentSkin$Skin2;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.elementsContent = [this.subdImg0_i(),this.sunBtn0_i()];
		return t;
	};
	_proto.subdImg0_i = function () {
		var t = new eui.Image();
		this.subdImg0 = t;
		t.horizontalCenter = 0;
		t.source = "sub_disable_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.sunBtn0_i = function () {
		var t = new eui.Button();
		this.sunBtn0 = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.skinName = BetSetCompomentSkin$Skin3;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.elementsContent = [this.subdImg_i(),this.sunBtn_i()];
		return t;
	};
	_proto.subdImg_i = function () {
		var t = new eui.Image();
		this.subdImg = t;
		t.horizontalCenter = 0;
		t.source = "sub_disable_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.sunBtn_i = function () {
		var t = new eui.Button();
		this.sunBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.skinName = BetSetCompomentSkin$Skin4;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		this._Group4 = t;
		t.x = 286;
		t.elementsContent = [this.adddImg_i(),this.addBtn_i()];
		return t;
	};
	_proto.adddImg_i = function () {
		var t = new eui.Image();
		this.adddImg = t;
		t.horizontalCenter = 0;
		t.source = "add_disable_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.addBtn_i = function () {
		var t = new eui.Button();
		this.addBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.skinName = BetSetCompomentSkin$Skin5;
		return t;
	};
	_proto.lineLabel_i = function () {
		var t = new eui.Label();
		this.lineLabel = t;
		t.size = 32;
		t.text = "￥0.01";
		return t;
	};
	_proto.betLabel_i = function () {
		var t = new eui.Label();
		this.betLabel = t;
		t.size = 32;
		t.text = "￥0.01";
		t.x = 250.5;
		t.y = 52;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.size = 22;
		t.text = "快速";
		t.textColor = 0xddac37;
		t.x = 60;
		t.y = 195;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.size = 22;
		t.text = "线注";
		t.textColor = 0xDDAC37;
		t.y = 195;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.size = 22;
		t.text = "线";
		t.textColor = 0xDDAC37;
		return t;
	};
	_proto.checkBtn_i = function () {
		var t = new CheckButton();
		this.checkBtn = t;
		t.skinName = "CheckSkin";
		t.x = 31;
		t.y = 110;
		return t;
	};
	_proto.arrButton_i = function () {
		var t = new eui.ToggleButton();
		this.arrButton = t;
		t.label = "";
		t.x = 454;
		t.skinName = BetSetCompomentSkin$Skin6;
		return t;
	};
	return BetSetCompomentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/btn/AutoStartBtnSkin.exml'] = window.AutoStartBtnSkin = (function (_super) {
	__extends(AutoStartBtnSkin, _super);
	function AutoStartBtnSkin() {
		_super.call(this);
		this.skinParts = ["lightIcon","bg","stateIcon","countLabel"];
		
		this.height = 280;
		this.width = 280;
		this.elementsContent = [this.lightIcon_i(),this._Group1_i(),this.countLabel_i()];
	}
	var _proto = AutoStartBtnSkin.prototype;

	_proto.lightIcon_i = function () {
		var t = new eui.Image();
		this.lightIcon = t;
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.source = "rightbar_autoplay_selected_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.bg_i(),this.stateIcon_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "rightbar_autoplay_normal_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.stateIcon_i = function () {
		var t = new eui.Image();
		this.stateIcon = t;
		t.horizontalCenter = 0;
		t.source = "auto_play_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.countLabel_i = function () {
		var t = new eui.Label();
		this.countLabel = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	return AutoStartBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/btn/BonusBtnSkin.exml'] = window.BonusBtnSkin = (function (_super) {
	__extends(BonusBtnSkin, _super);
	function BonusBtnSkin() {
		_super.call(this);
		this.skinParts = ["lightIcon","bg","stateIcon","countLabel"];
		
		this.height = 280;
		this.width = 280;
		this.elementsContent = [this.lightIcon_i(),this._Group1_i(),this.countLabel_i()];
	}
	var _proto = BonusBtnSkin.prototype;

	_proto.lightIcon_i = function () {
		var t = new eui.Image();
		this.lightIcon = t;
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.source = "rightbar_autoplay_selected_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.bg_i(),this.stateIcon_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "btn_autogame_selected_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.stateIcon_i = function () {
		var t = new eui.Image();
		this.stateIcon = t;
		t.horizontalCenter = 0;
		t.source = "auto_play_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.countLabel_i = function () {
		var t = new eui.Label();
		this.countLabel = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	return BonusBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/btn/TogleButtonSkin.exml'] = window.TogleButtonSkin = (function (_super) {
	__extends(TogleButtonSkin, _super);
	function TogleButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.height = 26;
		this.width = 46;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","bg_set16_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","bg_set17_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","bg_set18_png")
				])
			,
			new eui.State ("rollOver",
				[
					new eui.SetProperty("_Image1","source","bg_set16_png")
				])
			,
			new eui.State ("rollOverAndSelected",
				[
					new eui.SetProperty("_Image1","source","bg_set18_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","bg_set19_png"),
					new eui.SetProperty("labelDisplay","textColor",0x666a70)
				])
		];
	}
	var _proto = TogleButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "bg_set15_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.size = 14;
		t.text = "";
		t.textColor = 0x94989e;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.x = 56;
		return t;
	};
	return TogleButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/btn/DesButtonSkin.exml'] = window.DesButtonSkin = (function (_super) {
	__extends(DesButtonSkin, _super);
	function DesButtonSkin() {
		_super.call(this);
		this.skinParts = ["btn","tLabel"];
		
		this.elementsContent = [this.btn_i(),this.tLabel_i()];
	}
	var _proto = DesButtonSkin.prototype;

	_proto.btn_i = function () {
		var t = new MosueCheckBox();
		this.btn = t;
		t.label = "";
		t.skinName = "TogleButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tLabel_i = function () {
		var t = new eui.Label();
		this.tLabel = t;
		t.bottom = 0;
		t.lineSpacing = 2;
		t.size = 10;
		t.text = "跳过介绍视频";
		t.textAlign = "left";
		t.textColor = 0x94989E;
		t.top = 0;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.x = 49;
		return t;
	};
	return DesButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/btn/FreeBtnSkin.exml'] = window.FreeBtnSkin = (function (_super) {
	__extends(FreeBtnSkin, _super);
	function FreeBtnSkin() {
		_super.call(this);
		this.skinParts = ["lightIcon","bg","stateIcon","countLabel"];
		
		this.height = 280;
		this.width = 280;
		this.elementsContent = [this.lightIcon_i(),this._Group1_i(),this.countLabel_i()];
	}
	var _proto = FreeBtnSkin.prototype;

	_proto.lightIcon_i = function () {
		var t = new eui.Image();
		this.lightIcon = t;
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.source = "rightbar_autoplay_selected_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.bg_i(),this.stateIcon_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "btn_autogame_selected_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.stateIcon_i = function () {
		var t = new eui.Image();
		this.stateIcon = t;
		t.horizontalCenter = 0;
		t.source = "btn_round_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.countLabel_i = function () {
		var t = new eui.Label();
		this.countLabel = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.text = "";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	return FreeBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/btn/MouseButton3Skin.exml'] = window.MouseButton3Skin = (function (_super) {
	__extends(MouseButton3Skin, _super);
	function MouseButton3Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
				])
			,
			new eui.State ("rollOver",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("labelDisplay","textColor",0x94989e)
				])
		];
	}
	var _proto = MouseButton3Skin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Helvetica";
		t.horizontalCenter = 0;
		t.size = 12;
		t.text = "333";
		t.textAlign = "center";
		t.textColor = 0x94989e;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 150;
		return t;
	};
	return MouseButton3Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/btn/MusicBtnSkin.exml'] = window.MusicBtnSkin = (function (_super) {
	__extends(MusicBtnSkin, _super);
	function MusicBtnSkin() {
		_super.call(this);
		this.skinParts = ["volueImg"];
		
		this.currentState = "up";
		this.elementsContent = [this._Image1_i(),this.volueImg_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","bg_setm_close_an__png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","bg_setm_close_an__png")
				])
			,
			new eui.State ("rollOver",
				[
					new eui.SetProperty("_Image1","source","bg_setm_close_liang_png")
				])
			,
			new eui.State ("upAndSelected",
				[
				])
			,
			new eui.State ("downAndSelected",
				[
				])
			,
			new eui.State ("rollOverAndSelected",
				[
					new eui.SetProperty("_Image1","source","bg_setm_open_liang_png")
				])
		];
	}
	var _proto = MusicBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.left = 0;
		t.source = "bg_setm_open_an_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.volueImg_i = function () {
		var t = new eui.Image();
		this.volueImg = t;
		t.left = 14;
		t.verticalCenter = 0;
		return t;
	};
	return MusicBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/btn/StartButtonSkin.exml'] = window.StartButtonSkin = (function (_super) {
	__extends(StartButtonSkin, _super);
	function StartButtonSkin() {
		_super.call(this);
		this.skinParts = ["bg","xuanImg"];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = StartButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bg_i(),this.xuanImg_i()];
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "btn_autogame_normal_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.xuanImg_i = function () {
		var t = new eui.Image();
		this.xuanImg = t;
		t.horizontalCenter = 0;
		t.source = "btn_round_png";
		t.verticalCenter = 0;
		return t;
	};
	return StartButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/GamePentSkin.exml'] = window.GamePentSkin = (function (_super) {
	__extends(GamePentSkin, _super);
	function GamePentSkin() {
		_super.call(this);
		this.skinParts = ["line_1","line_2","line_3","line_4","line_5","line_6","line_7","line_8","line_9","line_10","line_11","line_12","line_13","line_14","line_15","line_16","line_17","line_18","line_19","line_20","line_21","line_22","line_23","line_24","line_25","gGroup","lineGroup","kuangGroup","blueBg_4","lineBg_4","txt_4","g4","blueBg_2","lineBg_2","txt_2","g2","blueBg_24","lineBg_24","txt_24","g24","blueBg_20","lineBg_20","txt_20","g20","blueBg_16","lineBg_16","txt_16","g16","blueBg_10","lineBg_10","txt_10","g10","blueBg_1","lineBg_1","txt_1","g1","blueBg_11","lineBg_11","txt_11","g11","blueBg_17","lineBg_17","txt_17","g17","blueBg_13","lineBg_13","txt_13","g13","blueBg_21","lineBg_21","txt_21","g21","blueBg_5","lineBg_5","txt_5","g5","blueBg_3","lineBg_3","txt_3","g3","blueBg_14","lineBg_14","txt_14","g14","blueBg_18","lineBg_18","txt_18","g18","blueBg_12","lineBg_12","txt_12","g12","blueBg_9","lineBg_9","txt_9","g9","blueBg_22","lineBg_22","txt_22","g22","blueBg_6","lineBg_6","txt_6","g6","blueBg_7","lineBg_7","txt_7","g7","blueBg_23","lineBg_23","txt_23","g23","blueBg_8","lineBg_8","txt_8","g8","blueBg_19","lineBg_19","txt_19","g19","blueBg_25","lineBg_25","txt_25","g25","blueBg_15","lineBg_15","txt_15","g15","tipGroup","t00Group","t10Group","t20Group","t04Group","t14Group","t24Group","topGroup"];
		
		this.height = 650;
		this.width = 1300;
		this.elementsContent = [this._Image1_i(),this.lineGroup_i(),this.kuangGroup_i(),this.tipGroup_i(),this.topGroup_i()];
	}
	var _proto = GamePentSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.scaleX = 1.15;
		t.scaleY = 1.15;
		t.source = "OBJL_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.lineGroup_i = function () {
		var t = new eui.Group();
		this.lineGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.line_1_i(),this.line_2_i(),this.line_3_i(),this.line_4_i(),this.line_5_i(),this.line_6_i(),this.line_7_i(),this.line_8_i(),this.line_9_i(),this.line_10_i(),this.line_11_i(),this.line_12_i(),this.line_13_i(),this.line_14_i(),this.line_15_i(),this.line_16_i(),this.line_17_i(),this.line_18_i(),this.line_19_i(),this.line_20_i(),this.line_21_i(),this.line_22_i(),this.line_23_i(),this.line_24_i(),this.line_25_i(),this.gGroup_i()];
		return t;
	};
	_proto.line_1_i = function () {
		var t = new eui.Image();
		this.line_1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line01_png";
		t.x = 205.97;
		t.y = 324.41;
		return t;
	};
	_proto.line_2_i = function () {
		var t = new eui.Image();
		this.line_2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line02_png";
		t.x = 210.32;
		t.y = 120.28;
		return t;
	};
	_proto.line_3_i = function () {
		var t = new eui.Image();
		this.line_3 = t;
		t.source = "line03_png";
		t.x = 208.34;
		t.y = 519.48;
		return t;
	};
	_proto.line_4_i = function () {
		var t = new eui.Image();
		this.line_4 = t;
		t.source = "line04_png";
		t.x = 207.33;
		t.y = 119.01;
		return t;
	};
	_proto.line_5_i = function () {
		var t = new eui.Image();
		this.line_5 = t;
		t.source = "line05_png";
		t.x = 207.87;
		t.y = 119.33;
		return t;
	};
	_proto.line_6_i = function () {
		var t = new eui.Image();
		this.line_6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line06_png";
		t.x = 205.99;
		t.y = 117.86;
		return t;
	};
	_proto.line_7_i = function () {
		var t = new eui.Image();
		this.line_7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line07_png";
		t.x = 206.05;
		t.y = 325.83;
		return t;
	};
	_proto.line_8_i = function () {
		var t = new eui.Image();
		this.line_8 = t;
		t.source = "line08_png";
		t.x = 206.66;
		t.y = 118.75;
		return t;
	};
	_proto.line_9_i = function () {
		var t = new eui.Image();
		this.line_9 = t;
		t.source = "line09_png";
		t.x = 207.31;
		t.y = 119.34;
		return t;
	};
	_proto.line_10_i = function () {
		var t = new eui.Image();
		this.line_10 = t;
		t.source = "line10_png";
		t.x = 206.6;
		t.y = 117.86;
		return t;
	};
	_proto.line_11_i = function () {
		var t = new eui.Image();
		this.line_11 = t;
		t.source = "line11_png";
		t.x = 206;
		t.y = 118.8;
		return t;
	};
	_proto.line_12_i = function () {
		var t = new eui.Image();
		this.line_12 = t;
		t.source = "line12_png";
		t.x = 206.03;
		t.y = 118.29;
		return t;
	};
	_proto.line_13_i = function () {
		var t = new eui.Image();
		this.line_13 = t;
		t.source = "line13_png";
		t.x = 206.74;
		t.y = 325.85;
		return t;
	};
	_proto.line_14_i = function () {
		var t = new eui.Image();
		this.line_14 = t;
		t.source = "line14_png";
		t.x = 206.66;
		t.y = 118.71;
		return t;
	};
	_proto.line_15_i = function () {
		var t = new eui.Image();
		this.line_15 = t;
		t.source = "line15_png";
		t.x = 206.66;
		t.y = 325.49;
		return t;
	};
	_proto.line_16_i = function () {
		var t = new eui.Image();
		this.line_16 = t;
		t.source = "line16_png";
		t.x = 206.48;
		t.y = 117.68;
		return t;
	};
	_proto.line_17_i = function () {
		var t = new eui.Image();
		this.line_17 = t;
		t.source = "line17_png";
		t.x = 206;
		t.y = 324.66;
		return t;
	};
	_proto.line_18_i = function () {
		var t = new eui.Image();
		this.line_18 = t;
		t.source = "line18_png";
		t.x = 205.15;
		t.y = 118.26;
		return t;
	};
	_proto.line_19_i = function () {
		var t = new eui.Image();
		this.line_19 = t;
		t.source = "line19_png";
		t.x = 207.01;
		t.y = 118.75;
		return t;
	};
	_proto.line_20_i = function () {
		var t = new eui.Image();
		this.line_20 = t;
		t.source = "line20_png";
		t.x = 205.46;
		t.y = 117.7;
		return t;
	};
	_proto.line_21_i = function () {
		var t = new eui.Image();
		this.line_21 = t;
		t.source = "line21_png";
		t.x = 207.02;
		t.y = 118.19;
		return t;
	};
	_proto.line_22_i = function () {
		var t = new eui.Image();
		this.line_22 = t;
		t.source = "line22_png";
		t.x = 205;
		t.y = 116.42;
		return t;
	};
	_proto.line_23_i = function () {
		var t = new eui.Image();
		this.line_23 = t;
		t.horizontalCenter = -1.5;
		t.source = "line23_png";
		t.y = 116.5;
		return t;
	};
	_proto.line_24_i = function () {
		var t = new eui.Image();
		this.line_24 = t;
		t.horizontalCenter = -2;
		t.source = "line24_png";
		t.y = 117.23;
		return t;
	};
	_proto.line_25_i = function () {
		var t = new eui.Image();
		this.line_25 = t;
		t.source = "line25_png";
		t.x = 206;
		t.y = 118.76;
		return t;
	};
	_proto.gGroup_i = function () {
		var t = new eui.Group();
		this.gGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto.kuangGroup_i = function () {
		var t = new eui.Group();
		this.kuangGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 101.17;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.verticalCenter = 0;
		t.x = 0;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.x = 0;
		t.y = 400;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0.5;
		t.x = 318.49;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.x = 0;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.x = 0;
		t.y = 400;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 609;
		t.horizontalCenter = 0;
		t.width = 228;
		t.y = 21;
		t.elementsContent = [this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.y = 200;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.y = 400;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 609;
		t.verticalCenter = 0.5;
		t.width = 228;
		t.x = 753.81;
		t.elementsContent = [this._Image11_i(),this._Image12_i(),this._Image13_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.x = 0;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.x = 0;
		t.y = 400;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 609;
		t.verticalCenter = 0.5;
		t.width = 228;
		t.x = 971.41;
		t.elementsContent = [this._Image14_i(),this._Image15_i(),this._Image16_i()];
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.x = 0;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.x = 0;
		t.y = 200;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "box01_png";
		t.x = 0;
		t.y = 400;
		return t;
	};
	_proto.tipGroup_i = function () {
		var t = new eui.Group();
		this.tipGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -14;
		t.left = 0;
		t.right = 0;
		t.top = 14;
		t.elementsContent = [this.g4_i(),this.g2_i(),this.g24_i(),this.g20_i(),this.g16_i(),this.g10_i(),this.g1_i(),this.g11_i(),this.g17_i(),this.g13_i(),this.g21_i(),this.g5_i(),this.g3_i(),this.g14_i(),this.g18_i(),this.g12_i(),this.g9_i(),this.g22_i(),this.g6_i(),this.g7_i(),this.g23_i(),this.g8_i(),this.g19_i(),this.g25_i(),this.g15_i()];
		return t;
	};
	_proto.g4_i = function () {
		var t = new eui.Group();
		this.g4 = t;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.x = 24.65;
		t.y = 9.41;
		t.elementsContent = [this.blueBg_4_i(),this.lineBg_4_i(),this.txt_4_i()];
		return t;
	};
	_proto.blueBg_4_i = function () {
		var t = new eui.Image();
		this.blueBg_4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "blueBg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lineBg_4_i = function () {
		var t = new eui.Image();
		this.lineBg_4 = t;
		t.source = "over_04_png";
		t.visible = false;
		t.y = 0;
		return t;
	};
	_proto.txt_4_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_4 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "4";
		t.touchEnabled = false;
		t.x = 13.04;
		t.y = 10.5;
		return t;
	};
	_proto.g2_i = function () {
		var t = new eui.Group();
		this.g2 = t;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.x = 23.98;
		t.y = 54.97;
		t.elementsContent = [this.blueBg_2_i(),this.lineBg_2_i(),this.txt_2_i()];
		return t;
	};
	_proto.blueBg_2_i = function () {
		var t = new eui.Image();
		this.blueBg_2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "blueBg_png";
		return t;
	};
	_proto.lineBg_2_i = function () {
		var t = new eui.Image();
		this.lineBg_2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "over_02_png";
		t.visible = false;
		return t;
	};
	_proto.txt_2_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_2 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -3;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "2";
		t.touchEnabled = false;
		t.x = 13.04;
		t.y = 10.02;
		return t;
	};
	_proto.g24_i = function () {
		var t = new eui.Group();
		this.g24 = t;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.x = 23.94;
		t.y = 102;
		t.elementsContent = [this.blueBg_24_i(),this.lineBg_24_i(),this.txt_24_i()];
		return t;
	};
	_proto.blueBg_24_i = function () {
		var t = new eui.Image();
		this.blueBg_24 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "blueBg_png";
		return t;
	};
	_proto.lineBg_24_i = function () {
		var t = new eui.Image();
		this.lineBg_24 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "over_24_png";
		t.visible = false;
		return t;
	};
	_proto.txt_24_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_24 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "24";
		t.touchEnabled = false;
		t.x = 9.52;
		t.y = 9.87;
		return t;
	};
	_proto.g20_i = function () {
		var t = new eui.Group();
		this.g20 = t;
		t.height = 40;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.width = 54;
		t.x = 22.62;
		t.y = 145.64;
		t.elementsContent = [this.blueBg_20_i(),this.lineBg_20_i(),this.txt_20_i()];
		return t;
	};
	_proto.blueBg_20_i = function () {
		var t = new eui.Image();
		this.blueBg_20 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "blueBg_png";
		return t;
	};
	_proto.lineBg_20_i = function () {
		var t = new eui.Image();
		this.lineBg_20 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "over_20_png";
		t.visible = false;
		return t;
	};
	_proto.txt_20_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_20 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "20";
		t.touchEnabled = false;
		t.x = 9.56;
		t.y = 10.83;
		return t;
	};
	_proto.g16_i = function () {
		var t = new eui.Group();
		this.g16 = t;
		t.height = 40;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.width = 54;
		t.x = 23.99;
		t.y = 193.99;
		t.elementsContent = [this.blueBg_16_i(),this.lineBg_16_i(),this.txt_16_i()];
		return t;
	};
	_proto.blueBg_16_i = function () {
		var t = new eui.Image();
		this.blueBg_16 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "blueBg_png";
		return t;
	};
	_proto.lineBg_16_i = function () {
		var t = new eui.Image();
		this.lineBg_16 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "over_16_png";
		t.visible = false;
		return t;
	};
	_proto.txt_16_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_16 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -3;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "16";
		t.touchEnabled = false;
		t.x = 6.56;
		t.y = 10.83;
		return t;
	};
	_proto.g10_i = function () {
		var t = new eui.Group();
		this.g10 = t;
		t.height = 40;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.width = 54;
		t.x = 23.99;
		t.y = 241;
		t.elementsContent = [this.blueBg_10_i(),this.lineBg_10_i(),this.txt_10_i()];
		return t;
	};
	_proto.blueBg_10_i = function () {
		var t = new eui.Image();
		this.blueBg_10 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "blueBg_png";
		return t;
	};
	_proto.lineBg_10_i = function () {
		var t = new eui.Image();
		this.lineBg_10 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "over_10_png";
		t.visible = false;
		return t;
	};
	_proto.txt_10_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_10 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "10";
		t.touchEnabled = false;
		t.x = 7.89;
		t.y = 10.33;
		return t;
	};
	_proto.g1_i = function () {
		var t = new eui.Group();
		this.g1 = t;
		t.height = 40;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.width = 54;
		t.x = 23.97;
		t.y = 287.34;
		t.elementsContent = [this.blueBg_1_i(),this.lineBg_1_i(),this.txt_1_i()];
		return t;
	};
	_proto.blueBg_1_i = function () {
		var t = new eui.Image();
		this.blueBg_1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "blueBg_png";
		return t;
	};
	_proto.lineBg_1_i = function () {
		var t = new eui.Image();
		this.lineBg_1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "over_01_png";
		t.visible = false;
		return t;
	};
	_proto.txt_1_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_1 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "1";
		t.touchEnabled = false;
		t.x = 12.25;
		t.y = 10;
		return t;
	};
	_proto.g11_i = function () {
		var t = new eui.Group();
		this.g11 = t;
		t.height = 40;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.width = 54;
		t.x = 24.64;
		t.y = 333.64;
		t.elementsContent = [this.blueBg_11_i(),this.lineBg_11_i(),this.txt_11_i()];
		return t;
	};
	_proto.blueBg_11_i = function () {
		var t = new eui.Image();
		this.blueBg_11 = t;
		t.source = "blueBg_png";
		return t;
	};
	_proto.lineBg_11_i = function () {
		var t = new eui.Image();
		this.lineBg_11 = t;
		t.source = "over_11_png";
		t.visible = false;
		return t;
	};
	_proto.txt_11_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_11 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "11";
		t.touchEnabled = false;
		t.x = 8.75;
		t.y = 10;
		return t;
	};
	_proto.g17_i = function () {
		var t = new eui.Group();
		this.g17 = t;
		t.height = 40;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.width = 54;
		t.x = 24.66;
		t.y = 380.66;
		t.elementsContent = [this.blueBg_17_i(),this.lineBg_17_i(),this.txt_17_i()];
		return t;
	};
	_proto.blueBg_17_i = function () {
		var t = new eui.Image();
		this.blueBg_17 = t;
		t.source = "blueBg_png";
		return t;
	};
	_proto.lineBg_17_i = function () {
		var t = new eui.Image();
		this.lineBg_17 = t;
		t.source = "over_17_png";
		t.visible = false;
		return t;
	};
	_proto.txt_17_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_17 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "17";
		t.touchEnabled = false;
		t.x = 8.29;
		t.y = 10.25;
		return t;
	};
	_proto.g13_i = function () {
		var t = new eui.Group();
		this.g13 = t;
		t.height = 40;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.width = 54;
		t.x = 23.99;
		t.y = 426.31;
		t.elementsContent = [this.blueBg_13_i(),this.lineBg_13_i(),this.txt_13_i()];
		return t;
	};
	_proto.blueBg_13_i = function () {
		var t = new eui.Image();
		this.blueBg_13 = t;
		t.source = "blueBg_png";
		return t;
	};
	_proto.lineBg_13_i = function () {
		var t = new eui.Image();
		this.lineBg_13 = t;
		t.source = "over_13_png";
		t.visible = false;
		return t;
	};
	_proto.txt_13_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_13 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "13";
		t.touchEnabled = false;
		t.x = 7.58;
		t.y = 10.5;
		return t;
	};
	_proto.g21_i = function () {
		var t = new eui.Group();
		this.g21 = t;
		t.height = 40;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.width = 54;
		t.x = 24.66;
		t.y = 472.68;
		t.elementsContent = [this.blueBg_21_i(),this.lineBg_21_i(),this.txt_21_i()];
		return t;
	};
	_proto.blueBg_21_i = function () {
		var t = new eui.Image();
		this.blueBg_21 = t;
		t.source = "blueBg_png";
		return t;
	};
	_proto.lineBg_21_i = function () {
		var t = new eui.Image();
		this.lineBg_21 = t;
		t.source = "over_21_png";
		t.visible = false;
		return t;
	};
	_proto.txt_21_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_21 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "21";
		t.touchEnabled = false;
		t.x = 9.75;
		t.y = 10;
		return t;
	};
	_proto.g5_i = function () {
		var t = new eui.Group();
		this.g5 = t;
		t.height = 40;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.width = 54;
		t.x = 23.98;
		t.y = 519.62;
		t.elementsContent = [this.blueBg_5_i(),this.lineBg_5_i(),this.txt_5_i()];
		return t;
	};
	_proto.blueBg_5_i = function () {
		var t = new eui.Image();
		this.blueBg_5 = t;
		t.source = "blueBg_png";
		return t;
	};
	_proto.lineBg_5_i = function () {
		var t = new eui.Image();
		this.lineBg_5 = t;
		t.source = "over_05_png";
		t.visible = false;
		return t;
	};
	_proto.txt_5_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_5 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "5";
		t.touchEnabled = false;
		t.x = 13.25;
		t.y = 10.25;
		return t;
	};
	_proto.g3_i = function () {
		var t = new eui.Group();
		this.g3 = t;
		t.height = 40;
		t.scaleX = 1.4;
		t.scaleY = 1.4;
		t.width = 54;
		t.x = 24.66;
		t.y = 565.99;
		t.elementsContent = [this.blueBg_3_i(),this.lineBg_3_i(),this.txt_3_i()];
		return t;
	};
	_proto.blueBg_3_i = function () {
		var t = new eui.Image();
		this.blueBg_3 = t;
		t.source = "blueBg_png";
		return t;
	};
	_proto.lineBg_3_i = function () {
		var t = new eui.Image();
		this.lineBg_3 = t;
		t.source = "over_03_png";
		t.visible = false;
		return t;
	};
	_proto.txt_3_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_3 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "3";
		t.touchEnabled = false;
		t.x = 13;
		t.y = 10.5;
		return t;
	};
	_proto.g14_i = function () {
		var t = new eui.Group();
		this.g14 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 1223;
		t.y = 7.48;
		t.elementsContent = [this.blueBg_14_i(),this.lineBg_14_i(),this.txt_14_i()];
		return t;
	};
	_proto.blueBg_14_i = function () {
		var t = new eui.Image();
		this.blueBg_14 = t;
		t.source = "blueBg_png";
		t.x = -0.5;
		return t;
	};
	_proto.lineBg_14_i = function () {
		var t = new eui.Image();
		this.lineBg_14 = t;
		t.source = "over_14_png";
		t.visible = false;
		t.x = -15.5;
		return t;
	};
	_proto.txt_14_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_14 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -3;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "14";
		t.touchEnabled = false;
		t.x = 5.83;
		t.y = 10.61;
		return t;
	};
	_proto.g18_i = function () {
		var t = new eui.Group();
		this.g18 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 1224.32;
		t.y = 57;
		t.elementsContent = [this.blueBg_18_i(),this.lineBg_18_i(),this.txt_18_i()];
		return t;
	};
	_proto.blueBg_18_i = function () {
		var t = new eui.Image();
		this.blueBg_18 = t;
		t.source = "blueBg_png";
		t.x = -0.5;
		return t;
	};
	_proto.lineBg_18_i = function () {
		var t = new eui.Image();
		this.lineBg_18 = t;
		t.source = "over_18_png";
		t.visible = false;
		t.x = -15.5;
		return t;
	};
	_proto.txt_18_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_18 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "18";
		t.touchEnabled = false;
		t.x = 7.72;
		t.y = 10;
		return t;
	};
	_proto.g12_i = function () {
		var t = new eui.Group();
		this.g12 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 1224.33;
		t.y = 107.83;
		t.elementsContent = [this.blueBg_12_i(),this.lineBg_12_i(),this.txt_12_i()];
		return t;
	};
	_proto.blueBg_12_i = function () {
		var t = new eui.Image();
		this.blueBg_12 = t;
		t.source = "blueBg_png";
		t.x = -0.5;
		return t;
	};
	_proto.lineBg_12_i = function () {
		var t = new eui.Image();
		this.lineBg_12 = t;
		t.source = "over_12_png";
		t.visible = false;
		t.x = -15.5;
		return t;
	};
	_proto.txt_12_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_12 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "12";
		t.touchEnabled = false;
		t.x = 6.72;
		t.y = 10.5;
		return t;
	};
	_proto.g9_i = function () {
		var t = new eui.Group();
		this.g9 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 1224.81;
		t.y = 157.16;
		t.elementsContent = [this.blueBg_9_i(),this.lineBg_9_i(),this.txt_9_i()];
		return t;
	};
	_proto.blueBg_9_i = function () {
		var t = new eui.Image();
		this.blueBg_9 = t;
		t.source = "blueBg_png";
		t.x = -0.5;
		return t;
	};
	_proto.lineBg_9_i = function () {
		var t = new eui.Image();
		this.lineBg_9 = t;
		t.source = "over_09_png";
		t.visible = false;
		t.x = -15.5;
		return t;
	};
	_proto.txt_9_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_9 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "9";
		t.touchEnabled = false;
		t.x = 12.61;
		t.y = 10;
		return t;
	};
	_proto.g22_i = function () {
		var t = new eui.Group();
		this.g22 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 1224.33;
		t.y = 205.67;
		t.elementsContent = [this.blueBg_22_i(),this.lineBg_22_i(),this.txt_22_i()];
		return t;
	};
	_proto.blueBg_22_i = function () {
		var t = new eui.Image();
		this.blueBg_22 = t;
		t.source = "blueBg_png";
		t.x = -0.5;
		return t;
	};
	_proto.lineBg_22_i = function () {
		var t = new eui.Image();
		this.lineBg_22 = t;
		t.source = "over_22_png";
		t.visible = false;
		t.x = -15.5;
		return t;
	};
	_proto.txt_22_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_22 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "22";
		t.touchEnabled = false;
		t.x = 8.27;
		t.y = 10.11;
		return t;
	};
	_proto.g6_i = function () {
		var t = new eui.Group();
		this.g6 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 1224.32;
		t.y = 255.15;
		t.elementsContent = [this.blueBg_6_i(),this.lineBg_6_i(),this.txt_6_i()];
		return t;
	};
	_proto.blueBg_6_i = function () {
		var t = new eui.Image();
		this.blueBg_6 = t;
		t.source = "blueBg_png";
		t.x = -0.5;
		return t;
	};
	_proto.lineBg_6_i = function () {
		var t = new eui.Image();
		this.lineBg_6 = t;
		t.source = "over_06_png";
		t.visible = false;
		t.x = -15.5;
		return t;
	};
	_proto.txt_6_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_6 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "6";
		t.touchEnabled = false;
		t.x = 12.11;
		t.y = 11;
		return t;
	};
	_proto.g7_i = function () {
		var t = new eui.Group();
		this.g7 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 1224.31;
		t.y = 305.49;
		t.elementsContent = [this.blueBg_7_i(),this.lineBg_7_i(),this.txt_7_i()];
		return t;
	};
	_proto.blueBg_7_i = function () {
		var t = new eui.Image();
		this.blueBg_7 = t;
		t.source = "blueBg_png";
		t.x = -0.5;
		t.y = 0;
		return t;
	};
	_proto.lineBg_7_i = function () {
		var t = new eui.Image();
		this.lineBg_7 = t;
		t.source = "over_07_png";
		t.visible = false;
		t.x = -15.5;
		t.y = 0;
		return t;
	};
	_proto.txt_7_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_7 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "7";
		t.touchEnabled = false;
		t.x = 12.61;
		t.y = 10.5;
		return t;
	};
	_proto.g23_i = function () {
		var t = new eui.Group();
		this.g23 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 1222.99;
		t.y = 355.84;
		t.elementsContent = [this.blueBg_23_i(),this.lineBg_23_i(),this.txt_23_i()];
		return t;
	};
	_proto.blueBg_23_i = function () {
		var t = new eui.Image();
		this.blueBg_23 = t;
		t.source = "blueBg_png";
		t.x = -0.5;
		return t;
	};
	_proto.lineBg_23_i = function () {
		var t = new eui.Image();
		this.lineBg_23 = t;
		t.source = "over_23_png";
		t.visible = false;
		t.x = -15.5;
		return t;
	};
	_proto.txt_23_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_23 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "23";
		t.touchEnabled = false;
		t.x = 9.11;
		t.y = 10.5;
		return t;
	};
	_proto.g8_i = function () {
		var t = new eui.Group();
		this.g8 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 1224.31;
		t.y = 405.33;
		t.elementsContent = [this.blueBg_8_i(),this.lineBg_8_i(),this.txt_8_i()];
		return t;
	};
	_proto.blueBg_8_i = function () {
		var t = new eui.Image();
		this.blueBg_8 = t;
		t.source = "blueBg_png";
		t.x = -0.5;
		t.y = 0;
		return t;
	};
	_proto.lineBg_8_i = function () {
		var t = new eui.Image();
		this.lineBg_8 = t;
		t.source = "over_08_png";
		t.visible = false;
		t.x = -15.5;
		return t;
	};
	_proto.txt_8_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_8 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "8";
		t.touchEnabled = false;
		t.x = 12.5;
		t.y = 10;
		return t;
	};
	_proto.g19_i = function () {
		var t = new eui.Group();
		this.g19 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 1224.31;
		t.y = 455.17;
		t.elementsContent = [this.blueBg_19_i(),this.lineBg_19_i(),this.txt_19_i()];
		return t;
	};
	_proto.blueBg_19_i = function () {
		var t = new eui.Image();
		this.blueBg_19 = t;
		t.source = "blueBg_png";
		t.x = -0.5;
		return t;
	};
	_proto.lineBg_19_i = function () {
		var t = new eui.Image();
		this.lineBg_19 = t;
		t.source = "over_19_png";
		t.visible = false;
		t.x = -15.5;
		return t;
	};
	_proto.txt_19_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_19 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "19";
		t.touchEnabled = false;
		t.x = 7.72;
		t.y = 10;
		return t;
	};
	_proto.g25_i = function () {
		var t = new eui.Group();
		this.g25 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 1224.81;
		t.y = 503.33;
		t.elementsContent = [this.blueBg_25_i(),this.lineBg_25_i(),this.txt_25_i()];
		return t;
	};
	_proto.blueBg_25_i = function () {
		var t = new eui.Image();
		this.blueBg_25 = t;
		t.source = "blueBg_png";
		t.x = -0.5;
		return t;
	};
	_proto.lineBg_25_i = function () {
		var t = new eui.Image();
		this.lineBg_25 = t;
		t.source = "over_25_png";
		t.visible = false;
		t.x = -15.5;
		return t;
	};
	_proto.txt_25_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_25 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "25";
		t.touchEnabled = false;
		t.x = 8.61;
		t.y = 10;
		return t;
	};
	_proto.g15_i = function () {
		var t = new eui.Group();
		this.g15 = t;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.x = 1223.5;
		t.y = 553.68;
		t.elementsContent = [this.blueBg_15_i(),this.lineBg_15_i(),this.txt_15_i()];
		return t;
	};
	_proto.blueBg_15_i = function () {
		var t = new eui.Image();
		this.blueBg_15 = t;
		t.source = "blueBg_png";
		t.x = -0.5;
		return t;
	};
	_proto.lineBg_15_i = function () {
		var t = new eui.Image();
		this.lineBg_15 = t;
		t.source = "over_15_png";
		t.visible = false;
		t.x = -15.5;
		return t;
	};
	_proto.txt_15_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_15 = t;
		t.font = "scence_f0_fnt";
		t.letterSpacing = -5;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "15";
		t.touchEnabled = false;
		t.x = 7.22;
		t.y = 10;
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.t00Group_i(),this.t10Group_i(),this.t20Group_i(),this.t04Group_i(),this.t14Group_i(),this.t24Group_i()];
		return t;
	};
	_proto.t00Group_i = function () {
		var t = new eui.Group();
		this.t00Group = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 134;
		t.y = 204;
		t.elementsContent = [this._Image17_i(),this._Label1_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_bg01@2x_png";
		t.x = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "￥0.15";
		t.verticalCenter = 2;
		return t;
	};
	_proto.t10Group_i = function () {
		var t = new eui.Group();
		this.t10Group = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 134;
		t.y = 404.14;
		t.elementsContent = [this._Image18_i(),this._Label2_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_bg01@2x_png";
		t.x = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "￥0.15";
		t.verticalCenter = 2;
		return t;
	};
	_proto.t20Group_i = function () {
		var t = new eui.Group();
		this.t20Group = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 134;
		t.y = 602.32;
		t.elementsContent = [this._Image19_i(),this._Label3_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_bg01@2x_png";
		t.x = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "￥0.15";
		t.verticalCenter = 2;
		return t;
	};
	_proto.t04Group_i = function () {
		var t = new eui.Group();
		this.t04Group = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1005;
		t.y = 204;
		t.elementsContent = [this._Image20_i(),this._Label4_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_bg01@2x_png";
		t.x = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "￥0.15";
		t.verticalCenter = 2;
		return t;
	};
	_proto.t14Group_i = function () {
		var t = new eui.Group();
		this.t14Group = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1005;
		t.y = 404.67;
		t.elementsContent = [this._Image21_i(),this._Label5_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_bg01@2x_png";
		t.x = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "￥0.15";
		t.verticalCenter = 2;
		return t;
	};
	_proto.t24Group_i = function () {
		var t = new eui.Group();
		this.t24Group = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 1005;
		t.y = 602;
		t.elementsContent = [this._Image22_i(),this._Label6_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "win_bg01@2x_png";
		t.x = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "￥0.15";
		t.verticalCenter = 2;
		return t;
	};
	return GamePentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/GameScenceSkin.exml'] = window.GameScenceSkin = (function (_super) {
	__extends(GameScenceSkin, _super);
	function GameScenceSkin() {
		_super.call(this);
		this.skinParts = ["freeBg","reel0","reel1","reel2","reel3","reel4","pent","lightBg"];
		
		this.height = 650;
		this.width = 1300;
		this.elementsContent = [this._Image1_i(),this.freeBg_i(),this._Group1_i(),this.pent_i(),this.lightBg_i(),this._Image2_i()];
	}
	var _proto = GameScenceSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -1.5;
		t.source = "reel2_png";
		t.verticalCenter = 1;
		return t;
	};
	_proto.freeBg_i = function () {
		var t = new eui.Image();
		this.freeBg = t;
		t.horizontalCenter = 0;
		t.source = "free_games_glow_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.reel0_i(),this.reel1_i(),this.reel2_i(),this.reel3_i(),this.reel4_i()];
		return t;
	};
	_proto.reel0_i = function () {
		var t = new Reel();
		this.reel0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "ReelSkin";
		t.x = 1.52;
		t.y = 0;
		return t;
	};
	_proto.reel1_i = function () {
		var t = new Reel();
		this.reel1 = t;
		t.skinName = "ReelSkin";
		t.x = 221.05;
		return t;
	};
	_proto.reel2_i = function () {
		var t = new Reel();
		this.reel2 = t;
		t.skinName = "ReelSkin";
		t.x = 438.42;
		return t;
	};
	_proto.reel3_i = function () {
		var t = new Reel();
		this.reel3 = t;
		t.skinName = "ReelSkin";
		t.x = 656.46;
		return t;
	};
	_proto.reel4_i = function () {
		var t = new Reel();
		this.reel4 = t;
		t.skinName = "ReelSkin";
		t.x = 875.02;
		return t;
	};
	_proto.pent_i = function () {
		var t = new GamePentCompoment();
		this.pent = t;
		t.skinName = "GamePentSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lightBg_i = function () {
		var t = new eui.Rect();
		this.lightBg = t;
		t.alpha = 0.01;
		t.height = 602;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1081;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.scaleX = 1.15;
		t.scaleY = 1.15;
		t.source = "OBJL_png";
		t.verticalCenter = 15;
		t.visible = false;
		return t;
	};
	return GameScenceSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/ItemSkin.exml'] = window.ItemSkin = (function (_super) {
	__extends(ItemSkin, _super);
	function ItemSkin() {
		_super.call(this);
		this.skinParts = ["mcGroup"];
		
		this.height = 154;
		this.width = 154;
		this.elementsContent = [this.mcGroup_i()];
	}
	var _proto = ItemSkin.prototype;

	_proto.mcGroup_i = function () {
		var t = new eui.Group();
		this.mcGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return ItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/SetUISkin.exml'] = window.SetUISkin = (function (_super) {
	__extends(SetUISkin, _super);
	var SetUISkin$Skin7 = 	(function (_super) {
		__extends(SetUISkin$Skin7, _super);
		function SetUISkin$Skin7() {
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
						new eui.SetProperty("_Image1","source","top_list_menu_pressed@2x_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","top_list_menu_selected@2x_png")
					])
			];
		}
		var _proto = SetUISkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "top_list_menu_normal@2x_png";
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
		return SetUISkin$Skin7;
	})(eui.Skin);

	var SetUISkin$Skin8 = 	(function (_super) {
		__extends(SetUISkin$Skin8, _super);
		function SetUISkin$Skin8() {
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
						new eui.SetProperty("_Image1","source","top_list_more_pressed@2x_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","top_list_more_selected@2x_png")
					])
			];
		}
		var _proto = SetUISkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "top_list_more_normal@2x_png";
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
		return SetUISkin$Skin8;
	})(eui.Skin);

	var SetUISkin$Skin9 = 	(function (_super) {
		__extends(SetUISkin$Skin9, _super);
		function SetUISkin$Skin9() {
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
						new eui.SetProperty("_Image1","source","btn_upper_selected@2x_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","btn_upper_disabled @2x_png")
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","btn_upper_selected@2x_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","btn_upper_selected@2x_png")
					])
			];
		}
		var _proto = SetUISkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_upper_normal@2x_png";
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
		return SetUISkin$Skin9;
	})(eui.Skin);

	var SetUISkin$Skin10 = 	(function (_super) {
		__extends(SetUISkin$Skin10, _super);
		function SetUISkin$Skin10() {
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
						new eui.SetProperty("_Image1","source","top_menu_icon_hone_selected@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetUISkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "top_menu_icon_hone_normal@2x_png";
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
		return SetUISkin$Skin10;
	})(eui.Skin);

	var SetUISkin$Skin11 = 	(function (_super) {
		__extends(SetUISkin$Skin11, _super);
		function SetUISkin$Skin11() {
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
						new eui.SetProperty("_Image1","source","top_menu_icon_save_selected@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetUISkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "top_menu_icon_save_normal@2x_png";
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
		return SetUISkin$Skin11;
	})(eui.Skin);

	var SetUISkin$Skin12 = 	(function (_super) {
		__extends(SetUISkin$Skin12, _super);
		function SetUISkin$Skin12() {
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
						new eui.SetProperty("_Image1","source","top_menu_icon_more_selected@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetUISkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "top_menu_icon_more_normal@2x_png";
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
		return SetUISkin$Skin12;
	})(eui.Skin);

	var SetUISkin$Skin13 = 	(function (_super) {
		__extends(SetUISkin$Skin13, _super);
		function SetUISkin$Skin13() {
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
						new eui.SetProperty("_Image1","source","top_menu_icon_money_selected@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetUISkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "top_menu_icon_money_normal@2x_png";
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
		return SetUISkin$Skin13;
	})(eui.Skin);

	var SetUISkin$Skin14 = 	(function (_super) {
		__extends(SetUISkin$Skin14, _super);
		function SetUISkin$Skin14() {
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
						new eui.SetProperty("_Image1","source","top_menu_icon_support_selected@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetUISkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "top_menu_icon_support_normal@2x_png";
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
		return SetUISkin$Skin14;
	})(eui.Skin);

	var SetUISkin$Skin15 = 	(function (_super) {
		__extends(SetUISkin$Skin15, _super);
		function SetUISkin$Skin15() {
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
						new eui.SetProperty("_Image1","source","top_menu_icon_bonus_selected@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetUISkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "top_menu_icon_bonus_normal@2x_png";
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
		return SetUISkin$Skin15;
	})(eui.Skin);

	var SetUISkin$Skin16 = 	(function (_super) {
		__extends(SetUISkin$Skin16, _super);
		function SetUISkin$Skin16() {
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
						new eui.SetProperty("_Image1","source","top_menu_icon_help_selected@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetUISkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "top_menu_icon_help_normal@2x_png";
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
		return SetUISkin$Skin16;
	})(eui.Skin);

	var SetUISkin$Skin17 = 	(function (_super) {
		__extends(SetUISkin$Skin17, _super);
		function SetUISkin$Skin17() {
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
						new eui.SetProperty("_Image1","source","top_menu_icon_voiceclose_selected@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","top_menu_icon_voiceopen_normal@2x_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","top_menu_icon_voiceopen_selected@2x_png")
					])
			];
		}
		var _proto = SetUISkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "top_menu_icon_voiceclose_normal@2x_png";
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
		return SetUISkin$Skin17;
	})(eui.Skin);

	var SetUISkin$Skin18 = 	(function (_super) {
		__extends(SetUISkin$Skin18, _super);
		function SetUISkin$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
						new eui.SetProperty("_Image1","source","lefthand_normal@2x_png")
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","lefthand_selected@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("upAndSelected",
					[
						new eui.SetProperty("_Image1","source","righthand_normal@2x_png")
					])
				,
				new eui.State ("downAndSelected",
					[
						new eui.SetProperty("_Image1","source","righthand_selected@2x_png")
					])
			];
		}
		var _proto = SetUISkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "top_menu_icon_voiceclose_normal@2x_png";
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
		return SetUISkin$Skin18;
	})(eui.Skin);

	var SetUISkin$Skin19 = 	(function (_super) {
		__extends(SetUISkin$Skin19, _super);
		function SetUISkin$Skin19() {
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
						new eui.SetProperty("_Image1","source","back_selected@2x(1)_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetUISkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_selected@2x_png";
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
		return SetUISkin$Skin19;
	})(eui.Skin);

	var SetUISkin$Skin20 = 	(function (_super) {
		__extends(SetUISkin$Skin20, _super);
		function SetUISkin$Skin20() {
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
						new eui.SetProperty("_Image1","source","icon_moreganme_selected_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetUISkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "icon_moreganme_normal_png";
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
		return SetUISkin$Skin20;
	})(eui.Skin);

	var SetUISkin$Skin21 = 	(function (_super) {
		__extends(SetUISkin$Skin21, _super);
		function SetUISkin$Skin21() {
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
						new eui.SetProperty("_Image1","source","icon_moreganme_selected@2x_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = SetUISkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "icon_back_normal@2x_png";
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
		return SetUISkin$Skin21;
	})(eui.Skin);

	function SetUISkin() {
		_super.call(this);
		this.skinParts = ["bottomBg","t0","balanceLabel","t1","lineLabel","t4","rewardLabel","rewardGroup","t5","rewardLabel0","freeGroup","tipLabel","t2","betLabel","t3","totalBet","bottomGroup","betSetCompoment","autoSetCompoment","startButton","autoButton","bonusBtn","FreeBtn","controllGroup","mcGroup","rewardMaxLabel","rewradMaxGroup","setBtn","moreBtn","betBtn","qukcheckBtn","qukGroup","maskRect","timeLabel","btnBg","homeBtn","crashBtn","moresBtn","historyBtn","surpotBtn","rewardBtn","helpBtn","musicCheck","modleCheckButton","exitBtn","btnGroup","scrolls","topGroup","gameButton","backButton","rightGroup","lightBG"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.bottomGroup_i(),this.betSetCompoment_i(),this.autoSetCompoment_i(),this.controllGroup_i(),this.mcGroup_i(),this._Group5_i(),this.setBtn_i(),this.moreBtn_i(),this.betBtn_i(),this.qukGroup_i(),this.maskRect_i(),this._Group6_i(),this._Group17_i(),this._Group18_i(),this.lightBG_i()];
		this._HorizontalLayout1_i();
		
		this._HorizontalLayout2_i();
		
		this.states = [
			new eui.State ("hor",
				[
					new eui.SetProperty("bottomBg","top",0),
					new eui.SetProperty("bottomBg","source","bottom_2_png"),
					new eui.SetProperty("t0","textColor",0x0ed9f7),
					new eui.SetProperty("_Group1","y",21.06),
					new eui.SetProperty("_Group1","left",120),
					new eui.SetProperty("_Group1","verticalCenter",0),
					new eui.SetProperty("t1","textColor",0x0ed9f7),
					new eui.SetProperty("_Group2","left",343),
					new eui.SetProperty("_Group2","verticalCenter",0),
					new eui.SetProperty("t4","size",27),
					new eui.SetProperty("rewardLabel","y",24.2),
					new eui.SetProperty("rewardLabel","size",44),
					new eui.SetProperty("rewardLabel","horizontalCenter",0.5),
					new eui.SetProperty("rewardGroup","horizontalCenter",0),
					new eui.SetProperty("rewardGroup","verticalCenter",2.5),
					new eui.SetProperty("rewardGroup","visible",false),
					new eui.SetProperty("t5","text","您赢得了奖励！"),
					new eui.SetProperty("t5","textColor",0xffffff),
					new eui.SetProperty("t5","horizontalCenter",0.5),
					new eui.SetProperty("t5","y",21.44),
					new eui.SetProperty("rewardLabel0","textColor",0xffffff),
					new eui.SetProperty("rewardLabel0","size",27),
					new eui.SetProperty("rewardLabel0","text","启动请按"),
					new eui.SetProperty("rewardLabel0","horizontalCenter",-26),
					new eui.SetProperty("rewardLabel0","y",50.2),
					new eui.SetProperty("_Image1","x",114.34),
					new eui.SetProperty("_Image2","x",100.34),
					new eui.SetProperty("freeGroup","width",186),
					new eui.SetProperty("freeGroup","horizontalCenter",0),
					new eui.SetProperty("freeGroup","visible",false),
					new eui.SetProperty("tipLabel","verticalCenter",0),
					new eui.SetProperty("tipLabel","fontFamily","Microsoft JhengHei"),
					new eui.SetProperty("t2","textColor",0x0ed9f7),
					new eui.SetProperty("_Group3","right",343),
					new eui.SetProperty("_Group3","verticalCenter",0),
					new eui.SetProperty("t3","textColor",0x0ed9f7),
					new eui.SetProperty("_Group4","right",120),
					new eui.SetProperty("_Group4","verticalCenter",0),
					new eui.SetProperty("bottomGroup","left",0),
					new eui.SetProperty("bottomGroup","right",0),
					new eui.SetProperty("bottomGroup","height",82),
					new eui.SetProperty("bottomGroup","y",668),
					new eui.SetProperty("betSetCompoment","x",-616),
					new eui.SetProperty("betSetCompoment","verticalCenter",0.5),
					new eui.SetProperty("betSetCompoment","skinName","BetSetCompomentSkin"),
					new eui.SetProperty("autoSetCompoment","x",1338),
					new eui.SetProperty("autoSetCompoment","y",257),
					new eui.SetProperty("startButton","scaleX",1),
					new eui.SetProperty("startButton","scaleY",1),
					new eui.SetProperty("startButton","horizontalCenter",0),
					new eui.SetProperty("startButton","verticalCenter",0),
					new eui.SetProperty("autoButton","scaleX",1),
					new eui.SetProperty("autoButton","scaleY",1),
					new eui.SetProperty("autoButton","horizontalCenter",0),
					new eui.SetProperty("autoButton","verticalCenter",0),
					new eui.SetProperty("autoButton","skinName","AutoStartBtnSkin"),
					new eui.SetProperty("autoButton","visible",false),
					new eui.SetProperty("bonusBtn","visible",false),
					new eui.SetProperty("FreeBtn","visible",false),
					new eui.SetProperty("controllGroup","verticalCenter",-5),
					new eui.SetProperty("_Image3","scaleX",0.65),
					new eui.SetProperty("_Image3","scaleY",0.65),
					new eui.SetProperty("_Label1","horizontalCenter",0.5),
					new eui.SetProperty("_Label1","top",32),
					new eui.SetProperty("rewardMaxLabel","horizontalCenter",1),
					new eui.SetProperty("rewardMaxLabel","y",57.47),
					new eui.SetProperty("rewardMaxLabel","scaleX",1.1),
					new eui.SetProperty("rewardMaxLabel","scaleY",1.1),
					new eui.SetProperty("rewradMaxGroup","y",173.27),
					new eui.SetProperty("rewradMaxGroup","horizontalCenter",0.5),
					new eui.SetProperty("rewradMaxGroup","anchorOffsetX",218),
					new eui.SetProperty("rewradMaxGroup","anchorOffsetY",79.5),
					new eui.SetProperty("_Group5","height",82),
					new eui.SetProperty("_Group5","bottom",0),
					new eui.SetProperty("setBtn","left",0),
					new eui.SetProperty("setBtn","top",32),
					new eui.SetProperty("moreBtn","right",0),
					new eui.SetProperty("moreBtn","top",32),
					new eui.SetProperty("maskRect","alpha",0.5),
					new eui.SetProperty("maskRect","visible",false),
					new eui.SetProperty("_Rect1","top",-5),
					new eui.SetProperty("timeLabel","fontFamily","Arial"),
					new eui.SetProperty("timeLabel","text",""),
					new eui.SetProperty("_Group6","horizontalCenter",0),
					new eui.SetProperty("_Group6","top",10),
					new eui.SetProperty("btnBg","top",-50),
					new eui.SetProperty("homeBtn","horizontalCenter",0),
					new eui.SetProperty("_Label3","width",70),
					new eui.SetProperty("_Label3","verticalAlign","middle"),
					new eui.SetProperty("_Label3","textAlign","center"),
					new eui.SetProperty("_Label3","horizontalCenter",0),
					new eui.SetProperty("_Group7","x",30),
					new eui.SetProperty("_Group7","y",27),
					new eui.SetProperty("crashBtn","horizontalCenter",0),
					new eui.SetProperty("_Label4","width",70),
					new eui.SetProperty("_Label4","verticalAlign","middle"),
					new eui.SetProperty("_Label4","textAlign","center"),
					new eui.SetProperty("_Label4","horizontalCenter",0),
					new eui.SetProperty("_Group8","x",180.43),
					new eui.SetProperty("_Group8","y",28),
					new eui.SetProperty("historyBtn","horizontalCenter",0),
					new eui.SetProperty("_Label6","width",70),
					new eui.SetProperty("_Label6","textAlign","center"),
					new eui.SetProperty("_Label6","verticalAlign","middle"),
					new eui.SetProperty("_Label6","horizontalCenter",0),
					new eui.SetProperty("_Group10","x",330.63),
					new eui.SetProperty("_Group10","y",28),
					new eui.SetProperty("surpotBtn","horizontalCenter",8),
					new eui.SetProperty("_Label7","width",70),
					new eui.SetProperty("_Label7","verticalAlign","middle"),
					new eui.SetProperty("_Label7","textAlign","center"),
					new eui.SetProperty("_Label7","horizontalCenter",0),
					new eui.SetProperty("_Group11","x",481.26),
					new eui.SetProperty("_Group11","y",28),
					new eui.SetProperty("rewardBtn","horizontalCenter",0),
					new eui.SetProperty("_Label8","width",70),
					new eui.SetProperty("_Label8","textAlign","center"),
					new eui.SetProperty("_Label8","verticalAlign","middle"),
					new eui.SetProperty("_Label8","horizontalCenter",0),
					new eui.SetProperty("_Group12","x",631.88),
					new eui.SetProperty("_Group12","y",28),
					new eui.SetProperty("helpBtn","horizontalCenter",0),
					new eui.SetProperty("_Label9","width",70),
					new eui.SetProperty("_Label9","textAlign","center"),
					new eui.SetProperty("_Label9","verticalAlign","middle"),
					new eui.SetProperty("_Label9","horizontalCenter",0),
					new eui.SetProperty("_Group13","x",782.63),
					new eui.SetProperty("_Group13","y",28),
					new eui.SetProperty("musicCheck","horizontalCenter",0),
					new eui.SetProperty("_Label10","width",70),
					new eui.SetProperty("_Label10","verticalAlign","middle"),
					new eui.SetProperty("_Label10","textAlign","center"),
					new eui.SetProperty("_Label10","horizontalCenter",0),
					new eui.SetProperty("_Group14","x",933.3599999999999),
					new eui.SetProperty("_Group14","y",27),
					new eui.SetProperty("modleCheckButton","horizontalCenter",0),
					new eui.SetProperty("_Label11","verticalAlign","middle"),
					new eui.SetProperty("_Label11","textAlign","center"),
					new eui.SetProperty("_Label11","horizontalCenter",0),
					new eui.SetProperty("_Label11","height",16),
					new eui.SetProperty("_Group15","x",1083.74),
					new eui.SetProperty("_Group15","y",28),
					new eui.SetProperty("exitBtn","horizontalCenter",0),
					new eui.SetProperty("_Label12","width",70),
					new eui.SetProperty("_Label12","verticalAlign","middle"),
					new eui.SetProperty("_Label12","textAlign","center"),
					new eui.SetProperty("_Label12","horizontalCenter",0),
					new eui.SetProperty("_Group16","x",1234),
					new eui.SetProperty("_Group16","y",28),
					new eui.SetProperty("btnGroup","layout",this._HorizontalLayout1),
					new eui.SetProperty("scrolls","anchorOffsetX",0),
					new eui.SetProperty("scrolls","left",0),
					new eui.SetProperty("scrolls","right",0),
					new eui.SetProperty("scrolls","top",0),
					new eui.SetProperty("scrolls","bottom",0),
					new eui.SetProperty("topGroup","anchorOffsetX",0),
					new eui.SetProperty("topGroup","y",-207),
					new eui.SetProperty("topGroup","scaleX",1),
					new eui.SetProperty("topGroup","scaleY",1),
					new eui.SetProperty("topGroup","left",0),
					new eui.SetProperty("topGroup","right",0),
					new eui.SetProperty("topGroup","height",207),
					new eui.SetProperty("_Group17","touchEnabled",false),
					new eui.SetProperty("_Group17","height",207),
					new eui.SetProperty("_Group18","top",25),
					new eui.SetProperty("_Group18","right",0)
				])
			,
			new eui.State ("ver",
				[
					new eui.SetProperty("bottomBg","left",0),
					new eui.SetProperty("bottomBg","right",0),
					new eui.SetProperty("bottomBg","bottom",0),
					new eui.SetProperty("bottomBg","top",0),
					new eui.SetProperty("bottomBg","source","bottom_2_png"),
					new eui.SetProperty("_Group1","horizontalCenter",0),
					new eui.SetProperty("_Group1","bottom",12),
					new eui.SetProperty("t1","textColor",0xfccb44),
					new eui.SetProperty("_Group2","horizontalCenter",-232),
					new eui.SetProperty("_Group2","y",101.8),
					new eui.SetProperty("t4","size",27),
					new eui.SetProperty("rewardLabel","y",31.46),
					new eui.SetProperty("rewardLabel","size",44),
					new eui.SetProperty("rewardLabel","horizontalCenter",-7),
					new eui.SetProperty("rewardGroup","horizontalCenter",0),
					new eui.SetProperty("rewardGroup","top",12),
					new eui.SetProperty("rewardGroup","visible",false),
					new eui.SetProperty("t5","text","您赢得了奖励！"),
					new eui.SetProperty("t5","textColor",0xffffff),
					new eui.SetProperty("rewardLabel0","size",27),
					new eui.SetProperty("rewardLabel0","text","启动请按"),
					new eui.SetProperty("rewardLabel0","horizontalCenter",-27),
					new eui.SetProperty("rewardLabel0","y",30.36),
					new eui.SetProperty("_Image1","x",117.05),
					new eui.SetProperty("_Image1","y",16.32),
					new eui.SetProperty("_Image2","x",103.02),
					new eui.SetProperty("_Image2","y",2.32),
					new eui.SetProperty("freeGroup","y",26),
					new eui.SetProperty("freeGroup","width",190),
					new eui.SetProperty("freeGroup","x",280),
					new eui.SetProperty("freeGroup","visible",false),
					new eui.SetProperty("tipLabel","horizontalCenter",0),
					new eui.SetProperty("tipLabel","top",23),
					new eui.SetProperty("tipLabel","fontFamily","Microsoft JhengHei"),
					new eui.SetProperty("tipLabel","size",48),
					new eui.SetProperty("_Group3","horizontalCenter",0),
					new eui.SetProperty("_Group3","y",101.8),
					new eui.SetProperty("_Group3","x",329),
					new eui.SetProperty("_Group4","y",101.8),
					new eui.SetProperty("_Group4","horizontalCenter",232),
					new eui.SetProperty("bottomGroup","left",0),
					new eui.SetProperty("bottomGroup","right",0),
					new eui.SetProperty("bottomGroup","height",250),
					new eui.SetProperty("bottomGroup","y",1074),
					new eui.SetProperty("betSetCompoment","horizontalCenter",0),
					new eui.SetProperty("betSetCompoment","y",1347),
					new eui.SetProperty("autoSetCompoment","y",1336.75),
					new eui.SetProperty("autoSetCompoment","horizontalCenter",0),
					new eui.SetProperty("startButton","x",1085.97),
					new eui.SetProperty("startButton","horizontalCenter",0),
					new eui.SetProperty("startButton","y",833.46),
					new eui.SetProperty("autoButton","x",1088),
					new eui.SetProperty("autoButton","horizontalCenter",0),
					new eui.SetProperty("autoButton","y",834.18),
					new eui.SetProperty("autoButton","visible",false),
					new eui.SetProperty("bonusBtn","visible",false),
					new eui.SetProperty("FreeBtn","visible",false),
					new eui.SetProperty("controllGroup","y",251.28),
					new eui.SetProperty("controllGroup","horizontalCenter",0),
					new eui.SetProperty("controllGroup","verticalCenter",258),
					new eui.SetProperty("_Image3","scaleX",0.66),
					new eui.SetProperty("_Image3","scaleY",0.66),
					new eui.SetProperty("_Label1","horizontalCenter",0),
					new eui.SetProperty("_Label1","top",36),
					new eui.SetProperty("rewradMaxGroup","horizontalCenter",0),
					new eui.SetProperty("rewradMaxGroup","y",400.81),
					new eui.SetProperty("rewradMaxGroup","anchorOffsetX",218),
					new eui.SetProperty("rewradMaxGroup","anchorOffsetY",79.5),
					new eui.SetProperty("_Group5","y",1078.47),
					new eui.SetProperty("_Group5","height",254),
					new eui.SetProperty("setBtn","left",0),
					new eui.SetProperty("setBtn","top",40),
					new eui.SetProperty("moreBtn","right",0),
					new eui.SetProperty("moreBtn","top",40),
					new eui.SetProperty("betBtn","y",870.92),
					new eui.SetProperty("betBtn","left",88),
					new eui.SetProperty("_Label2","fontFamily","Microsoft JhengHei"),
					new eui.SetProperty("_Label2","y",74.39),
					new eui.SetProperty("_Label2","size",22),
					new eui.SetProperty("qukGroup","y",905.09),
					new eui.SetProperty("qukGroup","right",106),
					new eui.SetProperty("maskRect","visible",false),
					new eui.SetProperty("_Rect1","top",-5),
					new eui.SetProperty("timeLabel","fontFamily","Arial"),
					new eui.SetProperty("_Group6","horizontalCenter",0),
					new eui.SetProperty("_Group6","top",10),
					new eui.SetProperty("btnBg","top",-50),
					new eui.SetProperty("homeBtn","horizontalCenter",0),
					new eui.SetProperty("_Label3","horizontalCenter",0),
					new eui.SetProperty("_Group7","verticalCenter",0),
					new eui.SetProperty("crashBtn","horizontalCenter",0),
					new eui.SetProperty("_Label4","horizontalCenter",0),
					new eui.SetProperty("_Group8","verticalCenter",0),
					new eui.SetProperty("historyBtn","horizontalCenter",0),
					new eui.SetProperty("_Label6","horizontalCenter",0),
					new eui.SetProperty("_Group10","verticalCenter",0),
					new eui.SetProperty("surpotBtn","horizontalCenter",8),
					new eui.SetProperty("_Label7","horizontalCenter",0),
					new eui.SetProperty("_Group11","verticalCenter",0),
					new eui.SetProperty("rewardBtn","horizontalCenter",0),
					new eui.SetProperty("_Label8","horizontalCenter",0),
					new eui.SetProperty("_Group12","verticalCenter",0),
					new eui.SetProperty("helpBtn","horizontalCenter",0),
					new eui.SetProperty("_Label9","horizontalCenter",0),
					new eui.SetProperty("_Group13","verticalCenter",0),
					new eui.SetProperty("musicCheck","horizontalCenter",0),
					new eui.SetProperty("_Label10","horizontalCenter",0),
					new eui.SetProperty("_Group14","verticalCenter",0),
					new eui.SetProperty("modleCheckButton","y",0),
					new eui.SetProperty("modleCheckButton","horizontalCenter",0),
					new eui.SetProperty("_Label11","horizontalCenter",0),
					new eui.SetProperty("_Label11","text","左手/右手"),
					new eui.SetProperty("_Group15","verticalCenter",0),
					new eui.SetProperty("exitBtn","horizontalCenter",0),
					new eui.SetProperty("_Label12","horizontalCenter",0),
					new eui.SetProperty("_Group16","x",1396),
					new eui.SetProperty("_Group16","verticalCenter",0),
					new eui.SetProperty("btnGroup","layout",this._HorizontalLayout2),
					new eui.SetProperty("scrolls","anchorOffsetX",0),
					new eui.SetProperty("scrolls","left",0),
					new eui.SetProperty("scrolls","right",0),
					new eui.SetProperty("scrolls","top",0),
					new eui.SetProperty("scrolls","bottom",0),
					new eui.SetProperty("topGroup","left",0),
					new eui.SetProperty("topGroup","right",0),
					new eui.SetProperty("topGroup","x",0),
					new eui.SetProperty("topGroup","y",-225),
					new eui.SetProperty("topGroup","height",215),
					new eui.SetProperty("_Group17","touchEnabled",false),
					new eui.SetProperty("_Group17","height",215),
					new eui.SetProperty("_Group18","right",0),
					new eui.SetProperty("_Group18","top",35),
					new eui.SetProperty("","width",750),
					new eui.SetProperty("","height",1334)
				])
		];
	}
	var _proto = SetUISkin.prototype;

	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.anchorOffsetY = 0;
		t.height = 106.06;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this.bottomBg_i(),this._Group1_i(),this._Group2_i(),this.rewardGroup_i(),this.freeGroup_i(),this.tipLabel_i(),this._Group3_i(),this._Group4_i()];
		return t;
	};
	_proto.bottomBg_i = function () {
		var t = new eui.Image();
		this.bottomBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bottom_2_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.height = 52;
		t.width = 84;
		t.x = 45.94;
		t.elementsContent = [this.t0_i(),this.balanceLabel_i()];
		return t;
	};
	_proto.t0_i = function () {
		var t = new eui.Label();
		this.t0 = t;
		t.size = 22;
		t.text = "您的余额";
		t.textColor = 0x081954;
		t.x = 2.78;
		t.y = 0;
		return t;
	};
	_proto.balanceLabel_i = function () {
		var t = new eui.Label();
		this.balanceLabel = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "115.85";
		t.y = 23.33;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.height = 52;
		t.width = 84;
		t.x = 216.85;
		t.y = 21.06;
		t.elementsContent = [this.t1_i(),this.lineLabel_i()];
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Label();
		this.t1 = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "线";
		t.textColor = 0xFCCB44;
		t.y = 0;
		return t;
	};
	_proto.lineLabel_i = function () {
		var t = new eui.Label();
		this.lineLabel = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "1";
		t.y = 23.33;
		return t;
	};
	_proto.rewardGroup_i = function () {
		var t = new eui.Group();
		this.rewardGroup = t;
		t.width = 80;
		t.elementsContent = [this.t4_i(),this.rewardLabel_i()];
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Label();
		this.t4 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "奖金";
		t.textColor = 0xFCCB44;
		t.y = 0;
		return t;
	};
	_proto.rewardLabel_i = function () {
		var t = new eui.Label();
		this.rewardLabel = t;
		t.fontFamily = "Arial";
		t.size = 40;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 30;
		return t;
	};
	_proto.freeGroup_i = function () {
		var t = new eui.Group();
		this.freeGroup = t;
		t.width = 80;
		t.y = 2;
		t.elementsContent = [this.t5_i(),this.rewardLabel0_i(),this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto.t5_i = function () {
		var t = new eui.Label();
		this.t5 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 27;
		t.text = "奖金";
		t.textColor = 0xFCCB44;
		t.y = 0;
		return t;
	};
	_proto.rewardLabel0_i = function () {
		var t = new eui.Label();
		this.rewardLabel0 = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0.5;
		t.size = 44;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.y = 24.2;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 0.5;
		t.scaleX = 0.2;
		t.scaleY = 0.2;
		t.source = "rightbar_autoplay_selected_png";
		t.x = 117;
		t.y = 36;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "auto_play_png";
		t.x = 103;
		t.y = 23;
		return t;
	};
	_proto.tipLabel_i = function () {
		var t = new eui.Label();
		this.tipLabel = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "滑动转轴或按旋转";
		t.textAlign = "center";
		t.y = 25.82;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.height = 52;
		t.width = 84;
		t.y = 21.06;
		t.elementsContent = [this.t2_i(),this.betLabel_i()];
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Label();
		this.t2 = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "线注";
		t.textColor = 0xFCCB44;
		t.y = 0;
		return t;
	};
	_proto.betLabel_i = function () {
		var t = new eui.Label();
		this.betLabel = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "1";
		t.y = 23.33;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		this._Group4 = t;
		t.height = 52;
		t.width = 84;
		t.y = 21.06;
		t.elementsContent = [this.t3_i(),this.totalBet_i()];
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Label();
		this.t3 = t;
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "总赌注";
		t.textColor = 0xFCCB44;
		t.y = 0;
		return t;
	};
	_proto.totalBet_i = function () {
		var t = new eui.Label();
		this.totalBet = t;
		t.horizontalCenter = 0;
		t.size = 30;
		t.text = "1";
		t.y = 23.33;
		return t;
	};
	_proto.betSetCompoment_i = function () {
		var t = new BetSetCompoment();
		this.betSetCompoment = t;
		t.skinName = "BetSetCompomentSkin";
		t.x = 0;
		return t;
	};
	_proto.autoSetCompoment_i = function () {
		var t = new AutoSetCompoment();
		this.autoSetCompoment = t;
		t.skinName = "AutoSetCompomentSkin";
		t.y = 249;
		return t;
	};
	_proto.controllGroup_i = function () {
		var t = new eui.Group();
		this.controllGroup = t;
		t.x = 1085.97;
		t.elementsContent = [this.startButton_i(),this.autoButton_i(),this.bonusBtn_i(),this.FreeBtn_i()];
		return t;
	};
	_proto.startButton_i = function () {
		var t = new StartButton();
		this.startButton = t;
		t.horizontalCenter = 0;
		t.skinName = "StartButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.autoButton_i = function () {
		var t = new AutoStartBtn();
		this.autoButton = t;
		t.horizontalCenter = 0;
		t.skinName = "AutoStartBtnSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bonusBtn_i = function () {
		var t = new BonusBtn();
		this.bonusBtn = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "BonusBtnSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.FreeBtn_i = function () {
		var t = new FreeBtn();
		this.FreeBtn = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "FreeBtnSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.mcGroup_i = function () {
		var t = new eui.Group();
		this.mcGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		this._Group5 = t;
		t.height = 106.06;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this.rewradMaxGroup_i()];
		return t;
	};
	_proto.rewradMaxGroup_i = function () {
		var t = new eui.Group();
		this.rewradMaxGroup = t;
		t.anchorOffsetX = 231;
		t.anchorOffsetY = 84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 436;
		t.y = 424;
		t.elementsContent = [this._Image3_i(),this._Label1_i(),this.rewardMaxLabel_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.alpha = 0.85;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "reward_btnbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.horizontalCenter = 0;
		t.size = 20;
		t.text = "奖金";
		t.top = 40;
		return t;
	};
	_proto.rewardMaxLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.rewardMaxLabel = t;
		t.font = "f3_fnt";
		t.horizontalCenter = 0.5;
		t.letterSpacing = 2;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.text = "x0.13";
		t.y = 62.51;
		return t;
	};
	_proto.setBtn_i = function () {
		var t = new eui.Button();
		this.setBtn = t;
		t.label = "";
		t.left = 0;
		t.top = 0;
		t.skinName = SetUISkin$Skin7;
		return t;
	};
	_proto.moreBtn_i = function () {
		var t = new eui.Button();
		this.moreBtn = t;
		t.label = "";
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.skinName = SetUISkin$Skin8;
		return t;
	};
	_proto.betBtn_i = function () {
		var t = new eui.ToggleButton();
		this.betBtn = t;
		t.label = "";
		t.x = 96;
		t.y = 510;
		t.skinName = SetUISkin$Skin9;
		return t;
	};
	_proto.qukGroup_i = function () {
		var t = new eui.Group();
		this.qukGroup = t;
		t.x = 1085;
		t.y = 512;
		t.elementsContent = [this._Label2_i(),this.qukcheckBtn_i()];
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.size = 20;
		t.text = "快速";
		t.textColor = 0xDDAC37;
		t.x = 29;
		t.y = 85;
		return t;
	};
	_proto.qukcheckBtn_i = function () {
		var t = new CheckButton();
		this.qukcheckBtn = t;
		t.skinName = "CheckSkin";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.maskRect_i = function () {
		var t = new eui.Rect();
		this.maskRect = t;
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		this._Group6 = t;
		t.horizontalCenter = 0;
		t.top = 10;
		t.elementsContent = [this._Rect1_i(),this.timeLabel_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		this._Rect1 = t;
		t.alpha = 0.5;
		t.bottom = -5;
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.left = -5;
		t.right = -5;
		t.top = -10;
		return t;
	};
	_proto.timeLabel_i = function () {
		var t = new eui.Label();
		this.timeLabel = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group17_i = function () {
		var t = new eui.Group();
		this._Group17 = t;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.elementsContent = [this.topGroup_i()];
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.anchorOffsetY = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this.btnBg_i(),this.scrolls_i()];
		return t;
	};
	_proto.btnBg_i = function () {
		var t = new eui.Image();
		this.btnBg = t;
		t.alpha = 0.9;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "top_menu_bg@2x_png";
		t.top = 0;
		return t;
	};
	_proto.scrolls_i = function () {
		var t = new eui.Scroller();
		this.scrolls = t;
		t.bottom = 0;
		t.bounces = true;
		t.left = 0;
		t.right = 0;
		t.scrollPolicyH = "on";
		t.top = 0;
		t.viewport = this.btnGroup_i();
		return t;
	};
	_proto.btnGroup_i = function () {
		var t = new eui.Group();
		this.btnGroup = t;
		t.touchChildren = true;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.elementsContent = [this._Group7_i(),this._Group8_i(),this._Group9_i(),this._Group10_i(),this._Group11_i(),this._Group12_i(),this._Group13_i(),this._Group14_i(),this._Group15_i(),this._Group16_i()];
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		this._Group7 = t;
		t.verticalCenter = 5;
		t.x = 42.89;
		t.elementsContent = [this.homeBtn_i(),this._Label3_i()];
		return t;
	};
	_proto.homeBtn_i = function () {
		var t = new eui.Button();
		this.homeBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = SetUISkin$Skin10;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "大厅";
		t.textColor = 0xdbdbdc;
		t.y = 77;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		this._Group8 = t;
		t.verticalCenter = 5;
		t.x = 215.43;
		t.elementsContent = [this.crashBtn_i(),this._Label4_i()];
		return t;
	};
	_proto.crashBtn_i = function () {
		var t = new eui.Button();
		this.crashBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = SetUISkin$Skin11;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "存款";
		t.textColor = 0xDBDBDC;
		t.y = 75;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.height = 93;
		t.verticalCenter = 7;
		t.x = 42.89;
		t.elementsContent = [this.moresBtn_i(),this._Label5_i()];
		return t;
	};
	_proto.moresBtn_i = function () {
		var t = new eui.Button();
		this.moresBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 6.06;
		t.skinName = SetUISkin$Skin12;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "大厅";
		t.textColor = 0xDBDBDC;
		t.visible = false;
		t.y = 77;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		this._Group10 = t;
		t.verticalCenter = 5;
		t.x = 388.63;
		t.elementsContent = [this.historyBtn_i(),this._Label6_i()];
		return t;
	};
	_proto.historyBtn_i = function () {
		var t = new eui.Button();
		this.historyBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = SetUISkin$Skin13;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		this._Label6 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "历史记录";
		t.textColor = 0xDBDBDC;
		t.y = 75;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		this._Group11 = t;
		t.verticalCenter = 5;
		t.x = 561.26;
		t.elementsContent = [this.surpotBtn_i(),this._Label7_i()];
		return t;
	};
	_proto.surpotBtn_i = function () {
		var t = new eui.Button();
		this.surpotBtn = t;
		t.horizontalCenter = 10;
		t.label = "";
		t.y = 0;
		t.skinName = SetUISkin$Skin14;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		this._Label7 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "支持";
		t.textColor = 0xDBDBDC;
		t.y = 75;
		return t;
	};
	_proto._Group12_i = function () {
		var t = new eui.Group();
		this._Group12 = t;
		t.verticalCenter = 5;
		t.x = 734.88;
		t.elementsContent = [this.rewardBtn_i(),this._Label8_i()];
		return t;
	};
	_proto.rewardBtn_i = function () {
		var t = new eui.Button();
		this.rewardBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = SetUISkin$Skin15;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		this._Label8 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "奖金表";
		t.textColor = 0xDBDBDC;
		t.y = 75;
		return t;
	};
	_proto._Group13_i = function () {
		var t = new eui.Group();
		this._Group13 = t;
		t.verticalCenter = 5;
		t.x = 907.63;
		t.elementsContent = [this.helpBtn_i(),this._Label9_i()];
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new eui.Button();
		this.helpBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = SetUISkin$Skin16;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		this._Label9 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "帮助";
		t.textColor = 0xDBDBDC;
		t.y = 75;
		return t;
	};
	_proto._Group14_i = function () {
		var t = new eui.Group();
		this._Group14 = t;
		t.verticalCenter = 5;
		t.x = 1080.36;
		t.elementsContent = [this.musicCheck_i(),this._Label10_i()];
		return t;
	};
	_proto.musicCheck_i = function () {
		var t = new eui.CheckBox();
		this.musicCheck = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 0;
		t.skinName = SetUISkin$Skin17;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		this._Label10 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "声音";
		t.textColor = 0xDBDBDC;
		t.y = 76.24;
		return t;
	};
	_proto._Group15_i = function () {
		var t = new eui.Group();
		this._Group15 = t;
		t.verticalCenter = 5;
		t.x = 1252.74;
		t.elementsContent = [this.modleCheckButton_i(),this._Label11_i()];
		return t;
	};
	_proto.modleCheckButton_i = function () {
		var t = new eui.CheckBox();
		this.modleCheckButton = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.skinName = SetUISkin$Skin18;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		this._Label11 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "左手/右手";
		t.textColor = 0xDBDBDC;
		t.y = 75;
		return t;
	};
	_proto._Group16_i = function () {
		var t = new eui.Group();
		this._Group16 = t;
		t.verticalCenter = 5;
		t.elementsContent = [this.exitBtn_i(),this._Label12_i()];
		return t;
	};
	_proto.exitBtn_i = function () {
		var t = new eui.Button();
		this.exitBtn = t;
		t.horizontalCenter = 8;
		t.label = "";
		t.skinName = SetUISkin$Skin19;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		this._Label12 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 16;
		t.text = "登出";
		t.textColor = 0xDBDBDC;
		t.y = 76;
		return t;
	};
	_proto._Group18_i = function () {
		var t = new eui.Group();
		this._Group18 = t;
		t.height = 119;
		t.right = 0;
		t.top = 8;
		t.touchEnabled = false;
		t.width = 193;
		t.elementsContent = [this.rightGroup_i()];
		return t;
	};
	_proto.rightGroup_i = function () {
		var t = new eui.Group();
		this.rightGroup = t;
		t.x = 196;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this.gameButton_i(),this.backButton_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "top_right_menu_bg@2x_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.gameButton_i = function () {
		var t = new eui.Button();
		this.gameButton = t;
		t.label = "";
		t.x = 29;
		t.y = 23;
		t.skinName = SetUISkin$Skin20;
		return t;
	};
	_proto.backButton_i = function () {
		var t = new eui.Button();
		this.backButton = t;
		t.label = "";
		t.x = 101;
		t.y = 6;
		t.skinName = SetUISkin$Skin21;
		return t;
	};
	_proto.lightBG_i = function () {
		var t = new eui.Image();
		this.lightBG = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "maskbg_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		this._HorizontalLayout1 = t;
		t.horizontalAlign = "left";
		t.paddingTop = 10;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		this._HorizontalLayout2 = t;
		t.gap = 94;
		t.horizontalAlign = "left";
		t.paddingLeft = 30;
		t.paddingRight = 30;
		t.paddingTop = 10;
		t.verticalAlign = "middle";
		return t;
	};
	return SetUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/MainScenceUISkin.exml'] = window.MainScenceUISkin = (function (_super) {
	__extends(MainScenceUISkin, _super);
	var MainScenceUISkin$Skin22 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin22, _super);
		function MainScenceUISkin$Skin22() {
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
						new eui.SetProperty("_Image1","source","freeBtn_H_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainScenceUISkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "freeBtn_png";
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
		return MainScenceUISkin$Skin22;
	})(eui.Skin);

	var MainScenceUISkin$Skin23 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin23, _super);
		function MainScenceUISkin$Skin23() {
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
						new eui.SetProperty("_Image1","source","freeBtn_H_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MainScenceUISkin$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "freeBtn_png";
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
		return MainScenceUISkin$Skin23;
	})(eui.Skin);

	function MainScenceUISkin() {
		_super.call(this);
		this.skinParts = ["bg","gameScence","logo1","logo2","free_fanbei","free_Num","free_money","free_group","logo_group","mcGroup","rewardWin","tipLabel","tipGroup","mainGroup","setUI","bg1","freeLoge","rotateNum","fanbeiNum","freeNumGroup","beiKe_0","beiKe_x0","beiKe_1","beiKe_x1","beiKe_2","beiKe_x2","beiKe_3","beiKe_x3","beiKe_4","beiKe_x4","freeGroup","pickFreeBtn","freeNum","beiNum","pickFree","overFreeBtn","gameMoney","gongNengMoney","totalMoney","overFree","tipsGroup"];
		
		this.height = 750;
		this.elementsContent = [this.bg_i(),this.mainGroup_i(),this.setUI_i(),this.freeGroup_i(),this.tipsGroup_i()];
		this._Image11_i();
		
		this.states = [
			new eui.State ("hor",
				[
					new eui.AddItems("_Image11","",1,""),
					new eui.SetProperty("bg","top",0),
					new eui.SetProperty("bg","bottom",0),
					new eui.SetProperty("gameScence","y",63.85),
					new eui.SetProperty("gameScence","horizontalCenter",0),
					new eui.SetProperty("logo2","y",-25.38),
					new eui.SetProperty("logo2","horizontalCenter",0.5),
					new eui.SetProperty("logo2","visible",false),
					new eui.SetProperty("free_fanbei","text","X2"),
					new eui.SetProperty("free_fanbei","bold",true),
					new eui.SetProperty("free_fanbei","y",35),
					new eui.SetProperty("free_fanbei","x",45.94),
					new eui.SetProperty("free_fanbei","anchorOffsetX",0),
					new eui.SetProperty("free_fanbei","width",106.52),
					new eui.SetProperty("free_fanbei","textAlign","center"),
					new eui.SetProperty("free_Num","y",34),
					new eui.SetProperty("free_Num","x",201.94),
					new eui.SetProperty("free_money","x",950.94),
					new eui.SetProperty("free_money","text","--"),
					new eui.SetProperty("free_group","x",0),
					new eui.SetProperty("free_group","y",-10.38),
					new eui.SetProperty("free_group","anchorOffsetX",0),
					new eui.SetProperty("free_group","width",1214.03),
					new eui.SetProperty("free_group","anchorOffsetY",0),
					new eui.SetProperty("free_group","height",97.8),
					new eui.SetProperty("free_group","visible",false),
					new eui.SetProperty("logo_group","horizontalCenter",43),
					new eui.SetProperty("logo_group","y",-13.93),
					new eui.SetProperty("logo_group","scaleX",0.97),
					new eui.SetProperty("rewardWin","source","five_png"),
					new eui.SetProperty("tipLabel","visible",false),
					new eui.SetProperty("tipGroup","x",277.6470588235294),
					new eui.SetProperty("tipGroup","y",297.6470588235294),
					new eui.SetProperty("tipGroup","scaleX",1.1764705882352942),
					new eui.SetProperty("tipGroup","scaleY",1.1764705882352942),
					new eui.SetProperty("tipGroup","horizontalCenter",5),
					new eui.SetProperty("tipGroup","verticalCenter",76.5),
					new eui.SetProperty("tipGroup","visible",false),
					new eui.SetProperty("_Group1","verticalCenter",-37.5),
					new eui.SetProperty("_Group1","scaleX",0.875),
					new eui.SetProperty("_Group1","scaleY",0.875),
					new eui.SetProperty("_Group1","horizontalCenter",0),
					new eui.SetProperty("mainGroup","left",0),
					new eui.SetProperty("mainGroup","right",0),
					new eui.SetProperty("mainGroup","top",0),
					new eui.SetProperty("mainGroup","bottom",0),
					new eui.SetProperty("setUI","top",0),
					new eui.SetProperty("setUI","bottom",0),
					new eui.SetProperty("setUI","currentState","hor"),
					new eui.SetProperty("setUI","left",-2),
					new eui.SetProperty("setUI","right",2),
					new eui.SetProperty("rotateNum","text","8"),
					new eui.SetProperty("rotateNum","x",67.48),
					new eui.SetProperty("rotateNum","y",81),
					new eui.SetProperty("rotateNum","size",60),
					new eui.SetProperty("fanbeiNum","text","X2"),
					new eui.SetProperty("fanbeiNum","x",251),
					new eui.SetProperty("fanbeiNum","y",84.5),
					new eui.SetProperty("fanbeiNum","size",60),
					new eui.SetProperty("freeNumGroup","anchorOffsetX",0),
					new eui.SetProperty("freeNumGroup","width",459.09),
					new eui.SetProperty("freeNumGroup","x",818),
					new eui.SetProperty("freeNumGroup","top",0),
					new eui.SetProperty("beiKe_0","y",132.81),
					new eui.SetProperty("beiKe_0","x",144.05),
					new eui.SetProperty("beiKe_0","source","with_pearl_01_png"),
					new eui.SetProperty("beiKe_x0","x",245),
					new eui.SetProperty("beiKe_x0","y",310),
					new eui.SetProperty("beiKe_x0","source","pearl_text5_png"),
					new eui.SetProperty("beiKe_x0","visible",false),
					new eui.SetProperty("beiKe_1","source","with_pearl_01_png"),
					new eui.SetProperty("beiKe_x1","x",635),
					new eui.SetProperty("beiKe_x1","y",310),
					new eui.SetProperty("beiKe_x1","source","pearl_text7_png"),
					new eui.SetProperty("beiKe_x1","visible",false),
					new eui.SetProperty("beiKe_2","source","with_pearl_01_png"),
					new eui.SetProperty("beiKe_x2","x",1004),
					new eui.SetProperty("beiKe_x2","source","pearl_text7_png"),
					new eui.SetProperty("beiKe_x2","visible",false),
					new eui.SetProperty("beiKe_3","y",286),
					new eui.SetProperty("beiKe_3","source","with_pearl_01_png"),
					new eui.SetProperty("beiKe_x3","x",360),
					new eui.SetProperty("beiKe_x3","y",458),
					new eui.SetProperty("beiKe_x3","source","pearl_text5_png"),
					new eui.SetProperty("beiKe_x3","visible",false),
					new eui.SetProperty("beiKe_4","y",291.6),
					new eui.SetProperty("beiKe_x4","x",811),
					new eui.SetProperty("beiKe_x4","y",463.6),
					new eui.SetProperty("beiKe_x4","source","pearl_text7_png"),
					new eui.SetProperty("beiKe_x4","visible",false),
					new eui.SetProperty("_Group2","scaleX",1),
					new eui.SetProperty("_Group2","scaleY",1),
					new eui.SetProperty("_Group2","width",1334),
					new eui.SetProperty("_Group2","height",750),
					new eui.SetProperty("_Group2","horizontalCenter",0),
					new eui.SetProperty("_Group2","verticalCenter",0),
					new eui.SetProperty("freeGroup","visible",false),
					new eui.SetProperty("_Image6","horizontalCenter",0),
					new eui.SetProperty("_Image6","verticalCenter",0),
					new eui.SetProperty("pickFreeBtn","label",""),
					new eui.SetProperty("pickFreeBtn","horizontalCenter",-0.3650000000000091),
					new eui.SetProperty("pickFreeBtn","scaleX",1.2),
					new eui.SetProperty("pickFreeBtn","scaleY",1.2),
					new eui.SetProperty("pickFreeBtn","y",401.88),
					new eui.SetProperty("_Image7","horizontalCenter",-0.3650000000000091),
					new eui.SetProperty("_Image7","verticalCenter",-50.985000000000014),
					new eui.SetProperty("freeNum","text","8"),
					new eui.SetProperty("freeNum","size",60),
					new eui.SetProperty("freeNum","textColor",0xe4a6ea),
					new eui.SetProperty("freeNum","y",153.23),
					new eui.SetProperty("freeNum","bold",true),
					new eui.SetProperty("freeNum","x",196.28),
					new eui.SetProperty("freeNum","textAlign","center"),
					new eui.SetProperty("freeNum","width",80),
					new eui.SetProperty("beiNum","text","X2"),
					new eui.SetProperty("beiNum","y",314),
					new eui.SetProperty("beiNum","x",113),
					new eui.SetProperty("beiNum","textColor",0x35e4f4),
					new eui.SetProperty("beiNum","size",60),
					new eui.SetProperty("beiNum","bold",true),
					new eui.SetProperty("beiNum","width",116),
					new eui.SetProperty("beiNum","textAlign","center"),
					new eui.SetProperty("beiNum","anchorOffsetX",0),
					new eui.SetProperty("overFreeBtn","scaleX",1.2),
					new eui.SetProperty("overFreeBtn","scaleY",1.2),
					new eui.SetProperty("overFreeBtn","verticalCenter",195.515),
					new eui.SetProperty("overFreeBtn","horizontalCenter",0),
					new eui.SetProperty("_Image8","y",256),
					new eui.SetProperty("_Image8","horizontalCenter",-5.365000000000009),
					new eui.SetProperty("_Image8","verticalCenter",17.514999999999986),
					new eui.SetProperty("_Image9","x",90.76),
					new eui.SetProperty("_Image9","y",86),
					new eui.SetProperty("_Image9","verticalCenter",-163.485),
					new eui.SetProperty("_Image9","horizontalCenter",-224.365),
					new eui.SetProperty("_Image10","x",531.76),
					new eui.SetProperty("_Image10","y",86),
					new eui.SetProperty("_Image10","horizontalCenter",216.635),
					new eui.SetProperty("_Image10","verticalCenter",-163.485),
					new eui.SetProperty("gameMoney","font","free_f0_fnt"),
					new eui.SetProperty("gameMoney","text","x1.25"),
					new eui.SetProperty("gameMoney","scaleX",1.2),
					new eui.SetProperty("gameMoney","scaleY",1.2),
					new eui.SetProperty("gameMoney","anchorOffsetX",0),
					new eui.SetProperty("gameMoney","anchorOffsetY",0),
					new eui.SetProperty("gameMoney","verticalCenter",-99.48500000000001),
					new eui.SetProperty("gameMoney","horizontalCenter",-222.865),
					new eui.SetProperty("gongNengMoney","text","x12.81"),
					new eui.SetProperty("gongNengMoney","scaleX",1.2),
					new eui.SetProperty("gongNengMoney","scaleY",1.2),
					new eui.SetProperty("gongNengMoney","anchorOffsetX",0),
					new eui.SetProperty("gongNengMoney","anchorOffsetY",0),
					new eui.SetProperty("gongNengMoney","font","free_f0_fnt"),
					new eui.SetProperty("gongNengMoney","verticalCenter",-96.48500000000001),
					new eui.SetProperty("gongNengMoney","horizontalCenter",225.635),
					new eui.SetProperty("totalMoney","text","x14.06"),
					new eui.SetProperty("totalMoney","scaleX",1.4),
					new eui.SetProperty("totalMoney","scaleY",1.4),
					new eui.SetProperty("totalMoney","anchorOffsetX",0),
					new eui.SetProperty("totalMoney","anchorOffsetY",0),
					new eui.SetProperty("totalMoney","font","free_f0_fnt"),
					new eui.SetProperty("totalMoney","y",342.44),
					new eui.SetProperty("totalMoney","horizontalCenter",0),
					new eui.SetProperty("overFree","horizontalCenter",0),
					new eui.SetProperty("overFree","verticalCenter",0),
					new eui.SetProperty("overFree","visible",false),
					new eui.SetProperty("tipsGroup","visible",false),
					new eui.SetProperty("","width",1334),
					new eui.SetProperty("","height",750)
				])
			,
			new eui.State ("ver",
				[
					new eui.SetProperty("bg","source","BG1_png"),
					new eui.SetProperty("bg","left",0),
					new eui.SetProperty("bg","right",0),
					new eui.SetProperty("bg","bottom",0),
					new eui.SetProperty("bg","top",0),
					new eui.SetProperty("gameScence","horizontalCenter",-1.5),
					new eui.SetProperty("gameScence","verticalCenter",68.5),
					new eui.SetProperty("logo1","x",0),
					new eui.SetProperty("logo2","y",-64),
					new eui.SetProperty("logo2","horizontalCenter",0),
					new eui.SetProperty("logo2","visible",false),
					new eui.SetProperty("free_fanbei","y",39),
					new eui.SetProperty("free_fanbei","text","X2"),
					new eui.SetProperty("free_fanbei","anchorOffsetX",0),
					new eui.SetProperty("free_fanbei","width",83.55),
					new eui.SetProperty("free_fanbei","textAlign","center"),
					new eui.SetProperty("free_Num","x",339.94),
					new eui.SetProperty("free_Num","text","31"),
					new eui.SetProperty("free_money","x",927.94),
					new eui.SetProperty("free_money","y",38),
					new eui.SetProperty("free_money","text","--"),
					new eui.SetProperty("_Image2","x",364.41),
					new eui.SetProperty("_Image3","x",894.94),
					new eui.SetProperty("free_group","anchorOffsetX",0),
					new eui.SetProperty("free_group","width",1083.76),
					new eui.SetProperty("free_group","x",68),
					new eui.SetProperty("free_group","y",-7.83),
					new eui.SetProperty("free_group","visible",false),
					new eui.SetProperty("logo_group","horizontalCenter",0),
					new eui.SetProperty("logo_group","y",57.47),
					new eui.SetProperty("rewardWin","source","five_png"),
					new eui.SetProperty("tipLabel","visible",false),
					new eui.SetProperty("tipGroup","horizontalCenter",0.5),
					new eui.SetProperty("tipGroup","verticalCenter",80.5),
					new eui.SetProperty("_Group1","scaleX",0.58),
					new eui.SetProperty("_Group1","scaleY",0.58),
					new eui.SetProperty("_Group1","y",275),
					new eui.SetProperty("_Group1","horizontalCenter",0),
					new eui.SetProperty("mainGroup","left",0),
					new eui.SetProperty("mainGroup","right",0),
					new eui.SetProperty("mainGroup","top",0),
					new eui.SetProperty("mainGroup","bottom",0),
					new eui.SetProperty("setUI","currentState","ver"),
					new eui.SetProperty("setUI","left",0),
					new eui.SetProperty("setUI","right",0),
					new eui.SetProperty("setUI","bottom",0),
					new eui.SetProperty("setUI","top",0),
					new eui.SetProperty("_Image4","x",330),
					new eui.SetProperty("_Image4","y",24),
					new eui.SetProperty("_Image4","scaleX",1),
					new eui.SetProperty("_Image4","scaleY",1),
					new eui.SetProperty("_Image5","x",60.49),
					new eui.SetProperty("_Image5","y",24),
					new eui.SetProperty("_Image5","scaleX",1),
					new eui.SetProperty("_Image5","scaleY",1),
					new eui.SetProperty("rotateNum","x",79.19),
					new eui.SetProperty("rotateNum","y",78.12),
					new eui.SetProperty("rotateNum","scaleX",1),
					new eui.SetProperty("rotateNum","scaleY",1),
					new eui.SetProperty("rotateNum","text","8"),
					new eui.SetProperty("rotateNum","size",60),
					new eui.SetProperty("fanbeiNum","x",368.61),
					new eui.SetProperty("fanbeiNum","y",80.47),
					new eui.SetProperty("fanbeiNum","scaleX",1),
					new eui.SetProperty("fanbeiNum","scaleY",1),
					new eui.SetProperty("fanbeiNum","text","X2"),
					new eui.SetProperty("fanbeiNum","size",60),
					new eui.SetProperty("freeNumGroup","anchorOffsetX",0),
					new eui.SetProperty("freeNumGroup","width",510.87),
					new eui.SetProperty("freeNumGroup","x",734),
					new eui.SetProperty("freeNumGroup","top",0),
					new eui.SetProperty("freeNumGroup","visible",false),
					new eui.SetProperty("beiKe_0","x",149.275862),
					new eui.SetProperty("beiKe_0","y",182.78),
					new eui.SetProperty("beiKe_0","scaleX",0.9),
					new eui.SetProperty("beiKe_0","scaleY",0.9),
					new eui.SetProperty("beiKe_0","source","with_pearl_01_png"),
					new eui.SetProperty("beiKe_x0","x",270),
					new eui.SetProperty("beiKe_x0","y",310),
					new eui.SetProperty("beiKe_x0","scaleX",1.2),
					new eui.SetProperty("beiKe_x0","scaleY",1.2),
					new eui.SetProperty("beiKe_x0","source","pearl_text7_png"),
					new eui.SetProperty("beiKe_x0","visible",false),
					new eui.SetProperty("beiKe_1","x",503.49),
					new eui.SetProperty("beiKe_1","y",182.6),
					new eui.SetProperty("beiKe_1","scaleX",0.9),
					new eui.SetProperty("beiKe_1","scaleY",0.9),
					new eui.SetProperty("beiKe_1","source","with_pearl_01_png"),
					new eui.SetProperty("beiKe_x1","x",580),
					new eui.SetProperty("beiKe_x1","y",310),
					new eui.SetProperty("beiKe_x1","scaleX",1.2),
					new eui.SetProperty("beiKe_x1","scaleY",1.2),
					new eui.SetProperty("beiKe_x1","source","pearl_text5_png"),
					new eui.SetProperty("beiKe_x1","visible",false),
					new eui.SetProperty("beiKe_2","x",847.7),
					new eui.SetProperty("beiKe_2","y",176.3),
					new eui.SetProperty("beiKe_2","scaleX",0.9),
					new eui.SetProperty("beiKe_2","scaleY",0.9),
					new eui.SetProperty("beiKe_x2","x",919),
					new eui.SetProperty("beiKe_x2","y",310),
					new eui.SetProperty("beiKe_x2","scaleX",1.2),
					new eui.SetProperty("beiKe_x2","scaleY",1.2),
					new eui.SetProperty("beiKe_x2","source","pearl_text5_png"),
					new eui.SetProperty("beiKe_x2","visible",false),
					new eui.SetProperty("beiKe_3","x",274),
					new eui.SetProperty("beiKe_3","y",333.8),
					new eui.SetProperty("beiKe_3","scaleX",0.9),
					new eui.SetProperty("beiKe_3","scaleY",0.9),
					new eui.SetProperty("beiKe_3","source","with_pearl_01_png"),
					new eui.SetProperty("beiKe_x3","x",402),
					new eui.SetProperty("beiKe_x3","y",460),
					new eui.SetProperty("beiKe_x3","scaleX",1.2),
					new eui.SetProperty("beiKe_x3","scaleY",1.2),
					new eui.SetProperty("beiKe_x3","source","pearl_text7_png"),
					new eui.SetProperty("beiKe_x3","visible",false),
					new eui.SetProperty("beiKe_4","x",659.5),
					new eui.SetProperty("beiKe_4","y",332.5),
					new eui.SetProperty("beiKe_4","scaleX",0.9),
					new eui.SetProperty("beiKe_4","scaleY",0.9),
					new eui.SetProperty("beiKe_x4","x",780),
					new eui.SetProperty("beiKe_x4","y",467),
					new eui.SetProperty("beiKe_x4","scaleX",1.2),
					new eui.SetProperty("beiKe_x4","scaleY",1.2),
					new eui.SetProperty("beiKe_x4","source","pearl_text7_png"),
					new eui.SetProperty("beiKe_x4","visible",false),
					new eui.SetProperty("_Group2","width",1303),
					new eui.SetProperty("freeGroup","visible",false),
					new eui.SetProperty("_Image6","y",778),
					new eui.SetProperty("_Image6","scaleX",1),
					new eui.SetProperty("_Image6","scaleY",1),
					new eui.SetProperty("_Image6","horizontalCenter",0),
					new eui.SetProperty("pickFreeBtn","label",""),
					new eui.SetProperty("pickFreeBtn","horizontalCenter",-0.3650000000000091),
					new eui.SetProperty("pickFreeBtn","y",453.65),
					new eui.SetProperty("freeNum","text","23"),
					new eui.SetProperty("freeNum","size",60),
					new eui.SetProperty("freeNum","x",192.17),
					new eui.SetProperty("freeNum","y",203),
					new eui.SetProperty("freeNum","textColor",0xe4a6ea),
					new eui.SetProperty("freeNum","anchorOffsetX",0),
					new eui.SetProperty("freeNum","width",78.83),
					new eui.SetProperty("freeNum","textAlign","center"),
					new eui.SetProperty("beiNum","y",363.67),
					new eui.SetProperty("beiNum","x",87.75),
					new eui.SetProperty("beiNum","text","X2"),
					new eui.SetProperty("beiNum","size",60),
					new eui.SetProperty("beiNum","textColor",0x35e4f4),
					new eui.SetProperty("beiNum","anchorOffsetX",0),
					new eui.SetProperty("beiNum","width",128.25),
					new eui.SetProperty("beiNum","textAlign","center"),
					new eui.SetProperty("pickFree","y",778),
					new eui.SetProperty("pickFree","x",238),
					new eui.SetProperty("overFreeBtn","horizontalCenter",-0.4700000000000273),
					new eui.SetProperty("overFreeBtn","verticalCenter",191.015),
					new eui.SetProperty("_Image8","horizontalCenter",-0.4700000000000273),
					new eui.SetProperty("_Image8","verticalCenter",31.514999999999986),
					new eui.SetProperty("_Image9","verticalCenter",-181.485),
					new eui.SetProperty("_Image9","horizontalCenter",-222.47000000000003),
					new eui.SetProperty("_Image10","horizontalCenter",215.52999999999997),
					new eui.SetProperty("_Image10","verticalCenter",-179.485),
					new eui.SetProperty("gameMoney","font","free_f0_fnt"),
					new eui.SetProperty("gameMoney","text","x1.25"),
					new eui.SetProperty("gameMoney","anchorOffsetX",0),
					new eui.SetProperty("gameMoney","anchorOffsetY",0),
					new eui.SetProperty("gameMoney","verticalCenter",-107.48500000000001),
					new eui.SetProperty("gameMoney","horizontalCenter",-232.47000000000003),
					new eui.SetProperty("gongNengMoney","text","x12.81"),
					new eui.SetProperty("gongNengMoney","anchorOffsetX",0),
					new eui.SetProperty("gongNengMoney","anchorOffsetY",0),
					new eui.SetProperty("gongNengMoney","font","free_f0_fnt"),
					new eui.SetProperty("gongNengMoney","horizontalCenter",218.52999999999997),
					new eui.SetProperty("gongNengMoney","verticalCenter",-107.48500000000001),
					new eui.SetProperty("totalMoney","font","free_f0_fnt"),
					new eui.SetProperty("totalMoney","text","x14.06"),
					new eui.SetProperty("totalMoney","anchorOffsetX",0),
					new eui.SetProperty("totalMoney","anchorOffsetY",0),
					new eui.SetProperty("totalMoney","y",416.67),
					new eui.SetProperty("totalMoney","horizontalCenter",-0.4700000000000273),
					new eui.SetProperty("overFree","y",778),
					new eui.SetProperty("overFree","scaleX",1),
					new eui.SetProperty("overFree","scaleY",1),
					new eui.SetProperty("overFree","width",958.94),
					new eui.SetProperty("overFree","height",666.97),
					new eui.SetProperty("overFree","horizontalCenter",0),
					new eui.SetProperty("overFree","visible",false),
					new eui.SetProperty("tipsGroup","width",750),
					new eui.SetProperty("tipsGroup","height",1334),
					new eui.SetProperty("tipsGroup","scaleX",0.58),
					new eui.SetProperty("tipsGroup","scaleY",0.5),
					new eui.SetProperty("tipsGroup","visible",false),
					new eui.SetProperty("","width",750),
					new eui.SetProperty("","height",1334)
				])
		];
	}
	var _proto = MainScenceUISkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "BG_png";
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollEnabled = false;
		t.top = 0;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.y = 0;
		t.elementsContent = [this.gameScence_i(),this.logo_group_i(),this.mcGroup_i(),this.tipGroup_i()];
		return t;
	};
	_proto.gameScence_i = function () {
		var t = new GameScence();
		this.gameScence = t;
		t.skinName = "GameScenceSkin";
		t.y = 140;
		return t;
	};
	_proto.logo_group_i = function () {
		var t = new eui.Group();
		this.logo_group = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.width = 1225;
		t.y = 0;
		t.elementsContent = [this.logo1_i(),this.logo2_i(),this.free_group_i()];
		return t;
	};
	_proto.logo1_i = function () {
		var t = new eui.Image();
		this.logo1 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "logo1_png";
		return t;
	};
	_proto.logo2_i = function () {
		var t = new eui.Image();
		this.logo2 = t;
		t.source = "freeslogo2_png";
		t.x = 371;
		t.y = -29;
		return t;
	};
	_proto.free_group_i = function () {
		var t = new eui.Group();
		this.free_group = t;
		t.elementsContent = [this._Image1_i(),this.free_fanbei_i(),this.free_Num_i(),this.free_money_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "free_fanbei_png";
		t.x = 42.99999999999997;
		t.y = 69.78;
		return t;
	};
	_proto.free_fanbei_i = function () {
		var t = new eui.Label();
		this.free_fanbei = t;
		t.text = "Label";
		t.x = 59;
		t.y = 19;
		return t;
	};
	_proto.free_Num_i = function () {
		var t = new eui.Label();
		this.free_Num = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.text = "X2";
		t.textAlign = "center";
		t.width = 106.52;
		t.x = 55.94;
		t.y = 45;
		return t;
	};
	_proto.free_money_i = function () {
		var t = new eui.Label();
		this.free_money = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.text = "X2";
		t.textAlign = "center";
		t.width = 106.52;
		t.x = 201.94;
		t.y = 34;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.source = "free_xuanzhuan_png";
		t.x = 222.41;
		t.y = 72;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.source = "free_dajiang_png";
		t.x = 917.7;
		t.y = 65.93;
		return t;
	};
	_proto.mcGroup_i = function () {
		var t = new eui.Group();
		this.mcGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.tipGroup_i = function () {
		var t = new eui.Group();
		this.tipGroup = t;
		t.anchorOffsetX = 285;
		t.anchorOffsetY = 105.5;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.rewardWin_i(),this.tipLabel_i()];
		return t;
	};
	_proto.rewardWin_i = function () {
		var t = new eui.Image();
		this.rewardWin = t;
		t.source = "five_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.tipLabel_i = function () {
		var t = new eui.Label();
		this.tipLabel = t;
		t.bold = true;
		t.height = 160;
		t.horizontalCenter = 0.5;
		t.size = 80;
		t.stroke = 1;
		t.strokeColor = 0x701313;
		t.text = "5个一样的";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -11.5;
		t.visible = false;
		return t;
	};
	_proto.setUI_i = function () {
		var t = new SetUI();
		this.setUI = t;
		t.left = 0;
		t.right = 0;
		t.skinName = "SetUISkin";
		return t;
	};
	_proto.freeGroup_i = function () {
		var t = new eui.Group();
		this.freeGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.height = 787;
		t.horizontalCenter = 0.5;
		t.scaleX = 0.58;
		t.scaleY = 0.58;
		t.verticalCenter = -123.5;
		t.elementsContent = [this.bg1_i(),this.freeLoge_i(),this.freeNumGroup_i(),this.beiKe_0_i(),this.beiKe_x0_i(),this.beiKe_1_i(),this.beiKe_x1_i(),this.beiKe_2_i(),this.beiKe_x2_i(),this.beiKe_3_i(),this.beiKe_x3_i(),this.beiKe_4_i(),this.beiKe_x4_i()];
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "freeBG_png";
		t.top = 0;
		return t;
	};
	_proto.freeLoge_i = function () {
		var t = new eui.Image();
		this.freeLoge = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "freeTxt_png";
		t.y = 123.8;
		return t;
	};
	_proto.freeNumGroup_i = function () {
		var t = new eui.Group();
		this.freeNumGroup = t;
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 290;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.rotateNum_i(),this.fanbeiNum_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		this._Image4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "fanbei_png";
		t.x = 234;
		t.y = 30;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		this._Image5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "rotation_png";
		t.x = 48.49;
		t.y = 30;
		return t;
	};
	_proto.rotateNum_i = function () {
		var t = new eui.Label();
		this.rotateNum = t;
		t.text = "Label";
		t.x = 83;
		t.y = 67;
		return t;
	};
	_proto.fanbeiNum_i = function () {
		var t = new eui.Label();
		this.fanbeiNum = t;
		t.text = "Label";
		t.x = 300.58;
		t.y = 46.51;
		return t;
	};
	_proto.beiKe_0_i = function () {
		var t = new eui.Image();
		this.beiKe_0 = t;
		t.source = "with_pearl_01_png";
		t.x = 150.12;
		t.y = 160;
		return t;
	};
	_proto.beiKe_x0_i = function () {
		var t = new eui.Image();
		this.beiKe_x0 = t;
		t.source = "pearl_text5_png";
		t.x = 237.7;
		t.y = 224;
		return t;
	};
	_proto.beiKe_1_i = function () {
		var t = new eui.Image();
		this.beiKe_1 = t;
		t.source = "with_pearl_01_png";
		t.x = 497.79;
		t.y = 135.16;
		return t;
	};
	_proto.beiKe_x1_i = function () {
		var t = new eui.Image();
		this.beiKe_x1 = t;
		t.source = "pearl_text7_png";
		t.x = 247.7;
		t.y = 234;
		return t;
	};
	_proto.beiKe_2_i = function () {
		var t = new eui.Image();
		this.beiKe_2 = t;
		t.source = "with_pearl_01_png";
		t.x = 860.01;
		t.y = 133.06;
		return t;
	};
	_proto.beiKe_x2_i = function () {
		var t = new eui.Image();
		this.beiKe_x2 = t;
		t.source = "pearl_text7_png";
		t.x = 636.85;
		t.y = 304;
		return t;
	};
	_proto.beiKe_3_i = function () {
		var t = new eui.Image();
		this.beiKe_3 = t;
		t.source = "with_pearl_01_png";
		t.x = 256.12;
		t.y = 291;
		return t;
	};
	_proto.beiKe_x3_i = function () {
		var t = new eui.Image();
		this.beiKe_x3 = t;
		t.source = "pearl_text10_png";
		t.x = 355.85;
		t.y = 464;
		return t;
	};
	_proto.beiKe_4_i = function () {
		var t = new eui.Image();
		this.beiKe_4 = t;
		t.source = "with_pearl_01_png";
		t.x = 667.12;
		t.y = 284;
		return t;
	};
	_proto.beiKe_x4_i = function () {
		var t = new eui.Image();
		this.beiKe_x4 = t;
		t.source = "pearl_text10_png";
		t.x = 365.85;
		t.y = 474;
		return t;
	};
	_proto.tipsGroup_i = function () {
		var t = new eui.Group();
		this.tipsGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image6_i(),this.pickFree_i(),this.overFree_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		this._Image6 = t;
		t.scaleX = 0.85;
		t.scaleY = 0.85;
		t.source = "freeKuang_png";
		t.y = 92;
		return t;
	};
	_proto.pickFree_i = function () {
		var t = new eui.Group();
		this.pickFree = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 546.97;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 822.73;
		t.x = 258;
		t.y = 101;
		t.elementsContent = [this.pickFreeBtn_i(),this._Image7_i(),this.freeNum_i(),this.beiNum_i()];
		return t;
	};
	_proto.pickFreeBtn_i = function () {
		var t = new MouseButton();
		this.pickFreeBtn = t;
		t.label = "Button";
		t.x = 350;
		t.y = 411;
		t.skinName = MainScenceUISkin$Skin22;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		this._Image7 = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "freeTextTop_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.freeNum_i = function () {
		var t = new eui.Label();
		this.freeNum = t;
		t.text = "Label";
		t.x = 248;
		t.y = 179;
		return t;
	};
	_proto.beiNum_i = function () {
		var t = new eui.Label();
		this.beiNum = t;
		t.text = "Label";
		t.x = 258;
		t.y = 189;
		return t;
	};
	_proto.overFree_i = function () {
		var t = new eui.Group();
		this.overFree = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 546.97;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 822.73;
		t.x = 258;
		t.y = 101;
		t.elementsContent = [this.overFreeBtn_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.gameMoney_i(),this.gongNengMoney_i(),this.totalMoney_i()];
		return t;
	};
	_proto.overFreeBtn_i = function () {
		var t = new MouseButton();
		this.overFreeBtn = t;
		t.label = "";
		t.skinName = MainScenceUISkin$Skin23;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		this._Image8 = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "allmoney_png";
		t.x = 298.29;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		this._Image9 = t;
		t.source = "gameMoney_png";
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		this._Image10 = t;
		t.source = "gongnengMoney_png";
		return t;
	};
	_proto.gameMoney_i = function () {
		var t = new eui.BitmapLabel();
		this.gameMoney = t;
		return t;
	};
	_proto.gongNengMoney_i = function () {
		var t = new eui.BitmapLabel();
		this.gongNengMoney = t;
		return t;
	};
	_proto.totalMoney_i = function () {
		var t = new eui.BitmapLabel();
		this.totalMoney = t;
		t.y = 307;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		this._Image11 = t;
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.source = "OBJL_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return MainScenceUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/SetBarSkin.exml'] = window.SetBarSkin = (function (_super) {
	__extends(SetBarSkin, _super);
	function SetBarSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Group1_i()];
	}
	var _proto = SetBarSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return SetBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/TipBanerSkin.exml'] = window.TipBanerSkin = (function (_super) {
	__extends(TipBanerSkin, _super);
	var TipBanerSkin$Skin24 = 	(function (_super) {
		__extends(TipBanerSkin$Skin24, _super);
		function TipBanerSkin$Skin24() {
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
						new eui.SetProperty("_Image1","source","auto_right_normal_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","auto_right_disable_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","auto_right_hover_png")
					])
			];
		}
		var _proto = TipBanerSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "auto_right_normal_png";
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
		return TipBanerSkin$Skin24;
	})(eui.Skin);

	var TipBanerSkin$Skin25 = 	(function (_super) {
		__extends(TipBanerSkin$Skin25, _super);
		function TipBanerSkin$Skin25() {
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
						new eui.SetProperty("_Image1","source","auto_left_normal_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","auto_left_disable_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","auto_left_hover_png")
					])
			];
		}
		var _proto = TipBanerSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "auto_left_normal_png";
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
		return TipBanerSkin$Skin25;
	})(eui.Skin);

	function TipBanerSkin() {
		_super.call(this);
		this.skinParts = ["KGroup","subBtn","addBtn"];
		
		this.elementsContent = [this.KGroup_i(),this.subBtn_i(),this.addBtn_i()];
		this.states = [
			new eui.State ("ver",
				[
					new eui.SetProperty("KGroup","verticalCenter",0),
					new eui.SetProperty("KGroup","anchorOffsetX",0),
					new eui.SetProperty("KGroup","horizontalCenter",0),
					new eui.SetProperty("KGroup","width",719),
					new eui.SetProperty("KGroup","height",98),
					new eui.SetProperty("subBtn","rotation",180),
					new eui.SetProperty("subBtn","verticalCenter",0),
					new eui.SetProperty("subBtn","left",0),
					new eui.SetProperty("subBtn","scaleX",1.25),
					new eui.SetProperty("subBtn","scaleY",1.25),
					new eui.SetProperty("addBtn","rotation",-180),
					new eui.SetProperty("addBtn","verticalCenter",0),
					new eui.SetProperty("addBtn","x",819),
					new eui.SetProperty("addBtn","scaleX",1.25),
					new eui.SetProperty("addBtn","scaleY",1.25),
					new eui.SetProperty("","height",120),
					new eui.SetProperty("","width",848)
				])
			,
			new eui.State ("hor",
				[
					new eui.SetProperty("KGroup","left",0),
					new eui.SetProperty("KGroup","right",0),
					new eui.SetProperty("KGroup","verticalCenter",0),
					new eui.SetProperty("KGroup","width",225),
					new eui.SetProperty("KGroup","height",392),
					new eui.SetProperty("subBtn","rotation",90),
					new eui.SetProperty("subBtn","horizontalCenter",0.5),
					new eui.SetProperty("subBtn","bottom",0),
					new eui.SetProperty("addBtn","rotation",90),
					new eui.SetProperty("addBtn","horizontalCenter",0),
					new eui.SetProperty("addBtn","top",0),
					new eui.SetProperty("","width",225),
					new eui.SetProperty("","height",470)
				])
		];
	}
	var _proto = TipBanerSkin.prototype;

	_proto.KGroup_i = function () {
		var t = new eui.Group();
		this.KGroup = t;
		t.anchorOffsetY = 0;
		t.scrollEnabled = true;
		return t;
	};
	_proto.subBtn_i = function () {
		var t = new MouseButton();
		this.subBtn = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 30;
		t.label = "";
		t.skinName = TipBanerSkin$Skin24;
		return t;
	};
	_proto.addBtn_i = function () {
		var t = new MouseButton();
		this.addBtn = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 30;
		t.label = "";
		t.skinName = TipBanerSkin$Skin25;
		return t;
	};
	return TipBanerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/TipItemSkin.exml'] = window.TipItemSkin = (function (_super) {
	__extends(TipItemSkin, _super);
	function TipItemSkin() {
		_super.call(this);
		this.skinParts = ["bgImg","windesLabel","winRewardLabel","icons","bgGroup"];
		
		this.elementsContent = [this.bgGroup_i()];
	}
	var _proto = TipItemSkin.prototype;

	_proto.bgGroup_i = function () {
		var t = new eui.Group();
		this.bgGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bgImg_i(),this.windesLabel_i(),this.winRewardLabel_i(),this.icons_i()];
		return t;
	};
	_proto.bgImg_i = function () {
		var t = new eui.Image();
		this.bgImg = t;
		t.left = 24;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "show_bg_M1_png";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.windesLabel_i = function () {
		var t = new eui.Label();
		this.windesLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 40;
		t.horizontalCenter = 41.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 36;
		t.text = "X7   赢";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 122;
		t.y = 12;
		return t;
	};
	_proto.winRewardLabel_i = function () {
		var t = new eui.Label();
		this.winRewardLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 30;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 20;
		t.text = "￥56";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 122;
		t.x = 93;
		t.y = 50;
		return t;
	};
	_proto.icons_i = function () {
		var t = new eui.Image();
		this.icons = t;
		t.anchorOffsetX = 49;
		t.anchorOffsetY = 49;
		t.left = 0;
		t.source = "show_icon_M1_png";
		t.verticalCenter = 0;
		return t;
	};
	return TipItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/net/netcloseSkin.exml'] = window.netcloseSkin = (function (_super) {
	__extends(netcloseSkin, _super);
	function netcloseSkin() {
		_super.call(this);
		this.skinParts = ["desLabel","okRect"];
		
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("hor",
				[
					new eui.SetProperty("_Group1","horizontalCenter",0),
					new eui.SetProperty("_Group1","verticalCenter",0),
					new eui.SetProperty("","width",750),
					new eui.SetProperty("","height",1334)
				])
			,
			new eui.State ("ver",
				[
					new eui.SetProperty("_Group1","horizontalCenter",0),
					new eui.SetProperty("_Group1","verticalCenter",0),
					new eui.SetProperty("","width",1334),
					new eui.SetProperty("","height",750)
				])
		];
	}
	var _proto = netcloseSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.9;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.desLabel_i(),this._Label1_i(),this.okRect_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 296;
		t.source = "quickstart_bg_png";
		t.width = 600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.desLabel_i = function () {
		var t = new eui.Label();
		this.desLabel = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "连接断开，正在重新连接";
		t.verticalCenter = -38;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 1;
		t.size = 34;
		t.text = "确定";
		t.y = 220.15;
		return t;
	};
	_proto.okRect_i = function () {
		var t = new eui.Rect();
		this.okRect = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.82;
		t.width = 550;
		t.x = 26;
		t.y = 201.71;
		return t;
	};
	return netcloseSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/net/NetSkin.exml'] = window.NetSkin = (function (_super) {
	__extends(NetSkin, _super);
	function NetSkin() {
		_super.call(this);
		this.skinParts = ["netingIcon"];
		
		this.elementsContent = [this._Rect1_i(),this.netingIcon_i()];
		this.states = [
			new eui.State ("hor",
				[
					new eui.SetProperty("","width",750),
					new eui.SetProperty("","height",1334)
				])
			,
			new eui.State ("ver",
				[
					new eui.SetProperty("","width",1334),
					new eui.SetProperty("","height",750)
				])
		];
	}
	var _proto = NetSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
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
		t.horizontalCenter = 0;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/StipSkin.exml'] = window.StipSkin = (function (_super) {
	__extends(StipSkin, _super);
	function StipSkin() {
		_super.call(this);
		this.skinParts = ["desLabel","okRect","cancleRect"];
		
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("hor",
				[
					new eui.SetProperty("_Group1","horizontalCenter",0),
					new eui.SetProperty("_Group1","verticalCenter",0),
					new eui.SetProperty("","width",750),
					new eui.SetProperty("","height",1334)
				])
			,
			new eui.State ("ver",
				[
					new eui.SetProperty("_Group1","horizontalCenter",0),
					new eui.SetProperty("_Group1","verticalCenter",0),
					new eui.SetProperty("","width",1334),
					new eui.SetProperty("","height",750)
				])
		];
	}
	var _proto = StipSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this.desLabel_i(),this._Label1_i(),this._Label2_i(),this.okRect_i(),this.cancleRect_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "BG@2x_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.desLabel_i = function () {
		var t = new eui.Label();
		this.desLabel = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 34;
		t.text = "您想在游戏中打开声音吗？";
		t.verticalCenter = -38;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft JhengHei";
		t.size = 34;
		t.text = "是";
		t.x = 125;
		t.y = 237;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft JhengHei";
		t.size = 34;
		t.text = "否";
		t.x = 432;
		t.y = 237;
		return t;
	};
	_proto.okRect_i = function () {
		var t = new eui.Rect();
		this.okRect = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.width = 296;
		t.x = 3;
		t.y = 217;
		return t;
	};
	_proto.cancleRect_i = function () {
		var t = new eui.Rect();
		this.cancleRect = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.width = 296;
		t.x = 302;
		t.y = 218;
		return t;
	};
	return StipSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/tips/AuduTipSkin.exml'] = window.AuduTipSkin = (function (_super) {
	__extends(AuduTipSkin, _super);
	function AuduTipSkin() {
		_super.call(this);
		this.skinParts = ["checkButton","okRect","cancleRect","mainGroup"];
		
		this.elementsContent = [this._Rect1_i(),this.mainGroup_i()];
		this.states = [
			new eui.State ("hor",
				[
					new eui.SetProperty("_Image1","source","BG@2x1_png"),
					new eui.SetProperty("_Label1","horizontalCenter",0),
					new eui.SetProperty("_Label2","x",298),
					new eui.SetProperty("_Label3","x",153),
					new eui.SetProperty("_Label4","x",484),
					new eui.SetProperty("checkButton","x",191),
					new eui.SetProperty("okRect","x",25),
					new eui.SetProperty("cancleRect","x",352),
					new eui.SetProperty("mainGroup","horizontalCenter",0),
					new eui.SetProperty("mainGroup","verticalCenter",0),
					new eui.SetProperty("","width",750),
					new eui.SetProperty("","height",1334)
				])
			,
			new eui.State ("ver",
				[
					new eui.SetProperty("mainGroup","horizontalCenter",0),
					new eui.SetProperty("mainGroup","verticalCenter",0),
					new eui.SetProperty("","width",1334),
					new eui.SetProperty("","height",750)
				])
		];
	}
	var _proto = AuduTipSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.checkButton_i(),this.okRect_i(),this.cancleRect_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "BG@2x_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "sound_icon@2x_png";
		t.x = 9;
		t.y = 11;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.size = 34;
		t.text = "您想在游戏中打开声音吗？";
		t.x = 96;
		t.y = 84;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.size = 26;
		t.text = "不再为我显示";
		t.x = 270;
		t.y = 166;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.size = 34;
		t.text = "是";
		t.x = 125;
		t.y = 237;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		this._Label4 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.size = 34;
		t.text = "否";
		t.x = 432;
		t.y = 237;
		return t;
	};
	_proto.checkButton_i = function () {
		var t = new CheckButton();
		this.checkButton = t;
		t.skinName = "CheckSkin";
		t.x = 163;
		t.y = 148;
		return t;
	};
	_proto.okRect_i = function () {
		var t = new eui.Rect();
		this.okRect = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.width = 296;
		t.x = 3;
		t.y = 217;
		return t;
	};
	_proto.cancleRect_i = function () {
		var t = new eui.Rect();
		this.cancleRect = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.width = 296;
		t.x = 302;
		t.y = 218;
		return t;
	};
	return AuduTipSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/tips/GameItemSkin.exml'] = window.GameItemSkin = (function (_super) {
	__extends(GameItemSkin, _super);
	function GameItemSkin() {
		_super.call(this);
		this.skinParts = ["icons","nameLabel"];
		
		this.height = 200;
		this.elementsContent = [this.icons_i(),this.nameLabel_i()];
		this.states = [
			new eui.State ("hor",
				[
				])
			,
			new eui.State ("ver",
				[
					new eui.SetProperty("icons","scaleX",1.2),
					new eui.SetProperty("icons","scaleY",1.2),
					new eui.SetProperty("nameLabel","size",26),
					new eui.SetProperty("","width",173),
					new eui.SetProperty("","height",235)
				])
		];
	}
	var _proto = GameItemSkin.prototype;

	_proto.icons_i = function () {
		var t = new eui.Image();
		this.icons = t;
		t.height = 144;
		t.source = "lobby8_png";
		t.width = 144;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 50;
		t.left = 0;
		t.right = 0;
		t.size = 20;
		t.text = "Tiger Claw";
		t.textAlign = "center";
		t.verticalAlign = "top";
		t.width = 144;
		return t;
	};
	return GameItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/tips/HelpSkin.exml'] = window.HelpSkin = (function (_super) {
	__extends(HelpSkin, _super);
	var HelpSkin$Skin26 = 	(function (_super) {
		__extends(HelpSkin$Skin26, _super);
		function HelpSkin$Skin26() {
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
						new eui.SetProperty("_Image1","source","back_down_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_disable_png")
					])
			];
		}
		var _proto = HelpSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_up_png";
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
		return HelpSkin$Skin26;
	})(eui.Skin);

	function HelpSkin() {
		_super.call(this);
		this.skinParts = ["icons","backBtn","timeLabel"];
		
		this.elementsContent = [this._Scroller1_i(),this.backBtn_i(),this._Group2_i()];
		this._Image1_i();
		
		this._Image2_i();
		
		this._Image3_i();
		
		this._BasicLayout1_i();
		
		this._BasicLayout2_i();
		
		this.states = [
			new eui.State ("hor",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.AddItems("_Image3","_Group1",1,""),
					new eui.SetProperty("_Image1","left",0),
					new eui.SetProperty("_Image1","right",0),
					new eui.SetProperty("_Image1","top",0),
					new eui.SetProperty("_Image1","bottom",0),
					new eui.SetProperty("_Image1","source","BG2_png"),
					new eui.SetProperty("icons","horizontalCenter",0.5),
					new eui.SetProperty("icons","y",0),
					new eui.SetProperty("icons","source","helpBg2_png"),
					new eui.SetProperty("_Group1","layout",this._BasicLayout2),
					new eui.SetProperty("_Scroller1","bounces",true),
					new eui.SetProperty("_Scroller1","scrollPolicyV","on"),
					new eui.SetProperty("backBtn","left",0),
					new eui.SetProperty("backBtn","top",32),
					new eui.SetProperty("","width",1334),
					new eui.SetProperty("","height",750)
				])
			,
			new eui.State ("ver",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.AddItems("_Image2","_Group1",0,""),
					new eui.SetProperty("_Image1","top",0),
					new eui.SetProperty("_Image1","left",0),
					new eui.SetProperty("_Image1","right",0),
					new eui.SetProperty("_Image1","bottom",0),
					new eui.SetProperty("icons","horizontalCenter",0),
					new eui.SetProperty("icons","y",30.3),
					new eui.SetProperty("icons","source","help_s_png"),
					new eui.SetProperty("_Group1","layout",this._BasicLayout1),
					new eui.SetProperty("_Scroller1","bounces",true),
					new eui.SetProperty("_Scroller1","scrollPolicyV","on"),
					new eui.SetProperty("backBtn","left",0),
					new eui.SetProperty("backBtn","top",40),
					new eui.SetProperty("","width",750),
					new eui.SetProperty("","height",1334)
				])
		];
	}
	var _proto = HelpSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "BG1_png";
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		this._Scroller1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.elementsContent = [this.icons_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = 0;
		t.source = "help_s_bg_png";
		t.y = 30.3;
		return t;
	};
	_proto.icons_i = function () {
		var t = new eui.Image();
		this.icons = t;
		t.source = "help_png";
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		this._Image3 = t;
		t.horizontalCenter = 0;
		t.source = "help2_png";
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.skinName = HelpSkin$Skin26;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 10;
		t.x = 850;
		t.elementsContent = [this._Rect1_i(),this.timeLabel_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.bottom = -5;
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.left = -5;
		t.right = -5;
		t.top = -5;
		return t;
	};
	_proto.timeLabel_i = function () {
		var t = new eui.Label();
		this.timeLabel = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		this._BasicLayout1 = t;
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		this._BasicLayout2 = t;
		return t;
	};
	return HelpSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/tips/RadioCheckSkin.exml'] = window.RadioCheckSkin = (function (_super) {
	__extends(RadioCheckSkin, _super);
	function RadioCheckSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("labelDisplay","textColor",0xacacac)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("labelDisplay","textColor",0xacacac)
				])
			,
			new eui.State ("upAndSelected",
				[
				])
			,
			new eui.State ("downAndSelected",
				[
				])
		];
	}
	var _proto = RadioCheckSkin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "Label";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return RadioCheckSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/tips/MoreGameSkin.exml'] = window.MoreGameSkin = (function (_super) {
	__extends(MoreGameSkin, _super);
	var MoreGameSkin$Skin27 = 	(function (_super) {
		__extends(MoreGameSkin$Skin27, _super);
		function MoreGameSkin$Skin27() {
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
						new eui.SetProperty("_Image1","source","more_bg2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = MoreGameSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "more_bg2_png";
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
		return MoreGameSkin$Skin27;
	})(eui.Skin);

	function MoreGameSkin() {
		_super.call(this);
		this.skinParts = ["bgRect","lists","scrolls","r0","r1","hbackBtn"];
		
		this.elementsContent = [this.bgRect_i(),this._Group4_i(),this.hbackBtn_i()];
		this._HorizontalLayout1_i();
		
		this._TileLayout1_i();
		
		this.states = [
			new eui.State ("ver",
				[
					new eui.SetProperty("_Label1","horizontalCenter",0),
					new eui.SetProperty("_Label1","top",14),
					new eui.SetProperty("lists","layout",this._TileLayout1),
					new eui.SetProperty("lists","x",0),
					new eui.SetProperty("lists","y",0),
					new eui.SetProperty("scrolls","y",112.88),
					new eui.SetProperty("scrolls","anchorOffsetY",0),
					new eui.SetProperty("scrolls","left",0),
					new eui.SetProperty("scrolls","right",0),
					new eui.SetProperty("scrolls","height",707.22),
					new eui.SetProperty("scrolls","scrollPolicyV","on"),
					new eui.SetProperty("_Group3","left",0),
					new eui.SetProperty("_Group3","right",0),
					new eui.SetProperty("_Group3","y",51.27),
					new eui.SetProperty("_Group4","anchorOffsetY",0),
					new eui.SetProperty("_Group4","left",0),
					new eui.SetProperty("_Group4","right",0),
					new eui.SetProperty("_Group4","height",823.24),
					new eui.SetProperty("hbackBtn","horizontalCenter",0),
					new eui.SetProperty("hbackBtn","y",823.24),
					new eui.SetProperty("","width",750),
					new eui.SetProperty("","height",1334)
				])
			,
			new eui.State ("hor",
				[
					new eui.SetProperty("_Image1","top",0),
					new eui.SetProperty("_Label1","horizontalCenter",0),
					new eui.SetProperty("_Label1","top",14),
					new eui.SetProperty("lists","layout",this._HorizontalLayout1),
					new eui.SetProperty("lists","x",0),
					new eui.SetProperty("lists","verticalCenter",0),
					new eui.SetProperty("scrolls","y",112),
					new eui.SetProperty("scrolls","anchorOffsetY",0),
					new eui.SetProperty("scrolls","height",265),
					new eui.SetProperty("scrolls","scrollPolicyH","on"),
					new eui.SetProperty("scrolls","left",0),
					new eui.SetProperty("scrolls","right",0),
					new eui.SetProperty("_Group3","left",0),
					new eui.SetProperty("_Group3","right",0),
					new eui.SetProperty("_Group3","y",48.67),
					new eui.SetProperty("_Group4","height",380),
					new eui.SetProperty("hbackBtn","horizontalCenter",0),
					new eui.SetProperty("hbackBtn","y",377.35),
					new eui.SetProperty("","width",1334),
					new eui.SetProperty("","height",750)
				])
		];
	}
	var _proto = MoreGameSkin.prototype;

	_proto.bgRect_i = function () {
		var t = new eui.Rect();
		this.bgRect = t;
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		this._Group4 = t;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.scrolls_i(),this._Group3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "more_bg_png";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "游戏";
		t.textAlign = "center";
		t.top = 14;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.scrolls_i = function () {
		var t = new eui.Scroller();
		this.scrolls = t;
		t.bounces = true;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.lists_i()];
		return t;
	};
	_proto.lists_i = function () {
		var t = new eui.List();
		this.lists = t;
		t.itemRendererSkinName = GameItemSkin;
		t.scaleX = 1;
		t.scaleY = 1;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this._Image2_i(),this._Group2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(20,7,125,48);
		t.source = "more_bg1_png";
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.left = 0;
		t.right = 0;
		t.verticalCenter = 0;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this.r0_i(),this.r1_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "justify";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.r0_i = function () {
		var t = new eui.RadioButton();
		this.r0 = t;
		t.label = "新游戏";
		t.skinName = "RadioCheckSkin";
		t.x = 33;
		t.y = 16;
		return t;
	};
	_proto.r1_i = function () {
		var t = new eui.RadioButton();
		this.r1 = t;
		t.label = "热门游戏";
		t.skinName = "RadioCheckSkin";
		t.x = 159;
		t.y = 29;
		return t;
	};
	_proto.hbackBtn_i = function () {
		var t = new eui.Button();
		this.hbackBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 794.97;
		t.skinName = MoreGameSkin$Skin27;
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		this._HorizontalLayout1 = t;
		t.gap = 10;
		t.horizontalAlign = "left";
		t.paddingLeft = 0;
		t.paddingRight = 0;
		t.paddingTop = 40;
		t.verticalAlign = "top";
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		this._TileLayout1 = t;
		t.columnAlign = "left";
		t.horizontalAlign = "left";
		t.horizontalGap = 65;
		t.orientation = "rows";
		t.paddingTop = 25;
		t.requestedColumnCount = 3;
		t.rowAlign = "top";
		t.verticalAlign = "top";
		t.verticalGap = 0;
		return t;
	};
	return MoreGameSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/tips/QukTipSkin.exml'] = window.QukTipSkin = (function (_super) {
	__extends(QukTipSkin, _super);
	var QukTipSkin$Skin28 = 	(function (_super) {
		__extends(QukTipSkin$Skin28, _super);
		function QukTipSkin$Skin28() {
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
						new eui.SetProperty("_Image1","source","quickstart_close_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = QukTipSkin$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "quickstart_close_png";
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
		return QukTipSkin$Skin28;
	})(eui.Skin);

	function QukTipSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","qukLabel"];
		
		this.elementsContent = [this._Rect1_i(),this._Group1_i()];
		this.states = [
			new eui.State ("hor",
				[
					new eui.SetProperty("_Group1","horizontalCenter",0),
					new eui.SetProperty("_Group1","verticalCenter",0),
					new eui.SetProperty("","width",750),
					new eui.SetProperty("","height",1334)
				])
			,
			new eui.State ("ver",
				[
					new eui.SetProperty("_Label1","size",29),
					new eui.SetProperty("_Label1","horizontalCenter",0.5),
					new eui.SetProperty("_Label1","y",120.24),
					new eui.SetProperty("_Label2","horizontalCenter",0.5),
					new eui.SetProperty("_Label2","y",226.76),
					new eui.SetProperty("_Group1","horizontalCenter",0),
					new eui.SetProperty("_Group1","verticalCenter",0),
					new eui.SetProperty("_Group1","scaleX",1.1),
					new eui.SetProperty("_Group1","scaleY",1.1),
					new eui.SetProperty("","width",1334),
					new eui.SetProperty("","height",750)
				])
		];
	}
	var _proto = QukTipSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.8;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.closeBtn_i(),this._Label1_i(),this._Label2_i(),this.qukLabel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "quickstart_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Button();
		this.closeBtn = t;
		t.label = "";
		t.x = 596;
		t.y = 25;
		t.skinName = QukTipSkin$Skin28;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0.5;
		t.size = 28;
		t.text = "看来您喜欢更快速的游戏。\n您想启用快速模式吗?";
		t.textAlign = "center";
		t.y = 123;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0.5;
		t.size = 24;
		t.text = "您可以随时在\"投注选项\"菜单中将其禁用";
		t.textAlign = "center";
		t.textColor = 0xa9a9a9;
		t.y = 224;
		return t;
	};
	_proto.qukLabel_i = function () {
		var t = new eui.Label();
		this.qukLabel = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft JhengHei";
		t.height = 82;
		t.horizontalCenter = 0.5;
		t.size = 32;
		t.text = "启用快速模式";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 650;
		t.y = 284.27;
		return t;
	};
	return QukTipSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/tips/RewardSkin.exml'] = window.RewardSkin = (function (_super) {
	__extends(RewardSkin, _super);
	var RewardSkin$Skin29 = 	(function (_super) {
		__extends(RewardSkin$Skin29, _super);
		function RewardSkin$Skin29() {
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
						new eui.SetProperty("_Image1","source","back_down_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","back_disable_png")
					])
			];
		}
		var _proto = RewardSkin$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "back_up_png";
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
		return RewardSkin$Skin29;
	})(eui.Skin);

	function RewardSkin() {
		_super.call(this);
		this.skinParts = ["icons","sr","backBtn","timeLabel"];
		
		this.elementsContent = [this.sr_i(),this.backBtn_i(),this._Group2_i()];
		this._Image1_i();
		
		this.states = [
			new eui.State ("hor",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("_Image1","left",0),
					new eui.SetProperty("_Image1","right",0),
					new eui.SetProperty("_Image1","top",0),
					new eui.SetProperty("_Image1","bottom",0),
					new eui.SetProperty("_Image1","source","BG2_png"),
					new eui.SetProperty("icons","horizontalCenter",0),
					new eui.SetProperty("sr","bounces",true),
					new eui.SetProperty("sr","scrollPolicyV","on"),
					new eui.SetProperty("backBtn","left",0),
					new eui.SetProperty("backBtn","top",32),
					new eui.SetProperty("","width",1334),
					new eui.SetProperty("","height",750)
				])
			,
			new eui.State ("ver",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("_Image1","top",0),
					new eui.SetProperty("_Image1","left",0),
					new eui.SetProperty("_Image1","right",0),
					new eui.SetProperty("_Image1","bottom",0),
					new eui.SetProperty("icons","horizontalCenter",-0.5),
					new eui.SetProperty("icons","scaleX",0.6),
					new eui.SetProperty("icons","scaleY",0.6),
					new eui.SetProperty("icons","source","reward_png"),
					new eui.SetProperty("icons","y",13.68),
					new eui.SetProperty("sr","bounces",true),
					new eui.SetProperty("sr","scrollPolicyV","on"),
					new eui.SetProperty("backBtn","left",0),
					new eui.SetProperty("backBtn","top",40),
					new eui.SetProperty("","width",750),
					new eui.SetProperty("","height",1334)
				])
		];
	}
	var _proto = RewardSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "BG1_png";
		return t;
	};
	_proto.sr_i = function () {
		var t = new eui.Scroller();
		this.sr = t;
		t.bottom = 0;
		t.bounces = false;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.icons_i()];
		return t;
	};
	_proto.icons_i = function () {
		var t = new eui.Image();
		this.icons = t;
		t.horizontalCenter = 0;
		t.source = "reward_png";
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.skinName = RewardSkin$Skin29;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.top = 10;
		t.x = 850;
		t.elementsContent = [this._Rect1_i(),this.timeLabel_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.5;
		t.bottom = -5;
		t.ellipseHeight = 40;
		t.ellipseWidth = 40;
		t.left = -5;
		t.right = -5;
		t.top = -5;
		return t;
	};
	_proto.timeLabel_i = function () {
		var t = new eui.Label();
		this.timeLabel = t;
		t.fontFamily = "Arial";
		t.horizontalCenter = 0;
		t.size = 22;
		t.text = "";
		t.verticalCenter = 0;
		return t;
	};
	return RewardSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/HSlider1Skin.exml'] = window.HSlider1Skin = (function (_super) {
	__extends(HSlider1Skin, _super);
	function HSlider1Skin() {
		_super.call(this);
		this.skinParts = ["track","tsbar","masks","thumb"];
		
		this.height = 50;
		this.width = 230;
		this.elementsContent = [this._Image1_i(),this.track_i(),this.tsbar_i(),this.masks_i(),this._Image2_i(),this.thumb_i()];
	}
	var _proto = HSlider1Skin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_set20_png";
		t.top = 0;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bg_set7_png";
		t.width = 219;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.tsbar_i = function () {
		var t = new eui.Image();
		this.tsbar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "bg_set7_png";
		t.touchEnabled = false;
		t.width = 219;
		t.x = 5;
		t.y = 4;
		return t;
	};
	_proto.masks_i = function () {
		var t = new eui.Rect();
		this.masks = t;
		t.bottom = 0;
		t.ellipseHeight = 5;
		t.ellipseWidth = 5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "bg_set9_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Rect();
		this.thumb = t;
		t.alpha = 0;
		t.bottom = 0;
		t.fillColor = 0x000000;
		t.top = 0;
		t.width = 5;
		t.x = 2;
		return t;
	};
	return HSlider1Skin;
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