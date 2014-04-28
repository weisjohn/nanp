# nanp

Test if a string is a North American Number Plan (phone) number.

### usage

```javascript
var nanp = require('nanp');

nanp("(937) 252 1234");         // returns true
nanp("937.252.1234");           // returns true
nanp("9372521234");             // returns true

nanp("234-911-5678");           // returns false
nanp("123-234-5678");           // returns false
nanp("911");                    // returns false

```

Learn more: http://en.wikipedia.org/wiki/North_American_Numbering_Plan