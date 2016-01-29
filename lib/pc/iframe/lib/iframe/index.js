'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Iframe = function (_React$Component) {
    _inherits(Iframe, _React$Component);

    function Iframe() {
        _classCallCheck(this, Iframe);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Iframe).apply(this, arguments));
    }

    _createClass(Iframe, [{
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