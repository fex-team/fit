'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _fitButton = require('fit-button');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = (function (_React$Component) {
    _inherits(Group, _React$Component);

    function Group(props) {
        _classCallCheck(this, Group);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Group).call(this, props));

        _this.state = {
            value: _this.props.defaultValue || _this.props.value
        };
        return _this;
    }

    _createClass(Group, [{
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

            if (!_.isEmpty(this.props.label)) {
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
})(_react2.default.Component);

exports.default = Group;

Group.defaultProps = {
    value: null,
    style: {},
    vertical: false,
    onChange: function onChange() {}
};