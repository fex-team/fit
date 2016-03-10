'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitButton = require('fit-button');

var _fitButton2 = _interopRequireDefault(_fitButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
        margin: 3
};

var Demo = (function (_React$Component) {
        _inherits(Demo, _React$Component);

        function Demo() {
                _classCallCheck(this, Demo);

                return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).apply(this, arguments));
        }

        _createClass(Demo, [{
                key: 'render',
                value: function render() {
                        return _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                        _fitButton2.default,
                                        { type: 'primary',
                                                rounded: true,
                                                style: style },
                                        'Primary'
                                ),
                                _react2.default.createElement(
                                        _fitButton2.default,
                                        { type: 'success',
                                                rounded: true,
                                                style: style },
                                        'Success'
                                ),
                                _react2.default.createElement(
                                        _fitButton2.default,
                                        { type: 'info',
                                                size: 'xs',
                                                rounded: true,
                                                style: style },
                                        'Info'
                                ),
                                _react2.default.createElement(
                                        _fitButton2.default,
                                        { type: 'warning',
                                                size: 'sm',
                                                rounded: true,
                                                style: style },
                                        'Warning'
                                ),
                                _react2.default.createElement(
                                        _fitButton2.default,
                                        { type: 'danger',
                                                rounded: true,
                                                style: style },
                                        'Danger'
                                ),
                                _react2.default.createElement(
                                        _fitButton2.default,
                                        { type: 'dark',
                                                rounded: true,
                                                style: style },
                                        'Dark'
                                )
                        );
                }
        }]);

        return Demo;
})(_react2.default.Component);

exports.default = Demo;