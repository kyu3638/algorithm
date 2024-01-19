const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [n, target] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

let left = 0;
let right = Math.max(...trees);
let answer = 0;
while (left <= right) {
  let mid = Math.floor((left + right) / 2);

  let sum = 0;
  for (const tree of trees) {
    sum += tree - mid > 0 ? tree - mid : 0;
  }

  if (sum === target) {
    answer = mid;
    break;
  }
  // sum이 target보다 크면 더 높은 곳에서 잘라야 함
  else if (sum > target) {
    left = mid + 1;
    answer = mid;
  }
  // sum이 target보다 작으면 더 낮게 잘라야 함
  else {
    right = mid - 1;
  }
}

console.log(answer);
