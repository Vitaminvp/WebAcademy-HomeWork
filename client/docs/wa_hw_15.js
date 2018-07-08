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
/******/ 	return __webpack_require__(__webpack_require__.s = 378);
/******/ })
/************************************************************************/
/******/ ({

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(379);


/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(380);

__webpack_require__(381);

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _taskList = __webpack_require__(382);

var ajax = new _taskList.TaskList(document.querySelector('.wrapper'));

// const xhr = new XMLHttpRequest();
// let btn;
// let output;
// const wrapp = document.querySelector(".wrapper");
// (function render(){
//     btn = document.createElement('button');
//     btn.innerHTML = "GET DATA";
//     output  = document.createElement('div');
//     output.className = "output";
//     wrapp.appendChild(btn);
//     btn.addEventListener('click', function() {
//         wrapp.appendChild(output);
//         output.style.display = "flex";
//         output.innerHTML = '<img src="https://vitaminvp.github.io/WA/client/assets/images/ajax-loader.gif">';
//         const timeout = 3000;
//         const timer = setTimeout(function () {
//             xhr.abort();
//             alert("Зависон, однако!");
//             output.style.display = "none";
//         }, timeout);
//         xhr.open("GET", "http://localhost:4001/list");
//         xhr.onreadystatechange = function() {
//             if(xhr.readyState == 4 && xhr.status == 200){
//                 output.innerHTML = "";
//                 let data = JSON.parse(xhr.responseText);
//                 data = Array.from(data);
//                 data.forEach( (item) => {
//                     let content = "";
//                     content += "<ul>";
//                     for (let key in item){
//                         content += '<li>'+key+': "'+item[key]+'"</li>';
//                     }
//                     content += "</ul>";
//                     output.innerHTML += content;
//                     clearTimeout(timer);
//                 });
//             }
//         };
//         xhr.send();
//     });
// })();
//
//

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TaskList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ajax = __webpack_require__(383);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaskList = exports.TaskList = function () {
    function TaskList(target) {
        _classCallCheck(this, TaskList);

        this.target = target;
        this.render();
        _ajax.Ajax.get('http://localhost:4001/list');
    }

    _createClass(TaskList, [{
        key: 'render',
        value: function render() {
            var _this = this;

            this.ul = document.createElement('ul');
            this.btn = document.createElement('button');
            this.btn.innerHTML = "GET DATA";
            this.btn.className = "btn";
            this.target.appendChild(this.btn);
            this.output = document.createElement('div');
            this.output.className = "output";
            this.output.style.display = "flex";
            this.output.appendChild(this.ul);
            this.btn.addEventListener('click', function () {
                _this.target.appendChild(_this.output);
                _this.ul.innerHTML = '<img src="https://vitaminvp.github.io/WA/client/assets/images/ajax-loader.gif">';
                _ajax.Ajax.get('http://localhost:4001/list', _this.renderItems.bind(_this));
            });
        }
    }, {
        key: 'renderItems',
        value: function renderItems(ajaxRespons) {
            console.log(ajaxRespons);
            this.output.innerHTML = "";
            this.Respons = Array.from(ajaxRespons);
            var docFragment = document.createDocumentFragment();
            this.Respons.forEach(function (item) {
                var ul = document.createElement('ul');
                for (var key in item) {
                    var li = document.createElement('li');
                    li.innerHTML = key + ': ' + item[key];
                    ul.appendChild(li);
                }
                docFragment.appendChild(ul);
            });
            this.output.appendChild(docFragment);
        }
    }]);

    return TaskList;
}();

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ajax = exports.Ajax = function () {
    function Ajax() {
        _classCallCheck(this, Ajax);
    }

    _createClass(Ajax, null, [{
        key: 'get',
        value: function get(url, responseCallback) {
            var xhr = new XMLHttpRequest();
            var timeout = 15000;
            var timer = setTimeout(function () {
                xhr.abort();
            }, timeout);
            xhr.open('GET', url);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    clearTimeout(timer);
                    responseCallback(JSON.parse(xhr.response));
                }
            };
            xhr.send();
        }
    }, {
        key: 'post',
        value: function post(url, data, callback) {
            var xhr = new XMLHttpRequest();
            var timeout = 15000;
            var timer = setTimeout(function () {
                xhr.abort();
            }, timeout);
            xhr.open('GET', url);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    clearTimeout(timer);
                    callback(JSON.parse(xhr.responseText));
                } else {
                    throw Error(xhr.responseText);
                }
            };
            xhr.send();
        }
    }]);

    return Ajax;
}();

/***/ })

/******/ });