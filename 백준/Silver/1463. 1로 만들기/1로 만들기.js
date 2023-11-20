const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const N = Number(input);
const dp = [...Array(3 * N + 1)].map(v => 1000000);
dp[N] = 0;
for (let i = N - 1; i >= 1; i--) {
  dp[i] = 1 + Math.min(dp[i + 1], dp[2 * i], dp[3 * i]);
}
console.log(dp[1]);
