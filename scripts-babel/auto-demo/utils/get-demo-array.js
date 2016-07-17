'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDemoArray = function getDemoArray(demoIndexPath) {
    // 跳过没有demo的项目
    if (!_fs2.default.existsSync(demoIndexPath)) return [];

    // 读取demo/index.js内容
    var demoIndexString = _fs2.default.readFileSync(demoIndexPath).toString();
    var demoIndexLines = demoIndexString.split('\n');
    var demoLine = -1;
    demoIndexLines.map(function (line) {
        line = _lodash2.default.trim(line);
        if (demoLine === -1 && _lodash2.default.startsWith(line, '//') && line.indexOf('@demo') > -1) {
            demoLine = 0;
        } else if (demoLine === 0) {
            demoLine = line;
        }
    });

    if (demoLine === -1 || demoLine === 0) {
        // 没有 demo
        return [];
    }

    // 整理成 demo 数组
    demoLine = _lodash2.default.trim(_lodash2.default.trimLeft(demoLine, '//'));
    var demoArray = [];
    demoLine.split(' ').map(function (item) {
        var info = item.split(':');
        var name = info[0];
        var ext = 'js';

        // 如果 js 后缀不存在,则后缀是 tsx
        if (!_fs2.default.existsSync(_path2.default.join(demoIndexPath, '..', 'lists', name + '.js'))) {
            ext = 'tsx';
        }

        demoArray.push({ name: name, ext: ext });
    });

    return demoArray;
};

exports.default = getDemoArray;