$(function(){
	Tlunbo(".ban-box",".ban",".lunbod-d",[],1,"#e5004f",2000,0,"#211616",".ban-box-ban-left",".ban-box-ban-right")

	//banner左选项卡
	xuanxiangka(".ban-left-li",".ban-left-li-po")

	//超值特卖选项卡
	xuanxiangka2(".cz-left-all-li",".cz-left-box-dis",".cz-left-all-li-po");
	function xuanxiangka2(btn,con,son){
		const aa=$(btn);
	    const bb=$(con);
	    const cc=$(son);
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
			    for(let j=0;j<bb.length;j++){
				    bb[j].style.display="none";
				    aa[j].style.borderBottomColor="#333333";
				    cc[j].style.display="none";
			    }
			    bb[i].style.display="block";
			    aa[i].style.borderBottomColor="#e5004f";
			    cc[i].style.display="block";
		    }
	    }
	}

	//银泰百货选项卡
	xuanxiangka3(".bh-bot-rig-top-ul-li",".bh-bot-rig-bot",".bh-bot-rig-top-ul-li-po");
	function xuanxiangka3(btn,con,son){
		const aa=$(btn);
	    const bb=$(con);
	    const cc=$(son);
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
			    for(let j=0;j<bb.length;j++){
				    bb[j].style.display="none";
				    aa[j].style.borderBottomColor="#333333";
				    cc[j].style.display="none";
			    }
			    bb[i].style.display="block";
			    aa[i].style.borderBottomColor="#e5004f";
			    cc[i].style.display="block";
		    }
	    }
	}

	//时尚名品左下轮播图
	Zlunbo1(".mip .fash-lef-bot-lun-box",".mip .fash-lef-bot-lun",".mip .fash-lef-bot-al",".mip .fash-lef-bot-ar",400);
	//潮流女装左下轮播图
	Zlunbo1(".nvz .fash-lef-bot-lun-box",".nvz .fash-lef-bot-lun",".nvz .fash-lef-bot-al",".nvz .fash-lef-bot-ar",400);
	//精品男装左下轮播图
	Zlunbo1(".naz .fash-lef-bot-lun-box",".naz .fash-lef-bot-lun",".naz .fash-lef-bot-al",".naz .fash-lef-bot-ar",400);
	//时尚鞋靴左下轮播图
	Zlunbo1(".xix .fash-lef-bot-lun-box",".xix .fash-lef-bot-lun",".xix .fash-lef-bot-al",".xix .fash-lef-bot-ar",400);
	//潮流箱包左下轮播图
	Zlunbo1(".xib .fash-lef-bot-lun-box",".xib .fash-lef-bot-lun",".xib .fash-lef-bot-al",".xib .fash-lef-bot-ar",400);
	//美容护肤左下轮播图
	Zlunbo1(".huf .fash-lef-bot-lun-box",".huf .fash-lef-bot-lun",".huf .fash-lef-bot-al",".huf .fash-lef-bot-ar",400);
	//运动户外左下轮播图
	Zlunbo1(".huw .fash-lef-bot-lun-box",".huw .fash-lef-bot-lun",".huw .fash-lef-bot-al",".huw .fash-lef-bot-ar",400);
	//内衣配饰左下轮播图
	Zlunbo1(".pes .fash-lef-bot-lun-box",".pes .fash-lef-bot-lun",".pes .fash-lef-bot-al",".pes .fash-lef-bot-ar",400);
	//可爱婴童左下轮播图
	Zlunbo1(".yit .fash-lef-bot-lun-box",".yit .fash-lef-bot-lun",".yit .fash-lef-bot-al",".yit .fash-lef-bot-ar",400);
	function Zlunbo1(pic,bannerBox,zuokuohao,youkuohao,luoboxiaotime){
    	const tu=$(pic);
    	// alert(1);
		const img=$(bannerBox)[0];
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		const leftBen=$(zuokuohao)[0];
		const rightBen=$(youkuohao)[0];
		// const lis=$(lunbodian);
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
			// lis[0].style.background=liscolor;
		}
		tu[0].style.left=0;
		// lis[0].style.background=lisactivebgColor;
		// var t=setInterval(move,lubotime);
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
				// lis[now].style.background=liscolor;
				// lis[next].style.background=lisactivebgColor;
				flag=true;
				now=next;
			});
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

	//时尚名品 中轮播图
	Zlunbo2(".mip .fash-cen-box-img",".mip .fash-cen-box",".mip .fash-cen-box-al",".mip .fash-cen-box-ar",".mip .fash-cen-box-lun-dia","#6e6e6e","#d40654",500);
	//潮流女装 中轮播图
	// Zlunbo2(".nvz .fash-cen-box-img",".nvz .fash-cen-box",".nvz .fash-cen-box-al",".nvz .fash-cen-box-ar",".nvz .fash-cen-box-lun-dia","#6e6e6e","#d40654",500);
	//精品男装 中轮播图
	// Zlunbo2(".naz .fash-cen-box-img",".naz .fash-cen-box",".naz .fash-cen-box-al",".naz .fash-cen-box-ar",".naz .fash-cen-box-lun-dia","#6e6e6e","#d40654",500);
	//时尚鞋靴 中轮播图
	// Zlunbo2(".xix .fash-cen-box-img",".xix .fash-cen-box",".xix .fash-cen-box-al",".xix .fash-cen-box-ar",".xix .fash-cen-box-lun-dia","#6e6e6e","#d40654",500);
	//潮流箱包 中轮播图
	// Zlunbo2(".xib .fash-cen-box-img",".xib .fash-cen-box",".xib .fash-cen-box-al",".xib .fash-cen-box-ar",".xib .fash-cen-box-lun-dia","#6e6e6e","#d40654",500);
	//美容护肤 中轮播图!
	// Zlunbo2(".huf .fash-cen-box-img",".huf .fash-cen-box",".huf .fash-cen-box-al",".huf .fash-cen-box-ar",".huf .fash-cen-box-lun-dia","#6e6e6e","#d40654",500);
	//运动户外 中轮播图
	Zlunbo2(".huw .fash-cen-box-img",".huw .fash-cen-box",".huw .fash-cen-box-al",".huw .fash-cen-box-ar",".huw .fash-cen-box-lun-dia","#6e6e6e","#d40654",500);
	//内衣配饰 中轮播图
	// Zlunbo2(".pes .fash-cen-box-img",".pes .fash-cen-box",".pes .fash-cen-box-al",".pes .fash-cen-box-ar",".pes .fash-cen-box-lun-dia","#6e6e6e","#d40654",500);
	//可爱婴童 中轮播图
	// Zlunbo2(".yit .fash-cen-box-img",".yit .fash-cen-box",".yit .fash-cen-box-al",".yit .fash-cen-box-ar",".yit .fash-cen-box-lun-dia","#6e6e6e","#d40654",500);
	function Zlunbo2(pic,bannerBox,zuokuohao,youkuohao,lunbodian,liscolor,lisactivebgColor,luoboxiaotime){
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
		// var t=setInterval(move,lubotime);
		var now=0;
		var next=0;
		var flag=true;
		for(let j=0;j<lis.length;j++){
        	lis[j].onclick=function(){
        		// clearInterval(t);
        		if(flag){
        			for(let i=0;i<tu.length;i++){
					    lis[i].style.background=liscolor;
					    tu[i].style.left=imgw+"px";
				    }
				    tu[next].style.left=0;
				    animate(tu[next],{left:-imgw},500);
				    animate(tu[j],{left:0},500);
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
		img.onmouseover=function(){
			animate(leftBen,{left:0},500);
			animate(rightBen,{right:0},500);
		}
		img.onmouseout=function(){
			animate(leftBen,{left:-30},500);
			animate(rightBen,{right:-30},500);
		}
	}


	//固定定位鼠标移入
	xuanxiangka(".louc-one",".louc-one-po");

	//楼层跳转
	tiaozhuan1(".louc-one",".louc",".fash",500,"#fff","#b2b2b2",800,".louc-one-po")
	function tiaozhuan1(lis,boxx,section,louctime,louccolor,colorArr,loucHeight,louchuanse){
		const box=$(lis);
		// console.log(box);
		const btnbox=$(boxx)[0];
		const floor=$(section);
		const huanse=$(louchuanse);
		const CH=document.documentElement.clientHeight;//屏幕高度
		// const loucyanse=colorArr;
		let flagx=true;
		let flags=false;
		let sobj=scrollobj();
		//楼层点击跳转
		for(let i=0;i<box.length;i++){
			box[i].onclick=function(){	
	    		animate(sobj,{scrollTop:floor[i].offsetTop},louctime);
	    	}
		}
		window.onscroll=function(){
			for(let i=0;i<floor.length;i++){
				//楼层换色
				if(sobj.scrollTop+0.5*CH>=floor[i].offsetTop){
					for(let j=0;j<floor.length;j++){
						huanse[j].style.display="none";
					}
					huanse[i].style.display="block";
				}
				
			}
			//楼层、导航一定高度出现，一定高度消失
	    	if(sobj.scrollTop>=loucHeight){
	    		btnbox.style.display="block";
	    		
	    	}else{
	    		btnbox.style.display="none";
	    	}
	    }
	}

	//返回顶部跳转
	const fanhui=$(".louc-ten")[0];
	let sobj=scrollobj();
	fanhui.onclick=function(){
		animate(sobj,{scrollTop:0},1000);
	}

	












})      