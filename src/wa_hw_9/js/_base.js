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
    var rand = min-.5 + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
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