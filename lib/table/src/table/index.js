import React from 'react'
import classNames from 'classnames'
import $ from 'jquery'
import _ from 'lodash'
import { Datepicker, Timepicker } from 'antd'
import dateFormat from 'dateformat'
import Pagination from 'tb-pagination'
import Checkbox from 'tb-checkbox'
import Radio from 'tb-radio'
import Finder from './finder'
import './index.scss'

// 判断当前行是否在选择的行信息里
const inRowList = (info, index, list)=> {
    for (let val of list) {
        if (index === val.index && _.isEqual(info, val.info)) {
            return true
        }
    }
    return false
}

export default class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: [],
            paginOpts: {},
            currentPage: 1,
<<<<<<< HEAD
            loading: false,
            fields: _.cloneDeep(this.props.fields),

            // 行选择模式下选择的行信息
            selectRowList: []
        }
=======
<<<<<<< HEAD
            loading: false,
            fields: _.cloneDeep(this.props.fields),

            // 行选择模式下选择的行信息
            selectRowList: []
        }
=======
            loading: false
        }
    }

    componentWillMount() {
        this.searchOpts = {}
        this.prevRes = null
        this.updateTable()
>>>>>>> bd323e3dc5db1c55798145f9189678ba4d3a1588
>>>>>>> e81b9aecbcc8aa02e56c1e49c7534650cdcdb2a0
    }

    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            this.setState({
                fields: _.cloneDeep(nextProps.fields)
            })
        }
    }

    componentWillMount() {
        // 查询请求参数
        this.searchOpts = {}

        // 上一个请求返回的内容
        this.prevResponse = null

        // extend获取内容
        this.extendInfo = {
            getCurrentSelectRows: ()=> {
                let selectList = []
                this.state.selectRowList.map((item)=> {
                    selectList.push(item.info)
                })
                return _.cloneDeep(selectList)
            },
            currentPage: ()=> {
                return this.state.currentPage
            },
            jump: (page)=> {
                this.updateTable(page)
            }
        }

        // 是否添加表头
        if (this.props.selector.type === 'checkbox') {
            this.state.fields.unshift({
                type: 'checkbox'
            })
<<<<<<< HEAD
        }
        if (this.props.selector.type === 'radio') {
            this.state.fields.unshift({
                type: 'radio'
            })
        }
=======
        }
        if (this.props.selector.type === 'radio') {
            this.state.fields.unshift({
                type: 'radio'
            })
        }
>>>>>>> e81b9aecbcc8aa02e56c1e49c7534650cdcdb2a0

        this.updateTable()
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
<<<<<<< HEAD
                data: this.props.get.beforeSend(this.searchOpts, page || this.state.currentPage, this.prevResponse)
=======
<<<<<<< HEAD
                data: this.props.get.beforeSend(this.searchOpts, page || this.state.currentPage, this.prevResponse)
=======
                data: this.props.get.beforeSend(this.searchOpts, page || this.state.currentPage, this.prevRes)
