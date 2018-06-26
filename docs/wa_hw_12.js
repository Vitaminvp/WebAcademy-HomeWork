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
/******/ 	return __webpack_require__(__webpack_require__.s = 354);
/******/ })
/************************************************************************/
/******/ ({

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(355);


/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(356);

__webpack_require__(357);

var _accordion = __webpack_require__(358);

var accordions = document.querySelectorAll(".accordion");
var array = [[{ title: "Collapsible item #1-1", content: "1-1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #1-2", content: "1-2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #1-3", content: "1-3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #1-4", content: "1-4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #1-5", content: "1-5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }], [{ title: "Collapsible item #2-1", content: "2-1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #2-2", content: "2-2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #2-3", content: "2-3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #2-4", content: "2-4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #2-5", content: "2-5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #2-6", content: "2-6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #2-7", content: "2-7 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }], [{ title: "Collapsible item #3-1", content: "3-1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #3-2", content: "3-2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #3-3", content: "3-3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #3-4", content: "3-4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #3-5", content: "3-5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }, { title: "Collapsible item #3-6", content: "3-6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt eaque est fuga impedit maxime, nisi nobis pariatur perferendis quisquam voluptates." }]];
for (var i = 0; i < accordions.length; i++) {
    (0, _accordion.accordion)(accordions[i], array[i]);
}

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.accordion = accordion;

__webpack_require__(359);

function accordion(element, array) {
    var AC_CONTENT = "accordion__item_content";
    var AC_TITLE = "accordion__item_title";
    var AC_ITEM = "accordion__item";
    var AC_I = "fas fa-chevron-down";
    array.forEach(function (item, i, arr) {
        var div_item = document.createElement("div");
        div_item.className = AC_ITEM;
        var div_title = document.createElement("div");
        div_title.className = AC_TITLE;
        var div_title_select = document.createElement("span");
        div_title_select.textContent = arr[i].title;
        var div_title_i = document.createElement("i");
        div_title_i.className = AC_I;
        div_title.appendChild(div_title_select);
        div_title.appendChild(div_title_i);
        var div_content = document.createElement("div");
        div_content.className = AC_CONTENT;
        var div_content_p = document.createElement("p");
        div_content_p.textContent = arr[i].content;
        div_content.appendChild(div_content_p);
        div_item.appendChild(div_title);
        div_item.appendChild(div_content);
        element.appendChild(div_item);
    });

    var index = 0;
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

/***/ 359:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });