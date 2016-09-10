/// <reference path="../typings/jest/jest.d.ts" />
import {Captcha} from '../src/captcha'
describe('Captcha', () => {
  
  describe('pattern 1', () => {
    it('should be "1 + Two" when left=1, right=2, operator=1', () => {
      var captcha = new Captcha();
      expect(captcha.generate(1,1,2,1)).toEqual('1 + Two')
    })

    it('should be "1 + Three" when left=1, right=3, operator=1', () => {
      var captcha = new Captcha();
      expect(captcha.generate(1,1,3,1)).toEqual('1 + Three')
    })

    it('should be "1 - Four" when left=1, right=3, operator=2', () => {
      var captcha = new Captcha();
      expect(captcha.generate(1,1,3,2)).toEqual('1 - Three')
    })

    it('should be "1 * Four" when left=1, right=3, operator=3', () => {
      var captcha = new Captcha();
      expect(captcha.generate(1,1,3,3)).toEqual('1 * Three')
    })
  });
    
  describe('pattern 2', () => {
    it('should be "One + 2" when left=1, right=2, operator=1', () => {
      var captcha = new Captcha();
      expect(captcha.generate(1,1,2,1)).toEqual('1 + Two')
    })

    it('should be "One + 3" when left=1, right=3, operator=1', () => {
      var captcha = new Captcha();
      expect(captcha.generate(1,1,3,1)).toEqual('1 + Three')
    })
    
  });
});
  