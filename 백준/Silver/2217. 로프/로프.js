const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const rope = input.map((v) => Number(v)).sort((a, b) => b - a);
rope.unshift(0);

const dp = [...Array(N + 1).fill(0)];

for (let i = 1; i <= N; i++) {
  dp[i] = rope[i] * i;
}

console.log(Math.max(...dp));
