import React from 'react'
import classNames from 'classnames'
import { ButtonGroup, Button } from 'tb-button'
import './index.scss'

export default class Group extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value
        }
    }

    handleChange(value, checked) {
        if (checked) {
            this.setState({
                value: value
            }, ()=> {
                this.props.onChange(value)
            })
        }
    }

    render() {
        let childs = React.Children.map(this.props.children, (child)=> {
            return React.cloneElement(child, {
                style: this.props.vertical ? {marginTop: 10} : {marginRight: 10},
                onChange: this.handleChange.bind(this, child.props.value),
                checked: this.state.value === child.props.value
            })
        })

        let layoutClassname = classNames({
            '_namespace': true,
            'vertical': this.props.vertical
        })

        switch (this.props.type) {
        case 'button':
            let buttonChilds = React.Children.map(this.props.children, (child)=> {
                let props = {
                    onClick: this.handleChange.bind(this, child.props.value, true),
                    active: this.state.value === child.props.value,
                    disabled: child.props.disabled
                }
                return (
                    <Button {...props}>{child.props.children}</Button>
                )
            })
            return (
                <ButtonGroup vertical={this.props.vertical}
                             style={this.props.style}>
                    {buttonChilds}
                </ButtonGroup>
            )
        default:
            return (
                <div className={layoutClassname}
                     style={this.props.style}>
                    {childs}
                </div>
            )
        }
    }
}

Group.defaultProps = {
    value: null,
    style: {},
    vertical: false,
    onChange: ()=> {
    }
}