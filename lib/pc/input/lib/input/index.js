'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var Input = function (_React$Component) {
    (0, _inherits3.default)(Input, _React$Component);

    function Input(props) {
        (0, _classCallCheck3.default)(this, Input);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Input).call(this, props));

        _this.state = {
            showFlexTextarea: false
        };
        return _this;
    }

    (0, _createClass3.default)(Input, [{
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

            var mergedInputStyle = (0, _extends3.default)(_lodash2.default.cloneDeep(this.props.styles.input), textStyle);
            var mergedStyle = (0, _extends3.default)(_lodash2.default.cloneDeep(this.props.style), textStyle);

            var iconClass = (0, _classnames2.default)((_classNames = {
                'fa': true
            }, (0, _defineProperty3.default)(_classNames, 'fa-' + this.props.icon, true), (0, _defineProperty3.default)(_classNames, 'icon', true), _classNames));

            var childs = _react2.default.createElement('input', { type: 'text',
                id: 'j-input',
                value: this.props.value,
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