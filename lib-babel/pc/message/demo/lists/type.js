'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitButton = require('fit-button');

var _fitButton2 = _interopRequireDefault(_fitButton);

var _fitMessage = require('fit-message');

var _fitMessage2 = _interopRequireDefault(_fitMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = (function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo() {
        _classCallCheck(this, Demo);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).apply(this, arguments));
    }

    _createClass(Demo, [{
        key: 'onClick',
        value: function onClick(type) {
            switch (type) {
                case 'info':
                    _fitMessage2.default.info('默认', 3, 'info');
                    break;
                case 'success':
                    _fitMessage2.default.success('成功', 3, 'success');
                    break;
                case 'error':
                    _fitMessage2.default.error('错误', 3, 'error');
                    break;
                case 'warning':
                    _fitMessage2.default.warning('警告', 3, 'warning');
                    break;
                case 'loading':
                    _fitMessage2.default.loading('加载', 3, 'loading');
                    break;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _fitButton2.default,
                    { onClick: this.onClick.bind(this, 'info') },
                    '默认'
                ),
                _react2.default.createElement(
                    _fitButton2.default,
                    { onClick: this.onClick.bind(this, 'success'),
                        style: { marginLeft: 10 } },
                    '成功'
                ),
                _react2.default.createElement(
                    _fitButton2.default,
                    { onClick: this.onClick.bind(this, 'error'),
                        style: { marginLeft: 10 } },
                    '错误'
                ),
                _react2.default.createElement(
                    _fitButton2.default,
                    { onClick: this.onClick.bind(this, 'warning'),
                        style: { marginLeft: 10 } },
                    '警告'
                ),
                _react2.default.createElement(
                    _fitButton2.default,
                    { onClick: this.onClick.bind(this, 'loading'),
                        style: { marginLeft: 10 } },
                    '加载'
                )
            );
        }
    }]);

    return Demo;
})(_react2.default.Component);

exports.default = Demo;