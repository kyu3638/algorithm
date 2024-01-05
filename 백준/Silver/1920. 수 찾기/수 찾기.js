const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const arr1 = input[1].split(' ').map(Number);
const arr2 = input[3].split(' ').map(Number);

const obj = {};

for (const num of arr1) {
  obj[num] = true;
}

const answer = [];
for (const num of arr2) {
  if (obj[num] === true) answer.push(1);
  else answer.push(0);
}

console.log(answer.join('\n'));
