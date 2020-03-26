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
		this.skinParts = ["track1","track","tsbar","thumb"];
		
		this.height = 67;
		this.minHeight = 8;
		this.minWidth = 20;
		this.width = 279;
		this.elementsContent = [this._Image1_i(),this.track1_i(),this.track_i(),this.tsbar_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "popupBox_png";
		t.y = -5;
		return t;
	};
	_proto.track1_i = function () {
		var t = new eui.Image();
		this.track1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sliderPanel_png";
		t.verticalCenter = -1;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sliderPanel_png";
		t.verticalCenter = -1;
		t.width = 270;
		return t;
	};
	_proto.tsbar_i = function () {
		var t = new eui.Image();
		this.tsbar = t;
		t.source = "sliderPanelG_png";
		t.touchEnabled = false;
		t.verticalCenter = -1;
		t.width = 232;
		t.x = 24;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "sliderBarB_png";
		t.verticalCenter = -0.5;
		t.x = 237;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MyScrollBarSkin.exml'] = window.MyScrollBarSkin = (function (_super) {
	__extends(MyScrollBarSkin, _super);
	var MyScrollBarSkin$Skin1 = 	(function (_super) {
		__extends(MyScrollBarSkin$Skin1, _super);
		function MyScrollBarSkin$Skin1() {
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
						new eui.SetProperty("_Image1","source","scrollbar_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","scrollbar_hover_png")
					])
			];
		}
		var _proto = MyScrollBarSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "scrollbar_png";
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
		return MyScrollBarSkin$Skin1;
	})(eui.Skin);

	var MyScrollBarSkin$Skin2 = 	(function (_super) {
		__extends(MyScrollBarSkin$Skin2, _super);
		function MyScrollBarSkin$Skin2() {
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
						new eui.SetProperty("_Image1","source","scroll_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","scroll_hover_png")
					])
			];
		}
		var _proto = MyScrollBarSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "scroll_png";
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
		return MyScrollBarSkin$Skin2;
	})(eui.Skin);

	var MyScrollBarSkin$Skin3 = 	(function (_super) {
		__extends(MyScrollBarSkin$Skin3, _super);
		function MyScrollBarSkin$Skin3() {
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
						new eui.SetProperty("_Image1","source","scroll_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","scroll_hover_png")
					])
			];
		}
		var _proto = MyScrollBarSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "scroll_png";
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
		return MyScrollBarSkin$Skin3;
	})(eui.Skin);

	function MyScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb","addBtn","subtn"];
		
		this.elementsContent = [this.track_i(),this.thumb_i(),this.addBtn_i(),this.subtn_i()];
	}
	var _proto = MyScrollBarSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.bottom = 17;
		t.left = 0;
		t.right = 0;
		t.source = "scrollbar_bg_png";
		t.top = 17;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new MouseButton();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 38;
		t.skinName = MyScrollBarSkin$Skin1;
		return t;
	};
	_proto.addBtn_i = function () {
		var t = new MouseButton();
		this.addBtn = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.label = "";
		t.scaleY = -1;
		t.skinName = MyScrollBarSkin$Skin2;
		return t;
	};
	_proto.subtn_i = function () {
		var t = new MouseButton();
		this.subtn = t;
		t.anchorOffsetX = 7.5;
		t.anchorOffsetY = 8.5;
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 0;
		t.skinName = MyScrollBarSkin$Skin3;
		return t;
	};
	return MyScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MyScrollSkin.exml'] = window.MyScrollSkin = (function (_super) {
	__extends(MyScrollSkin, _super);
	function MyScrollSkin() {
		_super.call(this);
		this.skinParts = [];
		
	}
	var _proto = MyScrollSkin.prototype;

	return MyScrollSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/NomalLoadingUISkin.exml'] = window.NomalLoadingUISkin = (function (_super) {
	__extends(NomalLoadingUISkin, _super);
	function NomalLoadingUISkin() {
		_super.call(this);
		this.skinParts = ["yuan","txt","barbg","bar","masks","lgroup"];
		
		this.height = 907;
		this.width = 1152;
		this.yuan_i();
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.txt_i(),this.lgroup_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.mcImage"],[0],this._TweenItem1,"target");
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
	_proto.lgroup_i = function () {
		var t = new eui.Group();
		this.lgroup = t;
		t.horizontalCenter = 0;
		t.scrollEnabled = false;
		t.verticalCenter = 178.5;
		t.width = 520;
		t.elementsContent = [this.barbg_i(),this.bar_i(),this.masks_i()];
		return t;
	};
	_proto.barbg_i = function () {
		var t = new eui.Image();
		this.barbg = t;
		t.scale9Grid = new egret.Rectangle(21,3,130,2);
		t.source = "loading_2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bar_i = function () {
		var t = new eui.Image();
		this.bar = t;
		t.source = "loading_1_png";
		t.x = 0;
		return t;
	};
	_proto.masks_i = function () {
		var t = new eui.Image();
		this.masks = t;
		t.horizontalCenter = 0;
		t.source = "loading_1_png";
		t.verticalCenter = 0;
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
		t.scaleX = 1;
		t.scaleY = 1;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/AutoItemSkin.exml'] = window.AutoItemSkin = (function (_super) {
	__extends(AutoItemSkin, _super);
	var AutoItemSkin$Skin4 = 	(function (_super) {
		__extends(AutoItemSkin$Skin4, _super);
		function AutoItemSkin$Skin4() {
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
						new eui.SetProperty("_Image1","source","stop_autoplay_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","stop_autoplay_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","stop_autoplay_hovered_png")
					])
			];
		}
		var _proto = AutoItemSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "stop_autoplay_png";
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
		return AutoItemSkin$Skin4;
	})(eui.Skin);

	var AutoItemSkin$Skin5 = 	(function (_super) {
		__extends(AutoItemSkin$Skin5, _super);
		function AutoItemSkin$Skin5() {
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
						new eui.SetProperty("_Image1","source","99_spins_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","99_spins_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","99_spins_hovered_png")
					])
			];
		}
		var _proto = AutoItemSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "99_spins_png";
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
		return AutoItemSkin$Skin5;
	})(eui.Skin);

	var AutoItemSkin$Skin6 = 	(function (_super) {
		__extends(AutoItemSkin$Skin6, _super);
		function AutoItemSkin$Skin6() {
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
						new eui.SetProperty("_Image1","source","50_spins_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","50_spins_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","50_spins_hovered_png")
					])
			];
		}
		var _proto = AutoItemSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "50_spins_png";
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
		return AutoItemSkin$Skin6;
	})(eui.Skin);

	var AutoItemSkin$Skin7 = 	(function (_super) {
		__extends(AutoItemSkin$Skin7, _super);
		function AutoItemSkin$Skin7() {
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
						new eui.SetProperty("_Image1","source","25_spins_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","25_spins_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","25_spins_hovered_png")
					])
			];
		}
		var _proto = AutoItemSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "25_spins_png";
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
		return AutoItemSkin$Skin7;
	})(eui.Skin);

	var AutoItemSkin$Skin8 = 	(function (_super) {
		__extends(AutoItemSkin$Skin8, _super);
		function AutoItemSkin$Skin8() {
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
						new eui.SetProperty("_Image1","source","10_spins_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","10_spins_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","10_spins_hovered_png")
					])
			];
		}
		var _proto = AutoItemSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "10_spins_png";
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
		return AutoItemSkin$Skin8;
	})(eui.Skin);

	var AutoItemSkin$Skin9 = 	(function (_super) {
		__extends(AutoItemSkin$Skin9, _super);
		function AutoItemSkin$Skin9() {
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
						new eui.SetProperty("_Image1","source","autoplay_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","autoplay_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","autoplay_hovered_png")
					])
			];
		}
		var _proto = AutoItemSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "autoplay_png";
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
		return AutoItemSkin$Skin9;
	})(eui.Skin);

	function AutoItemSkin() {
		_super.call(this);
		this.skinParts = ["autoCountLabel","sopAutoBtn","autoStopGroup","btn0","btn1","btn2","btn3","sGroup","sMainGroup","autoBtn"];
		
		this.elementsContent = [this.autoStopGroup_i(),this.sMainGroup_i(),this.autoBtn_i()];
	}
	var _proto = AutoItemSkin.prototype;

	_proto.autoStopGroup_i = function () {
		var t = new eui.Group();
		this.autoStopGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 292;
		t.elementsContent = [this._Image1_i(),this.autoCountLabel_i(),this.sopAutoBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "auto_spins_png";
		t.x = 0;
		t.y = -6;
		return t;
	};
	_proto.autoCountLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.autoCountLabel = t;
		t.font = "f0_fnt";
		t.horizontalCenter = 0;
		t.text = "99";
		t.y = 43;
		return t;
	};
	_proto.sopAutoBtn_i = function () {
		var t = new MouseButton();
		this.sopAutoBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 78;
		t.skinName = AutoItemSkin$Skin4;
		return t;
	};
	_proto.sMainGroup_i = function () {
		var t = new eui.Group();
		this.sMainGroup = t;
		t.height = 317;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.touchChildren = true;
		t.touchThrough = false;
		t.width = 112;
		t.y = 0;
		t.elementsContent = [this.sGroup_i()];
		return t;
	};
	_proto.sGroup_i = function () {
		var t = new eui.Group();
		this.sGroup = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 317;
		t.elementsContent = [this._Image2_i(),this.btn0_i(),this.btn1_i(),this.btn2_i(),this.btn3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "autoplay_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new MouseButton();
		this.btn0 = t;
		t.label = "";
		t.x = 17;
		t.y = 15;
		t.skinName = AutoItemSkin$Skin5;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new MouseButton();
		this.btn1 = t;
		t.label = "";
		t.x = 17;
		t.y = 94;
		t.skinName = AutoItemSkin$Skin6;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new MouseButton();
		this.btn2 = t;
		t.label = "";
		t.x = 17;
		t.y = 172;
		t.skinName = AutoItemSkin$Skin7;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new MouseButton();
		this.btn3 = t;
		t.label = "";
		t.x = 17;
		t.y = 252;
		t.skinName = AutoItemSkin$Skin8;
		return t;
	};
	_proto.autoBtn_i = function () {
		var t = new MouseButton();
		this.autoBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 336.73;
		t.skinName = AutoItemSkin$Skin9;
		return t;
	};
	return AutoItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/btn/TogleButtonSkin.exml'] = window.TogleButtonSkin = (function (_super) {
	__extends(TogleButtonSkin, _super);
	function TogleButtonSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [];
		this._Image1_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","",0,"")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("_Image1","source","check0_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("_Image1","source","check1_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("_Image1","source","check1_png")
				])
			,
			new eui.State ("rollOver",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("_Image1","source","check0_png")
				])
			,
			new eui.State ("rollOverAndSelected",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("_Image1","source","check1_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","bg_set19_png")
				])
		];
	}
	var _proto = TogleButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "check0_png";
		t.verticalCenter = 0;
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
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.skinName = "TogleButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tLabel_i = function () {
		var t = new eui.Label();
		this.tLabel = t;
		t.bottom = -1;
		t.fontFamily = "'Asap',sans-serif";
		t.lineSpacing = 2;
		t.size = 16;
		t.text = "跳过介绍视频";
		t.textAlign = "left";
		t.textColor = 0xffffff;
		t.top = 1;
		t.touchEnabled = false;
		t.verticalAlign = "middle";
		t.x = 32;
		return t;
	};
	return DesButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/btn/MouseButton3Skin.exml'] = window.MouseButton3Skin = (function (_super) {
	__extends(MouseButton3Skin, _super);
	function MouseButton3Skin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this.labelDisplay_i()];
		this.states = [
			new eui.State ("down",
				[
					new eui.SetProperty("labelDisplay","textColor",0x6ccc8c)
				])
			,
			new eui.State ("rollOver",
				[
					new eui.SetProperty("labelDisplay","textColor",0x6ccc8c)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("labelDisplay","textColor",0xffffff)
				])
			,
			new eui.State ("up",
				[
					new eui.SetProperty("labelDisplay","textColor",0xffffff)
				])
		];
	}
	var _proto = MouseButton3Skin.prototype;

	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "'Asap',sans-serif";
		t.horizontalCenter = 0;
		t.size = 20;
		t.strokeColor = 0xefefef;
		t.text = "333";
		t.textAlign = "left";
		t.textColor = 0xefefef;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 130;
		return t;
	};
	return MouseButton3Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/btn/MusicBtnSkin.exml'] = window.MusicBtnSkin = (function (_super) {
	__extends(MusicBtnSkin, _super);
	function MusicBtnSkin() {
		_super.call(this);
		this.skinParts = ["volueImg"];
		
		this.currentState = "down";
		this.elementsContent = [this.volueImg_i()];
		this._Image1_i();
		
		this.states = [
			new eui.State ("up",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("_Image1","source","bg_setm_close_an__png")
				])
			,
			new eui.State ("down",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("_Image1","source","bg_setm_close_an__png")
				])
			,
			new eui.State ("rollOver",
				[
					new eui.AddItems("_Image1","",0,""),
					new eui.SetProperty("_Image1","source","bg_setm_close_liang_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("volueImg","horizontalCenter",0),
					new eui.SetProperty("volueImg","verticalCenter",0)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("volueImg","horizontalCenter",0),
					new eui.SetProperty("volueImg","verticalCenter",0)
				])
			,
			new eui.State ("rollOverAndSelected",
				[
					new eui.SetProperty("_Image1","source",""),
					new eui.SetProperty("volueImg","horizontalCenter",0),
					new eui.SetProperty("volueImg","verticalCenter",0)
				])
		];
	}
	var _proto = MusicBtnSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "bg_setm_open_an_png";
		t.touchEnabled = false;
		t.verticalCenter = 0;
		return t;
	};
	_proto.volueImg_i = function () {
		var t = new eui.Image();
		this.volueImg = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return MusicBtnSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/btn/TextButtonSkin.exml'] = window.TextButtonSkin = (function (_super) {
	__extends(TextButtonSkin, _super);
	function TextButtonSkin() {
		_super.call(this);
		this.skinParts = ["label0","label1"];
		
		this.elementsContent = [this.label0_i(),this.label1_i()];
	}
	var _proto = TextButtonSkin.prototype;

	_proto.label0_i = function () {
		var t = new eui.Label();
		this.label0 = t;
		t.bottom = 0;
		t.fontFamily = "'Asap',sans-serif";
		t.left = 0;
		t.right = 0;
		t.size = 16;
		t.text = "Label";
		t.textColor = 0xffffff;
		t.top = 0;
		t.x = 10;
		t.y = 10;
		return t;
	};
	_proto.label1_i = function () {
		var t = new eui.Label();
		this.label1 = t;
		t.bottom = 0;
		t.fontFamily = "'Asap',sans-serif";
		t.left = 0;
		t.right = 0;
		t.size = 16;
		t.text = "Label";
		t.textColor = 0x52c5ee;
		t.top = 0;
		return t;
	};
	return TextButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/CheckListSkin.exml'] = window.CheckListSkin = (function (_super) {
	__extends(CheckListSkin, _super);
	function CheckListSkin() {
		_super.call(this);
		this.skinParts = ["hisBtn","checkBtn","helpBtn","rewardBtn"];
		
		this.height = 170;
		this.width = 130;
		this.elementsContent = [this._Image1_i(),this.hisBtn_i(),this.checkBtn_i(),this.helpBtn_i(),this.rewardBtn_i()];
	}
	var _proto = CheckListSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "menuBox_BG_png";
		t.x = 0;
		t.y = 4;
		return t;
	};
	_proto.hisBtn_i = function () {
		var t = new MouseButton3();
		this.hisBtn = t;
		t.horizontalCenter = 0;
		t.label = "    历史纪录";
		t.skinName = "MouseButton3Skin";
		t.y = 25;
		return t;
	};
	_proto.checkBtn_i = function () {
		var t = new MouseButton3();
		this.checkBtn = t;
		t.horizontalCenter = 0;
		t.label = "    选项";
		t.skinName = "MouseButton3Skin";
		t.y = 61;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new MouseButton3();
		this.helpBtn = t;
		t.horizontalCenter = 0;
		t.label = "    帮助";
		t.skinName = "MouseButton3Skin";
		t.y = 97;
		return t;
	};
	_proto.rewardBtn_i = function () {
		var t = new MouseButton3();
		this.rewardBtn = t;
		t.horizontalCenter = 0;
		t.label = "    奖金表";
		t.skinName = "MouseButton3Skin";
		t.x = 10;
		t.y = 134;
		return t;
	};
	return CheckListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/GamePentSkin.exml'] = window.GamePentSkin = (function (_super) {
	__extends(GamePentSkin, _super);
	function GamePentSkin() {
		_super.call(this);
		this.skinParts = ["line1","line2","line3","line4","line5","line6","line7","line8","line9","gGroup","lineGroup","kuangGroup","gl1","gr1","gl2","gr2","gl3","gr3","gl4","gr4","gl5","gr5","gl6","gr6","gl7","gr7","gl8","gr8","gl9","gr9","tipGroup"];
		
		this.height = 603;
		this.width = 1200;
		this.elementsContent = [this.lineGroup_i(),this.kuangGroup_i(),this.tipGroup_i()];
	}
	var _proto = GamePentSkin.prototype;

	_proto.lineGroup_i = function () {
		var t = new eui.Group();
		this.lineGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.line1_i(),this.line2_i(),this.line3_i(),this.line4_i(),this.line5_i(),this.line6_i(),this.line7_i(),this.line8_i(),this.line9_i(),this.gGroup_i()];
		return t;
	};
	_proto.line1_i = function () {
		var t = new eui.Image();
		this.line1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_1_png";
		t.x = 164.17;
		t.y = 296.45;
		return t;
	};
	_proto.line2_i = function () {
		var t = new eui.Image();
		this.line2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_2_png";
		t.x = 164.17;
		t.y = 96.45;
		return t;
	};
	_proto.line3_i = function () {
		var t = new eui.Image();
		this.line3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_3_png";
		t.x = 165.69;
		t.y = 504.45;
		return t;
	};
	_proto.line4_i = function () {
		var t = new eui.Image();
		this.line4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_4_png";
		t.x = 163.69;
		t.y = 97.97;
		return t;
	};
	_proto.line5_i = function () {
		var t = new eui.Image();
		this.line5 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_5_png";
		t.x = 163.69;
		t.y = 94.93;
		return t;
	};
	_proto.line6_i = function () {
		var t = new eui.Image();
		this.line6 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_6_png";
		t.x = 163.69;
		t.y = 94.45;
		return t;
	};
	_proto.line7_i = function () {
		var t = new eui.Image();
		this.line7 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_7_png";
		t.x = 163.69;
		t.y = 289.73;
		return t;
	};
	_proto.line8_i = function () {
		var t = new eui.Image();
		this.line8 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_8_png";
		t.x = 163.69;
		t.y = 93.97;
		return t;
	};
	_proto.line9_i = function () {
		var t = new eui.Image();
		this.line9 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line_9_png";
		t.x = 163.69;
		t.y = 301.41;
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
		t.x = 0;
		t.y = 0;
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
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 56;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_1_png";
		t.y = -1.33;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_1_png";
		t.y = 198;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_1_png";
		t.y = 396.33;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 272.06;
		t.y = 0;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_1_png";
		t.y = -1.33;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_1_png";
		t.y = 198;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_1_png";
		t.y = 396.33;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 488.12;
		t.y = 0;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_4_png";
		t.y = -1.33;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_4_png";
		t.y = 198;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_1_png";
		t.y = 396.33;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 704.18;
		t.y = 0;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_4_png";
		t.y = -1.33;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_1_png";
		t.y = 198;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_4_png";
		t.y = 396.33;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 920.2400000000001;
		t.y = 0;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_1_png";
		t.y = -1.33;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_1_png";
		t.y = 198;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "box_1_png";
		t.y = 396.33;
		return t;
	};
	_proto.tipGroup_i = function () {
		var t = new eui.Group();
		this.tipGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.gl1_i(),this.gr1_i(),this.gl2_i(),this.gr2_i(),this.gl3_i(),this.gr3_i(),this.gl4_i(),this.gr4_i(),this.gl5_i(),this.gr5_i(),this.gl6_i(),this.gr6_i(),this.gl7_i(),this.gr7_i(),this.gl8_i(),this.gr8_i(),this.gl9_i(),this.gr9_i()];
		return t;
	};
	_proto.gl1_i = function () {
		var t = new eui.Group();
		this.gl1 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 275.95;
		t.elementsContent = [this._Image16_i(),this._BitmapLabel1_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.source = "sb_win1_png";
		return t;
	};
	_proto._BitmapLabel1_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = -4.5;
		t.text = "1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr1_i = function () {
		var t = new eui.Group();
		this.gr1 = t;
		t.right = 0;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 275.95;
		t.elementsContent = [this._Image17_i(),this._BitmapLabel2_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "sb_win1_png";
		t.x = 65;
		return t;
	};
	_proto._BitmapLabel2_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = 6.5;
		t.text = "1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl2_i = function () {
		var t = new eui.Group();
		this.gl2 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 144;
		t.elementsContent = [this._Image18_i(),this._BitmapLabel3_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.source = "sb_win2_png";
		return t;
	};
	_proto._BitmapLabel3_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = -4.5;
		t.text = "2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr2_i = function () {
		var t = new eui.Group();
		this.gr2 = t;
		t.right = 0;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 10;
		t.y = 144;
		t.elementsContent = [this._Image19_i(),this._BitmapLabel4_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "sb_win2_png";
		t.x = 65;
		return t;
	};
	_proto._BitmapLabel4_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = 6.5;
		t.text = "2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl3_i = function () {
		var t = new eui.Group();
		this.gl3 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 399.95;
		t.elementsContent = [this._Image20_i(),this._BitmapLabel5_i()];
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.source = "sb_win3_png";
		return t;
	};
	_proto._BitmapLabel5_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = -4.5;
		t.text = "3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr3_i = function () {
		var t = new eui.Group();
		this.gr3 = t;
		t.right = 0;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 10;
		t.y = 399.95;
		t.elementsContent = [this._Image21_i(),this._BitmapLabel6_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "sb_win3_png";
		t.x = 65;
		return t;
	};
	_proto._BitmapLabel6_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = 6.5;
		t.text = "3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl4_i = function () {
		var t = new eui.Group();
		this.gl4 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 4;
		t.elementsContent = [this._Image22_i(),this._BitmapLabel7_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.source = "sb_win4_png";
		return t;
	};
	_proto._BitmapLabel7_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = -4.5;
		t.text = "4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr4_i = function () {
		var t = new eui.Group();
		this.gr4 = t;
		t.right = 0;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 10;
		t.y = 4;
		t.elementsContent = [this._Image23_i(),this._BitmapLabel8_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "sb_win4_png";
		t.x = 65;
		return t;
	};
	_proto._BitmapLabel8_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = 6.5;
		t.text = "4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl5_i = function () {
		var t = new eui.Group();
		this.gl5 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 539.95;
		t.elementsContent = [this._Image24_i(),this._BitmapLabel9_i()];
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.source = "sb_win5_png";
		return t;
	};
	_proto._BitmapLabel9_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = -4.5;
		t.text = "5";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr5_i = function () {
		var t = new eui.Group();
		this.gr5 = t;
		t.right = 0;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 10;
		t.y = 539.95;
		t.elementsContent = [this._Image25_i(),this._BitmapLabel10_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "sb_win5_png";
		t.x = 65;
		return t;
	};
	_proto._BitmapLabel10_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = 7.5;
		t.text = "5";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl6_i = function () {
		var t = new eui.Group();
		this.gl6 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 72;
		t.elementsContent = [this._Image26_i(),this._BitmapLabel11_i()];
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.source = "sb_win6_png";
		return t;
	};
	_proto._BitmapLabel11_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = -4.5;
		t.text = "6";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr6_i = function () {
		var t = new eui.Group();
		this.gr6 = t;
		t.right = 0;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 10;
		t.y = 72;
		t.elementsContent = [this._Image27_i(),this._BitmapLabel12_i()];
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "sb_win6_png";
		t.x = 65;
		return t;
	};
	_proto._BitmapLabel12_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = 6.5;
		t.text = "6";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl7_i = function () {
		var t = new eui.Group();
		this.gl7 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 467.95;
		t.elementsContent = [this._Image28_i(),this._BitmapLabel13_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.source = "sb_win7_png";
		return t;
	};
	_proto._BitmapLabel13_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = -4.5;
		t.text = "7";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr7_i = function () {
		var t = new eui.Group();
		this.gr7 = t;
		t.right = 0;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 10;
		t.y = 467.95;
		t.elementsContent = [this._Image29_i(),this._BitmapLabel14_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "sb_win7_png";
		t.x = 65;
		return t;
	};
	_proto._BitmapLabel14_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = 6.5;
		t.text = "7";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl8_i = function () {
		var t = new eui.Group();
		this.gl8 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 216;
		t.elementsContent = [this._Image30_i(),this._BitmapLabel15_i()];
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.source = "sb_win8_png";
		return t;
	};
	_proto._BitmapLabel15_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = -4.5;
		t.text = "8";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr8_i = function () {
		var t = new eui.Group();
		this.gr8 = t;
		t.right = 0;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 10;
		t.y = 216;
		t.elementsContent = [this._Image31_i(),this._BitmapLabel16_i()];
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "sb_win8_png";
		t.x = 65;
		return t;
	};
	_proto._BitmapLabel16_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = 6.5;
		t.text = "8";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl9_i = function () {
		var t = new eui.Group();
		this.gl9 = t;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.y = 331.95;
		t.elementsContent = [this._Image32_i(),this._BitmapLabel17_i()];
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.source = "sb_win9_png";
		return t;
	};
	_proto._BitmapLabel17_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = -4.5;
		t.text = "9";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr9_i = function () {
		var t = new eui.Group();
		this.gr9 = t;
		t.right = 0;
		t.scaleX = 1.1;
		t.scaleY = 1.1;
		t.x = 10;
		t.y = 341.95;
		t.elementsContent = [this._Image33_i(),this._BitmapLabel18_i()];
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "sb_win9_png";
		t.x = 65;
		return t;
	};
	_proto._BitmapLabel18_i = function () {
		var t = new eui.BitmapLabel();
		t.font = "f1_fnt";
		t.horizontalCenter = 6.5;
		t.text = "9";
		t.verticalCenter = 0;
		return t;
	};
	return GamePentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/GameScenceSkin.exml'] = window.GameScenceSkin = (function (_super) {
	__extends(GameScenceSkin, _super);
	function GameScenceSkin() {
		_super.call(this);
		this.skinParts = ["reel0","reel1","reel2","reel3","reel4","pent"];
		
		this.width = 1200;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.pent_i()];
	}
	var _proto = GameScenceSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "reel_png";
		t.verticalCenter = 0;
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
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.reel1_i = function () {
		var t = new Reel();
		this.reel1 = t;
		t.skinName = "ReelSkin";
		t.x = 213.45;
		t.y = 2.71;
		return t;
	};
	_proto.reel2_i = function () {
		var t = new Reel();
		this.reel2 = t;
		t.skinName = "ReelSkin";
		t.x = 433.86;
		t.y = 1.36;
		return t;
	};
	_proto.reel3_i = function () {
		var t = new Reel();
		this.reel3 = t;
		t.skinName = "ReelSkin";
		t.x = 648.86;
		t.y = 1.35;
		return t;
	};
	_proto.reel4_i = function () {
		var t = new Reel();
		this.reel4 = t;
		t.skinName = "ReelSkin";
		t.x = 862.86;
		t.y = 0.02;
		return t;
	};
	_proto.pent_i = function () {
		var t = new GamePentCompoment();
		this.pent = t;
		t.skinName = "GamePentSkin";
		return t;
	};
	return GameScenceSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/HelpDesSkin.exml'] = window.HelpDesSkin = (function (_super) {
	__extends(HelpDesSkin, _super);
	var HelpDesSkin$Skin10 = 	(function (_super) {
		__extends(HelpDesSkin$Skin10, _super);
		function HelpDesSkin$Skin10() {
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
						new eui.SetProperty("_Image1","source","cloesx_hover_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","cloesx_hover_png")
					])
			];
		}
		var _proto = HelpDesSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cloesx_png";
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
		return HelpDesSkin$Skin10;
	})(eui.Skin);

	function HelpDesSkin() {
		_super.call(this);
		this.skinParts = ["bg","contentBg","scroll","myScrollBar","closeBtn","mainGroup"];
		
		this.height = 990;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.mainGroup_i()];
	}
	var _proto = HelpDesSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.3;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 932;
		t.horizontalCenter = 0;
		t.source = "BG_2_png";
		t.verticalCenter = -2;
		t.visible = false;
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.height = 990;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1920;
		t.elementsContent = [this.scroll_i(),this.myScrollBar_i(),this.closeBtn_i()];
		return t;
	};
	_proto.scroll_i = function () {
		var t = new SScroll();
		this.scroll = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.skinName = "MyScrollSkin";
		t.top = 0;
		t.viewport = this._Group2_i();
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this._Group1_i(),this.contentBg_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 0;
		t.left = 200;
		t.right = 200;
		t.visible = false;
		t.width = 0;
		t.y = 118.19;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Label16_i(),this._Label17_i(),this._Label18_i(),this._Label19_i(),this._Label20_i(),this._Label21_i(),this._Label22_i(),this._Label23_i(),this._Label24_i(),this._Label25_i(),this._Label26_i(),this._Label27_i(),this._Label28_i(),this._Label29_i(),this._Label30_i(),this._Label31_i(),this._Label32_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -100;
		t.left = -130;
		t.right = -130;
		t.scale9Grid = new egret.Rectangle(122,85,734,516);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "help_bg_png";
		t.top = -100;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "公路之王™";
		t.y = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.right = 0;
		t.size = 34;
		t.text = "5转轴、9赔付线老虎机";
		t.y = 62.01206896551724;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.right = 0;
		t.text = "公路之王™ 的目标是通过旋转转轴来获得赢奖符号组合。";
		t.y = 118.89959247648902;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.right = 0;
		t.size = 34;
		t.text = "游戏玩法";
		t.y = 170.76711598746084;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.right = 0;
		t.text = "只有活跃的赔付线才能赢得奖金。";
		t.y = 226.93463949843263;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.right = 0;
		t.text = "每轮游戏的总赌注 = 线注 × 活跃赔付线数。";
		t.y = 279.343591580833;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 80;
		t.right = 0;
		t.text = "单击'–'或'+'选择线注。";
		t.y = 331.7425436632334;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.fontFamily = "Microsoft YaHei";
		t.left = 80;
		t.right = 0;
		t.text = "单击'−'或'+'在面板上选择赔付线。";
		t.y = 384.2414957456338;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0;
		t.text = "点击快速模式按钮来打开或关闭快速模式。打开快速模式时，一些获胜动画和声音将被跳过，转轴也会旋转得更快";
		t.y = 436.6104478280342;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0;
		t.text = "单击旋转会以当前选定的线注来旋转转轴。在转轴旋转时，旋转按钮会变成停止。单击停止可结束旋转动画并立即显示旋转结果。";
		t.y = 528.4993999104345;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.18000000000006366;
		t.text = "按空格键会以当前选定的总赌注来旋转转轴。";
		t.y = 620.4183519928348;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0;
		t.text = "您也可以使用'自动游戏'功能来旋转转轴。将光标悬停在自动游戏按钮上以显示选项列表。";
		t.y = 672.9173040752352;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0;
		t.text = "通过信息按钮或菜单可访问赔付表。";
		t.y = 734.99;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0;
		t.size = 34;
		t.text = "关于赔付";
		t.y = 817.7068965517241;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 80;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "赔付线奖金 = 线注 × 赔付表上相应的翻倍乘数。";
		t.y = 926.4310344827585;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 80;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "SCATTER奖金 = 总赌注 × 赔付表上相应的翻倍乘数。";
		t.y = 978.6531034482757;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "奖金将根据赔付表计算，您可以通过'菜单'查看赔付表。";
		t.y = 874.0489655172413;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "在此游戏中，符号在赔付线上从左到右和从右到左排列都能赢奖。赢奖组合必须从最左侧或最右侧的转轴开始，而且符号必须连续排列。如果多条活跃的赔付线出现赢奖组合，则奖金会相加。如果一条赔付线有两个赢奖组合（一个从最左侧的转轴开始，一个从最右侧的转轴开始），两个组合都能赢得奖金。一条赔付线上5个相同符号的赢奖组合只赔付一次。";
		t.y = 1030.275172413793;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "SCATTER符号不受这些规则的限制。以下有更多关于SCATTER符号的信息。";
		t.y = 1243.1672413793103;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "当旋转赢奖时，奖金窗口将弹出来并显示累积奖金和每条赔付线的奖金。";
		t.y = 1295.6993103448274;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0;
		t.size = 34;
		t.text = "WILD符号";
		t.y = 1347.1413793103447;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "WILD符号可以代替任何其他符号来构成最佳赢奖组合。WILD符号可将其所在组合的奖金加倍，但不可累加（即2个WILD符号的奖金乘数仍是2，而不是4）。WILD符号仅出现在转轴2、3和4上。";
		t.y = 1403.6334482758618;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.left = 0;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.size = 34;
		t.text = "SCATTER符号";
		t.y = 1535.775517241379;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "如果转轴上有2到5个SCATTER符号，则赢得的彩金将乘以总赌注并添加到赔付线奖金中。符号需要从最左侧或最右侧的转轴开始连续排列。它们无需在任何赔付线上";
		t.y = 1592.2675862068963;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "如果转轴上有2到5个SCATTER符号，则赢得的彩金将乘以总赌注并添加到赔付线奖金中。符号需要从最左侧或最右侧的转轴开始连续排列。它们无需在任何赔付线上";
		t.y = 1684.1296551724135;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "网络断开说明：如果在游戏期间您与互联网的连接断开，请重新登录回到娱乐场。您会直接自动回到游戏中，并可以从中断处继续游戏。如果您重新打开游戏而没有重新登录娱乐场，则游戏将从头开始。在两种情况下，您之前的赢奖都会得到赔付。";
		t.y = 1777.3017241379307;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "要查看之前游戏的结果或了解最近游戏的更多详情，可单击菜单中的'历史记录'按钮。使用常用的用户名和密码登录来查看之前在桌面版和移动版玩游戏的结果。";
		t.y = 1909.5237931034478;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "故障说明：出现故障则所有赔付和游戏无效。";
		t.y = 2001.385862068965;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "未处理赌注说明：放置的赌注未处理在90天后失效。";
		t.y = 2053.757931034482;
		return t;
	};
	_proto._Label30_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0.10999999999989996;
		t.text = "理论玩家回报率(RTP)为97.06%。";
		t.y = 2106.13;
		return t;
	};
	_proto._Label31_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0;
		t.text = "Build: 19.5.13.55       ";
		t.textAlign = "right";
		t.y = 2151.58;
		return t;
	};
	_proto._Label32_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.left = 40;
		t.lineSpacing = 10;
		t.multiline = true;
		t.right = 0;
		t.text = "Date: 2019-07-19       ";
		t.textAlign = "right";
		t.y = 2194;
		return t;
	};
	_proto.contentBg_i = function () {
		var t = new eui.Image();
		this.contentBg = t;
		t.horizontalCenter = 0;
		t.source = "helpdes_png";
		return t;
	};
	_proto.myScrollBar_i = function () {
		var t = new MyScrollBar();
		this.myScrollBar = t;
		t.bottom = 0;
		t.right = 0;
		t.skinName = "MyScrollBarSkin";
		t.top = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MouseButton();
		this.closeBtn = t;
		t.label = "";
		t.right = 20;
		t.top = 20;
		t.skinName = HelpDesSkin$Skin10;
		return t;
	};
	return HelpDesSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/HelpSkin.exml'] = window.HelpSkin = (function (_super) {
	__extends(HelpSkin, _super);
	var HelpSkin$Skin11 = 	(function (_super) {
		__extends(HelpSkin$Skin11, _super);
		function HelpSkin$Skin11() {
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
						new eui.SetProperty("_Image1","source","cloesx_hover_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","cloesx_hover_png")
					])
			];
		}
		var _proto = HelpSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "cloesx_png";
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
		return HelpSkin$Skin11;
	})(eui.Skin);

	function HelpSkin() {
		_super.call(this);
		this.skinParts = ["bg","contentBg","scroll","myScrollBar","closeBtn","mainGroup"];
		
		this.height = 990;
		this.width = 1920;
		this.elementsContent = [this._Rect1_i(),this.bg_i(),this.mainGroup_i()];
	}
	var _proto = HelpSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0.3;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 935;
		t.horizontalCenter = 0;
		t.source = "BG_2_png";
		t.verticalCenter = -2;
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.height = 930;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1600;
		t.elementsContent = [this.scroll_i(),this.myScrollBar_i(),this.closeBtn_i()];
		return t;
	};
	_proto.scroll_i = function () {
		var t = new SScroll();
		this.scroll = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.skinName = "MyScrollSkin";
		t.top = 0;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.elementsContent = [this.contentBg_i()];
		return t;
	};
	_proto.contentBg_i = function () {
		var t = new eui.Image();
		this.contentBg = t;
		t.horizontalCenter = 0;
		t.source = "peifu_png";
		t.top = 0;
		return t;
	};
	_proto.myScrollBar_i = function () {
		var t = new MyScrollBar();
		this.myScrollBar = t;
		t.bottom = 0;
		t.right = 0;
		t.skinName = "MyScrollBarSkin";
		t.top = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MouseButton();
		this.closeBtn = t;
		t.label = "";
		t.right = 25;
		t.top = 20;
		t.skinName = HelpSkin$Skin11;
		return t;
	};
	return HelpSkin;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/SetBarSkin.exml'] = window.SetBarSkin = (function (_super) {
	__extends(SetBarSkin, _super);
	var SetBarSkin$Skin12 = 	(function (_super) {
		__extends(SetBarSkin$Skin12, _super);
		function SetBarSkin$Skin12() {
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
						new eui.SetProperty("_Image1","source","bg_sets_an_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","bg_sets_liang_png")
					])
			];
		}
		var _proto = SetBarSkin$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bg_sets_an_png";
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
		return SetBarSkin$Skin12;
	})(eui.Skin);

	function SetBarSkin() {
		_super.call(this);
		this.skinParts = ["volueSlider","checkList","setBtn","musicCheckBox","setgroup"];
		
		this.elementsContent = [this._Group1_i(),this.setgroup_i()];
	}
	var _proto = SetBarSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 170;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.touchEnabled = false;
		t.width = 313;
		t.y = 28;
		t.elementsContent = [this.volueSlider_i(),this.checkList_i()];
		return t;
	};
	_proto.volueSlider_i = function () {
		var t = new MyHslider();
		this.volueSlider = t;
		t.alpha = 0;
		t.horizontalCenter = 8;
		t.skinName = "skins.HSliderSkin";
		t.x = 31;
		t.y = -1;
		return t;
	};
	_proto.checkList_i = function () {
		var t = new CheckList();
		this.checkList = t;
		t.alpha = 0;
		t.skinName = "CheckListSkin";
		t.x = 167;
		t.y = 0;
		return t;
	};
	_proto.setgroup_i = function () {
		var t = new eui.Group();
		this.setgroup = t;
		t.height = 28;
		t.right = 29;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.elementsContent = [this.setBtn_i(),this.musicCheckBox_i(),this._Rect1_i(),this._Rect2_i()];
		return t;
	};
	_proto.setBtn_i = function () {
		var t = new MouseButton();
		this.setBtn = t;
		t.label = "";
		t.verticalCenter = 0.5;
		t.x = 0;
		t.skinName = SetBarSkin$Skin12;
		return t;
	};
	_proto.musicCheckBox_i = function () {
		var t = new MusicBtn();
		this.musicCheckBox = t;
		t.label = "CheckBox";
		t.skinName = "MusicBtnSkin";
		t.verticalCenter = 0;
		t.x = 31.95;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.alpha = 0;
		t.bottom = 0;
		t.top = 0;
		t.width = 10;
		t.x = 26.66;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.alpha = 0;
		t.anchorOffsetY = 0;
		t.height = 6;
		t.left = -2;
		t.right = -5;
		t.y = 23.69;
		return t;
	};
	return SetBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/TopListSkin.exml'] = window.TopListSkin = (function (_super) {
	__extends(TopListSkin, _super);
	function TopListSkin() {
		_super.call(this);
		this.skinParts = ["contentGroup","leftBtn","rightBtn"];
		
		this.elementsContent = [this.contentGroup_i(),this._Image1_i(),this._Image2_i(),this.leftBtn_i(),this.rightBtn_i()];
	}
	var _proto = TopListSkin.prototype;

	_proto.contentGroup_i = function () {
		var t = new eui.Group();
		this.contentGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 60.5;
		t.left = -4;
		t.source = "moregame_shadow_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 60.5;
		t.right = -4;
		t.scaleX = -1;
		t.source = "moregame_shadow_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.leftBtn_i = function () {
		var t = new eui.Image();
		this.leftBtn = t;
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 22;
		t.left = 8;
		t.source = "left_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.rightBtn_i = function () {
		var t = new eui.Image();
		this.rightBtn = t;
		t.anchorOffsetX = 10;
		t.anchorOffsetY = 22;
		t.right = 8;
		t.scaleX = -1;
		t.source = "left_png";
		t.verticalCenter = 0;
		return t;
	};
	return TopListSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/MainScenceUISkin.exml'] = window.MainScenceUISkin = (function (_super) {
	__extends(MainScenceUISkin, _super);
	var MainScenceUISkin$Skin13 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin13, _super);
		function MainScenceUISkin$Skin13() {
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
						new eui.SetProperty("_Image1","source","info_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","info_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","info_hovered_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "info_png";
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
		return MainScenceUISkin$Skin13;
	})(eui.Skin);

	var MainScenceUISkin$Skin14 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin14, _super);
		function MainScenceUISkin$Skin14() {
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
						new eui.SetProperty("_Image1","source","down_down_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","down_disable_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","down_hover_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "down_nromal_png";
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
		return MainScenceUISkin$Skin14;
	})(eui.Skin);

	var MainScenceUISkin$Skin15 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin15, _super);
		function MainScenceUISkin$Skin15() {
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
						new eui.SetProperty("_Image1","source","up_down_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","up_disable_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","up_hover_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "up_nromal_png";
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
		return MainScenceUISkin$Skin15;
	})(eui.Skin);

	var MainScenceUISkin$Skin16 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin16, _super);
		function MainScenceUISkin$Skin16() {
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
						new eui.SetProperty("_Image1","source","down_down_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","down_disable_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","down_hover_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "down_nromal_png";
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
		return MainScenceUISkin$Skin16;
	})(eui.Skin);

	var MainScenceUISkin$Skin17 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin17, _super);
		function MainScenceUISkin$Skin17() {
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
						new eui.SetProperty("_Image1","source","up_down_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","up_disable_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","up_hover_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "up_nromal_png";
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
		return MainScenceUISkin$Skin17;
	})(eui.Skin);

	var MainScenceUISkin$Skin18 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin18, _super);
		function MainScenceUISkin$Skin18() {
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
						new eui.SetProperty("_Image1","source","turbo_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","turbo_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","turbo_hovered_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "turbo_png";
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
		return MainScenceUISkin$Skin18;
	})(eui.Skin);

	var MainScenceUISkin$Skin19 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin19, _super);
		function MainScenceUISkin$Skin19() {
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
						new eui.SetProperty("_Image1","source","turbo_on_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","turbo_on_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","turbo_on_hovered_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "turbo_on_png";
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
		return MainScenceUISkin$Skin19;
	})(eui.Skin);

	var MainScenceUISkin$Skin20 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin20, _super);
		function MainScenceUISkin$Skin20() {
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
						new eui.SetProperty("_Image1","source","spin_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","spin_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","spin_hovered_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "spin_png";
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
		return MainScenceUISkin$Skin20;
	})(eui.Skin);

	var MainScenceUISkin$Skin21 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin21, _super);
		function MainScenceUISkin$Skin21() {
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
						new eui.SetProperty("_Image1","source","stop_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","stop_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","stop_hovered_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "stop_png";
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
		return MainScenceUISkin$Skin21;
	})(eui.Skin);

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
						new eui.SetProperty("_Image1","source","desktop_button_hover_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","desktop_button_hover_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "desktop_button_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "'Asap',sans-serif";
			t.horizontalCenter = 0;
			t.size = 14;
			t.verticalCenter = 1;
			return t;
		};
		return MainScenceUISkin$Skin22;
	})(eui.Skin);

	function MainScenceUISkin() {
		_super.call(this);
		this.skinParts = ["bg","gameScence","touchRect","lineLabel","betLabel","allBetLabel","infoBtn","lineSubBtn","lineAddBtn","betSubBtn","betAddBtn","speedOffBtn","speedOnBtn","startBtn","stopBtn","autoItem","rewardLabel","rewardGroup","mcGroup","bigRewardLabel","bigRewardGroup","aGroup","mainGroup","tGameBtn","setBar","t0","t1","t2","t3","t4","textGroup","topList","topListGroup","topMask","topGroup","timeLabel","balanceLabel","moneyBtn","bottomMask","bottomGroup"];
		
		this.height = 990;
		this.width = 1920;
		this.elementsContent = [this.bg_i(),this.mainGroup_i(),this.topGroup_i(),this.bottomGroup_i(),this._Image14_i()];
	}
	var _proto = MainScenceUISkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "BG_1x_png";
		t.verticalCenter = -1;
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.height = 990;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1266;
		t.elementsContent = [this.gameScence_i(),this._Group1_i(),this.touchRect_i(),this._Group5_i(),this.aGroup_i()];
		return t;
	};
	_proto.gameScence_i = function () {
		var t = new GameScence();
		this.gameScence = t;
		t.horizontalCenter = -1.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "GameScenceSkin";
		t.verticalCenter = 8.5;
		t.x = 32;
		t.y = 202;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = -8;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 84;
		t.y = 60;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 22.5;
		t.source = "logo1_png";
		t.y = 36;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "leftTruck_png";
		t.x = -2;
		t.y = 12;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "rightTruck_png";
		t.x = 832;
		t.y = 0;
		return t;
	};
	_proto.touchRect_i = function () {
		var t = new eui.Rect();
		this.touchRect = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 578;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1060;
		t.x = 100.99999999999994;
		t.y = 216;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 137;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = -11;
		t.y = 794.0000000000001;
		t.elementsContent = [this._Image4_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.infoBtn_i(),this.lineSubBtn_i(),this.lineAddBtn_i(),this.betSubBtn_i(),this.betAddBtn_i(),this.speedOffBtn_i(),this.speedOnBtn_i(),this.startBtn_i(),this.stopBtn_i(),this.autoItem_i(),this.rewardGroup_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "btn_bottom_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 123.65;
		t.y = 19.67;
		t.elementsContent = [this._Image5_i(),this.lineLabel_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "lines_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.lineLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.lineLabel = t;
		t.font = "f0_fnt";
		t.horizontalCenter = -1.5;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "1";
		t.y = 35.99;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 286.34;
		t.y = 20.32;
		t.elementsContent = [this._Image6_i(),this.betLabel_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "line_bet_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.betLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.betLabel = t;
		t.font = "f2_fnt";
		t.horizontalCenter = 0;
		t.text = "x0.35";
		t.y = 36.01;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 452.57;
		t.y = 69.69;
		t.elementsContent = [this._Image7_i(),this.allBetLabel_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "total_bet_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.allBetLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.allBetLabel = t;
		t.font = "f2_fnt";
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.text = "x0.35";
		t.y = 29.96;
		return t;
	};
	_proto.infoBtn_i = function () {
		var t = new MouseButton();
		this.infoBtn = t;
		t.label = "";
		t.x = 24.48;
		t.y = 33.33;
		t.skinName = MainScenceUISkin$Skin13;
		return t;
	};
	_proto.lineSubBtn_i = function () {
		var t = new MouseButton();
		this.lineSubBtn = t;
		t.label = "";
		t.x = 138.47;
		t.y = 87.33;
		t.skinName = MainScenceUISkin$Skin14;
		return t;
	};
	_proto.lineAddBtn_i = function () {
		var t = new MouseButton();
		this.lineAddBtn = t;
		t.label = "";
		t.x = 213.8;
		t.y = 86.69;
		t.skinName = MainScenceUISkin$Skin15;
		return t;
	};
	_proto.betSubBtn_i = function () {
		var t = new MouseButton();
		this.betSubBtn = t;
		t.label = "";
		t.x = 299.81;
		t.y = 88;
		t.skinName = MainScenceUISkin$Skin16;
		return t;
	};
	_proto.betAddBtn_i = function () {
		var t = new MouseButton();
		this.betAddBtn = t;
		t.label = "";
		t.x = 376.66;
		t.y = 85.36;
		t.skinName = MainScenceUISkin$Skin17;
		return t;
	};
	_proto.speedOffBtn_i = function () {
		var t = new MouseButton();
		this.speedOffBtn = t;
		t.label = "";
		t.x = 932.21;
		t.y = 29.61;
		t.skinName = MainScenceUISkin$Skin18;
		return t;
	};
	_proto.speedOnBtn_i = function () {
		var t = new MouseButton();
		this.speedOnBtn = t;
		t.label = "";
		t.visible = false;
		t.x = 933.11;
		t.y = 31;
		t.skinName = MainScenceUISkin$Skin19;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new MouseButton();
		this.startBtn = t;
		t.label = "";
		t.x = 1062.84;
		t.y = 33.89;
		t.skinName = MainScenceUISkin$Skin20;
		return t;
	};
	_proto.stopBtn_i = function () {
		var t = new MouseButton();
		this.stopBtn = t;
		t.label = "";
		t.visible = false;
		t.x = 1062.24;
		t.y = 33.29;
		t.skinName = MainScenceUISkin$Skin21;
		return t;
	};
	_proto.autoItem_i = function () {
		var t = new AutoItem();
		this.autoItem = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "AutoItemSkin";
		t.x = 787.88;
		t.y = -303.03;
		return t;
	};
	_proto.rewardGroup_i = function () {
		var t = new eui.Group();
		this.rewardGroup = t;
		t.anchorOffsetX = 182;
		t.anchorOffsetY = 31.5;
		t.x = 638.57;
		t.y = 56;
		t.elementsContent = [this._Image8_i(),this.rewardLabel_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "dynamic_win_box_level_3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rewardLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.rewardLabel = t;
		t.font = "f0_fnt";
		t.horizontalCenter = 0;
		t.text = "x0.35";
		t.y = 25.33;
		return t;
	};
	_proto.aGroup_i = function () {
		var t = new eui.Group();
		this.aGroup = t;
		t.bottom = 0;
		t.height = 990;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.visible = false;
		t.width = 1266;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.mcGroup_i(),this.bigRewardGroup_i()];
		return t;
	};
	_proto.mcGroup_i = function () {
		var t = new eui.Group();
		this.mcGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.bigRewardGroup_i = function () {
		var t = new eui.Group();
		this.bigRewardGroup = t;
		t.anchorOffsetX = 285;
		t.anchorOffsetY = 105.5;
		t.height = 211;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 570;
		t.elementsContent = [this._Image9_i(),this.bigRewardLabel_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "bigreward_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.bigRewardLabel_i = function () {
		var t = new eui.Label();
		this.bigRewardLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "SimSun";
		t.height = 160;
		t.horizontalCenter = 0;
		t.size = 80;
		t.stroke = 1;
		t.strokeColor = 0xb62b38;
		t.text = "大奖";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.verticalCenter = -15.5;
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 1920;
		t.elementsContent = [this._Image10_i(),this.tGameBtn_i(),this.setBar_i(),this.textGroup_i(),this.topListGroup_i(),this.topMask_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.bottom = -2;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,3,16,19);
		t.source = "top_BG_png";
		t.top = -2;
		return t;
	};
	_proto.tGameBtn_i = function () {
		var t = new TextButton();
		this.tGameBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.left = 30;
		t.skinName = "TextButtonSkin";
		t.verticalCenter = 3;
		return t;
	};
	_proto.setBar_i = function () {
		var t = new SetBar();
		this.setBar = t;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "SetBarSkin";
		t.top = 0;
		return t;
	};
	_proto.textGroup_i = function () {
		var t = new eui.Group();
		this.textGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 3;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.t0_i(),this.t1_i(),this.t2_i(),this.t3_i(),this.t4_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 20;
		return t;
	};
	_proto.t0_i = function () {
		var t = new TextButton();
		this.t0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "TextButtonSkin";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.t1_i = function () {
		var t = new TextButton();
		this.t1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "TextButtonSkin";
		t.verticalCenter = 0;
		t.x = 10;
		return t;
	};
	_proto.t2_i = function () {
		var t = new TextButton();
		this.t2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "TextButtonSkin";
		t.verticalCenter = 0;
		t.x = 20;
		return t;
	};
	_proto.t3_i = function () {
		var t = new TextButton();
		this.t3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "TextButtonSkin";
		t.verticalCenter = 0;
		t.x = 79;
		return t;
	};
	_proto.t4_i = function () {
		var t = new TextButton();
		this.t4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "TextButtonSkin";
		t.verticalCenter = 0;
		t.x = 221;
		return t;
	};
	_proto.topListGroup_i = function () {
		var t = new eui.Group();
		this.topListGroup = t;
		t.alpha = 0;
		t.height = 154;
		t.left = 0;
		t.right = 0;
		t.scrollEnabled = true;
		t.touchChildren = true;
		t.touchThrough = true;
		t.y = -154;
		t.elementsContent = [this._Image11_i(),this.topList_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(200,16,1200,96);
		t.source = "topshowlist_png";
		t.y = 26;
		return t;
	};
	_proto.topList_i = function () {
		var t = new TopList();
		this.topList = t;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "TopListSkin";
		t.x = 0;
		t.y = 22;
		return t;
	};
	_proto.topMask_i = function () {
		var t = new eui.Rect();
		this.topMask = t;
		t.alpha = 0.3;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.bottomGroup_i = function () {
		var t = new eui.Group();
		this.bottomGroup = t;
		t.bottom = 0;
		t.height = 29;
		t.horizontalCenter = 0;
		t.width = 1920;
		t.elementsContent = [this._Image12_i(),this.timeLabel_i(),this._Group6_i(),this.bottomMask_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.bottom = -2;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(5,10,12,11);
		t.source = "top_BG_png";
		t.top = 0;
		return t;
	};
	_proto.timeLabel_i = function () {
		var t = new eui.Label();
		this.timeLabel = t;
		t.fontFamily = "'Asap',sans-serif";
		t.height = 22;
		t.right = 10;
		t.size = 16;
		t.text = "";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.verticalCenter = 0;
		t.x = 6;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Image13_i(),this.balanceLabel_i(),this.moneyBtn_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "attention_png";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.balanceLabel_i = function () {
		var t = new eui.Label();
		this.balanceLabel = t;
		t.fontFamily = "'Asap',sans-serif";
		t.height = 22;
		t.size = 16;
		t.text = "￥9,990.01";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = 26.17;
		t.y = 0;
		return t;
	};
	_proto.moneyBtn_i = function () {
		var t = new MouseButton();
		this.moneyBtn = t;
		t.label = "出纳柜台";
		t.x = -154;
		t.y = -1170;
		t.skinName = MainScenceUISkin$Skin22;
		return t;
	};
	_proto.bottomMask_i = function () {
		var t = new eui.Rect();
		this.bottomMask = t;
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.source = "obj_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return MainScenceUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/ShowItemSkin.exml'] = window.ShowItemSkin = (function (_super) {
	__extends(ShowItemSkin, _super);
	function ShowItemSkin() {
		_super.call(this);
		this.skinParts = ["icons","nameLabel","tGroup"];
		
		this.height = 105;
		this.width = 90;
		this.elementsContent = [this.tGroup_i()];
	}
	var _proto = ShowItemSkin.prototype;

	_proto.tGroup_i = function () {
		var t = new eui.Group();
		this.tGroup = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 105;
		t.width = 90;
		t.x = 45;
		t.y = 45;
		t.elementsContent = [this.icons_i(),this.nameLabel_i()];
		return t;
	};
	_proto.icons_i = function () {
		var t = new eui.Image();
		this.icons = t;
		t.source = "testIcon_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.nameLabel_i = function () {
		var t = new eui.Label();
		this.nameLabel = t;
		t.fontFamily = "'Asap',sans-serif";
		t.horizontalCenter = 0;
		t.size = 14;
		t.text = "大西瓜圆又圆";
		t.y = 94;
		return t;
	};
	return ShowItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/net/netcloseSkin.exml'] = window.netcloseSkin = (function (_super) {
	__extends(netcloseSkin, _super);
	var netcloseSkin$Skin23 = 	(function (_super) {
		__extends(netcloseSkin$Skin23, _super);
		function netcloseSkin$Skin23() {
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
		var _proto = netcloseSkin$Skin23.prototype;

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
		return netcloseSkin$Skin23;
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
		t.skinName = netcloseSkin$Skin23;
		return t;
	};
	return netcloseSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/net/NetSkin.exml'] = window.NetSkin = (function (_super) {
	__extends(NetSkin, _super);
	function NetSkin() {
		_super.call(this);
		this.skinParts = ["netingIcon"];
		
		this.height = 1080;
		this.width = 1920;
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
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 140;
		t.horizontalCenter = 0;
		t.source = "quan_png";
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/HSlider1Skin.exml'] = window.HSlider1Skin = (function (_super) {
	__extends(HSlider1Skin, _super);
	function HSlider1Skin() {
		_super.call(this);
		this.skinParts = ["track0","track","tsbar","thumb"];
		
		this.width = 386;
		this.elementsContent = [this.track0_i(),this.track_i(),this.tsbar_i(),this.thumb_i()];
	}
	var _proto = HSlider1Skin.prototype;

	_proto.track0_i = function () {
		var t = new eui.Image();
		this.track0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sliderPanel_png";
		t.verticalCenter = 0;
		t.width = 370;
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sliderPanel_png";
		t.verticalCenter = 0;
		t.width = 408;
		return t;
	};
	_proto.tsbar_i = function () {
		var t = new eui.Image();
		this.tsbar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.source = "sliderPanelG_png";
		t.touchEnabled = false;
		t.verticalCenter = 0.5;
		t.width = 370;
		t.x = 8;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "sliderBarB_png";
		t.verticalCenter = 0;
		t.x = 72;
		return t;
	};
	return HSlider1Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/SetSkin.exml'] = window.SetSkin = (function (_super) {
	__extends(SetSkin, _super);
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
						new eui.SetProperty("_Image1","source","close_hover_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","close_hover_png")
					])
			];
		}
		var _proto = SetSkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "close_png";
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

	function SetSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","desbtn0","desbtn1","desbtn2","volueSlider","mainGroup"];
		
		this.height = 907;
		this.width = 1261;
		this.elementsContent = [this._Rect1_i(),this.mainGroup_i(),this._Image4_i()];
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
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.height = 372;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 460;
		t.elementsContent = [this._Image1_i(),this.closeBtn_i(),this._Image2_i(),this._Label1_i(),this.desbtn0_i(),this.desbtn1_i(),this.desbtn2_i(),this._Image3_i(),this._Label2_i(),this._Label3_i(),this.volueSlider_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 340;
		t.horizontalCenter = 0;
		t.source = "set_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new MouseButton();
		this.closeBtn = t;
		t.label = "";
		t.right = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.top = 16;
		t.skinName = SetSkin$Skin24;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "setting_set_png";
		t.x = 25.9;
		t.y = 38.77;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.fontFamily = "'Asap',sans-serif";
		t.size = 16;
		t.text = "常规设置";
		t.x = 53.54;
		t.y = 42.42;
		return t;
	};
	_proto.desbtn0_i = function () {
		var t = new DesButton();
		this.desbtn0 = t;
		t.skinName = "DesButtonSkin";
		t.x = 27.44;
		t.y = 79.17;
		return t;
	};
	_proto.desbtn1_i = function () {
		var t = new DesButton();
		this.desbtn1 = t;
		t.skinName = "DesButtonSkin";
		t.x = 26.85;
		t.y = 116.45;
		return t;
	};
	_proto.desbtn2_i = function () {
		var t = new DesButton();
		this.desbtn2 = t;
		t.enabled = true;
		t.skinName = "DesButtonSkin";
		t.x = 26.24;
		t.y = 277.6;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "setings_sound_png";
		t.x = 27.48;
		t.y = 183.02;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.fontFamily = "'Asap',sans-serif";
		t.size = 16;
		t.text = "音频设置";
		t.x = 54.45;
		t.y = 187.27;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.fontFamily = "'Asap',sans-serif";
		t.size = 14;
		t.text = "音量";
		t.x = 25.01;
		t.y = 217.12;
		return t;
	};
	_proto.volueSlider_i = function () {
		var t = new MyHslider();
		this.volueSlider = t;
		t.horizontalCenter = 0;
		t.skinName = "HSlider1Skin";
		t.y = 236.35;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.source = "微信图片_20191015151856_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return SetSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/StipSkin.exml'] = window.StipSkin = (function (_super) {
	__extends(StipSkin, _super);
	var StipSkin$Skin25 = 	(function (_super) {
		__extends(StipSkin$Skin25, _super);
		function StipSkin$Skin25() {
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
						new eui.SetProperty("_Image1","source","btn_green_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","btn_green_pressed_png")
					])
			];
		}
		var _proto = StipSkin$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_green_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "'Asap',sans-serif";
			t.horizontalCenter = 0;
			t.size = 20;
			t.verticalCenter = -4;
			return t;
		};
		return StipSkin$Skin25;
	})(eui.Skin);

	var StipSkin$Skin26 = 	(function (_super) {
		__extends(StipSkin$Skin26, _super);
		function StipSkin$Skin26() {
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
						new eui.SetProperty("_Image1","source","btn_red_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","btn_red_pressed_png")
					])
			];
		}
		var _proto = StipSkin$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_red_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "'Asap',sans-serif";
			t.horizontalCenter = 0;
			t.size = 20;
			t.verticalCenter = -4;
			return t;
		};
		return StipSkin$Skin26;
	})(eui.Skin);

	var StipSkin$Skin27 = 	(function (_super) {
		__extends(StipSkin$Skin27, _super);
		function StipSkin$Skin27() {
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
						new eui.SetProperty("_Image1","source","btn_green_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","btn_green_pressed_png")
					])
			];
		}
		var _proto = StipSkin$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_green_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.fontFamily = "sans-serif";
			t.horizontalCenter = 0;
			t.size = 20;
			t.verticalCenter = -4;
			return t;
		};
		return StipSkin$Skin27;
	})(eui.Skin);

	function StipSkin() {
		_super.call(this);
		this.skinParts = ["bg","autoImg","titleLabel","okBtn","cancleBtn","autoGroup","img","desLabel","confirBtn","allGroup"];
		
		this.height = 990;
		this.width = 1600;
		this.elementsContent = [this.bg_i(),this.autoGroup_i(),this.allGroup_i(),this._Image1_i(),this._Image2_i()];
	}
	var _proto = StipSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Rect();
		this.bg = t;
		t.alpha = 0.6;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.autoGroup_i = function () {
		var t = new eui.Group();
		this.autoGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = -10;
		t.elementsContent = [this.autoImg_i(),this.titleLabel_i(),this.okBtn_i(),this.cancleBtn_i()];
		return t;
	};
	_proto.autoImg_i = function () {
		var t = new eui.Image();
		this.autoImg = t;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.scale9Grid = new egret.Rectangle(50,95,300,17);
		t.source = "nomalbg_png";
		t.width = 460;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.titleLabel_i = function () {
		var t = new eui.Label();
		this.titleLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "'Asap',sans-serif";
		t.lineSpacing = 4;
		t.multiline = true;
		t.size = 30;
		t.text = "自动游戏已停止。\n 您想重复自动游戏吗？";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 360;
		t.x = 50;
		t.y = 82;
		return t;
	};
	_proto.okBtn_i = function () {
		var t = new MouseButton();
		this.okBtn = t;
		t.label = "是";
		t.x = 29;
		t.y = 210;
		t.skinName = StipSkin$Skin25;
		return t;
	};
	_proto.cancleBtn_i = function () {
		var t = new MouseButton();
		this.cancleBtn = t;
		t.label = "否";
		t.x = 233;
		t.y = 210;
		t.skinName = StipSkin$Skin26;
		return t;
	};
	_proto.allGroup_i = function () {
		var t = new eui.Group();
		this.allGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.img_i(),this.desLabel_i(),this.confirBtn_i()];
		return t;
	};
	_proto.img_i = function () {
		var t = new eui.Image();
		this.img = t;
		t.anchorOffsetY = 0;
		t.scale9Grid = new egret.Rectangle(50,95,300,17);
		t.source = "nomalbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.desLabel_i = function () {
		var t = new eui.Label();
		this.desLabel = t;
		t.anchorOffsetY = 0;
		t.fontFamily = "'Asap',sans-serif";
		t.lineSpacing = 5;
		t.size = 18;
		t.text = "连接断开,   正在重新连接.";
		t.textAlign = "center";
		t.textColor = 0xffffff;
		t.verticalAlign = "middle";
		t.width = 380;
		t.x = 34;
		t.y = 76;
		return t;
	};
	_proto.confirBtn_i = function () {
		var t = new MouseButton();
		this.confirBtn = t;
		t.anchorOffsetX = 0;
		t.label = "确定";
		t.width = 216;
		t.x = 117;
		t.y = 162;
		t.skinName = StipSkin$Skin27;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.3;
		t.horizontalCenter = 15.5;
		t.source = "18_jpg";
		t.verticalCenter = -33.5;
		t.visible = false;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.3;
		t.horizontalCenter = 13.5;
		t.source = "20_jpg";
		t.verticalCenter = -41.5;
		t.visible = false;
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