
var assert = require('assert');
var nanp = require('../');

// test the strip function
assert.strictEqual("1234567890", nanp.strip("(123) 456-7890"));
assert.strictEqual("1234567890", nanp.strip("123.456.7890"));

// test the valids
var valid = require('./valid').numbers;
for (var i = 0; i < valid.length; i++) {
    assert.equal(true, nanp(valid[i]));
}

// test the invalids
var invalid = require('./invalid').numbers;
for (var i = 0; i < invalid.length; i++) {
    assert.equal(false, nanp(invalid[i]));
}


// test undefined
assert.equal(false, nanp());