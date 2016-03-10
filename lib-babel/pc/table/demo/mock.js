'use strict';

var _regexData = require('./regexData');

var _regexData2 = _interopRequireDefault(_regexData);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _jqueryMockjax = require('jquery-mockjax');

var _jqueryMockjax2 = _interopRequireDefault(_jqueryMockjax);

var _names = require('./names');

var _names2 = _interopRequireDefault(_names);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockjax = (0, _jqueryMockjax2.default)(_jquery2.default, window);

var getRandomRange = function getRandomRange(min, max) {
    var Range = max - min;
    var Rand = Math.random();
    return min + Math.round(Rand * Range);
};

mockjax({
    url: "/api/table/member",
    contentType: "application/json",
    dataType: 'json',
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
});

mockjax({
    url: "/api/table/regex",
    contentType: "application/json",
    response: function response(settings) {
        var hasNext = settings.data.page >= 5 ? false : true;
        this.responseText = {
            ok: true,
            data: _regexData2.default[settings.data.page - 1],
            has_next: hasNext
        };
    }
});

mockjax({
    url: "/api/table/form",
    contentType: "application/json",
    response: function response(settings) {
        var infoArray = [];
        for (var i = (settings.data.page - 1) * 10; i < settings.data.page * 10; i++) {
            var random = Math.floor(Math.random() * 10000);
            infoArray.push({
                id: i,
                yesterday: random,
                today: random + Math.floor(Math.random() * 1000)
            });
        }
        this.responseText = {
            ok: true,
            data: infoArray,
            all_page: 45000
        };
    }
});

mockjax({
    url: "/api/table/all",
    contentType: "application/json",
    response: function response(settings) {
        var weekRand = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];

        var infoArray = [];
        for (var i = (settings.data.page - 1) * 10; i < settings.data.page * 10; i++) {
            var random = Math.floor(Math.random() * 10000);
            infoArray.push({
                id: i,
                name: _names2.default[getRandomRange(0, _names2.default.length - 1)],
                free: weekRand[getRandomRange(0, 6)],
                age: getRandomRange(19, 32)
            });
        }
        this.responseText = {
            ok: true,
            data: infoArray,
            all_page: 6350
        };
    }
});

mockjax({
    url: "/api/table/regex/add",
    contentType: "application/json",
    response: function response(settings) {
        this.responseText = {
            ok: true
        };
    }
});

mockjax({
    url: "/api/table/regex/edit",
    contentType: "application/json",
    response: function response(settings) {
        this.responseText = {
            ok: false,
            errmsg: '自定义的错误提示'
        };
    }
});