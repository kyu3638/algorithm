const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map(v => Number(v));

const N = input.shift();
const dp = [...Array(Math.max(...input) + 1)].map(v => 0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i < Math.max(...input) + 1; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

for (let i = 0; i < N; i++) {
  console.log(dp[input[i]]);
}
