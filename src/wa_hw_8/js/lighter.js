import '../styles/lighter.scss'

export function lighter() {
    const lighter = document.querySelector(".lighter");
    const lights = lighter.querySelectorAll(".lighter__light");
    const ACTIVE = "lighter__light_active";
    const lightsArray = Array.from(lights);
    const btn = lighter.querySelector(".btn");
    let index;
    let isDisabled = lighter.classList.contains("disabled");
    let timer;
    lightsArray.forEach(function (item, i, lightsArray) {
        item.addEventListener("click", function () {
            turnOn(item, i);
        });
    });
    btn.addEventListener("click", function () {
        if (lighter.classList.contains("disabled")){
            lighter.classList.remove("disabled");
            isDisabled = false;
        }else {
            isDisabled = true;
            lighter.classList.add("disabled");
            turnOff();
        }
    })
     function turnOn(item, i) {
         if (!isDisabled){
             if(index !== undefined){
                 if(item.classList.contains(ACTIVE)){
                     item.classList.remove(ACTIVE);
                 }else{
                     turnOff();
                     item.classList.add(ACTIVE);
                 }
             }else{
                 item.classList.add(ACTIVE);
             }
             index = i;
         }
     }
     function turnOff() {
        if (index !== undefined) lightsArray[index].classList.remove(ACTIVE);
     }



     timer = setInterval(function () {
         if (index++ < lights.length){
             turnOn(lights[index], index);
             turnOff();
         }else{
             index = 0;
             turnOn(lights[index], index);
             turnOff();
             index++;
         }

     }, 1500);
}
lighter();