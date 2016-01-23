'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notice = function (_React$Component) {
    (0, _inherits3.default)(Notice, _React$Component);

    function Notice(props) {
        (0, _classCallCheck3.default)(this, Notice);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Notice).call(this, props));

        _this.state = {};
        return _this;
    }

    (0, _createClass3.default)(Notice, [{
        key: 'render',
        value: function render() {
            var typeClass = (0, _classnames2.default)((0, _defineProperty3.default)({
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