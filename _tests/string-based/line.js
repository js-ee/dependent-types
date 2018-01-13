
const assert = require('assert');
const Line = require('../../string-based/line');

describe('Line', function () {
    it('defined', function () {
        assert.equal(typeof Line, 'function');
        assert.equal(typeof Line.prototype, 'object', 'prototype is not defined');
    });

    it('constructor name defined', function () {
        assert.equal(Line.name, 'Line');
    });

    it('equal to string', function () {
        const str = 'some line';
        const instance = new Line(str);
        assert.equal(instance, str);
    });

    it('has expected methods', function () {
        const instance = new Line();
        assert.equal(typeof instance.validate, 'function', 'validate is not defined');
    });

    describe('validate', function () {
        it('empty', function () {
            assert((new Line()).validate());
        });

        it('valid', function () {
            assert((new Line('line 1')).validate());
        });

        it('invalid', function () {
            assert(!(new Line('line 1\nline 2')).validate());
            assert(!(new Line('line 1\rline 2')).validate());
        });
    });
});
