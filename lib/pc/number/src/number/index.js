import React from 'react'
import classNames from 'classnames'
import Input from 'fit-input'
import $ from 'jquery'
import _ from 'lodash'
import './index.scss'

let interval

const parseToNumber = (value, scope, fullLength, ignoreParent) => {
    let number

    value = _.gt(parseFloat(value), parseFloat(scope.props.max)) ? scope.props.max : value
    value = _.lt(parseFloat(value), parseFloat(scope.props.min)) ? scope.props.min : value

    if (!scope.props.float) {
        number = _.parseInt(value)
    } else {
        if (fullLength) {
            number = parseFloat(value).toFixed(scope.props.float)
        } else {
            number = parseFloat(value)
        }
    }

    if (_.isNaN(number)) {
        number = 0
    }

    // 允许空值
    if (value === '' || value === undefined) {
        number = ''
    }

    // 允许单独写一个-,因为可能在写一个负数
    if (value === '-') {
        number = '-'
    }

    // 浮点计数下允许-0
    if (scope.props.float && value === '-0') {
        number = '-0'
    }

    // 当前面有值的时候,允许后面写一个.,因为可能在写一个小数
    if (scope.props.float && value && value !== '' && value.length > 1) {
        if (value[value.length - 1] === '.' || value[value.length - 1] === '。') {
            number = number + '.'
        }
    }

    // 浮点计数下允许-0.
    if (scope.props.float && value === '-0.') {
        number = '-0.'
    }

    // 浮点时不能超过精度
    if (scope.props.float) {
        let arr = number.toString().split('.')
        // 小数点后面有值
        if (arr.length > 1 && arr[1].length > parseInt(scope.props.float)) {
            number = number.toFixed(scope.props.float)
        }
    }

    // 传给父级干净的值
    if (!ignoreParent && number !== '' && !_.isNaN(number)) {
        if (!scope.props.float) {
            scope.props.onChange(parseInt(number))
        } else {
            scope.props.onChange(parseFloat(number).toFixed(scope.props.float))
        }
    }

    return number
}

export default class Number extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value ? parseToNumber(this.props.value, this, true) : parseToNumber(this.props.defaultValue, this, true)
        }
    }

    // 鼠标松开后停止计数
    handleMouseUp() {
        clearInterval(interval)
    }

    componentDidMount() {
        $(document).on('mouseup', this.handleMouseUp)
    }

    componentWillUnmount() {
        $(document).off('mouseup', this.handleMouseUp)
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: parseToNumber(nextProps.value, this, true)
            })
        }
    }

    increase() {
        interval = setInterval(()=> {
            this.safeSetValue((parseFloat(this.state.value) || 0) + parseFloat(this.props.step), true)
        }, parseInt(this.props.speed))
        this.safeSetValue((parseFloat(this.state.value) || 0) + parseFloat(this.props.step), true)
    }

    reduce() {
        interval = setInterval(()=> {
            this.safeSetValue((parseFloat(this.state.value) || 0) - parseFloat(this.props.step), true)
        }, parseInt(this.props.speed))
        this.safeSetValue((parseFloat(this.state.value) || 0) - parseFloat(this.props.step), true)
    }

    // input后跟随内容
    endRender() {
        return (
            <div className="addon">
                <i onMouseDown={this.increase.bind(this)}
                   className="fa fa-chevron-up"/>
                <i onMouseDown={this.reduce.bind(this)}
                   className="fa fa-chevron-down"/>
            </div>
        )
    }

    handleChange(value) {
        this.safeSetValue(value)
    }

    safeSetValue(value, fullLength) {
        this.setState({
            value: parseToNumber(value, this, fullLength)
        })
    }

    render() {
        let textStyle = {
            height: this.props.height
        }
        if (this.props.width) {
            textStyle.width = this.props.width
        } else {
            textStyle.flexGrow = 1
        }

        let mergedStyle = Object.assign(_.cloneDeep(this.props.style), textStyle)

        return (
            <div style={mergedStyle}
                 className="_namespace">
                <Input {...this.props}
                    value={this.state.value}
                    onChange={this.handleChange.bind(this)}
                    inputEndRender={this.endRender.bind(this)}/>
            </div>
        )
    }
}

Number.defaultProps = {
    style: {},
    min: -Infinity,
    max: Infinity,
    step: 1,
    float: false,
    speed: 200,
    onChange: ()=> {
    }
}