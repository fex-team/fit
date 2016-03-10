'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _fitLayout = require('fit-layout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fit-layout', function () {
    it('样式没想好怎么测', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(
            _fitLayout.Row,
            null,
            _react2.default.createElement(
                _fitLayout.Col,
                { span: '12' },
                '.col-12'
            ),
            _react2.default.createElement(
                _fitLayout.Col,
                { span: '12' },
                '.col-12'
            )
        ));
        expect(true).to.equal(true);
    });
});