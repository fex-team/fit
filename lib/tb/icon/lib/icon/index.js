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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function (_React$Component) {
    (0, _inherits3.default)(Icon, _React$Component);

    function Icon(props) {
        (0, _classCallCheck3.default)(this, Icon);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Icon, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('i', { style: this.props.style,
                className: 'tf-' + this.props.type });
        }
    }]);
    return Icon;
}(_react2.default.Component);

exports.default = Icon;

Icon.defaultProps = {
    // @desc 类型,用来区分不同图标
    // @type string
    type: 'post',

    // @desc 样式
    // @type object
    style: {}
};