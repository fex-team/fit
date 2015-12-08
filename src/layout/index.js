import React from 'react'
import './index.scss'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div _namespace>
                <div className="g-hd">
                    <div className="navbar">
                        <div className="navbar-header">
                            <div className="navbar-brand">贴吧组件库</div>
                            <div className="navbar-right">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="g-sd">

                </div>
                <div className="g-mn">

                </div>
                <div className="g-ft">

                </div>
            </div>
        )
    }
}