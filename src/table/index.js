import React from 'react'
import classNames from 'classnames'
import $ from 'jquery'
import _ from 'lodash'
import { Datepicker, Timepicker } from 'antd'
import dateFormat from 'dateformat'
import './index.scss'

const mockList = [{
    id: 0,
    name: '郭富城',
    department: '无人车事业部',
    age: 32
}, {
    id: 1,
    name: '陈冠希',
    department: '云计算部',
    age: 26
}, {
    id: 2,
    name: '张学友',
    department: '大数据部',
    age: 36
}]

// 延时查询计时器
let searchTimeout = null

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: []
        }
    }

    componentWillMount() {
        this.updateTable()

        this.searchOpts = {}
    }

    // 搜索区内容修改
    handleSearchBarChange(key, timeout, event) {
        this.searchOpts[key] = event.target ? event.target.value : event
        if (!timeout) {
            this.updateTable()
        } else {
            clearTimeout(searchTimeout)
            searchTimeout = setTimeout(()=> {
                this.updateTable()
            }, 200)
        }
    }

    // 搜索日期修改
    handleSearchBarDateChange(date, start, end, value) {
        this.searchOpts['_' + date] = dateFormat(value, 'yyyy/mm/dd')
        this.dateFinish(date, start, end)
    }

    // 搜索区小时start修改
    handleSearchBarHourStartChange(date, start, end, time) {
        this.searchOpts['_' + start] = time.toLocaleTimeString('zh-CN', {
            hour12: false
        })
        this.dateFinish(date, start, end)
    }

    // 搜索区小时end修改
    handleSearchBarHourEndChange(date, start, end, time) {
        this.searchOpts['_' + end] = time.toLocaleTimeString('zh-CN', {
            hour12: false
        })
        this.dateFinish(date, start, end)
    }

    // 判断日期是否凑齐,可以刷新页面
    dateFinish(date, start, end) {
        if (this.searchOpts['_' + date] && this.searchOpts['_' + start] && this.searchOpts['_' + end]) {
            this.searchOpts[start] = this.searchOpts['_' + date] + ' ' + this.searchOpts['_' + start]
            this.searchOpts[end] = this.searchOpts['_' + date] + ' ' + this.searchOpts['_' + end]
            this.updateTable()
        }
    }

    // 刷新数据表
    updateTable() {
        if (this.props.get.url === '') {
            this.setState({
                datas: mockList
            })
        } else {
            $.ajax({
                url: this.props.get.url,
                data: this.props.get.beforeSend(this.searchOpts)
            }).done((res)=> {
                if (typeof res === 'string') {
                    res = JSON.parse(res)
                }
                this.setState({
                    datas: this.props.get.success(res)
                })
            })
        }
    }

    render() {
        let Th = this.props.fields.map((item, index)=> {
            return (
                <th key={index}>{item.value}</th>
            )
        })

        let TrTd = this.state.datas.map((tr, index)=> {
            let Td = this.props.fields.map((field, fieldIndex)=> {
                return (
                    <td key={fieldIndex}>{tr[field.key]}</td>
                )
            })

            return (
                <tr key={index}>
                    {Td}
                </tr>
            )
        })

        let SearchBar = this.props.search.map((item, index)=> {
            switch (item.type) {
            case 'text':
                return (
                    <div key={index}>
                        <label style={{marginRight:5}}>{item.title}</label>
                        <input type="text"
                               onChange={this.handleSearchBarChange.bind(this,item.key,true)}/>
                    </div>
                )
                break
            case 'date':
                return (
                    <div key={index}
                         className="flex">
                        <div style={{marginRight:5}}>
                            <Datepicker onChange={this.handleSearchBarDateChange.bind(this,item.key.date,item.key.start,item.key.end)}/>
                        </div>
                        <div style={{marginRight:5}}>
                            <Timepicker onChange={this.handleSearchBarHourStartChange.bind(this,item.key.date,item.key.start,item.key.end)}/>
                        </div>
                        <div>
                            <Timepicker onChange={this.handleSearchBarHourEndChange.bind(this,item.key.date,item.key.start,item.key.end)}/>
                        </div>
                    </div>
                )
                break
            }
        })

        return (
            <div className="_namespace">
                <div className="panel">
                    <div className="panel-heading">
                        {this.props.title}
                    </div>

                    {_.isEmpty(this.props.search) ? null : <div className="search-bar">
                        {SearchBar}
                    </div>}

                    <table className="table table-striped">
                        <thead>
                        <tr>
                            {Th}
                        </tr>
                        </thead>
                        <tbody>
                        {_.isEmpty(this.state.datas) ?
                            <tr>
                                <td colSpan={this.props.fields.length}>
                                    <span className="empty-content">暂时没有数据~</span>
                                </td>
                            </tr> : TrTd}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

Table.defaultProps = {
    title: '员工信息登记表',
    fields: [{
        key: 'id',
        value: 'ID'
    }, {
        key: 'name',
        value: '用户名'
    }, {
        key: 'department',
        value: '部门'
    }, {
        key: 'age',
        value: '年龄'
    }],
    add: {
        url: '',
        method: 'get',
        beforeSend: (info)=> {
            return info
        },
        success: (res)=> {
            return res.errno === 0
        }
    },
    del: {
        url: '',
        method: 'get',
        beforeSend: (info)=> {
            return info
        },
        success: (res)=> {
            return res.errno === 0
        }
    },
    update: {
        url: '',
        method: 'get',
        beforeSend: (info)=> {
            return info
        },
        success: (res)=> {
            return res.errno === 0
        }
    },
    get: {
        url: '',
        method: 'get',
        beforeSend: (info)=> {
            return info
        },
        success: (res)=> {
            return res.data
        }
    },
    search: []
}