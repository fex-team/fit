var path = require('path')

module.exports = {
    alias: {
        'tb-style': path.join(__dirname, 'lib/style/src'),
        'tb-button': path.join(__dirname, 'lib/button/src'),
        'tb-layout': path.join(__dirname, 'lib/layout/src'),
        'tb-layout-global': path.join(__dirname, 'lib/layout-global/src'),
        'tb-checkbox': path.join(__dirname, 'lib/checkbox/src'),
        'tb-datepicker': path.join(__dirname, 'lib/datepicker/src'),
        'tb-table': path.join(__dirname, 'lib/table/src'),
        'tb-pagination': path.join(__dirname, 'lib/pagination/src')
    }
}