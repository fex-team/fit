import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import './index.scss'

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.defaultChecked || this.props.checked
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked
            })
        }
    }

    handleChange(event) {
        this.setState({
            checked: event.target.checked
        }, ()=> {
            this.props.onChange(this.state.checked)
        })
    }

    render() {
        let classname = classNames({
            '_namespace': true,
            'i-checks': true,
            'i-checks-lg': this.props.size === 'large',
            'i-checks-sm': this.props.size === 'small',
            'disabled': this.props.disabled
        })

        let childs = (
            <label style={this.props.style}
                   className={classname}>
                <input type="checkbox"
                       disabled={this.props.disabled}
                       checked={this.state.checked}
                       onChange={this.handleChange.bind(this)}/>
                <i></i>
                <span>{this.props.children}</span>
            </label>
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

        return childs
    }
}

Checkbox.defaultProps = {
    style: {},
    disabled: false,
    onChange: ()=> {
    }
}