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

require('./index.css');

var _statusBar = require('./image/status-bar.png');

var _statusBar2 = _interopRequireDefault(_statusBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Phone = function (_React$Component) {
    (0, _inherits3.default)(Phone, _React$Component);

    function Phone(props) {
        (0, _classCallCheck3.default)(this, Phone);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Phone).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Phone, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-phone-lib-phone mobile phone' },
                _react2.default.createElement('img', { src: _statusBar2.default,
                    className: 'status-bar' }),
                _react2.default.createElement(
                    'div',
                    { className: 'phone-content' },
                    this.props.children
                )
            );
        }
    }]);
    return Phone;
}(_react2.default.Component);

exports.default = Phone;

Phone.defaultProps = {};