>>>>>>> bd323e3dc5db1c55798145f9189678ba4d3a1588
>>>>>>> e81b9aecbcc8aa02e56c1e49c7534650cdcdb2a0
            }).done((res)=> {
                if (typeof res === 'string') {
                    res = JSON.parse(res)
                }

                // 保存当前返回值
<<<<<<< HEAD
                this.prevResponse = res
=======
<<<<<<< HEAD
                this.prevResponse = res
=======
                this.prevRes = res
>>>>>>> bd323e3dc5db1c55798145f9189678ba4d3a1588
>>>>>>> e81b9aecbcc8aa02e56c1e49c7534650cdcdb2a0

                let newPaginOpts = this.state.paginOpts
                let newDatas = this.props.get.success(res, newPaginOpts)

                this.setState({
                    datas: newDatas,
                    paginOpts: newPaginOpts,
                    currentPage: page || this.state.currentPage,
<<<<<<< HEAD
                    loading: false,
                    selectRowList: []
=======
<<<<<<< HEAD
                    loading: false,
                    selectRowList: []
=======
                    loading: false
>>>>>>> bd323e3dc5db1c55798145f9189678ba4d3a1588
>>>>>>> e81b9aecbcc8aa02e56c1e49c7534650cdcdb2a0
                })
            })
        }
    }

    // 翻页
    handleChangePage(page) {
        this.updateTable(page)
    }

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> e81b9aecbcc8aa02e56c1e49c7534650cdcdb2a0
    // radio行选择点击
    onTrRadioClick(info, index) {
        this.setState({
            selectRowList: [{
                info: info,
                index: index
            }]
<<<<<<< HEAD
=======
=======
    render() {
        let Th = this.props.fields.map((item, index)=> {
            return (
                <th key={index}>{item.value}</th>
            )
>>>>>>> bd323e3dc5db1c55798145f9189678ba4d3a1588
>>>>>>> e81b9aecbcc8aa02e56c1e49c7534650cdcdb2a0
        })
    }

    // checkbox行选择点击
    onTrCheckboxClick(info, index, checked) {
        let newSelectRowList = _.cloneDeep(this.state.selectRowList)

        if (checked) {
            newSelectRowList.push({
                info: info,
                index: index
<<<<<<< HEAD
            })
        } else {
            _.remove(newSelectRowList, function (item) {
                if (item.index === index && _.isEqual(item.info, info)) {
                    return true
                }
                return false
            })
=======
            })
        } else {
            _.remove(newSelectRowList, function (item) {
                if (item.index === index && _.isEqual(item.info, info)) {
                    return true
                }
                return false
            })
>>>>>>> e81b9aecbcc8aa02e56c1e49c7534650cdcdb2a0
        }

        this.setState({
            selectRowList: newSelectRowList
        })
    }
<<<<<<< HEAD

    // checkbox行全选
    onTrCheckboxSelectAll(checked) {
        if (checked) {
            let newSelectRowList = []
            this.state.datas.map((item, index)=> {
                newSelectRowList.push({
                    info: item,
                    index: index
                })
            })
            this.setState({
                selectRowList: newSelectRowList
            })
        } else {
            this.setState({
                selectRowList: []
            })
        }
    }

    // 查询按钮点击
    handleSearch(params) {
        this.searchOpts = $.extend(this.searchOpts,params)
    }

=======

    // checkbox行全选
    onTrCheckboxSelectAll(checked) {
        if (checked) {
            let newSelectRowList = []
            this.state.datas.map((item, index)=> {
                newSelectRowList.push({
                    info: item,
                    index: index
                })
            })
            this.setState({
                selectRowList: newSelectRowList
            })
        } else {
            this.setState({
                selectRowList: []
            })
        }
    }

    // 查询按钮点击
    handleSearch(params) {
        this.searchOpts = $.extend(this.searchOpts, params)
    }

>>>>>>> e81b9aecbcc8aa02e56c1e49c7534650cdcdb2a0
    render() {
        let Th = this.state.fields.map((item, index)=> {
            switch (item.type) {
            case 'checkbox':
                return (
                    <th key={index}
                        style={{width:100}}>
                        <Checkbox onChange={this.onTrCheckboxSelectAll.bind(this)}
                                  checked={this.state.datas.length===this.state.selectRowList.length}>全选</Checkbox>
                    </th>
                )
            case 'radio':
                return (
                    <th key={index}
                        style={{width:100}}></th>
                )
            default:
                return (
                    <th key={index}>{item.value}</th>
                )
            }

        })

        let TrTd = this.state.datas.map((tr, index)=> {
            let Td = this.state.fields.map((field, fieldIndex)=> {
                switch (field.type) {
                case 'checkbox':
                    return (
                        <td key={fieldIndex}>
                            <Checkbox onChange={this.onTrCheckboxClick.bind(this,tr,index)}
                                      checked={inRowList(tr,index,this.state.selectRowList)}/>
                        </td>
                    )
                case 'radio':
                    return (
                        <td key={fieldIndex}>
                            <Radio onChange={this.onTrRadioClick.bind(this,tr,index)}
                                   checked={inRowList(tr,index,this.state.selectRowList)}/>
                        </td>
                    )
                default:
                    return (
                        <td key={fieldIndex}>{tr[field.key]}</td>
                    )
                }
            })

            return (
                <tr key={index}>
                    {Td}
                </tr>
            )
        })

        return (
            <div className="_namespace">
                <div className="panel">
                    <div className="panel-heading">
                        {this.props.title}
                    </div>

                    {_.isEmpty(this.props.finder) ? null :
                        <Finder onSearch={this.handleSearch.bind(this)} finder={this.props.finder}/>}

                    <table className="table table-striped">
                        <thead>
                        <tr>
                            {Th}
                        </tr>
                        </thead>
                        <tbody>
                        {_.isEmpty(this.state.datas) ?
                            <tr>
                                <td colSpan={this.state.fields.length}>
                                    <span className="empty-content">暂时没有数据~</span>
                                </td>
                            </tr> : TrTd}
                        </tbody>
                    </table>

                    {_.isEmpty(this.state.paginOpts) ? null :
                        <div className="pagination-container">
<<<<<<< HEAD
                            <div
                                style={{flexGrow:1,paddingLeft:15}}>{this.props.extend(this.extendInfo)}</div>
                            <Pagination style={{flexGrow:1}} onChange={this.handleChangePage.bind(this)}
=======
<<<<<<< HEAD
                            <div
                                style={{flexGrow:1,paddingLeft:15}}>{this.props.extend(this.extendInfo)}</div>
                            <Pagination style={{flexGrow:1}} onChange={this.handleChangePage.bind(this)}
=======
                            <Pagination onChange={this.handleChangePage.bind(this)}
>>>>>>> bd323e3dc5db1c55798145f9189678ba4d3a1588
>>>>>>> e81b9aecbcc8aa02e56c1e49c7534650cdcdb2a0
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

    search: [],

    // 行选择
    selector: {},

    // 条件查询
    finder: {},

    // 拓展
    extend: (table)=> {
    }
}