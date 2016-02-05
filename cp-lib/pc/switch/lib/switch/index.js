'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

var Switch = function (_React$Component) {
    _inherits(Switch, _React$Component);

    function Switch(props) {
        _classCallCheck(this, Switch);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Switch).call(this, props));

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

    _createClass(Switch, [{
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
            }, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, 'checked', checked), _defineProperty(_classNames, 'disabled', disabled), _defineProperty(_classNames, this.props.type || 'info', true), _defineProperty(_classNames, 'size-' + (this.props.size || 'normal'), true), _classNames));

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