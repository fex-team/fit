'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by andycall on 15/12/17.
                                                                                                                                                                                                                                                                   */

var _redux = require('redux');

var _actions = require('./actions');

function Layout() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _actions.SET_HEADER_HEIGHT:
            return _extends({}, state, {
                headerHeight: action.height
            });

        case _actions.SET_FOOTER_HEIGHT:
            return _extends({}, state, {
                footerHeight: action.height
            });

        case _actions.SET_SIDERBAR_WIDTH:
            return _extends({}, state, {
                siderbarWidth: action.width
            });

        case _actions.SET_SIDERBAR_DIRECTION:
            return _extends({}, state, {
                siderbarDirection: action.direction
            });

        case _actions.SET_FOOTER_NEW_LINE:
            return _extends({}, state, {
                footerNewLine: action.newLine
            });

        default:
            return state;
    }
}

var LayoutApp = (0, _redux.combineReducers)({
    Layout: Layout
});

exports.default = LayoutApp;