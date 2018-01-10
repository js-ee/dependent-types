# Dependent types library

```
const DependentTypes = require('dependent-types');
const DepString = DependentTypes.String({
    min: 2,
    max: 10,
    allow: [null],
    default: null,
});

let s1 = DepString('Hello!');   // 'Hello'
let s2 = DepString();   // null
let s3 = DepString('Some long string...'); // Exception
```

```
const DependentTypes = require('dependent-types');
const Email = DependentTypes.String({
    regexp: /.+@.+/gmi,
});

let s1 = DepString('my@email.com'); // 'my@email.com'
let s3 = DepString('Other string'); // Exception
```


