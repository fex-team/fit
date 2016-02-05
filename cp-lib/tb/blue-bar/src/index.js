/**
 * Created by andycall on 16/1/2.
 */
import React from 'react'
import classnames from 'classnames'

import Share from 'tb-share'
import shareIcon from './images/share.png'
import './index.scss'
import './font.scss'

function getParameterByName(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export default class Bluebar extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            hide: false,
            rightActive: false,
            shareHide: true
        }
    }

    componentWillMount () {
        if (getParameterByName('_client_version')) {
            this.setState({
                hide: true
            })
        }
    }

    handleRightTouchStart (event) {
        this.setState({
            rightActive: true
        }, () => {
            this.props.onRightTouchStart(event)
        })
    }

    handleRightTouchEnd (event) {
        this.setState({
            rightActive: false
        }, () => {
            this.props.onRightTouchEnd(event)
        })
    }

    onShare () {
        this.setState({
            shareHide: false
        })
    }

    render () {
        let wrapper = classnames({
            hide: this.state.hide,
            '_namespace': true
        })

        let rightActive = classnames({
            active: this.state.rightActive,
            'blue-kit-right': true
        })

        let hasRight = this.props.rightOptions.length > 0

        let rightOptions = this.props.rightOptions

        let rightTools

        if (rightOptions.length == 1) {
            let op = rightOptions[0]

            if (op.type === 'share') {
                rightTools = (
                    <div>
                        <img onClick={this.onShare.bind(this)} src={shareIcon} />
                        <Share hide={this.state.shareHide} title={op.title} desc={op.desc} pic={op.pic} url={op.url} />
                    </div>
                )
            }

        }

        return (
            <div className={wrapper}>
                <div className="blue-kit-left">
                    <a href={document.referrer} className="blue-kit-btn">
                        <span className="icon-tieba-logo blue-kit-btn-logo"></span>
                        <span className="blue-kit-text">{this.props.title}</span>
                    </a>
                </div>
                <div className={rightActive} style={{display: !hasRight ? 'none' : 'block'}}
                          onTouchStart={this.handleRightTouchStart.bind(this)}
                          onTouchEnd={this.handleRightTouchEnd.bind(this)}
                >
                    {rightTools}
                </div>
            </div>
        )
    }
}


Bluebar.defaultProps = {
    // @desc 标题
    // @type string
    title: '',

    // @desc 返回地址
    // @type string
    back: document.referrer,

    // @desc 右侧功能
    // @type array
    // @enum ['share']
    rightOptions: [],

    // @desc 右侧touch回调
    // @type function
    onRightTouchStart: function (event) {},

    // @desc 右侧touch回调
    // @type function
    onRightTouchEnd: function (event) {}
}
