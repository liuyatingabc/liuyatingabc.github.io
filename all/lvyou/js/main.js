$(function(){
	Tlunbo1(".banner-img",".bannerbox",".linbodian",[],1,"#06f800",3000,0,"#fff");
	function Tlunbo1(pic,bannerBox,lis,colorArr,tuactiveopacity,liactivebgColor,lubotime,tuopacity,lisColor){
    	const tu=$(pic);
		const banner=$(bannerBox)[0];
		const li=$(lis);
		const color=colorArr;
		tu[0].style.opacity=tuactiveopacity;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var num=0;
		var now=0;
		var flag=true;
		var t=setInterval(move,lubotime);
		function move(type="r"){
			flag=false;
			if(type=="r"){
				num++;
				if(num>2){
					num=0;
				}
			}else if(type=="l"){
				num--;
				if(num<0){
					num=2;
				}
			}
			for(let i=0;i<tu.length;i++){
				// tu[i].style.opacity=tuopacity;
				li[i].style.background=lisColor;
				banner.style.background=color[i];
			}
			li[num].style.background=liactivebgColor;
			banner.style.background=color[num];
			// tu[now].style.opacity=1;
			animate(tu[now],{opacity:0},500);
			animate(tu[num],{opacity:tuactiveopacity},500,function(){
				flag=true;
				now=num;
			});
			// tu[num].style.opacity=tuactiveopacity;
		}
		banner.onmouseover=function(){
			clearInterval(t);
		}
		banner.onmouseout=function(){
			t=setInterval(move,lubotime);
		}
        for(let j=0;j<li.length;j++){
        	li[j].onmouseover=function(){
        		if(flag){
        			flag=false;
        			for(let i=0;i<tu.length;i++){
					    // tu[i].style.opacity=0;
					    li[i].style.background=lisColor;
					    banner.style.background=color[i];
				    }
				    // tu[now].style.opacity=1;
				    li[j].style.background=liactivebgColor;
				    banner.style.background=color[j];
				    animate(tu[now],{opacity:0},500);
				    animate(tu[j],{opacity:tuactiveopacity},500,function(){
				    	flag=true;
				    	num=j;
				    	now=num;
				    });
        		}
			    
		    }
        }
    }
})
























































