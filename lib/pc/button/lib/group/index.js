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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = function (_React$Component) {
    (0, _inherits3.default)(ButtonGroup, _React$Component);

    function ButtonGroup(props) {
        (0, _classCallCheck3.default)(this, ButtonGroup);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ButtonGroup).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(ButtonGroup, [{
        key: 'render',
        value: function render() {
            var groupClass = (0, _classnames2.default)({
                'btn-group': !this.props.vertical,
                'btn-group-vertical': this.props.vertical
            });

            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, this.props, { className: groupClass }),
                this.props.children
            );
        }
    }]);
    return ButtonGroup;
}(_react2.default.Component);

exports.default = ButtonGroup;