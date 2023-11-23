const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const n = Number(input.shift());
const arr = input
  .shift()
  .split(' ')
  .map(v => Number(v));
const dp = [...Array(n)].map(() => 0);
dp[0] = 1;

for (let i = 1; i < n; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (arr[i] < arr[j] && dp[j] > max) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));
