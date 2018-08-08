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
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ({

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(130);


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(131);

__webpack_require__(132);

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cards = __webpack_require__(133);

var app = document.querySelector("#app");
var cards = new _cards.Cards(app);

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Cards = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ajax = __webpack_require__(80);

var _config = __webpack_require__(81);

var _card = __webpack_require__(134);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cards = exports.Cards = function () {
    function Cards(target) {
        _classCallCheck(this, Cards);

        this.target = target;
        this.render();
        this.count = 0;
    }

    _createClass(Cards, [{
        key: 'countInc',
        value: function countInc(bool) {
            if (bool) {
                this.count++;
            } else {
                this.count--;
            }
            console.log("count", this.count);
        }
    }, {
        key: 'countGet',
        value: function countGet() {
            return this.count;
        }
    }, {
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
            this.btn.addEventListener('click', function () {
                _this.output.innerHTML = "";
                _this.output.appendChild(_this.ul);
                _this.ul.innerHTML = '<img src="https://vitaminvp.github.io/WA/client/assets/images/ajax-loader.gif">';
                _this.target.appendChild(_this.output);
                _ajax.Ajax.get(_config.appConfig.apiUrl + 'api/v1/items', _this.renderItems.bind(_this));
            });
        }
    }, {
        key: 'renderItems',
        value: function renderItems(ajaxRespons) {
            this.output.innerHTML = "";
            var width = ajaxRespons.width,
                height = ajaxRespons.height;

            console.log(width, height);
            var docFragment = document.createDocumentFragment();
            for (var i = 0; i < height; i++) {
                var div = document.createElement('div');
                for (var j = 0; j < width; j++) {
                    new _card.Card(div, this.countInc.bind(this), this.countGet.bind(this));
                }
                docFragment.appendChild(div);
            }
            this.output.appendChild(docFragment);
        }
    }]);

    return Cards;
}();

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Card = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ajax = __webpack_require__(80);

var _config = __webpack_require__(81);

__webpack_require__(135);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var generateId = function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
};

var Card = exports.Card = function () {
    function Card(target, callback, getter) {
        _classCallCheck(this, Card);

        this.target = target;
        this.callback = callback;
        this.getter = getter;
        this.render();
        this.id = "";
    }

    _createClass(Card, [{
        key: 'render',
        value: function render() {
            _ajax.Ajax.get(_config.appConfig.apiUrl + 'api/v1/pictures', this.renderItems.bind(this));
        }
    }, {
        key: 'renderItems',
        value: function renderItems(ajaxRespons) {
            var _this = this;

            this.Respons = Array.from(ajaxRespons);
            var div = document.createElement('div');
            div.id = generateId();
            var imgsrc = Math.floor(Math.random() * this.Respons.length);
            div.addEventListener('click', function () {
                if (_this.id !== div.id) {
                    if (_this.getter() < _config.appConfig.magicNumber) {
                        var item = div;
                        console.log(div.firstChild.src);
                        if (item.classList.contains('on')) {
                            item.classList.remove('on');
                        } else {
                            item.classList.add('on');
                            _this.callback(true);
                            var timer = setTimeout(function () {
                                item.classList.remove('on');
                                _this.callback(false);
                                _this.id = "";
                            }, 1500);
                        }
                        _this.id = div.id;
                    }
                }
            });
            var url = _config.appConfig.apiUrl + this.Respons[imgsrc];
            div.innerHTML = '<img src=' + url + ' alt=\'alt\'>';
            this.target.appendChild(div);
        }
    }]);

    return Card;
}();

/***/ }),

/***/ 135:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 80:
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

            xhr.open('GET', url);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        responseCallback(JSON.parse(xhr.response));
                    }
                }
            };
        }
    }]);

    return Ajax;
}();

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var appConfig = exports.appConfig = {
    apiUrl: 'https://ec-test-react.herokuapp.com/',
    magicNumber: 2
};

/***/ })

/******/ });