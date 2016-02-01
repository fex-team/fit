import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class Title extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.titles.length > 0 ? this.props.titles[0].to : null
        }
    }

    handleClick(value) {
        this.setState({
            value: value
        })
        this.props.onChange(value)
    }

    render() {
        let Children = this.props.titles.map((item, index)=> {
            let itemClass = classNames({
                item: true,
                active: this.state.value === item.to
            })
            return (
                <div key={index}
                     onClick={this.handleClick.bind(this,item.to)}
                     className={itemClass}>{item.name}</div>
            )
        })

        return (
            <div className="_namespace">
                {Children}
            </div>
        )
    }
}

Title.defaultProps = {
    // @desc 一共有哪些demo的数组
    titles: [],

    // @desc 手动选择回调
    onChange: ()=> {
    }
}