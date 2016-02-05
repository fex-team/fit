import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let childs = React.Children.map(this.props.children, (child, index)=> {
            return React.cloneElement(child, {
                key: index,
                globalInverse: this.props.inverse,
                vertical: this.props.vertical,
                height: this.props.height,
                zIndex: 0
            })
        })

        let containerClassname = classNames({
            '_namespace': true,
            'inverse': this.props.inverse,
            'vertical': this.props.vertical
        })

        let containerStyle = {
            height: !this.props.vertical ? this.props.height : null,
            width: this.props.vertical ? this.props.width : null
        }

        return (
            <div className={containerClassname}
                 style={Object.assign({},this.props.style,containerStyle)}>
                {childs}
            </div>
        )
    }
}

Menu.defaultProps = {
    // @desc 样式
    style: {},

    // @desc 高度,横屏有效
    height: 45,

    // @desc 宽度,竖屏有效
    width: 200,

    // @desc 是否反色
    inverse: false,

    // @desc 是否竖屏
    vertical: false
}