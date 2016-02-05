import React from 'react'
import Table from 'fit-table'

const info = {
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
    get: {
        url: '/api/table/member',
        method: 'get',
        beforeSend: (info)=> {
            return info
        },
        success: (res)=> {
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