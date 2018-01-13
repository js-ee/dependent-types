
function create (options={}, name='StringBased') {
    const {
        min,
        max,
        regexp,
        singleLine,
        validate,
    } = options;

    const Cls = function classConstructor (str) {
        this.name = name;
        String.call(this, str);
        this.__value = str;
        return this;
    };

    Object.defineProperty(Cls, 'name', {
        value: name,
        writable: false
    });

    Cls.prototype.toString = function toString () {
        return this.__value;
    };

    if (validate) {
        Cls.prototype.validate = validate;
    } else {
        Cls.prototype.validate = function validate () {
            const val = this.toString();
            if ('number' === typeof min && (!val || val.length < min)) return false;
            if ('number' === typeof max && val && val.length > max) return false;
            if (singleLine && val && (val.indexOf('\n') !== -1 || val.indexOf('\r') !== -1)) return false;
            if (regexp && !regexp.test(val)) return false;
            return true;
        };
    }

    return Cls;
}

function define (name, ...args) {
    return exports[name] = create(...args);
}

exports.create = create;
exports.define = define;

exports.Email = require('./email');
exports.Line = require('./line');
exports.Tweet = require('./tweet');
