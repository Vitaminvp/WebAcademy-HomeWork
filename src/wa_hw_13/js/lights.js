import '../styles/lights.scss';

const ITEM_CLASS = "wrap";

export class Lights {
    constructor(targetLight, arr, inputId){
        this.targetLight = targetLight;
        this.inputNumber = parseInt(inputId);
        this.isOn = false;
        this.arrItems = arr;
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
            this.removeItem();
        });
        this.targetLight.appendChild(this.wrapp);
        this.renderSwitch();
    }
    renderBtn(){
        this.btn = document.createElement('button');
        this.btn.classList.add('bulb');
        this.btn.textContent = 'on/off';
        this.wrapp.appendChild(this.btn);
        this.btn.addEventListener('click', () => {
            this.wrapp.classList.toggle('active');
            this.isOn = !this.isOn;
        });
    }
    renderSwitch(){
        let forAttribute = 'switch-' +  this.inputNumber;
        this.switch = document.createElement('div');
        this.switch.className = "switch";
        this.switch.addEventListener('click', () => {
            if(this.input.checked){
                this.off();
            } else {
                this.on();
            }
        });
        this.input = document.createElement('input');
        this.input.className = "switch-check";
        this.input.id = `switch-${this.inputNumber}`;
        this.input.setAttribute('type', 'checkbox');
        this.label = document.createElement('label');
        this.label.className = "switch-label";
        this.label.setAttribute('for', `switch-${this.inputNumber}`);
        this.label.textContent = "Опция";
        this.span1 = document.createElement('span');
        this.span1.className = 'switch-slider switch-slider-on';
        this.span2 = document.createElement('span');
        this.span2.className = 'switch-slider switch-slider-off';
        this.label.appendChild(this.span1);
        this.label.appendChild(this.span2);
        this.switch.appendChild(this.input);
        this.switch.appendChild(this.label);
        this.wrapp.appendChild(this.switch);
    }
    on()  {
        if(!this.wrapp.classList.contains('active'))  this.wrapp.classList.add('active');
        this.isOn = true;
        this.input.checked = true;
    }
    off() {
        if(this.wrapp.classList.contains('active')) this.wrapp.classList.remove('active');
        this.isOn = false;
        this.input.checked = false;
    }
    removeItem(){
        if (this.arrItems.length){
            this.arrItems.forEach((item, i, array) => {
                if(item.wrapp == this.wrapp){
                    array.splice(i, 1);
                }
            });
        }
        this.wrapp.remove();
    }
}
