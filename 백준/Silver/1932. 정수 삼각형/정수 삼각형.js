const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input.shift());

const triangle = input.map(v => v.split(' ').map(a => Number(a)));

function solution() {
  if (N === 1) return triangle[0][0];
  else if (N === 2) return triangle[0][0] + Math.max(...triangle[1]);
  for (let i = N - 2; i >= 0; i--) {
    triangle[i].forEach((num, idx, origin) => {
      origin[idx] = num + Math.max(triangle[i + 1][idx], triangle[i + 1][idx + 1]);
    });
  }
  return triangle[0][0];
}
console.log(solution());
