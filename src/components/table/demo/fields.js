import React from 'react'
import Table from 'tb-table'

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
    title: '如何设置表头'
}

export default class Demo extends React.Component {
    render() {
        return (
            <Table {...info}/>
        )
    }
}