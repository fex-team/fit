'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = (function (_React$Component) {
    _inherits(Input, _React$Component);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this, props));

        _this.state = {
            showFlexTextarea: false,
            value: _this.props.value,
            icon: _this.props.icon
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
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                value: nextProps.value
            });
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
            var value = event.target.value;

            this.setState({
                value: value
            });
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            this.props.onKeyDown(event);
        }
    }, {
        key: 'handleIconMouseEnter',
        value: function handleIconMouseEnter(event) {
            this.setState({
                icon: 'times'
            });
        }
    }, {
        key: 'handleIconMouseLeave',
        value: function handleIconMouseLeave() {
            this.setState({
                icon: this.props.icon
            });
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.setState({
                value: ''
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames2;

            var _props = this.props;
            var className = _props.className;
            var resize = _props.resize;
            var width = _props.width;
            var height = _props.height;

            var others = _objectWithoutProperties(_props, ['className', 'resize', 'width', 'height']);

            var classes = (0, _classnames2.default)(_defineProperty({
                '_namespace': true
            }, className, className));

            var textStyle = {
                height: height,
                resize: resize ? null : 'none'
            };

            if (width) {
                textStyle.width = width;
            } else {
                textStyle.flexGrow = 1;
            }

            var mergedInputStyle = _extends(_lodash2.default.cloneDeep(this.props.styles.input), textStyle);
            var mergedStyle = _extends(_lodash2.default.cloneDeep(this.props.style), textStyle);

            var iconClass = (0, _classnames2.default)((_classNames2 = {
                'fa': true
            }, _defineProperty(_classNames2, 'fa-' + this.state.icon, true), _defineProperty(_classNames2, 'icon', true), _classNames2));

            var childs = _react2.default.createElement('input', { type: 'text',
                id: 'j-input',
                value: this.state.value,
                defaultValue: this.props.defaultValue,
                className: 'form-control input',
                onFocus: this.handleFocus.bind(this),
                onBlur: this.handleBlur.bind(this),
                onChange: this.handleChange.bind(this),
                onKeyDown: this.handleKeyDown.bind(this),
                disabled: this.props.disabled,
                placeholder: this.props.placeholder,
                autoComplete: this.props.autocomplete ? 'on' : 'off',
                style: mergedInputStyle });

            if (this.props.textarea) {
                childs = _react2.default.createElement('textarea', {
                    id: 'j-input',
                    value: this.state.value,
                    defaultValue: this.props.defaultValue,
                    className: 'form-control input',
                    autoComplete: this.props.autocomplete ? 'on' : 'off',
                    onFocus: this.handleFocus.bind(this),
                    onBlur: this.handleBlur.bind(this),
                    onChange: this.handleChange.bind(this),
                    onKeyDown: this.handleKeyDown.bind(this),
                    disabled: this.props.disabled,
                    placeholder: this.props.placeholder,
                    style: mergedInputStyle });
            }

            var flexTextareaStyle = {
                width: this.state.showFlexTextarea ? this.props.flexWidth || width || this.$dom && this.$dom.find('#j-input').outerWidth() || 200 : this.$dom && this.$dom.find('#j-input').outerWidth(),
                height: this.state.showFlexTextarea ? this.props.flexHeight || 120 : this.$dom && this.$dom.find('#j-input').outerHeight() || 0
            };

            var flexTextareaClass = (0, _classnames2.default)({
                'form-control': true,
                'flex-textarea': true,
                'input': true
            });

            var flexChild = _react2.default.createElement('textarea', { id: 'j-flex-textarea',
                className: flexTextareaClass,
                value: this.state.value,
                defaultValue: this.props.defaultValue,
                onFocus: this.handleFlexTextareaFocus.bind(this),
                onBlur: this.handleFlexTextareaBlur.bind(this),
                autoComplete: this.props.autocomplete ? 'on' : 'off',
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
                            className: 'input-label' },
                        this.props.label
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: { position: 'relative' } },
                        childs,
                        this.state.icon ? _react2.default.createElement('i', { className: iconClass }) : null,
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
                                this.state.icon ? _react2.default.createElement('i', { className: iconClass }) : null,
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
                    className: classes },
                childs,
                (this.props.flexHeight || this.props.flexWidth) && _lodash2.default.isEmpty(this.props.label) && _lodash2.default.isEmpty(this.props.addonLeft) && _lodash2.default.isEmpty(this.props.addonRight) ? flexChild : null,
                this.state.icon && _lodash2.default.isEmpty(this.props.label) && _lodash2.default.isEmpty(this.props.addonLeft) && _lodash2.default.isEmpty(this.props.addonRight) ? _react2.default.createElement('i', { onMouseEnter: this.handleIconMouseEnter.bind(this),
                    onClick: this.props.handleIconClick,
                    onMouseLeave: this.handleIconMouseLeave.bind(this),
                    className: iconClass }) : null,
                this.props.inputEndRender && _lodash2.default.isEmpty(this.props.label) && _lodash2.default.isEmpty(this.props.addonLeft) && _lodash2.default.isEmpty(this.props.addonRight) ? this.props.inputEndRender() : null
            );
        }
    }]);

    return Input;
})(_react2.default.Component);

exports.default = Input;

Input.defaultProps = {
    style: {},

    styles: {
        input: {}
    },

    // @desc 输入内容的回调
    onChange: function onChange() {},

    // @desc 获取焦点的回调
    onFocus: function onFocus() {},

    // @desc 取消焦点的回调
    onBlur: function onBlur() {},

    // @desc 按下按键的回调
    onKeyDown: function onKeyDown() {},

    // @desc 是否禁用
    disabled: false,

    // @desc 宽度
    width: null,

    // @desc 占位文字
    placeholder: '',

    // @desc 是否为 textarea
    textarea: false,

    // @desc 是否允许拖拽大小
    resize: false,

    // @desc 自动缩放宽度
    flexWidth: null,

    // #desc 自动缩放高度
    flexHeight: null,

    // @desc 输入框后面的小图标
    icon: null,

    // @desc 输入框尾部后追加内容
    inputEndRender: null,

    // @desc 是否允许自动填充
    autocomplete: true
};