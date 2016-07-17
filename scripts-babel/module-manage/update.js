'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _child_process = require('child_process');

var _emptyModuleDefault = require('./utils/empty-module-default');

var _emptyModuleDefault2 = _interopRequireDefault(_emptyModuleDefault);

var _consoleLog = require('./utils/console-log');

var _consoleLog2 = _interopRequireDefault(_consoleLog);

var _tryPull = require('./utils/try-pull');

var _tryPull2 = _interopRequireDefault(_tryPull);

var _utils = require('./utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gitPlantform = 'https://github.com';
var gitPlantformGroup = 'fit-component';

var getModulePath = function getModulePath(info) {
    return './lib/' + info.categoryName + '/' + info.module.path;
};

var createIfNotExist = function createIfNotExist(targetPath) {
    if (_fs2.default.existsSync(_path2.default.join(targetPath))) return;
    _mkdirp2.default.sync(targetPath);
};

var createLibFolderIfNotExist = function createLibFolderIfNotExist() {
    createIfNotExist('lib');
};

var createCategoryFolderIfNotExist = function createCategoryFolderIfNotExist(info) {
    createIfNotExist(_path2.default.join('lib', info.categoryName));
};

var cloneModuleIfNotExist = function cloneModuleIfNotExist(info) {
    var targetPath = _path2.default.join('lib', info.categoryName, info.module.path);
    if (_fs2.default.existsSync(targetPath)) return;

    var gitSourcePath = (0, _utils.getGitSourcePath)(info);
    // clone
    var cloneSource = gitPlantform + '/' + gitPlantformGroup + '/' + gitSourcePath;
    (0, _child_process.execSync)('cd lib/' + info.categoryName + ';git clone ' + cloneSource + ' ' + info.module.path);
    (0, _consoleLog2.default)('cloned', 'green', getModulePath(info));
};

var checkGitControl = function checkGitControl(info) {
    var pathInfo = 'lib/' + info.categoryName + '/' + info.module.path;

    // 删除 github 的 remote
    try {
        (0, _child_process.execSync)('cd ' + pathInfo + ';git remote rm github >/dev/null 2>&1');
    } catch (err) {}

    // 获得当前项目的git路径
    var projectName = (0, _child_process.execSync)('cd ' + pathInfo + ';git remote -v | head -n1 | awk \'{print $2}\' | sed -e \'s,.*:(.*/)?,,\' -e \'s/.git$//\'').toString().trim();

    var gitSourcePath = (0, _utils.getGitSourcePath)(info);
    var expectModuleName = gitPlantform + '/' + gitPlantformGroup + '/' + gitSourcePath;

    if (projectName + '.git' !== expectModuleName) {
        (0, _consoleLog2.default)('错误:不要手动创建lib目录的任何文件夹,请在' + gitPlantform + '/' + gitPlantformGroup + '建立项目后,填写到all-component.json, 再重新执行npm update会自动创建,请删除此文件夹（删除前先做好备份）', 'red', getModulePath(info));
    }
};

exports.default = function (info) {
    // 创建 lib 文件夹
    createLibFolderIfNotExist();
    // 创建 分类 文件夹
    createCategoryFolderIfNotExist(info);
    // clone 组件
    cloneModuleIfNotExist(info);
    // 判断当前组件目录 git版本控制是否正确
    checkGitControl(info);
    // try pull
    (0, _tryPull2.default)(getModulePath(info));
    // 补上组件没有的文件
    (0, _emptyModuleDefault2.default)(info);
};