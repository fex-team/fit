import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Layout from './layout'
import Button from './button'

const MainRouter = (
    <Router>
        <Route path="/"
               component={Layout}>
            <Route path="button"
                   component={Button}/>
        </Route>
    </Router>
)

export default MainRouter