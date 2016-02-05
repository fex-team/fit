'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

require('fit-style');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
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
            var _classnames2;

            // addon
            var addon = null;
            var addonValue = this.props.addonLeft || this.props.addonRight;
            if (addonValue) {
                var _classnames;

                var addonClass = (0, _classnames4.default)((_classnames = {
                    'fa': true
                }, _defineProperty(_classnames, 'fa-' + addonValue, true), _defineProperty(_classnames, 'pull-right', this.props['addon-right']), _classnames));
                addon = _react2.default.createElement('i', { className: addonClass });
            }

            // loading
            var loading = false;
            if (this.props.loading !== false) {
                var loadingClass = (0, _classnames4.default)({
                    'loading-container': true,
                    'show': this.props.loading === true
                });
                loading = _react2.default.createElement(
                    'div',
                    { className: loadingClass },
                    _react2.default.createElement('i', { className: 'fa fa-refresh fa-spin' })
                );
            }

            var btnClass = (0, _classnames4.default)((_classnames2 = {
                'lib-pc-button-lib-button': true,
                'btn': true
            }, _defineProperty(_classnames2, 'btn-' + this.props.type, true), _defineProperty(_classnames2, 'disabled', this.props.disabled || this.props.loading === true), _defineProperty(_classnames2, 'btn-addon', addonValue), _defineProperty(_classnames2, 'btn-rounded', this.props.rounded), _defineProperty(_classnames2, 'btn-lg', this.props.size && this.props.size === 'lg'), _defineProperty(_classnames2, 'btn-xs', this.props.size && this.props.size === 'xs'), _defineProperty(_classnames2, 'btn-sm', this.props.size && this.props.size === 'sm'), _defineProperty(_classnames2, 'active', this.props.active), _classnames2));

            return _react2.default.createElement(
                'button',
                { style: this.props.style,
                    onClick: this.handleClick.bind(this),
                    className: btnClass },
                _react2.default.createElement(
                    'div',
                    { style: { display: 'flex', justifyContent: 'center' } },
                    addon ? addon : null,
                    this.props.children,
                    loading ? loading : null
                )
            );
        }
    }]);

    return Button;
}(_react2.default.Component);

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

    // @desc 点击后的回调
    onClick: function onClick() {}
};