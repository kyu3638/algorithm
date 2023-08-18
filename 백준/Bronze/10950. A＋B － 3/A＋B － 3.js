// let input = require('fs').readFileSync('10950.txt').toString().split('\n');
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

// console.log(input);

let T = parseInt(input[0]);
// console.log(T);

let numbers = [];

for (let i = 1; i < input.length; i++) {
  numbers.push(input[i].split(' '));
}

// console.log(numbers);

for (let i = 0; i < T; i++) {
  const a = parseInt(numbers[i][0]);
  const b = parseInt(numbers[i][1]);
  console.log(a + b);
}
