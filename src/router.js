import React from 'react'
import { Router, Route, IndexRoute, Redirect} from 'react-router'

import Layout from './layout'
import Home from './home'

import ButtonComponent from './components/pc/button'
import LayoutComponent from './components/pc/layout'
import LayoutGlobalComponent from './components/pc/layout-global'
import DatepickerComponent from './components/pc/datepicker'
import TableComponent from './components/pc/table'
import CheckboxComponent from './components/pc/checkbox'
import RadioComponent from './components/pc/radio'
import PaginationComponent from './components/pc/pagination'
import SwitchComponent from './components/pc/switch'
import InputComponent from './components/pc/input'
import SelectComponent from './components/pc/select'
import MenuComponent from './components/pc/menu'
import ModalComponent from './components/pc/modal'
import MessageComponent from './components/pc/message'
import CaptchaComponent from './components/pc/captcha'

import MobileColor from './components/mobile/color'

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
                   component={MenuComponent}/>
            <Route path="modal"
                   component={ModalComponent}/>
            <Route path="message"
                   component={MessageComponent}/>
            <Route path="captcha"
                   component={CaptchaComponent}/>
        </Route>
        <Route path="/mobile"
               component={Layout}>
            <IndexRoute component={Home}/>
            <Route path="color"
                   component={MobileColor}>

            </Route>
        </Route>
    </Router>
)

export default MainRouter