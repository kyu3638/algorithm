const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');
const cities = Number(input.shift());
const budget = input
  .shift()
  .split(' ')
  .map(v => Number(v))
  .sort((a, b) => a - b);
const totalBudget = Number(input.shift());

let start = 1;
let end = budget[budget.length - 1];
let mid;
let tempAnswer = 0;
while (start <= end) {
  mid = Math.floor((start + end) / 2);
  const sum = budget.reduce((acc, cur) => acc + (cur <= mid ? cur : mid), 0);
  if (sum <= totalBudget) {
    start = mid + 1;
    tempAnswer = mid;
  } else {
    end = mid - 1;
  }
}

console.log(tempAnswer);
