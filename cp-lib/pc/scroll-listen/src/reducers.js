import { combineReducers } from 'redux'
import { SET_NAIL_INFO, CHANGE_ACTIVE_TITLE, CHANGE_BOX_ACTIVE_TITLE, RESET_NAIL_INFO } from './actions'
import _ from 'lodash'

const Nail = (state = [], action) => {
    switch (action.type) {
    case SET_NAIL_INFO:
        let newInfos = state.infos || []
        let exist = false
        newInfos.map((item)=> {
            if (item.title === action.info.title) {
                exist = true
            }
        })
        if (!exist) {
            newInfos.push(action.info)
        }
        return Object.assign({}, state, {
            infos: newInfos
        })
        break
    case CHANGE_ACTIVE_TITLE:
        return Object.assign({}, state, {
            title: action.title
        })
        break
    case CHANGE_BOX_ACTIVE_TITLE:
        return Object.assign({}, state, {
            title: action.title
        })
        break
    case RESET_NAIL_INFO:
        return Object.assign({}, state, {
            infos: []
        })
        break
    default:
        return state
    }
}

const LastAction = (state = [], action)=> {
    return action
}

const ScrollListenApp = combineReducers({
    Nail,
    LastAction
})

export default ScrollListenApp