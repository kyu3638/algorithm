const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input
  .shift()
  .split(' ')
  .map(v => Number(v));

const lectures = input
  .shift()
  .split(' ')
  .map(v => Number(v));

// 동영상 중 가장 작은 크기
let start = Math.min(...lectures);
// 모든 동영상의 크기 합
let end = lectures.reduce((acc, cur) => acc + cur);

let minSize = end;

while (start <= end) {
  // start와 end의 평균 값 mid 정도로 블루레이 크기를 잡는다고 가정
  let mid = Math.floor((start + end) / 2);
  // mid에 가깝게 조합하는 경우 몇 개의 블루레이가 생기는지 확인할 변수
  let count = 0;
  let sum = 0;
  let maxSum = 0;

  for (const lecture of lectures) {
    if (sum + lecture > mid) {
      maxSum = Math.max(maxSum, sum);
      count++;
      sum = lecture;
    } else {
      sum += lecture;
    }
  }
  if (sum > 0) {
    maxSum = Math.max(maxSum, sum);
    count++;
  }
  // 카운트가 M보다 크다면 너무 잘게 잘라진 것이므로 최소 크기는 mid+1 ~ end 사이에 있을 것
  if (count > M) {
    start = mid + 1;
  } else {
    minSize = Math.min(minSize, maxSum);
    end = mid - 1;
  }
}

console.log(minSize);
