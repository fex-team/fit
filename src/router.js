import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Layout from './layout'
import Home from './home'

import ButtonComponent from './components/button'
import LayoutComponent from './components/layout'
import LayoutGlobalComponent from './components/layout-global'
import DatepickerComponent from './components/datepicker'
import TableComponent from './components/table'

const MainRouter = (
    <Router>
        <Route path="/"
               component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="layout-global"
                   component={LayoutGlobalComponent}/>
            <Route path="layout"
                   component={LayoutComponent}/>
            <Route path="button"
                   component={ButtonComponent}/>
            <Route path="datepicker"
                   component={DatepickerComponent}/>
            <Route path="table"
                   component={TableComponent}/>
        </Route>
    </Router>
)

export default MainRouter