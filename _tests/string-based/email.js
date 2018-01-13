
const assert = require('assert');
const Email = require('../../string-based/email');

describe('Email', function () {
    it('defined', function () {
        assert.equal(typeof Email, 'function');
        assert.equal(typeof Email.prototype, 'object', 'prototype is not defined');
    });

    it('constructor name defined', function () {
        assert.equal(Email.name, 'Email');
    });

    it('equal to string', function () {
        const str = 'some@email.com';
        const instance = new Email(str);
        assert.equal(instance, str);
    });

    it('has expected methods', function () {
        const instance = new Email();
        assert.equal(typeof instance.validate, 'function', 'validate is not defined');
    });

    describe('validate', function () {
        it('empty', function () {
            assert(!(new Email()).validate());
        });

        it('valid', function () {
            assert((new Email('aaa@bbb.cc')).validate());
            assert((new Email('aa.a@bb-b.cc')).validate());
            assert((new Email('aa.a@bbb.cc.cc.cc')).validate());
            assert((new Email('222@bb_b.cc')).validate());
            assert((new Email('aaa@3-3_3.cc')).validate());
        });

        it('invalid', function () {
            assert(!(new Email('aa>a@bbb.cc')).validate());
            assert(!(new Email('aa@a@bbb.cc')).validate());
            assert(!(new Email('aa@bbb')).validate());
            assert(!(new Email('aa,a@bbb.cc')).validate());
            assert(!(new Email('aaa@bbb,cc')).validate());
            assert(!(new Email('aaa@bbb')).validate());
            assert(!(new Email('aaa.bbb.cc')).validate());
            assert(!(new Email('@bbb.cc')).validate());
            assert(!(new Email('aaa@')).validate());
            assert(!(new Email('^aaa@bbb.cc$')).validate());
            assert(!(new Email('\naaa@bbb.cc')).validate());
            assert(!(new Email('aaa@bbb.cc\n')).validate());
        });
    });
});
