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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function (_React$Component) {
    (0, _inherits3.default)(Checkbox, _React$Component);

    function Checkbox(props) {
        (0, _classCallCheck3.default)(this, Checkbox);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Checkbox).call(this, props));

        _this.state = {
            checked: _this.props.defaultChecked || _this.props.checked
        };
        return _this;
    }

    (0, _createClass3.default)(Checkbox, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('checked' in nextProps) {
                this.setState({
                    checked: nextProps.checked
                });
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var _this2 = this;

            this.setState({
                checked: event.target.checked
            }, function () {
                _this2.props.onChange(_this2.state.checked);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var classname = (0, _classnames2.default)({
                'lib-pc-checkbox-lib-checkbox': true,
                'i-checks': true,
                'i-checks-lg': this.props.size === 'large',
                'i-checks-sm': this.props.size === 'small',
                'disabled': this.props.disabled
            });

            var childs = _react2.default.createElement(
                'label',
                { style: this.props.style,
                    className: classname },
                _react2.default.createElement('input', { type: 'checkbox',
                    disabled: this.props.disabled,
                    checked: this.state.checked,
                    onChange: this.handleChange.bind(this) }),
                _react2.default.createElement('i', null),
                _react2.default.createElement(
                    'span',
                    null,
                    this.props.children
                )
            );

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
                    childs
                );
            }

            return childs;
        }
    }]);
    return Checkbox;
}(_react2.default.Component);

exports.default = Checkbox;

Checkbox.defaultProps = {
    style: {},
    disabled: false,
    onChange: function onChange() {}
};