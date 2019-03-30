$(function(){
	$(".form-control").focus(function(){
		$(this).next().css("display","block");
	})
	$(".form-control").blur(function(){
		$(this).next().css("display","none");
	})
})
