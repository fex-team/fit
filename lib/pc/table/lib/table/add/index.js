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

var _fitButton = require('fit-button');

var _fitButton2 = _interopRequireDefault(_fitButton);

var _fitModal = require('fit-modal');

var _fitModal2 = _interopRequireDefault(_fitModal);

var _fitInput = require('fit-input');

var _fitInput2 = _interopRequireDefault(_fitInput);

var _fitSelect = require('fit-select');

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Add = function (_React$Component) {
    (0, _inherits3.default)(Add, _React$Component);

    function Add(props) {
        (0, _classCallCheck3.default)(this, Add);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Add).call(this, props));

        _this.state = {
            show: false,
            fields: _this.props.fields
        };
        return _this;
    }

    (0, _createClass3.default)(Add, [{
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
                { className: 'lib-pc-table-lib-table-add' },
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
}(_react2.default.Component);

exports.default = Add;

Add.defaultProps = {
    opts: {},
    fields: [],
    onAdd: function onAdd() {}
};