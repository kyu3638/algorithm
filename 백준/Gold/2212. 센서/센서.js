const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// 고속도로에 n개의 센서
// k개의 집중국
const N = +input[0];
const K = +input[1];

const arr = input[2]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const minus = [];
for (let i = 0; i < arr.length - 1; i++) {
  minus.push(arr[i + 1] - arr[i]);
}
minus.sort((a, b) => b - a);

console.log(minus.slice(K - 1).reduce((acc, cur) => acc + cur, 0));
