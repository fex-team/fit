import React from 'react'
import ReactDOM from 'react-dom'
import Calendar from '../calendar'
import DateRange from '../date-range'
import TimePicker from 'fit-timepicker'
import Input from 'fit-input'
import $ from 'jquery'
import classNames from 'classnames'
import './index.scss'

export default class DateInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCalendar: false,
            position: 'bottom',
            formatString: '',
            date: '',
            startDate: '',
            endDate: ''
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
        if (this.$dom.offset().top > 360) {
            position = 'top'
        }

        this.setState({
            showCalendar: true,
            position: position
        })
    }

    handleCalendarChange(date) {
        let format
        if (this.props.showTime) {
            let newDate = date.clone()
            if (this.dateTimepickerMoment) {
                newDate.hour(this.dateTimepickerMoment.hour())
                newDate.minute(this.dateTimepickerMoment.minute())
                newDate.second(this.dateTimepickerMoment.second())
            }

            this.props.onChange(newDate)
            format = newDate.format('YYYY-MM-DD HH:mm:ss')
        } else {
            this.props.onChange(date)
            format = date.format('YYYY-MM-DD')
        }

        this.calendarMoment = date

        this.setState({
            date: format,
            formatString: format
        })
    }

    handleDateRangeChange(date) {
        let format
        let formatString
        if (this.props.showTime) {
            let start = date.startDate.clone()
            let end = date.endDate.clone()

            if (this.startDateTimepickerMoment) {
                start.hour(this.startDateTimepickerMoment.hour())
                start.minute(this.startDateTimepickerMoment.minute())
                start.second(this.startDateTimepickerMoment.second())
            }

            if (this.endDateTimepickerMoment) {
                end.hour(this.endDateTimepickerMoment.hour())
                end.minute(this.endDateTimepickerMoment.minute())
                end.second(this.endDateTimepickerMoment.second())
            }

            this.props.onChange({
                startDate: start,
                endDate: end
            })

            format = {
                start: start,
                end: end
            }
            formatString = start.format('YYYY-MM-DD HH:mm:ss') + ' - ' + end.format('YYYY-MM-DD HH:mm:ss')
        } else {
            this.props.onChange(date)
            format = date
            formatString = date.startDate.format('YYYY-MM-DD') + ' - ' + date.endDate.format('YYYY-MM-DD')
        }

        this.dateRangeMoment = date

        this.setState({
            startDate: format.start,
            endDate: format.end,
            formatString: formatString
        })
    }

    handleTimepicker(type, moment) {
        this[type + 'TimepickerMoment'] = moment
        if (type === 'date' && this.calendarMoment) {
            this.handleCalendarChange(this.calendarMoment)
        } else if (this.dateRangeMoment) {
            this.handleDateRangeChange(this.dateRangeMoment)
        }
    }

    render() {
        let calendarContainerClass = classNames({
            'calendar-container': true,
            [this.state.position]: true,
            'show-time': this.props.showTime,
            'show': this.state.showCalendar,
            'hide': !this.state.showCalendar
        })

        let CalendarComponent = (
            <Calendar onChange={this.handleCalendarChange.bind(this)} {...this.props.calendarOpts}/>
        )

        if (this.props.type === 'dateRange') {
            CalendarComponent = (
                <DateRange onChange={this.handleDateRangeChange.bind(this)}
                           calendars="2"
                           toolbar {...this.props.calendarOpts}/>
            )
        }

        let TimePickerComponent = null
        if (this.props.showTime) {
            if (this.props.type !== 'dateRange') {
                TimePickerComponent = (
                    <TimePicker input={{styles:{input:{borderLeft:'none',borderTop:'none',borderRight:'none'}}}}
                                onChange={this.handleTimepicker.bind(this,'date')}/>
                )
            } else {
                TimePickerComponent = (
                    <div style={{display:'flex'}}>
                        <TimePicker onChange={this.handleTimepicker.bind(this,'startDate')}
                                    style={{flexGrow:1}}
                                    input={{styles:{input:{borderLeft:'none',borderTop:'none',borderRight:'none'}}}}/>
                        <TimePicker onChange={this.handleTimepicker.bind(this,'endDate')}
                                    style={{flexGrow:1}}
                                    input={{styles:{input:{borderRight:'none',borderTop:'none'}}}}/>
                    </div>
                )
            }
        }

        return (
            <div className="_namespace"
                 style={this.props.style}>
                <Input onFocus={this.handleFocus.bind(this)}
                    {...this.props.input}
                       value={this.state.formatString}
                       placeholder={this.props.type==='dateRange'?'开始日期 ~ 结束日期':null}
                       width={this.props.width||350}
                       icon="calendar"
                       style={{width:this.props.width}}/>

                {this.state.showCalendar ?
                    <div className={calendarContainerClass}>
                        {TimePickerComponent ? TimePickerComponent : null}
                        {CalendarComponent}
                    </div> : null}
            </div>
        )
    }
}

DateInput.defaultProps = {
    onChange: ()=> {
    },
    calendarOpts: {},
    type: 'calendar',
    showTime: false
}