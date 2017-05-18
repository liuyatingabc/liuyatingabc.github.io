$(function(){
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
          this.h.innerHTML=map.get("h");
          this.m.innerHTML=map.get("m");
          this.s.innerHTML=map.get("s");
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
      constructor(h,m,s,d,dt){
        super(h,m,s);
        this.d=d;
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
        let d=parseInt(chatime/60/60/24);   
        let h=parseInt(chatime/60/60%24);    //天数取余就是小时
        let m=parseInt(chatime/60%60);      //小时取余就是分钟数
        let s=parseInt(chatime%60);        //分钟数取余就是秒
        let map = new Map();
        map.set("d",d);
        map.set("h",h);
        map.set("m",m);
        map.set("s",s);
        return map;
      }
      writes(map){
        this.d.innerHTML=map.get("d");
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


 
  const dhh=$(".miaochatukyouer:nth-child(2)")[0];
  const dm=$(".miaochatukyouer:nth-child(4)")[0];
  const ds=$(".miaochatukyouer:nth-child(6)")[0];
  const dd=$(".miaochatukyouer:nth-child(8)")[0];
  // let nowtime=new time(nowh,nowm,nows);
  let nowtime=new Date();
  let lingdian=new Date(2017,3,12,24,00,00);
  // console.log(lingdian);
  let lingdiandjs=new daojishi(dhh,dm,ds,dd,lingdian);
  lingdiandjs.play();		


	})