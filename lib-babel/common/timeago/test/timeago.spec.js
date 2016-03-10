'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _fitTimeago = require('fit-timeago');

var _fitTimeago2 = _interopRequireDefault(_fitTimeago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fit-timeago', function () {
    it('时间为现在,应当显示 0 seconds ago', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitTimeago2.default, { date: new Date() }));
        expect(node.text()).to.contain('0 seconds ago');
    });

    it('时间为5秒前,应当显示 5 seconds ago', function () {
        var time = new Date();
        time.setSeconds(time.getSeconds() - 5);
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitTimeago2.default, { date: time }));
        expect(node.text()).to.contain('5 seconds ago');
    });

    it('时间为1分钟前,应当显示 1 minute ago', function () {
        var time = new Date();
        time.setSeconds(time.getSeconds() - 60);
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitTimeago2.default, { date: time }));
        expect(node.text()).to.contain('1 minute ago');
    });

    it('时间为2分钟前,应当显示 2 minutes ago', function () {
        var time = new Date();
        time.setSeconds(time.getSeconds() - 120);
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitTimeago2.default, { date: time }));
        expect(node.text()).to.contain('2 minutes ago');
    });

    it('时间为1小时前,应当显示 1 hour ago', function () {
        var time = new Date();
        time.setSeconds(time.getSeconds() - 60 * 60);
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitTimeago2.default, { date: time }));
        expect(node.text()).to.contain('1 hour ago');
    });

    it('时间为1天前,应当显示 1 day ago', function () {
        var time = new Date();
        time.setSeconds(time.getSeconds() - 60 * 60 * 24);
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitTimeago2.default, { date: time }));
        expect(node.text()).to.contain('1 day ago');
    });

    it('时间为1周前,应当显示 1 week ago', function () {
        var time = new Date();
        time.setSeconds(time.getSeconds() - 60 * 60 * 24 * 7);
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitTimeago2.default, { date: time }));
        expect(node.text()).to.contain('1 week ago');
    });

    it('时间为1月前,应当显示 1 month ago', function () {
        var time = new Date();
        time.setSeconds(time.getSeconds() - 60 * 60 * 24 * 30);
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitTimeago2.default, { date: time }));
        expect(node.text()).to.contain('1 month ago');
    });

    it('时间为1年前,应当显示 1 year ago', function () {
        var time = new Date();
        time.setSeconds(time.getSeconds() - 60 * 60 * 24 * 365);
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitTimeago2.default, { date: time }));
        expect(node.text()).to.contain('1 year ago');
    });

    it('失效时间', function () {
        var time = new Date();
        time.setSeconds(time.getSeconds() - 5);
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitTimeago2.default, { date: time,
            loseTime: 1000 * 5 }));
        expect(node.text()).to.not.contain('5 seconds ago');
    });

    it('销毁测试', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitTimeago2.default, null));
        node.unmount();
        expect(true).to.equal(true);
    });
});