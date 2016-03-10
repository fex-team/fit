'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDateRange = require('react-date-range');

var _defaultRanges = require('./default-ranges');

var _defaultRanges2 = _interopRequireDefault(_defaultRanges);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FitDateRange = (function (_React$Component) {
    _inherits(FitDateRange, _React$Component);

    function FitDateRange(props) {
        _classCallCheck(this, FitDateRange);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FitDateRange).call(this, props));

        _this.state = {
            value: _this.props.value || _this.props.defaultValue
        };
        return _this;
    }

    _createClass(FitDateRange, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var toolbar = _props.toolbar;
            var onInit = _props.onInit;
            var calendars = _props.calendars;
            var onChange = _props.onChange;

            var others = _objectWithoutProperties(_props, ['className', 'toolbar', 'onInit', 'calendars', 'onChange']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true
            }, className, className));

            var customOpts = {};

            if (toolbar) {
                customOpts.ranges = _defaultRanges2.default;
            }

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                _react2.default.createElement(_reactDateRange.DateRange, _extends({ startDate: this.state.value && this.state.value.startDate,
                    endDate: this.state.value && this.state.value.endDate,
                    onInit: onInit.bind(this),
                    calendars: calendars,
                    onChange: onChange }, customOpts))
            );
        }
    }]);

    return FitDateRange;
})(_react2.default.Component);

exports.default = FitDateRange;

FitDateRange.defaultProps = {
    // @desc 修改时回调
    onChange: function onChange() {},

    // @desc 日历数量
    calendars: 1,

    // @desc 是否显示左侧工具栏
    toolbar: false,

    // @desc 日期
    value: null,

    // @desc 初始日期
    defaultValue: {
        startDate: function startDate(now) {
            return now.add(0, 'days');
        },
        endDate: function endDate(now) {
            return now.add(0, 'days');
        }
    },

    // @desc 初始化
    onInit: function onInit(date) {}
};