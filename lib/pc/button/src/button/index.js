import React from 'react'
import classnames from 'classnames'
import 'fit-style'
import './index.scss'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleClick() {
        if (this.props.disabled || this.props.loading)return
        this.props.onClick()
    }

    render() {
        // addon
        let addon = null
        let addonValue = this.props.addonLeft || this.props.addonRight
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

        // loading
        let loading = null
        if (this.props.loading !== null) {
            let loadingClass = classnames({
                'loading-container': true,
                'show': this.props.loading === true
            })
            loading = (
                <div className={loadingClass}>
                    <i className="fa fa-refresh fa-spin"/>
                </div>
            )
        }

        let btnClass = classnames({
            '_namespace': true,
            'btn': true,
            ['btn-' + this.props.type]: true,
            'disabled': this.props.disabled || this.props.loading === true,
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
                <div style={{display:'flex',justifyContent:'center'}}>
                    {addon ? addon : null}
                    {this.props.children}
                    {loading ? loading : null}
                </div>
            </button>
        )
    }
}

Layout.defaultProps = {
    type: 'default',
    disabled: false,
    active: false,
    style: {},
    loading: null,
    onClick: ()=> {
    }
}