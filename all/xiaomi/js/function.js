//函数库
    function $(select,obj=document){
    	if(typeof select=="function"){
    		window.onload=function(){
    			select();
    		}
    	}else if(typeof select=="string"){
    		return obj.querySelectorAll(select);
    	}
    }
    // $(function(){});
    // $(".box");
	
	//选项卡 btn:选项卡按钮，con:选项卡内容
	function xuanxiangka(btn,con){
		for(let i=0;i<btn.length;i++){
		    btn[i].onmouseover=function(){
			    // for(let j=0;j<con.length;j++){
				   //  con[j].style.display="none";
			    // }
			    con[i].style.display="block";
		    }
		    btn[i].onmouseout=function(){
			    con[i].style.display="none";
		    }
	    }
	}
	//xuanxiangka(lis,div);

	//attr(obj,style)
	function attr(obj,style){
		return window.getComputedStyle(obj,null)[style];
	}

	//nav中首页没有下拉框时的选项卡
	//btn:按钮 
	//con:下拉框
	// xuanxiangkahover(".item",".item ul")
	function xuanxiangkahover(btn,con){
		const item=$(btn);
		const ul=$(con);
		for(let i=0;i<ul.length;i++){
			let h=parseInt(attr(ul[i],"height"));
			ul[i].setAttribute("h",h);
			ul[i].style.height=0;
		}
		for(let i=0;i<item.length;i++){
			hover(item[i],function(){
				if(item[i].children[1]){
					let ul=item[i].children[1];
					animate(ul,{height:ul.getAttribute("h")},500);
				}
			},function(){
				if(item[i].children[1]){
					let ul=item[i].children[1];
					animate(ul,{height:0},500);
				}
			});
		}
	}

	//遮罩 a:外面的盒子 b:遮罩
	function zhezhao(a,b){
		a.onmouseover=function(){
			b.style.display="block";
		}
		a.onmouseout=function(){
			b.style.display="none";
		}
	}
	// zhezhao(box,zhezhao1);

    

    //层级轮播图 
    //pic:轮播图 字符串的选择器
    //bannerBox：通屏的banner盒子 字符串的选择器
    //lis：轮播点 字符串的选择器
    //colorArr：通屏banner盒子的所有盒子 数组["red","green","blue"]
    //tuactiveZ:banner图1的层级
    //liactivebgColor;轮播点1开始的颜色
    //lubotime：轮播时间
    //tuZ：所有图片开始的层级
    //lisColor：除选中轮播点的颜色
    //
    function Clunbo(pic,bannerBox,lis,colorArr,tuactiveZ,liactivebgColor,lubotime,tuZ,lisColor){
	    const tu=$(pic);
		const banner=$(bannerBox)[0];
		const li=$(lis);
		const color=colorArr;
		tu[0].style.zIndex=tuactiveZ;
		li[0].style.background=liactivebgColor;
		banner.style.background=color[0];
		var num=0;
		var t=setInterval(move,lubotime);

		function move(){
			num++;
			if(num>2){
				num=0;
			}
			for(let i=0;i<tu.length;i++){
				tu[i].style.zIndex=tuZ;
				li[i].style.background=lisColor;
				banner.style.background=color[i];
			}
			tu[num].style.zIndex=tuactiveZ;
			li[num].style.background=liactivebgColor;
			banner.style.background=color[num];
		}
		banner.onmouseover=function(){
			clearInterval(t);

		}
		banner.onmouseout=function(){
			t=setInterval(move,lubotime);
		}

        for(let j=0;j<li.length;j++){
        	li[j].onmouseover=function(){
			    for(let i=0;i<tu.length;i++){
				    tu[i].style.zIndex=tuZ;
				    li[i].style.background=lisColor;
				    banner.style.background=color[i];
			    }
			    tu[j].style.zIndex=tuactiveZ;
			    li[j].style.background=liactivebgColor;
			    banner.style.background=color[j];
			    num=j;
		    }
        }
    }
    // Zlunbo(".tu",".banner",".box ul li",["red","green","blue"],2,"#fff",1000,1,"orange");


    //透明轮播图 
    //pic:轮播图 字符串的选择器
    //bannerBox：通屏的banner盒子 字符串的选择器
    //lis：轮播点 字符串的选择器
    //colorArr：通屏banner盒子的所有盒子 数组["red","green","blue"]
    //tuactiveopacity:banner图1的透明度
    //liactivebgColor;轮播点1开始的颜色
    //lubotime：轮播时间
    //tuopacity：所有图片开始的透明度
    //lisColor：除选中轮播点的颜色
    //leftBen:左括号
    //rightBen：右括号
    
    function Tlunbo(pic,bannerBox,lis,colorArr,tuactiveopacity,liactivebgColor,lubotime,tuopacity,lisColor,zuokuohao,youkuohao){
    	const tu=$(pic);
		const banner=$(bannerBox)[0];
		const li=$(lis);
		const leftBen=$(zuokuohao)[0];
		const rightBen=$(youkuohao)[0];
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
				if(num>4){
					num=0;
				}
			}else if(type=="l"){
				num--;
				if(num<0){
					num=4;
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
        leftBen.onmouseover=function(){
			clearInterval(t);
		}
		rightBen.onmouseover=function(){
			clearInterval(t);
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
    function Zlunbo(pic,bannerBox,zuokuohao,youkuohao,lunbodian,liscolor,lisactivebgColor,lubotime,luoboxiaotime){
    	const tu=$(pic);
    	// alert(1);
		const img=$(bannerBox)[0];
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		const leftBen=$(zuokuohao)[0];
		const rightBen=$(youkuohao)[0];
		const lis=$(lunbodian);
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
			lis[0].style.background=liscolor;
		}
		tu[0].style.left=0;
		lis[0].style.background=lisactivebgColor;
		var t=setInterval(move,lubotime);
		var now=0;
		var next=0;
		var flag=true;
		for(let j=0;j<lis.length;j++){
        	lis[j].onmouseover=function(){
        		clearInterval(t);
        		if(flag){
        			for(let i=0;i<tu.length;i++){
					    lis[i].style.background=liscolor;
					    tu[i].style.left=imgw+"px";
				    }
				    tu[j].style.left=0;
				    lis[j].style.background=lisactivebgColor;
				    next=j;
				    now=j;
        		}
			    
		    }
        }
		function move(type="l"){
			flag=false;
			if(type=="l"){//left的首字母
				next++;
				if(next>tu.length-1){
					next=0;
				}
				tu[next].style.left=imgw+"px";
				animate(tu[now],{left:-imgw},luoboxiaotime);
			}else if(type=="r"){
				next--;
				if(next<0){
					next=tu.length-1;
				}
				tu[next].style.left=-imgw+"px";
				animate(tu[now],{left:imgw},luoboxiaotime);
			}
			animate(tu[next],{left:0},luoboxiaotime,function(){
				lis[now].style.background=liscolor;
				lis[next].style.background=lisactivebgColor;
				flag=true;
				now=next;
			});
		}
		img.onmouseover=function(){
			clearInterval(t);
		}
		img.onmouseout=function(){
			t=setInterval(move,lubotime);
		}
		leftBen.onmouseover=function(){
			clearInterval(t);
		}
		leftBen.onmouseout=function(){
			t=setInterval(move,lubotime);
		}
		rightBen.onmouseover=function(){
			clearInterval(t);
		}
		rightBen.onmouseout=function(){
			t=setInterval(move,lubotime);
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









