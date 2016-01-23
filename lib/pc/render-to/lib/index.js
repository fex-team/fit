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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RenderTo = function (_React$Component) {
    (0, _inherits3.default)(RenderTo, _React$Component);

    function RenderTo(props) {
        (0, _classCallCheck3.default)(this, RenderTo);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RenderTo).call(this, props));
    }

    (0, _createClass3.default)(RenderTo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.popups = [];
            var selector = document.querySelectorAll(this.props.selector);
            Array.prototype.slice.call(selector).forEach(function (parent) {
                var popup = document.createElement('div');
                parent.appendChild(popup);
                _this2.popups.push(popup);
            });

            this._renderLayer();
            this.selectorLength = selector.length;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this._renderLayer();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var _this3 = this;

            this.popups.forEach(function (popup) {
                _reactDom2.default.unmountComponentAtNode(popup);
            });
            var selector = document.querySelectorAll(this.props.selector);

            if (selector.length !== this.selectorLength) {
                console.warn('selector amount had been changed!');
            }

            Array.prototype.slice.call(document.querySelectorAll(this.props.selector)).forEach(function (parent) {
                var popup = _this3.popups.shift();
                parent.removeChild(popup);
            });
        }
    }, {
        key: '_renderLayer',
        value: function _renderLayer() {
            var _this4 = this;

            this.popups.forEach(function (popup) {
                _reactDom2.default.render(_this4.props.children, popup);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        }
    }]);
    return RenderTo;
}(_react2.default.Component);

exports.default = RenderTo;

RenderTo.defaultProps = {
    selector: 'body'
};