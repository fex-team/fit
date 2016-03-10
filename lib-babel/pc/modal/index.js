'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _codeView = require('../../../code-view');

var _codeView2 = _interopRequireDefault(_codeView);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _title = require('../../title.js');

var _title2 = _interopRequireDefault(_title);

var _readme = require('./readme.md');

var _readme2 = _interopRequireDefault(_readme);

var _fitLayout = require('fit-layout');

var _basic = require('react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/basic.js');

var _basic2 = _interopRequireDefault(_basic);

var _basic3 = require('text!./demo/basic.js');

var _basic4 = _interopRequireDefault(_basic3);

var _basic5 = require('./demo/basic.md');

var _basic6 = _interopRequireDefault(_basic5);

var _custom = require('react-hot-loader!babel?presets[]=react,presets[]=es2015!./demo/custom.js');

var _custom2 = _interopRequireDefault(_custom);

var _custom3 = require('text!./demo/custom.js');

var _custom4 = _interopRequireDefault(_custom3);

var _custom5 = require('./demo/custom.md');

var _custom6 = _interopRequireDefault(_custom5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colStyle = {
    padding: 10
};

var Layout = (function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout(props) {
        _classCallCheck(this, Layout);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Layout).call(this, props));

        _this.state = {};
        document.title = '模态框';
        return _this;
    }

    _createClass(Layout, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: '_namespace' },
                _react2.default.createElement(
                    _title2.default,
                    null,
                    _readme2.default
                ),
                _react2.default.createElement(
                    _fitLayout.Row,
                    { style: colStyle },
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { style: colStyle,
                            span: '12' },
                        _react2.default.createElement(
                            _codeView2.default,
                            { md: _basic6.default,
                                code: _basic4.default },
                            _react2.default.createElement(_basic2.default, null)
                        )
                    ),
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { style: colStyle,
                            span: '12' },
                        _react2.default.createElement(
                            _codeView2.default,
                            { md: _custom6.default,
                                code: _custom4.default },
                            _react2.default.createElement(_custom2.default, null)
                        )
                    )
                )
            );
        }
    }]);

    return Layout;
})(_react2.default.Component);

exports.default = Layout;