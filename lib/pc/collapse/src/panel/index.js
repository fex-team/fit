import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import $ from 'jquery'
import './index.scss'

export default class CollPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contentHeight: 0,
            finish: true
        }

        this.toggleTimeout = null
    }

    componentDidMount() {
        this.$dom = $(ReactDOM.findDOMNode(this))
        this.setState({
            contentHeight: this.$dom.find('#content').outerHeight()
        })
    }

    componentWillReceiveProps() {
        this.setState({
            contentHeight: this.$dom.find('#content').outerHeight()
        })
    }

    handleClick() {
        this.setState({
            finish: false
        }, ()=> {
            this.props.onChange(this.props._key)
        })

        if (this.toggleTimeout) {
            clearTimeout(this.toggleTimeout)
        }

        this.toggleTimeout = setTimeout(()=> {
            this.setState({
                finish: true
            })
        }, 300)
    }

    render() {
        let panelCollapseClass = classNames({
            'panel-collapse': true,
            'collapse': true,
            'in': true,
            'show': this.props.active
        })

        let rightChevronClass = classNames({
            'fa': true,
            'fa-chevron-right': true,
            'rotate-pre': true,
            'rotate': this.props.active
        })

        // 设置height属性
        let height = null
        height = this.props.active ? this.state.contentHeight : null
        if (this.state.finish) {
            if (this.props.active) {
                height = 'auto'
            } else {
                height = 0
            }
        }
        let contentContainerStyle = {
            height: height
        }

        this.height = height

        return (
            <div className="_namespace panel panel-default">
                <div className="panel-heading"
                     onClick={this.handleClick.bind(this)}>
                    <i className={rightChevronClass}
                       style={{marginRight:5}}/>{this.props.header}
                </div>
                <div className={panelCollapseClass}
                     style={contentContainerStyle}>
                    <div style={this.props.style}
                         id="content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

CollPanel.defaultProps = {
    active: false,
    key: null
}