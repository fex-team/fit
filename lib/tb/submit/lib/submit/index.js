'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
            showEmoji: false
        };
        return _this;
    }

    _createClass(Submit, [{
        key: 'handleSubmit',
        value: function handleSubmit() {
            var _this2 = this;

            var sendParams = {
                content: this.state.content,
                forumId: this.props.forumId,
                forumName: this.props.forumName,
                title: this.props.title,
                threadId: this.props.threadId,
                postId: this.props.postId,
                type: this.props.type
            };

            (0, _send2.default)(sendParams, function (res) {
                // 成功后删除发送内容
                _this2.setState({
                    content: ''
                });
                _this2.props.onSuccess(res, sendParams);
            }, function (errCode, res) {
                // 失败回调
                switch (errCode) {
                    case 10101:
                        console.log(res, '出验证码');
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
    }, {
        key: 'render',
        value: function render() {
            var style = _extends({}, _style2.default, this.props.style);

            var containerStyle = style.container;
            switch (this.props.position) {
                case 'bottom':
                    _extends(containerStyle, style.containerBottom);
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
                    onChange: this.handleEmojiChange.bind(this) })
            );
        }
    }]);

    return Submit;
})(_react2.default.Component);

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