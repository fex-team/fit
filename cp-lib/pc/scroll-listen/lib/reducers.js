'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _actions = require('./actions');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nail = function Nail() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _actions.SET_NAIL_INFO:
            var newInfos = state.infos || [];
            var exist = false;
            newInfos.map(function (item) {
                if (item.title === action.info.title) {
                    exist = true;
                }
            });
            if (!exist) {
                newInfos.push(action.info);
            }
            return _extends({}, state, {
                infos: newInfos
            });
            break;
        case _actions.CHANGE_ACTIVE_TITLE:
            return _extends({}, state, {
                title: action.title
            });
            break;
        case _actions.CHANGE_BOX_ACTIVE_TITLE:
            return _extends({}, state, {
                title: action.title
            });
            break;
        case _actions.RESET_NAIL_INFO:
            return _extends({}, state, {
                infos: []
            });
            break;
        default:
            return state;
    }
};

var LastAction = function LastAction() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
    var action = arguments[1];

    return action;
};

var ScrollListenApp = (0, _redux.combineReducers)({
    Nail: Nail,
    LastAction: LastAction
});

exports.default = ScrollListenApp;