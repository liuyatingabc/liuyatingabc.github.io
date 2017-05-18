$(function(){
	//太原
	function taiyuan(){
		const dj=document.querySelector(".nav_dingweei");
		const djs=document.querySelector(".nav_dingwei_lis2_zi1 a");
		const neir=document.querySelector(".nav_dingwei_lis2");
		const neirs=document.querySelector(".nav_dingwei_lis");
		let num=0;
		dj.onclick=function(){
			num++;
			if(num%2==1){
				neir.style.display="block";
				// neirs.style.display="none";
			}else if(num%2==0){
				neir.style.display="none";
				// neirs.style.display="block";
			}
		}
		// djs.onclick=function(){
		// 	neir.style.display="none";
		// 	neirs.style.display="block";
		// }
	}
	taiyuan();


	zylunbo(".bB_center ul li",".bB_center ul",".bleftbtn",".brightbtn",".bB_center_lunbo1","#e40077",5000,"#ccc")


	//优惠促销左右轮播
	zyjiedian(".cuxiaoBox_nr",".cuxiaoBox_nr ul li",".cuxiaoleft",".cuxiaoright",1,3000);


	//公告左右轮播
	zyjiedian2(".gonggao_center",".gonggao_center1",".gonggaoleftBtn",".gonggaorightBtn",1,3000);
	function zyjiedian2(hezi,tupian,zuobtn,youbtn,num,lunbotime){
	const box=$(hezi)[0];//获取盒子
	const imgW=parseInt(window.getComputedStyle((document.querySelector(tupian)),null).width);//获取每个图的宽度
	const left=$(zuobtn)[0];//获取左按钮
	const right=$(youbtn)[0];//获取右按钮
	let n=num;//定义移动图片的个数
	var flag=true;
	var t=setInterval(move,lunbotime);
	function move(type="l"){
		flag=false;
			if(type=="l"){
				//移动box盒子，左移 移动距离是图的宽度乘以n  当移动完之后，需将第一张图追加到后面，再使box回到原来的位置
			
			animate(box,{left:-imgW*n},500,function(){
				for(let i=0;i<n;i++){
					let first=box.firstElementChild;
					box.appendChild(first);
				}	
				box.style.left=0;

				flag=true;
				
			})	
		}
		else if(type=="r"){
			//右移  先将最后一张图放到第一张前面，这是box盒子距离左边的距离是图的宽度-imgW+"px"，再使box回到原来的位置
			for(let i=0;i<n;i++){
				let last=box.lastElementChild;
				let first=box.firstElementChild;
				box.insertBefore(last,first);
				box.style.left=-imgW*n+"px";
			}

			animate(box,{left:0},500,function(){
				flag=true;
			});
		}	
	}
	box.ommouseover=function(){
		clearInterval(t);
	}
	box.ommouseover=function(){
		t=setInterval(move,lunbotime);
	}
	left.onmouseover=function(){
		clearInterval(t);
	}
	right.onmouseover=function(){
		clearInterval(t);
	}
	left.onclick=function(){
		if(flag){
			move("l")
		}
	}
	right.onclick=function(){
		if(flag){
			move("r")
		}
	}
	window.onfocus=function(){
		t=setInterval(move,lunbotime);
	}
	window.onblur=function(){
		clearInterval(t);
	}

	const backBox1=$(".backBox1");
	for(let i=0;i<backBox1.length;i++){
		backBox1[i].onmouseover=function(){
			backBox1[i].style.transform="translateX(-64px)";
		}
		backBox1[i].onmouseout=function(){
			backBox1[i].style.transform="translateX(-0px)";
		}
	}
}



































})