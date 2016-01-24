import React from 'react'

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
        console.log('section')
        this.props.store.subscribe(() => {
            let layout = this.props.store.getState().Layout

            console.log(layout)

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
            overflow: 'auto',
            left: this.props.left || this.state.left,
            right: this.props.right || this.state.right || 0
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}
