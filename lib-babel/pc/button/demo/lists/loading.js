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

var Demo = (function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo(props) {
        _classCallCheck(this, Demo);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Demo).call(this, props));

        _this.state = {
            loading: false
        };
        return _this;
    }

    _createClass(Demo, [{
        key: 'handleLoadingClick',
        value: function handleLoadingClick() {
            this.setState({
                loading: true
            });
        }
    }, {
        key: 'handleCancelLoadingClick',
        value: function handleCancelLoadingClick() {
            this.setState({
                loading: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _fitButton2.default,
                    { type: 'primary',
                        loading: this.state.loading },
                    '按钮'
                ),
                _react2.default.createElement(
                    _fitButton2.default,
                    { onClick: this.handleLoadingClick.bind(this),
                        style: { marginLeft: 10 } },
                    '点我进入loading'
                ),
                _react2.default.createElement(
                    _fitButton2.default,
                    { onClick: this.handleCancelLoadingClick.bind(this),
                        style: { marginLeft: 10 } },
                    '点我取消loading'
                )
            );
        }
    }]);

    return Demo;
})(_react2.default.Component);

exports.default = Demo;