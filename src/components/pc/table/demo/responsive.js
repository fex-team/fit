import React from 'react'
import Table from 'fit-table'

const info = {
    responsive: true,
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
    }, {
        key: 'interest',
        value: '兴趣'
    }, {
        key: 'money',
        value: '账户余额'
    }, {
        key: 'like',
        value: '最喜欢吃的菜'
    }, {
        key: 'movie',
        value: '最喜欢看的电影'
    }, {
        key: 'thing',
        value: '最喜欢做的事'
    }, {
        key: 'car',
        value: '爱车'
    }, {
        key: 'dos',
        value: '做过最自豪的事'
    }, {
        key: 'number',
        value: '车牌号'
    }],
    datas: [{
        id: 0,
        name: '郭富城',
        department: '无人车事业部',
        age: 32,
        interest: '羽毛球',
        money: 132000000,
        like: '土豆肉丝',
        movie: '未知',
        thing: '跳舞',
        car: '本田',
        dos: '捡到过一万块钱',
        number: 888888
    }, {
        id: 1,
        name: '陈冠希',
        department: '云计算部',
        age: 26,
        interest: '乒乓球',
        money: 256000000,
        like: '鸡蛋灌饼',
        movie: '未知',
        thing: '睡觉',
        car: '劳斯莱斯幻影',
        dos: '要到了最喜欢明星的签名',
        number: 666666
    }, {
        id: 2,
        name: '张学友',
        department: '大数据部',
        age: 36,
        interest: '网球',
        money: 980000000,
        like: '韭菜鸡蛋',
        movie: '未知',
        thing: '唱歌',
        car: 'qq',
        dos: '7岁上大学',
        number: 333333
    }]
}

export default class Demo extends React.Component {
    render() {
        return (
            <Table {...info}/>
        )
    }
}