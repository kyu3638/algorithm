const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const P = input
  .shift()
  .split(' ')
  .map((v) => Number(v));

P.sort((a, b) => a - b);
P.unshift(0);
const dp = [...Array(N + 1).fill(0)];

for (let i = 1; i <= N; i++) {
  dp[i] = dp[i - 1] + P[i];
}
console.log(dp.reduce((acc, cur) => acc + cur, 0));
