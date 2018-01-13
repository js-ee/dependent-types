
const renameFunction = require('../utils/rename_function');

function create (options) {
    const Cls = renameFunction('StringBased', function (...args) {
        return String.apply(this, [args]);
    });
    Cls.prototype.validate = function valudate () {
        return true;
    };
    return Cls;
}

function define (name, ...args) {
    exports[name] = create(...args);
}

exports.create = create;
exports.define = define;

exports.Email = require('./email');
