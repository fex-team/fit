'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

var _formatJson = require('format-json');

var _formatJson2 = _interopRequireDefault(_formatJson);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var changeModules = {};
var moduleMaps = {};

var hasChanges = function hasChanges(path) {
    // 先看看status对不对
    var gitStatus = (0, _child_process.execSync)('cd ' + path + ';git status');
    return gitStatus.indexOf('nothing to commit, working directory clean') <= -1;
};

var getModulePath = function getModulePath(info) {
    return _path2.default.join(__dirname, '../../..', 'lib/' + info.categoryName + '/' + info.module.path);
};

var updateModuleVirtual = function updateModuleVirtual(modulePath, name, version) {
    if (!changeModules[modulePath]) {
        changeModules[modulePath] = {
            modulePath: modulePath,
            name: name,
            version: _semver2.default.inc(version, 'patch')
        };
    }
};

var buildModuleMap = function buildModuleMap(modules) {
    modules.map(function (module) {
        var modulePath = getModulePath(module);
        var moduleObj = getModuleObj(modulePath);
        moduleMaps[moduleObj.name] = {
            version: moduleObj.version,
            name: moduleObj.name,
            modulePath: modulePath,
            dependencies: []
        };
        for (var dependence in moduleObj.dependencies) {
            moduleMaps[moduleObj.name].dependencies.push(_defineProperty({}, dependence, moduleObj.dependencies[dependence]));
        }
    });
};

var getModuleObj = function getModuleObj(module) {
    if (_fs2.default.existsSync(module, 'package.json')) {
        return JSON.parse(_fs2.default.readFileSync(_path2.default.resolve(module, 'package.json')).toString());
    }
    return {};
};

var whoIsNeedMe = function whoIsNeedMe(moduleObj) {
    var modules = [];
    var moduleName = moduleObj.name;
    for (var module in moduleMaps) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = moduleMaps[module].dependencies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var dep = _step.value;

                if (dep[moduleName]) {
                    modules.push({
                        modulePath: moduleMaps[module].modulePath,
                        moduleName: moduleMaps[module].name,
                        moduleVersion: moduleMaps[module].version
                    });
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    return modules;
};

var updateModule = function updateModule(modulePath) {
    var moduleObj = changeModules[modulePath] || getModuleObj(modulePath);
    updateModuleVirtual(modulePath, moduleObj.name, moduleObj.version);

    var dependences = whoIsNeedMe(moduleObj);

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = dependences[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var dep = _step2.value;

            updateModule(dep.modulePath);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
};

var writeChanges = function writeChanges() {
    for (var change in changeModules) {
        var moduleObj = getModuleObj(changeModules[change].modulePath);
        console.log('Update ' + changeModules[change].name + ' version ' + moduleObj.version + ' ==> ' + changeModules[change].version);
        moduleObj.version = changeModules[change].version;

        for (var dep in moduleObj.dependencies) {
            if (moduleMaps[dep] && changeModules[moduleMaps[dep].modulePath] && changeModules[moduleMaps[dep].modulePath].name === dep) {
                moduleObj.dependencies[dep] = '^' + changeModules[moduleMaps[dep].modulePath].version;
            }
        }

        _fs2.default.writeFileSync(_path2.default.join(changeModules[change].modulePath, 'package.json'), _formatJson2.default.plain(moduleObj), 'utf-8');
    }
};

exports.default = function (modules) {
    buildModuleMap(modules);

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = modules[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var module = _step3.value;

            var modulePath = getModulePath(module);
            if (hasChanges(modulePath)) {
                updateModule(modulePath);
            }
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    writeChanges();
};