'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _actions = require('./actions');

/**
 * Created by andycall on 15/12/17.
 */

function Layout() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _actions.SET_HEADER_HEIGHT:
            return Object.assign({}, state, {
                headerHeight: action.height
            });

        case _actions.SET_FOOTER_HEIGHT:
            return Object.assign({}, state, {
                footerHeight: action.height
            });

        case _actions.SET_SIDERBAR_WIDTH:
            return Object.assign({}, state, {
                siderbarWidth: action.width
            });

        case _actions.SET_SIDERBAR_DIRECTION:
            return Object.assign({}, state, {
                siderbarDirection: action.direction
            });

        default:
            return state;
    }
}

var LayoutApp = (0, _redux.combineReducers)({
    Layout: Layout
});

exports.default = LayoutApp;