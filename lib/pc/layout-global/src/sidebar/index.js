import React from 'react'
import { setSiderBarWidth, setSiderbarDirection } from '../actions'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            direction: this.props.direction || this.props.sectionDirection || 'left',
            top: this.props.top || this.props.headerHeight || 0,
            bottom: this.props.bottom || this.props.footerHeight || 0
        }
    }

    componentWillMount() {
        this.props.store.subscribe(() => {
            let layout = this.props.store.getState().Layout

            this.setState({
                top: layout.headerHeight || 0,
                bottom: layout.footerHeight || 0
            })
        })
    }

    componentDidMount() {
        this.props.store.dispatch(setSiderBarWidth(this.props.width || this.props.siderbarWidth || 100))
        this.props.store.dispatch(setSiderbarDirection(this.props.direction || this.props.sectionDirection || 'left'))
    }

    render() {
        let style = {
            position: 'absolute',
            left: this.state.direction === 'left' ?
            this.props.left || 0 :
            this.props.left || 'auto',
            right: this.state.direction === 'right' ?
            this.props.right || 0 :
            this.props.right || 'auto',
            top: this.props.top || this.state.top,
            bottom: this.props.bottom || this.state.bottom,
            overflow: 'auto',
            width: this.props.width || this.props.siderbarWidth || 100
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}
