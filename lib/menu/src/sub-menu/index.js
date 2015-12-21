import React from 'react'
import classNames from 'classnames'
import './index.scss'
import { setActive } from '../actions'

export default class SubMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: this.props.collapse || true
        }
    }

    componentWillMount () {
        if (this.props.active) {
            setActive(this)
        }
    }

    handleClick () {
        let childrenCount = React.Children.count(this.props.children)

        if (childrenCount === 0) {
            this.props.store.dispatch(setActive(this.props.title))
        }
        else {
            this.setState({
                collapse: !this.state.collapse
            })
        }
    }

    render() {
        let inverse = this.props.inverse
        let childrenCount = React.Children.count(this.props.children)
        if (this.props.globalInverse) {
            inverse = !inverse
        }

        let className = classNames({
            '_namespace': true,
            'brand': this.props.brand,
            'inverse': inverse,
            'vertical':this.props.vertical
        })

        let iconClass = classNames({
            'icon': true,
            'active': this.props.active
        })


        let childs = React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                store: this.props.store,
                active: this.props.activeMenu === child.props.title,
                title: child.props.title
            })
        })

        let subList = this.state.collapse ? <ul className="sub-list" style={{height: 42 * childrenCount}}>{childs}</ul> :
            <ul className="sub-list" style={{height: 0}}>{childs}</ul>

        let angle = (childrenCount > 0) && (this.state.collapse ? <i className="fa fa-angle-down"></i> :
            <i className="fa fa-angle-down rotate-90"></i>)

        return (
            <div {...this.props} className={className}>
                <div>
                    <a href={this.props.href && '#' + this.props.href}
                       className={iconClass}
                       onClick={this.handleClick.bind(this)}>
                        <i className={this.props.icon}></i>
                        {this.props.title}
                        {angle}
                    </a>
                </div>
                {subList}
            </div>
        )
    }
}