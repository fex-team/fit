import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Layout from './layout'
import Home from './home'

import ButtonComponent from './components/button'
import LayoutComponent from './components/layout'

const MainRouter = (
    <Router>
        <Route path="/"
               component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="layout"
                   component={LayoutComponent}/>
            <Route path="button"
                   component={ButtonComponent}/>
        </Route>
    </Router>
)

export default MainRouter