import React from 'react'
import Input from 'fit-input'
import Table from 'fit-table'

const addInfo = {
    fields: [{
        key: 'value',
        value: '元字符',
        add: true
    }, {
        key: 'description',
        value: '描述',
        add: true
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
    add: {
        url: '/api/table/regex/add',
        method: 'post',
        beforeSend: (params)=> {
            return params
        },
        success: (res)=> {
            return res.ok === true
        }
    }
}

const customAddInfo = {
    fields: [{
        key: 'value',
        value: '元字符',
        add: true
    }, {
        key: 'description',
        value: '描述',
        add: true
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
    add: {
        url: '/api/table/regex/add',
        method: 'post',
        beforeSend: ()=> {
            return {
                a: 1,
                b: 2
            }
        },
        success: (res)=> {
            return {
                ok: res.ok,
                message: res.errmsg
            }
        },
        render: ()=> {
            return (
                <div>
                    <Input label="姓名"/>
                    <Input label="年龄" style={{marginTop:10}}/>
                    <Input label="职业" style={{marginTop:10}}/>
                </div>
            )
        }
    }
}

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Table {...addInfo}/>
                <Table {...customAddInfo}/>
            </div>
        )
    }
}