import { Ajax } from './../utils/ajax';
import { appConfig } from './../config.js';
import { Card } from "./card/card";

export class Cards{
    constructor (target) {
        this.target = target;
        this.render();
        this.count = 0;
    }
    countInc(bool){
        if(bool){
            this.count++;
        } else {
            this.count--;
        }
        console.log("count", this.count);
    }
    countGet(){
        return this.count;
    }
    render(){
        this.ul = document.createElement('ul');
        this.btn = document.createElement('button');
        this.btn.innerHTML = "GET DATA";
        this.btn.className = "btn";
        this.target.appendChild(this.btn);
        this.output = document.createElement('div');
        this.output.className = "output";
        this.output.style.display = "flex";
        this.btn.addEventListener('click', () => {
            this.output.innerHTML = "";
            this.output.appendChild(this.ul);
            this.ul.innerHTML = '<img src="https://vitaminvp.github.io/WA/client/assets/images/ajax-loader.gif">';
            this.target.appendChild(this.output);
            Ajax.get(`${appConfig.apiUrl}api/v1/items`, this.renderItems.bind(this));
        });
    }
    renderItems(ajaxRespons){
        this.output.innerHTML = "";
        let {width, height} = ajaxRespons;
        console.log(width, height);
        const docFragment  = document.createDocumentFragment();
        for (let i=0; i < height; i++){
            let div = document.createElement('div');
            for (let j=0; j < width; j++){
                new Card(div, this.countInc.bind(this), this.countGet.bind(this));
            }
            docFragment.appendChild(div);
        }
        this.output.appendChild(docFragment);
    }
}