# nanp

Test if a string is a North American Number Plan (phone) number.

### usage

```javascript
var nanp = require('nanp');

nanp("(937) 252 1234");         // returns true
nanp("1 (937) 252 1234");       // returns true
nanp("937.252.1234");           // returns true
nanp("1.937.252.1234");         // returns true
nanp("9372521234");             // returns true
nanp("19372521234");            // returns true

nanp("234-911-5678");           // returns false
nanp("123-234-5678");           // returns false
nanp("911");                    // returns false

```

You can also use `nanp`'s internal `strip` function to clean strings, removing formatting as well as the country code "1" or "+1":

```javascript
var clean = nanp.strip("1 (937) 252 1234"); // -> 9372521234
```

Learn more: http://en.wikipedia.org/wiki/North_American_Numbering_Plan

