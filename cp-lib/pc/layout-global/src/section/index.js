import React from 'react'
import './index.scss'

export default class Section extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            direction: this.props.sectionDirection || 'left',
            top: this.props.headerHeight || 0,
            left: this.props.siderbarWidth || 0,
            right: 0,
            bottom: this.props.footerHeight || 0
        }
    }

    componentWillMount() {
        this.props.store.subscribe(() => {
            let layout = this.props.store.getState().Layout

            this.setState({
                top: layout.headerHeight || 0,
                bottom: layout.footerHeight || 0,
                left: layout.siderbarDirection === 'left' ? layout.siderbarWidth :
                    0,
                right: layout.siderbarDirection === 'left' ? 0 :
                    layout.siderbarWidth,
                direction: layout.siderbarDirection
            })
        })
    }

    render() {
        let style = {
            position: 'absolute',
            top: this.props.top || this.state.top,
            bottom: this.props.bottom || this.state.bottom,
            left: this.props.left || this.state.left,
            right: this.props.right || this.state.right || 0
        }

        return (
            <div className="_namespace"
                 style={style}>
                {this.props.children}
            </div>
        )
    }
}
