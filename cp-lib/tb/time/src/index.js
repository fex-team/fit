const getActureTime = function (nowTime) {
    var time = new Date(parseInt(nowTime, 10));
    var delay = (new Date().getTime() - time) / 1000;
    var result

    if (delay < 60) {
        result = {
            second: delay
        };
    }
    else if (delay >= 60 && delay < 3600) {
        result = {
            second: parseInt(delay % 60),
            minute: parseInt(delay / 60)
        }
    }
    else if (delay >= 3600 && delay < 86400) {
        result = {
            second: parseInt(delay % 3600 % 60),
            minute: parseInt(delay % 3600 / 3600),
            hour: parseInt((delay / 60 / 60), 10)
        }
    }
    else if (delay >= 86400 && delay < 2592000) {
        result = {
            second: parseInt(delay % 86400 % 3600 % 60),
            minute: parseInt(delay % 86400 % 3600 / 60),
            hour: parseInt(delay % 86400 / 3600),
            day: parseInt(delay / 86400)
        }
    }
    else if (delay >= 2592000 && delay < 31104000) {
        result = {
            second: parseInt(delay % 259200 % 86400 % 3600 % 60),
            minute: parseInt(delay % 259200 % 86400 % 3600 / 60),
            hour: parseInt(delay % 2592000 % 86400 / 3600),
            day: parseInt(delay % 2592000 / 86400),
            month: parseInt(delay / 259200)
        }
    }
    else if (delay >= 31104000) {
        result = {
            second: parseInt(delay % 31104000 % 2592000 % 86400 % 3600 % 60),
            minute: parseInt(delay % 31104000 % 2592000 % 86400 % 3600 / 60),
            hour: parseInt(delay % 31104000 % 2592000 % 86400 / 3600),
            day: parseInt(delay % 31104000 % 2592000 / 86400),
            month: parseInt(delay % 31104000 / 2592000),
            year: parseInt(delay / 31104000)
        }
    }

    return result
}

export default getActureTime