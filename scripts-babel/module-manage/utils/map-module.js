"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var mapModuleHandle = function mapModuleHandle(config, callback) {
    Object.keys(config.categorys).map(function (key, index) {
        // pc mobile .. 分类
        var category = config.categorys[key];
        for (var componentsKey in category.components) {
            category.components[componentsKey].map(function (item) {
                callback({
                    module: item,
                    categoryName: key,
                    categoryInfo: category
                });
            });
        }
    });
};

// 遍历所有module
var mapModule = function mapModule(config, callback) {
    mapModuleHandle(config, callback);
};

var getAllModules = function getAllModules(config) {
    var modules = [];
    mapModuleHandle(config, function (info) {
        modules.push(info);
    });
    return modules;
};

exports.default = mapModule;
exports.mapModule = mapModule;
exports.getAllModules = getAllModules;