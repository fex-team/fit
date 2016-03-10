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

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = (function (_React$Component) {
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
            var _props = this.props;
            var className = _props.className;
            var inverse = _props.inverse;
            var vertical = _props.vertical;
            var height = _props.height;
            var width = _props.width;
            var children = _props.children;

            var others = _objectWithoutProperties(_props, ['className', 'inverse', 'vertical', 'height', 'width', 'children']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true,
                'inverse': inverse,
                'vertical': vertical
            }, className, className));

            var childs = _react2.default.Children.map(children, function (child, index) {
                return _react2.default.cloneElement(child, {
                    key: index,
                    globalInverse: inverse,
                    vertical: vertical,
                    height: height,
                    zIndex: 0
                });
            });

            var containerStyle = {
                height: !vertical ? height : null,
                width: vertical ? width : null
            };

            others.style = _extends({}, containerStyle, others.style);

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                childs
            );
        }
    }]);

    return Menu;
})(_react2.default.Component);

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