const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
let dp = input.slice(1).map(v => v.split(' ').map(v => +v));

for (let i = 1; i < N; i++) {
  dp[i][0] += Math.min(dp[i - 1][1], dp[i - 1][2]);
  dp[i][1] += Math.min(dp[i - 1][0], dp[i - 1][2]);
  dp[i][2] += Math.min(dp[i - 1][0], dp[i - 1][1]);
}

const result = Math.min(...dp[N - 1]);

console.log(result);
