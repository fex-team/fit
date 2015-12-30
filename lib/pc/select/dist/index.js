(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("classnames"), require("jquery"), require("lodash"), require("fit-style"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "classnames", "jquery", "lodash", "fit-style"], factory);
	else if(typeof exports === 'object')
		exports["fit-select"] = factory(require("react"), require("react-dom"), require("classnames"), require("jquery"), require("lodash"), require("fit-style"));
	else
		root["fit-select"] = factory(root["react"], root["react-dom"], root["classnames"], root["jquery"], root["lodash"], root["fit-style"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_17__) {
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
	exports.OptGroup = exports.Option = exports.Select = undefined;

	var _select = __webpack_require__(2);

	var _select2 = _interopRequireDefault(_select);

	var _option = __webpack_require__(15);

	var _option2 = _interopRequireDefault(_option);

	var _optGroup = __webpack_require__(16);

	var _optGroup2 = _interopRequireDefault(_optGroup);

	__webpack_require__(17);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Select = _select2.default;
	exports.Option = _option2.default;
	exports.OptGroup = _optGroup2.default;

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

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _jquery = __webpack_require__(6);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _lodash = __webpack_require__(7);

	var _lodash2 = _interopRequireDefault(_lodash);

	__webpack_require__(8);

	__webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Select = (function (_React$Component) {
	    _inherits(Select, _React$Component);

	    function Select(props) {
	        _classCallCheck(this, Select);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Select).call(this, props));

	        _this.state = {
	            open: false,
	            value: _this.props.value,
	            searchValue: ''
	        };

	        // 点击document
	        _this.handleDocumentClick = function (event) {
	            if (!_jquery2.default.contains(_this.dom, event.target)) {
	                _this.setState({
	                    open: false
	                });
	            }
	        };
	        return _this;
	    }

	    _createClass(Select, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.dom = _reactDom2.default.findDOMNode(this);
	            (0, _jquery2.default)(document).on('click', this.handleDocumentClick);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            (0, _jquery2.default)(document).off('click', this.handleDocumentClick);
	        }

	        // 选择框点击

	    }, {
	        key: 'handleSelectClick',
	        value: function handleSelectClick() {
	            var _this2 = this;

	            this.setState({
	                open: !this.state.open
	            }, function () {
	                if (_this2.state.open) {
	                    (0, _jquery2.default)(_this2.dom).find('#j-search').focus();
	                }
	            });
	        }

	        // 选择栏目点击

	    }, {
	        key: 'handleClick',
	        value: function handleClick(value) {
	            var _this3 = this;

	            this.setState({
	                open: false,
	                value: value
	            }, function () {
	                _this3.props.onChange(value);
	            });
	        }

	        // 搜索框改变

	    }, {
	        key: 'handleSearchChange',
	        value: function handleSearchChange(event) {
	            this.setState({
	                searchValue: event.target.value
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            var chosenDropStyle = {
	                display: this.state.open ? null : 'none',
	                left: 0,
	                width: this.props.width
	            };

	            var chosenSingleClass = (0, _classnames2.default)({
	                'chosen-single': true,
	                'active': this.state.open
	            });

	            // 搜索框
	            var Search = null;
	            if (this.props.search === true) {
	                Search = _react2.default.createElement(
	                    'div',
	                    { className: 'chosen-search' },
	                    _react2.default.createElement('input', { id: 'j-search', className: 'form-control search-input', type: 'text',
	                        value: this.state.searchValue, autoComplete: 'off',
	                        onChange: this.handleSearchChange.bind(this) })
	                );
	            }

	            // 循环子元素,同时获取value,同时判断search
	            var valueLabel = "";
	            var Children = _react2.default.Children.map(this.props.children, function (item, index) {
	                var active = false;
	                if (item.props.value === _this4.state.value) {
	                    valueLabel = item.props.children;
	                    active = true;
	                }

	                if (_lodash2.default.isArray(item.props.children)) {
	                    item.props.children.map(function (childItem) {
	                        if (childItem.props.value === _this4.state.value) {
	                            valueLabel = childItem.props.children;
	                            active = true;
	                        }
	                    });
	                }

	                return _react2.default.cloneElement(item, {
	                    onClick: _this4.handleClick.bind(_this4),
	                    key: index,
	                    active: active,
	                    activeValue: _this4.state.value,
	                    searchValue: _this4.state.searchValue
	                });
	            });

	            var chosenContainerClass = (0, _classnames2.default)({
	                'chosen-container': true,
	                'chosen-container-single': true,
	                'simple': this.props.simple
	            });

	            var SelectContent = _react2.default.createElement(
	                'div',
	                { className: 'lib-pc-select-src-select', style: { width: this.props.width } },
	                _react2.default.createElement(
	                    'div',
	                    { className: chosenContainerClass, style: { width: this.props.simple ? null : this.props.width } },
	                    _react2.default.createElement(
	                        'a',
	                        { className: chosenSingleClass, tabIndex: '-1',
	                            onClick: this.handleSelectClick.bind(this) },
	                        _react2.default.createElement(
	                            'span',
	                            null,
	                            valueLabel
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            null,
	                            _react2.default.createElement('b', null)
	                        )
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { id: 'j-chosen', className: 'chosen-drop', style: chosenDropStyle },
	                        Search ? Search : null,
	                        _react2.default.createElement(
	                            'ul',
	                            { className: 'chosen-results' },
	                            Children
	                        )
	                    )
	                )
	            );

	            if (!_lodash2.default.isEmpty(this.props.label)) {
	                return _react2.default.createElement(
	                    'div',
	                    { style: this.props.style, className: 'form-container' },
	                    _react2.default.createElement(
	                        'label',
	                        { style: { width: this.props.labelWidth || null },
	                            className: 'form-control-label' },
	                        this.props.label
	                    ),
	                    SelectContent
	                );
	            }

	            if (!_lodash2.default.isEmpty(this.props.addonLeft) || !_lodash2.default.isEmpty(this.props.addonRight)) {
	                return _react2.default.createElement(
	                    'form',
	                    { style: this.props.style, className: 'form-inline' },
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'form-group' },
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'input-group' },
	                            _lodash2.default.isEmpty(this.props.addonLeft) ? null : _react2.default.createElement(
	                                'div',
	                                { className: 'input-group-addon' },
	                                this.props.addonLeft
	                            ),
	                            SelectContent,
	                            _lodash2.default.isEmpty(this.props.addonRight) ? null : _react2.default.createElement(
	                                'div',
	                                { className: 'input-group-addon' },
	                                this.props.addonRight
	                            )
	                        )
	                    )
	                );
	            }

	            return _react2.default.cloneElement(SelectContent, {
	                style: this.props.style
	            });
	        }
	    }]);

	    return Select;
	})(_react2.default.Component);

	exports.default = Select;

	Select.defaultProps = {
	    width: 200,
	    style: {},
	    onChange: function onChange(value) {},
	    search: false,
	    simple: false
	};

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
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".lib-pc-select-src-select {\n  display: inline-block; }\n  .lib-pc-select-src-select .chosen-single {\n    -webkit-transition: border linear .2s, box-shadow linear .2s;\n    transition: border linear .2s, box-shadow linear .2s; }\n    .lib-pc-select-src-select .chosen-single.active {\n      border: 1px solid #66afe9 !important;\n      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6) !important; }\n\n.lib-pc-select-src-select .search-input {\n  padding: 2px 10px !important; }\n  .lib-pc-select-src-select .search-input:focus {\n    border-color: #66afe9 !important; }\n\n.lib-pc-select-src-select .group-option .active {\n  color: #f05050; }\n\n.lib-pc-select-src-select .chosen-container {\n  cursor: pointer; }\n\n.lib-pc-select-src-select .simple .chosen-single {\n  border: none !important;\n  box-shadow: none !important; }\n\n.lib-pc-select-src-select .simple .chosen-drop {\n  border: none !important; }\n", ""]);

	// exports


