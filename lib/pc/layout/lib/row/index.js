'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Row = function (_React$Component) {
    (0, _inherits3.default)(Row, _React$Component);

    function Row() {
        (0, _classCallCheck3.default)(this, Row);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Row).apply(this, arguments));
    }

    (0, _createClass3.default)(Row, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props;
            var type = _props.type;
            var justify = _props.justify;
            var align = _props.align;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['type', 'justify', 'align', 'className']);

            var classes = (0, _classnames2.default)((_classNames = {
                'row': true
            }, (0, _defineProperty3.default)(_classNames, 'row-' + type, type), (0, _defineProperty3.default)(_classNames, 'row-' + type + '-' + justify, justify), (0, _defineProperty3.default)(_classNames, 'row-' + type + '-' + align, align), (0, _defineProperty3.default)(_classNames, className, className), _classNames));
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: classes }),
                this.props.children
            );
        }
    }]);
    return Row;
}(_react2.default.Component);

exports.default = Row;
exports.default = Row;