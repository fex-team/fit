'use strict';

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

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Captcha = function (_React$Component) {
    (0, _inherits3.default)(Captcha, _React$Component);

    function Captcha(props) {
        (0, _classCallCheck3.default)(this, Captcha);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Captcha).call(this, props));
    }

    (0, _createClass3.default)(Captcha, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            switch (this.props.type) {
                case 'web':
                    break;
                case 'native':
                    // 如果是native模式,暴露客户端回调全局变量
                    window.handleFreshCaptcha = function (url) {
                        _this2.core.handleFreshCaptcha(url);
                    };
                    break;
            }
        }

        // @external
        // 预备刷新验证码

    }, {
        key: 'prepareFreshCaptcha',
        value: function prepareFreshCaptcha() {
            switch (this.props.type) {
                case 'web':
                    this.core.handleFreshCaptcha('/cgi-bin/genimg?' + this.props.vcodeMd5);
                    break;
                case 'native':
                    // 客户端会调用 handleFreshCaptcha 触发全局注册的函数
                    window.location.href = "objc:jsChangeVcode(handleFreshCaptcha)";
                    break;
            }
        }
    }, {
        key: 'getCoreRef',
        value: function getCoreRef(ref) {
            this.core = ref;
            if (this.core) {
                this.prepareFreshCaptcha();
            }
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(vcode) {
            switch (this.props.type) {
                case 'web':
                    this.props.onComplete(vcode);
                    break;
                case 'native':
                    window.location.href = 'objc:jsSubmit(handleFreshCaptcha,' + vcode + ')';
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_core2.default, { ref: this.getCoreRef.bind(this),
                prepareFreshCaptcha: this.prepareFreshCaptcha.bind(this),
                onSubmit: this.handleSubmit.bind(this) });
        }
    }]);
    return Captcha;
}(_react2.default.Component);

exports.default = Captcha;

Captcha.defaultProps = {
    type: 'web', // web native,
    vcodeMd5: '',
    onComplete: function onComplete() {}
};