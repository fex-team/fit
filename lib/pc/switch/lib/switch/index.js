'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

var Switch = function (_React$Component) {
    (0, _inherits3.default)(Switch, _React$Component);

    function Switch(props) {
        (0, _classCallCheck3.default)(this, Switch);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Switch).call(this, props));

        var _props = _this.props;
        var checked = false;
        if ('checked' in _props) {
            checked = _props.checked;
        } else {
            checked = _props.defaultChecked;
        }
        _this.state = {
            checked: checked
        };
        return _this;
    }

    (0, _createClass3.default)(Switch, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('checked' in nextProps) {
                this.setState({
                    checked: nextProps.checked
                });
            }
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            var checked = !this.state.checked;
            this.setState({
                checked: checked
            });
            this.props.onChange(checked);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var _props2 = this.props;
            var className = _props2.className;
            var disabled = _props2.disabled;
            var style = _props2.style;
            var checkedChildren = _props2.checkedChildren;
            var unCheckedChildren = _props2.unCheckedChildren;

            var checked = this.state.checked;
            var switchClassName = (0, _classnames2.default)((_classNames = {
                'lib-pc-switch-lib-switch': true
            }, (0, _defineProperty3.default)(_classNames, className, !!className), (0, _defineProperty3.default)(_classNames, 'checked', checked), (0, _defineProperty3.default)(_classNames, 'disabled', disabled), (0, _defineProperty3.default)(_classNames, this.props.type || 'info', true), (0, _defineProperty3.default)(_classNames, 'size-' + (this.props.size || 'normal'), true), _classNames));

            var Switch = _react2.default.createElement(
                'span',
                { className: switchClassName,
                    onClick: disabled ? noop : this.toggle.bind(this),
                    style: style },
                _react2.default.createElement(
                    'span',
                    { className: 'inner' },
                    checked ? checkedChildren : unCheckedChildren
                )
            );

            if (!_lodash2.default.isEmpty(this.props.label)) {
                Switch = _react2.default.createElement(
                    'div',
                    { className: 'form-container' },
                    _react2.default.createElement(
                        'label',
                        { style: { width: this.props.labelWidth || null },
                            className: 'form-control-label' },
                        this.props.label
                    ),
                    Switch
                );
            }

            return Switch;
        }
    }]);
    return Switch;
}(_react2.default.Component);

exports.default = Switch;

Switch.defaultProps = {
    style: {},
    checkedChildren: null,
    unCheckedChildren: null,
    className: '',
    defaultChecked: false,
    onChange: noop
};