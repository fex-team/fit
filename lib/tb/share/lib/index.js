'use strict';

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

var _index = require('../render-body/index.jsx');

var _index2 = _interopRequireDefault(_index);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Share = function (_React$Component) {
    (0, _inherits3.default)(Share, _React$Component);

    function Share(props) {
        (0, _classCallCheck3.default)(this, Share);

        var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Share).call(this, props));

        _this.state = {
            hide: _this.props.hide || false
        };
        return _this;
    }

    (0, _createClass3.default)(Share, [{
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
                                imgUrl: _this2.props.pics,
                                success: function success(res) {},
                                cancel: function cancel(res) {}
                            });
                            wx.onMenuShareTimeline({
                                title: _this2.props.title,
                                link: '',
                                imgUrl: _this2.props.pics,
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
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var wx = window.wx;

            track({
                task: '吧友热议',
                page: '/mo/q/hotMessage',
                locate: '分享',
                type: 'click',
                obj_name: document.title,
                obj_id: window.topic_id
            });
        }
    }, {
        key: 'Cancel',
        value: function Cancel() {
            this.setState({
                hide: true
            });
        }
    }, {
        key: 'onOtherClick',
        value: function onOtherClick() {
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
                    _index2.default,
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
                            href: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=' + this.props.url + '&title=' + this.props.title + '&desc=' + this.props.title + '&pics=' + this.props.pics }),
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