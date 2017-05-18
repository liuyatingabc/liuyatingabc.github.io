// rem适用移动端布局
//当页面加载之后
window.onload=function(){
	//常量
    const designWidh=768;
    const fontSize=100;
    // 选择文档中的选择器html定义样式
    // document.querySelector("html").style.fontSize=fontSize+"px"
    function resizeFont(){
    	var CW=document.documentElement.clientWidth;
    	// console.log(CW);获取屏幕大小
    	var radio=CW/designWidh;
    	var newsFontSize=fontSize*radio;
    	document.querySelector("html").style.fontSize=newsFontSize+"px";
    }
    resizeFont();
    window.onresize=resizeFont;
}