$(function(){

   function progress() {
    bar = document.getElementById('bar');
    bar.value += 1; // Увеличиваем значение на 2
    if (bar.value < 100) {
      var timer = setTimeout(progress, 500); // Вызываем функцию каждые 0.5 сек.
    }
   }

    progress();
});