'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _child_process = require('child_process');

var _utils = require('./utils/utils');

var githubGit = 'https://github.com/fex-team/fit.git';
var githubComponentGit = 'https://github.com/fit-component';

var getModulePath = function getModulePath(info) {
    return './lib/' + info.categoryName + '/' + info.module.path;
};

var deleteRemoteGithub = function deleteRemoteGithub(info) {
    try {
        if (!info) {
            (0, _child_process.execSync)('git remote rm github >/dev/null 2>&1');
        } else {
            (0, _child_process.execSync)('cd ' + getModulePath(info) + ';git remote rm github >/dev/null 2>&1');
        }
    } catch (err) {}
};

var addRemoteGithub = function addRemoteGithub(info) {
    try {
        if (!info) {
            (0, _child_process.execSync)('git remote add github ' + githubGit);
        } else {
            (0, _child_process.execSync)('cd ' + getModulePath(info) + ';git remote add github ' + githubComponentGit + '/' + (0, _utils.getGitSourcePath)(info));
        }
    } catch (err) {}
};

var push = function push(info) {
    // 忽略贴吧组件 根目录可以提交
    if (info && info.categoryName === 'tb') return;

    try {
        if (!info) {
            (0, _child_process.execSync)('git push github master');
        } else {
            (0, _child_process.execSync)('cd ' + getModulePath(info) + ';git push github master --force');
        }
    } catch (err) {}
};

exports.default = function (allModules) {
    // 删除根目录所有 git remote github
    deleteRemoteGithub();

    // 删除组件目录所有 git remote github
    allModules.forEach(function (info) {
        deleteRemoteGithub(info);
    });

    // 添加根目录 git remote github
    addRemoteGithub();

    // 添加组件目录所有 git remote github
    allModules.forEach(function (info) {
        addRemoteGithub(info);
    });

    // push 根目录
    push();

    // push 所有组件目录
    allModules.forEach(function (info) {
        push(info);
    });
};