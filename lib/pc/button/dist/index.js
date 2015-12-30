(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fit-style"), require("react"), require("classnames"));
	else if(typeof define === 'function' && define.amd)
		define(["fit-style", "react", "classnames"], factory);
	else if(typeof exports === 'object')
		exports["fit-button"] = factory(require("fit-style"), require("react"), require("classnames"));
	else
		root["fit-button"] = factory(root["fit-style"], root["react"], root["classnames"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
	exports.ButtonGroup = exports.Button = undefined;

	__webpack_require__(2);

	var _button = __webpack_require__(3);

	var _button2 = _interopRequireDefault(_button);

	var _group = __webpack_require__(6);

	var _group2 = _interopRequireDefault(_group);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _button2.default;
	exports.Button = _button2.default;
	exports.ButtonGroup = _group2.default;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames3 = __webpack_require__(5);

	var _classnames4 = _interopRequireDefault(_classnames3);

	__webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Layout = (function (_React$Component) {
	    _inherits(Layout, _React$Component);

	    function Layout(props) {
	        _classCallCheck(this, Layout);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(Layout, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            if (this.props.disabled) return;
	            this.props.onClick();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _classnames2;

	            // addon
	            var addon = null;
	            var addonValue = this.props.addonLeft || this.props.addonRight;
	            if (addonValue) {
	                var _classnames;

	                var addonClass = (0, _classnames4.default)((_classnames = {
	                    'fa': true
	                }, _defineProperty(_classnames, 'fa-' + addonValue, true), _defineProperty(_classnames, 'pull-right', this.props['addon-right']), _classnames));
	                addon = _react2.default.createElement('i', { className: addonClass });
	            }

	            var btnClass = (0, _classnames4.default)((_classnames2 = {
	                'btn': true
	            }, _defineProperty(_classnames2, 'btn-' + this.props.type, true), _defineProperty(_classnames2, 'disabled', this.props.disabled), _defineProperty(_classnames2, 'btn-addon', addonValue), _defineProperty(_classnames2, 'btn-rounded', this.props.rounded), _defineProperty(_classnames2, 'btn-lg', this.props.size && this.props.size === 'lg'), _defineProperty(_classnames2, 'btn-xs', this.props.size && this.props.size === 'xs'), _defineProperty(_classnames2, 'btn-sm', this.props.size && this.props.size === 'sm'), _defineProperty(_classnames2, 'active', this.props.active), _classnames2));

	            return _react2.default.createElement(
	                'button',
	                { style: this.props.style,
	                    onClick: this.handleClick.bind(this),
	                    className: btnClass },
	                addon ? addon : null,
	                this.props.children
	            );
	        }
	    }]);

	    return Layout;
	})(_react2.default.Component);

	exports.default = Layout;

	Layout.defaultProps = {
	    type: 'default',
	    disabled: false,
	    active: false,
	    style: {},
	    onClick: function onClick() {}
	};

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(5);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	            var groupClass = (0, _classnames2.default)({
	                'btn-group': !this.props.vertical,
	                'btn-group-vertical': this.props.vertical
	            });

	            return _react2.default.createElement(
	                'div',
	                _extends({}, this.props, { className: groupClass }),
	                this.props.children
	            );
	        }
	    }]);

	    return ButtonGroup;
	})(_react2.default.Component);

	exports.default = ButtonGroup;

/***/ }
/******/ ])
});
;