'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 设置全局样式
            (0, _jquery2.default)('html,body').css({
                width: '100%',
                height: '100%',
                overflow: 'hidden'
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // 设置全局样式
            (0, _jquery2.default)('html,body').css({
                width: 'auto',
                height: 'auto',
                overflow: 'auto'
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;

            var others = _objectWithoutProperties(_props, ['className']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true
            }, className, className));

            var store = (0, _redux.createStore)(_reducers2.default);

            var childs = _react2.default.Children.map(this.props.children, function (children, index) {
                return _react2.default.cloneElement(children, {
                    key: index,
                    store: store
                });
            });

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                childs
            );
        }
    }]);

    return Layout;
})(_react2.default.Component);

exports.default = Layout;