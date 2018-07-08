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
/******/ 	return __webpack_require__(__webpack_require__.s = 380);
/******/ })
/************************************************************************/
/******/ ({

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Lights = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(385);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ITEM_CLASS = "wrap";

var Lights = exports.Lights = function () {
    function Lights(targetLight, arr, inputId) {
        _classCallCheck(this, Lights);

        this.targetLight = targetLight;
        this.inputNumber = parseInt(inputId);
        this.isOn = false;
        this.arrItems = arr;
        this.render();
    }

    _createClass(Lights, [{
        key: 'render',
        value: function render() {
            var _this = this;

            this.wrapp = document.createElement('div');
            this.wrapp.className = ITEM_CLASS;
            this.i = document.createElement('i');
            this.i.className = 'far fa-lightbulb';
            this.wrapp.appendChild(this.i);
            this.close = document.createElement('div');
            this.close.className = 'close';
            this.close.innerHTML = '&times';
            this.wrapp.appendChild(this.close);
            this.close.addEventListener('click', function () {
                _this.removeItem();
            });
            this.targetLight.appendChild(this.wrapp);
            this.renderSwitch();
        }
    }, {
        key: 'renderBtn',
        value: function renderBtn() {
            var _this2 = this;

            this.btn = document.createElement('button');
            this.btn.classList.add('bulb');
            this.btn.textContent = 'on/off';
            this.wrapp.appendChild(this.btn);
            this.btn.addEventListener('click', function () {
                _this2.wrapp.classList.toggle('active');
                _this2.isOn = !_this2.isOn;
            });
        }
    }, {
        key: 'renderSwitch',
        value: function renderSwitch() {
            var _this3 = this;

            var forAttribute = 'switch-' + this.inputNumber;
            this.switch = document.createElement('div');
            this.switch.className = "switch";
            this.switch.addEventListener('click', function () {
                if (_this3.input.checked) {
                    _this3.off();
                } else {
                    _this3.on();
                }
            });
            this.input = document.createElement('input');
            this.input.className = "switch-check";
            this.input.id = 'switch-' + this.inputNumber;
            this.input.setAttribute('type', 'checkbox');
            this.label = document.createElement('label');
            this.label.className = "switch-label";
            this.label.setAttribute('for', 'switch-' + this.inputNumber);
            this.label.textContent = "Опция";
            this.span1 = document.createElement('span');
            this.span1.className = 'switch-slider switch-slider-on';
            this.span2 = document.createElement('span');
            this.span2.className = 'switch-slider switch-slider-off';
            this.label.appendChild(this.span1);
            this.label.appendChild(this.span2);
            this.switch.appendChild(this.input);
            this.switch.appendChild(this.label);
            this.wrapp.appendChild(this.switch);
        }
    }, {
        key: 'on',
        value: function on() {
            if (!this.wrapp.classList.contains('active')) this.wrapp.classList.add('active');
            this.isOn = true;
            this.input.checked = true;
        }
    }, {
        key: 'off',
        value: function off() {
            if (this.wrapp.classList.contains('active')) this.wrapp.classList.remove('active');
            this.isOn = false;
            this.input.checked = false;
        }
    }, {
        key: 'removeItem',
        value: function removeItem() {
            var _this4 = this;

            if (this.arrItems.length) {
                this.arrItems.forEach(function (item, i, array) {
                    if (item.wrapp == _this4.wrapp) {
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

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(381);


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(382);

__webpack_require__(383);

var _lights_manager = __webpack_require__(384);

var _lights = __webpack_require__(132);

var light = new _lights_manager.LightsManager(document.querySelector('.wrapper'));

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LightsManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lights = __webpack_require__(132);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LightsManager = exports.LightsManager = function () {
    function LightsManager(target) {
        _classCallCheck(this, LightsManager);

        this.target = target;
        this.lamps = [];
        this.render();
        this.onOff = 0;
        this.inputCount = 0;
    }

    _createClass(LightsManager, [{
        key: 'render',
        value: function render() {
            this.btnwrapp = document.createElement('div');
            this.btnwrapp.className = 'btnwrapp';
            this.target.appendChild(this.btnwrapp);
            this.renderAddBtn();
            this.renderRemoveBtn();
            this.renderToggleBtn();
        }
    }, {
        key: 'renderAddBtn',
        value: function renderAddBtn() {
            var _this = this;

            this.btn = document.createElement('button');
            this.btn.className = 'all bulb';
            this.btn.textContent = 'add';
            this.btnwrapp.appendChild(this.btn);
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
            this.btnwrapp.appendChild(this.btn);
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
            this.btnwrapp.appendChild(this.btn);
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
            this.inputCount++;
            var lampItem = new _lights.Lights(this.target, this.lamps, this.inputCount);
            this.lamps.push(lampItem);
        }
    }, {
        key: 'removeLamp',
        value: function removeLamp() {
            if (this.lamps.length > 0) {
                var lampItem = this.lamps.pop();
                var temp = this.target.lastChild;
                this.target.removeChild(temp);
            }
        }
    }, {
        key: 'toggleLamps',
        value: function toggleLamps() {
            var _this4 = this;

            this.lamps.forEach(function (item) {
                _this4.onOff = item.isOn || _this4.onOff;
            });
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

/***/ 385:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });