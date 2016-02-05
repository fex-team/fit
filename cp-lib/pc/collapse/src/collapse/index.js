import React from 'react'
import CollPanel from '../coll-panel'
import _ from 'lodash'

const arrayOrStrEqual = (item, arr)=> {
    if (_.isArray(arr)) {
        return _.includes(arr, item)
    }
    return item === arr
}

export default class Collapse extends React.Component {
    constructor(props) {
        super(props)

        let activeKey = this.props.activeKey || this.props.defaultActiveKey
        if (!this.props.accordion && !_.isArray(activeKey)) {
            activeKey = [activeKey]
        }

        this.state = {
            activeKey: activeKey
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('activeKey' in nextProps) {
            this.setState({
                activeKey: nextProps.activeKey
            })
        }
    }

    handleChange(key) {
        let activeKey = this.state.activeKey
        if (!this.props.accordion) {
            if (_.isArray(activeKey)) {
                if (_.includes(activeKey, key)) {
                    _.pull(activeKey, key)
                } else {
                    activeKey.push(key)
                }
            } else {
                activeKey = key
            }
        } else {
            if (activeKey === key) {
                activeKey = null
            } else {
                activeKey = key
            }
        }

        this.setState({
            activeKey: activeKey
        }, ()=> {
            this.props.onChange(key)
        })
    }

    render() {
        let Children = React.Children.map(this.props.children, (item)=> {
            return React.cloneElement(item, {
                active: arrayOrStrEqual(item.key, this.state.activeKey),
                onChange: this.handleChange.bind(this),
                key: item.key,
                _key: item.key
            })
        })

        return (
            <div style={this.props.style}>
                {Children}
            </div>
        )
    }
}

Collapse.defaultProps = {
    accordion: false,
    onChange: (key)=> {
    }
}