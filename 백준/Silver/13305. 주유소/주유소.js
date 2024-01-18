const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const roads = input[1].split(' ').map(Number);
const prices = input[2].split(' ').map(Number);

let answer = 0;
let lowest = prices[0];

for (let i = 0; i < roads.length; i++) {
  if (prices[i] < lowest) {
    lowest = prices[i];
  }
  answer += lowest * roads[i];
}

console.log(answer);
