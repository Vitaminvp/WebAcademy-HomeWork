import '../styles/lights.scss';

const ITEM_CLASS = "wrap";

export class Lights {
    constructor(targetLight, addHandlerFunc){
        this.targetLight = targetLight;
        this.isOn = false;
        this.addHandlerFunc = addHandlerFunc;
        this.render();
    }
    render(){
        this.wrapp = document.createElement('div');
        this.wrapp.className = ITEM_CLASS;
        this.i = document.createElement('i');
        this.i.className ='far fa-lightbulb';
        this.wrapp.appendChild(this.i);
        this.close = document.createElement('div');
        this.close.className = 'close';
        this.close.innerHTML = '&times';
        this.wrapp.appendChild(this.close);
        this.close.addEventListener('click', () => {
            this.addHandlerFunc(this, true);
            this.removeItem();
        });
        this.targetLight.appendChild(this.wrapp);
        this.renderBtn();
    }
    renderBtn(){
        this.btn = document.createElement('button');
        this.btn.classList.add('bulb');
        this.btn.textContent = 'on/off';
        this.wrapp.appendChild(this.btn);
        this.btn.addEventListener('click', () => {
            if(this.isOn){
                this.off();
            } else {
                this.on();
            }
            this.addHandlerFunc(this, false);
        });
    }
    on()  {
        this.wrapp.classList.add('active');
        this.isOn = true;
    }
    off() {
        this.wrapp.classList.remove('active');
        this.isOn = false;
    }
    removeItem(){
        this.wrapp.remove();
    }
}
