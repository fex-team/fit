import React from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import _ from 'lodash'
import Tappable from 'react-tappable'
import './index.scss'

const convertToDataURLviaCanvas = (url, callback, outputFormat) => {
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

const randUrl = (url) => {
    return url + '&tag=wap&t=' + (new Date() - 0)
}

export default class Captcha extends React.Component {
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

    // 刷新验证码
    handleFreshCaptcha(url) {
        let vcodeCopy = []
        let vbpCopy = []

        // 缓存图片，base64编码
        convertToDataURLviaCanvas(randUrl(url), (base64Img)=> {
            this.setState({
                captchaUrl: base64Img,
                vcode: vcodeCopy,
                vbp: vbpCopy,
                loading: false
            })
        })
    }

    // 点击目标验证码视图,请求刷新验证码
    handleTargetImgClick() {
        this.props.prepareFreshCaptcha()
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
        this.setState({
            loading: true
        }, ()=> {
            this.props.onSubmit(this.state.vcode.join(''))
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
                    <Tappable className={btnClass}
                         key={index}
                         onTap={this.handleCaptchaClick.bind(this,col,nowVbp)}>
                            <span style={backgroundImageStyle}
                                  className={vbpClass}></span>
                    </Tappable>
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
            <div className="_namespace">
                {this.state.loading ? <div className="loading"></div> : null}

                <div className="input-label">输入验证码</div>

                <div className="input-container">
                    <div className="input-box">
                        {Placeholders}
                        <div className="placeholder">
                            <Tappable className="delete-btn"
                               onTap={this.handleDeleteClick.bind(this)}>
                                <span className="img"></span>
                            </Tappable>
                        </div>
                    </div>
                </div>

                <Tappable className="target-img"
                     onTap={this.handleTargetImgClick.bind(this)}
                     style={backgroundImageStyle}></Tappable>

                <div className="grid-conatiner">{Grid}</div>
            </div>
        )
    }
}
