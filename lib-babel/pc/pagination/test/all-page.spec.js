'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _fitPagination = require('fit-pagination');

var _fitPagination2 = _interopRequireDefault(_fitPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fit-pagination:all-page', function () {
    it('总页数只有1的时候,有上一页下一页,还有第一页但不能点', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitPagination2.default, { allPage: '1' }));
        expect(node.contains(_react2.default.createElement('i', { className: 'fa fa-chevron-left' }))).to.equal(true);
        expect(node.contains(_react2.default.createElement('i', { className: 'fa fa-chevron-right' }))).to.equal(true);
        expect(node.find('.number-button').length).to.equal(1);
        expect(node.find('.number-button').text()).to.equal("1");
        expect(node.find('.number-button').is('.active')).to.equal(true);
    });
});