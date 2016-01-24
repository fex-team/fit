import React from 'react'
import ReactDOM from 'react-dom'
import RenderToBody from '../render-body/index.jsx'
import $ from 'jquery'

import './index.scss'

export default class Share extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hide: this.props.hide || false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            hide: nextProps.hide
        })
    }

    componentWillMount() {
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
                            imgUrl: this.props.pics,
                            success: function (res) {

                            },
                            cancel: function (res) {

                            }
                        });
                        wx.onMenuShareTimeline({
                            title: this.props.title,
                            link: '',
                            imgUrl: this.props.pics,
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
    }

    componentDidMount() {
        let wx = window.wx

        track({
            task: '吧友热议',
            page: '/mo/q/hotMessage',
            locate: '分享',
            type: 'click',
            obj_name: document.title,
            obj_id: window.topic_id
        })
    }

    Cancel() {
        this.setState({
            hide: true
        })
    }

    onOtherClick() {
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
                           href={`http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${this.props.url}&title=${this.props.title}&desc=${this.props.title}&pics=${this.props.pics}`}></a>
                        <a className="share qweibo"
                           href={`http://share.v.t.qq.com/index.php?c=share&a=index&url=${this.props.url}&title=${this.props.title}&appkey=801209366`}></a>
                        <a className="pb_share_btn" href="#" onClick={this.Cancel.bind(this)}>取消</a>
                    </div>
                </RenderToBody>
            </div>
        )
    }
}