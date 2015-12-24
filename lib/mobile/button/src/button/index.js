import React from 'react'
import classnames from 'classnames'
import 'fit-style'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleClick() {
        if (this.props.disabled)return
        this.props.onClick()
    }

    render() {
        // addon
        let addon = null
        let addonValue = this.props['addon-left'] || this.props['addon-right']
        if (addonValue) {
            let addonClass = classnames({
                'fa': true,
                ['fa-' + addonValue]: true,
                'pull-right': this.props['addon-right']
            })
            addon = (
                <i className={addonClass}></i>
            )
        }

        let btnClass = classnames({
            'btn': true,
            ['btn-' + this.props.type]: true,
            'disabled': this.props.disabled,
            'btn-addon': addonValue,
            'btn-rounded': this.props.rounded,
            'btn-lg': this.props.size && this.props.size === 'lg',
            'btn-xs': this.props.size && this.props.size === 'xs',
            'btn-sm': this.props.size && this.props.size === 'sm',
            'active': this.props.active
        })

        return (
            <button style={this.props.style}
                    onClick={this.handleClick.bind(this)}
                    className={btnClass}>
                {addon ? addon : null}
                {this.props.children}
            </button>
        )
    }
}

Layout.defaultProps = {
    type: 'default',
    disabled: false,
    active: false,
    style: {},
    onClick: ()=> {
    }
}