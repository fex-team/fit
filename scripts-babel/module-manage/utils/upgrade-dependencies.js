'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _find = require('find');

var _find2 = _interopRequireDefault(_find);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _formatJson = require('format-json');

var _formatJson2 = _interopRequireDefault(_formatJson);

var _resolve = require('../../webpack/resolve');

var _resolve2 = _interopRequireDefault(_resolve);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = process.cwd();

var rules = [
// import * as xxx from 'xxx'
'(import\\s\\*\\sas\\s{0,}(?:[\\$_a-zA-Z0-9\\-\\{\\}]{1,}\\s{1,}from\\s{1,}){0,1}[\'\\"]([\\w\\-]{1,})(?:[/\\w\\.\\-]{1,}){0,1}[\'"])',
// import {a,b,c} from 'xxx'
'(import\\s\\{\\s{0,}[\\w,_\\s]{0,}\\}\\s{0,}from\\s{0,}[\'"]([\\w\\-]{1,})(?:[/\\w\\.\\-]{1,}){0,1}[\'"])',
// import x from 'xxx'
'(import\\s{0,}(?:[\\$_a-zA-Z0-9\\-\\{\\}]{1,}\\s{1,}from\\s{1,}){0,1}[\'"]([\\w\\-]{1,})(?:[/\\w\\.\\-]{1,}){0,1}[\'"])',
// require ('xxx')
'(require\\((\\\'[\\$_a-zA-Z0-9\\-\\/\\.]{1,}\\\')\\))'];

var regex = new RegExp(rules.join('|'), 'g');

var getPackageJSON = function getPackageJSON(filePath) {
    return JSON.parse(_fs2.default.readFileSync(_path2.default.join(filePath, 'package.json')));
};

var writePackageJSON = function writePackageJSON(filePath, name, obj) {
    var json = getPackageJSON(filePath);
    json[name] = obj;
    _fs2.default.writeFileSync(_path2.default.join(filePath, 'package.json'), _formatJson2.default.plain(json));
};

exports.default = function (modules) {
    var rootJSON = getPackageJSON(root);
    var rootDependencies = rootJSON.dependencies;
    var devDependencies = rootJSON.devDependencies;

    modules.forEach(function (info) {
        // 跳过忽略检查的模块
        if (info.module.ignoreDepCheck) {
            return;
        }

        var filePath = _path2.default.join(__dirname, '../../..', 'lib/' + info.categoryName + '/' + info.module.path);
        var dependencies = [];
        var depenObj = {};

        var files = _find2.default.fileSync(filePath);

        var srcFiles = files.filter(function (val) {
            return (/src[\/\w-]+.(js|tsx)$/.test(val)
            );
        });

        srcFiles.forEach(function (file) {
            var code = _fs2.default.readFileSync(file).toString();
            // 将所有 fit 组件的引用还原
            code = code.replace(/import\s(\w*|\{[\w\s,]*\}|\*\sas\s\w*)\sfrom\s\'(..\/){3,}([\w-]*\/)?([\w-]*)\/src\'/g, function (word, match1, match2, match3, match4) {
                var categoryPath = void 0;
                if (match3 === undefined) {
                    categoryPath = match2;
                } else {
                    categoryPath = match3;
                }
                var componentInfo = (0, _utils.relativePathToComponentPath)(categoryPath, match4, info);
                return 'import ' + _lodash2.default.capitalize(_lodash2.default.camelCase(componentInfo.name)) + ' from \'' + componentInfo.prefix + '-' + componentInfo.name + '\'';
            });

            var match = void 0;

            while ((match = regex.exec(code)) != null) {
                if (match.index === regex.lastIndex) {
                    ++regex.lastIndex;
                }

                var matched = match[2] || match[4] || match[6] || match[8];

                matched = _lodash2.default.trim(matched, '\'');

                // 排除 undefined
                if (matched === undefined) continue;

                // 排除以 . 开头的
                if (matched.indexOf('.') === 1) continue;

                // 如果有 / 说明是引了这个模块的自目录,但依然需要安装完整模块,因此去除后面 / 的路径避免干扰
                if (matched.indexOf('/' > -1)) {
                    var matchedArray = matched.split('/');
                    matched = matchedArray[0];
                }

                if (matched && dependencies.indexOf(matched) < 0) {
                    dependencies.push(matched);
                }
            }
        });

        dependencies.forEach(function (dep) {
            var depen = rootDependencies[dep] || devDependencies[dep];

            if (depen) {
                depenObj[dep] = depen;
            } else if (dep in _resolve2.default.alias) {
                depenObj[dep] = '^' + getPackageJSON(_resolve2.default.alias[dep].replace('/src', '')).version;
            }
        });

        writePackageJSON(filePath, 'dependencies', depenObj);

        // 添加 typings 入口
        writePackageJSON(filePath, 'typings', 'lib/index.d.ts');
    });

    process.chdir(root);
};