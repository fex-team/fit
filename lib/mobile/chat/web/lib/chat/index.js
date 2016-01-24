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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chat = function (_React$Component) {
    (0, _inherits3.default)(Chat, _React$Component);

    function Chat(props) {
        (0, _classCallCheck3.default)(this, Chat);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Chat).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Chat, [{
        key: 'render',
        value: function render() {
            var containerClass = (0, _classnames2.default)({
                'lib-mobile-chat-web-lib-chat': true,
                'left': this.props.position === 'left',
                'right': this.props.position === 'right'
            });

            var textContentClass = (0, _classnames2.default)({
                'text-content': true,
                'left': this.props.position === 'left',
                'right': this.props.position === 'right'
            });

            var rightContentClass = (0, _classnames2.default)({
                'right-content': true,
                'left': this.props.position === 'left',
                'right': this.props.position === 'right'
            });

            return _react2.default.createElement(
                'div',
                { className: containerClass },
                _react2.default.createElement('img', { className: 'portrait',
                    src: this.props.portrait }),
                _react2.default.createElement(
                    'div',
                    { className: rightContentClass },
                    _react2.default.createElement(
                        'div',
                        { className: 'name' },
                        this.props.name
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: textContentClass },
                        this.props.content
                    )
                )
            );
        }
    }]);
    return Chat;
}(_react2.default.Component);

exports.default = Chat;

Chat.defaultProps = {
    // @desc 聊天内容
    // @type string
    content: '',

    // @desc 位置,聊天冒泡在左边或者右边
    // @type string
    // @enum left right
    position: 'left',

    // @desc 头像的url地址
    // @type string
    portrait: '',

    // @desc 用户名
    // @type string
    name: ''
};