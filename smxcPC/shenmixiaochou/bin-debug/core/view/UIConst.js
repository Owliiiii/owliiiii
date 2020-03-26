var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var core;
(function (core) {
    var UIConst = (function () {
        function UIConst() {
        }
        /**
         * 一般加载常量
         */
        UIConst.NomalLoadingUI = "core.NomalLoadingUI";
        /**
         * 登录界面
         */
        UIConst.LoginUI = 'LoginUI';
        /**
         * 游戏主界面
         */
        UIConst.MainScenceUI = 'MainScenceUI';
        UIConst.GameScence = 'GameScence';
        /**
         * 网络
         */
        UIConst.NetUI = 'NetUI';
        /**
         * 网络断开界面
         */
        UIConst.NetCloseUI = 'NetCloseUI';
        /**
         * 设置界面
         */
        UIConst.SetUI = 'SetUI';
        /**
         * 自动界面
         */
        UIConst.AutoPlayUI = 'AutoPlayUI';
        /**
         * 提示界面
         */
        UIConst.StipsUI = 'StipsUI';
        /**
         * 是否开启快速模式提示界面
         */
        UIConst.SpeedTipsUI = 'SpeedTipsUI';
        return UIConst;
    }());
    core.UIConst = UIConst;
    __reflect(UIConst.prototype, "core.UIConst");
})(core || (core = {}));
//# sourceMappingURL=UIConst.js.map