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

var _reactDateRange = require('react-date-range');

var _defaultRanges = require('./default-ranges');

var _defaultRanges2 = _interopRequireDefault(_defaultRanges);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FitDateRange = function (_React$Component) {
    (0, _inherits3.default)(FitDateRange, _React$Component);

    function FitDateRange() {
        (0, _classCallCheck3.default)(this, FitDateRange);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FitDateRange).apply(this, arguments));
    }

    (0, _createClass3.default)(FitDateRange, [{
        key: 'render',
        value: function render() {
            var customOpts = {};

            if (this.props.toolbar) {
                customOpts.ranges = _defaultRanges2.default;
            }

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-datepicker-lib-date-range' },
                _react2.default.createElement(_reactDateRange.DateRange, (0, _extends3.default)({ calendars: this.props.calendars,
                    startDate: this.props.startDate,
                    endDate: this.props.endDate,
                    onChange: this.props.onChange.bind(this) }, customOpts))
            );
        }
    }]);
    return FitDateRange;
}(_react2.default.Component);

exports.default = FitDateRange;

FitDateRange.defaultProps = {
    onChange: function onChange() {},
    calendars: 1,
    toolbar: false,
    startDate: null,
    endDate: null
};