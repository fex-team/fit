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

var _reactDateRange = require('react-date-range');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FitCalendar = function (_React$Component) {
    (0, _inherits3.default)(FitCalendar, _React$Component);

    function FitCalendar() {
        (0, _classCallCheck3.default)(this, FitCalendar);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FitCalendar).apply(this, arguments));
    }

    (0, _createClass3.default)(FitCalendar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_reactDateRange.Calendar, { date: this.props.date,
                    onChange: this.props.onChange.bind(this) })
            );
        }
    }]);
    return FitCalendar;
}(_react2.default.Component);

exports.default = FitCalendar;

FitCalendar.defaultProps = {
    onChange: function onChange() {},
    date: null
};