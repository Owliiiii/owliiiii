var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by lry 2019.1.7
 * Sound管理类
 */
var SoundManager = (function () {
    /**
     * 构造函数
     */
    function SoundManager() {
        this.currBg = "";
        this.bgOn = true;
        this.effectOn = true;
        this.bgVolume = 0.5;
        this.effectVolume = 0.5;
        this.dic = new Dictionary();
        // egret.MainContext.instance.stage.once(egret.TouchEvent.TOUCH_TAP,()=>{
        //     this.playMusic('button_mp3',1).then((channel)=>{
        //        channel.volue=0;
        //     });
        // },this);
    }
    SoundManager.prototype.loadLocalData = function () {
        var bg = egret.localStorage.getItem('bgOn');
        var effect = egret.localStorage.getItem('effectOn');
        if (bg != null) {
            this.bgOn = bg == 0 ? false : true;
        }
        else {
            egret.localStorage.setItem('bgOn', '1');
        }
        if (effect != null) {
            this.effectOn = effect == 0 ? false : true;
        }
        else {
            egret.localStorage.setItem('effectOn', '1');
        }
    };
    /**
     * 播放音效
     */
    SoundManager.prototype.playEffect = function (effectName, volue) {
        var _this = this;
        if (volue === void 0) { volue = 0.5; }
        if (!this.effectOn)
            return;
        var chanel;
        var sound = RES.getRes(effectName);
        if (sound) {
            chanel = sound.play(0, 1);
            chanel.once(egret.Event.SOUND_COMPLETE, function (e) {
                chanel = null;
            }, this);
            chanel.volume = this.effectVolume;
            chanel.volume = volue;
        }
        else {
            //console.log('聲音->'+effectName+'->未預加載');
            var loadComplete = function (data, key) {
                chanel = data.play(0, 1);
                chanel.once(egret.Event.SOUND_COMPLETE, function (e) {
                    chanel = null;
                }, _this);
                chanel.volume = _this.effectVolume;
                chanel.volume = volue;
            };
            RES.getResAsync(effectName, loadComplete, this);
        }
    };
    /**
     * 播放背景音乐
     * @param key
     */
    SoundManager.prototype.playBg = function (bgName) {
        var _this = this;
        this.currBg = bgName;
        if (!this.bgOn)
            return;
        this.playMusic(bgName).then(function (chanel) {
            if (_this.bgchanel) {
                _this.bgchanel.stop();
                _this.bgchanel = null;
            }
            _this.bgchanel = chanel;
            _this.bgchanel.volume = _this.bgVolume;
        });
    };
    /**
     * 停止背景音乐
     */
    SoundManager.prototype.stopBg = function () {
        if (this.bgchanel) {
            this.bgchanel.stop();
        }
    };
    /**
     * 设置音效是否开启
     * @param $isOn
     */
    SoundManager.prototype.setEffectOn = function ($isOn) {
        this.effectOn = $isOn;
        egret.localStorage.setItem('effectOn', this.effectOn == true ? '1' : '0');
    };
    /**
     * 设置背景音乐是否开启
     * @param $isOn
     */
    SoundManager.prototype.setBgOn = function ($isOn) {
        this.bgOn = $isOn;
        egret.localStorage.setItem('bgOn', this.bgOn == true ? '1' : '0');
        if (!this.bgOn) {
            this.stopBg();
        }
        else {
            this.playBg(this.currBg);
        }
    };
    /**
     * 设置背景音乐音量
     * @param volume
     */
    SoundManager.prototype.setBgVolume = function (volume) {
        volume = Math.min(volume, 1);
        volume = Math.max(volume, 0);
        this.bgVolume = volume;
        if (this.bgchanel) {
            this.bgchanel.volume = this.bgVolume;
        }
    };
    /**
     * 获取背景音乐音量
     * @returns {number}
     */
    SoundManager.prototype.getBgVolume = function () {
        return this.bgVolume;
    };
    /**
     * 设置音效音量
     * @param volume
     */
    SoundManager.prototype.setEffectVolume = function (volume) {
        volume = Math.min(volume, 1);
        volume = Math.max(volume, 0);
        this.effectVolume = volume;
    };
    /**
     * 获取音效音量
     * @returns {number}
     */
    SoundManager.prototype.getEffectVolume = function () {
        return this.effectVolume;
    };
    SoundManager.getInstance = function () {
        if (this.ins == null) {
            this.ins = new SoundManager();
        }
        return this.ins;
    };
    SoundManager.prototype.playMusic = function (name, isloop, p, volue) {
        var _this = this;
        if (name === void 0) { name = ''; }
        if (isloop === void 0) { isloop = -1; }
        if (p === void 0) { p = 0; }
        if (volue === void 0) { volue = 1; }
        return new Promise(function (resolve, reject) {
            var chanel;
            var sound = RES.getRes(name);
            if (!sound) {
                var loadComplete = function (data, key) {
                    if (data == null) {
                        console.log(name + '->不存在的资源');
                        reject();
                    }
                    else {
                        chanel = data.play(p, isloop);
                        chanel.volume = _this.effectVolume;
                        chanel.volume = volue;
                        resolve(chanel);
                    }
                };
                RES.getResAsync(name, loadComplete, _this);
            }
            else {
                chanel = sound.play(p, isloop);
                chanel.volume = _this.effectVolume;
                chanel.volume = volue;
                resolve(chanel);
            }
        });
    };
    SoundManager.prototype.playMusic2 = function (name, isloop, volue) {
        var _this = this;
        if (name === void 0) { name = ''; }
        if (isloop === void 0) { isloop = -1; }
        if (volue === void 0) { volue = 0.05; }
        return new Promise(function (resolve, reject) {
            var chanel;
            var sound = RES.getRes(name);
            if (!sound) {
                var loadComplete = function (data, key) {
                    if (data == null) {
                        console.log(name + '->不存在的资源');
                        reject();
                    }
                    else {
                        chanel = data.play(name, isloop);
                        chanel.volume = volue;
                        resolve(chanel);
                    }
                };
                RES.getResAsync(name, loadComplete, _this);
            }
            else {
                chanel = sound.play(name, isloop);
                chanel.volume = volue;
                resolve(chanel);
            }
        });
    };
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
//# sourceMappingURL=SoundManager.js.map