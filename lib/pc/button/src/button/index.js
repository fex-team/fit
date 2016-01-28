import React from 'react'
import classnames from 'classnames'
import 'fit-style'
import './index.scss'

export default class Button extends React.Component {
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
        let loading = false
        if (this.props.loading !== false) {
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

Button.defaultProps = {
    // @desc 按钮风格
    // @enum default primary success info warning danger dark
    type: 'default',

    // @desc 是否禁用
    disabled: false,

    // @desc 是否处于激活状态
    active: false,

    // @desc 样式
    style: {},

    // @desc 是否loading中
    loading: false,

    // @desc 点击后的回调
    onClick: ()=> {
    },

    // @desc test
    a: 1,

    // @desc test
    b: [1, 2, 3],

    // @desc test
    c: {a: 1, b: [1, 2, 3]},

    // @desc test
    d: ()=> {
        console.log(123)
    }
}