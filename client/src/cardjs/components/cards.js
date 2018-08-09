import { Ajax } from './../utils/ajax';
import { appConfig } from './../config.js';
import { Card } from "./card/card";

export class Cards{
    constructor (target) {
        this.target = target;
        this.render();
        this.count = 0;
        this.firstPicSrc = '';
        this.secondPicSrc = '';
        this.firstId = '';
        this.secondId = '';
    }
    countInc(bool, src, id ){
        if(bool){
            this.count++;
            if(this.firstPicSrc == src && this.firstId !== id){
                document.getElementById(id).classList.add('end');
                document.getElementById(this.firstId).classList.add('end');
                this.firstPicSrc = '';
                return false;
            }
            this.secondPicSrc = this.firstPicSrc;
            this.firstPicSrc = src;
            this.secondId = this.firstId;
            this.firstId = id;
        } else {
            this.count--;
        }
    }
    countGet(){
        return this.count;
    }
    idGet(){
        return this.secondId;
    }
    render(){
        this.loader = document.createElement('div');
        this.btn = document.createElement('button');
        this.btn.innerHTML = "GET DATA";
        this.btn.className = "btn";
        this.target.appendChild(this.btn);
        this.output = document.createElement('div');
        this.output.className = "output";
        this.output.style.display = "flex";
        this.btn.addEventListener('click', () => {
            this.output.innerHTML = "";
            this.output.appendChild(this.loader);
            this.loader.innerHTML = '<img src="https://vitaminvp.github.io/WA/client/assets/images/ajax-loader.gif">';
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
                new Card(div, this.countInc.bind(this), this.countGet.bind(this), this.idGet.bind(this));
            }
            docFragment.appendChild(div);
        }
        this.output.appendChild(docFragment);
    }
}