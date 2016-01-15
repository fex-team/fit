/**
 * Created by andycall on 16/1/2.
 */
import React from 'react'
import classnames from 'classnames'
import { getParameterByName } from '../../lib/util'
import $ from 'jquery'

import share from './images/share.png'

import './index.scss'

import './font.scss'

export default class Bluebar extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            hide: false
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


    render () {
        let wrapper = classnames({
            hide: this.state.hide,
            '_namespace': true
        })

        return (
            <div className={wrapper}>
                <div className="blue-kit-left">
                    <a className="blue-kit-btn">
                        <span className="icon-tieba-logo blue-kit-btn-logo"></span>
                        <span className="blue-kit-text">{this.props.title}</span>
                    </a>
                </div>
                <div className="blue-kit-right">
                    <img src={share} alt=""/>
                </div>
            </div>
        )
    }
}