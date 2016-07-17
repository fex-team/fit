'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _htmlCssPathParse = require('./html-css-path-parse');

var _htmlCssPathParse2 = _interopRequireDefault(_htmlCssPathParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (filePath, info) {
    var source = _fs2.default.readFileSync(filePath).toString();
    var name = (0, _htmlCssPathParse2.default)(filePath, info);

    // 忽略 @babel ignore 模块
    if (source.indexOf('@babel ignore') > -1) {
        return;
    }

    if (name === '') return;

    source = source.replace(/_namespace/g, name);
    _fs2.default.writeFileSync(filePath, source);
};