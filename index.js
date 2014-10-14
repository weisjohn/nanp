
function strip(str) {
    return (str || "")
        // remove parenthesis, dashes, dots
        .replace(/[\-\(\)\. ]/g, "")
        // remove leading `1` or `+1` only on strings longer than 10 digits
        .replace(/^(\+)?(1)([0-9]{10,})/, "$3")
}

var nanp = /^\(?([2-9][0-9]{2})\)?([2-9](?!11)[0-9]{2})?([0-9]{4})$/

module.exports = function(str) {
    if (!str) return false;
    return nanp.test(strip(str));
}

module.exports.strip = strip;
