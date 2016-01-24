import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class SubMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            onHover: false
        }
    }

    handleMouseEnter() {
        if (this.props.showType !== 'hover')return
        this.setState({
            onHover: true
        })
    }

    handleMouseLeave() {
        if (this.props.showType !== 'hover')return
        this.setState({
            onHover: false
        })
    }

    handleClick() {
        if (this.props.showType !== 'click')return
        this.setState({
            onHover: !this.state.onHover
        })
    }

    render() {
        let inverse = this.props.inverse
        if (this.props.globalInverse) {
            inverse = !inverse
        }

        let className = classNames({
            '_namespace': true,
            'brand': this.props.brand,
            'inverse': inverse,
            'vertical': this.props.vertical
        })

        let containerStyle = {
            minHeight: this.props.height,
            width: this.props.width
        }

        let Children = React.Children.map(this.props.children, (item)=> {
            return React.cloneElement(item, {
                minHeight: this.props.height,
                zIndex: this.props.zIndex + 1,
                vertical: this.props.vertical
            })
        })

        let caretClass = classNames({
            'fa': true,
            'fa-caret-down': this.props.vertical || this.props.zIndex === 0,
            'fa-caret-right': !this.props.vertical && this.props.zIndex > 0
        })

        let subList = {
            top: this.props.zIndex === 0 ? '100%' : 0,
            left: this.props.zIndex === 0 ? 0 : '100%',
            position: this.props.vertical ? 'relative' : 'absolute',
            paddingLeft: this.props.vertical ? 15 : null
        }

        if (this.props.vertical) {
            subList.top = null
            subList.left = null
        }

        return (
            <div style={containerStyle}
                 className={className}
                 onMouseEnter={this.handleMouseEnter.bind(this)}
                 onMouseLeave={this.handleMouseLeave.bind(this)}>
                <div onClick={this.handleClick.bind(this)}
                     className="text-label"
                     style={containerStyle}>
                    {this.props.title}
                    <i className={caretClass}
                       style={{marginLeft:10}}/>
                </div>
                {this.state.onHover ?
                    <div className="sub-list"
                         style={subList}>
                        {Children}
                    </div> : null}
            </div>
        )
    }
}

SubMenu.defaultProps = {
    // @desc 标题
    // @type string
    title: '默认标题',

    // @desc 高度
    // @type int
    height: 45,

    // @desc 子菜单显示方式, hover:鼠标移上去显示 click:点击后显示
    // @type enum
    showType: 'hover'
}