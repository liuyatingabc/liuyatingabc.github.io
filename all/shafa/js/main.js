$(function(){
	        // const aa=$(".daohangzhongk");
	        // const bb=$(".bannerNavLis");
	        xuanxiangka(".naver",".naverdw");
	        // xuanxiangka(".headeryouyi",".headeryouyixxk");
	        // xuanxiangka2(".ban .ban-top ul li",".tianmaodaohsdw");
	        xuanxiangka(".jingxuanxyizho",".jingxuanxyizhodw");

	function xuanxiangka2(btn,con){
		const aa=$(btn);
	    const bb=$(con);
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
	xuanxiangka2(".zhinengyxxyis",".zhinengyxxyix");

	        // Tlunbo(".banneryimgimg",".banneryimgimg","",[],1,"",1000,0,"");
	        
	        // Tlunbo(pic,bannerBox,lis,colorArr,tuactiveopacity,liactivebgColor,lubotime,tuopacity,lisColor)
	        // Tlunbo(".bannertu",".ban-down",".lunbodianyi",["#193c7c","#e8e8e8","#cea647","#e8e8e8","#0875f2","#741acc"],1,"rgba(255,255,255,0.5)",2000,0,"#b1b2ac");
	        // Tlunbo(pic,bannerBox,lis,colorArr,tuactiveopacity,liactivebgColor,lubotime,tuopacity,lisColor)
	        // Tlunbo(pic,bannerBox,lis,tuactiveopacity,liactivebgColor,lunbotime,tuopacity,lisColor)
	        // alert(2);//(pic,lis,tuactiveopacity,liactivebgColor,lunbotime,tuopacity,lisColor)
	        

	    //沙发轮播
		const box=$(".banneryimgyi")[0];
		const img=$(".banneryimgyi a");
		img[0].style.opacity=1;
		let t=setInterval(move,2000);
		let num=0;
		function move(){
			if(num>=img.length){
				num=0;
			}
			for(i=0;i<img.length;i++){
				img[i].style.opacity=0;
			}
			// img[num].style.opacity=1;
			animate(img[num],{opacity:1},1000,function(){
				num++;
			});
		}


		//沙发管家安装教程1的点击事件
		function shafaanzhuangyi(){
			const aa=$(".bannerzliuinputyi")[0];
			const bb=$(".bannerzliuinputyidw")[0];
			const close=$(".bzliuipyidwsx")[0];
			const con=$(".bzliuipyidwssyi");
			const btn=$(".bzliuipyidwx");
			aa.onclick=function(){
				bb.style.display="block";
			}
			close.onclick=function(){
				bb.style.display="none";
			}
			for(let i=0;i<con.length;i++){
			    con[i].onclick=function(){
				    for(let j=0;j<btn.length;j++){
					    btn[j].style.display="none";
					    con[j].style.background="#f0fafc";
					    con[j].style.borderBottom="1px solid #dddddd";
					    con[j].style.color="#999999";
				    }
				    btn[i].style.display="block";
				    con[i].style.background="#fff";
				    con[i].style.borderBottom="0";
					con[i].style.color="#0084bb";
			    }
		    }
		}
		shafaanzhuangyi();

		//沙发管家安装教程1的点击事件
		function shafaanzhuanger(){
			const aa=$(".bannerzliuinputer")[0];
			const bb=$(".bannerzliuerdw")[0];
			const close=$(".bannerzliuerdwclose")[0];
			aa.onclick=function(){
				bb.style.display="block";
			}
			close.onclick=function(){
				bb.style.display="none";
			}
		}
		shafaanzhuanger();







}) 
