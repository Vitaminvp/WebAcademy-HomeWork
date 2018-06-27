import '../styles/lighter.scss'

export function lighter() {

    const lighter = document.querySelector(".lighter");
    const lights = lighter.querySelectorAll(".lighter__light");
    const ACTIVE = "lighter__light_active";
    const lightsArray = Array.from(lights);
    const btn = lighter.querySelector(".btn");
    const myswitch = lighter.querySelector(".switch");
    const myinput = myswitch.querySelector("#switch-1");
    // console.log(myinput);
    let index=0;
    let previndex=0;
    //let isDisabled = lighter.classList.contains("disabled");
    let isDisabled = myinput.checked;
    // console.log(isDisabled);
    let timer;

    lightsArray.forEach(function (item, i, lightsArray) {
        item.addEventListener("click", function () {
            if(!isDisabled){
                turnOn(i);
            }
        });
    });

    lighter.addEventListener("mouseenter", ()=>{
        stopInterval();
    });
    lighter.addEventListener("mouseleave", ()=>{
        startInterval();
    });
    myinput.addEventListener("click", function () {
        isDisabled = myinput.checked;
        if (isDisabled){
            lighter.classList.remove("disabled");
            isDisabled = false;
            startInterval();

        }else {
            isDisabled = true;
            lighter.classList.add("disabled");
            index = 0;
            stopInterval();
            turnOff();
        }
    })
     function turnOn(i) {
         if (!isDisabled){
             if(index !== undefined){
                 if(lightsArray[i].classList.contains(ACTIVE)){
                     lightsArray[i].classList.remove(ACTIVE);
                 }else{
                     turnOff();
                     lightsArray[i].classList.add(ACTIVE);
                 }
             }else{
                 lightsArray[i].classList.add(ACTIVE);
             }
             index = i;
             previndex = i;
         }
     }
     function turnOff() {
        if (previndex !== undefined) lightsArray[previndex].classList.remove(ACTIVE);
         previndex = 0;
     }


function startInterval() {
    clearInterval(timer);
    timer = setInterval(function () {
        if (!isDisabled){
            if (index < lights.length){
                turnOff();
                turnOn(index);
                index++;
            }else{
                index = 0;
                turnOff();
                turnOn(index);
                index++;
            }
        }
    }, 1000);
}

function stopInterval() {
    clearInterval(timer);
}
}
