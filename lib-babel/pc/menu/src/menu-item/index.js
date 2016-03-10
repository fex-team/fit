'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouter = require('react-router');

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = (function (_React$Component) {
    _inherits(MenuItem, _React$Component);

    function MenuItem(props) {
        _classCallCheck(this, MenuItem);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MenuItem).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(MenuItem, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var inverse = _props.inverse;
            var globalInverse = _props.globalInverse;
            var brand = _props.brand;
            var vertical = _props.vertical;
            var to = _props.to;
            var onClick = _props.onClick;
            var height = _props.height;
            var minHeight = _props.minHeight;
            var children = _props.children;

            var others = _objectWithoutProperties(_props, ['className', 'inverse', 'globalInverse', 'brand', 'vertical', 'to', 'onClick', 'height', 'minHeight', 'children']);

            var isInverse = inverse;
            if (globalInverse) {
                isInverse = !inverse;
            }

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true,
                'brand': brand,
                'inverse': isInverse,
                'vertical': vertical,
                'text-label': true
            }, className, className));

            others.style = others.style || {};
            others.style.minHeight = height || minHeight;

            if (to) {
                return _react2.default.createElement(
                    _reactRouter.Link,
                    _extends({}, others, { className: classes,
                        to: to }),
                    children
                );
            }

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes,
                    onClick: onClick }),
                children
            );
        }
    }]);

    return MenuItem;
})(_react2.default.Component);

exports.default = MenuItem;

MenuItem.defaultProps = {
    // @desc 点击的回调
    onClick: function onClick() {},

    // @desc 是否反色
    inverse: false,

    // @desc 路由地址
    to: null
};