import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import Layout from './layout'
import Home from './home'

import ButtonComponent from './components/button'
import LayoutComponent from './components/layout'
import LayoutGlobalComponent from './components/layout-global'
import DatepickerComponent from './components/datepicker'
import TableComponent from './components/table'
import CheckboxComponent from './components/checkbox'
import RadioComponent from './components/radio'
import PaginationComponent from './components/pagination'

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
            <Route path="pagination"
                   component={PaginationComponent}/>
            <Route path="checkbox"
                   component={CheckboxComponent}/>
            <Route path="radio"
                   component={RadioComponent}/>
        </Route>
    </Router>
)

export default MainRouter