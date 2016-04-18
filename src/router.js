
        import React from 'react'
        import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

        import ComponentsLayout from './components/layout'
        import Home from './home'
        import Components from './components'
        import ComponentsWriteStandard from './components/write-standard'
        import ComponentsChangeLog from './components/change-log'
        import ComponentsContributor from './components/contributor'
        import ComponentsDoc from './components/doc'
        
        import commonHome from '../category-home/common'
        
        import pcHome from '../category-home/pc'
        
        import mobileHome from '../category-home/mobile'
        
        import tbHome from '../category-home/tb'
        

        
        // common
        
                import fitTimeagoComponent from './components/common/timeago'
                
                import fitBadgeComponent from './components/common/badge'
                
                import fitRenderToComponent from './components/common/render-to'
                
                import fitTransmitTransparentlyComponent from './components/common/transmit-transparently'
                
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
                
                import fitScrollListenComponent from './components/pc/scroll-listen'
                
                import fitTagComponent from './components/pc/tag'
                
                import fitTooltipComponent from './components/pc/tooltip'
                
                import fitProgressComponent from './components/pc/progress'
                
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
                
                import fitEditorComponent from './components/pc/editor'
                
                import fitMenuComponent from './components/pc/menu'
                
                import fitTabsComponent from './components/pc/tabs'
                
                import fitPhoneComponent from './components/pc/phone'
                
                import fitIframeComponent from './components/pc/iframe'
                
                import fitCropperComponent from './components/pc/cropper'
                
        // mobile
        
                import fitResetComponent from './components/mobile/reset'
                
                import fitScaleComponent from './components/mobile/scale'
                
                import fitChatComponent from './components/mobile/chat'
                
                import fitChatBoxComponent from './components/mobile/chat-box'
                
        // tb
        
                import tbColorComponent from './components/tb/color'
                
                import tbTrackComponent from './components/tb/track'
                
                import tbCaptchaComponent from './components/tb/captcha'
                
                import tbCaptchaDragComponent from './components/tb/captcha-drag'
                
                import tbSubmitComponent from './components/tb/submit'
                
                import tbShareComponent from './components/tb/share'
                
                import tbBlueBarComponent from './components/tb/blue-bar'
                
                import tbUploadComponent from './components/tb/upload'
                
                import tbIconComponent from './components/tb/icon'
                
                import tbEmojiComponent from './components/tb/emoji'
                
        // oxp
        

        const MainRouter = (
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
                <Route path="/components" component={Components}/>
                <Route path="/components/write-standard" component={ComponentsWriteStandard}/>
                <Route path="/components/doc" component={ComponentsDoc}/>
                <Route path="/components/change-log" component={ComponentsChangeLog}/>
                <Route path="/components/contributor" component={ComponentsContributor}></Route>
                
        <Route path="/components/common"
               component={ComponentsLayout}>
            <IndexRoute component={commonHome}/>
        
                <Route path="timeago"
                       component={fitTimeagoComponent}/>
                
                <Route path="badge"
                       component={fitBadgeComponent}/>
                
                <Route path="render-to"
                       component={fitRenderToComponent}/>
                
                <Route path="transmit-transparently"
                       component={fitTransmitTransparentlyComponent}/>
                
        </Route>
        
        <Route path="/components/pc"
               component={ComponentsLayout}>
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
                
                <Route path="scroll-listen"
                       component={fitScrollListenComponent}/>
                
                <Route path="tag"
                       component={fitTagComponent}/>
                
                <Route path="tooltip"
                       component={fitTooltipComponent}/>
                
                <Route path="progress"
                       component={fitProgressComponent}/>
                
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
                
                <Route path="editor"
                       component={fitEditorComponent}/>
                
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
        
        <Route path="/components/mobile"
               component={ComponentsLayout}>
            <IndexRoute component={mobileHome}/>
        
                <Route path="reset"
                       component={fitResetComponent}/>
                
                <Route path="scale"
                       component={fitScaleComponent}/>
                
                <Route path="chat"
                       component={fitChatComponent}/>
                
                <Route path="chat-box"
                       component={fitChatBoxComponent}/>
                
        </Route>
        
        <Route path="/components/tb"
               component={ComponentsLayout}>
            <IndexRoute component={tbHome}/>
        
                <Route path="color"
                       component={tbColorComponent}/>
                
                <Route path="track"
                       component={tbTrackComponent}/>
                
                <Route path="captcha"
                       component={tbCaptchaComponent}/>
                
                <Route path="captcha-drag"
                       component={tbCaptchaDragComponent}/>
                
                <Route path="submit"
                       component={tbSubmitComponent}/>
                
                <Route path="share"
                       component={tbShareComponent}/>
                
                <Route path="blue-bar"
                       component={tbBlueBarComponent}/>
                
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
    