/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var captcha_1 = __webpack_require__(1);
	document.querySelector('button').addEventListener('click', function () {
	    alert(new captcha_1.Captcha().generate(1, 1, 1, 1));
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
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
	var TextOperand = (function () {
	    function TextOperand(n) {
	        this.numberStrings = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
	        this.n = n;
	    }
	    TextOperand.prototype.toText = function () {
	        return "" + this.numberStrings[this.n];
	    };
	    return TextOperand;
	}());
	var NumberOperand = (function () {
	    function NumberOperand(n) {
	        this.n = n;
	    }
	    NumberOperand.prototype.toText = function () {
	        return "" + this.n;
	    };
	    return NumberOperand;
	}());
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


/***/ }
/******/ ]);