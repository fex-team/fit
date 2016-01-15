/**
 * Created by andycall on 16/1/2.
 */
import React from 'react'
import classnames from 'classnames'

import share from './images/share.png'

import './index.scss'

import './font.scss'

export function getParameterByName(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}


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
    }


    render () {
        let wrapper = classnames({
            hide: this.state.hide,
            '_namespace': true
        })

        return (
            <div className={wrapper} id="_namespace">
                <div className="blue-kit-left">
                    <a className="blue-kit-btn">
                        <span className="icon-tieba-logo blue-kit-btn-logo"></span>
                        <span className="blue-kit-text">{this.props.title}</span>
                    </a>
                </div>
            </div>
        )
    }
}