
require('./string-based');


const DependentTypes = require('..');

Object.keys(DependentTypes).map(prop => {
    console.log(`DependentTypes.${prop}:`, Object.keys(DependentTypes[prop]));
});

console.log('DependentTypes done!');
