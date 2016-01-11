import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import _ from 'lodash'
import $ from 'jquery'
import './index.scss'

export default class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showFlexTextarea: false
        }
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
        this.props.onFocus()
        this.setState({
            showFlexTextarea: true
        })
    }

    handleFlexTextareaBlur() {
        this.props.onBlur()
        this.setState({
            showFlexTextarea: false
        })
    }

    handleChange(event) {
        this.props.onChange(event.target.value)
    }

    handleKeyDown(event) {
        this.props.onKeyDown(event)
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

        let mergedInputStyle = Object.assign(_.cloneDeep(this.props.styles.input), textStyle)
        let mergedStyle = Object.assign(_.cloneDeep(this.props.style), textStyle)

        let iconClass = classNames({
            'fa': true,
            ['fa-' + this.props.icon]: true,
            'icon': true
        })

        let childs = (
            <input type="text"
                   id="j-input"
                   value={this.props.value}
                   className="form-control input"
                   onFocus={this.handleFocus.bind(this)}
                   onBlur={this.handleBlur.bind(this)}
                   onChange={this.handleChange.bind(this)}
                   onKeyDown={this.handleKeyDown.bind(this)}
                   disabled={this.props.disabled}
                   placeholder={this.props.placeholder}
                   style={mergedInputStyle}/>
        )

        if (this.props.textarea) {
            childs = (
                <textarea
                    id="j-input"
                    value={this.props.value}
                    className="form-control input"
                    onFocus={this.handleFocus.bind(this)}
                    onBlur={this.handleBlur.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    onKeyDown={this.handleKeyDown.bind(this)}
                    disabled={this.props.disabled}
                    placeholder={this.props.placeholder}
                    style={mergedInputStyle}/>
            )
        }

        let flexTextareaStyle = {
            width: this.state.showFlexTextarea ? this.props.flexWidth || this.props.width || this.$dom && this.$dom.find('#j-input').outerWidth() || 200 : this.$dom && this.$dom.find('#j-input').outerWidth(),
            height: this.state.showFlexTextarea ? this.props.flexHeight || 120 : this.$dom && this.$dom.find('#j-input').outerHeight() || 0
        }

        let flexTextareaClass = classNames({
            'form-control': true,
            'flex-textarea': true,
            'input': true
        })

        let flexChild = (
            <textarea id="j-flex-textarea"
                      className={flexTextareaClass}
                      value={this.props.value}
                      onFocus={this.handleFlexTextareaFocus.bind(this)}
                      onBlur={this.handleFlexTextareaBlur.bind(this)}
                      onChange={this.handleChange.bind(this)}
                      onKeyDown={this.handleKeyDown.bind(this)}
                      disabled={this.props.disabled}
                      placeholder={this.props.placeholder}
                      style={flexTextareaStyle}/>
        )

        if (!_.isEmpty(this.props.label)) {
            childs = (
                <div className="form-container">
                    <label style={{width:this.props.labelWidth||null}}
                           className="form-control-label">{this.props.label}</label>
                    <div style={{position:'relative'}}>
                        {childs}
                        {this.props.icon ? <i className={iconClass}/> : null}
                        {this.props.flexHeight || this.props.flexWidth ?
                            flexChild : null
                        }
                        {this.props.inputEndRender ? this.props.inputEndRender() : null}
                    </div>
                </div>
            )
        }

        if ((!_.isEmpty(this.props.addonLeft) || !_.isEmpty(this.props.addonRight)) && _.isEmpty(this.props.label)) {
            childs = (
                <form className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            {_.isEmpty(this.props.addonLeft) ? null :
                                <div className="input-group-addon">{this.props.addonLeft}</div>}
                            <div style={{position:'relative'}}>
                                {childs}
                                {this.props.icon ? <i className={iconClass}/> : null}
                                {this.props.flexHeight || this.props.flexWidth ?
                                    flexChild : null
                                }
                                {this.props.inputEndRender ? this.props.inputEndRender() : null}
                            </div>
                            {_.isEmpty(this.props.addonRight) ? null :
                                <div className="input-group-addon">{this.props.addonRight}</div>}
                        </div>
                    </div>
                </form>
            )
        }

        return (
            <div style={mergedStyle}
                 className="_namespace">
                {childs}
                {(this.props.flexHeight || this.props.flexWidth) && _.isEmpty(this.props.label) && _.isEmpty(this.props.addonLeft) && _.isEmpty(this.props.addonRight) ?
                    flexChild : null
                }
                {this.props.icon && _.isEmpty(this.props.label) && _.isEmpty(this.props.addonLeft) && _.isEmpty(this.props.addonRight) ?
                    <i className={iconClass}/> : null}
                {this.props.inputEndRender && _.isEmpty(this.props.label) && _.isEmpty(this.props.addonLeft) && _.isEmpty(this.props.addonRight) ? this.props.inputEndRender() : null}
            </div>
        )
    }
}

Input.defaultProps = {
    style: {},
    styles: {
        input: {}
    },
    onChange: ()=> {
    },
    onFocus: ()=> {
    },
    onBlur: ()=> {
    },
    onKeyDown: ()=> {
    },
    disabled: false,
    width: null,
    placeholder: '',
    textarea: false,
    resize: false,
    flexWidth: null,
    flexHeight: null,
    icon: null,
    inputEndRender: null
}