'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _fitInput = require('fit-input');

var _fitInput2 = _interopRequireDefault(_fitInput);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var interval = undefined;

var parseToNumber = function parseToNumber(value, scope, fullLength, ignoreParent) {
    var number = undefined;

    value = _lodash2.default.gt(parseFloat(value), parseFloat(scope.props.max)) ? scope.props.max : value;
    value = _lodash2.default.lt(parseFloat(value), parseFloat(scope.props.min)) ? scope.props.min : value;

    if (!scope.props.float) {
        number = _lodash2.default.parseInt(value);
    } else {
        if (fullLength) {
            number = parseFloat(value).toFixed(scope.props.float);
        } else {
            number = parseFloat(value);
        }
    }

    if (_lodash2.default.isNaN(number)) {
        number = 0;
    }

    // 允许空值
    if (value === '' || value === undefined) {
        number = '';
    }

    // 允许单独写一个-,因为可能在写一个负数
    if (value === '-') {
        number = '-';
    }

    // 浮点计数下允许-0
    if (scope.props.float && value === '-0') {
        number = '-0';
    }

    // 当前面有值的时候,允许后面写一个.,因为可能在写一个小数
    if (scope.props.float && value && value !== '' && value.length > 1) {
        if (value[value.length - 1] === '.' || value[value.length - 1] === '。') {
            number = number + '.';
        }
    }

    // 浮点计数下允许-0.
    if (scope.props.float && value === '-0.') {
        number = '-0.';
    }

    // 浮点时不能超过精度
    if (scope.props.float) {
        var arr = number.toString().split('.');
        // 小数点后面有值
        if (arr.length > 1 && arr[1].length > parseInt(scope.props.float)) {
            number = number.toFixed(scope.props.float);
        }
    }

    // 传给父级干净的值
    if (!ignoreParent && number !== '' && !_lodash2.default.isNaN(number)) {
        if (!scope.props.float) {
            scope.props.onChange(parseInt(number));
        } else {
            scope.props.onChange(parseFloat(number).toFixed(scope.props.float));
        }
    }

    return number;
};

var Number = function (_React$Component) {
    _inherits(Number, _React$Component);

    function Number(props) {
        _classCallCheck(this, Number);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Number).call(this, props));

        _this.state = {
            value: _this.props.value ? parseToNumber(_this.props.value, _this, true) : parseToNumber(_this.props.defaultValue, _this, true)
        };
        return _this;
    }

    // 鼠标松开后停止计数

    _createClass(Number, [{
        key: 'handleMouseUp',
        value: function handleMouseUp() {
            clearInterval(interval);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _jquery2.default)(document).on('mouseup', this.handleMouseUp);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            (0, _jquery2.default)(document).off('mouseup', this.handleMouseUp);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: parseToNumber(nextProps.value, this, true)
                });
            }
        }
    }, {
        key: 'increase',
        value: function increase() {
            var _this2 = this;

            interval = setInterval(function () {
                _this2.safeSetValue((parseFloat(_this2.state.value) || 0) + parseFloat(_this2.props.step), true);
            }, parseInt(this.props.speed));
            this.safeSetValue((parseFloat(this.state.value) || 0) + parseFloat(this.props.step), true);
        }
    }, {
        key: 'reduce',
        value: function reduce() {
            var _this3 = this;

            interval = setInterval(function () {
                _this3.safeSetValue((parseFloat(_this3.state.value) || 0) - parseFloat(_this3.props.step), true);
            }, parseInt(this.props.speed));
            this.safeSetValue((parseFloat(this.state.value) || 0) - parseFloat(this.props.step), true);
        }

        // input后跟随内容

    }, {
        key: 'endRender',
        value: function endRender() {
            return _react2.default.createElement(
                'div',
                { className: 'addon' },
                _react2.default.createElement('i', { onMouseDown: this.increase.bind(this),
                    className: 'fa fa-chevron-up' }),
                _react2.default.createElement('i', { onMouseDown: this.reduce.bind(this),
                    className: 'fa fa-chevron-down' })
            );
        }
    }, {
        key: 'handleChange',
        value: function handleChange(value) {
            this.safeSetValue(value);
        }
    }, {
        key: 'safeSetValue',
        value: function safeSetValue(value, fullLength) {
            this.setState({
                value: parseToNumber(value, this, fullLength)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var textStyle = {
                height: this.props.height
            };
            if (this.props.width) {
                textStyle.width = this.props.width;
            } else {
                textStyle.flexGrow = 1;
            }

            var mergedStyle = _extends(_lodash2.default.cloneDeep(this.props.style), textStyle);

            return _react2.default.createElement(
                'div',
                { style: mergedStyle,
                    className: 'lib-pc-number-lib-number' },
                _react2.default.createElement(_fitInput2.default, _extends({}, this.props, {
                    value: this.state.value,
                    onChange: this.handleChange.bind(this),
                    inputEndRender: this.endRender.bind(this) }))
            );
        }
    }]);

    return Number;
}(_react2.default.Component);

exports.default = Number;

Number.defaultProps = {
    style: {},
    min: -Infinity,
    max: Infinity,
    step: 1,
    float: false,
    speed: 200,
    onChange: function onChange() {}
};