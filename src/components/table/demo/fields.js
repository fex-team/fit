import React from 'react'
import Table from 'conic-table'

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
    }]
}

export default class Demo extends React.Component {
    render() {
        return (
            <Table {...info}/>
        )
    }
}