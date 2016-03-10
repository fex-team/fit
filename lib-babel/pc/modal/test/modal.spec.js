'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _fitModal = require('fit-modal');

var _fitModal2 = _interopRequireDefault(_fitModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fit-modal', function () {
    it('内容渲染成功', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(
            _fitModal2.default,
            { show: true },
            _react2.default.createElement(
                'p',
                null,
                '测试内容'
            )
        ));
        expect(node.text()).to.contain('测试内容');
    });
});