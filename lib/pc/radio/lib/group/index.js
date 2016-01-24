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

var _fitButton = require('fit-button');

require('./index.css');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function (_React$Component) {
    (0, _inherits3.default)(Group, _React$Component);

    function Group(props) {
        (0, _classCallCheck3.default)(this, Group);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Group).call(this, props));

        _this.state = {
            value: _this.props.defaultValue || _this.props.value
        };
        return _this;
    }

    (0, _createClass3.default)(Group, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value
                });
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(value, checked) {
            var _this2 = this;

            if (checked) {
                this.setState({
                    value: value
                }, function () {
                    _this2.props.onChange(value);
                });
            }
        }
    }, {
        key: 'getChildren',
        value: function getChildren() {
            var _this3 = this;

            var childs = _react2.default.Children.map(this.props.children, function (child) {
                return _react2.default.cloneElement(child, {
                    style: _this3.props.vertical ? { marginTop: 10 } : { marginRight: 10 },
                    onChange: _this3.handleChange.bind(_this3, child.props.value),
                    checked: _this3.state.value === child.props.value
                });
            });

            var layoutClassname = (0, _classnames2.default)({
                'lib-pc-radio-lib-group': true,
                'vertical': this.props.vertical
            });

            switch (this.props.type) {
                case 'button':
                    var buttonChilds = _react2.default.Children.map(this.props.children, function (child) {
                        var props = {
                            onClick: _this3.handleChange.bind(_this3, child.props.value, true),
                            active: _this3.state.value === child.props.value,
                            disabled: child.props.disabled
                        };
                        return _react2.default.createElement(
                            _fitButton.Button,
                            props,
                            child.props.children
                        );
                    });
                    return _react2.default.createElement(
                        _fitButton.ButtonGroup,
                        { vertical: this.props.vertical,
                            style: this.props.style },
                        buttonChilds
                    );
                default:
                    return _react2.default.createElement(
                        'div',
                        { className: layoutClassname,
                            style: this.props.style },
                        childs
                    );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var childs = this.getChildren();

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
    return Group;
}(_react2.default.Component);

exports.default = Group;

Group.defaultProps = {
    value: null,
    style: {},
    vertical: false,
    onChange: function onChange() {}
};