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

var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header(props) {
        (0, _classCallCheck3.default)(this, Header);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Header).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Header, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.store.dispatch((0, _actions.setHeaderHeight)(this.props.height || this.props.headerHeight || 0));
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                position: 'absolute',
                top: 0,
                left: 0,
                width: this.props.width || this.props.headerWidth || '100%',
                height: this.props.height || this.props.headerHeight || 0
            };

            return _react2.default.createElement(
                'div',
                { style: style },
                this.props.children
            );
        }
    }]);
    return Header;
}(_react2.default.Component);

exports.default = Header;