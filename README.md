# Dependent types library

```javascript
const StringBased = require('dependent-types/string-based');
const Line = StringBased.create({
    singleLine: true,
}, 'Line');

const line = new Line('some text');
line.validate(); // true
```

```javascript
const StringBased = require('dependent-types/string-based');
const Email = StringBased.create({
    regexp: /^[a-zA-Z0-9\._\-]+@[a-zA-Z0-9\._\-]+\.[a-zA-Z0-9\._\-]+$/,
}, 'Email');

const email = new Email('email@example.com');
email.validate(); // true
```


