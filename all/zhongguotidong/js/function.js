// $(function(){
// 	alert(1);

// })
function $(select,obj=document){
	if(typeof select=="function"){
		window.onload=function(){
		select();
		}
	}
	else if(typeof select=="string"){
		// return obj.querySelectorAll(select);
		return obj.querySelectorAll(select);

	}
}


/*选项卡的功能xuanxiang(btn,con)
		btn是选项卡按钮，con选项卡内容

	*/
	function xuanxiang(btnanniu,conlis){
		const btn=$(btnanniu);
		const con=$(conlis);
		for(let i=0;i<btn.length;i++){
			btn[i].onmouseover=function(){
				// for(let j=0;j<con.length;j++){
				// 	con[j].style.display="none";
				// }
				con[i].style.display="block";
			}
			btn[i].onmouseout=function(){
				con[i].style.display="none";	
			}
		}
	}

	


	/*遮罩*/

	function zhezhao(obj,zhezhao){
		obj.onmouseover=function(){
			zhezhao.style.display="block";	
		}
		obj.onmouseout=function(){
			zhezhao.style.display="none";	
		}
	}

// pic （轮播图）字符串的选择器，
	// bigbannerBox(通屏的banner盒子)
	// lis  （轮播点 ） 字符串的选择器
	// colorArr（ 通屏的banner盒子的所有颜色）是个数组 例如["red","blue","black"]
	// tuActiveBigZ  （图轮播时的层级）
	// liactiveBgColor （轮播获得焦点的颜色）
	// lunboTime （轮播时间）  填的是数字
	// tuChushiZ  （图的初始层级）
	// liscolor （轮播的颜色）
// function Zlunbo(pic,bigbannerBox,lis,colorArr,tuActiveBigZ,liactiveBgColor,lunboTime,tuChushiZ,liscolor){
// 	const tu=$(pic);
// 	const banner=$(bigbannerBox)[0];
// 	const li = $(lis);
// 	const color = colorArr;
// 	tu[0].style.zIndex=tuActiveBigZ;
// 	li[0].style.background=liactiveBgColor;
// 	banner.style.background=color[0];
// 	var num=0;
// 	var t=setInterval(move,lunboTime);
// 	banner.onmouseover=function(){
// 		clearInterval(t);
// 	}
// 	banner.onmouseout=function(){
// 		t=setInterval(move,lunboTime);

// 	}

// 	for(let j=0;j<li.length;j++){
// 		li[j].onmouseover=function(){
// 			for(let i=0;i<tu.length;i++){
// 				tu[i].style.zIndex=tuChushiZ;
// 				li[i].style.background=liscolor;
			
// 			}
// 			tu[j].style.zIndex=tuActiveBigZ;
// 			li[j].style.background=liactiveBgColor;
// 			banner.style.background=color[j];
// 			num=j;
// 		}
// 	}

// 	function move(){
// 		num++;
// 		if(num>=tu.length){
// 			num=0;
// 		}
// 		console.log(num)
// 		for(let i=0;i<tu.length;i++){
// 			tu[i].style.zIndex=tuChushiZ;
// 			li[i].style.background=liscolor;
		
// 		}
// 		tu[num].style.zIndex=tuActiveBigZ;
// 		li[num].style.background=liactiveBgColor;
// 		banner.style.background=color[num];

// 	}
// }

function toumingdu(pic,bigbannerBox,lis,colorArr,tuActiveBigZ,liactiveBgColor,lunboTime,tuChushiZ,liscolor,zuo,you){

    const tu=$(pic);
    const banner=$(bigbannerBox)[0];
    const li = $(lis);
    const color = colorArr;
    const leftbtn=$(zuo)[0];
    const rightbtn=$(you)[0];
    // const leftbtn = document.querySelectorAll(zuo);
    let flag=true;

    tu[0].style.opacity=tuActiveBigZ;
    li[0].style.background=liactiveBgColor;
    banner.style.background=color[0];
    var num=0;
    var t=setInterval(move,lunboTime);
    banner.onmouseover=function(){
        clearInterval(t);
    }
    banner.onmouseout=function(){
        t=setInterval(move,lunboTime);
    }
    	leftbtn.onmouseover=function(){
		clearInterval(t);
	}
	leftbtn.onclick=function(){
		if(flag){
			move("r");
		}
	}
	rightbtn.onmouseover=function(){
		clearInterval(t);
	}
	rightbtn.onclick=function(){
		if(flag){
			move("l");
		}
	}
    for(let j=0;j<li.length;j++){
        li[j].onmouseover=function(){
            for(let i=0;i<tu.length;i++){
                animate(tu[i],{opacity:0},200);
                li[i].style.background=liscolor;
            }
            animate(tu[j],{opacity:1},200);//用animate时需要将li的opac注释 以及tu[j].style.opacity=1;注释掉
            li[j].style.background=liactiveBgColor;
            banner.style.background=color[j];
            num=j;
        }
    }
    function move(type="l"){
        flag=false;
        if(type=="l"){
            num++;
            if(num>tu.length-1){
                num=0;
            }
        }
        else if(type=="r"){
            num--;
            if(num<0){
                num=tu.length-1;
            }
        }
        for(let i=0;i<tu.length;i++){
            animate(tu[i],{opacity:0},200);
            li[i].style.background=liscolor;
        }
        animate(tu[num],{opacity:1},200,function(){
            flag=true;
        });
        li[num].style.background=liactiveBgColor;
        banner.style.background=color[num];
    }

}


