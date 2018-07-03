import '../styles/accordion.scss'

export function accordion(element, array) {
    const AC_NAME = element.className;
    const AC_CONTENT = `${AC_NAME}__item_content`;
    const AC_TITLE = `${AC_NAME}__item_title`;
    const AC_ITEM = `${AC_NAME}__item`;
    const AC_I = "fas fa-chevron-down";
    let index;
    array.forEach((item, i, arr)=> {
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
        div_title.addEventListener("click", switchElement);
    });

    function switchElement(e){
        if( this.parentNode.classList.contains("active")){
            this.parentNode.classList.remove("active");
        }else{
            if( index != undefined ){
                index.parentNode.classList.remove("active");
                this.parentNode.classList.add("active");
            }else{
                this.parentNode.classList.add("active");
            }
            index = this;
        }
    }
}
