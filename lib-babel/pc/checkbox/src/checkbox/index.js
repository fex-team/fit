'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = (function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox(props) {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, props));

        _this.state = {
            checked: _this.props.defaultChecked || _this.props.checked
        };
        return _this;
    }

    _createClass(Checkbox, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('checked' in nextProps) {
                this.setState({
                    checked: nextProps.checked
                });
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var _this2 = this;

            this.setState({
                checked: event.target.checked
            }, function () {
                _this2.props.onChange(_this2.state.checked);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var size = _props.size;
            var disabled = _props.disabled;
            var label = _props.label;
            var children = _props.children;

            var others = _objectWithoutProperties(_props, ['className', 'size', 'disabled', 'label', 'children']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true,
                'i-checks': true,
                'i-checks-lg': size === 'large',
                'i-checks-sm': size === 'small',
                'disabled': disabled,
                'form-container': !_lodash2.default.isEmpty(label)
            }, className, className));

            var childs = _react2.default.createElement(
                'label',
                _extends({}, others, { className: classes }),
                _react2.default.createElement('input', { type: 'checkbox',
                    disabled: disabled,
                    checked: this.state.checked,
                    onChange: this.handleChange.bind(this) }),
                _react2.default.createElement('i', null),
                _react2.default.createElement(
                    'span',
                    null,
                    children
                )
            );

            if (!_lodash2.default.isEmpty(label)) {
                childs = _react2.default.createElement(
                    'div',
                    _extends({}, others, { className: classes }),
                    _react2.default.createElement(
                        'label',
                        { style: { width: this.props.labelWidth || null },
                            className: 'form-control-label' },
                        label
                    ),
                    childs
                );
            }

            return childs;
        }
    }]);

    return Checkbox;
})(_react2.default.Component);

exports.default = Checkbox;

Checkbox.defaultProps = {
    // @desc 是否禁用
    disabled: false,

    // @desc 值产生修改的回调
    onChange: function onChange() {}
};