/***/ },
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/css-path-loader/index.js!./chosen.scss", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/autoprefixer-loader/index.js!./../../../../../node_modules/sass-loader/index.js!./../../../../../node_modules/css-path-loader/index.js!./chosen.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".lib-pc-select-src-select .chosen-select {\n  width: 100%; }\n\n.lib-pc-select-src-select .chosen-select-deselect {\n  width: 100%; }\n\n.lib-pc-select-src-select .chosen-container {\n  display: inline-block;\n  font-size: 14px;\n  position: relative;\n  vertical-align: middle; }\n\n.lib-pc-select-src-select .chosen-container .chosen-drop {\n  background: #ffffff;\n  border: 1px solid #cccccc;\n  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.25);\n  margin-top: -1px;\n  position: absolute;\n  top: 100%;\n  left: -9000px;\n  z-index: 1060; }\n\n.lib-pc-select-src-select .chosen-container.chosen-with-drop .chosen-drop {\n  left: 0;\n  right: 0; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results {\n  color: #555555;\n  margin: 0;\n  max-height: 240px;\n  padding: 0;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results li {\n  display: none;\n  line-height: 1.42857143;\n  list-style: none;\n  margin: 0;\n  padding: 5px 6px; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results li em {\n  background: #feffde;\n  font-style: normal; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results li.group-result {\n  display: list-item;\n  cursor: default;\n  color: #999;\n  font-weight: bold;\n  padding: 10px 6px; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results li.group-option {\n  padding-left: 15px; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results li.active-result {\n  cursor: pointer;\n  display: list-item; }\n  .lib-pc-select-src-select .chosen-container .chosen-results li.active-result:hover {\n    color: white;\n    background-color: #5AA3E2; }\n  .lib-pc-select-src-select .chosen-container .chosen-results li.active-result.active {\n    color: white;\n    background-color: #337ab7; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results li.highlighted {\n  background-color: #337ab7;\n  background-image: none;\n  color: white; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results li.highlighted em {\n  background: transparent; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results li.disabled-result {\n  display: list-item;\n  color: #777777; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results .no-results {\n  background: #eeeeee;\n  display: list-item; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results-scroll {\n  background: white;\n  margin: 0 4px;\n  position: absolute;\n  text-align: center;\n  width: 321px;\n  z-index: 1; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results-scroll span {\n  display: inline-block;\n  height: 1.42857143px;\n  text-indent: -5000px;\n  width: 9px; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results-scroll-down {\n  bottom: 0; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results-scroll-down span {\n  background: url(" + __webpack_require__(14) + ") no-repeat -4px -3px; }\n\n.lib-pc-select-src-select .chosen-container .chosen-results-scroll-up span {\n  background: url(" + __webpack_require__(14) + ") no-repeat -22px -3px; }\n\n.lib-pc-select-src-select .chosen-container-single .chosen-single {\n  background-color: #ffffff;\n  background-clip: padding-box;\n  border: 1px solid #cfdadd;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #555555;\n  display: block;\n  height: 34px;\n  overflow: hidden;\n  line-height: 33px;\n  padding: 0 0 0 8px;\n  position: relative;\n  text-decoration: none;\n  white-space: nowrap; }\n\n.lib-pc-select-src-select .chosen-container-single .chosen-single span {\n  display: block;\n  margin-right: 26px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.lib-pc-select-src-select .chosen-container-single .chosen-single abbr {\n  background: url(" + __webpack_require__(14) + ") right top no-repeat;\n  display: block;\n  font-size: 1px;\n  height: 10px;\n  position: absolute;\n  right: 26px;\n  top: 12px;\n  width: 12px; }\n\n.lib-pc-select-src-select .chosen-container-single .chosen-single abbr:hover {\n  background-position: right -11px; }\n\n.lib-pc-select-src-select .chosen-container-single .chosen-single.chosen-disabled .chosen-single abbr:hover {\n  background-position: right 2px; }\n\n.lib-pc-select-src-select .chosen-container-single .chosen-single div {\n  display: block;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 18px; }\n\n.lib-pc-select-src-select .chosen-container-single .chosen-single div b {\n  background: url(" + __webpack_require__(14) + ") no-repeat 0 7px;\n  display: block;\n  height: 100%;\n  width: 100%; }\n\n.lib-pc-select-src-select .chosen-container-single .chosen-default {\n  color: #777777; }\n\n.lib-pc-select-src-select .chosen-container-single .chosen-search {\n  margin: 0;\n  padding: 3px 4px;\n  position: relative;\n  white-space: nowrap;\n  z-index: 1000; }\n\n.lib-pc-select-src-select .chosen-container-single .chosen-search input[type=\"text\"] {\n  background: url(" + __webpack_require__(14) + ") no-repeat 100% -20px, #ffffff;\n  border: 1px solid #cccccc;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  margin: 1px 0;\n  padding: 0 20px 4px 4px;\n  width: 100%; }\n\n.lib-pc-select-src-select .chosen-container-single .chosen-drop {\n  margin-top: -1px;\n  background-clip: padding-box; }\n\n.lib-pc-select-src-select .chosen-container-single-nosearch .chosen-search input {\n  position: absolute;\n  left: -9000px; }\n\n.lib-pc-select-src-select .chosen-container-multi .chosen-choices {\n  background-color: #ffffff;\n  border: 1px solid #cccccc;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  cursor: text;\n  height: auto !important;\n  height: 1%;\n  margin: 0;\n  overflow: hidden;\n  padding: 0;\n  position: relative; }\n\n.lib-pc-select-src-select .chosen-container-multi .chosen-choices li {\n  float: left;\n  list-style: none; }\n\n.lib-pc-select-src-select .chosen-container-multi .chosen-choices .search-field {\n  margin: 0;\n  padding: 0;\n  white-space: nowrap; }\n\n.lib-pc-select-src-select .chosen-container-multi .chosen-choices .search-field input[type=\"text\"] {\n  background: transparent !important;\n  border: 0 !important;\n  box-shadow: none;\n  color: #555555;\n  height: 32px;\n  margin: 0;\n  padding: 4px;\n  outline: 0; }\n\n.lib-pc-select-src-select .chosen-container-multi .chosen-choices .search-field .default {\n  color: #999; }\n\n.lib-pc-select-src-select .chosen-container-multi .chosen-choices .search-choice {\n  background-clip: padding-box;\n  background-color: #eeeeee;\n  border: 1px solid #cccccc;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  color: #333333;\n  cursor: default;\n  line-height: 13px;\n  margin: 6px 0 3px 5px;\n  padding: 3px 20px 3px 5px;\n  position: relative; }\n\n.lib-pc-select-src-select .chosen-container-multi .chosen-choices .search-choice .search-choice-close {\n  background: url(" + __webpack_require__(14) + ") right top no-repeat;\n  display: block;\n  font-size: 1px;\n  height: 10px;\n  position: absolute;\n  right: 4px;\n  top: 5px;\n  width: 12px;\n  cursor: pointer; }\n\n.lib-pc-select-src-select .chosen-container-multi .chosen-choices .search-choice .search-choice-close:hover {\n  background-position: right -11px; }\n\n.lib-pc-select-src-select .chosen-container-multi .chosen-choices .search-choice-focus {\n  background: #d4d4d4; }\n\n.lib-pc-select-src-select .chosen-container-multi .chosen-choices .search-choice-focus .search-choice-close {\n  background-position: right -11px; }\n\n.lib-pc-select-src-select .chosen-container-multi .chosen-results {\n  margin: 0 0 0 0;\n  padding: 0; }\n\n.lib-pc-select-src-select .chosen-container-active .chosen-single {\n  border: 1px solid #66afe9;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6);\n  -webkit-transition: border linear .2s, box-shadow linear .2s;\n  transition: border linear .2s, box-shadow linear .2s; }\n\n.lib-pc-select-src-select .chosen-container-active.chosen-with-drop .chosen-single {\n  background-color: #ffffff;\n  border: 1px solid #66afe9;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6);\n  -webkit-transition: border linear .2s, box-shadow linear .2s;\n  transition: border linear .2s, box-shadow linear .2s; }\n\n.lib-pc-select-src-select .chosen-container-active.chosen-with-drop .chosen-single div {\n  background: transparent;\n  border-left: none; }\n\n.lib-pc-select-src-select .chosen-container-active.chosen-with-drop .chosen-single div b {\n  background-position: -18px 7px; }\n\n.lib-pc-select-src-select .chosen-container-active .chosen-choices {\n  border: 1px solid #66afe9;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6);\n  -webkit-transition: border linear .2s, box-shadow linear .2s;\n  transition: border linear .2s, box-shadow linear .2s; }\n\n.lib-pc-select-src-select .chosen-container-active .chosen-choices .search-field input[type=\"text\"] {\n  color: #111 !important; }\n\n.lib-pc-select-src-select .chosen-disabled {\n  cursor: default;\n  opacity: 0.5 !important; }\n\n.lib-pc-select-src-select .chosen-disabled .chosen-single {\n  cursor: default; }\n\n.lib-pc-select-src-select .chosen-disabled .chosen-choices .search-choice .search-choice-close {\n  cursor: default; }\n\n.lib-pc-select-src-select .chosen-rtl {\n  text-align: right; }\n\n.lib-pc-select-src-select .chosen-rtl .chosen-single {\n  padding: 0 8px 0 0;\n  overflow: visible; }\n\n.lib-pc-select-src-select .chosen-rtl .chosen-single span {\n  margin-left: 26px;\n  margin-right: 0;\n  direction: rtl; }\n\n.lib-pc-select-src-select .chosen-rtl .chosen-single div {\n  left: 7px;\n  right: auto; }\n\n.lib-pc-select-src-select .chosen-rtl .chosen-single abbr {\n  left: 26px;\n  right: auto; }\n\n.lib-pc-select-src-select .chosen-rtl .chosen-choices .search-field input[type=\"text\"] {\n  direction: rtl; }\n\n.lib-pc-select-src-select .chosen-rtl .chosen-choices li {\n  float: right; }\n\n.lib-pc-select-src-select .chosen-rtl .chosen-choices .search-choice {\n  margin: 6px 5px 3px 0;\n  padding: 3px 5px 3px 19px; }\n\n.lib-pc-select-src-select .chosen-rtl .chosen-choices .search-choice .search-choice-close {\n  background-position: right top;\n  left: 4px;\n  right: auto; }\n\n.lib-pc-select-src-select .chosen-rtl.chosen-container-single .chosen-results {\n  margin: 0;\n  padding: 0; }\n\n.lib-pc-select-src-select .chosen-rtl .chosen-results .group-option {\n  padding-left: 0;\n  padding-right: 15px; }\n\n.lib-pc-select-src-select .chosen-rtl.chosen-container-active.chosen-with-drop .chosen-single div {\n  border-right: none; }\n\n.lib-pc-select-src-select .chosen-rtl .chosen-search input[type=\"text\"] {\n  background: url(" + __webpack_require__(14) + ") no-repeat -28px -20px, #ffffff;\n  direction: rtl;\n  padding: 4px 5px 4px 20px; }\n\n.lib-pc-select-src-select .chosen-rtl .chosen-search input[type=\"text\"],\n.lib-pc-select-src-select .chosen-container-single .chosen-single abbr,\n.lib-pc-select-src-select .chosen-container-single .chosen-single div b,\n.lib-pc-select-src-select .chosen-container-single .chosen-search input[type=\"text\"],\n.lib-pc-select-src-select .chosen-container-multi .chosen-choices .search-choice .search-choice-close,\n.lib-pc-select-src-select .chosen-container .chosen-results-scroll-down span,\n.lib-pc-select-src-select .chosen-container .chosen-results-scroll-up span {\n  background-size: 52px 37px !important;\n  background-repeat: no-repeat !important; }\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABKCAMAAABgpuGuAAAAzFBMVEX///8AAACIiIiIiIiIiIhGRkZGRkZGRkaIiIiHh4eHh4eGhoaAgICGhoaHh4dGRkaHh4eHh4eIiIiHh4eIiIiHh4eIiIiHh4eHh4eHh4eHh4eHh4eAgICHh4eHh4eAgICFhYWIiIiHh4eHh4eHh4eIiIiEhISIiIiIiIiIiIiIiIiHh4d0dHSGhoaHh4eDg4NVVVWDg4OHh4eIiIiAgICHh4eHh4eAgICIiIiHh4eIiIiHh4eIiIiHh4eGhoaHh4eHh4eIiIiIiIhGRkYymc+gAAAAQnRSTlMAAP7wMDDwYGCg/VAQcIDz4CDz0PxAz7D1wPv5CGChFEX64t2QHh2N3Jaa2wsTgiEDKYjYDGaZBO8Rqd+LREqM5n7NGqdwAAACCUlEQVR4Xu3V127jMBCFYZ2h5KJiW5a7UzbJ9t57Hb3/O60Ik+JFsMLCwrkI4P+KV/oAYjSMOAEjE8MVm1HECiNVL8VGlSY1jpW8w5OMeil2RxIUe6k9kCA4YD7nOhG8RHYiWCk4YEKI5wdnHuPuQPyr4w8Df7xhm0xgI/2wASpVSwsdvYJm2jbrgraqWwsdvVSXAVp2QJk2ZQCOfiaw9s4a/4bymYVmOXD0w4fSzaIpO6CJ2nTyH1Cfj6BUV9kHwuFa0AFtPbTtBS0ttOyAMm3L+kB2HtbogG79Ap0Bw0ECVzIYBgilMaWH+odhXTeSc+p62LFeetU4VvKOlTgNai8l7kiCEi+1BxIEB0ynXCeCl8hOBCsFB0wIyfTgTBPcEYh/dfxh4I83/4flryD+UmU9E4Q6Hj5Cp06dOoWmvKhURFZFjjYGlBlVC4l+zpjQuahIulikljrnQZmqXN18ePDwz+O9qGQsKDcqm/tnaHrxdCNichJUiOwf4dDrJzvRggStJH32HK6za9GKBKlKgbaXqQgNSl8F6N6CCb3pgFhX95Z3dZXKu/dwXV6nsiJBhcrVx09u6C6I450bkc3FpXW+fN2I7nPaChKV3bfvP37++r0TVR3zlqqKpIelqrYx85kQm+o+SKSHb2WhqsjHTiJBITiJDQWJDAWpIkNBIkJBIkOhSnUShf4C9DyJBLzMYSsAAAAASUVORK5CYII="

/***/ },
/* 15 */
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

	var _lodash = __webpack_require__(7);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var reg = function reg(input) {
	    var flags = 'g';
	    return new RegExp(input, flags);
	};

	var Option = (function (_React$Component) {
	    _inherits(Option, _React$Component);

	    function Option() {
	        _classCallCheck(this, Option);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Option).apply(this, arguments));
	    }

	    _createClass(Option, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            this.props.onClick(this.props.value);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var classname = (0, _classnames2.default)({
	                'active-result': true,
	                'group-option': true,
	                'active': this.props.active
	            });

	            if (!_lodash2.default.isEmpty(this.props.searchValue)) {
	                var regex = reg(this.props.searchValue);
	                if (regex.test(this.props.children)) {
	                    var matchedString = this.props.children.replace(regex, '<span class="active">' + this.props.searchValue + '</span>');
	                    return _react2.default.createElement('li', { onClick: this.handleClick.bind(this), className: classname,
	                        dangerouslySetInnerHTML: { __html: matchedString } });
	                } else {
	                    return null;
	                }
	            }

	            return _react2.default.createElement(
	                'li',
	                { onClick: this.handleClick.bind(this), className: classname },
	                this.props.children
	            );
	        }
	    }]);

	    return Option;
	})(_react2.default.Component);

	exports.default = Option;

	Option.defaultProps = {
	    active: false,
	    searchValue: ''
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OptGroup = (function (_React$Component) {
	    _inherits(OptGroup, _React$Component);

	    function OptGroup() {
	        _classCallCheck(this, OptGroup);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(OptGroup).apply(this, arguments));
	    }

	    _createClass(OptGroup, [{
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            // 循环子元素
	            var Children = _react2.default.Children.map(this.props.children, function (item, index) {
	                var active = false;
	                if (item.props.value === _this2.props.activeValue) {
	                    active = true;
	                }

	                return _react2.default.cloneElement(item, {
	                    onClick: _this2.props.onClick,
	                    key: index,
	                    active: active,
	                    searchValue: _this2.props.searchValue
	                });
	            });

	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'li',
	                    { className: 'group-result' },
	                    this.props.label
	                ),
	                Children
	            );
	        }
	    }]);

	    return OptGroup;
	})(_react2.default.Component);

	exports.default = OptGroup;

	OptGroup.defaultProps = {
	    style: {},
	    searchValue: ''
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }
/******/ ])
});
;