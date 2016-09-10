"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Captcha = (function () {
    function Captcha() {
        this.numberStrings = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        this.operators = { 1: '+', 2: '-', 3: '*' };
    }
    Captcha.prototype.generate = function (pattern, left, right, operator) {
        var leftOperand;
        var rightOperand;
        var operatorOperand = new OperatorOperand(operator);
        if (pattern === 1) {
            leftOperand = new NumberOperand(left);
            rightOperand = new TextOperand(right);
        }
        else if (pattern === 2) {
            leftOperand = new TextOperand(left);
            rightOperand = new NumberOperand(right);
        }
        return leftOperand.toText() + " " + operatorOperand.toText() + " " + rightOperand.toText();
    };
    Captcha.prototype.patternOne = function (left, right, operator) {
        return left + " " + this.operators[operator] + " " + this.numberStrings[right];
    };
    Captcha.prototype.patternTwo = function (left, right, operator) {
        return this.numberStrings[left] + " " + this.operators[operator] + " " + right;
    };
    return Captcha;
}());
exports.Captcha = Captcha;
var Operand = (function () {
    function Operand(n) {
        this.n = n;
    }
    Operand.prototype.toText = function () { return ''; };
    return Operand;
}());
var TextOperand = (function (_super) {
    __extends(TextOperand, _super);
    function TextOperand(n) {
        _super.call(this, n);
        this.numberStrings = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        this.n = n;
    }
    TextOperand.prototype.toText = function () {
        return "" + this.numberStrings[this.n];
    };
    return TextOperand;
}(Operand));
var NumberOperand = (function (_super) {
    __extends(NumberOperand, _super);
    function NumberOperand(n) {
        _super.call(this, n);
        this.n = n;
    }
    NumberOperand.prototype.toText = function () {
        return "" + this.n;
    };
    return NumberOperand;
}(Operand));
var OperatorOperand = (function () {
    function OperatorOperand(n) {
        this.operators = { 1: '+', 2: '-', 3: '*' };
        this.n = n;
    }
    OperatorOperand.prototype.toText = function () {
        return this.operators[this.n];
    };
    return OperatorOperand;
}());
// export class Captcha {
//   numberStrings: string[];
//   operators: any;
//   constructor() {
//     this.numberStrings = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
//     this.operators = { 1: '+', 2: '-', 3: '*' };
//   }
//   generate (pattern: number, left: number, right: number, operator: number) {
//     if (pattern === 1) {
//       return this.patternOne(left, right, operator);
//     } else if (pattern === 2) {
//       return this.patternTwo(left, right, operator);
//     }
//   }
//   patternOne(left: number, right: number, operator: number) {
//     return `${left} ${this.operators[operator]} ${this.numberStrings[right]}`
//   }
//   patternTwo(left: number, right: number, operator: number) {
//     return `${this.numberStrings[left]} ${this.operators[operator]} ${right}`
//   }
// }
