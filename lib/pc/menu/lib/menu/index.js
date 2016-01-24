'use strict';

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function (_React$Component) {
    (0, _inherits3.default)(Menu, _React$Component);

    function Menu(props) {
        (0, _classCallCheck3.default)(this, Menu);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Menu).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Menu, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var childs = _react2.default.Children.map(this.props.children, function (child, index) {
                return _react2.default.cloneElement(child, {
                    key: index,
                    globalInverse: _this2.props.inverse,
                    vertical: _this2.props.vertical
                });
            });

            var menuClassname = (0, _classnames2.default)({
                'lib-pc-menu-lib-menu': true,
                'inverse': this.props.inverse,
                'vertical': this.props.vertical
            });

            var mergeStyle = this.props.style;
            if (!this.props.style.height) {
                mergeStyle.height = 45;
            }

            if (this.props.vertical) {
                mergeStyle.height = null;
            }

            return _react2.default.createElement(
                'div',
                { style: mergeStyle,
                    className: menuClassname },
                childs
            );
        }
    }]);
    return Menu;
}(_react2.default.Component);

exports.default = Menu;

Menu.defaultProps = {
    style: {}
};