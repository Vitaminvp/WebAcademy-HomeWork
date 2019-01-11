import {Lights} from "./lights";

export class LightsManager{
    constructor(target){
        this.target =  target;
        this.lamps = [];
        this.render();
        this.onOff = 0;
        this.inputCount = 0;
    }
    render(){
        this.btnwrapp = document.createElement('div');
        this.btnwrapp.className = 'btnwrapp';
        this.target.appendChild(this.btnwrapp);
        this.renderAddBtn();
        this.renderRemoveBtn();
        this.renderToggleBtn();
    }
    renderAddBtn(){
        this.btn = document.createElement('button');
        this.btn.className = 'all bulb';
        this.btn.textContent = 'add';
        this.btnwrapp.appendChild(this.btn);
        this.btn.addEventListener('click', ()=>{
            this.addLamp();
        });
    }
    renderRemoveBtn(){
        this.btn = document.createElement('button');
        this.btn.className = 'all bulb';
        this.btn.textContent = 'remove';
        this.btnwrapp.appendChild(this.btn);
        this.btn.addEventListener('click', ()=>{
            this.removeLamp();
        });
    }
    renderToggleBtn(){
        this.btn = document.createElement('button');
        this.btn.className = 'all bulb';
        this.btn.textContent = 'toggle';
        this.btnwrapp.appendChild(this.btn);
        this.btn.addEventListener('click', ()=>{
            if(this.lamps.length){
                this.onOff = false;
                this.toggleLamps();
            }
        });
    }
    addLamp(){
        this.inputCount++;
        let lampItem = new Lights(this.target, this.lamps, this.inputCount);
        this.lamps.push(lampItem);
    }
    removeLamp(){
        if(this.lamps.length > 0){
            // let lampItem = this.lamps.pop();
            let temp =this.target.lastChild;
            this.target.removeChild(temp);
        }
    }
    toggleLamps(){
        this.lamps.forEach((item)=>{
            this.onOff = item.isOn || this.onOff;
        });
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