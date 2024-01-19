const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// K개의 랜선 갖고 있음, 길이는 제각각
// N개의 같은 길이의 랜선으로 만들고 싶음
// N개보다 많이 만드는 것도 N개를 만드는 것에 포함된다.

const [k, target] = input[0].split(' ').map(Number);
const lines = [];
for (let i = 1; i <= k; i++) {
  lines.push(+input[i]);
}

let left = 0;
let right = Math.max(...lines);
let answer = 0;
while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  let sum = lines.reduce((acc, cur) => {
    return acc + Math.floor(cur / mid);
  }, 0);

  if (sum < target) {
    right = mid - 1;
  } else {
    left = mid + 1;
    answer = mid;
  }
}

console.log(answer);
