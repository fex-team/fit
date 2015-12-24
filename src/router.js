import React from 'react'
import { Router, Route, IndexRoute, Redirect} from 'react-router'

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
import SwitchComponent from './components/switch'
import InputComponent from './components/input'
import SelectComponent from './components/select'
import MenuComponent from './components/menu'

const MainRouter = (
    <Router>
        <Redirect from="/" to="pc"></Redirect>
        <Route path="/pc"
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
            <Route path="switch"
                   component={SwitchComponent}/>
            <Route path="input"
                   component={InputComponent}/>
            <Route path="select"
                   component={SelectComponent}/>
            <Route path="menu"
                   component={MenuComponent}></Route>
        </Route>
        <Route path="/mobile"
               component={Layout}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
)

export default MainRouter