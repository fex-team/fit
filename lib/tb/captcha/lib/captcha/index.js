'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core = require('./core');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Captcha = (function (_React$Component) {
    _inherits(Captcha, _React$Component);

    function Captcha(props) {
        _classCallCheck(this, Captcha);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Captcha).call(this, props));
    }

    _createClass(Captcha, [{
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
                    console.log('handlesubmit', vcode);
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
})(_react2.default.Component);

exports.default = Captcha;

Captcha.defaultProps = {
    type: 'web', // web native,
    vcodeMd5: '',
    onComplete: function onComplete() {}
};