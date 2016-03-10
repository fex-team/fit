'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitDatepicker = require('fit-datepicker');

var _fitButton = require('fit-button');

var _fitButton2 = _interopRequireDefault(_fitButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = (function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo(props) {
        _classCallCheck(this, Demo);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));

        _this.state = {
            date: ''
        };
        return _this;
    }

    _createClass(Demo, [{
        key: 'handleCalendarChange',
        value: function handleCalendarChange(date) {
            console.log(date.format('YYYY-MM-DD'));
        }
    }, {
        key: 'handleDateRangeChange',
        value: function handleDateRangeChange(date) {
            if (date) {
                console.log(date.startDate.format('YYYY-MM-DD'), date.endDate.format('YYYY-MM-DD'));
            } else {
                console.log(date);
            }
        }
    }, {
        key: 'getDate',
        value: function getDate() {
            this.setState({
                date: this.dateRangeRef.state.startDateMoment.format('YYYY-MM-DD')
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { style: { display: 'flex' } },
                _react2.default.createElement(_fitDatepicker.DateInput, { type: 'calendar',
                    onChange: this.handleCalendarChange.bind(this) }),
                _react2.default.createElement(_fitDatepicker.DateInput, { style: { marginLeft: 10 },
                    type: 'dateRange',
                    width: '300',
                    ref: function ref(_ref) {
                        _this2.dateRangeRef = _ref;
                    },
                    onChange: this.handleDateRangeChange.bind(this) }),
                _react2.default.createElement(
                    _fitButton2.default,
                    { onClick: this.getDate.bind(this),
                        style: { marginLeft: 10 } },
                    '获取日期'
                ),
                _react2.default.createElement(
                    'span',
                    { style: { marginLeft: 10 } },
                    this.state.date
                )
            );
        }
    }]);

    return Demo;
})(_react2.default.Component);

exports.default = Demo;