import '../styles/accordion.scss'

export function accordion(element) {
    let index = 0;
    // const accordion  = document.querySelector(".accordion");
    const accordItrms = Array.from(element.querySelectorAll(".accordion__item_title"));
    for(let i = 0; i < accordItrms.length; i++){

        accordItrms[i].addEventListener("click", function (e) {
            if( this.parentNode.classList.contains("active")){
                this.parentNode.classList.remove("active");
            }else{
                if( index !==  i){
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
