window.onload = function () {
    var items = document.querySelectorAll(".grid__item");
    console.log(items);
    for (let i = 0; i < items.length; i++){
        items[i].addEventListener("click", function () {
            this.classList.toggle("hidden");
        },false);
    }
};