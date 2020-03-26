var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SetUI = (function (_super) {
    __extends(SetUI, _super);
    function SetUI() {
        var _this = _super.call(this) || this;
        _this.numZ = 0;
        _this.numY = 0;
        _this.isHuaDong = true;
        _this.isSDong = false;
        _this.isjueding = false;
        _this.isbegin = false;
        _this.jiLuZ = 0;
        _this.jiLuY = 0;
        _this.skinName = SetSkin;
        return _this;
    }
    SetUI.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
        // alert("onAdd");
        this.init();
        this.huadong();
        this.registerEvent(this.upPeiFu, egret.TouchEvent.TOUCH_TAP, this.upOnTab, this);
        this.registerEvent(this.upGuiZe, egret.TouchEvent.TOUCH_TAP, this.upOnTab, this);
        this.registerEvent(this.upLiShi, egret.TouchEvent.TOUCH_TAP, this.upOnTab, this);
        this.registerEvent(this.upSet, egret.TouchEvent.TOUCH_TAP, this.upOnTab, this);
        this.registerEvent(this.upTouZhu, egret.TouchEvent.TOUCH_TAP, this.upOnTab, this);
        this.registerEvent(this.renHeTo, egret.TouchEvent.TOUCH_TAP, this.renHeToaa, this);
        this.registerEvent(this.freeGameTo, egret.TouchEvent.TOUCH_TAP, this.freeGameToaa, this);
        this.registerEvent(this.autoBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.speedBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.zuoShouTo, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.musicBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.registerEvent(this.autoPlay, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        this.shiZhi2.addEventListener(egret.Event.CHANGE, this.shiZhi2Change, this);
        // this.registerEvent(this.exitBtn, egret.TouchEvent.TOUCH_TAP, this.onTab, this);
        egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.downs, this);
        egret.MainContext.instance.stage.addEventListener(egret.StageOrientationEvent.ORIENTATION_CHANGE, this.onOChange1, this);
        egret.MainContext.instance.stage.addEventListener(egret.Event.DEACTIVATE, this.closeMusic, this);
        // egret.MainContext.instance.stage.addEventListener(egret.Event.ACTIVATE,this.upMusic,this);
        this.zuoShouTo.liang.visible = false;
        // this.liShiInfoGroup.viewport = this.liShiInfo.list;
        //  this.liShiInfo.list.useVirtualLayout = true;
        this.liShiInfo.list.itemRenderer = LiShiItem;
        //  SoundManager.getInstance().setEffectVolume(10);
    };
    SetUI.prototype.downs = function () {
        // let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
        // ui.setUI.isHuaDong = true;
        this.isSDong = false;
    };
    SetUI.prototype.onOChange1 = function () {
        var _this = this;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        if (!ui) {
            return;
        }
        egret.setTimeout(function () {
            if (GameConfig.autoPlay) {
                _this.thumbDisPosion();
            }
            else {
                _this.shiZhi1.tsbar.visible = true;
                _this.shiZhi2.tsbar.visible = true;
                _this.shiZhi3.tsbar.visible = true;
                _this.shiZhi4.tsbar.visible = true;
                _this.shiZhi5.tsbar.visible = true;
                _this.shiZhi1.track.visible = true;
                _this.shiZhi2.track.visible = true;
                _this.shiZhi3.track.visible = true;
                _this.shiZhi4.track.visible = true;
                _this.shiZhi5.track.visible = true;
                _this.shiZhi1.thumbDis.visible = false;
                _this.shiZhi1.thumb0Dis.visible = false;
                _this.shiZhi1.sanjiaoDis.visible = false;
                _this.shiZhi2.thumbDis.visible = false;
                _this.shiZhi2.thumb0Dis.visible = false;
                _this.shiZhi2.sanjiaoDis.visible = false;
                _this.shiZhi3.thumbDis.visible = false;
                _this.shiZhi3.thumb0Dis.visible = false;
                _this.shiZhi3.sanjiaoDis.visible = false;
                _this.shiZhi4.thumbDis.visible = false;
                _this.shiZhi4.thumb0Dis.visible = false;
                _this.shiZhi4.sanjiaoDis.visible = false;
                _this.shiZhi5.thumbDis.visible = false;
                _this.shiZhi5.thumb0Dis.visible = false;
                _this.shiZhi5.sanjiaoDis.visible = false;
            }
            if ((GameManager.getInstance().gameState == GameType.GameState.PLAYING || GameManager.getInstance().getFreeCount() > 0) && !GameConfig.autoPlay) {
                _this.shiZhi1.tsbar.visible = false;
                _this.shiZhi1.track.visible = false;
                _this.shiZhi1.thumbDis.x = _this.shiZhi1.thumb.x;
                _this.shiZhi1.thumbDis.visible = true;
                _this.shiZhi1.thumb0Dis.x = _this.shiZhi1.thumb0.x;
                _this.shiZhi1.thumb0Dis.y = _this.shiZhi1.thumb0.y;
                _this.shiZhi1.thumb0Dis.scaleX = _this.shiZhi1.thumb0.scaleX;
                _this.shiZhi1.thumb0Dis.scaleY = _this.shiZhi1.thumb0.scaleY;
                _this.shiZhi1.thumb0Dis.visible = true;
                _this.shiZhi1.sanjiaoDis.x = _this.shiZhi1.sanjiao.x;
                _this.shiZhi1.sanjiaoDis.y = _this.shiZhi1.sanjiao.y;
                _this.shiZhi1.sanjiaoDis.scaleX = _this.shiZhi1.sanjiao.scaleX;
                _this.shiZhi1.sanjiaoDis.scaleY = _this.shiZhi1.sanjiao.scaleY;
                _this.shiZhi1.sanjiaoDis.visible = true;
            }
            else if (!GameConfig.autoPlay) {
                _this.shiZhi1.track.visible = true;
                _this.shiZhi1.tsbar.visible = true;
                _this.shiZhi1.thumbDis.visible = false;
                _this.shiZhi1.thumb0Dis.visible = false;
                _this.shiZhi1.sanjiaoDis.visible = false;
            }
        }, this, 500);
        egret.setTimeout(function () {
            ui.setAm();
            if (GameConfig.autoPlay) {
                _this.stopAuto.visible = true;
                _this.autoNumBer.text = "" + vo.GameData.autoPlayCount;
            }
            else {
                _this.stopAuto.visible = false;
                _this.autoNumBer.text = _this.shiZhi2.tabela.text;
            }
        }, this, 300);
        if (this.currentState == "up") {
            egret.setTimeout(function () {
                ui.jiaoHuanSet(false);
                ui.first(false); //这个只是改变比例
            }, this, 500);
        }
        if (this.currentState == "down") {
            egret.setTimeout(function () {
                ui.jiaoHuanSet(true);
                ui.first(true); //这个只是改变比例
            }, this, 500);
        }
        egret.setTimeout(function () {
            // this.setUpZhi(1);
            _this.shiZhi3.maximum = parseInt(vo.GameData.betScoreArr[vo.GameData.betIndex] * 2000 + "");
            _this.shiZhi4.maximum = parseInt(vo.GameData.betScoreArr[vo.GameData.betIndex] * 20000 + "");
            _this.shiZhi5.maximum = parseInt(vo.GameData.betScoreArr[vo.GameData.betIndex] * 20000 + "");
            _this.danCi2.text = vo.GameData.betScoreArr[vo.GameData.betIndex] * 2000 + ".00";
            _this.jia2.text = vo.GameData.betScoreArr[vo.GameData.betIndex] * 20000 + ".00";
            _this.jian2.text = vo.GameData.betScoreArr[vo.GameData.betIndex] * 20000 + ".00";
        }, this, 300);
        // console.log("GameConfig.dangQianYe === " + GameConfig.dangQianYe);
    };
    SetUI.prototype.setUpZhi = function (num) {
        if (num == 1) {
            GameConfig.dangQianYe = parseInt(this.upTouZhu.name);
            this.upXuanZe.x = this.upTouZhu.x;
            this.upXuanZe.width = this.upTouZhu.width * this.upTouZhu.scaleX;
            this.upTouZhu.selected = true;
        }
        else if (num == 2) {
            GameConfig.dangQianYe = parseInt(this.upSet.name);
            this.upXuanZe.x = this.upSet.x;
            this.upXuanZe.width = this.upSet.width * this.upSet.scaleX;
            this.upSet.selected = true;
        }
        else if (num == 3) {
            GameConfig.dangQianYe = parseInt(this.upPeiFu.name);
            this.upXuanZe.x = this.upPeiFu.x;
            this.upXuanZe.width = this.upPeiFu.width * this.upPeiFu.scaleX;
            this.upPeiFu.selected = true;
        }
        else if (num == 4) {
            GameConfig.dangQianYe = parseInt(this.upGuiZe.name);
            this.upXuanZe.x = this.upGuiZe.x;
            this.upXuanZe.width = this.upGuiZe.width * this.upGuiZe.scaleX;
            this.upGuiZe.selected = true;
        }
        else if (num == 5) {
            GameConfig.dangQianYe = parseInt(this.upLiShi.name);
            this.upXuanZe.x = this.upLiShi.x;
            this.upXuanZe.width = this.upLiShi.width * this.upLiShi.scaleX;
            this.upLiShi.selected = true;
        }
        egret.localStorage.setItem("dangQianYe", GameConfig.dangQianYe);
    };
    /**
     * 滑动改变界面
     */
    SetUI.prototype.huadong = function () {
        this.numName1 = this.touZhuScroller.x;
        this.numName2 = this.sheZhiScroller.x;
        this.numName3 = this.peiFuScroller.x;
        this.numName4 = this.guiZeScroller.x;
        this.numName6 = this.liShiScroller.x;
        this.numName5 = this.liShiUpGroup.x;
        this.numName7 = this.liShiInfoGroup.x;
        // this.registerEvent(this, egret.TouchEvent.TOUCH_BEGIN, (e: egret.TouchEvent) => {
        // }, this);
        // this.registerEvent(this, egret.TouchEvent.TOUCH_MOVE,this.addXiaORZuoYou,this);
        this.addEvent();
    };
    SetUI.prototype.setScoler = function (boo) {
        var ofOrOn = "off";
        if (boo) {
            ofOrOn = "off";
        }
        else {
            ofOrOn = "on";
        }
        console.log(ofOrOn);
        this.touZhuScroller.scrollPolicyV = ofOrOn;
        this.sheZhiScroller.scrollPolicyV = ofOrOn;
        this.peiFuScroller.scrollPolicyV = ofOrOn;
        this.guiZeScroller.scrollPolicyV = ofOrOn;
        this.liShiScroller.scrollPolicyV = ofOrOn;
        this.liShiInfoGroup.scrollPolicyV = ofOrOn;
        this.touZhuScroller.touchEnabled = boo;
        this.sheZhiScroller.touchEnabled = boo;
        this.peiFuScroller.touchEnabled = boo;
        this.liShiInfoGroup.touchEnabled = boo;
        this.guiZeScroller.touchEnabled = boo;
        this.liShiScroller.touchEnabled = boo;
    };
    SetUI.prototype.changeIsHuaDongTrue = function (e) {
        this.touZhuScroller.enabled = true;
        //this.touZhuScroller.scrollPolicyV = "off";
        //this.isHuaDong = false;
        if (this.geiZhengShu(e.stageX - this.numZ) > this.geiZhengShu(e.stageY - this.numY)) {
            return;
        }
        //this.isHuaDong = true;
    };
    SetUI.prototype.changeIsHuaDongFalse = function (e) {
        if (this.isSDong)
            return;
        this.numZ = e.stageX; //记录初次点击位置
        this.numY = e.stageY; //记录初次点击位置
        this.time = egret.getTimer();
        this.isjueding = false;
        this.isbegin = true;
        eui.Scroller.scrollThreshold = 1000;
    };
    SetUI.prototype.addEvent = function () {
        // this.touZhuScroller.stopAnimation();
        // this.touZhuScroller.viewport.scrollV
        //this.registerEvent(this, egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.touchEnd,this);
        this.registerEvent(this, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        // this.registerEvent(this.touZhuScroller, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        // this.registerEvent(this.sheZhiScroller, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        // this.registerEvent(this.peiFuScroller, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        // this.registerEvent(this.guiZeScroller, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        // this.registerEvent(this.liShiScroller, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        //this.registerEvent(this.liShiScroller, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        // this.registerEvent(this.touZhuScroller, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        // this.registerEvent(this.sheZhiScroller, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        // this.registerEvent(this.peiFuScroller, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        // this.registerEvent(this.guiZeScroller, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        // this.registerEvent(this.liShiScroller, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        this.registerEvent(egret.MainContext.instance.stage, egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.registerEvent(egret.MainContext.instance.stage, egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        this.registerEvent(this.touZhuScroller, egret.TouchEvent.TOUCH_BEGIN, this.changeIsHuaDongFalse, this);
        this.registerEvent(this.sheZhiScroller, egret.TouchEvent.TOUCH_BEGIN, this.changeIsHuaDongFalse, this);
        this.registerEvent(this.peiFuScroller, egret.TouchEvent.TOUCH_BEGIN, this.changeIsHuaDongFalse, this);
        this.registerEvent(this.guiZeScroller, egret.TouchEvent.TOUCH_BEGIN, this.changeIsHuaDongFalse, this);
        this.registerEvent(this.liShiScroller, egret.TouchEvent.TOUCH_BEGIN, this.changeIsHuaDongFalse, this);
        this.registerEvent(this.liShiInfoGroup, egret.TouchEvent.TOUCH_BEGIN, this.changeIsHuaDongFalse, this);
        ///this.sheZhiScroller.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.changeIsHuaDongFalse,this,true);
        // this.registerEvent(this.touZhuScroller, egret.TouchEvent.TOUCH_END, this.changeIsHuaDongTrue, this);
        // this.registerEvent(this.sheZhiScroller, egret.TouchEvent.TOUCH_END, this.changeIsHuaDongTrue, this);
        // this.registerEvent(this.peiFuScroller, egret.TouchEvent.TOUCH_END, this.changeIsHuaDongTrue, this);
        // this.registerEvent(this.guiZeScroller, egret.TouchEvent.TOUCH_END, this.changeIsHuaDongTrue, this);
        // this.registerEvent(this.liShiScroller, egret.TouchEvent.TOUCH_END, this.changeIsHuaDongTrue, this);
    };
    SetUI.prototype.initScroller = function () {
        // egret.log("GameConfig.dangQianYe === " + GameConfig.dangQianYe);
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        if (GameConfig.dangQianYe == 1) {
            this.setUpZhi(1);
            this.touZhuScroller.visible = true;
            ui.curr();
            egret.Tween.get(this.touZhuScroller).to({ x: this.numName1 }, 100).call(function () {
                //this.huadong();
            });
        }
        else if (GameConfig.dangQianYe == 2) {
            this.sheZhiScroller.visible = true;
            this.setUpZhi(2);
            egret.Tween.get(this.sheZhiScroller).to({ x: this.numName2 }, 100).call(function () {
                //this.huadong();
            });
        }
        else if (GameConfig.dangQianYe == 3) {
            this.peiFuScroller.visible = true;
            this.pfBg.visible = true;
            this.setUpZhi(3);
            egret.Tween.get(this.pfBg).to({ x: this.numName3 }, 100);
            egret.Tween.get(this.peiFuScroller).to({ x: this.numName3 }, 100).call(function () {
                //this.huadong();
            });
        }
        else if (GameConfig.dangQianYe == 4) {
            this.guiZeScroller.visible = true;
            this.setUpZhi(4);
            egret.Tween.get(this.guiZeScroller).to({ x: this.numName4 }, 100).call(function () {
                //this.huadong();
            });
        }
        else if (GameConfig.dangQianYe == 5) {
            this.setUpZhi(5);
            this.getAndShowHistory();
            this.liShiScroller.visible = true;
            this.liShiUpGroup.visible = true;
            egret.Tween.get(this.liShiScroller).to({ x: this.numName6 }, 100).call(function () {
                //this.huadong();
            });
            egret.Tween.get(this.liShiUpGroup).to({ x: this.numName5 }, 100).call(function () {
                //this.huadong();
            });
        }
    };
    SetUI.prototype.geiZhengShu = function (e) {
        if (e < 0) {
            return -e;
        }
        else {
            return e;
        }
    };
    SetUI.prototype.touchEnd = function (e) {
        //console.log('aaaaaaaa', e.currentTarget);
        if (!this.isHuaDong) {
            return;
        }
        if (!this.isbegin)
            return;
        this.isbegin = false;
        if (this.isSDong)
            return;
        this.isSDong = false;
        // if(this.geiZhengShu(e.stageX-this.numZ)<this.geiZhengShu(e.stageY-this.numZ)){
        // 	this.initScroller();
        // 	return;
        // }
        this.liShiInfoGroup.visible = false;
        this.liShiDiTuRect0.visible = false;
        //this.setScoler(true);
        this.peiFuScroller.visible = false;
        this.pfBg.visible = false;
        this.sheZhiScroller.visible = false;
        this.guiZeScroller.visible = false;
        this.touZhuScroller.visible = false;
        this.liShiScroller.visible = false;
        this.liShiUpGroup.visible = false;
        // this.touZhuScroller.touchEnabled = true;
        // this.peiFuScroller.touchEnabled = true;
        // this.sheZhiScroller.touchEnabled = true;
        // this.guiZeScroller.touchEnabled = true;
        // this.liShiScroller.touchEnabled = true;
        // this.removeRegister(this);
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        if (GameConfig.dangQianYe == 1) {
            this.touZhuScroller.visible = true;
            ui.curr();
            if (e.stageX - this.numZ < -this.width * 1 / 4) {
                this.touZhuScroller.visible = false;
                this.sheZhiScroller.visible = true;
                this.setUpZhi(2);
                egret.Tween.get(this.sheZhiScroller).to({ x: this.numName2 }, 100).call(function () {
                    //this.huadong();
                });
            }
            else {
                egret.Tween.get(this.touZhuScroller).to({ x: this.numName1 }, 100).call(function () {
                    //this.huadong();
                });
            }
        }
        else if (GameConfig.dangQianYe == 2) {
            if (e.stageX - this.numZ < -this.width * 1 / 4) {
                this.sheZhiScroller.visible = false;
                this.peiFuScroller.visible = true;
                this.pfBg.visible = true;
                this.setUpZhi(3);
                egret.Tween.get(this.pfBg).to({ x: this.numName3 }, 100);
                egret.Tween.get(this.peiFuScroller).to({ x: this.numName3 }, 100).call(function () {
                    //this.huadong();
                });
            }
            else if (e.stageX - this.numZ > this.width * 1 / 4) {
                this.sheZhiScroller.visible = false;
                this.touZhuScroller.visible = true;
                ui.curr();
                this.setUpZhi(1);
                egret.Tween.get(this.touZhuScroller).to({ x: this.numName1 }, 100).call(function () {
                    //this.huadong();
                });
            }
            else {
                this.sheZhiScroller.visible = true;
                this.setUpZhi(2);
                egret.Tween.get(this.sheZhiScroller).to({ x: this.numName2 }, 100).call(function () {
                    //this.huadong();
                });
            }
        }
        else if (GameConfig.dangQianYe == 3) {
            if (e.stageX - this.numZ < -this.width * 1 / 4) {
                this.peiFuScroller.visible = false;
                this.pfBg.visible = false;
                this.guiZeScroller.visible = true;
                this.setUpZhi(4);
                egret.Tween.get(this.guiZeScroller).to({ x: this.numName4 }, 100).call(function () {
                    //this.huadong();
                });
            }
            else if (e.stageX - this.numZ > this.width * 1 / 4) {
                this.peiFuScroller.visible = false;
                this.pfBg.visible = false;
                this.sheZhiScroller.visible = true;
                this.setUpZhi(2);
                egret.Tween.get(this.sheZhiScroller).to({ x: this.numName2 }, 100).call(function () {
                    //this.huadong();
                });
            }
            else {
                this.peiFuScroller.visible = true;
                this.pfBg.visible = true;
                this.setUpZhi(3);
                egret.Tween.get(this.pfBg).to({ x: this.numName3 }, 100);
                egret.Tween.get(this.peiFuScroller).to({ x: this.numName3 }, 100).call(function () {
                    //this.huadong();
                });
            }
        }
        else if (GameConfig.dangQianYe == 4) {
            if (e.stageX - this.numZ < -this.width * 1 / 4) {
                this.setUpZhi(5);
                this.guiZeScroller.visible = false;
                this.getAndShowHistory();
                this.liShiScroller.visible = true;
                egret.Tween.get(this.liShiScroller).to({ x: this.numName6 }, 100).call(function () {
                    //this.huadong();
                });
                this.liShiUpGroup.visible = true;
                egret.Tween.get(this.liShiUpGroup).to({ x: this.numName5 }, 100).call(function () {
                    //this.huadong();
                });
            }
            else if (e.stageX - this.numZ > this.width * 1 / 4) {
                this.guiZeScroller.visible = false;
                this.peiFuScroller.visible = true;
                this.pfBg.visible = true;
                this.setUpZhi(3);
                egret.Tween.get(this.pfBg).to({ x: this.numName3 }, 100);
                egret.Tween.get(this.peiFuScroller).to({ x: this.numName3 }, 100).call(function () {
                    //this.huadong();
                });
            }
            else {
                this.guiZeScroller.visible = true;
                this.setUpZhi(4);
                egret.Tween.get(this.guiZeScroller).to({ x: this.numName4 }, 100).call(function () {
                    //this.huadong();
                });
            }
        }
        else if (GameConfig.dangQianYe == 5) {
            // if(e.stageX<this.width*1/4 ){
            this.liShiScroller.visible = true;
            this.liShiUpGroup.visible = true;
            // 	this.setUpZhi(1);
            // 	this.touZhuScroller.visible = true;
            // 	egret.Tween.get(this.guiZeScroller).to({ x:this.numName4 }, 500);
            // }else
            if (e.stageX - this.numZ > this.width * 1 / 4) {
                this.liShiScroller.visible = false;
                this.liShiUpGroup.visible = false;
                this.guiZeScroller.visible = true;
                this.setUpZhi(4);
                egret.Tween.get(this.guiZeScroller).to({ x: this.numName4 }, 100).call(function () {
                    //this.huadong();
                });
            }
            else {
                egret.Tween.get(this.liShiScroller).to({ x: this.numName6 }, 100).call(function () {
                    //this.huadong();
                });
                egret.Tween.get(this.liShiUpGroup).to({ x: this.numName5 }, 100).call(function () {
                    //this.huadong();
                });
            }
        }
        this.numZ = e.stageX;
    };
    SetUI.prototype.touchMove = function (e) {
        if (!this.isbegin)
            return;
        if (this.isjueding == false && egret.getTimer() - this.time > 100) {
            console.log('x', Math.abs(e.stageX - this.numZ));
            console.log('y', Math.abs(e.stageY - this.numY));
            this.isjueding = true;
            if (Math.abs(e.stageX - this.numZ) < Math.abs(e.stageY - this.numY)) {
                this.isHuaDong = false;
                eui.Scroller.scrollThreshold = 1;
                return;
            }
            else {
                eui.Scroller.scrollThreshold = 1000;
                this.isHuaDong = true;
            }
        }
        else {
            if (egret.getTimer() - this.time <= 100) {
                this.numZ = e.stageX;
                this.numY = e.stageY;
                return;
            }
        }
        if (!this.isHuaDong)
            return;
        this.liShiInfoGroup.visible = false;
        this.liShiDiTuRect0.visible = false;
        // if(this.geiZhengShu(e.stageX-this.numZ)<this.geiZhengShu(e.stageY-this.numZ)){
        // 	this.setScoler(true);
        // 	// this.initScroller();
        // 	return;
        // }
        this.peiFuScroller.visible = false;
        this.pfBg.visible = false;
        this.sheZhiScroller.visible = false;
        this.guiZeScroller.visible = false;
        this.touZhuScroller.visible = false;
        this.liShiScroller.visible = false;
        this.liShiUpGroup.visible = false;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        if (GameConfig.dangQianYe == 1) {
            this.touZhuScroller.visible = true;
            ui.curr();
            if (e.stageX < this.numZ) {
                this.touZhuScroller.x = this.numName1 + (e.stageX - this.numZ);
                this.sheZhiScroller.visible = true;
                this.sheZhiScroller.x = this.width + (e.stageX - this.numZ);
            }
        }
        else if (GameConfig.dangQianYe == 2) {
            this.sheZhiScroller.visible = true;
            if (e.stageX > this.numZ) {
                this.sheZhiScroller.x = this.numName2 + (e.stageX - this.numZ);
                this.touZhuScroller.visible = true;
                ui.curr();
                this.touZhuScroller.x = (e.stageX - this.numZ) - this.touZhuScroller.width;
            }
            else {
                this.sheZhiScroller.x = this.numName2 + (e.stageX - this.numZ);
                this.peiFuScroller.visible = true;
                this.pfBg.visible = true;
                this.peiFuScroller.x = this.width + (e.stageX - this.numZ);
                this.pfBg.x = this.peiFuScroller.x; //this.width + (e.stageX - this.numZ);
            }
        }
        else if (GameConfig.dangQianYe == 3) {
            this.peiFuScroller.visible = true;
            this.pfBg.visible = true;
            this.pfBg.x = this.peiFuScroller.x;
            if (e.stageX > this.numZ) {
                this.peiFuScroller.x = this.numName3 + (e.stageX - this.numZ);
                this.pfBg.x = this.numName3 + (e.stageX - this.numZ);
                this.sheZhiScroller.visible = true;
                this.sheZhiScroller.x = (e.stageX - this.numZ) - this.sheZhiScroller.width;
            }
            else {
                this.peiFuScroller.x = this.numName3 + (e.stageX - this.numZ);
                this.pfBg.x = this.numName3 + (e.stageX - this.numZ);
                this.guiZeScroller.visible = true;
                this.guiZeScroller.x = this.width + (e.stageX - this.numZ);
            }
        }
        else if (GameConfig.dangQianYe == 4) {
            this.guiZeScroller.visible = true;
            if (e.stageX > this.numZ) {
                this.guiZeScroller.x = this.numName4 + (e.stageX - this.numZ);
                this.peiFuScroller.visible = true;
                this.pfBg.visible = true;
                this.pfBg.x = (e.stageX - this.numZ) - this.peiFuScroller.width;
                this.peiFuScroller.x = (e.stageX - this.numZ) - this.peiFuScroller.width;
            }
            else {
                this.guiZeScroller.x = this.numName4 + (e.stageX - this.numZ);
                this.liShiScroller.visible = true;
                this.liShiScroller.x = this.width + (e.stageX - this.numZ);
                this.liShiUpGroup.visible = true;
                this.liShiUpGroup.x = this.width + (e.stageX - this.numZ);
            }
        }
        else if (GameConfig.dangQianYe == 5) {
            this.liShiScroller.visible = true;
            this.liShiUpGroup.visible = true;
            if (e.stageX > this.numZ) {
                this.x = this.numName6 + (e.stageX - this.numZ);
                this.liShiScroller.x = this.numName5 + (e.stageX - this.numZ);
                this.liShiUpGroup.x = this.numName5 + (e.stageX - this.numZ);
                this.guiZeScroller.visible = true;
                this.guiZeScroller.x = (e.stageX - this.numZ) - this.guiZeScroller.width;
            }
        }
    };
    SetUI.prototype.shiZhi2Change = function (e) {
        this.autoNumBer.text = this.shiZhi2.tabela.text;
    };
    SetUI.prototype.setHsliderState = function () {
    };
    SetUI.prototype.thumbDisPosion = function () {
        this.shiZhi1.track.visible = false;
        this.shiZhi2.track.visible = false;
        this.shiZhi3.track.visible = false;
        this.shiZhi4.track.visible = false;
        this.shiZhi5.track.visible = false;
        this.shiZhi1.tsbar.visible = false;
        this.shiZhi1.thumbDis.x = this.shiZhi1.thumb.x;
        this.shiZhi1.thumbDis.visible = true;
        this.shiZhi1.thumb0Dis.x = this.shiZhi1.thumb0.x;
        this.shiZhi1.thumb0Dis.y = this.shiZhi1.thumb0.y;
        this.shiZhi1.thumb0Dis.scaleX = this.shiZhi1.thumb0.scaleX;
        this.shiZhi1.thumb0Dis.scaleY = this.shiZhi1.thumb0.scaleY;
        this.shiZhi1.thumb0Dis.visible = true;
        this.shiZhi1.sanjiaoDis.x = this.shiZhi1.sanjiao.x;
        this.shiZhi1.sanjiaoDis.y = this.shiZhi1.sanjiao.y;
        this.shiZhi1.sanjiaoDis.scaleX = this.shiZhi1.sanjiao.scaleX;
        this.shiZhi1.sanjiaoDis.scaleY = this.shiZhi1.sanjiao.scaleY;
        this.shiZhi1.sanjiaoDis.visible = true;
        this.shiZhi2.tsbar.visible = false;
        this.shiZhi2.thumbDis.x = this.shiZhi2.thumb.x;
        this.shiZhi2.thumbDis.visible = true;
        this.shiZhi2.thumb0Dis.x = this.shiZhi2.thumb0.x;
        this.shiZhi2.thumb0Dis.y = this.shiZhi2.thumb0.y;
        this.shiZhi2.thumb0Dis.scaleX = this.shiZhi2.thumb0.scaleX;
        this.shiZhi2.thumb0Dis.scaleY = this.shiZhi2.thumb0.scaleY;
        this.shiZhi2.thumb0Dis.visible = true;
        this.shiZhi2.sanjiaoDis.x = this.shiZhi2.sanjiao.x;
        this.shiZhi2.sanjiaoDis.y = this.shiZhi2.sanjiao.y;
        this.shiZhi2.sanjiaoDis.scaleX = this.shiZhi2.sanjiao.scaleX;
        this.shiZhi2.sanjiaoDis.scaleY = this.shiZhi2.sanjiao.scaleY;
        this.shiZhi2.sanjiaoDis.visible = true;
        this.shiZhi3.tsbar.visible = false;
        this.shiZhi3.thumbDis.x = this.shiZhi3.thumb.x;
        this.shiZhi3.thumbDis.visible = true;
        this.shiZhi3.thumb0Dis.x = this.shiZhi3.thumb0.x;
        this.shiZhi3.thumb0Dis.y = this.shiZhi3.thumb0.y;
        this.shiZhi3.thumb0Dis.scaleX = this.shiZhi3.thumb0.scaleX;
        this.shiZhi3.thumb0Dis.scaleY = this.shiZhi3.thumb0.scaleY;
        this.shiZhi3.thumb0Dis.visible = true;
        this.shiZhi3.sanjiaoDis.x = this.shiZhi3.sanjiao.x;
        this.shiZhi3.sanjiaoDis.y = this.shiZhi3.sanjiao.y;
        this.shiZhi3.sanjiaoDis.scaleX = this.shiZhi3.sanjiao.scaleX;
        this.shiZhi3.sanjiaoDis.scaleY = this.shiZhi3.sanjiao.scaleY;
        this.shiZhi3.sanjiaoDis.visible = true;
        this.shiZhi4.tsbar.visible = false;
        this.shiZhi4.thumbDis.x = this.shiZhi4.thumb.x;
        this.shiZhi4.thumbDis.visible = true;
        this.shiZhi4.thumb0Dis.x = this.shiZhi4.thumb0.x;
        this.shiZhi4.thumb0Dis.y = this.shiZhi4.thumb0.y;
        this.shiZhi4.thumb0Dis.scaleX = this.shiZhi4.thumb0.scaleX;
        this.shiZhi4.thumb0Dis.scaleY = this.shiZhi4.thumb0.scaleY;
        this.shiZhi4.thumb0Dis.visible = true;
        this.shiZhi4.sanjiaoDis.x = this.shiZhi4.sanjiao.x;
        this.shiZhi4.sanjiaoDis.y = this.shiZhi4.sanjiao.y;
        this.shiZhi4.sanjiaoDis.scaleX = this.shiZhi4.sanjiao.scaleX;
        this.shiZhi4.sanjiaoDis.scaleY = this.shiZhi4.sanjiao.scaleY;
        this.shiZhi4.sanjiaoDis.visible = true;
        this.shiZhi5.tsbar.visible = false;
        this.shiZhi5.thumbDis.x = this.shiZhi5.thumb.x;
        this.shiZhi5.thumbDis.visible = true;
        this.shiZhi5.thumb0Dis.x = this.shiZhi5.thumb0.x;
        this.shiZhi5.thumb0Dis.y = this.shiZhi5.thumb0.y;
        this.shiZhi5.thumb0Dis.scaleX = this.shiZhi5.thumb0.scaleX;
        this.shiZhi5.thumb0Dis.scaleY = this.shiZhi5.thumb0.scaleY;
        this.shiZhi5.thumb0Dis.visible = true;
        this.shiZhi5.sanjiaoDis.x = this.shiZhi5.sanjiao.x;
        this.shiZhi5.sanjiaoDis.y = this.shiZhi5.sanjiao.y;
        this.shiZhi5.sanjiaoDis.scaleX = this.shiZhi5.sanjiao.scaleX;
        this.shiZhi5.sanjiaoDis.scaleY = this.shiZhi5.sanjiao.scaleY;
        this.shiZhi5.sanjiaoDis.visible = true;
    };
    SetUI.prototype.init = function () {
        var _this = this;
        if (this.visible) {
            if (GameConfig.autoPlay) {
                this.autoNumBer.text = "" + vo.GameData.autoPlayCount;
                this.stopAuto.visible = true;
                this.stopAuto.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
                    _this.stopAuto.visible = false;
                    _this.visible = false;
                    ui.setA.source = "uiElements_05-11_png"; //三条线图 //分别是左手右手模式情况
                    ui.setA0.source = "uiElements_05-11_png"; //三条线图
                    GameManager.getInstance().resume();
                    GameManager.getInstance().autoStopGameX();
                    _this.autoNumBer.text = _this.shiZhi2.tabela.text;
                    _this.init();
                }, this);
                this.thumbDisPosion();
                egret.setTimeout(function () {
                    _this.renHeTo.test.visible = true;
                    _this.freeGameTo.test.visible = true;
                    if (_this.renHeTo.liang.visible) {
                        _this.renHeTo.liangDiTuDis.visible = true;
                    }
                    if (_this.freeGameTo.liang.visible) {
                        _this.freeGameTo.liangDiTuDis.visible = true;
                    }
                }, this, 200);
            }
            else {
                this.stopAuto.visible = false;
                this.autoNumBer.text = this.shiZhi2.tabela.text;
                this.stopAuto.removeEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    _this.stopAuto.visible = false;
                    _this.autoNumBer.text = _this.shiZhi2.tabela.text;
                    GameManager.getInstance().autoStopGame();
                    _this.init();
                }, this);
                this.shiZhi1.tsbar.visible = true;
                this.shiZhi2.tsbar.visible = true;
                this.shiZhi3.tsbar.visible = true;
                this.shiZhi4.tsbar.visible = true;
                this.shiZhi5.tsbar.visible = true;
                this.shiZhi1.track.visible = true;
                this.shiZhi2.track.visible = true;
                this.shiZhi3.track.visible = true;
                this.shiZhi4.track.visible = true;
                this.shiZhi5.track.visible = true;
                this.shiZhi1.thumbDis.visible = false;
                this.shiZhi1.thumb0Dis.visible = false;
                this.shiZhi1.sanjiaoDis.visible = false;
                this.shiZhi2.thumbDis.visible = false;
                this.shiZhi2.thumb0Dis.visible = false;
                this.shiZhi2.sanjiaoDis.visible = false;
                this.shiZhi3.thumbDis.visible = false;
                this.shiZhi3.thumb0Dis.visible = false;
                this.shiZhi3.sanjiaoDis.visible = false;
                this.shiZhi4.thumbDis.visible = false;
                this.shiZhi4.thumb0Dis.visible = false;
                this.shiZhi4.sanjiaoDis.visible = false;
                this.shiZhi5.thumbDis.visible = false;
                this.shiZhi5.thumb0Dis.visible = false;
                this.shiZhi5.sanjiaoDis.visible = false;
                egret.setTimeout(function () {
                    _this.renHeTo.test.visible = false;
                    _this.freeGameTo.test.visible = false;
                    if (_this.renHeTo.liang.visible) {
                        _this.renHeTo.liangDiTuDis.visible = false;
                    }
                    if (_this.freeGameTo.liang.visible) {
                        _this.freeGameTo.liangDiTuDis.visible = false;
                    }
                }, this, 200);
            }
            if ((GameManager.getInstance().gameState == GameType.GameState.PLAYING || GameManager.getInstance().getFreeCount() > 0) && !GameConfig.autoPlay) {
                this.shiZhi1.tsbar.visible = false;
                this.shiZhi1.track.visible = false;
                this.shiZhi1.thumbDis.x = this.shiZhi1.thumb.x;
                this.shiZhi1.thumbDis.visible = true;
                this.shiZhi1.thumb0Dis.x = this.shiZhi1.thumb0.x;
                this.shiZhi1.thumb0Dis.y = this.shiZhi1.thumb0.y;
                this.shiZhi1.thumb0Dis.scaleX = this.shiZhi1.thumb0.scaleX;
                this.shiZhi1.thumb0Dis.scaleY = this.shiZhi1.thumb0.scaleY;
                this.shiZhi1.thumb0Dis.visible = true;
                this.shiZhi1.sanjiaoDis.x = this.shiZhi1.sanjiao.x;
                this.shiZhi1.sanjiaoDis.y = this.shiZhi1.sanjiao.y;
                this.shiZhi1.sanjiaoDis.scaleX = this.shiZhi1.sanjiao.scaleX;
                this.shiZhi1.sanjiaoDis.scaleY = this.shiZhi1.sanjiao.scaleY;
                this.shiZhi1.sanjiaoDis.visible = true;
            }
            else if (!GameConfig.autoPlay) {
                this.shiZhi1.track.visible = true;
                this.shiZhi1.tsbar.visible = true;
                this.shiZhi1.thumbDis.visible = false;
                this.shiZhi1.thumb0Dis.visible = false;
                this.shiZhi1.sanjiaoDis.visible = false;
            }
            var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
            ui.setUI.danCi2.text = vo.GameData.betScoreArr[vo.GameData.betIndex] * 2000 + ".00";
            ui.setUI.jia2.text = vo.GameData.betScoreArr[vo.GameData.betIndex] * 20000 + ".00";
            ui.setUI.jian2.text = vo.GameData.betScoreArr[vo.GameData.betIndex] * 20000 + ".00";
            this.freeGameTo.liang.visible = GameConfig.freeWin;
            this.freeGameTo.anYuan.visible = !GameConfig.freeWin;
            this.renHeTo.liang.visible = GameConfig.someWin;
            this.renHeTo.anYuan.visible = !GameConfig.someWin;
            this.autoBtn.liang.visible = GameConfig.autoChangeBet;
            this.autoBtn.anYuan.visible = !GameConfig.autoChangeBet;
            this.speedBtn.liang.visible = GameConfig.speedPlay;
            this.speedBtn.anYuan.visible = !GameConfig.speedPlay;
            if (egret.localStorage.getItem("zuoShouMoShi") == "0") {
                this.zuoShouTo.currentState = "down";
            }
            else {
                this.zuoShouTo.currentState = "up";
            }
            // egret.log("this.setNum === " + this.setNum);
            // //改变橫竖屏幕显示设置界面？？
            switch (GameConfig.dangQianYe) {
                case 1:
                    this.touZhuScroller.visible = true;
                    ui.curr();
                    this.upXuanZe.x = this.upTouZhu.x;
                    this.upXuanZe.width = this.upTouZhu.width * this.upTouZhu.scaleX;
                    break;
                case 2:
                    this.sheZhiScroller.visible = true;
                    this.upXuanZe.x = this.upSet.x;
                    this.upXuanZe.width = this.upSet.width * this.upSet.scaleX;
                    break;
                case 3:
                    this.peiFuScroller.visible = true;
                    this.pfBg.visible = true;
                    this.pfBg.x = this.peiFuScroller.x;
                    this.upXuanZe.x = this.upPeiFu.x;
                    this.upXuanZe.width = this.upPeiFu.width * this.upPeiFu.scaleX;
                    break;
                case 4:
                    this.guiZeScroller.visible = true;
                    this.upXuanZe.x = this.upGuiZe.x;
                    this.upXuanZe.width = this.upGuiZe.width * this.upGuiZe.scaleX;
                    break;
                case 5:
                    this.liShiScroller.visible = true;
                    this.liShiUpGroup.visible = true;
                    this.upXuanZe.x = this.upLiShi.x;
                    this.upXuanZe.width = this.upLiShi.width * this.upLiShi.scaleX;
                    break;
            }
        }
    };
    SetUI.prototype.renHeToaa = function () {
        var _this = this;
        egret.setTimeout(function () {
            GameConfig.someWin = _this.renHeTo.liang.visible;
        }, this, 200);
    };
    SetUI.prototype.freeGameToaa = function () {
        var _this = this;
        egret.setTimeout(function () {
            GameConfig.freeWin = _this.freeGameTo.liang.visible;
        }, this, 200);
    };
    SetUI.prototype.upOnTab = function (e) {
        this.upXuanZe.x = e.currentTarget.x;
        this.upXuanZe.width = e.currentTarget.width * e.currentTarget.scaleX;
        this.peiFuScroller.visible = false;
        this.pfBg.visible = false;
        this.sheZhiScroller.visible = false;
        this.guiZeScroller.visible = false;
        this.touZhuScroller.visible = false;
        this.liShiScroller.visible = false;
        this.liShiUpGroup.visible = false;
        this.liShiInfoGroup.visible = false;
        this.liShiDiTuRect0.visible = false;
        if (e.currentTarget.selected) {
            this.setNum = parseInt(e.currentTarget.name);
        }
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        switch (e.currentTarget) {
            case this.upPeiFu://声音开关
                this.peiFuScroller.visible = true;
                this.pfBg.visible = true;
                this.pfBg.x = this.peiFuScroller.x;
                this.showYeMian(this.peiFuScroller, this.numName3, e.currentTarget);
                break;
            case this.upGuiZe://自动调整投注开关
                this.showYeMian(this.guiZeScroller, this.numName4, e.currentTarget);
                this.guiZeScroller.visible = true;
                break;
            case this.upLiShi://快速开关
                this.liShiScroller.visible = true;
                this.liShiUpGroup.visible = true;
                this.showYeMian(this.liShiScroller, this.numName6, e.currentTarget);
                // this.liShiGroup = new eui.Group();
                // this.liShiScroller.addChild(this.liShiGroup);
                this.getAndShowHistory();
                break;
            case this.upSet://空格启动开关
                this.sheZhiScroller.visible = true;
                this.showYeMian(this.sheZhiScroller, this.numName2, e.currentTarget);
                break;
            case this.upTouZhu://退出开关
                this.touZhuScroller.visible = true;
                ui.curr();
                this.showYeMian(this.touZhuScroller, this.numName1, e.currentTarget);
                break;
        }
        GameConfig.dangQianYe = parseInt(e.currentTarget.name);
        egret.localStorage.setItem("dangQianYe", GameConfig.dangQianYe);
    };
    SetUI.prototype.showYeMian = function (e, weiZhi, EcurrentTarget) {
        this.jiLuZ = weiZhi;
        if (parseInt(EcurrentTarget.name) > GameConfig.dangQianYe) {
            this.showTween(e, this.width);
        }
        else if (parseInt(EcurrentTarget.name) < GameConfig.dangQianYe) {
            this.showTween(e, -this.width);
        }
    };
    SetUI.prototype.showTween = function (e, thisx) {
        e.x = thisx;
        if (this.currentState == "up") {
            egret.Tween.get(e).to({ x: this.jiLuZ }, 300);
        }
        else {
            egret.Tween.get(e).to({ x: this.jiLuZ }, 200);
        }
    };
    /**
     * 获取并展示游戏历史记录
     */
    SetUI.prototype.getAndShowHistory = function () {
        this.liShiUpGroup.visible = true;
        var obj = GameConfig.ceshilishi;
        // let objJeson = JSON.parse(obj);
        if (!obj) {
            return;
        }
        this.jiLuY = 0;
        var number = 0;
        this.liShiGroup.removeChildren();
        for (var key in obj.History) {
            var value = obj.History[key];
            if (obj.History[number + 1] != null && obj.History[number + 1] != undefined) {
                this.showHistory(value, true);
            }
            else {
                this.showHistory(value, false);
            }
            number++;
        }
        var group = new eui.Group();
        group.y = 26 + this.jiLuY * 100;
        group.height = 100;
        this.liShiGroup.addChild(group);
    };
    SetUI.prototype.showHistory = function (obj, isHaveNext) {
        // let group = new eui.Group(); 
        var lishiUi = new LiShiUI(obj, isHaveNext);
        lishiUi.img1.name = obj;
        lishiUi.img1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shwoInfo, this); //打开
        this.liShiInfo.out.addEventListener(egret.TouchEvent.TOUCH_TAP, this.outInfo, this); //关闭
        lishiUi.left = 18;
        lishiUi.currentState = this.currentState;
        lishiUi.y = 31 + this.jiLuY * (lishiUi.height + 35);
        // group.y = 26+this.jiLuY*(lishiUi.height+30);
        // group.addChild(lishiUi);
        this.liShiGroup.addChild(lishiUi);
        this.jiLuY++;
    };
    SetUI.prototype.shwoInfo = function (e) {
        // let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
        this.liShiInfo.init(e.currentTarget.name);
        // this.liShiInfo.list.dataProvider = new eui.ArrayCollection(e.currentTarget.name.Value.Main.WinResults);
        this.liShiInfoGroup.visible = true;
        this.liShiDiTuRect0.visible = true;
    };
    SetUI.prototype.outInfo = function () {
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        this.liShiInfoGroup.visible = false;
        this.liShiDiTuRect0.visible = false;
    };
    /**
     * tabel :第一个值
     * x="0"
     * textColor="0x000000"
     * size="22"
     * width="164"
     * height="46"
     * fontFamily="Times"
     * lineSpacing="5"
     */
    SetUI.prototype.setZhi = function (tabel, x, y, textColor, size, width, height, fontFamily, lineSpacing) {
        tabel.x = x;
        tabel.y = y;
        tabel.textColor = textColor;
        tabel.size = size;
        tabel.width = width;
        tabel.height = height;
        tabel.fontFamily = fontFamily;
        tabel.lineSpacing = lineSpacing;
    };
    SetUI.prototype.closeMusic = function () {
        // egret.log("关");
        GameManager.getInstance().stopMusic();
    };
    SetUI.prototype.upMusic = function () {
        // egret.log("开");
        GameManager.getInstance().startMusic();
    };
    SetUI.prototype.onTab = function (e) {
        var _this = this;
        var ui = core.UIManager.getUI(core.UIConst.MainScenceUI);
        switch (e.currentTarget) {
            case this.zuoShouTo://左手模式开关
                // this.updataSound();
                egret.setTimeout(function () {
                    if (_this.currentState == "up") {
                        ui.jiaoHuanSet1(false);
                    }
                    else {
                        ui.jiaoHuanSet1(true);
                    }
                }, this, 300);
                break;
            case this.musicBtn://声音开关
                // this.updataSound();
                SoundManager.getInstance().setBgOn(GameConfig.musicSected); //this.musicBtn.liang.visible
                SoundManager.getInstance().setEffectOn(GameConfig.musicSected);
                if (GameConfig.musicSected && (GameManager.getInstance().gameState == GameType.GameState.PLAYING)) {
                    GameManager.getInstance().startMusic();
                }
                else {
                    GameManager.getInstance().stopMusic();
                }
                break;
            case this.autoBtn://自动调整投注开关
                egret.setTimeout(function () {
                    GameConfig.autoChangeBet = _this.autoBtn.liang.visible;
                }, this, 200);
                break;
            case this.speedBtn://快速开关
                this.updataSpeedTime();
                break;
            case this.autoPlay://自动游戏
                vo.GameData.autoPlayCount = parseInt(this.shiZhi2.tabela.text);
                ui.setUI.visible = false;
                ui.setA.source = "uiElements_05-11_png";
                ui.setA0.source = "uiElements_05-11_png";
                GameManager.getInstance().autoStartGame();
                // GameManager.getInstance().pausume();
                break;
        }
    };
    /**
     * 更新快速
     */
    SetUI.prototype.updataSpeedTime = function () {
        var _this = this;
        egret.setTimeout(function () {
            GameConfig.speedPlay = _this.speedBtn.liang.visible;
        }, this, 200);
        // let ui: MainScenceUI = core.UIManager.getUI(core.UIConst.MainScenceUI);
        // ui.shanBtn.selected = GameConfig.speedPlay;
    };
    /**
     * 更新声音
     */
    SetUI.prototype.updataSound = function () {
        // SoundManager.getInstance().setBgOn(this.musicBtn.liang.visible);
        // SoundManager.getInstance().setEffectOn(this.musicBtn.liang.visible);
        SoundManager.getInstance().setBgOn(GameConfig.musicSected);
        SoundManager.getInstance().setEffectOn(GameConfig.musicSected);
    };
    SetUI.dangQianYe = 1;
    return SetUI;
}(core.BaseUI));
__reflect(SetUI.prototype, "SetUI");
//# sourceMappingURL=SetUI.js.map