
        import React from 'react'
        import { Router, Route, IndexRoute, Redirect } from 'react-router'
        import { createHistory, useBasename } from 'history'

        import Layout from './layout'
        import Home from './home'
        import Components from './components'
        
        import pcHome from '../category-home/pc.js'
        
        import mobileHome from '../category-home/mobile.js'
        
        import tbHome from '../category-home/tb.js'
        

        
        // pc
        
                import fitLayoutGlobalComponent from './components/pc/layout-global'
                
                import fitLayoutComponent from './components/pc/layout'
                
                import fitButtonComponent from './components/pc/button'
                
                import fitPaginationComponent from './components/pc/pagination'
                
                import fitTableComponent from './components/pc/table'
                
                import fitModalComponent from './components/pc/modal'
                
                import fitMessageComponent from './components/pc/message'
                
                import fitCollapseComponent from './components/pc/collapse'
                
                import fitTreeComponent from './components/pc/tree'
                
                import fitJsonTreeComponent from './components/pc/json-tree'
                
                import fitImageComponent from './components/pc/image'
                
                import fitRenderToComponent from './components/pc/render-to'
                
                import fitScrollListenComponent from './components/pc/scroll-listen'
                
                import fitInputComponent from './components/pc/input'
                
                import fitNumberComponent from './components/pc/number'
                
                import fitAutoCompleteComponent from './components/pc/auto-complete'
                
                import fitSelectComponent from './components/pc/select'
                
                import fitSwitchComponent from './components/pc/switch'
                
                import fitCheckboxComponent from './components/pc/checkbox'
                
                import fitRadioComponent from './components/pc/radio'
                
                import fitTimepickerComponent from './components/pc/timepicker'
                
                import fitDatepickerComponent from './components/pc/datepicker'
                
                import fitUploadComponent from './components/pc/upload'
                
                import fitMenuComponent from './components/pc/menu'
                
                import fitTabsComponent from './components/pc/tabs'
                
                import fitPhoneComponent from './components/pc/phone'
                
                import fitIframeComponent from './components/pc/iframe'
                
                import fitCropperComponent from './components/pc/cropper'
                
        // mobile
        
                import fitenResetComponent from './components/mobile/reset'
                
                import fitenColorComponent from './components/mobile/color'
                
                import fitenScaleComponent from './components/mobile/scale'
                
                import fitenChatComponent from './components/mobile/chat'
                
                import fitenChatBoxComponent from './components/mobile/chat-box'
                
        // tb
        
                import tbTrackComponent from './components/tb/track'
                
                import tbCaptchaComponent from './components/tb/captcha'
                
                import tbSubmitComponent from './components/tb/submit'
                
                import tbUploadComponent from './components/tb/upload'
                
                import tbIconComponent from './components/tb/icon'
                
                import tbEmojiComponent from './components/tb/emoji'
                
        // oxp
        

        const history = useBasename(createHistory)({
            basename: '/'
        })

        const MainRouter = (
            <Router history={history}>
                <Route path="/" component={Home}/>
                <Route path="/components" component={Components}/>
                
        <Route path="/pc"
               component={Layout}>
            <IndexRoute component={pcHome}/>
        
                <Route path="layout-global"
                       component={fitLayoutGlobalComponent}/>
                
                <Route path="layout"
                       component={fitLayoutComponent}/>
                
                <Route path="button"
                       component={fitButtonComponent}/>
                
                <Route path="pagination"
                       component={fitPaginationComponent}/>
                
                <Route path="table"
                       component={fitTableComponent}/>
                
                <Route path="modal"
                       component={fitModalComponent}/>
                
                <Route path="message"
                       component={fitMessageComponent}/>
                
                <Route path="collapse"
                       component={fitCollapseComponent}/>
                
                <Route path="tree"
                       component={fitTreeComponent}/>
                
                <Route path="json-tree"
                       component={fitJsonTreeComponent}/>
                
                <Route path="image"
                       component={fitImageComponent}/>
                
                <Route path="render-to"
                       component={fitRenderToComponent}/>
                
                <Route path="scroll-listen"
                       component={fitScrollListenComponent}/>
                
                <Route path="input"
                       component={fitInputComponent}/>
                
                <Route path="number"
                       component={fitNumberComponent}/>
                
                <Route path="auto-complete"
                       component={fitAutoCompleteComponent}/>
                
                <Route path="select"
                       component={fitSelectComponent}/>
                
                <Route path="switch"
                       component={fitSwitchComponent}/>
                
                <Route path="checkbox"
                       component={fitCheckboxComponent}/>
                
                <Route path="radio"
                       component={fitRadioComponent}/>
                
                <Route path="timepicker"
                       component={fitTimepickerComponent}/>
                
                <Route path="datepicker"
                       component={fitDatepickerComponent}/>
                
                <Route path="upload"
                       component={fitUploadComponent}/>
                
                <Route path="menu"
                       component={fitMenuComponent}/>
                
                <Route path="tabs"
                       component={fitTabsComponent}/>
                
                <Route path="phone"
                       component={fitPhoneComponent}/>
                
                <Route path="iframe"
                       component={fitIframeComponent}/>
                
                <Route path="cropper"
                       component={fitCropperComponent}/>
                
        </Route>
        
        <Route path="/mobile"
               component={Layout}>
            <IndexRoute component={mobileHome}/>
        
                <Route path="reset"
                       component={fitenResetComponent}/>
                
                <Route path="color"
                       component={fitenColorComponent}/>
                
                <Route path="scale"
                       component={fitenScaleComponent}/>
                
                <Route path="chat"
                       component={fitenChatComponent}/>
                
                <Route path="chat-box"
                       component={fitenChatBoxComponent}/>
                
        </Route>
        
        <Route path="/tb"
               component={Layout}>
            <IndexRoute component={tbHome}/>
        
                <Route path="track"
                       component={tbTrackComponent}/>
                
                <Route path="captcha"
                       component={tbCaptchaComponent}/>
                
                <Route path="submit"
                       component={tbSubmitComponent}/>
                
                <Route path="upload"
                       component={tbUploadComponent}/>
                
                <Route path="icon"
                       component={tbIconComponent}/>
                
                <Route path="emoji"
                       component={tbEmojiComponent}/>
                
        </Route>
        
            </Router>
        )

        export default MainRouter
    