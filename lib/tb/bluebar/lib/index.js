'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _share = require('./images/share.png');

var _share2 = _interopRequireDefault(_share);

require('./index.css');

require('./font.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by andycall on 16/1/2.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

function getParameterByName(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var Bluebar = function (_React$Component) {
    _inherits(Bluebar, _React$Component);

    function Bluebar(props) {
        _classCallCheck(this, Bluebar);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Bluebar).call(this, props));

        _this.state = {
            hide: false,
            rightActive: false
        };
        return _this;
    }

    _createClass(Bluebar, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (getParameterByName('_client_version')) {
                this.setState({
                    hide: true
                });
            }
        }
    }, {
        key: 'handleRightTouchStart',
        value: function handleRightTouchStart(event) {
            var _this2 = this;

            this.setState({
                rightActive: true
            }, function () {
                _this2.props.onRightTouchStart(event);
            });
        }
    }, {
        key: 'handleRightTouchEnd',
        value: function handleRightTouchEnd(event) {
            var _this3 = this;

            this.setState({
                rightActive: false
            }, function () {
                _this3.props.onRightTouchEnd(event);
            });
        }
    }, {
        key: 'onShareEnd',
        value: function onShareEnd() {
            this.setState({
                rightActive: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var wrapper = (0, _classnames2.default)({
                hide: this.state.hide,
                'lib-tb-bluebar-lib': true
            });

            var rightActive = (0, _classnames2.default)({
                active: this.state.rightActive,
                'blue-kit-right': true
            });

            var enabledOptions = {
                share: _share2.default
            };

            var hasRight = this.props.rightOptions.length > 0;

            var rightOptions = this.props.rightOptions.filter(function (value) {
                return value in enabledOptions;
            });

            var rightTools = undefined;

            if (rightOptions.length == 1) {
                rightTools = _react2.default.createElement('img', { src: enabledOptions[rightOptions[0]] });
            }

            return _react2.default.createElement(
                'div',
                { className: wrapper },
                _react2.default.createElement(
                    'div',
                    { className: 'blue-kit-left' },
                    _react2.default.createElement(
                        'a',
                        { href: document.referrer, className: 'blue-kit-btn' },
                        _react2.default.createElement('span', { className: 'icon-tieba-logo blue-kit-btn-logo' }),
                        _react2.default.createElement(
                            'span',
                            { className: 'blue-kit-text' },
                            this.props.title
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: rightActive, style: { display: !hasRight ? 'none' : 'block' },
                        onTouchStart: this.handleRightTouchStart.bind(this),
                        onTouchEnd: this.handleRightTouchEnd.bind(this)
                    },
                    rightTools
                )
            );
        }
    }]);

    return Bluebar;
}(_react2.default.Component);

exports.default = Bluebar;

Bluebar.defaultProps = {
    // @desc 标题
    // @type string
    title: '',

    // @desc 返回地址
    // @type string
    back: document.referrer,

    // @desc 右侧功能
    // @type array
    rightOptions: [],

    // @desc 右侧touch回调
    // @type function
    onRightTouchStart: function onRightTouchStart(event) {},

    // @desc 右侧touch回调
    // @type function
    onRightTouchEnd: function onRightTouchEnd(event) {}
};