const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const A = input
  .shift()
  .split(' ')
  .map((v) => Number(v))
  .sort((a, b) => a - b);
const B = input
  .shift()
  .split(' ')
  .map((v) => Number(v))
  .sort((a, b) => b - a);

const dp = [...Array(N).fill(0)];

for (let i = 0; i < N; i++) {
  if (i === 0) {
    dp[i] = A[0] * B[0];
    continue;
  }
  dp[i] = dp[i - 1] + A[i] * B[i];
}

console.log(dp[N - 1]);
