'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fitRenderTo = require('fit-render-to');

var _fitRenderTo2 = _interopRequireDefault(_fitRenderTo);

var _tbTrack = require('tb-track');

var _tbTrack2 = _interopRequireDefault(_tbTrack);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = function (_React$Component) {
    _inherits(Share, _React$Component);

    function Share(props) {
        _classCallCheck(this, Share);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Share).call(this, props));

        _this.state = {
            hide: _this.props.hide
        };
        return _this;
    }

    _createClass(Share, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                hide: nextProps.hide
            });
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            var script = document.createElement('script');
            script.src = 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js';
            script.addEventListener('load', function () {
                _jquery2.default.ajax({
                    url: '/mo/q/newgetweixintoken',
                    method: 'POST',
                    data: {
                        url: location.href.split('#')[0]
                    },
                    dataType: 'json',
                    success: function success(json) {
                        if (json.no === 0) {
                            var signPackage = json.data;
                            var wx = window.wx;

                            wx.config({
                                debug: false,
                                appId: signPackage.appId,
                                timestamp: signPackage.timestamp,
                                nonceStr: signPackage.nonceStr,
                                signature: signPackage.signature,
                                jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
                            });

                            wx.ready(function () {
                                wx.onMenuShareAppMessage({
                                    title: _this2.props.title,
                                    desc: _this2.props.desc,
                                    link: '',
                                    imgUrl: _this2.props.pic,
                                    success: function success(res) {},
                                    cancel: function cancel(res) {}
                                });
                                wx.onMenuShareTimeline({
                                    title: _this2.props.title,
                                    link: '',
                                    imgUrl: _this2.props.pic,
                                    trigger: function trigger(res) {},
                                    success: function success(res) {},
                                    cancel: function cancel(res) {},
                                    fail: function fail(res) {}
                                });
                            });

                            wx.error(function (res) {
                                // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                            });
                        }
                    }
                });
            });

            document.body.appendChild(script);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _tbTrack2.default)(this.props.track);
        }
    }, {
        key: 'Cancel',
        value: function Cancel(event) {
            event.preventDefault();

            this.setState({
                hide: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var hide = this.state.hide;
            var wrapperStyle = {
                display: hide ? 'none' : 'block'
            };

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _fitRenderTo2.default,
                    null,
                    _react2.default.createElement(
                        'div',
                        { style: wrapperStyle, className: 'lib-tb-share-lib' },
                        _react2.default.createElement(
                            'h3',
                            null,
                            '分享到'
                        ),
                        _react2.default.createElement('a', { className: 'share weibo',
                            href: 'http://service.weibo.com/share/share.php?url=' + this.props.url + '&title=' + this.props.title + '&appkey=2285628874&ralateUid=1673450172' }),
                        _react2.default.createElement('a', { className: 'share qzone',
                            href: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + this.props.url + '&title=' + this.props.title + '&desc=' + this.props.title + '&pics=' + this.props.pic }),
                        _react2.default.createElement('a', { className: 'share qweibo',
                            href: 'http://share.v.t.qq.com/index.php?c=share&a=index&url=' + this.props.url + '&title=' + this.props.title + '&appkey=801209366' }),
                        _react2.default.createElement(
                            'a',
                            { className: 'pb_share_btn', href: '#', onClick: this.Cancel.bind(this) },
                            '取消'
                        )
                    )
                )
            );
        }
    }]);

    return Share;
}(_react2.default.Component);

exports.default = Share;

Share.defaultProps = {
    // @desc 分享标题
    // @type string
    title: '',

    // @desc 分享描述
    // @type string
    desc: '',

    // @desc 分享路径
    // @type string
    url: location.href,

    // @desc 分享图片
    // @type string
    pic: '',

    // @desc 是否隐藏
    // @type boolean
    hide: false,

    // @desc 日志对象
    // @type object
    track: {}
};