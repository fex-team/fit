var path = require('path')
var reactNativeWeb = require('react-native-web')

module.exports = {
    alias: {
        // pc
        'fit-style': path.join(__dirname, 'lib/pc/style/src'),
        'fit-button': path.join(__dirname, 'lib/pc/button/src'),
        'fit-layout': path.join(__dirname, 'lib/pc/layout/src'),
        'fit-layout-global': path.join(__dirname, 'lib/pc/layout-global/src'),
        'fit-checkbox': path.join(__dirname, 'lib/pc/checkbox/src'),
        'fit-radio': path.join(__dirname, 'lib/pc/radio/src'),
        'fit-datepicker': path.join(__dirname, 'lib/pc/datepicker/src'),
        'fit-table': path.join(__dirname, 'lib/pc/table/src'),
        'fit-pagination': path.join(__dirname, 'lib/pc/pagination/src'),
        'fit-input': path.join(__dirname, 'lib/pc/input/src'),
        'fit-select': path.join(__dirname, 'lib/pc/select/src'),
        'fit-switch': path.join(__dirname, 'lib/pc/switch/src'),
        'fit-menu': path.join(__dirname, 'lib/pc/menu/src'),
        'fit-modal': path.join(__dirname, 'lib/pc/modal/src'),
        'fit-message': path.join(__dirname, 'lib/pc/message/src'),
        'fit-captcha': path.join(__dirname, 'lib/pc/captcha/src'),
        'fit-collapse': path.join(__dirname, 'lib/pc/collapse/src'),
        'fit-tabs': path.join(__dirname, 'lib/pc/tabs/src'),
        'fit-timepicker': path.join(__dirname, 'lib/pc/timepicker/src'),
        // mobile
        'fiten-style': path.join(__dirname, 'lib/mobile/color/web/src'),
        'fiten-style-native': path.join(__dirname, 'lib/mobile/color/native/src'),
        'fiten-bluekit': path.join(__dirname, 'lib/mobile/bluekit/web/src'),
        'fiten-bluekit-native': path.join(__dirname, 'lib/mobile/bluekit/native/src')
    }
}