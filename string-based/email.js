
const StringBased = require('./index');

module.exports = StringBased.create({
    regexp: /.+@.+/gmi, // TODO: improve
});