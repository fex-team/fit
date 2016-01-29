'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Menu).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Menu, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var childs = _react2.default.Children.map(this.props.children, function (child, index) {
                return _react2.default.cloneElement(child, {
                    key: index,
                    globalInverse: _this2.props.inverse,
                    vertical: _this2.props.vertical,
                    height: _this2.props.height,
                    zIndex: 0
                });
            });

            var containerClassname = (0, _classnames2.default)({
                'lib-pc-menu-lib-menu': true,
                'inverse': this.props.inverse,
                'vertical': this.props.vertical
            });

            var containerStyle = {
                height: !this.props.vertical ? this.props.height : null,
                width: this.props.vertical ? this.props.width : null
            };

            return _react2.default.createElement(
                'div',
                { className: containerClassname,
                    style: _extends({}, this.props.style, containerStyle) },
                childs
            );
        }
    }]);

    return Menu;
}(_react2.default.Component);

exports.default = Menu;

Menu.defaultProps = {
    // @desc 样式
    // @type object
    style: {},

    // @desc 高度,横屏有效
    // @type int
    height: 45,

    // @desc 宽度,竖屏有效
    // @type int
    width: 200,

    // @desc 是否反色
    // @type bool
    inverse: false,

    // @desc 是否竖屏
    // @type bool
    vertical: false
};