function zylunbo(pic,tpHezi,lefts,rights,li,liactiveBgColor,lunboTime,liscolor){
    //获取轮播图
    const tu=$(pic);
    // 获取放轮播图的盒子
    const img=$(tpHezi)[0];
    // 获取轮播图盒子的宽度转为整型
    const imgW=parseInt(window.getComputedStyle(img,null).width);
    // banner图上左边按钮
    const leftbtn=$(lefts)[0];
    // banner图上右边按钮
    const rightbtn=$(rights)[0];
    // 获取轮播点
    const lis=$(li);
    // 初始化
    for(let i=0;i<tu.length;i++){
        tu[i].style.left=imgW+"px";
    }
    tu[0].style.left=0;
    lis[0].style.background=liactiveBgColor;
    var t=setInterval(move,lunboTime);
    var num=0;
    var next=0;
    var flag=true;

    // 鼠标移进轮播点时发生的
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            if(flag){
                for(let j=0;j<lis.length;j++){
                    lis[j].style.background=liscolor;
                    tu[j].style.left=imgW+"px";
                }
                tu[i].style.left=0;
                lis[i].style.background=liactiveBgColor;
                clearInterval(t);
                num=i;
                next=i;
            }
        }
    }
    function move(type="l"){
        flag=false;
        // 左轮播
        if(type=="l"){
            next++;
            if(next>tu.length-1){
                next=0;
            }
            tu[next].style.left=imgW+"px";
            animate(tu[num],{left:-imgW},500);
        }
        // 右轮播
        else if(type=="r"){
            next--;
            if(next<0){
                next=tu.length-1;
            }
            tu[next].style.left=-imgW+"px";
            animate(tu[num],{left:imgW},500);
        }
        animate(tu[next],{left:0},500,function(){
            //轮播结束
            flag=true;
            lis[next].style.background=liactiveBgColor;
            lis[num].style.background=liscolor;
            // console.log(num+"--"+next);
            num=next;
        });
    }
    img.onmouseover=function(){
        clearInterval(t);
    }
    img.onmouseout=function(){
        t=setInterval(move,lunboTime);
    }
    leftbtn.onmouseover=function(){
        clearInterval(t);
    }
    leftbtn.onclick=function(){
        if(flag){
            move("r");
        }
    }
    rightbtn.onmouseover=function(){
        clearInterval(t);
    }
    rightbtn.onclick=function(){
        if(flag){
            move("l");
        }
    }
}





function scrollobj(){
	let body=document.body;
	body.scrollTop=1;
	let html=document.documentElement;
	html.scrollTop=1;
	let obj;
	if(body.scrollTop==0){
		obj=html;
	}else{
		obj=body;
	}
	return obj;
}





// 导航栏
//sec是指每个楼层的 
// bt 是指左边要跳转时的按钮
// btnBox 是指装有所有按钮的大盒子
// Dh 是指导航栏
// num 是指距离多大时 要使得导航栏出现
//navH 导航栏的高度
// btnColor  按钮原来的颜色
// btnavtiveColor 按钮变化的颜色
function tiaozhuan(sec,bt,btnBox,btnzi){
	const section=$(sec);
	const btn=$(bt);
	const box=$(btnBox)[0];
	const  btnlis=$(btnzi);
	const Ch=document.documentElement.clientHeight;
	let sobj=scrollobj();
	for(let i=0;i<btn.length;i++){
       btn[i].onclick=function(){
			animate(sobj,{scrollTop:section[i].offsetTop},500);
		}
        btn[i].onmouseover=function() {
			for(let j=0;j<btnlis.length;j++){
				btnlis[j].style.display="none";
			}
			btnlis[i].style.display="block";
	    }
    }

	// let flagx=true;
	// let flags=false;
	window.onscroll=function(){
		// 若滚动条的高度大于800，要让导航栏显示
		// 这时接受的消息要往下走
		if(sobj.scrollTop>=1424){
			box.style.display="block";
		}
		// 若滚动条的高度小于800，要让导航栏隐藏
		else{
			box.style.display="none";
		}
		for(let i=0;i<section.length;i++){
            if(sobj.scrollTop+0.5*Ch>=section[i].offsetTop){
				for(let j=0;j<section.length;j++){
					btnlis[j].style.display="none";
				}
				btnlis[i].style.display="block";
            }
			if(sobj.scrollTop+Ch>=section[i].offsetTop){
            	let img=$("img",section[i]);
            	for(let j=0;j<img.length;j++){
            		img[j].src=img[j].getAttribute("imgUrl");
            	}
            }
		}
		
	}
}


