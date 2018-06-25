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

var _lighter = __webpack_require__(338);

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lighter = lighter;

__webpack_require__(339);

function lighter() {
    var lighter = document.querySelector(".lighter");
    var lights = lighter.querySelectorAll(".lighter__light");
    var ACTIVE = "lighter__light_active";
    var lightsArray = Array.from(lights);
    var btn = lighter.querySelector(".btn");
    var index = 0;
    var isDisabled = lighter.classList.contains("disabled");
    var timer = void 0;
    lightsArray.forEach(function (item, i, lightsArray) {
        item.addEventListener("click", function () {
            turnOn(item, i);
        });
    });
    btn.addEventListener("click", function () {
        if (lighter.classList.contains("disabled")) {
            lighter.classList.remove("disabled");
            isDisabled = false;
        } else {
            isDisabled = true;
            lighter.classList.add("disabled");
            turnOff();
        }
    });
    function turnOn(item, i) {
        if (!isDisabled) {
            if (index !== undefined) {
                if (item.classList.contains(ACTIVE)) {
                    item.classList.remove(ACTIVE);
                } else {
                    turnOff();
                    item.classList.add(ACTIVE);
                }
            } else {
                item.classList.add(ACTIVE);
            }
            index = i;
        }
    }
    function turnOff() {
        console.log("index = " + index);
        if (index !== undefined) lightsArray[index].classList.remove(ACTIVE);
    }

    timer = setInterval(function () {
        if (!isDisabled) {
            if (index < lights.length) {
                console.log("111 " + index);
                // turnOff();
                turnOn(lights[index], index);
                index++;
            } else {
                console.log("2222 " + index);
                index = 0;
                // turnOff();
                turnOn(lights[index], index);
                index++;
            }
        }
    }, 1500);
}
lighter();

/***/ }),

/***/ 339:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });