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

var Emoji = function (_React$Component) {
    (0, _inherits3.default)(Emoji, _React$Component);

    function Emoji(props) {
        (0, _classCallCheck3.default)(this, Emoji);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Emoji).call(this, props));

        _this.state = {
            showModal: false,
            type: 'default'
        };
        return _this;
    }

    (0, _createClass3.default)(Emoji, [{
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

            var style = (0, _extends3.default)({}, _style2.default, this.props.style);

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
                            _react2.default.createElement('div', { style: (0, _extends3.default)({}, style.emojiItem, emojiBg, emojiPosition) })
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
                    { style: (0, _extends3.default)({}, style.modalContainer, modalContainerVisible, modalContainerCustom) },
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
                                style: (0, _extends3.default)({}, style.addonItem, this.state.type === 'default' ? style.addonItemActive : null) },
                            '默认'
                        ),
                        _react2.default.createElement(
                            _reactTappable2.default,
                            { onTap: this.handleChangeType.bind(this, 'text'),
                                style: (0, _extends3.default)({}, style.addonItem, this.state.type === 'text' ? style.addonItemActive : null) },
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