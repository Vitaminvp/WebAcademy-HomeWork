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
/******/ 	return __webpack_require__(__webpack_require__.s = 352);
/******/ })
/************************************************************************/
/******/ ({

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(353);


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(354);

__webpack_require__(355);

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function Svetofor(w, h) {
    this.svetofor = document.createElement("div");
    this.svetofor.style.width = w + "px";
    this.svetofor.style.minHeight = h + "px";
    this.svetofor.className = "svetofor";
}

Svetofor.prototype.show = function () {
    if (this.svetofor.parentNode != wrapper) {
        wrapper.appendChild(this.svetofor);
    }
};
Svetofor.prototype.insert = function (color) {
    var element = color.color;
    this.svetofor.appendChild(element);
};

function Color(color, w) {
    this.color = document.createElement("div");
    this.color.style.backgroundColor = color;
    this.color.className = color;
    this.color.style.width = w + "px";
    this.color.style.height = w + "px";
}

var strLight = new Svetofor(200, 400);
strLight.show();

var red = new Color("red", 150);
var yellow = new Color("yellow", 150);
var green = new Color("green", 150);

strLight.insert(red);
strLight.insert(yellow);
strLight.insert(green);

var timer = void 0;
var shortTime = 1500; //Желтый короче
var longTime = 3000;
var time = longTime;

var colors = document.querySelectorAll("#wrapper>div div");

for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener("click", start);
}function start(e) {
    if (e.target) e = e.target;
    if (e.classList.contains("active")) {
        clearTimeout(timer);
        turnoff();
    } else {
        clearTimeout(timer);
        turnoff();
        e.classList.add("active");
        swtch(e);
    }
}

function turnoff() {
    for (var j = 0; j < colors.length; j++) {
        colors[j].classList.remove("active");
    }
}

function swtch(e) {
    if (e.nextSibling == null || !e.classList.contains("yellow")) {
        time = longTime;
    } else {
        time = shortTime;
    }

    timer = setTimeout(function () {

        if (e.nextSibling == null) {
            start(colors[0]);
        } else if (e.nextSibling.classList.contains("yellow") || e.nextSibling.classList.contains("green")) {
            start(e.nextSibling);
        } else {
            alert("Непредвиденная херня.");
        }
    }, time);
}

/***/ })

/******/ });