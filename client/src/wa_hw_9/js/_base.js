/*----------------------Задание 1----------------------------------------*/
const input1 = document.querySelector("input[name=t1i1]");
const input2 = document.querySelector("input[name=t1i2]");
const input3 = document.querySelector("input[name=res1]");
const btn1 = document.querySelector(".btn1");
input1.addEventListener("keypress", (e)=>{
    integerOnly(e);
});
input2.addEventListener("keypress", integerOnly);

btn1.addEventListener("click", function (e) {
    let input1Val = parseInt(input1.value);
    let input2Val = parseInt(input2.value);
    if(isNaN(input1Val)  || isNaN(input2Val)) {
        input3.value = "Че-то введи.";
    }else{
        if (input1Val > input2Val) {
            input3.value = randomInteger(input1Val, input2Val);
            input1.value = input2Val;
            input2.value = input1Val;
        }else{
            input3.value = randomInteger(input2Val, input1Val);
        }
    }
    e.preventDefault();
})
function integerOnly(e){
    let pattern = /[0-9]/;
    if(!pattern.test(String.fromCharCode(e.charCode))) {
        e.preventDefault();
    }
}
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}
/*----------------------Конец Задания 1----------------------------------------*/

/*----------------------Задание 2----------------------------------------*/
const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", task2);
function task2() {
    console.clear();
    const user = new Object();
    user.name = "Вася";
    user.surname = "Петров";
    console.log(user);
    user.name = "Сергей";
    user.name = undefined;
    console.log(user);
    delete user.name;
    console.log(user);

}
/*----------------------Конец Задания 2----------------------------------------*/

/*----------------------Задание 3----------------------------------------*/
const btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", task3);
function task3() {
    console.clear();
    const menu = {
        width: 300,
        height: 200,
        title: "Menu"
    };

    let counter = 0;

    for (let key in menu) {
        console.log(key +": "+ menu[key]);
        counter++;
    }

    console.log("Всего свойств: " + counter);
}
/*----------------------Конец Задания 3----------------------------------------*/

/*----------------------Задание 4----------------------------------------*/

const btn4 = document.querySelector(".btn4");
btn4.addEventListener("click", task4);
function task4() {
    console.clear();
    const salaries = {
            John: 400,
            Jack: 20000,
            vasya: 600,
            Petya: 3.5,
            test: "«asdasdasd»"
            }
    let counter = 0;
    for (let key in salaries) {
        console.log(key +": "+ salaries[key]);
        if(isNaN(salaries[key])){
            continue;
        }
        counter += salaries[key];
    }
    console.log("Cумму всех зарплат: " + counter);
}
/*----------------------Конец Задания 4----------------------------------------*/

/*----------------------Задание 5---------------------------------------*/

const btn5 = document.querySelector(".btn5");
btn5.addEventListener("click", task5);
function task5() {
    console.clear();
    const salaries5 = {
        John: 400,
        Jack: 20000,
        vasya: 600,
        Vitya: 39,
        test: "«asdasdasd»"
    }
    let counter = 0;
    let [maxUser, maxSalary] = [0, 0];
    for (let key in salaries5) {
        console.log(key +": "+ salaries5[key]);
        if(isNaN(salaries5[key])){
            continue;
        }
        if(maxSalary < salaries5[key])  [maxUser, maxSalary] = [key, salaries5[key]];
        counter++;
    }
    counter > 0? console.log(`Максимальная зарплата у ${maxUser}: ${maxSalary}`):console.log("нет сотрудников");
}

/*----------------------Конец Задания 5----------------------------------------*/

/*----------------------Задание 6---------------------------------------*/

const btn6 = document.querySelector(".btn6");
btn6.addEventListener("click", task6);
function task6() {
    console.clear();
    const obj = {
        John: 400,
        Jack: 20000,
        vasya: 600,
        Vitya: 39,
        test: "«asdasdasd»"
    }
    multiplyNumeric(obj);
    for (let key in obj) {
        console.log("x2:  " + key +": "+ obj[key]);
    }
}
function multiplyNumeric(obj){
    for (let key in obj) {
        console.log(key +": "+ obj[key]);
        if(isNaN(obj[key])){
            continue;
        }
        obj[key]*=2;
    }
}

/*----------------------Конец Задания 6----------------------------------------*/

/*----------------------Задание 7---------------------------------------*/
const btn7 = document.querySelector(".btn7");
const arr7 = ["воз", "киборг", "корсет", "ЗОВ", "горбик", "костер", "сектор", 1, 99, 158];

btn7.addEventListener("click", task7);

function task7() {
    console.clear();
    console.log(arr7);
    alert(`Случайный элемент из [${arr7}]: ${arr7[randomInteger(0, arr7.length-1)]}`);
}

/*----------------------Конец Задания 7----------------------------------------*/

/*----------------------Задание 8---------------------------------------*/

const btn8 = document.querySelector(".btn8");
btn8.addEventListener("click", task8);
const arr8 = [];
function task8() {
    console.clear();
    let arr8El = prompt("Введите эллемент масива (число):", "35");
    askAndPush(arr8, arr8El);
    console.log(arr8);
    alert(arr8);
}
function askAndPush(arr, element){
    if(!isNaN(element) && element!==null){
        arr.push(+element);
        let arr8Element = prompt("Введите следующее значение:", "99");
        askAndPush(arr, arr8Element);
    }
}

/*----------------------Конец Задания 8----------------------------------------*/

/*----------------------Задание 9---------------------------------------*/

