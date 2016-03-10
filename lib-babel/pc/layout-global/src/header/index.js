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

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Header, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.store.dispatch((0, _actions.setHeaderHeight)(this.props.height || this.props.headerHeight || 0));
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var width = _props.width;
            var headerWidth = _props.headerWidth;
            var height = _props.height;
            var headerHeight = _props.headerHeight;
            var children = _props.children;

            var others = _objectWithoutProperties(_props, ['className', 'width', 'headerWidth', 'height', 'headerHeight', 'children']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true
            }, className, className));

            var style = {
                position: 'absolute',
                top: 0,
                left: 0,
                width: width || headerWidth || '100%',
                height: height || headerHeight,
                zIndex: 3
            };

            others.style = _extends({}, style, others.style);

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                children
            );
        }
    }]);

    return Header;
})(_react2.default.Component);

exports.default = Header;

Header.defaultProps = {
    // @desc 高度
    height: 100
};