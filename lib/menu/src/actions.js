/**
 * Created by andycall on 15/12/17.
 */

export const SET_ACTIVE = 'SET_ACTIVE'

export function setActive (component) {
    return {
        type: SET_ACTIVE,
        component
    }
}
