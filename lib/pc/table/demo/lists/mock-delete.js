import React from 'react'
import Table from 'fit-table'
import Button from 'fit-button'

let tableInstance

const tableConfig = {
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
    title: '表格',
    selector: {
        type: 'checkbox'
    },
    datas: [{
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
    }],
    ref: (ref) => {
        tableInstance = ref
    },
    extend: (table) => {
        function Delete() {
            let currentSelectRows = table.getCurrentSelectRows()
            table.mockDeleteData(currentSelectRows)

            setTimeout(() => {
                console.log(table.getData())
                console.log(tableInstance.extendInfo.getData())
            })
        }

        return (
            <Button onClick={Delete}>删除</Button>
        )
    }
}

export default class Demo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Table {...tableConfig} />
        )
    }

}