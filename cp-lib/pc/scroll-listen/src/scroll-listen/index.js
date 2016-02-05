import React from 'react'
import classNames from 'classnames'
import { changeBoxActiveTitle } from '../actions'
import './index.scss'

export default class ScrollListen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nails: [],
            activeTitle: ''
        }
    }

    componentWillMount() {
        this.unsubscribe = this.props.store.subscribe(() => {
            this.setState({
                nails: this.props.store.getState().Nail.infos,
                activeTitle: this.props.store.getState().Nail.title
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    getParentStore(parent) {
        if (parent.props.type.name !== 'ScrollListenContainer') {
            return this.getParentStore(parent.props.parent)
        } else {
            return parent.store
        }
    }

    handleClick(value) {
        this.props.store.dispatch(changeBoxActiveTitle(value))
    }

    render() {
        let Children = this.state.nails.map((item, index)=> {
            let itemClass = classNames({
                item: true,
                active: this.state.activeTitle === item.title
            })
            return (
                <div key={index}
                     onClick={this.handleClick.bind(this,item.title)}
                     className={itemClass}>{item.title}</div>
            )
        })

        return (
            <div className="_namespace">
                {Children}
            </div>
        )
    }
}

ScrollListen.defaultProps = {
    // @desc 当前激活的title
    activeTitle: '',

    // @desc 传入实例化的store
    store: {}
}