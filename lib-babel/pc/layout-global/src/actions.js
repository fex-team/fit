'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setHeaderHeight = setHeaderHeight;
exports.setFooterHeight = setFooterHeight;
exports.setSiderBarWidth = setSiderBarWidth;
exports.setSiderbarDirection = setSiderbarDirection;
exports.setFooterNewLine = setFooterNewLine;
/**
 * Created by andycall on 15/12/17.
 */

var SET_HEADER_HEIGHT = exports.SET_HEADER_HEIGHT = 'SET_HEADER_HEIGHT';
var SET_FOOTER_HEIGHT = exports.SET_FOOTER_HEIGHT = 'SET_FOOTER_HEIGHT';
var SET_SIDERBAR_WIDTH = exports.SET_SIDERBAR_WIDTH = 'SET_SIDERBAR_WIDTH';
var SET_SIDERBAR_DIRECTION = exports.SET_SIDERBAR_DIRECTION = 'SET_SIDERBAR_DIRECTION';
var SET_FOOTER_NEW_LINE = exports.SET_FOOTER_NEW_LINE = 'SET_FOOTER_NEW_LINE';

function setHeaderHeight(height) {
    return {
        type: SET_HEADER_HEIGHT,
        height: height
    };
}

function setFooterHeight(height) {
    return {
        type: SET_FOOTER_HEIGHT,
        height: height
    };
}

function setSiderBarWidth(width) {
    return {
        type: SET_SIDERBAR_WIDTH,
        width: width
    };
}

function setSiderbarDirection(direction) {
    return {
        type: SET_SIDERBAR_DIRECTION,
        direction: direction
    };
}

function setFooterNewLine(newLine) {
    return {
        type: SET_FOOTER_NEW_LINE,
        newLine: newLine
    };
}