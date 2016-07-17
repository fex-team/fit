'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _child_process = require('child_process');

var _babelCore = require('babel-core');

var babel = _interopRequireWildcard(_babelCore);

var _nodeSass = require('node-sass');

var _nodeSass2 = _interopRequireDefault(_nodeSass);

var _autoprefixer = require('autoprefixer');

var _autoprefixer2 = _interopRequireDefault(_autoprefixer);

var _postcss = require('postcss');

var _postcss2 = _interopRequireDefault(_postcss);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _htmlPathLoader = require('./html-path-loader');

var _htmlPathLoader2 = _interopRequireDefault(_htmlPathLoader);

var _cssPathLoader = require('./css-path-loader');

var _cssPathLoader2 = _interopRequireDefault(_cssPathLoader);

var _utils = require('./utils');

var _typescript = require('typescript');

var ts = _interopRequireWildcard(_typescript);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseBabel = function parseBabel(filePath, info) {
    var absolutePath = _path2.default.join(__dirname, '../../..', filePath);
    var jsFileContent = _fs2.default.readFileSync(absolutePath).toString().replace(/\.scss/g, '.css');

    // 忽略 @babel ignore 模块
    if (jsFileContent.indexOf('@babel ignore') > -1) {
        return;
    }

    var result = babel.transform(jsFileContent, {
        extends: _path2.default.resolve(__dirname, '../../../.babelrc')
    });

    var resultCode = result.code;

    // 将所有 fit 组件的引用还原
    resultCode = resultCode.replace(/require\(\'(..\/){3,}([\w-]*\/)?([\w-]*)\/src\'\)/g, function (word, match1, match2, match3) {
        var categoryPath = void 0;
        if (match2 === undefined) {
            categoryPath = match1;
        } else {
            categoryPath = match2;
        }
        var componentInfo = (0, _utils.relativePathToComponentPath)(categoryPath, match3, info);
        return 'require(\'' + componentInfo.prefix + '-' + componentInfo.name + '\')';
    });

    _fs2.default.writeFileSync(absolutePath, resultCode);
};

var parseSass = function parseSass(scssPath) {
    var cssPath = scssPath.replace('.scss', '.css');

    var result = _nodeSass2.default.renderSync({
        file: scssPath,
        sourceMap: true
    }).css.toString();

    // autoprefixer 插件处理
    var postResult = (0, _postcss2.default)([_autoprefixer2.default]).process(result).css;
    _fs2.default.writeFileSync(cssPath, postResult);
    (0, _child_process.execSync)('rm ' + scssPath);
};

var parseTypescript = function parseTypescript(filePath, info) {
    var absolutePath = _path2.default.join(__dirname, '../../..', filePath);
    var tsxFileContent = _fs2.default.readFileSync(absolutePath).toString().replace(/\.scss/g, '.css');

    var config = {};

    switch (info.module.type) {
        case 'server':
            config = {
                jsx: 1,
                target: 2,
                module: 1
            };
            break;
        default:
            config = {
                jsx: 2,
                target: 2,
                module: 1
            };
    }

    var result = ts.transpile(tsxFileContent, config);

    _fs2.default.writeFileSync(absolutePath.replace(/.tsx/g, '.js'), result);
    (0, _child_process.execSync)('rm ' + absolutePath);
};

var getfiles = function getfiles(suffix, modulePath) {
    var files = (0, _child_process.execSync)('find ' + modulePath + ' -name "*.' + suffix + '"').toString().split('\n');
    files = files.filter(function (item) {
        return item !== '';
    });
    return files;
};

var handleModuleDir = function handleModuleDir(modulePath, info) {
    // tsx 文件由 typescript 处理
    var tsxFiles = getfiles('tsx', modulePath);
    tsxFiles.map(function (item) {
        parseTypescript(item, info);
    });

    // js 文件由 babel 处理
    var jsFiles = getfiles('js', modulePath);
    jsFiles.map(function (item) {
        (0, _htmlPathLoader2.default)(item, info);
        parseBabel(item, info);
    });

    // scss 文件由 sass 处理
    var scssFiles = getfiles('scss', modulePath);
    scssFiles.map(function (item) {
        (0, _cssPathLoader2.default)(item, info);
        parseSass(item, info);
    });
};

exports.default = function (info, libPath) {
    // 处理dist目录
    handleModuleDir(libPath, info);
};