/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 360);
/******/ })
/************************************************************************/
/******/ ({

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(361);


/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(362);

__webpack_require__(363);

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*----------------------Задание 1----------------------------------------*/
var input1 = document.querySelector("input[name=t1i1]");
var input2 = document.querySelector("input[name=t1i2]");
var input3 = document.querySelector("input[name=res1]");
var btn1 = document.querySelector(".btn1");
input1.addEventListener("keypress", function (e) {
    integerOnly(e);
});
input2.addEventListener("keypress", integerOnly);

btn1.addEventListener("click", function (e) {
    var input1Val = parseInt(input1.value);
    var input2Val = parseInt(input2.value);
    if (isNaN(input1Val) || isNaN(input2Val)) {
        input3.value = "Че-то введи.";
    } else {
        if (input1Val > input2Val) {
            input3.value = randomInteger(input1Val, input2Val);
            input1.value = input2Val;
            input2.value = input1Val;
        } else {
            input3.value = randomInteger(input2Val, input1Val);
        }
    }
    e.preventDefault();
});
function integerOnly(e) {
    var pattern = /[0-9]/;
    if (!pattern.test(String.fromCharCode(e.charCode))) {
        e.preventDefault();
    }
}
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}
/*----------------------Конец Задания 1----------------------------------------*/

/*----------------------Задание 2----------------------------------------*/
var btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", task2);
function task2() {
    console.clear();
    var user = new Object();
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
var btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", task3);
function task3() {
    console.clear();
    var menu = {
        width: 300,
        height: 200,
        title: "Menu"
    };

    var counter = 0;

    for (var key in menu) {
        console.log(key + ": " + menu[key]);
        counter++;
    }

    console.log("Всего свойств: " + counter);
}
/*----------------------Конец Задания 3----------------------------------------*/

/*----------------------Задание 4----------------------------------------*/

var btn4 = document.querySelector(".btn4");
btn4.addEventListener("click", task4);
function task4() {
    console.clear();
    var salaries = {
        John: 400,
        Jack: 20000,
        vasya: 600,
        Petya: 3.5,
        test: "«asdasdasd»"
    };
    var counter = 0;
    for (var key in salaries) {
        console.log(key + ": " + salaries[key]);
        if (isNaN(salaries[key])) {
            continue;
        }
        counter += salaries[key];
    }
    console.log("Cумму всех зарплат: " + counter);
}
/*----------------------Конец Задания 4----------------------------------------*/

/*----------------------Задание 5---------------------------------------*/

var btn5 = document.querySelector(".btn5");
btn5.addEventListener("click", task5);
function task5() {
    console.clear();
    var salaries5 = {
        John: 400,
        Jack: 20000,
        vasya: 600,
        Vitya: 39,
        test: "«asdasdasd»"
    };
    var counter = 0;
    var maxUser = 0,
        maxSalary = 0;

    for (var key in salaries5) {
        console.log(key + ": " + salaries5[key]);
        if (isNaN(salaries5[key])) {
            continue;
        }
        if (maxSalary < salaries5[key]) {
            ;
            var _ref = [key, salaries5[key]];
            maxUser = _ref[0];
            maxSalary = _ref[1];
        }counter++;
    }
    counter > 0 ? console.log("\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0437\u0430\u0440\u043F\u043B\u0430\u0442\u0430 \u0443 " + maxUser + ": " + maxSalary) : console.log("нет сотрудников");
}

/*----------------------Конец Задания 5----------------------------------------*/

/*----------------------Задание 6---------------------------------------*/

var btn6 = document.querySelector(".btn6");
btn6.addEventListener("click", task6);
function task6() {
    console.clear();
    var obj = {
        John: 400,
        Jack: 20000,
        vasya: 600,
        Vitya: 39,
        test: "«asdasdasd»"
    };
    multiplyNumeric(obj);
    for (var key in obj) {
        console.log("x2:  " + key + ": " + obj[key]);
    }
}
function multiplyNumeric(obj) {
    for (var key in obj) {
        console.log(key + ": " + obj[key]);
        if (isNaN(obj[key])) {
            continue;
        }
        obj[key] *= 2;
    }
}

/*----------------------Конец Задания 6----------------------------------------*/

/*----------------------Задание 7---------------------------------------*/
var btn7 = document.querySelector(".btn7");
var arr7 = ["воз", "киборг", "корсет", "ЗОВ", "горбик", "костер", "сектор", 1, 99, 158];

btn7.addEventListener("click", task7);

function task7() {
    console.clear();
    console.log(arr7);
    alert("\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0438\u0437 [" + arr7 + "]: " + arr7[randomInteger(0, arr7.length - 1)]);
}

/*----------------------Конец Задания 7----------------------------------------*/

/*----------------------Задание 8---------------------------------------*/

var btn8 = document.querySelector(".btn8");
btn8.addEventListener("click", task8);
var arr8 = [];
function task8() {
    console.clear();
    var arr8El = prompt("Введите эллемент масива (число):", "35");
    askAndPush(arr8, arr8El);
    console.log(arr8);
    alert(arr8);
}
function askAndPush(arr, element) {
    if (!isNaN(element) && element !== null) {
        arr.push(+element);
        var arr8Element = prompt("Введите следующее значение:", "99");
        askAndPush(arr, arr8Element);
    }
}

/*----------------------Конец Задания 8----------------------------------------*/

/*----------------------Задание 9---------------------------------------*/

var btn9 = document.querySelector(".btn9");
btn9.addEventListener("click", task9);
function task9() {
    var value = prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u044D\u043B\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u043C\u0430\u0441\u0438\u0432\u0430 " + arr7, 'ЗОВ');
    alert(find(arr7, value));
}
function find(arr, value) {
    console.clear();
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            console.log("\"" + arr[i] + "\" - \u044D\u043B\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u2116 " + (i + 1) + ".");
            return "\u042D\u043B\u043B\u0435\u043C\u0435\u043D\u0442 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u2116 " + (i + 1) + ".";
        }
    }
    return -1;
}
/*----------------------Конец Задания 9----------------------------------------*/

