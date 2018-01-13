
const assert = require('assert');
const Tweet = require('../../string-based/tweet');

describe('Tweet', function () {
    it('defined', function () {
        assert.equal(typeof Tweet, 'function');
        assert.equal(typeof Tweet.prototype, 'object', 'prototype is not defined');
    });

    it('constructor name defined', function () {
        assert.equal(Tweet.name, 'Tweet');
    });

    it('equal to string', function () {
        const str = 'name';
        const instance = new Tweet(str);
        assert.equal(instance, str);
    });

    it('has expected methods', function () {
        const instance = new Tweet();
        assert.equal(typeof instance.validate, 'function', 'validate is not defined');
    });

    describe('validate', function () {
        it('empty', function () {
            assert(!(new Tweet()).validate());
        });

        it('valid', function () {
            assert((new Tweet('some text')).validate());
        });

        it('too short', function () {
            assert(!(new Tweet('a')).validate());
        });

        it('too long', function () {
            assert(!(new Tweet(`
            12345678901234567890123456789012345678901234567890
            12345678901234567890123456789012345678901234567890
            12345678901234567890123456789012345678901234567890
            12345678901234567890123456789012345678901234567890
            12345678901234567890123456789012345678901234567890
            12345678901234567890123456789012345678901234567890
            12345678901234567890123456789012345678901234567890
            `)).validate());
        });
    });
});
