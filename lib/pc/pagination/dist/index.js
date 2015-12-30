(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"), require("fit-style"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames", "fit-style"], factory);
	else if(typeof exports === 'object')
		exports["fit-pagination"] = factory(require("react"), require("classnames"), require("fit-style"));
	else
		root["fit-pagination"] = factory(root["react"], root["classnames"], root["fit-style"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_13__) {
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

	var _pagination = __webpack_require__(2);

	var _pagination2 = _interopRequireDefault(_pagination);

	__webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _pagination2.default;

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

	var _simple = __webpack_require__(4);

	var _simple2 = _interopRequireDefault(_simple);

	var _allPage = __webpack_require__(10);

	var _allPage2 = _interopRequireDefault(_allPage);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ButtonGroup = (function (_React$Component) {
	    _inherits(ButtonGroup, _React$Component);

	    function ButtonGroup(props) {
	        _classCallCheck(this, ButtonGroup);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ButtonGroup).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(ButtonGroup, [{
	        key: 'render',
	        value: function render() {
	            var child = null;

	            if (this.props.allPage) {
	                child = _react2.default.createElement(_allPage2.default, this.props);
	            } else {
	                child = _react2.default.createElement(_simple2.default, this.props);
	            }

	            return _react2.default.createElement(
	                'div',
	                null,
	                child
	            );
	        }
	    }]);

	    return ButtonGroup;
	})(_react2.default.Component);

	exports.default = ButtonGroup;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SimplePagination = (function (_React$Component) {
	    _inherits(SimplePagination, _React$Component);

	    function SimplePagination(props) {
	        _classCallCheck(this, SimplePagination);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SimplePagination).call(this, props));

	        _this.state = {
	            currentPage: _this.props.defaultPage,
	            activeButtonName: ''
	        };
	        return _this;
	    }

	    // 翻页

	    _createClass(SimplePagination, [{
	        key: 'handleChange',
	        value: function handleChange(page, disable, activeButtonName) {
	            var _this2 = this;

	            if (disable) return;
	            this.setState({
	                currentPage: page,
	                activeButtonName: activeButtonName
	            }, function () {
	                _this2.props.onChange(page);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var beforeClass = (0, _classnames2.default)({
	                'before': true,
	                'disabled': this.state.currentPage === 1 || this.props.loading
	            });

	            var afterClass = (0, _classnames2.default)({
	                'after': true,
	                'disabled': !this.props.next || this.props.loading
	            });

	            var beforeLoading = null;
	            var afterLoading = null;

	            switch (this.state.activeButtonName) {
	                case 'before':
	                    if (!this.props.loading) break;
	                    beforeLoading = _react2.default.createElement('i', { className: 'fa fa-circle-o-notch fa-spin loading' });
	                    break;
	                case 'after':
	                    if (!this.props.loading) break;
	                    afterLoading = _react2.default.createElement('i', { className: 'fa fa-circle-o-notch fa-spin loading' });
	                    break;
	            }

	            return _react2.default.createElement(
	                'nav',
	                { className: 'lib-pc-pagination-src-pagination-simple' },
	                _react2.default.createElement(
	                    'ul',
	                    { className: 'pager' },
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'span',
	                            { onClick: this.handleChange.bind(this, this.state.currentPage - 1, this.state.currentPage === 1 || this.props.loading, 'before'),
	                                className: beforeClass },
	                            beforeLoading ? beforeLoading : null,
	                            '上一页'
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'li',
	                        null,
	                        _react2.default.createElement(
	                            'span',
	                            { onClick: this.handleChange.bind(this, this.state.currentPage + 1, !this.props.next || this.props.loading, 'after'),
	                                className: afterClass },
	                            '下一页',
	                            afterLoading ? afterLoading : null
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return SimplePagination;
	})(_react2.default.Component);

	exports.default = SimplePagination;

	SimplePagination.defaultProps = {
	    defaultPage: 1,
	    onChange: function onChange() {}
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./../../../../../../node_modules/css-path-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./../../../../../../node_modules/css-path-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".lib-pc-pagination-src-pagination-simple .pager {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n  .lib-pc-pagination-src-pagination-simple .pager > li > span {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    color: #23527c;\n    cursor: pointer; }\n    .lib-pc-pagination-src-pagination-simple .pager > li > span:hover {\n      background-color: #eee; }\n    .lib-pc-pagination-src-pagination-simple .pager > li > span.disabled {\n      color: #818a91;\n      cursor: not-allowed;\n      background-color: #fff; }\n  .lib-pc-pagination-src-pagination-simple .pager .loading {\n    width: 14px;\n    height: 14px; }\n  .lib-pc-pagination-src-pagination-simple .pager .before {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-radius: 5px 0 0 5px;\n    border-right: none; }\n    .lib-pc-pagination-src-pagination-simple .pager .before .loading {\n      margin-right: 5px; }\n  .lib-pc-pagination-src-pagination-simple .pager .after {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-radius: 0 5px 5px 0; }\n    .lib-pc-pagination-src-pagination-simple .pager .after .loading {\n      margin-left: 5px; }\n", ""]);

	// exports


/***/ },
/* 8 */
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
/* 9 */
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


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// 根据当前页,总页数生成展示页数列表,...用null表示
	var getMiddleNumbers = function getMiddleNumbers(current, all) {
	    if (all <= 7) {
	        var arrs = [];
	        for (var i = 0; i < all; i++) {
	            arrs.push(i + 1);
	        }
	        return arrs;
	    }

	    if (current <= 4) {
	        return [1, 2, 3, 4, 5, 6, null, all];
	    }

	    if (all - current < 5) {
	        var _arr = [1, null];
	        for (var i = all - 6; i <= all; i++) {
	            _arr.push(i);
	        }
	        return _arr;
	    }

	    var arr = [1, null];
	    for (var i = current - 2; i <= current + 3; i++) {
	        arr.push(i);
	    }
	    arr.push(null);
	    arr.push(all);
	    return arr;
	};

	var AllPage = (function (_React$Component) {
	    _inherits(AllPage, _React$Component);

	    function AllPage(props) {
	        _classCallCheck(this, AllPage);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AllPage).call(this, props));

	        _this.state = {
	            currentPage: _this.props.defaultPage,
	            prevPage: _this.props.defaultPage,
	            activeButtonName: ''
	        };
	        return _this;
	    }

	    _createClass(AllPage, [{
	        key: 'handleChange',
	        value: function handleChange(page, disable, activeButtonName) {
	            var _this2 = this;

	            if (disable) return;
	            var tempPage = this.state.currentPage;
	            this.setState({
	                currentPage: page,
	                prevPage: tempPage,
	                activeButtonName: activeButtonName
	            }, function () {
	                _this2.props.onChange(page);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var beforeClass = (0, _classnames2.default)({
	                'before': true,
	                'disabled': this.state.currentPage === 1 || this.props.loading
	            });

	            var afterClass = (0, _classnames2.default)({
	                'after': true,
	                'disabled': this.state.currentPage === this.props.allPage || this.props.loading
	            });

	            var beforeLoading = null;
	            var afterLoading = null;

	            switch (this.state.activeButtonName) {
	                case 'before':
	                    if (!this.props.loading) break;
	                    beforeLoading = _react2.default.createElement('i', { className: 'fa fa-circle-o-notch fa-spin loading' });
	                    break;
	                case 'after':
	                    if (!this.props.loading) break;
	                    afterLoading = _react2.default.createElement('i', { className: 'fa fa-circle-o-notch fa-spin loading' });
	                    break;
	            }

	            // 中间页数字
	            var middleNum = [];

	            if (!this.props.loading) {
	                middleNum = getMiddleNumbers(this.state.currentPage, this.props.allPage);
	            } else {
	                middleNum = getMiddleNumbers(this.state.prevPage, this.props.allPage);
	            }

	            var middleNumbers = middleNum.map(function (number, index) {
	                if (number !== null) {
	                    var numberClass = (0, _classnames2.default)({
	                        'disabled': _this3.props.loading,
	                        'active': number === _this3.state.currentPage && !_this3.props.loading
	                    });

	                    var numberAfterLoading = null;
	                    if (_this3.state.activeButtonName === number && _this3.props.loading) {
	                        numberAfterLoading = _react2.default.createElement('i', { style: { marginLeft: 5 },
	                            className: 'fa fa-circle-o-notch fa-spin loading' });
	                    }

	                    return _react2.default.createElement(
	                        'div',
	                        { key: index,
	                            className: numberClass,
	                            onClick: _this3.handleChange.bind(_this3, number, _this3.props.loading || number === _this3.state.currentPage, number) },
	                        number,
	                        numberAfterLoading ? numberAfterLoading : null
	                    );
	                } else {
	                    return _react2.default.createElement(
	                        'div',
	                        { key: index,
	                            className: 'disabled' },
	                        '...'
	                    );
	                }
	            });

	            return _react2.default.createElement(
	                'nav',
	                { className: 'lib-pc-pagination-src-pagination-all-page' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'pagination' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: beforeClass,
	                            onClick: this.handleChange.bind(this, this.state.currentPage - 1, this.state.currentPage === 1 || this.props.loading, 'before') },
	                        beforeLoading ? beforeLoading : null,
	                        _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
	                    ),
	                    middleNumbers,
	                    _react2.default.createElement(
	                        'div',
	                        { className: afterClass,
	                            onClick: this.handleChange.bind(this, this.state.currentPage + 1, this.state.currentPage === this.props.allPage || this.props.loading, 'after') },
	                        _react2.default.createElement('i', { className: 'fa fa-chevron-right' }),
	                        afterLoading ? afterLoading : null
	                    )
	                )
	            );
	        }
	    }]);

	    return AllPage;
	})(_react2.default.Component);

	exports.default = AllPage;

	AllPage.defaultProps = {
	    defaultPage: 1,
	    allPage: 10,
	    onChange: function onChange() {}
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(9)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./../../../../../../node_modules/css-path-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../../../../../node_modules/css-loader/index.js!./../../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../../node_modules/sass-loader/index.js!./../../../../../../node_modules/css-path-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports


	// module
	exports.push([module.id, ".lib-pc-pagination-src-pagination-all-page .pagination {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n  .lib-pc-pagination-src-pagination-all-page .pagination div {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    color: #23527c;\n    cursor: pointer;\n    padding: 4px 10px;\n    border: 1px solid #dee5e7; }\n    .lib-pc-pagination-src-pagination-all-page .pagination div:hover {\n      background: whitesmoke; }\n    .lib-pc-pagination-src-pagination-all-page .pagination div.disabled {\n      color: #818a91;\n      cursor: not-allowed;\n      background-color: #fff; }\n  .lib-pc-pagination-src-pagination-all-page .pagination div + div {\n    border-left: none; }\n  .lib-pc-pagination-src-pagination-all-page .pagination .loading {\n    width: 14px;\n    height: 14px; }\n  .lib-pc-pagination-src-pagination-all-page .pagination .before .loading {\n    margin-right: 5px; }\n  .lib-pc-pagination-src-pagination-all-page .pagination .after .loading {\n    margin-left: 5px; }\n  .lib-pc-pagination-src-pagination-all-page .pagination .active {\n    background-color: #337ab7;\n    color: white;\n    cursor: default; }\n    .lib-pc-pagination-src-pagination-all-page .pagination .active:hover {\n      background-color: #337ab7;\n      color: white; }\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }
/******/ ])
});
;