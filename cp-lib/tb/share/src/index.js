import React from 'react'
import RenderToBody from 'fit-render-to'
import track from 'tb-track'
import $ from 'jquery'

import './index.scss'

export default class Share extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hide: this.props.hide
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            hide: nextProps.hide
        })
    }

    componentWillMount() {
        let script = document.createElement('script')
        script.src = 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js'
        script.addEventListener('load', () => {
            $.ajax({
                url: '/mo/q/newgetweixintoken',
                method: 'POST',
                data: {
                    url: location.href.split('#')[0]
                },
                dataType: 'json',
                success: (json) => {
                    if (json.no === 0) {
                        var signPackage = json.data;
                        var wx = window.wx;

                        wx.config({
                            debug: false,
                            appId: signPackage.appId,
                            timestamp: signPackage.timestamp,
                            nonceStr: signPackage.nonceStr,
                            signature: signPackage.signature,
                            jsApiList: [
                                'checkJsApi',
                                'onMenuShareTimeline',
                                'onMenuShareAppMessage',
                                'onMenuShareQQ',
                                'onMenuShareWeibo',
                                'onMenuShareQZone'
                            ]
                        });

                        wx.ready(() => {
                            wx.onMenuShareAppMessage({
                                title: this.props.title,
                                desc: this.props.desc,
                                link: '',
                                imgUrl: this.props.pic,
                                success: function (res) {

                                },
                                cancel: function (res) {

                                }
                            });
                            wx.onMenuShareTimeline({
                                title: this.props.title,
                                link: '',
                                imgUrl: this.props.pic,
                                trigger: function (res) {
                                },
                                success: function (res) {
                                },
                                cancel: function (res) {
                                },
                                fail: function (res) {
                                }
                            });

                        })

                        wx.error(function (res) {
                            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                        });
                    }
                }
            });
        })

        document.body.appendChild(script)
    }

    componentDidMount() {
        track(this.props.track)
    }

    Cancel(event) {
        event.preventDefault()

        this.setState({
            hide: true
        })
    }

    render() {
        let hide = this.state.hide
        let wrapperStyle = {
            display: hide ? 'none' : 'block'
        }

        return (
            <div>
                <RenderToBody>
                    <div style={wrapperStyle} className="_namespace">
                        <h3>分享到</h3>
                        <a className="share weibo"
                           href={`http://service.weibo.com/share/share.php?url=${this.props.url}&title=${this.props.title}&appkey=2285628874&ralateUid=1673450172`}></a>
                        <a className="share qzone"
                           href={`http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${this.props.url}&title=${this.props.title}&desc=${this.props.title}&pics=${this.props.pic}`}></a>
                        <a className="share qweibo"
                           href={`http://share.v.t.qq.com/index.php?c=share&a=index&url=${this.props.url}&title=${this.props.title}&appkey=801209366`}></a>
                        <a className="pb_share_btn" href="#" onClick={this.Cancel.bind(this)}>取消</a>
                    </div>
                </RenderToBody>
            </div>
        )
    }
}

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
}