//函数库
    function $(select,obj=document){
    	if(typeof select=="function"){
    		window.onload=function(){
    			select();
    		}
    	}else if(typeof select=="string"){
    		//<>
    		if(/^<\w+>$/.test(select)){// //:正则表达 ^<：以小于号开始 \w：内容+ >$：以大于号开始
    			return document.createElement(select.slice(1,-1));
    		}else{
    			return obj.querySelectorAll(select);
    		}
    	}
    }
    // $(function(){});
    // $(".box");
	
	//获得obj的style样式(width,heigth等)
	//obj:类型 DOM元素
	//style:类型 string
	//attr(obj,style)
	function attr(obj,style){
		return window.getComputedStyle(obj,null)[style];
	}


	//选项卡 btn:选项卡按钮，con:选项卡内容
	function xuanxiangka(btn,con){
		const aa=$(btn);
	    const bb=$(con);
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
			    // for(let j=0;j<bb.length;j++){
				   //  bb[j].style.display="none";
			    // }
			    bb[i].style.display="block";
		    }
		    aa[i].onmouseout=function(){
			    bb[i].style.display="none";
		    }
	    }
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
		let num=0;
		let now=0;
		let flag=true;
		let t=setInterval(move,lubotime);

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
			animate(tu[now],{opacity:0},500);
			animate(tu[num],{opacity:tuactiveopacity},500,function(){
				now=num;
				flag=true;
			});
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
					    // tu[i].style.opacity=tuopacity;
					    li[i].style.background=lisColor;
					    banner.style.background=color[i];
				    }
				    li[j].style.background=liactivebgColor;
				    banner.style.background=color[j];
				    animate(tu[now],{opacity:0},500);
				    animate(tu[j],{opacity:tuactiveopacity},500,function(){
				    	num=j;
				    	now=num;
				    	flag=true;
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


	//左右多张图节点轮播
	//hezi:放图片的盒子
	//img:要轮播的每张图
	//zuokuohao:左括号
	//youkuohao：右括号
	//num:一次需要轮播的图片数量
    //lunbotime:轮播时间
	//lunboxiaotime:轮播小时间
	function jiedianlunbo(hezi,img,zuokuohao,youkuohao,num,lunbotime,lunboxiaotime){
		const box=$(hezi)[0];
		const boxW=parseInt(window.getComputedStyle(document.querySelector(img),null).width);
		const leftBen=$(zuokuohao)[0];
		const rightBen=$(youkuohao)[0];
		let n=num;
		let flag=true;
		let t=setInterval(move,lunbotime);
		function move(type="l"){
			flag=false;
			if(type=="l"){
	    		animate(box,{left:-boxW*n},lunboxiaotime,function(){
	    			for(let i=0;i<n;i++){
	    				let firstChild=box.firstElementChild;
	    				box.appendChild(firstChild);
	    			}
	    			box.style.left=0;
	    			flag=true;
	    		})
			}
			if(type=="r"){
	    		for(let i=0;i<n;i++){
	    			let lastChild=box.lastElementChild;
	    			let firstChild=box.firstElementChild;
	    			box.insertBefore(lastChild,firstChild);
	    		}
		    	box.style.left=-boxW*n+"px";
	    		animate(box,{left:0},lunboxiaotime,function(){
	    			flag=true;
	    		});
			}
		}
		leftBen.onclick = function(){
			if(flag){
				move("r");
			}
		}
		rightBen.onclick = function(){
			if(flag){
				move("l");
			}
		}
		box.onmouseover = function(){
			clearInterval(t);
		}
		box.onmouseout = function(){
			t=setInterval(move,lunbotime);
		}
		leftBen.onmouseover = function(){
			clearInterval(t);
		}
		leftBen.onmouseout = function(){
			t=setInterval(move,lunbotime);
		}
		rightBen.onmouseover = function(){
			clearInterval(t);
		}
		rightBen.onmouseout = function(){
			t=setInterval(move,lunbotime);
		}
		
		window.onblur = function(){
			clearInterval(t);
		}
		window.onfocus = function(){
			t=setInterval(move,lunbotime);
		}
		
	}

	//获取scrollTop前的对象(解决兼容问题)
	function scrollobj(){
		let body=document.body;
		let html=document.documentElement;
		body.scrollTop=1;
		html.scrollTop=1;
		// let scrollobj=document.body.scrollTop?document.body:document.documentElement;
		let obj;
		if(body.scrollTop==1){
			obj=body;
		}
		if(html.scrollTop==1){
			obj=html;
		}
		return obj;
	}


	//导航的出现于消失、楼层跳转、按序加载
	//lis:每个楼层对应的固定定位
	//boxx:总的楼层跳转固定定位
	//section:每个楼层
	//daohang:出现消失的固定定位导航
	//louctime:楼层 跳转时所需时间
	//louccolor:所有楼层固定定位的颜色
	//colorArr:数组 每个楼层固定定位选中时的颜色
	//imgUrl:放图片地址的属性
	//loucHeight:楼层出现的高度
	//daohTop:导航消失时的定位Top（是负值）
	//daohtime:导航多长时间消失
	// tiaozhuan(".box li",".box","section","nav",500,"#eee",["red","red","red","red"],"imgUrl",600,-50,1000);
	function tiaozhuan(lis,boxx,section,daohang,louctime,louccolor,colorArr,imgUrl,loucHeight,daohTop,daohtime){
		const box=$(lis);
		const btnbox=$(boxx)[0];
		const floor=$(section);
		const nav=$(daohang)[0];
		const CH=document.documentElement.clientHeight;//屏幕高度
		const loucyanse=colorArr;
		let flagx=true;
		let flags=false;
		let sobj=scrollobj();
		//楼层点击跳转
		for(let i=0;i<box.length;i++){
			box[i].onclick=function(){	
	    		animate(sobj,{scrollTop:floor[i].offsetTop-50},louctime);
	    	}
		}
		window.onscroll=function(){
			for(let i=0;i<floor.length;i++){
				//楼层换色
				if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
					for(let j=0;j<floor.length;j++){
						box[j].style.background=louccolor;
					}
					box[i].style.background=loucyanse[i];
				}
				//按序加载
				// if(floor[i].offsetTop>=CH+sobj.scrollTop){
				// 	let img=$("img",floor[i]);
				// 	for(let j=0;j<img.length;j++){
				// 		img[j].src=img[j].getAttribute(imgUrl);	
				// 	}   		
				// }
				
			}
	    	//楼层一定高度出现，一定高度消失
	    	if(sobj.scrollTop>=floor[0].offsetTop-120){
	    		if(flagx){
	    			flagx=false;
	    			flags=true;
	    			animate(nav,{top:0},function(){
	    				flagx=true;
	    			});
	    		}
	    		// btnbox.style.display="block";
	    		animate(btnbox,{opacity:1},200);
	    		
	    	}else{
	    		if(flags){
	    			flags=false;
	    			flagx=true;
	    			animate(nav,{top:daohTop},function(){
	    				flags=true;
	    			});
	    		}
	    		// btnbox.style.display="none";
	    		animate(btnbox,{opacity:0},200);
	    	}
	    }
		//导航1s后关闭
		setTimeout(function(){
			animate(nav,{top:daohTop},function(){
				flags=true;
			});
		},daohtime)
	}

	    //one只运行一次
		//事件触发后只执行一次
		//obj: 事件源： 某对象 
		//type: 事件：发生的事
		//fn: 事件处理程序：去做什么
		//one(box,"click",function(){alert(1);})
		function one(obj,type,fn){
			//添加第一个type类型事件 执行fn
			obj.addEventListener(type,fn,false);
			//添加第一个type类型事件 执行clear
			obj.addEventListener(type,clear,false);
			function clear(){
				//清除type类型事件中fn处理程序
				obj.removeEventListener(type,fn,false);
				//清除type类型事件中clear处理程序
				obj.removeEventListener(type,clear,false);
			}
		}


		//将盒子进行拖拽
		//tuozhuai(".box");	
		function tuozhuai(hezi){
			const box=$(hezi)[0];
			box.style.position="absolute";
			let x;
			let y;
			let chax;
			let chay;
			let boxx;
			let boxy;
			box.addEventListener("mousedown",down,false);
			function down(e){
				x=e.clientX;
				y=e.clientY;
				boxx=box.offsetLeft;
				boxy=box.offsetTop;
				window.addEventListener("mousemove",move,false);
				window.addEventListener("mouseup",up,false);
			}
			function move(e){
				let mx=e.clientX;
				let my=e.clientY;
				chax=mx-x;
				chay=my-y;
				let lefts=chax+boxx;
				let tops=chay+boxy;
				if(lefts<=0){
					lefts=0;
				}
				if(tops<=0){
					tops=0;
				}
				box.style.left=lefts+"px";
				box.style.top=tops+"px";

			}
			function up(){
				window.removeEventListener("mousemove",move,false);
				window.removeEventListener("mouseup",up,false);
			}
		}


		//鼠标滚轮事件 mouseWheel(obj,shang,xia);
		//obj:鼠标滚动事件源
		//shang:鼠标向上移动触发事件
		//下:鼠标向下移动触发事件
		function mouseWheel(obj,shang,xia){
			obj.addEventListener("mousewheel",scrollFn,false);//
			obj.addEventListener("DOMMouseScroll",scrollFn,false);
			function scrollFn(e){
				e.preventDefault()//阻止浏览器默认行为
				//谷歌
				if(e.wheelDelta){
					if(e.wheelDelta>0){
						//上
						shang();
					}else{
						//下
						xia();
					}
				//火狐	
				}else{
					if(e.detail>0){
						//下
						xia();
					}else{
						//上
						shang();
					}
				}
			}
		}

		//cookie的添加、查看、删除
		//添加addCookie(key,val[,time])[代表可填可不填]
		//key:键名   String
		//val:值     String
		//time:过期时间   单位s    (可不填)
		// addCookie("info","aaaa",20);//20为毫秒
		// addCookie("info2","bbbb",20);
		function addCookie(key,val,time){
			val=escape(val);//在输入cookie信息时不能包含空格，分号，逗号等特殊符号，将其编码
			if(time){
				let date=new Date();
				time*=1000;
				date.setTime(date.getTime()+time);
				date = date.toGMTString();
				document.cookie= `${key}=${val};expires=${date}`;
			}else{
				document.cookie= `${key}=${val}`;
			}
		}
		//查看
		// getCookie("info2");
		// console.log(getCookie("info"));
		function getCookie(key){
			let cookies=document.cookie;
			// console.log(cookies);//info=aaaa; info2=bbbb
			let cookiearr=cookies.split("; ");//必须有空格
			// console.log(cookiearr);//Array [ "info=aaaa", " info2=bbbb" ]
			let val;
			for(let i=0;i<cookiearr.length;i++){
				//1.第一种方法
				// if(key==cookiearr[i].split("=")[0]){
				// 	val=cookiearr[i].split("=")[1];
				// }
				//2.第二种方法
				let arr=cookiearr[i].split("=");
				if(key==arr[0]){
					val=arr[1];
				}
			}
			return unescape(val);//在输入cookie信息时不能包含空格，分号，逗号等特殊符号，将其解码
		}
		//删除
		// delCookie("info");
		function delCookie(key){
			//不用遍历寻找，直接重写一遍覆盖
			let date=new Date();
			date.setTime(date.getTime()-10000);
			date=date.toGMTString();
			document.cookie=`${key}=aa;expires=${date}`;
		}
		// console.log(getCookie("info"));










