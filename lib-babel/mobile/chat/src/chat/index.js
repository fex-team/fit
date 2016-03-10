'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chat = (function (_React$Component) {
    _inherits(Chat, _React$Component);

    function Chat(props) {
        _classCallCheck(this, Chat);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Chat).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Chat, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var position = _props.position;
            var portrait = _props.portrait;
            var name = _props.name;
            var nameRender = _props.nameRender;
            var content = _props.content;
            var className = _props.className;

            var others = _objectWithoutProperties(_props, ['position', 'portrait', 'name', 'nameRender', 'content', 'className']);

            var containerClass = (0, _classnames2.default)(_defineProperty({
                '_namespace': true,
                'left': position === 'left',
                'right': position === 'right'
            }, className, className));

            var textContentClass = (0, _classnames2.default)({
                'text-content': true,
                'left': position === 'left',
                'right': position === 'right'
            });

            var rightContentClass = (0, _classnames2.default)({
                'right-content': true,
                'left': position === 'left',
                'right': position === 'right'
            });

            return _react2.default.createElement(
                'div',
                _extends({ className: containerClass }, others),
                _react2.default.createElement('img', { className: 'portrait',
                    src: portrait }),
                _react2.default.createElement(
                    'div',
                    { className: rightContentClass },
                    _react2.default.createElement(
                        'div',
                        { className: 'name' },
                        !_lodash2.default.isEmpty(nameRender()) ? nameRender() : name
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: textContentClass },
                        content
                    )
                )
            );
        }
    }]);

    return Chat;
})(_react2.default.Component);

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
    name: '',

    // @desc 用户名（自定义渲染）
    // @type function
    nameRender: function nameRender() {}
};