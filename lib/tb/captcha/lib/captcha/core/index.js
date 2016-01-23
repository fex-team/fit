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

var _classnames3 = require('classnames');

var _classnames4 = _interopRequireDefault(_classnames3);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactTappable = require('react-tappable');

var _reactTappable2 = _interopRequireDefault(_reactTappable);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertToDataURLviaCanvas = function convertToDataURLviaCanvas(url, callback, outputFormat) {
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
};

var randUrl = function randUrl(url) {
    return url + '&tag=wap&t=' + (new Date() - 0);
};

var Captcha = function (_React$Component) {
    (0, _inherits3.default)(Captcha, _React$Component);

    function Captcha(props) {
        (0, _classCallCheck3.default)(this, Captcha);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Captcha).call(this, props));

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

    // 刷新验证码

    (0, _createClass3.default)(Captcha, [{
        key: 'handleFreshCaptcha',
        value: function handleFreshCaptcha(url) {
            var _this2 = this;

            var vcodeCopy = [];
            var vbpCopy = [];

            // 缓存图片，base64编码
            convertToDataURLviaCanvas(randUrl(url), function (base64Img) {
                _this2.setState({
                    captchaUrl: base64Img,
                    vcode: vcodeCopy,
                    vbp: vbpCopy,
                    loading: false
                });
            });
        }

        // 点击目标验证码视图,请求刷新验证码

    }, {
        key: 'handleTargetImgClick',
        value: function handleTargetImgClick() {
            this.props.prepareFreshCaptcha();
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
            if (this.state.vcode.length !== 0 && _lodash2.default.includes(this.state.vcode, vcode)) {
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
            var _this3 = this;

            this.selectCaptcha(vcode, vbp);

            setTimeout(function () {
                var count = 0;
                _this3.state.vcode.map(function (item) {
                    if (item !== null) {
                        count++;
                    }
                });

                if (count === 4) {
                    _this3.submit();
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
            var _this4 = this;

            this.setState({
                loading: true
            }, function () {
                _this4.props.onSubmit(_this4.state.vcode.join(''));
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
                        'active': _lodash2.default.includes(_this5.state.vcode, col)
                    });
                    var vbpClass = (0, _classnames4.default)((0, _defineProperty3.default)({
                        'img': true
                    }, 'vbp-' + nowVbp, true));
                    return _react2.default.createElement(
                        _reactTappable2.default,
                        { className: btnClass,
                            key: index,
                            onTap: _this5.handleCaptchaClick.bind(_this5, col, nowVbp) },
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
                var placeholderClass = (0, _classnames4.default)((0, _defineProperty3.default)({
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
                { className: 'lib-tb-captcha-lib-captcha-core' },
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
                                _reactTappable2.default,
                                { className: 'delete-btn',
                                    onTap: this.handleDeleteClick.bind(this) },
                                _react2.default.createElement('span', { className: 'img' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(_reactTappable2.default, { className: 'target-img',
                    onTap: this.handleTargetImgClick.bind(this),
                    style: backgroundImageStyle }),
                _react2.default.createElement(
                    'div',
                    { className: 'grid-conatiner' },
                    Grid
                )
            );
        }
    }]);
    return Captcha;
}(_react2.default.Component);

exports.default = Captcha;