'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tbEmoji = require('tb-emoji');

var _tbEmoji2 = _interopRequireDefault(_tbEmoji);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

var _send = require('../send');

var _send2 = _interopRequireDefault(_send);

var _tbIcon = require('tb-icon');

var _tbIcon2 = _interopRequireDefault(_tbIcon);

var _tbCaptcha = require('tb-captcha');

var _tbCaptcha2 = _interopRequireDefault(_tbCaptcha);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Submit = (function (_React$Component) {
    _inherits(Submit, _React$Component);

    function Submit(props) {
        _classCallCheck(this, Submit);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Submit).call(this, props));

        _this.state = {
            content: '',
            showEmoji: false,
            showCaptcha: false,
            loading: false
        };
        return _this;
    }

    _createClass(Submit, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var _this2 = this;

            var vcode = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

            // 进入loading状态
            this.setState({
                loading: true
            });

            var sendParams = {
                content: this.state.content,
                forumId: this.props.forumId,
                forumName: this.props.forumName,
                title: this.props.title,
                threadId: this.props.threadId,
                postId: this.props.postId,
                type: this.props.type
            };

            // 包含验证码
            if (vcode) {
                sendParams.bs = this.vcodeMd5;
                sendParams['input_vcode'] = vcode;
            }

            (0, _send2.default)(sendParams, function (res) {
                // 成功后删除发送内容,并取消loading状态
                _this2.setState({
                    content: '',
                    showCaptcha: false,
                    loading: false
                });
                _this2.props.onSuccess(res, sendParams);
            }, function (errCode, res) {
                // 失败回调
                switch (errCode) {
                    case 402:
                    case 10101:
                        if (vcode === null) {
                            // 不是验证码提交的,刷出验证码
                            // 先让输入框取消焦点
                            _reactDom2.default.findDOMNode(_this2.refs['input']).blur();

                            _this2.vcodeMd5 = res.data.vcode_md5;
                            _this2.setState({
                                showCaptcha: true
                            });
                        } else {
                            // 在提交验证码,刷新验证码
                            _this2.refs['captcha'].prepareFreshCaptcha();
                        }
                        break;
                    case 419:
                        // 操作过于频繁
                        if (vcode !== null) {
                            // 在提交验证码,刷新验证码
                            _this2.refs['captcha'].prepareFreshCaptcha();
                        }
                        break;
                    case 999:
                        console.log('999');
                        // 未知错误
                        // 未登录也是这个错误,跳转到登录页
                        location.href = 'http://wappass.baidu.com/passport/?login&u=' + location.href + '&originid=2&bd_page_type=1&tn=bdIndex&regtype=1&tpl=tb';
                        break;
                }
            });
        }
    }, {
        key: 'handleInputChange',
        value: function handleInputChange(event) {
            this.setState({
                content: event.target.value
            });
        }
    }, {
        key: 'handleToggleEmoji',
        value: function handleToggleEmoji() {
            this.setState({
                showEmoji: !this.state.showEmoji
            });
        }
    }, {
        key: 'handleHideEmoji',
        value: function handleHideEmoji() {
            this.setState({
                showEmoji: false
            });
        }
    }, {
        key: 'handleEmojiChange',
        value: function handleEmojiChange(value) {
            this.setState({
                content: this.state.content + value
            });
        }

        // 验证码输入完毕

    }, {
        key: 'handleCaptchaComplete',
        value: function handleCaptchaComplete(vcode) {
            // 带着vcode发帖
            this.handleSubmit(null, vcode);
        }
    }, {
        key: 'render',
        value: function render() {
            var containerClass = (0, _classnames2.default)({
                'lib-tb-submit-lib-submit': true,
                'container-bottom': this.props.position === 'bottom'
            });

            return _react2.default.createElement(
                'div',
                { style: this.props.style,
                    className: containerClass },
                _react2.default.createElement(
                    'div',
                    { className: 'input-container' },
                    _react2.default.createElement(
                        _reactTappable2.default,
                        { onTap: this.handleToggleEmoji.bind(this),
                            className: 'font' },
                        _react2.default.createElement(_tbIcon2.default, { type: 'smile' })
                    ),
                    _react2.default.createElement('input', { onChange: this.handleInputChange.bind(this),
                        onFocus: this.handleHideEmoji.bind(this),
                        disabled: this.state.loading,
                        className: 'input',
                        value: this.state.content,
                        ref: 'input',
                        placeholder: '想说点什么..' }),
                    _react2.default.createElement(
                        _reactTappable2.default,
                        { onTap: this.handleSubmit.bind(this),
                            className: 'submit' },
                        '发送'
                    )
                ),
                !this.state.showCaptcha ? _react2.default.createElement(_tbEmoji2.default, { control: true,
                    visible: this.state.showEmoji,
                    onChange: this.handleEmojiChange.bind(this) }) : null,
                this.state.showCaptcha ? _react2.default.createElement(_tbCaptcha2.default, { type: 'web',
                    vcodeMd5: this.vcodeMd5,
                    ref: 'captcha',
                    onComplete: this.handleCaptchaComplete.bind(this) }) : null
            );
        }
    }]);

    return Submit;
})(_react2.default.Component);

exports.default = Submit;

Submit.defaultProps = {
    // @desc 外层样式
    // @type object
    style: {},

    // @desc 类型 发帖:post 回帖:reply 回复楼中楼:comment
    // @type string
    // @enum post reply comment
    type: 'post',

    // @desc 帖子id
    // @type int
    threadId: -1,

    // @desc 回复id
    // @type int
    postId: -1,

    // @desc 吧id
    // @type int
    forumId: -1,

    // @desc 吧名
    // @type string
    forumName: '',

    // @desc 发帖标题,只有发帖时有效
    // @type string
    title: '',

    // @desc 发帖内容,只有独立模式有效
    // @type string
    content: '',

    // @desc 位置 free表示当前位置,bottom固定在底部
    // @type string
    // @enum free bottom
    position: 'free'
};