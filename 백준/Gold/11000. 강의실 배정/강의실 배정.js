const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const timeTable = [];
for (let i = 1; i <= N; i++) {
  const time = input[i].split(' ').map(Number);
  timeTable.push([time[0], 1]);
  timeTable.push([time[1], -1]);
}

timeTable.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

let answer = 0;
let result = 0;

for (let i = 0; i < timeTable.length; i++) {
  result += timeTable[i][1];
  answer = Math.max(result, answer);
}

console.log(answer);
