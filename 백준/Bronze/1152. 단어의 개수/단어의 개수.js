// let input = require('fs').readFileSync('1152.txt').toString().trim().split(' ');
let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split(' ');

console.log(input[0] === '' ? 0 : input.length);
