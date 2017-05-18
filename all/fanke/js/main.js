$(function(){
	        // const aa=$(".bannerzizi");
	        // const bb=$(".bannerzi_youxlk");
	// function xuanxiangka2(btn,con){
	// 	const aa=$(btn);
	//     const bb=$(con);
	// 	for(let i=0;i<aa.length;i++){
	// 	    aa[i].onmouseover=function(){
	// 	    	// console.log(bb[i].children[1].children);
	// 	    	let len=(bb[i].children[1].children.length-1)*46+30;
	// 	    	console.log(len);
	// 		    for(let j=0;j<bb.length;j++){
	// 			    // bb[j].style.display="none";
	// 			    bb[j].style.height=0;
	// 		    }
	// 		    bb[i].style.display="block";
	// 		    animate(bb[i],{height:len},200);
	// 	    }
	// 	    aa[i].onmouseout=function(){
	// 		    animate(bb[i],{height:0},200,function(){
	// 		    	bb[i].style.display="none";
	// 		    });
	// 		    // bb[i].style.height=0;
			    
	// 	    }
	//     }
	// }
	// xuanxiangka2(".bannerzizi",".bannerzi_youxlk");


	xuanxiangkahover(".bannerzizi",".bannerzi_youxlk");

	        // const cc=$(".daohanga");
	        // const dd=$(".daohangxlk");
	        // xuanxiangka(cc,dd);

	        
	Tlunbo(".bannertudw",".bannertu",".bannerxiayi",[],1,"#a10000",2000,0,"#dddddd",".bannerzuokuohao",".banneryoukuohao");
	// Tlunbo(pic,bannerBox,lis,colorArr,tuactiveopacity,liactivebgColor,lubotime,tuopacity,lisColor,zuokuohao,youkuohao)
	xuanxiangka(".headerweixina",".erweima");


	//返回顶部跳转
		const fanhui=$(".gddwsan")[0];
			let sobj=scrollobj();

		fanhui.onclick=function(){
			animate(sobj,{scrollTop:0},1000);
		}
})      