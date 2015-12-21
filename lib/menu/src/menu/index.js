import React from 'react'
import classNames from 'classnames'
import './index.scss'
import { createStore } from 'redux'
import MenuApp from '../reducers'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: this.props.active || ''
        }
    }

    componentWillMount () {
        this.store = createStore(MenuApp)
    }

    componentDidMount () {
        this.store.subscribe(() => {
            let menuState = this.store.getState()

            this.setState({
                active: menuState.Menu.active
            })
        })
    }

    render() {
        let childs = React.Children.map(this.props.children, (child, index)=> {
            return React.cloneElement(child, {
                key: index,
                globalInverse: this.props.inverse,
                vertical: this.props.vertical,
                store: this.store,
                activeMenu: this.state.active,
                active: this.state.active === child.props.title
            })
        })

        let menuClassname = classNames({
            '_namespace': true,
            'inverse': this.props.inverse,
            'vertical': this.props.vertical
        })

        return (
            <div {...this.props} className={menuClassname}>
                {childs}
            </div>
        )
    }
}