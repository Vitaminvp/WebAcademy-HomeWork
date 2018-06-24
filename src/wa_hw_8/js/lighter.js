import '../styles/lighter.scss'

export function lighter() {
    const lighter = document.querySelector(".lighter");
    const lights = lighter.querySelectorAll(".lighter__light");
    const ACTIVE = "lighter__light_active";
    const lightsArray = Array.from(lights);
    let index = 0;
    lightsArray.forEach(function (item, i, lightsArray) {
        item.addEventListener("click", function () {
            turnOn(item, i);
        });
    })
     function turnOn(item, i) {

         console.log(item.className);
         if(item.classList.contains(ACTIVE)){
             turnOff();
         }else{
             item.classList.add(ACTIVE);
         }
         index = i;
     }
     function turnOff() {
         lightsArray[index].classList.remove(ACTIVE);
     }
}
lighter();