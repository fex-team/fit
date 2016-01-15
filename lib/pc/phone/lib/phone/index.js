'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./index.css');

var _statusBar = require('./image/status-bar.png');

var _statusBar2 = _interopRequireDefault(_statusBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Phone = (function (_React$Component) {
    _inherits(Phone, _React$Component);

    function Phone(props) {
        _classCallCheck(this, Phone);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Phone).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Phone, [{
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
})(_react2.default.Component);

exports.default = Phone;

Phone.defaultProps = {};