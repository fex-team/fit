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
        let textStyle = {}
        if (this.props.width) {
            textStyle.width = this.props.width
        } else {
            textStyle.flexGrow = 1
        }

        let childs = (
            <input type="text"
                   value={this.props.value||null}
                   className="form-control input"
                   onFocus={this.handleFocus.bind(this)}
                   onBlur={this.handleBlur.bind(this)}
                   onChange={this.handleChange.bind(this)}
                   disabled={this.props.disabled}
                   style={textStyle}/>
        )

        if (!_.isEmpty(this.props.label)) {
            childs = (
                <div className="form-container">
                    <label style={{width:this.props.labelWidth||null}}
                           className="form-control-label">{this.props.label}</label>
                    {childs}
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
                            {childs}
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
    },
    disabled: false,
    width: null
}