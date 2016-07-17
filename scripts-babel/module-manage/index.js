'use strict';

var _allComponent = require('../../all-component.json');

var _allComponent2 = _interopRequireDefault(_allComponent);

var _mapModule = require('./utils/map-module');

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _push = require('./push');

var _push2 = _interopRequireDefault(_push);

var _github = require('./github');

var _github2 = _interopRequireDefault(_github);

var _child_process = require('child_process');

var _tryPull = require('./utils/try-pull');

var _tryPull2 = _interopRequireDefault(_tryPull);

var _tryPush = require('./utils/try-push');

var _tryPush2 = _interopRequireDefault(_tryPush);

var _version = require('./utils/version');

var _version2 = _interopRequireDefault(_version);

var _upgradeDependencies = require('./utils/upgrade-dependencies');

var _upgradeDependencies2 = _interopRequireDefault(_upgradeDependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = process.argv.slice(2);
var allModules = (0, _mapModule.getAllModules)(_allComponent2.default);

var clearDts = function clearDts() {
    // 最后删除所有 d.ts jsx 文件,这些文件可能由依赖自动生成到其它模块下
    allModules.forEach(function (info) {
        // 除了 tb 模块,全删
        if (info.categoryName !== 'tb') {
            (0, _child_process.execSync)('find ./lib/' + info.categoryName + '/' + info.module.path + ' -name "*.d.ts" | xargs rm');
            (0, _child_process.execSync)('find ./lib/' + info.categoryName + '/' + info.module.path + ' -name "*.jsx" | xargs rm');
        } else {
            // 是 tb 模块,只删除 src 的
            (0, _child_process.execSync)('find ./lib/' + info.categoryName + '/' + info.module.path + '/src -name "*.d.ts" | xargs rm');
            (0, _child_process.execSync)('find ./lib/' + info.categoryName + '/' + info.module.path + '/src -name "*.jsx" | xargs rm');
        }
    });
};

switch (args[0]) {
    case 'update':
        // 更新
        (0, _mapModule.mapModule)(_allComponent2.default, function (info) {
            (0, _update2.default)(info);
        });
        (0, _tryPull2.default)('./');
        break;

    case 'push':
        // 提交
        // 先清理一遍,防止编译到一半取消留下脏文件
        clearDts();

        // 解析 import 语句,添加依赖
        (0, _upgradeDependencies2.default)(allModules);

        // 更新版本依赖,对有修改的或者被依赖的发布新版本
        (0, _version2.default)(allModules);

        (0, _mapModule.mapModule)(_allComponent2.default, function (info) {
            // 组件提交（内含各种编译）
            (0, _push2.default)(info);
            // 清空所有 dts
            clearDts();
        });

        // fit 项目提交（直接提交）
        (0, _tryPush2.default)('./');
        break;

    case 'github':
        // 传到 github
        (0, _github2.default)(allModules);
        break;
}