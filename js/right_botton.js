$(function(){
var	key=0;
	$("#filee").click(function(){
		key++;
		if(key%2==0){
			$(".right-file-button,.triangle").css("display","block");
		}
		else{
			$(".right-file-button,.triangle").css("display","none");
		}
	})
	$("#filee").blur(function(){
		$(".right-file-button,.triangle").css("display","none");
	})
	/*轮动图*/
	$(".olright").click(function(){
		$(".olleft").css("display","block");
		$(".conner>ul").animate({left:"-200px"});
		$(this).css("display","none");
	})
	$(".olleft").click(function(){
		$(".conner>ul").animate({left:"0"});
		$(this).css("display","none");
		$(".olright").css("display","block");
	})
	/*折叠面板部分*/
	$(".switch").click(function(){
		$(this).next().slideToggle();
		key++;
		if(key%2==0){
			$(this).find("span").css({
			"transform": "rotate(0deg)",
			"transition": "0.5s",
		  })
		}
		else{
			$(this).find("span").css({
			"transform": "rotate(45deg)",
			"transition": "0.5s",
		  })
		}
		
		
	})
	/*第二张开始*/

	 $(window).scroll(function () {
var a= Math.ceil($(window).scrollTop());
//console.log(a);
     if(a<50){
    $(".border_bottom").removeClass("navbar-fixed-top");
    $(".arrowdown").css("display","none");
    /*右边的大图片定位*/
//  $(".Logoleft").css({"position":"fixed","z-index":"-20"});
  
     }else{
     	 $(".border_bottom").addClass("navbar-fixed-top");
     	 $(".arrowdown").css("display","block");
     }
     if(a<900){
     	   $(".Logoleft").css({"position":"fixed","z-index":"-20"});
     }
     else{
     	 $(".Logoleft").css({"position":"absolute","z-index":"-20","bottom":"-70px"});
     }
    
  })
	 $(".arrowdown").click(function(){
	 	$(".arrange").slideToggle();
	 })
   $(".choose_ip>span").click(function(){
   	  $(".popUpBox").slideToggle();
   })
$(".expect>a>span").mouseenter(function(){
	$(".expect>ul").css("display","block");
	$("#triangleDown").css("display","block");
})
$(".expect>a>span").mouseleave(function(){
	$(".expect>ul").css("display","none");
	$("#triangleDown").css("display","none");
})

})


