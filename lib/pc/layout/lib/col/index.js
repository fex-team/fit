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

var Col = function (_React$Component) {
    (0, _inherits3.default)(Col, _React$Component);

    function Col() {
        (0, _classCallCheck3.default)(this, Col);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Col).apply(this, arguments));
    }

    (0, _createClass3.default)(Col, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props;
            var span = _props.span;
            var order = _props.order;
            var offset = _props.offset;
            var push = _props.push;
            var pull = _props.pull;
            var className = _props.className;
            var others = (0, _objectWithoutProperties3.default)(_props, ['span', 'order', 'offset', 'push', 'pull', 'className']);

            var classes = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, 'col-' + span, span), (0, _defineProperty3.default)(_classNames, 'col-order-' + order, order), (0, _defineProperty3.default)(_classNames, 'col-offset-' + offset, offset), (0, _defineProperty3.default)(_classNames, 'col-push-' + push, push), (0, _defineProperty3.default)(_classNames, 'col-pull-' + pull, pull), (0, _defineProperty3.default)(_classNames, className, className), _classNames));
            return _react2.default.createElement(
                'div',
                (0, _extends3.default)({}, others, { className: classes }),
                this.props.children
            );
        }
    }]);
    return Col;
}(_react2.default.Component);

exports.default = Col;
exports.default = Col;