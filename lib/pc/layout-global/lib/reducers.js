'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _actions = require('./actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by andycall on 15/12/17.
 */

function Layout() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _actions.SET_HEADER_HEIGHT:
            return (0, _extends3.default)({}, state, {
                headerHeight: action.height
            });

        case _actions.SET_FOOTER_HEIGHT:
            return (0, _extends3.default)({}, state, {
                footerHeight: action.height
            });

        case _actions.SET_SIDERBAR_WIDTH:
            return (0, _extends3.default)({}, state, {
                siderbarWidth: action.width
            });

        case _actions.SET_SIDERBAR_DIRECTION:
            return (0, _extends3.default)({}, state, {
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