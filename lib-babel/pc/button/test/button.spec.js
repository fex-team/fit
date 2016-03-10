'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _fitButton = require('fit-button');

var _fitButton2 = _interopRequireDefault(_fitButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fit-button:button', function () {
    it('选中状态', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(_fitButton2.default, { active: true }));
        expect(node.find('button').is('.active')).to.equal(true);
    });
});