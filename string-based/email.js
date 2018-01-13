
const StringBased = require('./index');

module.exports = StringBased.create({
    regexp: /^[a-zA-Z0-9]+@.+$/gmi,
}, 'Email');
