function show(){
    $(".cards").each(function(index) {
        
        var ths = $(this);
        if( ((ths.offset().top + ths.height()) <= ($(window).scrollTop()+$(window).height() + 500)) ){
            setInterval(function() {
              ths.removeClass("card-off").addClass("card-on");
            }, 300*index);
        }
    });
}    
$(function() {show()});
$(window).on("scroll", function() {show()});
