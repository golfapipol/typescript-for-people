import {Captcha} from './captcha';
const left = document.querySelector('input[name=left]');
const right = document.querySelector('input[name=right]')
const operator = document.querySelector('input[name=operator]')
const pattern = document.querySelector('input[name=pattern]')
document.querySelector('button').addEventListener('click', () => {
  
  alert(new Captcha().generate(
    parseInt(left.nodeValue, 10),
    parseInt(right.nodeValue, 10),
    parseInt(operator.nodeValue, 10),
    parseInt(pattern.nodeValue, 10)));
})