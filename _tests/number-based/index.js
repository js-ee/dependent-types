
const DependentTypes = require('../..');

Object.keys(DependentTypes.NumberBased).map(prop => {
    console.log(`DependentTypes.NumberBased.${prop}:`, Object.keys(DependentTypes.NumberBased[prop]));
});

console.log('NumberBased done!');

require('./positive');
