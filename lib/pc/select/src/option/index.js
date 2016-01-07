import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import './index.scss'

const reg = (input)=> {
    let flags = 'g'
    return new RegExp(input, flags)
}

export default class Option extends React.Component {
    handleClick() {
        if (this.props.disabled)return
        this.props.onClick(this.props.value)
    }

    render() {
        let classname = classNames({
            '_namespace': true,
            'active-result': true,
            'group-option': true,
            'active': this.props.active,
            'disabled': this.props.disabled
        })

        if (!_.isEmpty(this.props.searchValue)) {
            let regex = reg(this.props.searchValue)
            if (regex.test(this.props.children)) {
                let matchedString = this.props.children.replace(regex, '<span class="active">' + this.props.searchValue + '</span>')
                return (
                    <li onClick={this.handleClick.bind(this)}
                        className={classname}
                        dangerouslySetInnerHTML={{__html: matchedString}}></li>
                )
            } else {
                return null
            }
        }

        return (
            <li onClick={this.handleClick.bind(this)}
                className={classname}>{this.props.children}</li>
        )
    }
}

Option.defaultProps = {
    active: false,
    searchValue: '',
    disabled: false
}