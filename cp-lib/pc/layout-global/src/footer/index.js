import React from 'react'
import { setFooterHeight } from '../actions'

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.store.dispatch(setFooterHeight(this.props.height || this.props.footerHeight || 100))
    }

    render() {
        let style = {
            position: 'absolute',
            left: this.props.left || 0,
            bottom: this.props.bottom || 0,
            height: this.props.height || this.props.footerHeight,
            width: this.props.width || this.props.footerWidth || '100%'
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}

Footer.defaultProps = {
    // @desc 高度
    height: 100
}