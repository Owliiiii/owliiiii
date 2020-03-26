module core
{
	export class NomalLoadingUI extends BaseUI
	{
		public bar:eui.Image;
        public yuan:egret.tween.TweenGroup;
		public constructor()
		{
			super();
			//this.width=GameConfig.WIDTH;
			//this.height=GameConfig.HEIGHT;
			this.skinName=NomalLoadingUISkin;
		}

		public childrenCreated():void
		{
			super.childrenCreated();
		     this.yuan.play(0);
		}

		public setPross(cur:number,max:number):void
		{
			var n:number=cur/max;
			this.bar.x=-(1-n)*310;
		}
	}
}
 