
function create (options={}, name='NumberBased') {
    const {
        min,
        max,
        more,
        less,
        integer,
        denyNaN,
        denyInfinity,
        validate,
    } = options;

    const Cls = function classConstructor (str) {
        this.name = name;
        Number.call(this, str);
        this.__value = str;
        return this;
    };

    Object.defineProperty(Cls, 'name', {
        value: name,
        writable: false
    });

    Cls.prototype.valueOf = function valueOf () {
        return this.__value;
    };

    if (validate) {
        Cls.prototype.validate = validate;
    } else {
        Cls.prototype.validate = function validate () {
            const val = this.valueOf();
            if (denyNaN && isNaN(this)) return false;
            if (denyInfinity && !isFinite(val)) return false;
            if ('number' === typeof min && val < min) return false;
            if ('number' === typeof max && val > max) return false;
            if ('number' === typeof more && val <= more) return false;
            if ('number' === typeof less && val >= less) return false;
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

exports.Positive = require('./positive');
