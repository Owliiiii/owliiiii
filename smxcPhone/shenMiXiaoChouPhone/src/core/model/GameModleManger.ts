declare function openWinScene();
class GameModleManger extends egret.EventDispatcher {
	private static _instance:GameModleManger;
	private moduleMap:Dictionary<core.BaseModel>;
	public constructor() 
	{
		super();
	}
	public  static getInstance():GameModleManger
	{
		if(!this._instance)
		{
			this._instance=new GameModleManger();
		}
		return this._instance;
	}

    /**
	 * 初始化引擎所需模块
	 */
	public init(stage:egret.Stage):void
	{      
		   //键盘初始化
		   KeyBoardManager.getInstance().init();
		   //鼠标检测
		   mouse.enable(stage);
		   //mouse.setMouseMoveEnabled(true);
		   //初始化层级
           var loot:eui.UILayer=new eui.UILayer();
           stage.addChild(loot);
		   core.LayerManager.getInstance().initLayer(loot);
		   //初始化帧回掉管理器
		   core.FrameEventCenter.getInstance().init(stage);
		   core.DateTimer.instance.run();
		   //实例化模块控制数据
		   this.moduleMap=new Dictionary<core.BaseModel>();
		   //sound
		   SoundManager.getInstance().loadLocalData();
		   //界面尺寸改变提示器
			LayerSetManager.getInstance().init();
			GameConfig.CasinoGame=window['CasinoGame'];
			
		//    egret.MainContext.instance.stage.addEventListener(egret.TouchEvent.TOUCH_END,()=>{
		// 	   alert("request");
		// 	//    window['fullscreen'].request();
		// 	   openWinScene();
		//    },this);
		   
		   //
		   //初始化网络
		  // sockets.SocketMananger.getInstance().connectServer();
		  
	}
    
	/**
	 * 得到某一个模块
	 */
	public getModle(key:any=core.ModleConst.COMMON_MODLE):core.BaseModel
	{
		if(!this.moduleMap[key])
		{
			var cls:any=egret.getDefinitionByName(key);
            this.moduleMap[key]=new cls();
		}
		return this.moduleMap[key];       
	}







}