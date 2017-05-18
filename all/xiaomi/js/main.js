$(function(){
	        const aa=$(".daohangzhongk");
	        const bb=$(".bannerNavLis");
	        xuanxiangka(aa,bb);

	        // const cc=$(".daohanga");
	        // const dd=$(".daohangxlk");
	        // xuanxiangka(cc,dd);

	        xuanxiangkahover(".daohanga",".daohangxlk");

	function xuanxiangka5(btn,con){
		const aa=$(btn);
	    const bb=$(con);
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
			    animate(bb[i],{height:98},300);
		    }
		    aa[i].onmouseout=function(){
			    animate(bb[i],{height:0},300);
		    }
	    }
	}
    xuanxiangka5(".headeryougouwuche",".headeryougouwuchedw");

	        
	Tlunbo(".bannerBoxtu",".bannerBox",".bannerxiayi",[],1,"#fff",2000,0,"#8d8d8d",".bannerzuoyi",".bannerzuoer");
	        
	function xuanxiangka2(btn,con,wenzi,hengxian){
		const cc=$(btn);
	    const dd=$(con);
	    const zi=$(wenzi);
	    const xian=$(hengxian);
	    zi[0].style.color="#ff6700";
	    xian[0].style.display="block";
		for(let i=0;i<cc.length;i++){
		    cc[i].onmouseover=function(){
			    for(let j=0;j<dd.length;j++){
				    dd[j].style.display="none";
				    zi[j].style.color="#424242";
	    			xian[j].style.display="none";
			    }
			    zi[i].style.color="#ff6700";
	    		xian[i].style.display="block";
			    dd[i].style.display="block";
		    }
		    // cc[i].onmouseout=function(){
			   //  dd[i].style.display="none";
		    // }
	    }
	}
	xuanxiangka2(".xuanxiangkayier",".dapeixia",".xuanxiangkayier .zi",".xuanxiangkayier .xian");
	xuanxiangka2(".xuanxiangkaerer",".peijiantuxuanxiangka",".xuanxiangkaerer .zi",".xuanxiangkaerer .xian");
	xuanxiangka2(".xuanxiangkasaner",".zhoubianxuanxianka",".xuanxiangkasaner .zi",".xuanxiangkasaner .xian");

	//橙色选项卡
	function xuanxiangka3(btn,con){
		const aa=$(btn);
		const bb=$(con);
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
			    animate(bb[i],{height:74},300);
		    }
		    aa[i].onmouseout=function(){
			    animate(bb[i],{height:0},300);
		    }
	    }
	}
	xuanxiangka3(".xianxian",".dapeitudingwei");

	//小米明星单品
	//左右轮播图 
    //pic:轮播图 字符串的选择器
    //bannerBox：通屏的banner盒子 字符串的选择器
    //leftBen:左括号
    //rightBen：右括号
    //lunbodian：轮播点 字符串的选择器
    //liscolor:所有轮播点的颜色
    //lisactivebgColor;轮播点1开始的颜色
    //lubotime：轮播时间
    //luoboxiaotime:一次轮播中从左到右(从右到左)的时间
	Zlunbo1(".mingxingxia",".mingxingxiabox",".mingxingleft",".mingxingright");
	Zlunbo1(".tuijiantu",".tuijiantudw",".peijianshangxiayouyi",".peijianshangxiayouer");
    function Zlunbo1(pic,bannerBox,zuokuohao,youkuohao){
    	const tu=$(pic);
		const img=$(bannerBox)[0];
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		const leftBen=$(zuokuohao)[0];
		const rightBen=$(youkuohao)[0];
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
		}
		tu[0].style.left=0;
		var now=0;
		var next=0;
		var flag=true;
		function move(type="l"){
			flag=false;
			if(type=="l"){//left的首字母
				next++;
				if(next>tu.length-1){
					next=0;
				}
				tu[next].style.left=imgw+"px";
				animate(tu[now],{left:-imgw},500);
				animate(tu[next],{left:0},500,function(){
					flag=true;
					now=next;
					leftBen.style.pointerEvents="none";
					rightBen.style.pointerEvents="auto";
				});
			}else if(type=="r"){
				next--;
				if(next<0){
					next=tu.length-1;
				}
				tu[next].style.left=-imgw+"px";
				animate(tu[now],{left:imgw},500);
					animate(tu[next],{left:0},500,function(){
					flag=true;
					now=next;
					rightBen.style.pointerEvents="none";
					leftBen.style.pointerEvents="auto";	
				});
			}
			
		}
		leftBen.onclick=function(){
			if(flag){
				move("l");
			}
		}
		rightBen.onclick=function(){
			if(flag){
				move("r");
			}
		}
	}

	//内容的左右轮播
	Zlunbo2(".neirongyidw",".neirongtuyiyi",".neirongtuyiyi .zuo",".neirongtuyiyi .you",".neirongquaneryi","#b0b0b0","#fff",200);
	// Zlunbo2(".neirongyidw",".neirongtuyiyi",".neirongtuyiyi .zuo",".neirongtuyiyi .you",".neirongquaneryi","#b0b0b0","#fff",200)
	function Zlunbo2(pic,bannerBox,zuokuohao,youkuohao,lunbodian,liscolor,lisactivebgColor,luoboxiaotime){
    	const tu=$(pic);
		const img=$(bannerBox)[0];
		// console.log(img);
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		const leftBen=$(zuokuohao)[0];
		const rightBen=$(youkuohao)[0];
		const lis=$(lunbodian);
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
			lis[i].style.background=liscolor;
			lis[i].style.border="2px solid #fff";
		}
		tu[0].style.left=0;
		lis[0].style.background=lisactivebgColor;
		lis[0].style.border="2px solid #ff6700";
		var now=0;
		var next=0;
		var flag=true;
		
        // let t=setInterval(move(),1000);
		function move(type){
			flag=false;
			if(type=="l"){//left的首字母
				next--;
				if(next<0){
					leftBen.style.pointerEvents="none";
					rightBen.style.pointerEvents="auto";
					next=tu.length-1;
				}
				if(next>tu.length-1){
					rightBen.style.pointerEvents="none";
					leftBen.style.pointerEvents="auto";
					next=0;
				}
				// if(next>tu.length-1){
				// 	next=0;
				// }
				tu[next].style.left=imgw+"px";
				animate(tu[next],{left:0},luoboxiaotime);
				animate(tu[now],{left:-imgw},luoboxiaotime);
				
				
			}else if(type=="r"){
				next++;
				if(next>tu.length-1){
					rightBen.style.pointerEvents="none";
					leftBen.style.pointerEvents="auto";
					next=0;
				}
				if(next<0){
					leftBen.style.pointerEvents="none";
					rightBen.style.pointerEvents="auto";
					next=tu.length-1;
				}
				// if(next<0){
				// 	next=tu.length-1;
				// }
				tu[next].style.left=-imgw+"px";
				animate(tu[now],{left:imgw},luoboxiaotime);
				animate(tu[next],{left:0},luoboxiaotime);
			}
			animate(tu[next],{left:0},luoboxiaotime,function(){
				lis[now].style.border="2px solid #fff";
				lis[next].style.border="2px solid #ff6700";
				lis[now].style.background=liscolor;
				lis[next].style.background=lisactivebgColor;
				flag=true;
				now=next;
			});
		}
		for(let j=0;j<lis.length;j++){
        	lis[j].onclick=function(){
        		if(flag){
				    if(j>next){
				    	flag=false;
				    	for(let i=0;i<tu.length;i++){
						    lis[i].style.background=liscolor;
						    lis[i].style.border="2px solid #fff";
						    tu[i].style.left=imgw+"px";
					    }
				    	tu[now].style.left=0+"px";
						animate(tu[now],{left:-imgw},luoboxiaotime);
				    	animate(tu[j],{left:0},luoboxiaotime,function(){
							flag=true;
						});
				    }else if(j<next){
				    	flag=false;
				    	for(let i=0;i<tu.length;i++){
						    lis[i].style.background=liscolor;
						    lis[i].style.border="2px solid #fff";
						    tu[i].style.left=-imgw+"px";
					    }
					    tu[now].style.left=0+"px";
				    	animate(tu[now],{left:imgw},luoboxiaotime);
				    	animate(tu[j],{left:0},luoboxiaotime,function(){
							flag=true;
						});
				    }
				    // animate(tu[j],{left:0},luoboxiaotime);
				    // tu[j].style.left=0;
				    lis[j].style.background=lisactivebgColor;
				    lis[j].style.border="2px solid #ff6700";
				    next=j;
				    now=j;
        		}
		    }
        }
		leftBen.onclick=function(){
			if(flag){
				move("l");
			}
		}
		rightBen.onclick=function(){
			if(flag){
				move("r");
			}
		}
	}

	//底部选项卡
	function xuanxiangka6(btn,con,san){
		const aa=$(btn);
		const bb=$(con);
		const cc=$(san);
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
			    animate(aa[i],{background:"rgba(255,103,0,1)"},300);
			    animate(bb[i],{color:"#fff"},300);
			    animate(cc[i],{color:"#fff"},300);
		    }
		    aa[i].onmouseout=function(){
			    animate(aa[i],{background:"rgba(255,103,0,0)"},300);
			    animate(bb[i],{color:"#ff6700"},300);
			    animate(cc[i],{color:"#ff6700"},300);
		    }
	    }
	}
	xuanxiangka6(".dibuzhongzhongyousi",".dibuzhongzhongyousiyi",".dibuzhongzhongyousier");


})      