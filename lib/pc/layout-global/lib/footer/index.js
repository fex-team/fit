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

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function (_React$Component) {
    (0, _inherits3.default)(Footer, _React$Component);

    function Footer(props) {
        (0, _classCallCheck3.default)(this, Footer);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Footer).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Footer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.store.dispatch((0, _actions.setFooterHeight)(this.props.height || this.props.footerHeight || 100));
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                position: 'absolute',
                left: this.props.left || 0,
                bottom: this.props.bottom || 0,
                height: this.props.height || this.props.footerHeight || 100,
                width: this.props.width || this.props.footerWidth || '100%'
            };

            return _react2.default.createElement(
                'div',
                { style: style },
                this.props.children
            );
        }
    }]);
    return Footer;
}(_react2.default.Component);

exports.default = Footer;