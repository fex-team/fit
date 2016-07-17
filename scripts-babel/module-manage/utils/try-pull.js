'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _child_process = require('child_process');

var _consoleLog = require('./console-log');

var _consoleLog2 = _interopRequireDefault(_consoleLog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tryPull = function tryPull(path) {
    // 先看看status对不对
    var gitStatus = (0, _child_process.execSync)('cd ' + path + ';git status');
    if (gitStatus.indexOf('Changes not staged for commit') > -1) {
        (0, _consoleLog2.default)('有没提交的修改,正在提交..', 'grey', path);
        (0, _child_process.execSync)('cd ' + path + ';git add -A;git commit -m "quick push"');
    }

    try {
        (0, _child_process.execSync)('cd ' + path + ';git pull origin master');
        return true;
    } catch (e) {
        var errorString = e.toString();
        if (errorString.indexOf('You have unstaged changes') > -1) {
            (0, _consoleLog2.default)('pull失败了,因为本地修改没有提交,正在提交并重试..', 'yellow', path);
            (0, _child_process.execSync)('cd ' + path + ';git add -A;git commit -m "quick push"');
            if (tryPull(path)) {
                (0, _consoleLog2.default)('重新提交成功', 'green', path);
                return true;
            } else {
                (0, _consoleLog2.default)('重新提交失败,太诡异了,自己看看吧..', 'red', path);
            }
            return false;
        }

        if (errorString.indexOf('commit your changes or stash them before you can merge') > -1) {
            (0, _consoleLog2.default)('pull失败了,因为改动有冲突,但是还没提交,所以不能merge,正在提交并重试..', 'yellow', path);
            (0, _child_process.execSync)('cd ' + path + ';git add -A;git commit -m "merge confict"');
            if (tryPull(path)) {
                (0, _consoleLog2.default)('重新提交成功', 'green', path);
                return true;
            }
        }

        if (errorString.indexOf('fix them up in the work tree, and then use \'git add/rm <file>\'') > -1) {
            (0, _consoleLog2.default)('pull失败了,因为手动merge后,还没提交,正在提交并重试..', 'yellow', path);
            (0, _child_process.execSync)('cd ' + path + ';git add -A;git commit -m "merge confict"');
            if (tryPull(path)) {
                (0, _consoleLog2.default)('重新提交成功', 'green', path);
                return true;
            } else {
                (0, _consoleLog2.default)('这都失败了,什么鬼,要么就是冲突没改完,自己查查吧', 'red', path);
            }
        }

        // 看看status对不对
        var _gitStatus = (0, _child_process.execSync)('cd ' + path + ';git status');
        if (_gitStatus.indexOf('fix conflicts and run "git commit"') > -1) {
            (0, _consoleLog2.default)('pull失败了,因为当前远程分支有冲突改动,请手动merge后再试', 'red', path);
        }

        (0, _consoleLog2.default)('pull失败了,错误:' + errorString, 'red', path);
    }
};

exports.default = tryPull;