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

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function (_React$Component) {
    (0, _inherits3.default)(Checkbox, _React$Component);

    function Checkbox(props) {
        (0, _classCallCheck3.default)(this, Checkbox);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Checkbox).call(this, props));
    }

    // 确定

    (0, _createClass3.default)(Checkbox, [{
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
            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-modal-lib-modal modal fade in',
                    onClick: this.handleOutClick.bind(this),
                    tabIndex: '-1',
                    style: { display: this.props.show ? 'block' : null } },
                _react2.default.createElement(
                    'div',
                    { className: 'modal-dialog',
                        onClick: this.handleModalClick.bind(this) },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-content' },
                        this.props.title === '' ? null : _react2.default.createElement(
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
                                this.props.title
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-body',
                                style: { marginTop: this.props.title === '' ? 20 : null } },
                            this.props.children
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-footer' },
                            _react2.default.createElement(
                                'button',
                                { type: 'button',
                                    onClick: this.handleCancel.bind(this),
                                    className: 'btn btn-secondary' },
                                this.props.cancelText
                            ),
                            _react2.default.createElement(
                                'button',
                                { type: 'button',
                                    className: 'btn btn-primary',
                                    onClick: this.handleOk.bind(this) },
                                this.props.okText
                            )
                        )
                    )
                )
            );
        }
    }]);
    return Checkbox;
}(_react2.default.Component);

exports.default = Checkbox;

Checkbox.defaultProps = {
    cancelText: '取消',
    okText: '确定',
    show: false,
    title: '',
    onOk: function onOk() {},
    onCancel: function onCancel() {}
};