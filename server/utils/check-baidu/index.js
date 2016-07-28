var ipListOrigin = require('./internalIP.json');
var ipList = loadIPList();

function loadIPList() {
    return ipListOrigin.map(function (pair) {
        return [ip2long(pair.start), ip2long(pair.end)];
    });
}

module.exports = function matchIP(ip) {
    var ipLong = ip2long(ip);
    if (!ipLong) {
        return false;
    }
    for (var i = 0; i < ipList.length; i++) {
        var pair = ipList[i];
        if (pair[0] <= ipLong && pair[1] >= ipLong) {
            return true;
        }
    }
    return false;
}

function ip2long(ipAddress) {
    if (!checkIp(ipAddress)) {
        return false;
    } // invalid IP address
    var parts = ipAddress.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
    return parts ? parts[1] * 16777216 + parts[2] * 65536 + parts[3] * 256 + parts[4] * 1 : false;
}

function checkIp(ip) {
    if (typeof ip !== 'string') {
        return false;
    } // only do strings
    return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ip);
}