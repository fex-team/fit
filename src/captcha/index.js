import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import _ from 'lodash'
import './index.scss'

const mockCaptchaUrl = 'http://tieba.baidu.com/cgi-bin/genimg?captchaservice30356335466a34305331354d39494d4b36364b664e536436796f72495143753933662b764345617971302f44367851705763663564746f59634d5054544f4f4e684b5966443151717369744f546d4a6c44453453774866574556515542564e43587835795a2f7a61377a6f765138684d33514a4c4b5a786f4139626e72487a43616c506e714339563473386937324a584747444c4f7957614b594b714f784b5574416b616a554c4d6135632b7a317a70317434626637636454446843754977695a584d436c545464357345536c6c47524e39377744396a334d69426b335869336969496e5764445158324f333937476971677175557a2f476a3976686f32315136345439515944784767592b6652534a36517448745765466852424b5546664c52384e47517133726230766842324c6e2b783758'

function convertToDataURLviaCanvas(url, callback, outputFormat) {
    var img = new Image()
    img.crossOrigin = 'Anonymous'
    img.onload = function () {
        var canvas = document.createElement('CANVAS')
        var ctx = canvas.getContext('2d')
        var dataURL
        canvas.height = this.height
        canvas.width = this.width
        ctx.drawImage(this, 0, 0)
        dataURL = canvas.toDataURL(outputFormat)
        callback(dataURL)
        canvas = null
    }
    img.src = url
}

function randUrl(url) {
    return url + '&tag=wap&t=' + (new Date() - 0)
}

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // 验证码地址
            captchaUrl: null,
            // vcode数组
            vcode: [],
            // vbp数组
            vbp: [],
            loading: false
        }
    }

    componentWillMount() {
        // 暴露客户端回调全局变量
        window.handleFreshCaptcha = (url) => {
            this.handleFreshCaptcha(randUrl(url))
        }

        // 是否是模拟模式
        if (this.props.mock) {
            this.handleFreshCaptcha(randUrl(mockCaptchaUrl))
        } else {
            this.freshCaptcha()
        }
    }

    // 刷新验证码
    freshCaptcha() {
        window.location.href = "objc:jsChangeVcode(handleFreshCaptcha)"
    }

    // 客户端刷新验证码回调
    handleFreshCaptcha(url) {
        let vcodeCopy = []
        let vbpCopy = []

        // 缓存图片，base64编码
        convertToDataURLviaCanvas(url, (base64Img)=> {
            this.setState({
                captchaUrl: base64Img,
                vcode: vcodeCopy,
                vbp: vbpCopy,
                loading: false
            })
        })
    }

    // 点击目标验证码视图
    handleTargetImgClick() {
        if (this.props.mock) {
            this.handleFreshCaptcha(randUrl(mockCaptchaUrl))
        } else {
            this.freshCaptcha()
        }
    }

    // 选择栅格
    selectCaptcha(vcode, vbp) {
        let count = 0
        this.state.vcode.map((item)=> {
            if (item !== null) {
                count++
            }
        })

        // 如果已经有4个了，不会添加
        if (count === 4)return

        let vcodeCopy = _.cloneDeep(this.state.vcode)
        let vbpCopy = _.cloneDeep(this.state.vbp)

        // 如果不相等，还是包含，则在当前位置删除
        if (this.state.vcode.length !== 0 && _.contains(this.state.vcode, vcode)) {
            let index = _.indexOf(this.state.vcode, vcode)
            vcodeCopy[index] = null
            vbpCopy[index] = null
        } else { // 否则从第一个null开始添加
            let nullIndex = _.indexOf(this.state.vcode, null)
            if (nullIndex === -1) {
                vcodeCopy.push(vcode)
                vbpCopy.push(vbp)
            } else {
                vcodeCopy[nullIndex] = vcode
                vbpCopy[nullIndex] = vbp
            }
        }

        this.setState({
            vcode: vcodeCopy,
            vbp: vbpCopy
        })
    }

    // 点击验证码栅格
    handleCaptchaClick(vcode, vbp) {
        this.selectCaptcha(vcode, vbp)

        setTimeout(()=> {
            let count = 0
            this.state.vcode.map((item)=> {
                if (item !== null) {
                    count++
                }
            })

            if (count === 4) {
                this.submit()
            }
        })
    }

    // 删除
    handleDeleteClick() {
        if (this.state.vcode.length === 0)return

        let vcodeCopy = _.cloneDeep(this.state.vcode)
        let vbpCopy = _.cloneDeep(this.state.vbp)
        vcodeCopy.pop()
        vbpCopy.pop()
        this.setState({
            vcode: vcodeCopy,
            vbp: vbpCopy
        })
    }

    // 提交
    submit() {
        window.location.href = 'objc:jsSubmit(handleFreshCaptcha,' + this.state.vcode.join('') + ')'
        this.setState({
            loading: true
        })
    }

    render() {
        let backgroundImageStyle = {
            backgroundImage: this.state.captchaUrl ? 'url(' + this.state.captchaUrl + ')' : null
        }

        // 验证码 3x3 vcode列表
        let vcodeArray = [
            ['00000000', '00010000', '00020000'],
            ['00000001', '00010001', '00020001'],
            ['00000002', '00010002', '00020002']
        ]

        let vbp = 0
        let Grid = vcodeArray.map((row, index)=> {
            let Col = row.map((col, index)=> {
                let nowVbp = vbp++
                let btnClass = classnames({
                    'btn': true,
                    'active': _.contains(this.state.vcode, col)
                })
                let vbpClass = classnames({
                    'img': true,
                    ['vbp-' + nowVbp]: true
                })
                return (
                    <div className={btnClass}
                         key={index}
                         onTouchStart={this.handleCaptchaClick.bind(this,col,nowVbp)}>
                            <span style={backgroundImageStyle}
                                  className={vbpClass}></span>
                    </div>
                )
            })
            return (
                <div key={index}
                     className="line">{Col}</div>
            )
        })

        let Placeholders = [0, 1, 2, 3].map((item, index)=> {
            let placeholderClass = classnames({
                'placeholder': true,
                'small-img': this.state.vcode.length > item,
                ['vbp-small-' + this.state.vbp[item]]: this.state.vcode.length > item
            })
            let placeholderStyle = {
                backgroundImage: this.state.vcode.length > item && this.state.vbp[item] !== null ? 'url(' + this.state.captchaUrl + ')' : null
            }
            return (
                <div key={index}
                     style={placeholderStyle}
                     className={placeholderClass}></div>
            )
        })

        return (
            <div _namespace>
                {this.state.loading ? <div className="loading"></div> : null}

                <div className="input-label">输入验证码</div>

                <div className="input-container">
                    <div className="input-box">
                        {Placeholders}
                        <div className="placeholder">
                            <a className="delete-btn"
                               onTouchStart={this.handleDeleteClick.bind(this)}>
                                <span className="img"></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="target-img"
                     onTouchStart={this.handleTargetImgClick.bind(this)}
                     style={backgroundImageStyle}></div>

                <div className="grid-conatiner">{Grid}</div>
            </div>
        )
    }
}