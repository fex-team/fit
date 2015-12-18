import React from 'react'
import Table from 'tb-table'

const info = {
    fields: [{
        key: 'value',
        value: '元字符'
    }, {
        key: 'description',
        value: '描述'
    }],
    get: {
        url: '/api/regex',
        method: 'get',
        beforeSend: (info, pagination)=> {
            return {
                page: 1,
                a: pagination.currentPage
            }
        },
        success: (res, pagination)=> {
            pagination.next = true
            return res.data
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