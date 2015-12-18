var path = require('path')

module.exports = {
    alias: {
        'conic-style': path.join(__dirname, 'lib/style/src'),
        'conic-button': path.join(__dirname, 'lib/button/src'),
        'conic-layout': path.join(__dirname, 'lib/layout/src'),
        'conic-layout-global': path.join(__dirname, 'lib/layout-global/src'),
        'conic-checkbox': path.join(__dirname, 'lib/checkbox/src'),
        'conic-datepicker': path.join(__dirname, 'lib/datepicker/src'),
        'conic-table': path.join(__dirname, 'lib/table/src'),
        'conic-pagination': path.join(__dirname, 'lib/pagination/src')
    }
}