const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const N = Number(input);

const dp = [N];

let isOk = true;
let idx = 1;
while (isOk) {
  if (N === 1) {
    console.log(1);
    isOk = false;
    break;
  }
  if (dp[idx - 1] - idx >= 0) {
    dp.push(dp[idx - 1] - idx);
  } else {
    dp.push(dp[idx - 1]);
    console.log(dp.length - 2);
    isOk = false;
  }
  idx++;
}
