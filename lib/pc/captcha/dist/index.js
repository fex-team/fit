(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("classnames"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "classnames", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["fit-captcha"] = factory(require("react"), require("react-dom"), require("classnames"), require("lodash"));
	else
		root["fit-captcha"] = factory(root["react"], root["react-dom"], root["classnames"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _captcha = __webpack_require__(2);

	var _captcha2 = _interopRequireDefault(_captcha);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _captcha2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames3 = __webpack_require__(5);

	var _classnames4 = _interopRequireDefault(_classnames3);

	var _lodash = __webpack_require__(6);

	var _lodash2 = _interopRequireDefault(_lodash);

	__webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var mockCaptchaUrl = 'http://tieba.baidu.com/cgi-bin/genimg?captchaservice30356335466a34305331354d39494d4b36364b664e536436796f72495143753933662b764345617971302f44367851705763663564746f59634d5054544f4f4e684b5966443151717369744f546d4a6c44453453774866574556515542564e43587835795a2f7a61377a6f765138684d33514a4c4b5a786f4139626e72487a43616c506e714339563473386937324a584747444c4f7957614b594b714f784b5574416b616a554c4d6135632b7a317a70317434626637636454446843754977695a584d436c545464357345536c6c47524e39377744396a334d69426b335869336969496e5764445158324f333937476971677175557a2f476a3976686f32315136345439515944784767592b6652534a36517448745765466852424b5546664c52384e47517133726230766842324c6e2b783758';

	function convertToDataURLviaCanvas(url, callback, outputFormat) {
	    var img = new Image();
	    img.crossOrigin = 'Anonymous';
	    img.onload = function () {
	        var canvas = document.createElement('CANVAS');
	        var ctx = canvas.getContext('2d');
	        var dataURL;
	        canvas.height = this.height;
	        canvas.width = this.width;
	        ctx.drawImage(this, 0, 0);
	        dataURL = canvas.toDataURL(outputFormat);
	        callback(dataURL);
	        canvas = null;
	    };
	    img.src = url;
	}

	function randUrl(url) {
	    return url + '&tag=wap&t=' + (new Date() - 0);
	}

	var Index = (function (_React$Component) {
	    _inherits(Index, _React$Component);

	    function Index(props) {
	        _classCallCheck(this, Index);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Index).call(this, props));

	        _this.state = {
	            // 验证码地址
	            captchaUrl: null,
	            // vcode数组
	            vcode: [],
	            // vbp数组
	            vbp: [],
	            loading: false
	        };
	        return _this;
	    }

	    _createClass(Index, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;

	            // 暴露客户端回调全局变量
	            window.handleFreshCaptcha = function (url) {
	                _this2.handleFreshCaptcha(randUrl(url));
	            };

	            // 是否是模拟模式
	            if (this.props.mock) {
	                this.handleFreshCaptcha(randUrl(mockCaptchaUrl));
	            } else {
	                this.freshCaptcha();
	            }
	        }

	        // 刷新验证码

	    }, {
	        key: 'freshCaptcha',
	        value: function freshCaptcha() {
	            window.location.href = "objc:jsChangeVcode(handleFreshCaptcha)";
	        }

	        // 客户端刷新验证码回调

	    }, {
	        key: 'handleFreshCaptcha',
	        value: function handleFreshCaptcha(url) {
	            var _this3 = this;

	            var vcodeCopy = [];
	            var vbpCopy = [];

	            // 缓存图片，base64编码
	            convertToDataURLviaCanvas(url, function (base64Img) {
	                _this3.setState({
	                    captchaUrl: base64Img,
	                    vcode: vcodeCopy,
	                    vbp: vbpCopy,
	                    loading: false
	                });
	            });
	        }

	        // 点击目标验证码视图

	    }, {
	        key: 'handleTargetImgClick',
	        value: function handleTargetImgClick() {
	            if (this.props.mock) {
	                this.handleFreshCaptcha(randUrl(mockCaptchaUrl));
	            } else {
	                this.freshCaptcha();
	            }
	        }

	        // 选择栅格

	    }, {
	        key: 'selectCaptcha',
	        value: function selectCaptcha(vcode, vbp) {
	            var count = 0;
	            this.state.vcode.map(function (item) {
	                if (item !== null) {
	                    count++;
	                }
	            });

	            // 如果已经有4个了，不会添加
	            if (count === 4) return;

	            var vcodeCopy = _lodash2.default.cloneDeep(this.state.vcode);
	            var vbpCopy = _lodash2.default.cloneDeep(this.state.vbp);

	            // 如果不相等，还是包含，则在当前位置删除
	            if (this.state.vcode.length !== 0 && _lodash2.default.contains(this.state.vcode, vcode)) {
	                var index = _lodash2.default.indexOf(this.state.vcode, vcode);
	                vcodeCopy[index] = null;
	                vbpCopy[index] = null;
	            } else {
	                // 否则从第一个null开始添加
	                var nullIndex = _lodash2.default.indexOf(this.state.vcode, null);
	                if (nullIndex === -1) {
	                    vcodeCopy.push(vcode);
	                    vbpCopy.push(vbp);
	                } else {
	                    vcodeCopy[nullIndex] = vcode;
	                    vbpCopy[nullIndex] = vbp;
	                }
	            }

	            this.setState({
	                vcode: vcodeCopy,
	                vbp: vbpCopy
	            });
	        }

	        // 点击验证码栅格

	    }, {
	        key: 'handleCaptchaClick',
	        value: function handleCaptchaClick(vcode, vbp) {
	            var _this4 = this;

	            this.selectCaptcha(vcode, vbp);

	            setTimeout(function () {
	                var count = 0;
	                _this4.state.vcode.map(function (item) {
	                    if (item !== null) {
	                        count++;
	                    }
	                });

	                if (count === 4) {
	                    _this4.submit();
	                }
	            });
	        }

	        // 删除

	    }, {
	        key: 'handleDeleteClick',
	        value: function handleDeleteClick() {
	            if (this.state.vcode.length === 0) return;

	            var vcodeCopy = _lodash2.default.cloneDeep(this.state.vcode);
	            var vbpCopy = _lodash2.default.cloneDeep(this.state.vbp);
	            vcodeCopy.pop();
	            vbpCopy.pop();
	            this.setState({
	                vcode: vcodeCopy,
	                vbp: vbpCopy
	            });
	        }

	        // 提交

	    }, {
	        key: 'submit',
	        value: function submit() {
	            window.location.href = 'objc:jsSubmit(handleFreshCaptcha,' + this.state.vcode.join('') + ')';
	            this.setState({
	                loading: true
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this5 = this;

	            var backgroundImageStyle = {
	                backgroundImage: this.state.captchaUrl ? 'url(' + this.state.captchaUrl + ')' : null
	            };

	            // 验证码 3x3 vcode列表
	            var vcodeArray = [['00000000', '00010000', '00020000'], ['00000001', '00010001', '00020001'], ['00000002', '00010002', '00020002']];

	            var vbp = 0;
	            var Grid = vcodeArray.map(function (row, index) {
	                var Col = row.map(function (col, index) {
	                    var nowVbp = vbp++;
	                    var btnClass = (0, _classnames4.default)({
	                        'btn': true,
	                        'active': _lodash2.default.contains(_this5.state.vcode, col)
	                    });
	                    var vbpClass = (0, _classnames4.default)(_defineProperty({
	                        'img': true
	                    }, 'vbp-' + nowVbp, true));
	                    return _react2.default.createElement(
	                        'div',
	                        { className: btnClass,
	                            key: index,
	                            onTouchStart: _this5.handleCaptchaClick.bind(_this5, col, nowVbp) },
	                        _react2.default.createElement('span', { style: backgroundImageStyle,
	                            className: vbpClass })
	                    );
	                });
	                return _react2.default.createElement(
	                    'div',
	                    { key: index,
	                        className: 'line' },
	                    Col
	                );
	            });

	            var Placeholders = [0, 1, 2, 3].map(function (item, index) {
	                var placeholderClass = (0, _classnames4.default)(_defineProperty({
	                    'placeholder': true,
	                    'small-img': _this5.state.vcode.length > item
	                }, 'vbp-small-' + _this5.state.vbp[item], _this5.state.vcode.length > item));
	                var placeholderStyle = {
	                    backgroundImage: _this5.state.vcode.length > item && _this5.state.vbp[item] !== null ? 'url(' + _this5.state.captchaUrl + ')' : null
	                };
	                return _react2.default.createElement('div', { key: index,
	                    style: placeholderStyle,
	                    className: placeholderClass });
	            });

	            return _react2.default.createElement(
	                'div',
	                { className: 'lib-pc-captcha-src-captcha' },
	                this.state.loading ? _react2.default.createElement('div', { className: 'loading' }) : null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'input-label' },
	                    '输入验证码'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'input-container' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'input-box' },
	                        Placeholders,
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'placeholder' },
	                            _react2.default.createElement(
	                                'a',
	                                { className: 'delete-btn',
	                                    onTouchStart: this.handleDeleteClick.bind(this) },
	                                _react2.default.createElement('span', { className: 'img' })
	                            )
	                        )
	                    )
	                ),
	                _react2.default.createElement('div', { className: 'target-img',
	                    onTouchStart: this.handleTargetImgClick.bind(this),
	                    style: backgroundImageStyle }),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'grid-conatiner' },
	                    Grid
	                )
	            );
	        }
	    }]);

	    return Index;
	})(_react2.default.Component);

	exports.default = Index;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/css-path-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/css-path-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".lib-pc-captcha-src-captcha .input-label {\n  height: 30px;\n  width: 100%;\n  display: block;\n  text-align: center;\n  line-height: 30px;\n  color: #999;\n  font-size: 20px;\n  margin-top: 5px; }\n\n.lib-pc-captcha-src-captcha .input-container {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 10px; }\n  .lib-pc-captcha-src-captcha .input-container .input-box {\n    width: 230px;\n    height: 45px;\n    border: 1px solid #cacbcc;\n    border-right: none;\n    background: #fff; }\n    .lib-pc-captcha-src-captcha .input-container .input-box .placeholder {\n      float: left;\n      width: 45px;\n      height: 45px;\n      border-left: 1px solid #cacbcc; }\n      .lib-pc-captcha-src-captcha .input-container .input-box .placeholder:first-child {\n        border: none; }\n      .lib-pc-captcha-src-captcha .input-container .input-box .placeholder:last-child {\n        border-right: 1px solid #cacbcc; }\n  .lib-pc-captcha-src-captcha .input-container .delete-btn {\n    position: absolute;\n    width: 45px;\n    height: 45px;\n    background: #f5f5f5; }\n    .lib-pc-captcha-src-captcha .input-container .delete-btn .img {\n      display: inline-block;\n      width: 16px;\n      height: 16px;\n      background: #cacbcc;\n      margin-top: 13px;\n      position: absolute;\n      right: 12px;\n      border-radius: 1px; }\n      .lib-pc-captcha-src-captcha .input-container .delete-btn .img:before {\n        content: \"+\";\n        left: 9px;\n        top: 0;\n        height: 0;\n        color: white;\n        font-size: 22px;\n        font-family: arial;\n        -webkit-transform: rotate(45deg);\n        position: absolute; }\n      .lib-pc-captcha-src-captcha .input-container .delete-btn .img:after {\n        content: '';\n        position: absolute;\n        left: -16px;\n        border: 8px solid;\n        border-color: transparent #cacbcc transparent transparent; }\n\n.lib-pc-captcha-src-captcha .target-img {\n  width: 231px;\n  height: 60px;\n  margin: 10px auto 0 auto;\n  -webkit-tap-highlight-color: black;\n  background-position: 0px 0px;\n  background-color: #efefef;\n  background-size: 231px 280px; }\n\n.lib-pc-captcha-src-captcha .grid-conatiner {\n  margin-top: 20px;\n  clear: both; }\n  .lib-pc-captcha-src-captcha .grid-conatiner .line {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex; }\n    .lib-pc-captcha-src-captcha .grid-conatiner .line:first-child {\n      border-top: 1px solid #cfd2d8; }\n  .lib-pc-captcha-src-captcha .grid-conatiner .btn {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    height: 70px;\n    border: 1px solid #cfd2d8;\n    border-top: none;\n    text-align: center;\n    -webkit-transition-duration: .3s;\n            transition-duration: .3s; }\n    .lib-pc-captcha-src-captcha .grid-conatiner .btn.active {\n      background: #F3F3F3; }\n    .lib-pc-captcha-src-captcha .grid-conatiner .btn:not(:first-child) {\n      border-left: none; }\n  .lib-pc-captcha-src-captcha .grid-conatiner .img {\n    display: inline-block;\n    background-size: 240px 320px;\n    width: 60px;\n    height: 60px; }\n\n.lib-pc-captcha-src-captcha .vbp-0 {\n  background-position: -24px -77px; }\n\n.lib-pc-captcha-src-captcha .vbp-1 {\n  background-position: -111px -92px; }\n\n.lib-pc-captcha-src-captcha .vbp-2 {\n  background-position: -184px -90px; }\n\n.lib-pc-captcha-src-captcha .vbp-3 {\n  background-position: -19px -156px; }\n\n.lib-pc-captcha-src-captcha .vbp-4 {\n  background-position: -89px -168px; }\n\n.lib-pc-captcha-src-captcha .vbp-5 {\n  background-position: -179px -166px; }\n\n.lib-pc-captcha-src-captcha .vbp-6 {\n  background-position: -21px -246px; }\n\n.lib-pc-captcha-src-captcha .vbp-7 {\n  background-position: -96px -243px; }\n\n.lib-pc-captcha-src-captcha .vbp-8 {\n  background-position: -181px -247px; }\n\n.lib-pc-captcha-src-captcha .small-img {\n  background-size: 180px 240px; }\n\n.lib-pc-captcha-src-captcha .vbp-small-0 {\n  background-position: -18px -57px; }\n\n.lib-pc-captcha-src-captcha .vbp-small-1 {\n  background-position: -83px -69px; }\n\n.lib-pc-captcha-src-captcha .vbp-small-2 {\n  background-position: -137px -65px; }\n\n.lib-pc-captcha-src-captcha .vbp-small-3 {\n  background-position: -16px -118px; }\n\n.lib-pc-captcha-src-captcha .vbp-small-4 {\n  background-position: -67px -123px; }\n\n.lib-pc-captcha-src-captcha .vbp-small-5 {\n  background-position: -133px -125px; }\n\n.lib-pc-captcha-src-captcha .vbp-small-6 {\n  background-position: -15px -182px; }\n\n.lib-pc-captcha-src-captcha .vbp-small-7 {\n  background-position: -70px -183px; }\n\n.lib-pc-captcha-src-captcha .vbp-small-8 {\n  background-position: -135px -181px; }\n\n.lib-pc-captcha-src-captcha .loading {\n  position: absolute;\n  width: 100%;\n  height: 396px;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  background: white;\n  opacity: .6; }\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;