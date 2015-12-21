import React from 'react'

export default class OptGroup extends React.Component {
    render() {
        // 循环子元素
        let Children = React.Children.map(this.props.children, (item, index)=> {
            let active = false
            if (item.props.value === this.props.activeValue) {
                active = true
            }

            return React.cloneElement(item, {
                onClick: this.props.onClick,
                key: index,
                active: active
            })
        })

        return (
            <div>
                <li className="group-result">{this.props.label}</li>
                {Children}
            </div>
        )
    }
}

OptGroup.defaultProps = {
    style: {}
}