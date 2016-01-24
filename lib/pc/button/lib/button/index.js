'use strict';

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

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

require('fit-style');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function (_React$Component) {
    (0, _inherits3.default)(Layout, _React$Component);

    function Layout(props) {
        (0, _classCallCheck3.default)(this, Layout);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Layout).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Layout, [{
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
                }, (0, _defineProperty3.default)(_classnames, 'fa-' + addonValue, true), (0, _defineProperty3.default)(_classnames, 'pull-right', this.props['addon-right']), _classnames));
                addon = _react2.default.createElement('i', { className: addonClass });
            }

            // loading
            var loading = null;
            if (this.props.loading !== null) {
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
            }, (0, _defineProperty3.default)(_classnames2, 'btn-' + this.props.type, true), (0, _defineProperty3.default)(_classnames2, 'disabled', this.props.disabled || this.props.loading === true), (0, _defineProperty3.default)(_classnames2, 'btn-addon', addonValue), (0, _defineProperty3.default)(_classnames2, 'btn-rounded', this.props.rounded), (0, _defineProperty3.default)(_classnames2, 'btn-lg', this.props.size && this.props.size === 'lg'), (0, _defineProperty3.default)(_classnames2, 'btn-xs', this.props.size && this.props.size === 'xs'), (0, _defineProperty3.default)(_classnames2, 'btn-sm', this.props.size && this.props.size === 'sm'), (0, _defineProperty3.default)(_classnames2, 'active', this.props.active), _classnames2));

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
    return Layout;
}(_react2.default.Component);

exports.default = Layout;

Layout.defaultProps = {
    type: 'default',
    disabled: false,
    active: false,
    style: {},
    loading: null,
    onClick: function onClick() {}
};