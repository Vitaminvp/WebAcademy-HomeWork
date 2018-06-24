import '../styles/accordion.scss'

export function accordion() {
    let index = 0;
    const accordion  = document.querySelector(".accordion");
    let accordItrms = Array.from(accordion.querySelectorAll(".accordion__item_title"));
    for(let i = 0; i < accordItrms.length; i++){

        accordItrms[i].addEventListener("click", function (e) {
            // console.log("i= ",i);
            // console.log("index = ",index);
            if( this.parentNode.classList.contains("active")){
                this.parentNode.classList.remove("active");
            }else{
                if( index !=  i){
                    this.parentNode.classList.add("active");
                    accordItrms[index].parentNode.classList.remove("active");
                }else{
                    this.parentNode.classList.add("active");
                }
            }
            index = i;
        });



    }
}
accordion();