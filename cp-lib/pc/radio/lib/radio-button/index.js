'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitButton = require('fit-button');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioButton = function (_React$Component) {
    _inherits(RadioButton, _React$Component);

    function RadioButton(props) {
        _classCallCheck(this, RadioButton);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RadioButton).call(this, props));

        _this.state = {
            checked: _this.props.defaultChecked || _this.props.checked
        };
        return _this;
    }

    _createClass(RadioButton, [{
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
                'i-checks': true,
                'i-checks-lg': this.props.size === 'large',
                'i-checks-sm': this.props.size === 'small'
            });

            return _react2.default.createElement(
                'label',
                { style: this.props.style,
                    className: classname },
                _react2.default.createElement('input', { type: 'radio',
                    disabled: this.props.disabled,
                    checked: this.state.checked,
                    onChange: this.handleChange.bind(this) }),
                _react2.default.createElement('i', null),
                this.props.children
            );
        }
    }]);

    return RadioButton;
}(_react2.default.Component);

exports.default = RadioButton;

RadioButton.defaultProps = {
    style: {},
    disabled: false,
    onChange: function onChange() {}
};