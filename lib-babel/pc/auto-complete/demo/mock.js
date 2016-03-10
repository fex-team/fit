'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _jqueryMockjax = require('jquery-mockjax');

var _jqueryMockjax2 = _interopRequireDefault(_jqueryMockjax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mockjax = (0, _jqueryMockjax2.default)(_jquery2.default, window);

mockjax({
    url: "/api/auto-complete/basic",
    contentType: "application/json",
    response: function response(settings) {
        var response = [];
        for (var i = 0; i < 10; i++) {
            response.push({
                text: settings.data.search + 'test' + i,
                value: i
            });
        }
        this.responseText = response;
    }
});