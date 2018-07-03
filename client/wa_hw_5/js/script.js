$(function(){
    	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".menu_list").slideToggle();
		return false;
	});
});