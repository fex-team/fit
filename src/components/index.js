import React from 'react'
import Menu from './layout/menu'

import './index.scss'

export default class Components extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="_namespace">
                <div className="g-hd">
                    <Menu/>
                </div>
                <div className="g-mn">
                    123123
                </div>
                <div className="g-ft">
                    联系我们: fex@baidu.com
                </div>
            </div>
        )
    }
}