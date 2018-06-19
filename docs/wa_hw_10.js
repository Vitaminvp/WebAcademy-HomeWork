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
/******/ 	return __webpack_require__(__webpack_require__.s = 338);
/******/ })
/************************************************************************/
/******/ ({

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(339);


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(340);

__webpack_require__(341);

/***/ }),

/***/ 340:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 341:
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
    this.color.style.opacity = 0.2;
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

var colors = document.querySelectorAll("#wrapper>div div");

var _loop = function _loop(i) {
    colors[i].addEventListener("click", function (e) {
        if (colors[i].style.opacity == 0.2) {
            for (var j = 0; j < colors.length; j++) {
                colors[j].style.opacity = 0.2;
            }
            colors[i].style.opacity = 1;
            var timer = setTimeout(function () {
                colors[i].style.opacity = 0.2;
            }, 5000);
        } else {
            colors[i].style.opacity = .2;
        }
    });
};

for (var i = 0; i < colors.length; i++) {
    _loop(i);
}
console.log(colors);

/***/ })

/******/ });