const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// 홍익이는 조카들에게 과자를 나눠주는데,
// 과자를 먹는동안 떼를 쓰지 않기 때문에 최대한 긴 과자를 나눠주려고 한다.
// 반드시 모든 조카들에게 같은 길이의 막대 과자를 나눠주어야 한다.
// M명의 조카들, N개의 과자가 있을 때 조카 1명에게 줄 수 있는 막대 과자의 최대 길이를 구하라

const [nephew, quantity] = input.shift().split(' ').map(Number);
const snacks = input
  .shift()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = snacks[snacks.length - 1];
let mid;
let count = 0;
while (start <= end) {
  mid = Math.floor((start + end) / 2);
  count = 0;
  for (const snack of snacks) {
    count += Math.floor(snack / mid);
  }
  if (count >= nephew) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(end);
