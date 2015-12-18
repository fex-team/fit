import React from 'react'
import classNames from 'classnames'

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
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
            'i-checks': true,
            'i-checks-lg': this.props.size === 'large',
            'i-checks-sm': this.props.size === 'small'
        })

        return (
            <label style={this.props.style}
                   className={classname}>
                <input type="checkbox"
                       disabled={this.props.disabled}
                       checked={this.state.checked}
                       onChange={this.handleChange.bind(this)}/>
                <i></i>
                {this.props.label}
            </label>
        )
    }
}

Checkbox.defaultProps = {
    label: '',
    style: {},
    disabled: false,
    onChange: ()=> {
    }
}