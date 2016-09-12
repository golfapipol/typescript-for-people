"use strict";
var captcha_1 = require('./captcha');
var left = document.querySelector('input[name=left]');
var right = document.querySelector('input[name=right]');
var operator = document.querySelector('input[name=operator]');
var pattern = document.querySelector('input[name=pattern]');
document.querySelector('button').addEventListener('click', function () {
    alert(new captcha_1.Captcha().generate(parseInt(left.nodeValue, 10), parseInt(right.nodeValue, 10), parseInt(operator.nodeValue, 10), parseInt(pattern.nodeValue, 10)));
});
