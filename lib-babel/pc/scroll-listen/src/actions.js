'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setNailInfo = setNailInfo;
exports.resetNailInfo = resetNailInfo;
exports.changeActiveTitle = changeActiveTitle;
exports.changeBoxActiveTitle = changeBoxActiveTitle;
var SET_NAIL_INFO = exports.SET_NAIL_INFO = 'SET_NAIL_INFO';
var CHANGE_ACTIVE_TITLE = exports.CHANGE_ACTIVE_TITLE = 'CHANGE_ACTIVE_TITLE';
var CHANGE_BOX_ACTIVE_TITLE = exports.CHANGE_BOX_ACTIVE_TITLE = 'CHANGE_BOX_ACTIVE_TITLE';
var RESET_NAIL_INFO = exports.RESET_NAIL_INFO = 'RESET_NAIL_INFO';

function setNailInfo(info) {
    return {
        type: SET_NAIL_INFO,
        info: info
    };
}

function resetNailInfo() {
    return {
        type: RESET_NAIL_INFO
    };
}

function changeActiveTitle(title) {
    return {
        type: CHANGE_ACTIVE_TITLE,
        title: title
    };
}

function changeBoxActiveTitle(title) {
    return {
        type: CHANGE_BOX_ACTIVE_TITLE,
        title: title
    };
}