function Svetofor(w, h){
    this.svetofor = document.createElement("div");
    this.svetofor.style.width = w +"px";
    this.svetofor.style.minHeight = h+ "px";
    this.svetofor.className = "svetofor";
}

Svetofor.prototype.show = function(){
    if (this.svetofor.parentNode != wrapper){
        wrapper.appendChild(this.svetofor);
    }
}
Svetofor.prototype.insert = function(color){
    let element = color.color;
    this.svetofor.appendChild(element);
}

function Color(color, w) {
    this.color = document.createElement("div");
    this.color.style.backgroundColor = color;
    this.color.className = color;
    this.color.style.width = w + "px";
    this.color.style.height = w + "px";
}

const strLight = new Svetofor(200, 400);
strLight.show();

const red = new Color("red", 150);
const yellow = new Color("yellow", 150);
const green = new Color("green", 150);

strLight.insert(red);
strLight.insert(yellow);
strLight.insert(green);

let timer;
let shortTime = 1500; //Желтый короче
let longTime = 3000;
let time = longTime;

const colors = document.querySelectorAll("#wrapper>div div");

for (let i = 0; i < colors.length; i++) colors[i].addEventListener("click", start);

function  start(e) {
    if (e.target) e = e.target;
    if (e.classList.contains("active")){
        clearTimeout(timer);
        turnoff();
    }else{
        clearTimeout(timer);
        turnoff();
        e.classList.add("active");
        swtch(e);
    }
}

function turnoff() {
    for(let j=0; j < colors.length; j++){
        colors[j].classList.remove("active");
    }
}

function swtch(e){
    if(e.nextSibling == null || !e.classList.contains("yellow")){
        time = longTime;
    }else{
        time = shortTime;
    }

    timer = setTimeout(function () {

        if(e.nextSibling == null){
            start(colors[0]);
        }
        else if(e.nextSibling.classList.contains("yellow") || e.nextSibling.classList.contains("green")){
            start(e.nextSibling);
        }
        else{
            alert("Непредвиденная херня.")
        }
    }, time);
}




