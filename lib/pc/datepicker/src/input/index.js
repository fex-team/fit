import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from '../calendar'
import DateRange from '../date-range'
import Input from 'fit-input'
import $ from 'jquery'
import classNames from 'classnames'
import './index.scss'

export default class DateInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCalendar: false,
            position: 'bottom'
        }

        this.handleDocumentClick = (event)=> {
            if (!$.contains(this.$dom[0], event.target)) {
                this.setState({
                    showCalendar: false
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
        if (this.$dom.offset().top > 310) {
            position = 'top'
        }

        this.setState({
            showCalendar: true,
            position: position
        })
    }

    render() {
        let calendarContainerClass = classNames({
            'calendar-container': true,
            [this.state.position]: true
        })

        return (
            <div className="_namespace" style={{width:this.props.width}}>
                <Input onFocus={this.handleFocus.bind(this)} style={{width:this.props.width}}/>
                <i className="fa fa-calendar addon"/>
                {!this.state.showCalendar ? null :
                    <div className={calendarContainerClass}>
                        <Calendar/>
                    </div>
                }
            </div>
        )
    }
}

DateInput.defaultProps = {
    onChange: ()=> {
    },
    width: 200
}