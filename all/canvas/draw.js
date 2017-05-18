/**
 * Created by Administrator on 2017/5/6.
 */
class Draw{
    constructor(cobj,option){
        this.cobj=cobj;
        this.color=option.color;
        this.width=option.width;
        this.style=option.style;
    }
    init(){
        this.cobj.strokeStyle=this.color;
        this.cobj.fillStyle=this.color;
        this.cobj.lineWidth=this.width;
    }
    rect(ox,oy,mx,my){
        this.init();
        // this.cobj.strokeRect(ox,oy,mx-ox,my-oy);
        this.cobj.beginPath();
        this.cobj.rect(ox,oy,mx-ox,my-oy);
        this.cobj[this.style]();
    }
    line(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        this.cobj.moveTo(ox,oy);
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
    }
    //内切圆
    circleout(ox,oy,mx,my){
        this.init();
        this.cobj.save();
        this.cobj.translate(ox,oy);//移动坐标系
        this.cobj.beginPath();
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2;
        this.cobj.arc((mx)/2,oy+((my)/2),r,0,2*Math.PI);
        this.cobj.restore();
        this.cobj[this.style]();


    }
    //外接圆
    circlein(ox,oy,mx,my){
        this.init();
        this.cobj.save();
        this.cobj.translate(ox,oy);//移动坐标系
        this.cobj.beginPath();
        var r=Math.abs(mx-ox)>Math.abs(my-oy)?Math.abs(my-oy)/2:Math.abs(mx-ox)/2;
        this.cobj.arc((mx>ox?r:-r),(my>oy?r:-r),r,0,2*Math.PI);
        this.cobj.restore();
        this.cobj[this.style]();
    }
    circlecen(ox,oy,mx,my){
        this.init();
        this.cobj.beginPath();
        var r=Math.abs(mx-ox)>Math.abs(my-oy)?Math.abs(my-oy)/2:Math.abs(mx-ox);
        this.cobj.arc(ox,oy,r,0,2*Math.PI);
        this.cobj[this.style]();
    }
    poly(ox,oy,mx,my,si){
        this.init();
        this.cobj.save();
        this.cobj.translate(ox,oy);
        this.cobj.rotate(Math.PI/2);
        var angle=Math.PI/si;//判断画多边形需要旋转的角度
        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
        var x=Math.cos(angle)*r;//半径垂直于x轴的长度
        var y=Math.sin(angle)*r;//半径垂直于y轴的长度(y轴是向下的)
        this.cobj.beginPath();//开始画图
        this.cobj.moveTo(x,y);//移动到某个位置
        for(var i=0;i<si;i++){
            this.cobj.lineTo(x,-y);//移动到某个位置
            this.cobj.rotate(-angle*2);//旋转多少度
        }
        this.cobj[this.style]();//描边或填充
        this.cobj.restore();//清除保存的样式
    }
    pen(ox,oy,mx,my,si){
        this.init();
        this.cobj.lineTo(mx,my);
        this.cobj.stroke();
        // this.stroke();
    }
    eraser(ox,oy,mx,my){
        this.cobj.clearRect(mx,my,10,10);

    }

}































