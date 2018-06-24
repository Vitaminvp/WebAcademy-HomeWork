import '../styles/lighter.scss'

export function lighter() {
    const lighter = document.querySelector(".lighter");
    const lights = lighter.querySelectorAll(".lighter__light");
    const ACTIVE = "lighter__light_active";
    const lightsArray = Array.from(lights);
    let index;
    lightsArray.forEach(function (item, i, lightsArray) {
        item.addEventListener("click", function () {
            turnOn(item, i);
        });
    })
     function turnOn(item, i) {
         console.log(item.className);
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
     function turnOff() {
        if (index !== undefined) lightsArray[index].classList.remove(ACTIVE);
     }
}
lighter();