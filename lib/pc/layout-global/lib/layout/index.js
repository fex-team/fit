'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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

var Layout = function (_React$Component) {
    (0, _inherits3.default)(Layout, _React$Component);

    function Layout(props) {
        (0, _classCallCheck3.default)(this, Layout);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Layout).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Layout, [{
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
                (0, _extends3.default)({ className: 'lib-pc-layout-global-lib-layout' }, this.props),
                childs
            );
        }
    }]);
    return Layout;
}(_react2.default.Component);

exports.default = Layout;