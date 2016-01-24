'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Submit = function (_React$Component) {
    (0, _inherits3.default)(Submit, _React$Component);

    function Submit(props) {
        (0, _classCallCheck3.default)(this, Submit);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Submit).call(this, props));

        _this.state = {
            content: '',
            showEmoji: false,
            showCaptcha: false
        };
        return _this;
    }

    (0, _createClass3.default)(Submit, [{
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var _this2 = this;

            var vcode = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

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
                // 成功后删除发送内容
                _this2.setState({
                    content: '',
                    showCaptcha: false
                });
                _this2.props.onSuccess(res, sendParams);
            }, function (errCode, res) {
                // 失败回调
                switch (errCode) {
                    case 402:
                    case 10101:
                        if (vcode === null) {
                            // 不是验证码提交的,刷出验证码
                            _this2.vcodeMd5 = res.data.vcode_md5;
                            _this2.setState({
                                showCaptcha: true
                            });
                        } else {
                            // 是验证码提交的,刷新验证码
                            _this2.refs['captcha'].prepareFreshCaptcha();
                        }
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
            var style = (0, _extends3.default)({}, _style2.default, this.props.style);

            var containerStyle = style.container;
            switch (this.props.position) {
                case 'bottom':
                    (0, _extends3.default)(containerStyle, style.containerBottom);
                    break;
            }

            return _react2.default.createElement(
                'div',
                { style: containerStyle },
                _react2.default.createElement(
                    'div',
                    { style: style.inputContainer },
                    _react2.default.createElement(
                        _reactTappable2.default,
                        { onTap: this.handleToggleEmoji.bind(this) },
                        _react2.default.createElement(_tbIcon2.default, { type: 'smile',
                            style: style.font })
                    ),
                    _react2.default.createElement('input', { onChange: this.handleInputChange.bind(this),
                        onFocus: this.handleHideEmoji.bind(this),
                        style: style.input,
                        value: this.state.content,
                        placeholder: '想说点什么..' }),
                    _react2.default.createElement(
                        _reactTappable2.default,
                        { onTap: this.handleSubmit.bind(this),
                            style: style.submit },
                        '发送'
                    )
                ),
                _react2.default.createElement(_tbEmoji2.default, { control: true,
                    visible: this.state.showEmoji,
                    onChange: this.handleEmojiChange.bind(this) }),
                this.state.showCaptcha ? _react2.default.createElement(_tbCaptcha2.default, { type: 'web',
                    vcodeMd5: this.vcodeMd5,
                    ref: 'captcha',
                    onComplete: this.handleCaptchaComplete.bind(this) }) : null
            );
        }
    }]);
    return Submit;
}(_react2.default.Component);

exports.default = Submit;

Submit.defaultProps = {
    // @desc 样式
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
    position: 'free',

    // @desc 发帖成功后的回调 第一个参数是返回值,第二个参数是当前发送的参数
    // @type function
    onSuccess: function onSuccess(res, params) {}
};