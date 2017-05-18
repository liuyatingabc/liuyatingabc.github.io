$(function(){
	const aa=$(".xuanzbiaoti");
	const bb=$(".xuanzeyiul");
	const cc=$(".jiahao");
	for(let i=0;i<aa.length;i++){
		let num=0;
		aa[i].onclick=function(){
			if(num%2==0){
				cc[i].style.transform="rotate(45deg)";
				bb[i].style.display="block";
				num++;
			}else if(num%2==1){
				cc[i].style.transform="rotate(0deg)";
				bb[i].style.display="none";
				num++;
			}
			
		}  
	} 

	$(".navhover").hover(function(){
		$(this).css({opacity:0.8});
	},function(){
		$(this).css({opacity:1});
	})

	//购物车界面的出现、消失
	var flag=true;
	$(".navlipo").click(function(){
		if(flag){
			$("nav ul li #shoppingCart").css("display","block");
		}
		else{
			$("nav ul li #shoppingCart").css("display","none");
		}
		flag=!flag;
	})

	//购物车界面小方格的出现、消失
	var flags=true;
	$(".navlipo").click(function(){
		if(flags){
			$("nav ul li .xiaofg").css("display","block");
		}
		else{
			$("nav ul li .xiaofg").css("display","none");
		}
		flags=!flags;
	})

	//菜单界面的产生
	$(".menu").click(function(){
		$(".menupo").slideDown();
	})

	//菜单界面的消失
	$(".menuponaver").click(function(){
		$(".menupo").slideUp();
	})

})      