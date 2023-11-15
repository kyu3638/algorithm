const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = Number(input.shift());
let repeated = 0;
while (repeated < T) {
  input.shift();
  const num1Arr = input
    .shift()
    .split(' ')
    .map(v => Number(v))
    .sort((a, b) => a - b);
  input.shift();
  const num2Arr = input
    .shift()
    .split(' ')
    .map(v => Number(v));
  const answer = [];
  num2Arr.forEach(target => {
    let start = 0;
    let end = num1Arr.length - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (num1Arr[mid] === target) {
        answer.push(1);
        break;
      } else if (num1Arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
      if (start > end) {
        answer.push(0);
        break;
      }
    }
  });
  console.log(answer.join('\n'));
  repeated++;
}
