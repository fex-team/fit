import React from 'react'
import Table from 'fit-table'
import Button from 'fit-button'

let tableInstance = null

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
    selector: {
        type: 'checkbox'
    },
    ref: (ref) => {
        tableInstance = ref
    }
}

export default class Demo extends React.Component {
    constructor (props) {
        super(props)
    }

    refreshTable () {
        tableInstance.extendInfo.jump(tableInstance.extendInfo.currentPage())
    }

    render() {
        return (
            <div>
                <Button onClick={this.refreshTable.bind(this)}>刷新</Button>
                <Table {...info}/>
            </div>
        )
    }
}