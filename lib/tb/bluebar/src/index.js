/**
 * Created by andycall on 16/1/2.
 */
import React from 'react'
import classnames from 'classnames'
import $ from 'jquery'

import share from './images/share.png'

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
            needShare: false
        }
    }

    componentWillMount () {
        if (getParameterByName('_client_version')) {
            this.setState({
                hide: true
            })
        }
        else {
            $('.blue-bar').remove()
            document.body.style.paddingTop = '45px'
        }
    }

    onShareClick () {

        this.setState({
            rightActive: true,
            needShare: true
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

//        let sharePop = this.state.needShare ?  <Share url={`http://tieba.baidu.com/mo/q/hotMessage?topic_id=${window.topic_id}`} pics={window.topic_info.ret[0].extra.share_pic} title={window.topic_info.ret[0].topic_name} desc={window.topic_info.ret[0].topic_desc} hide={!this.state.needShare}/> : ''

        return (
            <div className={wrapper}>
                <div className="blue-kit-left">
                    <a href={document.referrer} className="blue-kit-btn">
                        <span className="icon-tieba-logo blue-kit-btn-logo"></span>
                        <span className="blue-kit-text">{this.props.title}</span>
                    </a>
                </div>
                <div className={rightActive} onTouchStart={this.onShareClick.bind(this)} onTouchEnd={this.onShareEnd.bind(this)}>
                    <img src={share} alt=""/>
                </div>
            </div>
        )
    }
}