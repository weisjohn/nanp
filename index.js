
function strip(str) {
    return (str || "")
        // remove parenthesis, dashes, dots, spaces
        .replace(/[\-\(\)\. ]/g, "")
        // remove leading `1` or `+1` only on strings longer than 10 digits
        .replace(/^(\+)?(1)([0-9]{10,})/, "$3")
}

var reg = /^\(?([2-9][0-9]{2})\)?([2-9](?!11)[0-9]{2})?([0-9]{4})$/;
function nanp(str) {
    if (!str) return false;
    return reg.test(strip(str));
}

module.exports = nanp;
module.exports.strip = strip;
