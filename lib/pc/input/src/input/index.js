import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import './index.scss'

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleChange(event) {
        this.props.onChange(event.target.value)
    }

    render() {
        let childs = (
            <input value={this.props.value||null} className="form-control" onChange={this.handleChange.bind(this)}/>
        )

        if (!_.isEmpty(this.props.label)) {
            childs = (
                <div className="form-container">
                    <label style={{width:this.props.labelWidth||null}}
                           className="form-control-label">{this.props.label}</label>
                    <input className="form-control" value={this.props.value||null}
                           onChange={this.handleChange.bind(this)}/>
                </div>
            )
        }

        if (!_.isEmpty(this.props.addonLeft) || !_.isEmpty(this.props.addonRight)) {
            childs = (
                <form className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            {_.isEmpty(this.props.addonLeft) ? null :
                                <div className="input-group-addon">{this.props.addonLeft}</div>}
                            <input type="text"
                                   value={this.props.value||null}
                                   onChange={this.handleChange.bind(this)}
                                   className="form-control"/>
                            {_.isEmpty(this.props.addonRight) ? null :
                                <div className="input-group-addon">{this.props.addonRight}</div>}
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
    style: {},
    onChange: ()=> {
    }
}