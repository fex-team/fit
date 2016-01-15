'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mockCaptchaUrl = 'http://tieba.baidu.com/cgi-bin/genimg?captchaservice30356335466a34305331354d39494d4b36364b664e536436796f72495143753933662b764345617971302f44367851705763663564746f59634d5054544f4f4e684b5966443151717369744f546d4a6c44453453774866574556515542564e43587835795a2f7a61377a6f765138684d33514a4c4b5a786f4139626e72487a43616c506e714339563473386937324a584747444c4f7957614b594b714f784b5574416b616a554c4d6135632b7a317a70317434626637636454446843754977695a584d436c545464357345536c6c47524e39377744396a334d69426b335869336969496e5764445158324f333937476971677175557a2f476a3976686f32315136345439515944784767592b6652534a36517448745765466852424b5546664c52384e47517133726230766842324c6e2b783758';

function convertToDataURLviaCanvas(url, callback, outputFormat) {
    var img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function () {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var dataURL;
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
        canvas = null;
    };
    img.src = url;
}

function randUrl(url) {
    return url + '&tag=wap&t=' + (new Date() - 0);
}

var Index = (function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Index).call(this, props));

        _this.state = {
            // 验证码地址
            captchaUrl: null,
            // vcode数组
            vcode: [],
            // vbp数组
            vbp: [],
            loading: false
        };
        return _this;
    }

    _createClass(Index, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            // 暴露客户端回调全局变量
            window.handleFreshCaptcha = function (url) {
                _this2.handleFreshCaptcha(randUrl(url));
            };

            // 是否是模拟模式
            if (this.props.mock) {
                this.handleFreshCaptcha(randUrl(mockCaptchaUrl));
            } else {
                this.freshCaptcha();
            }
        }

        // 刷新验证码

    }, {
        key: 'freshCaptcha',
        value: function freshCaptcha() {
            window.location.href = "objc:jsChangeVcode(handleFreshCaptcha)";
        }

        // 客户端刷新验证码回调

    }, {
        key: 'handleFreshCaptcha',
        value: function handleFreshCaptcha(url) {
            var _this3 = this;

            var vcodeCopy = [];
            var vbpCopy = [];

            // 缓存图片，base64编码
            convertToDataURLviaCanvas(url, function (base64Img) {
                _this3.setState({
                    captchaUrl: base64Img,
                    vcode: vcodeCopy,
                    vbp: vbpCopy,
                    loading: false
                });
            });
        }

        // 点击目标验证码视图

    }, {
        key: 'handleTargetImgClick',
        value: function handleTargetImgClick() {
            if (this.props.mock) {
                this.handleFreshCaptcha(randUrl(mockCaptchaUrl));
            } else {
                this.freshCaptcha();
            }
        }

        // 选择栅格

    }, {
        key: 'selectCaptcha',
        value: function selectCaptcha(vcode, vbp) {
            var count = 0;
            this.state.vcode.map(function (item) {
                if (item !== null) {
                    count++;
                }
            });

            // 如果已经有4个了，不会添加
            if (count === 4) return;

            var vcodeCopy = _lodash2.default.cloneDeep(this.state.vcode);
            var vbpCopy = _lodash2.default.cloneDeep(this.state.vbp);

            // 如果不相等，还是包含，则在当前位置删除
            if (this.state.vcode.length !== 0 && _lodash2.default.contains(this.state.vcode, vcode)) {
                var index = _lodash2.default.indexOf(this.state.vcode, vcode);
                vcodeCopy[index] = null;
                vbpCopy[index] = null;
            } else {
                // 否则从第一个null开始添加
                var nullIndex = _lodash2.default.indexOf(this.state.vcode, null);
                if (nullIndex === -1) {
                    vcodeCopy.push(vcode);
                    vbpCopy.push(vbp);
                } else {
                    vcodeCopy[nullIndex] = vcode;
                    vbpCopy[nullIndex] = vbp;
                }
            }

            this.setState({
                vcode: vcodeCopy,
                vbp: vbpCopy
            });
        }

        // 点击验证码栅格

    }, {
        key: 'handleCaptchaClick',
        value: function handleCaptchaClick(vcode, vbp) {
            var _this4 = this;

            this.selectCaptcha(vcode, vbp);

            setTimeout(function () {
                var count = 0;
                _this4.state.vcode.map(function (item) {
                    if (item !== null) {
                        count++;
                    }
                });

                if (count === 4) {
                    _this4.submit();
                }
            });
        }

        // 删除

    }, {
        key: 'handleDeleteClick',
        value: function handleDeleteClick() {
            if (this.state.vcode.length === 0) return;

            var vcodeCopy = _lodash2.default.cloneDeep(this.state.vcode);
            var vbpCopy = _lodash2.default.cloneDeep(this.state.vbp);
            vcodeCopy.pop();
            vbpCopy.pop();
            this.setState({
                vcode: vcodeCopy,
                vbp: vbpCopy
            });
        }

        // 提交

    }, {
        key: 'submit',
        value: function submit() {
            window.location.href = 'objc:jsSubmit(handleFreshCaptcha,' + this.state.vcode.join('') + ')';
            this.setState({
                loading: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var backgroundImageStyle = {
                backgroundImage: this.state.captchaUrl ? 'url(' + this.state.captchaUrl + ')' : null
            };

            // 验证码 3x3 vcode列表
            var vcodeArray = [['00000000', '00010000', '00020000'], ['00000001', '00010001', '00020001'], ['00000002', '00010002', '00020002']];

            var vbp = 0;
            var Grid = vcodeArray.map(function (row, index) {
                var Col = row.map(function (col, index) {
                    var nowVbp = vbp++;
                    var btnClass = (0, _classnames4.default)({
                        'btn': true,
                        'active': _lodash2.default.contains(_this5.state.vcode, col)
                    });
                    var vbpClass = (0, _classnames4.default)(_defineProperty({
                        'img': true
                    }, 'vbp-' + nowVbp, true));
                    return _react2.default.createElement(
                        'div',
                        { className: btnClass,
                            key: index,
                            onTouchStart: _this5.handleCaptchaClick.bind(_this5, col, nowVbp) },
                        _react2.default.createElement('span', { style: backgroundImageStyle,
                            className: vbpClass })
                    );
                });
                return _react2.default.createElement(
                    'div',
                    { key: index,
                        className: 'line' },
                    Col
                );
            });

            var Placeholders = [0, 1, 2, 3].map(function (item, index) {
                var placeholderClass = (0, _classnames4.default)(_defineProperty({
                    'placeholder': true,
                    'small-img': _this5.state.vcode.length > item
                }, 'vbp-small-' + _this5.state.vbp[item], _this5.state.vcode.length > item));
                var placeholderStyle = {
                    backgroundImage: _this5.state.vcode.length > item && _this5.state.vbp[item] !== null ? 'url(' + _this5.state.captchaUrl + ')' : null
                };
                return _react2.default.createElement('div', { key: index,
                    style: placeholderStyle,
                    className: placeholderClass });
            });

            return _react2.default.createElement(
                'div',
                { className: 'lib-pc-captcha-lib-captcha' },
                this.state.loading ? _react2.default.createElement('div', { className: 'loading' }) : null,
                _react2.default.createElement(
                    'div',
                    { className: 'input-label' },
                    '输入验证码'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'input-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'input-box' },
                        Placeholders,
                        _react2.default.createElement(
                            'div',
                            { className: 'placeholder' },
                            _react2.default.createElement(
                                'a',
                                { className: 'delete-btn',
                                    onTouchStart: this.handleDeleteClick.bind(this) },
                                _react2.default.createElement('span', { className: 'img' })
                            )
                        )
                    )
                ),
                _react2.default.createElement('div', { className: 'target-img',
                    onTouchStart: this.handleTargetImgClick.bind(this),
                    style: backgroundImageStyle }),
                _react2.default.createElement(
                    'div',
                    { className: 'grid-conatiner' },
                    Grid
                )
            );
        }
    }]);

    return Index;
})(_react2.default.Component);

exports.default = Index;