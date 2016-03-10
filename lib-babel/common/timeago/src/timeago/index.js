'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Timeago = (function (_React$Component) {
    _inherits(Timeago, _React$Component);

    function Timeago(props) {
        _classCallCheck(this, Timeago);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Timeago).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Timeago, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this._isMounted = true;
            this.timeoutId = 0;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.live) {
                this.tick(true);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(nextProps) {
            if (this.props.live !== nextProps.live || this.props.date !== nextProps.date) {
                if (!this.props.live && this.timeoutId) {
                    clearTimeout(this.timeoutId);
                    this.timeoutId = undefined;
                }
                this.tick();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this._isMounted = false;
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
                this.timeoutId = undefined;
            }
        }
    }, {
        key: 'tick',
        value: function tick(refresh) {
            var _this2 = this;

            if (!this._isMounted || !this.props.live) {
                return;
            }

            var period = 1000;

            var then = new Date(this.props.date).valueOf();
            var now = Date.now();
            var seconds = Math.round(Math.abs(now - then) / 1000);

            if (seconds < 60) {
                period = 1000;
            } else if (seconds < 60 * 60) {
                period = 1000 * 60;
            } else if (seconds < 60 * 60 * 24) {
                period = 1000 * 60 * 60;
            } else {
                period = 0;
            }

            period = Math.min(Math.max(period, this.props.minPeriod), this.props.maxPeriod);

            if (!!period) {
                this.timeoutId = setTimeout(function () {
                    _this2.tick();
                }, period);
            }

            if (!refresh) {
                this.forceUpdate();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var component = _props.component;
            var date = _props.date;
            var loseTime = _props.loseTime;
            var loseFormat = _props.loseFormat;
            var label = _props.label;
            var formatter = _props.formatter;

            var others = _objectWithoutProperties(_props, ['component', 'date', 'loseTime', 'loseFormat', 'label', 'formatter']);

            var then = new Date(date).valueOf();
            var now = Date.now();

            if (now - then >= loseTime) {
                // 友好时间失效了
                var fullDate = (0, _moment2.default)(date);
                var formatString = fullDate.format(loseFormat);

                return _react2.default.createElement(component, others, formatString);
            } else {
                var seconds = Math.round(Math.abs(now - then) / 1000);
                var suffix = then < now ? label.ago : label.fromNow;
                var value = undefined,
                    unit = undefined;

                if (seconds < 60) {
                    value = Math.round(seconds);
                    unit = label.second;
                } else if (seconds < 60 * 60) {
                    value = Math.round(seconds / 60);
                    unit = label.minute;
                } else if (seconds < 60 * 60 * 24) {
                    value = Math.round(seconds / (60 * 60));
                    unit = label.hour;
                } else if (seconds < 60 * 60 * 24 * 7) {
                    value = Math.round(seconds / (60 * 60 * 24));
                    unit = label.day;
                } else if (seconds < 60 * 60 * 24 * 30) {
                    value = Math.round(seconds / (60 * 60 * 24 * 7));
                    unit = label.week;
                } else if (seconds < 60 * 60 * 24 * 365) {
                    value = Math.round(seconds / (60 * 60 * 24 * 30));
                    unit = label.month;
                } else {
                    value = Math.round(seconds / (60 * 60 * 24 * 365));
                    unit = label.year;
                }

                var fullDate = (0, _moment2.default)(date);
                var newProps = _extends({}, others, {
                    title: fullDate.format(loseFormat)
                });

                return _react2.default.createElement(component, newProps, formatter(value, unit, suffix, then));
            }
        }
    }]);

    return Timeago;
})(_react2.default.Component);

exports.default = Timeago;

Timeago.defaultProps = {
    // @desc 需要处理的时间,可以是一个date对象,UTC字符串或者是时间戳
    date: '',

    // @desc 是否跟随时间自动变化
    live: true,

    // @desc 外层dom标签
    component: 'span',

    // @desc 多久以后的时间会失效,失效指的是不再显示友好时间,直接显示 YYYY-MM-DD HH:mm:ss
    loseTime: Infinity,

    // @desc 失效时间的格式化类型
    loseFormat: 'YYYY-MM-DD HH:mm:ss',

    // @desc 组件在更新前等待的最少秒数
    minPeriod: 0,

    // @desc 每隔多久更新一次时间,默认无限大
    maxPeriod: Infinity,

    // @desc 启用中文支持
    useChinese: false,

    // @desc 定制各类提示语句
    label: {
        ago: 'ago',
        fromNow: 'from now',
        second: 'second',
        minute: 'minute',
        hour: 'hour',
        day: 'day',
        week: 'week',
        month: 'month',
        year: 'year'
    },

    // @desc 格式化
    formatter: function formatter(value, unit, suffix) {
        if (value !== 1) {
            unit += 's';
        }
        return value + ' ' + unit + ' ' + suffix;
    }
};