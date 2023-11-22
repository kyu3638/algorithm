const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const n = Number(input.shift());
const arr = input
  .shift()
  .split(' ')
  .map(v => Number(v));
const dp = [...Array(n)].map(v => 0);

for (let i = 0; i < n; i++) {
  let max = 0;
  let maxIndex = -1;
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && dp[j] > max) {
      max = dp[j];
      maxIndex = j;
    }
  }
  if (maxIndex !== -1) {
    dp[i] = dp[maxIndex] + arr[i];
  } else {
    dp[i] = arr[i];
  }
}
console.log(Math.max(...dp));
