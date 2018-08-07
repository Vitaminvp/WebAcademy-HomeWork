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
/******/ 	return __webpack_require__(__webpack_require__.s = 401);
/******/ })
/************************************************************************/
/******/ ({

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(402);


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(403);

__webpack_require__(404);

var _accordion = __webpack_require__(405);

var accordions = document.querySelectorAll(".accordion");

for (var i = 0; i < accordions.length; i++) {
    (0, _accordion.accordion)(accordions[i]);
}

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.accordion = accordion;

__webpack_require__(406);

function accordion(element) {
    var index = 0;
    // const accordion  = document.querySelector(".accordion");
    var accordItrms = Array.from(element.querySelectorAll(".accordion__item_title"));

    var _loop = function _loop(i) {

        accordItrms[i].addEventListener("click", function (e) {
            if (this.parentNode.classList.contains("active")) {
                this.parentNode.classList.remove("active");
            } else {
                if (index !== i) {
                    this.parentNode.classList.add("active");
                    accordItrms[index].parentNode.classList.remove("active");
                } else {
                    this.parentNode.classList.add("active");
                }
            }
            index = i;
        });
    };

    for (var i = 0; i < accordItrms.length; i++) {
        _loop(i);
    }
}

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });