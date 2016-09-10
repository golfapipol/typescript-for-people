"use strict";
/// <reference path="../typings/jest/jest.d.ts" />
var captcha_1 = require('../src/captcha');
describe('Captcha', function () {
    describe('pattern 1', function () {
        it('should be "1 + Two" when left=1, right=2, operator=1', function () {
            var captcha = new captcha_1.Captcha();
            expect(captcha.generate(1, 1, 2, 1)).toEqual('1 + Two');
        });
        it('should be "1 + Three" when left=1, right=3, operator=1', function () {
            var captcha = new captcha_1.Captcha();
            expect(captcha.generate(1, 1, 3, 1)).toEqual('1 + Three');
        });
        it('should be "1 - Four" when left=1, right=3, operator=2', function () {
            var captcha = new captcha_1.Captcha();
            expect(captcha.generate(1, 1, 3, 2)).toEqual('1 - Three');
        });
        it('should be "1 * Four" when left=1, right=3, operator=3', function () {
            var captcha = new captcha_1.Captcha();
            expect(captcha.generate(1, 1, 3, 3)).toEqual('1 * Three');
        });
    });
    describe('pattern 2', function () {
        it('should be "One + 2" when left=1, right=2, operator=1', function () {
            var captcha = new captcha_1.Captcha();
            expect(captcha.generate(1, 1, 2, 1)).toEqual('1 + Two');
        });
        it('should be "One + 3" when left=1, right=3, operator=1', function () {
            var captcha = new captcha_1.Captcha();
            expect(captcha.generate(1, 1, 3, 1)).toEqual('1 + Three');
        });
    });
});
