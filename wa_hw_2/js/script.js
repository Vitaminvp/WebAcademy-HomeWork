$(function(){
   
	$('.button').click(function(e){
		e.preventDefault();
		$('.mymodal').fadeIn(200);
	});
	$('.mymodal, .times').click(function(e){
		e.preventDefault();
		if ($(e.target).hasClass('mymodal') || $(e.target).hasClass('times')){
				$('.mymodal').fadeOut(200);
		}
		e.stopPropagation();
	});
});