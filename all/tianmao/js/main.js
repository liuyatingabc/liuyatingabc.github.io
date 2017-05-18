$(function(){
	// const aa=$(".daohangzhongk");
	// const bb=$(".bannerNavLis");
	xuanxiangka(".ban .ban-down .ban-tab li",".ban-tabxxk");
	xuanxiangka(".headeryouyi",".headeryouyixxk");
	xuanxiangka(".zhongtu2logo1",".zhongtu2logo1dw");

	//banner图上猫的选项卡
	function xuanxiangkamao(btn,con){
		const aa=$(btn);
	    const bb=$(con);
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
			    animate(bb[i],{top:-10,opacity:1},100);
		    }
		    aa[i].onmouseout=function(){
		    	animate(bb[i],{top:0,opacity:0},100);
		    }
	    }
	}
	xuanxiangkamao(".ban .ban-top ul li",".tianmaodaohsdw");

	function zhezhao1(a,b){
		const aa=$(a);
		const bb=$(b);
		for(let i=0;i<aa.length;i++){
			aa[i].onmouseover=function(){
				bb[i].style.display="block";
			}
			aa[i].onmouseout=function(){
				bb[i].style.display="none";
			}
		}
		
	}
	zhezhao1(".meiltuyi",".meiltuyitudw");

	function zhezhao2(a,b){
		const aa=$(a);
		const bb=$(b);
		for(let i=0;i<aa.length;i++){
			aa[i].onmouseover=function(){
				animate(bb[i],{opacity:1},100);
			}
			aa[i].onmouseout=function(){
				animate(bb[i],{opacity:0},100);
			}
		}
		
	}
	zhezhao2(".cainituyi",".cainizhezhao");

	
	// Tlunbo(pic,bannerBox,lis,colorArr,tuactiveopacity,liactivebgColor,lubotime,tuopacity,lisColor,zuokuohao,youkuohao)
	Tlunbo(".bannertu",".ban-down",".lunbodianyi",["#980d1c","#e8e8e8","#cea647","#d9f0f6","#0875f2","#741acc"],1,"rgba(255,255,255,0.5)",2000,0,"#b1b2ac");
	// Tlunbo(pic,bannerBox,lis,colorArr,tuactiveopacity,liactivebgColor,lubotime,tuopacity,lisColor)
	// Tlunbo(pic,bannerBox,lis,tuactiveopacity,liactivebgColor,lunbotime,tuopacity,lisColor)
	// alert(2);//(pic,lis,tuactiveopacity,liactivebgColor,lunbotime,tuopacity,lisColor)

	tiaozhuan(".dingweiza",".dingweiz",".louceng",".dingweishang",500,"rgba(0,0,0,.6)",["#ea5f8d","#0aa6e8","#64c333","#f15453","#19c8a9","#f7a945","#dd2727"],"imgUrl",940,-50,1000);
	// tiaozhuan(lis,boxx,section,daohang,louctime,louccolor,colorArr,imgUrl,loucHeight,daohTop,daohtime)
	    //bnanner上导航的选项卡
	function xuanxiangka2(btn,con){
		const aa=$(btn);
	    const bb=$(con);
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
			    // for(let j=0;j<bb.length;j++){
				   //  bb[j].style.display="none";
			    // }
			    bb[i].style.opacity=1;
		    }
		    aa[i].onmouseout=function(){
			    bb[i].style.opacity=0;
		    }
	    }
	}

	//返回顶部跳转
	const fanhui=$(".dingweizaer")[0];
	const fanhui2=$(".dingweiyerfhdb")[0];
		let sobj=scrollobj();

	fanhui.onclick=function(){
		animate(sobj,{scrollTop:0},1000);
	}
	fanhui2.onclick=function(){
		animate(sobj,{scrollTop:0},1000);
	}

	//窗口定位左背景颜色的鼠标移入事件
	function zuobianse(section,yanse){
		const floor=$(section);
		const colorArr=yanse;
		for(let j=0;j<floor.length;j++){
			floor[j].onmouseover=function(){
				floor[j].style.background=colorArr[j];
			}
			floor[j].onmouseout=function(){
				floor[j].style.background="rgba(0,0,0,.6)";
			}
		}
	}
	zuobianse(".dingweiza",["#ea5f8d","#0aa6e8","#64c333","#f15453","#19c8a9","#f7a945","#000"])
	
	//上下轮播 美丽人生等
	function shangxialunbo(box){
		const aa=$(box);
		let t=setInterval(move,4000);
	    function move(){
	    	for(let i=0;i<aa.length;i++){
	    		let first=aa[i].children[0];
		    	let last=aa[i].children[aa[i].children.length-1];
			    animate(first,{marginTop:-30},500,function(){
			    	aa[i].appendChild(first);
			    	animate(first,{marginTop:0},500);
			    });
	    	}
	    	
	    }
	}
	shangxialunbo(".meiltuyituer");




	//banner图下选项卡
	function xuanxiangka3(btn,con){
		const aa=$(btn);
	    const bb=$(con);
	    for(let j=0;j<bb.length;j++){
			bb[j].style.display="none";
		}
	    bb[0].style.display="block";
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
			    for(let j=0;j<bb.length;j++){
				    bb[j].style.display="none";
			    }
			    bb[i].style.display="block";
		    }
	    }
	}
	xuanxiangka3(".zhongtu2tuzyitu",".zhongtu2tusyi")

	//banner图下上下轮播
	function shangxialunbo(box){
			const aa=$(box);
			let t=setInterval(move,4000);
		    function move(){
		    	for(let i=0;i<aa.length;i++){
		    		let first=aa[i].children[0];
			    	let last=aa[i].children[aa[i].children.length-1];
				    animate(first,{marginTop:-40},500,function(){
				    	aa[i].appendChild(first);
				    	animate(first,{marginTop:0},500);
				    });
		    	}
		    	
		    }
	    }
	shangxialunbo(".zhongtu2tuxer");	 

	//banner图下左右轮播
	Zlunbo1(".zhongtu2tuzyi",".zhongtu2tuz",".zhongtu2tuzzuo",".zhongtu2tuzyou");
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
		leftBen.style.display="none";
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
					leftBen.style.display="none";
					rightBen.style.display="block";
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
					leftBen.style.display="block";
					rightBen.style.display="none";
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

	//固定定位右鼠标移入向右移动
	function xuanxiangkay(btn,con){
		const aa=$(btn);
	    const bb=$(con);
	    let t;
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
		    	t=setTimeout(function(){
		    		bb[i].style.display="block";
		    		animate(bb[i],{opacity:1,left:-90},500);
		    	},500);
		    }
		    aa[i].onmouseout=function(){
		    	if(t){
		    		clearTimeout(t);
		    	}
			    animate(bb[i],{opacity:0,left:-165},500,function(){
			    	bb[i].style.display="block";
			    });
		    }
	    }
	}
	xuanxiangkay(".dwzyd",".dingweiyerdw");

	//固定定位右二维码
	xuanxiangka(".dingweiyerdwdwdw",".dingweiyerdwerweima");

	//固定定位右点击
	function dianji(btn,con,son){
		const aa=$(btn);
	    const bb=$(con);
	    const cc=$(son);
		for(let i=0;i<aa.length;i++){
		    aa[i].onclick=function(){
			    // for(let j=0;j<cc.length;j++){
				   //  cc[j].style.display="none";
			    // }
			    bb[i].style.display="block";
		    }
		    bb[i].onmouseout=function(){
			    bb[i].style.display="none";
		    }
	    }
	}
	dianji(".dwydj",".dingweiydj",".dingweiyerdw");

})      