const filePath = process.platform === 'linux' ? '/dev/stdin' : './11727.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

const n = Number(input);

answer = [...Array(n + 1).fill(0)];

function dp(n) {
  if (n === 1) return 1;
  if (n === 2) return 3;
  if (answer[n] !== 0) return answer[n];
  return (answer[n] = (dp(n - 1) + dp(n - 2) * 2) % 10007);
}

console.log(dp(n));
