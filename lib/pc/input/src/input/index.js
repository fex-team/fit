import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import _ from 'lodash'
import $ from 'jquery'
import './index.scss'

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showFlexTextarea: false,
            value: this.props.value || this.props.defaultValue
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                checked: nextProps.value
            })
        }
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        }, ()=> {
            this.props.onChange(this.state.value)
        })
    }

    componentDidMount() {
        this.$dom = $(ReactDOM.findDOMNode(this))
        if (this.props.flexWidth || this.props.flexHeight) {
            this.forceUpdate()
            setTimeout(()=> {
                this.$dom.find('#j-flex-textarea').show()
            })
        }
    }

    handleFocus() {
        this.props.onFocus()
    }

    handleBlur() {
        this.props.onBlur()
    }

    handleFlexTextareaFocus() {
        this.setState({
            showFlexTextarea: true
        })
    }

    handleFlexTextareaBlur() {
        this.setState({
            showFlexTextarea: false
        })
    }

    render() {
        let textStyle = {
            height: this.props.height,
            resize: this.props.resize ? null : 'none'
        }
        if (this.props.width) {
            textStyle.width = this.props.width
        } else {
            textStyle.flexGrow = 1
        }

        let childs = (
            <input type="text"
                   id="j-input"
                   value={this.props.value||null}
                   className="form-control input"
                   onFocus={this.handleFocus.bind(this)}
                   onBlur={this.handleBlur.bind(this)}
                   onChange={this.handleChange.bind(this)}
                   disabled={this.props.disabled}
                   placeholder={this.props.placeholder}
                   style={textStyle}/>
        )

        if (this.props.textarea) {
            childs = (
                <textarea
                    id="j-input"
                    value={this.props.value||null}
                    className="form-control input"
                    onFocus={this.handleFocus.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    disabled={this.props.disabled}
                    placeholder={this.props.placeholder}
                    style={textStyle}/>
            )
        }

        if (!_.isEmpty(this.props.label)) {
            childs = (
                <div className="form-container">
                    <label style={{width:this.props.labelWidth||null}}
                           className="form-control-label">{this.props.label}</label>
                    {childs}
                </div>
            )
        }

        if (!_.isEmpty(this.props.addonLeft) || !_.isEmpty(this.props.addonRight)) {
            childs = (
                <form className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            {_.isEmpty(this.props.addonLeft) ? null :
                                <div className="input-group-addon">{this.props.addonLeft}</div>}
                            {childs}
                            {_.isEmpty(this.props.addonRight) ? null :
                                <div className="input-group-addon">{this.props.addonRight}</div>}
                        </div>
                    </div>
                </form>
            )
        }

        let flexTextareaClass = classNames({
            'form-control': true,
            'flex-textarea': true,
            'input': true
        })

        let flexTextareaStyle = {
            width: this.state.showFlexTextarea ? this.props.flexWidth || this.props.width || this.$dom && this.$dom.find('#j-input').outerWidth() || 200 : this.$dom && this.$dom.find('#j-input').outerWidth(),
            height: this.state.showFlexTextarea ? this.props.flexHeight || 120 : this.$dom && this.$dom.find('#j-input').outerHeight() || 0
        }

        return (
            <div style={this.props.style}
                 className="_namespace">
                {childs}
                {this.props.flexHeight || this.props.flexWidth ?
                    <textarea id="j-flex-textarea"
                              onFocus={this.handleFlexTextareaFocus.bind(this)}
                              onBlur={this.handleFlexTextareaBlur.bind(this)}
                              className={flexTextareaClass}
                              value={this.props.value||null}
                              onChange={this.handleChange.bind(this)}
                              disabled={this.props.disabled}
                              placeholder={this.props.placeholder}
                              style={flexTextareaStyle}/> : null
                }
            </div>
        )
    }
}

Checkbox.defaultProps = {
    style: {},
    onChange: ()=> {
    },
    onFocus: ()=> {
    },
    onBlur: ()=> {
    },
    disabled: false,
    width: null,
    placeholder: '',
    textarea: false,
    resize: false,
    flexWidth: null,
    flexHeight: null
}