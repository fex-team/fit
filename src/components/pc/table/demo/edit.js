import React from 'react'
import Table from 'fit-table'

const info = {
    fields: [{
        key: 'id',
        value: '产品编号',
        edit: true
    }, {
        key: 'yesterday',
        value: '昨日数据',
        edit: true
    }, {
        key: 'today',
        value: '今日数据',
        edit: true
    }],
    edit: {
        url: '/api/table/regex/edit',
        method: 'post',
        beforeSend: (params)=> {
            return params
        },
        success: (res)=> {
            return res.ok === true
        }
    },
    get: {
        url: '/api/table/form',
        method: 'get',
        beforeSend: (info, currentPage, response)=> {
            info.page = currentPage
            return info
        },
        success: (res, pagination)=> {
            pagination.allPage = res['all_page']
            return res['data']
        }
    }
}

export default class Demo extends React.Component {
    render() {
        return (
            <Table {...info}/>
        )
    }
}