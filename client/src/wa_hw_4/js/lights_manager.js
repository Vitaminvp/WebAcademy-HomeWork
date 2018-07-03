import {Lights} from "./lights";

export class LightsManager{
    constructor(target){
        this.target =  target;
        this.lamps = [];
        this.render();
        this.onOff = 0;
        this.lampsAreOn = [];
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
        let lampItem = new Lights(this.target, (content, close) => {
            this.onLampClick(content, close);
        });
        this.lamps.push(lampItem);
    }
    onLampClick(lamp, del){
        let indexOfLampOn = this.lampsAreOn.indexOf(lamp);
        let indexOfLamp = this.lamps.indexOf(lamp);
        if (del){
            if(lamp.isOn){
                this.lampsAreOn.splice(indexOfLampOn, 1);
            }
            this.lamps.splice(indexOfLamp, 1);
        } else {
            if(lamp.isOn){
                this.lampsAreOn.push(lamp);
            } else {
                this.lampsAreOn.splice(indexOfLampOn, 1);
            }
        }
    }
    removeLamp(){
        if(this.lamps.length > 0){
            let lampItem = this.lamps.pop();
            let temp =this.target.lastChild;
            this.target.removeChild(temp);
            let indexOfLamp = this.lampsAreOn.indexOf(lampItem);
            this.lampsAreOn.splice(indexOfLamp, 1);
        }
    }
    toggleLamps(){
        if(this.lampsAreOn.length){
            this.lampsAreOn.forEach((item) => {
                item.off();
            });
            this.lampsAreOn = [];
        } else {
            this.lamps.forEach((item) => {
                item.on();
            });
            this.lampsAreOn = Array.from(this.lamps);
        }
    }
}