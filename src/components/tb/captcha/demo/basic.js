import React from 'react'
import Captcha from 'tb-captcha'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Captcha mock="1"/>
            </div>
        )
    }
}