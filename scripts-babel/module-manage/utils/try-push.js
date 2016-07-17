'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _child_process = require('child_process');

var _tryPull = require('./try-pull');

var _tryPull2 = _interopRequireDefault(_tryPull);

var _consoleLog = require('./console-log');

var _consoleLog2 = _interopRequireDefault(_consoleLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tryPush = function tryPush(path) {
    try {
        (0, _child_process.execSync)('cd ' + path + ';git add -A;git commit -m "quick push";git push origin master');
        return true;
    } catch (e) {
        var errorString = e.toString();
        (0, _consoleLog2.default)('push失败,尝试pull', 'yellow', path);
        if ((0, _tryPull2.default)(path) && tryPush(path)) {
            (0, _consoleLog2.default)('push成功', 'green', path);
        }
        return false;
    }
};

exports.default = tryPush;