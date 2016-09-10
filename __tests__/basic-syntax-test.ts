/// <reference path="../typings/jest/jest.d.ts" />

describe('TypeScript', function() {
  describe('let', function() {
    it('use instead of var', function() {
      let x = 1;
      expect(x).toEqual(1);
    });

    it('assign in block scope not function scope', function() {
      let x = 2;
      if (true) {
        x = 1;
      }
      expect(x).toEqual(1);
    });
  });

  describe('const', function() {
    it('cannot reassign twice', function() {
      const CONSTANT = 1;
      // CONSTANT = 2;
    });
  });

  describe('type', function() {
    it('is number', function() {
      let x: number = 0;
      expect(x).toEqual(0);
    });

    it('is string', function() {
      let word: string = 'Hello TypeScript';
      expect(word).toEqual('Hello TypeScript');
    });

    describe('template string', function() {
      it('use for make string multiple line', function() {
        let word: string = `Line 1
Line 2`;
        expect(word).toEqual('Line 1\nLine 2');
      });

      it('use for embed variable to string', function() {
        let luckyNumber: number = 7;
        let word: string = `lucky number is ${luckyNumber}`;
        expect(word).toEqual('lucky number is 7');
      });
    });

    it('is boolean', function() {
      let tf: boolean = true;
      expect(tf).toEqual(true);
    });

    describe('array', function() {
      it('use type Array<type> for assign array', function() {
        let numbers: Array<number | string> = [1, 2, 3, 'text'];
      });

      it('can use <type>[] instead of Array', function() {
        let numbers: number[] = [1, 2, 3];
      });
    });

    describe('any', function() {
      it('can assign any type to variable', function() {
        let x: any = 1;
        x = 'text'
        expect(x).toEqual('text');
      });

      it('implicit type any by default', function() {
        let x: any = 1; // if not define any compile will error
        x = 'text';
        expect(x).toEqual('text');
      });
    });
  });

  describe('function', function() {
    describe('syntax', function() {
      it('use function keyword to declare function', function() {
        function something() {
          return 'word';
        }

        expect(something()).toEqual('word');
      });

      it('can declare type', function() {
        function something(): string { // can be multi type return by :string | number
          return 'word';
        }

        expect(something()).toEqual('word');
      });
    });

    describe('anonymous function', function() {
      it('declare with () =>', function() {
        // const something = () => string = (): string => 'word';
        const something = () => 'word';
        expect(something()).toEqual('word');
      });
    });
  });

  describe('union', function() {
    function padLeft(value: string, padding: any) {
      if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
      }
      if (typeof padding === "string") {
        return padding + value;
      }
      throw new Error(`Expected string or number, got '${padding}'.`); // remove this when change padding type to number | string
    }

    describe('with padLeft example', function() {
      it('should padding 4 space when input padding with type number', function() {
        expect(padLeft('hello world', 4)).toEqual('    hello world');
      });

      it('should padding with character when input padding with type string', function() {
        expect(padLeft('hello world', '\n')).toEqual('\nhello world');
      });

      it('should throw error when input padding with other type', function() {
        function padLeftError() {
          padLeft('hello world', true);
        }
        expect(padLeftError).toThrow(new Error("Expected string or number, got 'true'."));
      });
    });
  });
});
