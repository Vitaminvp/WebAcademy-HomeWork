$(function(){

    var timer;
    $(".icon-Rounded-Rectangle-8").click(function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            clearInterval(timer);
        }else{
            $(this).addClass("active");
            var bar = $('#bar');
            progress();
        }
    });
    
    
    function progress() {
        bar.value += 1; // Увеличиваем значение на 1
            if (bar.value < 100) {
                timer = setTimeout(progress, 50); // Вызываем функцию каждые 0.5 сек.
            }else{
               $(".icon-Rounded-Rectangle-8").removeClass("active"); 
                bar.value = 0;
            } 
         }
    
});
