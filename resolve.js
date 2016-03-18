
    var path = require('path')

    module.exports = {
        alias: {
            
        // common
        
                'fit-timeago': path.join(__dirname, 'lib/common/timeago/src'),
                
                'fit-badge': path.join(__dirname, 'lib/common/badge/src'),
                
        // pc
        
                'fit-layout-global': path.join(__dirname, 'lib/pc/layout-global/src'),
                
                'fit-layout': path.join(__dirname, 'lib/pc/layout/src'),
                
                'fit-button': path.join(__dirname, 'lib/pc/button/src'),
                
                'fit-pagination': path.join(__dirname, 'lib/pc/pagination/src'),
                
                'fit-table': path.join(__dirname, 'lib/pc/table/src'),
                
                'fit-modal': path.join(__dirname, 'lib/pc/modal/src'),
                
                'fit-message': path.join(__dirname, 'lib/pc/message/src'),
                
                'fit-collapse': path.join(__dirname, 'lib/pc/collapse/src'),
                
                'fit-tree': path.join(__dirname, 'lib/pc/tree/src'),
                
                'fit-json-tree': path.join(__dirname, 'lib/pc/json-tree/src'),
                
                'fit-image': path.join(__dirname, 'lib/pc/image/src'),
                
                'fit-render-to': path.join(__dirname, 'lib/pc/render-to/src'),
                
                'fit-scroll-listen': path.join(__dirname, 'lib/pc/scroll-listen/src'),
                
                'fit-tag': path.join(__dirname, 'lib/pc/tag/src'),
                
                'fit-tooltip': path.join(__dirname, 'lib/pc/tooltip/src'),
                
                'fit-progress': path.join(__dirname, 'lib/pc/progress/src'),
                
                'fit-input': path.join(__dirname, 'lib/pc/input/src'),
                
                'fit-number': path.join(__dirname, 'lib/pc/number/src'),
                
                'fit-auto-complete': path.join(__dirname, 'lib/pc/auto-complete/src'),
                
                'fit-select': path.join(__dirname, 'lib/pc/select/src'),
                
                'fit-switch': path.join(__dirname, 'lib/pc/switch/src'),
                
                'fit-checkbox': path.join(__dirname, 'lib/pc/checkbox/src'),
                
                'fit-radio': path.join(__dirname, 'lib/pc/radio/src'),
                
                'fit-timepicker': path.join(__dirname, 'lib/pc/timepicker/src'),
                
                'fit-datepicker': path.join(__dirname, 'lib/pc/datepicker/src'),
                
                'fit-upload': path.join(__dirname, 'lib/pc/upload/src'),
                
                'fit-editor': path.join(__dirname, 'lib/pc/editor/src'),
                
                'fit-menu': path.join(__dirname, 'lib/pc/menu/src'),
                
                'fit-tabs': path.join(__dirname, 'lib/pc/tabs/src'),
                
                'fit-style': path.join(__dirname, 'lib/pc/style/src'),
                
                'fit-phone': path.join(__dirname, 'lib/pc/phone/src'),
                
                'fit-iframe': path.join(__dirname, 'lib/pc/iframe/src'),
                
                'fit-cropper': path.join(__dirname, 'lib/pc/cropper/src'),
                
        // mobile
        
                'fit-reset': path.join(__dirname, 'lib/mobile/reset/src'),
                
                'fit-scale': path.join(__dirname, 'lib/mobile/scale/src'),
                
                'fit-chat': path.join(__dirname, 'lib/mobile/chat/src'),
                
                'fit-chat-box': path.join(__dirname, 'lib/mobile/chat-box/src'),
                
        // tb
        
                'tb-color': path.join(__dirname, 'lib/tb/color/src'),
                
                'tb-track': path.join(__dirname, 'lib/tb/track/src'),
                
                'tb-captcha': path.join(__dirname, 'lib/tb/captcha/src'),
                
                'tb-captcha-drag': path.join(__dirname, 'lib/tb/captcha-drag/src'),
                
                'tb-submit': path.join(__dirname, 'lib/tb/submit/src'),
                
                'tb-share': path.join(__dirname, 'lib/tb/share/src'),
                
                'tb-blue-bar': path.join(__dirname, 'lib/tb/blue-bar/src'),
                
                'tb-upload': path.join(__dirname, 'lib/tb/upload/src'),
                
                'tb-icon': path.join(__dirname, 'lib/tb/icon/src'),
                
                'tb-emoji': path.join(__dirname, 'lib/tb/emoji/src'),
                
                'tb-lego-card': path.join(__dirname, 'lib/tb/lego-card/src'),
                
        // oxp
        
            // fix enzyme's bug
            'react/lib/ExecutionEnvironment': 'execution-environment',
            'react/lib/ReactContext': 'react-context'
        },
        extensions: ['', '.js', '.jsx', '.tsx', '.ts', 'coffee', '.cjsx', '.es6', '.json']
    }
    