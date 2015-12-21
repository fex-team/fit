import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import $ from 'jquery'
import _ from 'lodash'
import './index.scss'
import './chosen.scss'

export default class Select extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            value: this.props.value
        }
    }

    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this)
        $(document).on('click', this.dom, (event)=> {
            if (!$.contains(this.dom, event.target)) {
                this.setState({
                    open: false
                })
            }
        })
    }

    componentWillUnmount() {
        $(document).off('click', this.dom)
    }

    // 选择框点击
    handleSelectClick() {
        this.setState({
            open: !this.state.open
        })
    }

    // 选择栏目点击
    handleClick(value) {
        this.setState({
            open: false,
            value: value
        }, ()=> {
            this.props.onChange(value)
        })
    }

    render() {
        let chosenDropStyle = {
            display: this.state.open ? null : 'none',
            left: 0,
            width: this.props.width
        }

        let chosenSingleClass = classNames({
            'chosen-single': true,
            'active': this.state.open
        })

        // 搜索框
        let Search = null
        if (this.props.search === true) {
            Search = (
                <div className="chosen-search">
                    <input className="form-control" type="text" autoComplete="off"/>
                </div>
            )
        }

        // 循环子元素,同时获取value
        let valueLabel = ""
        let Children = React.Children.map(this.props.children, (item, index)=> {
            let active = false
            if (item.props.value === this.state.value) {
                valueLabel = item.props.children
                active = true
            }

            if (_.isArray(item.props.children)) {
                item.props.children.map((childItem)=> {
                    if (childItem.props.value === this.state.value) {
                        valueLabel = childItem.props.children
                        active = true
                    }
                })
            }

            return React.cloneElement(item, {
                onClick: this.handleClick.bind(this),
                key: index,
                active: active,
                activeValue: this.state.value
            })
        })

        return (
            <div style={this.props.style} className="_namespace">
                <div className="chosen-container chosen-container-single" style={{width:this.props.width}}>
                    <a className={chosenSingleClass} tabIndex="-1"
                       onClick={this.handleSelectClick.bind(this)}><span>{valueLabel}</span>
                        <div><b></b></div>
                    </a>

                    <div id="j-chosen" className="chosen-drop" style={chosenDropStyle}>
                        {Search ? Search : null}
                        <ul className="chosen-results">
                            {Children}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

Select.defaultProps = {
    width: 240,
    style: {},
    onChange: (value)=> {
    },
    search: false
}