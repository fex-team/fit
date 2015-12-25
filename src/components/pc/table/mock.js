import regexData from './regexData'
import $ from 'jquery'
import mock from 'jquery-mockjax'
import names from './names'

let mockjax = mock($, window)

const getRandomRange = (min, max)=> {
    var Range = max - min
    var Rand = Math.random()
    return (min + Math.round(Rand * Range))
}

mockjax({
    url: "/api/table/member",
    contentType: "application/json",
    responseText: {
        ok: true,
        data: [{
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
        }]
    }
})

mockjax({
    url: "/api/table/regex",
    contentType: "application/json",
    response: function (settings) {
        let hasNext = settings.data.page >= 5 ? false : true
        this.responseText = {
            ok: true,
            data: regexData[settings.data.page - 1],
            has_next: hasNext
        }
    }
})

mockjax({
    url: "/api/table/form",
    contentType: "application/json",
    response: function (settings) {
        let infoArray = []
        for (let i = (settings.data.page - 1) * 10; i < settings.data.page * 10; i++) {
            let random = Math.floor(Math.random() * 10000)
            infoArray.push({
                id: i,
                yesterday: random,
                today: random + Math.floor(Math.random() * 1000)
            })
        }
        this.responseText = {
            ok: true,
            data: infoArray,
            all_page: 45000
        }
    }
})

mockjax({
    url: "/api/table/all",
    contentType: "application/json",
    response: function (settings) {
        let weekRand = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']

        let infoArray = []
        for (let i = (settings.data.page - 1) * 10; i < settings.data.page * 10; i++) {
            let random = Math.floor(Math.random() * 10000)
            infoArray.push({
                id: i,
                name: names[getRandomRange(0, names.length - 1)],
                free: weekRand[getRandomRange(0, 6)],
                age: getRandomRange(19, 32)
            })
        }
        this.responseText = {
            ok: true,
            data: infoArray,
            all_page: 6350
        }
    }
})

mockjax({
    url: "/api/table/regex/add",
    contentType: "application/json",
    response: function (settings) {
        this.responseText = {
            ok: false
        }
    }
})

mockjax({
    url: "/api/table/regex/edit",
    contentType: "application/json",
    response: function (settings) {
        this.responseText = {
            ok: false
        }
    }
})