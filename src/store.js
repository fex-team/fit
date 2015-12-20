/**
 * Created by andycall on 15/12/20.
 */
import dispatcher from './dispatcher'
import { EventEmitter } from 'events'

import { setActive } from './actions'

const SET_ACTIVE = 'setActive'

let currentComponent
let previousComponent

let store = Object.assign({}, EventEmitter.prototype, {
    emitActive () {
        this.emit(SET_ACTIVE)
    },

    addActiveChange (callback) {
        this.on(SET_ACTIVE, callback)
    },

    removeActiveChange (callback) {
        this.off(SET_ACTIVE, callback)
    }
})

store.dispatchToken = dispatcher.register((action) => {
    switch (action.type) {
        case SET_ACTIVE:
            if (currentComponent === action.component) {
                return
            }

            previousComponent = currentComponent
            currentComponent = action.component

            if (previousComponent) {
                previousComponent.unActive()
            }

            this.emitActive()
            break
    }
})

export default store