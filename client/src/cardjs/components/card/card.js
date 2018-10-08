import { Ajax } from '../../utils/ajax';
import { appConfig } from '../../config.js';
import './card.scss';


const generateId = () => {
    return '_'+Math.random().toString(36).substr(2, 9);
};

export class Card{
    constructor (target, callback, getterCount, getterId) {
        this.target = target;
        this.callback = callback;
        this.getterCount = getterCount;
        this.getterId = getterId;
        this.render();
        this.id = "";
    }
    render(){
        Ajax.get(`${appConfig.apiUrl}api/v1/pictures`, this.renderItems.bind(this));
    }

   renderItems(ajaxRespons){
        this.Respons = Array.from(ajaxRespons);
        let div = document.createElement('div');
        div.id = generateId();
        let imgsrc = Math.floor(Math.random() * (this.Respons.length));
        div.addEventListener('click', () => {
            let getId  = this.getterId();
            if(this.id !== div.id){
            if(this.getterCount() < appConfig.magicNumber){
                const item = div;
                if(item.classList.contains('on')){
                    item.classList.remove('on');
                } else {
                    item.classList.add('on');
                    this.callback(true, imgsrc, div.id);
                    setTimeout(()=>{
                        item.classList.remove('on');
                    this.callback(false);
                    this.id = "";
                }, 1500);
                }
                this.id = div.id;
            }
        }
        });
        let url = appConfig.apiUrl + this.Respons[ imgsrc ];
        div.innerHTML = `<img src=${url} alt='alt'>`;
        this.target.appendChild(div);
    }
}