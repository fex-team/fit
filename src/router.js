import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Layout from './layout'
import Button from './components/button'
import Home from './home'

const MainRouter = (
    <Router>
        <Route path="/"
               component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="button"
                   component={Button}/>
        </Route>
    </Router>
)

export default MainRouter