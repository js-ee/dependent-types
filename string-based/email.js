
const StringBased = require('./index');

module.exports = StringBased.create({
    regexp: /^[a-zA-Z0-9\._\-]+@[a-zA-Z0-9\._\-]+\.[a-zA-Z0-9\._\-]+$/,
}, 'Email');
