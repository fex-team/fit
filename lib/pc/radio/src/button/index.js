import React from 'react'
import { Button } from 'fit-button'
import classNames from 'classnames'

export default class RadioButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: this.props.checked
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
                <input type="radio"
                       disabled={this.props.disabled}
                       checked={this.state.checked}
                       onChange={this.handleChange.bind(this)}/>
                <i></i>
                {this.props.children}
            </label>
        )
    }
}

RadioButton.defaultProps = {
    style: {},
    disabled: false,
    onChange: ()=> {
    }
}