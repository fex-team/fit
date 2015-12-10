var path = require('path')

module.exports = {
    alias: {
        'tb-style': path.join(__dirname, 'src/all.scss'),
        'tb-button': path.join(__dirname, 'lib/button'),
        'tb-layout': path.join(__dirname, 'lib/layout'),
        'tb-checkbox': path.join(__dirname, 'lib/checkbox'),
        'tb-datepicker': path.join(__dirname, 'lib/datepicker')
    }
}