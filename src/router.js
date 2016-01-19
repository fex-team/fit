import React from 'react'
import { Router, Route, IndexRoute, Redirect } from 'react-router'
import { createHistory, useBasename } from 'history'

import Layout from './layout'
import Home from './home'

// pc
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
import CollapseComponent from './components/pc/collapse'
import TabsComponent from './components/pc/tabs'
import TimepickerComponent from './components/pc/timepicker'
import NumberComponent from './components/pc/number'
import AutoCompleteComponent from './components/pc/auto-complete'
import TreeComponent from './components/pc/tree'
import JsonTreeComponent from './components/pc/json-tree'
import PhoneComponent from './components/pc/phone'
import UploadComponent from './components/pc/upload'
import IframeComponent from './components/pc/iframe'

// mobile
import MobileColorComponent from './components/mobile/color'
import MobileScaleComponent from './components/mobile/scale'
import MobileChatComponent from './components/mobile/chat'
import MobileChatBoxComponent from './components/mobile/chat-box'

// tb
import TbComponentIndex from './components/tb'
import CaptchaComponent from './components/tb/captcha'
import TrackComponent from './components/tb/track'
import TimeComponent from './components/tb/time'
import BlueBarComponent from './components/tb/bluebar'
import TbSubmitComponent from './components/tb/submit'
import TbEmojiComponent from './components/tb/emoji'

const history = useBasename(createHistory)({
    basename: '/'
})

const MainRouter = (
    <Router history={history}>
        <Redirect from="/"
                  to="pc"></Redirect>
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
            <Route path="collapse"
                   component={CollapseComponent}/>
            <Route path="tabs"
                   component={TabsComponent}/>
            <Route path="timepicker"
                   component={TimepickerComponent}/>
            <Route path="number"
                   component={NumberComponent}/>
            <Route path="auto-complete"
                   component={AutoCompleteComponent}/>
            <Route path="tree"
                   component={TreeComponent}/>
            <Route path="json-tree"
                   component={JsonTreeComponent}/>
            <Route path="phone"
                   component={PhoneComponent}/>
            <Route path="upload"
                   component={UploadComponent}/>
            <Route path="iframe"
                   component={IframeComponent}/>
        </Route>
        <Route path="/mobile"
               component={Layout}>
            <IndexRoute component={MobileColorComponent}/>
            <Route path="color"
                   component={MobileColorComponent}/>
            <Route path="scale"
                   component={MobileScaleComponent}/>
            <Route path="chat"
                   component={MobileChatComponent}/>
            <Route path="chat-box"
                   component={MobileChatBoxComponent}/>
        </Route>
        <Route path="/tb"
               component={Layout}>
            <IndexRoute component={TbComponentIndex}/>
            <Route path="captcha"
                   component={CaptchaComponent}/>
            <Route path="track"
                   component={TrackComponent}/>
            <Route path="time"
                   component={TimeComponent}/>
            <Route path="submit"
                   component={TbSubmitComponent}/>
            <Route path="emoji"
                   component={TbEmojiComponent}/>
            <Route path="bluebar"
                   component={BlueBarComponent}/>
        </Route>
    </Router>
)

export default MainRouter