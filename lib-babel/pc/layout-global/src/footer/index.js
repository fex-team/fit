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

var Footer = (function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).call(this, props));

        _this.state = {
            sidebarWidth: 0,
            siderbarDirection: null
        };
        return _this;
    }

    _createClass(Footer, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            this.unsubscribe = this.props.store.subscribe(function () {
                var layout = _this2.props.store.getState().Layout;

                _this2.setState({
                    sidebarWidth: layout.siderbarWidth,
                    siderbarDirection: layout.siderbarDirection
                });
            });
            this.props.store.dispatch((0, _actions.setFooterNewLine)(this.props.newLine));
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.store.dispatch((0, _actions.setFooterHeight)(this.props.height || this.props.footerHeight || 100));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.unsubscribe();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var bottom = _props.bottom;
            var height = _props.height;
            var left = _props.left;
            var newLine = _props.newLine;
            var footerHeight = _props.footerHeight;
            var children = _props.children;

            var others = _objectWithoutProperties(_props, ['className', 'bottom', 'height', 'left', 'newLine', 'footerHeight', 'children']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true
            }, className, className));

            var style = {
                position: 'absolute',
                bottom: bottom || 0,
                height: height || footerHeight,
                left: left || 0,
                right: 0
            };

            if (!newLine) {
                switch (this.state.siderbarDirection) {
                    case 'right':
                        style.left = 0;
                        style.right = this.state.sidebarWidth;
                        break;
                    case 'left':
                        style.left = this.state.sidebarWidth;
                        style.right = 0;
                        break;
                }
            }

            others.style = _extends({}, style, others.style);

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                children
            );
        }
    }]);

    return Footer;
})(_react2.default.Component);

exports.default = Footer;

Footer.defaultProps = {
    // @desc 高度
    height: 100,

    // @desc 有侧边栏时,是否另起一行
    newLine: true
};