// 上下节点轮播
function sxjiedian(dahezi,pichezi,num){
	const BigBox=$(dahezi)[0];
	const box=$(pichezi)[0];
	// const zi=$(lunbozi)[0];
	box.children[0].style.top=0+"px";
	var t=setInterval(move,1000);

	function move(){

		animate(box,{top:-num},500,function(){
			let first=box.firstElementChild;
			box.appendChild(first);
			box.style.top=0+"px";
		})
	}
	BigBox.onmouseover=function(){
		// zi.style.color="#dd2727";
		clearInterval(t);
	}
	BigBox.onmouseout=function(){
		t=setInterval(move,1000);
	}
	window.onfocus=function(){
		t=setInterval(move,1000);
	}
	window.onblur=function(){
		clearInterval(t);		
	}
}



 //滚轮事件 图片变大变小

function picBianhua(img){
	const img=$(img)[0];
		
	mousewheel(img,scrollTopFn,scrollBotFn);

	let imgW=parseInt(window.getComputedStyle(img,null).width);
	let imgH=parseInt(window.getComputedStyle(img,null).height);
	let speedW=10;
	let speedH=10;
	function scrollTopFn(){
		// if(imgH<=200){
		// 	return;
		// }
		imgW-=speedW;
		imgH-=speedH;
		img.style.width=imgW+"px";
		img.style.height=imgH+"px";
	}
	function scrollBotFn(){
		// if(imgH>=800){
		// 	return;
		// }
		imgW+=speedW;
		imgH+=speedH;
		img.style.width=imgW+"px";
		img.style.height=imgH+"px";
	}
}



// 左右节点轮播
// hezi  放图片的盒子
// tupian 图片  填类名选择器
// zuobtn 左按钮
// youbtn 右按钮
// n 移动图片的个数
// lunbotime 轮播时间
function zyjiedian(hezi,tupian,zuobtn,youbtn,num,lunbotime){
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
}



function zylb1(pics,tpHezis,leftss,rightss,lunboTimes){
    //获取轮播图
    const tu=$(pics);
    // 获取放轮播图的盒子
    const img=$(tpHezis)[0];
    // 获取轮播图盒子的宽度转为整型
    const imgW=parseInt(window.getComputedStyle(img,null).width);
    // banner图上左边按钮
    const leftbtn=$(leftss)[0];
    // banner图上右边按钮
    const rightbtn=$(rightss)[0];
    // 初始化
    for(let i=0;i<tu.length;i++){
        tu[i].style.left=imgW+"px";
    }
    tu[0].style.left=0;
    var t=setInterval(move,lunboTimes);
    var num=0;
    var next=0;
    var flag=true;

    function move(type){
        flag=false;
        // 左轮播
        if(type=="l"){
            next++;
            if(next>tu.length-1){
                next=0;
            }
            tu[next].style.left=imgW+"px";
            animate(tu[num],{left:-imgW},500);
        }
        // 右轮播
        else if(type=="r"){
            next--;
            if(next<0){
                next=tu.length-1;
            }
            tu[next].style.left=-imgW+"px";
            animate(tu[num],{left:imgW},500);
        }
        animate(tu[next],{left:0},500,function(){
            //轮播结束
            flag=true;
            num=next;
        });
    }
    img.onmouseover=function(){
        clearInterval(t);
    }
    img.onmouseout=function(){
        t=setInterval(move,lunboTimes);
    }
    leftbtn.onmouseover=function(){
        clearInterval(t);
    }
    leftbtn.onclick=function(){
        if(flag){
            move("l");
        }
    }
    rightbtn.onmouseover=function(){
        clearInterval(t);
    }
    rightbtn.onclick=function(){
        if(flag){
            move("r");
        }
    }
}
















































