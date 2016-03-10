'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _fitTable = require('fit-table');

var _fitTable2 = _interopRequireDefault(_fitTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fit-table', function () {
    it('默认数据渲染成功', function () {
        var info = {
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
            }],
            datas: [{
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
        };
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitTable2.default, info));
        expect(node.text()).to.contain('陈冠希');
    });
});