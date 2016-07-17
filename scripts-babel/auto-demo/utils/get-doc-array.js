'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getDocArray = function getDocArray(docIndexPath) {
    // 读取demo/index.js内容
    var docIndexString = _fs2.default.readFileSync(docIndexPath).toString();
    var docIndexLines = docIndexString.split('\n');

    var docArray = [];
    docIndexLines.map(function (line) {
        line = _lodash2.default.trim(line);
        if (line.indexOf('export') > -1 && line.indexOf('{') > -1 && line.indexOf('export default') === -1) {
            line = _lodash2.default.trimLeft(line, 'export');
            line = line.replace(/\{|\}/g, '');
            line.split(',').map(function (item) {
                item = _lodash2.default.trim(item);

                // 豁免 Static 结尾
                if (_lodash2.default.endsWith(item, 'Static')) return;

                docArray.push(item);
            });
        }
    });
    return docArray;
};

exports.default = getDocArray;