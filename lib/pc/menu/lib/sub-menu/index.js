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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubMenu = function (_React$Component) {
    (0, _inherits3.default)(SubMenu, _React$Component);

    function SubMenu(props) {
        (0, _classCallCheck3.default)(this, SubMenu);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SubMenu).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(SubMenu, [{
        key: 'render',
        value: function render() {
            var inverse = this.props.inverse;
            if (this.props.globalInverse) {
                inverse = !inverse;
            }

            var className = (0, _classnames2.default)({
                'lib-pc-menu-lib-sub-menu': true,
                'brand': this.props.brand,
                'inverse': inverse,
                'vertical': this.props.vertical
            });

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, this.props, { className: className }),
                this.props.title
            );
        }
    }]);
    return SubMenu;
}(_react2.default.Component);

exports.default = SubMenu;