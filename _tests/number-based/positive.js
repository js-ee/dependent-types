
const assert = require('assert');
const Positive = require('../../number-based/positive');

describe('Positive', function () {
    it('defined', function () {
        assert.equal(typeof Positive, 'function');
        assert.equal(typeof Positive.prototype, 'object', 'prototype is not defined');
    });

    it('constructor name defined', function () {
        assert.equal(Positive.name, 'Positive');
    });

    it('equal to number', function () {
        const str = 'name';
        const instance = new Positive(str);
        assert.equal(instance, str);
    });

    it('has expected methods', function () {
        const instance = new Positive();
        assert.equal(typeof instance.validate, 'function', 'validate is not defined');
    });

    describe('validate', function () {
        it('empty', function () {
            assert(!(new Positive()).validate());
        });

        it('valid', function () {
            assert((new Positive(1)).validate());
        });
    });
});
