'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout(props) {
        _classCallCheck(this, Layout);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var store = (0, _redux.createStore)(_reducers2.default);

            var childs = _react2.default.Children.map(this.props.children, function (children, index) {
                return _react2.default.cloneElement(children, {
                    key: index,
                    headerHeight: _this2.props.headerHeight,
                    headerWidth: _this2.props.headerWidth,
                    siderbarWidth: _this2.props.siderbarWidth,
                    siderbarHeight: _this2.props.siderbarHeight,
                    footerHeight: _this2.props.footerHeight,
                    footerWidth: _this2.props.footerWidth,
                    sectionDirection: _this2.props.sectionDirection,
                    store: store
                });
            });

            return _react2.default.createElement(
                'div',
                _extends({ className: 'lib-pc-layout-global-lib-layout' }, this.props),
                childs
            );
        }
    }]);

    return Layout;
}(_react2.default.Component);

exports.default = Layout;