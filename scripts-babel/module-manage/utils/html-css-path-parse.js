'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (filePath, info) {
    filePath = filePath.substring(2);
    var filePathArray = filePath.split('/');

    filePathArray.shift();
    filePathArray.shift();
    filePathArray.shift();
    filePathArray.shift();
    filePathArray.pop();

    // 长度是0,说明是根路径,不处理
    if (filePathArray.length === 0) {
        return '';
    }

    var prefix = info.categoryInfo.prefix + '-' + info.module.path;
    var addonPath = filePathArray.join('-');

    if (addonPath === info.module.path) {
        return prefix;
    } else {
        if (filePathArray[0] === info.module.path) {
            filePathArray.shift();
            addonPath = filePathArray.join('-');
        }

        return prefix + '-' + addonPath;
    }
};