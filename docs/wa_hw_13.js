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
/******/ 	return __webpack_require__(__webpack_require__.s = 362);
/******/ })
/************************************************************************/
/******/ ({

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LightsManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lights = __webpack_require__(126);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LightsManager = exports.LightsManager = function () {
    function LightsManager(target) {
        _classCallCheck(this, LightsManager);

        this.target = target;
        this.lamps = [];
        this.renderAddBtn();
        this.renderRemoveBtn();
        this.renderToggleBtn();
        this.onOff = 0;
    }

    _createClass(LightsManager, [{
        key: 'renderAddBtn',
        value: function renderAddBtn() {
            var _this = this;

            this.btn = document.createElement('button');
            this.btn.className = 'all bulb';
            this.btn.textContent = 'add';
            this.target.appendChild(this.btn);
            this.btn.addEventListener('click', function () {
                _this.addLamp();
            });
        }
    }, {
        key: 'renderRemoveBtn',
        value: function renderRemoveBtn() {
            var _this2 = this;

            this.btn = document.createElement('button');
            this.btn.className = 'all bulb';
            this.btn.textContent = 'remove';
            this.target.appendChild(this.btn);
            this.btn.addEventListener('click', function () {
                _this2.removeLamp();
            });
        }
    }, {
        key: 'renderToggleBtn',
        value: function renderToggleBtn() {
            var _this3 = this;

            this.btn = document.createElement('button');
            this.btn.className = 'all bulb';
            this.btn.textContent = 'toggle';
            this.target.appendChild(this.btn);
            this.btn.addEventListener('click', function () {
                if (_this3.lamps.length) {
                    _this3.onOff = false;
                    _this3.toggleLamps();
                }
            });
        }
    }, {
        key: 'addLamp',
        value: function addLamp() {
            var lampItem = new _lights.Lights(this.target, this.lamps);
            this.lamps.push(lampItem);
        }
    }, {
        key: 'removeLamp',
        value: function removeLamp() {
            var lampItem = this.lamps.pop();
            var temp = this.target.lastChild;
            this.target.removeChild(temp);
        }
    }, {
        key: 'toggleLamps',
        value: function toggleLamps() {
            var _this4 = this;

            this.lamps.forEach(function (item) {
                _this4.onOff = item.isOn || _this4.onOff;
            });
            console.log(this.onOff);
            if (this.onOff) {
                this.lamps.forEach(function (item) {
                    item.off();
                });
            } else {
                this.lamps.forEach(function (item) {
                    item.on();
                });
            }
        }
    }]);

    return LightsManager;
}();

/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Lights = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(366);

var _lights_manager = __webpack_require__(125);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ITEM_CLASS = "wrap";

var Lights = exports.Lights = function () {
    function Lights(targetLight, arr) {
        _classCallCheck(this, Lights);

        this.targetLight = targetLight;
        this.render();
        this.isOn = false;
        this.arrItems = arr;
    }

    _createClass(Lights, [{
        key: "render",
        value: function render() {
            var _this = this;

            this.wrapp = document.createElement('div');
            this.wrapp.className = ITEM_CLASS;
            this.i = document.createElement('i');
            this.i.className = 'far fa-lightbulb';
            this.btn = document.createElement('button');
            this.btn.classList.add('bulb');
            this.btn.textContent = 'on/off';
            this.close = document.createElement('div');
            this.close.className = 'close';
            this.close.innerHTML = '&times';
            this.wrapp.appendChild(this.i);
            this.wrapp.appendChild(this.btn);
            this.wrapp.appendChild(this.close);
            this.targetLight.appendChild(this.wrapp);
            this.close.addEventListener('click', function () {
                _this.removeItem();
            });
            this.btn.addEventListener('click', function () {
                _this.wrapp.classList.toggle('active');
                _this.isOn = !_this.isOn;
            });
        }
    }, {
        key: "on",
        value: function on() {
            if (!this.wrapp.classList.contains('active')) this.wrapp.classList.add('active');
            this.isOn = true;
        }
    }, {
        key: "off",
        value: function off() {
            if (this.wrapp.classList.contains('active')) this.wrapp.classList.remove('active');
            this.isOn = false;
        }
    }, {
        key: "removeItem",
        value: function removeItem() {
            var _this2 = this;

            if (this.arrItems) {
                this.arrItems.forEach(function (item, i, array) {
                    if (item.wrapp == _this2.wrapp) {
                        array.splice(i, 1);
                    }
                });
            }
            this.wrapp.remove();
        }
    }]);

    return Lights;
}();

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(363);


/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(364);

__webpack_require__(365);

var _lights_manager = __webpack_require__(125);

var _lights = __webpack_require__(126);

var light = new _lights_manager.LightsManager(document.querySelector('.wrapper'));

var light1 = new _lights.Lights(document.querySelector('.wrapper'));
// const light2 = new Lights(document.querySelector('.wrapper'));
// const light3 = new Lights(document.querySelector('.wrapper'));
// const light4 = new Lights(document.querySelector('.wrapper'));
// const light5 = new Lights(document.querySelector('.wrapper'));

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 366:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });