'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _child_process = require('child_process');

var _consoleLog = require('./utils/console-log');

var _consoleLog2 = _interopRequireDefault(_consoleLog);

var _tryPush = require('./utils/try-push');

var _tryPush2 = _interopRequireDefault(_tryPush);

var _build = require('./utils/build');

var _build2 = _interopRequireDefault(_build);

var _find = require('find');

var _find2 = _interopRequireDefault(_find);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var outputDistLib = function outputDistLib(info) {
    var modulePath = './lib/' + info.categoryName + '/' + info.module.path;
    var srcDirectory = modulePath + '/src';
    var distDirectory = modulePath + '/lib';
    (0, _child_process.execSync)('cp -r ' + srcDirectory + ' ' + distDirectory);
    return distDirectory;
};

var hasChanges = function hasChanges(path) {
    // 先看看status对不对
    var gitStatus = (0, _child_process.execSync)('cd ' + path + ';git status');
    if (gitStatus.indexOf('nothing to commit, working directory clean') > -1) {
        (0, _consoleLog2.default)('没有修改', 'grey', path);
        return false;
    } else {
        return true;
    }
};

var getModulePath = function getModulePath(info) {
    return './lib/' + info.categoryName + '/' + info.module.path;
};

var deleteLib = function deleteLib(info) {
    (0, _child_process.execSync)('rm -rf ' + getModulePath(info) + '/lib');
};

// 根据路径 处理 .d.ts 文件
var resolveDtsFromPath = function resolveDtsFromPath(filePath, dirPath, info, rootPath) {
    if (!_fs2.default.existsSync(filePath)) return;

    var fileContent = _fs2.default.readFileSync(filePath).toString();
    fileContent = fitDts(fileContent, info, dirPath, rootPath);
    _fs2.default.writeFileSync(filePath, fileContent);
};

