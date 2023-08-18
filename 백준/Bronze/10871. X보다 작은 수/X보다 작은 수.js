// let input = require('fs').readFileSync('10871.txt').toString().split('\n');
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const [T, X] = input[0].split(' ');

const numbers = input[1].split(' ');

const smallerNumbers = [];
for (let i = 0; i < T; i++) {
  if (parseInt(numbers[i]) < parseInt(X)) {
    smallerNumbers.push(numbers[i]);
  }
}

console.log(smallerNumbers.join(' '));
