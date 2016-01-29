'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Col = function (_React$Component) {
    _inherits(Col, _React$Component);

    function Col() {
        _classCallCheck(this, Col);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Col).apply(this, arguments));
    }

    _createClass(Col, [{
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

            var others = _objectWithoutProperties(_props, ['span', 'order', 'offset', 'push', 'pull', 'className']);

            var classes = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'col-' + span, span), _defineProperty(_classNames, 'col-order-' + order, order), _defineProperty(_classNames, 'col-offset-' + offset, offset), _defineProperty(_classNames, 'col-push-' + push, push), _defineProperty(_classNames, 'col-pull-' + pull, pull), _defineProperty(_classNames, className, className), _classNames));
            return _react2.default.createElement(
                'div',
                _extends({}, others, { className: classes }),
                this.props.children
            );
        }
    }]);

    return Col;
}(_react2.default.Component);

exports.default = Col;
exports.default = Col;