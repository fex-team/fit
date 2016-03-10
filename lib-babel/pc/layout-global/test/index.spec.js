'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _fitLayoutGlobal = require('fit-layout-global');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fit-layout-global', function () {
    it('样式没想好怎么测~', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(
            _fitLayoutGlobal.Layout,
            null,
            _react2.default.createElement(
                _fitLayoutGlobal.Sidebar,
                { width: '60' },
                '侧边栏'
            ),
            _react2.default.createElement(
                _fitLayoutGlobal.Section,
                null,
                '主体'
            )
        ));
        expect(true).to.equal(true);
    });

    it('unmount', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(
            _fitLayoutGlobal.Layout,
            null,
            _react2.default.createElement(
                _fitLayoutGlobal.Sidebar,
                { width: '60' },
                '侧边栏'
            ),
            _react2.default.createElement(
                _fitLayoutGlobal.Section,
                null,
                '主体'
            )
        ));
        node.unmount();
        expect(true).to.equal(true);
    });
});