'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitLayout = require('fit-layout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DemoBox = _react2.default.createClass({
    displayName: 'DemoBox',
    render: function render() {
        var style = {
            height: this.props.value
        };
        return _react2.default.createElement(
            'p',
            { style: style },
            this.props.children
        );
    }
});

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
                    'p',
                    null,
                    '顶部对齐'
                ),
                _react2.default.createElement(
                    _fitLayout.Row,
                    { type: 'flex',
                        justify: 'center',
                        align: 'top' },
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { span: '4' },
                        _react2.default.createElement(
                            DemoBox,
                            { value: '100' },
                            '.col-4'
                        )
                    ),
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { span: '4' },
                        _react2.default.createElement(
                            DemoBox,
                            { value: '50' },
                            '.col-4'
                        )
                    ),
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { span: '4' },
                        _react2.default.createElement(
                            DemoBox,
                            { value: '120' },
                            '.col-4'
                        )
                    ),
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { span: '4' },
                        _react2.default.createElement(
                            DemoBox,
                            { value: '80' },
                            '.col-4'
                        )
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    '居中对齐'
                ),
                _react2.default.createElement(
                    _fitLayout.Row,
                    { type: 'flex',
                        justify: 'space-around',
                        align: 'middle' },
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { span: '4' },
                        _react2.default.createElement(
                            DemoBox,
                            { value: '100' },
                            '.col-4'
                        )
                    ),
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { span: '4' },
                        _react2.default.createElement(
                            DemoBox,
                            { value: '50' },
                            '.col-4'
                        )
                    ),
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { span: '4' },
                        _react2.default.createElement(
                            DemoBox,
                            { value: '120' },
                            '.col-4'
                        )
                    ),
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { span: '4' },
                        _react2.default.createElement(
                            DemoBox,
                            { value: '80' },
                            '.col-4'
                        )
                    )
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    '底部对齐'
                ),
                _react2.default.createElement(
                    _fitLayout.Row,
                    { type: 'flex',
                        justify: 'space-between',
                        align: 'bottom' },
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { span: '4' },
                        _react2.default.createElement(
                            DemoBox,
                            { value: '100' },
                            '.col-4'
                        )
                    ),
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { span: '4' },
                        _react2.default.createElement(
                            DemoBox,
                            { value: '50' },
                            '.col-4'
                        )
                    ),
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { span: '4' },
                        _react2.default.createElement(
                            DemoBox,
                            { value: '120' },
                            '.col-4'
                        )
                    ),
                    _react2.default.createElement(
                        _fitLayout.Col,
                        { span: '4' },
                        _react2.default.createElement(
                            DemoBox,
                            { value: '80' },
                            '.col-4'
                        )
                    )
                )
            );
        }
    }]);

    return Demo;
})(_react2.default.Component);

exports.default = Demo;