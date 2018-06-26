import '../styles/accordion.scss'

export function accordion(element, array) {
    const AC_CONTENT = "accordion__item_content";
    const AC_TITLE = "accordion__item_title";
    const AC_ITEM = "accordion__item";
    const AC_I = "fas fa-chevron-down";
    array.forEach((item, i, arr)=>{
        const div_item = document.createElement("div");
        div_item.className = AC_ITEM;
        const div_title = document.createElement("div");
        div_title.className = AC_TITLE;
        const div_title_select = document.createElement("span");
        div_title_select.textContent = arr[i].title;
        const div_title_i = document.createElement("i");
        div_title_i.className = AC_I;
        div_title.appendChild(div_title_select);
        div_title.appendChild(div_title_i);
        const div_content = document.createElement("div");
        div_content.className = AC_CONTENT;
        const div_content_p = document.createElement("p");
        div_content_p.textContent = arr[i].content;
        div_content.appendChild(div_content_p);
        div_item.appendChild(div_title);
        div_item.appendChild(div_content);
        element.appendChild(div_item);
    });

    let index = 0;
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
