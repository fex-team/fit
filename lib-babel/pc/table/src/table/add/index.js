'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitButton = require('fit-button');

var _fitButton2 = _interopRequireDefault(_fitButton);

var _fitModal = require('fit-modal');

var _fitModal2 = _interopRequireDefault(_fitModal);

var _fitInput = require('fit-input');

var _fitInput2 = _interopRequireDefault(_fitInput);

var _fitSelect = require('fit-select');

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Add = (function (_React$Component) {
    _inherits(Add, _React$Component);

    function Add(props) {
        _classCallCheck(this, Add);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Add).call(this, props));

        _this.state = {
            show: false,
            fields: _this.props.fields
        };
        return _this;
    }

    _createClass(Add, [{
        key: 'handleShowModal',
        value: function handleShowModal() {
            this.setState({
                show: true
            });
        }
    }, {
        key: 'handleOk',
        value: function handleOk() {
            var _this2 = this;

            var params = {};

            this.state.fields.map(function (item) {
                if (item.inputValue) {
                    params[item.key] = item.inputValue;
                }
            });

            this.props.onAdd(params, function (info) {
                if (info.ok) {
                    _this2.setState({
                        show: false
                    });
                } else {
                    // 新增失败
                    console.log(info.message);
                }
            });
        }

        // 修改选项

    }, {
        key: 'handleChange',
        value: function handleChange(index, value) {
            var newFields = this.state.fields;
            newFields[index].inputValue = value;
            this.setState({
                fields: newFields
            });
        }
    }, {
        key: 'handleCancel',
        value: function handleCancel() {
            this.setState({
                show: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var Form = null;

            if (typeof this.props.opts.render !== 'function') {
                Form = this.state.fields.map(function (item, index) {
                    if (!item.add) return null;
                    return _react2.default.createElement(_fitInput2.default, { label: item.value,
                        onChange: _this3.handleChange.bind(_this3, index),
                        value: item.inputValue,
                        key: index,
                        labelWidth: 60,
                        style: { marginTop: 10 } });
                });
            } else {
                Form = this.props.opts.render();
            }

            return _react2.default.createElement(
                'div',
                { className: '_namespace' },
                _react2.default.createElement(
                    _fitButton2.default,
                    { onClick: this.handleShowModal.bind(this),
                        style: { marginLeft: 10 },
                        size: 'xs',
                        addonLeft: 'plus' },
                    '新增'
                ),
                _react2.default.createElement(
                    _fitModal2.default,
                    { title: '新增',
                        show: this.state.show,
                        onOk: this.handleOk.bind(this),
                        onCancel: this.handleCancel.bind(this) },
                    Form
                )
            );
        }
    }]);

    return Add;
})(_react2.default.Component);

exports.default = Add;

Add.defaultProps = {
    opts: {},
    fields: [],
    onAdd: function onAdd() {}
};