const btn9 = document.querySelector(".btn9");
btn9.addEventListener("click",  task9);
function task9() {
    let value = prompt(`Введите значение эллемента масива ${arr7}`, 'ЗОВ');
    alert(find(arr7, value));
}
function  find(arr, value) {
    console.clear();
    console.log(arr);
    for(let i=0; i < arr.length; i++){
        if (arr[i] == value){
            console.log(`"${arr[i]}" - эллемент массива № ${i + 1}.`)
            return (`Эллемент массива № ${i+1}.`);
        }
    }
    return -1;
}
/*----------------------Конец Задания 9----------------------------------------*/

/*----------------------Задание 10---------------------------------------*/
const btn10 = document.querySelector(".btn10");
btn10.addEventListener("click",  task10);
function task10() {
    const arrNumrer = [1, 2, 3, 4, 5, 6, 8, 77, 99, 661, 888, 521478, "jjj", 54, 1, 22, 32, 7, 66, 555, 4, 5, 1000];
    let a = prompt('Введите нижнюю границу диаппазона', '4');
    let b = prompt('Введите верхнюю границу диаппазона', '600');
    console.clear();
    console.log(`Исходный массив: ${arrNumrer}`);
    console.log("Новый массив: " + filterRange(arrNumrer, +a, +b));
}
function   filterRange(arr, a, b) {
    const newArr = [];
    for(let i=0; i < arr.length; i++){
        if (arr[i] >= a && arr[i] <= b){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
/*----------------------Конец Задания 10----------------------------------------*/

/*----------------------Задание 11---------------------------------------*/
const btn11 = document.querySelector(".btn11");
btn11.addEventListener("click",  task11);
function task11() {
    let x = prompt('Введите число', '4');
    let n = prompt('Введите степень', '3');
    console.clear();
    if( !isNaN(x) && !isNaN(n) ){
        console.log(pow(+x, +n));
        alert(pow(+x, +n));
    }else {
        console.log("ERROR!");
    }
}
function   pow(a, b) {
    if( b == 0 ){
        return 1;
    }else if( b < 0 ){
        for(let i=2; i <= Math.abs(b); i++){
            a *= a;
        }
        return 1/a;
    }
    else{
        for(let i=2; i <= b; i++){
            a *= a;
        }
        return a;
    }
}
/*----------------------Конец Задания 11----------------------------------------*/

/*----------------------Задание 12---------------------------------------*/

const btn12 = document.querySelector(".btn12");
btn12.addEventListener("click",  task12);
function task12() {
    console.clear();
    const date = new Date(2012, 1, 20, 3, 12, 0, 0);
    alert( date ); // 20.02.2012, 03:12:00.000
}


/*----------------------Конец Задания 12----------------------------------------*/

/*----------------------Задание 13---------------------------------------*/

const btn13 = document.querySelector(".btn13");
btn13.addEventListener("click",  task13);
function task13() {
    const date = new Date();
    getWeekDay(date);
}

function getWeekDay(date){
    const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    console.clear();
    let day = date.getDay();
    console.log(days[day]);
    alert( days[day] );
}

/*----------------------Конец Задания 13----------------------------------------*/

/*----------------------Задание 14---------------------------------------*/

const btn14 = document.querySelector(".btn14");
btn14.addEventListener("click",  task14);
function task14() {
    const dateControl = document.querySelector('input[name=t14i1]');
    const date = new Date(dateControl.value);
    console.clear();
    console.log(date);
    console.log(getLocalDay(date));
    alert(getLocalDay(date) );
}

function getLocalDay(date) {

    let day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day;
}

/*----------------------Конец Задания 14----------------------------------------*/

/*----------------------Задание 15---------------------------------------*/
const btn15 = document.querySelector(".btn15");
btn15.addEventListener("click",  task15);
function task15() {
    const dateControl = document.querySelector('input[name=t15i1]');
    const input15 = document.querySelector("input[name=t15i2]");
    const date = new Date(dateControl.value);
    // let daysAmount = prompt("Введите к-во дней от даты: ", "5");
    alert( getDateAgo(date, +input15.value) );
    console.clear();
    console.log(getDateAgo(date, +input15.value));
}

function getDateAgo(date, days) {
    var dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
}

/*----------------------Конец Задания 15----------------------------------------*/

/*-------------------------------TOOLTIP-----------------------------------------------*/

const paragraph = document.querySelector(".pAll");
function Tooltip(){
    this.tooltip = document.createElement("div");
    this.tooltip.style.position = "fixed";
    this.tooltip.style.visibility = "hidden";
    this.tooltip.style.border = "1px solid gray";
    this.tooltip.style.backgroundColor = "lightgray";
    this.tooltip.style.padding = "5px";
    this.tooltip.style.color = "#1e1e1e";
    this.tooltip.style.borderRadius = "3px";
    this.tooltip.style.boxShadow = "2px 2px 3px black";
    this.tooltip.style.font = "bold 10pt sans-serif";
}

Tooltip.prototype.show = function(text, x, y){
    this.tooltip.style.visibility = "visible";
    this.tooltip.innerHTML = text;
    this.tooltip.style.top = y + "px";
    this.tooltip.style.left = x + "px";
    if (this.tooltip.parentNode != document.body){
        document.body.appendChild(this.tooltip);
    }

}
Tooltip.prototype.hide = function(){
    this.tooltip.style.visibility = "hidden";
}
const tt = new Tooltip();

paragraph.addEventListener("mousemove", function (event) {
    tt.show("Some text example", event.clientX + 20, event.clientY - 50);
})
paragraph.addEventListener("mouseout", function (e) {
    tt.hide();
})
