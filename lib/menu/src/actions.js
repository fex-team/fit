/**
 * Created by andycall on 15/12/17.
 */

import dispatcher from './dispatcher'

export function setActive (component) {
    dispatcher.dispatch({
        type: 'setActive',
        component: component
    })
}
