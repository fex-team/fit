(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("classnames"), require("fit-style"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "classnames", "fit-style"], factory);
	else if(typeof exports === 'object')
		exports["fit-switch"] = factory(require("react"), require("classnames"), require("fit-style"));
	else
		root["fit-switch"] = factory(root["react"], root["classnames"], root["fit-style"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_9__) {
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

	var _switch = __webpack_require__(2);

	var _switch2 = _interopRequireDefault(_switch);

	__webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _switch2.default;

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

	var _classnames = __webpack_require__(4);

	var _classnames2 = _interopRequireDefault(_classnames);

	__webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function noop() {}

	var Switch = (function (_React$Component) {
	    _inherits(Switch, _React$Component);

	    function Switch(props) {
	        _classCallCheck(this, Switch);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Switch).call(this, props));

	        var _props = _this.props;
	        var checked = false;
	        if ('checked' in _props) {
	            checked = _props.checked;
	        } else {
	            checked = _props.defaultChecked;
	        }
	        _this.state = {
	            checked: checked
	        };
	        return _this;
	    }

	    _createClass(Switch, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            if ('checked' in nextProps) {
	                this.setState({
	                    checked: nextProps.checked
	                });
	            }
	        }
	    }, {
	        key: 'toggle',
	        value: function toggle() {
	            var checked = !this.state.checked;
	            this.setState({
	                checked: checked
	            });
	            this.props.onChange(checked);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _classNames;

	            var _props2 = this.props;
	            var className = _props2.className;
	            var disabled = _props2.disabled;
	            var style = _props2.style;
	            var checkedChildren = _props2.checkedChildren;
	            var unCheckedChildren = _props2.unCheckedChildren;

	            var checked = this.state.checked;
	            var switchClassName = (0, _classnames2.default)((_classNames = {
	                'lib-pc-switch-src-switch': true
	            }, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, 'checked', checked), _defineProperty(_classNames, 'disabled', disabled), _defineProperty(_classNames, this.props.type || 'info', true), _defineProperty(_classNames, 'size-' + (this.props.size || 'normal'), true), _classNames));

	            var Switch = _react2.default.createElement(
	                'span',
	                { className: switchClassName,
	                    onClick: disabled ? noop : this.toggle.bind(this),
	                    style: style },
	                _react2.default.createElement(
	                    'span',
	                    { className: 'inner' },
	                    checked ? checkedChildren : unCheckedChildren
	                )
	            );

	            if (!_.isEmpty(this.props.label)) {
	                Switch = _react2.default.createElement(
	                    'div',
	                    { className: 'form-container' },
	                    _react2.default.createElement(
	                        'label',
	                        { style: { width: this.props.labelWidth || null },
	                            className: 'form-control-label' },
	                        this.props.label
	                    ),
	                    Switch
	                );
	            }

	            return Switch;
	        }
	    }]);

	    return Switch;
	})(_react2.default.Component);

	exports.default = Switch;

	Switch.defaultProps = {
	    style: {},
	    checkedChildren: null,
	    unCheckedChildren: null,
	    className: '',
	    defaultChecked: false,
	    onChange: noop
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
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports


	// module
	exports.push([module.id, ".lib-pc-switch-src-switch {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  vertical-align: middle;\n  border: 1px solid #eee;\n  background-color: white;\n  cursor: pointer;\n  -webkit-transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .lib-pc-switch-src-switch .inner {\n    color: #fff;\n    position: absolute;\n    left: 0; }\n    .lib-pc-switch-src-switch .inner:after {\n      position: absolute;\n      border-radius: 100%;\n      background-color: #fff;\n      content: \" \";\n      cursor: pointer;\n      -webkit-transition: left 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n      transition: left 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);\n      box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25); }\n  .lib-pc-switch-src-switch.size-normal {\n    width: 44px;\n    height: 22px;\n    line-height: 20px;\n    border-radius: 20px 20px; }\n    .lib-pc-switch-src-switch.size-normal .inner {\n      font-size: 12px; }\n      .lib-pc-switch-src-switch.size-normal .inner:after {\n        width: 18px;\n        height: 18px;\n        left: 0;\n        top: 1px; }\n  .lib-pc-switch-src-switch.size-small {\n    width: 30px;\n    height: 15px;\n    line-height: 15px;\n    border-radius: 15px 15px; }\n    .lib-pc-switch-src-switch.size-small .inner {\n      font-size: 10px; }\n      .lib-pc-switch-src-switch.size-small .inner:after {\n        width: 12px;\n        height: 12px;\n        left: 0px;\n        top: 0px; }\n  .lib-pc-switch-src-switch.size-large {\n    width: 60px;\n    height: 30px;\n    line-height: 30px;\n    border-radius: 30px 30px; }\n    .lib-pc-switch-src-switch.size-large .inner {\n      font-size: 10px; }\n      .lib-pc-switch-src-switch.size-large .inner:after {\n        width: 26px;\n        height: 26px;\n        left: 0;\n        top: 1px; }\n  .lib-pc-switch-src-switch.checked.size-normal .inner:after {\n    left: 25px; }\n  .lib-pc-switch-src-switch.checked.size-small .inner:after {\n    left: 17px; }\n  .lib-pc-switch-src-switch.checked.size-large .inner:after {\n    left: 33px; }\n  .lib-pc-switch-src-switch.checked.info {\n    background-color: #23b7e5;\n    border-color: #23b7e5; }\n  .lib-pc-switch-src-switch.checked.success {\n    background-color: #27c24c;\n    border-color: #27c24c; }\n  .lib-pc-switch-src-switch.checked.primary {\n    background-color: #7266ba;\n    border-color: #7266ba; }\n  .lib-pc-switch-src-switch.checked.danger {\n    background-color: #f05050;\n    border-color: #f05050; }\n  .lib-pc-switch-src-switch.checked.warning {\n    background-color: #fad733;\n    border-color: #fad733; }\n  .lib-pc-switch-src-switch.checked.dark {\n    background-color: #3a3f51;\n    border-color: #3a3f51; }\n  .lib-pc-switch-src-switch.disabled {\n    background: #eee; }\n    .lib-pc-switch-src-switch.disabled .inner:after {\n      background-color: #eee; }\n", ""]);

	// exports


/***/ },
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }
/******/ ])
});
;