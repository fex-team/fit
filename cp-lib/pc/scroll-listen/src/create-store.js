import { createStore } from 'redux'
import ScrollListenApp from './reducers'

const creator = ()=> {
    return createStore(ScrollListenApp)
}

export default creator