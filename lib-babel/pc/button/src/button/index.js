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

require('fit-style');

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = (function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Button, [{
        key: 'handleClick',
        value: function handleClick() {
            if (this.props.disabled || this.props.loading) return;
            this.props.onClick();
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames2;

            var _props = this.props;
            var addonLeft = _props.addonLeft;
            var addonRight = _props.addonRight;
            var loading = _props.loading;
            var type = _props.type;
            var disabled = _props.disabled;
            var size = _props.size;
            var active = _props.active;
            var rounded = _props.rounded;
            var children = _props.children;

            var others = _objectWithoutProperties(_props, ['addonLeft', 'addonRight', 'loading', 'type', 'disabled', 'size', 'active', 'rounded', 'children']);

            // addon

            var addon = null;
            if (addonLeft || addonRight) {
                var _classNames;

                var addonClass = (0, _classnames2.default)((_classNames = {
                    'fa': true
                }, _defineProperty(_classNames, 'fa-' + (addonLeft || addonRight), true), _defineProperty(_classNames, 'btn-addon-left', addonLeft), _defineProperty(_classNames, 'btn-addon-right', addonRight), _classNames));
                addon = _react2.default.createElement('i', { className: addonClass });
            }

            // loading
            var LoadingComponent = false;
            if (loading === true) {
                var loadingClass = (0, _classnames2.default)({
                    'loading-container': true,
                    'show': true
                });
                LoadingComponent = _react2.default.createElement(
                    'div',
                    { className: loadingClass },
                    _react2.default.createElement('i', { className: 'fa fa-refresh fa-spin' })
                );
            }

            var btnClass = (0, _classnames2.default)((_classNames2 = {
                '_namespace': true,
                'btn': true
            }, _defineProperty(_classNames2, 'btn-' + type, true), _defineProperty(_classNames2, 'disabled', disabled || loading === true), _defineProperty(_classNames2, 'btn-addon', addonLeft || addonRight), _defineProperty(_classNames2, 'btn-rounded', rounded), _defineProperty(_classNames2, 'btn-lg', size && size === 'lg'), _defineProperty(_classNames2, 'btn-xs', size && size === 'xs'), _defineProperty(_classNames2, 'btn-sm', size && size === 'sm'), _defineProperty(_classNames2, 'active', active), _classNames2));

            return _react2.default.createElement(
                'button',
                _extends({}, others, { onClick: this.handleClick.bind(this),
                    className: btnClass }),
                _react2.default.createElement(
                    'div',
                    { style: { display: 'flex', justifyContent: 'center' } },
                    addonLeft ? addon : null,
                    children,
                    addonRight ? addon : null,
                    loading ? LoadingComponent : null
                )
            );
        }
    }]);

    return Button;
})(_react2.default.Component);

exports.default = Button;

Button.defaultProps = {
    // @desc 按钮风格
    // @enum default primary success info warning danger dark
    type: 'default',

    // @desc 是否禁用
    disabled: false,

    // @desc 是否处于激活状态
    active: false,

    // @desc 样式
    style: {},

    // @desc 是否loading中
    loading: false,

    // @desc 圆形按钮
    rounded: false,

    // @desc 点击后的回调
    onClick: function onClick() {}
};