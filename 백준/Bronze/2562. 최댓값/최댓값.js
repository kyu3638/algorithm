/* let input = require('fs')
  .readFileSync('2562.txt')
  .toString()
  .split('\n')
  .map((x) => Number(x)); */
let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((x) => Number(x));

let maxIndex = 0;
let maxNum = input[maxIndex];

let i = 1;
while (i < input.length) {
  if (input[maxIndex] < input[i]) {
    maxIndex = i;
    maxNum = input[i];
  }
  i += 1;
}

console.log(maxNum);
console.log(maxIndex + 1);
