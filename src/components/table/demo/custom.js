import React from 'react'
import Table from 'tb-table'
import _ from 'lodash'

const commonInfo = {
    fields: [{
        key: 'id',
        value: '产品编号'
    }, {
        key: 'yesterday',
        value: '昨日数据'
    }, {
        key: 'today',
        value: '今日数据'
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
            return res['data']
        }
    }
}

const infoCheckbox = _.cloneDeep(commonInfo)
infoCheckbox.selector = {
    type: 'checkbox'
}

const infoRadio = _.cloneDeep(commonInfo)
infoRadio.selector = {
    type: 'radio'
}

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Table {...infoCheckbox}/>
                <Table {...infoRadio}/>
            </div>
        )
    }
}