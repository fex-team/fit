'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var DateInput = function (_React$Component) {
    (0, _inherits3.default)(DateInput, _React$Component);

    function DateInput(props) {
        (0, _classCallCheck3.default)(this, DateInput);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DateInput).call(this, props));

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

    (0, _createClass3.default)(DateInput, [{
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
            }, (0, _defineProperty3.default)(_classNames, this.state.position, true), (0, _defineProperty3.default)(_classNames, 'show-time', this.props.showTime), (0, _defineProperty3.default)(_classNames, 'show', this.state.showCalendar), (0, _defineProperty3.default)(_classNames, 'hide', !this.state.showCalendar), _classNames));

            var CalendarComponent = _react2.default.createElement(_calendar2.default, (0, _extends3.default)({ date: this.state.dateMoment ? this.state.dateMoment.format('DD/MM/YYYY') : null,
                onChange: this.handleCalendarChange.bind(this) }, this.props.calendarOpts));

            if (this.props.type === 'dateRange') {
                CalendarComponent = _react2.default.createElement(_dateRange2.default, (0, _extends3.default)({ onChange: this.handleDateRangeChange.bind(this),
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
                { className: 'lib-pc-datepicker-lib-input',
                    style: this.props.style },
                _react2.default.createElement(_fitInput2.default, (0, _extends3.default)({ onFocus: this.handleFocus.bind(this)
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