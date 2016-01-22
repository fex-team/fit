/**
 * Created by andycall on 16/1/2.
 */
import React from 'react'
import classnames from 'classnames'

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
            rightActive: false
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

    onShareEnd () {
        this.setState({
            rightActive: false
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

        let enabledOptions = {
            share: shareIcon
        }

        let hasRight = this.props.rightOptions.length > 0

        let rightOptions = this.props.rightOptions.filter((value) => {
            return value in enabledOptions
        })

        let rightTools

        if (rightOptions.length == 1) {
            rightTools = <img src={enabledOptions[rightOptions[0]]} />
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
    rightOptions: [],

    // @desc 右侧touch回调
    // @type function
    onRightTouchStart: function (event) {},

    // @desc 右侧touch回调
    // @type function
    onRightTouchEnd: function (event) {}
}
