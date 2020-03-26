class ScoreItem1 extends core.ScrollItem {
public icons:eui.Image;

	public constructor() {
		super();
		this.skinName=ScrollItem1Skin;

	}

	public setData(data: any): void {
		super.setData(data);
		this.icons.source='feature_'+data+'_png';
	}


}