/*----------------------Задание 10---------------------------------------*/
var btn10 = document.querySelector(".btn10");
btn10.addEventListener("click", task10);
function task10() {
    var arrNumrer = [1, 2, 3, 4, 5, 6, 8, 77, 99, 661, 888, 521478, "jjj", 54, 1, 22, 32, 7, 66, 555, 4, 5, 1000];
    var a = prompt('Введите нижнюю границу диаппазона', '4');
    var b = prompt('Введите верхнюю границу диаппазона', '600');
    console.clear();
    console.log("\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432: " + arrNumrer);
    console.log("Новый массив: " + filterRange(arrNumrer, +a, +b));
}
function filterRange(arr, a, b) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
/*----------------------Конец Задания 10----------------------------------------*/

/*----------------------Задание 11---------------------------------------*/
var btn11 = document.querySelector(".btn11");
btn11.addEventListener("click", task11);
function task11() {
    var x = prompt('Введите число', '4');
    var n = prompt('Введите степень', '3');
    console.clear();
    if (!isNaN(x) && !isNaN(n)) {
        console.log(pow(+x, +n));
        alert(pow(+x, +n));
    } else {
        console.log("ERROR!");
    }
}
function pow(a, b) {
    if (b == 0) {
        return 1;
    } else if (b < 0) {
        for (var i = 2; i <= Math.abs(b); i++) {
            a *= a;
        }
        return 1 / a;
    } else {
        for (var _i = 2; _i <= b; _i++) {
            a *= a;
        }
        return a;
    }
}
/*----------------------Конец Задания 11----------------------------------------*/

/*----------------------Задание 12---------------------------------------*/

var btn12 = document.querySelector(".btn12");
btn12.addEventListener("click", task12);
function task12() {
    console.clear();
    var date = new Date(2012, 1, 20, 3, 12, 0, 0);
    alert(date); // 20.02.2012, 03:12:00.000
}

/*----------------------Конец Задания 12----------------------------------------*/

/*----------------------Задание 13---------------------------------------*/

var btn13 = document.querySelector(".btn13");
btn13.addEventListener("click", task13);
function task13() {
    var date = new Date();
    getWeekDay(date);
}

function getWeekDay(date) {
    var days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    console.clear();
    var day = date.getDay();
    console.log(days[day]);
    alert(days[day]);
}

/*----------------------Конец Задания 13----------------------------------------*/

/*----------------------Задание 14---------------------------------------*/

var btn14 = document.querySelector(".btn14");
btn14.addEventListener("click", task14);
function task14() {
    var dateControl = document.querySelector('input[name=t14i1]');
    var date = new Date(dateControl.value);
    console.clear();
    console.log(date);
    console.log(getLocalDay(date));
    alert(getLocalDay(date));
}

function getLocalDay(date) {

    var day = date.getDay();
    if (day == 0) {
        day = 7;
    }
    return day;
}

/*----------------------Конец Задания 14----------------------------------------*/

/*----------------------Задание 15---------------------------------------*/
var btn15 = document.querySelector(".btn15");
btn15.addEventListener("click", task15);
function task15() {
    var dateControl = document.querySelector('input[name=t15i1]');
    var input15 = document.querySelector("input[name=t15i2]");
    var date = new Date(dateControl.value);
    // let daysAmount = prompt("Введите к-во дней от даты: ", "5");
    alert(getDateAgo(date, +input15.value));
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

var paragraph = document.querySelector(".pAll");
function Tooltip() {
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

Tooltip.prototype.show = function (text, x, y) {
    this.tooltip.style.visibility = "visible";
    this.tooltip.innerHTML = text;
    this.tooltip.style.top = y + "px";
    this.tooltip.style.left = x + "px";
    if (this.tooltip.parentNode != document.body) {
        document.body.appendChild(this.tooltip);
    }
};
Tooltip.prototype.hide = function () {
    this.tooltip.style.visibility = "hidden";
};
var tt = new Tooltip();

paragraph.addEventListener("mousemove", function (event) {
    tt.show("Some text example", event.clientX + 20, event.clientY - 50);
});
paragraph.addEventListener("mouseout", function (e) {
    tt.hide();
});

/***/ })

/******/ });