import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import './index.scss'

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let childs = (
            <input className="form-control"/>
        )

        if (!_.isEmpty(this.props.label)) {
            childs = (
                <div className="form-container">
                    <label style={{width:this.props['label-width']||null}}
                           className="form-control-label">{this.props.label}</label>
                    <input className="form-control"/>
                </div>
            )
        }

        if (!_.isEmpty(this.props['addon-left']) || !_.isEmpty(this.props['addon-right'])) {
            childs = (
                <form className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            {_.isEmpty(this.props['addon-left']) ? null :
                                <div className="input-group-addon">{this.props['addon-left']}</div>}
                            <input type="text"
                                   className="form-control"/>
                            {_.isEmpty(this.props['addon-right']) ? null :
                                <div className="input-group-addon">{this.props['addon-right']}</div>}
                        </div>
                    </div>
                </form>
            )
        }

        return (
            <div style={this.props.style}
                 className="_namespace">
                {childs}
            </div>
        )
    }
}

Checkbox.defaultProps = {
    style: {}
}