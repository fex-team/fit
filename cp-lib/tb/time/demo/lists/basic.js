import React from 'react'
import Button from 'fit-button'
import Time from 'tb-time'

const style = {
    margin: 3
}

export default class Demo extends React.Component {

    render() {
        let startDate = +new Date('2016-01-01 00:00')

        return (
            <p>距离2016年1月1日已经过了 {Time(startDate).year}年 {Time(startDate).month}月 {Time(startDate).day}天 {Time(startDate).hour}小时 {Time(startDate).minute}分钟 {Time(startDate).second}秒</p>
        )
    }
}