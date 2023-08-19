// let input = require('fs').readFileSync('2908.txt').toString().split(' ');
let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let num1 = [];
num1.push(input[0][2]);
num1.push(input[0][1]);
num1.push(input[0][0]);

let num2 = [];
num2.push(input[1][2]);
num2.push(input[1][1]);
num2.push(input[1][0]);

console.log(
  Number(num1.join('')) > Number(num2.join('')) ? num1.join('') : num2.join('')
);
