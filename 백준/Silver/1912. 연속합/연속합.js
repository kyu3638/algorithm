const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const n = Number(input.shift());
const nums = input
  .shift()
  .split(' ')
  .map(v => Number(v));

const dp = [...Array(n)].map(v => 0);
dp[n - 1] = nums[n - 1];

for (let i = n - 2; i >= 0; i--) {
  dp[i] = Math.max(nums[i], nums[i] + dp[i + 1]);
}

console.log(Math.max(...dp));
