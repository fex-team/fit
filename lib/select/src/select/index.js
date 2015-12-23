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
            value: this.props.value,
            searchValue: ''
        }

        // 点击document
        this.handleDocumentClick = (event)=> {
            if (!$.contains(this.dom, event.target)) {
                this.setState({
                    open: false
                })
            }
        }
    }

    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this)
        $(document).on('click', this.handleDocumentClick)
    }

    componentWillUnmount() {
        $(document).off('click', this.handleDocumentClick)
    }

    // 选择框点击
    handleSelectClick() {
        this.setState({
            open: !this.state.open
        }, ()=> {
            if (this.state.open) {
                $(this.dom).find('#j-search').focus()
            }
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

    // 搜索框改变
    handleSearchChange(event) {
        this.setState({
            searchValue: event.target.value
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
                    <input id="j-search" className="form-control search-input" type="text"
                           value={this.state.searchValue} autoComplete="off"
                           onChange={this.handleSearchChange.bind(this)}/>
                </div>
            )
        }

        // 循环子元素,同时获取value,同时判断search
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
                activeValue: this.state.value,
                searchValue: this.state.searchValue
            })
        })

        let SelectContent = (
            <div className="_namespace">
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

        if (!_.isEmpty(this.props.label)) {
            return (
                <div style={this.props.style} className="form-container">
                    <label style={{width:this.props.labelWidth||null}}
                           className="form-control-label">{this.props.label}</label>
                    {SelectContent}
                </div>
            )
        }

        if (!_.isEmpty(this.props.addonLeft) || !_.isEmpty(this.props.addonRight)) {
            return (
                <form style={this.props.style} className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            {_.isEmpty(this.props.addonLeft) ? null :
                                <div className="input-group-addon">{this.props.addonLeft}</div>}
                            {SelectContent}
                            {_.isEmpty(this.props.addonRight) ? null :
                                <div className="input-group-addon">{this.props.addonRight}</div>}
                        </div>
                    </div>
                </form>
            )
        }

        return React.cloneElement(SelectContent, {
            style: this.props.style
        })
    }
}

Select.defaultProps = {
    width: 240,
    style: {},
    onChange: (value)=> {
    },
    search: false
}