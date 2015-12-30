export default {
    '今天': {
        startDate: (now) => {
            return now;
        },
        endDate: (now) => {
            return now;
        }
    },

    '昨天': {
        startDate: (now) => {
            return now.add(-1, 'days');
        },
        endDate: (now) => {
            return now.add(-1, 'days');
        }
    },

    '前7天': {
        startDate: (now) => {
            return now.add(-7, 'days');
        },
        endDate: (now) => {
            return now;
        }
    },

    '前30天': {
        startDate: (now) => {
            return now.add(-30, 'days');
        },
        endDate: (now) => {
            return now;
        }
    }
}