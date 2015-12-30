(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"), require("classnames"), require("jquery"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom", "classnames", "jquery", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["fit-collapse"] = factory(require("react"), require("react-dom"), require("classnames"), require("jquery"), require("lodash"));
	else
		root["fit-collapse"] = factory(root["react"], root["react-dom"], root["classnames"], root["jquery"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_12__) {
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
	exports.CollPanel = exports.Collapse = undefined;

	var _collapse = __webpack_require__(2);

	var _collapse2 = _interopRequireDefault(_collapse);

	var _panel = __webpack_require__(4);

	var _panel2 = _interopRequireDefault(_panel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Collapse = _collapse2.default;
	exports.CollPanel = _panel2.default;

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

	var _panel = __webpack_require__(4);

	var _panel2 = _interopRequireDefault(_panel);

	var _lodash = __webpack_require__(12);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var arrayOrStrEqual = function arrayOrStrEqual(item, arr) {
	    if (_lodash2.default.isArray(arr)) {
	        return _lodash2.default.includes(arr, item);
	    }
	    return item === arr;
	};

	var Collapse = (function (_React$Component) {
	    _inherits(Collapse, _React$Component);

	    function Collapse(props) {
	        _classCallCheck(this, Collapse);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collapse).call(this, props));

	        var activeKey = _this.props.activeKey || _this.props.defaultActiveKey;
	        if (!_this.props.accordion && !_lodash2.default.isArray(activeKey)) {
	            activeKey = [activeKey];
	        }

	        _this.state = {
	            activeKey: activeKey
	        };
	        return _this;
	    }

	    _createClass(Collapse, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if ('activeKey' in nextProps) {
	                this.setState({
	                    activeKey: nextProps.activeKey
	                });
	            }
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(key) {
	            var _this2 = this;

	            var activeKey = this.state.activeKey;
	            if (!this.props.accordion) {
	                if (_lodash2.default.isArray(activeKey)) {
	                    if (_lodash2.default.includes(activeKey, key)) {
	                        _lodash2.default.pull(activeKey, key);
	                    } else {
	                        activeKey.push(key);
	                    }
	                } else {
	                    activeKey = key;
	                }
	            } else {
	                if (activeKey === key) {
	                    activeKey = null;
	                } else {
	                    activeKey = key;
	                }
	            }

	            this.setState({
	                activeKey: activeKey
	            }, function () {
	                _this2.props.onChange(key);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            var Children = _react2.default.Children.map(this.props.children, function (item) {
	                return _react2.default.cloneElement(item, {
	                    active: arrayOrStrEqual(item.key, _this3.state.activeKey),
	                    onChange: _this3.handleChange.bind(_this3),
	                    key: item.key,
	                    _key: item.key
	                });
	            });

	            return _react2.default.createElement(
	                'div',
	                { style: this.props.style },
	                Children
	            );
	        }
	    }]);

	    return Collapse;
	})(_react2.default.Component);

	exports.default = Collapse;

	Collapse.defaultProps = {
	    accordion: false,
	    onChange: function onChange(key) {}
	};

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

	var _reactDom = __webpack_require__(5);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _jquery = __webpack_require__(7);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CollPanel = (function (_React$Component) {
	    _inherits(CollPanel, _React$Component);

	    function CollPanel(props) {
	        _classCallCheck(this, CollPanel);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CollPanel).call(this, props));

	        _this.state = {
	            contentHeight: 0,
	            finish: true
	        };

	        _this.toggleTimeout = null;
	        return _this;
	    }

	    _createClass(CollPanel, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.$dom = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this));
	            this.setState({
	                contentHeight: this.$dom.find('#content').outerHeight()
	            });
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps() {
	            this.setState({
	                contentHeight: this.$dom.find('#content').outerHeight()
	            });
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick() {
	            var _this2 = this;

	            this.setState({
	                finish: false
	            }, function () {
	                _this2.props.onChange(_this2.props._key);
	            });

	            if (this.toggleTimeout) {
	                clearTimeout(this.toggleTimeout);
	            }

	            this.toggleTimeout = setTimeout(function () {
	                _this2.setState({
	                    finish: true
	                });
	            }, 300);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var panelCollapseClass = (0, _classnames2.default)({
	                'panel-collapse': true,
	                'collapse': true,
	                'in': true,
	                'show': this.props.active
	            });

	            var rightChevronClass = (0, _classnames2.default)({
	                'fa': true,
	                'fa-chevron-right': true,
	                'rotate-pre': true,
	                'rotate': this.props.active
	            });

	            // 设置height属性
	            var height = null;
	            height = this.props.active ? this.state.contentHeight : null;
	            if (this.state.finish) {
	                if (this.props.active) {
	                    height = 'auto';
	                } else {
	                    height = 0;
	                }
	            }
	            var contentContainerStyle = {
	                height: height
	            };

	            this.height = height;

	            return _react2.default.createElement(
	                'div',
	                { className: 'lib-pc-collapse-src-panel panel panel-default' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'panel-heading', onClick: this.handleClick.bind(this) },
	                    _react2.default.createElement('i', { className: rightChevronClass, style: { marginRight: 5 } }),
	                    this.props.header
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: panelCollapseClass,
	                        style: contentContainerStyle },
	                    _react2.default.createElement(
	                        'div',
	                        { style: this.props.style, id: 'content' },
	                        this.props.children
	                    )
	                )
	            );
	        }
	    }]);

	    return CollPanel;
	})(_react2.default.Component);

	exports.default = CollPanel;

	CollPanel.defaultProps = {
	    active: false,
	    key: null
	};

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
	exports.push([module.id, ".lib-pc-collapse-src-panel {\n  background-color: #fff;\n  border: 1px solid #dee5e7;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .lib-pc-collapse-src-panel.panel-default:not(:first-child) {\n    border-top: none; }\n\n.lib-pc-collapse-src-panel .panel-collapse {\n  -webkit-transition: all .3s ease-in-out;\n  transition: all .3s ease-in-out;\n  overflow: hidden;\n  height: 0; }\n\n.lib-pc-collapse-src-panel .panel-heading {\n  border-color: #edf1f2;\n  padding: 10px;\n  background-color: #f6f8f8;\n  cursor: pointer; }\n\n.lib-pc-collapse-src-panel .rotate-pre {\n  -webkit-transition: all .3s;\n  transition: all .3s; }\n  .lib-pc-collapse-src-panel .rotate-pre.rotate {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n", ""]);

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
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }
/******/ ])
});
;