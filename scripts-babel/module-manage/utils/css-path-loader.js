'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _htmlCssPathParse = require('./html-css-path-parse');

var _htmlCssPathParse2 = _interopRequireDefault(_htmlCssPathParse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locations = function locations(substring, string) {
    var positions = [],
        i = -1;
    while ((i = string.indexOf(substring, i + 1)) >= 0) {
        positions.push(i);
    }
    return positions;
};

var findCloseSide = function findCloseSide(source, startIndex) {
    // 左右中括号数量
    var leftCount = 0;
    var rightCount = 0;

    // 逐字符读取
    for (var i = startIndex, j = source.length; i < j; i++) {
        switch (source[i]) {
            case '{':
                leftCount++;
                break;
            case '}':
                rightCount++;
                break;
        }

        // 如果右侧数量和左侧相同,那就找到闭合位置了
        if (rightCount === leftCount) {
            return i;
        }
    }
};

var removeGlobal = function removeGlobal(source, pathName) {
    // 寻找所有位置
    var globalLocations = locations('._global {', source);
    // 完整代码
    var newSource = '';
    // 上一次寻找的最后位置
    var lastIndex = -1;

    globalLocations.forEach(function (startIndex) {
        // 如果上一次寻找过了,把中间内容直接补上
        if (lastIndex > -1) {
            var middleSource = source.substring(lastIndex + 1, startIndex);
            newSource += '.' + pathName + '{' + middleSource + '}';
        }

        var endIndex = findCloseSide(source, startIndex + 9);
        lastIndex = endIndex;
        var sourceBlock = source.substring(startIndex + 10, endIndex);
        newSource += sourceBlock;
    });

    // 把最后剩下的接上
    newSource += '.' + pathName + '{' + source.substring(lastIndex + 1) + '}';
    return newSource;
};

exports.default = function (filePath, info) {
    var source = _fs2.default.readFileSync(filePath).toString();
    var name = (0, _htmlCssPathParse2.default)(filePath, info);

    // 对 fit-style 不做处理
    if (info.module.path === 'style') return;
    if (name === '') return;

    // 对包含 ._global 的做全局处理
    if (source.indexOf('._global') > -1) {
        source = removeGlobal(source, name);
        _fs2.default.writeFileSync(filePath, source);
        return;
    }

    source = '.' + name + '{' + source + '}';
    _fs2.default.writeFileSync(filePath, source);
};