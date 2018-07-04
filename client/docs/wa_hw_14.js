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
/******/ 	return __webpack_require__(__webpack_require__.s = 374);
/******/ })
/************************************************************************/
/******/ ({

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(375);


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(376);

__webpack_require__(377);

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xhr = new XMLHttpRequest();
var btn = void 0;
var output = void 0;
var wrapp = document.querySelector(".wrapper");
(function render() {
    btn = document.createElement('button');
    btn.innerHTML = "GET DATA";
    output = document.createElement('div');
    output.className = "output";
    wrapp.appendChild(btn);
    btn.addEventListener('click', function () {
        wrapp.appendChild(output);
        output.innerHTML = '<img src="assets/images/ajax-loader.gif">';
        var timeout = 3000;
        var timer = setTimeout(function () {
            xhr.abort();alert("Зависон, однако!");
        }, timeout);
        xhr.open("GET", "http://localhost:4001/list");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                output.innerHTML = "";
                var data = JSON.parse(xhr.responseText);

                data = Array.from(data);
                data.forEach(function (item) {
                    var content = "";
                    content += "<ul>";
                    for (var key in item) {
                        content += '<li>' + key + ': "' + item[key] + '"</li>';
                    }
                    content += "</ul>";
                    output.innerHTML += content;
                    clearTimeout(timer);
                });
            }
        };
        xhr.send();
    });
})();

/***/ })

/******/ });