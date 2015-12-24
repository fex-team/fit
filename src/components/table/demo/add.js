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
        beforeSend: (info, currentPage)=> {
            info.page = currentPage
            return info
        },
        success: (res, pagination)=> {
            pagination.next = res['has_next']
            return res['data']
        }
    },
    add: {
        url: '/api/table/regex/add',
        method: 'post',
        beforeSend: ()=> {

        },
        success: ()=> {

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