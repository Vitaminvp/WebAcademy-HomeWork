import '../styles/lights.scss';
import {LightsManager} from "./lights_manager";

const ITEM_CLASS = "wrap";

export class Lights {
    constructor(targetLight, arr){
        this.targetLight = targetLight;
        this.render();
        this.isOn = false;
        this.arrItems = arr;
    }
    render(){
        this.wrapp = document.createElement('div');
        this.wrapp.className = ITEM_CLASS;
        this.i = document.createElement('i');
        this.i.className ='far fa-lightbulb';
        this.btn = document.createElement('button');
        this.btn.classList.add('bulb');
        this.btn.textContent = 'on/off';
        this.close = document.createElement('div');
        this.close.className = 'close';
        this.close.innerHTML = '&times';
        this.wrapp.appendChild(this.i);
        this.wrapp.appendChild(this.btn);
        this.wrapp.appendChild(this.close);
        this.targetLight.appendChild(this.wrapp);
        this.close.addEventListener('click', ()=>{
            this.removeItem();
        });
        this.btn.addEventListener('click', ()=>{
            this.wrapp.classList.toggle('active');
            this.isOn = !this.isOn;
        });
    }
    on()  {
        if(!this.wrapp.classList.contains('active'))  this.wrapp.classList.add('active');
        this.isOn = true;
    }
    off() {
        if(this.wrapp.classList.contains('active')) this.wrapp.classList.remove('active');
        this.isOn = false;
    }
    removeItem(){
        if (this.arrItems){
            this.arrItems.forEach((item, i, array) =>{
                if(item.wrapp == this.wrapp){
                    array.splice(i, 1);
                }
            });
        }
        this.wrapp.remove();
    }
}
