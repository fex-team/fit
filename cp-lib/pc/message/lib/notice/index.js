'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notice = function (_React$Component) {
    _inherits(Notice, _React$Component);

    function Notice(props) {
        _classCallCheck(this, Notice);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Notice).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Notice, [{
        key: 'render',
        value: function render() {
            var typeClass = (0, _classnames2.default)(_defineProperty({
                'lyct': true
            }, this.props.type, true));

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-message-lib-notice' },
                _react2.default.createElement(
                    'div',
                    { className: 'm-layer z-show' },
                    _react2.default.createElement(
                        'table',
                        null,
                        _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    null,
                                    _react2.default.createElement(
                                        'article',
                                        { className: 'lywrap' },
                                        _react2.default.createElement(
                                            'section',
                                            { className: typeClass },
                                            this.props.content
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Notice;
}(_react2.default.Component);

exports.default = Notice;

Notice.newInstance = function (props) {
    var div = document.createElement('div');
    document.body.appendChild(div);
    var instance = _reactDom2.default.render(_react2.default.createElement(Notice, props), div);

    return {
        destroy: function destroy() {
            _reactDom2.default.unmountComponentAtNode(div);
            document.body.removeChild(div);
        }
    };
};