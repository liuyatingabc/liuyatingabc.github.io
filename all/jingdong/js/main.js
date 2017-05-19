$(function(){
	xuanxiangka(".bannerzuo ul li",".bannerzuoxxk");
    xuanxiangka(".navyou .yi",".yixxk");

	//banner图透明轮播
	Tlunbo(".bannerbannertushangtu",".bannerbannertushang",".bannertusdwxyi",[],1,"#db192a",1500,0,"#fff",".bannertusdwz",".bannertusdwy");



	//窗口定位左背景颜色的鼠标移入事件
	function zuobianse(section,yanse){
		const floor=$(section);
		const colorArr=yanse;
		for(let j=0;j<floor.length;j++){
			floor[j].onmouseover=function(){
				floor[j].style.background=colorArr;
			}
			floor[j].onmouseout=function(){
				floor[j].style.background="#918888";
			}
		}
	}
	zuobianse(".gudingdwzyi","#d70b1c")

	//导航的出现于消失、楼层跳转、按序加载
	tiaozhuan(".gudingdwzyi",".gudingdwz",".tiaozhuan",".gudingdws",1000,"#918888",["#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c","#d70b1c"],"",800,-48,1000);

	//返回顶部跳转
	fanhuidingbu(".gudingdwzer");
	fanhuidingbu(".gudingdwyeryi");
	function fanhuidingbu(btn){
		const fanhui=$(btn)[0];
			let sobj=scrollobj();

		fanhui.onclick=function(){
			animate(sobj,{scrollTop:0},1000);
		}
	}

	//固定定位右鼠标移入向右移动
	xuanxiangkay(".gudingdwyyiyi",".gudingdwyyiyidw")
	function xuanxiangkay(btn,con){
		const aa=$(btn);
	    const bb=$(con);
	    let t;
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
		    	t=setTimeout(function(){
		    		bb[i].style.display="block";
		    		animate(bb[i],{left:-58},500);
		    	},300);
		    }
		    aa[i].onmouseout=function(){
		    	if(t){
		    		clearTimeout(t);
		    	}
			    animate(bb[i],{left:0},500,function(){
			    	bb[i].style.display="block";
			    });
		    }
	    }
	}

	//京东秒杀左右轮播
	Zlunbo1(".miaoshaxiaz",".miaoshaxiazbox",".miaoshaxiadwz",".miaoshaxiadwy",4000,500);
	function Zlunbo1(pic,bannerBox,zuokuohao,youkuohao,lubotime,luoboxiaotime){
    	const tu=$(pic);
    	// alert(1);
		const img=$(bannerBox)[0];
		const imgw=parseInt(window.getComputedStyle(img,null).width);
		const leftBen=$(zuokuohao)[0];
		// console.log(leftBen);
		const rightBen=$(youkuohao)[0];
		// const lis=$(lunbodian);
		for(let i=0;i<tu.length;i++){
			tu[i].style.left=imgw+"px";
			// lis[0].style.background=liscolor;
		}
		tu[0].style.left=0;
		// lis[0].style.background=lisactivebgColor;
		var t=setInterval(move,lubotime);
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
				// animate(tu[next]{left:0},)
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

	//排行版选项卡
	xuanxiangka2(".paihangzhongyi",".paihangxia",".paihangzhongyixiahua",[20,91,166,239,316]);
	//banner右上选项卡
	xuanxiangka2(".banneryouer .zhong .yi .zhongyia",".bnanneryouerzhonger",".banneryouerxian",[-1,50]);
	function xuanxiangka2(btn,con,ee,son){
		const aa=$(btn);
	    const bb=$(con);
	    const cc=$(ee)[0];
	    const dd=son;
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
			    for(let j=0;j<bb.length;j++){
				    bb[j].style.display="none";
				    // cc.style.left=dd[i];
			    }
				animate(cc,{left:dd[i]},150);
			    bb[i].style.display="block";
		    }
		    // aa[i].onmouseout=function(){
			   //  bb[i].style.display="none";
		    // }
	    }
	}
	
	//banner右下选项卡
	//btn:4张图片
	//con:鼠标移入4张图片后的最大选项卡，只有一个
	//xian:图片移入后话费、酒店等上的红线
	//zi:图片移入后话费、酒店等的红字
	//dianji:关闭最大选项卡的X号
	//gg:图片移入后话费、酒店等的box,里有xian和zi
	//hh:图片移入后话费、酒店等对应的选项卡
	//ii:话费对应的按钮
	xuanxiangka3(".annou",".banneryouxiaxia",".banneryouxiaxxksyixian",".banneryouxiaxxksyizi",".banneryouxiaxxkclose",".banneryouxiaxxksyi",".banneryouxiaxxkxyi",".banneryouxiaxxkxeryiyi");
	function xuanxiangka3(btn,con,xian,zi,dianji,gg,hh,ii){
		const aa=$(btn);
	    const bb=$(con)[0];
		const dd=$(xian);
		const ee=$(zi);
		const ff=$(dianji)[0];
		const xianys=$(gg);
		const huafeiyi=$(hh);
		const huafeixuanze=$(ii);
		// const huafeiyiyi=$(ii);
		// console.log(huafeiyi);
		for(let i=0;i<aa.length;i++){
			//鼠标移入图片图片消失，具体的话费、机票等上来
		    aa[i].onmouseover=function(){
			    for(let j=0;j<aa.length;j++){
				    dd[j].style.display="none";
					ee[j].style.color="#666666";
				}
				animate(bb,{height:0},100);
				dd[i].style.display="block";
				ee[i].style.color="#e01121";
		    }
		    //点击X号回到初始状态
		    ff.onclick=function(){
		    	animate(bb,{height:200},100);
		    }
		    for(let i=0;i<xianys.length;i++){
		    	//话费、机票、酒店、游戏的鼠标移入事件
		    	xianys[i].onmouseover=function(){
		    		for(let j=0;j<aa.length;j++){
					    dd[j].style.display="none";
						ee[j].style.color="#666666";
						huafeiyi[j].style.display="none";
					}
					dd[i].style.display="block";
					ee[i].style.color="#e01121";
					huafeiyi[i].style.display="block";
		    	}
		    }
		    //话费里话费充值、流量充值、套餐变更的鼠标移入事件
		    // for(let i=0;i<huafeixuanze.length;i++){
		    // 	huafeixuanze[i].onmouseover=function(){
		    // 		for(let j=0;j<huafeixuanze.length;j++){
		    // 			huafeixuanze[i].style.backgroundColor="#fff";
		    // 			huafeixuanze[i].style.color="#666666";
		    // 		}
		    // 		huafeixuanze[i].style.background="#e01222";
		    // 		huafeixuanze[i].style.color="#fff";
		    // 	}
		    // }
		    // console.log(huafeixuanze);
		    
	    }
	}



	//享品质透明轮播
	Tlunbo(".pinzhiyoushangyi",".pinzhiyoushang",".pinzhilbdyi",[],1,"#fd3131",2000,0,"#fff",".pinzhiyoushangleft",".pinzhiyoushangright")
	


 
  const dhh=$(".miaochatukyouer:nth-child(2)")[0];
  const dm=$(".miaochatukyouer:nth-child(4)")[0];
  const ds=$(".miaochatukyouer:nth-child(6)")[0];
  // const dd=$(".miaochatukyouer:nth-child(8)")[0];
  // let nowtime=new time(nowh,nowm,nows);
	 class time{
        constructor(h,m,s){
          this.h=h;
          this.m=m;
          this.s=s;
          // console.log(this);    //this指time   ,this是对象
        }
        play(){   //相当于开关
          this.getTimes();
          // console.log(this.getTimes());
          this.writes(this.getTimes());
          this.update();
        }
        getTimes(){
          let nowT=new Date();   //不传参，获取到的是当前时间
          let h=nowT.getHours();
          // console.log(Nh);
          let m=nowT.getMinutes();
          let s=nowT.getSeconds();
          let map=new Map();
          map.set("h",h);
          map.set("m",m);
          map.set("s",s);
          
          // console.log(map);
          return map;   //将map赋给getTimes
        }
        writes(map){     //将获取到的时间写入页面中
          // this.h.innerHTML=map.get("h");
          // this.m.innerHTML=map.get("m");
          // this.s.innerHTML=map.get("s");
        }
        update(){    //时间更新
          let that=this;     
          setInterval(function(){    //因为this指window
            that.writes(that.getTimes());
            // console.log(that);     //that指time
          },1000)
        }
      }

      // var nowtime=new time(nowh,nowm,nows);   //将获取到的传进来
      // nowtime.play();
      // console.log(nowtime);




    class daojishi extends time{
      constructor(h,m,s,dt){
        super(h,m,s);
        // this.d=d;
        this.dt=dt;
        this.fwrites=super.writes;
        // this.dqdt=dqdt;
      }
      play(){
        // console.log();
        let map=this.getChaTime();
        this.writes(map);
        this.fwrites(map);
        this.update();
      }
      getChaTime(){
        let now=new Date();    //先获取当前的时间
        let chatime=this.dt.getTime()-now.getTime();  //转化为毫秒，用传入的距离1970年1月1日毫秒减去当前的距离1970年1月1日的毫秒，就是两个时间的差值
        chatime=chatime/1000+1;    //转换为秒
        // let d=parseInt(chatime/60/60/24);   
        let h=parseInt(chatime/60/60%24);    //天数取余就是小时
        let m=parseInt(chatime/60%60);      //小时取余就是分钟数
        let s=parseInt(chatime%60);        //分钟数取余就是秒
        let map = new Map();
        // map.set("d",d);
        map.set("h",h);
        map.set("m",m);
        map.set("s",s);
        return map;
      }
      writes(map){
      	this.h.innerHTML=map.get("h");
        this.m.innerHTML=map.get("m");
        this.s.innerHTML=map.get("s");
        // this.d.innerHTML=map.get("d");
        // super.writes(map);
      }
      update(){
        let that=this;
        setInterval(function(){
          let map=that.getChaTime();
        
          that.writes(map);
          that.fwrites(map);
        },1000)
      }

    }
  let nowtime=new Date();
  let lingdian=new Date(2017,6,14,0,0,0);
  // console.log(lingdian);
  let lingdiandjs=new daojishi(dhh,dm,ds,lingdian);
  lingdiandjs.play();	



  

	//图一、二、三的遮罩
	xuanxiangkazhezhao(".tuyia",".tuyiazhezhao")
	function xuanxiangkazhezhao(btn,con){
		const aa=$(btn);
	    const bb=$(con);
		for(let i=0;i<aa.length;i++){
		    aa[i].onmouseover=function(){
			    animate(bb[i],{opacity:0.2},150);
		    }
		    aa[i].onmouseout=function(){
			    animate(bb[i],{opacity:0},150);
		    }
	    }
	}






	        
})      