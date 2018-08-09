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

/***/ 163:
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
    function Lights(targetLight, addHandlerFunc) {
        _classCallCheck(this, Lights);

        this.targetLight = targetLight;
        this.isOn = false;
        this.addHandlerFunc = addHandlerFunc;
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
                _this.addHandlerFunc(_this, true);
                _this.removeItem();
            });
            this.targetLight.appendChild(this.wrapp);
            this.renderBtn();
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
                if (_this2.isOn) {
                    _this2.off();
                } else {
                    _this2.on();
                }
                _this2.addHandlerFunc(_this2, false);
            });
        }
    }, {
        key: 'on',
        value: function on() {
            this.wrapp.classList.add('active');
            this.isOn = true;
        }
    }, {
        key: 'off',
        value: function off() {
            this.wrapp.classList.remove('active');
            this.isOn = false;
        }
    }, {
        key: 'removeItem',
        value: function removeItem() {
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

var _lights = __webpack_require__(163);

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

var _lights = __webpack_require__(163);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LightsManager = exports.LightsManager = function () {
    function LightsManager(target) {
        _classCallCheck(this, LightsManager);

        this.target = target;
        this.lamps = [];
        this.render();
        this.onOff = 0;
        this.lampsAreOn = [];
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
            var _this4 = this;

            var lampItem = new _lights.Lights(this.target, function (content, close) {
                _this4.onLampClick(content, close);
            });
            this.lamps.push(lampItem);
        }
    }, {
        key: 'onLampClick',
        value: function onLampClick(lamp, del) {
            var indexOfLampOn = this.lampsAreOn.indexOf(lamp);
            var indexOfLamp = this.lamps.indexOf(lamp);
            if (del) {
                if (lamp.isOn) {
                    this.lampsAreOn.splice(indexOfLampOn, 1);
                }
                this.lamps.splice(indexOfLamp, 1);
            } else {
                if (lamp.isOn) {
                    this.lampsAreOn.push(lamp);
                } else {
                    this.lampsAreOn.splice(indexOfLampOn, 1);
                }
            }
        }
    }, {
        key: 'removeLamp',
        value: function removeLamp() {
            if (this.lamps.length > 0) {
                var lampItem = this.lamps.pop();
                var temp = this.target.lastChild;
                this.target.removeChild(temp);
                var indexOfLamp = this.lampsAreOn.indexOf(lampItem);
                this.lampsAreOn.splice(indexOfLamp, 1);
            }
        }
    }, {
        key: 'toggleLamps',
        value: function toggleLamps() {
            if (this.lampsAreOn.length) {
                this.lampsAreOn.forEach(function (item) {
                    item.off();
                });
                this.lampsAreOn = [];
            } else {
                this.lamps.forEach(function (item) {
                    item.on();
                });
                this.lampsAreOn = Array.from(this.lamps);
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