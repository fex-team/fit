'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _fitInput = require('fit-input');

var _fitInput2 = _interopRequireDefault(_fitInput);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _fitRadio = require('fit-radio');

var _fitSelect = require('fit-select');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 获取两点间的角度
var getAngle = function getAngle(x1, y1, x2, y2) {
    var position = {
        x: x1,
        y: y1 - Math.sqrt(Math.abs(x2 - x1) * Math.abs(x2 - x1) + Math.abs(y2 - y1) * Math.abs(y2 - y1))
    };
    var angle = 2 * Math.atan2(y2 - position.y, x2 - position.x) * 180 / Math.PI;
    return angle - 90;
};

// 小时转换成角度
var hourToAngle = function hourToAngle(number) {
    if (number > 12) {
        number -= 12;
    }
    return number / 12 * 360 - 90;
};

// 时/分钟 转换成角度
var minuteSecondToAngle = function minuteSecondToAngle(number) {
    return number / 60 * 360 - 90;
};

// 角度转化成 小时 数字
var angleToHour = function angleToHour(angle, isAm) {
    var number = Math.round((angle + 90) / 360 * 11);
    return isAm ? number : number + 12;
};

// 角度转化成 时/分钟 数字
var angleToMinuteSecond = function angleToMinuteSecond(angle) {
    return Math.round((angle + 90) / 360 * 59);
};

// 给出最早可用的时间
var recentValidTime = function recentValidTime(number, filter) {
    while (number > 0) {
        if (filter(number)) return number;
        number--;
    }
    return 0;
};

