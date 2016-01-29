'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _calendar = require('../calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _dateRange = require('../date-range');

var _dateRange2 = _interopRequireDefault(_dateRange);

var _fitTimepicker = require('fit-timepicker');

var _fitTimepicker2 = _interopRequireDefault(_fitTimepicker);

var _fitInput = require('fit-input');

var _fitInput2 = _interopRequireDefault(_fitInput);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateInput = function (_React$Component) {
    _inherits(DateInput, _React$Component);

    function DateInput(props) {
        _classCallCheck(this, DateInput);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DateInput).call(this, props));

        _this.state = {
            showCalendar: false,
            position: 'bottom',
            formatString: '',
            date: '',
            startDate: '',
            endDate: '',

            // moment对象
            dateMoment: null,
            startDateMoment: null,
            endDateMoment: null
        };

        _this.handleDocumentClick = function (event) {
            if (!_jquery2.default.contains(_this.$dom[0], event.target)) {
                _this.setState({
                    showCalendar: false
                });
            }
        };
        return _this;
    }

    _createClass(DateInput, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.$dom = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this));
            (0, _jquery2.default)(document).on('click', this.handleDocumentClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            (0, _jquery2.default)(document).off('click', this.handleDocumentClick);
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            var position = 'bottom';
            if (this.$dom.offset().top > 360) {
                position = 'top';
            }

            this.setState({
                showCalendar: true,
                position: position
            });
        }
    }, {
        key: 'handleCalendarChange',
        value: function handleCalendarChange(date) {
            var format = undefined;
            var newDate = date.clone();
            if (this.props.showTime) {
                if (this.dateTimepickerMoment) {
                    newDate.hour(this.dateTimepickerMoment.hour());
                    newDate.minute(this.dateTimepickerMoment.minute());
                    newDate.second(this.dateTimepickerMoment.second());
                }

                this.props.onChange(newDate);
                format = newDate.format('YYYY-MM-DD HH:mm:ss');
            } else {
                this.props.onChange(newDate);
                format = newDate.format('YYYY-MM-DD');
            }

            this.calendarMoment = date;

            this.setState({
                date: format,
                formatString: format,
                dateMoment: newDate
            });
        }
    }, {
        key: 'handleDateRangeChange',
        value: function handleDateRangeChange(date) {
            var format = undefined;
            var formatString = undefined;
            var start = date.startDate.clone();
            var end = date.endDate.clone();

            if (this.props.showTime) {
                if (this.startDateTimepickerMoment) {
                    start.hour(this.startDateTimepickerMoment.hour());
                    start.minute(this.startDateTimepickerMoment.minute());
                    start.second(this.startDateTimepickerMoment.second());
                }

                if (this.endDateTimepickerMoment) {
                    end.hour(this.endDateTimepickerMoment.hour());
                    end.minute(this.endDateTimepickerMoment.minute());
                    end.second(this.endDateTimepickerMoment.second());
                }

                this.props.onChange({
                    startDate: start,
                    endDate: end
                });

                format = {
                    start: start,
                    end: end
                };
                formatString = start.format('YYYY-MM-DD HH:mm:ss') + ' - ' + end.format('YYYY-MM-DD HH:mm:ss');
            } else {
                this.props.onChange(date);
                format = {
                    start: date.startDate,
                    end: date.endDate
                };
                formatString = format.start.format('YYYY-MM-DD') + ' - ' + format.end.format('YYYY-MM-DD');
            }

            this.dateRangeMoment = date;

            this.setState({
                startDate: format.start,
                endDate: format.end,
                formatString: formatString,
                startDateMoment: start,
                endDateMoment: end
            });
        }
    }, {
        key: 'handleTimepicker',
        value: function handleTimepicker(type, moment) {
            this[type + 'TimepickerMoment'] = moment;
            if (type === 'date' && this.calendarMoment) {
                this.handleCalendarChange(this.calendarMoment);
            } else if (this.dateRangeMoment) {
                this.handleDateRangeChange(this.dateRangeMoment);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var calendarContainerClass = (0, _classnames2.default)((_classNames = {
                'calendar-container': true
            }, _defineProperty(_classNames, this.state.position, true), _defineProperty(_classNames, 'show-time', this.props.showTime), _defineProperty(_classNames, 'show', this.state.showCalendar), _defineProperty(_classNames, 'hide', !this.state.showCalendar), _classNames));

            var CalendarComponent = _react2.default.createElement(_calendar2.default, _extends({ date: this.state.dateMoment ? this.state.dateMoment.format('DD/MM/YYYY') : null,
                onChange: this.handleCalendarChange.bind(this) }, this.props.calendarOpts));

            if (this.props.type === 'dateRange') {
                CalendarComponent = _react2.default.createElement(_dateRange2.default, _extends({ onChange: this.handleDateRangeChange.bind(this),
                    calendars: '2',
                    startDate: this.state.startDateMoment ? this.state.startDateMoment.format('DD/MM/YYYY') : null,
                    endDate: this.state.endDateMoment ? this.state.endDateMoment.format('DD/MM/YYYY') : null,
                    toolbar: true }, this.props.calendarOpts));
            }

            var TimePickerComponent = null;
            if (this.props.showTime) {
                if (this.props.type !== 'dateRange') {
                    TimePickerComponent = _react2.default.createElement(_fitTimepicker2.default, { input: { styles: { input: { borderLeft: 'none', borderTop: 'none', borderRight: 'none' } } },
                        onChange: this.handleTimepicker.bind(this, 'date') });
                } else {
                    TimePickerComponent = _react2.default.createElement(
                        'div',
                        { style: { display: 'flex' } },
                        _react2.default.createElement(_fitTimepicker2.default, { onChange: this.handleTimepicker.bind(this, 'startDate'),
                            style: { flexGrow: 1 },
                            input: { styles: { input: { borderLeft: 'none', borderTop: 'none', borderRight: 'none' } } } }),
                        _react2.default.createElement(_fitTimepicker2.default, { onChange: this.handleTimepicker.bind(this, 'endDate'),
                            style: { flexGrow: 1 },
                            input: { styles: { input: { borderRight: 'none', borderTop: 'none' } } } })
                    );
                }
            }

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-datepicker-lib-date-input',
                    style: this.props.style },
                _react2.default.createElement(_fitInput2.default, _extends({ onFocus: this.handleFocus.bind(this)
                }, this.props.input, {
                    value: this.state.formatString,
                    placeholder: this.props.type === 'dateRange' ? '开始日期 ~ 结束日期' : null,
                    width: this.props.width || 350,
                    icon: 'calendar',
                    style: { width: this.props.width } })),
                this.state.showCalendar ? _react2.default.createElement(
                    'div',
                    { className: calendarContainerClass },
                    TimePickerComponent ? TimePickerComponent : null,
                    CalendarComponent
                ) : null
            );
        }
    }]);

    return DateInput;
}(_react2.default.Component);

exports.default = DateInput;

DateInput.defaultProps = {
    onChange: function onChange() {},
    calendarOpts: {},
    type: 'calendar',
    showTime: false
};