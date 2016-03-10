'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _fitPagination = require('fit-pagination');

var _fitPagination2 = _interopRequireDefault(_fitPagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fit-pagination:simple', function () {
    it('有上一页,下一页这两个按钮', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitPagination2.default, null));
        expect(node.find('.before').text()).to.equal('上一页');
        expect(node.find('.after').text()).to.equal('下一页');
    });

    it('单页初始状态,上一页不能点', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitPagination2.default, null));
        expect(node.find('.before').is('.disabled')).to.equal(true);
    });

    it('[next=false],下一页不能点', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitPagination2.default, { next: false }));
        expect(node.find('.after').is('.disabled')).to.equal(true);
    });

    it('[next=true],下一页能点', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitPagination2.default, { next: true }));
        expect(node.find('.after').is('.disabled')).to.equal(false);
    });

    it('点了下一页,上一页就可以点击了', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitPagination2.default, { next: true }));
        node.find('.after').simulate('click');
        expect(node.find('.before').is('.disabled')).to.equal(false);
    });

    it('点了下一页,再点上一页,上一页处于无法点击状态', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitPagination2.default, { next: true }));
        node.find('.after').simulate('click');
        node.find('.before').simulate('click');
        expect(node.find('.before').is('.disabled')).to.equal(true);
    });

    it('外部调用翻页到第二页,但没有下一页,应该翻不成功', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitPagination2.default, { next: false }));
        node.instance().jump(2);
        expect(node.find('.before').is('.disabled')).to.equal(true);
    });

    it('外部调用翻页到第二页,且有下一页,翻页成功,上一页变成可点', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitPagination2.default, { next: true }));
        node.instance().jump(2);
        expect(node.find('.before').is('.disabled')).to.equal(false);
        expect(node.find('.after').is('.disabled')).to.equal(false);

        node.instance().jump(1);
        expect(node.find('.before').is('.disabled')).to.equal(true);
        expect(node.find('.after').is('.disabled')).to.equal(false);
    });

    it('loading翻页不能点', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitPagination2.default, { next: true,
            loading: true }));
        node.instance().jump(2);
        //expect(node.state().currentPage).to.equal(1)
        expect(node.find('.before').is('.disabled')).to.equal(true);
        expect(node.find('.after').is('.disabled')).to.equal(true);

        node.find('.after').simulate('click');
        //expect(node.state().currentPage).to.equal(1)
        expect(node.find('.before').is('.disabled')).to.equal(true);
        expect(node.find('.after').is('.disabled')).to.equal(true);

        node.instance().jump(1);
        //expect(node.state().currentPage).to.equal(1)
        expect(node.find('.before').is('.disabled')).to.equal(true);
        expect(node.find('.after').is('.disabled')).to.equal(true);

        node.find('.before').simulate('click');
        //expect(node.state().currentPage).to.equal(1)
        expect(node.find('.before').is('.disabled')).to.equal(true);
        expect(node.find('.after').is('.disabled')).to.equal(true);
    });
});