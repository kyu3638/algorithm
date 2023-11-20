const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input.shift());
const prices = input
  .shift()
  .split(' ')
  .map(v => Number(v));
// index관리 편의를 위해 삽입
prices.unshift(0);

const dp = [...Array(N + 1)].map(v => 0);
for (let i = 1; i < N + 1; i++) {
  for (let j = 0; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + prices[j]);
  }
}
console.log(dp[N]);
