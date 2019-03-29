$(function(){
	var key=0;
	$("a").click(function(){
		key++;
		if(key%2==0){
			$(this).children(".glyphicon-plus").css({
			"transform": "rotate(0deg)",
			"transition": "0.5s",
		})
		}else{
			$(this).children(".glyphicon-plus").css({
			"transform": "rotate(45deg)",
			"transition": "0.5s",
		})
		}
		
		
		
		
		
		
	})
})
