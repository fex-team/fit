'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var isFind = false;

var findTreeByName = function findTreeByName(children, childrenName) {
    isFind = false;
    var findTree = [];
    findTreeByNameFunc(findTree, children, childrenName);
    return findTree;
};

// 根据子child名寻找child
var findTreeByNameFunc = function findTreeByNameFunc(findTree, children, childrenName) {
    var index = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];

    // 搜索树最大20层
    if (index > 20) return;

    var findTreeChildren = {
        children: children,
        index: 0
    };

    if (findTree.length + 1 < index) {
        findTree.push(findTreeChildren);
    } else {
        findTree[index] = findTreeChildren;
    }

    React.Children.map(children, function (item, itemIndex) {
        if (isFind) return;
        findTree[index].index = itemIndex;
        if (item.type && item.type.name === childrenName) {
            // 终于找到你
            isFind = true;
            deleteFindTree(findTree, childrenName);
        } else if (item.props && item.props.children) {
            findTreeByNameFunc(findTree, item.props.children, childrenName, index + 1);
        }
    });
};

// 递归删除不相关的字child（查找时会多查）
var deleteFindTree = function deleteFindTree(findTree, childrenName) {
    var find = false;
    if (findTree.length === 0) return [];
    var lastChildren = findTree[findTree.length - 1].children;

    if (lastChildren.constructor.name === 'Array') {
        lastChildren.map(function (item) {
            if (!item.type) return;
            if (item.type.name === childrenName) {
                find = true;
            }
        });
    } else {
        if (lastChildren.type && lastChildren.type.name === childrenName) {
            find = true;
        }
    }

    if (!find) {
        findTree.pop();
        deleteFindTree(findTree, childrenName);
    } else {
        return findTree;
    }
};

// 根据tree寻找目标
var getTargetByTree = function getTargetByTree(findTree) {
    if (findTree.length === 0) return null;
    var lastChildren = findTree[findTree.length - 1].children;
    if (lastChildren.constructor.name === 'Array') {
        return lastChildren[findTree[findTree.length - 1].index];
    } else {
        return lastChildren;
    }
};

// 递归生成children
var createChildren = function createChildren(children, changeProps) {
    var deep = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

    var Childrens = React.Children.map(children, function (item) {
        var props = _extends({}, item.props);

        if (item.props && item.props.children) {
            var newProps = changeProps(props, item, deep);
            if (newProps !== undefined) {
                props = newProps;
            }
            return React.cloneElement(item, props, createChildren(item.props.children, changeProps, deep + 1));
        } else if (item.props && !item.props.children) {
            var newProps = changeProps(props, item, deep);
            if (newProps !== undefined) {
                props = newProps;
            }
            return React.cloneElement(item, props);
        } else {
            return item;
        }
    });

    // 如果是一个长度为1的数组,则去掉这个数组
    if (Childrens.constructor.name === 'Array' && Childrens.length === 1) {
        Childrens = Childrens[0];
    }

    return Childrens;
};

exports.default = findTreeByName;
exports.findTreeByName = findTreeByName;
exports.getTargetByTree = getTargetByTree;
exports.createChildren = createChildren;