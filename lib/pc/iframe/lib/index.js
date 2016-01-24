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

var Iframe = function (_React$Component) {
    (0, _inherits3.default)(Iframe, _React$Component);

    function Iframe() {
        (0, _classCallCheck3.default)(this, Iframe);
        return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Iframe).apply(this, arguments));
    }

    (0, _createClass3.default)(Iframe, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.renderFrameContents();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.renderFrameContents();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _reactDom2.default.unmountComponentAtNode(_reactDom2.default.findDOMNode(this).contentDocument.body);
        }
    }, {
        key: 'renderFrameContents',
        value: function renderFrameContents() {
            var doc = _reactDom2.default.findDOMNode(this).contentDocument;
            var div = doc.createElement('div');
            div.setAttribute('id', 'react-dom');
            doc.body.appendChild(div);
            if (doc.readyState === 'complete') {
                _reactDom2.default.render(this.props.children, doc.getElementById('react-dom'));
            } else {
                setTimeout(this.renderFrameContents, 0);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('iframe', null);
        }
    }]);
    return Iframe;
}(_react2.default.Component);

exports.default = Iframe;