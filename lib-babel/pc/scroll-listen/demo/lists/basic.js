'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitScrollListen = require('fit-scroll-listen');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _fitScrollListen.createStore)();

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
                { style: { display: 'flex' } },
                _react2.default.createElement(
                    _fitScrollListen.ScrollListenBox,
                    { store: store, style: { height: 150, width: 150, overflowY: "auto", padding: 10, border: '1px solid #ccc', marginRight: 10 } },
                    _react2.default.createElement(
                        _fitScrollListen.ScrollListenNail,
                        { store: store, title: '第一位置' },
                        '第一个位置'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容'
                    ),
                    _react2.default.createElement(
                        _fitScrollListen.ScrollListenNail,
                        { store: store, title: '第二位置' },
                        '第二个位置'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容'
                    ),
                    _react2.default.createElement(
                        _fitScrollListen.ScrollListenNail,
                        { store: store, title: '第三位置' },
                        '第三个位置'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容',
                        _react2.default.createElement('br', null),
                        '内容'
                    )
                ),
                _react2.default.createElement(_fitScrollListen.ScrollListen, { store: store })
            );
        }
    }]);

    return Demo;
})(_react2.default.Component);

exports.default = Demo;