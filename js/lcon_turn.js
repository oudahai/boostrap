$(function(){
	var key=0;
	$(".glyphicon-plus").click(function(){
		
		key++;
		if(key%2==0){
			$(this).css({
			"transform": "rotate(0deg)",
			"transition": "0.5s",
		})
		}else{
				$(this).css({
			"transform": "rotate(45deg)",
			"transition": "0.5s",
		})
		}
		
		
		
		
		
		
	})
})
