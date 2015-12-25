import React from 'react'
import classNames from 'classnames'

export default class Row extends React.Component {
    render() {
        const { type, justify, align, className, ...others } = this.props
        const classes = classNames({
            'row': true,
            ['row-' + type]: type,
            ['row-' + type + '-' + justify]: justify,
            ['row-' + type + '-' + align]: align,
            [className]: className
        })
        return <div {...others} className={classes}>{ this.props.children }</div>
    }
}

export default Row