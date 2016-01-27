import React from 'react'
import Table from 'fit-table'
import Button from 'fit-button'

const info = {
    fields: [{
        key: 'value',
        value: '元字符',
        render: (colData, table)=> {
            return (
                <span>前缀:{colData.value}</span>
            )
        }
    }, {
        key: 'description',
        value: '描述',
        render: (colData, table)=> {
            return (
                <span>前缀:{colData.description}</span>
            )
        }
    }, {
        value: '操作',
        render: (colInfo, table)=> {
            const handleClick = ()=> {
                console.log('自定义列', colInfo.value, '上线')
            }

            return (
                <Button onClick={handleClick}>上线</Button>
            )
        }
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
    }
}

export default class Demo extends React.Component {
    render() {
        return (
            <Table {...info}/>
        )
    }
}