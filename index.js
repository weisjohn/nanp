
function strip(str) {
    return (str || "").replace(/[\-\(\)\. ]/g, "");
}

var nanp = /^\(?([2-9][0-9]{2})\)?([2-9](?!11)[0-9]{2})?([0-9]{4})$/

module.exports = function(str) {
    if (!str) return false;
    return nanp.test(strip(str));
}

module.exports.strip = strip;
