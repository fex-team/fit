import React from 'react'
import Table from 'fit-table'

const info = {
    fields: [{
        key: 'id',
        value: 'ID'
    }, {
        key: 'name',
        value: '姓名'
    }, {
        key: 'age',
        value: '年龄'
    }, {
        key: 'free',
        value: '休假日期'
    }],
    get: {
        url: '/api/table/all',
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
    },
    finder: [{
        label: 'ID',
        key: 'id',
        type: 'text',
        placeholder: '用户id'
    }, {
        label: '休假日期',
        key: 'free',
        type: 'select',
        select: [{
            key: 1,
            value: '星期一'
        }, {
            key: 2,
            value: '星期二'
        }, {
            key: 3,
            value: '星期三'
        }, {
            key: 4,
            value: '星期四'
        }, {
            key: 5,
            value: '星期五'
        }, {
            key: 6,
            value: '星期六'
        }, {
            key: 7,
            value: '星期日'
        }],
        defaultValue: 2
    }, {
        type: 'enum',
        enum: [{
            label: '年龄',
            key: 'age',
            type: 'text',
            width: 50,
            placeholder: ''
        }, {
            label: '可选日期',
            key: 'date',
            type: 'select',
            select: [{
                key: 1,
                value: '星期一'
            }, {
                key: 2,
                value: '星期二'
            }, {
                key: 3,
                value: '星期三'
            }, {
                key: 4,
                value: '星期四'
            }, {
                key: 5,
                value: '星期五'
            }, {
                key: 6,
                value: '星期六'
            }, {
                key: 7,
                value: '星期日'
            }],
            defaultValue: 3
        }],
        defaultValue: 'date'
    }]
}

export default class Demo extends React.Component {
    render() {
        return (
            <Table {...info}/>
        )
    }
}