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
/******/ 	return __webpack_require__(__webpack_require__.s = 334);
/******/ })
/************************************************************************/
/******/ ({

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(335);


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(336);

__webpack_require__(337);

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 337:
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
    var rand = min - .5 + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
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

/***/ })

/******/ });