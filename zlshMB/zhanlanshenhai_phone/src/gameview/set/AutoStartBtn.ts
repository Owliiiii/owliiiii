class AutoStartBtn extends eui.Component {
	public lightIcon: eui.Image;
	public bg: eui.Image;
	public stateIcon: eui.Image;
	public countLabel: eui.Label;
	public constructor() {
		super();
	}

	public childrenCreated():void
	{

	}

	private _isPlay:boolean=false;

	public set isPlay(b:boolean)
	{
         this._isPlay=b;
		 this.stateIcon.source=this._isPlay?'stop_diamonds_png':'auto_play_png';
		 this.lightIcon.source=this.isPlay?'btn_stop_selected_png':'rightbar_autoplay_selected_png';
		 this.bg.source=this.isPlay?'btn_stop_normal_png':'rightbar_autoplay_normal_png';
		 this.countLabel.visible=this.isPlay;
	}

	// public bonusBtn(isBonus:boolean){
	// 	this.bg.source = isBonus?'btn_autogame_selected_png':'rightbar_autoplay_normal_png';
	// }

	public get isPlay():boolean
	{
		return this._isPlay;
	}


}