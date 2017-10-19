$(function(){
	$(".suspend").hover(function(){
		$(this).stop().animate({"right":"0"},500);
	},function(){
		$(this).stop().animate({"right":"-90px"},500);
	});
	$(".Business img").hover(function(){
		$(".Business_text").show(200);
	},function(){
		$(".Business_text").css("display","none");
	})
	$(".select_value").click(function(){
		$(".select_ul").css("display","block")
	});
	$(".select_ul").hover(function(){
		$(this).css("display","block");
	},function(){
		$(this).css("display","none");
	})
	$(".Quick_Link_bottom").mouseover(function(){
		$(".Quick_Link_box").slideDown(100);
		$(".Quick_Link").addClass("GG");
		$(".Quick_Link").slideDown(100);
	})
	$(".Quick_Link_box").hover(function(){
		$(this).css("display","block");
	},function(){
		$(this).slideUp(100);
		$(".Quick_Link").removeClass("GG");
	});
	var t=0;
	var timer;
	time();
	function time(){
		timer=setInterval(function(){
			t++;
			if(t>5) t=0;
			$(".focus-pic li").eq(t).animate({"opacity":"1"},300)
			.siblings().animate({"opacity":"0"},300);
			$(".banner-xx li").eq(t).addClass("banner-xx-one").siblings().removeClass();
		},3500);
	}
	$(".banner-xx li").mouseover(function(){
		var n=$(this).index();
		$(".focus-pic li").eq(n).stop().animate({"opacity":"1"},300).siblings().animate({"opacity":"0"},300);
		$(this).addClass("banner-xx-one").siblings().removeClass();
		$(".banner-xx span").stop().animate({"height":"48px"},300);
	})
	$(".banner-xx").mouseout(function(){
		$(".banner-xx span").stop().animate({"height":"0px"},300);
	})
	var num=0;
	$(".left").click(function(){
		if (num<=0){
			num=0;
			$(".index_scroll_main ").stop().animate({"left":"0"},1000);
			$(this).find("a").css("background","url(images/btn_left.png) right");
			$(".right").find("a").css("background","url(images/icon_right.png) right");
		}
		else if(num=1){
			$(".index_scroll_main ").stop().animate({"left":"-970px"},1000);
			$(this).find("a").css("background","url(images/icon_left.png) right");
			$(".right").find("a").css("background","url(images/icon_right.png) right");
		}
		else if(num>=2){
			num=2;
			$(".index_scroll_main ").stop().animate({"left":"-1455px"},1000);
			$(this).find("a").css("background","url(images/icon_left.png) right");
			$(".right").find("a").css("background","url(images/btn_right.png) right");
		}
		num--;
	})
	$(".right").click(function(){
		
		if (num>=2){
			num=2;
			$(".index_scroll_main ").stop().animate({"left":"-1455px"},1000);
			$(this).find("a").css("background","url(images/btn_right.png) right");
			$(".left").find("a").css("background","url(images/icon_left.png) right");
		}
		else if(num=1){
			$(".index_scroll_main ").stop().animate({"left":"-970px"},1000);
			$(this).find("a").css("background","url(images/icon_right.png) right");
			$(".left").find("a").css("background","url(images/icon_left.png) right");
		}
		else if(num<=0){
			num=0;
			$(".index_scroll_main ").stop().animate({"left":"0px"},1000);
			$(this).find("a").css("background","url(images/icon_right.png) right");
			$(".left").find("a").css("background","url(images/btn_left.png) right");
		}
		num++;
	})
	$(".vcc-index_tab_main ul li").mouseover(function(){
		var a=$(this).index();
		$(".vcc-index_tab_main_div_div").eq(a).css("display","block").siblings().css("display","none");
		$(".index_x_banner").eq(a).css("display","block").siblings().css("display","none");
		$(this).addClass("se").siblings().removeClass("se");
	})
	var numb=0;
	$(".button_right").click(function(){
		if(numb>=2){
			numb=2;
			$(".difference_detail ul").stop().animate({"left":"-940px"},1000);
			$(this).css("background","url(images/arrow.png) -66px 0 no-repeat");
			$(".button_left").css("background","url(images/arrow.png) 0 0 no-repeat");
		}
		else if(numb=1){
			$(".difference_detail ul").stop().animate({"left":"-470px"},1000);
			$(this).css("background","url(images/arrow.png) -22px 0 no-repeat");
			$(".button_left").css("background","url(images/arrow.png) 0 0 no-repeat");
		}
		else if(numb<=0){
			numb=0;
			$(".difference_detail ul").stop().animate({"left":"0"},1000);
			$(this).css("background","url(images/arrow.png) -22px 0 no-repeat");
			$(".button_left").css("background","url(images/arrow.png) -42px 0 no-repeat");
		}
		numb++;
	})
	$(".button_left").click(function(){
		if(numb<=0){
			numb=0;
			$(".difference_detail ul").stop().animate({"left":"0"},1000);
			$(".button_right").css("background","url(images/arrow.png) -22px 0 no-repeat");
			$(this).css("background","url(images/arrow.png) -42px 0 no-repeat");
		}
		else if(numb=1){
			$(".difference_detail ul").stop().animate({"left":"-470px"},1000);
			$(".button_right").css("background","url(images/arrow.png) -22px 0 no-repeat");
			$(this).css("background","url(images/arrow.png) 0 0 no-repeat");
		}
		else if(numb>=2){
			numb=2;
			$(".difference_detail ul").stop().animate({"left":"-940px"},1000);
		}
		numb--;
	})
	$(window).scroll(function(){
		var pp=parseInt($(window).scrollTop()/140);
		if (pp>1){
			$(".slde").stop().slideDown(600);
			$(".header_box_shadow").css("display","block");
		}
		else{
			$(".slde").stop().slideUp(500);
			$(".header_box_shadow").css("display","none");
		}
	})
})
