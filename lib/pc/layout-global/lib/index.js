'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Footer = exports.Section = exports.Sidebar = exports.Header = exports.Layout = undefined;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('fit-style');

var _layout = require('./layout');

var _layout2 = _interopRequireDefault(_layout);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _sidebar = require('./sidebar');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _section = require('./section');

var _section2 = _interopRequireDefault(_section);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Layout = _layout2.default;
exports.Header = _header2.default;
exports.Sidebar = _sidebar2.default;
exports.Section = _section2.default;
exports.Footer = _footer2.default;

// 设置全局样式

(0, _jquery2.default)('html,body').css({
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    margin: 0
});