import React from 'react'
import { createStore } from 'redux'
import LayoutApp from '../reducers'

export default class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let store = createStore(LayoutApp)

        let childs = this.props.children.map((children, index)=> {
            return React.cloneElement(children, {
                key: index,
                headerHeight: this.props.headerHeight,
                headerWidth: this.props.headerWidth,
                siderbarWidth: this.props.siderbarWidth,
                siderbarHeight: this.props.siderbarHeight,
                footerHeight: this.props.footerHeight,
                footerWidth: this.props.footerWidth,
                sectionDirection: this.props.sectionDirection,
                store: store
            })
        })

        return (
            <div>
                {childs}
            </div>
        )
    }
}
