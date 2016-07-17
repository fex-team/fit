'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGitSourcePath = exports.relativePathToComponentPath = undefined;

var _allComponent = require('../../../all-component.json');

var _allComponent2 = _interopRequireDefault(_allComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require(./xxx) 转化为 fit-x 组件地址
var relativePathToComponentPath = exports.relativePathToComponentPath = function relativePathToComponentPath() {
    var categoryName = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
    var componentPath = arguments[1];
    var info = arguments[2];

    categoryName = categoryName.replace(/\//g, '');

    // 如果没有 categoryName 说明和当前组件一个 category
    if (categoryName === '..') {
        categoryName = info.categoryName;
    }

    return {
        prefix: _allComponent2.default.categorys[categoryName].prefix,
        name: componentPath
    };
};

var getGitSourcePath = exports.getGitSourcePath = function getGitSourcePath(info) {
    // 获取git地址
    var gitSourcePath = void 0;
    if (info.categoryInfo.gitlabPrefix !== '') {
        gitSourcePath = info.categoryInfo.gitlabPrefix + '-' + info.module.path + '.git';
    } else {
        gitSourcePath = info.module.path + '.git';
    }
    return gitSourcePath;
};