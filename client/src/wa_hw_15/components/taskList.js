import {Ajax} from "../utils/ajax";

export class TaskList{
    constructor (target) {
        this.target = target;
        this.render();
        Ajax.get('http://localhost:4001/list',);
}
    render(){
        this.ul = document.createElement('ul');
        this.btn = document.createElement('button');
        this.btn.innerHTML = "GET DATA";
        this.btn.className = "btn"
        this.target.appendChild(this.btn);
        this.output = document.createElement('div');
        this.output.className = "output";
        this.output.style.display = "flex";
        this.output.appendChild(this.ul);
        this.btn.addEventListener('click', ()=> {
            this.target.appendChild(this.output);
            this.ul.innerHTML = '<img src="https://vitaminvp.github.io/WA/client/assets/images/ajax-loader.gif">';
            Ajax.get('http://localhost:4001/list', this.renderItems.bind(this));
        });

    }
    renderItems(ajaxRespons){
        console.log(ajaxRespons);
        this.output.innerHTML = "";
        this.Respons = Array.from(ajaxRespons);
        const docFragment  = document.createDocumentFragment();
        this.Respons.forEach( (item) => {
            let ul = document.createElement('ul');
            for (let key in item){
                let li = document.createElement('li');
                li.innerHTML = key+': '+item[key];
                ul.appendChild(li);
            }
            docFragment.appendChild(ul)
        });
        this.output.appendChild(docFragment);
    }
}