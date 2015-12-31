import React from 'react'
import ReactDOM from 'react-dom'
import Input from 'fit-input'
import classNames from 'classnames'
import './index.scss'

export default class FitCalendar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            position: 'bottom',
            formatString: ''
        }

        this.handleDocumentClick = (event)=> {
            if (!$.contains(this.$dom[0], event.target)) {
                this.setState({
                    show: false
                })
            }
        }
    }

    componentDidMount() {
        this.$dom = $(ReactDOM.findDOMNode(this))
        $(document).on('click', this.handleDocumentClick)
    }

    componentWillUnmount() {
        $(document).off('click', this.handleDocumentClick)
    }

    handleFocus() {
        let position = 'bottom'
        if (this.$dom.offset().top > 360) {
            position = 'top'
        }

        this.setState({
            showCalendar: true,
            position: position
        })
    }

    render() {
        let containerClass = classNames({
            'container': true,
            [this.state.position]: true
        })

        return (
            <div className="_namespace"
                 style={this.props.style}>
                <Input onFocus={this.handleFocus.bind(this)}
                       value={this.state.formatString}/>
                <i className="fa fa-clock-o addon"/>
                {!this.state.show ? null :
                    <div className={containerClass}>
                        123
                    </div>
                }
            </div>
        )
    }
}

FitCalendar.defaultProps = {
    onChange: ()=> {
    }
}