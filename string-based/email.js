
const StringBased = require('./index');

console.log(StringBased);

module.exports = new StringBased({
    regexp: /.+@.+/gmi, // TODO: improve
});
