
const assert = require('assert');
const Email = require('../../string-based/email');

describe('Email', function () {
    it('defined', function () {
        assert.equal(typeof Email, 'function');
        assert.equal(typeof Email.prototype, 'object', 'prototype is not defined');
    });

    it('has expected methods', function () {
        const instance = new Email();
        assert.equal(typeof instance.validate, 'function', 'validate is not defined');
    });

    describe('validate', function () {
        it('empty', function () {
            const instance = new Email();
            assert(instance.validate());
        });
    });
});
