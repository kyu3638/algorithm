const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];

const start = {};
const end = {};
for (let i = 1; i <= 2 * n; i++) {
  if (i <= n) start[input[i]] = i;
  else end[input[i]] = i;
}
// a b c d e
// b e d a c

const answer = new Set();

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (start[input[i]] < start[input[j]] && end[input[i]] > end[input[j]]) answer.add(end[input[j]]);
  }
}

console.log(answer.size);
