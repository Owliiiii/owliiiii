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
		this.elementsContent = [this._Image1_i(),this.track_i(),this.tsbar_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.source = "popupBox_png";
		return t;
	};
	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0.5;
		t.scale9Grid = new egret.Rectangle(105,2,30,1);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sliderPanel_png";
		t.verticalCenter = 3;
		return t;
	};
	_proto.tsbar_i = function () {
		var t = new eui.Image();
		this.tsbar = t;
		t.source = "sliderPanelG_png";
		t.touchEnabled = false;
		t.verticalCenter = 3;
		t.width = 224;
		t.x = 24;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "sliderBarB_png";
		t.x = 19;
		t.y = 27;
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
		this.skinParts = ["icon","iconliang","quan","scoreBg","score"];
		
		this.height = 207;
		this.width = 242;
		this.elementsContent = [this.icon_i(),this.iconliang_i(),this.quan_i(),this.scoreBg_i(),this.score_i()];
	}
	var _proto = ReelItemSkin.prototype;

	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.iconliang_i = function () {
		var t = new eui.Image();
		this.iconliang = t;
		t.alpha = 0;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.quan_i = function () {
		var t = new eui.Image();
		this.quan = t;
		t.horizontalCenter = 0;
		t.source = "circle_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = -1;
		return t;
	};
	_proto.scoreBg_i = function () {
		var t = new eui.Image();
		this.scoreBg = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.source = "lineBg_png";
		t.visible = false;
		t.width = 160;
		t.y = 240;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.size = 25;
		t.text = "￥:0";
		t.visible = false;
		t.y = 240;
		return t;
	};
	return ReelItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/base/ReelSkin.exml'] = window.ReelSkin = (function (_super) {
	__extends(ReelSkin, _super);
	function ReelSkin() {
		_super.call(this);
		this.skinParts = ["item0","item1","item2","item3","item4","kGroup"];
		
		this.height = 620;
		this.width = 242;
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
		t.elementsContent = [this.item0_i(),this.item1_i(),this.item2_i(),this.item3_i(),this.item4_i()];
		return t;
	};
	_proto.item0_i = function () {
		var t = new ReelItem();
		this.item0 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelItemSkin";
		t.y = -209;
		return t;
	};
	_proto.item1_i = function () {
		var t = new ReelItem();
		this.item1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelItemSkin";
		t.x = 0;
		return t;
	};
	_proto.item2_i = function () {
		var t = new ReelItem();
		this.item2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelItemSkin";
		t.x = 0;
		t.y = 209;
		return t;
	};
	_proto.item3_i = function () {
		var t = new ReelItem();
		this.item3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelItemSkin";
		t.x = 0;
		t.y = 411;
		return t;
	};
	_proto.item4_i = function () {
		var t = new ReelItem();
		this.item4 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelItemSkin";
		t.y = 624.44;
		return t;
	};
	return ReelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/extraBonus/BonusAnimationSkin.exml'] = window.BonusAnimationSkin = (function (_super) {
	__extends(BonusAnimationSkin, _super);
	var BonusAnimationSkin$Skin4 = 	(function (_super) {
		__extends(BonusAnimationSkin$Skin4, _super);
		function BonusAnimationSkin$Skin4() {
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
						new eui.SetProperty("_Image1","source","backGameBtn2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = BonusAnimationSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "backGameBtn1_png";
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
		return BonusAnimationSkin$Skin4;
	})(eui.Skin);

	function BonusAnimationSkin() {
		_super.call(this);
		this.skinParts = ["golf_hor","shadow_hor","shadow","golf","renwu","animat","bonusMask","cup","winScore","keepOn","gameOver"];
		
		this.height = 990;
		this.width = 1266;
		this.golf_hor_i();
		this.shadow_hor_i();
		this.elementsContent = [this.animat_i(),this.gameOver_i(),this._Image4_i()];
		
		eui.Binding.$bindProperties(this, ["golf"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [0.9],[],this._Object2,"alpha");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [0.6],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [594.92],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [11.8],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object3,"alpha");
		eui.Binding.$bindProperties(this, [0.18],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [0.18],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [-141.24],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object4,"alpha");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object5,"alpha");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object6,"alpha");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object6,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object7,"alpha");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object7,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object8,"alpha");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object8,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object9,"alpha");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object9,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object9,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object10,"alpha");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object10,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object10,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object11,"alpha");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object11,"scaleX");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object11,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object11,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object11,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"alpha");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object12,"scaleX");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object12,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object12,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object12,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object13,"alpha");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object13,"scaleX");
		eui.Binding.$bindProperties(this, [0.17],[],this._Object13,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object13,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object13,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"alpha");
		eui.Binding.$bindProperties(this, [0.16],[],this._Object14,"scaleX");
		eui.Binding.$bindProperties(this, [0.16],[],this._Object14,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object14,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object14,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object15,"alpha");
		eui.Binding.$bindProperties(this, [0.15],[],this._Object15,"scaleX");
		eui.Binding.$bindProperties(this, [0.15],[],this._Object15,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object15,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object15,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object16,"alpha");
		eui.Binding.$bindProperties(this, [0.14],[],this._Object16,"scaleX");
		eui.Binding.$bindProperties(this, [0.14],[],this._Object16,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object16,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object16,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object17,"alpha");
		eui.Binding.$bindProperties(this, [0.07],[],this._Object17,"scaleX");
		eui.Binding.$bindProperties(this, [0.07],[],this._Object17,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object17,"x");
		eui.Binding.$bindProperties(this, [-77.6],[],this._Object17,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object18,"alpha");
		eui.Binding.$bindProperties(this, [0],[],this._Object18,"scaleX");
		eui.Binding.$bindProperties(this, [0],[],this._Object18,"scaleY");
		eui.Binding.$bindProperties(this, [714.46],[],this._Object18,"x");
		eui.Binding.$bindProperties(this, [-141.23],[],this._Object18,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object19,"alpha");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object19,"scaleX");
		eui.Binding.$bindProperties(this, [0.5],[],this._Object19,"scaleY");
		eui.Binding.$bindProperties(this, [706.57],[],this._Object19,"x");
		eui.Binding.$bindProperties(this, [9],[],this._Object19,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object20,"alpha");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object20,"scaleX");
		eui.Binding.$bindProperties(this, [0.3],[],this._Object20,"scaleY");
		eui.Binding.$bindProperties(this, [903.64],[],this._Object20,"x");
		eui.Binding.$bindProperties(this, [291.43],[],this._Object20,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object21,"alpha");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object21,"scaleX");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object21,"scaleY");
		eui.Binding.$bindProperties(this, [938.53],[],this._Object21,"x");
		eui.Binding.$bindProperties(this, [277.33],[],this._Object21,"y");
		eui.Binding.$bindProperties(this, ["shadow"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [0.01],[],this._Object22,"alpha");
		eui.Binding.$bindProperties(this, [0.01],[],this._Object22,"rotation");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object22,"scaleX");
		eui.Binding.$bindProperties(this, [0.2],[],this._Object22,"scaleY");
		eui.Binding.$bindProperties(this, [865.01],[],this._Object22,"x");
		eui.Binding.$bindProperties(this, [282.37],[],this._Object22,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object23,"alpha");
		eui.Binding.$bindProperties(this, [0.06],[],this._Object23,"rotation");
		eui.Binding.$bindProperties(this, [0.06],[],this._Object23,"scaleX");
		eui.Binding.$bindProperties(this, [0.06],[],this._Object23,"scaleY");
		eui.Binding.$bindProperties(this, [908.22],[],this._Object23,"x");
		eui.Binding.$bindProperties(this, [277.41],[],this._Object23,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object24,"alpha");
		eui.Binding.$bindProperties(this, [0.1],[],this._Object24,"rotation");
		eui.Binding.$bindProperties(this, [0.05],[],this._Object24,"scaleX");
		eui.Binding.$bindProperties(this, [0.05],[],this._Object24,"scaleY");
		eui.Binding.$bindProperties(this, [931.17],[],this._Object24,"x");
		eui.Binding.$bindProperties(this, [276.16],[],this._Object24,"y");
		eui.Binding.$bindProperties(this, [948.17],[],this._Object25,"x");
		eui.Binding.$bindProperties(this, [276.16],[],this._Object25,"y");
	}
	var _proto = BonusAnimationSkin.prototype;

	_proto.golf_hor_i = function () {
		var t = new egret.tween.TweenGroup();
		this.golf_hor = t;
		t.items = [this._TweenItem1_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i(),this._To2_i(),this._To3_i(),this._To4_i(),this._To5_i(),this._To6_i(),this._To7_i(),this._To8_i(),this._To9_i(),this._To10_i(),this._To11_i(),this._To12_i(),this._To13_i(),this._To14_i(),this._To15_i(),this._To16_i(),this._To17_i(),this._To18_i(),this._To19_i(),this._To20_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 400;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To16_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto._To17_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._To18_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._To19_i = function () {
		var t = new egret.tween.To();
		t.duration = 300;
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto._To20_i = function () {
		var t = new egret.tween.To();
		t.duration = 1450;
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto.shadow_hor_i = function () {
		var t = new egret.tween.TweenGroup();
		this.shadow_hor = t;
		t.items = [this._TweenItem2_i()];
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._To21_i(),this._To22_i(),this._To23_i(),this._To24_i()];
		return t;
	};
	_proto._To21_i = function () {
		var t = new egret.tween.To();
		t.duration = 1500;
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._To22_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._To23_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto._To24_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.props = this._Object25_i();
		return t;
	};
	_proto._Object25_i = function () {
		var t = {};
		this._Object25 = t;
		return t;
	};
	_proto.animat_i = function () {
		var t = new eui.Group();
		this.animat = t;
		t.height = 990;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1266;
		t.elementsContent = [this._Image1_i(),this.shadow_i(),this.golf_i(),this.renwu_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bonus_flag_png";
		t.x = 794;
		t.y = 193.79;
		return t;
	};
	_proto.shadow_i = function () {
		var t = new eui.Image();
		this.shadow = t;
		t.source = "shadow_png";
		t.x = 339.35;
		t.y = 777.41;
		return t;
	};
	_proto.golf_i = function () {
		var t = new eui.Image();
		this.golf = t;
		t.source = "golf_png";
		t.x = 339.49;
		t.y = 774.14;
		return t;
	};
	_proto.renwu_i = function () {
		var t = new eui.Image();
		this.renwu = t;
		t.scaleX = 1.05;
		t.scaleY = 1.05;
		t.source = "ren1_png";
		t.x = 0;
		t.y = 210.56;
		return t;
	};
	_proto.gameOver_i = function () {
		var t = new eui.Group();
		this.gameOver = t;
		t.height = 990;
		t.visible = false;
		t.width = 1266;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bonusMask_i(),this.cup_i(),this.winScore_i(),this.keepOn_i()];
		return t;
	};
	_proto.bonusMask_i = function () {
		var t = new eui.Rect();
		this.bonusMask = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillAlpha = 0.2;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.cup_i = function () {
		var t = new eui.Group();
		this.cup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 458.66;
		t.width = 432;
		t.x = 585.98;
		t.y = 91.01;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cup1_png";
		t.x = 0.01999999999998181;
		t.y = 7;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "cupMoney_png";
		t.x = 72.69;
		t.y = 375;
		return t;
	};
	_proto.winScore_i = function () {
		var t = new eui.BitmapLabel();
		this.winScore = t;
		t.font = "f0_bonus_fnt";
		t.letterSpacing = 6;
		t.text = "x0.75";
		t.x = 638.86;
		t.y = 568.66;
		return t;
	};
	_proto.keepOn_i = function () {
		var t = new eui.Button();
		this.keepOn = t;
		t.horizontalCenter = 2;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 686;
		t.skinName = BonusAnimationSkin$Skin4;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.horizontalCenter = -12;
		t.scaleX = 1.07;
		t.scaleY = 1.049;
		t.source = "piayObj_png";
		t.verticalCenter = -2.5;
		t.visible = false;
		return t;
	};
	return BonusAnimationSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/extraBonus/CupSkin.exml'] = window.CupSkin = (function (_super) {
	__extends(CupSkin, _super);
	var CupSkin$Skin5 = 	(function (_super) {
		__extends(CupSkin$Skin5, _super);
		function CupSkin$Skin5() {
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
						new eui.SetProperty("_Image1","source","backGameBtn2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = CupSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "backGameBtn1_png";
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
		return CupSkin$Skin5;
	})(eui.Skin);

	function CupSkin() {
		_super.call(this);
		this.skinParts = ["bonusMask0","cup","winScore","keepOn","gameOver"];
		
		this.height = 990;
		this.width = 1266;
		this.elementsContent = [this.gameOver_i()];
	}
	var _proto = CupSkin.prototype;

	_proto.gameOver_i = function () {
		var t = new eui.Group();
		this.gameOver = t;
		t.height = 990;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1266;
		t.elementsContent = [this.bonusMask0_i(),this.cup_i(),this.winScore_i(),this.keepOn_i()];
		return t;
	};
	_proto.bonusMask0_i = function () {
		var t = new eui.Rect();
		this.bonusMask0 = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillAlpha = 0.2;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.cup_i = function () {
		var t = new eui.Group();
		this.cup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.y = 141.01;
		t.elementsContent = [this._Image1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "cup1_png";
		t.x = 0.02;
		t.y = 17;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "cupMoney_png";
		t.x = 76.69;
		t.y = 388.5;
		return t;
	};
	_proto.winScore_i = function () {
		var t = new eui.BitmapLabel();
		this.winScore = t;
		t.font = "f0_bonus_fnt";
		t.horizontalCenter = -14;
		t.letterSpacing = 3.5;
		t.text = "x1.80";
		t.y = 633.1;
		return t;
	};
	_proto.keepOn_i = function () {
		var t = new eui.Button();
		this.keepOn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 752;
		t.skinName = CupSkin$Skin5;
		return t;
	};
	return CupSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/extraBonus/ToolSkin.exml'] = window.ToolSkin = (function (_super) {
	__extends(ToolSkin, _super);
	function ToolSkin() {
		_super.call(this);
		this.skinParts = ["icon"];
		
		this.height = 300;
		this.width = 168;
		this.elementsContent = [this.icon_i()];
	}
	var _proto = ToolSkin.prototype;

	_proto.icon_i = function () {
		var t = new eui.Image();
		this.icon = t;
		t.source = "2_0_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	return ToolSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/extraBonus/MakeOptionSkin.exml'] = window.MakeOptionSkin = (function (_super) {
	__extends(MakeOptionSkin, _super);
	function MakeOptionSkin() {
		_super.call(this);
		this.skinParts = ["Tools1_0","Tools1_1","Tools1_2","Tools1_3","firstContent","Tools2_0","Tools2_1","Tools2_2","Tools2_3","Tools2_4","Tools2_5","Tools2_6","Tools2_7","Tools2_8","secondContent","Tools3_0","Tools3_1","Tools3_2","thirdContent","maskRect"];
		
		this.height = 990;
		this.width = 1266;
		this.elementsContent = [this._Image1_i(),this.firstContent_i(),this.secondContent_i(),this.thirdContent_i(),this.maskRect_i(),this._Image2_i()];
	}
	var _proto = MakeOptionSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -23.5;
		t.scaleX = 0.879;
		t.scaleY = 0.879;
		t.source = "bounsMuwen_png";
		t.verticalCenter = 37.5;
		return t;
	};
	_proto.firstContent_i = function () {
		var t = new eui.Group();
		this.firstContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 518;
		t.scaleX = 0.872;
		t.scaleY = 0.872;
		t.scrollEnabled = true;
		t.width = 1134;
		t.x = 44;
		t.y = 310;
		t.elementsContent = [this.Tools1_0_i(),this.Tools1_1_i(),this.Tools1_2_i(),this.Tools1_3_i()];
		return t;
	};
	_proto.Tools1_0_i = function () {
		var t = new Tool();
		this.Tools1_0 = t;
		t.anchorOffsetY = 0;
		t.skinName = "ToolSkin";
		t.x = 90;
		t.y = 600;
		return t;
	};
	_proto.Tools1_1_i = function () {
		var t = new Tool();
		this.Tools1_1 = t;
		t.anchorOffsetY = 0;
		t.skinName = "ToolSkin";
		t.x = 355;
		t.y = 600;
		return t;
	};
	_proto.Tools1_2_i = function () {
		var t = new Tool();
		this.Tools1_2 = t;
		t.anchorOffsetY = 0;
		t.skinName = "ToolSkin";
		t.x = 622;
		t.y = 600;
		return t;
	};
	_proto.Tools1_3_i = function () {
		var t = new Tool();
		this.Tools1_3 = t;
		t.anchorOffsetY = 0;
		t.skinName = "ToolSkin";
		t.x = 885.34;
		t.y = 600;
		return t;
	};
	_proto.secondContent_i = function () {
		var t = new eui.Group();
		this.secondContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 518;
		t.scaleX = 0.872;
		t.scaleY = 0.872;
		t.scrollEnabled = true;
		t.width = 1134;
		t.x = 44;
		t.y = 310;
		t.layout = this._BasicLayout1_i();
		t.elementsContent = [this.Tools2_0_i(),this.Tools2_1_i(),this.Tools2_2_i(),this.Tools2_3_i(),this.Tools2_4_i(),this.Tools2_5_i(),this.Tools2_6_i(),this.Tools2_7_i(),this.Tools2_8_i()];
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.Tools2_0_i = function () {
		var t = new Tool();
		this.Tools2_0 = t;
		t.height = 300;
		t.skinName = "ToolSkin";
		t.width = 100;
		t.x = 18.23;
		t.y = 600;
		return t;
	};
	_proto.Tools2_1_i = function () {
		var t = new Tool();
		this.Tools2_1 = t;
		t.height = 300;
		t.skinName = "ToolSkin";
		t.width = 100;
		t.x = 141.32;
		t.y = 600;
		return t;
	};
	_proto.Tools2_2_i = function () {
		var t = new Tool();
		this.Tools2_2 = t;
		t.height = 300;
		t.skinName = "ToolSkin";
		t.width = 100;
		t.x = 265.99;
		t.y = 600;
		return t;
	};
	_proto.Tools2_3_i = function () {
		var t = new Tool();
		this.Tools2_3 = t;
		t.height = 300;
		t.skinName = "ToolSkin";
		t.width = 100;
		t.x = 390.68;
		t.y = 600;
		return t;
	};
	_proto.Tools2_4_i = function () {
		var t = new Tool();
		this.Tools2_4 = t;
		t.height = 300;
		t.skinName = "ToolSkin";
		t.width = 100;
		t.x = 514.67;
		t.y = 600;
		return t;
	};
	_proto.Tools2_5_i = function () {
		var t = new Tool();
		this.Tools2_5 = t;
		t.height = 300;
		t.skinName = "ToolSkin";
		t.width = 100;
		t.x = 639.02;
		t.y = 600;
		return t;
	};
	_proto.Tools2_6_i = function () {
		var t = new Tool();
		this.Tools2_6 = t;
		t.height = 300;
		t.skinName = "ToolSkin";
		t.width = 100;
		t.x = 764;
		t.y = 600;
		return t;
	};
	_proto.Tools2_7_i = function () {
		var t = new Tool();
		this.Tools2_7 = t;
		t.height = 300;
		t.skinName = "ToolSkin";
		t.width = 100;
		t.x = 886.33;
		t.y = 600;
		return t;
	};
	_proto.Tools2_8_i = function () {
		var t = new Tool();
		this.Tools2_8 = t;
		t.height = 300;
		t.skinName = "ToolSkin";
		t.width = 100;
		t.x = 1011.33;
		t.y = 600;
		return t;
	};
	_proto.thirdContent_i = function () {
		var t = new eui.Group();
		this.thirdContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 518;
		t.scaleX = 0.872;
		t.scaleY = 0.872;
		t.scrollEnabled = true;
		t.width = 1134;
		t.x = 44;
		t.y = 310;
		t.layout = this._BasicLayout2_i();
		t.elementsContent = [this.Tools3_0_i(),this.Tools3_1_i(),this.Tools3_2_i()];
		return t;
	};
	_proto._BasicLayout2_i = function () {
		var t = new eui.BasicLayout();
		return t;
	};
	_proto.Tools3_0_i = function () {
		var t = new Tool();
		this.Tools3_0 = t;
		t.height = 300;
		t.skinName = "ToolSkin";
		t.width = 153;
		t.x = 154.56;
		t.y = 600;
		return t;
	};
	_proto.Tools3_1_i = function () {
		var t = new Tool();
		this.Tools3_1 = t;
		t.height = 300;
		t.skinName = "ToolSkin";
		t.width = 153;
		t.x = 515.52;
		t.y = 600;
		return t;
	};
	_proto.Tools3_2_i = function () {
		var t = new Tool();
		this.Tools3_2 = t;
		t.height = 300;
		t.skinName = "ToolSkin";
		t.width = 153;
		t.x = 874.59;
		t.y = 600;
		return t;
	};
	_proto.maskRect_i = function () {
		var t = new eui.Rect();
		this.maskRect = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillAlpha = 0.005;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0;
		t.strokeColor = 0x878787;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1.07;
		t.scaleY = 1.07;
		t.source = "b1_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	return MakeOptionSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/extraBonus/ExtraBonusEntrySkin.exml'] = window.ExtraBonusEntrySkin = (function (_super) {
	__extends(ExtraBonusEntrySkin, _super);
	function ExtraBonusEntrySkin() {
		_super.call(this);
		this.skinParts = ["score","scoreGroup","tools2","tools1","tools3","backBag","selection","optionUI","toolsGroup","bonusClip","bonusGroup"];
		
		this.height = 990;
		this.width = 1266;
		this.elementsContent = [this.scoreGroup_i(),this.toolsGroup_i(),this.bonusGroup_i(),this._Image9_i()];
	}
	var _proto = ExtraBonusEntrySkin.prototype;

	_proto.scoreGroup_i = function () {
		var t = new eui.Group();
		this.scoreGroup = t;
		t.bottom = 0;
		t.height = 200;
		t.left = 0;
		t.visible = false;
		t.width = 200;
		t.elementsContent = [this._Image1_i(),this.score_i(),this._Label1_i(),this._Image2_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.left = -2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "balance_bg_png";
		t.y = 105.35;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.Label();
		this.score = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 38;
		t.text = "￥50.00";
		t.x = 71.89;
		t.y = 142.13;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "您的余额:";
		t.textColor = 0xf99711;
		t.x = 92.68;
		t.y = 112.34;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bonus_flag_png";
		t.x = 948;
		t.y = -523;
		return t;
	};
	_proto.toolsGroup_i = function () {
		var t = new eui.Group();
		this.toolsGroup = t;
		t.height = 990;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1266;
		t.elementsContent = [this._Image3_i(),this.selection_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.optionUI_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 935;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bonusBg_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.selection_i = function () {
		var t = new eui.Group();
		this.selection = t;
		t.height = 0;
		t.width = 0;
		t.x = 1132;
		t.y = 608;
		t.elementsContent = [this.tools2_i(),this.tools1_i(),this.tools3_i(),this.backBag_i()];
		return t;
	};
	_proto.tools2_i = function () {
		var t = new eui.Image();
		this.tools2 = t;
		t.scaleX = 0.78;
		t.scaleY = 0.78;
		t.source = "2_0_png";
		t.x = -31.2;
		t.y = -326;
		return t;
	};
	_proto.tools1_i = function () {
		var t = new eui.Image();
		this.tools1 = t;
		t.scaleX = 0.45;
		t.scaleY = 0.45;
		t.source = "1_2_png";
		t.x = -56.79;
		t.y = -261.28;
		return t;
	};
	_proto.tools3_i = function () {
		var t = new eui.Image();
		this.tools3 = t;
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.source = "3_2_png";
		t.x = -27.16;
		t.y = -323.88;
		return t;
	};
	_proto.backBag_i = function () {
		var t = new eui.Image();
		this.backBag = t;
		t.scaleX = 0.89;
		t.scaleY = 0.89;
		t.source = "ballBag_png";
		t.x = -110;
		t.y = -161;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.889;
		t.scaleY = 0.889;
		t.source = "bonusJackpot_png";
		t.x = 558;
		t.y = 130;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.889;
		t.scaleY = 0.889;
		t.source = "chooseClub_png";
		t.x = 501;
		t.y = 221;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.89;
		t.scaleY = 0.89;
		t.source = "bounsLogo_png";
		t.top = 126;
		t.x = 30;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "balance_bg_png";
		t.visible = false;
		t.y = 785;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "bounsMuwen_png";
		t.visible = false;
		t.x = 66;
		t.y = 158.16;
		return t;
	};
	_proto.optionUI_i = function () {
		var t = new MakeOption();
		this.optionUI = t;
		t.horizontalCenter = 0;
		t.skinName = "MakeOptionSkin";
		t.verticalCenter = -1;
		return t;
	};
	_proto.bonusGroup_i = function () {
		var t = new eui.Group();
		this.bonusGroup = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.elementsContent = [this.bonusClip_i()];
		return t;
	};
	_proto.bonusClip_i = function () {
		var t = new BonusAnimation();
		this.bonusClip = t;
		t.horizontalCenter = 0;
		t.skinName = "BonusAnimationSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 990;
		t.horizontalCenter = 0;
		t.source = "b1_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1266;
		return t;
	};
	return ExtraBonusEntrySkin;
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
		var _proto = AutoItemSkin$Skin6.prototype;

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
						new eui.SetProperty("_Image1","source","spins_no_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","spins_no_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","spins_no_hovered_png")
					])
			];
		}
		var _proto = AutoItemSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "spins_no_png";
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
						new eui.SetProperty("_Image1","source","spins_no_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","spins_no_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","spins_no_hovered_png")
					])
			];
		}
		var _proto = AutoItemSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "spins_no_png";
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
						new eui.SetProperty("_Image1","source","spins_no_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","spins_no_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","spins_no_hovered_png")
					])
			];
		}
		var _proto = AutoItemSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "spins_no_png";
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

	var AutoItemSkin$Skin10 = 	(function (_super) {
		__extends(AutoItemSkin$Skin10, _super);
		function AutoItemSkin$Skin10() {
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
						new eui.SetProperty("_Image1","source","spins_no_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","spins_no_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","spins_no_hovered_png")
					])
			];
		}
		var _proto = AutoItemSkin$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "spins_no_png";
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
		return AutoItemSkin$Skin10;
	})(eui.Skin);

	var AutoItemSkin$Skin11 = 	(function (_super) {
		__extends(AutoItemSkin$Skin11, _super);
		function AutoItemSkin$Skin11() {
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
						new eui.SetProperty("_Image1","source","spins_no_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","spins_no_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","spins_no_hovered_png")
					])
			];
		}
		var _proto = AutoItemSkin$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "spins_no_png";
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
		return AutoItemSkin$Skin11;
	})(eui.Skin);

	var AutoItemSkin$Skin12 = 	(function (_super) {
		__extends(AutoItemSkin$Skin12, _super);
		function AutoItemSkin$Skin12() {
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
		var _proto = AutoItemSkin$Skin12.prototype;

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
		return AutoItemSkin$Skin12;
	})(eui.Skin);

	function AutoItemSkin() {
		_super.call(this);
		this.skinParts = ["autoCountLabel","alwaysLabel","sopAutoBtn","autoStopGroup","btn0","liang0","round_99","btn1","liang1","round_50","btn2","liang2","round_25","btn3","liang3","round_10","btn4","liang4","round_always","sGroup","sMainGroup","autoBtn"];
		
		this.height = 555;
		this.elementsContent = [this.autoStopGroup_i(),this.sMainGroup_i(),this.autoBtn_i()];
	}
	var _proto = AutoItemSkin.prototype;

	_proto.autoStopGroup_i = function () {
		var t = new eui.Group();
		this.autoStopGroup = t;
		t.horizontalCenter = 0;
		t.visible = false;
		t.y = 417;
		t.elementsContent = [this._Image1_i(),this.autoCountLabel_i(),this.alwaysLabel_i(),this.sopAutoBtn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "auto_spins_png";
		t.x = 0;
		t.y = 6.73;
		return t;
	};
	_proto.autoCountLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.autoCountLabel = t;
		t.anchorOffsetX = 0;
		t.font = "f0_fnt";
		t.horizontalCenter = 1;
		t.text = "";
		t.y = 53.7;
		return t;
	};
	_proto.alwaysLabel_i = function () {
		var t = new eui.Image();
		this.alwaysLabel = t;
		t.source = "alwaysImg_png";
		t.visible = false;
		t.x = 24;
		t.y = 53;
		return t;
	};
	_proto.sopAutoBtn_i = function () {
		var t = new MouseButton();
		this.sopAutoBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 78;
		t.skinName = AutoItemSkin$Skin6;
		return t;
	};
	_proto.sMainGroup_i = function () {
		var t = new eui.Group();
		this.sMainGroup = t;
		t.height = 450;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.scrollEnabled = true;
		t.touchChildren = true;
		t.touchThrough = true;
		t.visible = false;
		t.width = 134;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.sGroup_i()];
		return t;
	};
	_proto.sGroup_i = function () {
		var t = new eui.Group();
		this.sGroup = t;
		t.anchorOffsetY = 0;
		t.height = 450;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scrollEnabled = true;
		t.x = 0;
		t.y = 450;
		t.elementsContent = [this._Image2_i(),this.btn0_i(),this.liang0_i(),this.round_99_i(),this.btn1_i(),this.liang1_i(),this.round_50_i(),this.btn2_i(),this.liang2_i(),this.round_25_i(),this.btn3_i(),this.liang3_i(),this.round_10_i(),this.btn4_i(),this.liang4_i(),this.round_always_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "autoplay_bg_png";
		t.top = 0;
		t.x = 0;
		return t;
	};
	_proto.btn0_i = function () {
		var t = new MouseButton();
		this.btn0 = t;
		t.label = "";
		t.x = 17;
		t.y = 11;
		t.skinName = AutoItemSkin$Skin7;
		return t;
	};
	_proto.liang0_i = function () {
		var t = new eui.Image();
		this.liang0 = t;
		t.source = "spins_no_pressed_png";
		t.touchEnabled = false;
		t.x = 17;
		t.y = 11;
		return t;
	};
	_proto.round_99_i = function () {
		var t = new eui.Image();
		this.round_99 = t;
		t.source = "round_99_png";
		t.touchEnabled = false;
		t.x = 22;
		t.y = 34;
		return t;
	};
	_proto.btn1_i = function () {
		var t = new MouseButton();
		this.btn1 = t;
		t.label = "";
		t.x = 17;
		t.y = 96;
		t.skinName = AutoItemSkin$Skin8;
		return t;
	};
	_proto.liang1_i = function () {
		var t = new eui.Image();
		this.liang1 = t;
		t.source = "spins_no_pressed_png";
		t.touchEnabled = false;
		t.x = 17;
		t.y = 96;
		return t;
	};
	_proto.round_50_i = function () {
		var t = new eui.Image();
		this.round_50 = t;
		t.source = "round_50_png";
		t.touchEnabled = false;
		t.x = 22;
		t.y = 120;
		return t;
	};
	_proto.btn2_i = function () {
		var t = new MouseButton();
		this.btn2 = t;
		t.label = "";
		t.x = 17;
		t.y = 180.67;
		t.skinName = AutoItemSkin$Skin9;
		return t;
	};
	_proto.liang2_i = function () {
		var t = new eui.Image();
		this.liang2 = t;
		t.source = "spins_no_pressed_png";
		t.touchEnabled = false;
		t.x = 17;
		t.y = 180.67;
		return t;
	};
	_proto.round_25_i = function () {
		var t = new eui.Image();
		this.round_25 = t;
		t.source = "round_25_png";
		t.touchEnabled = false;
		t.x = 22;
		t.y = 203.67;
		return t;
	};
	_proto.btn3_i = function () {
		var t = new MouseButton();
		this.btn3 = t;
		t.label = "";
		t.x = 17;
		t.y = 265.33;
		t.skinName = AutoItemSkin$Skin10;
		return t;
	};
	_proto.liang3_i = function () {
		var t = new eui.Image();
		this.liang3 = t;
		t.source = "spins_no_pressed_png";
		t.touchEnabled = false;
		t.x = 17;
		t.y = 265.33;
		return t;
	};
	_proto.round_10_i = function () {
		var t = new eui.Image();
		this.round_10 = t;
		t.source = "round_10_png";
		t.touchEnabled = false;
		t.x = 22;
		t.y = 286.83;
		return t;
	};
	_proto.btn4_i = function () {
		var t = new MouseButton();
		this.btn4 = t;
		t.label = "";
		t.x = 17;
		t.y = 350.66;
		t.skinName = AutoItemSkin$Skin11;
		return t;
	};
	_proto.liang4_i = function () {
		var t = new eui.Image();
		this.liang4 = t;
		t.source = "spins_no_pressed_png";
		t.touchEnabled = false;
		t.x = 17;
		t.y = 350.66;
		return t;
	};
	_proto.round_always_i = function () {
		var t = new eui.Image();
		this.round_always = t;
		t.source = "round_always_png";
		t.touchEnabled = false;
		t.x = 22;
		t.y = 372.16;
		return t;
	};
	_proto.autoBtn_i = function () {
		var t = new MouseButton();
		this.autoBtn = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.label = "";
		t.skinName = AutoItemSkin$Skin12;
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
		t.skinName = "TogleButtonSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.tLabel_i = function () {
		var t = new eui.Label();
		this.tLabel = t;
		t.bottom = -1;
		t.fontFamily = "Microsoft YaHei";
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
		t.fontFamily = "Microsoft YaHei";
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
		t.fontFamily = "Georgia";
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
		t.fontFamily = "Georgia";
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
		t.y = 9;
		return t;
	};
	_proto.hisBtn_i = function () {
		var t = new MouseButton3();
		this.hisBtn = t;
		t.horizontalCenter = 1;
		t.label = "    历史纪录";
		t.skinName = "MouseButton3Skin";
		t.y = 30;
		return t;
	};
	_proto.checkBtn_i = function () {
		var t = new MouseButton3();
		this.checkBtn = t;
		t.horizontalCenter = 1;
		t.label = "    选项";
		t.skinName = "MouseButton3Skin";
		t.y = 66;
		return t;
	};
	_proto.helpBtn_i = function () {
		var t = new MouseButton3();
		this.helpBtn = t;
		t.horizontalCenter = 1;
		t.label = "    帮助";
		t.skinName = "MouseButton3Skin";
		t.y = 102;
		return t;
	};
	_proto.rewardBtn_i = function () {
		var t = new MouseButton3();
		this.rewardBtn = t;
		t.horizontalCenter = 1;
		t.label = "    奖金表";
		t.skinName = "MouseButton3Skin";
		t.x = 10;
		t.y = 139;
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
		t.horizontalCenter = -8;
		t.text = "1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr1_i = function () {
		var t = new eui.Group();
		this.gr1 = t;
		t.right = 0;
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
		t.horizontalCenter = 9;
		t.text = "1";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl2_i = function () {
		var t = new eui.Group();
		this.gl2 = t;
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
		t.horizontalCenter = -8;
		t.text = "2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr2_i = function () {
		var t = new eui.Group();
		this.gr2 = t;
		t.right = 0;
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
		t.horizontalCenter = 9;
		t.text = "2";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl3_i = function () {
		var t = new eui.Group();
		this.gl3 = t;
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
		t.horizontalCenter = -8;
		t.text = "3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr3_i = function () {
		var t = new eui.Group();
		this.gr3 = t;
		t.right = 0;
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
		t.horizontalCenter = 9;
		t.text = "3";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl4_i = function () {
		var t = new eui.Group();
		this.gl4 = t;
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
		t.horizontalCenter = -8;
		t.text = "4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr4_i = function () {
		var t = new eui.Group();
		this.gr4 = t;
		t.right = 0;
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
		t.horizontalCenter = 9;
		t.text = "4";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl5_i = function () {
		var t = new eui.Group();
		this.gl5 = t;
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
		t.horizontalCenter = -8;
		t.text = "5";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr5_i = function () {
		var t = new eui.Group();
		this.gr5 = t;
		t.right = 0;
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
		t.horizontalCenter = 9;
		t.text = "5";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl6_i = function () {
		var t = new eui.Group();
		this.gl6 = t;
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
		t.horizontalCenter = -8;
		t.text = "6";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr6_i = function () {
		var t = new eui.Group();
		this.gr6 = t;
		t.right = 0;
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
		t.horizontalCenter = 9;
		t.text = "6";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl7_i = function () {
		var t = new eui.Group();
		this.gl7 = t;
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
		t.horizontalCenter = -8;
		t.text = "7";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr7_i = function () {
		var t = new eui.Group();
		this.gr7 = t;
		t.right = 0;
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
		t.horizontalCenter = 9;
		t.text = "7";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl8_i = function () {
		var t = new eui.Group();
		this.gl8 = t;
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
		t.horizontalCenter = -8;
		t.text = "8";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr8_i = function () {
		var t = new eui.Group();
		this.gr8 = t;
		t.right = 0;
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
		t.horizontalCenter = 9;
		t.text = "8";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gl9_i = function () {
		var t = new eui.Group();
		this.gl9 = t;
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
		t.horizontalCenter = -8;
		t.text = "9";
		t.verticalCenter = 0;
		return t;
	};
	_proto.gr9_i = function () {
		var t = new eui.Group();
		this.gr9 = t;
		t.right = 0;
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
		t.horizontalCenter = 9;
		t.text = "9";
		t.verticalCenter = 0;
		return t;
	};
	return GamePentSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/GameScenceSkin.exml'] = window.GameScenceSkin = (function (_super) {
	__extends(GameScenceSkin, _super);
	function GameScenceSkin() {
		_super.call(this);
		this.skinParts = ["reel0","reel1","reel2","reel3","reel4","left_1","left_2","left_3","left_4","left_5","leftLine","right_1","right_2","right_3","right_4","right_5","rightLine","line11","line21","line31","line41","line51","line1","line2","line3","line4","line5","bonusMask","bonusImg","maskGroup","dianji"];
		
		this.height = 631;
		this.width = 1445;
		this.elementsContent = [this._Image1_i(),this._Group1_i(),this.maskGroup_i(),this.dianji_i(),this._Image12_i()];
	}
	var _proto = GameScenceSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "center_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.reel0_i(),this.reel1_i(),this.reel2_i(),this.reel3_i(),this.reel4_i(),this.leftLine_i(),this.rightLine_i(),this.line11_i(),this.line21_i(),this.line31_i(),this.line41_i(),this.line51_i(),this.line1_i(),this.line2_i(),this.line3_i(),this.line4_i(),this.line5_i()];
		return t;
	};
	_proto.reel0_i = function () {
		var t = new Reel();
		this.reel0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelSkin";
		t.x = 104;
		t.y = 6;
		return t;
	};
	_proto.reel1_i = function () {
		var t = new Reel();
		this.reel1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelSkin";
		t.x = 354;
		t.y = 6;
		return t;
	};
	_proto.reel2_i = function () {
		var t = new Reel();
		this.reel2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelSkin";
		t.x = 602;
		t.y = 6;
		return t;
	};
	_proto.reel3_i = function () {
		var t = new Reel();
		this.reel3 = t;
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelSkin";
		t.x = 850;
		t.y = 4;
		return t;
	};
	_proto.reel4_i = function () {
		var t = new Reel();
		this.reel4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "ReelSkin";
		t.x = 1100;
		t.y = 6;
		return t;
	};
	_proto.leftLine_i = function () {
		var t = new eui.Group();
		this.leftLine = t;
		t.alpha = 1;
		t.anchorOffsetX = 0.5;
		t.height = 520;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 30;
		t.x = 37;
		t.y = 56;
		t.elementsContent = [this.left_1_i(),this.left_2_i(),this.left_3_i(),this.left_4_i(),this.left_5_i()];
		return t;
	};
	_proto.left_1_i = function () {
		var t = new eui.Group();
		this.left_1 = t;
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 1.44;
		t.elementsContent = [this._Image2_i(),this._Label1_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "left_1_png";
		t.x = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "1";
		t.textColor = 0x000000;
		t.x = 21;
		t.y = 15.01;
		return t;
	};
	_proto.left_2_i = function () {
		var t = new eui.Group();
		this.left_2 = t;
		t.visible = false;
		t.x = 1.21;
		t.y = 103.05;
		t.elementsContent = [this._Image3_i(),this._Label2_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "left_2_png";
		t.x = 0;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "2";
		t.textColor = 0x000000;
		t.x = 21.92;
		t.y = 16.44;
		return t;
	};
	_proto.left_3_i = function () {
		var t = new eui.Group();
		this.left_3 = t;
		t.visible = false;
		t.x = 2.61;
		t.y = 352.63;
		t.elementsContent = [this._Image4_i(),this._Label3_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "left_3_png";
		t.x = 0;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "3";
		t.textColor = 0x000000;
		t.x = 20.14;
		t.y = 16.31;
		return t;
	};
	_proto.left_4_i = function () {
		var t = new eui.Group();
		this.left_4 = t;
		t.visible = false;
		t.x = 1.92;
		t.y = -21.15;
		t.elementsContent = [this._Image5_i(),this._Label4_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "left_4_png";
		t.x = 0;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "4";
		t.textColor = 0x000000;
		t.x = 20.81;
		t.y = 16.94;
		return t;
	};
	_proto.left_5_i = function () {
		var t = new eui.Group();
		this.left_5 = t;
		t.visible = false;
		t.x = 1.41;
		t.y = 477.34;
		t.elementsContent = [this._Image6_i(),this._Label5_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "left_5_png";
		t.x = 0;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "5";
		t.textColor = 0x000000;
		t.x = 20.92;
		t.y = 17.61;
		return t;
	};
	_proto.rightLine_i = function () {
		var t = new eui.Group();
		this.rightLine = t;
		t.anchorOffsetX = 0.5;
		t.height = 520;
		t.width = 30;
		t.x = 1381;
		t.y = 56;
		t.elementsContent = [this.right_1_i(),this.right_2_i(),this.right_3_i(),this.right_4_i(),this.right_5_i()];
		return t;
	};
	_proto.right_1_i = function () {
		var t = new eui.Group();
		this.right_1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = -57.68;
		t.y = 230.33;
		t.elementsContent = [this._Image7_i(),this._Label6_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = -1;
		t.source = "left_1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "1";
		t.textColor = 0x000000;
		t.x = 39.61;
		t.y = 14.76;
		return t;
	};
	_proto.right_2_i = function () {
		var t = new eui.Group();
		this.right_2 = t;
		t.scaleY = 1;
		t.visible = false;
		t.x = -58.4;
		t.y = 104.91;
		t.elementsContent = [this._Image8_i(),this._Label7_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = -1;
		t.source = "left_2_png";
		t.top = 0;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 9;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "2";
		t.textColor = 0x000000;
		t.verticalCenter = 0;
		return t;
	};
	_proto.right_3_i = function () {
		var t = new eui.Group();
		this.right_3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = -56.74;
		t.y = 348.91;
		t.elementsContent = [this._Image9_i(),this._Label8_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "left_3_png";
		t.x = 80;
		t.y = 4;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "3";
		t.textColor = 0x000000;
		t.x = 39.6;
		t.y = 19.93;
		return t;
	};
	_proto.right_4_i = function () {
		var t = new eui.Group();
		this.right_4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.x = -58.74;
		t.y = -20.48;
		t.elementsContent = [this._Image10_i(),this._Label9_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.source = "left_4_png";
		t.x = 80;
		t.y = 0;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "4";
		t.textColor = 0x000000;
		t.x = 41.47;
		t.y = 15.61;
		return t;
	};
	_proto.right_5_i = function () {
		var t = new eui.Group();
		this.right_5 = t;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 80;
		t.x = -56.65;
		t.y = 477;
		t.elementsContent = [this._Image11_i(),this._Label10_i()];
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.scaleX = -1;
		t.scaleY = 1;
		t.source = "left_5_png";
		t.x = 80;
		t.y = 0;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 32;
		t.text = "5";
		t.textColor = 0x000000;
		t.x = 40.07;
		t.y = 16.41;
		return t;
	};
	_proto.line11_i = function () {
		var t = new eui.Image();
		this.line11 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line1_png";
		t.visible = false;
		t.x = 163;
		t.y = 250;
		return t;
	};
	_proto.line21_i = function () {
		var t = new eui.Image();
		this.line21 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line2_png";
		t.visible = false;
		t.x = 163;
		t.y = 80;
		return t;
	};
	_proto.line31_i = function () {
		var t = new eui.Image();
		this.line31 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line3_png";
		t.visible = false;
		t.x = 163;
		t.y = 420;
		return t;
	};
	_proto.line41_i = function () {
		var t = new eui.Image();
		this.line41 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line4_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 163;
		t.y = 80;
		return t;
	};
	_proto.line51_i = function () {
		var t = new eui.Image();
		this.line51 = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "line5_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 163;
		t.y = 80;
		return t;
	};
	_proto.line1_i = function () {
		var t = new eui.Group();
		this.line1 = t;
		t.alpha = 0;
		t.height = 10;
		t.visible = false;
		t.width = 850;
		t.x = 170;
		t.y = 250;
		t.elementsContent = [this._Rect1_i(),this._Rect2_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x000000;
		t.height = 10;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 850;
		t.x = 2;
		t.y = 3;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x74bb39;
		t.height = 10;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 850;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.line2_i = function () {
		var t = new eui.Group();
		this.line2 = t;
		t.alpha = 0;
		t.height = 10;
		t.visible = false;
		t.width = 850;
		t.x = 180;
		t.y = 80;
		t.elementsContent = [this._Rect3_i(),this._Rect4_i()];
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x000000;
		t.height = 10;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 850;
		t.x = 2;
		t.y = 3;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x5eccf5;
		t.height = 10;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 850;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.line3_i = function () {
		var t = new eui.Group();
		this.line3 = t;
		t.alpha = 0;
		t.height = 10;
		t.visible = false;
		t.width = 850;
		t.x = 180;
		t.y = 420;
		t.elementsContent = [this._Rect5_i(),this._Rect6_i()];
		return t;
	};
	_proto._Rect5_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x000000;
		t.height = 10;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 850;
		t.x = 2;
		t.y = 3;
		return t;
	};
	_proto._Rect6_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xe998ed;
		t.height = 10;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 850;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.line4_i = function () {
		var t = new eui.Group();
		this.line4 = t;
		t.alpha = 0;
		t.height = 10;
		t.rotation = 0;
		t.visible = false;
		t.width = 850;
		t.x = 180;
		t.y = 80;
		t.elementsContent = [this._Rect7_i(),this._Rect8_i(),this._Rect9_i()];
		return t;
	};
	_proto._Rect7_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x000000;
		t.height = 10;
		t.rotation = 141.02;
		t.width = 545;
		t.x = 848;
		t.y = 10;
		return t;
	};
	_proto._Rect8_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xf1db4a;
		t.height = 10;
		t.rotation = 38.58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 550;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Rect9_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xf1db4a;
		t.height = 10;
		t.rotation = 141.02;
		t.width = 550;
		t.x = 850;
		t.y = 5;
		return t;
	};
	_proto.line5_i = function () {
		var t = new eui.Group();
		this.line5 = t;
		t.alpha = 0;
		t.height = 10;
		t.rotation = 0;
		t.visible = false;
		t.width = 850;
		t.x = 180;
		t.y = 420;
		t.elementsContent = [this._Rect10_i(),this._Rect11_i(),this._Rect12_i()];
		return t;
	};
	_proto._Rect10_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0x000000;
		t.height = 10;
		t.rotation = 320.78;
		t.width = 540;
		t.x = 3;
		t.y = 5;
		return t;
	};
	_proto._Rect11_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xe75158;
		t.height = 10;
		t.rotation = 320.78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 550;
		t.x = -4.55;
		t.y = 9.55;
		return t;
	};
	_proto._Rect12_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xe75158;
		t.height = 10;
		t.rotation = 218.96;
		t.width = 550;
		t.x = 850;
		t.y = 12;
		return t;
	};
	_proto.maskGroup_i = function () {
		var t = new eui.Group();
		this.maskGroup = t;
		t.height = 631;
		t.visible = false;
		t.width = 1445;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bonusMask_i(),this.bonusImg_i()];
		return t;
	};
	_proto.bonusMask_i = function () {
		var t = new eui.Rect();
		this.bonusMask = t;
		t.anchorOffsetX = 0;
		t.fillAlpha = 0.5;
		t.height = 631;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 1245;
		t.x = 100;
		t.y = 0;
		return t;
	};
	_proto.bonusImg_i = function () {
		var t = new eui.Image();
		this.bonusImg = t;
		t.height = 91;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bonusImg_png";
		t.verticalCenter = 0;
		t.width = 292;
		return t;
	};
	_proto.dianji_i = function () {
		var t = new eui.Rect();
		this.dianji = t;
		t.alpha = 0.01;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0xffffff;
		t.top = 0;
		t.width = 1238;
		t.x = 102.85;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.horizontalCenter = -1.5;
		t.source = "mmm_png";
		t.verticalCenter = 42.5;
		t.visible = false;
		return t;
	};
	return GameScenceSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/HelpDesSkin.exml'] = window.HelpDesSkin = (function (_super) {
	__extends(HelpDesSkin, _super);
	var HelpDesSkin$Skin13 = 	(function (_super) {
		__extends(HelpDesSkin$Skin13, _super);
		function HelpDesSkin$Skin13() {
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
		var _proto = HelpDesSkin$Skin13.prototype;

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
		return HelpDesSkin$Skin13;
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
		t.height = 935;
		t.horizontalCenter = 0;
		t.source = "BG_1x_png";
		t.verticalCenter = -2.5;
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
		t.top = 116;
		t.skinName = HelpDesSkin$Skin13;
		return t;
	};
	return HelpDesSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/main/HelpSkin.exml'] = window.HelpSkin = (function (_super) {
	__extends(HelpSkin, _super);
	var HelpSkin$Skin14 = 	(function (_super) {
		__extends(HelpSkin$Skin14, _super);
		function HelpSkin$Skin14() {
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
		var _proto = HelpSkin$Skin14.prototype;

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
		return HelpSkin$Skin14;
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
		t.source = "BG_1x_png";
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
		t.bottom = 2;
		t.left = 0;
		t.right = 0;
		t.scrollPolicyH = "off";
		t.scrollPolicyV = "on";
		t.skinName = "MyScrollSkin";
		t.top = -2;
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
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.top = 20;
		t.skinName = HelpSkin$Skin14;
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
	var SetBarSkin$Skin15 = 	(function (_super) {
		__extends(SetBarSkin$Skin15, _super);
		function SetBarSkin$Skin15() {
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
		var _proto = SetBarSkin$Skin15.prototype;

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
		return SetBarSkin$Skin15;
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
		t.skinName = SetBarSkin$Skin15;
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
		var _proto = MainScenceUISkin$Skin16.prototype;

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
		var _proto = MainScenceUISkin$Skin17.prototype;

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
		var _proto = MainScenceUISkin$Skin18.prototype;

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
		var _proto = MainScenceUISkin$Skin19.prototype;

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
		var _proto = MainScenceUISkin$Skin20.prototype;

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
		var _proto = MainScenceUISkin$Skin21.prototype;

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
		var _proto = MainScenceUISkin$Skin22.prototype;

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
		return MainScenceUISkin$Skin22;
	})(eui.Skin);

	var MainScenceUISkin$Skin23 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin23, _super);
		function MainScenceUISkin$Skin23() {
			_super.call(this);
			this.skinParts = ["testBB","labelDisplay"];
			
			this.elementsContent = [this.testBB_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("testBB","source","spin_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("testBB","source","spin_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("testBB","source","spin_hovered_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin23.prototype;

		_proto.testBB_i = function () {
			var t = new eui.Image();
			this.testBB = t;
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
		return MainScenceUISkin$Skin23;
	})(eui.Skin);

	var MainScenceUISkin$Skin24 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin24, _super);
		function MainScenceUISkin$Skin24() {
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
						new eui.SetProperty("_Image1","source","bonusBtn_pressed_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","bonusBtn_disabled_png")
					])
				,
				new eui.State ("rollOver",
					[
						new eui.SetProperty("_Image1","source","bonusBtn_hovered_png")
					])
			];
		}
		var _proto = MainScenceUISkin$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "bonusBtn_png";
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
		return MainScenceUISkin$Skin24;
	})(eui.Skin);

	var MainScenceUISkin$Skin25 = 	(function (_super) {
		__extends(MainScenceUISkin$Skin25, _super);
		function MainScenceUISkin$Skin25() {
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
		var _proto = MainScenceUISkin$Skin25.prototype;

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
		return MainScenceUISkin$Skin25;
	})(eui.Skin);

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
		var _proto = MainScenceUISkin$Skin26.prototype;

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
			t.fontFamily = "Verdana";
			t.horizontalCenter = 0;
			t.size = 14;
			t.verticalCenter = 1;
			return t;
		};
		return MainScenceUISkin$Skin26;
	})(eui.Skin);

	function MainScenceUISkin() {
		_super.call(this);
		this.skinParts = ["bg","bg1","gameScence","lineLabel","betLabel","allBetLabel","infoBtn","lineSubBtn","lineAddBtn","betSubBtn","betAddBtn","speedOffBtn","speedOnBtn","startBtn","bonusBtn","bonusBtnShan","autoItem","stopBtn","rewardLabel","rewardGroup","mcGroup","bigRewardLabel","bigRewardGroup","aGroup","leftLabel","middleLabel","rightLabel","mainGroup","tGameBtn","setBar","t0","t1","t2","t3","t4","textGroup","topList","topListGroup","topMask","topGroup","timeLabel","balanceLabel","chuNaBtn","bottomMask","bottomGroup","score","leftGroup","chooseTools","bonusGroup","bonusClip","playGroup","bonusMask","overCup","gameOver","xiao","da"];
		
		this.height = 990;
		this.width = 1920;
		this.elementsContent = [this.bg_i(),this.bg1_i(),this.mainGroup_i(),this.topGroup_i(),this.bottomGroup_i(),this.leftGroup_i(),this.bonusGroup_i(),this.playGroup_i(),this.bonusMask_i(),this.gameOver_i(),this.xiao_i(),this.da_i()];
	}
	var _proto = MainScenceUISkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.height = 935;
		t.horizontalCenter = 0;
		t.source = "BG_1x_png";
		t.verticalCenter = -2.5;
		return t;
	};
	_proto.bg1_i = function () {
		var t = new eui.Image();
		this.bg1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bonusBg_png";
		t.verticalCenter = -2.5;
		t.visible = false;
		t.width = 1600;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.mainGroup_i = function () {
		var t = new eui.Group();
		this.mainGroup = t;
		t.height = 990;
		t.horizontalCenter = 0;
		t.scrollEnabled = false;
		t.touchEnabled = true;
		t.touchThrough = true;
		t.verticalCenter = 0;
		t.width = 1266;
		t.elementsContent = [this.gameScence_i(),this._Group1_i(),this._Group5_i(),this.aGroup_i(),this.leftLabel_i(),this.middleLabel_i(),this.rightLabel_i()];
		return t;
	};
	_proto.gameScence_i = function () {
		var t = new GameScence();
		this.gameScence = t;
		t.horizontalCenter = 4.5;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.skinName = "GameScenceSkin";
		t.verticalCenter = -40;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0.5;
		t.y = 70.43;
		t.elementsContent = [this._Image1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "logo_png";
		t.y = 18;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 8;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.touchEnabled = false;
		t.touchThrough = false;
		t.y = 757;
		t.elementsContent = [this._Image2_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this.infoBtn_i(),this.lineSubBtn_i(),this.lineAddBtn_i(),this.betSubBtn_i(),this.betAddBtn_i(),this.speedOffBtn_i(),this.speedOnBtn_i(),this.startBtn_i(),this.bonusBtn_i(),this.bonusBtnShan_i(),this.autoItem_i(),this.stopBtn_i(),this.rewardGroup_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = -11.5;
		t.scaleX = 1;
		t.source = "btn_bottom_png";
		t.touchEnabled = false;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 142.23;
		t.y = 24.58;
		t.elementsContent = [this._Image3_i(),this.lineLabel_i()];
		return t;
	};
	_proto._Image3_i = function () {
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
		t.horizontalCenter = 0.5;
		t.text = "5";
		t.y = 36.66;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.x = 319.21;
		t.y = 24.21;
		t.elementsContent = [this._Image4_i(),this.betLabel_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "line_bet_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.betLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.betLabel = t;
		t.font = "f0_fnt";
		t.horizontalCenter = -1;
		t.text = "x0.01";
		t.y = 36.02;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.x = 493.3;
		t.y = 70.52;
		t.elementsContent = [this._Image5_i(),this.allBetLabel_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "total_bet_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.allBetLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.allBetLabel = t;
		t.font = "f0_fnt";
		t.horizontalCenter = -1;
		t.letterSpacing = 2;
		t.text = "x0.05";
		t.y = 30.31;
		return t;
	};
	_proto.infoBtn_i = function () {
		var t = new MouseButton();
		this.infoBtn = t;
		t.label = "";
		t.x = 24.4;
		t.y = 30.31;
		t.skinName = MainScenceUISkin$Skin16;
		return t;
	};
	_proto.lineSubBtn_i = function () {
		var t = new MouseButton();
		this.lineSubBtn = t;
		t.label = "";
		t.x = 151.08;
		t.y = 82.65;
		t.skinName = MainScenceUISkin$Skin17;
		return t;
	};
	_proto.lineAddBtn_i = function () {
		var t = new MouseButton();
		this.lineAddBtn = t;
		t.label = "";
		t.x = 235.76;
		t.y = 84.01;
		t.skinName = MainScenceUISkin$Skin18;
		return t;
	};
	_proto.betSubBtn_i = function () {
		var t = new MouseButton();
		this.betSubBtn = t;
		t.label = "";
		t.x = 328.43;
		t.y = 83.99;
		t.skinName = MainScenceUISkin$Skin19;
		return t;
	};
	_proto.betAddBtn_i = function () {
		var t = new MouseButton();
		this.betAddBtn = t;
		t.label = "";
		t.x = 412.6;
		t.y = 84.02;
		t.skinName = MainScenceUISkin$Skin20;
		return t;
	};
	_proto.speedOffBtn_i = function () {
		var t = new MouseButton();
		this.speedOffBtn = t;
		t.label = "";
		t.x = 969.14;
		t.y = 31.67;
		t.skinName = MainScenceUISkin$Skin21;
		return t;
	};
	_proto.speedOnBtn_i = function () {
		var t = new MouseButton();
		this.speedOnBtn = t;
		t.label = "";
		t.visible = false;
		t.x = 969.14;
		t.y = 31.67;
		t.skinName = MainScenceUISkin$Skin22;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new MouseButton();
		this.startBtn = t;
		t.label = "";
		t.x = 1085.49;
		t.y = 29.21;
		t.skinName = MainScenceUISkin$Skin23;
		return t;
	};
	_proto.bonusBtn_i = function () {
		var t = new MouseButton();
		this.bonusBtn = t;
		t.label = "";
		t.visible = false;
		t.x = 1085.49;
		t.y = 29.21;
		t.skinName = MainScenceUISkin$Skin24;
		return t;
	};
	_proto.bonusBtnShan_i = function () {
		var t = new eui.Image();
		this.bonusBtnShan = t;
		t.source = "bonusBtn_hovered_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 1085.49;
		t.y = 29.21;
		return t;
	};
	_proto.autoItem_i = function () {
		var t = new AutoItem();
		this.autoItem = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "AutoItemSkin";
		t.x = 842.14;
		t.y = -439.92;
		return t;
	};
	_proto.stopBtn_i = function () {
		var t = new MouseButton();
		this.stopBtn = t;
		t.label = "";
		t.visible = false;
		t.x = 1085.49;
		t.y = 29.21;
		t.skinName = MainScenceUISkin$Skin25;
		return t;
	};
	_proto.rewardGroup_i = function () {
		var t = new eui.Group();
		this.rewardGroup = t;
		t.anchorOffsetX = 182;
		t.anchorOffsetY = 31.5;
		t.x = 674.56;
		t.y = 46.99;
		t.elementsContent = [this._Image6_i(),this.rewardLabel_i()];
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "dynamic_win_box_level_3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.rewardLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.rewardLabel = t;
		t.font = "f2_fnt";
		t.horizontalCenter = -1;
		t.letterSpacing = 1;
		t.text = "x0.00";
		t.y = 30.83;
		return t;
	};
	_proto.aGroup_i = function () {
		var t = new eui.Group();
		this.aGroup = t;
		t.bottom = 0;
		t.height = 990;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchChildren = false;
		t.touchEnabled = false;
		t.touchThrough = true;
		t.visible = false;
		t.width = 1266;
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
		t.elementsContent = [this._Image7_i(),this.bigRewardLabel_i()];
		return t;
	};
	_proto._Image7_i = function () {
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
	_proto.leftLabel_i = function () {
		var t = new eui.Label();
		this.leftLabel = t;
		t.size = 29;
		t.text = "线 赢得";
		t.textColor = 0x020202;
		t.visible = false;
		t.x = 107.06;
		t.y = 741.52;
		return t;
	};
	_proto.middleLabel_i = function () {
		var t = new eui.Label();
		this.middleLabel = t;
		t.horizontalCenter = 0.5;
		t.size = 29;
		t.text = "点击旋转以开始";
		t.textColor = 0x020202;
		t.y = 741.52;
		return t;
	};
	_proto.rightLabel_i = function () {
		var t = new eui.Label();
		this.rightLabel = t;
		t.size = 29;
		t.text = "总奖金：";
		t.textColor = 0x020202;
		t.visible = false;
		t.x = 973.51;
		t.y = 741.52;
		return t;
	};
	_proto.topGroup_i = function () {
		var t = new eui.Group();
		this.topGroup = t;
		t.height = 25;
		t.horizontalCenter = 0;
		t.top = 0;
		t.width = 1920;
		t.elementsContent = [this._Image8_i(),this.tGameBtn_i(),this.setBar_i(),this.textGroup_i(),this.topListGroup_i(),this.topMask_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
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
		t.verticalCenter = 4.5;
		return t;
	};
	_proto.setBar_i = function () {
		var t = new SetBar();
		this.setBar = t;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "SetBarSkin";
		t.top = -1;
		return t;
	};
	_proto.textGroup_i = function () {
		var t = new eui.Group();
		this.textGroup = t;
		t.horizontalCenter = -15.5;
		t.verticalCenter = 3.5;
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
		t.verticalCenter = 1;
		t.x = 10;
		return t;
	};
	_proto.t1_i = function () {
		var t = new TextButton();
		this.t1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "TextButtonSkin";
		t.verticalCenter = 2;
		t.x = 10;
		return t;
	};
	_proto.t2_i = function () {
		var t = new TextButton();
		this.t2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "TextButtonSkin";
		t.verticalCenter = 2;
		t.x = 20;
		return t;
	};
	_proto.t3_i = function () {
		var t = new TextButton();
		this.t3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "TextButtonSkin";
		t.verticalCenter = 2;
		t.x = 79;
		return t;
	};
	_proto.t4_i = function () {
		var t = new TextButton();
		this.t4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.skinName = "TextButtonSkin";
		t.verticalCenter = 2;
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
		t.y = -155;
		t.elementsContent = [this._Image9_i(),this.topList_i()];
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.right = 0;
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
		t.elementsContent = [this._Image10_i(),this.timeLabel_i(),this._Group6_i(),this.bottomMask_i()];
		return t;
	};
	_proto._Image10_i = function () {
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
		t.fontFamily = "Trebuchet MS";
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
		t.elementsContent = [this._Image11_i(),this.balanceLabel_i(),this.chuNaBtn_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 5;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "attention_png";
		t.x = 7.33;
		t.y = 2;
		return t;
	};
	_proto.balanceLabel_i = function () {
		var t = new eui.Label();
		this.balanceLabel = t;
		t.fontFamily = "Trebuchet MS";
		t.height = 22;
		t.size = 16;
		t.text = "￥9,990.01";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.x = 26.17;
		t.y = 0;
		return t;
	};
	_proto.chuNaBtn_i = function () {
		var t = new MouseButton();
		this.chuNaBtn = t;
		t.label = "出纳柜台";
		t.x = 127.65;
		t.y = 0;
		t.skinName = MainScenceUISkin$Skin26;
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
	_proto.leftGroup_i = function () {
		var t = new eui.Group();
		this.leftGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.visible = false;
		t.y = 860;
		t.elementsContent = [this._Image12_i(),this.score_i(),this._Label1_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.left = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "balance_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.score_i = function () {
		var t = new eui.BitmapLabel();
		this.score = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "f5_fnt";
		t.height = 46;
		t.horizontalCenter = 0;
		t.letterSpacing = -0.4;
		t.scaleX = 0.8;
		t.scaleY = 0.68;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "center";
		t.y = 36.4;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.fontFamily = "Microsoft JhengHei";
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 28;
		t.text = "您的余额";
		t.textColor = 0xd2a527;
		t.y = 5.33;
		return t;
	};
	_proto.bonusGroup_i = function () {
		var t = new eui.Group();
		this.bonusGroup = t;
		t.height = 990;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1266;
		t.elementsContent = [this.chooseTools_i()];
		return t;
	};
	_proto.chooseTools_i = function () {
		var t = new ExtraBonusEntry();
		this.chooseTools = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.02;
		t.scaleY = 1.02;
		t.skinName = "ExtraBonusEntrySkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.playGroup_i = function () {
		var t = new eui.Group();
		this.playGroup = t;
		t.height = 990;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1266;
		t.elementsContent = [this.bonusClip_i()];
		return t;
	};
	_proto.bonusClip_i = function () {
		var t = new BonusAnimation();
		this.bonusClip = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.skinName = "BonusAnimationSkin";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bonusMask_i = function () {
		var t = new eui.Rect();
		this.bonusMask = t;
		t.anchorOffsetX = 0;
		t.bottom = 0;
		t.fillAlpha = 0.27;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.gameOver_i = function () {
		var t = new eui.Group();
		this.gameOver = t;
		t.height = 990;
		t.horizontalCenter = 2;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1266;
		t.elementsContent = [this.overCup_i()];
		return t;
	};
	_proto.overCup_i = function () {
		var t = new Cup();
		this.overCup = t;
		t.horizontalCenter = -1;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.skinName = "CupSkin";
		t.verticalCenter = -8.5;
		return t;
	};
	_proto.xiao_i = function () {
		var t = new eui.Image();
		this.xiao = t;
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "mmm_png";
		t.verticalCenter = -4.5;
		t.visible = false;
		return t;
	};
	_proto.da_i = function () {
		var t = new eui.Image();
		this.da = t;
		t.alpha = 0.5;
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "ccc_png";
		t.verticalCenter = 5.5;
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
		t.bold = true;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 14;
		t.text = "大西瓜圆又圆";
		t.y = 94;
		return t;
	};
	return ShowItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/skins/game/net/netcloseSkin.exml'] = window.netcloseSkin = (function (_super) {
	__extends(netcloseSkin, _super);
	var netcloseSkin$Skin27 = 	(function (_super) {
		__extends(netcloseSkin$Skin27, _super);
		function netcloseSkin$Skin27() {
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
		var _proto = netcloseSkin$Skin27.prototype;

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
		return netcloseSkin$Skin27;
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
		t.skinName = netcloseSkin$Skin27;
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
		this.skinParts = ["track","tsbar","thumb"];
		
		this.width = 386;
		this.elementsContent = [this.track_i(),this.tsbar_i(),this.thumb_i()];
	}
	var _proto = HSlider1Skin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
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
	var SetSkin$Skin28 = 	(function (_super) {
		__extends(SetSkin$Skin28, _super);
		function SetSkin$Skin28() {
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
		var _proto = SetSkin$Skin28.prototype;

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
		return SetSkin$Skin28;
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
		t.skinName = SetSkin$Skin28;
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
	var StipSkin$Skin29 = 	(function (_super) {
		__extends(StipSkin$Skin29, _super);
		function StipSkin$Skin29() {
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
		var _proto = StipSkin$Skin29.prototype;

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
		return StipSkin$Skin29;
	})(eui.Skin);

	var StipSkin$Skin30 = 	(function (_super) {
		__extends(StipSkin$Skin30, _super);
		function StipSkin$Skin30() {
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
		var _proto = StipSkin$Skin30.prototype;

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
		return StipSkin$Skin30;
	})(eui.Skin);

	var StipSkin$Skin31 = 	(function (_super) {
		__extends(StipSkin$Skin31, _super);
		function StipSkin$Skin31() {
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
		var _proto = StipSkin$Skin31.prototype;

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
		return StipSkin$Skin31;
	})(eui.Skin);

	function StipSkin() {
		_super.call(this);
		this.skinParts = ["bg","autoImg","titleLabel","okBtn","cancleBtn","autoGroup","img","desLabel","confirBtn","allGroup"];
		
		this.height = 990;
		this.width = 1600;
		this.elementsContent = [this.bg_i(),this.autoGroup_i(),this.allGroup_i()];
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
		t.skinName = StipSkin$Skin29;
		return t;
	};
	_proto.cancleBtn_i = function () {
		var t = new MouseButton();
		this.cancleBtn = t;
		t.label = "否";
		t.x = 233;
		t.y = 210;
		t.skinName = StipSkin$Skin30;
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
		t.skinName = StipSkin$Skin31;
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