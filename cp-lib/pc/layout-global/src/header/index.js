import React from 'react'
import { setHeaderHeight } from '../actions'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.store.dispatch(setHeaderHeight(this.props.height || this.props.headerHeight || 0))
    }

    render() {
        let style = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: this.props.width || this.props.headerWidth || '100%',
            height: this.props.height || this.props.headerHeight
        }

        return (
            <div className="_namespace"
                 style={style}>
                {this.props.children}
            </div>
        )
    }
}

Header.defaultProps = {
    // @desc 高度
    height: 100
}