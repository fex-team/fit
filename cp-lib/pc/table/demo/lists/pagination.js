import React from 'react'
import Table from 'fit-table'

const info = {
    fields: [{
        key: 'id',
        value: '产品编号'
    }, {
        key: 'yesterday',
        value: '昨日数据'
    }, {
        key: 'today',
        value: '今日数据'
    }, {
        key: 'diff',
        value: '增幅'
    }],
    get: {
        url: '/api/table/form',
        method: 'get',
        beforeSend: (info, currentPage, response)=> {
            info.page = currentPage
            return info
        },
        success: (res, pagination)=> {
            pagination.allPage = res['all_page']
            res['data'].map((item)=> {
                let diff = (item.today - item.yesterday) / item.yesterday * 100
                item.diff = diff.toFixed(2) + '%'
            })
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