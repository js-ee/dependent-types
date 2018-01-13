
const renameFunction = require('../utils/rename_function');

function create (options = {}, name='StringBased') {
    const {
        min,
        max,
        regexp,
        singleLine,
        validate,
    } = options;

    const Cls = renameFunction(name, function (...args) {
        return String.apply(this, [args]);
    });

    if (validate) {
        Cls.prototype.validate = validate;
    } else {
        Cls.prototype.validate = function validate () {
            console.log('validate >>>', this, regexp);
            if (regexp && regexp.test(this)) return false;
            return true;
        };
    }

    return Cls;
}

function define (name, ...args) {
    exports[name] = create(...args);
}

exports.create = create;
exports.define = define;

exports.Email = require('./email');
