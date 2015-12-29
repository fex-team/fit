import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import './index.scss'

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange(event) {
        this.props.onChange(event.target.value)
    }

    handleFocus() {
        this.props.onFocus()
    }

    handleBlur() {
        this.props.onBlur()
    }

    render() {
        let childs = (
            <input value={this.props.value||null} className="form-control input"
                   onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)}
                   onChange={this.handleChange.bind(this)}/>
        )

        if (!_.isEmpty(this.props.label)) {
            childs = (
                <div className="form-container">
                    <label style={{width:this.props.labelWidth||null}}
                           className="form-control-label">{this.props.label}</label>
                    <input className="form-control input" value={this.props.value||null}
                           onChange={this.handleChange.bind(this)} onFocus={this.handleFocus.bind(this)}
                           onBlur={this.handleBlur.bind(this)}/>
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
                                   onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)}
                                   className="form-control input"/>
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
    },
    onFocus: ()=> {
    },
    onBlur: ()=> {
    }
}