// 加工 .d.ts
var fitDts = function fitDts(content, info, filePath, rootPath) {
    // 移除 scss 引用
    content = content.replace(/import\s+\'[.\/\w-]+.((css|scss|less)\';?)/g, '');

    /**
     * 将引用的模块 copy 过来,并且修改绝对路径
     */
    var filePathArray = filePath.split('/');
    if (filePathArray[filePathArray.length - 1] === 'lib' && filePathArray[filePathArray.length - 2] === info.module.path) {
        // 根目录
        // 删除所有 tsd的引用
        content = content.replace(/\/\/\/\s*\<reference\s*path=\"[..\/]*typings\/tsd\.d\.ts\"\s*\/\>/g, '');
    } else {
        // 将 reference 引用到相对路径
        var contentArray = content.split('\n');
        contentArray = contentArray.map(function (line) {
            if (line.indexOf('/// <reference') > -1) {
                // 先取到path中的内容 example: ../../../../../typings-module/css-animation.d.ts
                var referencePath = _lodash2.default.trim(line.match(/"[^"]*"/g)[0], '"');
                var referencePathArray = referencePath.split('/');
                var autoTypingsPath = _path2.default.join(rootPath, 'auto-typings');
                var referenceName = referencePathArray[referencePathArray.length - 1];
                // 读取该文件内容
                var referenceContent = _fs2.default.readFileSync(_path2.default.join(filePath, referencePath));
                // 如果根目录没有 auto-typings 文件夹,则创建
                if (!_fs2.default.existsSync(autoTypingsPath)) {
                    _mkdirp2.default.sync(autoTypingsPath);
                }
                // 在 auto-typings 目录下创建这个依赖文件
                _fs2.default.writeFileSync(_path2.default.join(autoTypingsPath, referenceName), referenceContent.toString());
                /**
                 * 修正内容中的依赖路径
                 * */
                // 判断 filePath 与 rootPath 的距离
                var filePathDeepRootPathIndex = filePath.split('/').length - rootPath.split('/').length;
                // 距离为 0 的情况
                var relativePath = './';
                if (filePathDeepRootPathIndex > 0) {
                    relativePath = _lodash2.default.repeat('../', filePathDeepRootPathIndex);
                }
                line = '/// <reference path="' + relativePath + 'auto-typings/' + referenceName + '" />';
            }
            return line;
        });
        content = contentArray.join('\n');
    }

    return content;
};

var createDTs = function createDTs(info) {
    var tsxPath = './lib/' + info.categoryName + '/' + info.module.path + '/src/index.tsx';
    if (_fs2.default.existsSync(tsxPath)) {
        (0, _child_process.execSync)('tsc -d --experimentalDecorators --jsx preserve --t es6 -m commonjs ' + tsxPath);
    }
};

var parseDTs = function parseDTs(info) {
    // 搜索 lib 所有文件夹
    var moduleDistRoot = _path2.default.join(__dirname, '../..', 'lib/' + info.categoryName + '/' + info.module.path + '/lib');
    var moduleDirPaths = _find2.default.dirSync(moduleDistRoot);

    // 不处理没有 tsx 的目录
    if (!_fs2.default.existsSync(_path2.default.join(__dirname, '../..', 'lib/' + info.categoryName + '/' + info.module.path + '/src/index.tsx'))) {
        return;
    }

    // 处理 d.ts
    resolveDtsFromPath(moduleDistRoot + '/index.d.ts', moduleDistRoot, info, moduleDistRoot);
    moduleDirPaths.map(function (moduleDirPath) {
        resolveDtsFromPath(moduleDirPath + '/index.d.ts', moduleDirPath, info, moduleDistRoot);
        resolveDtsFromPath(moduleDirPath + '/module.d.ts', moduleDirPath + '/module', info, moduleDistRoot);
    });
};

var deleteDTS = function deleteDTS(info) {
    var modulePath = getModulePath(info);

    // 如果是 tb 组件,不删除 lib 下的定义文件,因为从gitlab安装时需要
    if (info.categoryName === 'tb') {
        (0, _child_process.execSync)('find ' + modulePath + '/src -name "*.d.ts" | xargs rm');
    } else {
        (0, _child_process.execSync)('find ' + modulePath + ' -name "*.d.ts" | xargs rm');
    }

    // 如果包含 .tsx 文件,则删除 src 下的 jsx 文件
    if (_fs2.default.existsSync(_path2.default.join(modulePath, 'src/index.tsx'))) {
        (0, _child_process.execSync)('find ' + _path2.default.join(modulePath, 'src') + ' -name "*.jsx" | xargs rm');
    }
};

var deleteJSXAndJs = function deleteJSXAndJs(info) {
    var modulePath = getModulePath(info);
    (0, _child_process.execSync)('find ' + modulePath + ' -name "*.jsx" | xargs rm');

    // 如果入口文件是 tsx,再把 .js 文件删除
    if (_fs2.default.existsSync(modulePath + '/src/index.tsx')) {
        (0, _child_process.execSync)('find ' + modulePath + '/src -name "*.js" | xargs rm');
    }
};

var deleteDemoJsxAndJs = function deleteDemoJsxAndJs(info) {
    var modulePath = getModulePath(info);
    // 如果包含 .tsx 文件,则删除 demo 下的 js jsx 文件
    if (_fs2.default.existsSync(_path2.default.join(modulePath, 'src/index.tsx'))) {
        (0, _child_process.execSync)('find ' + _path2.default.join(modulePath, 'demo/lists') + ' -name "*.jsx" | xargs rm');
        (0, _child_process.execSync)('find ' + _path2.default.join(modulePath, 'demo/lists') + ' -name "*.js" | xargs rm');
    }
};

var syncCnpm = function syncCnpm(info) {
    // 贴吧组件不同步
    if (info.categoryName === 'tb') return;

    (0, _consoleLog2.default)('cnpm 开始同步..', 'grey', getModulePath(info));
    (0, _child_process.exec)('cnpm sync ' + info.categoryInfo.prefix + '-' + info.module.path, function (err) {
        if (err) {
            (0, _consoleLog2.default)(err.toString(), 'red', getModulePath(info));
        }
        (0, _consoleLog2.default)('cnpm 同步成功', 'green', getModulePath(info));
    });
};

var publish = function publish(info) {
    // 贴吧组件不发布
    if (info.categoryName === 'tb') return;

    // 判断是不是贴吧帐号
    var whoamiString = (0, _child_process.execSync)('npm whoami').toString();
    if (whoamiString.replace(/\s+/, '') !== 'tieba') {
        (0, _consoleLog2.default)('you are not logined by tieba', 'red', getModulePath(info));
    }
    (0, _child_process.execSync)('cd lib/' + info.categoryName + '/' + info.module.path + ';npm publish');
};

exports.default = function (info) {
    // 是否有修改
    var hasChange = hasChanges(getModulePath(info));

    if (hasChange) {
        // 先删除 lib 目录
        deleteLib(info);

        // 生成 d.ts 文件
        createDTs(info);

        // 把文件全部拷贝到 lib
        var libPath = outputDistLib(info);

        // 加工 d.ts
        parseDTs(info);

        // 编译
        (0, _consoleLog2.default)('正在编译..', 'grey', getModulePath(info));
        (0, _build2.default)(info, libPath);
        (0, _consoleLog2.default)('编译完成', 'green', getModulePath(info));

        // 发布npm
        (0, _consoleLog2.default)('发布中..', 'grey', getModulePath(info));
        publish(info);
        (0, _consoleLog2.default)('发布完成', 'green', getModulePath(info));

        // 如果不是 tb 组件,删除 lib目录
        if (info.categoryName !== 'tb') {
            deleteLib(info);
        }

        // 删除所有 .d.ts
        deleteDTS(info);

        // 删除所有 jsx 和 js
        deleteJSXAndJs(info);

        // 清除 demo 不必要的文件 如果是 jsx
        deleteDemoJsxAndJs(info);

        // 通知 cnpm 更新
        syncCnpm(info);
    }
    // try push
    (0, _tryPush2.default)(getModulePath(info));

    // 如果是 tb 组件,删除 lib目录
    if (info.categoryName === 'tb') {
        deleteLib(info);
    }
};