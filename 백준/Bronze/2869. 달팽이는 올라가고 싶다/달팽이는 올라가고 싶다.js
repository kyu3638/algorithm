// const [A, B, V] = require('fs')
//   .readFileSync('2869.txt')
//   .toString()
//   .split(' ')
//   .map((v) => Number(v));
const [A, B, V] = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map((v) => Number(v));

console.log(Math.ceil((V - A) / (A - B)) + 1);
