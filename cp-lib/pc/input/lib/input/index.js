'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

        _this.state = {
            showFlexTextarea: false
        };
        return _this;
    }

    _createClass(Input, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.$dom = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this));
            if (this.props.flexWidth || this.props.flexHeight) {
                this.forceUpdate();
                setTimeout(function () {
                    _this2.$dom.find('#j-flex-textarea').show();
                });
            }
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus(event) {
            this.props.onFocus(event.target.value, event);
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur(event) {
            this.props.onBlur(event.target.value, event);
        }
    }, {
        key: 'handleFlexTextareaFocus',
        value: function handleFlexTextareaFocus(event) {
            this.props.onFocus(event.target.value, event);
            this.setState({
                showFlexTextarea: true
            });
        }
    }, {
        key: 'handleFlexTextareaBlur',
        value: function handleFlexTextareaBlur(event) {
            this.props.onBlur(event.target.value, event);
            this.setState({
                showFlexTextarea: false
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            this.props.onChange(event.target.value, event);
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            this.props.onKeyDown(event);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var textStyle = {
                height: this.props.height,
                resize: this.props.resize ? null : 'none'
            };
            if (this.props.width) {
                textStyle.width = this.props.width;
            } else {
                textStyle.flexGrow = 1;
            }

            var mergedInputStyle = _extends(_lodash2.default.cloneDeep(this.props.styles.input), textStyle);
            var mergedStyle = _extends(_lodash2.default.cloneDeep(this.props.style), textStyle);

            var iconClass = (0, _classnames2.default)((_classNames = {
                'fa': true
            }, _defineProperty(_classNames, 'fa-' + this.props.icon, true), _defineProperty(_classNames, 'icon', true), _classNames));

            var childs = _react2.default.createElement('input', { type: 'text',
                id: 'j-input',
                value: this.props.value,
                defaultValue: this.props.defaultValue,
                className: 'form-control input',
                onFocus: this.handleFocus.bind(this),
                onBlur: this.handleBlur.bind(this),
                onChange: this.handleChange.bind(this),
                onKeyDown: this.handleKeyDown.bind(this),
                disabled: this.props.disabled,
                placeholder: this.props.placeholder,
                style: mergedInputStyle });

            if (this.props.textarea) {
                childs = _react2.default.createElement('textarea', {
                    id: 'j-input',
                    value: this.props.value,
                    defaultValue: this.props.defaultValue,
                    className: 'form-control input',
                    onFocus: this.handleFocus.bind(this),
                    onBlur: this.handleBlur.bind(this),
                    onChange: this.handleChange.bind(this),
                    onKeyDown: this.handleKeyDown.bind(this),
                    disabled: this.props.disabled,
                    placeholder: this.props.placeholder,
                    style: mergedInputStyle });
            }

            var flexTextareaStyle = {
                width: this.state.showFlexTextarea ? this.props.flexWidth || this.props.width || this.$dom && this.$dom.find('#j-input').outerWidth() || 200 : this.$dom && this.$dom.find('#j-input').outerWidth(),
                height: this.state.showFlexTextarea ? this.props.flexHeight || 120 : this.$dom && this.$dom.find('#j-input').outerHeight() || 0
            };

            var flexTextareaClass = (0, _classnames2.default)({
                'form-control': true,
                'flex-textarea': true,
                'input': true
            });

            var flexChild = _react2.default.createElement('textarea', { id: 'j-flex-textarea',
                className: flexTextareaClass,
                value: this.props.value,
                defaultValue: this.props.defaultValue,
                onFocus: this.handleFlexTextareaFocus.bind(this),
                onBlur: this.handleFlexTextareaBlur.bind(this),
                onChange: this.handleChange.bind(this),
                onKeyDown: this.handleKeyDown.bind(this),
                disabled: this.props.disabled,
                placeholder: this.props.placeholder,
                style: flexTextareaStyle });

            if (!_lodash2.default.isEmpty(this.props.label)) {
                childs = _react2.default.createElement(
                    'div',
                    { className: 'form-container' },
                    _react2.default.createElement(
                        'label',
                        { style: { width: this.props.labelWidth || null },
                            className: 'form-control-label' },
                        this.props.label
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { position: 'relative' } },
                        childs,
                        this.props.icon ? _react2.default.createElement('i', { className: iconClass }) : null,
                        this.props.flexHeight || this.props.flexWidth ? flexChild : null,
                        this.props.inputEndRender ? this.props.inputEndRender() : null
                    )
                );
            }

            if ((!_lodash2.default.isEmpty(this.props.addonLeft) || !_lodash2.default.isEmpty(this.props.addonRight)) && _lodash2.default.isEmpty(this.props.label)) {
                childs = _react2.default.createElement(
                    'form',
                    { className: 'form-inline' },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-group' },
                            _lodash2.default.isEmpty(this.props.addonLeft) ? null : _react2.default.createElement(
                                'div',
                                { className: 'input-group-addon' },
                                this.props.addonLeft
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: { position: 'relative' } },
                                childs,
                                this.props.icon ? _react2.default.createElement('i', { className: iconClass }) : null,
                                this.props.flexHeight || this.props.flexWidth ? flexChild : null,
                                this.props.inputEndRender ? this.props.inputEndRender() : null
                            ),
                            _lodash2.default.isEmpty(this.props.addonRight) ? null : _react2.default.createElement(
                                'div',
                                { className: 'input-group-addon' },
                                this.props.addonRight
                            )
                        )
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                { style: mergedStyle,
                    className: 'lib-pc-input-lib-input' },
                childs,
                (this.props.flexHeight || this.props.flexWidth) && _lodash2.default.isEmpty(this.props.label) && _lodash2.default.isEmpty(this.props.addonLeft) && _lodash2.default.isEmpty(this.props.addonRight) ? flexChild : null,
                this.props.icon && _lodash2.default.isEmpty(this.props.label) && _lodash2.default.isEmpty(this.props.addonLeft) && _lodash2.default.isEmpty(this.props.addonRight) ? _react2.default.createElement('i', { className: iconClass }) : null,
                this.props.inputEndRender && _lodash2.default.isEmpty(this.props.label) && _lodash2.default.isEmpty(this.props.addonLeft) && _lodash2.default.isEmpty(this.props.addonRight) ? this.props.inputEndRender() : null
            );
        }
    }]);

    return Input;
}(_react2.default.Component);

exports.default = Input;

Input.defaultProps = {
    style: {},
    styles: {
        input: {}
    },
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    onKeyDown: function onKeyDown() {},
    disabled: false,
    width: null,
    placeholder: '',
    textarea: false,
    resize: false,
    flexWidth: null,
    flexHeight: null,
    icon: null,
    inputEndRender: null
};