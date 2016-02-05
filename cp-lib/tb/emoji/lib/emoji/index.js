'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

var _emoji = require('./image/emoji.png');

var _emoji2 = _interopRequireDefault(_emoji);

var _emojiList = require('./emoji-list');

var _emojiList2 = _interopRequireDefault(_emojiList);

var _textEmojiList = require('./text-emoji-list');

var _textEmojiList2 = _interopRequireDefault(_textEmojiList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Emoji = function (_React$Component) {
    _inherits(Emoji, _React$Component);

    function Emoji(props) {
        _classCallCheck(this, Emoji);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Emoji).call(this, props));

        _this.state = {
            showModal: false,
            type: 'default'
        };
        return _this;
    }

    _createClass(Emoji, [{
        key: 'handleOuterButtonClick',
        value: function handleOuterButtonClick() {
            this.setState({
                showModal: !this.state.showModal
            });
        }
    }, {
        key: 'handleEmojiClick',
        value: function handleEmojiClick(value) {
            this.props.onChange('#(' + value + ')');
        }
    }, {
        key: 'handleChangeType',
        value: function handleChangeType(value) {
            this.setState({
                type: value
            });
        }
    }, {
        key: 'closeModal',
        value: function closeModal() {
            this.setState({
                showModal: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var style = _extends({}, _style2.default, this.props.style);

            // emoji表情额外样式
            var emojiBg = {
                backgroundImage: 'url(' + _emoji2.default + ')'
            };

            var EmojiContent = null;

            switch (this.state.type) {
                case 'default':
                    EmojiContent = _emojiList2.default.map(function (item, index) {
                        var emojiPosition = {
                            backgroundPosition: '0 -' + index * 30 + 'px'
                        };
                        return _react2.default.createElement(
                            _reactTappable2.default,
                            { key: index,
                                onTap: _this2.handleEmojiClick.bind(_this2, item),
                                style: style.emojiContainer },
                            _react2.default.createElement('div', { style: _extends({}, style.emojiItem, emojiBg, emojiPosition) })
                        );
                    });
                    break;
                case 'text':
                    EmojiContent = _textEmojiList2.default.map(function (item, index) {
                        return _react2.default.createElement(
                            _reactTappable2.default,
                            { key: index,
                                onTap: _this2.handleEmojiClick.bind(_this2, item),
                                style: style.emojiTextContainer },
                            _react2.default.createElement(
                                'div',
                                { style: style.emojiTextItem },
                                item
                            )
                        );
                    });
                    break;
            }

            // 显示emoji模态框的逻辑
            var showModalDisplay = 'none';
            if (this.props.control) {
                showModalDisplay = this.props.visible ? 'flex' : 'none';
            } else {
                showModalDisplay = this.state.showModal ? 'flex' : 'none';
            }
            var modalContainerVisible = {
                display: showModalDisplay
            };

            // 根据不同展现方式,对模态框样式进行追加
            var modalContainerCustom = {};
            if (this.props.control) {
                modalContainerCustom.position = 'relative';
                modalContainerCustom.left = 0;
                modalContainerCustom.top = 0;
            }

            return _react2.default.createElement(
                'div',
                { style: style.container },
                !this.props.control ? _react2.default.createElement(
                    _reactTappable2.default,
                    { onTap: this.handleOuterButtonClick.bind(this) },
                    '按钮'
                ) : null,
                _react2.default.createElement(
                    'div',
                    { style: _extends({}, style.modalContainer, modalContainerVisible, modalContainerCustom) },
                    _react2.default.createElement(
                        'div',
                        { style: style.modalEmojiContainer },
                        EmojiContent
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: style.addonContainer },
                        _react2.default.createElement(
                            _reactTappable2.default,
                            { onTap: this.handleChangeType.bind(this, 'default'),
                                style: _extends({}, style.addonItem, this.state.type === 'default' ? style.addonItemActive : null) },
                            '默认'
                        ),
                        _react2.default.createElement(
                            _reactTappable2.default,
                            { onTap: this.handleChangeType.bind(this, 'text'),
                                style: _extends({}, style.addonItem, this.state.type === 'text' ? style.addonItemActive : null) },
                            '颜表情'
                        )
                    )
                )
            );
        }
    }]);

    return Emoji;
}(_react2.default.Component);

exports.default = Emoji;

Emoji.defaultProps = {
    // @desc 样式
    // @type object
    style: {},

    // @desc 选择一个表情的回调函数,第一个传参为选择表情的内容
    // @type function
    onChange: function onChange(value) {},

    // @desc 是否受外部控制
    // @type bool
    control: false,

    // @desc 是否显示表情框,只有受控时才有效
    // @type bool
    visible: false
};