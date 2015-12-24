import React from 'react'
import Table from 'fit-table'
import Button from 'fit-button'

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
    extend: (table)=> {
        const handleClick = ()=> {
            console.log(table.getCurrentSelectRows())
        }

        const jumpHome = ()=> {
            table.jump(table.currentPage())
        }

        return (
            <div>
                <Button type="success" onClick={handleClick}>获取选中</Button>
                <Button style={{marginLeft:10}} type="primary" onClick={jumpHome}>刷新</Button>
            </div>
        )
    }
}

export default class Demo extends React.Component {
    render() {
        return (
            <Table {...info}/>
        )
    }
}