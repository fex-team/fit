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

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = (function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));
    }

    // 确定

    _createClass(Modal, [{
        key: 'handleOk',
        value: function handleOk() {
            this.props.onOk();
        }

        // 取消

    }, {
        key: 'handleCancel',
        value: function handleCancel() {
            this.props.onCancel();
        }
    }, {
        key: 'handleOutClick',
        value: function handleOutClick() {
            this.handleCancel();
        }
    }, {
        key: 'handleModalClick',
        value: function handleModalClick(event) {
            event.stopPropagation();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var show = _props.show;
            var title = _props.title;
            var children = _props.children;
            var renderOperateButton = _props.renderOperateButton;
            var cancelText = _props.cancelText;
            var okText = _props.okText;

            var others = _objectWithoutProperties(_props, ['className', 'show', 'title', 'children', 'renderOperateButton', 'cancelText', 'okText']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true,
                'modal': true,
                'fade': true,
                'in': true
            }, className, className));

            others.style = others.style || {};
            others.style.display = show ? 'block' : null;

            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes,
                    onClick: this.handleOutClick.bind(this),
                    tabIndex: '-1' }),
                _react2.default.createElement(
                    'div',
                    { className: 'modal-dialog',
                        onClick: this.handleModalClick.bind(this) },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-content' },
                        title === '' ? null : _react2.default.createElement(
                            'div',
                            { className: 'modal-header' },
                            _react2.default.createElement(
                                'button',
                                { type: 'button',
                                    className: 'close' },
                                _react2.default.createElement(
                                    'span',
                                    { onClick: this.handleCancel.bind(this) },
                                    '×'
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'sr-only' },
                                    'Close'
                                )
                            ),
                            _react2.default.createElement(
                                'h4',
                                { className: 'modal-title' },
                                title
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-body',
                                style: { marginTop: title === '' ? 20 : null } },
                            children
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-footer' },
                            renderOperateButton() ? renderOperateButton(this.handleOk.bind(this), this.handleCancel.bind(this)) : _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'button',
                                    { type: 'button',
                                        onClick: this.handleCancel.bind(this),
                                        className: 'btn btn-secondary' },
                                    cancelText
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { type: 'button',
                                        className: 'btn btn-primary',
                                        onClick: this.handleOk.bind(this) },
                                    okText
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Modal;
})(_react2.default.Component);

exports.default = Modal;

Modal.defaultProps = {
    // @desc 取消按钮文字
    cancelText: '取消',

    // @desc 确认按钮文字
    okText: '确定',

    // @desc 是否显示模态框
    show: false,

    // @desc 模态框标题
    title: '',

    // @desc 点击确认回调
    onOk: function onOk() {},

    // @desc 点击取消回调
    onCancel: function onCancel() {},

    // @desc 自定义按钮
    renderOperateButton: function renderOperateButton() {}
};