var FitCalendar = (function (_React$Component) {
    _inherits(FitCalendar, _React$Component);

    function FitCalendar(props) {
        _classCallCheck(this, FitCalendar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FitCalendar).call(this, props));

        var now = new Date();
        var hour = _this.props.hour || _this.props.defaultHour || now.getHours();
        var minute = _this.props.minute || _this.props.defaultMinute || now.getMinutes();
        var second = _this.props.second || _this.props.defaultSecond || now.getSeconds();

        hour = recentValidTime(hour, _this.props.limitHour);
        minute = recentValidTime(minute, _this.props.limitMinute);
        second = recentValidTime(second, _this.props.limitSecond);

        _this.state = {
            show: false,
            position: 'bottom',

            // 当前移动的 小时/分钟/秒
            moveType: null,

            // 当前 时/分/秒 所在角度
            hourAngle: hourToAngle(hour),
            minuteAngle: minuteSecondToAngle(minute),
            secondAngle: minuteSecondToAngle(second),

            // 当前 时/分/秒 数值
            hour: hour,
            minute: minute,
            second: second,

            // 时刻
            isAm: hour <= 12,

            // 是否触发过修改,如果没有修改,显示空
            isChanged: false
        };

        _this.handleDocumentClick = function (event) {
            if (!_this._isMounted) return;
            if (!_jquery2.default.contains(_this.$dom[0], event.target)) {
                _this.setState({
                    show: false
                });
            }
        };

        _this.handleMouseMove = function (event) {
            if (!_this._isMounted) return;
            if (!_this.state.show || _this.state.moveType === null) return;

            var angle = getAngle(_this.$clockEnter.offset().left, _this.$clockEnter.offset().top, event.pageX - 100, event.pageY - 100);

            var changedState = {};

            if (_this.state.moveType !== 'hour') {
                changedState[_this.state.moveType] = angleToMinuteSecond(angle);
            } else {
                changedState[_this.state.moveType] = angleToHour(angle, _this.state.isAm);
            }

            // 调整是否可选
            switch (_this.state.moveType) {
                case 'hour':
                    changedState[_this.state.moveType] = recentValidTime(changedState[_this.state.moveType], _this.props.limitHour);
                    changedState[_this.state.moveType + 'Angle'] = hourToAngle(changedState[_this.state.moveType]);
                    break;
                case 'minute':
                    changedState[_this.state.moveType] = recentValidTime(changedState[_this.state.moveType], _this.props.limitMinute);
                    changedState[_this.state.moveType + 'Angle'] = minuteSecondToAngle(changedState[_this.state.moveType]);
                    break;
                case 'second':
                    changedState[_this.state.moveType] = recentValidTime(changedState[_this.state.moveType], _this.props.limitSecond);
                    changedState[_this.state.moveType + 'Angle'] = minuteSecondToAngle(changedState[_this.state.moveType]);
                    break;
            }

            changedState.isChanged = true;

            _this.setState(changedState, function () {
                _this.props.onChange((0, _moment2.default)({
                    hour: _this.state.hour,
                    minute: _this.state.minute,
                    second: _this.state.second
                }));
            });
        };

        _this.handleMouseUp = function () {
            if (!_this._isMounted) return;
            _this.setState({
                moveType: null
            });
        };
        return _this;
    }

    _createClass(FitCalendar, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('hour' in nextProps || 'minute' in nextProps || 'second' in nextProps) {
                this.setState({
                    hour: nextProps.hour || this.state.hour,
                    minute: nextProps.minute || this.state.minute,
                    second: nextProps.second || this.state.second,
                    isChanged: true
                });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this._isMounted = true;
            this.$dom = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this));
            (0, _jquery2.default)(document).on('click', this.handleDocumentClick);
            (0, _jquery2.default)(document).on('mousemove', this.handleMouseMove);
            (0, _jquery2.default)(document).on('mouseup', this.handleMouseUp);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._isMounted = false;
            (0, _jquery2.default)(document).off('click', this.handleDocumentClick);
            (0, _jquery2.default)(document).off('mousemove', this.handleMouseMove);
            (0, _jquery2.default)(document).off('mouseup', this.handleMouseUp);
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            var _this2 = this;

            var position = 'bottom';
            if (this.$dom.offset().top > 300) {
                position = 'top';
            }

            this.setState({
                show: true,
                position: position
            }, function () {
                // 获取时钟中心点
                _this2.$clockEnter = _this2.$dom.find('#j-clock-container');
            });
        }
    }, {
        key: 'handleMouseDown',
        value: function handleMouseDown(type) {
            this.setState({
                moveType: type
            });
        }
    }, {
        key: 'handleTimeChange',
        value: function handleTimeChange(type, value) {
            var _this3 = this;

            var angle = 0;
            var newState = {};

            switch (type) {
                case 'hour':
                    value = recentValidTime(value, this.props.limitHour);
                    break;
                case 'minute':
                    value = recentValidTime(value, this.props.limitMinute);
                    break;
                case 'second':
                    value = recentValidTime(value, this.props.limitSecond);
                    break;
            }

            if (type === 'hour') {
                angle = hourToAngle(value);
                newState.isAm = value <= 12;
            } else {
                angle = minuteSecondToAngle(value);
            }

            newState[type] = value;
            newState[type + 'Angle'] = angle;
            newState.isChanged = true;

            this.setState(newState, function () {
                _this3.props.onChange((0, _moment2.default)({
                    hour: _this3.state.hour,
                    minute: _this3.state.minute,
                    second: _this3.state.second
                }));
            });
        }
    }, {
        key: 'getHours',
        value: function getHours() {
            var arrs = [];
            for (var i = 0; i < 24; i++) {
                if (!this.props.limitHour(i)) continue;
                arrs.push(i);
            }

            return arrs.map(function (item, index) {
                return _react2.default.createElement(
                    _fitSelect.Option,
                    { key: index,
                        value: item },
                    item
                );
            });
        }
    }, {
        key: 'getMinutes',
        value: function getMinutes() {
            var arrs = [];
            for (var i = 0; i < 60; i++) {
                if (!this.props.limitMinute(i)) continue;
                arrs.push(i);
            }

            return arrs.map(function (item, index) {
                return _react2.default.createElement(
                    _fitSelect.Option,
                    { key: index,
                        value: item },
                    item
                );
            });
        }
    }, {
        key: 'getSeconds',
        value: function getSeconds() {
            var arrs = [];
            for (var i = 0; i < 60; i++) {
                if (!this.props.limitSecond(i)) continue;
                arrs.push(i);
            }

            return arrs.map(function (item, index) {
                return _react2.default.createElement(
                    _fitSelect.Option,
                    { key: index,
                        value: item },
                    item
                );
            });
        }
    }, {
        key: 'handleAmChange',
        value: function handleAmChange(value) {
            var _this4 = this;

            switch (value) {
                case 'am':
                    this.setState({
                        hour: this.state.hour > 12 ? this.state.hour - 12 : this.state.hour,
                        isAm: true,
                        isChanged: true
                    }, function () {
                        _this4.props.onChange((0, _moment2.default)({
                            hour: _this4.state.hour,
                            minute: _this4.state.minute,
                            second: _this4.state.second
                        }));
                    });
                    break;
                case 'pm':
                    this.setState({
                        hour: this.state.hour > 12 ? this.state.hour : this.state.hour + 12,
                        isAm: false,
                        isChanged: true
                    }, function () {
                        _this4.props.onChange((0, _moment2.default)({
                            hour: _this4.state.hour,
                            minute: _this4.state.minute,
                            second: _this4.state.second
                        }));
                    });
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var containerClass = (0, _classnames2.default)((_classNames = {
                'container': true
            }, _defineProperty(_classNames, this.state.position, true), _defineProperty(_classNames, 'show', this.state.show), _defineProperty(_classNames, 'hide', !this.state.show), _classNames));

            var hourStyle = {
                transform: 'rotate(' + this.state.hourAngle + 'deg)',
                transition: this.state.moveType === null ? 'all .2s' : 'background .1s'
            };
            var minuteStyle = {
                transform: 'rotate(' + this.state.minuteAngle + 'deg)',
                transition: this.state.moveType === null ? 'all .2s' : 'background .1s'
            };
            var secondStyle = {
                transform: 'rotate(' + this.state.secondAngle + 'deg)',
                transition: this.state.moveType === null ? 'all .2s' : 'background .1s'
            };

            var momentObj = (0, _moment2.default)({
                hour: this.state.hour,
                minute: this.state.minute,
                second: this.state.second
            });

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-timepicker-lib-timepicker',
                    style: this.props.style },
                _react2.default.createElement(_fitInput2.default, _extends({ onFocus: this.handleFocus.bind(this)
                }, this.props.input, {
                    icon: 'clock-o',
                    value: this.state.isChanged ? momentObj.format('HH:mm:ss') : '' })),
                this.state.show ? _react2.default.createElement(
                    'div',
                    { className: containerClass },
                    _react2.default.createElement(
                        'div',
                        { id: 'j-clock-container',
                            className: 'clock' },
                        _react2.default.createElement('div', { className: 'hour',
                            style: hourStyle,
                            onMouseDown: this.handleMouseDown.bind(this, 'hour') }),
                        _react2.default.createElement('div', { className: 'minute',
                            style: minuteStyle,
                            onMouseDown: this.handleMouseDown.bind(this, 'minute') }),
                        _react2.default.createElement('div', { className: 'second',
                            style: secondStyle,
                            onMouseDown: this.handleMouseDown.bind(this, 'second') })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'toolbar' },
                        _react2.default.createElement(
                            _fitRadio.RadioGroup,
                            { type: 'button',
                                onChange: this.handleAmChange.bind(this),
                                value: this.state.isAm ? 'am' : 'pm' },
                            _react2.default.createElement(
                                _fitRadio.Radio,
                                { value: 'am' },
                                'AM'
                            ),
                            _react2.default.createElement(
                                _fitRadio.Radio,
                                { value: 'pm' },
                                'PM'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'time-select-container' },
                        _react2.default.createElement(
                            _fitSelect.Select,
                            { width: '65',
                                value: this.state.hour,
                                onChange: this.handleTimeChange.bind(this, 'hour') },
                            this.getHours()
                        ),
                        _react2.default.createElement(
                            _fitSelect.Select,
                            { width: '65',
                                value: this.state.minute,
                                style: { marginLeft: -1 },
                                onChange: this.handleTimeChange.bind(this, 'minute') },
                            this.getMinutes()
                        ),
                        _react2.default.createElement(
                            _fitSelect.Select,
                            { width: '65',
                                value: this.state.second,
                                style: { marginLeft: -1 },
                                onChange: this.handleTimeChange.bind(this, 'second') },
                            this.getSeconds()
                        )
                    )
                ) : null
            );
        }
    }]);

    return FitCalendar;
})(_react2.default.Component);

exports.default = FitCalendar;

FitCalendar.defaultProps = {
    onChange: function onChange(time) {},
    limitHour: function limitHour(number) {
        return true;
    },
    limitMinute: function limitMinute(number) {
        return true;
    },
    limitSecond: function limitSecond(number) {
        return true;
    }
};