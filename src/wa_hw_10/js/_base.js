function Svetofor(w, h){
    this.svetofor = document.createElement("div");
    this.svetofor.style.width = w +"px";
    this.svetofor.style.minHeight = h+ "px";
    this.svetofor.className = "svetofor";
    // this.svetofor.style.position = "absolute";
    // this.svetofor.style.top = "50%";
    // this.svetofor.style.left = "50%";
    // this.svetofor.style.transform = "translate(-50%, -50%)";
    // this.svetofor.style.display = "flex";
    // this.svetofor.style.flexDirection = "column";
    // this.svetofor.style.justifyContent = "space-around";
    // this.svetofor.style.alignItems = "center";
    // this.svetofor.style.border = "1px solid gray";
    // this.svetofor.style.backgroundColor = "lightgray";
    // this.svetofor.style.padding = "5px";
    // this.svetofor.style.borderRadius = "7px";
    // this.svetofor.style.boxShadow = "2px 2px 3px black";
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
    this.color.style.opacity = 0.2;
    this.color.className = color;
    this.color.style.width = w + "px";
    this.color.style.height = w + "px";
    // this.color.style.borderRadius = "50%";
    // this.color.style.border = "1px solid gray";
}

const strLight = new Svetofor(200, 400);
strLight.show();

const red = new Color("red", 150);
const yellow = new Color("yellow", 150);
const green = new Color("green", 150);

strLight.insert(red);
strLight.insert(yellow);
strLight.insert(green);


const colors = document.querySelectorAll("#wrapper>div div");
for (let i = 0; i < colors.length; i++){
    colors[i].addEventListener("click", function (e){
        if(colors[i].style.opacity == 0.2){
            for(let j=0; j < colors.length; j++){
                colors[j].style.opacity = 0.2;
            }
            colors[i].style.opacity = 1;
            let timer = setTimeout(function () {
                colors[i].style.opacity = 0.2;
            }, 5000)
        }else{
            colors[i].style.opacity = .2;
        }
    });
}
console.log(colors);

