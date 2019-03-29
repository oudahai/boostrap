$(function(){
	$("#AppId>input,#word>input").focus(function(){
	$(this).prev().animate({top:"5px"});
	$(this).prev().css("font-size","14px");
	$(this).prev().css("color","#000");
	$(this).css("border-color","#000");
	$(this).css("background-color","#fff");
	})
	$("#AppId>input,#word>input").blur(function(){
	if($(this).val()==0){
	 	$(this).prev().animate({top:"15px"});
	$(this).prev().css("font-size","18px");
	$(this).prev().css("color","red");
	$(this).css("border-color","red");
	$(this).css("background-color","pink");
	 }else{
	 	$(this).prev().animate({top:"5px"});
	    $(this).prev().css("font-size","14px");
	 }
	})
})


