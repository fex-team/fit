import React from 'react'
import Table from 'fit-table'

const info = {
    fields: [{
        key: 'value',
        value: '元字符'
    }, {
        key: 'description',
        value: '描述'
    }],
    get: {
        url: '/api/table/regex',
        method: 'get',
        beforeSend: (info, currentPage, prevResponse, table)=> {
            info.page = currentPage
            return info
        },
        success: (res, pagination, table)=> {
            pagination.next = res['has_next']
            return res['data']
        }
    },
    del: {
        url: '/api/table/regex',
        method: 'delete',
        beforeSend: (colInfo)=> {
            return {
                id: colInfo.value
            }
        },
        success: (res)=> {
            return {
                ok: res.ok === false,
                message: 'oh!! no'
            }
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