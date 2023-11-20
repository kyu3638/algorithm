const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();

const N = Number(input);
const dp = [...Array(N + 1)].map(v => 5000);
dp[3] = 1;
dp[5] = 1;

for (let i = 6; i <= N; i++) {
  if (dp[i - 3] !== 5000 || dp[i - 5] !== 5000) {
    dp[i] = 1 + Math.min(dp[i - 3], dp[i - 5]);
  }
}
const answer = dp[N] === 5000 ? -1 : dp[N];

console.log(answer);
