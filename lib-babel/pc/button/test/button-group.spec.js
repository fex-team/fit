'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _fitButton = require('fit-button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('fit-button:button-group', function () {
    it('能渲染', function () {
        var node = (0, _enzyme.mount)(_react2.default.createElement(
            _fitButton.ButtonGroup,
            null,
            _react2.default.createElement(
                _fitButton.Button,
                null,
                'Left'
            ),
            _react2.default.createElement(
                _fitButton.Button,
                { active: true },
                'Middle'
            ),
            _react2.default.createElement(
                _fitButton.Button,
                null,
                'Right'
            )
        ));
        expect(true).to.equal(true);
    });
});