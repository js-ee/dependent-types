
const renameFunction = require('../utils/rename_function');

function create (options={}, name='StringBased') {
    const {
        min,
        max,
        regexp,
        singleLine,
        validate,
    } = options;

    const Cls = renameFunction(name, function (str) {
        String.call(this, str);
        this.__value = str;
        return this;
    });

    Cls.prototype.toString = function toString () {
        return this.__value;
    };

    if (validate) {
        Cls.prototype.validate = validate;
    } else {
        Cls.prototype.validate = function validate () {
            const val = this.toString();
            if (regexp && !regexp.test(val)) return false;
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
