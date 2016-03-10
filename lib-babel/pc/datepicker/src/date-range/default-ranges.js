'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    '今天': {
        startDate: function startDate(now) {
            return now;
        },
        endDate: function endDate(now) {
            return now;
        }
    },

    '昨天': {
        startDate: function startDate(now) {
            return now.add(-1, 'days');
        },
        endDate: function endDate(now) {
            return now.add(-1, 'days');
        }
    },

    '前7天': {
        startDate: function startDate(now) {
            return now.add(-7, 'days');
        },
        endDate: function endDate(now) {
            return now;
        }
    },

    '前30天': {
        startDate: function startDate(now) {
            return now.add(-30, 'days');
        },
        endDate: function endDate(now) {
            return now;
        }
    }
};