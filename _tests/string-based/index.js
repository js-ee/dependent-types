
const DependentTypes = require('../..');

Object.keys(DependentTypes.StringBased).map(prop => {
    console.log(`DependentTypes.StringBased.${prop}:`, Object.keys(DependentTypes.StringBased[prop]));
});

console.log('StringBased done!');

require('./email');
