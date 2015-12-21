/**
 * Created by andycall on 15/12/21.
 */
import { SET_ACTIVE, setActive} from './actions'
import { combineReducers } from 'redux'


function Menu (status = [], action) {
    switch (action.type) {
        case SET_ACTIVE:
            return Object.assign({}, status, {
                active: action.component
            })

        default:
            return status
    }
}

let MenuApp = combineReducers({
    Menu
})

export default MenuApp