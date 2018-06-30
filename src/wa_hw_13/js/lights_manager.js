import {Lights} from "./lights";

export class LightsManager{
    constructor(target){
        this.target =  target;
        this.lamps = [];
        this.renderAddBtn();
        this.renderRemoveBtn();
        this.renderToggleBtn();
        this.onOff = 0;
    }
    renderAddBtn(){
        this.btn = document.createElement('button');
        this.btn.className = 'all bulb';
        this.btn.textContent = 'add';
        this.target.appendChild(this.btn);
        this.btn.addEventListener('click', ()=>{
            this.addLamp();
        });
    }
    renderRemoveBtn(){
        this.btn = document.createElement('button');
        this.btn.className = 'all bulb';
        this.btn.textContent = 'remove';
        this.target.appendChild(this.btn);
        this.btn.addEventListener('click', ()=>{
            this.removeLamp();
        });
    }
    renderToggleBtn(){
        this.btn = document.createElement('button');
        this.btn.className = 'all bulb';
        this.btn.textContent = 'toggle';
        this.target.appendChild(this.btn);
        this.btn.addEventListener('click', ()=>{
            if(this.lamps.length){
                console.log(this.lamps);
                this.onOff = false;
                this.toggleLamps();
            }
        });
    }
    addLamp(){
        let lampItem = new Lights(this.target);
        this.lamps.push(lampItem);
        console.log(lampItem);
    }
    removeLamp(){
        let lampItem = this.lamps.pop();
        let temp =this.target.lastChild;
        this.target.removeChild(temp);
        console.log(this.lamps);
    }
    toggleLamps(){
        this.lamps.forEach((item)=>{
            this.onOff = item.isOn || this.onOff;
        });
        console.log(this.onOff);
        if(this.onOff){
            this.lamps.forEach((item)=>{
                item.off();
            });
        } else {
            this.lamps.forEach((item)=>{
                item.on();
            });
        }

    }
}