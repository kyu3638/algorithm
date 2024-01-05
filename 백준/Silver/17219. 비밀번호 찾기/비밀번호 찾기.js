const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const obj = {};
for (let i = 1; i <= N; i++) {
  const [site, pw] = input[i].split(' ');
  obj[site] = pw;
}

const answer = [];
for (let i = N + 1; i < N + M + 1; i++) {
  answer.push(obj[input[i]]);
}

console.log(answer.join('\n'));
