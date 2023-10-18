const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const sang = input
  .shift()
  .split(' ')
  .map((v) => Number(v))
  .sort((a, b) => a - b);
const M = Number(input.shift());
const cards = input
  .shift()
  .split(' ')
  .map((v) => Number(v));

function binarySearch(arr, num) {
  let pl = 0;
  let pr = arr.length - 1;

  while (pl <= pr) {
    let mid = Math.floor((pl + pr) / 2);

    if (arr[mid] < num) {
      pl = mid + 1;
    } else if (arr[mid] > num) {
      pr = mid - 1;
    } else if (arr[mid] === num) {
      return 1;
    }
  }
  return 0;
}

const answer = [];
for (let i = 0; i < M; i++) {
  answer.push(binarySearch(sang, cards[i]));
}
console.log(...answer);
