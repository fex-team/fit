import React from 'react'
import classNames from 'classnames'
import $ from 'jquery'
import _ from 'lodash'
import { Datepicker, Timepicker } from 'antd'
import dateFormat from 'dateformat'
import Pagination from 'tb-pagination'
import './index.scss'

// 延时查询计时器
let searchTimeout = null

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: [],
            paginOpts: {},
            currentPage: 1,
            loading: false
        }
    }

    componentWillMount() {
        this.searchOpts = {}
        this.updateTable()
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
    updateTable(page) {
        if (this.props.get.url === '') {
            this.setState({
                datas: this.props.datas
            })
        } else {
            $.ajax({
                url: this.props.get.url,
                beforeSend: ()=> {
                    this.setState({
                        loading: true
                    })
                },
                data: this.props.get.beforeSend(this.searchOpts, page || this.state.currentPage)
            }).done((res)=> {
                if (typeof res === 'string') {
                    res = JSON.parse(res)
                }

                let newPaginOpts = this.state.paginOpts
                let newDatas = this.props.get.success(res, newPaginOpts)

                this.setState({
                    datas: newDatas,
                    paginOpts: newPaginOpts,
                    currentPage: page || this.state.currentPage,
                    loading: false
                })
            })
        }
    }

    // 翻页
    handleChangePage(page) {
        this.updateTable(page)
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

                    {_.isEmpty(this.state.paginOpts) ? null :
                        <div className="pagination-container">
                            <Pagination onChange={this.handleChangePage.bind(this)}
                                {...this.state.paginOpts}
                                        loading={this.state.loading}/>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

Table.defaultProps = {
    title: '表格',

    // 表头字段
    fields: [],

    // 打底数据
    datas: [],

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